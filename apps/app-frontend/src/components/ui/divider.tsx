// src/components/ui/divider.tsx
import React from "react";

interface DividerProps {
  label?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Divider({ label, className = "", orientation = "horizontal" }: DividerProps) {
  if (orientation === "vertical") {
    return <div className={`h-full w-px bg-slate-200/80 ${className}`} />;
  }

  if (label) {
    return (
      <div className={`relative flex items-center my-6 ${className}`}>
        <div className="flex-grow border-t border-slate-200" />
        <span className="mx-4 shrink-0 text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</span>
        <div className="flex-grow border-t border-slate-200" />
      </div>
    );
  }

  return <hr className={`my-6 border-t border-slate-100 ${className}`} />;
}