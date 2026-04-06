---
# === CONTROL FLAGS ===
portfolio_enabled: true
portfolio_priority: 15
portfolio_featured: false

# === CARD DISPLAY ===
title: "Build vs. Outsource Decision Framework"
tagline: "Interactive decision tools with weighted scoring, cost modeling, and board-ready output"
slug: "ai-build-vs-outsource"
category: "Tools"
tech_stack:
  - "Next.js 16"
  - "React 19"
  - "Tailwind CSS 4"
  - "Framer Motion"
  - "Recharts"
thumbnail: "/images/ai-build-vs-outsource-thumb.jpg"
status: "Production"

# === DETAIL PAGE ===
problem: "Operations leaders at growth-stage companies face high-stakes build-or-outsource decisions armed with gut feel, incomplete spreadsheets, and circular boardroom arguments. No tool combines structured weighted scoring with real-time cost modeling and shareable, board-ready output."
solution: "A suite of interactive decision-support tools that replace guesswork with data-driven analysis. A 20-criterion weighted scoring framework evaluates build vs. outsource across five categories, while an operational cost simulator reveals hidden step-function costs — all shareable via URL-encoded state."
key_features:
  - "20-criterion weighted scoring across 5 categories (Financial, Operational, Strategic, Control, Risk) with real-time verdict"
  - "Operational Cost Simulator with three-layer cost model — fixed, variable, and step-function costs with break-even analysis"
  - "6 decision presets and 5 growth scenario presets for rapid what-if analysis"
  - "Shareable URL encoding — full tool state in query params for board presentations"
  - "Full EN/ES bilingual support with dark/light theme toggle and print-ready layouts"

# === LINKS ===
demo_url: "https://ai-build-vs-outsource.vercel.app"
live_url: "https://ai-build-vs-outsource.vercel.app"

# === MEDIA: PORTFOLIO SLIDES ===
slides:
  - src: "/images/ai-build-vs-outsource-01.png"
    alt_en: "Operations Decision Tools Suite — structured analysis replaces boardroom guesswork"
    alt_es: "Suite de Herramientas de Decision Operativa — analisis estructurado reemplaza suposiciones en la sala de juntas"
  - src: "/images/ai-build-vs-outsource-02.png"
    alt_en: "The Problem — gut feel, incomplete spreadsheets, and circular arguments drive million-dollar decisions"
    alt_es: "El Problema — instinto, hojas de calculo incompletas y argumentos circulares impulsan decisiones millonarias"
  - src: "/images/ai-build-vs-outsource-03.png"
    alt_en: "20-Criterion Weighted Scoring — five categories with real-time verdict and radar chart"
    alt_es: "Puntuacion Ponderada de 20 Criterios — cinco categorias con veredicto en tiempo real y grafico radar"
  - src: "/images/ai-build-vs-outsource-04.png"
    alt_en: "Scenario Presets — Growth Emergency, Control First, Cost Optimizer shift the verdict instantly"
    alt_es: "Presets de Escenarios — Emergencia de Crecimiento, Control Primero, Optimizador de Costos cambian el veredicto al instante"
  - src: "/images/ai-build-vs-outsource-05.png"
    alt_en: "Expandable Rationale — each criterion includes industry analysis and scoring guidance"
    alt_es: "Justificacion Expandible — cada criterio incluye analisis de industria y guia de puntuacion"
  - src: "/images/ai-build-vs-outsource-06.png"
    alt_en: "Operational Cost Simulator — three-layer cost model with volume slider and cost-per-order curves"
    alt_es: "Simulador de Costos Operativos — modelo de costos de tres capas con control de volumen y curvas de costo por orden"
  - src: "/images/ai-build-vs-outsource-07.png"
    alt_en: "Step-Function Costs Revealed — watch cost-per-order jump when new hires and warehouse expansions trigger"
    alt_es: "Costos Escalonados Revelados — observa el salto del costo por orden cuando se activan nuevas contrataciones y expansiones"
  - src: "/images/ai-build-vs-outsource-08.png"
    alt_en: "Break-Even and Margin Analysis — utilization gauges and margin visualization with profitability threshold"
    alt_es: "Analisis de Punto de Equilibrio y Margen — indicadores de utilizacion y visualizacion de margen con umbral de rentabilidad"
  - src: "/images/ai-build-vs-outsource-09.png"
    alt_en: "Shareable and Board-Ready — full state encoded in URL params, print-optimized layouts for PDFs"
    alt_es: "Compartible y Listo para Presentar — estado completo codificado en URL, disenos optimizados para impresion PDF"
  - src: "/images/ai-build-vs-outsource-10.png"
    alt_en: "Technical Architecture — Next.js 16, React 19, Recharts, Framer Motion, bilingual, zero backend"
    alt_es: "Arquitectura Tecnica — Next.js 16, React 19, Recharts, Framer Motion, bilingue, sin backend"

# === MEDIA: VIDEO ===
video_url: "/video/ai-build-vs-outsource-brief.mp4"
video_poster: "/video/ai-build-vs-outsource-brief-poster.jpg"

# === OPTIONAL ===
metrics:
  - "20 weighted criteria across 5 decision categories"
  - "6 decision presets + 5 growth scenario presets"
  - "Full state shareable via URL — no backend required"
tags:
  - "nextjs"
  - "react"
  - "typescript"
  - "tailwind"
  - "framer-motion"
  - "recharts"
  - "decision-tools"
  - "operations"
  - "bilingual"
  - "data-visualization"
date_completed: "2026-02"

# === REPO HEALTH STATUS ===
# Last audited: 2026-04-05
# Standards defined in: operating-system/delivery/repo-health-baseline.md
health_status:
  sentry: "-"
  testing: "-"
  ci_cd: "Y"
  health_endpoint: "n/a"
  security_headers: "Y"
  rate_limiting: "n/a"
  env_validation: "-"
  analytics: "DEFERRED"
  structured_logging: "-"
  dependabot: "Y"
  secret_scanning: "Y"
  db_backup: "-"
health_status:
  sentry: "-"
  testing: "-"
  ci_cd: "Y"
  health_endpoint: "n/a"
  security_headers: "-"
  rate_limiting: "n/a"
  env_validation: "-"
  analytics: "DEFERRED"
  structured_logging: "-"
  dependabot: "Y"
  secret_scanning: "Y"
  db_backup: "-"
---

## Overview

The Operations Decision Tools Suite is a set of interactive, client-side decision-support tools built for operations leaders at growth-stage companies. It replaces gut-feel boardroom debates with structured, data-driven analysis that can be shared via URL and printed for board presentations.

The suite includes two tools: a Build vs. Outsource Decision Framework with 20 weighted criteria across five categories, and an Operational Cost Simulator that models fixed, variable, and step-function costs across different growth scenarios.

## The Challenge

Operations leaders at growth-stage companies face high-stakes decisions every quarter — build or outsource fulfillment? Expand to a new market? These decisions are typically made with:

- **Gut feel** instead of structured criteria
- **Incomplete spreadsheets** that miss hidden step-function costs
- **Circular boardroom arguments** with no framework to resolve disagreements
- **No shared artifact** — decisions made in meetings but never documented with the reasoning

The result: million-dollar operational commitments made without rigorous, repeatable analysis.

## The Solution

### Build vs. Outsource Decision Framework

A 20-criterion weighted scoring tool for evaluating whether to build logistics capacity in-house or outsource to a 3PL. Criteria are organized across five categories — Financial, Operational, Strategic, Control & Quality, and Risk — each with expandable rationale including industry analysis and scoring guidance.

Six scenario presets (Balanced, Growth Emergency, Control First, Cost Optimizer, Risk Averse, Recommended Default) demonstrate how different organizational priorities lead to different optimal decisions. A 5-axis radar chart and animated verdict panel provide instant visual feedback.

### Operational Cost Simulator

An interactive what-if tool for modeling how operational costs change under different growth scenarios. It reveals the hidden step-function costs that blindside growing companies — new FTE hires at volume thresholds, warehouse expansions, equipment upgrades.

The three-layer cost model separates fixed costs (lease, equipment, utilities), variable costs per order (labor, shipping, packaging), and step-function costs. Volume discount tiers, utilization gauges, break-even analysis, and margin visualization complete the picture.

## Technical Highlights

- **Zero backend:** Fully client-side with all state encoded in URL query parameters for sharing
- **Real-time reactivity:** Every slider drag instantly recalculates scores, charts, verdicts, and cost curves
- **Framer Motion animations:** Smooth transitions on verdict changes, category expansions, and chart updates
- **Recharts visualizations:** 5-axis radar chart, cost-per-order curves, margin charts, and total cost staircases
- **Print-optimized:** Strips interactive elements for clean board-presentation PDFs
- **Bilingual:** Full EN/ES translation across all criteria, rationale content, UI labels, and chart legends
