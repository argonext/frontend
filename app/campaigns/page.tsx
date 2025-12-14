"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Filter, TrendingUp, Users, Clock, ChevronRight, Leaf, Target, CheckCircle } from "lucide-react"

// Sample campaign data
const campaigns = [
    {
        id: 1,
        title: "Organic Rice Farming - Sylhet",
        business: "Green Valley Agro",
        category: "Agriculture",
        raised: 850000,
        target: 1000000,
        investors: 156,
        daysLeft: 12,
        returnRate: "12-15%",
        image: "/campaigns/rice-farm.jpg",
        status: "active",
        contractType: "Mudarabah",
    },
    {
        id: 2,
        title: "Poultry Farm Expansion - Chittagong",
        business: "Fresh Farms Ltd",
        category: "Poultry",
        raised: 1500000,
        target: 1500000,
        investors: 234,
        daysLeft: 0,
        returnRate: "14-18%",
        image: "/campaigns/poultry.jpg",
        status: "funded",
        contractType: "Musharakah",
    },
    {
        id: 3,
        title: "Fishery Project - Cox's Bazar",
        business: "Blue Ocean Fisheries",
        category: "Fishery",
        raised: 620000,
        target: 800000,
        investors: 98,
        daysLeft: 21,
        returnRate: "10-14%",
        image: "/campaigns/fishery.jpg",
        status: "active",
        contractType: "Mudarabah",
    },
    {
        id: 4,
        title: "Dairy Farm - Rajshahi",
        business: "Pure Milk Dairy",
        category: "Dairy",
        raised: 2000000,
        target: 2000000,
        investors: 312,
        daysLeft: 0,
        returnRate: "15-20%",
        image: "/campaigns/dairy.jpg",
        status: "funded",
        contractType: "Musharakah",
    },
    {
        id: 5,
        title: "Vegetable Export - Jessore",
        business: "Fresh Harvest Exports",
        category: "Agriculture",
        raised: 450000,
        target: 700000,
        investors: 67,
        daysLeft: 30,
        returnRate: "11-13%",
        image: "/campaigns/vegetables.jpg",
        status: "active",
        contractType: "Murabaha",
    },
    {
        id: 6,
        title: "Honey Production - Sundarbans",
        business: "Golden Bee Farms",
        category: "Agriculture",
        raised: 300000,
        target: 500000,
        investors: 45,
        daysLeft: 45,
        returnRate: "13-16%",
        image: "/campaigns/honey.jpg",
        status: "active",
        contractType: "Mudarabah",
    },
]

const categories = ["All", "Agriculture", "Poultry", "Fishery", "Dairy"]
const statuses = ["All", "Active", "Funded", "Completed"]

export default function CampaignsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedStatus, setSelectedStatus] = useState("All")

    const filteredCampaigns = campaigns.filter(campaign => {
        const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            campaign.business.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "All" || campaign.category === selectedCategory
        const matchesStatus = selectedStatus === "All" ||
            (selectedStatus === "Active" && campaign.status === "active") ||
            (selectedStatus === "Funded" && campaign.status === "funded")
        return matchesSearch && matchesCategory && matchesStatus
    })

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-BD', {
            style: 'currency',
            currency: 'BDT',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount).replace('BDT', '৳')
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-hero-bg pt-24 pb-16 sm:pt-28 sm:pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Leaf className="w-4 h-4" />
                        Halal Investment Opportunities
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-hero-foreground mb-4">
                        Funded <span className="gradient-text">Campaigns</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-lg max-w-2xl mx-auto">
                        From startups to established ventures, businesses across various sectors have successfully raised funds through AgroNext — creating impact for both entrepreneurs and investors.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-primary py-6">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                        <div>
                            <p className="text-3xl font-bold">280+</p>
                            <p className="text-white/80 text-sm">Businesses Funded</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">৳95 Cr+</p>
                            <p className="text-white/80 text-sm">Total Financed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">11,400+</p>
                            <p className="text-white/80 text-sm">Investments Made</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">15%+</p>
                            <p className="text-white/80 text-sm">Avg. Returns</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-8 border-b border-border">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search campaigns..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? "bg-primary text-white"
                                        : "bg-muted text-foreground hover:bg-muted/80"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Status Filter */}
                        <div className="flex gap-2">
                            {statuses.map(status => (
                                <button
                                    key={status}
                                    onClick={() => setSelectedStatus(status)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedStatus === status
                                        ? "bg-primary text-white"
                                        : "bg-muted text-foreground hover:bg-muted/80"
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaigns Grid */}
            <section className="py-12 sm:py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCampaigns.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No campaigns found</h3>
                            <p className="text-muted-foreground">Try adjusting your search or filters</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCampaigns.map((campaign) => (
                                <Link
                                    key={campaign.id}
                                    href={`/campaigns/${campaign.id}`}
                                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 bg-muted overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                            <Leaf className="w-16 h-16 text-primary/30" />
                                        </div>
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${campaign.status === "funded"
                                                ? "bg-green-500 text-white"
                                                : "bg-primary text-white"
                                                }`}>
                                                {campaign.status === "funded" ? "Funded" : "Active"}
                                            </span>
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-foreground">
                                                {campaign.contractType}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <p className="text-sm text-primary font-medium mb-1">{campaign.category}</p>
                                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {campaign.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">{campaign.business}</p>

                                        {/* Progress Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="font-semibold text-primary">{formatCurrency(campaign.raised)}</span>
                                                <span className="text-muted-foreground">of {formatCurrency(campaign.target)}</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full gradient-bg rounded-full transition-all duration-500"
                                                    style={{ width: `${Math.min((campaign.raised / campaign.target) * 100, 100)}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{campaign.investors} investors</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <TrendingUp className="w-4 h-4 text-primary" />
                                                <span className="text-primary font-medium">{campaign.returnRate}</span>
                                            </div>
                                            {campaign.daysLeft > 0 && (
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{campaign.daysLeft} days left</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* App Download CTA */}
            <section className="py-16 bg-hero-bg">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-hero-foreground mb-4">
                            Download Our App
                        </h2>
                        <p className="text-hero-foreground/70 mb-8 max-w-xl mx-auto">
                            Start your journey to halal wealth. Our investments are structured in accordance with the strictest Islamic principles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#" className="inline-flex items-center justify-center gap-3 bg-white text-foreground px-6 py-3 rounded-xl hover:bg-white/90 transition-all">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs">Download on the</p>
                                    <p className="text-sm font-semibold">App Store</p>
                                </div>
                            </Link>
                            <Link href="#" className="inline-flex items-center justify-center gap-3 bg-white text-foreground px-6 py-3 rounded-xl hover:bg-white/90 transition-all">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.18 2.22C2.92 2.53 2.75 3 2.75 3.61v16.78c0 .61.17 1.08.43 1.39l.08.07 9.41-9.41v-.22l-9.41-9.41-.08.07zM16.19 16.66l-3.13-3.13v-.22l3.13-3.13.07.04 3.71 2.11c1.06.6 1.06 1.58 0 2.18l-3.71 2.11-.07.04zm-3.36-3.36l-9.55 9.55c.35.38.92.43 1.58.05l12.1-6.88-4.13-2.72zm0-6.46l4.13-2.72-12.1-6.88c-.66-.38-1.23-.33-1.58.05l9.55 9.55z" />
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs">Get it on</p>
                                    <p className="text-sm font-semibold">Google Play</p>
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
