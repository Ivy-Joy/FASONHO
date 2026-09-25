// src/components/ui/badge.tsx
import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "blue" | "slate" | "outline";
  className?: string;
}

export function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all";

  const styles = {
    gold: "bg-[#D4A72C]/10 text-[#B88A1A] border border-[#D4A72C]/30",
    blue: "bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
    outline: "border border-slate-300 text-slate-600 bg-white",
  };

  return <span className={`${base} ${styles[variant]} ${className}`}>{children}</span>;
}