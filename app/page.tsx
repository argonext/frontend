import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { FeaturedIn } from "@/components/featured-in"
import { WhyUsSection } from "@/components/why-us-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedInvestments } from "@/components/featured-investments"
import { PlatformFeatures } from "@/components/platform-features"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ExploreSection } from "@/components/explore-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata(
    'Agronext - Shariah-Compliant Investment Platform | Ethical SME Financing',
    'Invest in ethical, Shariah-compliant agricultural and SME businesses in Bangladesh. Earn competitive returns while creating real impact. Minimum investment from ৳5,000.',
    'https://agronext.com',
    'https://agronext.com/og-image.png',
    'Agronext - Ethical Investment Platform'
  );
}

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <StatsBar />
      <section id="investments">
        <FeaturedInvestments />
      </section>
      <FeaturedIn />
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <PlatformFeatures />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <ExploreSection />
      <section id="contact">
        <CTASection />
      </section>
      <Footer />
    </>
  )
}
