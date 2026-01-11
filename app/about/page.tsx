import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutContent } from './_components/AboutContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'About Us | Agronext - Smart Investment Platform',
        'Learn about Agronext\'s mission to democratize ethical investment in Bangladesh. Discover our Shariah-compliant approach to financing SMEs and creating impact.',
        'https://agronext.com/about',
        'https://agronext.com/og-image.png',
        'About Agronext'
    );
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <AboutContent />
            <Footer />
        </div>
    )
}
