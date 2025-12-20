"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, FileText, Users, Award, BookOpen, ExternalLink, Leaf } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const shariahPrinciples = [
    {
        title: "No Riba (Interest)",
        description: "All our financing contracts are free from interest. We use profit-sharing and asset-based models.",
        icon: Shield,
    },
    {
        title: "Ethical Business",
        description: "We only finance businesses engaged in halal activities that benefit society.",
        icon: CheckCircle,
    },
    {
        title: "Transparent Contracts",
        description: "All terms are clearly defined upfront with no hidden charges or ambiguous conditions.",
        icon: FileText,
    },
    {
        title: "Risk Sharing",
        description: "Both investors and businesses share in the profits and risks of the venture.",
        icon: Users,
    },
]

const contractTypes = [
    {
        name: "Mudarabah",
        description: "A profit-sharing partnership where one party provides capital and the other provides expertise and labor.",
        usedFor: "Work Order / Order-based Financing",
    },
    {
        name: "Musharakah",
        description: "A joint venture where all parties contribute capital and share profits/losses according to agreed ratios.",
        usedFor: "Business Expansion & Equity Financing",
    },
    {
        name: "Murabaha",
        description: "A cost-plus financing where assets are purchased and sold at a marked-up price with disclosed profit margin.",
        usedFor: "Raw Material Purchase Financing",
    },
    {
        name: "Ijarah",
        description: "An Islamic lease where the lessor retains ownership while the lessee uses the asset for a rental fee.",
        usedFor: "Equipment & Outlet Expansion Financing",
    },
]

const advisors = [
    {
        name: "Mufti Abu Bakar Siddique Nabil",
        title: "Researcher & Corporate Shariah Consultant",
        organization: "IFA Consultancy Ltd.",
        image: "/advisors/nabil.jpg",
    },
]

export default function ShariahPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: principlesRef, isVisible: principlesVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: contractsRef, isVisible: contractsVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-hero-bg pt-24 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div ref={heroRef} className={`relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        WE ARE STRICTLY
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-hero-foreground mb-4 sm:mb-6">
                        <span className="gradient-text">SHARIAH</span> BASED
                    </h1>
                    <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Shariah Compliance is not merely a function here at AgroNext. We strictly hold our business conduct according to Islamic Shariah principles and values.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://ifacbd.com" target="_blank">
                            <Button className="gradient-bg hover:opacity-90 text-white px-8 py-3 h-auto">
                                <Award className="w-5 h-5 mr-2" />
                                View Shariah Certificate
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How We Manage Shariah */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            How Do We Manage <span className="gradient-text">Shariah?</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                AgroNext has been engaged with IFA Consultancy, a Bangladesh-based Shariah advisory firm, which aids us in adhering to best practices and guidelines on Shariah governance.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                In this capacity, IFAC facilitates Shariah-related discussions, product research, and Shariah reporting, collaborating with relevant stakeholders to reinforce Shariah principles across the organisation.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                When businesses apply for financing, AgroNext thoroughly checks whether their business activity and use of funds are in line with the principles of Shariah. That&apos;s a prerequisite for going live on our platform as an investment opportunity.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our team is trained to ensure that these values are regularly and consistently met. We have a committed Shariah Supervisory Board that oversees all processes, conducts, and contracts; recommending any changes deemed necessary to meet Islamic Shariah compliance rules.
                            </p>
                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                                <p className="text-foreground font-medium italic">
                                    &quot;We run our business without compromising on our faith and religious values.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold">Shariah Made Simple</h3>
                                    <p className="text-muted-foreground text-sm">Our compliance process</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                                Our Shariah supervisory board, along with our team, ensures Shariah compliance by:
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    "Verifying the platform's compliance with the advisors' decisions across all processes and contracts.",
                                    "Clarifying Shariah provisions in all financial and investment transactions on the platform.",
                                    "Receiving legal-related feedback, whether inside or outside the platform.",
                                    "Providing advice and guidance to maintain Shariah-compliance throughout all platform transactions."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                        </div>
                                        <p className="text-xs sm:text-sm text-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section ref={principlesRef} className="py-16 sm:py-24 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Our Core <span className="gradient-text">Principles</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Every investment on our platform adheres to these fundamental Islamic finance principles.
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${principlesVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        {shariahPrinciples.map((principle, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                                    <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold mb-2">{principle.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contract Types */}
            <section ref={contractsRef} className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Shariah <span className="gradient-text">Contract Types</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We utilize various Islamic finance contract models depending on the nature of the financing need.
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ${contractsVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        {contractTypes.map((contract, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold">{contract.name}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{contract.description}</p>
                                <div className="bg-muted rounded-lg px-3 sm:px-4 py-2">
                                    <p className="text-xs sm:text-sm">
                                        <span className="text-muted-foreground">Used for: </span>
                                        <span className="text-primary font-medium">{contract.usedFor}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shariah Advisor Section */}
            <section className="py-16 sm:py-24 bg-hero-bg">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-hero-foreground mb-4">
                            Our Shariah <span className="gradient-text">Guidelines</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <p className="text-hero-foreground/80 italic mb-4">
                                        &quot;As Shariah advisors, we have been working alongside AgroNext for the past years. Every step of their investment model is documented, verified, and aligned with Shariah principles. They have consistently demonstrated a level of transparency and dedication to Shariah processes that is exemplary in today&apos;s financial landscape.&quot;
                                    </p>
                                    <p className="text-hero-foreground font-semibold">Mufti Abu Bakar Siddique Nabil</p>
                                    <p className="text-hero-foreground/60 text-sm">Researcher & Corporate Shariah Consultant</p>
                                    <p className="text-primary text-sm">IFA Consultancy Ltd.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold text-hero-foreground mb-4">About IFA Consultancy</h3>
                                <p className="text-hero-foreground/70 mb-4">
                                    IFA Consultancy is a pioneer institution in Bangladesh that provides training and consultancy on Halal & Islamic Finance, aiming towards a Halal & Sustainable Economy.
                                </p>
                                <p className="text-hero-foreground/70 mb-4">
                                    IFAC&apos;s team of experts includes Certified Shariah Advisors & Auditors from Bahrain-based AAOIFI, Certified Muftis from recognised Shariah institutions, and other globally recognised Shariah scholars, Islamic Finance experts and practitioners.
                                </p>
                                <Link href="https://ifacbd.com" target="_blank" className="inline-flex items-center gap-2 text-primary hover:underline">
                                    Visit IFA Consultancy
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-hero-foreground mb-2">About AAOIFI</h3>
                                <p className="text-hero-foreground/70 text-sm">
                                    AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) is a Bahrain-based international autonomous non-profit body that prepares governance, ethics, and Shariah standards for Islamic financial institutions worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-primary">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Leaf className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to Invest the Halal Way?
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Join thousands of investors who trust AgroNext for Shariah-compliant agricultural investments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/app">
                            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 h-auto font-semibold">
                                Get the App
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
