import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { FeaturedIn } from "@/components/featured-in"
import { WhyUsSection } from "@/components/why-us-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedInvestments } from "@/components/featured-investments"
import { PlatformFeatures } from "@/components/platform-features"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <StatsBar />
      <FeaturedIn />
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="investments">
        <FeaturedInvestments />
      </section>
      <section id="features">
        <PlatformFeatures />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <CTASection />
      </section>
      <Footer />
    </>
  )
}
