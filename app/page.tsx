import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { HowItWorks } from "@/components/how-it-works"
import { IndustriesSection } from "@/components/industries-section"
import { CTASection } from "@/components/cta-section"
import RevenueImpactSection from "@/components/revenue-impact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RevenueImpactSection />
      <HowItWorks />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
