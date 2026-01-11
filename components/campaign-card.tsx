import Link from "next/link"
import Image from "next/image"
import { Campaign } from "@/app/campaigns/_types/domain"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Lock } from "lucide-react"

interface CampaignCardProps {
    campaign: Campaign
    className?: string
    clickable?: boolean
}

export function CampaignCard({ campaign, className = "", clickable = true }: CampaignCardProps) {
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

    const isFunded = campaign.status === "funded" || campaign.status === "completed"
    const isClickable = clickable && campaign.status === "active"

    const cardClassName = `group flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 ${isClickable ? "hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] cursor-pointer" : "cursor-default opacity-90"
        } ${className}`

    const cardContent = (
        <>
            <div className="relative">
                {isFunded && (
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                        <Badge className="bg-amber-500 text-white text-[10px] sm:text-xs flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Funded
                        </Badge>
                    </div>
                )}

                {/* Campaign Image */}
                <div className="relative w-full aspect-4/3 sm:h-44 lg:h-48 bg-muted overflow-hidden">
                    <Image
                        src={campaign.coverImage}
                        alt={campaign.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                </div>
            </div>

            <div className="p-3 sm:p-4 flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-bold text-sm sm:text-base lg:text-lg text-card-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {campaign.title.toUpperCase()}
                </h3>

                {/* Category */}
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{campaign.category}</p>

                {/* Category Tagline */}
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                    {campaign.categoryTagline}
                </p>
                <div className="mt-auto">

                    {/* Returns and Duration */}
                    <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4">
                        <div>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">Expected Returns</p>
                            <p className="text-xs sm:text-sm font-semibold text-primary">
                                {campaign.annualizedReturn}
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">Duration</p>
                            <p className="text-xs sm:text-sm font-semibold text-card-foreground">{campaign.durationMonths} months</p>
                        </div>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-3 sm:mb-4">
                        <div className="flex justify-between items-baseline mb-1.5 sm:mb-2">
                            <span className="text-[10px] sm:text-sm font-semibold text-card-foreground">
                                {campaign.raisedPercentage.toFixed(0)}% RAISED
                            </span>
                            <span className="text-[10px] sm:text-xs text-muted-foreground">
                                Target: {formatCurrency(campaign.targetAmount)}
                            </span>
                        </div>
                        <Progress value={campaign.raisedPercentage} className="h-1.5 sm:h-2" />
                    </div>


                    {/* Days Left */}
                    <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-border">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                            <span className="text-[10px] sm:text-sm font-medium text-card-foreground">
                                {isFunded ? "FUNDED" : `${campaign.daysLeft} DAYS LEFT`}
                            </span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-primary font-medium group-hover:underline">
                            Details →
                        </span>
                    </div>
                </div>
            </div>
        </>
    )

    if (isClickable) {
        return (
            <Link href={`/campaigns/${campaign.slug}`} className={cardClassName}>
                {cardContent}
            </Link>
        )
    }

    return (
        <div className={cardClassName}>
            {cardContent}
        </div>
    )
}
