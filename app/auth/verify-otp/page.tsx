"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

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
                <h1 className="text-hero-foreground text-xl sm:text-2xl font-bold text-center mb-1 sm:mb-2">Verify OTP</h1>
                <p className="text-hero-foreground/60 text-center text-sm sm:text-base mb-4 sm:mb-6">
                    We&apos;ve sent a verification code to<br />
                    <span className="font-semibold text-hero-foreground/80 break-all">{identifier}</span>
                </p>

                {/* Form Card */}
                <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl">
                    {/* OTP Inputs */}
                    <div className="flex gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
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
                                className="w-10 h-12 sm:w-12 sm:h-14 bg-white/10 border border-white/10 rounded-lg sm:rounded-xl text-center text-xl sm:text-2xl font-bold text-hero-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                maxLength={1}
                                aria-label={`OTP digit ${index + 1}`}
                                placeholder="0"
                            />
                        ))}
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-destructive/20 border border-destructive/30 text-destructive text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-center mb-3 sm:mb-4">
                            {error}
                        </div>
                    )}

                    {/* Verify Button */}
                    <Button
                        onClick={handleVerify}
                        disabled={isLoading || otp.some(d => !d)}
                        className="w-full gradient-bg hover:opacity-90 text-white font-semibold py-3 sm:py-4 h-auto rounded-xl shadow-lg shadow-black/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" /> : null}
                        Verify OTP
                    </Button>

                    {/* Resend OTP */}
                    <div className="text-center mt-4 sm:mt-6">
                        {resendTimer > 0 ? (
                            <p className="text-hero-foreground/60 text-xs sm:text-sm">
                                Resend OTP in <span className="font-semibold text-primary">{resendTimer}s</span>
                            </p>
                        ) : (
                            <button
                                onClick={handleResendOTP}
                                disabled={isLoading}
                                className="text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-semibold"
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    title="Go back"
                    aria-label="Go back"
                    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-hero-foreground hover:bg-white/20 transition-all"
                >
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
    )
}

export default function VerifyOTPPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-hero-bg flex items-center justify-center px-4">
                <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary" />
            </div>
        }>
            <VerifyOTPContent />
        </Suspense>
    )
}
