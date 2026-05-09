"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  Circle,
  Clock,
  MapPin,
  Mountain,
  Navigation,
  Search,
  Signal,
  Square,
  Wifi,
} from "lucide-react";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-2 text-[10px] font-bold text-slate-950">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Signal className="h-2.5 w-2.5" />
        <Wifi className="h-2.5 w-2.5" />
        <span className="rounded-sm border border-slate-950 px-0.5 text-[8px] leading-none">
          82
        </span>
      </div>
    </div>
  );
}

export function MapScreen() {
  return (
    <div className="flex h-full flex-col bg-[#eef4ff] text-slate-950">
      <StatusBar />
      <div className="px-4 pt-3">
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <Search className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[11px] font-medium text-slate-400">
            Search lots, garages, resorts
          </span>
        </div>
      </div>

      <div className="relative mt-3 flex-1 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(37,99,235,0.18),transparent_55%)]" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 220 320"
          preserveAspectRatio="none"
        >
          <path
            d="M -10 200 Q 60 160 100 180 T 230 140"
            stroke="#cbd5e1"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 40 -10 Q 70 80 90 140 T 130 320"
            stroke="#cbd5e1"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <motion.path
            d="M 40 240 Q 80 200 120 180 T 200 110"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>

        <motion.div
          className="absolute left-[44%] top-[28%] flex flex-col items-center"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-full border-2 border-white bg-blue-600 px-2 py-1 text-[9px] font-bold text-white shadow-lg">
            Brighton · 48
          </div>
          <div className="mt-0.5 h-2 w-2 rotate-45 bg-blue-600" />
        </motion.div>

        <motion.div
          className="absolute left-[18%] top-[58%] flex flex-col items-center"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <div className="rounded-full border-2 border-white bg-emerald-500 px-2 py-1 text-[9px] font-bold text-white shadow-lg">
            OSU PS1 · 112
          </div>
          <div className="mt-0.5 h-2 w-2 rotate-45 bg-emerald-500" />
        </motion.div>

        <div className="absolute left-[68%] top-[64%] flex flex-col items-center opacity-80">
          <div className="rounded-full border-2 border-white bg-amber-500 px-2 py-1 text-[9px] font-bold text-white shadow-md">
            Lot C · 6
          </div>
          <div className="mt-0.5 h-2 w-2 rotate-45 bg-amber-500" />
        </div>

        <div className="absolute left-1/2 top-[42%] h-8 w-8 -translate-x-1/2 rounded-full border-[3px] border-blue-500/30 bg-blue-500/20 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 ring-2 ring-white" />
        </div>
      </div>

      <div className="rounded-t-2xl border-t border-slate-200 bg-white px-4 pb-4 pt-3 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.18)]">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-200" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              Nearby
            </p>
            <p className="text-sm font-bold">3 facilities live</p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
            ● LIVE
          </span>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50/60 px-3 py-2">
            <div className="flex items-center gap-2">
              <Mountain className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-[11px] font-bold">Brighton Ski Resort</p>
                <p className="text-[9px] text-slate-500">0.4 mi · Resort</p>
              </div>
            </div>
            <span className="text-[11px] font-black text-emerald-600">48</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
            <div className="flex items-center gap-2">
              <Square className="h-4 w-4 text-slate-500" />
              <div>
                <p className="text-[11px] font-bold">OSU Parking Structure 1</p>
                <p className="text-[9px] text-slate-500">1.2 mi · Garage</p>
              </div>
            </div>
            <span className="text-[11px] font-black text-emerald-600">112</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DetailScreen() {
  const zones = [
    { name: "Zone 1 · Live Camera", available: 20, total: 41, live: true },
    { name: "Zone 2 · Visitor", available: 16, total: 30, live: false },
    { name: "Zone 3 · General", available: 12, total: 20, live: false },
  ];

  return (
    <div className="flex h-full flex-col bg-white text-slate-950">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-3">
        <button
          type="button"
          aria-label="Back"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <p className="text-[11px] font-bold">Brighton Ski Resort</p>
        <div className="h-8 w-8" />
      </div>

      <div className="px-4 pt-3">
        <div className="relative h-24 overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-3 shadow-md">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="h-full w-full">
              <polygon points="0,80 40,20 70,50 110,10 150,40 200,15 200,80" fill="white" />
            </svg>
          </div>
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/80">
                Resort
              </p>
              <p className="mt-0.5 text-sm font-bold text-white">
                Brighton Ski Resort
              </p>
              <p className="text-[10px] text-white/80">Big Cottonwood, UT</p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              LIVE
            </span>
          </div>
          <div className="relative mt-2 flex items-end justify-between">
            <p className="text-2xl font-black text-white">48</p>
            <p className="mb-0.5 text-[10px] font-medium text-white/80">
              of 91 spots open
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex-1 overflow-hidden px-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Zone breakdown
        </p>
        <div className="mt-2 space-y-2">
          {zones.map((zone) => {
            const pct = Math.round((zone.available / zone.total) * 100);
            return (
              <div
                key={zone.name}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[11px] font-bold">{zone.name}</p>
                    {zone.live && (
                      <span className="flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-bold text-emerald-600">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                        AI
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-slate-700">
                    {zone.available}/{zone.total}
                  </p>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <button
          type="button"
          className="flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-[12px] font-bold text-white shadow-md"
        >
          Pick a spot
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export function SpotPickerScreen() {
  const rows = 5;
  const cols = 7;
  const occupied = new Set([1, 4, 7, 9, 12, 17, 19, 22, 24, 28, 30, 33]);
  const selected = 14;

  return (
    <div className="flex h-full flex-col bg-[#f8fafc] text-slate-950">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-3">
        <button
          type="button"
          aria-label="Back"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-center">
          <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
            Zone 1
          </p>
          <p className="text-[11px] font-bold">Pick a spot</p>
        </div>
        <div className="h-8 w-8" />
      </div>

      <div className="mx-4 mt-3 flex items-center justify-around rounded-lg border border-slate-200 bg-white px-3 py-2">
        <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
          <span className="h-2 w-2 rounded-sm bg-emerald-500" />
          Open
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
          <span className="h-2 w-2 rounded-sm bg-slate-300" />
          Occupied
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
          <span className="h-2 w-2 rounded-sm bg-blue-600" />
          You
        </div>
      </div>

      <div className="flex-1 px-4 pt-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Lower Lot
            </p>
            <p className="text-[9px] font-bold text-emerald-600">20 open</p>
          </div>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {Array.from({ length: rows * cols }).map((_, idx) => {
              const isOccupied = occupied.has(idx);
              const isSelected = idx === selected;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.012, duration: 0.25 }}
                  className={`aspect-[3/4] rounded ${
                    isSelected
                      ? "bg-blue-600 ring-2 ring-blue-300"
                      : isOccupied
                        ? "bg-slate-300"
                        : "bg-emerald-500/80"
                  }`}
                />
              );
            })}
          </div>
          <div className="mt-2 flex items-center justify-center text-[9px] font-bold text-slate-400">
            ▲ ENTRANCE
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50/70 px-3 py-2">
          <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
            Selected
          </p>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[12px] font-bold">Spot S02 · Zone 1</p>
            <p className="text-[10px] font-medium text-slate-500">~2 min walk</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <button
          type="button"
          className="flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-[12px] font-bold text-white shadow-md"
        >
          Navigate to S02
          <Navigation className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export function NavigationScreen() {
  return (
    <div className="flex h-full flex-col bg-[#0b1220] text-white">
      <StatusBar />
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(37,99,235,0.35),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 220 360"
          preserveAspectRatio="none"
        >
          <path
            d="M 110 360 Q 110 280 90 220 T 110 60"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="42"
            fill="none"
            strokeLinecap="round"
          />
          <motion.path
            d="M 110 360 Q 110 280 90 220 T 110 60"
            stroke="#3b82f6"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="0 1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>

        <div className="absolute left-1/2 top-[78%] flex h-9 w-9 -translate-x-1/2 items-center justify-center">
          <span className="absolute h-9 w-9 animate-ping rounded-full bg-blue-500/40" />
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-2 ring-white">
            <Circle className="h-2 w-2 fill-white text-white" />
          </span>
        </div>
        <div className="absolute left-[52%] top-[14%] flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white">
            <CheckCircle2 className="h-4 w-4 text-white" />
          </div>
          <div className="mt-1 rounded bg-emerald-500 px-1.5 py-0.5 text-[8px] font-bold text-white">
            S02
          </div>
        </div>

        <div className="absolute left-3 right-3 top-3 rounded-xl border border-white/10 bg-slate-950/85 px-3 py-2 backdrop-blur">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20">
              <Navigation className="h-4 w-4 text-blue-300" />
            </div>
            <div className="flex-1">
              <p className="text-[9px] font-bold uppercase text-blue-300">
                In 200 ft
              </p>
              <p className="text-[12px] font-bold">Turn right · Lower Lot</p>
            </div>
            <p className="font-mono text-[10px] text-slate-400">2 min</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950 px-4 pb-4 pt-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-blue-300">
              Routing to
            </p>
            <p className="text-[12px] font-bold">Spot S02 · Zone 1</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-lg font-black text-white">2:14</p>
            <p className="text-[9px] text-slate-400">ETA · 0.4 mi</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 rounded-lg bg-emerald-500/10 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <p className="text-[9px] font-bold text-emerald-300">
            Spot still available · just confirmed by camera
          </p>
        </div>
      </div>
    </div>
  );
}

export function ConfirmationScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f5f8ff] px-5 pb-5 pt-2 text-slate-950">
      <StatusBar />
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="Back"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase text-blue-600">
            Parked
          </p>
          <p className="text-sm font-bold">Brighton Ski Resort</p>
        </div>
        <div className="h-9 w-9" />
      </div>

      <div className="mt-4 flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
          <CheckCircle2 className="relative h-10 w-10" />
        </motion.div>
        <h3 className="text-2xl font-black">You are parked.</h3>
        <p className="mt-2 max-w-[210px] text-sm leading-relaxed text-slate-500">
          Spot S02 in Zone 1 is confirmed and synced to the operator view.
        </p>

        <div className="mt-8 w-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-semibold text-slate-500">
                Destination
              </span>
            </div>
            <span className="text-sm font-bold">Zone 1</span>
          </div>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-semibold text-slate-500">
                Session
              </span>
            </div>
            <span className="font-mono text-sm font-bold">00:14:32</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/25"
      >
        <CheckCircle2 className="h-4 w-4" />
        Confirmed
      </button>
    </div>
  );
}
