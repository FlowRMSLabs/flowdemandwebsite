"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, BarChart3, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-gradient" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-gradient" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase mb-8"
          >
            <Cpu size={14} />
            AI MARKETING INFRASTRUCTURE FOR <span className="font-bold">REPS</span> & <span className="font-bold">MANUFACTURERS</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Cooperative Marketing Campaigns{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Done in Minutes
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Flow Demand AI gives <strong className="text-foreground">manufacturers and reps</strong> the
            infrastructure to <strong className="text-foreground">build, distribute, and track</strong> coordinated
            marketing campaigns across their entire network — <strong className="text-foreground">powered by AI</strong>,
            with <strong className="text-foreground">full-funnel visibility</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#campaign"
              className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all"
            >
              Run Your First Campaign
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#get-started"
              className="flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5">
                <Sparkles size={16} className="text-primary" />
              </div>
              <span>AI-generated campaigns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5">
                <Zap size={16} className="text-primary" />
              </div>
              <span>Minutes, not months</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5">
                <BarChart3 size={16} className="text-primary" />
              </div>
              <span>Campaign to revenue tracking</span>
            </div>
          </motion.div>
        </div>

        {/* Siemens case study callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-lg glow">
            <div className="px-6 py-3 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
              <p className="text-xs font-semibold tracking-widest uppercase text-center text-muted-foreground">
                Siemens Pilot Campaign Results
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Meetings Sourced", value: "10", sub: "Net new renewables" },
                  { label: "Organic Connections", value: "1,833", sub: "Net new prospects" },
                  { label: "Channels Deployed", value: "6", sub: "LinkedIn, email, phone, mail, ads, podcast" },
                  { label: "Top Lead Channel", value: "40%", sub: "Organic LinkedIn" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {stat.sub}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
