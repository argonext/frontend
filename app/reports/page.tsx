import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ReportsContent } from './_components/ReportsContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Impact Reports | Agronext - Campaign Outcomes & Performance',
        'Explore detailed reports of completed campaigns on Agronext. See real results, actual returns delivered, and the impact created through ethical investments.',
        'https://agronext.com/reports',
        'https://agronext.com/og-image.png',
        'Agronext Impact Reports'
    );
}

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <ReportsContent />
            <Footer />
        </div>
    )
}
