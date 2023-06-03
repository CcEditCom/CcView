/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src/'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/upload/**'
      }
    ]
  }
};

module.exports = nextConfig;
