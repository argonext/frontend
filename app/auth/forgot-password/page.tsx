"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Loader2 } from "lucide-react"

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
        <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800 flex flex-col items-center justify-center p-4">
            {/* Title */}
            <h1 className="text-white text-3xl font-semibold mb-8">Forgot Password</h1>

            {/* Form Card */}
            <div className="w-full max-w-md space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Phone/Email Input */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                            <User className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            value={identifier}
                            onChange={(e) => {
                                setIdentifier(e.target.value)
                                setError("")
                            }}
                            placeholder="Phone / Email"
                            className="w-full bg-white rounded-full py-4 pl-12 pr-4 text-green-700 placeholder:text-green-600/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/90 text-white text-sm py-2 px-4 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    {/* Send OTP Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white text-green-700 font-semibold py-4 rounded-full hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                        Send OTP
                    </button>
                </form>

                {/* Back to Login Link */}
                <div className="text-center">
                    <Link href="/auth/login" className="text-white/80 hover:text-white transition-colors text-sm">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
