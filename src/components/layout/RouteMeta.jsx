import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMeta } from '../../seo-meta.js'

function setMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`)
  if (!element) { element = document.createElement('meta'); element.name = name; document.head.appendChild(element) }
  element.content = content
}

function setCanonical(pathname) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) { element = document.createElement('link'); element.rel = 'canonical'; document.head.appendChild(element) }
  element.href = `https://www.ashwinjames.com${pathname === '/' ? '/' : pathname}`
}

export default function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = routeMeta[pathname] || ['Performance Marketing Specialist in UAE | Ashwin James', 'Ashwin James is a performance marketing specialist in the UAE focused on paid advertising, lead generation, analytics, conversion optimisation and measurable business growth.']
    document.title = title
    setMeta('description', description)
    setMeta('theme-color', '#050816')
    setCanonical(pathname)
  }, [pathname])
  return null
}
