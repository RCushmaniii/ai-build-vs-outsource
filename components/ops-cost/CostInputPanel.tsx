"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { NumberInput } from "./NumberInput";
import { fmt } from "@/lib/ops-calculations";
import type { CostModel } from "@/data/ops-cost-defaults";

interface CostInputPanelProps {
  model: CostModel;
  onUpdate: <K extends keyof CostModel>(field: K, value: CostModel[K]) => void;
}

export function CostInputPanel({ model, onUpdate }: CostInputPanelProps) {
  const { t } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ts = t as any as Record<string, string>;
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const fixedTotal =
    model.warehouseLease + model.equipment + model.utilities + model.management;
  const returnsCostAvg =
    model.returnsCostPerOrder * (model.returnsRate / 100);
  const variableTotal =
    model.laborPerOrder +
    model.shippingPerOrder +
    model.packagingPerOrder +
    returnsCostAvg;

  const sections = [
    {
      id: "fixed",
      title: ts.ops_fixedCosts ?? "Fixed Costs",
      subtitle: `${fmt.usd(fixedTotal)}/mo`,
      color: "#3b82f6",
      content: (
        <div className="space-y-1">
          <NumberInput
            label={ts.ops_warehouseLease ?? "Warehouse Lease"}
            value={model.warehouseLease}
            onChange={(v) => onUpdate("warehouseLease", v)}
            suffix="/mo"
            step={100}
          />
          <NumberInput
            label={ts.ops_equipment ?? "Equipment Lease"}
            value={model.equipment}
            onChange={(v) => onUpdate("equipment", v)}
            suffix="/mo"
            step={50}
          />
          <NumberInput
            label={ts.ops_utilities ?? "Insurance & Utilities"}
            value={model.utilities}
            onChange={(v) => onUpdate("utilities", v)}
            suffix="/mo"
            step={50}
          />
          <NumberInput
            label={ts.ops_management ?? "Management Salaries"}
            value={model.management}
            onChange={(v) => onUpdate("management", v)}
            suffix="/mo"
            step={500}
          />
          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <span className="text-sm font-semibold text-foreground">
              {ts.ops_totalFixed ?? "Total Fixed"}
            </span>
            <span className="font-mono font-bold text-foreground">
              {fmt.usd(fixedTotal)}/mo
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "variable",
      title: ts.ops_variableCosts ?? "Variable Costs",
      subtitle: `${fmt.usd2(variableTotal)}/order`,
      color: "#14b8a6",
      content: (
        <div className="space-y-1">
          <NumberInput
            label={ts.ops_laborPerOrder ?? "Picking & Packing Labor"}
            value={model.laborPerOrder}
            onChange={(v) => onUpdate("laborPerOrder", v)}
            suffix="/order"
            step={0.1}
          />
          <NumberInput
            label={ts.ops_shippingPerOrder ?? "Shipping (avg)"}
            value={model.shippingPerOrder}
            onChange={(v) => onUpdate("shippingPerOrder", v)}
            suffix="/order"
            step={0.25}
          />
          <NumberInput
            label={ts.ops_packagingPerOrder ?? "Packaging Materials"}
            value={model.packagingPerOrder}
            onChange={(v) => onUpdate("packagingPerOrder", v)}
            suffix="/order"
            step={0.05}
          />
          <NumberInput
            label={ts.ops_returnsRate ?? "Returns Rate"}
            value={model.returnsRate}
            onChange={(v) => onUpdate("returnsRate", v)}
            prefix=""
            suffix="%"
            step={0.5}
            max={50}
          />
          <NumberInput
            label={ts.ops_returnsCost ?? "Returns Processing Cost"}
            value={model.returnsCostPerOrder}
            onChange={(v) => onUpdate("returnsCostPerOrder", v)}
            suffix="/return"
            step={0.25}
          />
          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <span className="text-sm font-semibold text-foreground">
              {ts.ops_totalVariable ?? "Total Variable"}
            </span>
            <span className="font-mono font-bold text-foreground">
              {fmt.usd2(variableTotal)}/order
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "settings",
      title: ts.ops_scenarioSettings ?? "Revenue & Capacity",
      subtitle: `${fmt.usd2(model.avgRevenuePerOrder)}/order`,
      color: "#a855f7",
      content: (
        <div className="space-y-1">
          <NumberInput
            label={ts.ops_avgRevenue ?? "Avg Revenue per Order"}
            value={model.avgRevenuePerOrder}
            onChange={(v) => onUpdate("avgRevenuePerOrder", v)}
            suffix="/order"
            step={0.5}
          />
          <NumberInput
            label={ts.ops_currentVolume ?? "Current Monthly Volume"}
            value={model.currentVolume}
            onChange={(v) => onUpdate("currentVolume", v)}
            prefix=""
            suffix="orders"
            step={10}
          />
          <NumberInput
            label={ts.ops_warehouseCapacity ?? "Warehouse Capacity"}
            value={model.warehouseCapacity}
            onChange={(v) => onUpdate("warehouseCapacity", v)}
            prefix=""
            suffix="orders"
            step={50}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 mb-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        {ts.ops_costStructure ?? "Cost Structure"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {ts.ops_costStructureDesc ??
          "Edit any field to see how changes affect your cost curves and margins in real time."}
      </p>

      <div className="space-y-2">
        {sections.map((section) => {
          const isExpanded = expandedSection === section.id;
          return (
            <div key={section.id}>
              <button
                onClick={() =>
                  setExpandedSection(isExpanded ? null : section.id)
                }
                className="flex items-center gap-3 w-full py-2 group cursor-pointer"
                style={{ borderBottom: `2px solid ${section.color}22` }}
              >
                <div
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{ background: section.color }}
                />
                <span
                  className="font-mono text-sm font-bold uppercase tracking-widest"
                  style={{ color: section.color }}
                >
                  {section.title}
                </span>
                <span className="ml-auto text-sm font-mono text-muted-foreground">
                  {section.subtitle}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-3 px-1">{section.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Demo disclaimer */}
      <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-border/40">
        <p className="text-xs text-muted-foreground/60 leading-relaxed">
          {ts.ops_demoDisclaimer ??
            "Demo assumptions based on a Terramar-like direct-selling company. All values are editable — replace with your actual data for accurate modeling."}
        </p>
      </div>
    </div>
  );
}
