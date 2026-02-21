# Operations Decision Tools Suite

> Interactive decision-support tools for operations leaders at growth-stage direct-selling companies. Structured analysis, real-time feedback, board-ready output — no spreadsheets, no guesswork.

**Live:** [ai-build-vs-outsource.vercel.app](https://ai-build-vs-outsource.vercel.app)

---

## The Problem

Operations leaders at growth-stage companies face high-stakes decisions every quarter — build or outsource fulfillment? Expand to a new market? Restructure the comp plan? These decisions are typically made with gut feel, incomplete spreadsheets, and circular boardroom arguments.

**This suite replaces that with structured, data-driven, shareable analysis.**

---

## What's Included

### 1. Build vs. Outsource Decision Framework — `v1.0.0`

**Live:** [ai-build-vs-outsource.vercel.app](https://ai-build-vs-outsource.vercel.app)

A 20-criterion weighted scoring tool for evaluating whether to build logistics capacity in-house or outsource to a 3PL.

| Feature | Detail |
|---------|--------|
| **20 scored criteria** | Across 5 categories: Financial, Operational, Strategic, Control & Quality, Risk |
| **Real-time weighted scoring** | Drag any slider (1–10) and watch the verdict, radar chart, and subtotals update instantly |
| **6 scenario presets** | Balanced, Growth Emergency, Control First, Cost Optimizer, Risk Averse, Recommended Default |
| **5-axis radar chart** | Visual category comparison of Build vs. 3PL at a glance |
| **Animated verdict panel** | Shows the winner, point totals, and margin of victory |
| **Expandable rationale** | Each criterion includes "Why This Matters" and "Scoring Rationale" with industry analysis |
| **Shareable URLs** | Full weight configuration encoded in query params — send a link, not a spreadsheet |
| **Print-ready layout** | Strips interactive elements for clean board-presentation PDFs |
| **Bilingual (EN/ES)** | Full translation across all criteria, UI, and rationale content |
| **Dark/Light theme** | Professional presentation in any setting |

**Try it:** Load the "Growth Emergency" preset and watch the verdict shift as speed-to-scale weights spike to 10. Then switch to "Control First" and see the opposite outcome. That's the point — different priorities lead to different answers, and this tool makes that visible.

---

### 2. Operational Cost Simulator — `v1.0.0`

**Live:** [ai-build-vs-outsource.vercel.app/ops-cost-simulator](https://ai-build-vs-outsource.vercel.app/ops-cost-simulator)

An interactive what-if tool for modeling how operational costs change under different growth scenarios. Reveals the hidden step-function costs that blindside growing companies.

| Feature | Detail |
|---------|--------|
| **Three-layer cost model** | Fixed costs (lease, equipment, utilities), variable costs per order (labor, shipping, packaging), and step-function costs (new hires, warehouse expansion at volume thresholds) |
| **Volume slider** | 100–2,500 orders/month with real-time recalculation |
| **Cost-per-order curve** | Shows economies of scale and exactly where step-cost jumps hit |
| **Margin visualization** | Margin % chart with break-even line |
| **Total cost staircase** | Monthly cost chart showing when step costs trigger |
| **5 growth presets** | Current, Conservative +30%, Expected +50%, Convention +100%, Aggressive +200% |
| **Editable cost structure** | Replace demo defaults with your real numbers |
| **Volume discount tiers** | Shipping and packaging costs decrease at volume thresholds |
| **Utilization gauges** | Warehouse and labor utilization with color-coded alerts |
| **Break-even analysis** | Minimum volume needed to achieve profitability |
| **Scenario comparison table** | Side-by-side cost breakdown across all presets |
| **Shareable URLs** | Full model state encoded for board presentations |
| **Bilingual (EN/ES)** | Full translation across all UI and labels |

**Try it:** Set volume to 950 orders, then drag to 1,050. Watch the cost-per-order jump as a new FTE hire triggers. That's the kind of inflection point this tool reveals.

---

## Quick Start

**Prerequisites:** Node.js 18.17+ and pnpm

```powershell
# Clone the repository
git clone https://github.com/RCushmaniii/ai-build-vs-outsource.git
cd ai-build-vs-outsource

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
# Open http://localhost:3000
```

No `.env` file required — fully client-side with no backend.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| Animations | Framer Motion 12 |
| Charts | Recharts 3 |
| Typography | Space Grotesk (headings), Source Serif 4 (body), DM Mono (data) |
| Deployment | Vercel (static export, auto-deploy from `main`) |
| Package Manager | pnpm |

---

## Project Structure

```
ai-build-vs-outsource/
├── app/
│   ├── layout.tsx                # Root layout — fonts, metadata, providers, site header
│   ├── page.tsx                  # Build vs. Outsource main page
│   ├── ops-cost-simulator/
│   │   └── page.tsx              # Cost Simulator page
│   └── globals.css               # Tailwind tokens, dark mode vars, print styles
├── components/
│   ├── VerdictPanel.tsx          # Animated verdict with progress bars
│   ├── CategorySection.tsx       # Collapsible category + criteria group
│   ├── CriterionCard.tsx         # Individual criterion with expandable rationale
│   ├── WeightSlider.tsx          # Slider wrapper with category-colored accent
│   ├── ScoreBar.tsx              # Horizontal score visualization
│   ├── RadarChart.tsx            # 5-axis Recharts radar
│   ├── PresetSelector.tsx        # Scenario preset buttons
│   ├── ExportActions.tsx         # Print, Share, Reset controls
│   ├── SiteHeader.tsx            # Sticky header with theme/language/navigation
│   ├── ops-cost/                 # Cost Simulator components
│   │   ├── CostDashboard.tsx
│   │   ├── CostCurveChart.tsx
│   │   ├── MarginChart.tsx
│   │   ├── TotalCostChart.tsx
│   │   ├── CostInputPanel.tsx
│   │   ├── ScenarioComparison.tsx
│   │   └── ...
│   └── ui/                       # shadcn/ui primitives
├── data/
│   ├── criteria.ts               # 20 criteria with scores and content
│   ├── presets.ts                # 6 scenario weight profiles
│   └── ops-cost-defaults.ts      # Cost model defaults and step-cost definitions
├── hooks/
│   ├── useWeights.ts             # Build vs. Outsource state + URL sync
│   ├── useVerdict.ts             # Verdict computation
│   └── useOpsCostModel.ts        # Cost Simulator state + URL sync
├── lib/
│   ├── calculations.ts           # Pure scoring logic
│   ├── ops-calculations.ts       # Cost model math (breakdowns, curves, break-even)
│   ├── i18n.ts                   # EN/ES translations (all strings)
│   ├── locale-context.tsx        # Locale provider
│   ├── theme-context.tsx         # Dark/light theme provider
│   └── utils.ts
└── docs/
    └── ROADMAP.md                # Planned tools and architectural notes
```

---

## Architecture

All logic is client-side. No backend, no database, no authentication.

- **Data layer** — Fixed scores and defaults defined in `data/`. Easy to customize for any company.
- **State** — React hooks initialized from URL params, synced back with debounce. Every configuration is a shareable URL.
- **Computation** — Pure functions in `lib/`. Scoring, cost modeling, and break-even calculations with no side effects.
- **Localization** — All strings in `lib/i18n.ts`. Locale context provides EN/ES across every component.

---

## Customization

### Adjusting Build vs. Outsource Scores

Edit `data/criteria.ts` to change the fixed Build/3PL scores for your company:

```typescript
{
  id: "speed_to_scale",
  name: "Speed to Scale",
  buildScore: 3,        // Your company-specific score
  outsourceScore: 9,    // Your company-specific score
  defaultWeight: 10,
}
```

### Adjusting Cost Simulator Defaults

Edit `data/ops-cost-defaults.ts` to set your actual cost structure:

```typescript
{
  fixedCosts: {
    warehouseLease: 8500,
    equipment: 2500,
    // ...
  },
  variableCosts: {
    laborPerOrder: 2.40,
    shippingPerOrder: 6.75,
    // ...
  }
}
```

### Adding Presets

Add entries to `data/presets.ts` (decision framework) or the cost simulator's preset configuration with your own scenario profiles.

---

## Roadmap

Four additional tools are planned, all following the same design language:

| Tool | Priority | Description |
|------|----------|-------------|
| **Compensation Plan Simulator** | High | Model commission structures and financial impact across distributor tiers |
| **Market Expansion Readiness Scorecard** | High | Weighted criteria for evaluating new country/region entry |
| **Distributor Network Health Scorecard** | Medium | Monitor retention, activity, concentration, and early-warning indicators |
| **Inventory Demand Forecaster** | Low | Multi-SKU demand modeling with seasonality and event calendars |

See [docs/ROADMAP.md](docs/ROADMAP.md) for full details.

---

## Deployment

Live at [ai-build-vs-outsource.vercel.app](https://ai-build-vs-outsource.vercel.app). The GitHub repo is connected — pushing to `main` triggers automatic redeployment.

Manual deploy:

```powershell
vercel --prod
```

---

## License

Copyright (c) 2026 Robert Cushman III / CushLabs. All rights reserved. See [LICENSE](LICENSE).

---

## Built By

[CushLabs](https://cushlabs.ai) — AI Integration & Software Development Consulting
