// src/components/hero/hero-section.tsx

import { HeroButtons } from "./hero-buttons";
import { HeroDashboard } from "./hero-dashboard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#F8FBFF]" />

        <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl md:h-[420px] md:w-[420px]" />

        <div className="absolute top-0 right-0 h-full w-[90%] md:w-[70%] lg:w-[52%]">
          <svg
            viewBox="0 0 800 700"
            preserveAspectRatio="none"
            className="h-full w-full"
            fill="none"
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ECE9FE" stopOpacity=".85" />
                <stop offset="100%" stopColor="#C7D2FE" stopOpacity=".45" />
              </linearGradient>

              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BFDBFE" stopOpacity=".55" />
              </linearGradient>

              <linearGradient id="g3" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F0F9FF" />
                <stop offset="100%" stopColor="#E0E7FF" />
              </linearGradient>
            </defs>

            <path
              d="M120 0C30 140 180 320 80 480C-10 600 120 660 220 700L800 700L800 0Z"
              fill="url(#g1)"
            />

            <path
              d="M280 0C170 160 310 320 200 480C110 610 260 660 380 700L800 700L800 0Z"
              fill="url(#g2)"
            />

            <path
              d="M440 0C350 140 480 300 390 460C310 590 460 650 560 700L800 700L800 0Z"
              fill="url(#g3)"
            />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-6 pb-12 sm:px-6 md:pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:px-8 lg:pt-4 lg:pb-14">
        {/* LEFT */}
        <div className="order-1 text-center lg:text-left">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4A72C] sm:text-[11px] sm:tracking-[0.32em]">
            Build • Deploy • Scale
          </p>

          <h1 className="text-3xl font-black leading-[1.08] tracking-[-0.03em] text-[#081A35] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.02]">
            Modern Technology
            <br />
            for What&apos;s{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
              Next.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
            FASONHO builds developer tools, cloud infrastructure, and intelligent platforms that help you build, deploy, and scale production-ready software without unnecessary complexity.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <HeroButtons />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500 lg:justify-start lg:gap-5">
            {[
              "No credit card required",
              "Deploy in minutes",
              "Built for scale",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D4A72C]/15 text-[10px] text-[#D4A72C]">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-2 w-full min-w-0">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}