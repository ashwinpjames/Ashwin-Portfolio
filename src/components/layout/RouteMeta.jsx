import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { allRouteMeta, canonicalUrl, getPageMeta, normalizePath, openGraphType } from '../../seo.js'

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.content = content
}

export default function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = getPageMeta(pathname)
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', allRouteMeta[normalizePath(pathname)] ? 'index,follow' : 'noindex,follow')
    setMeta('property', 'og:type', openGraphType(pathname))
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl(pathname))
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = canonicalUrl(pathname)
  }, [pathname])
  return null
}
