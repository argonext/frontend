"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, Filter, Leaf, TrendingUp, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Campaign } from "../_types/domain"
import { campaignService } from "../_api/campaign-service"
import { CAMPAIGN_CATEGORIES, ITEMS_PER_PAGE } from "../_constants/constants"
import { formatCurrency } from "../_utils/helpers"
import Image from "next/image"
import Link from "next/link"

interface CampaignsListContentProps {
    initialCampaigns: Campaign[]
}

export function CampaignsListContent({ initialCampaigns }: CampaignsListContentProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(Math.ceil(initialCampaigns.length / ITEMS_PER_PAGE))

    useEffect(() => {
        // Only fetch if filters change (not on initial load)
        if (searchQuery || selectedCategory !== "All") {
            fetchCampaigns()
        } else {
            // Reset to initial campaigns
            setCampaigns(initialCampaigns)
            setTotalPages(Math.ceil(initialCampaigns.length / ITEMS_PER_PAGE))
        }
    }, [searchQuery, selectedCategory, currentPage])

    const fetchCampaigns = async () => {
        try {
            setLoading(true)
            const response = await campaignService.getCampaigns({
                category: selectedCategory,
                search: searchQuery,
                status: "active",
            })
            const allCampaigns = response.data
            setTotalPages(Math.ceil(allCampaigns.length / ITEMS_PER_PAGE))
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
            const endIndex = startIndex + ITEMS_PER_PAGE
            setCampaigns(allCampaigns.slice(startIndex, endIndex))
        } catch (error) {
            console.error("Error fetching campaigns:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {/* Hero Section */}
            <section className="bg-hero-bg pt-20 pb-10 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        Successfully Funded
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-3 sm:mb-4">
                        <span className="gradient-text">Funded Campaigns</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
                        From startups to established ventures, businesses across various sectors have successfully raised funds through AgroNext — creating impact for both entrepreneurs and investors.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-primary py-4 sm:py-6">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center text-white">
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold">280+</p>
                            <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">Businesses Funded</p>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold">৳95 Cr+</p>
                            <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">Total Financed</p>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold">11,400+</p>
                            <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">Investments Made</p>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold">15%+</p>
                            <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">Avg. Returns</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaigns Grid */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
                            <p className="mt-4 text-muted-foreground">Loading campaign details...</p>
                        </div>
                    ) : campaigns.length === 0 ? (
                        <div className="text-center py-12">
                            <Leaf className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                            <p className="text-muted-foreground text-lg">No funded campaigns found.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                            {campaigns.map((campaign) => (
                                <div
                                    key={campaign.id}
                                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Campaign Image */}
                                    <div className="relative aspect-4/3 bg-muted">
                                        <Image
                                            src={campaign.coverImage || "/placeholder-campaign.jpg"}
                                            alt={campaign.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                                                Funded
                                            </span>
                                        </div>
                                    </div>

                                    {/* Campaign Info */}
                                    <div className="p-4 sm:p-5">
                                        <div className="mb-3">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wide">
                                                {campaign.category}
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold text-foreground mt-1 line-clamp-2">
                                                {campaign.title}
                                            </h3>
                                        </div>

                                        {/* Extra Profit Banner */}
                                        {campaign.extraProfitActivated && (
                                            <div className="mb-3 bg-cyan-500 text-white px-3 py-2 rounded-lg text-xs font-medium">
                                                {campaign.extraProfitMessage || "Extra profit activated. Expires soon!"}
                                            </div>
                                        )}

                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground">Annual Return</span>
                                                <span className="text-base font-semibold text-foreground">
                                                    {campaign.annualizedReturn}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground">Duration</span>
                                                <span className="text-sm text-foreground">
                                                    {campaign.durationMonths} months
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground">Return in {campaign.durationMonths}m</span>
                                                <span className="text-sm text-foreground">
                                                    {campaign.totalReturnPercentage}%
                                                </span>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-4">
                                            <div className="flex justify-between text-xs mb-1.5">
                                                <span className="text-muted-foreground">Funded</span>
                                                <span className="font-semibold text-green-600">100%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="h-full w-full bg-green-500 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Investors Count */}
                                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <TrendingUp className="w-4 h-4 text-green-500" />
                                                <span>{campaign.investorsCount || 0} Investors</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-xs font-medium text-green-600">Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {!loading && campaigns.length > 0 && totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="h-9 w-9 p-0"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Button>

                            <div className="flex items-center gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                    if (
                                        page === 1 ||
                                        page === totalPages ||
                                        (page >= currentPage - 1 && page <= currentPage + 1)
                                    ) {
                                        return (
                                            <Button
                                                key={page}
                                                variant={currentPage === page ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => setCurrentPage(page)}
                                                className="h-9 w-9 p-0"
                                            >
                                                {page}
                                            </Button>
                                        )
                                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                                        return <span key={page} className="px-2 text-muted-foreground">...</span>
                                    }
                                    return null
                                })}
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="h-9 w-9 p-0"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* App Download CTA */}
            <section className="py-10 sm:py-16 bg-hero-bg">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-hero-foreground mb-3 sm:mb-4">
                            Download Our App
                        </h2>
                        <p className="text-hero-foreground/70 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
                            Start your journey to halal wealth. Our investments are structured in accordance with
                            the strictest Islamic principles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-white/90 transition-all active:scale-95"
                            >
                                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[10px] sm:text-xs">Download on the</p>
                                    <p className="text-xs sm:text-sm font-semibold">App Store</p>
                                </div>
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-white/90 transition-all active:scale-95"
                            >
                                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.18 2.22C2.92 2.53 2.75 3 2.75 3.61v16.78c0 .61.17 1.08.43 1.39l.08.07 9.41-9.41v-.22l-9.41-9.41-.08.07zM16.19 16.66l-3.13-3.13v-.22l3.13-3.13.07.04 3.71 2.11c1.06.6 1.06 1.58 0 2.18l-3.71 2.11-.07.04zm-3.36-3.36l-9.55 9.55c.35.38.92.43 1.58.05l12.1-6.88-4.13-2.72zm0-6.46l4.13-2.72-12.1-6.88c-.66-.38-1.23-.33-1.58.05l9.55 9.55z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-[10px] sm:text-xs">Get it on</p>
                                    <p className="text-xs sm:text-sm font-semibold">Google Play</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
