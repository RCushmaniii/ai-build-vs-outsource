export interface StepCost {
  triggerVolume: number;
  monthlyCost: number;
  description: string;
  descriptionKey: string;
  type: "fte" | "warehouse" | "other";
}

export interface VolumeTier {
  minVolume: number;
  rate: number;
}

export interface CostModel {
  // Fixed costs (monthly)
  warehouseLease: number;
  equipment: number;
  utilities: number;
  management: number;

  // Variable costs (per order)
  laborPerOrder: number;
  shippingPerOrder: number;
  packagingPerOrder: number;
  returnsRate: number; // 0-100 percentage
  returnsCostPerOrder: number;

  // Step-function costs
  stepCosts: StepCost[];

  // Volume discounts
  shippingTiers: VolumeTier[];
  packagingTiers: VolumeTier[];

  // Constraints
  warehouseCapacity: number;
  ordersPerFTE: number;
  currentFTECount: number;

  // Revenue
  avgRevenuePerOrder: number;

  // Current baseline
  currentVolume: number;
}

export interface ScenarioPreset {
  id: string;
  volume: number;
  returnsRateOverride?: number;
}

// Terramar-like demo defaults
export const DEFAULT_MODEL: CostModel = {
  warehouseLease: 8500,
  equipment: 1200,
  utilities: 950,
  management: 12000,

  laborPerOrder: 2.4,
  shippingPerOrder: 6.75,
  packagingPerOrder: 1.25,
  returnsRate: 8,
  returnsCostPerOrder: 3.5,

  stepCosts: [
    {
      triggerVolume: 1000,
      monthlyCost: 4500,
      description: "Additional warehouse FTE (#3)",
      descriptionKey: "ops_stepFTE3",
      type: "fte",
    },
    {
      triggerVolume: 1500,
      monthlyCost: 9000,
      description: "Additional warehouse space (+10K sq ft)",
      descriptionKey: "ops_stepWarehouse",
      type: "warehouse",
    },
  ],

  shippingTiers: [
    { minVolume: 0, rate: 6.75 },
    { minVolume: 500, rate: 6.3 },
    { minVolume: 1000, rate: 5.85 },
  ],

  packagingTiers: [
    { minVolume: 0, rate: 1.25 },
    { minVolume: 750, rate: 1.1 },
  ],

  warehouseCapacity: 1500,
  ordersPerFTE: 625,
  currentFTECount: 2,

  avgRevenuePerOrder: 69.5,
  currentVolume: 520,
};

export const SCENARIO_PRESETS: ScenarioPreset[] = [
  { id: "current", volume: 520 },
  { id: "conservative", volume: 676 },
  { id: "expected", volume: 780 },
  { id: "convention", volume: 1040, returnsRateOverride: 12 },
  { id: "aggressive", volume: 1560 },
];
