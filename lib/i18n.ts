export type Locale = "en" | "es";

export const translations = {
  en: {
    // Header
    title: "Build vs. Outsource",
    subtitle: "Decision Framework — 20 Weighted Criteria",
    instructions: "Drag the weight sliders to reflect your priorities. The verdict updates in real time.",

    // Verdict panel
    overallVerdict: "Overall Verdict",
    leadsBy: (winner: string, pct: string) => `${winner} leads by ${pct}%`,
    deadEven: "Dead even — adjust weights to break the tie",
    buildLabel: "Build In-House",
    outsourceLabel: "Outsource (3PL)",
    weightedPoints: (score: number, max: number) => `${score} / ${max} weighted points`,
    howToRead: "How to read this:",
    howToReadBody: "These default scores represent a typical growth-stage direct-selling company. Adjust the weights below to reflect what matters most to your company right now. The verdict updates in real time.",
    weights: "weights",

    // Category headers
    criteria: "criteria",

    // Criterion cards
    whyThisMatters: "Why This Matters",
    scoringRationale: "Scoring Rationale",
    weight: "Weight",
    buildScoreLabel: "Build",
    outsourceScoreLabel: "3PL",

    // Presets
    presetsLabel: "Presets:",

    // Export
    printView: "Print View",
    shareLink: "Share Link",
    resetAll: "Reset All Weights",
    linkCopied: "Link copied to clipboard!",

    // Radar
    categoryComparison: "Category Comparison",

    // How it works
    howItWorksTitle: "How This Framework Works",
    howItWorks1: "Each criterion has two fixed scores (Build vs. 3PL) representing typical outcomes for a growth-stage direct-selling company. These defaults are based on industry patterns — once you provide your real data, we'll customize them to your exact situation.",
    howItWorks2: 'The weight is where your strategy comes in. A weight of 10 means "this is mission-critical to us right now." A weight of 1 means "nice to have but not a deciding factor." The final score is the sum of (score x weight) across all criteria.',
    howItWorks3: "The power of this model: When you adjust weights to reflect your real priorities, the answer emerges from your own strategic thinking — not from a gut feeling. It turns a complex, emotional decision into a data-driven conversation you can present to your CEO and board.",

    // Footer
    builtBy: "Built by",
    tagline: "AI Integration & Software Development Consulting",

    // Category names
    cat_financial: "Financial",
    cat_operational: "Operational",
    cat_strategic: "Strategic",
    cat_control: "Control & Quality",
    cat_risk: "Risk",

    // Preset names
    preset_balanced: "Balanced",
    preset_balanced_desc: "All weights at 5 — neutral starting point",
    preset_growth_emergency: "Growth Emergency",
    preset_growth_emergency_desc: "Speed, capacity, and cash flow maxed out",
    preset_control_first: "Control First",
    preset_control_first_desc: "Quality, inventory, and data ownership maxed out",
    preset_cost_optimizer: "Cost Optimizer",
    preset_cost_optimizer_desc: "Financial criteria heavily weighted",
    preset_risk_averse: "Risk Averse",
    preset_risk_averse_desc: "Risk and control criteria heavily weighted",
    preset_terramar_default: "Recommended Default",
    preset_terramar_default_desc: "Recommended weights for a growth-stage direct-selling company",

    // Criteria names
    cr_upfront_capital: "Upfront Capital Required",
    cr_upfront_capital_desc: "How much cash do you need to invest before seeing results?",
    cr_cost_per_order: "Cost Per Order",
    cr_cost_per_order_desc: "The all-in cost to pick, pack, and ship a single order.",
    cr_cost_predictability: "Cost Predictability",
    cr_cost_predictability_desc: "How accurately can you forecast monthly operations costs?",
    cr_cash_flow: "Cash Flow Impact",
    cr_cash_flow_desc: "Effect on your monthly cash position and working capital.",
    cr_speed_to_scale: "Speed to Scale",
    cr_speed_to_scale_desc: "How quickly can you double or triple capacity?",
    cr_geographic_reach: "Geographic Reach",
    cr_geographic_reach_desc: "Ability to ship anywhere in Mexico (and beyond) efficiently.",
    cr_peak_handling: "Peak / Surge Capacity",
    cr_peak_handling_desc: "Handling promotional events, conventions, enrollment surges.",
    cr_sla_performance: "SLA Performance",
    cr_sla_performance_desc: "Ability to consistently meet same-day/next-day shipping commitments.",
    cr_returns_handling: "Returns & Reverse Logistics",
    cr_returns_handling_desc: "Processing distributor returns, exchanges, damaged goods.",
    cr_mgmt_focus: "Management Focus",
    cr_mgmt_focus_desc: "How much leadership attention does operations consume?",
    cr_core_competency: "Core Competency Alignment",
    cr_core_competency_desc: "Is logistics your competitive advantage, or is it your distributor network?",
    cr_flexibility: "Business Model Flexibility",
    cr_flexibility_desc: "Ability to pivot (new product lines, new markets, new channels).",
    cr_exit_risk: "Vendor Lock-in / Exit Risk",
    cr_exit_risk_desc: "How hard is it to change course if this doesn't work?",
    cr_inventory_control: "Inventory Accuracy & Control",
    cr_inventory_control_desc: "Real-time visibility into stock levels, shrinkage, cycle counts.",
    cr_quality_control: "Packaging & Quality Standards",
    cr_quality_control_desc: "Custom kitting, branded packaging, promotional inserts.",
    cr_data_ownership: "Data Ownership & Visibility",
    cr_data_ownership_desc: "Who owns the operational data? Can you see it in real time?",
    cr_compliance: "Regulatory Compliance",
    cr_compliance_desc: "COFEPRIS, customs, product handling regulations.",
    cr_execution_risk: "Transition / Execution Risk",
    cr_execution_risk_desc: "What could go wrong during the changeover period?",
    cr_dependency_risk: "Single Vendor Dependency",
    cr_dependency_risk_desc: "What happens if your 3PL has a major failure?",
    cr_labor_risk: "Labor & Staffing Risk",
    cr_labor_risk_desc: "Hiring, training, turnover, labor disputes.",
  },
  es: {
    // Header
    title: "Construir vs. Tercerizar",
    subtitle: "Marco de Decisión — 20 Criterios Ponderados",
    instructions: "Ajuste los controles de peso para reflejar sus prioridades. El veredicto se actualiza en tiempo real.",

    // Verdict panel
    overallVerdict: "Veredicto General",
    leadsBy: (winner: string, pct: string) => `${winner} lidera por ${pct}%`,
    deadEven: "Empate — ajuste los pesos para desempatar",
    buildLabel: "Construir Interno",
    outsourceLabel: "Tercerizar (3PL)",
    weightedPoints: (score: number, max: number) => `${score} / ${max} puntos ponderados`,
    howToRead: "Cómo leer esto:",
    howToReadBody: "Estos puntajes predeterminados representan una empresa típica de venta directa en etapa de crecimiento. Ajuste los pesos a continuación para reflejar lo que más importa a su empresa en este momento. El veredicto se actualiza en tiempo real.",
    weights: "pesos",

    // Category headers
    criteria: "criterios",

    // Criterion cards
    whyThisMatters: "Por Qué Importa",
    scoringRationale: "Justificación del Puntaje",
    weight: "Peso",
    buildScoreLabel: "Construir",
    outsourceScoreLabel: "3PL",

    // Presets
    presetsLabel: "Presets:",

    // Export
    printView: "Vista de Impresión",
    shareLink: "Compartir Enlace",
    resetAll: "Restablecer Todos los Pesos",
    linkCopied: "Enlace copiado al portapapeles!",

    // Radar
    categoryComparison: "Comparación por Categoría",

    // How it works
    howItWorksTitle: "Cómo Funciona Este Marco",
    howItWorks1: "Cada criterio tiene dos puntajes fijos (Construir vs. 3PL) que representan resultados típicos para una empresa de venta directa en etapa de crecimiento. Estos valores predeterminados se basan en patrones de la industria — una vez que proporcione sus datos reales, los personalizaremos para su situación exacta.",
    howItWorks2: "El peso es donde entra su estrategia. Un peso de 10 significa \"esto es crítico para nosotros ahora mismo\". Un peso de 1 significa \"bueno tenerlo pero no es un factor decisivo\". El puntaje final es la suma de (puntaje x peso) en todos los criterios.",
    howItWorks3: "El poder de este modelo: Cuando ajusta los pesos para reflejar sus prioridades reales, la respuesta surge de su propio pensamiento estratégico — no de una corazonada. Convierte una decisión compleja y emocional en una conversación basada en datos que puede presentar a su CEO y junta directiva.",

    // Footer
    builtBy: "Construido por",
    tagline: "Consultoría de Integración de IA y Desarrollo de Software",

    // Category names
    cat_financial: "Financiero",
    cat_operational: "Operacional",
    cat_strategic: "Estratégico",
    cat_control: "Control y Calidad",
    cat_risk: "Riesgo",

    // Preset names
    preset_balanced: "Equilibrado",
    preset_balanced_desc: "Todos los pesos en 5 — punto de partida neutral",
    preset_growth_emergency: "Emergencia de Crecimiento",
    preset_growth_emergency_desc: "Velocidad, capacidad y flujo de efectivo al máximo",
    preset_control_first: "Control Primero",
    preset_control_first_desc: "Calidad, inventario y propiedad de datos al máximo",
    preset_cost_optimizer: "Optimizador de Costos",
    preset_cost_optimizer_desc: "Criterios financieros con peso alto",
    preset_risk_averse: "Aversión al Riesgo",
    preset_risk_averse_desc: "Criterios de riesgo y control con peso alto",
    preset_terramar_default: "Predeterminado Recomendado",
    preset_terramar_default_desc: "Pesos recomendados para una empresa de venta directa en etapa de crecimiento",

    // Criteria names
    cr_upfront_capital: "Capital Inicial Requerido",
    cr_upfront_capital_desc: "¿Cuánto efectivo necesita invertir antes de ver resultados?",
    cr_cost_per_order: "Costo por Pedido",
    cr_cost_per_order_desc: "El costo total de recoger, empacar y enviar un solo pedido.",
    cr_cost_predictability: "Previsibilidad de Costos",
    cr_cost_predictability_desc: "¿Qué tan preciso puede pronosticar los costos operativos mensuales?",
    cr_cash_flow: "Impacto en Flujo de Efectivo",
    cr_cash_flow_desc: "Efecto en su posición mensual de efectivo y capital de trabajo.",
    cr_speed_to_scale: "Velocidad de Escalamiento",
    cr_speed_to_scale_desc: "¿Qué tan rápido puede duplicar o triplicar la capacidad?",
    cr_geographic_reach: "Alcance Geográfico",
    cr_geographic_reach_desc: "Capacidad de enviar a cualquier parte de México (y más allá) eficientemente.",
    cr_peak_handling: "Capacidad de Picos / Surges",
    cr_peak_handling_desc: "Manejo de eventos promocionales, convenciones, oleadas de inscripción.",
    cr_sla_performance: "Rendimiento de SLA",
    cr_sla_performance_desc: "Capacidad de cumplir consistentemente con compromisos de envío el mismo día/siguiente.",
    cr_returns_handling: "Devoluciones y Logística Inversa",
    cr_returns_handling_desc: "Procesamiento de devoluciones de distribuidores, intercambios, mercancía dañada.",
    cr_mgmt_focus: "Enfoque de la Gerencia",
    cr_mgmt_focus_desc: "¿Cuánta atención de liderazgo consume las operaciones?",
    cr_core_competency: "Alineación de Competencia Central",
    cr_core_competency_desc: "¿La logística es su ventaja competitiva, o lo es su red de distribuidores?",
    cr_flexibility: "Flexibilidad del Modelo de Negocio",
    cr_flexibility_desc: "Capacidad de pivotar (nuevas líneas de productos, nuevos mercados, nuevos canales).",
    cr_exit_risk: "Riesgo de Dependencia / Salida",
    cr_exit_risk_desc: "¿Qué tan difícil es cambiar de rumbo si esto no funciona?",
    cr_inventory_control: "Precisión y Control de Inventario",
    cr_inventory_control_desc: "Visibilidad en tiempo real de niveles de stock, mermas, conteos cíclicos.",
    cr_quality_control: "Estándares de Empaque y Calidad",
    cr_quality_control_desc: "Kitting personalizado, empaque de marca, insertos promocionales.",
    cr_data_ownership: "Propiedad y Visibilidad de Datos",
    cr_data_ownership_desc: "¿Quién es dueño de los datos operativos? ¿Puede verlos en tiempo real?",
    cr_compliance: "Cumplimiento Regulatorio",
    cr_compliance_desc: "COFEPRIS, aduanas, regulaciones de manejo de productos.",
    cr_execution_risk: "Riesgo de Transición / Ejecución",
    cr_execution_risk_desc: "¿Qué podría salir mal durante el período de cambio?",
    cr_dependency_risk: "Dependencia de un Solo Proveedor",
    cr_dependency_risk_desc: "¿Qué pasa si su 3PL tiene una falla grave?",
    cr_labor_risk: "Riesgo Laboral y de Personal",
    cr_labor_risk_desc: "Contratación, capacitación, rotación, disputas laborales.",
  },
};

export type Translations = (typeof translations)["en"];
