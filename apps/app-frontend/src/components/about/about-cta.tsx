// src/components/about/about-cta.tsx

import { ArrowRight } from "lucide-react";

export function AboutCta() {
  return (
    <section className="bg-gradient-to-r from-[#071A3D] via-[#0B2C67] to-[#071A3D] py-12 sm:py-16 text-white">
      <div className="container-fasonho mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 ring-1 ring-blue-400/20">
          Looking Ahead
        </div>

        <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          The products will evolve. <br />
          <span className="text-blue-300">The promise will remain.</span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
          Today begins with Starter Pro. Tomorrow expands into developer
          platforms, intelligent systems, cloud infrastructure and enterprise
          technology - all united by one philosophy.
        </p>

        <div className="mt-6">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A72C] px-6 py-2.5 text-xs font-bold text-[#071A3D] shadow-md transition-all hover:bg-amber-400 hover:shadow-lg"
          >
            Explore the Ecosystem
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* <div className="mt-10 border-t border-white/10 pt-6">
          <h3 className="text-base sm:text-lg font-bold">Technology, Made Simpler.</h3>
          <p className="mt-1 text-[11px] sm:text-xs text-slate-400">
            Built in Africa. Designed for the world.
          </p>
        </div> */}
      </div>
    </section>
  );
}