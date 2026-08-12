import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const meta = {
  '/': ['Ashwin James — Performance Marketing Specialist', 'Performance marketing, lead generation, analytics and growth systems for businesses in Dubai and the UAE.'],
  '/about': ['About Ashwin James — Performance Marketing & Growth', 'Learn how Ashwin approaches performance marketing, growth systems and practical delivery for UAE businesses.'],
  '/resume': ['Resume — Ashwin James', 'Experience, skills, education and selected work from Ashwin James, a performance marketing specialist in the UAE.'],
  '/services': ['Performance Marketing Services — Ashwin James', 'Google Ads, Meta Ads, SEO, lead generation, websites, CRO and growth systems for UAE businesses.'],
  '/case-studies': ['Case Studies — Ashwin James', 'Selected performance marketing, lead generation, analytics and growth case studies.'],
  '/case-studies/crm-sales-qualified-lead': ['CRM & Sales Qualified Lead Case Study — Ashwin James', 'A detailed analysis of lead quality, sales qualification and CRM performance.'],
  '/resources': ['Marketing Resources — Ashwin James', 'Free practical marketing tools, checklists and frameworks for better growth decisions.'],
  '/resources/campaign-budget-calculator': ['Campaign Budget Calculator — Ashwin James', 'Estimate a practical starting advertising budget from your business economics and acquisition goals.'],
  '/blog': ['Marketing Insights — Ashwin James', 'Practical insights on performance marketing, lead quality, analytics and growth.'],
  '/contact': ['Contact Ashwin James — Performance Marketing', 'Start a conversation about performance marketing, lead generation, conversion or growth systems.'],
}

function setMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`)
  if (!element) { element = document.createElement('meta'); element.name = name; document.head.appendChild(element) }
  element.content = content
}

export default function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = meta[pathname] || ['Ashwin James — Performance Marketing Specialist', 'Performance marketing and growth systems for businesses in Dubai and the UAE.']
    document.title = title
    setMeta('description', description)
    setMeta('theme-color', '#050816')
  }, [pathname])
  return null
}
