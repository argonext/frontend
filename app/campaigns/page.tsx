"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Filter, Leaf } from "lucide-react"
import { CampaignCard } from "@/components/campaign-card"
import { Campaign } from "@/lib/types/campaign"
import { campaignService } from "@/lib/api/campaign-service"

const categories = [
    "All",
    "Transport & Logistics",
    "Electric and Electronics",
    "B2B Commodity Trading",
    "Clothing wholesale",
    "Livestock",
    "Organic Food Business",
]

const statuses = ["All", "active", "funded", "completed"]

export default function CampaignsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedStatus, setSelectedStatus] = useState("All")
    const [campaigns, setCampaigns] = useState<Campaign[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCampaigns()
    }, [searchQuery, selectedCategory, selectedStatus])

    const fetchCampaigns = async () => {
        try {
            setLoading(true)
            const response = await campaignService.getCampaigns({
                category: selectedCategory,
                status: selectedStatus,
                search: searchQuery,
            })
            setCampaigns(response.data)
        } catch (error) {
            console.error("Error fetching campaigns:", error)
        } finally {
            setLoading(false)
        }
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
                        <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                        Halal Investment Opportunities
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-3 sm:mb-4">
                        Ongoing <span className="gradient-text">Investment Opportunities</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                        Explore Shariah-compliant investment opportunities in verified businesses across Bangladesh
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

            {/* Filters Section */}
            <section className="py-4 sm:py-6 lg:py-8 border-b border-border">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        {/* Search */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search campaigns..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-background border border-border rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                                Category
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-medium transition-all active:scale-95 ${selectedCategory === category
                                            ? "bg-primary text-white shadow-md"
                                            : "bg-muted text-foreground hover:bg-muted/80"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Status Filter */}
                        <div>
                            <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Status</p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {statuses.map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setSelectedStatus(status)}
                                        className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-medium transition-all capitalize active:scale-95 ${selectedStatus === status
                                            ? "bg-primary text-white shadow-md"
                                            : "bg-muted text-foreground hover:bg-muted/80"
                                            }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaigns Grid */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="bg-card border border-border rounded-xl h-[300px] sm:h-[400px] lg:h-[450px] animate-pulse" />
                            ))}
                        </div>
                    ) : campaigns.length === 0 ? (
                        <div className="text-center py-12 sm:py-16">
                            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <Search className="w-7 h-7 sm:w-10 sm:h-10 text-muted-foreground" />
                            </div>
                            <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">No campaigns found</h3>
                            <p className="text-sm sm:text-base text-muted-foreground">Try adjusting your search or filters</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                            {campaigns.map((campaign) => (
                                <CampaignCard key={campaign.id} campaign={campaign} />
                            ))}
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

            <Footer />
        </div>
    )
}
