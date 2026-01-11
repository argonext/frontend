import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ApplyContent } from './_components/ApplyContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Apply for Business Financing | Agronext - Shariah-Compliant SME Funding',
        'Get ethical, interest-free financing for your SME. Work order financing, raw material purchase, business expansion, and equipment financing. Apply now for Shariah-compliant funding.',
        'https://agronext.com/apply',
        'https://agronext.com/og-image.png',
        'Apply for Business Financing'
    );
}

export default function ApplyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <ApplyContent />
            <Footer />
        </div>
    )
}
