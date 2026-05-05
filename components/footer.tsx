import { ParkingSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/icon.svg" alt="SwiftPark" className="w-8 h-8" />
          <div>
            <span className="text-sm font-semibold text-foreground">
              SwiftPark
            </span>
            <span className="block text-xs text-muted-foreground leading-none mt-0.5">
              Stress less. Park better.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs text-muted-foreground">
            © 2026 SwiftPark
          </span>
        </div>
      </div>
    </footer>
  );
}
