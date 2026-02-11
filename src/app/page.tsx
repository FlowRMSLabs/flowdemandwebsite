import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Platform from "@/components/Platform";
import Differentiator from "@/components/Differentiator";
import Results from "@/components/Results";
import CampaignWizard from "@/components/CampaignWizard";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Platform />
        <Differentiator />
        <Results />
        <Solution />
        <CampaignWizard />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
