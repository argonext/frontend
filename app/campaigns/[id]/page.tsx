import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { campaignService } from '../_api/campaign-service';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CampaignDetailContent } from './_components/CampaignDetailContent';
import { notFound } from 'next/navigation';

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

    // Fetch campaign data on server for instant page load
    const campaign = await campaignService.getCampaignBySlug(slug);

    if (!campaign) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <CampaignDetailContent initialCampaign={campaign} />
            <Footer />
        </div>
    );
}
