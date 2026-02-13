import type { CostModel, VolumeTier } from "@/data/ops-cost-defaults";

// ── Result types ──────────────────────────────────────────────

export interface CostBreakdown {
  fixedCosts: number;
  variableCosts: number;
  stepCosts: number;
  totalCost: number;
  costPerOrder: number;
  margin: number;
  marginDollars: number;
  revenue: number;
  warehouseUtilization: number;
  laborUtilization: number;
  triggeredSteps: { descriptionKey: string; cost: number }[];
  activeShippingRate: number;
  activePackagingRate: number;
  effectiveFTECount: number;
  effectiveWarehouseCapacity: number;
}

export interface CostCurvePoint {
  volume: number;
  costPerOrder: number;
  totalCost: number;
  margin: number;
}

// ── Helpers ───────────────────────────────────────────────────

function getTieredRate(tiers: VolumeTier[], volume: number): number {
  let rate = tiers[0]?.rate ?? 0;
  for (const tier of tiers) {
    if (volume >= tier.minVolume) rate = tier.rate;
  }
  return rate;
}

// ── Core computation ──────────────────────────────────────────

export function computeCostBreakdown(
  model: CostModel,
  volume: number
): CostBreakdown {
  // Fixed
  const fixed =
    model.warehouseLease +
    model.equipment +
    model.utilities +
    model.management;

  // Variable (with volume-discount tiers)
  const shippingRate = getTieredRate(model.shippingTiers, volume);
  const packagingRate = getTieredRate(model.packagingTiers, volume);
  const returnsCostAvg =
    model.returnsCostPerOrder * (model.returnsRate / 100);
  const variablePerOrder =
    model.laborPerOrder + shippingRate + packagingRate + returnsCostAvg;
  const variable = volume * variablePerOrder;

  // Step-function costs
  let stepTotal = 0;
  const triggered: { descriptionKey: string; cost: number }[] = [];
  let additionalFTEs = 0;
  let additionalWarehouseCapacity = 0;

  for (const step of model.stepCosts) {
    if (volume >= step.triggerVolume) {
      stepTotal += step.monthlyCost;
      triggered.push({ descriptionKey: step.descriptionKey, cost: step.monthlyCost });
      if (step.type === "fte") additionalFTEs++;
      if (step.type === "warehouse")
        additionalWarehouseCapacity += model.warehouseCapacity;
    }
  }

  const totalCost = fixed + variable + stepTotal;
  const costPerOrder = volume > 0 ? totalCost / volume : 0;
  const revenue = volume * model.avgRevenuePerOrder;
  const marginDollars = revenue - totalCost;
  const margin = revenue > 0 ? (marginDollars / revenue) * 100 : 0;

  const effectiveFTECount = model.currentFTECount + additionalFTEs;
  const effectiveWarehouseCapacity =
    model.warehouseCapacity + additionalWarehouseCapacity;
  const laborCapacity = effectiveFTECount * model.ordersPerFTE;

  return {
    fixedCosts: fixed,
    variableCosts: variable,
    stepCosts: stepTotal,
    totalCost,
    costPerOrder,
    margin,
    marginDollars,
    revenue,
    warehouseUtilization:
      effectiveWarehouseCapacity > 0
        ? volume / effectiveWarehouseCapacity
        : 0,
    laborUtilization: laborCapacity > 0 ? volume / laborCapacity : 0,
    triggeredSteps: triggered,
    activeShippingRate: shippingRate,
    activePackagingRate: packagingRate,
    effectiveFTECount,
    effectiveWarehouseCapacity,
  };
}

// ── Break-even ────────────────────────────────────────────────

export function computeBreakEvenVolume(model: CostModel): number {
  let low = 0;
  let high = 5000;
  for (let i = 0; i < 50; i++) {
    const mid = Math.floor((low + high) / 2);
    const { revenue, totalCost } = computeCostBreakdown(model, mid);
    if (revenue >= totalCost) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high;
}

// ── Cost curve (array of points for charts) ───────────────────

export function computeCostCurve(
  model: CostModel,
  maxVolume: number,
  steps: number = 60
): CostCurvePoint[] {
  const points: CostCurvePoint[] = [];
  const increment = Math.max(1, Math.floor(maxVolume / steps));

  for (let vol = increment; vol <= maxVolume; vol += increment) {
    const b = computeCostBreakdown(model, vol);
    points.push({
      volume: vol,
      costPerOrder: Math.round(b.costPerOrder * 100) / 100,
      totalCost: Math.round(b.totalCost),
      margin: Math.round(b.margin * 10) / 10,
    });
  }
  return points;
}

// ── URL serialization ─────────────────────────────────────────

export function encodeCostModelToParams(
  model: CostModel,
  projectedVolume: number
): string {
  const p = new URLSearchParams();
  p.set("vol", String(projectedVolume));
  p.set("wl", String(model.warehouseLease));
  p.set("eq", String(model.equipment));
  p.set("ut", String(model.utilities));
  p.set("mg", String(model.management));
  p.set("lpo", String(model.laborPerOrder));
  p.set("spo", String(model.shippingPerOrder));
  p.set("ppo", String(model.packagingPerOrder));
  p.set("rr", String(model.returnsRate));
  p.set("rco", String(model.returnsCostPerOrder));
  p.set("rpo", String(model.avgRevenuePerOrder));
  p.set("cv", String(model.currentVolume));
  p.set("wc", String(model.warehouseCapacity));
  return p.toString();
}

export function decodeCostModelFromParams(
  search: string,
  defaults: CostModel
): { model: CostModel; projectedVolume: number } {
  const p = new URLSearchParams(search);
  const n = (key: string, fb: number) => {
    const v = p.get(key);
    if (v === null) return fb;
    const num = parseFloat(v);
    return isNaN(num) ? fb : num;
  };

  const model: CostModel = {
    ...defaults,
    warehouseLease: n("wl", defaults.warehouseLease),
    equipment: n("eq", defaults.equipment),
    utilities: n("ut", defaults.utilities),
    management: n("mg", defaults.management),
    laborPerOrder: n("lpo", defaults.laborPerOrder),
    shippingPerOrder: n("spo", defaults.shippingPerOrder),
    packagingPerOrder: n("ppo", defaults.packagingPerOrder),
    returnsRate: n("rr", defaults.returnsRate),
    returnsCostPerOrder: n("rco", defaults.returnsCostPerOrder),
    avgRevenuePerOrder: n("rpo", defaults.avgRevenuePerOrder),
    currentVolume: n("cv", defaults.currentVolume),
    warehouseCapacity: n("wc", defaults.warehouseCapacity),
  };

  return { model, projectedVolume: n("vol", defaults.currentVolume) };
}

// ── Formatting helpers ────────────────────────────────────────

const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const currencyFmtDecimal = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFmt = new Intl.NumberFormat("en-US");

export const fmt = {
  usd: (n: number) => currencyFmt.format(n),
  usd2: (n: number) => currencyFmtDecimal.format(n),
  num: (n: number) => numberFmt.format(n),
  pct: (n: number) => `${n.toFixed(1)}%`,
};
