"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Eye, EyeOff, Users, TrendingDown } from "lucide-react";

const breakpoints = [
  {
    icon: AlertTriangle,
    title: "Campaigns Die in Transit",
    description:
      "Manufacturer sends a campaign kit to 200+ reps. Most never open it. The ones who do can't figure out how to execute it for their territory.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Users,
    title: "Reps Are Overwhelmed",
    description:
      "Rep firms receive dozens of campaign kits per quarter from different manufacturers. They cherry-pick which to run based on gut feel, not data.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: EyeOff,
    title: "Zero Visibility",
    description:
      "Manufacturers have no idea which reps ran the campaign, what was sent, or whether it produced a single quote. It's marketing into a black hole.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: TrendingDown,
    title: "No Attribution",
    description:
      "Nobody can connect campaign spend to revenue. The distributor doesn't know a campaign is running. The rep can't track results. Revenue goes unattributed.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5 text-sm font-medium text-red-600 mb-6">
            <Eye size={14} />
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Most manufacturer campaigns never reach the customer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The gap between a manufacturer&apos;s marketing team and actual
            revenue is massive. Here&apos;s where campaigns break down.
          </p>
        </motion.div>

        {/* Visual flow diagram */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {["Manufacturer Creates Campaign", "Sends to Rep Network", "Reps Supposed to Execute", "Revenue... Maybe?"].map(
              (step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="flex items-center gap-2 md:gap-0"
                >
                  <div
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                      i < 3 ? "bg-muted" : "bg-red-50 border border-red-100"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                        i < 3
                          ? "bg-muted-foreground/10 text-muted-foreground"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        i < 3 ? "text-muted-foreground" : "text-red-600"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-border to-red-200" />
                  )}
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Breakpoint cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {breakpoints.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.bg}`}
                >
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
