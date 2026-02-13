"use client";

import { motion } from "framer-motion";

interface ScoreBarProps {
  score: number;
  max?: number;
  color: string;
  gradientTo?: string;
  label: string;
}

export function ScoreBar({ score, max = 10, color, gradientTo, label }: ScoreBarProps) {
  const pct = (score / max) * 100;

  return (
    <div className="flex items-center gap-2 min-w-[160px]">
      <span className="text-sm text-muted-foreground min-w-[36px] font-mono">
        {label}
      </span>
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: gradientTo
              ? `linear-gradient(90deg, ${color}, ${gradientTo})`
              : color,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <span
        className="text-base font-semibold min-w-[20px] font-mono text-right"
        style={{ color }}
      >
        {score}
      </span>
    </div>
  );
}
