"use client";

import { Slider } from "@/components/ui/slider";
import { useLocale } from "@/lib/locale-context";
import { SCENARIO_PRESETS } from "@/data/ops-cost-defaults";
import { fmt } from "@/lib/ops-calculations";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ScenarioSelectorProps {
  projectedVolume: number;
  currentVolume: number;
  onVolumeChange: (v: number) => void;
  onPresetSelect: (volume: number, returnsRateOverride?: number) => void;
}

export function ScenarioSelector({
  projectedVolume,
  currentVolume,
  onVolumeChange,
  onPresetSelect,
}: ScenarioSelectorProps) {
  const { t } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ts = t as any as Record<string, string>;

  const pctChange =
    currentVolume > 0
      ? ((projectedVolume - currentVolume) / currentVolume) * 100
      : 0;

  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 mb-6 print:hidden">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        {ts.ops_scenarios ?? "Growth Scenarios"}
      </h3>

      {/* Preset buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="text-sm text-muted-foreground self-center mr-1 font-mono uppercase tracking-wider">
          {ts.ops_presetsLabel ?? "Presets:"}
        </span>
        {SCENARIO_PRESETS.map((preset) => {
          const nameKey = `ops_scenario_${preset.id}`;
          const descKey = `ops_scenario_${preset.id}_desc`;
          const name = ts[nameKey] ?? preset.id;
          const desc = ts[descKey] ?? "";
          const isActive = projectedVolume === preset.volume;

          return (
            <Tooltip key={preset.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() =>
                    onPresetSelect(preset.volume, preset.returnsRateOverride)
                  }
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-[#FF6A3D] bg-[#FF6A3D]/10 text-[#FF6A3D]"
                      : "border-border/60 bg-card hover:bg-muted/50 hover:border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {name}
                </button>
              </TooltipTrigger>
              {desc && (
                <TooltipContent>
                  <p>{desc}</p>
                </TooltipContent>
              )}
            </Tooltip>
          );
        })}
      </div>

      {/* Volume slider */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm text-muted-foreground">
              {ts.ops_projectedVolume ?? "Projected Volume"}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-mono font-bold text-foreground">
                {fmt.num(projectedVolume)}
              </span>
              <span className="text-sm text-muted-foreground">
                {ts.ops_ordersPerMonth ?? "orders/mo"}
              </span>
              {pctChange !== 0 && (
                <span
                  className={`text-sm font-mono ${pctChange > 0 ? "text-emerald-500" : "text-red-500"}`}
                >
                  ({pctChange >= 0 ? "+" : ""}
                  {pctChange.toFixed(0)}%)
                </span>
              )}
            </div>
          </div>
          <Slider
            value={[projectedVolume]}
            min={100}
            max={2500}
            step={10}
            onValueChange={([v]) => onVolumeChange(v)}
            className="cursor-pointer [&_[data-slot=slider-range]]:bg-[#FF6A3D] [&_[data-slot=slider-thumb]]:border-[#FF6A3D]"
          />
          <div className="flex justify-between text-xs text-muted-foreground/50 font-mono mt-1">
            <span>100</span>
            <span>
              {ts.ops_currentLabel ?? "Current"}: {fmt.num(currentVolume)}
            </span>
            <span>2,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
