"use client";

import { PRESETS } from "@/data/presets";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PresetSelectorProps {
  onSelect: (weights: Record<string, number>) => void;
}

export function PresetSelector({ onSelect }: PresetSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-sm text-muted-foreground self-center mr-1 font-mono uppercase tracking-wider">
        Presets:
      </span>
      {PRESETS.map((preset) => (
        <Tooltip key={preset.id}>
          <TooltipTrigger asChild>
            <button
              onClick={() => onSelect(preset.weights)}
              className="px-3 py-1.5 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 hover:border-border text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
            >
              {preset.name}
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{preset.description}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
