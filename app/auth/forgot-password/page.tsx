"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [identifier, setIdentifier] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!identifier.trim()) {
            setError("Please enter your phone number or email")
            return
        }

        setIsLoading(true)
        setError("")

        try {
            // Determine if it's email or phone
            const isEmail = identifier.includes("@")

            const response = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier,
                    type: isEmail ? "email" : "phone",
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Failed to send reset code")
                setIsLoading(false)
                return
            }

            // Redirect to OTP verification
            router.push(`/auth/verify-otp?type=${isEmail ? "email" : "phone"}&identifier=${encodeURIComponent(identifier)}&action=reset-password`)
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
                <h1 className="text-hero-foreground text-xl sm:text-2xl font-bold text-center mb-1 sm:mb-2">Forgot Password</h1>
                <p className="text-hero-foreground/60 text-center text-sm sm:text-base mb-4 sm:mb-6">Enter your email or phone to reset password</p>

                {/* Form Card */}
                <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        {/* Phone/Email Input */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="text"
                                value={identifier}
                                onChange={(e) => {
                                    setIdentifier(e.target.value)
                                    setError("")
                                }}
                                placeholder="Phone / Email"
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-destructive/20 border border-destructive/30 text-destructive text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        {/* Send OTP Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full gradient-bg hover:opacity-90 text-white font-semibold py-3 sm:py-4 h-auto rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" /> : null}
                            Send OTP
                        </Button>
                    </form>

                    {/* Back to Login Link */}
                    <div className="text-center mt-4 sm:mt-6">
                        <Link href="/auth/login" className="text-hero-foreground/60 hover:text-primary transition-colors text-xs sm:text-sm">
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
