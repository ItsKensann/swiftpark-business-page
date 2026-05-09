"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Landmark, MapPin, ParkingCircle, Users } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Garages",
    description:
      "Multi-level facilities with zone, floor, and entrance-level visibility.",
  },
  {
    icon: ParkingCircle,
    title: "Surface lots",
    description:
      "Open-air lots that need real-time counts without buried sensors.",
  },
  {
    icon: Users,
    title: "Campuses",
    description:
      "Universities and workplaces balancing visitor, staff, and event demand.",
  },
  {
    icon: MapPin,
    title: "Resorts",
    description:
      "Destination parking where arrival experience and peak days matter.",
  },
  {
    icon: Landmark,
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
          {facilities.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.06,
              }}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
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
