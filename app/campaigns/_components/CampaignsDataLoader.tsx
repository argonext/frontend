import { campaignService } from '../_api/campaign-service';
import { CampaignsListContent } from './CampaignsListContent';

export async function CampaignsDataLoader() {
    const initialCampaigns = await campaignService.getFundedCampaigns();
    return <CampaignsListContent initialCampaigns={initialCampaigns} />;
}
