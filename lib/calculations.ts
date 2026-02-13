import type { Criterion, Category } from "@/data/criteria";

export interface VerdictResult {
  buildWeightedTotal: number;
  outsourceWeightedTotal: number;
  maxPossibleScore: number;
  buildPercentage: number;
  outsourcePercentage: number;
  winner: "build" | "outsource";
  deltaPercentage: number;
  deltaPoints: number;
}

export interface CategoryScore {
  categoryId: string;
  categoryName: string;
  categoryColor: string;
  buildScore: number;
  outsourceScore: number;
  maxScore: number;
  buildPercentage: number;
  outsourcePercentage: number;
}

export function computeVerdict(
  criteria: Criterion[],
  weights: Record<string, number>
): VerdictResult {
  let buildTotal = 0;
  let outsourceTotal = 0;
  let totalWeight = 0;

  criteria.forEach((c) => {
    const w = weights[c.id] ?? c.defaultWeight;
    buildTotal += c.buildScore * w;
    outsourceTotal += c.outsourceScore * w;
    totalWeight += w;
  });

  const maxPossible = totalWeight * 10;
  const buildPct = maxPossible > 0 ? (buildTotal / maxPossible) * 100 : 0;
  const outsourcePct = maxPossible > 0 ? (outsourceTotal / maxPossible) * 100 : 0;
  const diff = outsourceTotal - buildTotal;
  const diffPct = maxPossible > 0 ? (Math.abs(diff) / maxPossible) * 100 : 0;

  return {
    buildWeightedTotal: buildTotal,
    outsourceWeightedTotal: outsourceTotal,
    maxPossibleScore: maxPossible,
    buildPercentage: buildPct,
    outsourcePercentage: outsourcePct,
    winner: diff >= 0 ? "outsource" : "build",
    deltaPercentage: diffPct,
    deltaPoints: Math.abs(diff),
  };
}

export function computeCategoryScores(
  categories: Category[],
  weights: Record<string, number>
): CategoryScore[] {
  return categories.map((cat) => {
    let buildScore = 0;
    let outsourceScore = 0;
    let totalWeight = 0;

    cat.criteria.forEach((c) => {
      const w = weights[c.id] ?? c.defaultWeight;
      buildScore += c.buildScore * w;
      outsourceScore += c.outsourceScore * w;
      totalWeight += w;
    });

    const maxScore = totalWeight * 10;

    return {
      categoryId: cat.id,
      categoryName: cat.name,
      categoryColor: cat.color,
      buildScore,
      outsourceScore,
      maxScore,
      buildPercentage: maxScore > 0 ? (buildScore / maxScore) * 100 : 0,
      outsourcePercentage: maxScore > 0 ? (outsourceScore / maxScore) * 100 : 0,
    };
  });
}

export function encodeWeightsToParams(weights: Record<string, number>): string {
  const params = new URLSearchParams();
  Object.entries(weights).forEach(([key, value]) => {
    params.set(key, String(value));
  });
  return params.toString();
}

export function decodeWeightsFromParams(
  searchParams: string,
  defaults: Record<string, number>
): Record<string, number> {
  const params = new URLSearchParams(searchParams);
  const weights = { ...defaults };

  params.forEach((value, key) => {
    if (key in defaults) {
      const num = parseInt(value, 10);
      if (!isNaN(num) && num >= 1 && num <= 10) {
        weights[key] = num;
      }
    }
  });

  return weights;
}
