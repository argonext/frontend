"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2, ArrowLeft } from "lucide-react"

function VerifyOTPContent() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const type = searchParams.get("type") || "email"
    const identifier = searchParams.get("identifier") || ""
    const action = searchParams.get("action") || "login"

    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [resendTimer, setResendTimer] = useState(60)

    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
            return () => clearTimeout(timer)
        }
    }, [resendTimer])

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return

        const newOtp = [...otp]
        newOtp[index] = value.slice(-1)
        setOtp(newOtp)
        setError("")

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("text").slice(0, 6)
        if (!/^\d+$/.test(pastedData)) return

        const newOtp = [...otp]
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i]
        }
        setOtp(newOtp)
    }

    const handleVerify = async () => {
        const otpCode = otp.join("")

        if (otpCode.length !== 6) {
            setError("Please enter a valid 6-digit OTP")
            return
        }

        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier,
                    otp: otpCode,
                    type,
                    action,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Invalid OTP")
                setIsLoading(false)
                return
            }

            // Redirect based on action
            if (action === "reset-password") {
                router.push(`/auth/reset-password?token=${data.token}`)
            } else {
                router.push("/dashboard")
            }
        } catch {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleResendOTP = async () => {
        if (resendTimer > 0) return

        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("/api/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier,
                    type,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Failed to resend OTP")
                return
            }

            setResendTimer(60)
            setOtp(["", "", "", "", "", ""])
        } catch {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800 flex flex-col items-center justify-center p-4">
            {/* Title */}
            <h1 className="text-white text-3xl font-semibold mb-4">Verify OTP</h1>

            <p className="text-white/80 text-sm mb-8 text-center">
                We&apos;ve sent a verification code to<br />
                <span className="font-semibold">{identifier}</span>
            </p>

            {/* OTP Inputs */}
            <div className="flex gap-3 mb-6">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el }}
                        type="text"
                        inputMode="numeric"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-12 h-14 bg-white rounded-xl text-center text-2xl font-bold text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                        maxLength={1}
                        aria-label={`OTP digit ${index + 1}`}
                        placeholder="0"
                    />
                ))}
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/90 text-white text-sm py-2 px-4 rounded-lg text-center mb-4 w-full max-w-md">
                    {error}
                </div>
            )}

            {/* Verify Button */}
            <button
                onClick={handleVerify}
                disabled={isLoading || otp.some(d => !d)}
                className="w-full max-w-md bg-white text-green-700 font-semibold py-4 rounded-full hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
            >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                Verify OTP
            </button>

            {/* Resend OTP */}
            <div className="text-center">
                {resendTimer > 0 ? (
                    <p className="text-white/70 text-sm">
                        Resend OTP in <span className="font-semibold">{resendTimer}s</span>
                    </p>
                ) : (
                    <button
                        onClick={handleResendOTP}
                        disabled={isLoading}
                        className="text-white hover:text-white/80 transition-colors text-sm font-semibold"
                    >
                        Resend OTP
                    </button>
                )}
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

export default function VerifyOTPPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-linear-to-b from-green-600 via-green-700 to-green-800 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
        }>
            <VerifyOTPContent />
        </Suspense>
    )
}
