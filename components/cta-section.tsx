"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Zap, Users, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-hero-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-36 sm:w-72 h-36 sm:h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-orange/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hover:scale-105 transition-transform">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-hero-foreground/90 text-xs sm:text-sm font-medium">Rated 4.9/5 by investors</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-4 sm:mb-6 text-balance">
            Ready to Start Your <span className="gradient-text">Investment Journey?</span>
          </h2>
          <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Join <span className="text-accent font-semibold">11,000+</span> investors building wealth through smart,
            ethical investments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-primary/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-primary/20 transition-colors">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-hero-foreground/80 text-xs sm:text-sm">Secure</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-accent/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-accent/20 transition-colors">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span className="text-hero-foreground/80 text-xs sm:text-sm">Instant</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-purple/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-purple/20 transition-colors">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple" />
              <span className="text-hero-foreground/80 text-xs sm:text-sm">Top Rated</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button
              size="lg"
              className="gradient-bg hover:opacity-90 text-white gap-2 h-12 sm:h-14 px-6 sm:px-10 w-full sm:w-auto text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group active:scale-95"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              Create Free Account
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-hero-foreground hover:bg-white/10 hover:border-accent/50 gap-2 h-12 sm:h-14 px-6 sm:px-10 w-full sm:w-auto text-sm sm:text-base bg-transparent transition-all duration-300 hover:scale-105 group active:scale-95"
            >
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              Browse Investments
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-hero-foreground/60 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-chart-4 border-2 border-hero-bg"
                  />
                ))}
              </div>
              <span>11,000+ investors</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
