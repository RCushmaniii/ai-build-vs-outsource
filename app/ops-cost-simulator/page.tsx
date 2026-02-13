"use client";

import { useMemo, useCallback } from "react";
import { Printer, Link2, RotateCcw } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { useOpsCostModel } from "@/hooks/useOpsCostModel";
import {
  computeCostBreakdown,
  computeBreakEvenVolume,
  computeCostCurve,
  fmt,
} from "@/lib/ops-calculations";
import { CostDashboard } from "@/components/ops-cost/CostDashboard";
import { ScenarioSelector } from "@/components/ops-cost/ScenarioSelector";
import { AlertPanel } from "@/components/ops-cost/AlertPanel";
import { CostCurveChart } from "@/components/ops-cost/CostCurveChart";
import { MarginChart } from "@/components/ops-cost/MarginChart";
import { TotalCostChart } from "@/components/ops-cost/TotalCostChart";
import { CostInputPanel } from "@/components/ops-cost/CostInputPanel";
import { ScenarioComparison } from "@/components/ops-cost/ScenarioComparison";

export default function OpsCostSimulator() {
  const { t } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ts = t as any as Record<string, string>;

  const {
    model,
    projectedVolume,
    setProjectedVolume,
    updateField,
    resetModel,
  } = useOpsCostModel();

  const currentBreakdown = useMemo(
    () => computeCostBreakdown(model, model.currentVolume),
    [model]
  );

  const projectedBreakdown = useMemo(
    () => computeCostBreakdown(model, projectedVolume),
    [model, projectedVolume]
  );

  const breakEvenVolume = useMemo(
    () => computeBreakEvenVolume(model),
    [model]
  );

  const costCurveData = useMemo(
    () => computeCostCurve(model, 2500, 60),
    [model]
  );

  const handlePresetSelect = useCallback(
    (volume: number, returnsRateOverride?: number) => {
      setProjectedVolume(volume);
      if (returnsRateOverride !== undefined) {
        updateField("returnsRate", returnsRateOverride);
      }
    },
    [setProjectedVolume, updateField]
  );

  const handlePrint = useCallback(() => window.print(), []);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert(ts.ops_linkCopied ?? "Link copied to clipboard!");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = window.location.href;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert(ts.ops_linkCopied ?? "Link copied to clipboard!");
    }
  }, [ts]);

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-8 rounded-full bg-[#FF6A3D]" />
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {ts.ops_title ?? "Operational Cost Simulator"}
          </h1>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed ml-[18px]">
          {ts.ops_subtitle ??
            "Interactive what-if tool for modeling operational costs under growth scenarios"}
        </p>
        <p className="text-base text-muted-foreground/60 mt-1 ml-[18px]">
          {ts.ops_instructions ??
            "Drag the volume slider or select a scenario. Edit costs below to model your specific operation."}
        </p>
      </header>

      {/* Dashboard hero */}
      <CostDashboard
        current={currentBreakdown}
        projected={projectedBreakdown}
        currentVolume={model.currentVolume}
        projectedVolume={projectedVolume}
        breakEvenVolume={breakEvenVolume}
      />

      {/* Scenario selector + export actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2 print:hidden">
        <div className="flex-1 w-full">
          <ScenarioSelector
            projectedVolume={projectedVolume}
            currentVolume={model.currentVolume}
            onVolumeChange={setProjectedVolume}
            onPresetSelect={handlePresetSelect}
          />
        </div>
      </div>

      {/* Export actions bar */}
      <div className="flex flex-wrap gap-2 mb-6 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          {ts.printView ?? "Print View"}
        </button>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
        >
          <Link2 className="w-3.5 h-3.5" />
          {ts.shareLink ?? "Share Link"}
        </button>
        <button
          onClick={resetModel}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {ts.resetAll ?? "Reset All"}
        </button>
      </div>

      {/* Alert panel */}
      <AlertPanel
        breakdown={projectedBreakdown}
        projectedVolume={projectedVolume}
        warehouseCapacity={model.warehouseCapacity}
      />

      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <CostCurveChart
          data={costCurveData}
          currentVolume={model.currentVolume}
          projectedVolume={projectedVolume}
        />
        <MarginChart
          data={costCurveData}
          currentVolume={model.currentVolume}
          projectedVolume={projectedVolume}
          breakEvenVolume={breakEvenVolume}
        />
      </div>

      {/* Total cost chart (full width) */}
      <TotalCostChart
        data={costCurveData}
        currentVolume={model.currentVolume}
        projectedVolume={projectedVolume}
      />

      {/* Cost input panel */}
      <CostInputPanel model={model} onUpdate={updateField} />

      {/* Scenario comparison table */}
      <ScenarioComparison model={model} />

      {/* How it works footer */}
      <div className="bg-card rounded-xl border border-border/60 p-6 sm:p-8 mt-4 mb-12">
        <h3 className="font-display text-lg font-semibold text-foreground mb-3">
          {ts.ops_howItWorksTitle ?? "How This Tool Works"}
        </h3>
        <div className="text-base text-muted-foreground leading-relaxed space-y-3">
          <p>
            {ts.ops_howItWorks1 ??
              "Operational costs are modeled as three layers: fixed costs (rent, equipment, management), variable costs (labor, shipping, packaging per order), and step-function costs (new hires and facility expansions triggered at volume thresholds). This separation reveals how unit economics actually behave at different scales."}
          </p>
          <p>
            {ts.ops_howItWorks2 ??
              "The volume slider lets you instantly see what happens to your cost per order, margin, and utilization at any volume level. Volume discount tiers for shipping and packaging kick in automatically, and step costs appear when you cross hiring or capacity thresholds."}
          </p>
          <p>
            {ts.ops_howItWorks3 ??
              "Every input is editable — replace the demo defaults with your real numbers for accurate modeling. The URL updates as you adjust, so you can bookmark or share any specific configuration for board presentations."}
          </p>
        </div>
      </div>

      {/* CushLabs branding footer */}
      <footer className="text-center py-6 border-t border-border/40 print:hidden">
        <p className="text-sm text-muted-foreground/50 font-mono">
          {ts.builtBy ?? "Built by"}{" "}
          <a
            href="https://cushlabs.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6A3D] hover:underline"
          >
            CushLabs.ai
          </a>{" "}
          &mdash; {ts.tagline ?? "AI Integration & Software Development Consulting"}
        </p>
      </footer>
    </main>
  );
}
