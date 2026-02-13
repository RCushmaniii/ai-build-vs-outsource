"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { useLocale } from "@/lib/locale-context";
import type { CostCurvePoint } from "@/lib/ops-calculations";
import { fmt } from "@/lib/ops-calculations";

interface TotalCostChartProps {
  data: CostCurvePoint[];
  currentVolume: number;
  projectedVolume: number;
}

export function TotalCostChart({
  data,
  currentVolume,
  projectedVolume,
}: TotalCostChartProps) {
  const { t } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ts = t as any as Record<string, string>;

  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 mb-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
        {ts.ops_totalCostTitle ?? "Total Monthly Cost vs. Volume"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {ts.ops_totalCostDesc ??
          "Step-function costs create visible jumps when hiring thresholds or capacity limits are reached"}
      </p>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
          >
            <defs>
              <linearGradient id="totalCostGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e520" />
            <XAxis
              dataKey="volume"
              tick={{ fontSize: 12, fill: "#888" }}
              tickFormatter={(v) => fmt.num(v)}
              label={{
                value: ts.ops_ordersPerMonth ?? "Orders/Month",
                position: "insideBottom",
                offset: -2,
                fontSize: 12,
                fill: "#888",
              }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#888" }}
              tickFormatter={(v) => fmt.usd(v)}
              label={{
                value: ts.ops_totalCostLabel ?? "Total Cost",
                angle: -90,
                position: "insideLeft",
                offset: 5,
                fontSize: 12,
                fill: "#888",
              }}
            />
            <RechartsTooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "13px",
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [fmt.usd(Number(value ?? 0)), ts.ops_totalCostLabel ?? "Total Cost"]}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              labelFormatter={(label: any) =>
                `${fmt.num(Number(label))} ${ts.ops_ordersPerMonth ?? "orders/mo"}`
              }
            />
            <Area
              type="stepAfter"
              dataKey="totalCost"
              stroke="#3b82f6"
              strokeWidth={2.5}
              fill="url(#totalCostGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#3b82f6" }}
            />
            <ReferenceLine
              x={currentVolume}
              stroke="#FF6A3D"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={{
                value: ts.ops_currentLabel ?? "Current",
                position: "top",
                fill: "#FF6A3D",
                fontSize: 11,
              }}
            />
            {projectedVolume !== currentVolume && (
              <ReferenceLine
                x={projectedVolume}
                stroke="#8b5cf6"
                strokeDasharray="4 4"
                strokeWidth={1.5}
                label={{
                  value: ts.ops_projectedLabel ?? "Projected",
                  position: "top",
                  fill: "#8b5cf6",
                  fontSize: 11,
                }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
