/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'byiocdn.sgp1.cdn.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'agronext.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://agronext.com',
  },
}

export default nextConfig
