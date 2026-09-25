// src/components/dashboard/dashboard-shell.tsx

import {
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  FolderKanban,
  Rocket,
  Users,
  BarChart3,
  Settings,
  CheckCircle2,
  UserPlus,
} from "lucide-react";
import { FasonhoLogo } from "@/src/components/icons/fasonho-logo";
import { PerformanceChart } from "@/src/components/dashboard/performance-chart";

export function DashboardShell() {
  return (
    <div className="w-full aspect-[16/10] bg-[#F8FAFC] text-[#0F172A] text-[11px] font-sans flex flex-col overflow-hidden select-none">
      {/* Top Navbar */}
      <div className="flex h-10 items-center justify-between border-b border-slate-200/80 bg-white px-3.5 shrink-0">
        {/* Brand Logo Integration */}
        <div className="flex items-center h-full">
          <div className="scale-[0.42] origin-left shrink-0">
            <FasonhoLogo showTagline={false} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-48">
          <Search className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search anything..."
            readOnly
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-0.5 pl-7 pr-2.5 text-[10px] text-slate-600 placeholder-slate-400 focus:outline-none"
          />
        </div>

        {/* User Navigation & Notifications */}
        <div className="flex items-center gap-2.5">
          <button className="relative text-slate-500 hover:text-slate-700">
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
          </button>
          <div className="flex items-center gap-1.5 border-l border-slate-200 pl-2.5">
            <div className="h-5 w-5 rounded-full bg-amber-500 text-center text-[9px] font-bold leading-5 text-white">
              IA
            </div>
            <span className="font-semibold text-slate-700 text-[10px]">Ivy Ayo</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="flex-1 grid grid-cols-[130px_1fr] overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="border-r border-slate-200/80 bg-white p-2 space-y-0.5">
          <div className="flex items-center gap-2 rounded-md bg-amber-50 px-2.5 py-1 text-amber-700 font-semibold text-[10px]">
            <LayoutDashboard className="h-3 w-3" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2.5 py-1 text-slate-500 hover:bg-slate-50 text-[10px]">
            <FolderKanban className="h-3 w-3" />
            <span>Projects</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2.5 py-1 text-slate-500 hover:bg-slate-50 text-[10px]">
            <Rocket className="h-3 w-3" />
            <span>Deployments</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2.5 py-1 text-slate-500 hover:bg-slate-50 text-[10px]">
            <Users className="h-3 w-3" />
            <span>Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2.5 py-1 text-slate-500 hover:bg-slate-50 text-[10px]">
            <BarChart3 className="h-3 w-3" />
            <span>Analytics</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2.5 py-1 text-slate-500 hover:bg-slate-50 text-[10px]">
            <Settings className="h-3 w-3" />
            <span>Settings</span>
          </div>
        </aside>

        {/* Content Area */}
        <main className="p-3.5 space-y-2.5 overflow-hidden flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900 leading-tight">
              Good morning, Ivy 👋
            </h2>
            <p className="text-[10px] text-slate-500">
              Build something amazing today.
            </p>
          </div>

          {/* KPI Metrics Row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-slate-200/80 bg-white p-2 shadow-xs">
              <p className="text-[10px] text-slate-500">Total Projects</p>
              <p className="mt-0.5 text-base font-bold text-slate-900">12</p>
              <span className="inline-block mt-0.5 rounded bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600">
                +12%
              </span>
            </div>

            <div className="rounded-lg border border-slate-200/80 bg-white p-2 shadow-xs">
              <p className="text-[10px] text-slate-500">Active Deployments</p>
              <p className="mt-0.5 text-base font-bold text-slate-900">8</p>
              <span className="inline-block mt-0.5 rounded bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600">
                +18%
              </span>
            </div>

            <div className="rounded-lg border border-slate-200/80 bg-white p-2 shadow-xs">
              <p className="text-[10px] text-slate-500">Uptime</p>
              <p className="mt-0.5 text-base font-bold text-slate-900">99.98%</p>
              <span className="inline-block mt-0.5 rounded bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600">
                +0.2%
              </span>
            </div>
          </div>

          {/* Lower Grid: Performance Chart & Activity Feed */}
          <div className="grid grid-cols-[1.5fr_1fr] gap-2 flex-1 items-stretch min-h-0 overflow-hidden">
            {/* Performance Chart Box Component */}
            <div className="overflow-hidden rounded-lg bg-white shadow-xs">
              <div className="scale-75 origin-top-left w-[133.33%] h-[133.33%]">
                <PerformanceChart />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-xs space-y-1.5 flex flex-col justify-between">
              <span className="font-bold text-slate-800 text-[10px] block">
                Recent Activity
              </span>

              <div className="space-y-1.5 text-[9px]">
                <div className="flex items-center gap-1.5">
                  <Rocket className="h-3 w-3 text-blue-600 shrink-0" />
                  <div className="truncate">
                    <p className="font-semibold text-slate-800 leading-tight">Deployment successful</p>
                    <p className="text-slate-400 text-[8px]">api.fasonho.app • 2m ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <UserPlus className="h-3 w-3 text-indigo-600 shrink-0" />
                  <div className="truncate">
                    <p className="font-semibold text-slate-800 leading-tight">New user registered</p>
                    <p className="text-slate-400 text-[8px]">john@company.com • 12m ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                  <div className="truncate">
                    <p className="font-semibold text-slate-800 leading-tight">Build completed</p>
                    <p className="text-slate-400 text-[8px]">v1.2.0 • 48m ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}