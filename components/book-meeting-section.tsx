"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/itskensann/30min";

const perks = [
  {
    icon: Clock,
    title: "30-minute call",
    description: "A focused demo tailored to your facility size and goals.",
  },
  {
    icon: Video,
    title: "Live product walkthrough",
    description:
      "See real-time occupancy detection in action on your own footage.",
  },
  {
    icon: CheckCircle,
    title: "No commitment",
    description: "Get pricing, timelines, and answers.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function BookMeetingSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="book" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 bg-accent text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Calendar className="w-3.5 h-3.5" />
            Book a Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            See SwiftPark in action
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            Schedule a free 30-minute walkthrough with our team and find out how
            quickly you can go live.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — perks */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-center gap-6"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
          >
            {perks.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Calendly embed */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
          >
            <div className="rounded-2xl border border-border overflow-hidden shadow-sm bg-card">
              <iframe
                src={`${CALENDLY_URL}?embed_domain=${typeof window !== "undefined" ? window.location.hostname : "localhost"}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2563eb`}
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a SwiftPark demo"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Powered by{" "}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
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
