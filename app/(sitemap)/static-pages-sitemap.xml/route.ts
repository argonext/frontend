// Static Pages Sitemap Route Handler
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com';

// List all static routes here
const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/faq',
    '/shariah',
    '/reports',
    '/campaigns',
    '/funded-campaigns',
    // Add more static routes as needed
];

export async function GET(req: NextRequest) {
    const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
            .map(
                route =>
                    `<url><loc>${BASE_URL}${route}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
            )
            .join('\n  ')}
</urlset>`;

    return new NextResponse(urlset, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
