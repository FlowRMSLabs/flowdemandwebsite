"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Zap, Target, TrendingUp } from "lucide-react";

export default function Differentiator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            White-glove campaigns, powered by AI infrastructure
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build the strategy, create the content, and launch the campaign
            across your entire rep network — all done for you. You get AI-powered
            speed with hands-on service, full-funnel tracking, and revenue
            visibility across your entire distributed network.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Layers,
              title: "Content + Distribution",
              description:
                "Content without distribution is useless. Distribution without good content is wasted. We do both.",
            },
            {
              icon: Zap,
              title: "AI-Powered Speed",
              description:
                "What used to take your marketing team weeks — email copy, sell sheets, social posts, videos — now takes hours.",
            },
            {
              icon: Target,
              title: "Coordinated Execution",
              description:
                "Every rep gets the campaign with everything pre-built. Templates, products, pricing, collateral. Just activate.",
            },
            {
              icon: TrendingUp,
              title: "Full Attribution",
              description:
                "Track the entire funnel: campaign → email → open → click → quote → order → revenue. Finally, see what works.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Without Flow */}
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
              <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs">
                  ✕
                </span>
                Without Flow Demand
              </h4>
              <div className="space-y-3 text-base text-red-800/70">
                {[
                  "ZIP files and PDFs emailed to rep managers",
                  "Generic national content, not territory-specific",
                  "No idea which reps actually ran the campaign",
                  "Revenue goes unattributed — gut feel and quarterly reviews",
                  "Weeks to produce content, months to see (maybe) results",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* With Flow */}
            <div className="rounded-xl border border-green-100 bg-green-50/50 p-6">
              <h4 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">
                  ✓
                </span>
                With Flow Demand AI
              </h4>
              <div className="space-y-3 text-base text-green-800/70">
                {[
                  "Campaigns arrive pre-built in every rep's dashboard",
                  "AI-generated content tailored per audience segment",
                  "Real-time visibility: who engaged, who sent, who converted",
                  "Full attribution: campaign → email → quote → order → revenue",
                  "Content produced in hours, campaigns live in weeks",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
