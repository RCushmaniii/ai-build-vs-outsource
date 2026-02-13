"use client";

import {
  RadarChart as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { CategoryScore } from "@/lib/calculations";

interface RadarChartProps {
  categoryScores: CategoryScore[];
}

export function RadarChart({ categoryScores }: RadarChartProps) {
  const data = categoryScores.map((cs) => ({
    category: cs.categoryName,
    Build: Math.round(cs.buildPercentage),
    "3PL": Math.round(cs.outsourcePercentage),
  }));

  return (
    <div className="bg-white rounded-xl border border-border/60 p-6 mb-8">
      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
        Category Comparison
      </h3>
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadar cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#e5e5e5" />
            <PolarAngleAxis
              dataKey="category"
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <Radar
              name="Build"
              dataKey="Build"
              stroke="#e76f51"
              fill="#f4a261"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="3PL"
              dataKey="3PL"
              stroke="#2d6a4f"
              fill="#52b788"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend
              wrapperStyle={{ fontSize: "12px", fontFamily: "var(--font-mono)" }}
            />
          </RechartsRadar>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
