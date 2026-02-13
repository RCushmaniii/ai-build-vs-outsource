"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CriterionCard } from "./CriterionCard";
import type { Category } from "@/data/criteria";

interface CategorySectionProps {
  category: Category;
  weights: Record<string, number>;
  onWeightChange: (id: string, value: number) => void;
  buildPct?: number;
  outsourcePct?: number;
}

export function CategorySection({
  category,
  weights,
  onWeightChange,
  buildPct,
  outsourcePct,
}: CategorySectionProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="mb-8">
      {/* Category header */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-3 w-full mb-4 pb-2 group cursor-pointer"
        style={{ borderBottom: `2px solid ${category.color}22` }}
      >
        <div
          className="w-3 h-3 rounded-sm shrink-0"
          style={{ background: category.color }}
        />
        <h3
          className="font-mono text-base font-bold uppercase tracking-widest"
          style={{ color: category.color }}
        >
          {category.name}
        </h3>
        <span className="text-sm text-muted-foreground">
          {category.criteria.length} criteria
        </span>

        {/* Category subtotals */}
        {buildPct !== undefined && outsourcePct !== undefined && (
          <div className="ml-auto flex items-center gap-3 mr-2">
            <span className="text-sm font-mono" style={{ color: "#e76f51" }}>
              B: {buildPct.toFixed(0)}%
            </span>
            <span className="text-sm font-mono" style={{ color: "#2d6a4f" }}>
              3PL: {outsourcePct.toFixed(0)}%
            </span>
          </div>
        )}

        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            collapsed ? "-rotate-90" : ""
          }`}
        />
      </button>

      {/* Criteria cards */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {category.criteria.map((criterion, i) => (
                <motion.div
                  key={criterion.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <CriterionCard
                    criterion={criterion}
                    weight={weights[criterion.id] ?? criterion.defaultWeight}
                    onWeightChange={(v) => onWeightChange(criterion.id, v)}
                    categoryColor={category.color}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
