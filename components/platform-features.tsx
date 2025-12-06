"use client"

import { Shield, BarChart3, Bell, Lock, Globe, Headphones } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Shield,
    title: "Verified Businesses",
    description: "Every business goes through rigorous verification before being listed.",
    color: "primary",
    gradient: "from-primary/20 to-chart-4/20",
    borderColor: "border-primary/20 hover:border-primary/40",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track your investments with detailed analytics and performance metrics.",
    color: "accent",
    gradient: "from-accent/20 to-orange/20",
    borderColor: "border-accent/20 hover:border-accent/40",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay updated with opportunities, returns, and market updates.",
    color: "purple",
    gradient: "from-purple/20 to-pink/20",
    borderColor: "border-purple/20 hover:border-purple/40",
  },
  {
    icon: Lock,
    title: "Bank-grade Security",
    description: "Your data and investments are protected with enterprise encryption.",
    color: "chart-4",
    gradient: "from-chart-4/20 to-primary/20",
    borderColor: "border-chart-4/20 hover:border-chart-4/40",
  },
  {
    icon: Globe,
    title: "Diverse Portfolio",
    description: "Invest across agriculture, tech, healthcare, and more sectors.",
    color: "primary",
    gradient: "from-primary/20 to-purple/20",
    borderColor: "border-primary/20 hover:border-primary/40",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is always available to assist you.",
    color: "accent",
    gradient: "from-accent/20 to-chart-4/20",
    borderColor: "border-accent/20 hover:border-accent/40",
  },
]

const colorMap: Record<string, string> = {
  primary: "text-primary bg-primary/10",
  accent: "text-accent bg-accent/10",
  purple: "text-purple bg-purple/10",
  "chart-4": "text-chart-4 bg-chart-4/10",
}

export function PlatformFeatures() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-36 sm:w-72 h-36 sm:h-72 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
            Platform Features
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Everything You Need to <span className="gradient-text">Invest Confidently</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            All the tools and features you need to make informed investment decisions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border ${feature.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group active:scale-98 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${colorMap[feature.color]} group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-card-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
