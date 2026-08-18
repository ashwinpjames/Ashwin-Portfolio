import { Link, useParams } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import { serviceLandings } from '../data/serviceLandings.js'
import '../styles/service-landing.css'

const related = {
  seo: ['website-development', 'landing-page-optimisation', 'lead-generation'],
  'website-development': ['landing-page-optimisation', 'lead-generation', 'wordpress'],
  'lead-generation': ['google-ads', 'meta-ads', 'hubspot'],
  'landing-page-optimisation': ['google-ads', 'meta-ads', 'website-development'],
  'performance-growth-marketing': ['google-ads', 'meta-ads', 'lead-generation'],
  'whatsapp-marketing': ['lead-generation', 'hubspot', 'meta-ads'],
  hubspot: ['lead-generation', 'whatsapp-marketing', 'google-ads'],
  wordpress: ['website-development', 'landing-page-optimisation', 'seo'],
}

const names = {
  'website-development': 'Website Development',
  'landing-page-optimisation': 'Landing Page Optimisation',
  'lead-generation': 'Lead Generation',
  seo: 'SEO',
  'performance-growth-marketing': 'Performance & Growth Marketing',
  'whatsapp-marketing': 'WhatsApp Marketing',
  hubspot: 'HubSpot CRM & Automation',
  wordpress: 'WordPress Development',
}

export default function ServiceLanding() {
  const { slug } = useParams()
  const service = serviceLandings[slug]
  if (!service) return <main className="service-landing"><div className="container"><h1>Service not found.</h1><Link to="/services">Back to services</Link></div></main>
  const relatedItems = (related[slug] || []).map((id) => ({ id, name: names[id] })).filter((item) => item.name)
  return <main className="service-landing" id="main">
    <section className="sl-hero"><div className="sl-grid" aria-hidden="true"/><div className="container sl-hero-inner">
      <Link className="sl-back" to="/services">← Back to services</Link>
      <div className="sl-hero-layout"><div className="sl-hero-copy"><p className="sl-eyebrow">{service.eyebrow}</p><h1>{service.h1}</h1><p className="sl-lead">{service.lead}</p><a className="sl-primary" href={whatsappUrl} target="_blank" rel="noreferrer">{service.cta} <span>↗</span></a><p className="sl-trust">No obligation · Hands on specialist support · Dubai based</p></div><div className="sl-hero-panel"><span className="sl-panel-label">FOCUS</span><div className="sl-panel-orbit"><span className="sl-orbit-dot dot-a"/><span className="sl-orbit-dot dot-b"/><span className="sl-orbit-dot dot-c"/><div><strong>01</strong><small>Business outcome</small></div></div><p>Built around the constraint that matters most to your growth.</p></div></div>
    </div></section>

    <section className="sl-section"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">The problem</p><h2>{service.painTitle}</h2></div><p>{service.painIntro}</p></div><div className="sl-pain-grid">{service.pains.map(([title, text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="sl-section sl-dark"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">What's included</p><h2>Specific work. Clear deliverables. No filler.</h2></div><p>Every component has a job. The focus is on what needs to change, how it will be implemented and what signal will tell us whether it worked.</p></div><div className="sl-included-grid">{service.included.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="sl-section"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">The process</p><h2>A practical path from audit to optimisation.</h2></div><p>You should know what happens next, why it is happening and what information will guide the next decision.</p></div><div className="sl-process">{service.process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="sl-proof"><div className="container sl-proof-grid"><div><p className="sl-eyebrow">Results & proof</p><h2>Measure the outcome that actually matters.</h2></div><div><p>Relevant experience spans immigration and visa services, attestation and professional services, healthcare and wellness, recruitment and HR, business services and other high consideration offers.</p><p>Verified campaign, analytics or CRM metrics can be added here as the evidence base grows. I will not manufacture performance numbers to make the page look better.</p><div className="sl-proof-tags"><span>Qualified demand</span><span>Conversion</span><span>Measurement</span></div></div></div></section>

    <section className="sl-section"><div className="container sl-why"><div><p className="sl-eyebrow">Why Ashwin</p><h2>You work directly with the person solving the problem.</h2></div><p>I work across acquisition, conversion, analytics and follow up rather than treating a single channel as the entire growth system. That makes it easier to identify whether the constraint is traffic, messaging, the website, tracking, lead quality or what happens after the enquiry.</p></div></section>

    <section className="sl-section sl-dark"><div className="container"><div className="sl-heading"><div><p className="sl-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2></div><p>Short, direct answers to the concerns a careful buyer should have.</p></div><div className="sl-faq">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="sl-cta"><div className="container"><p className="sl-eyebrow">Ready to improve this?</p><h2>Let's look at the current system before deciding what to change.</h2><p>Book 15 minutes. We can identify the biggest constraint and the first practical step without a sales presentation.</p><a className="sl-primary" href={whatsappUrl} target="_blank" rel="noreferrer">{service.cta} <span>↗</span></a></div></section>

    <section className="sl-related"><div className="container"><p className="sl-eyebrow">Related services</p><div className="sl-related-grid">{relatedItems.map((item) => <Link key={item.id} to={`/services/${item.id}`}><span>{item.name}</span><b>→</b></Link>)}</div></div></section>
  </main>
}
