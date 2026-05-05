"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPOTS = [
  { id: "L1", x: 60, y: 110, available: false },
  { id: "L2", x: 60, y: 150, available: false },
  { id: "L3", x: 60, y: 190, available: false },
  { id: "L4", x: 60, y: 230, available: true },
  { id: "L5", x: 60, y: 270, available: false },
  { id: "R1", x: 270, y: 110, available: false },
  { id: "R2", x: 270, y: 150, available: true },
  { id: "R3", x: 270, y: 190, available: false },
  { id: "R4", x: 270, y: 230, available: false },
  { id: "R5", x: 270, y: 270, available: false },
];

const TARGET_SPOT = SPOTS[3];

const CAR_PATH = [
  { x: 175, y: 370 },
  { x: 175, y: 260 },
  { x: 175, y: 230 },
  { x: 110, y: 230 },
  { x: 88, y: 230 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getCarPositionOnPath(progress: number) {
  const segments = CAR_PATH.length - 1;
  const scaledT = progress * segments;
  const seg = Math.min(Math.floor(scaledT), segments - 1);
  const t = scaledT - seg;
  return {
    x: lerp(CAR_PATH[seg].x, CAR_PATH[seg + 1].x, t),
    y: lerp(CAR_PATH[seg].y, CAR_PATH[seg + 1].y, t),
  };
}

function getCarRotation(progress: number) {
  if (progress < 0.55) return -90;
  if (progress < 0.75) return -180;
  return -180;
}

export function ParkingRouteAnimation() {
  const [progress, setProgress] = useState(0);
  const [parked, setParked] = useState(false);
  const [restarting, setRestarting] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const DURATION = 3200;

  const startAnimation = () => {
    setParked(false);
    setProgress(0);
    startTimeRef.current = null;

    const animate = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / DURATION, 1);
      setProgress(t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setParked(true);
        setTimeout(() => {
          setRestarting(true);
          setTimeout(() => {
            setRestarting(false);
            startAnimation();
          }, 400);
        }, 2200);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAnimation();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carPos = getCarPositionOnPath(progress);
  const carRotation = getCarRotation(progress);

  // Hide car when parked OR restarting — prevents overlap with checkmark
  const showCar = !parked && !restarting;

  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <div className="rounded-2xl border border-border bg-white shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 relative">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            </div>
            <span className="text-xs font-semibold text-foreground">
              SwiftPark Navigation
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Pioneer Garage · Floor 2
          </span>
        </div>

        <div className="bg-[#f0f2f5] p-2">
          <svg
            viewBox="0 0 350 390"
            className="w-full max-w-sm mx-auto"
            style={{ display: "block" }}
          >
            <rect
              x="110"
              y="90"
              width="130"
              height="300"
              rx="2"
              fill="#cbd5e1"
            />

            {[105, 140, 175, 210, 245, 280, 315, 350].map((y, i) => (
              <rect
                key={i}
                x="173"
                y={y}
                width="4"
                height="16"
                rx="1"
                fill="white"
                opacity="0.7"
              />
            ))}

            <rect x="20" y="90" width="90" height="300" rx="4" fill="#e2e8f0" />
            <rect
              x="240"
              y="90"
              width="90"
              height="300"
              rx="4"
              fill="#e2e8f0"
            />

            <rect
              x="155"
              y="370"
              width="40"
              height="14"
              rx="2"
              fill="#94a3b8"
            />
            <text
              x="175"
              y="380"
              textAnchor="middle"
              fontSize="8"
              fill="white"
              fontWeight="bold"
            >
              ENTER
            </text>

            {SPOTS.map((spot) => {
              const isTarget = spot.id === TARGET_SPOT.id;
              const spotW = 36;
              const spotH = 30;
              const sx = spot.x - spotW / 2;
              const sy = spot.y - spotH / 2;

              return (
                <g key={spot.id}>
                  <rect
                    x={sx}
                    y={sy}
                    width={spotW}
                    height={spotH}
                    rx="3"
                    fill={spot.available ? "#dcfce7" : "#fee2e2"}
                    stroke={spot.available ? "#22c55e" : "#f87171"}
                    strokeWidth="1.5"
                  />
                  {!spot.available && (
                    <rect
                      x={sx + 5}
                      y={sy + 6}
                      width={spotW - 10}
                      height={spotH - 12}
                      rx="2"
                      fill="#f87171"
                      opacity="0.6"
                    />
                  )}
                  {spot.available && !isTarget && (
                    <text
                      x={spot.x}
                      y={spot.y + 4}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#16a34a"
                      fontWeight="bold"
                    >
                      P
                    </text>
                  )}
                </g>
              );
            })}

            {/* Pulsing destination pin — hidden once parked */}
            <AnimatePresence>
              {!parked && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  style={{
                    originX: TARGET_SPOT.x,
                    originY: TARGET_SPOT.y - 20,
                  }}
                >
                  <motion.circle
                    cx={TARGET_SPOT.x}
                    cy={TARGET_SPOT.y - 4}
                    r="18"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    animate={{ r: [14, 22], opacity: [0.6, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <circle
                    cx={TARGET_SPOT.x}
                    cy={TARGET_SPOT.y - 4}
                    r="10"
                    fill="#2563eb"
                  />
                  <text
                    x={TARGET_SPOT.x}
                    y={TARGET_SPOT.y}
                    textAnchor="middle"
                    fontSize="9"
                    fill="white"
                    fontWeight="bold"
                  >
                    P
                  </text>
                  <polygon
                    points={`${TARGET_SPOT.x - 4},${TARGET_SPOT.y + 6} ${TARGET_SPOT.x + 4},${TARGET_SPOT.y + 6} ${TARGET_SPOT.x},${TARGET_SPOT.y + 14}`}
                    fill="#2563eb"
                  />
                </motion.g>
              )}
            </AnimatePresence>

            {/* Route path dots */}
            {progress > 0 && progress < 1 && (
              <g opacity="0.4">
                {CAR_PATH.slice(0, -1).map((pt, i) => {
                  const next = CAR_PATH[i + 1];
                  const segProgress = Math.max(
                    0,
                    Math.min(1, progress * (CAR_PATH.length - 1) - i),
                  );
                  if (segProgress <= 0) return null;
                  return (
                    <line
                      key={i}
                      x1={pt.x}
                      y1={pt.y}
                      x2={lerp(pt.x, next.x, segProgress)}
                      y2={lerp(pt.y, next.y, segProgress)}
                      stroke="#2563eb"
                      strokeWidth="2"
                      strokeDasharray="5 4"
                    />
                  );
                })}
              </g>
            )}

            {/* Car — single transform on the group, no per-child transforms */}
            <AnimatePresence>
              {showCar && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transform={`translate(${carPos.x}, ${carPos.y}) rotate(${carRotation + 90})`}
                >
                  {/* Car body — centered on origin */}
                  <rect
                    x="-10"
                    y="-14"
                    width="20"
                    height="28"
                    rx="4"
                    fill="#1e40af"
                  />
                  {/* Windshield */}
                  <rect
                    x="-7"
                    y="-10"
                    width="14"
                    height="8"
                    rx="2"
                    fill="#93c5fd"
                    opacity="0.8"
                  />
                  {/* Headlights */}
                  <circle cx="-7" cy="-12" r="2" fill="#fef08a" />
                  <circle cx="7" cy="-12" r="2" fill="#fef08a" />
                </motion.g>
              )}
            </AnimatePresence>

            {/* Parked confirmation checkmark */}
            <AnimatePresence>
              {parked && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ originX: TARGET_SPOT.x, originY: TARGET_SPOT.y }}
                >
                  <circle
                    cx={TARGET_SPOT.x}
                    cy={TARGET_SPOT.y - 30}
                    r="13"
                    fill="#16a34a"
                  />
                  <text
                    x={TARGET_SPOT.x}
                    y={TARGET_SPOT.y - 25}
                    textAnchor="middle"
                    fontSize="13"
                    fill="white"
                  >
                    ✓
                  </text>
                </motion.g>
              )}
            </AnimatePresence>
          </svg>
        </div>

        <div className="px-4 py-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">
              {parked
                ? "Spot L4 secured"
                : "Routing to nearest available spot..."}
            </span>
          </div>
          <span className="text-xs font-semibold text-primary">
            {SPOTS.filter((s) => s.available).length} open
          </span>
        </div>
      </div>
    </div>
  );
}
