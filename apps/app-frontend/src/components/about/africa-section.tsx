// src/components/about/africa-section.tsx

import { Globe2 } from "lucide-react";

export function AfricaSection() {
  return (
    <section className="bg-[#071A3D] py-12 sm:py-16 text-white">
      <div className="container-fasonho mx-auto grid items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 ring-1 ring-blue-400/20">
            Why Africa Matters
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            Our geography is our origin - not our limitation.
          </h2>

          <div className="mt-3 space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
            <p>
              FASONHO proudly originates from Africa, but our ambition is global.
            </p>
            <p>
              We reject the idea that world-class engineering must originate
              somewhere else. Our commitment is not regional quality - it is global
              quality.
            </p>
          </div>
        </div>

        <div className="flex items-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm ring-1 ring-white/5">
            <Globe2 className="mb-3 h-8 w-8 text-blue-300" />
            <h3 className="text-lg sm:text-xl font-bold leading-snug text-white">
              Built in Africa. <br />
              <span className="text-blue-300">Designed for the world.</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}