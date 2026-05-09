"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  Clock,
  MapPin,
  Navigation,
  Search,
} from "lucide-react";

type DriverStep = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  confirmation?: boolean;
};

const driverSteps: DriverStep[] = [
  {
    eyebrow: "Find parking",
    title: "Open the map and see what is available.",
    description:
      "Drivers start with live availability across nearby lots, zones, and campus destinations.",
    image: "/screen-1.png",
    alt: "SwiftPark map showing Brighton Ski Resort availability",
  },
  {
    eyebrow: "View availability",
    title: "Check the lot before arriving.",
    description:
      "Each location shows open spaces, zone breakdowns, and live camera status in one clean view.",
    image: "/screen-2.png",
    alt: "SwiftPark Brighton Ski Resort detail screen",
  },
  {
    eyebrow: "Select a spot",
    title: "Choose the best open space.",
    description:
      "A visual spot map helps drivers pick the right zone without guessing or circling.",
    image: "/screen-3.png",
    alt: "SwiftPark 3D spot map screen",
  },
  {
    eyebrow: "Navigate",
    title: "Route directly to the destination.",
    description:
      "SwiftPark turns availability into turn-by-turn guidance toward the selected zone and spot.",
    image: "/screen-4.png",
    alt: "SwiftPark navigation screen",
  },
  {
    eyebrow: "Confirm parked",
    title: "Confirm the session in one tap.",
    description:
      "Once parked, the driver confirms the spot and the operator dashboard updates with the same live data.",
    confirmation: true,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function PhoneFrame({ children, compact = false }: { children: ReactNode; compact?: boolean }) {
  return (
    <div
      className={`relative mx-auto ${
        compact ? "w-[224px] h-[444px]" : "w-[284px] h-[564px]"
      }`}
    >
      <div className="absolute -inset-3 rounded-[2.5rem] bg-blue-500/10 blur-xl" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-950/25">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
        <div className="h-full w-full overflow-hidden rounded-[1.55rem] bg-white">
          {children}
        </div>
        <div className="absolute bottom-2 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

function ScreenImage({ step }: { step: DriverStep }) {
  if (step.confirmation) {
    return <ConfirmationScreen />;
  }

  return (
    <img
      src={step.image}
      alt={step.alt ?? step.title}
      className="h-full w-full object-cover object-top"
      draggable={false}
    />
  );
}

function ConfirmationScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f5f8ff] px-5 pb-5 pt-11 text-slate-950">
      <div className="mb-5 flex items-center justify-between">
        <button
          type="button"
          aria-label="Back"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase text-blue-600">
            Parked
          </p>
          <p className="text-sm font-bold">Brighton Ski Resort</p>
        </div>
        <div className="h-9 w-9 rounded-lg border border-slate-200 bg-white shadow-sm" />
      </div>

      <div className="mt-4 flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
        >
          <CheckCircle2 className="h-10 w-10" />
        </motion.div>
        <h3 className="text-2xl font-black">
          You are parked.
        </h3>
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
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/25"
      >
        <CheckCircle2 className="h-4 w-4" />
        Confirmed
      </button>
    </div>
  );
}

function MobileStep({ step, index }: { step: DriverStep; index: number }) {
  return (
    <motion.article
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
    >
      <PhoneFrame compact>
        <ScreenImage step={step} />
      </PhoneFrame>
      <div>
        <p className="text-xs font-bold uppercase text-blue-600">
          Step {String(index + 1).padStart(2, "0")} / {step.eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-slate-950">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

export function DriverExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const screenIndex = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 0.58, 0.78, 1],
    [0, 1, 2, 3, 4, 4],
  );
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    return screenIndex.on("change", (value) => {
      const next = Math.min(
        Math.max(Math.round(value), 0),
        driverSteps.length - 1,
      );
      setCurrentScreen(next);
    });
  }, [screenIndex]);

  const activeStep = driverSteps[currentScreen];

  return (
    <section id="driver" ref={containerRef} className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Driver Experience
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
            Find, choose, navigate, park.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A simple driver flow powered by the same real-time camera data
            operators use to manage the facility.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6 pb-24 lg:hidden">
        <div className="space-y-6">
          {driverSteps.map((step, index) => (
            <MobileStep key={step.eyebrow} step={step} index={index} />
          ))}
        </div>
      </div>

      <div className="relative hidden h-[520vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-[0.95fr_1.05fr] items-center gap-16 px-6">
            <div>
              <div className="mb-10 inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                <Search className="h-4 w-4" />
                Real SwiftPark app screens
              </div>

              <div className="space-y-5">
                {driverSteps.map((step, index) => {
                  const active = currentScreen === index;
                  return (
                    <motion.div
                      key={step.eyebrow}
                      animate={{
                        opacity: active ? 1 : 0.36,
                        x: active ? 0 : -18,
                      }}
                      transition={{ duration: 0.35 }}
                      className="flex gap-4"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                          active
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p
                          className={`text-xs font-bold uppercase tracking-[0.18em] ${
                            active ? "text-blue-600" : "text-slate-400"
                          }`}
                        >
                          {step.eyebrow}
                        </p>
                        <h3
                          className={`mt-1 text-2xl font-bold ${
                            active ? "text-slate-950" : "text-slate-500"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`mt-2 max-w-md text-sm leading-relaxed ${
                            active ? "text-slate-600" : "text-slate-400"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <motion.div
                  className="absolute -left-16 top-20 hidden rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-xl xl:block"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <Navigation className="h-4 w-4 text-blue-600" />
                    Live guidance
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Updates as occupancy changes
                  </p>
                </motion.div>

                <PhoneFrame>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep.eyebrow}
                      initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full"
                    >
                      <ScreenImage step={activeStep} />
                    </motion.div>
                  </AnimatePresence>
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
