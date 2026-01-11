/**
 * Campaign API Service
 * Handles all API calls related to campaigns
 */

import { apiClient } from "@/lib/api/axios-instance";
import type { Campaign, CampaignFilters, Project } from '../_types/domain';
import type { CampaignResponse, ProjectsApiResponse } from '../_types/api-responses';
import { projectToCampaign } from '../_utils/helpers';

const API_BASE_URL = 'https://api.agronextbd.com';

class CampaignService {
    /**
     * Get all campaigns with optional filters
     */
    async getCampaigns(filters?: CampaignFilters): Promise<CampaignResponse> {
        try {
            const params: Record<string, any> = {
                page: 1,
                page_size: 20,
            };

            // Map status filter to API project_status
            if (filters?.status) {
                if (filters.status === 'active') {
                    params.project_status = 'open';
                } else if (filters.status !== 'All') {
                    params.project_status = filters.status;
                }
            } else {
                // Default to open projects
                params.project_status = 'open';
            }

            const response = await fetch(
                `${API_BASE_URL}/projects/?${new URLSearchParams(params)}`,
                {
                    next: { revalidate: 60 }, // Revalidate every 60 seconds
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch campaigns');
            }

            const data: ProjectsApiResponse = await response.json();

            // Convert projects to campaigns
            let campaigns = data.results.map(projectToCampaign);

            // Apply client-side filters
            if (filters?.category && filters.category !== "All") {
                campaigns = campaigns.filter((c) => c.category === filters.category);
            }

            if (filters?.riskGrade) {
                campaigns = campaigns.filter((c) => c.riskGrade === filters.riskGrade);
            }

            if (filters?.search) {
                const searchLower = filters.search.toLowerCase();
                campaigns = campaigns.filter(
                    (c) =>
                        c.title.toLowerCase().includes(searchLower) ||
                        c.businessName.toLowerCase().includes(searchLower) ||
                        c.category.toLowerCase().includes(searchLower)
                );
            }

            return {
                data: campaigns,
                total: data.count,
                page: 1,
                limit: params.page_size,
            };
        } catch (error) {
            console.error("Error fetching campaigns:", error);
            throw error;
        }
    }

    /**
     * Get campaign by slug
     */
    async getCampaignBySlug(slug: string): Promise<Campaign | null> {
        try {
            // Extract project ID from slug (format: title-{id})
            const idMatch = slug.match(/-(\d+)$/);
            if (!idMatch) {
                return null;
            }

            const projectId = idMatch[1];
            return await this.getCampaignById(projectId);
        } catch (error) {
            console.error("Error fetching campaign by slug:", error);
            throw error;
        }
    }

    /**
     * Get campaign by ID
     */
    async getCampaignById(id: string): Promise<Campaign | null> {
        try {
            // Fetch all campaigns and find by ID
            // TODO: Update when API supports single project endpoint
            const openResponse = await fetch(
                `${API_BASE_URL}/projects/?project_status=open&page=1&page_size=100`,
                { next: { revalidate: 60 } }
            );

            if (openResponse.ok) {
                const openData: ProjectsApiResponse = await openResponse.json();
                const project = openData.results.find(p => p.project_id.toString() === id);
                if (project) {
                    return projectToCampaign(project);
                }
            }

            // Check completed projects
            const completedResponse = await fetch(
                `${API_BASE_URL}/projects/?project_status=completed&page=1&page_size=100`,
                { next: { revalidate: 60 } }
            );

            if (completedResponse.ok) {
                const completedData: ProjectsApiResponse = await completedResponse.json();
                const project = completedData.results.find(p => p.project_id.toString() === id);
                if (project) {
                    return projectToCampaign(project);
                }
            }

            return null;
        } catch (error) {
            console.error("Error fetching campaign by ID:", error);
            throw error;
        }
    }

    /**
     * Get featured campaigns for homepage
     */
    async getFeaturedCampaigns(limit: number = 4): Promise<Campaign[]> {
        try {
            const response = await fetch(
                `${API_BASE_URL}/projects/?project_status=open&page=1&page_size=${limit}`,
                {
                    next: { revalidate: 60 },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch featured campaigns');
            }

            const data: ProjectsApiResponse = await response.json();
            return data.results.map(projectToCampaign);
        } catch (error) {
            console.error("Error fetching featured campaigns:", error);
            throw error;
        }
    }

    /**
     * Get active campaigns
     */
    async getActiveCampaigns(): Promise<Campaign[]> {
        try {
            const response = await fetch(
                `${API_BASE_URL}/projects/?project_status=open&page=1&page_size=20`,
                {
                    next: { revalidate: 60 },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch active campaigns');
            }

            const data: ProjectsApiResponse = await response.json();
            return data.results.map(projectToCampaign);
        } catch (error) {
            console.error("Error fetching active campaigns:", error);
            throw error;
        }
    }

    /**
     * Get completed/funded campaigns
     */
    async getFundedCampaigns(): Promise<Campaign[]> {
        try {
            const response = await fetch(
                `${API_BASE_URL}/projects/?project_status=completed&page=1&page_size=20`,
                {
                    next: { revalidate: 60 },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch funded campaigns');
            }

            const data: ProjectsApiResponse = await response.json();
            return data.results.map(projectToCampaign);
        } catch (error) {
            console.error("Error fetching funded campaigns:", error);
            throw error;
        }
    }
}

export const campaignService = new CampaignService();
