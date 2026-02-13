"use client";

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import type { CostBreakdown } from "@/lib/ops-calculations";

interface AlertPanelProps {
  breakdown: CostBreakdown;
  projectedVolume: number;
  warehouseCapacity: number;
}

interface Alert {
  level: "critical" | "warning" | "healthy";
  messageKey: string;
  fallback: string;
}

function getAlerts(
  b: CostBreakdown,
  volume: number,
  warehouseCapacity: number
): Alert[] {
  const alerts: Alert[] = [];

  if (b.warehouseUtilization > 0.9) {
    alerts.push({
      level: "critical",
      messageKey: "ops_alertWarehouseCritical",
      fallback: `Warehouse at ${(b.warehouseUtilization * 100).toFixed(0)}% capacity — delays likely, plan expansion immediately`,
    });
  } else if (b.warehouseUtilization > 0.7) {
    alerts.push({
      level: "warning",
      messageKey: "ops_alertWarehouseWarning",
      fallback: `Warehouse at ${(b.warehouseUtilization * 100).toFixed(0)}% capacity — plan expansion within 3 months`,
    });
  }

  if (b.laborUtilization > 0.95) {
    alerts.push({
      level: "critical",
      messageKey: "ops_alertLaborCritical",
      fallback: `Labor at ${(b.laborUtilization * 100).toFixed(0)}% capacity — overtime burns margin, hire immediately`,
    });
  } else if (b.laborUtilization > 0.8) {
    alerts.push({
      level: "warning",
      messageKey: "ops_alertLaborWarning",
      fallback: `Labor at ${(b.laborUtilization * 100).toFixed(0)}% capacity — begin recruiting process`,
    });
  }

  if (b.margin < 10) {
    alerts.push({
      level: "critical",
      messageKey: "ops_alertMarginCritical",
      fallback: `Margin at ${b.margin.toFixed(1)}% — dangerously thin, review cost structure`,
    });
  } else if (b.margin < 20) {
    alerts.push({
      level: "warning",
      messageKey: "ops_alertMarginWarning",
      fallback: `Margin at ${b.margin.toFixed(1)}% — below healthy threshold, monitor closely`,
    });
  }

  // Check how close to next step cost
  const nextThreshold = warehouseCapacity;
  if (
    volume > nextThreshold * 0.85 &&
    volume < nextThreshold &&
    b.warehouseUtilization < 0.9
  ) {
    alerts.push({
      level: "warning",
      messageKey: "ops_alertApproachingStep",
      fallback: `Approaching capacity threshold at ${nextThreshold} orders — step cost increase ahead`,
    });
  }

  if (alerts.length === 0) {
    alerts.push({
      level: "healthy",
      messageKey: "ops_alertHealthy",
      fallback:
        "All systems healthy — utilization optimal, margins stable",
    });
  }

  return alerts;
}

export function AlertPanel({
  breakdown,
  projectedVolume,
  warehouseCapacity,
}: AlertPanelProps) {
  const { t } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ts = t as any as Record<string, string>;
  const alerts = getAlerts(breakdown, projectedVolume, warehouseCapacity);

  const iconMap = {
    critical: <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />,
    healthy: <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />,
  };

  const bgMap = {
    critical: "bg-red-500/5 border-red-500/20",
    warning: "bg-amber-500/5 border-amber-500/20",
    healthy: "bg-emerald-500/5 border-emerald-500/20",
  };

  return (
    <div className="space-y-2 mb-6">
      {alerts.map((alert, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 px-4 py-3 rounded-lg border ${bgMap[alert.level]}`}
        >
          {iconMap[alert.level]}
          <span className="text-sm text-foreground/80">
            {ts[alert.messageKey] ?? alert.fallback}
          </span>
        </div>
      ))}
    </div>
  );
}
