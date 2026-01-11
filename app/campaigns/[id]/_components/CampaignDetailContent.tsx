"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
    TrendingUp,
    Users,
    Clock,
    Building,
    ChevronRight,
    ArrowLeft,
    Share2,
    Heart,
    AlertCircle,
    Lock,
    MapPin,
    FileText,
    Shield,
    FileCheck,
    AlertTriangle,
    User,
    X,
    ChevronLeft,
} from "lucide-react"
import { Campaign } from "../../_types/domain"
import { formatCurrency, getRiskGradeColor } from "../../_utils/helpers"

interface CampaignDetailContentProps {
    initialCampaign: Campaign
}

export function CampaignDetailContent({ initialCampaign }: CampaignDetailContentProps) {
    const [campaign] = useState<Campaign>(initialCampaign)
    const [selectedImage, setSelectedImage] = useState(0)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [carouselIndex, setCarouselIndex] = useState(0)

    const formatCurrency = (amount: number) => {
        if (amount >= 10000000) {
            return `৳${(amount / 10000000).toFixed(1)}Cr`
        } else if (amount >= 100000) {
            return `৳${(amount / 100000).toFixed(1)}L`
        } else {
            return `৳${(amount / 1000).toFixed(0)}K`
        }
    }

    const getRiskGradeColor = (grade: string) => {
        switch (grade) {
            case "A":
            case "A+":
                return "bg-green-100 text-green-800 border-green-200"
            case "B":
            case "B+":
                return "bg-blue-100 text-blue-800 border-blue-200"
            case "C":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    return (
        <>
            {/* Breadcrumb */}
            <section className="bg-hero-bg pt-20 pb-4">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-hero-foreground/60 overflow-x-auto scrollbar-hide">
                        <Link href="/" className="hover:text-primary transition-colors whitespace-nowrap flex items-center">
                            Home
                        </Link>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <Link href="/campaigns" className="hover:text-primary transition-colors whitespace-nowrap flex items-center">
                            Campaigns
                        </Link>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-hero-foreground truncate max-w-[150px] sm:max-w-none flex items-center">{campaign.title}</span>
                    </div>
                </div>
            </section>

            {/* Campaign Hero */}
            <section className="bg-hero-bg pb-8">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/campaigns"
                        className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-primary transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Campaigns
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Campaign Image Gallery */}
                        <div className="lg:col-span-2">
                            {/* Main Image */}
                            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-4">
                                <Image
                                    src={campaign.galleryImages?.[selectedImage] || campaign.coverImage}
                                    alt={campaign.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                />
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button
                                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                                        aria-label="Add to favorites"
                                    >
                                        <Heart className="w-5 h-5 text-white" />
                                    </button>
                                    <button
                                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                                        aria-label="Share campaign"
                                    >
                                        <Share2 className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Gallery Thumbnails */}
                            {campaign.galleryImages && campaign.galleryImages.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                                    {campaign.galleryImages.slice(0, 3).map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative h-16 w-20 sm:h-20 sm:w-28 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                                ? "border-primary"
                                                : "border-transparent hover:border-border"
                                                }`}
                                            aria-label={`View image ${index + 1}`}
                                        >
                                            <Image src={image} alt={`Gallery ${index + 1}`} fill className="object-cover" />
                                        </button>
                                    ))}
                                    {campaign.galleryImages.length > 3 && (
                                        <button
                                            onClick={() => {
                                                setCarouselIndex(3)
                                                setIsGalleryOpen(true)
                                            }}
                                            className="relative h-16 w-20 sm:h-20 sm:w-28 shrink-0 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary bg-muted flex items-center justify-center transition-all hover:bg-primary/10"
                                            aria-label="View more images"
                                        >
                                            <span className="text-xs sm:text-sm font-semibold">
                                                +{campaign.galleryImages.length - 3}
                                            </span>
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* Gallery Modal */}
                            <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
                                <DialogContent className="max-w-full w-screen h-screen p-0 bg-black border-none">
                                    <DialogTitle className="sr-only">Image Gallery</DialogTitle>
                                    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black">
                                        {/* Close Button - Top Right */}
                                        <button
                                            onClick={() => setIsGalleryOpen(false)}
                                            className="fixed top-3 right-3 sm:top-6 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                            aria-label="Close gallery"
                                        >
                                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </button>

                                        {/* Previous Button */}
                                        {campaign.galleryImages && carouselIndex > 0 && (
                                            <button
                                                onClick={() => setCarouselIndex(carouselIndex - 1)}
                                                className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                            </button>
                                        )}

                                        {/* Image */}
                                        {campaign.galleryImages && campaign.galleryImages[carouselIndex] && (
                                            <div className="relative w-full h-full flex items-center justify-center px-10 sm:px-20 py-16 sm:py-24">
                                                <Image
                                                    src={campaign.galleryImages[carouselIndex]}
                                                    alt={`Gallery image ${carouselIndex + 1}`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        )}

                                        {/* Next Button */}
                                        {campaign.galleryImages && carouselIndex < campaign.galleryImages.length - 1 && (
                                            <button
                                                onClick={() => setCarouselIndex(carouselIndex + 1)}
                                                className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                            </button>
                                        )}

                                        {/* Image Counter - Bottom Center */}
                                        <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm z-50">
                                            <span className="text-white text-sm sm:text-base font-medium">
                                                {carouselIndex + 1} / {campaign.galleryImages?.length || 0}
                                            </span>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            {/* Category & Location */}
                            <div className="mt-4 flex flex-wrap items-center gap-4">
                                <Badge variant="secondary" className="text-sm">
                                    {campaign.category}
                                </Badge>
                                {campaign.location && (
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        <span>{campaign.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Investment Card */}
                        <div className="lg:sticky lg:top-24 bg-card border border-border rounded-xl p-4 sm:p-6 h-fit order-first lg:order-none">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">{campaign.title}</h2>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{campaign.category}</p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4 lg:mb-6 line-clamp-2">{campaign.categoryTagline}</p>

                            {/* Progress */}
                            <div className="mb-4 sm:mb-6">
                                <div className="flex justify-between items-baseline mb-1.5 sm:mb-2">
                                    <span className="text-xs sm:text-sm font-semibold">
                                        {campaign.raisedPercentage.toFixed(0)}% RAISED
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-muted-foreground">
                                        Target: {formatCurrency(campaign.targetAmount)}
                                    </span>
                                </div>
                                <Progress value={campaign.raisedPercentage} className="h-2 sm:h-3 mb-2" />
                                <div>
                                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                                        {formatCurrency(campaign.raisedAmount)}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground">Raised of {formatCurrency(campaign.targetAmount)}</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <div className="border border-border rounded-lg p-2 sm:p-3 text-center">
                                    <p className="text-sm sm:text-base lg:text-lg font-bold">{campaign.annualizedReturn}</p>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground">Returns</p>
                                </div>
                                <div className="border border-border rounded-lg p-2 sm:p-3 text-center">
                                    <p className="text-sm sm:text-base lg:text-lg font-bold">{campaign.durationMonths} months</p>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground">Duration</p>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4 sm:mb-6">
                                <div className="flex items-center justify-between py-2 border-t border-border">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                                        <span className="text-xs sm:text-sm">Unit Price</span>
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold">{formatCurrency(campaign.minInvestment)}</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-border">
                                    <span className="text-xs sm:text-sm text-muted-foreground">Available Slots</span>
                                    <span className="text-xs sm:text-sm font-semibold">{campaign.availableSlots}</span>
                                </div>
                                <div className="flex items-center justify-between py-2 pb-0">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                                        <span className="text-xs sm:text-sm">Days Left</span>
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium text-primary">
                                        {campaign.status === "funded" ? "Fully Funded" : `${campaign.daysLeft} days`}
                                    </span>
                                </div>
                            </div>

                            {campaign.status === "funded" ? (
                                <>
                                    <Button
                                        className="w-full mb-2 sm:mb-3 bg-muted text-muted-foreground cursor-not-allowed text-sm sm:text-base h-10 sm:h-11"
                                        disabled
                                    >
                                        <Lock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                        Fully Funded
                                    </Button>
                                    <p className="text-[10px] sm:text-xs text-center text-muted-foreground">
                                        This campaign has reached its funding goal
                                    </p>
                                </>
                            ) : (
                                <>
                                    <Link href="/app" className="block w-full">
                                        <Button className="w-full mb-2 sm:mb-3 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base h-10 sm:h-11">
                                            Get App to Invest
                                        </Button>
                                    </Link>
                                    <p className="text-[10px] sm:text-xs text-center text-muted-foreground">
                                        Minimum investment: {formatCurrency(campaign.minInvestment)}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaign Details */}
            <section className="py-8 sm:py-12">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Main Content with Tabs */}
                        <div className="lg:col-span-2">
                            <Tabs defaultValue="business" className="w-full">
                                <TabsList className="w-full grid grid-cols-5 mb-4 sm:mb-6 h-auto">
                                    <TabsTrigger value="business" className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 py-1.5 sm:py-2 text-[10px] sm:text-sm px-1 sm:px-3">
                                        <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Business</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="owner" className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 py-1.5 sm:py-2 text-[10px] sm:text-sm px-1 sm:px-3">
                                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Owner</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="shariah" className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 py-1.5 sm:py-2 text-[10px] sm:text-sm px-1 sm:px-3">
                                        <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Shariah</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="contract" className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 py-1.5 sm:py-2 text-[10px] sm:text-sm px-1 sm:px-3">
                                        <FileCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Contract</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="risks" className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 py-1.5 sm:py-2 text-[10px] sm:text-sm px-1 sm:px-3">
                                        <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Risks</span>
                                    </TabsTrigger>
                                </TabsList>

                                {/* Business Tab */}
                                <TabsContent value="business" className="space-y-4 sm:space-y-6">
                                    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                                        <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4">Project Details</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Project Title</span>
                                                <span className="text-sm font-semibold">{campaign.title}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Category</span>
                                                <span className="text-sm font-semibold">{campaign.category}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Location</span>
                                                <span className="text-sm font-semibold">{campaign.location}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Start Date</span>
                                                <span className="text-sm font-semibold">{new Date(campaign.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Duration</span>
                                                <span className="text-sm font-semibold">{campaign.durationMonths} months</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Investment Goal</span>
                                                <span className="text-sm font-semibold">{formatCurrency(campaign.targetAmount)}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Unit Price</span>
                                                <span className="text-sm font-semibold">{formatCurrency(campaign.minInvestment)}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Available Slots</span>
                                                <span className="text-sm font-semibold">{campaign.availableSlots}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Expected Returns</span>
                                                <span className="text-sm font-semibold">{campaign.annualizedReturn}</span>
                                            </div>
                                            <div className="flex justify-between py-2">
                                                <span className="text-sm text-muted-foreground">Status</span>
                                                <span className="text-sm font-semibold capitalize">{campaign.status}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {campaign.description && (
                                        <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                                            <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4">About This Project</h3>
                                            <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line">
                                                {campaign.description}
                                            </p>
                                        </div>
                                    )}
                                </TabsContent>

                                {/* Owner Tab */}
                                <TabsContent value="owner" className="space-y-6">
                                    <div className="bg-card border border-border rounded-xl p-6 text-center text-muted-foreground">
                                        Owner information will be available after investment
                                    </div>
                                </TabsContent>

                                {/* Shariah Tab */}
                                <TabsContent value="shariah" className="space-y-6">
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Shariah Compliance</h3>
                                        <p className="text-muted-foreground">
                                            This investment is structured in accordance with Islamic principles and has been
                                            reviewed by our Shariah board to ensure full compliance with Shariah law.
                                        </p>
                                    </div>
                                </TabsContent>

                                {/* Contract Tab */}
                                <TabsContent value="contract" className="space-y-6">
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4">Investment Terms</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Investment Goal</span>
                                                <span className="text-sm font-semibold">{formatCurrency(campaign.targetAmount)}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Unit Price</span>
                                                <span className="text-sm font-semibold">{formatCurrency(campaign.minInvestment)}</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b border-border">
                                                <span className="text-sm text-muted-foreground">Expected Returns</span>
                                                <span className="text-sm font-semibold">{campaign.annualizedReturn}</span>
                                            </div>
                                            <div className="flex justify-between py-2">
                                                <span className="text-sm text-muted-foreground">Duration</span>
                                                <span className="text-sm font-semibold">{campaign.durationMonths} months</span>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* Risks Tab */}
                                <TabsContent value="risks" className="space-y-6">
                                    <div className="bg-card border border-border rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                                            Risk Assessment
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            All investments carry risk. Please carefully consider the following before investing:
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                                                <span className="text-sm text-muted-foreground">Market conditions may affect project performance and returns</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                                                <span className="text-sm text-muted-foreground">Business operations may face unexpected challenges</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                                                <span className="text-sm text-muted-foreground">Returns are not guaranteed and may vary</span>
                                            </li>
                                        </ul>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Business Info */}
                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-lg font-bold mb-4">Business Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Building className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm text-muted-foreground">
                                            {campaign.businessName}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm text-muted-foreground">{campaign.category}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Financials */}
                            {campaign.financials && (
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Financials</h3>
                                    <div className="space-y-3">
                                        {campaign.financials.revenue && (
                                            <div>
                                                <p className="text-xs text-muted-foreground">Revenue</p>
                                                <p className="text-sm font-semibold">{campaign.financials.revenue}</p>
                                            </div>
                                        )}
                                        {campaign.financials.profit && (
                                            <div>
                                                <p className="text-xs text-muted-foreground">Profit</p>
                                                <p className="text-sm font-semibold">{campaign.financials.profit}</p>
                                            </div>
                                        )}
                                        {campaign.financials.assets && (
                                            <div>
                                                <p className="text-xs text-muted-foreground">Assets</p>
                                                <p className="text-sm font-semibold">{campaign.financials.assets}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Documents */}
                            {campaign.documents && campaign.documents.length > 0 && (
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Documents</h3>
                                    <div className="space-y-2">
                                        {campaign.documents.map((doc, index) => {
                                            const getDocIcon = (type: string) => {
                                                switch (type) {
                                                    case "business":
                                                        return <Building className="w-5 h-5 text-primary" />
                                                    case "owner":
                                                        return <User className="w-5 h-5 text-primary" />
                                                    case "shariah":
                                                        return <Shield className="w-5 h-5 text-primary" />
                                                    case "contract":
                                                        return <FileCheck className="w-5 h-5 text-primary" />
                                                    case "risks":
                                                        return <AlertTriangle className="w-5 h-5 text-primary" />
                                                    default:
                                                        return <FileText className="w-5 h-5 text-primary" />
                                                }
                                            }

                                            return (
                                                <a
                                                    key={index}
                                                    href={doc.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors border border-border"
                                                >
                                                    {getDocIcon(doc.type)}
                                                    <span className="text-sm flex-1">{doc.name}</span>
                                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Disclaimer Section */}
                    {campaign.disclaimer && (
                        <div className="mt-12 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-amber-600" />
                                Disclaimer
                            </h3>
                            <div className="text-sm text-muted-foreground space-y-3">
                                {campaign.disclaimer.split(". ").map((sentence, index) => (
                                    <p key={index}>{sentence.trim()}{sentence.endsWith(".") ? "" : "."}</p>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-900 text-sm text-muted-foreground">
                                <p>biniyog.io only acts as a consultant to the investor and the business, and does NOT manage funds for any party.</p>
                                <p className="mt-2">biniyog.io performs risk assessment to a certain extent, but will NOT be liable if the business does not perform as per expectation.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
