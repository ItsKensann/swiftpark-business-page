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
      "Use the camera infrastructure already installed at your facility.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Detect occupancy",
    description:
      "Computer vision turns vehicle presence into live spot and zone data.",
  },
  {
    icon: LayoutDashboard,
    number: "03",
    title: "Launch app + dashboard",
    description:
      "Drivers get guidance. Operators get real-time visibility.",
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
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-500" />
              <motion.span
                aria-hidden
                initial={{ x: "-100%" }}
                animate={
                  inView ? { x: ["-100%", "100%"] } : { x: "-100%" }
                }
                transition={{
                  duration: 2.4,
                  ease: "easeInOut",
                  delay: 0.4 + index * 0.18,
                  repeat: Infinity,
                  repeatDelay: 3.2,
                }}
                className="pointer-events-none absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />

              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/60 text-blue-600 ring-1 ring-inset ring-blue-100">
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
