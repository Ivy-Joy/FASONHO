// src/components/hero/floating-card.tsx

import { ReactNode } from "react";

interface FloatingCardProps {
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
}: FloatingCardProps) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-xl border border-white/90 bg-white/95 px-3 py-2 shadow-[0_10px_25px_rgba(15,23,42,0.1)] backdrop-blur-md transition-all hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF5FF]">
        {icon}
      </div>
      <div className="whitespace-nowrap pr-0.5">
        <p className="text-[12px] font-bold leading-tight text-[#081A35]">{title}</p>
        <p className="text-[10px] font-medium leading-tight text-[#64748B]">{subtitle}</p>
      </div>
    </div>
  );
}