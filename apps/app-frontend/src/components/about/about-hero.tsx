// src/components/about/about-hero.tsx

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Developer First",
  "Production Ready",
  "Global Ambition",
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#F8FBFF] via-white to-white py-8 md:py-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563EB10,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        {/* LEFT */}
        <div>
          <div className="mb-4 flex flex-wrap gap-2.5">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#2563EB] ring-1 ring-blue-100">
              ABOUT FASONHO
            </span>

            <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#B7791F] ring-1 ring-amber-100">
              Built in Africa
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#08152D] sm:text-4xl md:text-5xl">
            Engineering the
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#0EA5E9] bg-clip-text text-transparent">
              foundations of tomorrow.
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm text-slate-600 sm:text-base leading-relaxed">
            FASONHO is a technology company building software foundations,
            developer platforms, intelligent systems, and cloud technologies
            that make complex technology genuinely simpler to build, deploy,
            and scale.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Explore Products
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>

            <Link
              href="/docs"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Read Documentation
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-200/80 pt-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" />
                </div>
                <span className="text-xs font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/30 to-cyan-100/20 blur-2xl" />

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl">
            <Image
              src="/illustrations/about-hero.png"
              alt="FASONHO Engineering Workspace"
              width={700}
              height={500}
              className="h-[340px] sm:h-[380px] w-full object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/95 via-[#071A3D]/40 to-transparent" />

            {/* Floating metric */}
            <div className="absolute right-3.5 top-3.5 rounded-xl border border-white/20 bg-white/90 px-3 py-2 shadow-md backdrop-blur">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Engineering Philosophy
              </p>
              <p className="mt-0.5 text-sm font-bold text-[#08152D]">
                Complex → Simple
              </p>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 w-full p-5 text-white">
              <div className="mb-2.5 flex gap-1.5">
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] backdrop-blur">
                  Starter Pro
                </span>
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] backdrop-blur">
                  Cloud
                </span>
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] backdrop-blur">
                  AI
                </span>
              </div>

              <h3 className="text-lg font-bold">
                Technology, Made Simpler.
              </h3>

              <p className="mt-1 max-w-sm text-xs leading-relaxed text-blue-100">
                Powerful engineering hidden beneath intuitive experiences for
                developers, startups, and enterprises worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}