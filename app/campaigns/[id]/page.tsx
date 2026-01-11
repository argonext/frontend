import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Suspense } from 'react';
import { campaignService } from '../_api/campaign-service';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CampaignDetailLoader } from './_components/CampaignDetailLoader';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.id;

    try {
        const campaign = await campaignService.getCampaignBySlug(slug);

        if (!campaign) {
            return generateSeoMetadata(
                'Campaign Not Found | Agronext',
                'The requested campaign could not be found.',
                `https://agronext.com/campaigns/${slug}`,
                'https://agronext.com/og-image.png'
            );
        }

        return generateSeoMetadata(
            `${campaign.title} | Invest in ${campaign.category} | Agronext`,
            `${campaign.description?.substring(0, 155) || campaign.title}... Minimum investment: ${campaign.minInvestment?.toLocaleString('en-BD') || 'N/A'} BDT. Expected returns: ${campaign.annualizedReturn || 'N/A'}%. ${campaign.investmentStructure || ''} structure.`,
            `https://agronext.com/campaigns/${slug}`,
            campaign.coverImage,
            campaign.title
        );
    } catch (error) {
        return generateSeoMetadata(
            'Campaign | Agronext',
            'Explore investment opportunities in ethical and Shariah-compliant businesses.',
            `https://agronext.com/campaigns/${slug}`,
            'https://agronext.com/og-image.png'
        );
    }
}

export default async function CampaignDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const slug = resolvedParams.id;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Suspense fallback={
                <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
                    <div className="max-w-7xl mx-auto">
                        <div className="animate-pulse space-y-8">
                            <div className="h-96 bg-muted rounded-xl"></div>
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="h-64 bg-muted rounded-xl"></div>
                                    <div className="h-64 bg-muted rounded-xl"></div>
                                </div>
                                <div className="h-96 bg-muted rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            }>
                <CampaignDetailLoader slug={slug} />
            </Suspense>
            <Footer />
        </div>
    );
}
