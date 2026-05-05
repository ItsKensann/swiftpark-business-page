import { Eye, Car, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "No visibility",
    description:
      "Operators don't know how full their lot is without physically walking it. Manual counts are slow, inaccurate, and costly.",
  },
  {
    icon: Car,
    title: "Drivers give up",
    description:
      "Urban traffic are drivers circling looking for parking. Without real-time data, drivers avoid your lot entirely.",
  },
  {
    icon: TrendingDown,
    title: "Revenue left behind",
    description:
      "Underutilized lots lose revenue because drivers assume they're full. Perception is the problem, data is the solution.",
  },
];

export function ProblemSection() {
  return (
    <section id="product" className="py-20 md:py-28 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            Parking operators are flying blind
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            The industry runs on guesswork. SwiftPark changes that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
