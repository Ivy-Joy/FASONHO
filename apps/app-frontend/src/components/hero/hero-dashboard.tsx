// src/components/hero/hero-dashboard.tsx

import { Sparkles, Cloud, Code2, GraduationCap } from "lucide-react";
import { DashboardShell } from "@/src/components/dashboard/dashboard-shell";
import { FloatingCard } from "./floating-card";

export function HeroDashboard() {
  return (
    <div className="relative flex justify-end pt-14 pb-4">
      {/* Outer Dashboard Wrapper */}
      <div className="relative w-full max-w-[560px]">

        {/* Slanted 3D Tablet/Monitor Device Frame */}
        <div
          className="relative rounded-[20px] bg-[#0A0F1D] p-2 shadow-[0_30px_70px_rgba(8,26,53,0.3)] ring-1 ring-slate-800/80 transition-transform duration-500 ease-out hover:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(2deg)]"
          style={{
            transform: "perspective(1200px) rotateY(-8deg) rotateX(4deg) rotateZ(0.5deg)",
          }}
        >
          {/* Top Camera Lens Dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="h-1 w-1 rounded-full bg-slate-700" />
          </div>

          {/* Internal Widescreen Screen Surface */}
          <div className="overflow-hidden rounded-[14px] bg-white">
            <DashboardShell />
          </div>
        </div>

        {/* FLOATING CARDS - Elevated completely above top edge */}
        <FloatingCard
          icon={<Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />}
          title="AI Assistant"
          subtitle="Build smarter with AI"
          className="-top-14 left-0 z-30"
        />

        <FloatingCard
          icon={<Cloud className="h-3.5 w-3.5 text-[#2563EB]" />}
          title="Cloud Infrastructure"
          subtitle="Secure. Scalable. Global."
          className="-top-14 -right-2 z-30"
        />

        <FloatingCard
          icon={<Code2 className="h-3.5 w-3.5 text-[#2563EB]" />}
          title="Developer Tools"
          subtitle="Ship faster, code better."
          className="bottom-8 -left-8 z-30"
        />

        <FloatingCard
          icon={<GraduationCap className="h-3.5 w-3.5 text-[#D4A72C]" />}
          title="Learn & Grow"
          subtitle="Tech education for tomorrow."
          className="-bottom-4 right-2 z-30"
        />
      </div>
    </div>
  );
}