"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const IMG = "/img/case-study";

type SectionItem = {
  title: string;
  text: string;
  images: string[];
};

const preparation: SectionItem[] = [
  {
    title: "Strategy, Value Proposition, and Competitive Analysis",
    text: "We work with you to develop a robust strategy, clearly define your value proposition, and craft compelling messaging. This ensures that your campaign communicates your unique benefits and resonates with your target audience.",
    images: [`${IMG}/strategy.png`],
  },
  {
    title: "Full video podcast branded to your company",
    text: "We produce a high-quality, full-length video podcast tailored to your brand, featuring engaging and relevant content. This serves as a powerful introduction to your expertise and industry presence, helping to establish authority and credibility with your target audience.",
    images: [],
  },
  {
    title: "Campaign Specific Demand Generation Website",
    text: "We create a dedicated, campaign-specific website to act as the central hub for all campaign activities. This site is designed to capture leads, provide valuable information, and drive engagement with your audience.",
    images: [`${IMG}/website.png`],
  },
  {
    title: "Campaign Specific High Value Asset",
    text: "We develop a high-value asset, based on your knowledge and value proposition. This asset is designed to educate your audience, provide actionable insights, and drive conversions.",
    images: [`${IMG}/asset.png`],
  },
  {
    title: "LinkedIn Profile Pages Optimization",
    text: "We optimize your LinkedIn profiles to align with the campaign messaging and branding. This ensures that your online presence is professional, consistent, and designed to attract and engage your target audience.",
    images: [`${IMG}/linkedin-profile.png`],
  },
  {
    title: "Data sourcing, enrichment, segmentation",
    text: "We gather and enrich data from dozens of sources to create highly targeted audience segments with accurate data. This allows us to tailor our messaging and outreach efforts to specific prospects, increasing the effectiveness of the campaign.",
    images: [`${IMG}/data.png`],
  },
  {
    title: "Influencer identification",
    text: "We identify key influencers in your industry who can amplify your message and reach. Collaborating with these influencers helps to expand your reach and build credibility within your target market.",
    images: [`${IMG}/influencer.png`],
  },
  {
    title: "All multi-channel systems setup",
    text: "We set up all necessary multi-channel systems, including email, LinkedIn, ads, content calendar, tasks, tracking analytics, and integrations. This comprehensive setup ensures a seamless and coordinated campaign execution across all channels, including custom domains targeted toward ICP, SPF, DKIM, DMARC, tracking domains, and a minimum two-week email box warm-up.",
    images: [`${IMG}/multichannel.png`],
  },
];

const warmup: SectionItem[] = [
  {
    title: "Contact Specific LinkedIn Advertising",
    text: "We launch targeted LinkedIn ads (both image and video) to reach your specific prospects. These ads are designed to capture attention and drive engagement, warming up your audience for further outreach.",
    images: [`${IMG}/ad1.png`, `${IMG}/ad2.png`, `${IMG}/ad3.png`],
  },
  {
    title: "Organic Posts Based on Campaign Targeting",
    text: "We create and post 2-3 organic LinkedIn posts per account per week, tailored to your campaign and writing style. These posts help maintain a consistent presence and engage your audience with valuable content.",
    images: [`${IMG}/post1.png`, `${IMG}/post2.png`, `${IMG}/post3.png`],
  },
  {
    title: "Prospect Engagement on LinkedIn",
    text: "We identify posts made by your prospects on LinkedIn and send your team tasks to engage with them. This proactive engagement helps to build relationships and increase visibility within your target accounts.",
    images: [`${IMG}/engage1.png`, `${IMG}/engage2.png`, `${IMG}/engage3.png`],
  },
  {
    title: "Warm Introduction Network Analysis",
    text: "We perform a deep network analysis to find warm introduction opportunities into your prospect accounts. Leveraging your current customers and LinkedIn networks, we create meaningful connections that facilitate trust and engagement.",
    images: [`${IMG}/network.png`],
  },
  {
    title: "Messaging to Top Influencers",
    text: "We reach out to top influencers identified from the data set, inviting them to participate in a podcast. The goal is to secure additional episodes featuring industry voices, co-branded with your brand, enhancing your content library and reach.",
    images: [`${IMG}/influencer.png`],
  },
  {
    title: "Weekly Reporting and Optimization",
    text: "We provide weekly reports, learning insights, and on-the-fly campaign optimizations. This ensures that our strategies remain effective and adapt to any new insights or market changes.",
    images: [`${IMG}/reporting.png`],
  },
];

const outreach: SectionItem[] = [
  {
    title: "Handwritten note mailed to prospects",
    text: "We send personalized handwritten notes to your top prospects, creating a memorable touchpoint that stands out from digital communications, kicking off the outreach campaign.",
    images: [`${IMG}/handwritten.png`],
  },
  {
    title: "8-touch email campaign sequence",
    text: "We execute an 8-touch email campaign sequence to nurture leads and drive conversions. Each email is carefully crafted to provide value and move prospects through the sales funnel.",
    images: [`${IMG}/email-sequence.png`],
  },
  {
    title: "4-touch phone campaign sequence",
    text: "We conduct a 4-touch phone campaign sequence to connect with prospects directly. These calls are designed to build rapport, address questions, and advance the sales conversation.",
    images: [`${IMG}/phone.png`],
  },
  {
    title: "2-touch direct LinkedIn outreach sequence",
    text: "We initiate a 2-touch LinkedIn outreach sequence, reaching out directly to prospects with personalized messages. This approach leverages LinkedIn's professional network to establish connections and drive engagement.",
    images: [`${IMG}/linkedin-messaging.png`],
  },
  {
    title: "Continued LinkedIn Ads + Retargeting + Messaging campaign",
    text: "We maintain ongoing LinkedIn ads, retargeting, and messaging campaigns to keep your brand top of mind. These efforts ensure sustained visibility and engagement with your target audience.",
    images: [`${IMG}/retargeting.png`],
  },
  {
    title: "Continued LinkedIn prospects posting identification",
    text: "We continue to monitor and identify LinkedIn posts made by prospects, allowing your team to easily engage with their content to build relationships and drive interaction.",
    images: [`${IMG}/prospect-posts.png`],
  },
  {
    title: "Continued LinkedIn organic posting",
    text: "We sustain a regular cadence of organic LinkedIn posts, keeping your audience informed and engaged with relevant and valuable content.",
    images: [`${IMG}/organic-posting.png`],
  },
  {
    title: "Weekly Reporting and Optimization",
    text: "We provide weekly reports, learning insights, and on-the-fly campaign optimizations. This ensures that our strategies remain effective and adapt to any new insights or market changes.",
    images: [`${IMG}/reporting2.png`],
  },
];

const bonuses: SectionItem[] = [
  {
    title: "Event Prep and Follow Up",
    text: "We assist with preparation and follow-up for any relevant events, ensuring that your participation is maximized and leads are effectively nurtured post-event.",
    images: [`${IMG}/event.png`],
  },
  {
    title: "Rep Firm Orchestration",
    text: "If you are a manufacturer with rep firms, we can amplify your message by enlisting them in the campaign. This coordinated effort ensures that your entire sales force is aligned and working towards the same goals, significantly increasing your reach and impact.",
    images: [`${IMG}/rep-firm.png`],
  },
];

function PhaseSection({
  label,
  number,
  color,
  items,
}: {
  label: string;
  number: string;
  color: string;
  items: SectionItem[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-24">
      {/* Phase header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white font-bold text-lg`}
        >
          {number}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{label}</h2>
      </motion.div>

      {/* Items */}
      <div className="space-y-16">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.4) }}
          >
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {item.text}
            </p>
            {item.images.length === 1 && (
              <div className="rounded-xl border border-border overflow-hidden shadow-sm">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={1024}
                  height={576}
                  className="w-full h-auto"
                />
              </div>
            )}
            {item.images.length === 3 && (
              <div className="grid sm:grid-cols-3 gap-4">
                {item.images.map((img, j) => (
                  <div
                    key={j}
                    className="rounded-xl border border-border overflow-hidden shadow-sm"
                  >
                    <Image
                      src={img}
                      alt={`${item.title} ${j + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 glass border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/img/flow-circle.png" alt="Flow" className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight">
                Flow<span className="text-primary">Demand</span>
                <span className="text-[10px] font-semibold text-primary/60 ml-0.5 align-super">
                  AI
                </span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
              Example Campaign
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Multi-Channel Demand Generation Campaign
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              See exactly how a Flow Demand campaign works — from strategy and
              data sourcing through multi-channel outreach across LinkedIn,
              email, phone, and handwritten notes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <PhaseSection
          label="Preparation Phase"
          number="01"
          color="bg-primary"
          items={preparation}
        />
        <PhaseSection
          label="Warm Up Phase"
          number="02"
          color="bg-accent"
          items={warmup}
        />
        <PhaseSection
          label="Outreach Phase"
          number="03"
          color="bg-secondary"
          items={outreach}
        />
        <PhaseSection
          label="Bonuses"
          number="+"
          color="bg-gradient-to-br from-primary to-secondary"
          items={bonuses}
        />
      </div>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to run a campaign like this?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule a demo and we&apos;ll walk you through how a coordinated
            multi-channel campaign would work for your products and your network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#campaign"
              className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:bg-white/90 transition-all"
            >
              Run Your First Campaign
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/#demo"
              className="flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Flow. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
