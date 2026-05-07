"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { ParkingMapMockup } from "@/components/parking-map-mockup";
import { ParkingRouteAnimation } from "@/components/parking-route-animation";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white overflow-hidden mb-40 mt-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-35l mx-auto mb-14">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance mb-5"
          >
            Real-time parking availability.{" "}
            <span className="text-primary">Zero new hardware.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-2xl"
          >
            SwiftPark connects to your existing cameras and gives operators live
            occupancy data and gives drivers the parking visibility they&apos;ve
            always needed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.3}
            className="flex flex-col sm:flex-row items-center gap-3 mt-8"
          >
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              <Play className="w-4 h-4 text-primary" />
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Mockup row: route animation + occupancy map side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.45}
          ></motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.55}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
