"use client";

import { useLocale } from "@/lib/locale-context";
import { SCENARIO_PRESETS } from "@/data/ops-cost-defaults";
import type { CostModel } from "@/data/ops-cost-defaults";
import { computeCostBreakdown, fmt } from "@/lib/ops-calculations";

interface ScenarioComparisonProps {
  model: CostModel;
}

export function ScenarioComparison({ model }: ScenarioComparisonProps) {
  const { t } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ts = t as any as Record<string, string>;

  const scenarios = SCENARIO_PRESETS.map((preset) => {
    const effectiveModel = preset.returnsRateOverride
      ? { ...model, returnsRate: preset.returnsRateOverride }
      : model;
    const b = computeCostBreakdown(effectiveModel, preset.volume);
    return { preset, breakdown: b };
  });

  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 mb-6 overflow-x-auto">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        {ts.ops_comparisonTitle ?? "Scenario Comparison"}
      </h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/40">
            <th className="text-left py-2 pr-4 text-muted-foreground font-mono uppercase tracking-wider text-xs">
              {ts.ops_metric ?? "Metric"}
            </th>
            {scenarios.map(({ preset }) => (
              <th
                key={preset.id}
                className="text-right py-2 px-2 text-muted-foreground font-mono uppercase tracking-wider text-xs"
              >
                {ts[`ops_scenario_${preset.id}`] ?? preset.id}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Row
            label={ts.ops_monthlyVolume ?? "Monthly Volume"}
            values={scenarios.map(({ preset }) => fmt.num(preset.volume))}
          />
          <Row
            label={ts.ops_totalMonthlyCost ?? "Total Cost"}
            values={scenarios.map(({ breakdown: b }) => fmt.usd(b.totalCost))}
          />
          <Row
            label={ts.ops_costPerOrder ?? "Cost / Order"}
            values={scenarios.map(({ breakdown: b }) =>
              fmt.usd2(b.costPerOrder)
            )}
            highlight
          />
          <Row
            label={ts.ops_margin ?? "Margin"}
            values={scenarios.map(({ breakdown: b }) => fmt.pct(b.margin))}
            highlight
          />
          <Row
            label={ts.ops_fixedCosts ?? "Fixed Costs"}
            values={scenarios.map(({ breakdown: b }) =>
              fmt.usd(b.fixedCosts)
            )}
          />
          <Row
            label={ts.ops_variableCosts ?? "Variable Costs"}
            values={scenarios.map(({ breakdown: b }) =>
              fmt.usd(b.variableCosts)
            )}
          />
          <Row
            label={ts.ops_stepCosts ?? "Step Costs"}
            values={scenarios.map(({ breakdown: b }) =>
              b.stepCosts > 0 ? fmt.usd(b.stepCosts) : "-"
            )}
          />
          <Row
            label={ts.ops_warehouseUtil ?? "Warehouse Util."}
            values={scenarios.map(({ breakdown: b }) =>
              fmt.pct(b.warehouseUtilization * 100)
            )}
            colorize={(v, i) => {
              const util = scenarios[i].breakdown.warehouseUtilization;
              if (util > 0.9) return "text-red-500";
              if (util > 0.7) return "text-amber-500";
              return "";
            }}
          />
          <Row
            label={ts.ops_laborUtil ?? "Labor Util."}
            values={scenarios.map(({ breakdown: b }) =>
              fmt.pct(b.laborUtilization * 100)
            )}
            colorize={(v, i) => {
              const util = scenarios[i].breakdown.laborUtilization;
              if (util > 0.95) return "text-red-500";
              if (util > 0.8) return "text-amber-500";
              return "";
            }}
          />
          <Row
            label="FTE"
            values={scenarios.map(
              ({ breakdown: b }) => `${b.effectiveFTECount}`
            )}
          />
        </tbody>
      </table>
    </div>
  );
}

function Row({
  label,
  values,
  highlight,
  colorize,
}: {
  label: string;
  values: string[];
  highlight?: boolean;
  colorize?: (value: string, index: number) => string;
}) {
  return (
    <tr className="border-b border-border/20">
      <td
        className={`py-2 pr-4 ${highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}
      >
        {label}
      </td>
      {values.map((v, i) => (
        <td
          key={i}
          className={`py-2 px-2 text-right font-mono ${
            highlight ? "font-semibold text-foreground" : "text-muted-foreground"
          } ${colorize ? colorize(v, i) : ""}`}
        >
          {v}
        </td>
      ))}
    </tr>
  );
}
