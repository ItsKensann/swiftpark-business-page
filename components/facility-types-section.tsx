"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type IconProps = { className?: string };

function GarageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M4 13L16 5l12 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 13v15M26 13v15M6 28h20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 17h12M10 22h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fontSize="6"
        fontWeight="800"
        fill="currentColor"
      >
        P
      </text>
    </svg>
  );
}

function SurfaceLotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="7"
        width="24"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M10 7v18M16 7v18M22 7v18"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.7"
      />
      <rect
        x="11"
        y="10"
        width="4"
        height="6"
        rx="0.6"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="17"
        y="16"
        width="4"
        height="6"
        rx="0.6"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

function CampusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 5l11 5-11 5L5 10l11-5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="M9 12v5c0 2 3 4 7 4s7-2 7-4v-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 11v8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="27" cy="22" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ResortIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M3 26L11 13l5 7 4-5 9 11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="M9 17l2 1.5M14 17l1.5 1.5M22 13l1.5 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="22" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M22 4v0M22 10v0M19 7h0M25 7h0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MunicipalityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M5 12l11-6 11 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M5 12h22M5 27h22"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9 12v15M14 12v15M18 12v15M23 12v15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="11"
        width="20"
        height="2"
        fill="currentColor"
        opacity="0.0"
      />
    </svg>
  );
}

const facilities = [
  {
    Icon: GarageIcon,
    title: "Parking Garages",
    description:
      "Multi-level facilities with zone, floor, and entrance-level visibility.",
  },
  {
    Icon: SurfaceLotIcon,
    title: "Surface Lots",
    description:
      "Open-air lots that need real-time counts without buried sensors.",
  },
  {
    Icon: CampusIcon,
    title: "Campuses",
    description:
      "Universities and workplaces balancing visitor, staff, and event demand.",
  },
  {
    Icon: ResortIcon,
    title: "Resorts",
    description:
      "Destination parking where arrival experience and peak days matter.",
  },
  {
    Icon: MunicipalityIcon,
    title: "Municipalities",
    description:
      "City parking programs that need public visibility and utilization data.",
  },
];

export function FacilityTypesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="facilities" ref={ref} className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Facility Types
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
            Built for every parking environment.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            SwiftPark adapts to the cameras, layouts, and operating needs your
            facility already has.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {facilities.map(({ Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.06,
              }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-500" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 text-blue-600 ring-1 ring-inset ring-blue-100">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
