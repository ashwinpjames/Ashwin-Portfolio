import { Link, useParams } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import { coreServices, growthServices } from '../data/services.js'
import GoogleAdsDetail from './GoogleAdsDetail.jsx'
import MetaAdsService from './MetaAdsService.jsx'
import SEOService from './SEOService.jsx'
import ServiceLanding from './ServiceLanding.jsx'

const allServices = [...coreServices, ...growthServices]
const landingServiceSlugs = new Set([
  'website-development',
  'lead-generation',
  'landing-page-optimisation',
  'performance-growth-marketing',
  'whatsapp-marketing',
  'hubspot',
  'wordpress',
])

export default function ServiceDetail() {
  const { slug } = useParams()
  if (slug === 'google-ads') return <GoogleAdsDetail />
  if (slug === 'meta-ads') return <MetaAdsService />
  if (slug === 'seo') return <SEOService />
  if (landingServiceSlugs.has(slug)) return <ServiceLanding />

  const service = allServices.find((item) => item.id === slug)
  if (!service) return <main className="service-detail-page"><div className="container"><h1>Service not found.</h1><Link to="/services">Back to services</Link></div></main>

  const points = service.points ?? []
  const outcome = service.bestFor ?? service.outcome

  return <main className="service-detail-page" id="main">
    <section className="service-detail-hero"><div className="service-detail-grid" aria-hidden="true"/><div className="container service-detail-inner">
      <Link className="service-detail-back" to="/services">← Back to services</Link>
      <div className="service-detail-meta"><span className="service-detail-number">{service.number}</span><span className="service-detail-badge">{service.badge ?? 'Growth service'}</span></div>
      <p className="services-eyebrow">Service</p><h1>{service.title}</h1><p className="service-detail-lead">{service.description}</p>
      <a className="service-detail-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss this service <span>↗</span></a>
    </div></section>
    <section className="service-detail-section"><div className="container service-detail-columns"><div><p className="services-eyebrow">What it covers</p><h2>A focused service built around the outcome.</h2></div><div>{points.length > 0 ? <ul className="service-detail-list">{points.map((point) => <li key={point}>{point}</li>)}</ul> : <p className="service-detail-copy">This service connects the right strategy, execution and measurement around the commercial problem it is designed to solve.</p>}<div className="service-detail-outcome"><span>{service.bestFor ? 'Best for' : 'Outcome'}</span><strong>{outcome}</strong></div></div></div></section>
    <section className="service-detail-cta-section"><div className="container"><p className="services-eyebrow">Ready to improve this?</p><h2>Let’s build the right system around your growth goal.</h2><a className="service-detail-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a></div></section>
  </main>
}
