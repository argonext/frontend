"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, ChevronDown } from "lucide-react"

const mainNavLinks = [
  { label: "Funded Campaigns", href: "/campaigns" },
  { label: "Shariah", href: "/shariah" },
  { label: "Products", href: "/app" },
]

const aboutNavLinks = [
  { label: "Who We Are", href: "/about#who-we-are" },
  { label: "Latest News", href: "/about#latest-news" },
  { label: "Contact", href: "/contact" },
  { label: "Our Model", href: "/about#our-model" },
  { label: "Performance Analysis", href: "/about#performance-analysis" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isAboutPage = pathname === "/about"

  const navLinks = isAboutPage ? aboutNavLinks : mainNavLinks

  useEffect(() => {
    // Set initial scroll state
    setScrolled(window.scrollY > 20)

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

  const getNavbarClasses = () => {
    if (isHomePage) {
      return scrolled
        ? "bg-hero-bg/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
        : "bg-transparent border-b border-white/5"
    }
    return scrolled
      ? "bg-hero-bg/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
      : "bg-hero-bg/70 backdrop-blur-md border-b border-white/5"
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarClasses()}`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 md:h-16 lg:h-18">
          <Link href="/" className="flex items-center group">
            <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm group-hover:shadow-md transition-all">
              <Image
                src="/logo.png"
                alt="AgroNext Logo"
                width={140}
                height={40}
                className="h-7 md:h-9 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors py-2 ${pathname === link.href || (link.href.includes('#') && pathname === link.href.split('#')[0])
                  ? "text-primary"
                  : "text-hero-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${pathname === link.href || (link.href.includes('#') && pathname === link.href.split('#')[0]) ? "scale-x-100" : "scale-x-0"
                    }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Link href="/app">
              <Button className="gradient-bg hover:opacity-90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 group">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Get the App
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-hero-foreground hover:bg-white/10 rounded-lg transition-colors active:scale-95 ml-auto"
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
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href)
                    setIsOpen(false)
                  }}
                  className={`text-hero-foreground/80 hover:text-primary hover:bg-white/5 transition-all py-3 px-4 rounded-lg block ${pathname === link.href || (link.href.includes('#') && pathname === link.href.split('#')[0]) ? "text-primary bg-primary/10" : ""}`}
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-2">
                <Link href="/app">
                  <Button className="w-full gradient-bg hover:opacity-90 text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get the App
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
