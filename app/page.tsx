import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { TransformationSection } from "@/components/transformation-section";
import { VisualMapSection } from "@/components/visual-map-section";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { OutputShowcase } from "@/components/output-showcase";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-accent/30 overflow-hidden relative noise">
      <div className="bg-background rounded-lg shadow-lg noise">
        <Header />
        <HeroSection />
        <LogoMarquee />
        <TransformationSection />
        {/* <VisualMapSection /> */}
        <FeaturesGrid />
        <HowItWorksSection />
        {/* <OutputShowcase /> */}
        <PricingSection />
        <TestimonialsMarquee />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
