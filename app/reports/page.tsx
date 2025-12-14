"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    FileText, Download, TrendingUp, Calendar, Users,
    CheckCircle, Building, Leaf, Search, Filter, Eye
} from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const completedProjects = [
    {
        id: "rp-001",
        name: "Aftab Agro Farms",
        category: "Poultry",
        totalRaised: "৳50,00,000",
        investors: 127,
        returnDelivered: "15.2%",
        duration: "12 months",
        completedDate: "December 2024",
        status: "Completed",
        contractType: "Mudarabah",
        description: "Poultry feed processing and distribution expansion project.",
    },
    {
        id: "rp-002",
        name: "Green Valley Rice Mills",
        category: "Agriculture",
        totalRaised: "৳75,00,000",
        investors: 189,
        returnDelivered: "14.8%",
        duration: "9 months",
        completedDate: "November 2024",
        status: "Completed",
        contractType: "Musharakah",
        description: "Rice milling capacity expansion and quality improvement.",
    },
    {
        id: "rp-003",
        name: "Organic Harvest BD",
        category: "Organic Farming",
        totalRaised: "৳35,00,000",
        investors: 94,
        returnDelivered: "16.5%",
        duration: "6 months",
        completedDate: "October 2024",
        status: "Completed",
        contractType: "Murabaha",
        description: "Organic vegetable supply chain and cold storage development.",
    },
    {
        id: "rp-004",
        name: "Fisheries Hub Khulna",
        category: "Fisheries",
        totalRaised: "৳60,00,000",
        investors: 156,
        returnDelivered: "13.9%",
        duration: "12 months",
        completedDate: "September 2024",
        status: "Completed",
        contractType: "Mudarabah",
        description: "Fish processing and export facility modernization.",
    },
    {
        id: "rp-005",
        name: "Dairy Fresh Farms",
        category: "Dairy",
        totalRaised: "৳45,00,000",
        investors: 112,
        returnDelivered: "15.0%",
        duration: "9 months",
        completedDate: "August 2024",
        status: "Completed",
        contractType: "Musharakah",
        description: "Dairy processing plant and distribution network expansion.",
    },
    {
        id: "rp-006",
        name: "Spice Gardens Sylhet",
        category: "Agriculture",
        totalRaised: "৳25,00,000",
        investors: 78,
        returnDelivered: "17.2%",
        duration: "6 months",
        completedDate: "July 2024",
        status: "Completed",
        contractType: "Murabaha",
        description: "Spice cultivation and processing for export market.",
    },
]

const stats = [
    { value: "৳500Cr+", label: "Total Returns Distributed" },
    { value: "25+", label: "Completed Projects" },
    { value: "15.2%", label: "Avg. Return Rate" },
    { value: "100%", label: "On-Time Completion" },
]

const categories = ["All", "Agriculture", "Poultry", "Dairy", "Fisheries", "Organic Farming"]

export default function ReportsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()

    const filteredProjects = completedProjects.filter(project => {
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-hero-bg pt-24 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div ref={heroRef} className={`relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <FileText className="w-4 h-4" />
                        TRANSPARENCY
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6">
                        Completed Project <span className="gradient-text">Reports</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-lg max-w-3xl mx-auto mb-8">
                        View detailed reports of all our successfully completed campaigns. See the returns delivered to investors and the impact created.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-card border-y border-border py-8">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-8 border-b border-border">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search completed projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                            ? "gradient-bg text-white"
                                            : "bg-muted text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports List */}
            <section className="py-12 sm:py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <p className="text-muted-foreground">
                            Showing {filteredProjects.length} completed projects
                        </p>
                    </div>

                    <div className="space-y-6">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="p-6 sm:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                        {/* Project Icon */}
                                        <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Leaf className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Project Info */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                                                    {project.status}
                                                </span>
                                                <span className="bg-muted px-3 py-1 rounded-full text-xs font-medium">
                                                    {project.category}
                                                </span>
                                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                                                    {project.contractType}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                                <div>
                                                    <div className="text-sm text-muted-foreground">Total Raised</div>
                                                    <div className="font-semibold">{project.totalRaised}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-muted-foreground">Investors</div>
                                                    <div className="font-semibold flex items-center gap-1">
                                                        <Users className="w-4 h-4 text-primary" />
                                                        {project.investors}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-muted-foreground">Return Delivered</div>
                                                    <div className="font-semibold text-green-600 flex items-center gap-1">
                                                        <TrendingUp className="w-4 h-4" />
                                                        {project.returnDelivered}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-muted-foreground">Duration</div>
                                                    <div className="font-semibold flex items-center gap-1">
                                                        <Calendar className="w-4 h-4 text-primary" />
                                                        {project.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-col gap-3 lg:ml-4">
                                            <Button className="gradient-bg hover:opacity-90 text-white">
                                                <Eye className="w-4 h-4 mr-2" />
                                                View Report
                                            </Button>
                                            <Button variant="outline">
                                                <Download className="w-4 h-4 mr-2" />
                                                Download PDF
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-6 sm:px-8 py-4 bg-muted/30 border-t border-border flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        Completed on {project.completedDate}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <FileText className="w-4 h-4" />
                                        Full report available
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Transparency Note */}
            <section className="py-16 sm:py-24 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Our Commitment to <span className="gradient-text">Transparency</span>
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                At AgroNext, we believe in complete transparency with our investors. Every completed campaign comes with a detailed report covering:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Detailed financial breakdown and fund utilization",
                                    "Business performance metrics and milestones achieved",
                                    "Profit calculation and distribution methodology",
                                    "Shariah compliance verification from our advisory board",
                                    "Impact assessment and social value created",
                                    "Lessons learned and future outlook",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <FileText className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Annual Impact Report</h3>
                                <p className="text-muted-foreground text-sm">
                                    Get our comprehensive annual report covering all completed projects, total impact, and investor returns.
                                </p>
                            </div>
                            <Button className="w-full gradient-bg hover:opacity-90 text-white">
                                <Download className="w-5 h-5 mr-2" />
                                Download Annual Report 2024
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-primary">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to Invest in Success Stories?
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Join thousands of investors who have achieved great returns while making a positive impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/campaigns">
                            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 h-auto font-semibold">
                                View Active Campaigns
                            </Button>
                        </Link>
                        <Link href="/apply">
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 h-auto">
                                Apply for Financing
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
