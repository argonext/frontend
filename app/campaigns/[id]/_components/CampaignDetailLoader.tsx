import { campaignService } from '../../_api/campaign-service';
import { CampaignDetailContent } from './CampaignDetailContent';
import { notFound } from 'next/navigation';

interface CampaignDetailLoaderProps {
    slug: string;
}

export async function CampaignDetailLoader({ slug }: CampaignDetailLoaderProps) {
    const campaign = await campaignService.getCampaignBySlug(slug);

    if (!campaign) {
        notFound();
    }

    return <CampaignDetailContent initialCampaign={campaign} />;
}
