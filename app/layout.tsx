import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InvestBD - Smart Investment Platform",
  description:
    "Start investing in verified businesses with as low as ৳5,000. Join thousands of investors building wealth through ethical and transparent investments.",
  keywords: ["investment", "crowdfunding", "startup investing", "Bangladesh", "fintech"],
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a365d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <main className="min-h-screen overflow-x-hidden scroll-smooth">
          <Navbar />
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}
