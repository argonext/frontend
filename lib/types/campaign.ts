// Campaign Types based on Biniyog.io structure

export type RiskGrade = "A" | "A+" | "B" | "B+" | "C"

export interface Campaign {
    id: string
    slug: string
    title: string
    businessName: string
    category: string
    categoryTagline: string
    coverImage: string
    riskGrade: RiskGrade

    // Financial Details
    targetAmount: number
    raisedAmount: number
    raisedPercentage: number
    processingAmount?: number // Amount being processed
    minInvestment: number

    // Returns
    annualizedReturn: string // e.g., "15%", "14.5% - 18.5%"
    durationMonths: number
    totalReturnPercentage: number // Calculated return for the duration

    // Timeline
    daysLeft: number
    startDate: string
    endDate: string

    // Status
    status: "active" | "funded" | "completed"

    // Location & Structure
    location?: string // e.g., "Dhaka, Bangladesh"
    investmentStructure?: string // e.g., "MURABAHA", "MUSHARAKA"

    // Gallery
    galleryImages?: string[]

    // Additional Info
    investorsCount: number
    description?: string
    highlights?: string[]
    businessDetails?: string
    useOfFunds?: string[]
    financials?: {
        revenue?: string
        profit?: string
        assets?: string
    }
    documents?: {
        name: string
        url: string
        type: "business" | "owner" | "shariah" | "contract" | "risks"
    }[]

    // Detailed Sections
    businessSection?: {
        overview?: string
        history?: string
        marketOpportunity?: string
        competitiveAdvantage?: string
    }
    ownerSection?: {
        name?: string
        background?: string
        experience?: string
    }
    shariahSection?: {
        structure?: string
        compliance?: string
        advisor?: string
    }
    contractSection?: {
        terms?: string
        profitSharing?: string
        exitStrategy?: string
    }
    risksSection?: {
        marketRisks?: string[]
        businessRisks?: string[]
        mitigationStrategy?: string
    }
    disclaimer?: string
}

export interface CampaignFilters {
    category?: string
    status?: string
    riskGrade?: RiskGrade
    search?: string
}

export interface CampaignResponse {
    data: Campaign[]
    total: number
    page: number
    limit: number
}
