"use client";

import {
  LineChart,
  Line,
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

interface CostCurveChartProps {
  data: CostCurvePoint[];
  currentVolume: number;
  projectedVolume: number;
}

export function CostCurveChart({
  data,
  currentVolume,
  projectedVolume,
}: CostCurveChartProps) {
  const { t } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ts = t as any as Record<string, string>;

  return (
    <div className="bg-card rounded-xl border border-border/60 p-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
        {ts.ops_costCurveTitle ?? "Cost per Order vs. Volume"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {ts.ops_costCurveDesc ??
          "Shows how unit economics improve with scale — and where step costs create jumps"}
      </p>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
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
              tickFormatter={(v) => `$${v}`}
              label={{
                value: ts.ops_costPerOrder ?? "Cost/Order",
                angle: -90,
                position: "insideLeft",
                offset: 10,
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
              formatter={(value: any) => [fmt.usd2(Number(value ?? 0)), ts.ops_costPerOrder ?? "Cost/Order"]}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              labelFormatter={(label: any) =>
                `${fmt.num(Number(label))} ${ts.ops_ordersPerMonth ?? "orders/mo"}`
              }
            />
            <Line
              type="monotone"
              dataKey="costPerOrder"
              stroke="#3b82f6"
              strokeWidth={2.5}
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
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
