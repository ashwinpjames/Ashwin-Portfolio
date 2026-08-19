import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/lead-generation-service.css'

const pains = [
  ['“We are getting leads, but sales cannot work with them.”', 'Lead volume means little when the audience, offer and qualification criteria are misaligned with what sales actually needs.'],
  ['“We do not know which channel is producing quality.”', 'Acquisition needs to be compared by qualified demand, not just clicks, form fills or platform reported conversions.'],
  ['“Leads are being lost after they enquire.”', 'Slow response, unclear ownership and weak follow up can waste demand you already paid to generate.'],
  ['“Marketing and sales are measuring different things.”', 'A useful acquisition system connects campaign data with qualification, sales feedback and downstream outcomes.'],
]

const included = [
  ['Target audience', 'Define the characteristics, intent and commercial signals that make a prospect worth acquiring.'],
  ['Offer strategy', 'Shape the reason to enquire around the problem, value and level of commitment required.'],
  ['Acquisition channels', 'Choose and connect appropriate sources such as Google Ads, Meta Ads, SEO and other demand channels.'],
  ['Lead capture', 'Build forms, WhatsApp journeys and landing paths that make the next step clear while collecting useful information.'],
  ['Qualification', 'Capture the questions and signals sales needs to distinguish useful demand from low fit enquiries.'],
  ['Lead routing', 'Create clear ownership and handoff so new enquiries reach the right person quickly.'],
  ['Follow up', 'Design practical response and re engagement steps so interested prospects do not disappear.'],
  ['Lead quality', 'Optimise toward qualified demand rather than maximising raw lead volume.'],
  ['Sales feedback', 'Use sales outcomes and CRM signals to improve audience, offer, channel and qualification decisions.'],
]

const process = [
  ['01', 'Define quality', 'Agree what a qualified lead means, which prospects are valuable and what sales considers workable.'],
  ['02', 'Map the acquisition system', 'Review audience, offer, channels, landing pages, capture points and the path from enquiry to sale.'],
  ['03', 'Build the flow', 'Set up the right acquisition, lead capture, qualification, routing and follow up mechanisms.'],
  ['04', 'Measure the right signal', 'Track cost per lead alongside cost per qualified lead, conversion rate and downstream quality.'],
  ['05', 'Close the feedback loop', 'Use sales feedback and CRM data to improve the system instead of optimising marketing in isolation.'],
]

const faqs = [
  ['What is the difference between lead generation and lead volume?', 'Lead generation is the process of creating a usable pipeline. Raw lead volume only tells you how many people submitted something. The more useful question is how many fit your criteria and can become opportunities.'],
  ['Can you manage multiple lead generation channels?', 'Yes. The channel mix can include Google Ads, Meta Ads, SEO, landing pages, WhatsApp and other appropriate sources. The decision should follow audience, intent and economics rather than a fixed channel list.'],
  ['How do you improve lead quality?', 'Start with a clear definition of quality, then align the audience, offer, messaging, qualification questions and conversion signals around it. Sales feedback is part of that loop.'],
  ['How do you measure lead generation performance?', 'Useful measures include cost per lead, cost per qualified lead, conversion rate, lead to opportunity rate and downstream revenue where reliable data is available.'],
  ['Can you work with our existing CRM?', 'Yes. Where access and data are available, CRM information can be used for routing, qualification, reporting and optimisation.'],
  ['Do you guarantee a number of leads?', 'No. A fixed lead guarantee can encourage low quality volume. The system should be judged by the quality and economics of the demand it creates.'],
]

export default function LeadGenerationService() {
  return <main className="lead-generation-page" id="main">
    <section className="lg-hero"><div className="lg-grid" aria-hidden="true"/><div className="container lg-hero-inner">
      <Link className="lg-back" to="/services">← Back to services</Link>
      <div className="lg-hero-layout"><div className="lg-copy"><p className="lg-eyebrow">Lead Generation · Dubai & UAE</p><h1>Lead Generation Built Around <span>Qualified Demand.</span></h1><p className="lg-lead">A complete acquisition system that connects audience, offer, channels, capture, qualification and sales follow up so your team gets enquiries it can actually work with.</p><a className="lg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Lead Generation Audit <span>↗</span></a><p className="lg-trust">No obligation · Hands on specialist support · Dubai based</p></div><div className="lg-visual"><div className="lg-core"><strong>LEADS</strong><small>CAPTURE → QUALIFY → CONVERT</small></div><span className="lg-node n1">AUDIENCE</span><span className="lg-node n2">OFFER</span><span className="lg-node n3">CHANNELS</span><span className="lg-node n4">SALES</span></div></div>
    </div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><div><p className="lg-eyebrow">The problem</p><h2>A busy pipeline is not the same as a healthy one.</h2></div><p>Lead generation breaks when acquisition, qualification and sales follow up are treated as separate problems.</p></div><div className="lg-pain-grid">{pains.map(([title,text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="lg-section lg-dark"><div className="container"><div className="lg-heading"><div><p className="lg-eyebrow">Strategic insight</p><h2>More leads are not the goal. More workable demand is.</h2></div><p>The acquisition system should make a clear connection between who you want, why they should enquire, how they are captured and what happens next.</p></div><div className="lg-system"><span>01 Audience</span><b>→</b><span>02 Offer</span><b>→</b><span>03 Acquisition</span><b>→</b><span>04 Capture</span><b>→</b><span>05 Qualification</span><b>→</b><span>06 Sales</span></div></div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><div><p className="lg-eyebrow">What's included</p><h2>The acquisition system, from first impression to sales feedback.</h2></div><p>Each component has a specific role. The system is designed around quality, speed, measurement and continuous feedback.</p></div><div className="lg-included-grid">{included.map(([title,text],i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="lg-section lg-dark"><div className="container"><div className="lg-heading"><div><p className="lg-eyebrow">The process</p><h2>Build the system, then improve the signal.</h2></div><p>The work moves from definition to execution and then back through sales feedback so optimisation is based on evidence.</p></div><div className="lg-process">{process.map(([number,title,text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="lg-measure"><div className="container lg-measure-grid"><div><p className="lg-eyebrow">Measurement</p><h2>Judge the system by qualified demand, not vanity volume.</h2></div><div><p>The important signals depend on the business, but the framework can include:</p><div className="lg-metrics"><span>Cost per lead</span><span>Cost per qualified lead</span><span>Lead to opportunity</span><span>Conversion rate</span><span>Lead quality</span><span>Sales feedback</span></div></div></div></section>

    <section className="lg-section"><div className="container lg-why"><div><p className="lg-eyebrow">Why Ashwin</p><h2>Acquisition connected to conversion, analytics and sales.</h2></div><p>I work across paid acquisition, SEO, landing pages, tracking, CRM and lead follow up. That makes it possible to investigate the full path when lead quality drops instead of blaming one channel for a system wide problem.</p></div></section>

    <section className="lg-section lg-dark"><div className="container"><div className="lg-heading"><div><p className="lg-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2></div><p>Direct answers to the concerns a careful buyer should have before handing over acquisition responsibility.</p></div><div className="lg-faq">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="lg-cta"><div className="container"><p className="lg-eyebrow">Ready to improve the acquisition system?</p><h2>Let's identify where your current funnel is leaking.</h2><p>Book 15 minutes. We can look at the biggest constraint before deciding what to change.</p><a className="lg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Lead Generation Audit <span>↗</span></a><small>No long presentation. No obligation. Just a practical review.</small></div></section>

    <section className="lg-related"><div className="container"><p className="lg-eyebrow">Related services</p><div className="lg-related-grid"><Link to="/services/google-ads"><span>Google Ads</span><b>→</b></Link><Link to="/services/meta-ads"><span>Meta Ads</span><b>→</b></Link><Link to="/services/hubspot"><span>HubSpot CRM & Automation</span><b>→</b></Link></div></div></section>
  </main>
}
