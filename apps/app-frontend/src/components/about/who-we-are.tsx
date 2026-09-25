// src/components/about/who-we-are.tsx

import { Code2, Layers3, Sparkles } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Column: Mission Narrative */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
            Who We Are
          </div>

          <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
            Technology should make progress easier - not harder.
          </h2>

          <blockquote className="relative border-l-2 border-[#2563EB] bg-gradient-to-r from-blue-50/60 to-transparent py-2.5 pl-4 pr-3 text-xs sm:text-sm font-medium italic text-slate-800 rounded-r-xl">
            “Powerful technology should make life and work simpler - not more
            complicated.”
          </blockquote>

          <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
            <p>
              FASONHO is a technology ecosystem founded on one conviction:
              complexity belongs in engineering, not in the experience.
            </p>
            <p>
              We believe developers, startups, businesses, ministries, schools,
              and enterprises deserve software that is powerful underneath and
              beautifully simple above.
            </p>
            <p>
              Our work begins where ideas usually stall - the gap between{" "}
              <strong className="font-semibold text-slate-900">
                “I have an idea”
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-slate-900">
                “I have a working system.”
              </strong>
            </p>
          </div>
        </div>

        {/* Right Column: Name Breakdown Card */}
        <div className="relative rounded-2xl border border-slate-200/80 bg-gradient-to-b from-[#F8FBFF] via-white to-white p-5 sm:p-6 shadow-md shadow-slate-100">
          <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100/80 text-[#2563EB] ring-1 ring-blue-600/10">
              <Layers3 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#08152D]">
                The Meaning of FASONHO
              </h3>
              <p className="text-[11px] text-slate-500">
                Deconstructing our brand identity
              </p>
            </div>
          </div>

          <div className="space-y-3.5">
            <div className="group flex gap-3 items-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Layers3 className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  FA - Foundation + Forward
                </h4>
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                  Strong foundations that enable people and organizations to move forward.
                </p>
              </div>
            </div>

            <div className="group flex gap-3 items-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                <Code2 className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  SO - Simplicity + Software + Solutions
                </h4>
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                  Transforming complex technology into simple, useful software solutions.
                </p>
              </div>
            </div>

            <div className="group flex gap-3 items-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  NHO - Distinctive Identity
                </h4>
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                  Inspired by <em>sonho</em> (dream), bridging vision to reality through technology.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-gradient-to-r from-[#071A3D] via-[#08152D] to-[#0B2C67] p-4 text-white shadow-sm ring-1 ring-white/10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
              Our Philosophy
            </p>
            <h3 className="mt-1 text-sm sm:text-base font-bold tracking-tight text-white">
              Complex underneath. Simple above.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}