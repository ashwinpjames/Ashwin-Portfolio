import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiGoogleads, SiGoogleanalytics, SiGoogletagmanager, SiHubspot, SiMeta, SiWhatsapp, SiWordpress } from 'react-icons/si'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { whatsappUrl } from '../utils/contact.js'
import { coreServices, growthServices } from '../data/services.js'
import '../styles/services.css'
import '../styles/services-hero.css'

const allServices = [...coreServices, ...growthServices]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.services-reveal')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { nodes.forEach((node) => node.classList.add('in-view')); return undefined }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target) } }), { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function ServiceCard({ service, index }) {
  return <article id={service.id} className={`service-card surface services-reveal tone-${service.tone}`} style={{ transitionDelay: `${(index % 3) * 60}ms` }}>
    <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-badge">{service.badge}</span></div>
    <div className="service-card-main"><h3>{service.title}</h3><p className="service-description">{service.description}</p></div>
    <div className="service-card-footer"><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul><p className="service-best"><span>Best for</span>{service.bestFor}</p></div>
    <Link className="service-card-button" to={`/services/${service.id}`}>Explore this service <span>→</span></Link>
  </article>
}

const ecosystemItems = [
  { name: 'Google Ads', type: 'ads', position: 'growth-tool-1', service: 'google-ads', color: '#4285f4' },
  { name: 'Meta Ads', type: 'meta', position: 'growth-tool-2', service: 'meta-ads', color: '#5b8def' },
  { name: 'HubSpot', type: 'hubspot', position: 'growth-tool-3', service: 'hubspot', color: '#ff7a59' },
  { name: 'WordPress', type: 'wordpress', position: 'growth-tool-4', service: 'wordpress', color: '#60a5fa' },
  { name: 'Tag Manager', type: 'gtm', position: 'growth-tool-5', service: 'performance-marketing', color: '#8ab4f8' },
  { name: 'Analytics', type: 'analytics', position: 'growth-tool-6', service: 'performance-marketing', color: '#f9ab00' },
  { name: 'WhatsApp', type: 'whatsapp', position: 'growth-tool-7', service: 'whatsapp-marketing', color: '#25d366' },
  { name: 'SEO', type: 'search', position: 'growth-tool-8', service: 'seo', color: '#a78bfa' },
]

function EcosystemIcon({ type }) {
  const icons = { ads: SiGoogleads, meta: SiMeta, hubspot: SiHubspot, wordpress: SiWordpress, gtm: SiGoogletagmanager, analytics: SiGoogleanalytics, whatsapp: SiWhatsapp, search: HiMagnifyingGlass }
  const Icon = icons[type] || HiMagnifyingGlass
  return <Icon aria-hidden="true" />
}

function GrowthEcosystem() {
  return <div className="growth-ecosystem" aria-label="Explore the services in Ashwin's growth system">
    <div className="growth-ecosystem-halo" aria-hidden="true" />
    <div className="growth-ecosystem-orbits" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="growth-ecosystem-core"><span className="growth-core-kicker">ASHWIN.</span><strong>GROWTH</strong><strong>SYSTEM</strong><span className="growth-core-copy">Built around<br />your bottleneck</span></div>
    <div className="growth-ecosystem-tools">
      {ecosystemItems.map((item, index) => <Link key={item.name} to={`/services/${item.service}`} className={`growth-tool ${item.position}`} aria-label={`Explore ${item.name}`} style={{ '--brand-color': item.color, '--float-delay': `${index * -0.42}s` }}>
        <span className="growth-tool-icon"><EcosystemIcon type={item.type} /></span>
        <span className="growth-tool-label">{item.name}</span>
      </Link>)}
    </div>
  </div>
}

export default function Services() {
  useReveal()
  useEffect(() => { const hash = window.location.hash; if (!hash) return; requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })) }, [])

  return <main className="services-page" id="main">
    <section className="services-hero"><div className="services-grid-bg" aria-hidden="true"/><div className="container services-hero-inner">
      <div className="services-hero-grid services-reveal"><div className="services-hero-copy"><p className="services-eyebrow">Services</p><h1>The work that turns attention into <span>Qualified Demand.</span></h1><p className="services-hero-description">From urgent, high intent acquisition to the infrastructure that makes growth repeatable, every service is built around a commercial outcome.</p><div className="services-hero-actions"><a className="services-hero-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a><Link className="services-hero-secondary" to="/case-studies">View case studies <span>→</span></Link></div></div><GrowthEcosystem /></div>
    </div></section>
    <section className="services-section"><div className="container"><div className="services-heading services-reveal"><div><p className="services-eyebrow">Our Services</p><h2>Built around the growth problem, not the platform.</h2></div><p>Choose the part of the acquisition system that needs attention, or combine services when the constraint sits across the funnel.</p></div><div className="core-services-grid all-services-grid">{allServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}</div></div></section>
    <section className="services-cta"><div className="container services-cta-inner"><p className="services-eyebrow services-reveal">Not sure where to start?</p><h2 className="services-reveal">Start with the constraint, not a channel.</h2><p className="services-reveal">In a free consultation, we can identify the change most likely to improve your lead quality, conversion or customer follow up.</p><a className="services-cta-button services-reveal" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a></div></section>
  </main>
}
