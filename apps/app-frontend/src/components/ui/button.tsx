// src/components/ui/button.tsx

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200";

  const styles = {
    // Solid Gold Pill (Get Started)
    primary:
      "bg-[#E0A82E] text-white hover:bg-[#c99522] shadow-sm shadow-[#E0A82E]/20 active:scale-[0.98]",
    // Gold Outlined Pill (Account)
    secondary:
      "border border-[#E0A82E] bg-white text-[#B88A1A] hover:bg-[#E0A82E]/10 active:scale-[0.98]",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) return <Link href={href} className={cls}>{children}</Link>;

  return <button className={cls}>{children}</button>;
}