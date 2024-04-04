/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'img.ophim13.cc',
      },
      {
        protocol: 'https',
        hostname: 'img.phimapi.com',
      },
      {
        protocol: 'https',
        hostname: 'img.ophim1.com',
      },
    ],
  },
};

export default nextConfig;
