import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import { coreServices, growthServices } from '../data/services.js'
import '../styles/services-hero.css'

const growthTools = [
  { name: 'Google Ads', icon: 'https://cdn.simpleicons.org/googleads/4285F4', serviceId: 'google-ads' },
  { name: 'Meta Ads', icon: 'https://cdn.simpleicons.org/meta/1877F2', serviceId: 'meta-ads' },
  { name: 'GA4', icon: 'https://cdn.simpleicons.org/googleanalytics/F9AB00', serviceId: 'seo' },
  { name: 'HubSpot', icon: 'https://cdn.simpleicons.org/hubspot/FF7A59', serviceId: 'hubspot' },
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B', serviceId: 'wordpress' },
  { name: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/25D366', serviceId: 'whatsapp-marketing' },
  { name: 'GTM', icon: 'https://cdn.simpleicons.org/googletagmanager/246FDB', serviceId: 'google-ads' },
  { name: 'Looker Studio', icon: 'https://cdn.simpleicons.org/looker/4285F4', serviceId: 'performance-growth-marketing' }
]

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

function CoreServiceCard({ service, index }) {
  return <article id={service.id} className={`service-card surface services-reveal tone-${service.tone}`} style={{ transitionDelay: `${(index % 3) * 60}ms` }}>
    <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-badge">{service.badge}</span></div>
    <div className="service-card-main"><h3>{service.title}</h3><p className="service-description">{service.description}</p></div>
    <div className="service-card-footer"><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul><p className="service-best"><span>Best for</span>{service.bestFor}</p></div>
    <Link className="service-card-button" to={`/services/${service.id}`}>Explore this service <span>→</span></Link>
  </article>
}

function GrowthServiceCard({ service, index }) {
  return <article id={service.id} className="growth-service-card surface services-reveal" style={{ transitionDelay: `${(index % 2) * 60}ms` }}>
    <span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><p className="service-outcome">Outcome: {service.outcome}</p>
    <Link className="service-card-button" to={`/services/${service.id}`}>Explore this service <span>→</span></Link>
  </article>
}

function GrowthEcosystem() {
  return <div className="growth-ecosystem" aria-label="Marketing platform ecosystem">
    <div className="growth-ecosystem-orbits" aria-hidden="true" />
    <div className="growth-ecosystem-core"><strong>GROWTH</strong><strong>SYSTEM</strong><span>Built around<br />your bottleneck</span></div>
    <div className="growth-ecosystem-tools">
      {growthTools.map((tool, index) => <Link key={tool.name} to={`/services/${tool.serviceId}`} className={`growth-tool growth-tool-${index + 1}`} style={{ '--tool-delay': `${index * -420}ms` }} aria-label={tool.name}>
        <span className="growth-tool-icon"><img src={tool.icon} alt="" /></span>
        <span className="growth-tool-label">{tool.name}</span>
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
    <section className="services-section"><div className="container"><div className="services-heading services-reveal"><div><p className="services-eyebrow">Most requested in the UAE</p><h2>Six routes to immediate growth.</h2></div><p>Prioritised around the services that most directly combine demand capture, visibility and conversion.</p></div><div className="core-services-grid">{coreServices.map((service, index) => <CoreServiceCard key={service.id} service={service} index={index} />)}</div></div></section>
    <section className="services-section growth-band"><div className="container"><div className="services-heading services-reveal"><div><p className="services-eyebrow">More ways to grow</p><h2>The systems behind sustained performance.</h2></div><p>Use these services to connect campaign performance with the experience and follow up that convert a lead into revenue.</p></div><div className="growth-services-grid">{growthServices.map((service, index) => <GrowthServiceCard key={service.id} service={service} index={index} />)}</div></div></section>
    <section className="services-cta"><div className="container services-cta-inner"><p className="services-eyebrow services-reveal">Not sure where to start?</p><h2 className="services-reveal">Start with the constraint, not a channel.</h2><p className="services-reveal">In a free consultation, we can identify the change most likely to improve your lead quality, conversion or customer follow up.</p><a className="services-cta-button services-reveal" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a></div></section>
  </main>
}
