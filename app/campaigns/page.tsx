import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Suspense } from 'react';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CampaignsDataLoader } from './_components/CampaignsDataLoader';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Completed Campaigns | Agronext - Browse Investment Opportunities',
        'View completed investment campaigns on Agronext. Browse Shariah-compliant investment opportunities in agriculture, logistics, and SMEs that have been successfully funded.',
        'https://agronext.com/campaigns',
        'https://agronext.com/og-image.png',
        'Active Investment Campaigns'
    );
}

export default function CampaignsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Suspense fallback={
                <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
                    <div className="max-w-7xl mx-auto">
                        <div className="animate-pulse space-y-8">
                            <div className="h-12 bg-muted rounded w-96"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="h-96 bg-muted rounded-xl"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }>
                <CampaignsDataLoader />
            </Suspense>
            <Footer />
        </div>
    )
}
