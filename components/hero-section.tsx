"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function MiniDashboard() {
  const bars = [48, 62, 45, 78, 88, 72, 55];

  return (
    <div className="w-[520px] max-w-[82vw] overflow-hidden rounded-lg border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/20">
      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 font-mono text-xs text-slate-500">
          dashboard.swiftpark.live
        </span>
      </div>
      <div className="p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Brighton Ski Resort
            </p>
            <p className="mt-1 font-bold text-white">Live occupancy</p>
          </div>
          <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
            LIVE
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs text-slate-500">Available</p>
            <p className="mt-1 text-2xl font-black text-emerald-300">48</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs text-slate-500">Total spots</p>
            <p className="mt-1 text-2xl font-black text-white">91</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs text-slate-500">Camera</p>
            <p className="mt-1 text-2xl font-black text-blue-300">AI</p>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-400">
              Hourly utilization
            </p>
            <p className="text-xs text-slate-500">Today</p>
          </div>
          <div className="flex h-24 items-end gap-2">
            {bars.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-300"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPhone() {
  return (
    <div className="relative h-[500px] w-[252px] overflow-hidden rounded-[2.1rem] border-[9px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-950/30">
      <div className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
      <img
        src="/screen-1.png"
        alt="SwiftPark app map showing Brighton Ski Resort availability"
        className="h-full w-full rounded-[1.45rem] object-cover object-top"
      />
    </div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] overflow-hidden bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_54%,#f8fafc_100%)] pt-28"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Pilot-ready parking intelligence
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] text-slate-950 md:text-7xl">
            Real-time parking intelligence. Zero new hardware.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
            SwiftPark connects to your existing cameras and gives operators
            live occupancy data while drivers get the visibility they have
            always needed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
            >
              Request Pilot
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#driver"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 text-sm font-bold text-slate-950 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
            >
              <Play className="h-4 w-4 text-blue-600" />
              View Demo
            </a>
            <a
              href="#book"
              className="inline-flex h-12 items-center justify-center rounded-lg px-4 text-sm font-bold text-slate-600 transition hover:text-blue-700"
            >
              Book Demo
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-3">
            {["Existing cameras", "Live dashboard", "Driver app"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative flex min-h-[540px] items-center justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -left-40 top-10 hidden lg:block">
              <MiniDashboard />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <HeroPhone />
            </motion.div>
            <div className="absolute -bottom-6 -left-8 z-20 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Brighton Zone 1
              </p>
              <p className="mt-1 text-2xl font-black text-blue-600">
                48 open
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
