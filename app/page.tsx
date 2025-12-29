import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { UseCasesSection } from "@/components/use-cases-section";
import { TransformationSection } from "@/components/transformation-section";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <HeroSection />
      <div className="space-y-16 md:space-y-32 pb-32">
        <LogoMarquee />
        <UseCasesSection />
        <TransformationSection />
        <FeaturesGrid />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsMarquee />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
