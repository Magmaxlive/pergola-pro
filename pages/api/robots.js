export default function handler(req, res) {
  const host = req.headers.host || ''
  const isServerSubdomain = host.startsWith('server.')

  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Cache-Control', 'public, max-age=86400')

  if (isServerSubdomain) {
    res.send(`User-agent: *\nDisallow: /\n`)
  } else {
    res.send(`User-agent: *\nAllow: /\n\nSitemap: https://pergolapro.co.nz/sitemap.xml\n`)
  }
}
