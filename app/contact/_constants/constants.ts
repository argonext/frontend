export const CONTACT_METHODS = [
    {
        icon: "phone",
        title: "Phone",
        details: ["+880 1700-000000", "+880 2-9876543"],
        action: "Call us",
    },
    {
        icon: "mail",
        title: "Email",
        details: ["support@agronext.com", "info@agronext.com"],
        action: "Send email",
    },
    {
        icon: "map-pin",
        title: "Office",
        details: ["House 123, Road 12", "Banani, Dhaka 1213"],
        action: "Get directions",
    },
    {
        icon: "clock",
        title: "Business Hours",
        details: ["Sunday - Thursday", "9:00 AM - 6:00 PM"],
        action: "View schedule",
    },
] as const;

export const OFFICES = [
    {
        city: "Dhaka",
        address: "House 123, Road 12, Banani, Dhaka 1213",
        phone: "+880 1700-000000",
        email: "dhaka@agronext.com",
    },
    {
        city: "Chittagong",
        address: "Plot 45, CDA Avenue, Nasirabad, Chittagong",
        phone: "+880 1800-000000",
        email: "chittagong@agronext.com",
    },
    {
        city: "Sylhet",
        address: "Green Tower, Zindabazar, Sylhet 3100",
        phone: "+880 1900-000000",
        email: "sylhet@agronext.com",
    },
] as const;

export const SOCIAL_LINKS = [
    { platform: "facebook", url: "https://facebook.com/agronext" },
    { platform: "twitter", url: "https://twitter.com/agronext" },
    { platform: "linkedin", url: "https://linkedin.com/company/agronext" },
    { platform: "instagram", url: "https://instagram.com/agronext" },
] as const;
