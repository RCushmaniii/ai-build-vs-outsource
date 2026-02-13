"use client";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
  min?: number;
  max?: number;
}

export function NumberInput({
  label,
  value,
  onChange,
  prefix = "$",
  suffix,
  step = 1,
  min = 0,
  max,
}: NumberInputProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <span className="text-base text-muted-foreground">{label}</span>
      <div className="flex items-center gap-1">
        {prefix && (
          <span className="text-sm text-muted-foreground/60 font-mono">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const n = parseFloat(e.target.value);
            if (!isNaN(n)) onChange(n);
          }}
          step={step}
          min={min}
          max={max}
          className="w-[100px] px-2 py-1 text-right font-mono text-base bg-muted/50 border border-border/60 rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-[#FF6A3D]/50 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        {suffix && (
          <span className="text-sm text-muted-foreground/60 font-mono">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
