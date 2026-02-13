export interface Criterion {
  id: string;
  name: string;
  description: string;
  buildScore: number;
  outsourceScore: number;
  whyItMatters: string;
  scoringRationale: string;
  defaultWeight: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  criteria: Criterion[];
}

export const CATEGORIES: Category[] = [
  {
    id: "financial",
    name: "Financial",
    color: "#2D6A4F",
    criteria: [
      {
        id: "upfront_capital",
        name: "Upfront Capital Required",
        description:
          "How much cash do you need to invest before seeing results?",
        buildScore: 2,
        outsourceScore: 8,
        whyItMatters:
          "Building means signing warehouse leases, buying racking and conveyor systems, purchasing a WMS, hiring and training a workforce — all before you ship a single extra order. A 3PL converts all of that into a per-order variable cost. For a growth-stage company, the difference between a massive upfront capex hit and a pay-as-you-go model can determine whether you have cash left for marketing and distributor incentives.",
        scoringRationale:
          "Build scores a 2 because the cash outlay is enormous and immediate — warehouse leases, equipment (racking, conveyors), WMS software, and hiring/training all happen before you ship one additional order. 3PL scores an 8 because it converts all capital expenditure into variable per-order cost, dramatically reducing the cash needed to expand. The 3PL doesn't score a perfect 10 because there are still onboarding costs, integration expenses, and minimum volume commitments.",
        defaultWeight: 9,
      },
      {
        id: "cost_per_order",
        name: "Cost Per Order",
        description:
          "The all-in cost to pick, pack, and ship a single order.",
        buildScore: 7,
        outsourceScore: 5,
        whyItMatters:
          "When you run your own operation at decent volume, your per-order cost can be lower because you're not paying a 3PL's margin (typically 15–25% markup over their costs). The 3PL has to make a profit on every order they ship for you. But the catch is you need consistent volume to realize that savings — if volume drops, your fixed costs don't.",
        scoringRationale:
          "Build scores a 7 because at consistent volume, in-house operations avoid the 3PL's profit margin. Your fixed costs (rent, staff, equipment depreciation) spread across more orders, driving per-unit costs down. 3PL scores a 5 because the markup is real — they need to profit on every order. However, they leverage purchasing power across many clients (packaging, carrier rates), which partially offsets their margin. Neither scores at the extremes because the real answer depends heavily on volume consistency.",
        defaultWeight: 8,
      },
      {
        id: "cost_predictability",
        name: "Cost Predictability",
        description:
          "How accurately can you forecast monthly operations costs?",
        buildScore: 6,
        outsourceScore: 7,
        whyItMatters:
          "A 3PL gives you a rate card: $X per pick, $Y per pack, $Z per shipment. You can model your costs precisely. In-house, you'll deal with unexpected equipment repairs, overtime during surges, turnover costs, and utility spikes. For a CFO trying to build reliable financial models, predictability matters almost as much as the absolute cost.",
        scoringRationale:
          "Build scores a 6 — you know your own operation reasonably well after running it, but surprises like equipment breakdowns, seasonal overtime, staff turnover, and utility fluctuations create variance that's hard to model. 3PL scores a 7 because rate card pricing makes cost modeling more precise; the 3PL absorbs those operational surprises as part of their margin. The gap is small because neither option is perfectly predictable — 3PL contracts can still have surcharges, fuel adjustments, and volume-tier shifts.",
        defaultWeight: 6,
      },
      {
        id: "cash_flow",
        name: "Cash Flow Impact",
        description:
          "Effect on your monthly cash position and working capital.",
        buildScore: 3,
        outsourceScore: 8,
        whyItMatters:
          "This is related to upfront capital but measures the ongoing cash position. When you build, capital is trapped in assets — lease deposits, equipment, packaging materials inventory. With a 3PL, you pay monthly based on what you actually shipped. For a fast-growing direct-selling company, preserving cash for marketing, events, and distributor incentives is usually more valuable than owning warehouse equipment.",
        scoringRationale:
          "Build scores a 3 because capital gets trapped in non-liquid assets: lease deposits, warehouse equipment, safety stock of packaging materials. These assets don't generate returns directly and can't be quickly converted to cash. 3PL scores an 8 because it's a pure operating expense — you pay monthly based on actual shipments, keeping working capital free for revenue-generating activities like marketing, events, and distributor incentives.",
        defaultWeight: 8,
      },
    ],
  },
  {
    id: "operational",
    name: "Operational",
    color: "#1B4965",
    criteria: [
      {
        id: "speed_to_scale",
        name: "Speed to Scale",
        description: "How quickly can you double or triple capacity?",
        buildScore: 3,
        outsourceScore: 9,
        whyItMatters:
          "This is probably the single most important criterion for a growth-stage direct-selling company. If you need to double capacity, building means finding a new warehouse (3–6 months to locate, negotiate, and build out in Mexico), hiring and training staff (2–3 months), and installing systems. A 3PL that already has excess capacity in their network can absorb your growth in weeks.",
        scoringRationale:
          "Build scores a 3 because doubling capacity requires finding new warehouse space (3–6 months in Mexico), hiring and training staff (2–3 months), and installing/configuring systems. The lead time is measured in quarters, not weeks. 3PL scores a 9 because a provider with existing excess network capacity can absorb growth rapidly. It doesn't score a 10 because onboarding, system integration, and SOP training still take time — typically 4–8 weeks for a meaningful ramp.",
        defaultWeight: 10,
      },
      {
        id: "geographic_reach",
        name: "Geographic Reach",
        description:
          "Ability to ship anywhere in Mexico (and beyond) efficiently.",
        buildScore: 4,
        outsourceScore: 8,
        whyItMatters:
          "Shipping from a single location in Guadalajara means that distributors in Monterrey, Mexico City, or Cancún face longer transit times and higher shipping costs. An established 3PL likely has fulfillment nodes across multiple cities. That means faster delivery and lower shipping costs to more of the country — directly impacting distributor satisfaction and retention.",
        scoringRationale:
          "Build scores a 4 because you could open satellite warehouses yourself, but that multiplies the complexity and capital requirements by each additional location. Managing multiple owned facilities is a fundamentally different operational challenge. 3PL scores an 8 because established providers already have multi-node networks across Mexico (Mexico City, Monterrey, and possibly other cities), reducing transit times and shipping costs without you building anything new.",
        defaultWeight: 7,
      },
      {
        id: "peak_handling",
        name: "Peak / Surge Capacity",
        description:
          "Handling promotional events, conventions, enrollment surges.",
        buildScore: 3,
        outsourceScore: 8,
        whyItMatters:
          "This is critical for direct selling. When you run a big promotion, hold a national convention, or a top distributor launches a recruitment campaign, orders can spike 3–5x overnight. If you own the operation, you either maintain expensive excess capacity year-round (wasteful) or you can't handle the surge (missed SLAs and angry distributors).",
        scoringRationale:
          "Build scores a 3 because surges are where in-house operations break the hardest. You face a lose-lose: maintain expensive excess capacity year-round just for peaks (wasteful), or fail to meet demand when it spikes (damaged relationships). 3PL scores an 8 because they spread capacity across dozens of clients whose peaks don't all happen at once. Your convention surge coincides with another client's slow period — the 3PL flexes labor and space across their portfolio.",
        defaultWeight: 9,
      },
      {
        id: "sla_performance",
        name: "SLA Performance",
        description:
          "Ability to consistently meet same-day/next-day shipping commitments.",
        buildScore: 7,
        outsourceScore: 6,
        whyItMatters:
          "When you control the operation, you can walk the warehouse floor, pull people from other tasks, and personally ensure that same-day shipping commitment is met. With a 3PL, you're one client among many. If they're having a bad day or another client's volume surged, your SLA might suffer and you're making phone calls instead of fixing it directly.",
        scoringRationale:
          "Build scores a 7 because direct control means you can physically walk the floor, reassign staff from other tasks, and personally ensure commitments are met that day. 3PL scores a 6 because you're one client among many — if the 3PL is having a bad day or another client surged, your orders might slip. Good 3PLs have contractual SLA penalties that keep them accountable, but 'contractual accountability' is never as fast as walking the floor yourself. The scores are close because professional 3PL operations teams are genuinely good at what they do.",
        defaultWeight: 9,
      },
      {
        id: "returns_handling",
        name: "Returns & Reverse Logistics",
        description:
          "Processing distributor returns, exchanges, damaged goods.",
        buildScore: 6,
        outsourceScore: 6,
        whyItMatters:
          "Returns in direct selling are complex. Distributors return products for various reasons — product didn't sell, changed their minds, left the business. You have specific policies around refund windows, product condition, and restocking. In-house, you control those rules directly. A good 3PL can handle returns but needs very clear SOPs and ongoing monitoring.",
        scoringRationale:
          "Build scores a 6 — you control return rules directly and your staff understands the nuances of distributor returns vs. customer returns vs. damaged goods. But processing returns is operationally messy regardless. 3PL also scores a 6 — they can handle returns professionally but need very clear SOPs for your specific policies, and the feedback loop when something goes wrong is longer. Neither side has a clear advantage, which is why both score identically.",
        defaultWeight: 5,
      },
    ],
  },
  {
    id: "strategic",
    name: "Strategic",
    color: "#7B2D8E",
    criteria: [
      {
        id: "mgmt_focus",
        name: "Management Focus",
        description:
          "How much leadership attention does operations consume?",
        buildScore: 3,
        outsourceScore: 8,
        whyItMatters:
          "Every hour the VP of Operations spends solving warehouse problems — dealing with a broken conveyor, managing staffing shortages, negotiating with a landlord — is an hour not spent improving the distributor experience, optimizing the supply chain strategically, or supporting company growth. With a 3PL, you shift from managing daily operations to managing a vendor relationship.",
        scoringRationale:
          "Build scores a 3 because at a rapid growth rate, operational firefighting probably consumes a huge portion of leadership bandwidth. Warehouse problems are urgent and immediate, which means they consistently crowd out strategic work. 3PL scores an 8 because it shifts the role from managing daily warehouse operations to managing a vendor relationship — a fundamentally more strategic (and less time-intensive) use of executive attention. The 3PL doesn't score higher because vendor management still requires real effort, especially in the first year.",
        defaultWeight: 8,
      },
      {
        id: "core_competency",
        name: "Core Competency Alignment",
        description:
          "Is logistics your competitive advantage, or is it your distributor network?",
        buildScore: 4,
        outsourceScore: 8,
        whyItMatters:
          "The fundamental question: what makes a direct-selling company win? Is it having an amazing warehouse operation, or is it the products, the distributor network, the brand, the events, and the compensation plan? For almost every direct-selling company, the competitive advantage is the business model and the people, not the logistics. Warehousing is a utility — it needs to work perfectly, but it's not what makes you special.",
        scoringRationale:
          "Build scores a 4 because owning logistics doesn't differentiate a direct-selling company. No distributor joins or stays because the warehouse is owned rather than outsourced. The operational energy spent on logistics is energy diverted from actual differentiators. 3PL scores an 8 because outsourcing a non-core function lets you invest more time, money, and leadership attention in what actually sets you apart: products, distributor experience, brand, events, and compensation plan design.",
        defaultWeight: 7,
      },
      {
        id: "flexibility",
        name: "Business Model Flexibility",
        description:
          "Ability to pivot (new product lines, new markets, new channels).",
        buildScore: 5,
        outsourceScore: 7,
        whyItMatters:
          "When you decide to pivot — launching a new skincare line that needs climate-controlled storage, expanding into Colombia, or adding a B2C e-commerce channel — how fast can your logistics keep up? The 3PL doesn't help you create new products or find new markets, but it does mean your logistics infrastructure isn't an anchor that slows down strategic pivots.",
        scoringRationale:
          "Build scores a 5 because owned infrastructure optimized for current SKUs and current geography becomes an anchor when strategy shifts. If you need cold storage for a new product line or fulfillment in a new country, you have to build or retrofit it yourself. 3PL scores a 7 because you can call and say 'we're adding 200 SKUs and need cold storage' — that's their problem to solve, not yours. The gap isn't huge because truly major pivots (new country, new channel) require renegotiation with any partner.",
        defaultWeight: 6,
      },
      {
        id: "exit_risk",
        name: "Vendor Lock-in / Exit Risk",
        description:
          "How hard is it to change course if this doesn't work?",
        buildScore: 8,
        outsourceScore: 4,
        whyItMatters:
          "This is the biggest argument against 3PL in the entire framework. Once your inventory is in their warehouse, your systems are integrated, and your team has lost the muscle memory of running operations internally — switching is painful and expensive. Some 3PL contracts have 12–24 month terms with early termination fees. You must build exit flexibility into any 3PL agreement from day one.",
        scoringRationale:
          "Build scores an 8 because you can't be locked into your own operation — the infrastructure, knowledge, and team are all yours. 3PL scores a 4 because once you're deeply integrated, switching providers or bringing operations back in-house is a major project. Some contracts include 12–24 month terms with early termination fees. The mitigation is strong contract negotiation with exit clauses, transition assistance requirements, and data portability guarantees — but the structural risk remains.",
        defaultWeight: 7,
      },
    ],
  },
  {
    id: "control",
    name: "Control & Quality",
    color: "#C44536",
    criteria: [
      {
        id: "inventory_control",
        name: "Inventory Accuracy & Control",
        description:
          "Real-time visibility into stock levels, shrinkage, cycle counts.",
        buildScore: 8,
        outsourceScore: 5,
        whyItMatters:
          "When it's your warehouse, your team does the cycle counts, you can see the inventory in real time, and you know exactly what's on every shelf. With a 3PL, you're trusting their WMS and their staff. For direct selling — where a distributor might order a specific promotional kit that was supposed to be in stock — inventory accuracy is critical to maintaining trust.",
        scoringRationale:
          "Build scores an 8 because you have direct, real-time visibility and control over every shelf and every SKU. Your team does the cycle counts, investigates discrepancies immediately, and maintains institutional knowledge of inventory patterns. 3PL scores a 5 because professional 3PLs have good WMS systems, but they'll never match the visibility of walking your own floor. Resolving discrepancies takes longer when you're communicating across company boundaries. The 3PL doesn't score lower because modern 3PL technology has improved significantly.",
        defaultWeight: 8,
      },
      {
        id: "quality_control",
        name: "Packaging & Quality Standards",
        description:
          "Custom kitting, branded packaging, promotional inserts.",
        buildScore: 9,
        outsourceScore: 5,
        whyItMatters:
          "In direct selling, the unboxing experience is the brand experience for many distributors. Custom kitting, promotional inserts, branded tissue paper, event-specific packaging — your team does this with care because they understand the brand. A 3PL warehouse worker processing 500 orders across 10 different clients may not have that same attention to detail. If packaging quality matters to your brand, this criterion should carry heavy weight.",
        scoringRationale:
          "Build scores a 9 — this is potentially the most emotionally important criterion for direct selling. Your team understands the brand, the distributor culture, and why that promotional insert matters. They take pride in the unboxing experience. 3PL scores a 5 because warehouse workers processing hundreds of orders across multiple clients can't invest the same care. You can write SOPs and do QA checks, but the cultural connection to the brand is harder to outsource. Build doesn't score a 10 because even in-house teams can get sloppy under pressure.",
        defaultWeight: 7,
      },
      {
        id: "data_ownership",
        name: "Data Ownership & Visibility",
        description:
          "Who owns the operational data? Can you see it in real time?",
        buildScore: 9,
        outsourceScore: 5,
        whyItMatters:
          "When you own the operation, every data point flows through your systems — real-time order status, inventory movements, picking accuracy, shipping times. This data is critical for demand planning, distributor satisfaction tracking, and operational optimization. With a 3PL, you depend on their system integration and reporting quality, which varies wildly across providers.",
        scoringRationale:
          "Build scores a 9 because your data lives in your house — full real-time visibility into every operational metric. You can build custom dashboards, run ad-hoc queries, and integrate seamlessly with your back-office systems. 3PL scores a 5 because data visibility is highly variable — some providers have excellent tech stacks with real-time API integrations and live dashboards; others give you an Excel file every Monday morning. The score reflects the average, but your specific 3PL choice could shift this significantly.",
        defaultWeight: 7,
      },
      {
        id: "compliance",
        name: "Regulatory Compliance",
        description:
          "COFEPRIS, customs, product handling regulations.",
        buildScore: 6,
        outsourceScore: 7,
        whyItMatters:
          "If your company's products include supplements or cosmetics, there are COFEPRIS regulations around storage, handling, and documentation. Building compliance infrastructure in-house requires dedicated staff and ongoing audits. A good 3PL that serves the health and beauty industry likely has these certifications and processes already in place — but you can outsource the work, not the responsibility.",
        scoringRationale:
          "Build scores a 6 because maintaining COFEPRIS compliance, customs documentation, and product handling certifications requires dedicated staff, regular audits, and staying current with regulatory changes. It's doable but resource-intensive. 3PL scores a 7 because experienced providers serving health and beauty already have certifications, trained staff, and established compliance processes. The gap is small because you still need to verify and audit their compliance — regulatory responsibility can never be fully delegated. You outsource the work, not the accountability.",
        defaultWeight: 6,
      },
    ],
  },
  {
    id: "risk",
    name: "Risk",
    color: "#E07A5F",
    criteria: [
      {
        id: "execution_risk",
        name: "Transition / Execution Risk",
        description:
          "What could go wrong during the changeover period?",
        buildScore: 8,
        outsourceScore: 4,
        whyItMatters:
          "This is the risk of changing what you're doing today. Staying in-house means no transition risk at all — you just keep going and expand incrementally. Moving to a 3PL means a complex migration: transferring inventory, integrating systems, training their team on your processes, and running parallel operations during cutover. If the transition goes badly during a peak period, you could damage distributor relationships.",
        scoringRationale:
          "Build scores an 8 because there's no transition risk — you continue what you're already doing and expand incrementally. The operational knowledge stays in-house and there's no migration to manage. 3PL scores a 4 because the transition itself is genuinely risky: transferring inventory, integrating systems, training their team on your processes, running parallel operations during cutover. If it goes badly during a peak period, distributor relationships suffer. This is a one-time risk (not ongoing), but it's real and substantial.",
        defaultWeight: 8,
      },
      {
        id: "dependency_risk",
        name: "Single Vendor Dependency",
        description:
          "What happens if your 3PL has a major failure?",
        buildScore: 8,
        outsourceScore: 3,
        whyItMatters:
          "If your 3PL has a warehouse fire, a labor strike, a system outage, or simply goes out of business — your entire fulfillment operation stops. When you own the operation, those risks are under your control. This is one of the strongest arguments for keeping things in-house, and it's why mitigation strategies (dual-sourcing, backup capabilities) are critical for any 3PL arrangement.",
        scoringRationale:
          "Build scores an 8 because operational risks are under your direct control. A warehouse fire or system failure is still bad, but you can respond immediately and directly. 3PL scores a 3 because your entire fulfillment depends on a third party. If they have a major failure — fire, strike, outage, bankruptcy — you're helpless. The mitigation strategy is to split volume across two 3PLs or maintain a small in-house capability as backup, but that adds cost and complexity that undermines some of the 3PL benefits.",
        defaultWeight: 7,
      },
      {
        id: "labor_risk",
        name: "Labor & Staffing Risk",
        description: "Hiring, training, turnover, labor disputes.",
        buildScore: 3,
        outsourceScore: 8,
        whyItMatters:
          "Hiring warehouse workers, managing turnover (which is notoriously high in fulfillment), handling labor law compliance in Mexico, dealing with IMSS, training new staff constantly — this all falls on your HR and operations teams when you build. A 3PL absorbs all of this. If they lose workers, that's their problem to solve. At rapid growth, staffing is often the operational bottleneck that breaks first.",
        scoringRationale:
          "Build scores a 3 because at rapid growth, staffing is often the bottleneck that breaks first. You're constantly hiring, training, losing people to turnover, and navigating IMSS and labor law compliance. The warehouse manager spends more time on HR than on operations. 3PL scores an 8 because they absorb all workforce management headaches — hiring, training, turnover, labor compliance, benefits. If they lose workers, that's their problem to backfill, not yours.",
        defaultWeight: 6,
      },
    ],
  },
];

export const allCriteria = CATEGORIES.flatMap((cat) =>
  cat.criteria.map((c) => ({ ...c, categoryId: cat.id, categoryName: cat.name, categoryColor: cat.color }))
);
