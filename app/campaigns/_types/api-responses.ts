/**
 * Campaign API Response Types
 */

import type { Campaign, Project } from './domain';

export interface ProjectsApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Project[];
}

export interface CampaignResponse {
    data: Campaign[]
    total: number
    page: number
    limit: number
}
