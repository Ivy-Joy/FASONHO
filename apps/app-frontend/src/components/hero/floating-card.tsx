// src/components/hero/floating-card.tsx

import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <div
      className={`absolute hidden sm:flex items-center gap-2 rounded-xl border border-white/90 bg-white/95 px-2.5 py-2 shadow-lg backdrop-blur ${className}`}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEF5FF]">
        {icon}
      </div>

      <div className="whitespace-nowrap">
        <p className="text-[11px] font-bold text-[#081A35]">{title}</p>
        <p className="text-[9px] text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}