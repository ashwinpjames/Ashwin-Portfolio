import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const meta = {
  '/': ['Performance Marketing Specialist in UAE | Ashwin James', 'Ashwin James is a performance marketing specialist in the UAE helping businesses grow with Google Ads, Meta Ads, lead generation, analytics and conversion optimisation.'],
  '/about': ['About Ashwin James | Performance Marketing Specialist in UAE', 'Learn about Ashwin James, a performance marketing specialist in the UAE focused on Google Ads, Meta Ads, lead generation, analytics, CRO and measurable business growth.'],
  '/resume': ['Resume | Ashwin James | Performance Marketing Specialist UAE', 'Explore the experience, skills, certifications and selected work of Ashwin James, a performance marketing specialist focused on paid advertising, lead generation and growth.'],
  '/services': ['Performance Marketing Services in UAE | Ashwin James', 'Explore performance marketing services in the UAE including Google Ads, Meta Ads, lead generation, SEO, CRO, analytics and growth systems for businesses.'],
  '/case-studies': ['Performance Marketing Case Studies | Ashwin James UAE', 'Explore performance marketing case studies covering paid advertising, lead generation, CRM, analytics, conversion optimisation and measurable growth.'],
  '/case-studies/crm-sales-qualified-lead': ['CRM & Sales Qualified Lead Case Study | Ashwin James', 'See how CRM processes, lead qualification and sales data can improve lead quality, marketing performance and revenue opportunities.'],
  '/resources': ['Marketing Resources for Performance Marketers | Ashwin James', 'Access practical marketing tools, calculators, checklists and frameworks for paid advertising, lead generation, analytics and conversion optimisation.'],
  '/resources/campaign-budget-calculator': ['Campaign Budget Calculator | Performance Marketing UAE', 'Calculate a practical advertising budget using your target leads, conversion rate, cost per lead and business acquisition goals.'],
  '/blog': ['Performance Marketing Insights | Ashwin James UAE', 'Read practical insights on performance marketing, Google Ads, Meta Ads, lead generation, analytics, CRO and digital growth in the UAE.'],
  '/blog/how-meta-ads-algorithm-works': ["How Meta's Ad Algorithm Works in 2026 | Ashwin James", "Learn how Meta Ads ranking works through retrieval, light ranking, heavy ranking and the ad auction, plus what Total Value means for advertisers."],
  '/blog/hormozi-meta-ads-strategy': ["Alex Hormozi Meta Ads Strategy | Creative Targeting Analysis", "Analyse Alex Hormozi's Meta Ads strategy, creative volume, business specific callouts and what Andromeda means for creative led targeting."],
  '/contact': ['Contact a Performance Marketing Specialist in UAE | Ashwin James', 'Contact Ashwin James to discuss performance marketing, Google Ads, Meta Ads, lead generation, conversion optimisation and measurable business growth.'],
}

function setMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`)
  if (!element) { element = document.createElement('meta'); element.name = name; document.head.appendChild(element) }
  element.content = content
}

export default function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = meta[pathname] || ['Performance Marketing Specialist in UAE | Ashwin James', 'Ashwin James is a performance marketing specialist in the UAE focused on paid advertising, lead generation, analytics, conversion optimisation and measurable business growth.']
    document.title = title
    setMeta('description', description)
    setMeta('theme-color', '#050816')
  }, [pathname])
  return null
}
