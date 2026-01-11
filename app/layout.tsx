import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agronext - Smart Investment Platform",
  description:
    "Start investing in verified businesses with as low as ৳5,000. Join thousands of investors building wealth through ethical and transparent investments.",
  keywords: ["investment", "crowdfunding", "startup investing", "Bangladesh", "fintech", "shariah compliant", "ethical investment"],
  generator: 'v0.app',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Agronext - Smart Investment Platform",
    description: "Start investing in verified businesses with as low as ৳5,000. Join thousands of investors building wealth through ethical and transparent investments.",
    type: 'website',
    siteName: 'Agronext',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agronext - Smart Investment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agronext - Smart Investment Platform",
    description: "Start investing in verified businesses with as low as ৳5,000. Join thousands of investors building wealth through ethical and transparent investments.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
