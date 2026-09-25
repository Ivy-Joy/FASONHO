// src/components/dashboard/performance-chart.tsx
"use client";

import { useSyncExternalStore } from "react";
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

const emptySubscribe = () => () => {};

export function PerformanceChart() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <div className="w-full flex flex-col justify-between h-full">
      {/* Header */}
      <div className="mb-1 sm:mb-2 flex items-center justify-between">
        <h3 className="text-[9px] sm:text-[11px] font-bold text-slate-900 truncate">
          Project Performance
        </h3>
        <button className="flex items-center gap-0.5 sm:gap-1 rounded border border-slate-200/80 bg-white px-1 sm:px-2 py-0.5 text-[7px] sm:text-[9px] font-semibold text-slate-600 shadow-2xs">
          <span>7 days</span>
          <ChevronDown className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-slate-400" />
        </button>
      </div>

      {/* Area Chart Wrapper */}
      <div className="h-20 sm:h-28 w-full min-w-0 flex-1">
        {!isMounted ? (
          <div className="h-full w-full animate-pulse rounded bg-slate-50" />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <defs>
                <linearGradient id="performanceGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#F1F5F9" strokeDasharray="0" />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 7, fill: "#94A3B8" }}
                dy={2}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 7, fill: "#94A3B8" }}
                domain={[0, 200]}
                ticks={[0, 100, 200]}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "8px",
                  color: "#FFFFFF",
                  padding: "2px 6px",
                }}
                itemStyle={{ color: "#60A5FA" }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563EB"
                strokeWidth={1.5}
                fillOpacity={1}
                fill="url(#performanceGrad)"
                dot={{
                  r: 1.5,
                  fill: "#2563EB",
                  stroke: "#FFFFFF",
                  strokeWidth: 1,
                }}
                activeDot={{
                  r: 3,
                  fill: "#1D4ED8",
                  stroke: "#FFFFFF",
                  strokeWidth: 1,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}