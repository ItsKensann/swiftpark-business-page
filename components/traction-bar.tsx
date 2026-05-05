import { MapPin, Zap, Users } from "lucide-react"

const stats = [
  {
    icon: Users,
    text: "Built for operators managing 50–500 spots",
  },
  {
    icon: MapPin,
    text: "Piloting in Portland, OR",
  },
  {
    icon: Zap,
    text: "Early access open",
  },
]

export function TractionBar() {
  return (
    <section className="py-10 px-6 bg-white border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 flex-wrap">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{stat.text}</span>
                {i < stats.length - 1 && (
                  <span className="hidden sm:block text-border ml-10">·</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
