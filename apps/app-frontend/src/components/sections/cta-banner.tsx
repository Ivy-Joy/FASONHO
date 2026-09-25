// apps/app-frontend/src/components/sections/cta-banner.tsx

import React from "react";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#030A1A] px-6 py-6 sm:px-10 sm:py-7 text-white shadow-xl border border-slate-800/40">
      {/* Glowing Mesh Globe Wireframe Graphic */}
      <div className="pointer-events-none absolute -right-10 -bottom-28 h-64 w-80 sm:h-72 sm:w-[420px] opacity-80 sm:opacity-95">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />
        <svg
          className="h-full w-full stroke-blue-400/35"
          viewBox="0 0 200 120"
          fill="none"
        >
          {/* Sphere grid lines */}
          <circle cx="100" cy="100" r="80" strokeWidth="0.75" />
          <ellipse cx="100" cy="100" rx="80" ry="24" strokeWidth="0.75" />
          <ellipse cx="100" cy="100" rx="80" ry="50" strokeWidth="0.75" />
          <ellipse cx="100" cy="100" rx="28" ry="80" strokeWidth="0.75" />
          <ellipse cx="100" cy="100" rx="56" ry="80" strokeWidth="0.75" />
          <line x1="20" y1="100" x2="180" y2="100" strokeWidth="0.75" />
          {/* Node Points */}
          <circle cx="65" cy="80" r="2" fill="#D4A72C" />
          <circle cx="110" cy="60" r="2" fill="#60A5FA" />
          <circle cx="140" cy="95" r="2" fill="#93C5FD" />
          <circle cx="80" cy="115" r="2" fill="#D4A72C" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        {/* Banner Text Block */}
        <div className="max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A72C]">
            GET STARTED
          </p>

          <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Ready to build <span className="text-[#D4A72C]">something</span> great?
          </h2>

          <p className="mt-1 text-xs text-slate-300 leading-relaxed">
            Join thousands of developers and teams using FASONHO to create the future.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="flex flex-col items-start lg:items-end shrink-0">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A72C] px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-[#c29624] shadow-md"
          >
            Get Started Free
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <p className="mt-1.5 text-[10px] text-slate-400">
            No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}