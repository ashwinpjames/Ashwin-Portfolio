import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/lead-generation-service.css'

const problems = [
  ['01', 'Disconnected channels', 'Ads, SEO, website content and CRM activity are managed separately without one shared goal.'],
  ['02', 'Unclear priorities', 'Teams are busy producing activity but do not know which improvements will have the greatest impact.'],
  ['03', 'Inconsistent lead quality', 'Campaigns generate enquiries, but too many fail to become useful sales conversations.'],
  ['04', 'Weak conversion paths', 'Landing pages, offers and forms create friction between interest and enquiry.'],
  ['05', 'Incomplete measurement', 'Reporting focuses on clicks and platform conversions without showing what happens to leads afterward.'],
  ['06', 'Slow follow up', 'Lead sources, CRM stages and sales feedback are not connected clearly enough to guide optimisation.'],
]

const services = [
  ['01', 'Digital Marketing Strategy', 'Set priorities around business goals, audience, offer, budget and the customer journey. Build a practical channel plan instead of treating every platform as a separate task.'],
  ['02', 'Google Ads and Meta Ads', 'Connect campaign structure, targeting, creative, messaging and conversion signals to attract relevant demand and capture intent.'],
  ['03', 'SEO and Content Direction', 'Map search intent to useful service pages and content, strengthen internal links and improve how potential customers discover the business organically.'],
  ['04', 'Lead Generation and Qualification', 'Align acquisition with the type of lead the sales team needs, then assess quality beyond the initial form submission.'],
  ['05', 'Landing Pages and CRO', 'Improve offer clarity, message match, page structure, calls to action and forms to make the path to enquiry easier.'],
  ['06', 'Analytics and Conversion Tracking', 'Use GA4, Google Tag Manager, conversion events and UTM conventions to make performance more reliable and easier to interpret.'],
  ['07', 'CRM and Marketing Automation', 'Connect lead sources, lifecycle stages, routing, follow up and sales feedback so the team can see what happens after an enquiry.'],
  ['08', 'Ongoing Optimisation', 'Review performance regularly, identify bottlenecks and prioritise tests using the strongest available campaign and business data.'],
]

const process = [
  ['01', 'Understand', 'Clarify business goals, audience, offer, sales process and what a valuable lead or customer means.'],
  ['02', 'Audit', 'Review channels, website, landing pages, tracking, CRM flow and the performance data currently available.'],
  ['03', 'Prioritise', 'Build a practical roadmap with clear actions, measurement and an order of work based on likely impact.'],
  ['04', 'Implement', 'Put agreed campaign, conversion, tracking or workflow improvements into practice and establish a baseline.'],
  ['05', 'Optimise', 'Use results and sales feedback to improve the journey over time rather than relying on assumptions.'],
]

const deliverables = [
  'Digital marketing strategy', 'Channel and campaign recommendations', 'Audience and offer review',
  'Google Ads and Meta Ads planning', 'SEO and content priorities', 'Landing page recommendations',
  'Lead capture and qualification review', 'GA4 and conversion tracking review', 'UTM tracking conventions',
  'CRM and lead flow recommendations', 'Performance reporting framework', 'Prioritised optimisation roadmap',
]

const metrics = [
  ['QUALIFIED LEADS', 'Enquiries that meet agreed qualification criteria'],
  ['COST / QUALIFIED LEAD', 'Acquisition efficiency beyond raw lead volume'],
  ['CONVERSION RATE', 'How effectively visits become meaningful actions'],
  ['LEAD → OPPORTUNITY', 'Progression into the sales pipeline'],
  ['CUSTOMER ACQUISITION COST', 'Where reliable cost and customer data exist'],
  ['REVENUE CONTRIBUTION', 'Commercial outcomes where attribution is supportable'],
]

const faqs = [
  ['What does a digital marketing consultant do?', 'A digital marketing consultant reviews business goals, audience, channels and the customer journey, then recommends or supports a practical plan to improve visibility, lead generation and measurable outcomes.'],
  ['What services can you help with?', 'The scope can include digital strategy, Google Ads, Meta Ads, SEO direction, landing page optimisation, lead generation, analytics, conversion tracking and CRM alignment. It depends on your priorities and current setup.'],
  ['Do you work with businesses in Dubai and across the UAE?', 'I am based in the UAE. An initial conversation helps clarify your market, objectives, scope and the support that makes sense for your business.'],
  ['Can you audit existing campaigns and a website?', 'Yes. A review can cover campaign structure, targeting, offers, landing pages, conversion tracking, lead quality and how enquiries are handled after submission.'],
  ['Do you only work on paid advertising?', 'No. Paid media is one part of the wider customer journey. Where relevant, I also consider SEO, conversion experience, analytics and CRM processes so the different activities support the same business goal.'],
  ['How do you measure digital marketing performance?', 'Metrics depend on the objective and available data. They can include qualified leads, cost per qualified lead, conversion rate, opportunity progression, customer acquisition cost and revenue.'],
  ['How do we get started?', 'Start with a conversation about your goals, current marketing setup and constraints. From there, we can identify the most useful audit or next step rather than assume every business needs the same package.'],
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function DigitalMarketingConsultantDubai() {
  return <main className="lead-generation-page" id="main">
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

    <section className="lg-hero">
      <div className="lg-grid" aria-hidden="true" />
      <div className="container lg-hero-inner">
        <div className="lg-hero-copy">
          <p className="lg-eyebrow">Digital Marketing Consulting · Dubai, UAE</p>
          <h1>Digital Marketing Consultant in Dubai for Measurable Business Growth</h1>
          <p className="lg-lead">Bring strategy, paid advertising, SEO, conversion optimisation and analytics together in a practical marketing plan built around your business goals.</p>
          <div className="lg-actions">
            <a className="lg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss Your Marketing Goals <span>↗</span></a>
            <a className="lg-secondary" href="#approach">View My Approach</a>
          </div>
          <p className="lg-label">CONSULTING CAPABILITIES</p>
          <div className="lg-pills"><span>STRATEGY & PLANNING</span><span>PAID ACQUISITION</span><span>SEO & CONTENT</span><span>ANALYTICS & CRM</span></div>
          <p className="lg-meta">Strategy · Acquisition · Conversion · Measurement</p>
        </div>
      </div>
    </section>

    <section className="lg-section">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">The Problem</p><h2>More Marketing Activity Does Not Always Mean Better Results</h2><p>Digital marketing underperforms when channels, conversion paths and follow up are managed as separate tasks.</p></div>
        <div className="lg-pain-grid">{problems.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="lg-section lg-alt">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">The Approach</p><h2>One Connected Customer Journey, Not a Collection of Disconnected Channels</h2><p>As a <Link to="/">Performance Marketing Specialist</Link>, I look at how people discover your business, what persuades them to enquire and how the team follows up afterward.</p></div>
        <div className="lg-funnel">{['AUDIENCE','CHANNELS','LANDING PAGE','ENQUIRY','QUALIFICATION','SALES FOLLOW UP','OUTCOME'].map((item, i) => <div key={item}><strong>{item}</strong>{i < 6 && <span>→</span>}</div>)}</div>
        <p className="lg-principle">The goal is not simply more activity. It is a clearer path from marketing investment to meaningful business outcomes.</p>
      </div>
    </section>

    <section className="lg-section">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">Consulting Services</p><h2>Practical Support Across the Digital Marketing Funnel</h2><p>The scope is shaped around your business priorities, with connected services where the bottleneck crosses multiple parts of the funnel.</p></div>
        <div className="lg-system-grid">{services.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section id="approach" className="lg-section lg-alt">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">How I Work</p><h2>A Five Step Process From Audit to Optimisation</h2><p>A clear process keeps the work focused on business objectives and measurable next steps.</p></div>
        <div className="lg-process-cards">{process.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="lg-section">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">Potential Deliverables</p><h2>Know What the Consulting Work Can Cover</h2><p>Recommendations and deliverables depend on the audit findings, agreed scope and the data available.</p></div>
        <div className="lg-deliverables">{deliverables.map(item => <div key={item}><span>•</span><strong>{item}</strong></div>)}</div>
      </div>
    </section>

    <section className="lg-section lg-alt">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">Measurement</p><h2>Measure Outcomes, Not Just Clicks and Impressions</h2><p>Reporting should reflect the commercial goal and the reliability of the available tracking data.</p></div>
        <div className="lg-funnel lg-revenue">{['REACH','CLICKS','ENQUIRIES','QUALIFIED LEADS','OPPORTUNITIES','CUSTOMERS'].map((item, i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div>
        <div className="lg-metrics">{metrics.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="lg-principle">Tracking may include <Link to="/blog/ga4-performance-marketing">Google Analytics 4</Link>, <Link to="/blog/conversion-tracking-performance-marketing">conversion tracking</Link>, consistent UTM parameters and CRM source data.</p>
      </div>
    </section>

    <section className="lg-section">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">Related Services</p><h2>Connect the Areas That Need Attention</h2><p>Explore relevant services and resources for specific parts of the customer journey.</p></div>
        <div className="lg-related">
          <div><Link to="/services/performance-marketing-specialist">Performance Marketing Services</Link><Link to="/services/meta-ads">Meta Ads</Link><Link to="/services/lead-generation">Lead Generation</Link><Link to="/services/cro">Conversion Optimisation</Link><Link to="/services/hubspot">HubSpot CRM</Link><Link to="/services/seo">SEO</Link></div>
        </div>
      </div>
    </section>

    <section className="lg-section lg-alt">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">Who This Is For</p><h2>For Businesses That Need Clarity on What to Improve Next</h2><p>This service may suit growing businesses, professional services, healthcare and wellness providers, immigration services and B2B teams that rely on digital channels for enquiries.</p></div>
        <div className="lg-fit">{['Marketing feels fragmented across channels', 'Lead quality or conversion rates are inconsistent', 'Reporting does not explain business outcomes', 'You need a clearer plan for your marketing budget', 'You want marketing and sales follow up to work together'].map(item => <div key={item}><span>✓</span><strong>{item}</strong></div>)}</div>
      </div>
    </section>

    <section className="lg-section">
      <div className="container">
        <div className="lg-heading"><p className="lg-eyebrow">FAQ</p><h2>Questions About Digital Marketing Consulting</h2><p>Clear answers to common questions about scope, process and measurement.</p></div>
        <div className="lg-faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </div>
    </section>

    <section className="lg-cta">
      <div className="container">
        <p className="lg-eyebrow">Start With a Useful Conversation</p>
        <h2>Need a Clearer Digital Marketing Plan?</h2>
        <p>Let’s discuss your goals, current marketing setup and the most useful next step for your business in Dubai or across the UAE.</p>
        <a className="lg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Conversation <span>↗</span></a>
      </div>
    </section>
  </main>
}
