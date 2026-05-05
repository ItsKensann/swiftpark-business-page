"use client"

import { useEffect, useState } from "react"

const SPOTS = [
  // Row A - 6 spots
  { id: "A1", occupied: true }, { id: "A2", occupied: true }, { id: "A3", occupied: false },
  { id: "A4", occupied: true }, { id: "A5", occupied: true }, { id: "A6", occupied: false },
  // Row B - 6 spots
  { id: "B1", occupied: true }, { id: "B2", occupied: false }, { id: "B3", occupied: true },
  { id: "B4", occupied: true }, { id: "B5", occupied: false }, { id: "B6", occupied: true },
  // Row C - 6 spots
  { id: "C1", occupied: false }, { id: "C2", occupied: true }, { id: "C3", occupied: true },
  { id: "C4", occupied: true }, { id: "C5", occupied: true }, { id: "C6", occupied: false },
  // Row D - 6 spots
  { id: "D1", occupied: true }, { id: "D2", occupied: true }, { id: "D3", occupied: false },
  { id: "D4", occupied: true }, { id: "D5", occupied: true }, { id: "D6", occupied: true },
]

export function ParkingMapMockup() {
  const [spots, setSpots] = useState(SPOTS)
  const [pulse, setPulse] = useState(true)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => {
        const copy = [...prev]
        const idx = Math.floor(Math.random() * copy.length)
        copy[idx] = { ...copy[idx], occupied: !copy[idx].occupied }
        return copy
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const available = spots.filter((s) => !s.occupied).length
  const total = spots.length
  const pct = Math.round(((total - available) / total) * 100)

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl border border-border shadow-xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Pioneer Garage — Floor 2</p>
          <p className="text-sm font-semibold text-foreground mt-0.5">{pct}% full — {available} spots available</p>
        </div>
        {/* Live indicator */}
        <div className="flex items-center gap-1.5">
          <span className={`relative flex h-2.5 w-2.5`}>
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500`}></span>
          </span>
          <span className="text-xs font-medium text-green-600">Live</span>
        </div>
      </div>

      {/* Spot grid */}
      <div className="p-5">
        {/* Lane label */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Drive Lane</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-6 gap-2 mb-3">
          {spots.slice(0, 6).map((spot) => (
            <div
              key={spot.id}
              className={`rounded h-10 border-2 flex items-center justify-center transition-all duration-700 ${
                spot.occupied
                  ? "bg-red-50 border-red-300"
                  : "bg-green-50 border-green-400"
              }`}
            >
              <span className={`text-[9px] font-bold ${spot.occupied ? "text-red-400" : "text-green-600"}`}>
                {spot.id}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Drive Lane</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-6 gap-2 mb-3">
          {spots.slice(6, 12).map((spot) => (
            <div
              key={spot.id}
              className={`rounded h-10 border-2 flex items-center justify-center transition-all duration-700 ${
                spot.occupied
                  ? "bg-red-50 border-red-300"
                  : "bg-green-50 border-green-400"
              }`}
            >
              <span className={`text-[9px] font-bold ${spot.occupied ? "text-red-400" : "text-green-600"}`}>
                {spot.id}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Drive Lane</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-6 gap-2 mb-3">
          {spots.slice(12, 18).map((spot) => (
            <div
              key={spot.id}
              className={`rounded h-10 border-2 flex items-center justify-center transition-all duration-700 ${
                spot.occupied
                  ? "bg-red-50 border-red-300"
                  : "bg-green-50 border-green-400"
              }`}
            >
              <span className={`text-[9px] font-bold ${spot.occupied ? "text-red-400" : "text-green-600"}`}>
                {spot.id}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Drive Lane</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-6 gap-2">
          {spots.slice(18, 24).map((spot) => (
            <div
              key={spot.id}
              className={`rounded h-10 border-2 flex items-center justify-center transition-all duration-700 ${
                spot.occupied
                  ? "bg-red-50 border-red-300"
                  : "bg-green-50 border-green-400"
              }`}
            >
              <span className={`text-[9px] font-bold ${spot.occupied ? "text-red-400" : "text-green-600"}`}>
                {spot.id}
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-green-400 border border-green-500" />
            <span className="text-xs text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-red-300 border border-red-400" />
            <span className="text-xs text-muted-foreground">Occupied</span>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">Updates in real time</div>
        </div>
      </div>
    </div>
  )
}
