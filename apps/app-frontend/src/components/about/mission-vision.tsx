// src/components/about/mission-vision.tsx

import { Globe2, Lightbulb, Target } from "lucide-react";

export function MissionVision() {
  return (
    <section className="bg-[#071A3D] py-12 sm:py-16 text-white">
      <div className="container-fasonho mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 ring-1 ring-blue-400/20">
            Mission • Vision • Purpose
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Why FASONHO exists beyond software.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Mission */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/20">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base sm:text-lg font-bold text-white">
              Mission
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              Engineer reliable, scalable, intelligent and accessible
              technology that removes unnecessary complexity and empowers people
              to build meaningful digital solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/20">
              <Globe2 className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base sm:text-lg font-bold text-white">
              Vision
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              Build a globally influential technology company originating from
              Africa, creating software foundations and intelligent platforms
              that empower the world.
            </p>
          </div>

          {/* Purpose */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 ring-1 ring-amber-400/20">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base sm:text-lg font-bold text-white">
              Purpose
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              Close the gap between ideas and meaningful digital solutions
              through strong technology foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}