import { NextRequest, NextResponse } from "next/server"

// In-memory OTP store (use Redis or database in production)
const otpStore: Map<string, { otp: string; expires: number }> = new Map()

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { identifier, type } = body

        if (!identifier) {
            return NextResponse.json(
                { message: `Please enter a valid ${type === "email" ? "email address" : "phone number"}` },
                { status: 400 }
            )
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString()

        // Store OTP with 5-minute expiry
        otpStore.set(identifier, {
            otp,
            expires: Date.now() + 5 * 60 * 1000,
        })

        // TODO: Send OTP via SMS or Email
        // For demo, we'll log it to console
        console.log(`OTP for ${identifier}: ${otp}`)

        // In development, return OTP in response for testing
        const isDev = process.env.NODE_ENV === "development"

        return NextResponse.json({
            success: true,
            message: `OTP sent to your ${type === "email" ? "email" : "phone"}`,
            ...(isDev && { devOtp: otp }), // Only include in development
        })
    } catch (error) {
        console.error("Send OTP error:", error)
        return NextResponse.json(
            { message: "Failed to send OTP. Please try again." },
            { status: 500 }
        )
    }
}
