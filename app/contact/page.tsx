import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from './_components/ContactContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Contact Us | Agronext',
        'Get in touch with Agronext team. Have questions about investments, business financing, or platform features? We\'re here to help.',
        'https://agronext.com/contact',
        'https://agronext.com/og-image.png',
        'Contact Agronext'
    );
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <ContactContent />
            <Footer />
        </div>
    )
}
