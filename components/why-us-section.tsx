"use client"

import { Shield, TrendingUp, Clock, Wallet, Users, FileCheck, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Shield,
    title: "Shariah Compliant",
    description: "All agricultural projects are verified by our Shariah board for halal compliance.",
    iconBg: "gradient-bg",
  },
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Earn 14-22% annual returns from verified agricultural projects.",
    iconBg: "gradient-bg-warm",
  },
  {
    icon: Clock,
    title: "Hassle-Free",
    description: "We handle farm assessment, contracts, and harvest distribution. You just invest.",
    iconBg: "gradient-bg-purple",
  },
  {
    icon: Wallet,
    title: "Start Small",
    description: "Begin investing with as low as ৳5,000. Build your agro portfolio gradually.",
    iconBg: "gradient-bg",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join 11,000+ investors building wealth through Shariah-compliant agro investments.",
    iconBg: "gradient-bg-warm",
  },
  {
    icon: FileCheck,
    title: "Full Transparency",
    description: "Track your investments with real-time farm updates and harvest reports.",
    iconBg: "gradient-bg-purple",
  },
]

export function WhyUsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-36 sm:w-72 h-36 sm:h-72 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose <span className="gradient-text">AgroNext</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            We make investing accessible, transparent, and profitable
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-98 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${feature.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-card-foreground mb-1.5 sm:mb-2 lg:mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
