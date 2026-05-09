"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Video } from "lucide-react";

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
    <section id="book" ref={ref} className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">
            <Calendar className="h-4 w-4" />
            Book Demo
          </div>
          <h2 className="mt-5 text-4xl font-bold text-slate-950 md:text-5xl">
            Request a pilot or book a SwiftPark demo.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Bring your camera layout, lot size, or pilot idea. We will show how
            SwiftPark can turn it into live parking intelligence.
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
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-slate-950">
                Prefer to open Calendly directly?
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Open booking page
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-950/10">
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
                className="underline underline-offset-2 transition hover:text-slate-950"
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
