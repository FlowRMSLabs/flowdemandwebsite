"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Layout,
  Mail,
  BarChart3,
  Megaphone,
  Linkedin,
  FileText,
  Check,
} from "lucide-react";

const features = [
  {
    id: "campaigns",
    icon: Megaphone,
    label: "Coordinated Campaigns",
    title: "Campaigns arrive ready to execute",
    description:
      "Reps receive campaigns with everything pre-built — email templates, product details, promotional pricing, collateral, and commission spiff details. No more ZIP files and PDFs. Just hit Preview & Send.",
    bullets: [
      "Filter by manufacturer — Acuity, Signify, Hubbell, and more",
      "Campaign types: Product Launch, Clearance, Events, Promotions",
      "Commission spiff visibility: see exactly what you'll earn",
      "Social posts, LinkedIn ads, handwritten mailers — all included",
    ],
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Preview & Send",
    description:
      "Professional email campaigns with subject lines, rich HTML previews, and audience targeting. Reps review and send — no design work required.",
    title: "Send polished campaigns in one click",
    bullets: [
      "Pre-built HTML email templates branded to the manufacturer",
      "Subject lines and messaging crafted for each audience segment",
      "Preview exactly what your contacts will see",
      "Track opens, clicks, and conversions at the rep level",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Full-Funnel Analytics",
    title: "Campaign to revenue, fully attributed",
    description:
      "For the first time, see the full path from campaign send to revenue. Track every step: emails sent, opens, clicks, quotes generated, orders placed, revenue attributed.",
    bullets: [
      "Attribution funnel: Campaign → Email → Open → Click → Quote → Order → Revenue",
      "Revenue by manufacturer breakdown",
      "Rep performance analysis by territory",
      "Real-time campaign execution monitoring",
    ],
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn Campaigns",
    title: "Coordinated LinkedIn across your sales team",
    description:
      "Create and manage LinkedIn post campaigns for your entire sales team. Assign posts to reps, review content, track impressions and engagement — all from one dashboard.",
    bullets: [
      "Multiple campaign tones: Professional, Conversational, Educational",
      "Approval queue with edit, approve, or revision workflows",
      "Track impressions, engagement, and published status per rep",
      "AI-generated post variations for different angles and audiences",
    ],
  },
  {
    id: "assets",
    icon: FileText,
    label: "Marketing Assets",
    title: "All your co-op assets in one place",
    description:
      "Downloadable marketing materials from every manufacturer — social graphics, brochures, videos, email templates, presentations, and product photos. Plus co-op fund balance tracking.",
    bullets: [
      "Filter by type: Social, Brochure, Video, Email, Presentation, Photo",
      "Co-op fund balances by manufacturer with spend tracking",
      "Download counts and engagement metrics per asset",
      "Search across all manufacturers instantly",
    ],
  },
  {
    id: "spiffs",
    icon: Layout,
    label: "Promotions & Spiffs",
    title: "Earn more with promotional commission rates",
    description:
      "See all active promotions and commission spiffs in one view. Standard vs. promotional rates with estimated additional earnings, so reps know exactly what's worth their time.",
    bullets: [
      "Standard → Promotional commission rate comparison (e.g., 8% → 12%)",
      "Estimated additional earnings calculated per promotion",
      "Qualifying products listed with images",
      "Direct Create Quote action from any promotion",
    ],
  },
];

export default function Platform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState("campaigns");

  const active = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section id="platform" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/5 border border-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-6">
            <Layout size={14} />
            The Platform
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything your reps need to execute — in one place
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built into FlowConnect and Flow RMS, the coordinated marketing hub
            gives reps campaign-ready assets, one-click execution, and
            full-funnel tracking.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Feature tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  activeFeature === feature.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <feature.icon size={16} />
                <span className="hidden sm:inline">{feature.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Feature detail */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-white overflow-hidden shadow-lg"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: Description */}
              <div className="flex-1 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <active.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{active.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {active.description}
                </p>
                <div className="space-y-3">
                  {active.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={16}
                        className="text-green-500 mt-0.5 shrink-0"
                      />
                      <span className="text-muted-foreground">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Visual mockup */}
              <div className="flex-1 bg-gradient-to-br from-muted/30 to-muted p-8 lg:p-10 flex items-center justify-center min-h-[300px]">
                <div className="w-full max-w-md">
                  {activeFeature === "campaigns" && <CampaignMockup />}
                  {activeFeature === "email" && <EmailMockup />}
                  {activeFeature === "analytics" && <AnalyticsMockup />}
                  {activeFeature === "linkedin" && <LinkedInMockup />}
                  {activeFeature === "assets" && <AssetsMockup />}
                  {activeFeature === "spiffs" && <SpiffsMockup />}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CampaignMockup() {
  return (
    <div className="space-y-3">
      {[
        {
          brand: "Signify (Philips)",
          name: "Warehouse Clearance Event",
          tag: "Clearance",
          tagColor: "bg-red-100 text-red-600",
          status: "New",
        },
        {
          brand: "Acuity Brands",
          name: "Spring 2026 LED Troffer Launch",
          tag: "Product Launch",
          tagColor: "bg-blue-100 text-blue-600",
          status: "Accepted",
        },
        {
          brand: "Arlington Industries",
          name: "Contractor Lunch & Learn Series",
          tag: "Event",
          tagColor: "bg-purple-100 text-purple-600",
          status: "New",
        },
      ].map((campaign) => (
        <div
          key={campaign.name}
          className="rounded-lg bg-white p-4 border border-border shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">
              {campaign.brand}
            </span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${campaign.tagColor}`}
            >
              {campaign.tag}
            </span>
          </div>
          <p className="text-sm font-semibold text-foreground">
            {campaign.name}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-green-600 font-medium">
              {campaign.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmailMockup() {
  return (
    <div className="rounded-lg bg-white border border-border shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 text-center">
        <p className="text-white font-medium text-sm">Acuity Brands</p>
        <p className="text-white/70 text-xs mt-1">
          Spring 2026 Product Launch
        </p>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm font-medium text-primary">
          Introducing the ALC Series LED Troffers
        </p>
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <p>
            <strong className="text-foreground">30% more efficient</strong> than
            previous generation
          </p>
          <p>
            <strong className="text-foreground">
              Integrated wireless controls
            </strong>{" "}
            — no additional hardware
          </p>
          <p>
            <strong className="text-foreground">DLC Premium listed</strong> —
            qualifies for utility rebates
          </p>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const funnel = [
    { label: "Emails Sent", value: "1,567", width: "100%" },
    { label: "Opens", value: "629", width: "40%" },
    { label: "Clicks", value: "262", width: "17%" },
    { label: "Quotes", value: "93", width: "6%" },
    { label: "Revenue", value: "$212K", width: "100%" },
  ];

  return (
    <div className="rounded-lg bg-white p-5 border border-border shadow-sm">
      <p className="text-sm font-semibold mb-4">Attribution Funnel</p>
      <div className="space-y-3">
        {funnel.map((step) => (
          <div key={step.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">{step.label}</span>
              <span className="font-medium">{step.value}</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full funnel-bar"
                style={{ width: step.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LinkedInMockup() {
  return (
    <div className="space-y-3">
      {[
        {
          name: "Brian Kessler",
          role: "Senior Sales Rep",
          status: "Published",
          statusColor: "text-green-600",
          impressions: "2,340",
        },
        {
          name: "Sarah Chen",
          role: "Account Executive",
          status: "Approved",
          statusColor: "text-blue-600",
          impressions: "—",
        },
        {
          name: "Mike Torres",
          role: "Territory Manager",
          status: "Pending",
          statusColor: "text-amber-600",
          impressions: "—",
        },
      ].map((rep) => (
        <div
          key={rep.name}
          className="rounded-lg bg-white p-4 border border-border shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{rep.name}</p>
              <p className="text-xs text-muted-foreground">{rep.role}</p>
            </div>
            <div className="text-right">
              <p className={`text-xs font-medium ${rep.statusColor}`}>
                {rep.status}
              </p>
              {rep.impressions !== "—" && (
                <p className="text-xs text-muted-foreground">
                  {rep.impressions} impressions
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AssetsMockup() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { type: "Social", color: "bg-blue-100 text-blue-600", name: "Wire Connector Post" },
        { type: "Brochure", color: "bg-green-100 text-green-600", name: "Product Brochure" },
        { type: "Video", color: "bg-red-100 text-red-600", name: "T&B Overview" },
        { type: "Email", color: "bg-purple-100 text-purple-600", name: "Launch Template" },
      ].map((asset) => (
        <div
          key={asset.name}
          className="rounded-lg bg-white p-3 border border-border shadow-sm"
        >
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${asset.color}`}
          >
            {asset.type}
          </span>
          <p className="text-xs font-medium mt-2">{asset.name}</p>
        </div>
      ))}
    </div>
  );
}

function SpiffsMockup() {
  return (
    <div className="space-y-3">
      {[
        {
          brand: "Acuity Brands",
          name: "Spring Launch Spiff",
          standard: "8%",
          promo: "12%",
          extra: "+$4,200",
        },
        {
          brand: "Hubbell Lighting",
          name: "Q1 Outdoor LED Spiff",
          standard: "10%",
          promo: "15%",
          extra: "+$6,800",
        },
      ].map((spiff) => (
        <div
          key={spiff.name}
          className="rounded-lg bg-white p-4 border border-border shadow-sm"
        >
          <p className="text-xs text-muted-foreground">{spiff.brand}</p>
          <p className="text-sm font-semibold mt-1">{spiff.name}</p>
          <div className="flex items-center gap-3 mt-3">
            <div className="text-center">
              <p className="text-lg font-bold text-muted-foreground">
                {spiff.standard}
              </p>
              <p className="text-xs text-muted-foreground">Standard</p>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="text-center">
              <p className="text-lg font-bold text-green-600">{spiff.promo}</p>
              <p className="text-xs text-green-600 font-medium">Promotional</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm font-bold text-green-600">{spiff.extra}</p>
              <p className="text-xs text-muted-foreground">Est. Additional</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
