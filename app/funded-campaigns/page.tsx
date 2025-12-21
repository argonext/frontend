"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Leaf, TrendingUp, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Campaign } from "@/lib/types/campaign"
import { campaignService } from "@/lib/api/campaign-service"
import Image from "next/image"

export default function FundedCampaignsPage() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const itemsPerPage = 12

    useEffect(() => {
        fetchFundedCampaigns()
    }, [currentPage])

    const fetchFundedCampaigns = async () => {
        try {
            setLoading(true)
            const response = await campaignService.getCampaigns({
                status: "funded",
            })
            const allCampaigns = response.data
            setTotalPages(Math.ceil(allCampaigns.length / itemsPerPage))
            const startIndex = (currentPage - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            setCampaigns(allCampaigns.slice(startIndex, endIndex))
        } catch (error) {
            console.error("Error fetching funded campaigns:", error)
        } finally {
            setLoading(false)
        }
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-BD", {
            style: "currency",
            currency: "BDT",
            minimumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

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

            {/* Funded Campaigns Grid */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
                            <p className="mt-4 text-muted-foreground">Loading campaign details...</p>
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

                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Target Amount</span>
                                                <span className="font-semibold text-foreground">
                                                    {formatCurrency(campaign.targetAmount)}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Annual Return</span>
                                                <span className="font-semibold text-accent">
                                                    {campaign.annualizedReturn}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Duration</span>
                                                <span className="font-medium text-foreground">
                                                    {campaign.durationMonths} months
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

                    {!loading && campaigns.length === 0 && (
                        <div className="text-center py-12">
                            <Leaf className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                            <p className="text-muted-foreground text-lg">No funded campaigns found.</p>
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

            <Footer />
        </div>
    )
}
