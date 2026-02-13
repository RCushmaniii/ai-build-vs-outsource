"use client";

import { motion } from "framer-motion";
import type { VerdictResult } from "@/lib/calculations";

interface VerdictPanelProps {
  verdict: VerdictResult;
}

export function VerdictPanel({ verdict }: VerdictPanelProps) {
  const {
    buildPercentage,
    outsourcePercentage,
    buildWeightedTotal,
    outsourceWeightedTotal,
    maxPossibleScore,
    winner,
    deltaPercentage,
  } = verdict;

  const winnerLabel = winner === "outsource" ? "Outsource (3PL)" : "Build In-House";
  const winnerColor = winner === "outsource" ? "#52b788" : "#f4a261";

  return (
    <div className="relative overflow-hidden rounded-2xl mb-8">
      {/* Aurora gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative p-6 sm:p-8 text-white">
        <h2 className="font-mono text-xs uppercase tracking-[3px] text-[#8a8aad] mb-2">
          Overall Verdict
        </h2>

        <motion.div
          className="text-2xl sm:text-3xl font-serif font-bold mb-6"
          style={{ color: winnerColor }}
          key={`${winner}-${deltaPercentage.toFixed(1)}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {deltaPercentage < 0.1
            ? "Dead even — adjust weights to break the tie"
            : `${winnerLabel} leads by ${deltaPercentage.toFixed(1)}%`}
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* Build bar */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm text-white/60">Build In-House</span>
              <span className="text-lg font-bold font-mono text-[#f4a261]">
                {buildPercentage.toFixed(1)}%
              </span>
            </div>
            <div className="h-3 bg-white/10 rounded-md overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full rounded-md bg-gradient-to-r from-[#f4a261] to-[#e76f51]"
                initial={{ width: 0 }}
                animate={{ width: `${buildPercentage}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <div className="text-xs text-white/30 mt-1 font-mono">
              {buildWeightedTotal} / {maxPossibleScore} weighted points
            </div>
          </div>

          {/* 3PL bar */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm text-white/60">Outsource (3PL)</span>
              <span className="text-lg font-bold font-mono text-[#52b788]">
                {outsourcePercentage.toFixed(1)}%
              </span>
            </div>
            <div className="h-3 bg-white/10 rounded-md overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full rounded-md bg-gradient-to-r from-[#52b788] to-[#2d6a4f]"
                initial={{ width: 0 }}
                animate={{ width: `${outsourcePercentage}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <div className="text-xs text-white/30 mt-1 font-mono">
              {outsourceWeightedTotal} / {maxPossibleScore} weighted points
            </div>
          </div>
        </div>

        {/* Guidance note */}
        <div className="mt-5 p-3 bg-white/5 rounded-lg text-sm text-white/50 leading-relaxed backdrop-blur-sm">
          <span className="text-white/70 font-medium">How to read this:</span>{" "}
          These default scores represent a typical growth-stage direct-selling company.
          Adjust the <span className="text-white/70 font-medium">weights</span> below
          to reflect what matters most to TerraMar right now. The verdict updates in real time.
        </div>
      </div>
    </div>
  );
}
