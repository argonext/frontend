// robots.txt Next.js MetadataRoute implementation
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/*',
                    '/auth/*',
                    '/app/*',
                    '/apply/*',
                ],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
