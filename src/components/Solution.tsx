"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Audit & Strategy",
    duration: "Week 1–2",
    color: "from-primary to-primary/80",
    tagline: "We find where your campaigns break down",
    description:
      "We map your entire marketing-to-rep pipeline. Where content gets stuck. Where reps disengage. Where revenue goes untracked. You get a clear strategy for exactly what to build and who to target.",
  },
  {
    number: "02",
    title: "AI Enablement",
    duration: "Week 2–4",
    color: "from-accent to-accent/80",
    tagline: "Your team starts producing at 10x speed",
    description:
      "We train your marketing team on AI-powered workflows. Email campaigns, sell sheets, social content, video, training materials — produced in hours instead of weeks. Your team walks away knowing how to do this for every campaign going forward.",
  },
  {
    number: "03",
    title: "Infrastructure + Launch",
    duration: "Week 2–6",
    color: "from-secondary to-secondary/80",
    tagline: "A live campaign hits your entire rep network",
    description:
      "We build the coordinated campaign in Flow — products, pricing, email templates, collateral, spiff details — and push it to every rep. They get everything pre-built. You see every send, open, click, quote, and order in real time.",
  },
];

const outcomes = [
  { metric: "10x", label: "Faster content production" },
  { metric: "200+", label: "Reps activated simultaneously" },
  { metric: "6", label: "Channels coordinated at once" },
  { metric: "100%", label: "Revenue attribution visibility" },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="engagement" className="py-24 bg-background grid-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Rocket size={14} />
            The Full Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            6 weeks. Total AI transformation.{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Live campaign across your network.
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your team goes from weeks-long content cycles to{" "}
            <strong className="text-foreground">producing campaigns in hours</strong>.
            Every asset hits{" "}
            <strong className="text-foreground">every rep, across every channel</strong>,
            with full tracking from send to revenue.
          </p>
        </motion.div>

        {/* Outcome metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
        >
          {outcomes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="rounded-xl border border-border bg-white p-5 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {item.metric}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Phase cards — compact */}
        <div className="max-w-4xl mx-auto space-y-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Phase indicator */}
                <div
                  className={`flex items-center justify-center gap-3 sm:gap-0 sm:flex-col px-6 py-4 sm:px-8 sm:py-6 bg-gradient-to-b ${phase.color} text-white sm:min-w-[100px]`}
                >
                  <span className="text-2xl sm:text-3xl font-bold opacity-80">
                    {phase.number}
                  </span>
                  <span className="text-xs font-medium opacity-70">
                    {phase.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 px-6 py-5 sm:px-8">
                  <h3 className="text-lg font-bold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-0.5">
                    {phase.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Force multiplier CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary p-8 sm:p-10 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              The force multiplier
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Your team produces content at AI speed. Every campaign deploys
              across email, social, LinkedIn, events, mailers, and ads —
              simultaneously. Every rep in your network gets it pre-built and
              ready to execute. You see every result.
            </p>
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-all"
            >
              Schedule Your Transformation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
