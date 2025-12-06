import { NextRequest, NextResponse } from "next/server"

// In-memory OTP store (should match send-otp route's store in production)
// For demo, we'll accept any 6-digit OTP
const validOtps: Map<string, { otp: string; expires: number }> = new Map()

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { identifier, otp, action } = body

        if (!identifier) {
            return NextResponse.json(
                { message: "Invalid request" },
                { status: 400 }
            )
        }

        if (!otp || otp.length !== 6) {
            return NextResponse.json(
                { message: "Please enter a valid 6-digit OTP" },
                { status: 400 }
            )
        }

        // Check stored OTP
        const storedOtp = validOtps.get(identifier)

        // For demo purposes, accept OTP "123456" or any stored valid OTP
        const isValidOtp = otp === "123456" ||
            (storedOtp && storedOtp.otp === otp && storedOtp.expires > Date.now())

        if (!isValidOtp && storedOtp && storedOtp.expires <= Date.now()) {
            return NextResponse.json(
                { message: "OTP has expired. Please request a new one." },
                { status: 400 }
            )
        }

        // For demo, we'll accept any 6-digit OTP in development
        if (process.env.NODE_ENV === "development" || otp === "123456") {
            // Clear used OTP
            validOtps.delete(identifier)

            // Generate token for password reset
            let token = ""
            if (action === "reset-password") {
                token = Buffer.from(`reset:${identifier}:${Date.now()}`).toString("base64")
            }

            return NextResponse.json({
                success: true,
                message: "OTP verified successfully",
                token,
            })
        }

        return NextResponse.json(
            { message: "Invalid OTP. Please try again." },
            { status: 400 }
        )
    } catch (error) {
        console.error("Verify OTP error:", error)
        return NextResponse.json(
            { message: "Verification failed. Please try again." },
            { status: 500 }
        )
    }
}
