"use client"

import { UserPlus, Search, Wallet, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up in minutes with just your phone number.",
    color: "from-primary to-chart-4",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: Search,
    step: "02",
    title: "Browse Agro Projects",
    description: "Explore verified agricultural campaigns across Bangladesh.",
    color: "from-accent to-orange",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Invest & Track",
    description: "Choose your amount starting from ৳5,000.",
    color: "from-purple to-pink",
    bgColor: "bg-purple/10",
    borderColor: "border-purple/30",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Harvest Returns",
    description: "Receive principal plus profits after harvest season.",
    color: "from-chart-4 to-primary",
    bgColor: "bg-chart-4/10",
    borderColor: "border-chart-4/30",
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-36 sm:w-72 h-36 sm:h-72 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Start your investment journey in four simple steps
          </p>
        </div>

        <div className="flex overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[260px] sm:w-auto snap-center relative group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index < steps.length - 1 && (
                <div
                  className={`hidden lg:block absolute top-10 left-full w-full h-0.5 bg-linear-to-r ${step.color} -translate-x-1/2 z-0 opacity-30`}
                  style={{
                    maskImage: "linear-gradient(90deg, transparent 0%, #000000d4 60%, #000000d4 65%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000000d4 60%, #000000d4 65%, transparent 100%)"
                  }}
                />
              )}

              <div className="relative z-10 text-center bg-card/50 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0 border border-border sm:border-0">
                <div className="relative inline-flex mb-4 sm:mb-6">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${step.bgColor} border-2 ${step.borderColor} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-primary`} />
                  </div>
                  <span
                    className={`absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg`}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
