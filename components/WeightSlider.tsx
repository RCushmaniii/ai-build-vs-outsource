"use client";

import { Slider } from "@/components/ui/slider";

interface WeightSliderProps {
  value: number;
  onChange: (value: number) => void;
  color: string;
}

export function WeightSlider({ value, onChange, color }: WeightSliderProps) {
  return (
    <div className="flex items-center gap-3 min-w-[140px]">
      <Slider
        value={[value]}
        min={1}
        max={10}
        step={1}
        onValueChange={([v]) => onChange(v)}
        className="w-[100px] cursor-pointer [&_[data-slot=slider-range]]:bg-current [&_[data-slot=slider-thumb]]:border-current"
        style={{ color }}
      />
      <span
        className="font-mono font-bold text-base min-w-[24px] text-center"
        style={{ color }}
      >
        {value}
      </span>
    </div>
  );
}
