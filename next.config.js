/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greenteam-calculator.s3.eu-central-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
