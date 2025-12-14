"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, ChevronDown } from "lucide-react"

const mainNavLinks = [
  { label: "Campaigns", href: "/campaigns" },
  { label: "Shariah", href: "/shariah" },
  { label: "Apply", href: "/apply" },
  {
    label: "More",
    href: "#",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Reports", href: "/reports" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Get the App", href: "/app" },
    ]
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        const offset = 80 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        })
      }
    }
    setIsOpen(false) // Close mobile menu after click
    setDropdownOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-hero-bg/98 backdrop-blur-xl border-b border-white/10 shadow-lg"
        : "bg-hero-bg/80 backdrop-blur-md border-b border-white/5"
        }`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 md:w-10 md:h-10 gradient-bg rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-lg md:text-xl">I</span>
            </div>
            <span className="text-hero-foreground font-bold text-lg md:text-xl tracking-tight">
              Agro<span className="text-primary">Next</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {mainNavLinks.map((link) => (
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-hero-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-hero-bg border border-white/10 rounded-xl shadow-xl py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 text-sm text-hero-foreground/80 hover:text-primary hover:bg-white/5 transition-colors ${pathname === item.href ? "text-primary bg-primary/10" : ""}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-2 ${pathname === link.href
                    ? "text-primary"
                    : "text-hero-foreground/80 hover:text-primary"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${pathname === link.href ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Link href="/campaigns">
              <Button className="gradient-bg hover:opacity-90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 group">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Start Investing
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-hero-foreground hover:bg-white/10 rounded-lg transition-colors active:scale-95"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              />
            </div>
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-400 ease-out ${isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="pt-2 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {mainNavLinks.map((link, index) => (
                link.dropdown ? (
                  <div key={link.label}>
                    {link.dropdown.map((item, subIndex) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-hero-foreground/80 hover:text-primary hover:bg-white/5 transition-all py-3 px-4 rounded-lg block ${pathname === item.href ? "text-primary bg-primary/10" : ""}`}
                        style={{ transitionDelay: isOpen ? `${(index + subIndex) * 50}ms` : "0ms" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-hero-foreground/80 hover:text-primary hover:bg-white/5 transition-all py-3 px-4 rounded-lg block ${pathname === link.href ? "text-primary bg-primary/10" : ""}`}
                    style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-2">
                <Link href="/campaigns">
                  <Button className="w-full gradient-bg hover:opacity-90 text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Start Investing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
