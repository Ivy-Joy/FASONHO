// src/components/icons/fasonho-logo.tsx

import React from "react";

interface FasonhoLogoProps {
  dark?: boolean;
  className?: string;
  showTagline?: boolean;
}

export function FasonhoLogo({
  dark = false,
  className = "",
  showTagline = true,
}: FasonhoLogoProps) {
  const text = dark ? "#FFFFFF" : "#0B1A30";
  const tag = dark ? "#94A3B8" : "#64748B";

  return (
    <div className={`inline-flex flex-col items-end ${className}`}>
      <div className="flex items-center leading-none">
        {/* F */}
        <span
          className="text-[34px] font-black tracking-[-0.06em]"
          style={{ color: text }}
        >
          F
        </span>

        {/* Stylized Apex A - Scaled to exact cap-height */}
        <svg
          viewBox="0 0 28 28"
          className="mx-[2px] h-[25px] w-[25px] shrink-0"
          fill="none"
        >
          <defs>
            <linearGradient id="fa" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          <path
            d="M 3 25 L 14 4 L 25 25"
            stroke="url(#fa)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* SONHO */}
        <span
          className="text-[34px] font-black tracking-[-0.06em]"
          style={{ color: text }}
        >
          SONHO
        </span>
      </div>

      {showTagline && (
        <span
          className="mr-[2px] mt-[2px] text-[11px] font-medium tracking-[0.01em]"
          style={{ color: tag }}
        >
          Technology, made simpler.
        </span>
      )}
    </div>
  );
}