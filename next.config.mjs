/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com",
            },
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: 'https',
                hostname: "i.ytimg.com",
            },
            {
                protocol: 'https',
                hostname: "images.google.com",
            },
            {
                protocol: 'https',
                hostname: "google.com",
            },
            {
                protocol: 'https',
                hostname: "YouTube.com",
            },
            {
                protocol: 'https',
                hostname: "instagram.com",
            }
        ]
    }
};

export default nextConfig;
