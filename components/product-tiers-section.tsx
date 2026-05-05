import { Check, ArrowRight } from "lucide-react"

const tiers = [
  {
    name: "Lite",
    badge: "Easy install",
    badgeColor: "bg-accent text-primary border border-primary/20",
    description: "Quick visibility for operators who want occupancy data with zero setup complexity.",
    features: [
      "Total occupancy percentage",
      "Available spot count",
      "Busy times chart",
      "Email alerts",
      "Works with existing cameras",
    ],
    cta: "Learn more",
    highlight: false,
  },
  {
    name: "Pro",
    badge: "Most popular",
    badgeColor: "bg-primary text-primary-foreground",
    description: "Full spot-level intelligence for operators who want a complete picture of their garage.",
    features: [
      "Everything in Lite",
      "Live spot-level floor plan map",
      "Per-spot green/red status",
      "Real-time WebSocket updates",
      "Multi-floor support",
    ],
    cta: "Learn more",
    highlight: true,
  },
]

export function ProductTiersSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            Two tiers, one platform
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            Start simple, scale to full visibility. Both tiers use your existing infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col border transition-all duration-200 ${
                tier.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
                  : "bg-white border-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className={`text-2xl font-bold ${tier.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tier.badgeColor}`}>
                  {tier.badge}
                </span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {tier.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      tier.highlight ? "bg-primary-foreground/20" : "bg-accent"
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${tier.highlight ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${tier.highlight ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  tier.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-accent text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
