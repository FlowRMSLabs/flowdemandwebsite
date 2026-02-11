"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: BarChart3,
    value: "40.1%",
    label: "Average Open Rate",
    detail: "vs 15-25% industry average",
  },
  {
    icon: Users,
    value: "93",
    label: "Quotes Generated",
    detail: "from 16 coordinated campaigns",
  },
  {
    icon: TrendingUp,
    value: "49.5%",
    label: "Quote-to-Order Rate",
    detail: "nearly half of quotes convert",
  },
  {
    icon: DollarSign,
    value: "$212K",
    label: "Revenue Attributed",
    detail: "tracked from campaign to close",
  },
];

const revenueByMfg = [
  { name: "RAB Lighting", value: "$48,200", width: "100%" },
  { name: "Southwire", value: "$42,300", width: "88%" },
  { name: "Cree Lighting", value: "$38,500", width: "80%" },
  { name: "Hubbell Lighting", value: "$34,500", width: "72%" },
  { name: "Thomas & Betts", value: "$23,900", width: "50%" },
  { name: "Eaton Lighting", value: "$22,400", width: "46%" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-1.5 text-sm font-medium text-green-600 mb-6">
            <TrendingUp size={14} />
            Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            See the full picture, from campaign to revenue
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            For the first time, manufacturers get complete visibility into
            campaign performance across their entire rep network.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 text-center shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 mx-auto mb-3">
                <metric.icon size={20} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-foreground mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Revenue by Manufacturer</h3>
              <span className="text-sm text-muted-foreground">
                Total: $212,200
              </span>
            </div>
            <div className="space-y-4">
              {revenueByMfg.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="font-semibold text-foreground">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: item.width } : {}}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, hsl(${250 - i * 15}, 70%, 55%), hsl(${210 - i * 15}, 70%, 55%))`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
