"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function Demo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <div className="flex flex-col lg:flex-row">
              {/* Left: CTA */}
              <div className="lg:w-[360px] shrink-0 bg-gradient-to-br from-primary via-accent to-secondary p-10 lg:p-12 text-white">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm mb-6">
                    <Calendar size={24} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    See Flow Demand in action
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-8">
                    Get a personalized walkthrough of the coordinated marketing
                    platform. See how campaigns go from creation to execution
                    across your rep network, with full attribution tracking.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Live demo of the coordinated marketing hub",
                      "See AI content generation in action",
                      "Full-funnel attribution walkthrough",
                      "Custom strategy session for your network",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                          <CheckCircle2 size={12} />
                        </div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: TidyCal embed */}
              <div className="flex-1 bg-white">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-full"
                >
                  <iframe
                    src="https://tidycal.com/flow/flow-rms-demo-1k82nod-1jy52r8"
                    className="w-full h-full min-h-[750px] border-0"
                    title="Schedule a demo"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
