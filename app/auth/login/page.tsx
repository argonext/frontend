"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Phone, Lock, Eye, EyeOff, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    const router = useRouter()
    const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        password: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError("")
    }

    const handleLoginWithPassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const identifier = loginMethod === "email" ? formData.email : formData.phone

            if (!identifier) {
                setError(`Please enter a valid ${loginMethod === "email" ? "email address" : "phone number"}`)
                setIsLoading(false)
                return
            }

            if (!formData.password) {
                setError("Please enter your password")
                setIsLoading(false)
                return
            }

            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier,
                    password: formData.password,
                    method: "password",
                    type: loginMethod,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Login failed")
                setIsLoading(false)
                return
            }

            router.push("/dashboard")
        } catch {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleLoginWithOTP = async () => {
        setIsLoading(true)
        setError("")

        try {
            const identifier = loginMethod === "email" ? formData.email : formData.phone

            if (!identifier) {
                setError(`Please enter a valid ${loginMethod === "email" ? "email address" : "phone number"}`)
                setIsLoading(false)
                return
            }

            const response = await fetch("/api/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier,
                    type: loginMethod,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Failed to send OTP")
                setIsLoading(false)
                return
            }

            router.push(`/auth/verify-otp?type=${loginMethod}&identifier=${encodeURIComponent(identifier)}&action=login`)
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

                {/* Welcome Text */}
                <h1 className="text-hero-foreground text-xl sm:text-2xl font-bold text-center mb-1 sm:mb-2">
                    Welcome to <span className="text-primary">Agronext</span>
                </h1>
                <p className="text-hero-foreground/60 text-center text-sm sm:text-base mb-4 sm:mb-6">Sign in to continue</p>

                {/* Login Card */}
                <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl">
                    <h2 className="text-hero-foreground text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">Login</h2>

                    {/* Toggle Buttons */}
                    <div className="flex bg-white/5 rounded-xl p-1 mb-4 sm:mb-6">
                        <button
                            type="button"
                            onClick={() => setLoginMethod("email")}
                            className={`flex-1 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${loginMethod === "email"
                                ? "gradient-bg text-white shadow-lg"
                                : "text-hero-foreground/70 hover:text-hero-foreground"
                                }`}
                        >
                            Email
                        </button>
                        <button
                            type="button"
                            onClick={() => setLoginMethod("phone")}
                            className={`flex-1 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${loginMethod === "phone"
                                ? "gradient-bg text-white shadow-lg"
                                : "text-hero-foreground/70 hover:text-hero-foreground"
                                }`}
                        >
                            Phone
                        </button>
                    </div>

                    <form onSubmit={handleLoginWithPassword} className="space-y-3 sm:space-y-4">
                        {/* Email/Phone Input */}
                        <div className="relative">
                            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary">
                                {loginMethod === "email" ? <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> : <Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </div>
                            <input
                                type={loginMethod === "email" ? "email" : "tel"}
                                name={loginMethod}
                                value={loginMethod === "email" ? formData.email : formData.phone}
                                onChange={handleInputChange}
                                placeholder={loginMethod === "email" ? "Email Address" : "Phone Number"}
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                            />
                        </div>

                        {/* Password Input */}
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

                        {/* Error Message */}
                        {error && (
                            <div className="bg-destructive/20 border border-destructive/30 text-destructive text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        {/* Login with Password Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full gradient-bg hover:opacity-90 text-white font-semibold py-3 sm:py-4 h-auto rounded-xl shadow-lg shadow-black/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" /> : null}
                            Login with Password
                        </Button>

                        {/* Login with OTP Button */}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleLoginWithOTP}
                            disabled={isLoading}
                            className="w-full border-white/20 text-hero-foreground bg-white/10 hover:bg-white/20 font-semibold py-3 sm:py-4 h-auto rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                            Login with OTP
                        </Button>
                    </form>

                    {/* Footer Links */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mt-4 sm:mt-6 text-xs sm:text-sm">
                        <Link href="/auth/register" className="text-hero-foreground/60 hover:text-primary transition-colors">
                            Don&apos;t have an account?
                        </Link>
                        <Link href="/auth/forgot-password" className="text-hero-foreground/60 hover:text-primary transition-colors">
                            Forgot Password
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
