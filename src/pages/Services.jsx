import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  { name: 'Google Ads', type: 'ads', position: 'growth-tool-1', service: 'google-ads' },
  { name: 'Meta Ads', type: 'meta', position: 'growth-tool-2', service: 'meta-ads' },
  { name: 'HubSpot', type: 'hubspot', position: 'growth-tool-3', service: 'hubspot-crm-automation' },
  { name: 'WordPress', type: 'wordpress', position: 'growth-tool-4', service: 'wordpress-development' },
  { name: 'Google Tag Manager', type: 'gtm', position: 'growth-tool-5', service: 'performance-growth-marketing' },
  { name: 'Google Analytics', type: 'analytics', position: 'growth-tool-6', service: 'performance-growth-marketing' },
  { name: 'WhatsApp', type: 'whatsapp', position: 'growth-tool-7', service: 'whatsapp-marketing' },
  { name: 'Search', type: 'search', position: 'growth-tool-8', service: 'seo' },
]

function EcosystemIcon({ type }) {
  if (type === 'meta') return <svg viewBox="0 0 64 40" aria-hidden="true"><path d="M7 30c5-14 10-22 18-22 8 0 11 11 15 18 3 5 5 8 9 8 5 0 7-5 8-11" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/></svg>
  if (type === 'hubspot') return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="38" cy="37" r="10" fill="none" stroke="currentColor" strokeWidth="5"/><path d="M38 27V15m0 0-8-6m8 6 9-6M28 37H16m0 0-6-6m6 6-6 7m32-2 9 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></svg>
  if (type === 'wordpress') return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M17 22c4 2 6 6 8 12l5 15 6-17 6 17 5-14c2-6 4-9 7-12M20 18h24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/></svg>
  if (type === 'gtm') return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="28" width="20" height="20" rx="4" fill="currentColor"/><rect x="25" y="10" width="20" height="20" rx="4" fill="currentColor" opacity=".75"/><rect x="37" y="34" width="20" height="20" rx="4" fill="currentColor" opacity=".55"/></svg>
  if (type === 'analytics') return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="35" width="9" height="19" rx="4" fill="currentColor"/><rect x="27" y="24" width="9" height="30" rx="4" fill="currentColor" opacity=".82"/><rect x="44" y="10" width="9" height="44" rx="4" fill="currentColor" opacity=".62"/></svg>
  if (type === 'whatsapp') return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="30" r="21" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M18 51l3-10m9-19c-3 0-5 2-5 5 0 6 8 14 14 14 3 0 5-2 5-5l-5-3-3 3c-3-1-6-4-7-7l3-3-2-4z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
  if (type === 'search') return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="28" cy="28" r="17" fill="none" stroke="currentColor" strokeWidth="5"/><path d="M41 41l13 13" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></svg>
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M13 43c4-9 7-17 14-17 7 0 8 14 14 14 5 0 8-8 10-16" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/><path d="M45 14h8v8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
}

function GrowthEcosystem() {
  return <div className="growth-ecosystem" aria-label="Marketing ecosystem">
    <div className="growth-ecosystem-orbits" aria-hidden="true" />
    <div className="growth-ecosystem-core"><strong>GROWTH</strong><strong>SYSTEM</strong><span>Built around<br />your bottleneck</span></div>
    <div className="growth-ecosystem-tools">
      {ecosystemItems.map((item, index) => <Link key={item.name} to={`/services/${item.service}`} className={`growth-tool ${item.position}`} aria-label={item.name} style={{ '--service-delay': `${index * 80}ms`, '--wave-delay': `${index * -160}ms` }}>
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
