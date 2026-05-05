"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParkingSquare, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Book a Demo", href: "#book" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      setActiveSection(href);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [],
  );

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/icon.svg" alt="SwiftPark" className="w-8 h-8" />
          <span className="text-lg font-semibold text-foreground tracking-tight">
            SwiftPark
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-3 right-3 h-px rounded-full bg-primary transition-all duration-300 ${
                  activeSection === link.href
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                } origin-left group-hover:opacity-60 group-hover:scale-x-100`}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#demo"
            onClick={(e) => scrollToSection(e, "#demo")}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request a Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white border-b border-border"
          >
            <div className="px-6 pb-4 flex flex-col gap-1 pt-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-muted-foreground hover:text-foreground py-2.5 border-b border-border/50 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#demo"
                onClick={(e) => scrollToSection(e, "#demo")}
                className="mt-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground text-center"
              >
                Request a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
