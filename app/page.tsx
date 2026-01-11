import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Suspense } from 'react';
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
        <Suspense fallback={
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-muted rounded w-64 mx-auto"></div>
                <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-96 bg-muted rounded-xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }>
          <FeaturedInvestments />
        </Suspense>
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
