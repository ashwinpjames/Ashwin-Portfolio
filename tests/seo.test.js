import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { allRouteMeta, canonicalUrl, normalizePath } from '../src/seo.js'
import { contactMethod } from '../src/utils/analytics.js'

const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll("'", '&#39;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
const knownPaths = new Set(Object.keys(allRouteMeta))

test('all intended routes ship unique metadata, page content, one H1 and canonical HTML', () => {
  const titles = new Set(), descriptions = new Set()
  for (const [route, [title, description]] of Object.entries(allRouteMeta)) {
    const file = route === '/' ? 'dist/index.html' : path.join('dist', route, 'index.html')
    const html = fs.readFileSync(file, 'utf8')
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route)
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, route)
    assert.ok(html.includes(`href="${canonicalUrl(route)}"`), route)
    assert.ok(html.includes(`<title>${escape(title)}</title>`), route)
    assert.ok(html.includes(`property="og:title" content="${escape(title)}"`), route)
    assert.ok(html.includes(`property="og:description" content="${escape(description)}"`), route)
    assert.ok(!titles.has(title), `Duplicate title: ${route}`)
    assert.ok(!descriptions.has(description), `Duplicate description: ${route}`)
    titles.add(title); descriptions.add(description)
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const url = new URL(href.replaceAll('&amp;', '&'), `https://www.ashwinjames.com${route}`)
      if (url.hostname !== 'www.ashwinjames.com' && url.hostname !== 'ashwinjames.com') continue
      const destination = normalizePath(url.pathname)
      assert.ok(knownPaths.has(destination) || fs.existsSync(path.join('dist', url.pathname)), `${route} links to missing/legacy destination ${url.pathname}`)
    }
  }
})

test('build provides a noindex 404 and does not rewrite unknown URLs to the homepage', () => {
  assert.equal(config.rewrites, undefined)
  const html = fs.readFileSync('dist/404.html', 'utf8')
  assert.ok(html.includes('noindex,follow'))
  assert.ok(html.includes('This page took a wrong turn.'))
  assert.ok(!html.includes('Growth Driven</span>'))
  assert.ok(!fs.existsSync('dist/services/performance-growth-marketing/index.html'))
})

test('legacy routes redirect directly and apex rule does not match previews or www', () => {
  assert.equal(config.redirects[0].destination, 'https://www.ashwinjames.com/')
  const apex = config.redirects.find((r) => r.has?.some((condition) => condition.type === 'host'))
  assert.equal(apex.has[0].value, 'ashwinjames.com')
  assert.equal(apex.destination, 'https://www.ashwinjames.com/:path*')
  for (const redirect of config.redirects.filter((r) => r.source.startsWith('/services/'))) {
    assert.ok(knownPaths.has(redirect.destination), redirect.source)
    assert.ok(!config.redirects.some((r) => r.source === redirect.destination), redirect.source)
  }
})

test('unverified result figures are absent from public proof pages', () => {
  for (const file of ['dist/index.html', 'dist/case-studies/index.html', 'dist/case-studies/crm-sales-qualified-lead/index.html', 'dist/case-studies/meta-pixel-capi-signal-loss/index.html']) {
    const html = fs.readFileSync(file, 'utf8')
    for (const claim of ['4,499', '609</', '12,000', '95 to 99%', '30 to 50%', '5.7x']) assert.ok(!html.includes(claim), `${file}: ${claim}`)
  }
})

test('contact classification does not accept lookalike hosts', () => {
  assert.equal(contactMethod('https://wa.me/123?text=private'), 'whatsapp')
  assert.equal(contactMethod('https://wa.me.example.com/123'), null)
  assert.equal(contactMethod('javascript:alert(1)'), null)
  assert.equal(contactMethod('mailto:test@example.com'), 'email')
})

test('visible breadcrumbs and their structured data agree on every non-home route', async () => {
  const { breadcrumbsFor, breadcrumbSchema, relatedContentFor } = await import('../src/utils/content-navigation.js')
  assert.deepEqual(breadcrumbsFor('/'), [])
  assert.deepEqual(breadcrumbsFor('/missing-route'), [])
  assert.deepEqual(breadcrumbsFor('/about/'), breadcrumbsFor('/about'))
  for (const route of Object.keys(allRouteMeta)) {
    const file = route === '/' ? 'dist/index.html' : path.join('dist', route, 'index.html')
    const html = fs.readFileSync(file, 'utf8')
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([, json]) => JSON.parse(json))
    if (route === '/') {
      assert.ok(schemas.some((schema) => schema['@type'] === 'WebSite' && schema.url === 'https://www.ashwinjames.com/'))
      continue
    }
    const crumbs = breadcrumbsFor(route)
    assert.equal(crumbs.at(-1).path, route)
    const markup = schemas.filter((schema) => schema['@type'] === 'BreadcrumbList')
    assert.equal(markup.length, 1, route)
    assert.deepEqual(markup[0], breadcrumbSchema(crumbs), route)
    assert.ok(html.includes('aria-label="Breadcrumb"'), route)
    for (const item of relatedContentFor(route)) {
      assert.ok(knownPaths.has(item.path), route)
      assert.notEqual(item.path, route)
      assert.ok(html.includes(`href="${item.path}"`), route)
    }
  }
})
