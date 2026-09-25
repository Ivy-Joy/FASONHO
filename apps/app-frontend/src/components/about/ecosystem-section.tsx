// src/components/about/ecosystem-section.tsx

import {
  Brain,
  Building2,
  Cloud,
  Code2,
  GraduationCap,
  Layers3,
} from "lucide-react";

export function EcosystemSection() {
  const pillars = [
    {
      icon: Code2,
      title: "Developer Platform",
      text: "Starter Pro, UI Systems, AI Kits and Dev Tools.",
    },
    {
      icon: Building2,
      title: "Business Platforms",
      text: "CRM, Commerce, HR and Events.",
    },
    {
      icon: Layers3,
      title: "Industry Platforms",
      text: "ChurchOS, SchoolOS and Healthcare.",
    },
    {
      icon: Brain,
      title: "Intelligent Systems",
      text: "AI, Automation, Data Intelligence and Agents.",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      text: "Hosting, APIs, deployment and observability.",
    },
    {
      icon: GraduationCap,
      title: "Developer Education",
      text: "Courses, community, workshops and certification.",
    },
  ];

  return (
    <section className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8 max-w-2xl">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
          What We Build
        </div>

        <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
          One technology ecosystem. Infinite possibilities.
        </h2>

        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
          FASONHO is designed as a connected technology ecosystem - not a
          collection of unrelated products.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 transition-all hover:border-blue-300 hover:shadow-xs"
          >
            <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}