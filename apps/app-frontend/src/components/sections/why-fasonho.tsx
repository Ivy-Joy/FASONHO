// apps/app-frontend/src/components/sections/why-fasonho.tsx

import React from "react";
import {
  Code2,
  Cloud,
  Brain,
  GraduationCap,
  Building2,
  Github,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    title: "Developer Tools",
    desc: "Modern, flexible, and built for performance.",
    icon: Code2,
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Secure, scalable, and always on.",
    icon: Cloud,
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
  },
  {
    title: "AI Solutions",
    desc: "Intelligent tools for real-world problems.",
    icon: Brain,
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
  },
  {
    title: "Tech Academy",
    desc: "Learn, build, and grow with expert-led programs.",
    icon: GraduationCap,
    iconBg: "bg-amber-50/80",
    iconColor: "text-[#D4A72C]",
  },
  {
    title: "Enterprise Solutions",
    desc: "Reliable systems for forward-thinking teams.",
    icon: Building2,
    iconBg: "bg-amber-50/80",
    iconColor: "text-[#D4A72C]",
  },
  {
    title: "Open Source",
    desc: "Contribute, collaborate, make an impact.",
    icon: Github,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-900",
  },
];

export function WhyFasonho() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          {/* Left Text & CTA */}
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A72C]">
              WHY FASONHO
            </p>

            <h2 className="text-3xl font-extrabold text-[#081A35] sm:text-4xl lg:text-[38px] leading-[1.18] tracking-tight">
              Everything you need
              <br />
              to build, innovate, and grow.
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-500">
              From developer tools to cloud infrastructure and AI, FASONHO brings
              together the essential products and resources to help you turn
              ideas into real-world impact.
            </p>

            <div className="mt-8">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4A72C] px-6 py-3 text-xs font-semibold text-white shadow-xs transition hover:bg-[#c29624]"
              >
                Explore Our Products
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map(({ title, desc, icon: Icon, iconBg, iconColor }) => (
              <div
                key={title}
                className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/40 p-5 transition hover:bg-white hover:shadow-md hover:border-slate-200"
              >
                <div>
                  {/* Styled Icon Container */}
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>

                  <h3 className="mb-1.5 text-xs font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="text-[11px] leading-relaxed text-slate-500">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}