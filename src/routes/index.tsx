import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhyMaterraSection } from "@/components/WhyMaterraSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { InnovationSection } from "@/components/InnovationSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { CtaBanner } from "@/components/CtaBanner";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Marterra — Environmental Protection & Contamination Control Solutions" },
      { name: "description", content: "Marterra delivers innovative, sustainable, and ecological solutions for the prevention and control of maritime and land contamination caused by hydrocarbons and hazardous substances." },
      { property: "og:title", content: "Marterra — Environmental Protection & Contamination Control" },
      { property: "og:description", content: "Innovative, sustainable solutions for contamination prevention and control across maritime and terrestrial environments." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <WhyMaterraSection />
      <IndustriesSection />
      <InnovationSection />
      <SustainabilitySection />
      <CtaBanner />
      <FooterSection />
    </div>
  );
}
