"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Shariah", href: "/shariah" },
    { label: "Contact", href: "/contact" },
  ],
  invest: [
    { label: "Campaigns", href: "/campaigns" },
    { label: "Reports", href: "/reports" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Get the App", href: "/app" },
    { label: "Risk Disclosure", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
  },
]

export function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <footer className="bg-hero-bg text-hero-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-36 sm:w-72 h-36 sm:h-72 bg-accent/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Newsletter */}
        <div
          className={`bg-gradient-to-r from-primary/20 to-chart-4/20 border border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-hero-foreground mb-1 sm:mb-2">
                Stay Updated
              </h3>
              <p className="text-hero-foreground/70 text-sm sm:text-base">Get the latest investment opportunities</p>
            </div>
            <div className="flex w-full lg:w-auto gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-48 xl:w-64 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button className="gradient-bg hover:opacity-90 text-white px-4 sm:px-6 hover:scale-105 transition-transform group active:scale-95 h-[50px]">
                <span className="hidden sm:inline">Subscribe</span>
                <ArrowRight className="w-4 h-4 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
        >
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-3 sm:mb-4 group">
              {/* <div className="rounded-lg px-3 py-1.5 transition-all"> */}
              <Image
                src="/logo.png"
                alt="AgroNext Logo"
                width={120}
                height={35}
                className="md:h-12 h-8 w-auto"
              />
              {/* </div> */}
            </Link>
            <p className="text-hero-foreground/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
              Shariah-compliant agricultural investments. Grow your wealth while making a positive impact.
            </p>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-hero-foreground/60">
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@agronext.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-accent" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-purple" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-hero-foreground/60 hover:text-hero-foreground transition-all text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-accent text-sm sm:text-base">Invest</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.invest.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-hero-foreground/60 hover:text-hero-foreground transition-all text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-purple text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-hero-foreground/60 hover:text-hero-foreground transition-all text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-hero-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}
        >
          <p className="text-hero-foreground/60 text-xs sm:text-sm order-2 sm:order-1">
            © {new Date().getFullYear()} AgroNext. All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-3 order-1 sm:order-2">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className={`w-9 h-9 sm:w-10 sm:h-10 bg-hero-foreground/10 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 active:scale-95`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
