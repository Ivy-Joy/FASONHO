// src/components/about/founding-story.tsx

import { Code2, Sparkles } from "lucide-react";

export function FoundingStory() {
  const repeatedComponents = [
    "Authentication",
    "User Management",
    "RBAC & Permissions",
    "Dashboards",
    "Notifications",
    "Settings",
    "APIs",
    "Payments",
    "Admin Panels",
  ];

  return (
    <section className="border-y border-slate-100 bg-[#F8FBFF] py-10 sm:py-14">
      <div className="container-fasonho mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
            Our Founding Story
          </div>

          <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
            The same foundation kept being rebuilt.
          </h2>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
            FASONHO did not begin with the ambition of creating another software
            company. It began with a recurring engineering problem: every project
            required rebuilding the same infrastructure before solving the real
            problem it existed to address.
          </p>
        </div>

        {/* Component Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {repeatedComponents.map((item) => (
            <div
              key={item}
              className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 transition-all hover:border-blue-300 hover:shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] transition-transform group-hover:scale-105">
                <Code2 className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  {item}
                </h3>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Repeated across project after project.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Turning Point Callout */}
        <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/40 via-white to-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-[#2563EB]" />
            <h3 className="text-base sm:text-lg font-bold text-[#08152D]">
              The turning point
            </h3>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            Instead of building individual applications one by one, the foundation
            itself became the product. That realization became the beginning of{" "}
            <strong className="font-semibold text-slate-900">
              FASONHO Starter Pro
            </strong>
             - a production-ready application foundation designed to eliminate
            repetitive engineering and accelerate meaningful product development.
          </p>
        </div>
      </div>
    </section>
  );
}