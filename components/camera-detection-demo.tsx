"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, CheckCircle2 } from "lucide-react";

interface CameraDetectionDemoProps {
  videoSrc?: string; // e.g. "/camera-detection.mp4"
  availableCount?: number; // shown in the stats bar
  occupiedCount?: number;
  cameraLabel?: string; // e.g. "CAM-01 | Lot A - Level 1"
}

export function CameraDetectionDemo({
  videoSrc = "/camera-detection.mp4",
  availableCount = 20,
  occupiedCount = 21,
  cameraLabel = "Brighton Ski Resort | Zone 1",
}: CameraDetectionDemoProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="mt-20 md:mt-28"
    >
      {/* Section header */}
      <div className="text-center mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          AI-Powered Spot Detection
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          className="text-white/60 max-w-lg mx-auto"
        >
          Our computer vision system analyzes camera feeds in real-time to
          detect parking occupancy.
        </motion.p>
      </div>

      {/* Camera view container */}
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/50 backdrop-blur-sm"
        >
          {/* Camera header bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono text-white/70">LIVE</span>
              </div>
              <span className="text-xs font-mono text-white/50">
                {cameraLabel}
              </span>
            </div>
            <div className="flex items-center gap-1 text-green-400 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              DETECTING
            </div>
          </div>

          {/* Video feed area */}
          <div className="relative aspect-video bg-zinc-950">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Loading state */}
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/40 text-sm font-mono">
                  Loading feed...
                </div>
              </div>
            )}

            {/* Overlay vignette — keeps the cinematic camera feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Stats bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-t border-white/10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-white/70">
                  Available:{" "}
                  <span className="text-green-400 font-bold">
                    {availableCount}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-xs font-mono text-white/70">
                  Occupied:{" "}
                  <span className="text-red-400 font-bold">
                    {occupiedCount}
                  </span>
                </span>
              </div>
            </div>
            <div className="text-xs font-mono text-white/50">
              Real-time feed
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
