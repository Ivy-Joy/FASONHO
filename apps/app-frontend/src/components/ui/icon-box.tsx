// src/components/ui/icon-box.tsx
import React, { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  variant?: "gold" | "blue" | "slate" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconBox({ children, variant = "gold", size = "md", className = "" }: IconBoxProps) {
  const sizes = {
    sm: "h-8 w-8 rounded-lg text-sm",
    md: "h-10 w-10 rounded-xl text-base",
    lg: "h-12 w-12 rounded-2xl text-lg",
  };

  const variants = {
    gold: "bg-[#D4A72C]/10 text-[#D4A72C] border border-[#D4A72C]/20",
    blue: "bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
    dark: "bg-[#071A3D] text-white border border-slate-800",
  };

  return (
    <div className={`flex items-center justify-center shrink-0 ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}