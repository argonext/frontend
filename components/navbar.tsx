"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Investments", href: "#investments" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    setIsOpen(false) // Close mobile menu after click
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
              Invest<span className="text-primary">BD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors py-2 ${activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-hero-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${activeSection === link.href.replace("#", "") ? "scale-x-100" : "scale-x-0"
                    }`}
                />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="text-hero-foreground/80 hover:text-hero-foreground hover:bg-white/10 transition-all"
              >
                Log In
              </Button>
            </Link>
            <Link href="/auth/register">
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
          className={`lg:hidden transition-all duration-400 ease-out ${isOpen ? "max-h-[400px] opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="pt-2 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-hero-foreground/80 hover:text-primary hover:bg-white/5 transition-all py-3 px-4 rounded-lg active:scale-98 ${activeSection === link.href.replace("#", "") ? "text-primary bg-primary/10" : ""
                    }`}
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-2">
                <Link href="/auth/login">
                  <Button
                    variant="ghost"
                    className="w-full justify-center text-hero-foreground/80 hover:text-hero-foreground hover:bg-white/10"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/auth/register">
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
