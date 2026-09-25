//// src/app/(marketing)/page.tsx
//import { AnnouncementBar } from "@/src/components/layout/announcement-bar";
import { Navbar } from "@/src/components/layout/navbar";
import { HeroSection } from "@/src/components/hero/hero-section";
import { WhyFasonho } from "@/src/components/sections/why-fasonho";
import { Ecosystem } from "@/src/components/sections/ecosystem";
import { TrustSection } from "@/src/components/sections/trust-section";
//import { CTABanner } from "@/src/components/sections/cta-banner";
//import { Newsletter } from "@/src/components/sections/newsletter";
import { Footer } from "@/src/components/layout/footer";

export default function LandingPage() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <Navbar />

      <main>
        <HeroSection />
        <WhyFasonho />
        <Ecosystem />
        <TrustSection />
        {/* <CTABanner /> */}
        {/* <Newsletter /> */}
      </main>

      <Footer />
    </>
  );
}