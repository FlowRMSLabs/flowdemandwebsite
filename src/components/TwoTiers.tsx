"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function TwoTiers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="get-started" className="py-24 bg-background grid-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Sparkles size={14} />
            Two Ways to Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Use the platform, or let us run the transformation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start building AI-powered campaigns on your own, or bring our team
            in to transform how your entire marketing operation works — and
            launch your first coordinated campaign across your rep network.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tier 1: Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                  The Platform
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  FlowDemand AI
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  AI campaign infrastructure you can use right now
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The full coordinated marketing platform.{" "}
                <strong className="text-foreground">Generate campaigns with AI in minutes</strong> —
                emails, social posts, sell sheets, video scripts — then{" "}
                <strong className="text-foreground">push them to your entire rep network</strong> with
                everything pre-built and ready to execute. Track every step from
                send to revenue.
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {[
                  "AI campaign builder — generate complete campaigns in minutes, not weeks",
                  "One-click distribution to your entire rep network",
                  "Pre-built email templates, sell sheets, social content, and collateral",
                  "Commission spiffs and promotional pricing visible to every rep",
                  "Full-funnel attribution: campaign → email → quote → order → revenue",
                  "Co-op marketing asset library with fund tracking",
                  "LinkedIn campaign coordination across your sales team",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#campaign"
                className="group flex items-center justify-center gap-2 w-full rounded-xl border-2 border-secondary bg-secondary/5 px-6 py-3.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                Start Building Campaigns
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          {/* Tier 2: Full Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative rounded-2xl border-2 border-primary bg-white overflow-hidden shadow-lg flex flex-col"
          >
            {/* Recommended badge */}
            <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-2.5 text-xs font-bold tracking-widest uppercase">
              Recommended for Your First Campaign
            </div>

            <div className="p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  The Full Engagement
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  AI Marketing Transformation
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We train your team, build your infrastructure, and launch your first campaign
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                A{" "}
                <strong className="text-foreground">complete AI transformation for your marketing team</strong>.
                We come in, teach your team how to use AI to produce campaigns{" "}
                <strong className="text-foreground">10x faster</strong>, build out the Flow infrastructure,
                and{" "}
                <strong className="text-foreground">
                  launch a live coordinated campaign across your entire rep network
                </strong>{" "}
                — with real results you can measure from send to revenue.
              </p>

              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="font-semibold text-foreground">
                    Everything in the platform, plus:
                  </span>
                </div>
                {[
                  "Process audit — we map your current marketing workflow and find where value is lost",
                  "AI enablement training — your team learns to create campaigns, content, and collateral in hours",
                  "Full content creation — emails, sell sheets, social, video, and training materials built for you",
                  "FlowConnect setup — rep network mapped, products loaded, territories assigned",
                  "Live campaign launch across your rep network with real-time execution monitoring",
                  "Full attribution report — campaign to revenue, broken down by rep and territory",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* What you walk away with */}
              <div className="rounded-xl bg-primary/5 border border-primary/10 p-5 mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  What your team walks away with
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "AI-powered marketing process that's 10x faster",
                    "Your team trained to use AI for every campaign going forward",
                    "A live campaign with real results across your network",
                    "The infrastructure to keep doing it at scale",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#demo"
                className="group flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
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
      </div>
    </section>
  );
}
