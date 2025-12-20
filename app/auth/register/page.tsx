"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Phone, Mail, Lock, Eye, EyeOff, Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError("")
    }

    const validateForm = () => {
        if (!formData.fullName.trim()) {
            setError("Please enter your full name")
            return false
        }
        if (!formData.phone.trim()) {
            setError("Please enter your phone number")
            return false
        }
        if (!formData.email.trim()) {
            setError("Please enter your email address")
            return false
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError("Please enter a valid email address")
            return false
        }
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters")
            return false
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return false
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    phone: formData.phone,
                    email: formData.email,
                    password: formData.password,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Registration failed")
                setIsLoading(false)
                return
            }

            // Redirect to OTP verification
            router.push(`/auth/verify-otp?type=email&identifier=${encodeURIComponent(formData.email)}&action=register`)
        } catch {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-hero-bg relative overflow-hidden flex flex-col items-center justify-center px-4 py-8 sm:p-6 md:p-8">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
                <div
                    className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            <div className="relative z-10 w-full max-w-[340px] sm:max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-3 sm:mb-4">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300">
                            <span className="text-white font-bold text-xl sm:text-2xl">I</span>
                        </div>
                    </Link>
                </div>

                {/* Title */}
                <h1 className="text-hero-foreground text-xl sm:text-2xl font-bold text-center mb-1 sm:mb-2">
                    Join <span className="text-primary">Agronext</span>
                </h1>
                <p className="text-hero-foreground/60 text-center text-sm sm:text-base mb-4 sm:mb-6">Create your account to start investing</p>

                {/* Register Card */}
                <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl">
                    <h2 className="text-hero-foreground text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">Register</h2>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        {/* Full Name */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Full name"
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone number"
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-10 sm:pr-12 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-hero-foreground/60 hover:text-primary transition-colors p-1"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirm Password"
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-10 sm:pr-12 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-hero-foreground/60 hover:text-primary transition-colors p-1"
                            >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-destructive/20 border border-destructive/30 text-destructive text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        {/* Register Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full gradient-bg hover:opacity-90 text-white font-semibold py-3 sm:py-4 h-auto rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" /> : null}
                            Register
                        </Button>
                    </form>

                    {/* Footer Link */}
                    <div className="text-center mt-4 sm:mt-6">
                        <Link href="/auth/login" className="text-hero-foreground/60 hover:text-primary transition-colors text-xs sm:text-sm">
                            Already have an account? Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <button
                onClick={() => router.back()}
                title="Go back"
                aria-label="Go back"
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-hero-foreground hover:bg-white/20 hover:text-primary transition-all border border-white/10"
            >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        </div>
    )
}
