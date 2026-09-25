// src/components/about/roadmap-section.tsx

import { Blocks, Brain, Building2, Cloud, Rocket } from "lucide-react";

export function RoadmapSection() {
  const roadmap = [
    {
      icon: Rocket,
      title: "Phase I - Foundation",
      text: "Launch the FASONHO brand, documentation platform and Starter Pro.",
    },
    {
      icon: Blocks,
      title: "Phase II - Developer Ecosystem",
      text: "Expand into UI Systems, AI Kits, Dev Tools and modular engineering products.",
    },
    {
      icon: Building2,
      title: "Phase III - Business Platforms",
      text: "CRM, Commerce, HR and operational software for organizations.",
    },
    {
      icon: Brain,
      title: "Phase IV - Intelligent Systems",
      text: "AI, automation, intelligent agents and data-driven workflows.",
    },
    {
      icon: Cloud,
      title: "Phase V - Cloud & Infrastructure",
      text: "Hosting, APIs, deployment, observability and enterprise cloud services.",
    },
  ];

  return (
    <section className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8 max-w-2xl">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
          The Roadmap
        </div>

        <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
          Deliberate growth, not disconnected products.
        </h2>
      </div>

      <div className="space-y-3">
        {roadmap.map((phase) => (
          <div
            key={phase.title}
            className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-white p-3.5 sm:p-4 transition-all hover:border-blue-300 hover:shadow-xs"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
              <phase.icon className="h-4.5 w-4.5" />
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                {phase.title}
              </h3>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                {phase.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}