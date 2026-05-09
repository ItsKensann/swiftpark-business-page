"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Camera,
  CheckCircle2,
  LayoutDashboard,
  MapPin,
  Mountain,
  Search,
  Settings,
  Square,
  Users,
} from "lucide-react";

const kpis = [
  { label: "Live occupancy", value: "78%", change: "+4% vs last hour", tone: "blue" },
  { label: "Available spots", value: "142", change: "Across 3 zones", tone: "emerald" },
  { label: "Camera health", value: "24/24", change: "All feeds online", tone: "cyan" },
  { label: "Alerts", value: "3", change: "Need operator review", tone: "amber" },
];

const facilitiesNav = [
  { icon: Mountain, label: "Brighton Ski Resort", meta: "48 / 91", active: true },
  { icon: Square, label: "OSU Parking Structure 1", meta: "112 / 420" },
  { icon: MapPin, label: "Lot C · Downtown", meta: "6 / 38" },
];

const zones = [
  { name: "Zone 1 · Live Camera", available: 20, total: 41, live: true },
  { name: "Zone 2 · Visitor", available: 16, total: 30 },
  { name: "Zone 3 · General", available: 12, total: 20 },
];

const cameraGrid = [
  { id: "Cam 01", zone: "Zone 1", live: true },
  { id: "Cam 02", zone: "Zone 1" },
  { id: "Cam 03", zone: "Zone 2" },
  { id: "Cam 04", zone: "Zone 2" },
  { id: "Cam 05", zone: "Zone 3" },
  { id: "Cam 06", zone: "Entrance" },
];

const chartHeights = [36, 52, 64, 86, 78, 62, 44, 32];

const alerts = [
  { tone: "amber", text: "Zone 3 nearing capacity", time: "2m ago" },
  { tone: "blue", text: "Peak arrival window active", time: "8m ago" },
  { tone: "emerald", text: "Camera 12 reconnected", time: "14m ago" },
];

export function OperatorDashboardSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="dashboard" ref={ref} className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-x-0 top-1/2 h-[480px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
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
            Live occupancy, zone breakdowns, camera health, and alerts in one
            real-time view across every facility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative mt-14"
        >
          <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/30">
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
              <Bell className="h-4 w-4 text-slate-500" />
            </div>

            <div className="overflow-x-auto">
              <div className="grid min-w-[920px] grid-cols-[220px_1fr]">
                <aside className="border-r border-white/10 bg-slate-950 p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-md shadow-blue-600/30">
                      <LayoutDashboard className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">SwiftPark</p>
                      <p className="text-[10px] text-slate-500">Operator</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5">
                    <Search className="h-3 w-3 text-slate-500" />
                    <span className="text-[10px] text-slate-500">Search facilities</span>
                  </div>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Facilities
                  </p>
                  <ul className="mt-2 space-y-1">
                    {facilitiesNav.map(({ icon: Icon, label, meta, active }) => (
                      <li
                        key={label}
                        className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                          active
                            ? "border border-blue-500/30 bg-blue-500/10"
                            : "border border-transparent hover:bg-white/[0.04]"
                        }`}
                      >
                        <Icon
                          className={`h-3.5 w-3.5 ${active ? "text-blue-300" : "text-slate-500"}`}
                        />
                        <div className="min-w-0 flex-1">
                          <p
                            className={`truncate text-[10px] font-bold ${
                              active ? "text-white" : "text-slate-300"
                            }`}
                          >
                            {label}
                          </p>
                          <p className="truncate text-[9px] text-slate-500">{meta}</p>
                        </div>
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        )}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Workspace
                  </p>
                  <ul className="mt-2 space-y-1 text-[10px]">
                    <li className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-slate-400">
                      <Activity className="h-3.5 w-3.5" /> Live overview
                    </li>
                    <li className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-slate-500">
                      <Camera className="h-3.5 w-3.5" /> Cameras
                    </li>
                    <li className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-slate-500">
                      <Users className="h-3.5 w-3.5" /> Driver app
                    </li>
                    <li className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-slate-500">
                      <Settings className="h-3.5 w-3.5" /> Settings
                    </li>
                  </ul>
                </aside>

                <div className="p-5">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-5 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs text-slate-500">Brighton Ski Resort · active pilot</p>
                      <p className="font-bold text-white">Live overview</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.18)]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      All cameras online
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-4 gap-3">
                    {kpis.map((kpi, idx) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ duration: 0.5, delay: 0.25 + idx * 0.06 }}
                        className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div
                          className={`absolute inset-x-0 top-0 h-px ${
                            kpi.tone === "blue"
                              ? "bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                              : kpi.tone === "emerald"
                                ? "bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                                : kpi.tone === "cyan"
                                  ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                  : "bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                          }`}
                        />
                        <p className="text-xs font-medium text-slate-500">{kpi.label}</p>
                        <p className="mt-2 text-3xl font-black text-white">{kpi.value}</p>
                        <p className="mt-1 text-xs text-slate-400">{kpi.change}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.55, delay: 0.45 }}
                      className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <BarChart3 className="h-4 w-4 text-blue-300" />
                          Utilization analytics
                        </div>
                        <span className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-slate-400">
                          Today · hourly
                        </span>
                      </div>
                      <div className="flex h-48 items-end gap-3">
                        {chartHeights.map((height, index) => (
                          <div key={index} className="flex flex-1 flex-col items-center gap-2">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={inView ? { height: `${height}%` } : { height: 0 }}
                              transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.5 + index * 0.05,
                              }}
                              className="w-full rounded-t bg-gradient-to-t from-blue-600 to-cyan-300"
                            />
                            <span className="text-[10px] text-slate-500">{index + 8}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ duration: 0.55, delay: 0.5 }}
                        className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                      >
                        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                          <Activity className="h-4 w-4 text-blue-300" />
                          Zone breakdown
                        </div>
                        <div className="space-y-4">
                          {zones.map((zone, idx) => {
                            const pct = Math.round((zone.available / zone.total) * 100);
                            return (
                              <div key={zone.name}>
                                <div className="mb-2 flex items-center justify-between gap-3">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-medium text-slate-300">
                                      {zone.name}
                                    </span>
                                    {zone.live && (
                                      <span className="rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[8px] font-bold text-emerald-300">
                                        AI
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-slate-500">
                                    {zone.available}/{zone.total}
                                  </span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: `${pct}%` } : { width: 0 }}
                                    transition={{
                                      duration: 0.9,
                                      ease: [0.22, 1, 0.36, 1],
                                      delay: 0.6 + idx * 0.08,
                                    }}
                                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.55, delay: 0.55 }}
                      className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <Camera className="h-4 w-4 text-emerald-300" />
                          Camera health
                        </div>
                        <span className="text-[10px] font-medium text-emerald-300">
                          24 / 24 online
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {cameraGrid.map((cam) => (
                          <div
                            key={cam.id}
                            className="relative overflow-hidden rounded border border-white/10 bg-slate-900"
                          >
                            <div className="aspect-video bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_60%)]">
                              <div
                                className="h-full w-full opacity-50"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                                  backgroundSize: "10px 10px",
                                }}
                              />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/55 px-1.5 py-0.5 backdrop-blur">
                              <span className="text-[8px] font-bold text-white">{cam.id}</span>
                              <span className="text-[7px] text-slate-300">{cam.zone}</span>
                            </div>
                            {cam.live ? (
                              <span className="absolute right-1 top-1 flex items-center gap-0.5 rounded-full bg-emerald-500/90 px-1 py-0.5 text-[7px] font-bold text-white">
                                <span className="h-1 w-1 rounded-full bg-white" />
                                LIVE
                              </span>
                            ) : (
                              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.55, delay: 0.6 }}
                      className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <AlertTriangle className="h-4 w-4 text-amber-300" />
                          Insights
                        </div>
                        <span className="text-[10px] font-medium text-slate-500">3 new</span>
                      </div>
                      <ul className="space-y-2.5">
                        {alerts.map((alert) => (
                          <li
                            key={alert.text}
                            className="flex items-start gap-2 rounded-md border border-white/5 bg-slate-950/40 px-2.5 py-2"
                          >
                            <span
                              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                                alert.tone === "amber"
                                  ? "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]"
                                  : alert.tone === "blue"
                                    ? "bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]"
                                    : "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                              }`}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-medium text-slate-200">{alert.text}</p>
                              <p className="text-[10px] text-slate-500">{alert.time}</p>
                            </div>
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-slate-600" />
                          </li>
                        ))}
                      </ul>
                    </motion.div>
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
