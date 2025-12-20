"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Mail, Phone, MapPin, Clock, Send, MessageCircle,
    Facebook, Instagram, Linkedin, Youtube
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

const contactMethods = [
    {
        icon: Phone,
        title: "Phone",
        description: "Talk to our team",
        value: "+880 1XXX-XXXXXX",
        link: "tel:+8801XXX",
        availability: "Sat-Thu, 9AM-6PM"
    },
    {
        icon: Mail,
        title: "Email",
        description: "Send us an email",
        value: "support@agronext.com",
        link: "mailto:support@agronext.com",
        availability: "24/7 support"
    },
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Chat with support",
        value: "Start a conversation",
        link: "#",
        availability: "Sat-Thu, 9AM-10PM"
    },
]

const offices = [
    {
        city: "Dhaka (Head Office)",
        address: "Level 12, Tower A, Banglamotor, Dhaka 1205, Bangladesh",
        phone: "+880 1XXX-XXXXXX",
        email: "dhaka@agronext.com"
    },
    {
        city: "Chittagong",
        address: "House 45, Road 3, Agrabad C/A, Chittagong 4100, Bangladesh",
        phone: "+880 1XXX-XXXXXX",
        email: "chittagong@agronext.com"
    },
]

const socialLinks = [
    { icon: Facebook, name: "Facebook", link: "https://facebook.com/agronext" },
    { icon: Instagram, name: "Instagram", link: "https://instagram.com/agronext" },
    { icon: Linkedin, name: "LinkedIn", link: "https://linkedin.com/company/agronext" },
    { icon: Youtube, name: "YouTube", link: "https://youtube.com/agronext" },
]

const faqs = [
    {
        question: "How can I invest on AgroNext?",
        answer: "Download our mobile app or visit our website to create an account, browse campaigns, and start investing."
    },
    {
        question: "What is the minimum investment?",
        answer: "Minimum investment starts from ৳5,000, varying by campaign."
    },
    {
        question: "How do I apply for business financing?",
        answer: "Visit our Apply page and submit your business details. Our team will guide you through the process."
    },
]

export default function ContactPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>()

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
                        <MessageCircle className="w-4 h-4" />
                        GET IN TOUCH
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-hero-foreground mb-4 sm:mb-6">
                        Contact <span className="gradient-text">Us</span>
                    </h1>
                    <p className="text-hero-foreground/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
                        Have questions about investing, financing, or our platform? We&apos;re here to help. Reach out to our team anytime.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-12 sm:py-16 bg-card border-b border-border">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {contactMethods.map((method, index) => (
                            <Link
                                key={index}
                                href={method.link}
                                className="bg-background border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-sm sm:text-base mb-1">{method.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground mb-2">{method.description}</p>
                                <p className="text-primary font-medium text-sm sm:text-base">{method.value}</p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    <Clock className="w-3 h-3 inline mr-1" />
                                    {method.availability}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div ref={formRef} className={`${formVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your last name"
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground focus:outline-none focus:border-primary"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="investing">Investing Questions</option>
                                        <option value="financing">Business Financing</option>
                                        <option value="shariah">Shariah Compliance</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="partnership">Partnership Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        placeholder="How can we help you?"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary resize-none"
                                    />
                                </div>

                                <Button className="w-full gradient-bg hover:opacity-90 text-white py-3 h-auto font-semibold">
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Office Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                                    Our <span className="gradient-text">Offices</span>
                                </h2>

                                <div className="space-y-6">
                                    {offices.map((office, index) => (
                                        <div
                                            key={index}
                                            className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6"
                                        >
                                            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{office.city}</h3>
                                            <div className="space-y-2 sm:space-y-3">
                                                <div className="flex items-start gap-2 sm:gap-3">
                                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground text-sm sm:text-base">{office.address}</span>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                                    <Link href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary text-sm sm:text-base">
                                                        {office.phone}
                                                    </Link>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                                    <Link href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary text-sm sm:text-base">
                                                        {office.email}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Business Hours</h3>
                                <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                                    <div className="flex justify-between">
                                        <span>Saturday - Thursday</span>
                                        <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Friday</span>
                                        <span className="font-medium text-foreground">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h3>
                                <div className="flex gap-3 sm:gap-4">
                                    {socialLinks.map((social, index) => (
                                        <Link
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            className="w-9 h-9 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                        >
                                            <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-12 sm:py-16 bg-muted/30">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                        <div className="h-64 sm:h-96 bg-muted flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground">Map will be displayed here</p>
                                <p className="text-sm text-muted-foreground mt-2">Banglamotor, Dhaka 1205, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick FAQs */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Quick <span className="gradient-text">Answers</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Common questions you might have before reaching out.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6"
                            >
                                <h3 className="font-semibold text-sm sm:text-base mb-2">{faq.question}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/faq">
                            <Button variant="outline">
                                View All FAQs
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-primary">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8">
                        Start your ethical investment journey or apply for business financing today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/campaigns">
                            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 h-auto font-semibold">
                                View Campaigns
                            </Button>
                        </Link>
                        <Link href="/apply">
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 h-auto">
                                Apply for Financing
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
