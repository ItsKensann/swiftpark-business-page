const footerLinks = [
  { label: "Drivers", href: "#driver" },
  { label: "AI", href: "#ai" },
  { label: "Operators", href: "#dashboard" },
  { label: "Book Demo", href: "#book" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/icon.svg" alt="SwiftPark" className="h-9 w-9" />
          <div>
            <span className="text-base font-black">SwiftPark</span>
            <span className="block text-sm text-slate-400">
              Stress less. Park better.
            </span>
          </div>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-slate-400">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-slate-500">Copyright 2026 SwiftPark</div>
      </div>
    </footer>
  );
}
