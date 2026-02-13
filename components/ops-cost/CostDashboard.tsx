"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import type { CostBreakdown } from "@/lib/ops-calculations";
import { fmt } from "@/lib/ops-calculations";

interface CostDashboardProps {
  current: CostBreakdown;
  projected: CostBreakdown;
  currentVolume: number;
  projectedVolume: number;
  breakEvenVolume: number;
}

function MetricCard({
  label,
  value,
  subtext,
  change,
  positive,
}: {
  label: string;
  value: string;
  subtext?: string;
  change?: string;
  positive?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-white/50 font-mono uppercase tracking-wider">
        {label}
      </span>
      <motion.span
        className="text-2xl sm:text-3xl font-display font-bold text-white mt-1"
        key={value}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {value}
      </motion.span>
      {subtext && (
        <span className="text-sm text-white/40 font-mono mt-0.5">
          {subtext}
        </span>
      )}
      {change && (
        <span
          className={`text-sm font-mono mt-0.5 ${
            positive ? "text-emerald-400" : "text-amber-400"
          }`}
        >
          {change}
        </span>
      )}
    </div>
  );
}

function UtilBar({
  label,
  pct,
  detail,
}: {
  label: string;
  pct: number;
  detail: string;
}) {
  const clamped = Math.min(pct * 100, 100);
  const color =
    pct > 0.9
      ? "from-red-500 to-red-400"
      : pct > 0.7
        ? "from-amber-500 to-amber-400"
        : "from-emerald-500 to-emerald-400";

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-white/60">{label}</span>
        <span className="text-white/80 font-mono">{fmt.pct(pct * 100)}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <span className="text-xs text-white/30 font-mono">{detail}</span>
    </div>
  );
}

export function CostDashboard({
  current,
  projected,
  currentVolume,
  projectedVolume,
  breakEvenVolume,
}: CostDashboardProps) {
  const { t } = useLocale();

  const costChange = projected.totalCost - current.totalCost;
  const costPctChange =
    current.totalCost > 0 ? (costChange / current.totalCost) * 100 : 0;
  const cpoChange = projected.costPerOrder - current.costPerOrder;
  const marginChange = projected.margin - current.margin;
  const isProjection = projectedVolume !== currentVolume;

  return (
    <div className="relative overflow-hidden rounded-2xl mb-8">
      {/* Aurora gradient background — same style as VerdictPanel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative p-6 sm:p-8 text-white">
        {/* Section label */}
        <h2 className="font-mono text-sm uppercase tracking-[3px] text-[#8a8aad] mb-1">
          {isProjection
            ? (t as any as Record<string, string>).ops_projectedState ??
              "Projected State"
            : (t as any as Record<string, string>).ops_currentState ??
              "Current State"}
        </h2>
        <p className="text-white/40 text-sm mb-5 font-mono">
          {fmt.num(projectedVolume)}{" "}
          {(t as any as Record<string, string>).ops_ordersPerMonth ?? "orders/month"}
          {isProjection && (
            <span className="ml-2 text-[#FF6A3D]">
              ({costPctChange >= 0 ? "+" : ""}
              {costPctChange.toFixed(0)}%{" "}
              {(t as any as Record<string, string>).ops_totalCostLabel ?? "total cost"})
            </span>
          )}
        </p>

        {/* Top-line metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
          <MetricCard
            label={
              (t as any as Record<string, string>).ops_totalMonthlyCost ??
              "Monthly Cost"
            }
            value={fmt.usd(projected.totalCost)}
            change={
              isProjection
                ? `${costChange >= 0 ? "+" : ""}${fmt.usd(costChange)}`
                : undefined
            }
            positive={costChange <= 0}
          />
          <MetricCard
            label={
              (t as any as Record<string, string>).ops_costPerOrder ?? "Cost / Order"
            }
            value={fmt.usd2(projected.costPerOrder)}
            change={
              isProjection
                ? `${cpoChange >= 0 ? "+" : ""}${fmt.usd2(cpoChange)}`
                : undefined
            }
            positive={cpoChange <= 0}
          />
          <MetricCard
            label={(t as any as Record<string, string>).ops_margin ?? "Margin"}
            value={fmt.pct(projected.margin)}
            change={
              isProjection
                ? `${marginChange >= 0 ? "+" : ""}${marginChange.toFixed(1)}pp`
                : undefined
            }
            positive={marginChange >= 0}
          />
          <MetricCard
            label={
              (t as any as Record<string, string>).ops_breakEvenLabel ?? "Break-Even"
            }
            value={`${fmt.num(breakEvenVolume)}`}
            subtext={
              (t as any as Record<string, string>).ops_ordersPerMonth ?? "orders/month"
            }
          />
        </div>

        {/* Cost breakdown bar */}
        <div className="mb-5">
          <div className="flex gap-2 text-sm text-white/50 mb-1.5">
            <span>
              {(t as any as Record<string, string>).ops_costBreakdown ??
                "Cost Breakdown"}
            </span>
          </div>
          <div className="flex h-4 rounded-full overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-blue-400"
              initial={{ width: 0 }}
              animate={{
                width: `${(projected.fixedCosts / projected.totalCost) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              title={`Fixed: ${fmt.usd(projected.fixedCosts)}`}
            />
            <motion.div
              className="bg-gradient-to-r from-teal-500 to-teal-400"
              initial={{ width: 0 }}
              animate={{
                width: `${(projected.variableCosts / projected.totalCost) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              title={`Variable: ${fmt.usd(projected.variableCosts)}`}
            />
            {projected.stepCosts > 0 && (
              <motion.div
                className="bg-gradient-to-r from-amber-500 to-amber-400"
                initial={{ width: 0 }}
                animate={{
                  width: `${(projected.stepCosts / projected.totalCost) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
                title={`Step: ${fmt.usd(projected.stepCosts)}`}
              />
            )}
          </div>
          <div className="flex gap-4 mt-1.5 text-xs text-white/40 font-mono">
            <span>
              <span className="inline-block w-2 h-2 rounded-sm bg-blue-500 mr-1" />
              {(t as any as Record<string, string>).ops_fixed ?? "Fixed"}{" "}
              {fmt.usd(projected.fixedCosts)} (
              {((projected.fixedCosts / projected.totalCost) * 100).toFixed(0)}
              %)
            </span>
            <span>
              <span className="inline-block w-2 h-2 rounded-sm bg-teal-500 mr-1" />
              {(t as any as Record<string, string>).ops_variable ?? "Variable"}{" "}
              {fmt.usd(projected.variableCosts)} (
              {(
                (projected.variableCosts / projected.totalCost) *
                100
              ).toFixed(0)}
              %)
            </span>
            {projected.stepCosts > 0 && (
              <span>
                <span className="inline-block w-2 h-2 rounded-sm bg-amber-500 mr-1" />
                {(t as any as Record<string, string>).ops_step ?? "Step"}{" "}
                {fmt.usd(projected.stepCosts)} (
                {((projected.stepCosts / projected.totalCost) * 100).toFixed(0)}
                %)
              </span>
            )}
          </div>
        </div>

        {/* Utilization bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UtilBar
            label={
              (t as any as Record<string, string>).ops_warehouseUtil ??
              "Warehouse Utilization"
            }
            pct={projected.warehouseUtilization}
            detail={`${fmt.num(projectedVolume)} / ${fmt.num(projected.effectiveWarehouseCapacity)} ${(t as any as Record<string, string>).ops_capacity ?? "capacity"}`}
          />
          <UtilBar
            label={
              (t as any as Record<string, string>).ops_laborUtil ??
              "Labor Utilization"
            }
            pct={projected.laborUtilization}
            detail={`${projected.effectiveFTECount} FTE × ${fmt.num(projected.effectiveFTECount * 625)} ${(t as any as Record<string, string>).ops_capacity ?? "capacity"}`}
          />
        </div>

        {/* Triggered step costs */}
        {projected.triggeredSteps.length > 0 && (
          <div className="mt-4 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
            <span className="text-sm text-white/60 font-mono uppercase tracking-wider">
              {(t as any as Record<string, string>).ops_triggered ??
                "Triggered Costs"}
            </span>
            <div className="mt-1.5 space-y-1">
              {projected.triggeredSteps.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-amber-400"
                >
                  <span className="text-amber-400/60">+</span>
                  <span>
                    {(t as any as Record<string, string>)[s.descriptionKey] ??
                      s.descriptionKey}
                  </span>
                  <span className="ml-auto font-mono">
                    {fmt.usd(s.cost)}/mo
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
