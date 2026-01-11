// Main Sitemap Index Route Handler
import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com';

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
        const sitemaps = [
            `${BASE_URL}/static-pages-sitemap.xml`,
            `${BASE_URL}/campaigns-sitemap.xml`,
            // Add more sitemap URLs here as needed
        ];

        const sitemapIndexXML = await buildSitemapIndex(sitemaps);

        return new NextResponse(sitemapIndexXML, {
            headers: {
                'Content-Type': 'application/xml',
                'Content-Length': Buffer.byteLength(sitemapIndexXML).toString(),
            },
        });
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error generating sitemap index:', error);
        }
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
