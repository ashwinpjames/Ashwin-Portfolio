import { Link, useParams } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import { coreServices, growthServices } from '../data/services.js'
import GoogleAdsDetail from './GoogleAdsDetail.jsx'
import SEOService from './SEOService.jsx'
import PerformanceMarketingService from './PerformanceMarketingService.jsx'
import RelatedLinks from '../components/seo/RelatedLinks.jsx'

const allServices = [...coreServices, ...growthServices]

const relatedBySlug = {
  'lead-generation': [
    { to: '/services/google-ads', label: 'Google Ads', description: 'Capture existing search demand.' },
    { to: '/services/meta-ads', label: 'Meta Ads', description: 'Create and qualify new demand.' },
    { to: '/services/hubspot', label: 'HubSpot CRM & Automation', description: 'Route and measure the leads.' },
  ],
  'website-development': [
    { to: '/services/cro', label: 'CRO', description: 'Improve the conversion journey.' },
    { to: '/services/seo', label: 'SEO', description: 'Build organic search visibility.' },
    { to: '/services/lead-generation', label: 'Lead Generation', description: 'Connect the site to pipeline growth.' },
  ],
  'cro': [
    { to: '/services/google-ads', label: 'Google Ads', description: 'Improve the destination for paid search.' },
    { to: '/services/meta-ads', label: 'Meta Ads', description: 'Improve conversion from paid social.' },
    { to: '/services/website-development', label: 'Website Development', description: 'Fix deeper website constraints.' },
  ],
  'whatsapp-marketing': [
    { to: '/services/lead-generation', label: 'Lead Generation', description: 'Create the acquisition system.' },
    { to: '/services/hubspot', label: 'HubSpot CRM & Automation', description: 'Connect conversations to the pipeline.' },
    { to: '/services/meta-ads', label: 'Meta Ads', description: 'Generate high intent conversations.' },
  ],
  'hubspot': [
    { to: '/services/lead-generation', label: 'Lead Generation', description: 'Connect acquisition to CRM outcomes.' },
    { to: '/services/whatsapp-marketing', label: 'WhatsApp Marketing', description: 'Improve lead response and follow up.' },
    { to: '/services/performance-marketing', label: 'Performance Marketing', description: 'Connect CRM data to acquisition decisions.' },
  ],
  'wordpress': [
    { to: '/services/website-development', label: 'Website Development', description: 'Build the broader website foundation.' },
    { to: '/services/cro', label: 'CRO', description: 'Turn more existing traffic into action.' },
    { to: '/services/seo', label: 'SEO', description: 'Strengthen technical search foundations.' },
  ],
}

const iconSets = {
  'lead-generation': ['↗', '◎', '▣', '✓'],
  'website-development': ['⌘', '◇', '↗', '▤'],
  'performance-marketing': ['◒', '↗', '◎', '▥'],
  'whatsapp-marketing': ['◌', '↗', '◎', '✓'],
}

export default function ServiceDetail() {
  const { slug } = useParams()
  if (slug === 'google-ads') return <GoogleAdsDetail />
  if (slug === 'seo') return <SEOService />
  if (slug === 'performance-marketing') return <PerformanceMarketingService />

  const service = allServices.find((item) => item.id === slug)
  if (!service) return <main className="service-detail-page"><div className="container"><h1>Service not found.</h1><Link to="/services">Back to Services</Link></div></main>

  const points = service.points ?? []
  const outcome = service.bestFor ?? service.outcome
  const icons = iconSets[slug] ?? ['◒', '↗', '◎', '✓']
  const relatedLinks = relatedBySlug[slug] ?? [
    { to: '/services/performance-marketing', label: 'Performance Marketing', description: 'Connect acquisition, conversion and measurement.' },
    { to: '/services/lead-generation', label: 'Lead Generation', description: 'Build a healthier acquisition system.' },
    { to: '/case-studies', label: 'Case Studies', description: 'See selected work and analysis.' },
  ]

  return <main className="service-detail-page" id="main">
    <section className="service-detail-hero">
      <div className="service-detail-grid" aria-hidden="true" />
      <div className="service-floating-icons" aria-hidden="true">{icons.map((icon, index) => <span className={`service-floating-icon service-floating-icon-${index + 1}`} key={`${icon}-${index}`}>{icon}</span>)}</div>
      <div className="container service-detail-inner">
        <div className="service-detail-meta"><span className="service-detail-number">{service.number}</span><span className="service-detail-badge">{service.badge ?? 'Growth service'}</span></div>
        <p className="services-eyebrow">Service · Dubai, UAE</p><h1>{service.title}</h1><p className="service-detail-lead">{service.description}</p>
        <a className="service-detail-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss this service <span>↗</span></a>
      </div>
    </section>
    <section className="service-detail-section"><div className="container service-detail-columns"><div><p className="services-eyebrow">What it covers</p><h2>A focused service built around the outcome.</h2></div><div>{points.length > 0 ? <ul className="service-detail-list">{points.map((point) => <li key={point}>{point}</li>)}</ul> : <p className="service-detail-copy">This service connects the right strategy, execution and measurement around the commercial problem it is designed to solve.</p>}<div className="service-detail-outcome"><span>{service.bestFor ? 'Best for' : 'Outcome'}</span><strong>{outcome}</strong></div></div></div></section>
    <RelatedLinks eyebrow="Continue exploring" title="Related services and work" links={relatedLinks} />
    <section className="service-detail-cta-section"><div className="container"><p className="services-eyebrow">Ready to improve this?</p><h2>Let’s build the right system around your growth goal.</h2><div className="service-detail-final-actions"><a className="service-detail-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a><Link className="service-detail-back-button" to="/services">← Back to Services</Link></div></div></section>
  </main>
}
