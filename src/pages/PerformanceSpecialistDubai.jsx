import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/performance-specialist-dubai.css'

const capabilities = [
  ['Paid acquisition', 'Plan and manage Meta Ads and Google Ads around audience intent, offer strength, campaign economics and the actions that matter to the business.'],
  ['Lead quality and qualification', 'Look beyond raw lead volume by reviewing qualification rates, response patterns and the signals that separate enquiries from useful opportunities.'],
  ['Conversion-focused journeys', 'Align ad messaging with landing pages, forms and calls to action so the experience continues naturally from first click to enquiry.'],
  ['Tracking and analytics', 'Connect campaign activity with GA4, Google Tag Manager, conversion events and consistent UTM tracking to make performance easier to interpret.'],
  ['CRM and sales alignment', 'Use CRM stages, source information and lead feedback to understand what happens after acquisition and where the funnel loses value.'],
  ['Testing and optimisation', 'Build clear testing priorities, assess results in context and shift effort toward improvements supported by evidence rather than assumptions.'],
]

const process = [
  ['01', 'Understand the business', 'Clarify the offer, audience, commercial goals, sales process and what a qualified opportunity means.'],
  ['02', 'Audit the current journey', 'Review campaigns, creative, landing pages, tracking, CRM flow and the available performance data.'],
  ['03', 'Prioritise the constraint', 'Identify whether the biggest opportunity sits in demand, message match, conversion, lead quality or follow up.'],
  ['04', 'Test and improve', 'Implement focused changes, define the success measure and compare results against a clear baseline.'],
  ['05', 'Report what matters', 'Connect spend and activity with qualified leads, opportunities and revenue outcomes where the data is available.'],
]

const faqs = [
  ['What does a Performance Marketing Specialist in Dubai do?', 'A Performance Marketing Specialist plans, manages and improves measurable acquisition activity. The work can include paid advertising, conversion tracking, landing page optimisation, lead quality analysis and reporting that connects marketing activity with business outcomes.'],
  ['Which platforms do you work with?', 'My core paid acquisition work focuses on Meta Ads and Google Ads, supported by analytics, conversion tracking and CRM workflows where they are relevant to the business.'],
  ['Do you focus only on generating more leads?', 'No. Lead volume is one signal, but it does not establish business value by itself. I also consider qualification, cost per qualified lead, conversion rates and downstream outcomes when reliable data is available.'],
  ['Do you work with businesses outside Dubai?', 'I am based in the UAE and the page focuses on Dubai search intent. The practical fit depends on the business, target market, goals and the support required.'],
  ['Can you review an existing campaign setup?', 'Yes. A review can cover campaign structure, audience and offer alignment, creative, landing pages, conversion tracking, CRM lead flow and the available performance data.'],
]

export default function PerformanceSpecialistDubai() {
  return (
    <main className="psd-page" id="main">
      <section className="psd-hero">
        <div className="psd-grid" aria-hidden="true" />
        <div className="psd-glow" aria-hidden="true" />
        <div className="container psd-hero-inner">
          <p className="psd-eyebrow">Performance Marketing · Dubai, UAE</p>
          <h1>Performance Marketing Specialist in Dubai</h1>
          <p className="psd-lead">I help businesses make paid acquisition more measurable by connecting campaign strategy, conversion journeys, analytics and lead quality. The goal is not simply to generate activity, but to understand which parts of marketing are creating useful business opportunities.</p>
          <div className="psd-actions">
            <a className="psd-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss Your Marketing Goals <span>↗</span></a>
            <Link className="psd-secondary" to="/contact">Book a Consultation <span>↗</span></Link>
          </div>
          <div className="psd-proofline"><span>Paid acquisition</span><i /><span>Conversion measurement</span><i /><span>Lead quality</span><i /><span>CRM alignment</span></div>
        </div>
      </section>

      <section className="psd-section">
        <div className="container psd-two-col">
          <div><p className="psd-eyebrow">The role</p><h2>Marketing performance is a system, not a single platform metric.</h2></div>
          <div className="psd-copy">
            <p>Clicks, impressions and form submissions can explain what happened inside an advertising platform. They do not always explain whether marketing is creating qualified demand or helping the business grow.</p>
            <p>As a <Link to="/">Performance Marketing Specialist</Link>, I approach acquisition as a connected journey: the right audience sees a relevant message, the landing experience supports the promise, conversion tracking records meaningful actions, and lead feedback helps improve the next decision.</p>
            <p>This page explains my approach and professional focus. For specific channel execution, explore the dedicated service pages linked below.</p>
          </div>
        </div>
      </section>

      <section className="psd-section psd-dark">
        <div className="container">
          <div className="psd-heading"><div><p className="psd-eyebrow">Areas of expertise</p><h2>Connect acquisition with what happens after the click.</h2></div><p>Each capability has a role in making marketing more accountable. The right mix depends on the business model, offer, sales process and current bottleneck.</p></div>
          <div className="psd-capabilities">
            {capabilities.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="psd-section">
        <div className="container">
          <div className="psd-heading"><div><p className="psd-eyebrow">Working method</p><h2>A clear process from diagnosis to optimisation.</h2></div><p>Work starts with the business problem and the available evidence, not with an assumption that every account needs more budget or more campaigns.</p></div>
          <div className="psd-process">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="psd-proof">
        <div className="container psd-two-col">
          <div><p className="psd-eyebrow">Measurement and accountability</p><h2>Report the outcomes that help make the next decision.</h2></div>
          <div className="psd-copy"><p>Depending on the business and the data available, useful measures can include cost per qualified lead, lead qualification rate, landing page conversion rate, lead to opportunity rate, customer acquisition cost and return on ad spend.</p><p>These metrics should not be presented as interchangeable. The right measure depends on the funnel stage and the commercial question being answered. Any case study or performance claim should be supported by verifiable campaign or CRM data.</p><div className="psd-metrics"><span>Acquisition efficiency</span><span>Conversion rate</span><span>Lead quality</span><span>Pipeline outcomes</span></div></div>
        </div>
      </section>

      <section className="psd-section psd-dark">
        <div className="container">
          <div className="psd-heading"><div><p className="psd-eyebrow">Related expertise</p><h2>Explore the specific parts of the system.</h2></div><p>This profile page is intentionally separate from the main Services section. Use these links to explore individual service details.</p></div>
          <div className="psd-related">
            <Link to="/services/meta-ads"><span>Meta Ads</span><b>↗</b></Link>
            <Link to="/services/google-ads"><span>Google Ads</span><b>↗</b></Link>
            <Link to="/services/lead-generation"><span>Lead Generation</span><b>↗</b></Link>
            <Link to="/services/cro"><span>Conversion Rate Optimisation</span><b>↗</b></Link>
            <Link to="/services/hubspot-crm-integration"><span>HubSpot CRM Integration</span><b>↗</b></Link>
            <Link to="/services/website-development"><span>Website Development</span><b>↗</b></Link>
          </div>
        </div>
      </section>

      <section className="psd-section">
        <div className="container psd-faq-wrap">
          <div><p className="psd-eyebrow">FAQ</p><h2>Questions to clarify before working together.</h2></div>
          <div className="psd-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="psd-cta">
        <div className="container"><p className="psd-eyebrow">Start with the real constraint</p><h2>Make your marketing easier to measure and improve.</h2><p>Share your current goals and setup. We can identify the questions worth answering before deciding what to change.</p><div className="psd-actions psd-center"><a className="psd-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Conversation <span>↗</span></a><Link className="psd-secondary" to="/contact">Contact Ashwin <span>↗</span></Link></div></div>
      </section>
    </main>
  )
}
