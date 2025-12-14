"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, TrendingUp, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const investments = [
  {
    id: 1,
    title: "Organic Rice Farming - Sylhet",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    raised: 850000,
    target: 1000000,
    returns: "12-15%",
    duration: "12 days left",
    investors: 156,
    status: "Active",
    gradient: "from-primary/20 to-chart-4/20",
    accentColor: "text-primary",
    borderColor: "hover:border-primary/50",
  },
  {
    id: 3,
    title: "Fishery Project - Cox's Bazar",
    category: "Fishery",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80",
    raised: 620000,
    target: 800000,
    returns: "10-14%",
    duration: "21 days left",
    investors: 98,
    status: "Active",
    gradient: "from-accent/20 to-orange/20",
    accentColor: "text-accent",
    borderColor: "hover:border-accent/50",
  },
  {
    id: 5,
    title: "Vegetable Export - Jessore",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800&q=80",
    raised: 450000,
    target: 700000,
    returns: "11-13%",
    duration: "30 days left",
    investors: 67,
    status: "Active",
    gradient: "from-purple/20 to-pink/20",
    accentColor: "text-purple",
    borderColor: "hover:border-purple/50",
  },
  {
    id: 2,
    title: "Poultry Farm Expansion - Chittagong",
    category: "Poultry",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
    raised: 1500000,
    target: 1500000,
    returns: "14-18%",
    duration: "Completed",
    investors: 234,
    status: "Funded",
    gradient: "from-chart-4/20 to-primary/20",
    accentColor: "text-chart-4",
    borderColor: "hover:border-chart-4/50",
  },
]

export function FeaturedInvestments() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-36 sm:w-72 h-36 sm:h-72 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-4 mb-8 sm:mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">
                Investment Opportunities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
              Featured <span className="gradient-text">Investments</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl">
              Explore verified businesses ready for investment
            </p>
          </div>
          <Link href="/campaigns">
            <Button
              variant="outline"
              className="gap-2 self-start bg-transparent border-primary/30 hover:bg-primary/10 hover:border-primary text-foreground text-sm sm:text-base"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="flex overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {investments.map((investment, index) => (
            <Link
              href={`/campaigns/${investment.id}`}
              key={index}
              className={`flex-shrink-0 w-[280px] sm:w-auto snap-center group bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl ${investment.borderColor} transition-all duration-300 hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-32 sm:h-40 overflow-hidden">
                <img
                  src={investment.image || "/placeholder.svg"}
                  alt={investment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${investment.gradient} opacity-60`} />
                <Badge
                  className={`absolute top-2 right-2 sm:top-3 sm:right-3 text-xs ${investment.status === "Funded"
                    ? "bg-gradient-to-r from-primary to-chart-4 text-white border-0"
                    : "bg-white/90 text-foreground border-0"
                    }`}
                >
                  {investment.status}
                </Badge>
              </div>

              <div className="p-4 sm:p-5">
                <p
                  className={`text-[10px] sm:text-xs ${investment.accentColor} uppercase tracking-wide mb-1 font-semibold`}
                >
                  {investment.category}
                </p>
                <h3 className="font-semibold text-card-foreground mb-2 sm:mb-3 text-sm sm:text-base group-hover:text-primary transition-colors">
                  {investment.title}
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="text-muted-foreground">Raised</span>
                      <span className="font-medium text-card-foreground">
                        ৳{(investment.raised / 1000).toFixed(0)}K / ৳{(investment.target / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${investment.gradient.replace("/20", "")} rounded-full transition-all duration-500`}
                        style={{ width: `${(investment.raised / investment.target) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center pt-2 border-t border-border">
                    <div>
                      <div className={`flex items-center justify-center gap-0.5 sm:gap-1 ${investment.accentColor}`}>
                        <TrendingUp className="w-3 h-3" />
                        <span className="font-semibold text-xs sm:text-sm">{investment.returns}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">Returns</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-card-foreground">
                        <Clock className="w-3 h-3" />
                        <span className="font-semibold text-xs sm:text-sm">{investment.duration.split(" ")[0]}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{investment.status === "Funded" ? "Status" : "Days"}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-card-foreground">
                        <Users className="w-3 h-3" />
                        <span className="font-semibold text-xs sm:text-sm">{investment.investors}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">Investors</p>
                    </div>
                  </div>
                </div>

                <Button
                  className={`w-full mt-3 sm:mt-4 text-xs sm:text-sm h-9 sm:h-10 ${investment.status === "Funded" ? "bg-muted text-muted-foreground" : "gradient-bg hover:opacity-90 text-white shadow-md"} active:scale-95 transition-transform`}
                  disabled={investment.status === "Funded"}
                >
                  {investment.status === "Funded" ? "Fully Funded" : "Invest Now"}
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
