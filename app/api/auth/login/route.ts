import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { identifier, password, method, type } = body

        // Validate input
        if (!identifier) {
            return NextResponse.json(
                { message: `Please enter a valid ${type === "email" ? "email address" : "phone number"}` },
                { status: 400 }
            )
        }

        if (method === "password" && !password) {
            return NextResponse.json(
                { message: "Please enter your password" },
                { status: 400 }
            )
        }

        // TODO: Replace with actual database lookup and authentication
        // This is a mock implementation for demonstration

        // Simulate database lookup
        const mockUsers = [
            { email: "demo@argonext.com", phone: "01700000000", password: "password123" },
        ]

        const user = mockUsers.find(
            (u) => (type === "email" ? u.email === identifier : u.phone === identifier)
        )

        if (!user) {
            return NextResponse.json(
                { message: "User not found. Please check your credentials." },
                { status: 404 }
            )
        }

        if (method === "password" && user.password !== password) {
            return NextResponse.json(
                { message: "Invalid password. Please try again." },
                { status: 401 }
            )
        }

        // Generate session token (in production, use JWT or similar)
        const token = Buffer.from(`${identifier}:${Date.now()}`).toString("base64")

        return NextResponse.json({
            success: true,
            message: "Login successful",
            token,
            user: {
                email: user.email,
                phone: user.phone,
            },
        })
    } catch (error) {
        console.error("Login error:", error)
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}
