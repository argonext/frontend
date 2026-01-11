/**
 * Campaign Constants
 */

export const CAMPAIGN_CATEGORIES = [
    "All",
    "Transport & Logistics",
    "Electric and Electronics",
    "B2B Commodity Trading",
    "Clothing wholesale",
    "Livestock",
    "Organic Food Business",
] as const;

export const CAMPAIGN_STATUSES = {
    ACTIVE: "active",
    FUNDED: "funded",
    COMPLETED: "completed",
} as const;

export const ITEMS_PER_PAGE = 12;
