# Roadmap — Operations Decision Tools Suite

> Interactive tools for operations leaders at growth-stage direct-selling companies.
> Each tool follows the same design language: weighted scoring, real-time feedback, shareable URLs, board-ready output.

---

## Shipped

### Build vs. Outsource Decision Framework — `v1.0.0`
**Status:** Production | **Live:** [ai-build-vs-outsource.vercel.app](https://ai-build-vs-outsource.vercel.app)

20-criteria weighted scoring tool for evaluating build-in-house vs. outsource (3PL) logistics decisions. 5 categories, radar chart, 6 scenario presets, dark/light theme, EN/ES bilingual support.

---

### Operational Cost Simulator — `v1.0.0`
**Status:** Production | **Live:** [ai-build-vs-outsource.vercel.app/ops-cost-simulator](https://ai-build-vs-outsource.vercel.app/ops-cost-simulator)

Interactive what-if tool for modeling how operational costs change under different growth scenarios. Three-layer cost model (fixed, variable, step-function), real-time charts, scenario presets, editable cost structure, side-by-side comparison table.

**Key features:**
- Cost-per-order curve showing economies of scale and step-cost jumps
- Margin % visualization with break-even line
- Total monthly cost chart with step-function staircase
- 5 scenario presets (Current, Conservative +30%, Expected +50%, Convention +100%, Aggressive +200%)
- Volume slider (100–2,500 orders/month) with real-time recalculation
- Editable cost structure (fixed costs, variable costs, revenue & capacity)
- Volume discount tiers (shipping, packaging) that activate at thresholds
- Utilization gauges (warehouse, labor) with color-coded alerts
- Scenario comparison table across all presets
- Shareable URLs encoding full model state

**Architectural decision — Phase 1 (Static Demo):**
This version is intentionally client-side only, matching the suite's "no backend required" design principle. The original feature spec proposed Supabase, PostgreSQL, Redis, auth, and multi-user support for later phases. That scope represents a separate SaaS product and should live in its own repo if pursued. Key rationale:

1. **Consistency:** All tools in this suite are static-deploy, client-side-math, zero-infrastructure. Adding a backend to one tool would break the architectural contract and complicate deployments.
2. **Demo-first validation:** A shareable URL with realistic defaults is sufficient to validate the concept with Terramar (or any prospect). Real data can be entered directly into the editable fields.
3. **Separation of concerns:** The sales/consulting material from the original spec (discovery call scripts, revenue models, pricing tiers, email templates) belongs in a CRM or business planning doc, not in the codebase.
4. **Future path:** If a client wants persistent storage, multi-user access, or audit logs, spin that into a dedicated `ops-cost-saas` repo with its own backend architecture.

---

## Planned

### 1. Compensation Plan Simulator
**Priority:** High | **Complexity:** High | **Reuse:** New architecture

The single biggest lever in direct selling. Commission structures are high-stakes, hard to model, and affect every distributor in the network.

**What it does:**
- Interactive modeler for adjusting commission rates, rank thresholds, bonus triggers, and override percentages
- Real-time financial impact visualization across distributor tiers (new recruit → top leader)
- Side-by-side comparison of current plan vs. proposed changes
- Payout distribution curves showing how total commission spend shifts
- Break-even analysis: "At what volume does this plan cost more than the current one?"

**Target user:** CEO, VP of Sales, Finance — anyone presenting comp plan changes to a board.

**Why this matters:** Every direct-selling company agonizes over comp plan changes. Getting it wrong tanks distributor retention. There are no good interactive tools for this — most companies model it in spreadsheets that break.

---

### 2. Market Expansion Readiness Scorecard
**Priority:** High | **Complexity:** Low | **Reuse:** Same weighted-scoring architecture

Weighted decision framework for evaluating new country or region entry — same UI pattern as Build vs. Outsource.

**Proposed criteria categories:**
- **Regulatory** — Licensing requirements, product registration (COFEPRIS equivalents), import/export restrictions
- **Market** — Total addressable market, direct-selling penetration, competitive landscape, consumer spending power
- **Logistics** — Shipping infrastructure, warehouse availability, last-mile reliability, customs complexity
- **Talent** — Local workforce availability, distributor interest signals, language/cultural fit
- **Financial** — Market entry cost, expected time to breakeven, currency risk, tax structure

**What it does:**
- Same slider-based weight adjustment as Build vs. Outsource
- Radar chart comparing multiple candidate markets side-by-side
- Preset scenarios (conservative entry, aggressive growth, test market)
- Shareable URLs for board presentations

**Why this matters:** Directly relevant for Mexico-based companies evaluating LATAM expansion. Turns a gut-feel geographic decision into a data-driven comparison.

---

### 3. Distributor Network Health Scorecard
**Priority:** Medium | **Complexity:** Medium | **Reuse:** Same weighted-scoring architecture

Weighted scoring dashboard that evaluates the health of a distributor network across key risk and performance indicators.

**Proposed criteria:**
- Retention rate (90-day, 180-day, annual)
- Activity rate (% of distributors placing orders monthly)
- Rank advancement velocity (average time between rank promotions)
- Geographic concentration (Herfindahl index — how spread out is the network?)
- Average order value trends
- New enrollment rate vs. churn rate
- Top-leader dependency (% of volume from top 10 distributors)
- Autoship/subscription rate

**What it does:**
- Color-coded health indicators (green/yellow/red) per metric
- Overall network health score with trend arrows
- Risk flags for concerning patterns (e.g., high concentration, declining activity)
- Radar chart of network dimensions
- Historical comparison: this quarter vs. last quarter

**Why this matters:** Most companies only look at revenue and enrollment. By the time those numbers drop, the underlying network problems have been festering for months. This scorecard catches issues early.

---

### 4. Inventory Demand Forecaster
**Priority:** Low | **Complexity:** High | **Reuse:** New architecture

Interactive demand modeling tool for companies with wide SKU catalogs (beauty, cosmetics, supplements).

**Key inputs:**
- SKU categories and current stock levels
- Distributor growth rate (monthly)
- Seasonality curves (configurable by market)
- Convention/event calendar with expected order surge multipliers
- Promotional event schedule
- Historical reorder rates by category

**Key outputs:**
- Projected demand by SKU category over 3/6/12 months
- Stockout risk alerts (days of inventory remaining)
- Overstock warnings (slow-moving inventory flags)
- Reorder point recommendations
- Visual timeline showing demand peaks aligned with events

**Why this matters:** Stockouts kill distributor trust. Overstock kills cash flow. For a company with dozens of SKUs across beauty and wellness categories, demand planning is the difference between smooth operations and constant firefighting.

---

## Design Principles (All Tools)

| Principle | Implementation |
|-----------|---------------|
| **Board-ready** | Every tool produces output suitable for executive presentations |
| **Real-time feedback** | Sliders and inputs update results instantly — no "calculate" button |
| **Shareable** | URL encoding captures full state for sharing configurations |
| **Bilingual** | EN/ES support across all tools |
| **Dark/Light** | Theme toggle with consistent brand treatment |
| **Mobile-friendly** | Responsive layouts that work on tablets in meetings |
| **No backend required** | Static deployment, client-side calculations, zero infrastructure cost |
| **Print-ready** | Clean print stylesheets for PDF export |

---

## Tech Stack (Shared)

- **Framework:** Next.js (App Router)
- **UI:** React, Tailwind CSS, shadcn/ui
- **Animation:** Framer Motion
- **Charts:** Recharts
- **Deployment:** Vercel
- **State:** URL params for shareability, React Context for theme/locale

---

## Architectural Notes

### Why no backend?
These tools are **sales demos and strategic planning aids**, not data-entry applications. The target user opens a URL, drags some sliders, and screenshots or prints the result for a board deck. That workflow doesn't need auth, databases, or server infrastructure. Keeping everything client-side means:
- Zero hosting cost beyond Vercel's free tier
- No security surface (no user data to breach)
- Instant deploys from `main` branch
- Any tool can be shared as a single URL containing the full state

### When would we add a backend?
If a specific client engagement requires persistent model storage, multi-user collaboration, historical tracking, or audit logs — that should be a **separate repo** with its own architecture. Don't retrofit a backend onto this static suite.

### Tool addition pattern
Each new tool follows the same structure:
1. `data/` — Types, interfaces, default values, presets
2. `lib/` — Pure calculation functions (no side effects)
3. `hooks/` — State management with URL sync
4. `components/<tool-name>/` — UI components scoped to the tool
5. `app/<tool-route>/page.tsx` — Page entry point
6. `lib/i18n.ts` — EN/ES translations added to the shared file

---

*Last updated: February 2026*
