"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CampaignCard } from "@/components/campaign-card"
import { Campaign } from "@/app/campaigns/_types/domain"

interface FeaturedInvestmentsClientProps {
    campaigns: Campaign[]
}

export function FeaturedInvestmentsClient({ campaigns }: FeaturedInvestmentsClientProps) {
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
                            Ongoing <span className="gradient-text">Investment Opportunities</span>
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
                            Explore our carefully vetted agricultural investment projects. All campaigns are Shariah-compliant and backed by real businesses.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <Link href="/campaigns">
                            <Button variant="ghost" className="group text-xs sm:text-sm">
                                View All Campaigns
                                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {campaigns.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No active campaigns at the moment. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {campaigns.map((campaign, index) => (
                            <div
                                key={campaign.id}
                                className={isVisible ? "animate-fade-in-up" : "opacity-0"}
                                style={{ animationDelay: `${index * 100}ms` }}
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
