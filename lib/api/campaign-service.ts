import { apiClient } from "./axios-instance"
import { Campaign, CampaignFilters, CampaignResponse } from "@/lib/types/campaign"
import { dummyCampaigns, getCampaignBySlug, getCampaignById, getActiveCampaigns, getFeaturedCampaigns } from "@/lib/data/campaigns"

// Campaign API Service
class CampaignService {
    // Get all campaigns with optional filters
    async getCampaigns(filters?: CampaignFilters): Promise<CampaignResponse> {
        try {
            // TODO: Uncomment when API is ready
            // const response = await apiClient.get<CampaignResponse>("/campaigns", {
            //   params: filters,
            // })
            // return response.data

            // Using dummy data for now
            let filteredCampaigns = [...dummyCampaigns]

            if (filters?.category && filters.category !== "All") {
                filteredCampaigns = filteredCampaigns.filter(
                    (c) => c.category === filters.category
                )
            }

            if (filters?.status && filters.status !== "All") {
                filteredCampaigns = filteredCampaigns.filter(
                    (c) => c.status === filters.status
                )
            }

            if (filters?.riskGrade) {
                filteredCampaigns = filteredCampaigns.filter(
                    (c) => c.riskGrade === filters.riskGrade
                )
            }

            if (filters?.search) {
                const searchLower = filters.search.toLowerCase()
                filteredCampaigns = filteredCampaigns.filter(
                    (c) =>
                        c.title.toLowerCase().includes(searchLower) ||
                        c.businessName.toLowerCase().includes(searchLower) ||
                        c.category.toLowerCase().includes(searchLower)
                )
            }

            return {
                data: filteredCampaigns,
                total: filteredCampaigns.length,
                page: 1,
                limit: filteredCampaigns.length,
            }
        } catch (error) {
            console.error("Error fetching campaigns:", error)
            throw error
        }
    }

    // Get campaign by slug
    async getCampaignBySlug(slug: string): Promise<Campaign | null> {
        try {
            // TODO: Uncomment when API is ready
            // const response = await apiClient.get<Campaign>(`/campaigns/slug/${slug}`)
            // return response.data

            // Using dummy data for now
            const campaign = getCampaignBySlug(slug)
            return campaign || null
        } catch (error) {
            console.error("Error fetching campaign by slug:", error)
            throw error
        }
    }

    // Get campaign by ID
    async getCampaignById(id: string): Promise<Campaign | null> {
        try {
            // TODO: Uncomment when API is ready
            // const response = await apiClient.get<Campaign>(`/campaigns/${id}`)
            // return response.data

            // Using dummy data for now
            const campaign = getCampaignById(id)
            return campaign || null
        } catch (error) {
            console.error("Error fetching campaign by ID:", error)
            throw error
        }
    }

    // Get featured campaigns for homepage
    async getFeaturedCampaigns(limit: number = 4): Promise<Campaign[]> {
        try {
            // TODO: Uncomment when API is ready
            // const response = await apiClient.get<Campaign[]>("/campaigns/featured", {
            //   params: { limit },
            // })
            // return response.data

            // Using dummy data for now
            return getFeaturedCampaigns(limit)
        } catch (error) {
            console.error("Error fetching featured campaigns:", error)
            throw error
        }
    }

    // Get active campaigns
    async getActiveCampaigns(): Promise<Campaign[]> {
        try {
            // TODO: Uncomment when API is ready
            // const response = await apiClient.get<Campaign[]>("/campaigns/active")
            // return response.data

            // Using dummy data for now
            return getActiveCampaigns()
        } catch (error) {
            console.error("Error fetching active campaigns:", error)
            throw error
        }
    }
}

export const campaignService = new CampaignService()
