import { campaignService } from "@/app/campaigns/_api/campaign-service"
import { FeaturedInvestmentsClient } from "./featured-investments-client"

export async function FeaturedInvestments() {
  // Fetch data on the server for instant page load
  const campaigns = await campaignService.getFeaturedCampaigns(4)

  return <FeaturedInvestmentsClient campaigns={campaigns} />
}
