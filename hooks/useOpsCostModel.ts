"use client";

import { useState, useCallback, useEffect } from "react";
import { DEFAULT_MODEL, type CostModel } from "@/data/ops-cost-defaults";
import {
  encodeCostModelToParams,
  decodeCostModelFromParams,
} from "@/lib/ops-calculations";

export function useOpsCostModel() {
  const [model, setModel] = useState<CostModel>(() => {
    if (typeof window === "undefined") return DEFAULT_MODEL;
    const search = window.location.search.slice(1);
    if (search) return decodeCostModelFromParams(search, DEFAULT_MODEL).model;
    return DEFAULT_MODEL;
  });

  const [projectedVolume, setProjectedVolume] = useState<number>(() => {
    if (typeof window === "undefined") return DEFAULT_MODEL.currentVolume;
    const search = window.location.search.slice(1);
    if (search)
      return decodeCostModelFromParams(search, DEFAULT_MODEL).projectedVolume;
    return DEFAULT_MODEL.currentVolume;
  });

  // Debounced URL sync
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = encodeCostModelToParams(model, projectedVolume);
      // Check if anything differs from defaults
      const defaultParams = encodeCostModelToParams(
        DEFAULT_MODEL,
        DEFAULT_MODEL.currentVolume
      );
      if (params === defaultParams) {
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        window.history.replaceState(null, "", `?${params}`);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [model, projectedVolume]);

  const updateField = useCallback(
    <K extends keyof CostModel>(field: K, value: CostModel[K]) => {
      setModel((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const resetModel = useCallback(() => {
    setModel(DEFAULT_MODEL);
    setProjectedVolume(DEFAULT_MODEL.currentVolume);
  }, []);

  return {
    model,
    projectedVolume,
    setProjectedVolume,
    updateField,
    resetModel,
    setModel,
  };
}
