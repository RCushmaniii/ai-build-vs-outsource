"use client";

import { useState, useCallback, useEffect } from "react";
import { allCriteria } from "@/data/criteria";
import { decodeWeightsFromParams, encodeWeightsToParams } from "@/lib/calculations";

function getDefaultWeights(): Record<string, number> {
  const defaults: Record<string, number> = {};
  allCriteria.forEach((c) => {
    defaults[c.id] = c.defaultWeight;
  });
  return defaults;
}

export function useWeights() {
  const defaults = getDefaultWeights();

  const [weights, setWeights] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return defaults;
    const search = window.location.search.slice(1);
    if (search) {
      return decodeWeightsFromParams(search, defaults);
    }
    return defaults;
  });

  // Sync weights to URL params (debounced)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const isDefault = Object.entries(weights).every(
        ([key, val]) => defaults[key] === val
      );
      if (isDefault) {
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        const params = encodeWeightsToParams(weights);
        window.history.replaceState(null, "", `?${params}`);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [weights, defaults]);

  const updateWeight = useCallback((id: string, value: number) => {
    setWeights((prev) => ({ ...prev, [id]: value }));
  }, []);

  const resetWeights = useCallback(() => {
    setWeights(getDefaultWeights());
  }, []);

  const loadPreset = useCallback((presetWeights: Record<string, number>) => {
    setWeights(presetWeights);
  }, []);

  return { weights, updateWeight, resetWeights, loadPreset };
}
