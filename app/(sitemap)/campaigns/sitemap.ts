import type { MetadataRoute } from 'next';
import { dummyCampaigns } from '@/app/campaigns/_utils/mockData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com';
const PAGE_SIZE = 500;

interface Campaign {
    id: string;
    slug: string;
    updatedAt?: string;
}

async function fetchAllCampaigns(): Promise<Campaign[]> {
    // In production, this would fetch from your API
    // For now, using dummy data
    const campaigns = dummyCampaigns.map(campaign => ({
        id: campaign.id,
        slug: campaign.slug,
        updatedAt: new Date().toISOString(),
    }));

    return campaigns;
}

export const revalidate = 3600; // one hour

export async function generateSitemaps() {
    const campaigns = await fetchAllCampaigns();
    const perSitemap = PAGE_SIZE;
    const total = campaigns.length;
    const numberOfSitemaps = Math.ceil(total / perSitemap);

    // Generate an array of sitemap IDs
    const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
        id: index + 1,
    }));
    return sitemaps;
}

export default async function sitemap({
    id,
}: {
    id: number;
}): Promise<MetadataRoute.Sitemap> {
    const perSitemap = PAGE_SIZE;
    const start = (id - 1) * perSitemap;

    const campaigns = await fetchAllCampaigns();
    const slicedCampaigns = campaigns.slice(start, start + perSitemap);

    return slicedCampaigns.map(campaign => ({
        url: `${BASE_URL}/campaigns/${campaign.id}`,
        lastModified: new Date(campaign.updatedAt || new Date()),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }));
}
