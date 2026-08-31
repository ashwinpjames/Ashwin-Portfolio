import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import './performance-marketing-service.css'

const included = [
  {
    title: 'Paid Media Strategy & Execution',
    text: 'I plan and manage paid acquisition around commercial intent, audience quality and business economics. This includes Google Ads across Search, Shopping, Display and Performance Max, alongside Meta Ads across Facebook and Instagram, retargeting and creative testing.',
  },
  {
    title: 'Landing Pages That Convert',
    text: 'Paid traffic only creates value when the destination continues the promise made in the ad. I apply CRO fundamentals to landing page structure, messaging, calls to action and conversion friction so more of the right visitors have a clear path to enquire.',
  },
  {
    title: 'Lead Generation Systems',
    text: 'A lead generation system connects the offer, acquisition channels, qualification process and sales handoff. I build the acquisition side around the type of lead the business actually needs, with measurement that makes lead quality visible.',
    link: ['/services/lead-generation', 'Lead Generation'],
  },
  {
    title: 'CRM & Marketing Automation',
    text: 'Getting a lead is only the start. CRM workflows, lifecycle stages, source tracking, routing and automation help make sure opportunities are captured, followed up and measured instead of disappearing after the first enquiry.',
    link: ['/services/hubspot', 'HubSpot'],
  },
  {
    title: 'WhatsApp & Conversational Follow-Up',
    text: 'For high intent leads, the conversation after the click can determine whether an enquiry becomes an opportunity. Structured WhatsApp journeys can improve response consistency, qualification and handoff while keeping the customer experience practical and human.',
    link: ['/services/whatsapp-marketing', 'WhatsApp Marketing'],
  },
  {
    title: 'SEO & Organic Growth',
    text: 'Paid acquisition does not have to carry the entire growth burden. Search visibility can create a compounding acquisition channel by building authority around the commercial searches that matter to the business.',
    link: ['/services/seo', 'SEO'],
  },
  {
    title: 'Website Foundations',
    text: 'The website is part of the acquisition system, not just a brochure. I can help with the technical and conversion foundations required for a reliable marketing journey, from WordPress implementation to broader website development.',
    links: [['/services/wordpress', 'WordPress'], ['/services/website-development', 'Website Development']],
  },
]

const steps = [
  ['01', 'Audit', 'Review your current channels, tracking, and CRM setup to find what is actually broken or missing.'],
  ['02', 'Build', 'Set up or rebuild campaigns, landing pages, and CRM workflows as one connected system.'],
  ['03', 'Launch & Optimize', 'Run campaigns with ongoing optimization based on real conversion data, not vanity metrics.'],
  ['04', 'Report', 'Clear, honest reporting tied to leads and revenue, not just clicks and impressions.'],
]

const faqs = [
  ['How fast will I see results?', 'Paid media can start generating leads within the first 1–2 weeks of launch. Structural fixes, like CRM automation or landing page rebuilds, tend to compound over the following months as data comes in.'],
  ['Do I need to already have a website or CRM set up?', 'No. Part of the audit is figuring out what is missing and building it, whether that is a landing page, a HubSpot CRM instance, or a properly tracked website.'],
  ['What if I’m only interested in one part of this, like Google Ads?', 'That is fine. Each service can be run on its own. The system approach is recommended because disconnected pieces tend to leak leads, but it is not required to get started.'],
  ['Is there a minimum commitment?', 'This is discussed on the strategy call based on your goals and current setup. There are no generic lock-in packages.'],
]

function CTA({ children }) {
  return <a className="pm-primary" href={whatsappUrl} target="_blank" rel="noreferrer">{children} <span>↗</span></a>
}

function ServiceLink({ href, children }) {
  return <Link className="pm-inline-link" to={href}>{children}</Link>
}

export default function PerformanceMarketingService() {
  return <main className="pm-page" id="main">
    <section className="pm-hero">
      <div className="pm-grid" aria-hidden="true" />
      <div className="pm-glow pm-glow-one" aria-hidden="true" />
      <div className="pm-glow pm-glow-two" aria-hidden="true" />
      <div className="container pm-hero-inner">
        <div className="pm-hero-copy">
          <p className="services-eyebrow">Performance Marketing · Dubai, UAE</p>
          <h1>Turn Ad Spend Into Predictable Leads <span>— Not Just Clicks</span></h1>
          <p className="pm-lead">Paid media, conversion-focused pages, and CRM-driven follow-up, built as one connected system for businesses in Dubai and the UAE.</p>
          <div className="pm-hero-actions"><CTA>Book a Free Strategy Call</CTA></div>
          <p className="pm-sub-cta">No obligation — get a straight answer on what’s working and what isn’t.</p>
          <p className="pm-trust">Trusted by businesses across Dubai and the UAE to manage paid media, CRM, and lead systems end-to-end.</p>
        </div>
      </div>
    </section>

    <section className="pm-section pm-problem"><div className="container pm-narrow">
      <div className="pm-section-heading"><p className="services-eyebrow">The Problem</p><h2>The Problem</h2><p>Most businesses running ads are stuck with one (or more) of these:</p></div>
      <ul className="pm-problem-list">
        <li>Spend going up, but leads staying flat or getting more expensive</li>
        <li>Traffic landing on pages that were never built to convert</li>
        <li>Leads coming in but going cold because follow-up is slow or manual</li>
        <li>Multiple freelancers or agencies handling different pieces, none of them talking to each other</li>
      </ul>
      <p className="pm-closing">Individually, none of these look like a crisis. Together, they quietly cap how much you can grow.</p>
    </div></section>

    <section className="pm-section pm-fix"><div className="container pm-two-column">
      <div><p className="services-eyebrow">The Fix</p><h2>The Fix: One System, Not Separate Services</h2></div>
      <div><p>Performance marketing works when the channel, the landing page, the tracking, and the follow-up are all built toward the same number — qualified leads at a cost you can scale. I plan, launch, and manage paid acquisition across <ServiceLink href="/services/google-ads">Google Ads</ServiceLink> and <ServiceLink href="/services/meta-ads">Meta Ads</ServiceLink>, backed by conversion-focused landing pages built on <ServiceLink href="/services/cro">CRO</ServiceLink> principles, and CRM systems in <ServiceLink href="/services/hubspot">HubSpot</ServiceLink> that make sure no lead sits unattended. One person, one system, full visibility into what’s actually driving revenue.</p><CTA>See If This Fits Your Business</CTA></div>
    </div></section>

    <section className="pm-section pm-included"><div className="container">
      <div className="pm-section-heading"><p className="services-eyebrow">What’s Included</p><h2>Everything connected to the growth problem.</h2><p>Choose the parts you need now, with the option to connect the rest when the bottleneck sits across the funnel.</p></div>
      <div className="pm-included-grid">{included.map((item, index) => <article className="pm-card" key={item.title}><span className="pm-card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>{item.link && <ServiceLink href={item.link[0]}>Explore {item.link[1]} <span>→</span></ServiceLink>}{item.links && <div className="pm-card-links">{item.links.map(([href, label]) => <ServiceLink href={href} key={label}>{label} <span>→</span></ServiceLink>)}</div>}</article>)}</div>
      <div className="pm-section-cta"><CTA>Get Your Free Growth Audit</CTA></div>
    </div></section>

    <section className="pm-section pm-work"><div className="container">
      <div className="pm-section-heading"><p className="services-eyebrow">How I Work</p><h2>A simple process built around evidence.</h2></div>
      <div className="pm-steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className="pm-section pm-why"><div className="container pm-two-column">
      <div><p className="services-eyebrow">Why Work With Me</p><h2>One person accountable for the system.</h2></div>
      <ul className="pm-why-list"><li>Based in Dubai, working directly with UAE businesses — no account managers, no hand-offs</li><li>Hands-on across paid media, CRO, CRM, and analytics, managed by one person end-to-end</li><li>Systems-first approach: campaigns, pages, and follow-up are built to work together, not billed as separate line items</li></ul>
    </div></section>

    <section className="pm-section pm-faq"><div className="container pm-narrow">
      <div className="pm-section-heading"><p className="services-eyebrow">FAQ</p><h2>Common Questions</h2></div>
      <div className="pm-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
    </div></section>

    <section className="pm-final"><div className="container pm-final-inner">
      <p className="services-eyebrow">Ready to Fix Your Growth System?</p><h2>Ready to Fix Your Growth System?</h2><p>Book a free strategy call. You’ll walk away with a clear view of what’s working, what’s leaking leads, and what to do next — whether or not we end up working together.</p><CTA>Book a Free Strategy Call</CTA>
    </div></section>
  </main>
}
