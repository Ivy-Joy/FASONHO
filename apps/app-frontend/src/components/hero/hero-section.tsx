// src/components/hero/hero-section.tsx

// src/components/hero/hero-section.tsx

import { HeroButtons } from "./hero-buttons";
import { HeroDashboard } from "./hero-dashboard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF]">
      {/* Background Layer: Soft Wavy Bluish-Purplish Vector Layers on the Right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Base Light Canvas */}
        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* Top-Left Soft Ambient Sky Highlight */}
        <div className="absolute -left-20 -top-20 h-[450px] w-[450px] rounded-full bg-[#E0F2FE]/60 blur-3xl" />

        {/* Right-Side Layered Wavy Shapes (Matching Reference Image) */}
        <div className="absolute top-0 right-0 h-full w-[70%] sm:w-[60%] lg:w-[52%]">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Soft Periwinkle & Lavender Gradient */}
              <linearGradient id="purpleWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ECE9FE" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#DDD6FE" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.45" />
              </linearGradient>

              {/* Light Sky & Blue Gradient */}
              <linearGradient id="blueWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.5" />
              </linearGradient>

              {/* Top Accent Curve Highlight */}
              <linearGradient id="softSkyHighlight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F0F9FF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Back Outer Lavender/Purple Wave Layer */}
            <path
              d="M 120 0 C 30 140 180 320 80 480 C -10 600 120 660 220 700 L 800 700 L 800 0 Z"
              fill="url(#purpleWaveGrad)"
            />

            {/* Middle Periwinkle-Blue Wave Layer */}
            <path
              d="M 280 0 C 170 160 310 320 200 480 C 110 610 260 660 380 700 L 800 700 L 800 0 Z"
              fill="url(#blueWaveGrad)"
            />

            {/* Foreground Soft Highlight Curve */}
            <path
              d="M 440 0 C 350 140 480 300 390 460 C 310 590 460 650 560 700 L 800 700 L 800 0 Z"
              fill="url(#softSkyHighlight)"
            />
          </svg>
        </div>

        {/* Soft Radial Ambient Glow behind Dashboard */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-6 pt-2 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:pt-4 lg:pb-14">
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#D4A72C]">
            BUILD • DEPLOY • SCALE
          </p>

          <h1 className="text-[42px] font-black leading-[1.02] tracking-[-0.04em] text-[#081A35] lg:text-[54px]">
            Modern Technology
            <br />
            for What’s{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
              Next.
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-[16px] leading-7 text-[#64748B]">
            FASONHO builds developer tools, cloud infrastructure, and intelligent platforms that help you build, deploy, and scale production-ready software, without unnecessary complexity.
          </p>

          <div className="mt-6">
            <HeroButtons />
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-xs font-medium text-[#64748B]">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4A72C]/15 text-[10px] text-[#D4A72C]">
                ✓
              </div>
              No credit card required
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4A72C]/15 text-[10px] text-[#D4A72C]">
                ✓
              </div>
              Deploy in minutes
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4A72C]/15 text-[10px] text-[#D4A72C]">
                ✓
              </div>
              Built for scale
            </div>
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <HeroDashboard />
      </div>
    </section>
  );
}