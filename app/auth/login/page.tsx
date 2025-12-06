"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Phone, Lock, Eye, EyeOff, Loader2 } from "lucide-react"

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
        <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800 flex flex-col items-center justify-center p-4">
            {/* Logo */}
            <div className="mb-4">
                <div className="w-20 h-20 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                            d="M50 10 L70 50 L50 90 L30 50 Z"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            d="M35 35 L65 65"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            d="M50 30 L70 50 L50 70"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </div>

            {/* Welcome Text */}
            <h1 className="text-white text-2xl font-semibold mb-6">Welcome to AgroNext!</h1>

            {/* Login Card */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <h2 className="text-white text-2xl font-semibold text-center mb-6">Login</h2>

                {/* Toggle Buttons */}
                <div className="flex bg-white/10 rounded-full p-1 mb-6">
                    <button
                        type="button"
                        onClick={() => setLoginMethod("email")}
                        className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${loginMethod === "email"
                                ? "bg-green-600 text-white shadow-lg"
                                : "text-white/70 hover:text-white"
                            }`}
                    >
                        Email
                    </button>
                    <button
                        type="button"
                        onClick={() => setLoginMethod("phone")}
                        className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${loginMethod === "phone"
                                ? "bg-green-600 text-white shadow-lg"
                                : "text-white/70 hover:text-white"
                            }`}
                    >
                        Phone
                    </button>
                </div>

                <form onSubmit={handleLoginWithPassword} className="space-y-4">
                    {/* Email/Phone Input */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                            {loginMethod === "email" ? <Mail className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
                        </div>
                        <input
                            type={loginMethod === "email" ? "email" : "tel"}
                            name={loginMethod}
                            value={loginMethod === "email" ? formData.email : formData.phone}
                            onChange={handleInputChange}
                            placeholder={loginMethod === "email" ? "Email Address" : "Phone Number"}
                            className="w-full bg-white rounded-full py-4 pl-12 pr-4 text-green-700 placeholder:text-green-600/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Password Login Button */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className="w-full bg-white rounded-full py-4 pl-12 pr-12 text-green-700 placeholder:text-green-600/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/90 text-white text-sm py-2 px-4 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    {/* Login with Password Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white text-green-700 font-semibold py-4 rounded-full hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                        Login with Password
                    </button>

                    {/* Login with OTP Button */}
                    <button
                        type="button"
                        onClick={handleLoginWithOTP}
                        disabled={isLoading}
                        className="w-full bg-transparent border-2 border-white text-white font-semibold py-4 rounded-full hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                        Login with OTP
                    </button>
                </form>

                {/* Footer Links */}
                <div className="flex justify-between mt-6 text-sm">
                    <Link href="/auth/register" className="text-white/80 hover:text-white transition-colors">
                        Don&apos;t have an account?
                    </Link>
                    <Link href="/auth/forgot-password" className="text-white/80 hover:text-white transition-colors">
                        Forgot Password
                    </Link>
                </div>
            </div>
        </div>
    )
}
