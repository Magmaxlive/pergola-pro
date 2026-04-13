/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'server.pergolapro.co.nz' }],
        destination: 'https://pergolapro.co.nz/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
