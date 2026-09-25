// src/components/ui/section-title.tsx
import React, { ReactNode } from "react";
import { Badge } from "./badge";

interface SectionTitleProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-xl";

  return (
    <div className={`space-y-3 mb-12 sm:mb-16 ${alignment} ${className}`}>
      {badge && <Badge variant="gold">{badge}</Badge>}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#08152D] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}