import { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/utils/seoMeta';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CampaignsListContent } from './_components/CampaignsListContent';
import { campaignService } from './_api/campaign-service';

export async function generateMetadata(): Promise<Metadata> {
    return generateSeoMetadata(
        'Completed Campaigns | Agronext - Browse Investment Opportunities',
        'View completed investment campaigns on Agronext. Browse Shariah-compliant investment opportunities in agriculture, logistics, and SMEs that have been successfully funded.',
        'https://agronext.com/campaigns',
        'https://agronext.com/og-image.png',
        'Active Investment Campaigns'
    );
}

export default async function CampaignsPage() {
    // Fetch initial campaigns on server for instant page load
    const initialCampaigns = await campaignService.getFundedCampaigns();

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <CampaignsListContent initialCampaigns={initialCampaigns} />
            <Footer />
        </div>
    )
}
