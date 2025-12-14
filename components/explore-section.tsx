"use client"

import Link from "next/link"
import {
    Leaf, Shield, FileText, HelpCircle, Building,
    Phone, Smartphone, TrendingUp, ArrowRight
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const exploreLinks = [
    {
        title: "Browse Campaigns",
        description: "Explore active investment opportunities in agriculture",
        href: "/campaigns",
        icon: Leaf,
        gradient: "from-primary/20 to-chart-4/20",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
    },
    {
        title: "Shariah Compliance",
        description: "Learn about our Islamic finance principles",
        href: "/shariah",
        icon: Shield,
        gradient: "from-accent/20 to-orange/20",
        iconBg: "bg-accent/10",
        iconColor: "text-accent",
    },
    {
        title: "Get Financing",
        description: "Apply for Shariah-compliant business financing",
        href: "/apply",
        icon: TrendingUp,
        gradient: "from-purple/20 to-pink/20",
        iconBg: "bg-purple/10",
        iconColor: "text-purple",
    },
    {
        title: "Project Reports",
        description: "View completed project reports and returns",
        href: "/reports",
        icon: FileText,
        gradient: "from-chart-4/20 to-primary/20",
        iconBg: "bg-chart-4/10",
        iconColor: "text-chart-4",
    },
    {
        title: "About Us",
        description: "Our story, mission, and leadership team",
        href: "/about",
        icon: Building,
        gradient: "from-primary/20 to-accent/20",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
    },
    {
        title: "FAQ",
        description: "Find answers to common questions",
        href: "/faq",
        icon: HelpCircle,
        gradient: "from-accent/20 to-purple/20",
        iconBg: "bg-accent/10",
        iconColor: "text-accent",
    },
    {
        title: "Contact Us",
        description: "Get in touch with our team",
        href: "/contact",
        icon: Phone,
        gradient: "from-purple/20 to-chart-4/20",
        iconBg: "bg-purple/10",
        iconColor: "text-purple",
    },
    {
        title: "Get the App",
        description: "Download our mobile app for iOS & Android",
        href: "/app",
        icon: Smartphone,
        gradient: "from-chart-4/20 to-accent/20",
        iconBg: "bg-chart-4/10",
        iconColor: "text-chart-4",
    },
]

export function ExploreSection() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-36 sm:w-72 h-36 sm:h-72 bg-accent/5 rounded-full blur-3xl" />

            <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-8 sm:mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                        Explore <span className="gradient-text">AgroNext</span>
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                        Discover everything our platform has to offer
                    </p>
                </div>

                <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    {exploreLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="group bg-card border border-border rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${link.iconBg} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                                <link.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${link.iconColor}`} />
                            </div>
                            <h3 className="font-semibold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors flex items-center gap-1">
                                {link.title}
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                                {link.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
