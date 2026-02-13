"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScoreBar } from "./ScoreBar";
import { WeightSlider } from "./WeightSlider";
import type { Criterion } from "@/data/criteria";

interface CriterionCardProps {
  criterion: Criterion;
  weight: number;
  onWeightChange: (value: number) => void;
  categoryColor: string;
}

export function CriterionCard({
  criterion,
  weight,
  onWeightChange,
  categoryColor,
}: CriterionCardProps) {
  const [expanded, setExpanded] = useState<"none" | "why" | "rationale">("none");

  return (
    <div
      className="bg-white rounded-xl border border-border/60 transition-all duration-200 hover:shadow-md group"
      style={{
        borderLeftWidth: "3px",
        borderLeftColor: `${categoryColor}66`,
      }}
    >
      {/* Always visible header */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <h4 className="font-semibold text-sm text-foreground leading-tight">
              {criterion.name}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {criterion.description}
            </p>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            {/* Score bars */}
            <div className="flex flex-col gap-1.5">
              <ScoreBar
                score={criterion.buildScore}
                color="#e76f51"
                gradientTo="#f4a261"
                label="Build"
              />
              <ScoreBar
                score={criterion.outsourceScore}
                color="#2d6a4f"
                gradientTo="#52b788"
                label="3PL"
              />
            </div>

            {/* Weight slider */}
            <div
              className="flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                Weight
              </span>
              <WeightSlider
                value={weight}
                onChange={onWeightChange}
                color={categoryColor}
              />
            </div>
          </div>
        </div>

        {/* Expand toggles */}
        <div className="flex gap-3 mt-3">
          <button
            onClick={() => setExpanded(expanded === "why" ? "none" : "why")}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                expanded === "why" ? "rotate-180" : ""
              }`}
            />
            Why This Matters
          </button>
          <button
            onClick={() =>
              setExpanded(expanded === "rationale" ? "none" : "rationale")
            }
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                expanded === "rationale" ? "rotate-180" : ""
              }`}
            />
            Scoring Rationale
          </button>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {expanded !== "none" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="mx-4 mb-4 sm:mx-5 sm:mb-5 p-4 rounded-lg text-sm text-muted-foreground leading-relaxed"
              style={{
                background: `${categoryColor}08`,
                borderLeft: `3px solid ${categoryColor}44`,
              }}
            >
              <span className="font-semibold" style={{ color: categoryColor }}>
                {expanded === "why" ? "Why this matters:" : "Scoring rationale:"}
              </span>{" "}
              {expanded === "why"
                ? criterion.whyItMatters
                : criterion.scoringRationale}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
