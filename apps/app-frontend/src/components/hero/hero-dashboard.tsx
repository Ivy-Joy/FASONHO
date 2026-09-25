// src/components/hero/hero-dashboard.tsx

import { Sparkles, Cloud, Code2, GraduationCap } from "lucide-react";
import { DashboardShell } from "@/src/components/dashboard/dashboard-shell";
import { FloatingCard } from "./floating-card";

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] px-1 sm:px-4 pt-2 sm:pt-8 lg:pt-12">
      <div className="relative">
        {/* Device Frame */}
        <div className="rounded-xl sm:rounded-2xl bg-[#08101F] p-1.5 sm:p-2 shadow-[0_15px_40px_rgba(8,26,53,.2)] sm:shadow-[0_25px_60px_rgba(8,26,53,.25)] lg:rotate-[-3deg] lg:transform">
          <div className="overflow-x-auto rounded-lg sm:rounded-xl bg-white">
            <DashboardShell />
          </div>
        </div>

        {/* Floating Cards - Visible from tablet screens up (sm:) to prevent mobile clutter */}
        <FloatingCard
          icon={<Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />}
          title="AI Assistant"
          subtitle="Build smarter with AI"
          className="-top-5 left-2 lg:-top-10"
        />

        <FloatingCard
          icon={<Cloud className="h-3.5 w-3.5 text-[#2563EB]" />}
          title="Cloud Infrastructure"
          subtitle="Secure. Global."
          className="-top-5 right-2 lg:-top-10"
        />

        <FloatingCard
          icon={<Code2 className="h-3.5 w-3.5 text-[#2563EB]" />}
          title="Developer Tools"
          subtitle="Ship faster"
          className="-bottom-4 left-2 lg:-left-6"
        />

        <FloatingCard
          icon={<GraduationCap className="h-3.5 w-3.5 text-[#D4A72C]" />}
          title="Learn & Grow"
          subtitle="Academy"
          className="-bottom-4 right-2 lg:-right-2"
        />
      </div>
    </div>
  );
}