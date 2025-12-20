"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, Users, Sparkles } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop",
    alt: "Agricultural Investment"
  },
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&h=1080&fit=crop",
    alt: "Farm Investment"
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop",
    alt: "Crop Investment"
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop",
    alt: "Agricultural Growth"
  },
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false } as any)]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)



  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl pt-2 md:pt-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hover:scale-105 transition-transform cursor-default">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span className="text-white text-xs sm:text-sm font-medium">
                Now accepting new investors
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse-slow" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up">
              Invest in Agriculture
              <span className="block text-green-500">Grow Your Wealth</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Unlock access to verified agricultural projects and farms. Start with as low as{" "}
              <span className="text-accent font-semibold">৳5,000</span> and build your wealth through transparent,
              Shariah-compliant investments.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link href="/app">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 text-white gap-2 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 hover:scale-105 group w-full sm:w-auto active:scale-95"
                >
                  Download App Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/shariah">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/20 hover:border-accent/50 gap-2 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 group w-full sm:w-auto active:scale-95"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:scale-110 transition-transform" /> Shariah Compliant
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-white/20 transition-colors cursor-default">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-white/20 transition-colors cursor-default">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>High Returns</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-white/20 transition-colors cursor-default">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple" />
                <span>11K+ Investors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
