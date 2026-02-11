import type { Metadata } from "next";
import CaseStudyContent from "@/components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Example Campaign | Flow Demand AI",
  description:
    "See a real multi-channel demand generation campaign in action — from preparation through outreach, across LinkedIn, email, phone, and handwritten notes.",
};

export default function CaseStudyPage() {
  return <CaseStudyContent />;
}
