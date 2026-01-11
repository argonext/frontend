import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ShariahContent } from './_components/ShariahContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Shariah Compliance | Agronext - Islamic Finance Principles',
        'Learn how Agronext ensures complete Shariah compliance in all investments. Understand our Islamic finance contracts, advisory board, and ethical standards.',
        'https://agronext.com/shariah',
        'https://agronext.com/og-image.png',
        'Shariah Compliance at Agronext'
    );
}

export default function ShariahPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <ShariahContent />
            <Footer />
        </div>
    )
}
