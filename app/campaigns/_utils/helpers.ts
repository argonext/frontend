/**
 * Campaign Helper Functions
 */

import type { RiskGrade, Project, Campaign } from '../_types/domain';

/**
 * Format currency in BDT format
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-BD", {
        style: "currency",
        currency: "BDT",
        minimumFractionDigits: 0,
    }).format(amount);
}

/**
 * Convert API Project to Campaign format
 */
export function projectToCampaign(project: Project): Campaign {
    const investmentGoal = parseFloat(project.investment_goal);
    const availableAmount = project.available_slots * parseFloat(project.unit_price);
    const raisedAmount = investmentGoal - availableAmount;
    const raisedPercentage = (raisedAmount / investmentGoal) * 100;

    // Calculate days left (assuming start_date is the deadline for simplicity)
    const endDate = new Date(project.start_date);
    const today = new Date();
    const daysLeft = Math.max(0, Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

    return {
        id: project.project_id.toString(),
        slug: `${project.project_title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${project.project_id}`,
        title: project.project_title,
        businessName: project.project_title,
        category: project.category,
        categoryTagline: project.project_location,
        coverImage: project.project_photo_url,
        riskGrade: 'B+', // Default risk grade - should come from API if available
        targetAmount: investmentGoal,
        raisedAmount: raisedAmount,
        raisedPercentage: raisedPercentage,
        processingAmount: 0,
        minInvestment: parseFloat(project.unit_price),
        availableSlots: project.available_slots,
        annualizedReturn: `${project.profit_min_percent}% - ${project.profit_max_percent}%`,
        durationMonths: Math.ceil(project.duration / 30),
        totalReturnPercentage: parseFloat(project.profit_max_percent),
        extraProfitActivated: false,
        daysLeft: daysLeft,
        startDate: project.start_date,
        endDate: project.start_date, // Using start_date as end_date for now
        status: project.available_slots === 0 ? 'funded' : (project.project_status === 'open' ? 'active' : project.project_status),
        location: project.project_location,
        investmentStructure: 'MUDARABAH', // Default - should come from API if available
        galleryImages: [project.project_photo_url],
        investorsCount: 0, // Should come from API if available
        description: `Invest in ${project.project_title} located in ${project.project_location}. Expected returns between ${project.profit_min_percent}% - ${project.profit_max_percent}% over ${project.duration} days.`,
    };
}

/**
 * Get risk grade color class
 */
export function getRiskGradeColor(grade: RiskGrade): string {
    const colorMap: Record<RiskGrade, string> = {
        "A+": "bg-green-500 text-white border-green-500",
        "A": "bg-green-400 text-white border-green-400",
        "B+": "bg-yellow-500 text-white border-yellow-500",
        "B": "bg-yellow-400 text-white border-yellow-400",
        "C": "bg-orange-500 text-white border-orange-500",
    };
    return colorMap[grade] || "bg-gray-500 text-white border-gray-500";
}

/**
 * Calculate days remaining
 */
export function calculateDaysLeft(endDate: string): number {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
