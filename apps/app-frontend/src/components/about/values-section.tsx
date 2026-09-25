// src/components/about/values-section.tsx

import {
  Brain,
  CheckCircle2,
  Code2,
  Globe2,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Excellence",
      text: "Reliable, secure, maintainable, accessible and beautifully engineered software.",
    },
    {
      icon: Code2,
      title: "Developer First",
      text: "We exist to make developers more capable—not more dependent.",
    },
    {
      icon: Layers3,
      title: "Reusability",
      text: "Build once. Improve continuously. Reuse intelligently.",
    },
    {
      icon: Sparkles,
      title: "Simplicity",
      text: "Complex problems should result in simple experiences.",
    },
    {
      icon: Brain,
      title: "Innovation",
      text: "AI, automation, modern architecture and emerging technologies.",
    },
    {
      icon: CheckCircle2,
      title: "Integrity",
      text: "Honest engineering. Transparent communication. No exaggerated promises.",
    },
    {
      icon: HeartHandshake,
      title: "Stewardship",
      text: "Respect for privacy, security, customers, developers and resources.",
    },
    {
      icon: Globe2,
      title: "Global Ambition",
      text: "Built in Africa. Designed for the world.",
    },
  ];

  return (
    <section className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8 max-w-2xl">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
          Our Values
        </div>

        <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
          Engineering behaviors - not abstract words.
        </h2>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-xl border border-slate-200/80 p-4 transition-all hover:border-blue-300 hover:shadow-xs"
          >
            <value.icon className="mb-2.5 h-5 w-5 text-[#2563EB]" />
            <h3 className="text-xs sm:text-sm font-bold text-slate-900">
              {value.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}