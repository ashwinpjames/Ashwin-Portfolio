import fs from 'node:fs'
import path from 'node:path'
import { routeMeta } from '../src/seo-meta.js'

const distDir = path.resolve('dist')
const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf8')

const escapeHtml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const buildPage = (pathname, [title, description]) => {
  let html = template
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`)
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/i, `<meta name="description" content="${escapeHtml(description)}" />`)

  const canonical = `https://www.ashwinjames.com${pathname === '/' ? '/' : pathname}`
  if (/<link\s+rel="canonical"/i.test(html)) {
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`)
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${canonical}" />\n  </head>`)
  }

  return html
}

for (const [pathname, metadata] of Object.entries(routeMeta)) {
  if (pathname === '/') continue
  const outputDir = path.join(distDir, pathname.replace(/^\//, ''))
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'index.html'), buildPage(pathname, metadata))
}

console.log(`Prerendered SEO metadata for ${Object.keys(routeMeta).length} routes.`)
