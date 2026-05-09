"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, RadioTower } from "lucide-react";

interface CameraDetectionDemoProps {
  videoSrc?: string;
  availableCount?: number;
  occupiedCount?: number;
  cameraLabel?: string;
}

export function CameraDetectionDemo({
  videoSrc = "/camera-detection.mp4",
  availableCount = 20,
  occupiedCount = 21,
  cameraLabel = "Brighton Ski Resort | Zone 1",
}: CameraDetectionDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const total = availableCount + occupiedCount;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/40">
        <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="truncate font-mono text-xs text-slate-400">
              live-camera.swiftpark.io
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            LIVE
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-950 px-4 py-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
              Camera feed
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {cameraLabel}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300">
            <CheckCircle2 className="h-4 w-4" />
            Detecting vehicles
          </div>
        </div>

        <div className="relative aspect-video bg-black">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Live parking camera detection clip"
          />

          {!videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
              <div className="font-mono text-sm text-slate-500">
                Loading live feed...
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15" />
          <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/10 bg-black/55 px-3 py-2 backdrop-blur">
            <div className="flex items-center gap-2 font-mono text-xs text-white">
              <RadioTower className="h-3.5 w-3.5 text-blue-300" />
              YOLO detection overlay
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-slate-950">
          <div className="px-4 py-4">
            <p className="text-xs font-medium text-slate-500">Available</p>
            <p className="mt-1 text-2xl font-black text-emerald-300">
              {availableCount}
            </p>
          </div>
          <div className="px-4 py-4">
            <p className="text-xs font-medium text-slate-500">Occupied</p>
            <p className="mt-1 text-2xl font-black text-red-300">
              {occupiedCount}
            </p>
          </div>
          <div className="px-4 py-4">
            <p className="text-xs font-medium text-slate-500">Zone total</p>
            <p className="mt-1 text-2xl font-black text-white">{total}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
