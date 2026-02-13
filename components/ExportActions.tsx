"use client";

import { useCallback } from "react";
import { Printer, Link2, RotateCcw } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

interface ExportActionsProps {
  onReset: () => void;
}

export function ExportActions({ onReset }: ExportActionsProps) {
  const { t } = useLocale();

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert(t.linkCopied);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert(t.linkCopied);
    }
  }, [t]);

  return (
    <div className="flex flex-wrap gap-2 print:hidden">
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
      >
        <Printer className="w-3.5 h-3.5" />
        {t.printView}
      </button>
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
      >
        <Link2 className="w-3.5 h-3.5" />
        {t.shareLink}
      </button>
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border/60 bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        {t.resetAll}
      </button>
    </div>
  );
}
