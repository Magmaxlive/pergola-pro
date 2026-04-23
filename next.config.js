/** @type {import('next').NextConfig} */
const { data } = require('./supurbData')

function slugify(str) {
  return String(str)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const suburbRedirects = data
  .filter((entry) => !entry.page_type)
  .map((entry) => {
    const base = slugify(entry.suburb)
    return {
      source: `/${base}`,
      destination: `/pergola-${base}/`,
      permanent: true,
    }
  })

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      // Redirect server subdomain to main domain
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'server.pergolapro.co.nz' }],
        destination: 'https://pergolapro.co.nz/:path*',
        permanent: true,
      },
      // Suburb-only slugs → canonical pergola-suburb URLs
      ...suburbRedirects,
    ]
  },
}

module.exports = nextConfig
