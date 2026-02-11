"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Get Started", href: "#get-started" },
    { label: "Platform", href: "#platform" },
    { label: "Results", href: "#results" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/img/flow-circle.png" alt="Flow" className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">
              Flow<span className="text-primary">Demand</span>
              <span className="text-[10px] font-semibold text-primary/60 ml-0.5 align-super">AI</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#campaign"
              className="rounded-lg px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
            >
              Run a Campaign
            </a>
            <a
              href="#demo"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors shadow-sm"
            >
              Get a Demo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <a
                  href="#campaign"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-center text-primary border border-primary/20 hover:bg-primary/5"
                >
                  Run a Campaign
                </a>
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-center text-white hover:bg-primary/90"
                >
                  Get a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
