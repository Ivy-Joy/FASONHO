// src/components/ui/container.tsx
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export function Container({ children, size = "xl", className = "" }: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}