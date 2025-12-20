"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CampaignCard } from "@/components/campaign-card"
import { Campaign } from "@/lib/types/campaign"
import { campaignService } from "@/lib/api/campaign-service"

export function FeaturedInvestments() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await campaignService.getFeaturedCampaigns(4)
        setCampaigns(data)
      } catch (error) {
        console.error("Error fetching campaigns:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCampaigns()
  }, [])

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
              Ongoing <span className="gradient-text">Investment Opportunities</span>
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

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg h-[400px] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              >
                <CampaignCard campaign={campaign} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
