/**
 * Campaign API Payload Types
 */

import type { RiskGrade } from './domain';

export interface CampaignFiltersPayload {
    category?: string
    status?: string
    riskGrade?: RiskGrade
    search?: string
    page?: number
    limit?: number
}
