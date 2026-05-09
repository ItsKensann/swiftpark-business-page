"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Sparkles, Video } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/itskensann/30min";

const perks = [
  {
    icon: Clock,
    title: "30-minute call",
    description: "A focused walkthrough for your facility size and goals.",
  },
  {
    icon: Video,
    title: "Live product demo",
    description: "See the driver flow, operator dashboard, and detection feed.",
  },
  {
    icon: CheckCircle2,
    title: "Pilot planning",
    description: "Review cameras, deployment timing, and next steps.",
  },
];

export function BookMeetingSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [embedDomain, setEmbedDomain] = useState("localhost");

  useEffect(() => {
    setEmbedDomain(window.location.hostname || "localhost");
  }, []);

  const calendlySrc = `${CALENDLY_URL}?embed_domain=${embedDomain}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2563eb`;

  return (
    <section
      id="book"
      ref={ref}
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-200 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            <Sparkles className="h-3.5 w-3.5" />
            Book a Demo
          </div>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Bring SwiftPark to your facility.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Pilot with your existing cameras. Walk through the driver app,
            operator dashboard, and detection feed in 30 minutes.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-4"
          >
            {perks.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-300/20 bg-blue-400/10 text-blue-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-xl border border-blue-300/20 bg-gradient-to-br from-blue-500/15 via-blue-500/5 to-transparent p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
              <p className="text-sm font-semibold text-white">
                Prefer to open Calendly directly?
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                Open booking page
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-blue-500/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl shadow-slate-950/40">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                  <Calendar className="h-3 w-3" />
                  calendly.com/itskensann/30min
                </span>
              </div>
              <iframe
                src={calendlySrc}
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a SwiftPark demo"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              Powered by{" "}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition hover:text-white"
              >
                Calendly
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
