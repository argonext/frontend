export const SHARIAH_PRINCIPLES = [
    {
        icon: "shield-check",
        title: "No Interest (Riba)",
        description: "All transactions are free from interest-based lending and borrowing, ensuring compliance with Islamic principles.",
    },
    {
        icon: "trending-up",
        title: "Risk Sharing",
        description: "Investors share both profits and risks with businesses, creating a fair and ethical partnership.",
    },
    {
        icon: "search",
        title: "Transparency",
        description: "Complete disclosure of all terms, conditions, and business operations to all parties involved.",
    },
    {
        icon: "check-circle",
        title: "Halal Activities",
        description: "Only businesses engaged in permissible (halal) activities according to Islamic law are financed.",
    },
] as const;

export const CONTRACT_TYPES = [
    {
        name: "Mudarabah",
        description: "Profit-sharing partnership where AgroNext provides capital and the business provides expertise.",
        applications: [
            "Work order financing",
            "Business expansion",
            "Seasonal agricultural projects",
        ],
        profitSharing: "Agreed ratio (e.g., 60:40)",
    },
    {
        name: "Musharakah",
        description: "Joint venture where all parties contribute capital and share profits/losses proportionally.",
        applications: [
            "Long-term projects",
            "Equipment purchase",
            "Business partnerships",
        ],
        profitSharing: "Based on capital contribution",
    },
    {
        name: "Murabaha",
        description: "Cost-plus financing where AgroNext purchases goods and sells them to the business at an agreed markup.",
        applications: [
            "Raw material purchase",
            "Inventory financing",
            "Asset acquisition",
        ],
        profitSharing: "Fixed markup percentage",
    },
    {
        name: "Ijarah",
        description: "Islamic leasing where AgroNext purchases and leases equipment to businesses for a rental fee.",
        applications: [
            "Machinery leasing",
            "Equipment rental",
            "Vehicle financing",
        ],
        profitSharing: "Fixed rental amount",
    },
] as const;

export const SHARIAH_BOARD_MEMBERS = [
    {
        name: "Sheikh Mohammad Ali",
        role: "Chairman, Shariah Supervisory Board",
        credentials: "AAOIFI Certified Shariah Advisor & Auditor",
        experience: "20+ years in Islamic Finance",
    },
    {
        name: "Dr. Fatima Rahman",
        role: "Shariah Advisor",
        credentials: "Ph.D. in Islamic Finance, CIMA",
        experience: "15+ years in Shariah Advisory",
    },
    {
        name: "Mufti Abdul Karim",
        role: "Shariah Auditor",
        credentials: "Darul Uloom Graduate, AAOIFI Certified",
        experience: "18+ years in Shariah Audit",
    },
] as const;

export const COMPLIANCE_PROCESS = [
    {
        step: 1,
        title: "Business Screening",
        description: "Every business undergoes rigorous screening to ensure activities are 100% halal and compliant.",
    },
    {
        step: 2,
        title: "Contract Review",
        description: "Our Shariah board reviews and approves all contracts before they are offered to investors.",
    },
    {
        step: 3,
        title: "Ongoing Monitoring",
        description: "Continuous monitoring of all funded projects to ensure ongoing Shariah compliance.",
    },
    {
        step: 4,
        title: "Periodic Audits",
        description: "Regular independent audits by qualified Shariah auditors to verify all operations.",
    },
] as const;
