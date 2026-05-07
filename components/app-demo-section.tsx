"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Smartphone, Monitor, Zap } from "lucide-react";
import { CameraDetectionDemo } from "@/components/camera-detection-demo";

interface ScreenProps {
  src: string;
  alt: string;
  label: string;
  description: string;
  index: number;
}

function Screen({ src, alt, label, description, index }: ScreenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15,
      }}
      className="relative group"
    >
      {/* Step number badge */}
      <div className="absolute -top-3 -left-3 z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
        {index + 1}
      </div>

      {/* Screen container with glow */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Image placeholder */}
        <div className="relative bg-muted overflow-hidden aspect-[9/19]">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Shine effect on scroll */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : { x: "-100%" }}
            transition={{
              duration: 1.2,
              delay: 0.3 + index * 0.15,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Label below */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-white text-lg">{label}</h3>
        <p className="text-sm text-white/60 mt-1">{description}</p>
      </div>
    </motion.div>
  );
}

const screens = [
  {
    src: "/screen-1.png",
    alt: "SwiftPark home screen",
    label: "Find Nearby Parking",
    description: "See real-time availability at a glance",
  },
  {
    src: "/screen-2.png",
    alt: "SwiftPark parking location information",
    label: "Detailed Parking Information",
    description: "View metrics of selected parking location",
  },
  {
    src: "/screen-3.png",
    alt: "SwiftPark 3D parking view",
    label: "3D Parking Lot View",
    description: "Locate closest available parking spot",
  },
  {
    src: "/screen-4.png",
    alt: "SwiftPark map view",
    label: "Navigate to Your Spot",
    description: "Turn by turn directions to open spaces",
  },
];

export function AppDemoSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the phone mockup
  const phoneY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const phoneScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9],
  );

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={containerRef}
      id="demo"
      className="relative py-24 md:py-32 overflow-hidden bg-foreground"
      //   style={{ position: "relative" }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, var(--brand-blue) 0%, transparent 60%)`,
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
            Parking made <span className="text-primary">effortless</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-balance">
            From search to park in seconds. Here&apos;s how SwiftPark guides you
            to the perfect spot.
          </p>
        </motion.div>

        {/* Scrolling screen cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {screens.map((screen, index) => (
            <Screen
              key={screen.label}
              src={screen.src}
              alt={screen.alt}
              label={screen.label}
              description={screen.description}
              index={index}
            />
          ))}
        </div>

        {/* Camera Detection Demo */}
        <CameraDetectionDemo />
      </div>
    </section>
  );
}
