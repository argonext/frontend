import { NextResponse } from 'next/server';
import { dummyCampaigns } from '@/app/campaigns/_utils/mockData';

const HOST_NAME = process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com';
const PAGE_SIZE = 500;

interface Sitemap {
    id: number;
    url: string;
}

interface Campaign {
    id: string;
    slug: string;
}

async function fetchAllCampaigns(): Promise<Campaign[]> {
    // In production, this would fetch from your API
    // For now, using dummy data
    const campaigns = dummyCampaigns.map(campaign => ({
        id: campaign.id,
        slug: campaign.slug,
    }));

    return campaigns;
}

async function generateBulkSitemaps(): Promise<Sitemap[]> {
    const campaigns = await fetchAllCampaigns();

    const perSitemap = PAGE_SIZE;
    const total = campaigns.length;
    const numberOfSitemaps = Math.ceil(total / perSitemap);

    // Generate an array of sitemap IDs
    const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
        id: index,
        url: `${HOST_NAME}/campaigns/sitemap/${index + 1}.xml`,
    }));
    return sitemaps;
}

async function buildSitemapIndex(sitemaps: string[]): Promise<string> {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
            .map(
                sitemapURL => `
  <sitemap>
    <loc>${sitemapURL}</loc>
  </sitemap>`
            )
            .join('')}
</sitemapindex>`;
    return xml;
}

export async function GET() {
    try {
        // Generate dynamic sitemaps
        const campaignSitemaps = await generateBulkSitemaps();

        // Combine into array of URLs
        const sitemaps = [...campaignSitemaps.map(sitemap => sitemap.url)];

        const sitemapIndexXML = await buildSitemapIndex(sitemaps);

        return new NextResponse(sitemapIndexXML, {
            headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(sitemapIndexXML).toString(),
            },
        });
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error generating campaigns sitemap index:', error);
        }
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
