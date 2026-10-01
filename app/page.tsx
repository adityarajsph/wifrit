import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyWifrit } from "@/components/sections/WhyWifrit";
import { Stats } from "@/components/sections/Stats";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Infinite Trust Logo Marquee */}
      <TrustMarquee />

      {/* 3. Services Preview Grid (6 cards) */}
      <ServicesPreview />

      {/* 4. Why Wifrit Grid (6 items) */}
      <WhyWifrit />

      {/* 5. Animated Stats Counter Band */}
      <Stats />

      {/* 6. Selected Work / Portfolio Preview (3 items + link) */}
      <PortfolioGrid limit={3} showFilters={false} showHeader={true} />

      {/* 7. Process Section */}
      <ProcessSection />

      {/* 8. Client Testimonials (3 cards) */}
      <TestimonialsSection />

      {/* 9. Closing CTA Banner */}
      <CTASection
        title="Have an idea? Let's build it together."
        description="Tell us what you're building and we'll help turn your idea into a scalable digital product."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </>
  );
}
