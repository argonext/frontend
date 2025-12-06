"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FeaturedIn() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const logos = [
    { name: "Future Startup", initials: "FS" },
    { name: "Tech News", initials: "TN" },
    { name: "Business Daily", initials: "BD" },
    { name: "Finance Weekly", initials: "FW" },
    { name: "Startup Hub", initials: "SH" },
    { name: "Innovation Lab", initials: "IL" },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background border-b border-border">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-muted-foreground uppercase tracking-widest text-xs sm:text-sm font-medium mb-6 sm:mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Featured In
        </p>
        <div
          className={`flex overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:items-center sm:justify-center gap-6 sm:gap-8 lg:gap-16 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center flex items-center gap-2 text-foreground hover:text-foreground transition-colors group cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm text-primary group-hover:from-primary/30 group-hover:to-primary/20 group-hover:shadow-md transition-all">
                {logo.initials}
              </div>
              <span className="font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
