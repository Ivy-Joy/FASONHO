// src/components/about/flywheel-section.tsx

import { ArrowRight } from "lucide-react";

export function FlywheelSection() {
  const steps = [
    "Strong Foundations",
    "Simpler Development",
    "Faster Creation",
    "More Digital Solutions",
    "Better Products",
  ];

  return (
    <section className="border-y border-slate-100 bg-[#F8FBFF] py-10 sm:py-14">
      <div className="container-fasonho mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
            Our Flywheel
          </div>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#08152D] sm:text-3xl">
            Every product strengthens the next.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5 items-center">
          {steps.map((step, index) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-sm font-bold text-white shadow-xs ring-4 ring-blue-50">
                {index + 1}
              </div>
              <p className="mt-3 text-xs font-semibold leading-snug text-slate-800">
                {step}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="mt-3 hidden h-4 w-4 text-slate-300 md:block absolute -right-2.5 top-3.5 translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}