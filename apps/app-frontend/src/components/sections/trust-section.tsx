// apps/app-frontend/src/components/sections/trust-section.tsx

import React from "react";
import { CTABanner } from "@/src/components/sections/cta-banner";

const metrics = [
  { value: "10K+", label: "Developers" },
  { value: "500+", label: "Active Projects" },
  { value: "99.9%", label: "Uptime" },
  { value: "50+", label: "Countries" },
];

const partners = [
  { name: "GitHub", style: "font-bold text-slate-700" },
  { name: "Vercel", style: "font-semibold text-slate-800" },
  { name: "MongoDB", style: "font-semibold text-slate-700" },
  { name: "stripe", style: "font-black text-indigo-600 lowercase tracking-tighter" },
  { name: "Cloudinary", style: "font-medium text-slate-600" },
  { name: "aws", style: "font-bold text-slate-800 lowercase" },
  { name: "Postman", style: "font-semibold text-slate-700" },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFBFD] pt-6 pb-12 lg:pt-8 lg:pb-16">
      {/* Background Curved Wave */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120C240 40 480 180 720 120C960 60 1200 160 1440 100V0H0V120Z"
            fill="url(#trustGrad)"
          />
          <defs>
            <linearGradient id="trustGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FAFBFD" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
        {/* Main Section Content */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start xl:grid-cols-[320px_1fr]">
          {/* Left Heading & Text */}
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A72C]">
              TRUSTED BY INNOVATORS
            </p>

            <h2 className="text-2xl font-extrabold text-[#081A35] sm:text-3xl lg:text-4xl leading-[1.18] tracking-tight">
              Growing together,
              <br />
              globally.
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
              From independent developers to growing teams, FASONHO powers ideas
              around the world.
            </p>
          </div>

          {/* Right Column: Metrics (Top) + Partner Logos (Bottom aligned) */}
          <div className="flex flex-col justify-between space-y-8 pt-1">
            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-slate-200/80">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={index > 0 ? "sm:pl-6" : ""}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081A35] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Partner Logos Row (Aligned directly below the metrics) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              {partners.map((partner) => (
                <span
                  key={partner.name}
                  className={`text-xs sm:text-sm tracking-tight transition hover:opacity-100 ${partner.style}`}
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated CTA Banner */}
        <CTABanner />
      </div>
    </section>
  );
}