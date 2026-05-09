"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Cpu, Gauge, ShieldCheck } from "lucide-react";
import { CameraDetectionDemo } from "@/components/camera-detection-demo";

const aiFeatures = [
  {
    icon: Camera,
    title: "Use existing cameras",
    description:
      "Connect ONVIF or RTSP camera feeds without new sensors, construction, or hardware swaps.",
  },
  {
    icon: Cpu,
    title: "Detect occupancy in real time",
    description:
      "YOLO-based computer vision identifies vehicle presence and turns video into structured spot data.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first parking data",
    description:
      "SwiftPark focuses on vehicle presence and occupancy metrics, not facial recognition.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function AiIntelligenceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="ai"
      ref={ref}
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            AI-Powered Parking Intelligence
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Existing cameras become live parking intelligence.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            SwiftPark turns camera feeds into real-time availability for drivers
            and actionable occupancy data for operators.
          </p>

          <div className="mt-8 rounded-lg border border-blue-300/20 bg-blue-400/10 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-400/15">
                <Gauge className="h-5 w-5 text-blue-200" />
              </div>
              <div>
                <p className="font-semibold text-white">
                  Brighton Ski Resort · Zone 1
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  An existing on-site camera streams to SwiftPark. YOLO
                  detection turns that feed into live spot and zone availability
                  for drivers and operators.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {aiFeatures.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.12 + index * 0.08,
                }}
                className="flex gap-4"
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div>
          <CameraDetectionDemo
            videoSrc="/camera-detection.mp4"
            cameraLabel="Brighton Ski Resort | Zone 1"
            availableCount={20}
            occupiedCount={21}
          />
        </div>
      </div>
    </section>
  );
}
