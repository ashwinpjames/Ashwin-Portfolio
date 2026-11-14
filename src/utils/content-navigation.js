import { allRouteMeta, canonicalUrl, normalizePath } from '../seo.js'

const sectionLabels = { '/blog': 'Insights', '/services': 'Services', '/resources': 'Resources', '/case-studies': 'Frameworks' }

export function breadcrumbsFor(pathname) {
  const route = normalizePath(pathname)
  if (route === '/' || !allRouteMeta[route]) return []
  const crumbs = [{ path: '/', label: 'Home' }]
  const parent = `/${route.split('/')[1]}`
  if (parent !== route && sectionLabels[parent]) crumbs.push({ path: parent, label: sectionLabels[parent] })
  crumbs.push({ path: route, label: sectionLabels[route] || allRouteMeta[route][0].replace(/ \| Ashwin James$/, '') })
  return crumbs
}

export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(({ path, label }, index) => ({ '@type': 'ListItem', position: index + 1, name: label, item: canonicalUrl(path) })),
  }
}

// Curated destination sets connect a reader's problem with an existing service.
// Keep these bounded and filter against the real route registry, not guessed URLs.
const groups = {
  meta: ['/services/meta-ads', '/blog/cpm-explained', '/blog/meta-ads-campaign-structure', '/blog/improve-lead-quality-connection-rates'],
  google: ['/services/google-ads', '/blog/google-ads-lead-quality', '/blog/google-ads-conversion-tracking', '/blog/google-ads-keyword-intent'],
  crm: ['/services/hubspot-crm-integration', '/blog/crm-lead-tracking-paid-ads', '/blog/lead-generation-vs-lead-qualification', '/case-studies/crm-sales-qualified-lead'],
  measurement: ['/services/performance-marketing-services', '/blog/paid-advertising-roi', '/blog/customer-acquisition-cost-vs-cpl', '/blog/ga4-performance-marketing'],
  conversion: ['/services/cro', '/blog/lead-form-optimisation', '/blog/google-ads-clicks-not-turning-into-leads', '/blog/improve-lead-quality-connection-rates'],
  general: ['/services/performance-marketing-services', '/blog/performance-marketing-strategy-uae', '/blog/performance-marketing-metrics', '/blog/improve-lead-quality-connection-rates'],
}

export function relatedContentFor(pathname) {
  const route = normalizePath(pathname)
  if (!allRouteMeta[route] || !/^\/(blog|services|case-studies)\//.test(route)) return []
  const slug = route.split('/').pop()
  const group = /crm|hubspot|qualification|sales-pipeline/.test(slug) ? 'crm'
    : /meta|cpm|ctr|creative|hormozi|andromeda/.test(slug) ? 'meta'
    : /google-ads|google-search/.test(slug) ? 'google'
    : /cro|landing|lead-form|conversion-rate/.test(slug) ? 'conversion'
    : /roi|roas|acquisition-cost|analytics|attribution|tracking|metrics/.test(slug) ? 'measurement'
    : 'general'
  return groups[group].filter((path) => path !== route && allRouteMeta[path]).slice(0, 3).map((path) => ({
    path,
    title: allRouteMeta[path][0].replace(/ \| Ashwin James$/, ''),
    description: allRouteMeta[path][1],
    isService: path.startsWith('/services/'),
  }))
}
