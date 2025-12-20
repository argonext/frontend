"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Rocket, CheckCircle, FileText, Users, Clock, Shield,
    TrendingUp, ArrowRight, Building, Leaf, Target, Award,
    Phone, Mail
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const eligibilityCriteria = [
    {
        title: "SME Business",
        description: "Your business must be a registered SME operating in Bangladesh.",
        icon: Building,
    },
    {
        title: "Halal Business",
        description: "Business activities must be Shariah-compliant and ethical.",
        icon: Shield,
    },
    {
        title: "Minimum Track Record",
        description: "At least 2 years of operating history with proper documentation.",
        icon: Clock,
    },
    {
        title: "Valid Trade License",
        description: "Active trade license and all necessary business registrations.",
        icon: FileText,
    },
    {
        title: "Clear Business Plan",
        description: "Well-defined use of funds and growth strategy.",
        icon: Target,
    },
    {
        title: "Financial Records",
        description: "Maintained financial records and bank statements.",
        icon: TrendingUp,
    },
]

const howItWorks = [
    {
        step: "01",
        title: "Submit Application",
        description: "Fill out our online application form with your business details and financing requirements.",
    },
    {
        step: "02",
        title: "Initial Review",
        description: "Our team reviews your application and conducts preliminary due diligence.",
    },
    {
        step: "03",
        title: "Documentation",
        description: "Submit required documents including financial statements, trade license, and business plan.",
    },
    {
        step: "04",
        title: "Due Diligence",
        description: "We conduct thorough verification including site visits and financial analysis.",
    },
    {
        step: "05",
        title: "Shariah Review",
        description: "Our Shariah board reviews and approves the contract structure.",
    },
    {
        step: "06",
        title: "Go Live",
        description: "Your campaign goes live for investors to fund your business growth.",
    },
]

const financingTypes = [
    {
        title: "Work Order Financing",
        description: "Get financing against confirmed work orders or purchase orders from reputable clients.",
        amount: "৳5 Lakh - ৳1 Crore",
        duration: "3-12 months",
        icon: FileText,
    },
    {
        title: "Raw Material Purchase",
        description: "Finance your raw material needs to fulfill large orders efficiently.",
        amount: "৳5 Lakh - ৳50 Lakh",
        duration: "3-6 months",
        icon: Leaf,
    },
    {
        title: "Business Expansion",
        description: "Expand your operations, open new outlets, or increase production capacity.",
        amount: "৳10 Lakh - ৳2 Crore",
        duration: "12-24 months",
        icon: TrendingUp,
    },
    {
        title: "Equipment Financing",
        description: "Acquire machinery and equipment needed for business growth.",
        amount: "৳10 Lakh - ৳1 Crore",
        duration: "12-36 months",
        icon: Building,
    },
]

const faqs = [
    {
        question: "What types of businesses can apply?",
        answer: "We finance SMEs across various sectors including agro-processing, manufacturing, retail, F&B, services, and more. The primary requirement is that the business must be Shariah-compliant."
    },
    {
        question: "How long does the approval process take?",
        answer: "The entire process typically takes 2-4 weeks from application to campaign launch, depending on the completeness of documentation and complexity of due diligence."
    },
    {
        question: "What documents are required?",
        answer: "Common requirements include trade license, TIN certificate, bank statements (12 months), financial statements, company registration documents, NID of directors, and work orders/contracts."
    },
    {
        question: "Is there any collateral required?",
        answer: "Requirements vary based on the financing amount and type. Some products may require post-dated cheques, personal guarantees, or asset security."
    },
    {
        question: "What are the profit rates?",
        answer: "Our expected profit rates typically range from 12-18% per annum depending on the risk profile, tenure, and type of financing."
    },
    {
        question: "Can I apply for multiple financing rounds?",
        answer: "Yes! Successful completion of previous financing rounds strengthens your profile for future applications."
    },
]

const stats = [
    { value: "৳100Cr+", label: "Total Financed" },
    { value: "150+", label: "Businesses Funded" },
    { value: "95%", label: "Success Rate" },
    { value: "14 Days", label: "Avg. Approval Time" },
]

export default function ApplyPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-hero-bg pt-24 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div ref={heroRef} className={`relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${heroVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Rocket className="w-4 h-4" />
                                BUSINESS FINANCING
                            </span>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-hero-foreground mb-4 sm:mb-6">
                                Grow Your Business with <span className="gradient-text">Shariah-Compliant</span> Financing
                            </h1>
                            <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                                Access working capital, expand operations, and fulfill large orders through our ethical, interest-free financing solutions designed for SMEs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#apply-form">
                                    <Button className="gradient-bg hover:opacity-90 text-white px-8 py-3 h-auto">
                                        Apply Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <Link href="tel:+8801XXX">
                                    <Button variant="outline" className="border-white/20 text-hero-foreground bg-white/10 hover:bg-white/20 px-8 py-3 h-auto">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Talk to Us
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                            <h3 className="text-lg sm:text-xl font-semibold text-hero-foreground mb-4 sm:mb-6">Quick Inquiry</h3>
                            <form className="space-y-3 sm:space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Business Name"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <select
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-sm sm:text-base text-hero-foreground/50 focus:outline-none focus:border-primary"
                                    >
                                        <option value="">Financing Amount Needed</option>
                                        <option value="5-10">৳5 - ৳10 Lakh</option>
                                        <option value="10-25">৳10 - ৳25 Lakh</option>
                                        <option value="25-50">৳25 - ৳50 Lakh</option>
                                        <option value="50-100">৳50 Lakh - ৳1 Crore</option>
                                        <option value="100+">Above ৳1 Crore</option>
                                    </select>
                                </div>
                                <div>
                                    <select
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-sm sm:text-base text-hero-foreground/50 focus:outline-none focus:border-primary"
                                    >
                                        <option value="">Financing Type</option>
                                        <option value="work-order">Work Order Financing</option>
                                        <option value="raw-material">Raw Material Purchase</option>
                                        <option value="expansion">Business Expansion</option>
                                        <option value="equipment">Equipment Financing</option>
                                    </select>
                                </div>
                                <Button className="w-full gradient-bg hover:opacity-90 text-white py-2.5 sm:py-3 h-auto text-sm sm:text-base">
                                    Submit Inquiry
                                </Button>
                            </form>
                        </div>
                    </div>
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

            {/* Financing Types */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Financing <span className="gradient-text">Solutions</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose the right financing type for your business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {financingTypes.map((type, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                                    <type.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold mb-2">{type.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{type.description}</p>
                                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Amount:</span>
                                        <span className="font-medium">{type.amount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Duration:</span>
                                        <span className="font-medium">{type.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="py-16 sm:py-24 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Eligibility <span className="gradient-text">Criteria</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Check if your business qualifies for our financing programs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {eligibilityCriteria.map((criteria, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 sm:gap-4 bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <criteria.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base mb-1">{criteria.title}</h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground">{criteria.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section ref={stepsRef} className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our streamlined process gets your business funded quickly and efficiently.
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${stepsVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        {howItWorks.map((step, index) => (
                            <div
                                key={index}
                                className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6"
                            >
                                <div className="text-2xl sm:text-4xl font-bold gradient-text opacity-30 absolute top-3 sm:top-4 right-3 sm:right-4">
                                    {step.step}
                                </div>
                                <div className="relative">
                                    <h3 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 sm:py-24 bg-hero-bg">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-hero-foreground mb-4">
                            Why Choose <span className="gradient-text">AgroNext?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { icon: Shield, title: "100% Shariah Compliant", description: "All contracts reviewed by certified Shariah advisors" },
                            { icon: Clock, title: "Fast Processing", description: "Get funded in as little as 2 weeks" },
                            { icon: Users, title: "Dedicated Support", description: "Personal relationship manager for your business" },
                            { icon: Award, title: "Flexible Terms", description: "Customized repayment schedules based on your cash flow" },
                        ].map((item, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-hero-foreground mb-2">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-hero-foreground/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
                                <h3 className="font-semibold text-sm sm:text-base mb-2">{faq.question}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="apply-form" className="py-16 sm:py-24 bg-primary">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to Grow Your Business?
                            </h2>
                            <p className="text-white/80 mb-6">
                                Apply now and get access to ethical, Shariah-compliant financing to take your business to the next level.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white">+880 1XXX-XXXXXX</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white">financing@agronext.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Start Your Application</h3>
                            <form className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Business Name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                />
                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:border-primary"
                                >
                                    <option value="">Select Financing Type</option>
                                    <option value="work-order">Work Order Financing</option>
                                    <option value="raw-material">Raw Material Purchase</option>
                                    <option value="expansion">Business Expansion</option>
                                    <option value="equipment">Equipment Financing</option>
                                </select>
                                <textarea
                                    placeholder="Tell us about your financing needs..."
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary resize-none"
                                />
                                <Button className="w-full gradient-bg hover:opacity-90 text-white py-3 h-auto font-semibold">
                                    Submit Application
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
