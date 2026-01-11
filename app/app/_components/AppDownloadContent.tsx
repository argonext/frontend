"use client"

import { AppDownload } from "@/components/app-download"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Smartphone, Shield, Bell, Wallet, TrendingUp, PieChart,
    CheckCircle, Users, Star, ArrowRight, Globe, Lock
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const appFeatures = [
    {
        icon: PieChart,
        title: "Portfolio Dashboard",
        description: "Get a complete overview of all your investments, returns, and performance in one place."
    },
    {
        icon: TrendingUp,
        title: "Live Campaign Tracking",
        description: "Monitor funding progress, investor count, and time remaining for active campaigns."
    },
    {
        icon: Bell,
        title: "Smart Notifications",
        description: "Receive instant updates on new campaigns, profit distributions, and important announcements."
    },
    {
        icon: Wallet,
        title: "Easy Payments",
        description: "Invest seamlessly using bKash, Nagad, Rocket, or direct bank transfer."
    },
    {
        icon: Shield,
        title: "Secure Authentication",
        description: "Biometric login, OTP verification, and encrypted transactions keep your account safe."
    },
    {
        icon: Globe,
        title: "Offline Access",
        description: "View your portfolio and transaction history even without internet connection."
    },
]

const howItWorks = [
    {
        step: "01",
        title: "Download & Register",
        description: "Download the app and create your account with just your phone number and NID."
    },
    {
        step: "02",
        title: "Complete KYC",
        description: "Verify your identity by uploading your NID and taking a selfie."
    },
    {
        step: "03",
        title: "Browse Campaigns",
        description: "Explore active investment campaigns and their expected returns."
    },
    {
        step: "04",
        title: "Invest & Earn",
        description: "Choose a campaign, invest, and start earning Shariah-compliant returns."
    },
]

const testimonials = [
    {
        name: "Rafiq Ahmed",
        role: "Investor",
        rating: 5,
        comment: "The app makes investing so easy. I can track all my investments and receive updates instantly."
    },
    {
        name: "Sabrina Karim",
        role: "Investor",
        rating: 5,
        comment: "Love the clean interface and the payment options. bKash integration is super convenient."
    },
    {
        name: "Masud Rana",
        role: "Investor",
        rating: 5,
        comment: "Best investment app in Bangladesh. The Shariah compliance gives me peace of mind."
    },
]

export function AppDownloadPageContent() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <>
            {/* Hero Section */}
            <AppDownload variant="hero" showStats={true} />

            {/* App Features */}
            <section ref={featuresRef} className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Everything You Need to <span className="gradient-text">Invest</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our mobile app is packed with features to make your investment journey smooth and secure.
                        </p>
                    </div>

                    <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${featuresVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        {appFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 sm:py-24 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            How to Get <span className="gradient-text">Started</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Start investing in minutes with our simple onboarding process.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {howItWorks.map((step, index) => (
                            <div
                                key={index}
                                className="relative bg-card border border-border rounded-2xl p-6"
                            >
                                <div className="text-4xl font-bold gradient-text opacity-30 absolute top-4 right-4">
                                    {step.step}
                                </div>
                                <div className="relative">
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Your Security is Our <span className="gradient-text">Priority</span>
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                We use industry-leading security measures to protect your investments and personal data.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "256-bit SSL encryption for all transactions",
                                    "Biometric authentication (fingerprint & face ID)",
                                    "Two-factor authentication (2FA) for added security",
                                    "Regular security audits by third-party experts",
                                    "Secure cloud infrastructure with 99.9% uptime",
                                    "Automatic session timeout for inactive accounts",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 gradient-bg rounded-3xl flex items-center justify-center">
                                    <Lock className="w-24 h-24 text-white" />
                                </div>
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg">
                                    <Shield className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 sm:py-24 bg-hero-bg">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-hero-foreground mb-4">
                            What Users Are <span className="gradient-text">Saying</span>
                        </h2>
                        <p className="text-hero-foreground/70 max-w-2xl mx-auto">
                            Join thousands of satisfied users who trust AgroNext for their investments.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-hero-foreground/80 mb-4">&quot;{testimonial.comment}&quot;</p>
                                <div>
                                    <p className="font-semibold text-hero-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-hero-foreground/60">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="flex items-center justify-center gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-hero-foreground">4.8</div>
                                <div className="flex items-center gap-1 justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <div className="text-sm text-hero-foreground/60 mt-1">App Store</div>
                            </div>
                            <div className="w-px h-16 bg-white/20" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-hero-foreground">4.7</div>
                                <div className="flex items-center gap-1 justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <div className="text-sm text-hero-foreground/60 mt-1">Google Play</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-primary">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Smartphone className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Download the App Today
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Join 50,000+ users who are already investing in ethical, Shariah-compliant agricultural projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#" className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-black/90 transition-all">
                            <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-googlet.5-91.9zm-56.6-176.6c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs opacity-80">Download on the</div>
                                <div className="font-semibold">App Store</div>
                            </div>
                        </Link>
                        <Link href="#" className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-black/90 transition-all">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs opacity-80">Get it on</div>
                                <div className="font-semibold">Google Play</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
