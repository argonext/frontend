import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AppDownloadPageContent } from './_components/AppDownloadContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Download Mobile App | Agronext - Invest On The Go',
        'Download the Agronext mobile app and start investing in Shariah-compliant opportunities from anywhere. Track your portfolio, receive notifications, and manage investments easily.',
        'https://agronext.com/app',
        'https://agronext.com/og-image.png',
        'Download Agronext App'
    );
}

export default function AppPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <AppDownloadPageContent />
            <Footer />
        </div>
    )
}
