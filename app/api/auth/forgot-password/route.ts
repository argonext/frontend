import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { identifier, type } = body

        if (!identifier) {
            return NextResponse.json(
                { message: "Please enter your phone number or email" },
                { status: 400 }
            )
        }

        // TODO: Check if user exists in database
        // For demo, we'll assume user exists

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString()

        // TODO: Store OTP in database/cache with expiry
        // TODO: Send OTP via SMS or Email

        console.log(`Password reset OTP for ${identifier}: ${otp}`)

        const isDev = process.env.NODE_ENV === "development"

        return NextResponse.json({
            success: true,
            message: `Reset code sent to your ${type === "email" ? "email" : "phone"}`,
            ...(isDev && { devOtp: otp }),
        })
    } catch (error) {
        console.error("Forgot password error:", error)
        return NextResponse.json(
            { message: "Failed to send reset code. Please try again." },
            { status: 500 }
        )
    }
}
