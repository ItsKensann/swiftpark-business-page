"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Camera,
  CheckCircle2,
  LayoutDashboard,
} from "lucide-react";

const kpis = [
  { label: "Live occupancy", value: "78%", change: "4% higher than last hour" },
  { label: "Available spots", value: "142", change: "Across active zones" },
  { label: "Camera health", value: "24/24", change: "All feeds online" },
  { label: "Alerts", value: "3", change: "Need operator review" },
];

const zones = [
  { name: "Zone 1 - Live Camera", available: "20 of 41", pct: 51 },
  { name: "Zone 2 - Visitor", available: "16 of 30", pct: 47 },
  { name: "Zone 3 - General", available: "12 of 20", pct: 40 },
];

const chartHeights = [36, 52, 64, 86, 78, 62, 44, 32];

export function OperatorDashboardSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="dashboard" ref={ref} className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Operator Dashboard
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
            A command center for parking operations.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Operators get live occupancy, level and zone breakdowns, camera
            health, alerts, and utilization analytics in one view.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-14 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/20"
        >
          <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-center">
              <div className="truncate rounded-lg bg-slate-950 px-4 py-1.5 font-mono text-xs text-slate-400">
                dashboard.swiftpark.live
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[780px] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <LayoutDashboard className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">SwiftPark Operations</p>
                    <p className="text-xs text-slate-500">
                      Brighton Ski Resort - active pilot view
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  All cameras online
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs font-medium text-slate-500">
                      {kpi.label}
                    </p>
                    <p className="mt-2 text-3xl font-black text-white">
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {kpi.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-4">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <BarChart3 className="h-4 w-4 text-blue-300" />
                      Utilization analytics
                    </div>
                    <span className="text-xs text-slate-500">Today</span>
                  </div>
                  <div className="flex h-56 items-end gap-3">
                    {chartHeights.map((height, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={inView ? { height: `${height}%` } : { height: 0 }}
                          transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.25 + index * 0.04,
                          }}
                          className="w-full rounded-t bg-gradient-to-t from-blue-600 to-cyan-300"
                        />
                        <span className="text-[10px] text-slate-500">
                          {index + 8}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                      <Activity className="h-4 w-4 text-blue-300" />
                      Zone breakdown
                    </div>
                    <div className="space-y-4">
                      {zones.map((zone) => (
                        <div key={zone.name}>
                          <div className="mb-2 flex items-center justify-between gap-4">
                            <span className="text-xs font-medium text-slate-300">
                              {zone.name}
                            </span>
                            <span className="text-xs text-slate-500">
                              {zone.available} open
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                            <div
                              className="h-full rounded-full bg-blue-500"
                              style={{ width: `${zone.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                        <Camera className="h-4 w-4 text-emerald-300" />
                        Cameras
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <div
                            key={index}
                            className="rounded border border-emerald-400/20 bg-emerald-400/10 px-2 py-2 text-center text-[10px] font-bold text-emerald-300"
                          >
                            Cam {index + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                        <AlertTriangle className="h-4 w-4 text-amber-300" />
                        Alerts
                      </div>
                      <div className="space-y-2 text-xs text-slate-400">
                        <p>Zone 3 nearing capacity</p>
                        <p>Peak arrival window active</p>
                        <p>Camera 12 reconnected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
