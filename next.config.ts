// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/**', // permite todas as imagens desse domínio
      },
    ],
  },
};

export default nextConfig;
