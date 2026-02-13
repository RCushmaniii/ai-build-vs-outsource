"use client";

import { useMemo } from "react";
import { allCriteria, CATEGORIES } from "@/data/criteria";
import { computeVerdict, computeCategoryScores } from "@/lib/calculations";
import type { VerdictResult, CategoryScore } from "@/lib/calculations";

export function useVerdict(weights: Record<string, number>): {
  verdict: VerdictResult;
  categoryScores: CategoryScore[];
} {
  const verdict = useMemo(
    () => computeVerdict(allCriteria, weights),
    [weights]
  );

  const categoryScores = useMemo(
    () => computeCategoryScores(CATEGORIES, weights),
    [weights]
  );

  return { verdict, categoryScores };
}
