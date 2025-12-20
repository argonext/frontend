"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Users, Target, Award, Heart, Leaf, TrendingUp, Shield,
    Globe, Lightbulb, Building, CheckCircle, Linkedin, Twitter,
    ArrowRight
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
    { value: "৳100Cr+", label: "Total Financed" },
    { value: "150+", label: "Businesses Funded" },
    { value: "10,000+", label: "Active Investors" },
    { value: "15%+", label: "Avg. Returns" },
]

const values = [
    {
        icon: Shield,
        title: "Shariah Compliance",
        description: "Every transaction follows Islamic finance principles, verified by our Shariah advisory board."
    },
    {
        icon: Target,
        title: "Transparency",
        description: "Complete visibility into how funds are used, business performance, and profit distribution."
    },
    {
        icon: Heart,
        title: "Impact First",
        description: "We prioritize investments that create real social and economic value for communities."
    },
    {
        icon: Users,
        title: "Community Driven",
        description: "Building a community of investors and businesses united by ethical values."
    },
]

const milestones = [
    {
        year: "2020",
        title: "The Beginning",
        description: "AgroNext was founded with a vision to transform agricultural financing in Bangladesh through ethical investment."
    },
    {
        year: "2021",
        title: "First Milestone",
        description: "Successfully funded 10 agricultural businesses and crossed ৳10 Crore in total financing."
    },
    {
        year: "2022",
        title: "Rapid Growth",
        description: "Expanded to 50+ businesses funded, introduced multiple Shariah-compliant contract types."
    },
    {
        year: "2023",
        title: "Platform Evolution",
        description: "Launched mobile app, reached 5,000+ investors, and diversified into agro-processing sector."
    },
    {
        year: "2024",
        title: "Market Leader",
        description: "Became Bangladesh's leading Shariah-compliant agricultural investment platform with ৳100Cr+ financed."
    },
]

const team = [
    {
        name: "Ahmed Rahman",
        role: "Founder & CEO",
        image: "/team/ceo.jpg",
        linkedin: "#",
        bio: "Former investment banker with 15+ years in Islamic finance"
    },
    {
        name: "Fatima Begum",
        role: "Chief Operating Officer",
        image: "/team/coo.jpg",
        linkedin: "#",
        bio: "Operations expert with deep expertise in agricultural supply chains"
    },
    {
        name: "Karim Hassan",
        role: "Chief Technology Officer",
        image: "/team/cto.jpg",
        linkedin: "#",
        bio: "Tech veteran who has built fintech platforms serving millions"
    },
    {
        name: "Nadia Islam",
        role: "Head of Investments",
        image: "/team/head-investments.jpg",
        linkedin: "#",
        bio: "Former fund manager with extensive due diligence experience"
    },
]

const partners = [
    "IFA Consultancy",
    "Bangladesh Bank",
    "SME Foundation",
    "IDLC Finance",
    "Grameenphone",
    "bKash"
]

export default function AboutPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-hero-bg pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div ref={heroRef} className={`relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                        OUR STORY
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-hero-foreground mb-4 sm:mb-6">
                        Transforming Agriculture Through <span className="gradient-text">Ethical Investment</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8">
                        AgroNext is Bangladesh&apos;s leading Shariah-compliant agricultural investment platform, connecting conscious investors with impactful businesses.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-card border-y border-border py-6 sm:py-8">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section ref={missionRef} className="py-12 sm:py-16 lg:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 ${missionVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h2>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                To democratize access to ethical agricultural investments while empowering SMEs with Shariah-compliant financing. We believe that everyone deserves the opportunity to grow their wealth while making a positive impact on society and the environment.
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h2>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                To become the most trusted and impactful Islamic finance platform in South Asia, driving sustainable growth in agriculture while delivering exceptional returns to our investors through ethical business practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                            Our Core <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                            These principles guide everything we do at AgroNext.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section ref={timelineRef} className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            From a small idea to Bangladesh&apos;s leading agricultural investment platform.
                        </p>
                    </div>

                    <div className={`relative ${timelineVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        {/* Timeline line */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

                        <div className="space-y-8 lg:space-y-0">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative lg:flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                >
                                    <div className="lg:w-1/2 lg:px-8">
                                        <div className={`bg-card border border-border rounded-2xl p-6 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                                            }`}>
                                            <span className="text-primary font-bold text-lg">{milestone.year}</span>
                                            <h3 className="text-xl font-semibold mt-2 mb-2">{milestone.title}</h3>
                                            <p className="text-muted-foreground">{milestone.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 gradient-bg rounded-full border-4 border-background" />

                                    <div className="lg:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-24 bg-hero-bg">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-hero-foreground mb-4">
                            Meet Our <span className="gradient-text">Leadership</span>
                        </h2>
                        <p className="text-hero-foreground/70 max-w-2xl mx-auto">
                            A team of experienced professionals passionate about ethical finance and agriculture.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all"
                            >
                                <div className="w-16 h-16 sm:w-24 sm:h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-hero-foreground">{member.name}</h3>
                                <p className="text-primary text-xs sm:text-sm mb-2">{member.role}</p>
                                <p className="text-hero-foreground/60 text-xs sm:text-sm mb-3 sm:mb-4">{member.bio}</p>
                                <Link href={member.linkedin} className="inline-flex items-center gap-2 text-hero-foreground/70 hover:text-primary">
                                    <Linkedin className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Why <span className="gradient-text">AgroNext</span> Exists
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Bangladesh has a thriving agricultural sector with thousands of SMEs that struggle to access financing. Traditional banking often fails them with high interest rates, complex requirements, and slow processes.
                            </p>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                At the same time, millions of people want to invest their savings in ethical, Shariah-compliant opportunities but have limited options beyond traditional bank deposits.
                            </p>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                AgroNext bridges this gap by creating a platform where conscious investors can fund agricultural businesses through Islamic finance contracts, generating attractive returns while making a real impact.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Interest-free financing for agricultural SMEs",
                                    "Ethical investment opportunities for the public",
                                    "Complete Shariah compliance in all transactions",
                                    "Technology-driven transparency and efficiency",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                                <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                                <h4 className="text-sm sm:text-base font-semibold mb-1">64 Districts</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground">Coverage across Bangladesh</p>
                            </div>
                            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                                <h4 className="text-sm sm:text-base font-semibold mb-1">100% Track Record</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground">On-time returns delivery</p>
                            </div>
                            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                                <h4 className="text-sm sm:text-base font-semibold mb-1">150+ Businesses</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground">Successfully funded</p>
                            </div>
                            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                                <h4 className="text-sm sm:text-base font-semibold mb-1">AAOIFI Certified</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground">Shariah compliant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 sm:py-24 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Our <span className="gradient-text">Partners</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We work with leading organizations to deliver the best experience.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl px-8 py-4 font-medium text-muted-foreground hover:border-primary/30 transition-all"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-primary">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Join the AgroNext Journey
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Whether you&apos;re an investor looking for ethical opportunities or a business seeking financing, we&apos;re here to help you grow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/campaigns">
                            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 h-auto font-semibold">
                                Start Investing
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/apply">
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 h-auto">
                                Get Financing
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
