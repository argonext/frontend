"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Phone, Mail, Lock, Eye, EyeOff, Loader2, ArrowLeft } from "lucide-react"

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

            {/* Title */}
            <h1 className="text-white text-2xl font-semibold mb-6">Create an Account</h1>

            {/* Register Card */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <h2 className="text-white text-2xl font-semibold text-center mb-6">Register</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                            <User className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full name"
                            className="w-full bg-white rounded-full py-4 pl-12 pr-4 text-green-700 placeholder:text-green-600/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                            <Phone className="w-5 h-5" />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone number"
                            className="w-full bg-white rounded-full py-4 pl-12 pr-4 text-green-700 placeholder:text-green-600/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full bg-white rounded-full py-4 pl-12 pr-4 text-green-700 placeholder:text-green-600/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Password */}
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

                    {/* Confirm Password */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm Password"
                            className="w-full bg-white rounded-full py-4 pl-12 pr-12 text-green-700 placeholder:text-green-600/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600"
                        >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/90 text-white text-sm py-2 px-4 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white text-green-700 font-semibold py-4 rounded-full hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                        Register
                    </button>
                </form>

                {/* Footer Link */}
                <div className="text-center mt-6">
                    <Link href="/auth/login" className="text-white/80 hover:text-white transition-colors text-sm">
                        Already have an account? Login
                    </Link>
                </div>
            </div>

            {/* Back Button */}
            <button
                onClick={() => router.back()}
                title="Go back"
                aria-label="Go back"
                className="fixed bottom-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
                <ArrowLeft className="w-6 h-6" />
            </button>
        </div>
    )
}
