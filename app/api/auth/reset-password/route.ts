import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { token, password } = body

        if (!token) {
            return NextResponse.json(
                { message: "Invalid reset token" },
                { status: 400 }
            )
        }

        if (!password || password.length < 6) {
            return NextResponse.json(
                { message: "Password must be at least 6 characters" },
                { status: 400 }
            )
        }

        // Decode and verify token
        try {
            const decoded = Buffer.from(token, "base64").toString("utf-8")
            const [type, identifier, timestamp] = decoded.split(":")

            if (type !== "reset") {
                return NextResponse.json(
                    { message: "Invalid reset token" },
                    { status: 400 }
                )
            }

            // Check if token is expired (30 minutes)
            const tokenAge = Date.now() - parseInt(timestamp)
            if (tokenAge > 30 * 60 * 1000) {
                return NextResponse.json(
                    { message: "Reset token has expired. Please request a new one." },
                    { status: 400 }
                )
            }

            // TODO: Update user's password in database
            // For demo, we'll just return success
            console.log(`Password reset for ${identifier}: ${password}`)

            return NextResponse.json({
                success: true,
                message: "Password reset successful",
            })
        } catch {
            return NextResponse.json(
                { message: "Invalid reset token" },
                { status: 400 }
            )
        }
    } catch (error) {
        console.error("Reset password error:", error)
        return NextResponse.json(
            { message: "Failed to reset password. Please try again." },
            { status: 500 }
        )
    }
}
