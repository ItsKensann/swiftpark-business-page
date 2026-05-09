"use client";

import { type ComponentType, type ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Navigation as NavigationIcon, RefreshCw, Search } from "lucide-react";
import {
  ConfirmationScreen,
  DetailScreen,
  MapScreen,
  NavigationScreen,
  SpotPickerScreen,
} from "@/components/app-screens";

type DriverStep = {
  eyebrow: string;
  title: string;
  description: string;
  Screen: ComponentType;
};

const driverSteps: DriverStep[] = [
  {
    eyebrow: "Find parking",
    title: "Open the map and see live availability.",
    description:
      "Open the map and see live availability across nearby garages, lots, and campus destinations.",
    Screen: MapScreen,
  },
  {
    eyebrow: "View availability",
    title: "Check the lot before arriving.",
    description:
      "Compare open spaces, zone breakdowns, and live camera status before arriving.",
    Screen: DetailScreen,
  },
  {
    eyebrow: "Select a spot",
    title: "Pick the best open space.",
    description:
      "Pick the best open space from a clear visual spot map.",
    Screen: SpotPickerScreen,
  },
  {
    eyebrow: "Navigate",
    title: "Route directly to the destination.",
    description:
      "Turn availability into guidance toward the selected zone and spot.",
    Screen: NavigationScreen,
  },
  {
    eyebrow: "Confirm parked",
    title: "Confirm the session in one tap.",
    description:
      "Confirm the session in one tap and sync the result back to the operator view.",
    Screen: ConfirmationScreen,
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
      <div className="absolute -inset-3 rounded-[2.5rem] bg-blue-500/15 blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-slate-950/30">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
        <div className="h-full w-full overflow-hidden rounded-[1.55rem] bg-white">
          {children}
        </div>
        <div className="absolute bottom-2 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

function MobileStep({ step, index }: { step: DriverStep; index: number }) {
  const Screen = step.Screen;
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
        <Screen />
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
  const ActiveScreen = activeStep.Screen;

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
            From search to parked, in seconds.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Four taps. Zero circling. Here&rsquo;s the flow drivers see.
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
                Live App Demo
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
                      <ActiveScreen />
                    </motion.div>
                  </AnimatePresence>
                </PhoneFrame>

                {/* Supporting callouts — positioned well outside the phone frame
                    on xl+ only, hidden on smaller breakpoints to never overlap. */}
                <motion.div
                  aria-hidden
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.3 },
                    x: { duration: 0.5, delay: 0.3 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="pointer-events-none absolute top-12 z-30 hidden w-[200px] rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur xl:block"
                  style={{ left: "calc(100% + 28px)" }}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <NavigationIcon className="h-4 w-4 text-blue-600" />
                    Live guidance
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Updates as occupancy changes
                  </p>
                </motion.div>

                <motion.div
                  aria-hidden
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.45 },
                    x: { duration: 0.5, delay: 0.45 },
                    y: {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                  className="pointer-events-none absolute bottom-16 z-30 hidden w-[200px] rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur xl:block"
                  style={{ right: "calc(100% + 28px)" }}
                >
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-blue-600" />
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      Synced
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-950">
                    Operator view updated
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
