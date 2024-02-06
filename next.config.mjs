/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['@mui/material', '@mui/system'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc'
    };
    return config;
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    forceSwcTransforms: true
  },
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
