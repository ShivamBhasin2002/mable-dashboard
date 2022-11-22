/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/data_quality/dashboard',
        permanent: true,
      }
    ];
  }

};

module.exports = nextConfig;
