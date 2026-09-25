// src/components/sections/ecosystem.tsx

import React from "react";
import {
  Code2,
  Cloud,
  Brain,
  GraduationCap,
  FlaskConical,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface Product {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  href: string;
}

const products: Product[] = [
  {
    title: "Starter Pro",
    desc: "Production-ready application foundations.",
    icon: Code2,
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    href: "#starter-pro",
  },
  {
    title: "Fasonho Cloud",
    desc: "Deploy globally with confidence.",
    icon: Cloud,
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    href: "#cloud",
  },
  {
    title: "Fasonho AI",
    desc: "Integrate intelligent features into your products.",
    icon: Brain,
    iconBg: "bg-amber-50/80",
    iconColor: "text-[#D4A72C]",
    href: "#ai",
  },
  {
    title: "Fasonho Academy",
    desc: "Learn in-demand skills and get job-ready.",
    icon: GraduationCap,
    iconBg: "bg-amber-50/80",
    iconColor: "text-[#D4A72C]",
    href: "#academy",
  },
  {
    title: "Fasonho Labs",
    desc: "Research, experiment, and shape what's next.",
    icon: FlaskConical,
    iconBg: "bg-amber-50/80",
    iconColor: "text-[#D4A72C]",
    href: "#labs",
  },
];

export function Ecosystem() {
  return (
    <section className="bg-[#FAFBFD] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start xl:grid-cols-[320px_1fr]">
          {/* Left Text & CTA Column */}
          <div>
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A72C]">
              OUR PRODUCTS
            </p>

            <h2 className="text-2xl font-extrabold text-[#081A35] sm:text-3xl leading-[1.2] tracking-tight">
              Powerful solutions.
              <br />
              One ecosystem.
            </h2>

            <p className="mt-3.5 text-xs text-slate-500 leading-relaxed max-w-xs">
              Build, deploy, and scale with our suite of products designed for
              developers, teams, and organizations.
            </p>

            <div className="mt-6">
              <a
                href="#all-products"
                className="inline-flex items-center gap-2 rounded-full bg-[#081A35] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                View All Products
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Cards Row (5 Columns for 5 Products) */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {products.map(({ title, desc, icon: Icon, iconBg, iconColor, href }) => (
              <div
                key={title}
                className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md"
              >
                <div>
                  {/* Styled Icon Container */}
                  <div
                    className={`mb-3.5 flex h-9 w-9 items-center justify-center rounded-xl ${iconBg}`}
                  >
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                  </div>

                  <h3 className="mb-1 text-xs font-bold text-slate-900 leading-snug">
                    {title}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-normal">
                    {desc}
                  </p>
                </div>

                <a
                  href={href}
                  className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#D4A72C] transition hover:text-[#b88f21]"
                >
                  Learn more <span className="text-xs">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}