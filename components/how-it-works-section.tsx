"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Cpu, LayoutDashboard } from "lucide-react";

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Connect your cameras",
    description:
      "Works with the IP cameras you already have installed. No new hardware, no contractors, no downtime.",
    detail: "Compatible with 99% of ONVIF-compliant IP cameras",
    color: "from-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconColor: "text-primary",
  },
  {
    icon: Cpu,
    number: "02",
    title: "We handle the rest",
    description:
      "Our computer vision model detects vehicles and tracks occupancy automatically — all in the background.",
    detail: "94.7% detection accuracy across all lighting conditions",
    color: "from-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconColor: "text-primary",
  },
  {
    icon: LayoutDashboard,
    number: "03",
    title: "Go live",
    description:
      "Operators get a live dashboard. Drivers see availability in real time before they even leave home.",
    detail: "Average time-to-live: under 4 hours after sign-up",
    color: "from-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconColor: "text-primary",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            No installation crew. No new infrastructure. Just connect and go.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden sm:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.15 + i * 0.15,
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-white rounded-2xl border border-border p-7 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={`w-6 h-6 ${step.iconColor}`} />
                        </div>
                        <span className="text-4xl font-black text-border group-hover:text-primary/20 transition-colors duration-300 leading-none">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {/* <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-accent px-2.5 py-1 rounded-full border border-primary/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {step.detail}
                      </div> */}
                    </div>
                  </div>

                  {/* Center dot on timeline */}
                  <div className="hidden md:flex w-2/12 justify-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{
                        delay: 0.3 + i * 0.15,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="w-10 h-10 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center"
                    >
                      <span className="text-primary-foreground text-[11px] font-bold">
                        {i + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
