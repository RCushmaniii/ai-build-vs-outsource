"use client";

import { CATEGORIES } from "@/data/criteria";
import { useWeights } from "@/hooks/useWeights";
import { useVerdict } from "@/hooks/useVerdict";
import { VerdictPanel } from "@/components/VerdictPanel";
import { CategorySection } from "@/components/CategorySection";
import { RadarChart } from "@/components/RadarChart";
import { PresetSelector } from "@/components/PresetSelector";
import { ExportActions } from "@/components/ExportActions";

export default function Home() {
  const { weights, updateWeight, resetWeights, loadPreset } = useWeights();
  const { verdict, categoryScores } = useVerdict(weights);

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-[#FF6A3D]" />
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Build vs. Outsource
          </h1>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed ml-[18px]">
          Decision Framework for TerraMar Brands — 20 Weighted Criteria
        </p>
        <p className="text-sm text-muted-foreground/60 mt-1 ml-[18px]">
          Drag the weight sliders to reflect your priorities. The verdict updates in real time.
        </p>
      </header>

      {/* Verdict panel */}
      <VerdictPanel verdict={verdict} />

      {/* Controls bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 print:hidden">
        <PresetSelector onSelect={loadPreset} />
        <ExportActions onReset={resetWeights} />
      </div>

      {/* Radar chart */}
      <RadarChart categoryScores={categoryScores} />

      {/* Category sections */}
      {CATEGORIES.map((cat) => {
        const catScore = categoryScores.find((cs) => cs.categoryId === cat.id);
        return (
          <CategorySection
            key={cat.id}
            category={cat}
            weights={weights}
            onWeightChange={updateWeight}
            buildPct={catScore?.buildPercentage}
            outsourcePct={catScore?.outsourcePercentage}
          />
        );
      })}

      {/* How it works footer */}
      <div className="bg-white rounded-xl border border-border/60 p-6 sm:p-8 mt-8 mb-12">
        <h3 className="font-display text-lg font-semibold text-foreground mb-3">
          How This Framework Works
        </h3>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
          <p>
            Each criterion has two <strong className="text-foreground">fixed scores</strong> (Build
            vs. 3PL) representing typical outcomes for a growth-stage direct-selling company. These
            defaults are based on industry patterns — once you provide your real data, we&apos;ll
            customize them to TerraMar&apos;s exact situation.
          </p>
          <p>
            The <strong className="text-foreground">weight</strong> is where your strategy comes in.
            A weight of 10 means &ldquo;this is mission-critical to us right now.&rdquo; A weight of
            1 means &ldquo;nice to have but not a deciding factor.&rdquo; The final score is the sum
            of (score x weight) across all criteria.
          </p>
          <p>
            <strong className="text-foreground">The power of this model:</strong> When you adjust
            weights to reflect TerraMar&apos;s real priorities, the answer emerges from your own
            strategic thinking — not from a gut feeling. It turns a complex, emotional decision into a
            data-driven conversation you can present to your CEO and board.
          </p>
        </div>
      </div>

      {/* CushLabs branding footer */}
      <footer className="text-center py-6 border-t border-border/40 print:hidden">
        <p className="text-xs text-muted-foreground/50 font-mono">
          Built by{" "}
          <a
            href="https://cushlabs.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6A3D] hover:underline"
          >
            CushLabs.ai
          </a>
          {" "}— AI Integration & Software Development Consulting
        </p>
      </footer>
    </main>
  );
}
