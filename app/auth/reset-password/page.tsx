"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react"

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
            <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800 flex flex-col items-center justify-center p-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-white text-2xl font-semibold mb-2">Password Reset Successful!</h1>
                <p className="text-white/80 text-sm">Redirecting to login...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800 flex flex-col items-center justify-center p-4">
            {/* Title */}
            <h1 className="text-white text-3xl font-semibold mb-4">Reset Password</h1>

            <p className="text-white/80 text-sm mb-8 text-center">
                Create a new password for your account
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                {/* New Password */}
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                        <Lock className="w-5 h-5" />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="New Password"
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
                        placeholder="Confirm New Password"
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

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-green-700 font-semibold py-4 rounded-full hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
        }>
            <ResetPasswordContent />
        </Suspense>
    )
}
