export const CAMPAIGN_CATEGORIES = [
    "All",
    "Transport & Logistics",
    "Electric and Electronics",
    "B2B Commodity Trading",
    "Clothing wholesale",
    "Livestock",
    "Organic Food Business",
] as const;

export const ITEMS_PER_PAGE = 12;

export const RISK_GRADE_COLORS = {
    "A+": "bg-green-100 text-green-800 border-green-300",
    "A": "bg-green-50 text-green-700 border-green-200",
    "B+": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "B": "bg-yellow-50 text-yellow-700 border-yellow-200",
    "C": "bg-orange-100 text-orange-800 border-orange-300",
} as const;
