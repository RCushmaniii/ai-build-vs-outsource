"use client";

import { PRESETS } from "@/data/presets";
import { useLocale } from "@/lib/locale-context";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PresetSelectorProps {
  onSelect: (weights: Record<string, number>) => void;
}

export function PresetSelector({ onSelect }: PresetSelectorProps) {
  const { t } = useLocale();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-sm text-muted-foreground self-center mr-1 font-mono uppercase tracking-wider">
        {t.presetsLabel}
      </span>
      {PRESETS.map((preset) => {
        const nameKey = `preset_${preset.id}` as keyof typeof t;
        const descKey = `preset_${preset.id}_desc` as keyof typeof t;
        const name = typeof t[nameKey] === "string" ? (t[nameKey] as string) : preset.name;
        const desc = typeof t[descKey] === "string" ? (t[descKey] as string) : preset.description;

        return (
          <Tooltip key={preset.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => onSelect(preset.weights)}
                className="px-3 py-1.5 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 hover:border-border text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
              >
                {name}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{desc}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
