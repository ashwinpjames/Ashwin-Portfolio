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

const getH1 = (title) => title.replace(/\s+\|\s+Ashwin James$/i, '').trim()

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
  const h1 = escapeHtml(getH1(title))
  html = html.replace('<div id="root"></div>', `<div id="root"><noscript><h1>${h1}</h1></noscript></div>`)
  return html
}
for (const [pathname, metadata] of Object.entries(routeMeta)) {
  const html = buildPage(pathname, metadata)
  if (pathname === '/') {
    fs.writeFileSync(templatePath, html, 'utf8')
    continue
  }
  const outputDir = path.join(distDir, pathname.replace(/^\//, ''))
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'index.html'), html)
}
console.log(`Prerendered SEO metadata and H1 fallbacks for ${Object.keys(routeMeta).length} routes.`)
