"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Users, Banknote, CheckCircle, UserCheck } from "lucide-react"

const stats = [
  { value: 918, suffix: "M+", prefix: "৳", label: "Financed", icon: Banknote, color: "text-white" },
  { value: 11000, suffix: "+", prefix: "", label: "Investments", icon: TrendingUp, color: "text-accent" },
  { value: 594, suffix: "M+", prefix: "৳", label: "Repaid", icon: CheckCircle, color: "text-white" },
  { value: 288, suffix: "K+", prefix: "", label: "Users", icon: Users, color: "text-accent" },
  { value: 220, suffix: "K+", prefix: "", label: "Investors", icon: UserCheck, color: "text-white" },
]

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [current, setCurrent] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            setCurrent(Math.min(Math.floor(increment * step), value))
            if (step >= steps) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="gradient-bg py-6 sm:py-8 lg:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/dots-pattern.jpg')] opacity-5" />
      <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex-shrink-0 w-[140px] sm:w-auto snap-center text-center group">
              <div className="flex justify-center mb-1.5 sm:mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                </div>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-0.5 sm:mb-1">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
