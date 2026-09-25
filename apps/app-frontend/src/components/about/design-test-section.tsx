// src/components/about/design-test-section.tsx

import { CheckCircle2 } from "lucide-react";

export function DesignTestSection() {
  return (
    <section className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="rounded-2xl bg-gradient-to-br from-[#071A3D] to-[#0B2C67] p-6 sm:p-8 text-white shadow-md">
        <div className="mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-amber-400" />
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-200 ring-1 ring-blue-400/20">
            The FASONHO Design Test
          </span>
        </div>

        <h2 className="max-w-3xl text-xl font-extrabold leading-snug text-white sm:text-2xl">
          Can we make this significantly simpler without sacrificing power,
          quality, security, or flexibility?
        </h2>

        <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
          Every product we release must answer this question. If the answer is
          no, the engineering is not finished.
        </p>
      </div>
    </section>
  );
}