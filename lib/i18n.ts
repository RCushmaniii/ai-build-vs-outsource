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

    // Navigation
    nav_buildVsOutsource: "Build vs. Outsource",
    nav_opsCostSim: "Cost Simulator",

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

    // ── Operational Cost Simulator ──────────────────────────────

    // Page chrome
    ops_title: "Operational Cost Simulator",
    ops_subtitle: "Interactive what-if tool for modeling operational costs under growth scenarios",
    ops_instructions: "Drag the volume slider or select a scenario. Edit costs below to model your specific operation.",
    ops_linkCopied: "Link copied to clipboard!",

    // Dashboard
    ops_currentState: "Current State",
    ops_projectedState: "Projected State",
    ops_ordersPerMonth: "orders/month",
    ops_totalMonthlyCost: "Monthly Cost",
    ops_totalCostLabel: "total cost",
    ops_costPerOrder: "Cost / Order",
    ops_margin: "Margin",
    ops_breakEvenLabel: "Break-Even",
    ops_costBreakdown: "Cost Breakdown",
    ops_fixed: "Fixed",
    ops_variable: "Variable",
    ops_step: "Step",
    ops_warehouseUtil: "Warehouse Utilization",
    ops_laborUtil: "Labor Utilization",
    ops_capacity: "capacity",
    ops_triggered: "Triggered Costs",

    // Step cost descriptions
    ops_stepFTE3: "Additional warehouse FTE (#3)",
    ops_stepWarehouse: "Additional warehouse space (+10K sq ft)",

    // Scenarios
    ops_scenarios: "Growth Scenarios",
    ops_presetsLabel: "Presets:",
    ops_projectedVolume: "Projected Volume",
    ops_currentLabel: "Current",
    ops_projectedLabel: "Projected",
    ops_scenario_current: "Current",
    ops_scenario_current_desc: "Baseline 520 orders/month",
    ops_scenario_conservative: "Conservative (+30%)",
    ops_scenario_conservative_desc: "Steady organic growth",
    ops_scenario_expected: "Expected (+50%)",
    ops_scenario_expected_desc: "Moderate growth scenario",
    ops_scenario_convention: "Convention (+100%)",
    ops_scenario_convention_desc: "Peak season surge — doubled volume, higher returns",
    ops_scenario_aggressive: "Aggressive (+200%)",
    ops_scenario_aggressive_desc: "Post-expansion full capacity push",

    // Charts
    ops_costCurveTitle: "Cost per Order vs. Volume",
    ops_costCurveDesc: "Shows how unit economics improve with scale — and where step costs create jumps",
    ops_marginCurveTitle: "Margin % vs. Volume",
    ops_marginCurveDesc: "Identifies the sweet spot where margins peak before capacity constraints compress them",
    ops_totalCostTitle: "Total Monthly Cost vs. Volume",
    ops_totalCostDesc: "Step-function costs create visible jumps when hiring thresholds or capacity limits are reached",

    // Cost input panel
    ops_costStructure: "Cost Structure",
    ops_costStructureDesc: "Edit any field to see how changes affect your cost curves and margins in real time.",
    ops_fixedCosts: "Fixed Costs",
    ops_variableCosts: "Variable Costs",
    ops_stepCosts: "Step Costs",
    ops_warehouseLease: "Warehouse Lease",
    ops_equipment: "Equipment Lease",
    ops_utilities: "Insurance & Utilities",
    ops_management: "Management Salaries",
    ops_totalFixed: "Total Fixed",
    ops_laborPerOrder: "Picking & Packing Labor",
    ops_shippingPerOrder: "Shipping (avg)",
    ops_packagingPerOrder: "Packaging Materials",
    ops_returnsRate: "Returns Rate",
    ops_returnsCost: "Returns Processing Cost",
    ops_totalVariable: "Total Variable",
    ops_scenarioSettings: "Revenue & Capacity",
    ops_avgRevenue: "Avg Revenue per Order",
    ops_currentVolume: "Current Monthly Volume",
    ops_warehouseCapacity: "Warehouse Capacity",
    ops_demoDisclaimer: "Demo assumptions based on a Terramar-like direct-selling company. All values are editable — replace with your actual data for accurate modeling.",

    // Comparison table
    ops_comparisonTitle: "Scenario Comparison",
    ops_metric: "Metric",
    ops_monthlyVolume: "Monthly Volume",

    // How it works
    ops_howItWorksTitle: "How This Tool Works",
    ops_howItWorks1: "Operational costs are modeled as three layers: fixed costs (rent, equipment, management), variable costs (labor, shipping, packaging per order), and step-function costs (new hires and facility expansions triggered at volume thresholds). This separation reveals how unit economics actually behave at different scales.",
    ops_howItWorks2: "The volume slider lets you instantly see what happens to your cost per order, margin, and utilization at any volume level. Volume discount tiers for shipping and packaging kick in automatically, and step costs appear when you cross hiring or capacity thresholds.",
    ops_howItWorks3: "Every input is editable — replace the demo defaults with your real numbers for accurate modeling. The URL updates as you adjust, so you can bookmark or share any specific configuration for board presentations.",
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

    // Navigation
    nav_buildVsOutsource: "Construir vs. Tercerizar",
    nav_opsCostSim: "Simulador de Costos",

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

    // ── Simulador de Costos Operativos ──────────────────────────

    // Page chrome
    ops_title: "Simulador de Costos Operativos",
    ops_subtitle: "Herramienta interactiva para modelar costos operativos bajo escenarios de crecimiento",
    ops_instructions: "Arrastre el control de volumen o seleccione un escenario. Edite los costos abajo para modelar su operación específica.",
    ops_linkCopied: "Enlace copiado al portapapeles!",

    // Dashboard
    ops_currentState: "Estado Actual",
    ops_projectedState: "Estado Proyectado",
    ops_ordersPerMonth: "pedidos/mes",
    ops_totalMonthlyCost: "Costo Mensual",
    ops_totalCostLabel: "costo total",
    ops_costPerOrder: "Costo / Pedido",
    ops_margin: "Margen",
    ops_breakEvenLabel: "Punto de Equilibrio",
    ops_costBreakdown: "Desglose de Costos",
    ops_fixed: "Fijo",
    ops_variable: "Variable",
    ops_step: "Escalonado",
    ops_warehouseUtil: "Utilización del Almacén",
    ops_laborUtil: "Utilización de Personal",
    ops_capacity: "capacidad",
    ops_triggered: "Costos Activados",

    // Step cost descriptions
    ops_stepFTE3: "FTE adicional de almacén (#3)",
    ops_stepWarehouse: "Espacio adicional de almacén (+10K pies²)",

    // Scenarios
    ops_scenarios: "Escenarios de Crecimiento",
    ops_presetsLabel: "Presets:",
    ops_projectedVolume: "Volumen Proyectado",
    ops_currentLabel: "Actual",
    ops_projectedLabel: "Proyectado",
    ops_scenario_current: "Actual",
    ops_scenario_current_desc: "Línea base de 520 pedidos/mes",
    ops_scenario_conservative: "Conservador (+30%)",
    ops_scenario_conservative_desc: "Crecimiento orgánico estable",
    ops_scenario_expected: "Esperado (+50%)",
    ops_scenario_expected_desc: "Escenario de crecimiento moderado",
    ops_scenario_convention: "Convención (+100%)",
    ops_scenario_convention_desc: "Pico de temporada — volumen duplicado, más devoluciones",
    ops_scenario_aggressive: "Agresivo (+200%)",
    ops_scenario_aggressive_desc: "Impulso de capacidad total post-expansión",

    // Charts
    ops_costCurveTitle: "Costo por Pedido vs. Volumen",
    ops_costCurveDesc: "Muestra cómo la economía unitaria mejora con escala — y dónde los costos escalonados crean saltos",
    ops_marginCurveTitle: "Margen % vs. Volumen",
    ops_marginCurveDesc: "Identifica el punto óptimo donde los márgenes alcanzan su pico antes de que las restricciones de capacidad los compriman",
    ops_totalCostTitle: "Costo Total Mensual vs. Volumen",
    ops_totalCostDesc: "Los costos escalonados crean saltos visibles cuando se alcanzan umbrales de contratación o límites de capacidad",

    // Cost input panel
    ops_costStructure: "Estructura de Costos",
    ops_costStructureDesc: "Edite cualquier campo para ver cómo los cambios afectan sus curvas de costos y márgenes en tiempo real.",
    ops_fixedCosts: "Costos Fijos",
    ops_variableCosts: "Costos Variables",
    ops_stepCosts: "Costos Escalonados",
    ops_warehouseLease: "Renta del Almacén",
    ops_equipment: "Arrendamiento de Equipo",
    ops_utilities: "Seguro y Servicios",
    ops_management: "Salarios de Gestión",
    ops_totalFixed: "Total Fijo",
    ops_laborPerOrder: "Mano de Obra (Recoger y Empacar)",
    ops_shippingPerOrder: "Envío (promedio)",
    ops_packagingPerOrder: "Material de Empaque",
    ops_returnsRate: "Tasa de Devoluciones",
    ops_returnsCost: "Costo de Procesamiento de Devolución",
    ops_totalVariable: "Total Variable",
    ops_scenarioSettings: "Ingresos y Capacidad",
    ops_avgRevenue: "Ingreso Promedio por Pedido",
    ops_currentVolume: "Volumen Mensual Actual",
    ops_warehouseCapacity: "Capacidad del Almacén",
    ops_demoDisclaimer: "Supuestos de demostración basados en una empresa de venta directa tipo Terramar. Todos los valores son editables — reemplace con sus datos reales para un modelado preciso.",

    // Comparison table
    ops_comparisonTitle: "Comparación de Escenarios",
    ops_metric: "Métrica",
    ops_monthlyVolume: "Volumen Mensual",

    // How it works
    ops_howItWorksTitle: "Cómo Funciona Esta Herramienta",
    ops_howItWorks1: "Los costos operativos se modelan en tres capas: costos fijos (renta, equipo, gestión), costos variables (mano de obra, envío, empaque por pedido) y costos escalonados (nuevas contrataciones y expansiones de instalaciones activadas en umbrales de volumen). Esta separación revela cómo la economía unitaria realmente se comporta a diferentes escalas.",
    ops_howItWorks2: "El control de volumen le permite ver instantáneamente qué sucede con su costo por pedido, margen y utilización a cualquier nivel de volumen. Los descuentos por volumen en envío y empaque se activan automáticamente, y los costos escalonados aparecen cuando cruza umbrales de contratación o capacidad.",
    ops_howItWorks3: "Cada entrada es editable — reemplace los valores de demostración con sus números reales para un modelado preciso. La URL se actualiza mientras ajusta, así que puede guardar o compartir cualquier configuración específica para presentaciones a la junta.",
  },
};

export type Translations = (typeof translations)["en"];
