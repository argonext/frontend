"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, TrendingUp, Users, Sparkles, CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative bg-hero-bg pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Animated background elements - Reduced size on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-chart-4/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hover:scale-105 transition-transform cursor-default">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span className="text-hero-foreground/90 text-xs sm:text-sm font-medium">
                Now accepting new investors
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse-slow" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-hero-foreground leading-tight mb-4 sm:mb-6">
              Invest in Agriculture
              <span className="block gradient-text">Grow Your Wealth</span>
            </h1>

            <p className="text-hero-foreground/70 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Unlock access to verified agricultural projects and farms. Start with as low as{" "}
              <span className="text-accent font-semibold">৳5,000</span> and build your wealth through transparent,
              Shariah-compliant investments.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Link href="/campaigns">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 text-white gap-2 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 hover:scale-105 group w-full sm:w-auto active:scale-95"
                >
                  Start Investing Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/shariah">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-hero-foreground hover:bg-white/10 hover:border-accent/50 gap-2 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-transparent transition-all duration-300 hover:scale-105 group w-full sm:w-auto active:scale-95"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:scale-110 transition-transform" /> Shariah Compliant
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-hero-foreground/80 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-primary/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-primary/20 transition-colors cursor-default">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-accent/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-accent/20 transition-colors cursor-default">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>High Returns</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-purple/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-purple/20 transition-colors cursor-default">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple" />
                <span>11K+ Investors</span>
              </div>
            </div>
          </div>

          {/* Right Content - Investment Dashboard Preview */}
          <div
            className={`relative flex justify-center lg:justify-end ${isVisible ? "animate-fade-in-right delay-300" : "opacity-0"}`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 gradient-bg rounded-2xl sm:rounded-3xl blur-2xl opacity-30 scale-105" />

              <div className="relative w-full bg-card/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/10 animate-float">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Total Portfolio Value</p>
                    <p className="text-2xl sm:text-3xl font-bold text-card-foreground">৳1,25,750</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-primary font-semibold bg-primary/10 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> +12.5%
                    </span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Investment items - More compact on mobile */}
                  <div className="bg-gradient-to-r from-primary/10 to-chart-4/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-card-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                          AgriTech Farms
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Agricultural</p>
                      </div>
                      <span className="text-primary font-bold text-xs sm:text-sm bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                        +18%
                      </span>
                    </div>
                    <div className="mt-2 sm:mt-3 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-chart-4 rounded-full w-[75%]" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/10 to-orange/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-card-foreground text-sm sm:text-base group-hover:text-accent transition-colors">
                          EcoMart
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">E-commerce</p>
                      </div>
                      <span className="text-accent font-bold text-xs sm:text-sm bg-accent/10 px-2 sm:px-3 py-1 rounded-full">
                        +14%
                      </span>
                    </div>
                    <div className="mt-2 sm:mt-3 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-orange rounded-full w-[60%]" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple/10 to-pink/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple/20 hover:border-purple/40 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-card-foreground text-sm sm:text-base group-hover:text-purple transition-colors">
                          HealthPlus
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Healthcare</p>
                      </div>
                      <span className="text-purple font-bold text-xs sm:text-sm bg-purple/10 px-2 sm:px-3 py-1 rounded-full">
                        +22%
                      </span>
                    </div>
                    <div className="mt-2 sm:mt-3 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple to-pink rounded-full w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -left-4 sm:-left-8 top-12 sm:top-16 bg-card border border-primary/30 rounded-lg sm:rounded-xl p-2.5 sm:p-4 shadow-xl shadow-primary/10 hidden sm:block animate-bounce-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-bg rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Returns</p>
                    <p className="font-bold text-card-foreground text-sm sm:text-base">14-22% p.a.</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-2 sm:-right-4 bottom-20 sm:bottom-24 bg-card border border-accent/30 rounded-lg sm:rounded-xl p-2.5 sm:p-4 shadow-xl shadow-accent/10 hidden sm:block animate-bounce-in"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-bg-warm rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Verified</p>
                    <p className="font-bold text-card-foreground text-sm sm:text-base">100+ Businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
