"use client";

import {
  RadarChart as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useLocale } from "@/lib/locale-context";
import type { CategoryScore } from "@/lib/calculations";

interface RadarChartProps {
  categoryScores: CategoryScore[];
}

export function RadarChart({ categoryScores }: RadarChartProps) {
  const { t } = useLocale();

  const data = categoryScores.map((cs) => {
    const catKey = `cat_${cs.categoryId}` as keyof typeof t;
    const label = typeof t[catKey] === "string" ? (t[catKey] as string) : cs.categoryName;
    return {
      category: label,
      [t.buildScoreLabel]: Math.round(cs.buildPercentage),
      [t.outsourceScoreLabel]: Math.round(cs.outsourcePercentage),
    };
  });

  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 mb-8">
      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
        {t.categoryComparison}
      </h3>
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadar cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#e5e5e5" />
            <PolarAngleAxis
              dataKey="category"
              tick={{ fontSize: 14, fill: "#666" }}
            />
            <Radar
              name={t.buildScoreLabel}
              dataKey={t.buildScoreLabel}
              stroke="#e76f51"
              fill="#f4a261"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name={t.outsourceScoreLabel}
              dataKey={t.outsourceScoreLabel}
              stroke="#2d6a4f"
              fill="#52b788"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend
              wrapperStyle={{ fontSize: "14px", fontFamily: "var(--font-mono)" }}
            />
          </RechartsRadar>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
