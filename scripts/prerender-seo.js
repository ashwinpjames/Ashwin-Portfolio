import fs from 'node:fs'
import path from 'node:path'
import { routeMeta } from '../src/seo-meta.js'

const distDir = path.resolve('dist')
const serverEntryPath = path.resolve('dist-server/entry-server.js')
const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf8')
const { render } = await import(serverEntryPath)

const escapeHtml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const buildPage = async (pathname, [title, description]) => {
  let html = template
  const renderedApp = await render(pathname)
  html = html.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
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
  const html = await buildPage(pathname, metadata)
  if (pathname === '/') {
    fs.writeFileSync(templatePath, html, 'utf8')
    continue
  }
  const outputDir = path.join(distDir, pathname.replace(/^\//, ''))
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8')
}

console.log(`Prerendered full HTML for ${Object.keys(routeMeta).length} routes.`)
