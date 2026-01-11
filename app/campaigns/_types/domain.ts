/**
 * Campaign Domain Types
 * All TypeScript interfaces and types related to campaigns
 */

// API Response Project Structure
export interface Project {
    project_id: number;
    project_title: string;
    start_date: string;
    project_location: string;
    category: string;
    project_status: 'open' | 'completed' | 'funded';
    project_photo_url: string;
    duration: number;
    investment_goal: string;
    profit_max_percent: string;
    profit_min_percent: string;
    available_slots: number;
    unit_price: string;
}

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
    processingAmount?: number
    minInvestment: number
    availableSlots: number

    // Returns
    annualizedReturn: string
    durationMonths: number
    totalReturnPercentage: number
    extraProfitActivated?: boolean
    extraProfitMessage?: string

    // Timeline
    daysLeft: number
    startDate: string
    endDate: string

    // Status
    status: "active" | "funded" | "completed"

    // Location & Structure
    location?: string
    investmentStructure?: string

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
