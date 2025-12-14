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

          {/* Right Content - Video Placeholder */}
          <div
            className={`relative flex justify-center lg:justify-end ${isVisible ? "animate-fade-in-right delay-300" : "opacity-0"}`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 gradient-bg rounded-2xl sm:rounded-3xl blur-2xl opacity-30 scale-105" />

              {/* Video Frame */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 via-chart-4/20 to-accent/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 overflow-hidden group cursor-pointer">
                {/* Placeholder Image/Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a4d4d] via-[#0d5858] to-[#0a4d4d]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-primary/20">
                        <svg className="w-32 h-32 sm:w-40 sm:h-40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z" />
                        </svg>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                        Agro<span className="text-primary">Next</span>
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base uppercase tracking-wider">AT A GLANCE</p>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/50 group-hover:scale-110 transition-all duration-300 animate-pulse-slow">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Watch on YouTube Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-md flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Watch on YouTube</span>
                </div>

                {/* Copy Link Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Copy link</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
