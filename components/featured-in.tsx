"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FeaturedIn() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const logos = [
    { name: "The Daily Star", initials: "DS" },
    { name: "Prothom Alo", initials: "PA" },
    { name: "bdnews24", initials: "BN" },
    { name: "The Business Standard", initials: "BS" },
    { name: "Dhaka Tribune", initials: "DT" },
    { name: "Financial Express", initials: "FE" },
    { name: "New Age", initials: "NA" },
    { name: "The Independent", initials: "TI" },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background border-b border-border overflow-hidden">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-muted-foreground uppercase tracking-widest text-xs sm:text-sm font-medium mb-6 sm:mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          As Featured In
        </p>
        
        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logos */}
          <div className={`flex overflow-hidden ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            <div className="flex animate-scroll-left">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-12 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer flex-shrink-0"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-sm sm:text-base text-primary group-hover:from-primary/30 group-hover:to-primary/20 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    {logo.initials}
                  </div>
                  <span className="font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
