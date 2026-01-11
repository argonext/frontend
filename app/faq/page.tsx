import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQContent } from './_components/FAQContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'FAQ | Agronext - Frequently Asked Questions',
        'Find answers to common questions about investing, Shariah compliance, returns, and how Agronext\'s ethical investment platform works.',
        'https://agronext.com/faq',
        'https://agronext.com/og-image.png',
        'Agronext FAQ'
    );
}

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <FAQContent />
            <Footer />
        </div>
    )
}
