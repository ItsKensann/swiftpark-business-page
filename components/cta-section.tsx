"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="demo" className="py-20 md:py-28 px-6 bg-foreground">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-balance mb-4">
          Be the first in your city.
        </h2>
        <p className="text-lg text-white/70 mb-10 text-balance">
          Join operators getting early access to SwiftPark.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-6 text-white">
            <div className="text-2xl mb-2">🎉</div>
            <p className="font-semibold text-lg">You&apos;re on the list!</p>
            <p className="text-white/70 text-sm mt-1">We&apos;ll be in touch soon with early access details.</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourcompany.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p id="contact" className="text-xs text-white/40 mt-4">
              No spam. No commitment. Just early access.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
