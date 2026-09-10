import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import { serviceLandings } from '../data/serviceLandings.js'
import '../styles/service-landing.css'

const slug = 'website-development'

const related = {
  'website-development': ['landing-page-optimisation', 'lead-generation', 'wordpress'],
}

const names = {
  'website-development': 'Website Development',
  'landing-page-optimisation': 'Landing Page Optimisation',
  'lead-generation': 'Lead Generation',
  wordpress: 'WordPress Development',
}

export default function ServiceLanding() {
  const service = serviceLandings['website-development']
  if (!service) return <main className="service-landing"><div className="container"><h1>Service not found.</h1><Link to="/services">Back to services</Link></div></main>
  const relatedItems = related[slug].map((id) => ({ id, name: names[id] })).filter((item) => item.name)
  const hasStrategy = Array.isArray(service.strategy)
  const hasMeasurement = Array.isArray(service.measurementFlow)
  return <main className="service-landing" id="main">
    <section className="sl-hero">
      <div className="sl-grid" aria-hidden="true" />
      <div className="sl-hero-glow" aria-hidden="true" />
      <div className="container sl-hero-inner">
        <div className="sl-hero-copy">
          <p className="sl-eyebrow">{service.eyebrow}</p>
          <h1>Website Development Specialist in Dubai, UAE</h1>
          <p className="sl-lead">{service.lead}</p>
          <div className="sl-hero-actions">
            <a className="sl-primary" href={whatsappUrl} target="_blank" rel="noreferrer">{service.cta} <span>↗</span></a>
            <Link className="sl-secondary" to="/contact">Book a Consultation <span>↗</span></Link>
          </div>
        </div>
        <div className="sl-hero-highlights" aria-label="Website development highlights">
          <article><span className="sl-highlight-icon">⌖</span><div><strong>UAE Market Focus</strong><small>Local business context</small></div></article>
          <article><span className="sl-highlight-icon">☆</span><div><strong>Conversion Focused</strong><small>Built around business goals</small></div></article>
          <article><span className="sl-highlight-icon">◉</span><div><strong>Marketing Led</strong><small>Designed for growth</small></div></article>
        </div>
      </div>
    </section>

    <section className="sl-section"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">The problem</p><h2>{service.painTitle}</h2></div><p>{service.painIntro}</p></div><div className="sl-pain-grid">{service.pains.map(([title, text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    {hasStrategy && <section className="sl-section sl-dark"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">Strategic approach</p><h2>{service.strategicInsightTitle}</h2></div><p>{service.strategicInsightIntro}</p></div><div className="sl-strategy-grid">{service.strategy.map(([number, title, text]) => <article key={number}><span className="sl-strategy-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>}

    <section className="sl-section"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">What's included</p><h2>Specific work. Clear deliverables. No filler.</h2></div><p>Everything you need to launch a high performing website, without unnecessary extras.</p></div><div className="sl-included-grid">{service.included.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="sl-section sl-dark"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">The process</p><h2>A practical path from audit to optimisation.</h2></div><p>A clear and collaborative process to ensure your website is built right from the start.</p></div><div className="sl-process sl-process-timeline">{service.process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    {hasMeasurement && <section className="sl-proof"><div className="container sl-proof-grid"><div><p className="sl-eyebrow">Measurement</p><h2>{service.measurementTitle}</h2></div><div><div className="sl-proof-tags">{service.measurementFlow.map((item, index) => <span key={item}>{index + 1}. {item}</span>)}</div><p>{service.measurementIntro}</p><p>{service.measurementDetails}</p></div></div></section>}

    {!hasMeasurement && <section className="sl-proof"><div className="container sl-proof-grid"><div><p className="sl-eyebrow">Results & proof</p><h2>Measure the outcome that actually matters.</h2></div><div><p>Relevant experience spans immigration and visa services, attestation and professional services, healthcare and wellness, recruitment and HR, business services and other high consideration offers.</p><p>Verified campaign, analytics or CRM metrics can be added here as the evidence base grows. I will not manufacture performance numbers to make the page look better.</p><div className="sl-proof-tags"><span>Qualified demand</span><span>Conversion</span><span>Measurement</span></div></div></div></section>}

    <section className="sl-section"><div className="container sl-why"><div><p className="sl-eyebrow">Why it matters</p><h2>{service.whyTitle || 'A website should support the business, not just sit on the internet.'}</h2></div><p>{service.whyText || 'I work across acquisition, conversion, analytics and follow up rather than treating a single channel as the entire growth system. That makes it easier to identify whether the constraint is traffic, messaging, the website, tracking, lead quality or what happens after the enquiry.'}</p></div></section>

    <section className="sl-section sl-dark"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">Frequently asked questions</p><h2>{service.faqTitle || 'Questions worth answering before you start.'}</h2></div><p>Clear answers to common questions about the process, timeline and ongoing support.</p></div><div className="sl-faq">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="sl-cta"><div className="container"><p className="sl-eyebrow">Ready to build a better website?</p><h2>Let's create a website that works for your business.</h2><p>A clear, strategic and high performing website, built for growth.</p><a className="sl-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free Consultation <span>↗</span></a></div></section>

    <section className="sl-related"><div className="container"><p className="sl-eyebrow">Related services</p><div className="sl-related-grid">{relatedItems.map((item) => <Link key={item.id} to={`/services/${item.id}`}><span>{item.name}</span><b>→</b></Link>)}</div></div></section>
  </main>
}
