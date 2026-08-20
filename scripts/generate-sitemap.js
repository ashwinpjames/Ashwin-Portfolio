import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const appPath = path.join(root, 'src', 'App.jsx')
const servicesPath = path.join(root, 'src', 'data', 'services.js')
const publicDir = path.join(root, 'public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')

const appSource = fs.readFileSync(appPath, 'utf8')
const servicesSource = fs.readFileSync(servicesPath, 'utf8')

const routeMatches = [...appSource.matchAll(/<Route\s+path=["']([^"']+)["']/g)]
const routes = routeMatches
  .map((match) => match[1])
  .filter((route) => route !== '*' && !route.includes(':'))

const serviceIds = [...servicesSource.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map((match) => match[1])

const serviceRoutes = serviceIds.map((id) => `/services/${id}`)
const urls = [...new Set([...routes, ...serviceRoutes])]
  .filter((route) => route !== '/')
  .sort()

urls.unshift('/')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((route) => `  <url><loc>https://ashwinjames.com${route}</loc></url>`)
  .join('\n')}\n</urlset>\n`

fs.mkdirSync(publicDir, { recursive: true })
fs.writeFileSync(sitemapPath, xml, 'utf8')

console.log(`Generated sitemap.xml with ${urls.length} URLs.`)
