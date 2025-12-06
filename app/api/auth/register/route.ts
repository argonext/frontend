import { NextRequest, NextResponse } from "next/server"

// In-memory store for demo (use database in production)
const registeredUsers: Array<{
    fullName: string
    phone: string
    email: string
    password: string
    verified: boolean
}> = []

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { fullName, phone, email, password } = body

        // Validate input
        if (!fullName?.trim()) {
            return NextResponse.json(
                { message: "Please enter your full name" },
                { status: 400 }
            )
        }

        if (!phone?.trim()) {
            return NextResponse.json(
                { message: "Please enter your phone number" },
                { status: 400 }
            )
        }

        if (!email?.trim()) {
            return NextResponse.json(
                { message: "Please enter your email address" },
                { status: 400 }
            )
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { message: "Please enter a valid email address" },
                { status: 400 }
            )
        }

        if (!password || password.length < 6) {
            return NextResponse.json(
                { message: "Password must be at least 6 characters" },
                { status: 400 }
            )
        }

        // Check if user already exists
        const existingUser = registeredUsers.find(
            (u) => u.email === email || u.phone === phone
        )

        if (existingUser) {
            return NextResponse.json(
                { message: "An account with this email or phone already exists" },
                { status: 409 }
            )
        }

        // Create new user (unverified)
        registeredUsers.push({
            fullName,
            phone,
            email,
            password, // In production, hash the password!
            verified: false,
        })

        // TODO: Send verification OTP to email/phone
        // For demo, we'll just return success

        return NextResponse.json({
            success: true,
            message: "Registration successful. Please verify your account.",
            user: {
                fullName,
                email,
                phone,
            },
        })
    } catch (error) {
        console.error("Registration error:", error)
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}
