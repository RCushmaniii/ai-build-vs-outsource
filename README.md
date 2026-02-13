# Build vs. Outsource — Decision Framework

An interactive weighted scoring tool that helps operations leaders evaluate whether to build logistics capacity in-house or outsource to a 3PL. Scores 20 criteria across 5 categories in real time as users adjust priority weights, producing a data-driven verdict suitable for board-level presentations.

**Live:** [ai-build-vs-outsource.vercel.app](https://ai-build-vs-outsource.vercel.app)

---

## Live Demo

Open [ai-build-vs-outsource.vercel.app](https://ai-build-vs-outsource.vercel.app) — no login required.

**Try these scenarios:**

1. **Default view** — See the TerraMar-calibrated verdict with 20 criteria scored across Financial, Operational, Strategic, Control & Quality, and Risk categories
2. **Load "Growth Emergency" preset** — Watch the verdict shift as speed-to-scale and cash flow weights spike to 10
3. **Load "Control First" preset** — See how maximizing quality and data ownership weights changes the outcome
4. **Adjust individual weights** — Drag any slider and watch the verdict panel, radar chart, and category subtotals update instantly
5. **Share a configuration** — Click "Share Link" to copy a URL with your exact weights encoded in the query string

---

## Features

| Feature | Outcome |
|---------|---------|
| **Real-time weighted scoring** | Verdict updates instantly as you drag any of 20 weight sliders (1-10 scale) |
| **5-category radar chart** | Visual comparison of Build vs. 3PL across Financial, Operational, Strategic, Control, and Risk |
| **6 scenario presets** | One-click weight profiles: Balanced, Growth Emergency, Control First, Cost Optimizer, Risk Averse, TerraMar Default |
| **Shareable URLs** | Weight configuration encodes into query params — share a specific scenario via link |
| **Expandable rationale** | Each criterion includes "Why This Matters" and "Scoring Rationale" sections with industry-specific analysis |
| **Print-ready layout** | Print button strips interactive elements for a clean board-presentation PDF |

---

## Quick Start

**Prerequisites:** Node.js 18.17+ and pnpm

```powershell
# 1. Clone the repository
git clone https://github.com/RCushmaniii/ai-build-vs-outsource.git
cd ai-build-vs-outsource

# 2. Install dependencies
pnpm install
# Expected output: "Packages: +712 done"

# 3. Start the dev server
pnpm dev
# Expected output: "Local: http://localhost:3000"

# 4. Open in browser
Start-Process http://localhost:3000
```

No `.env` file required — this is a fully client-side application with no backend.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| Animations | Framer Motion 12 |
| Charts | Recharts 3 |
| Typography | Space Grotesk (headings), Source Serif 4 (body), DM Mono (numbers) |
| Deployment | Vercel (static export) |
| Package Manager | pnpm |

---

## Project Structure

```
ai-build-vs-outsource/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, TooltipProvider
│   ├── page.tsx                # Main page — wires all components together
│   └── globals.css             # Tailwind config, CushLabs brand tokens, print styles
├── components/
│   ├── VerdictPanel.tsx        # Sticky hero with animated Build vs 3PL bars
│   ├── CategorySection.tsx     # Collapsible category header + criteria group
│   ├── CriterionCard.tsx       # Individual criterion with expandable rationale
│   ├── WeightSlider.tsx        # shadcn Slider wrapper with category-colored accent
│   ├── ScoreBar.tsx            # Horizontal score visualization with gradient fill
│   ├── RadarChart.tsx          # 5-axis Recharts radar comparing categories
│   ├── PresetSelector.tsx      # Scenario preset buttons with tooltips
│   ├── ExportActions.tsx       # Print, Share Link, Reset controls
│   └── ui/                     # shadcn/ui primitives (slider, accordion, card, tooltip)
├── data/
│   ├── criteria.ts             # All 20 criteria with scores, weights, and full content
│   └── presets.ts              # 6 scenario preset weight configurations
├── hooks/
│   ├── useWeights.ts           # Weight state management + URL param sync
│   └── useVerdict.ts           # Computed verdict and category scores
├── lib/
│   └── calculations.ts         # Pure scoring functions (verdict, category scores, URL encoding)
└── docs/
    └── templates/
        └── readme-instructions.md  # CushLabs README generation guide
```

---

## Architecture

All logic is client-side. No backend, no database, no authentication.

- **Data layer** (`data/criteria.ts`) — 20 criteria with fixed Build/3PL scores (1-10), default weights, and two content blocks each (whyItMatters, scoringRationale)
- **State** (`hooks/useWeights.ts`) — React useState initialized from URL params, synced back to URL with 300ms debounce
- **Computation** (`lib/calculations.ts`) — Pure functions: `computeVerdict()` returns weighted totals, percentages, winner, delta; `computeCategoryScores()` returns per-category breakdowns for the radar chart
- **URL sharing** — Weights serialize to query params (`?upfront_capital=9&cost_per_order=8...`). Invalid or missing params fall back to defaults.

---

## Customization

### Adjusting Scores

Edit `data/criteria.ts` to change the fixed Build/3PL scores for any criterion. Each criterion is a plain object:

```typescript
// data/criteria.ts
{
  id: "speed_to_scale",
  name: "Speed to Scale",
  buildScore: 3,        // Change this for TerraMar-specific data
  outsourceScore: 9,    // Change this for TerraMar-specific data
  defaultWeight: 10,
  // ...content fields
}
```

### Adding Presets

Add a new entry to the `PRESETS` array in `data/presets.ts`:

```typescript
// data/presets.ts
{
  id: "custom_scenario",
  name: "Custom Scenario",
  description: "Your scenario description",
  weights: {
    upfront_capital: 7,
    cost_per_order: 8,
    // ... all 20 criterion IDs
  },
}
```

---

## Deployment

Already deployed to Vercel at [ai-build-vs-outsource.vercel.app](https://ai-build-vs-outsource.vercel.app). The GitHub repo is connected — pushing to `main` triggers automatic redeployment.

To deploy manually:

```powershell
vercel --prod
```

---

## Built By

[CushLabs.ai](https://cushlabs.ai) — AI Integration & Software Development Consulting
