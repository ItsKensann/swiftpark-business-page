"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  ChevronLeft,
  Clock,
  MapPin,
  Mountain,
  Navigation,
  Search,
  Signal,
  Square,
  Wifi,
} from "lucide-react";

/* ---------------------------------------------------------------------------
 * Shared SwiftPark mock-UI primitives
 * Palette:   blue-600 (primary), emerald-500 (open), red-400 (occupied)
 * Radius:    rounded-xl (cards) / rounded-full (badges) / rounded-lg (buttons)
 * Type:      [9px] eyebrow / [11-12px] body / sm-lg headings
 * ------------------------------------------------------------------------ */

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

function NavBar({
  title,
  eyebrow,
  back = true,
  trailing,
}: {
  title: string;
  eyebrow?: string;
  back?: boolean;
  trailing?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-4 pt-3">
      {back ? (
        <button
          type="button"
          aria-label="Back"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      ) : (
        <div className="h-8 w-8" />
      )}
      <div className="text-center">
        {eyebrow && (
          <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
            {eyebrow}
          </p>
        )}
        <p className="text-[11px] font-bold text-slate-950">{title}</p>
      </div>
      <div className="flex h-8 w-8 items-center justify-center">{trailing}</div>
    </div>
  );
}

function LiveBadge({ tone = "emerald" }: { tone?: "emerald" | "white" }) {
  const cls =
    tone === "white"
      ? "bg-white/20 text-white backdrop-blur"
      : "bg-emerald-500/10 text-emerald-600";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold ${cls}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "white" ? "bg-emerald-300" : "bg-emerald-500"
        }`}
      />
      LIVE
    </span>
  );
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-[12px] font-bold text-white shadow-md shadow-blue-600/25 transition"
    >
      {children}
    </button>
  );
}

/* ---------------------------------------------------------------------------
 * 1. Map screen — Hero + Step 1
 * ------------------------------------------------------------------------ */
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
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>

        <motion.div
          className="absolute left-[44%] top-[26%] flex flex-col items-center"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-full border-2 border-white bg-blue-600 px-2 py-1 text-[9px] font-bold text-white shadow-lg">
            Brighton · 48
          </div>
          <div className="mt-0.5 h-2 w-2 rotate-45 bg-blue-600" />
        </motion.div>

        <motion.div
          className="absolute left-[16%] top-[58%] flex flex-col items-center"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <div className="rounded-full border-2 border-white bg-emerald-500 px-2 py-1 text-[9px] font-bold text-white shadow-lg">
            OSU PS1 · 112
          </div>
          <div className="mt-0.5 h-2 w-2 rotate-45 bg-emerald-500" />
        </motion.div>

        <div className="absolute left-[68%] top-[64%] flex flex-col items-center opacity-90">
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
            <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
              Nearby
            </p>
            <p className="text-[12px] font-bold text-slate-950">
              3 facilities live
            </p>
          </div>
          <LiveBadge />
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/60 px-3 py-2">
            <div className="flex items-center gap-2">
              <Mountain className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-[11px] font-bold text-slate-950">
                  Brighton Ski Resort
                </p>
                <p className="text-[9px] text-slate-500">0.4 mi · Resort</p>
              </div>
            </div>
            <span className="text-[11px] font-black text-emerald-600">48</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
            <div className="flex items-center gap-2">
              <Square className="h-4 w-4 text-slate-500" />
              <div>
                <p className="text-[11px] font-bold text-slate-950">
                  OSU Parking Structure 1
                </p>
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

/* ---------------------------------------------------------------------------
 * 2. Detail screen — facility overview, zone breakdown
 * ------------------------------------------------------------------------ */
export function DetailScreen() {
  const zones = [
    { name: "Zone 1", sub: "Live Camera", available: 20, total: 41, live: true },
    { name: "Zone 2", sub: "Visitor", available: 16, total: 30, live: false },
    { name: "Zone 3", sub: "General", available: 12, total: 20, live: false },
  ];

  return (
    <div className="flex h-full flex-col bg-[#f6f8fc] text-slate-950">
      <StatusBar />
      <NavBar title="Brighton Ski Resort" eyebrow="Resort" />

      <div className="px-4 pt-3">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-4 shadow-lg shadow-blue-600/20">
          <div className="absolute inset-0 opacity-25">
            <svg
              viewBox="0 0 200 80"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <polygon
                points="0,80 40,20 70,50 110,10 150,40 200,15 200,80"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/80">
                Live availability
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-white/85">
                Big Cottonwood, UT
              </p>
            </div>
            <LiveBadge tone="white" />
          </div>
          <div className="relative mt-4 flex items-end gap-2">
            <p className="text-4xl font-black leading-none text-white">48</p>
            <p className="mb-1 text-[11px] font-semibold text-white/85">
              of <span className="font-bold text-white">91</span> spots open
            </p>
          </div>
          <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.round((48 / 91) * 100)}%` }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex-1 overflow-hidden px-4">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
            Zone breakdown
          </p>
          <p className="text-[9px] font-medium text-slate-400">3 zones</p>
        </div>
        <div className="mt-2 space-y-2">
          {zones.map((zone) => {
            const pct = Math.round((zone.available / zone.total) * 100);
            return (
              <div
                key={zone.name}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[11px] font-bold text-slate-950">
                      {zone.name}
                    </p>
                    <span className="text-[9px] font-medium text-slate-500">
                      · {zone.sub}
                    </span>
                    {zone.live && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-100 px-1.5 py-0.5 text-[8px] font-bold text-blue-700">
                        <Camera className="h-2 w-2" />
                        AI
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-slate-700">
                    <span className="text-emerald-600">{zone.available}</span>
                    <span className="text-slate-400">/{zone.total}</span>
                  </p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
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
        <PrimaryButton>
          Pick a spot
          <ArrowUpRight className="h-3.5 w-3.5" />
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 3. Spot picker — 3D-style isometric lot with car models
 * ------------------------------------------------------------------------ */
function CarModel({
  tone = "occupied",
  delay = 0,
}: {
  tone?: "occupied" | "selected";
  delay?: number;
}) {
  const fill =
    tone === "selected"
      ? "from-blue-500 to-blue-700"
      : "from-slate-500 to-slate-700";
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="absolute inset-1 flex flex-col gap-[1px]"
    >
      {/* roof */}
      <div className={`h-[42%] rounded-[3px] bg-gradient-to-b ${fill} shadow-md`} />
      {/* windshield */}
      <div className="mx-1 h-[10%] rounded-sm bg-cyan-200/40" />
      {/* hood */}
      <div className={`h-[42%] rounded-[3px] bg-gradient-to-b ${fill} shadow-md`} />
      {/* headlights */}
      <div className="absolute bottom-0.5 left-1/2 flex -translate-x-1/2 gap-0.5">
        <span className="h-0.5 w-1.5 rounded-sm bg-amber-200/80" />
        <span className="h-0.5 w-1.5 rounded-sm bg-amber-200/80" />
      </div>
    </motion.div>
  );
}

function Stall({
  state,
  delay,
}: {
  state: "open" | "occupied" | "selected";
  delay: number;
}) {
  const tint =
    state === "selected"
      ? "bg-blue-500/20 ring-2 ring-blue-500"
      : state === "occupied"
        ? "bg-slate-200/60"
        : "bg-emerald-400/15 ring-1 ring-emerald-400/40";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay }}
      className={`relative aspect-[3/5] rounded-md ${tint}`}
    >
      {/* parking lines */}
      <span className="absolute inset-y-0 left-0 w-px bg-white/70" />
      <span className="absolute inset-y-0 right-0 w-px bg-white/70" />
      <span className="absolute inset-x-0 bottom-0 h-px bg-white/70" />
      {state === "occupied" && <CarModel tone="occupied" delay={delay + 0.05} />}
      {state === "selected" && (
        <>
          <CarModel tone="selected" delay={delay + 0.05} />
          <motion.span
            initial={{ y: -3, opacity: 0 }}
            animate={{ y: -7, opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-blue-600 px-1 py-0.5 text-[7px] font-black text-white shadow-md"
          >
            S02
          </motion.span>
        </>
      )}
    </motion.div>
  );
}

export function SpotPickerScreen() {
  // 0 = open, 1 = occupied, 2 = selected
  const rowA = [1, 0, 1, 0, 1, 0, 1] as const;
  const rowB = [0, 1, 0, 2, 0, 1, 0] as const;

  const stateOf = (n: 0 | 1 | 2): "open" | "occupied" | "selected" =>
    n === 0 ? "open" : n === 1 ? "occupied" : "selected";

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#eef4ff] via-white to-[#f8fafc] text-slate-950">
      <StatusBar />
      <NavBar title="Pick a spot" eyebrow="Zone 1 · 3D View" />

      <div className="mx-4 mt-3 flex items-center justify-around rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
        <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
          <span className="h-2 w-2 rounded-sm bg-emerald-400/70 ring-1 ring-emerald-400" />
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
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-50 to-white p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Lower Lot · Zone 1
            </p>
            <p className="text-[9px] font-bold text-emerald-600">8 open</p>
          </div>

          {/* 3D scene */}
          <div
            className="mx-auto"
            style={{ perspective: "700px", perspectiveOrigin: "50% 30%" }}
          >
            <div
              className="relative"
              style={{
                transform: "rotateX(38deg) rotateZ(-2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* asphalt */}
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-b from-slate-300 to-slate-200" />

              <div className="relative space-y-2">
                {/* row A - facing center */}
                <div className="grid grid-cols-7 gap-1">
                  {rowA.map((state, idx) => (
                    <Stall
                      key={`a-${idx}`}
                      state={stateOf(state)}
                      delay={idx * 0.04}
                    />
                  ))}
                </div>

                {/* aisle with arrow */}
                <div className="relative flex h-3 items-center">
                  <div className="h-px flex-1 bg-slate-400/70" />
                  <span className="mx-2 text-[8px] font-bold tracking-widest text-slate-400">
                    AISLE
                  </span>
                  <div className="h-px flex-1 bg-slate-400/70" />
                </div>

                {/* row B */}
                <div className="grid grid-cols-7 gap-1">
                  {rowB.map((state, idx) => (
                    <Stall
                      key={`b-${idx}`}
                      state={stateOf(state)}
                      delay={0.3 + idx * 0.04}
                    />
                  ))}
                </div>
              </div>

              {/* entrance arrow */}
              <div className="mt-2 flex items-center justify-center gap-1 text-[8px] font-bold text-slate-500">
                <span className="text-blue-600">▲</span> ENTRANCE
              </div>
            </div>
          </div>

          {/* perspective overlay highlight */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(37,99,235,0.10),transparent_60%)]" />
        </div>

        <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50/70 px-3 py-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
                Selected
              </p>
              <p className="mt-0.5 text-[12px] font-bold text-slate-950">
                Spot S02 · Zone 1
              </p>
            </div>
            <p className="text-right text-[9px] font-medium text-slate-500">
              ~2 min
              <br />
              walk
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <PrimaryButton>
          Navigate to S02
          <Navigation className="h-3.5 w-3.5" />
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 4. Navigation screen
 * ------------------------------------------------------------------------ */
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
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>

        <div className="absolute left-1/2 top-[78%] flex h-9 w-9 -translate-x-1/2 items-center justify-center">
          <span className="absolute h-9 w-9 animate-ping rounded-full bg-blue-500/40" />
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-2 ring-white">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
        </div>
        <div className="absolute left-[52%] top-[14%] flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 ring-2 ring-white shadow-lg shadow-blue-500/30">
            <CheckCircle2 className="h-4 w-4 text-white" />
          </div>
          <div className="mt-1 rounded bg-blue-500 px-1.5 py-0.5 text-[8px] font-bold text-white">
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
        <div className="mt-2 flex items-center gap-1 rounded-lg bg-blue-500/15 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
          <p className="text-[9px] font-bold text-blue-200">
            Spot still available · just confirmed by camera
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 5. Confirmation screen — blue (brand) + subtle blue confetti
 * ------------------------------------------------------------------------ */
function Confetti() {
  const pieces = [
    { left: "12%", top: "18%", size: 6, delay: 0, color: "bg-blue-500" },
    { left: "28%", top: "8%", size: 4, delay: 0.15, color: "bg-cyan-400" },
    { left: "70%", top: "12%", size: 5, delay: 0.05, color: "bg-blue-400" },
    { left: "84%", top: "22%", size: 6, delay: 0.25, color: "bg-blue-600" },
    { left: "20%", top: "30%", size: 3, delay: 0.35, color: "bg-cyan-300" },
    { left: "78%", top: "32%", size: 4, delay: 0.4, color: "bg-blue-300" },
    { left: "50%", top: "6%", size: 5, delay: 0.1, color: "bg-blue-500" },
    { left: "60%", top: "26%", size: 3, delay: 0.5, color: "bg-cyan-500" },
    { left: "8%", top: "32%", size: 4, delay: 0.45, color: "bg-blue-400" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -14, 8, 22],
            rotate: [0, 90, 180, 270],
          }}
          transition={{
            duration: 2.2,
            delay: 0.4 + p.delay,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeOut",
          }}
          className={`absolute rounded-sm ${p.color}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

export function ConfirmationScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#f5f8ff] text-slate-950">
      <StatusBar />
      <NavBar title="Brighton Ski Resort" eyebrow="Parked" />
      <Confetti />

      <div className="relative mt-2 flex flex-1 flex-col items-center justify-center px-5 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-600/30"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/40" />
          <span className="absolute -inset-2 rounded-full border border-blue-400/30" />
          <CheckCircle2 className="relative h-10 w-10" />
        </motion.div>
        <h3 className="text-2xl font-black text-slate-950">You are parked.</h3>
        <p className="mt-2 max-w-[210px] text-[12px] leading-relaxed text-slate-500">
          Spot S02 in Zone 1 is confirmed and synced to the operator view.
        </p>

        <div className="mt-7 w-full rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="text-[11px] font-semibold text-slate-500">
                Destination
              </span>
            </div>
            <span className="text-[12px] font-bold text-slate-950">Zone 1</span>
          </div>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-[11px] font-semibold text-slate-500">
                Session
              </span>
            </div>
            <span className="font-mono text-[12px] font-bold text-slate-950">
              00:14:32
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-4">
        <PrimaryButton>
          <CheckCircle2 className="h-4 w-4" />
          Confirmed
        </PrimaryButton>
      </div>
    </div>
  );
}
