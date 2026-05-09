"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Cpu, LayoutDashboard } from "lucide-react";

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Connect existing cameras",
    description:
      "SwiftPark integrates with current IP camera infrastructure through ONVIF or RTSP. No new hardware, construction, or downtime.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Detect occupancy",
    description:
      "Computer vision models process feeds in real time and translate vehicle presence into open and occupied spot data.",
  },
  {
    icon: LayoutDashboard,
    number: "03",
    title: "Launch app and dashboard",
    description:
      "Drivers see availability before they arrive. Operators monitor occupancy, alerts, camera health, and utilization analytics.",
  },
];

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="how-it-works" ref={ref} className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            How It Works
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
            From camera to clarity in three steps.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A pilot can start with the infrastructure already on site and grow
            into a full driver and operator experience.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, number, title, description }, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-4xl font-black text-slate-100">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
