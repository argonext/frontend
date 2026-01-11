import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FundedCampaignsContent } from './_components/FundedCampaignsContent';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Funded Campaigns | Agronext - Successfully Completed Investments',
        'Browse completed investment campaigns on Agronext. See successful SME financing projects and their performance across agriculture, logistics, and other sectors.',
        'https://agronext.com/funded-campaigns',
        'https://agronext.com/og-image.png',
        'Funded Campaigns'
    );
}

export default function FundedCampaignsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <FundedCampaignsContent />
            <Footer />
        </div>
    )
}
