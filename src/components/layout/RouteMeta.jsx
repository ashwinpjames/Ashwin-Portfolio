import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const meta = {
  '/': ['Performance Marketing Specialist in Dubai, UAE | Ashwin James', 'Performance marketing specialist in Dubai, UAE, helping businesses generate and qualify leads through Meta Ads, Google Ads, CRM and funnel optimisation.'],
  '/about': ['About Ashwin James | Performance Marketing Specialist', 'Learn about Ashwin James, a UAE based performance marketing specialist focused on paid advertising, lead generation, analytics and measurable business growth.'],
  '/services': ['Performance Marketing Services in Dubai, UAE | Ashwin James', 'Explore performance marketing services in Dubai including paid ads, lead generation, CRO, analytics and growth systems built around measurable business outcomes.'],
  '/services/google-ads': ['Google Ads Specialist in UAE | Ashwin James', 'Google Ads specialist in UAE helping businesses attract qualified leads through search campaigns, conversion tracking, landing pages and performance optimisation.'],
  '/services/meta-ads': ['Meta Ads Specialist in UAE | Ashwin James', 'Meta Ads specialist in UAE helping businesses generate qualified leads through audience strategy, creative testing, campaign optimisation and conversion focused funnels.'],
  '/services/seo': ['SEO Specialist in Dubai, UAE | Ashwin James', 'SEO specialist in Dubai helping businesses improve search visibility through technical SEO, useful content, entity authority and AI search optimisation.'],
  '/services/website-development': ['Website Development in Dubai | Ashwin James', 'Website development in Dubai focused on fast, conversion focused websites that support SEO, lead generation, analytics and measurable marketing performance.'],
  '/services/lead-generation': ['Lead Generation Specialist in Dubai | Ashwin James', 'Lead generation specialist in Dubai helping businesses attract, qualify and convert better leads through paid ads, landing pages, CRM workflows and optimisation.'],
  '/services/cro': ['CRO Specialist in Dubai, UAE | Ashwin James', 'CRO specialist in Dubai helping businesses turn more website visitors into qualified leads through landing page optimisation, testing, analytics and funnel improvements.'],
  '/services/performance-growth-marketing': ['Performance Growth Marketing in UAE | Ashwin James', 'Performance growth marketing in UAE combining paid acquisition, conversion optimisation, analytics and CRM systems to build a more measurable growth engine.'],
  '/services/whatsapp-marketing': ['WhatsApp Marketing Specialist in UAE | Ashwin James', 'WhatsApp marketing specialist in UAE helping businesses turn leads into conversations through structured messaging, follow ups and conversion focused workflows.'],
  '/services/hubspot': ['HubSpot CRM Specialist in UAE | Ashwin James', 'HubSpot CRM specialist in UAE helping businesses organise leads, automate workflows, improve qualification and connect marketing activity with sales outcomes.'],
  '/services/wordpress': ['WordPress Website Development in Dubai | Ashwin James', 'WordPress website development in Dubai for businesses that need fast, SEO friendly and conversion focused websites built around lead generation and growth.'],
  '/case-studies': ['Performance Marketing Case Studies | Ashwin James', 'Explore performance marketing case studies covering lead generation, paid advertising, CRM, tracking and conversion optimisation with a focus on business results.'],
  '/case-studies/crm-sales-qualified-lead': ['CRM Lead Qualification Case Study | Ashwin James', 'See how CRM workflows and lead qualification can improve marketing efficiency, sales follow up and the quality of opportunities passed to the sales team.'],
  '/case-studies/meta-pixel-capi-signal-loss': ['Meta Pixel and CAPI Case Study | Ashwin James', 'Explore how Meta Pixel and Conversions API tracking can improve signal quality, attribution and campaign optimisation when browser data is lost or incomplete.'],
  '/resources': ['Performance Marketing Resources | Ashwin James', 'Access practical marketing tools, calculators, checklists and frameworks for paid advertising, lead generation, tracking, analytics and conversion optimisation.'],
  '/resources/campaign-budget-calculator': ['Campaign Budget Calculator for Paid Ads', 'Estimate your paid advertising budget using target leads, conversion rates, cost per lead and acquisition goals before launching a campaign.'],
  '/resources/utm-builder': ['UTM Builder for Marketing Campaigns | Ashwin James', 'Build consistent UTM parameters for your marketing campaigns and make traffic sources easier to track across analytics, CRM and reporting systems.'],
  '/resources/meta-ads-launch-checklist': ['Meta Ads Launch Checklist | Ashwin James', 'Use this Meta Ads launch checklist to review campaign structure, tracking, creative, targeting and conversion setup before spending your advertising budget.'],
  '/resources/lead-quality-framework': ['Lead Quality Framework for Marketers | Ashwin James', 'Use this lead quality framework to evaluate prospects beyond lead volume and connect marketing campaigns with qualification, sales follow up and revenue outcomes.'],
  '/blog': ['Performance Marketing Insights | Ashwin James', 'Practical insights on performance marketing, Meta Ads, Google Ads, lead generation, analytics, CRO and digital growth for marketers and business owners.'],
  '/blog/performance-marketing-specialist': ['Performance Marketing Specialist in UAE | Ashwin James', 'What does a performance marketing specialist do? Explore the role, skills, channels and systems involved in building measurable growth for UAE businesses.'],
  '/blog/marketing-concepts-modern-marketers-should-know': ['Marketing Concepts Every Modern Marketer Should Know', 'Understand the essential marketing concepts behind acquisition, conversion, customer value, attribution, analytics and growth in modern digital marketing.'],
  '/blog/how-meta-ads-algorithm-works': ['How Meta Ads Algorithm Works in 2026 | Ashwin James', 'Learn how the Meta Ads algorithm evaluates and ranks ads, from retrieval and ranking to the auction, and what advertisers can do to improve performance.'],
  '/blog/hormozi-meta-ads-strategy': ['Alex Hormozi Meta Ads Strategy | Ashwin James', 'Analyse Alex Hormozi\'s Meta Ads strategy, creative approach and targeting philosophy to understand how creative volume can influence modern paid acquisition.'],
  '/blog/more-leads-revenue-didnt-move': ['Why More Leads Do Not Always Mean More Revenue', 'Getting more leads does not guarantee more revenue. Learn how lead quality, sales follow up, conversion rates and acquisition economics affect growth.'],
  '/blog/seo-ai-search-entity-authority-2026': ['SEO for AI Search and Entity Authority in 2026', 'Learn how entity authority, structured content, retrieval friendly information and topical relevance can help businesses become more visible in AI search.'],
  '/contact': ['Contact Ashwin James | Performance Marketing Specialist', 'Contact Ashwin James to discuss performance marketing, paid ads, lead generation, CRM, conversion optimisation and growth opportunities for your business.'],
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
