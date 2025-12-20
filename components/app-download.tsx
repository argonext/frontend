"use client"

import Link from "next/link"
import { Smartphone, Apple, CheckCircle, QrCode, Download, Star, Shield, Bell, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
    {
        icon: Shield,
        title: "Secure Transactions",
        description: "Bank-grade security for all your investments"
    },
    {
        icon: Bell,
        title: "Real-time Updates",
        description: "Get notified about your investment progress"
    },
    {
        icon: Wallet,
        title: "Easy Payments",
        description: "Multiple payment options including bKash & Nagad"
    },
]

interface AppDownloadProps {
    variant?: "section" | "hero"
    showStats?: boolean
}

export function AppDownload({ variant = "section", showStats = true }: AppDownloadProps) {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    if (variant === "hero") {
        return (
            <section className="bg-hero-bg py-12 sm:py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div ref={ref} className={`relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                                MOBILE APP
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-hero-foreground mb-4 sm:mb-6">
                                Invest Anytime, <span className="gradient-text">Anywhere</span>
                            </h2>
                            <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                                Download the AgroNext app and manage your investments on the go. Track your portfolio, invest in new campaigns, and receive real-time updates.
                            </p>

                            {/* Features */}
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                                            <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-hero-foreground text-sm sm:text-base">{feature.title}</h4>
                                            <p className="text-xs sm:text-sm text-hero-foreground/60">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link href="#" className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-black/90 transition-all active:scale-95">
                                    <Apple className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <div className="text-left">
                                        <div className="text-[10px] sm:text-xs opacity-80">Download on the</div>
                                        <div className="text-sm sm:text-base font-semibold">App Store</div>
                                    </div>
                                </Link>
                                <Link href="#" className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-black/90 transition-all active:scale-95">
                                    <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[10px] sm:text-xs opacity-80">Get it on</div>
                                        <div className="text-sm sm:text-base font-semibold">Google Play</div>
                                    </div>
                                </Link>
                            </div>

                            {showStats && (
                                <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                                        <span className="font-semibold text-hero-foreground text-sm sm:text-base">4.8</span>
                                        <span className="text-hero-foreground/60 text-xs sm:text-sm">Rating</span>
                                    </div>
                                    <div className="w-px h-5 sm:h-6 bg-white/20" />
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Download className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                        <span className="font-semibold text-hero-foreground text-sm sm:text-base">50K+</span>
                                        <span className="text-hero-foreground/60 text-xs sm:text-sm">Downloads</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Phone Mockup */}
                        <div className="hidden lg:flex justify-center">
                            <div className="relative">
                                <div className="w-52 lg:w-64 h-[400px] lg:h-[500px] bg-gradient-to-b from-primary/20 to-primary/5 rounded-[2.5rem] lg:rounded-[3rem] border-4 border-white/20 flex items-center justify-center">
                                    <div className="text-center">
                                        <Smartphone className="w-12 h-12 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                                        <p className="text-hero-foreground/60 text-sm">App Preview</p>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 gradient-bg rounded-xl lg:rounded-2xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                                    <QrCode className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Default section variant
    return (
        <section className="py-10 sm:py-16 lg:py-24 bg-muted/30">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`bg-hero-bg rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 relative overflow-hidden ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 bg-primary/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-40 sm:w-64 h-40 sm:h-64 bg-primary/10 rounded-full blur-3xl" />
                    </div>

                    <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-hero-foreground mb-3 sm:mb-4">
                                Get the <span className="gradient-text">AgroNext</span> App
                            </h2>
                            <p className="text-hero-foreground/70 text-sm sm:text-base mb-4 sm:mb-6">
                                Download our mobile app to invest, track your portfolio, and manage your returns on the go.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <Link href="#" className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-black/90 transition-all active:scale-95">
                                    <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
                                    <div className="text-left">
                                        <div className="text-[9px] sm:text-[10px] opacity-80">Download on the</div>
                                        <div className="text-xs sm:text-sm font-semibold">App Store</div>
                                    </div>
                                </Link>
                                <Link href="#" className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-black/90 transition-all active:scale-95">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[9px] sm:text-[10px] opacity-80">Get it on</div>
                                        <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                                    </div>
                                </Link>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4 text-hero-foreground/60 text-xs sm:text-sm">
                                <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="font-medium text-hero-foreground">4.8</span>
                                </div>
                                <span>•</span>
                                <span>50K+ Downloads</span>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="hidden sm:flex justify-center lg:justify-end">
                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                    <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground" />
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 font-medium">Scan to Download</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
