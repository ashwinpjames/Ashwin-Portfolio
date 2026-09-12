import fs from 'node:fs'
import path from 'node:path'
import { routeMeta } from '../src/seo-meta.js'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')

const excludedRoutes = new Set([
  '/services/performance-growth-marketing',
])

const urls = Object.keys(routeMeta)
  .filter((route) => !excludedRoutes.has(route))
  .sort((a, b) => a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b))

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((route) => `  <url><loc>https://www.ashwinjames.com${route}</loc></url>`)
  .join('\n')}\n</urlset>\n`

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(sitemapPath, xml, 'utf8')

console.log(`Generated sitemap.xml with ${urls.length} URLs.`)
