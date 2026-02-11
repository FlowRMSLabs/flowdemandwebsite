"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo and description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/img/flow-circle.png" alt="Flow" className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight">
                Flow<span className="text-primary">Demand</span>
                <span className="text-[10px] font-semibold text-primary/60 ml-0.5 align-super">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI marketing infrastructure for reps and manufacturers. Part of
              the Flow ecosystem.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Product
              </h4>
              <div className="space-y-2">
                {[
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Get Started", href: "#get-started" },
                  { label: "Platform", href: "#platform" },
                  { label: "Results", href: "#results" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Flow Ecosystem
              </h4>
              <div className="space-y-2">
                {[
                  {
                    label: "Flow RMS",
                    href: "https://flowrms.com",
                    external: true,
                  },
                  {
                    label: "FlowConnect",
                    href: "https://flowconnect.network",
                    external: true,
                  },
                  {
                    label: "Flow Dispatch",
                    href: "https://theflowdispatch.com",
                    external: true,
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight size={12} />}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Get Started
              </h4>
              <div className="space-y-2">
                {[
                  { label: "Run a Campaign", href: "#campaign" },
                  { label: "Schedule a Demo", href: "#demo" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Flow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
