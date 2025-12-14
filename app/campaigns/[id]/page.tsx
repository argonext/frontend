"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    TrendingUp,
    Users,
    Clock,
    MapPin,
    Building,
    Calendar,
    FileText,
    Shield,
    ChevronRight,
    Leaf,
    Target,
    CheckCircle,
    ArrowLeft,
    Download,
    Share2,
    Heart
} from "lucide-react"

// Sample campaign detail data
const campaignData = {
    id: 1,
    title: "Organic Rice Farming - Sylhet",
    business: "Green Valley Agro",
    category: "Agriculture",
    raised: 850000,
    target: 1000000,
    investors: 156,
    daysLeft: 12,
    returnRate: "12-15%",
    minInvestment: 5000,
    contractType: "Mudarabah",
    duration: "12 months",
    location: "Sylhet, Bangladesh",
    status: "active",
    description: `Green Valley Agro is seeking investment for expanding organic rice cultivation in Sylhet region. The project focuses on sustainable farming practices and aims to produce premium quality organic rice for both local and export markets.

Our farm has been operational for 5 years with a strong track record of successful harvests. The investment will be used for:
- Land preparation and seed procurement
- Organic fertilizers and pest management
- Labor and operational costs
- Harvesting and processing equipment`,
    highlights: [
        "5+ years of farming experience",
        "Direct market access to major retailers",
        "Organic certification in progress",
        "Experienced management team",
        "100% Shariah-compliant financing"
    ],
    timeline: [
        { date: "Jan 2024", event: "Campaign Launch" },
        { date: "Feb 2024", event: "Funding Completion" },
        { date: "Mar 2024", event: "Land Preparation Begins" },
        { date: "Jun 2024", event: "Planting Season" },
        { date: "Nov 2024", event: "Harvest & Sales" },
        { date: "Dec 2024", event: "Profit Distribution" },
    ],
    documents: [
        { name: "Business Plan", type: "PDF" },
        { name: "Financial Projections", type: "PDF" },
        { name: "Trade License", type: "PDF" },
        { name: "Shariah Compliance Certificate", type: "PDF" },
    ],
    businessInfo: {
        founded: "2019",
        employees: "25+",
        previousCampaigns: 3,
        successRate: "100%",
    },
    updates: [
        {
            date: "Dec 10, 2024",
            title: "75% Funding Reached!",
            content: "We're excited to announce that we've reached 75% of our funding goal. Thank you to all our investors!"
        },
        {
            date: "Dec 5, 2024",
            title: "Campaign Launch",
            content: "Our organic rice farming campaign is now live. Join us in supporting sustainable agriculture."
        },
    ]
}

export default function CampaignDetailPage() {
    const params = useParams()
    const [activeTab, setActiveTab] = useState<"overview" | "updates" | "documents">("overview")

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-BD', {
            style: 'currency',
            currency: 'BDT',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount).replace('BDT', '৳')
    }

    const progress = (campaignData.raised / campaignData.target) * 100

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Breadcrumb */}
            <section className="bg-hero-bg pt-20 pb-4">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-hero-foreground/60">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/campaigns" className="hover:text-primary transition-colors">Campaigns</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-hero-foreground">{campaignData.title}</span>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="bg-hero-bg pb-8 sm:pb-12 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Campaign Image/Visual */}
                        <div className="relative h-64 sm:h-80 lg:h-96 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                <Leaf className="w-24 h-24 text-primary/40" />
                            </div>
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                                    Active
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-foreground">
                                    {campaignData.contractType}
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                                    <Heart className="w-5 h-5 text-white" />
                                </button>
                                <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                                    <Share2 className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Campaign Info */}
                        <div>
                            <span className="text-primary font-medium">{campaignData.category}</span>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-hero-foreground mt-2 mb-3">
                                {campaignData.title}
                            </h1>
                            <div className="flex items-center gap-2 text-hero-foreground/70 mb-6">
                                <Building className="w-4 h-4" />
                                <span>{campaignData.business}</span>
                                <span className="mx-2">•</span>
                                <MapPin className="w-4 h-4" />
                                <span>{campaignData.location}</span>
                            </div>

                            {/* Funding Progress */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
                                <div className="flex justify-between items-end mb-3">
                                    <div>
                                        <p className="text-3xl font-bold text-primary">{formatCurrency(campaignData.raised)}</p>
                                        <p className="text-hero-foreground/60 text-sm">raised of {formatCurrency(campaignData.target)} goal</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-hero-foreground">{progress.toFixed(0)}%</p>
                                        <p className="text-hero-foreground/60 text-sm">funded</p>
                                    </div>
                                </div>
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                                    <div
                                        className="h-full gradient-bg rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min(progress, 100)}%` }}
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-xl font-bold text-hero-foreground">{campaignData.investors}</p>
                                        <p className="text-hero-foreground/60 text-xs">Investors</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-primary">{campaignData.returnRate}</p>
                                        <p className="text-hero-foreground/60 text-xs">Expected Return</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-hero-foreground">{campaignData.daysLeft}</p>
                                        <p className="text-hero-foreground/60 text-xs">Days Left</p>
                                    </div>
                                </div>
                            </div>

                            {/* Investment CTA */}
                            <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-hero-foreground/60 text-sm">Minimum Investment</p>
                                        <p className="text-2xl font-bold text-hero-foreground">{formatCurrency(campaignData.minInvestment)}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-hero-foreground/60 text-sm">Duration</p>
                                        <p className="text-lg font-semibold text-hero-foreground">{campaignData.duration}</p>
                                    </div>
                                </div>
                                <Button className="w-full gradient-bg hover:opacity-90 text-white py-4 h-auto text-lg font-semibold shadow-lg shadow-primary/25">
                                    Invest Now
                                </Button>
                                <p className="text-hero-foreground/50 text-xs text-center mt-3">
                                    100% Shariah-compliant • Secure Investment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Navigation */}
            <section className="border-b border-border sticky top-16 md:top-18 lg:top-20 bg-background z-40">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-8">
                        {[
                            { id: "overview", label: "Overview" },
                            { id: "updates", label: "Updates" },
                            { id: "documents", label: "Documents" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                className={`py-4 border-b-2 transition-colors font-medium ${activeTab === tab.id
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {activeTab === "overview" && (
                                <>
                                    {/* Description */}
                                    <div className="bg-card border border-border rounded-2xl p-6">
                                        <h2 className="text-xl font-semibold mb-4">About This Project</h2>
                                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                            {campaignData.description}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <div className="bg-card border border-border rounded-2xl p-6">
                                        <h2 className="text-xl font-semibold mb-4">Investment Highlights</h2>
                                        <div className="space-y-3">
                                            {campaignData.highlights.map((highlight, index) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-foreground">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="bg-card border border-border rounded-2xl p-6">
                                        <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
                                        <div className="space-y-4">
                                            {campaignData.timeline.map((item, index) => (
                                                <div key={index} className="flex items-start gap-4">
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-3 h-3 rounded-full bg-primary" />
                                                        {index < campaignData.timeline.length - 1 && (
                                                            <div className="w-0.5 h-12 bg-border" />
                                                        )}
                                                    </div>
                                                    <div className="-mt-1">
                                                        <p className="text-sm text-primary font-medium">{item.date}</p>
                                                        <p className="text-foreground">{item.event}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "updates" && (
                                <div className="space-y-4">
                                    {campaignData.updates.map((update, index) => (
                                        <div key={index} className="bg-card border border-border rounded-2xl p-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span className="text-sm text-muted-foreground">{update.date}</span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                                            <p className="text-muted-foreground">{update.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === "documents" && (
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h2 className="text-xl font-semibold mb-4">Project Documents</h2>
                                    <div className="space-y-3">
                                        {campaignData.documents.map((doc, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <FileText className="w-5 h-5 text-primary" />
                                                    <span className="font-medium">{doc.name}</span>
                                                    <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded">
                                                        {doc.type}
                                                    </span>
                                                </div>
                                                <Download className="w-5 h-5 text-muted-foreground" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Business Info */}
                            <div className="bg-card border border-border rounded-2xl p-6">
                                <h3 className="font-semibold mb-4">Business Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                                            <Building className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{campaignData.business}</p>
                                            <p className="text-sm text-muted-foreground">{campaignData.location}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Founded</p>
                                            <p className="font-medium">{campaignData.businessInfo.founded}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Employees</p>
                                            <p className="font-medium">{campaignData.businessInfo.employees}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Previous Campaigns</p>
                                            <p className="font-medium">{campaignData.businessInfo.previousCampaigns}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Success Rate</p>
                                            <p className="font-medium text-primary">{campaignData.businessInfo.successRate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shariah Compliance */}
                            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-6 h-6 text-primary" />
                                    <h3 className="font-semibold">Shariah Compliant</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    This investment is structured according to {campaignData.contractType} principles and has been verified by our Shariah advisory board.
                                </p>
                                <Link href="/shariah" className="text-primary text-sm font-medium hover:underline">
                                    Learn more about our Shariah compliance →
                                </Link>
                            </div>

                            {/* Risk Disclosure */}
                            <div className="bg-muted rounded-2xl p-6">
                                <h3 className="font-semibold mb-3">Risk Disclosure</h3>
                                <p className="text-sm text-muted-foreground">
                                    All investments carry risks. Past performance is not indicative of future results. Please read all documents carefully before investing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
