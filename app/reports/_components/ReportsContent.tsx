"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    FileText, Download, TrendingUp, Calendar, Users,
    CheckCircle, Building, Leaf, Search, Filter, Eye
} from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { COMPLETED_PROJECTS, REPORT_STATS, REPORT_CATEGORIES } from "../_constants/constants"

export function ReportsContent() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()

    const filteredProjects = COMPLETED_PROJECTS.filter(project => {
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <>
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
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-hero-foreground mb-4 sm:mb-6">
                        Completed Project <span className="gradient-text">Reports</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        View detailed reports of all our successfully completed campaigns. See the returns delivered to investors and the impact created.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-card border-y border-border py-6 sm:py-8">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {REPORT_STATS.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-6 sm:py-8 border-b border-border">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search completed projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-card text-sm sm:text-base focus:outline-none focus:border-primary"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                            {REPORT_CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full sm:rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
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

                    <div className="space-y-4 sm:space-y-6">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="p-4 sm:p-6 lg:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                                        {/* Project Icon */}
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-bg rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>

                                        {/* Project Info */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                                                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                                                    {project.status}
                                                </span>
                                                <span className="bg-muted px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                                                    {project.category}
                                                </span>
                                                <span className="bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                                                    {project.contractType}
                                                </span>
                                            </div>
                                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">{project.name}</h3>
                                            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                                                <div>
                                                    <div className="text-xs sm:text-sm text-muted-foreground">Total Raised</div>
                                                    <div className="font-semibold text-sm sm:text-base">{project.totalRaised}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-muted-foreground">Investors</div>
                                                    <div className="font-semibold text-sm sm:text-base flex items-center gap-1">
                                                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                                        {project.investors}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-muted-foreground">Return Delivered</div>
                                                    <div className="font-semibold text-sm sm:text-base text-green-600 flex items-center gap-1">
                                                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        {project.returnDelivered}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-muted-foreground">Duration</div>
                                                    <div className="font-semibold text-sm sm:text-base flex items-center gap-1">
                                                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
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
                    </div>
                </div>
            </section>
        </>
    )
}
