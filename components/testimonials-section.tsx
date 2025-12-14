"use client"

import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Software Engineer",
    avatar: "/professional-bangladeshi-man-portrait.jpg",
    content:
      "I've been investing with AgroNext for 2 years now. The returns from agricultural projects are consistent and the platform is very transparent.",
    rating: 5,
    invested: "৳250,000",
    gradient: "from-primary/20 to-chart-4/20",
    borderColor: "border-primary/20 hover:border-primary/50",
    accentColor: "text-primary",
  },
  {
    name: "Fatima Khan",
    role: "Business Owner",
    avatar: "/professional-bangladeshi-woman-portrait.jpg",
    content:
      "As someone new to agricultural investing, I found AgroNext incredibly easy to use. My portfolio has grown 18% this year!",
    rating: 5,
    invested: "৳150,000",
    gradient: "from-accent/20 to-orange/20",
    borderColor: "border-accent/20 hover:border-accent/50",
    accentColor: "text-accent",
  },
  {
    name: "Kamal Hossain",
    role: "Doctor",
    avatar: "/professional-south-asian-man-doctor-portrait.jpg",
    content:
      "What I love most is the Shariah compliance. Investing in halal agricultural projects while earning returns feels great.",
    rating: 5,
    invested: "৳500,000",
    gradient: "from-purple/20 to-pink/20",
    borderColor: "border-purple/20 hover:border-purple/50",
    accentColor: "text-purple",
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-36 sm:w-72 h-36 sm:h-72 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent fill-accent" />
            <span className="text-xs sm:text-sm font-medium text-foreground">4.9/5 Average Rating</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Trusted by <span className="gradient-text">Investors</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Join thousands of happy investors building wealth with AgroNext
          </p>
        </div>

        <div className="flex overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[300px] sm:w-auto snap-center bg-card border ${testimonial.borderColor} rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}
              >
                <Quote className={`w-4 h-4 sm:w-5 sm:h-5 ${testimonial.accentColor}`} />
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className={`p-0.5 rounded-full bg-gradient-to-br ${testimonial.gradient.replace("/20", "")}`}>
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-card"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{`"${testimonial.content}"`}</p>

              <div className={`pt-3 sm:pt-4 border-t border-border flex items-center justify-between`}>
                <p className="text-xs sm:text-sm text-muted-foreground">Total Invested</p>
                <span
                  className={`font-bold ${testimonial.accentColor} bg-gradient-to-r ${testimonial.gradient} px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm`}
                >
                  {testimonial.invested}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
