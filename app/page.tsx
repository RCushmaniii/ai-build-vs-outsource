"use client";

import { CATEGORIES } from "@/data/criteria";
import { useWeights } from "@/hooks/useWeights";
import { useVerdict } from "@/hooks/useVerdict";
import { useLocale } from "@/lib/locale-context";
import { VerdictPanel } from "@/components/VerdictPanel";
import { CategorySection } from "@/components/CategorySection";
import { RadarChart } from "@/components/RadarChart";
import { PresetSelector } from "@/components/PresetSelector";
import { ExportActions } from "@/components/ExportActions";

export default function Home() {
  const { weights, updateWeight, resetWeights, loadPreset } = useWeights();
  const { verdict, categoryScores } = useVerdict(weights);
  const { t } = useLocale();

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-[#FF6A3D]" />
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t.title}
          </h1>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed ml-[18px]">
          {t.subtitle}
        </p>
        <p className="text-base text-muted-foreground/60 mt-1 ml-[18px]">
          {t.instructions}
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
      <div className="bg-card rounded-xl border border-border/60 p-6 sm:p-8 mt-8 mb-12">
        <h3 className="font-display text-lg font-semibold text-foreground mb-3">
          {t.howItWorksTitle}
        </h3>
        <div className="text-base text-muted-foreground leading-relaxed space-y-3">
          <p>{t.howItWorks1}</p>
          <p>{t.howItWorks2}</p>
          <p>{t.howItWorks3}</p>
        </div>
      </div>

      {/* CushLabs branding footer */}
      <footer className="text-center py-6 border-t border-border/40 print:hidden">
        <p className="text-sm text-muted-foreground/50 font-mono">
          {t.builtBy}{" "}
          <a
            href="https://cushlabs.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6A3D] hover:underline"
          >
            CushLabs.ai
          </a>
          {" "}&mdash; {t.tagline}
        </p>
      </footer>
    </main>
  );
}
