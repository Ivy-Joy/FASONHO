// src/components/dashboard/performance-chart.tsx
"use client";

import { ChevronDown } from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "1/12", value: 35 },
  { day: "2/12", value: 52 },
  { day: "3/12", value: 82 },
  { day: "4/12", value: 76 },
  { day: "5/12", value: 102 },
  { day: "6/12", value: 122 },
  { day: "7/12", value: 101 },
  { day: "8/12", value: 124 },
  { day: "9/12", value: 148 },
  { day: "10/12", value: 125 },
  { day: "11/12", value: 135 },
  { day: "12/12", value: 156 },
  { day: "13/12", value: 144 },
  { day: "14/12", value: 155 },
  { day: "15/12", value: 185 },
];

export function PerformanceChart() {
  return (
    <div className="w-full rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[11px] font-bold text-slate-900">Project Performance</h3>
        <button className="flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white px-2 py-0.5 text-[9px] font-semibold text-slate-600 shadow-2xs hover:bg-slate-50">
          <span>Last 7 days</span>
          <ChevronDown className="h-2.5 w-2.5 text-slate-400" />
        </button>
      </div>

      {/* Area Chart with node dots and grid */}
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="performanceGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            {/* Grid lines across both axes */}
            <CartesianGrid stroke="#F1F5F9" strokeDasharray="0" />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 8, fill: "#94A3B8" }}
              dy={4}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 8, fill: "#94A3B8" }}
              domain={[0, 200]}
              ticks={[0, 50, 100, 150, 200]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "none",
                borderRadius: "6px",
                fontSize: "10px",
                color: "#FFFFFF",
                padding: "4px 8px",
              }}
              itemStyle={{ color: "#60A5FA" }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563EB"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#performanceGrad)"
              dot={{
                r: 2.5,
                fill: "#2563EB",
                stroke: "#FFFFFF",
                strokeWidth: 1,
              }}
              activeDot={{
                r: 4,
                fill: "#1D4ED8",
                stroke: "#FFFFFF",
                strokeWidth: 1.5,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}