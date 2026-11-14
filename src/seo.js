import { acquisitionArticleMeta } from './data/acquisitionArticleMeta.js'
import { routeMeta } from './seo-meta.js'
import { extraRouteMeta } from './seo-meta-extra.js'

export const siteUrl = 'https://www.ashwinjames.com'
export const allRouteMeta = { ...routeMeta, ...extraRouteMeta, ...Object.fromEntries(acquisitionArticleMeta.map((article) => [`/blog/${article.slug}`, [`${article.title} | Ashwin James`, article.description]])) }
export const notFoundMeta = ['Page not found | Ashwin James', 'This page could not be found. Explore performance marketing services or contact Ashwin James.']
export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}
export function getPageMeta(pathname) {
  return allRouteMeta[normalizePath(pathname)] || notFoundMeta
}
export function canonicalUrl(pathname) {
  return `${siteUrl}${normalizePath(pathname)}`
}

export function openGraphType(pathname) {
  const route = normalizePath(pathname)
  return allRouteMeta[route] && route.startsWith('/blog/') ? 'article' : 'website'
}
