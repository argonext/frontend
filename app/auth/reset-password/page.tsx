"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Lock, Eye, EyeOff, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

function ResetPasswordContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get("token") || ""

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError("")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token,
                    password: formData.password,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Failed to reset password")
                setIsLoading(false)
                return
            }

            setSuccess(true)
            setTimeout(() => {
                router.push("/auth/login")
            }, 2000)
        } catch {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    if (success) {
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

                <div className="relative z-10 text-center px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-bg rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg shadow-primary/30">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h1 className="text-hero-foreground text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Password Reset Successful!</h1>
                    <p className="text-hero-foreground/60 text-sm sm:text-base">Redirecting to login...</p>
                </div>
            </div>
        )
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
                <h1 className="text-hero-foreground text-xl sm:text-2xl font-bold text-center mb-1 sm:mb-2">Reset Password</h1>
                <p className="text-hero-foreground/60 text-center text-sm sm:text-base mb-4 sm:mb-6">Create a new password for your account</p>

                {/* Form Card */}
                <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        {/* New Password */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="New Password"
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
                                placeholder="Confirm New Password"
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

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full gradient-bg hover:opacity-90 text-white font-semibold py-3 sm:py-4 h-auto rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" /> : null}
                            Reset Password
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-hero-bg flex items-center justify-center px-4">
                <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary" />
            </div>
        }>
            <ResetPasswordContent />
        </Suspense>
    )
}
