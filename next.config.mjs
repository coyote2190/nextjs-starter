/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias
    };
    return config;
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yklic.fr',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
