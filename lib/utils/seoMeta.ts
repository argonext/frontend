import { Metadata } from 'next';

const SITE_NAME = 'Agronext';
const TITLE = 'Agronext - Smart Investment Platform';
const DESCRIPTION =
    'Start investing in verified businesses with as low as ৳5,000. Join thousands of investors building wealth through ethical and transparent investments.';

export async function generateSeoMetadata(
    title: string,
    description: string,
    canonicalUrl: string,
    thumbnail?: string,
    thumbnailAlt?: string
): Promise<Metadata> {
    const DEFAULT_THUMBNAIL = 'https://agronext.com/og-image.png'; // Update with your actual default thumbnail

    return {
        title: title || TITLE,
        description: description || DESCRIPTION,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: title || TITLE,
            description: description || DESCRIPTION,
            type: 'website',
            siteName: SITE_NAME,
            url: canonicalUrl,
            images: [
                {
                    url: thumbnail || DEFAULT_THUMBNAIL,
                    alt: thumbnailAlt || title,
                },
            ],
        },
        twitter: {
            title: title || TITLE,
            description: description || DESCRIPTION,
            card: 'summary_large_image',
            images: [
                {
                    url: thumbnail || DEFAULT_THUMBNAIL,
                    alt: thumbnailAlt || title,
                },
            ],
        },
    };
}
