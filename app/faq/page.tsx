"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

const faqCategories = [
    {
        name: "General",
        faqs: [
            {
                question: "What is AgroNext?",
                answer: "AgroNext is a Shariah-compliant agricultural investment platform that connects investors with SMEs in the agriculture sector. We provide ethical, interest-free financing solutions that benefit both investors and businesses."
            },
            {
                question: "How does AgroNext work?",
                answer: "AgroNext connects individual and institutional investors with verified agricultural businesses seeking financing. Investors can browse active campaigns, invest in projects they believe in, and earn returns when the business generates profit. All investments follow Islamic finance principles."
            },
            {
                question: "Is AgroNext regulated?",
                answer: "AgroNext operates as a Shariah-compliant crowdfunding platform. We work closely with regulatory bodies and maintain strict compliance with all applicable laws. Our Shariah board ensures all transactions adhere to Islamic finance principles."
            },
            {
                question: "Who can invest on AgroNext?",
                answer: "Any individual or institution can invest on AgroNext. You need to be at least 18 years old and have a valid NID/passport. Both residents and non-residents of Bangladesh can participate."
            },
        ]
    },
    {
        name: "Investing",
        faqs: [
            {
                question: "What is the minimum investment amount?",
                answer: "The minimum investment amount varies by campaign but typically starts from ৳5,000. Each campaign page displays its specific minimum investment requirement."
            },
            {
                question: "How do I receive my returns?",
                answer: "Returns are distributed according to the profit-sharing agreement of each campaign. When the business completes its financing cycle and generates profit, your share is calculated and transferred to your registered bank account or mobile wallet."
            },
            {
                question: "What are the expected returns?",
                answer: "Expected returns vary by campaign and typically range from 12-18% per annum. The actual return depends on the business performance and the specific terms of each campaign. Remember, these are expected returns, not guaranteed."
            },
            {
                question: "Can I withdraw my investment early?",
                answer: "Generally, investments are locked for the campaign duration to ensure the business can utilize the funds effectively. However, some campaigns may offer early exit options. Check the specific campaign terms for details."
            },
            {
                question: "How are profits calculated and distributed?",
                answer: "Profits are calculated based on the actual business performance and the agreed profit-sharing ratio in the contract. Our Shariah board verifies the calculations before distribution. Detailed profit reports are shared with investors."
            },
        ]
    },
    {
        name: "Shariah Compliance",
        faqs: [
            {
                question: "How is AgroNext Shariah-compliant?",
                answer: "AgroNext uses Islamic finance contracts like Mudarabah (profit-sharing), Musharakah (partnership), and Murabaha (cost-plus financing). Our Shariah Supervisory Board, led by certified advisors from IFA Consultancy, reviews and approves all contracts and transactions."
            },
            {
                question: "What contract types do you use?",
                answer: "We use various Islamic finance contracts depending on the financing need: Mudarabah for work order financing, Musharakah for business expansion, Murabaha for raw material purchase, and Ijarah for equipment financing."
            },
            {
                question: "Who are your Shariah advisors?",
                answer: "Our Shariah advisory is provided by IFA Consultancy Ltd., a pioneer institution in Bangladesh specializing in Halal & Islamic Finance. Their team includes AAOIFI-certified Shariah Advisors and Auditors."
            },
            {
                question: "What types of businesses are eligible?",
                answer: "We only finance businesses engaged in halal activities. This includes agriculture, food processing, manufacturing, retail, and services that comply with Shariah principles. Businesses involved in prohibited activities are not eligible."
            },
        ]
    },
    {
        name: "Business Financing",
        faqs: [
            {
                question: "How can my business apply for financing?",
                answer: "Visit our Apply page and submit an application with your business details. Our team will review your application, conduct due diligence, and if approved, your campaign will go live for investors to fund."
            },
            {
                question: "What are the eligibility criteria?",
                answer: "Your business should be a registered SME with at least 2 years of operating history, valid trade license, maintained financial records, and engaged in halal activities. Specific requirements may vary by financing type."
            },
            {
                question: "How long does the approval process take?",
                answer: "The entire process typically takes 2-4 weeks from application to campaign launch, depending on documentation completeness and due diligence requirements."
            },
            {
                question: "What documents are required?",
                answer: "Common requirements include trade license, TIN certificate, bank statements (12 months), financial statements, company registration documents, NID of directors, and relevant work orders or contracts."
            },
            {
                question: "Is there any collateral required?",
                answer: "Collateral requirements vary based on financing amount and type. Some products may require post-dated cheques, personal guarantees, or asset security. Our team will discuss specific requirements during the application process."
            },
        ]
    },
    {
        name: "Account & Security",
        faqs: [
            {
                question: "How do I create an account?",
                answer: "Download our mobile app or visit our website to create an account. You'll need to provide basic information and verify your identity with NID/passport. The process takes just a few minutes."
            },
            {
                question: "Is my personal information secure?",
                answer: "Yes, we use industry-standard encryption and security measures to protect your data. We never share your personal information with third parties without your consent."
            },
            {
                question: "How can I update my account information?",
                answer: "You can update your profile, bank details, and preferences through your account settings in the app or website. Some changes may require additional verification for security purposes."
            },
            {
                question: "What payment methods are supported?",
                answer: "We support bank transfers, mobile banking (bKash, Nagad, Rocket), and card payments. Withdrawal can be made to your registered bank account or mobile wallet."
            },
        ]
    },
]

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeCategory, setActiveCategory] = useState("General")
    const [openFaqs, setOpenFaqs] = useState<string[]>([])
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()

    const toggleFaq = (question: string) => {
        setOpenFaqs(prev =>
            prev.includes(question)
                ? prev.filter(q => q !== question)
                : [...prev, question]
        )
    }

    const filteredCategories = faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.faqs.length > 0)

    const displayCategories = searchQuery ? filteredCategories : faqCategories.filter(cat => cat.name === activeCategory)

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
                        <HelpCircle className="w-4 h-4" />
                        HELP CENTER
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-hero-foreground mb-4 sm:mb-6">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Find answers to common questions about investing, Shariah compliance, and business financing.
                    </p>

                    {/* Search */}
                    <div className="max-w-2xl mx-auto relative px-4 sm:px-0">
                        <Search className="absolute left-8 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-hero-foreground/50" />
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-primary"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-12 sm:py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Category Sidebar */}
                        {!searchQuery && (
                            <div className="lg:col-span-1">
                                {/* Mobile horizontal scroll */}
                                <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 -mx-4 px-4 scrollbar-hide">
                                    {faqCategories.map((category) => (
                                        <button
                                            key={category.name}
                                            onClick={() => setActiveCategory(category.name)}
                                            className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${activeCategory === category.name
                                                ? "gradient-bg text-white"
                                                : "bg-card border border-border text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            {category.name} ({category.faqs.length})
                                        </button>
                                    ))}
                                </div>
                                {/* Desktop sidebar */}
                                <div className="hidden lg:block bg-card border border-border rounded-2xl p-4 sticky top-24">
                                    <h3 className="font-semibold mb-4">Categories</h3>
                                    <nav className="space-y-1">
                                        {faqCategories.map((category) => (
                                            <button
                                                key={category.name}
                                                onClick={() => setActiveCategory(category.name)}
                                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeCategory === category.name
                                                    ? "gradient-bg text-white"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                                    }`}
                                            >
                                                {category.name}
                                                <span className="float-right opacity-60">
                                                    {category.faqs.length}
                                                </span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        )}

                        {/* FAQ List */}
                        <div className={searchQuery ? "lg:col-span-4" : "lg:col-span-3"}>
                            {searchQuery && (
                                <p className="text-muted-foreground mb-6">
                                    Showing results for &quot;{searchQuery}&quot;
                                </p>
                            )}

                            {displayCategories.map((category) => (
                                <div key={category.name} className="mb-8">
                                    {searchQuery && (
                                        <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
                                    )}
                                    <div className="space-y-4">
                                        {category.faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleFaq(faq.question)}
                                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                                >
                                                    <span className="font-medium pr-4 text-sm sm:text-base">{faq.question}</span>
                                                    {openFaqs.includes(faq.question) ? (
                                                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                                                    )}
                                                </button>
                                                {openFaqs.includes(faq.question) && (
                                                    <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                                                        <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {displayCategories.length === 0 && (
                                <div className="text-center py-12">
                                    <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                                    <p className="text-muted-foreground">Try a different search term or browse by category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-16 sm:py-24 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Still Have <span className="gradient-text">Questions?</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Can&apos;t find what you&apos;re looking for? Our team is here to help.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Live Chat</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Chat with our support team</p>
                            <Button variant="outline" className="w-full text-xs sm:text-sm h-9 sm:h-10">
                                Start Chat
                            </Button>
                        </div>

                        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Call Us</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Sat-Thu, 9AM-6PM</p>
                            <Link href="tel:+8801XXX">
                                <Button variant="outline" className="w-full text-xs sm:text-sm h-9 sm:h-10">
                                    +880 1XXX-XXXXXX
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Email</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">We&apos;ll respond within 24hrs</p>
                            <Link href="mailto:support@agronext.com">
                                <Button variant="outline" className="w-full text-xs sm:text-sm h-9 sm:h-10">
                                    Send Email
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-primary">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Investment Journey?
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Join thousands of investors making a positive impact through ethical investments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/campaigns">
                            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 h-auto font-semibold">
                                View Campaigns
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 h-auto">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
