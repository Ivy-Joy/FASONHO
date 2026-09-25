// src/app/(marketing)/about/page.tsx
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";
import {
  AboutCta,
  AboutHero,
  AfricaSection,
  DesignTestSection,
  DifferentiationSection,
  EcosystemSection,
  FlywheelSection,
  FoundingStory,
  MissionVision,
  RoadmapSection,
  ValuesSection,
  WhoWeAre,
  WhyWeExist,
} from "@/src/components/about";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <FoundingStory />
      <WhyWeExist />
      <MissionVision />
      <EcosystemSection />
      <FlywheelSection />
      <ValuesSection />
      <AfricaSection />
      <RoadmapSection />
      <DifferentiationSection />
      <DesignTestSection />
      <AboutCta />
      <Footer />
    </main>
  );
}