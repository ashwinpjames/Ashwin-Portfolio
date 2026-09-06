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
    if (reduced) {
      nodes.forEach((node) => node.classList.add('in-view'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12 })
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

export default function Services() {
  useReveal()
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }, [])

  return <main className="services-page" id="main">
    <section className="services-hero">
      <div className="services-grid-bg" aria-hidden="true" />
      <div className="container services-hero-inner">
        <div className="services-hero-content services-reveal">
          <div className="services-rating" aria-label="5 out of 5 client rating">
            <span aria-hidden="true">★★★★★</span>
            <strong>5/5</strong>
            <span>client rating</span>
          </div>

          <p className="services-eyebrow">PERFORMANCE MARKETING · DUBAI · UAE</p>

          <h1>Performance Marketing Services in Dubai for <span>Measurable Growth.</span></h1>

          <p className="services-hero-description">As a Performance Marketing Specialist, I provide data driven digital marketing services for businesses in Dubai and across the UAE, helping improve lead quality, reduce wasted ad spend, and build scalable marketing systems that drive measurable business growth.</p>

          <div className="services-hero-actions">
            <a className="services-hero-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Message on WhatsApp <span>↗</span></a>
            <Link className="services-hero-secondary" to="/contact">Book a Consultation <span>↗</span></Link>
          </div>

          <div className="services-hero-points" aria-label="Performance marketing capabilities">
            <span>✓ Based in UAE</span>
            <i aria-hidden="true" />
            <span>✓ Meta &amp; Google Ads Specialist</span>
            <i aria-hidden="true" />
            <span>✓ Data Driven Performance Marketing</span>
            <i aria-hidden="true" />
            <span>✓ End to End Funnel Strategy</span>
          </div>
        </div>
      </div>
    </section>

    <section className="services-section">
      <div className="container">
        <div className="services-heading services-reveal"><div><p className="services-eyebrow">Our Services</p><h2>Built around the growth problem, not the platform.</h2></div><p>Choose the part of the acquisition system that needs attention, or combine services when the constraint sits across the funnel.</p></div>
        <div className="core-services-grid all-services-grid">{allServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}</div>
      </div>
    </section>

    <section className="services-cta">
      <div className="container services-cta-inner">
        <p className="services-eyebrow services-reveal">Not sure where to start?</p>
        <h2 className="services-reveal">Start with the constraint, not a channel.</h2>
        <p className="services-reveal">In a free consultation, we can identify the change most likely to improve your lead quality, conversion or customer follow up.</p>
        <a className="services-cta-button services-reveal" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a>
      </div>
    </section>
  </main>
}
