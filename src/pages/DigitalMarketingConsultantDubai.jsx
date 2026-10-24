import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/digital-marketing-consultant.css'

const services = [
  ['01', 'Digital marketing strategy', 'Build a focused plan around your business goals, audience, offer, budget and customer journey. Prioritise the channels and activities most likely to support measurable growth.'],
  ['02', 'Google Ads and Meta Ads', 'Plan and optimise paid campaigns across Google Search and Meta platforms, connecting targeting, messaging, creative, landing pages and conversion signals.'],
  ['03', 'SEO and content direction', 'Identify search intent, improve page structure and build useful content around the questions and services your potential customers are actively looking for.'],
  ['04', 'Lead generation and qualification', 'Design campaigns and enquiry journeys to attract relevant prospects, capture useful information and make lead quality visible beyond the initial form submission.'],
  ['05', 'Landing pages and conversion optimisation', 'Improve message match, page clarity, calls to action, forms and user journeys to reduce avoidable friction between a visitor and a meaningful enquiry.'],
  ['06', 'Analytics, tracking and reporting', 'Use GA4, Google Tag Manager, conversion events and UTM tracking to make campaign performance easier to interpret and improve.'],
  ['07', 'CRM and marketing automation', 'Connect lead sources, CRM stages, follow up and sales feedback so enquiries can be tracked from acquisition through qualification and onward outcomes.'],
  ['08', 'Ongoing optimisation', 'Use a regular review cycle to identify bottlenecks, test improvements and allocate effort based on evidence instead of assumptions.'],
]

const process = [
  ['01', 'Understand the business', 'Clarify your goals, audience, offer, current marketing activity and what a valuable customer or lead looks like.'],
  ['02', 'Audit the current setup', 'Review channels, website, landing pages, tracking, lead handling and the performance data available today.'],
  ['03', 'Create a prioritised plan', 'Turn the audit into a practical roadmap with clear actions, owners, measurement and priorities.'],
  ['04', 'Implement and test', 'Launch the agreed work, establish a baseline and test changes against meaningful outcomes.'],
  ['05', 'Measure and improve', 'Report on leads, lead quality, conversion rates and commercial outcomes where reliable data is available.'],
]

const faqs = [
  ['What does a digital marketing consultant do?', 'A digital marketing consultant reviews a business’s goals, audience, channels and customer journey, then recommends or supports a practical plan to improve visibility, lead generation and measurable marketing outcomes.'],
  ['What digital marketing services can you help with?', 'The work can include digital strategy, Google Ads, Meta Ads, SEO direction, landing page optimisation, lead generation, analytics, conversion tracking and CRM alignment. The scope depends on your priorities and existing setup.'],
  ['Do you work with businesses in Dubai and across the UAE?', 'I am based in the UAE and work with businesses whose goals and marketing requirements are a good fit. The first conversation helps clarify the market, scope and support needed.'],
  ['Can you review my existing campaigns and website?', 'Yes. A review can cover campaign structure, audience and offer alignment, landing pages, tracking, lead quality and how enquiries are handled after submission.'],
  ['Do you only work on paid advertising?', 'No. Paid media is one part of the wider digital marketing journey. Where relevant, I also consider SEO, conversion experience, analytics and CRM processes so the channels and follow up support the same business goal.'],
  ['How do you measure digital marketing performance?', 'Measurement should match the objective. Depending on the business, this may include qualified leads, cost per qualified lead, conversion rate, customer acquisition cost, opportunities and revenue where reliable tracking is available.'],
  ['How do we get started?', 'Start with a consultation to discuss your goals, current setup and constraints. From there, we can identify the most useful audit or next step rather than assume every business needs the same package.'],
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
  return (
    <main className="dmc-page" id="main">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="dmc-hero">
        <div className="dmc-grid" aria-hidden="true" />
        <div className="dmc-glow" aria-hidden="true" />
        <div className="container dmc-hero-inner">
          <p className="dmc-eyebrow">Digital Marketing Consulting · Dubai, UAE</p>
          <h1>Digital Marketing Consultant in Dubai</h1>
          <p className="dmc-lead">I help businesses bring strategy, paid advertising, SEO, conversion optimisation and analytics together in a practical digital marketing plan. The focus is on reaching the right audience, generating more relevant enquiries and understanding which activities contribute to business growth.</p>
          <div className="dmc-actions">
            <a className="dmc-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss Your Marketing Goals <span>↗</span></a>
            <Link className="dmc-secondary" to="/contact">Book a Consultation <span>↗</span></Link>
          </div>
          <div className="dmc-proofline"><span>Strategy and planning</span><i /><span>Paid media</span><i /><span>SEO and conversion</span><i /><span>Analytics and CRM</span></div>
        </div>
      </section>

      <section className="dmc-section">
        <div className="container dmc-two-col">
          <div><p className="dmc-eyebrow">A connected approach</p><h2>Digital marketing should work as one customer journey.</h2></div>
          <div className="dmc-copy">
            <p>More activity does not automatically mean better results. A business can invest in advertising, publish content and attract website traffic yet still struggle to turn that attention into qualified enquiries.</p>
            <p>My consulting approach looks at the full journey: what you offer, who you need to reach, how people discover you, what happens on the website and how enquiries are tracked and followed up. The recommendations are prioritised around your goals and the constraints in your current setup.</p>
            <p>For paid acquisition, I connect this broader plan with <Link to="/services/performance-marketing-specialist">performance marketing services</Link>, <Link to="/services/meta-ads">Meta Ads</Link> and <Link to="/services/lead-generation">lead generation</Link> where they are relevant.</p>
          </div>
        </div>
      </section>

      <section className="dmc-section dmc-dark">
        <div className="container">
          <div className="dmc-heading"><div><p className="dmc-eyebrow">Consulting services</p><h2>Practical support across the digital marketing funnel.</h2></div><p>The scope is shaped around the business, not a fixed checklist. We can focus on a specific challenge or connect the parts that need to work together.</p></div>
          <div className="dmc-services">{services.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="dmc-section">
        <div className="container dmc-two-col">
          <div><p className="dmc-eyebrow">Who this is for</p><h2>For teams that need clarity on what to improve next.</h2></div>
          <div className="dmc-copy">
            <p>This service may suit small and growing businesses, professional services, healthcare and wellness providers, immigration services, and B2B teams that rely on digital channels to generate enquiries.</p>
            <p>It can be useful if your marketing feels fragmented, lead quality is inconsistent, reporting does not explain business outcomes, or you need an independent view of where to invest next. Recommendations will depend on your actual goals, available resources and current data.</p>
          </div>
        </div>
      </section>

      <section className="dmc-section dmc-dark">
        <div className="container">
          <div className="dmc-heading"><div><p className="dmc-eyebrow">The process</p><h2>From diagnosis to a measurable action plan.</h2></div><p>A structured process helps make the work transparent and keeps priorities connected to business objectives.</p></div>
          <div className="dmc-process">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="dmc-section">
        <div className="container dmc-two-col">
          <div><p className="dmc-eyebrow">Measurement</p><h2>Measure outcomes, not just marketing activity.</h2></div>
          <div className="dmc-copy">
            <p>The right metrics depend on the business model and conversion journey. Reporting can include qualified enquiries, cost per lead, cost per qualified lead, landing page conversion rate, channel performance and customer acquisition cost where the required data is available.</p>
            <p>Tracking foundations matter too. Relevant work may include <Link to="/blog/ga4-performance-marketing">Google Analytics 4</Link>, <Link to="/blog/conversion-tracking-performance-marketing">conversion tracking</Link>, UTM consistency and CRM source data. These help the team understand what happens after the click instead of relying only on platform reported conversions.</p>
          </div>
        </div>
      </section>

      <section className="dmc-section dmc-dark">
        <div className="container dmc-faq-wrap">
          <div><p className="dmc-eyebrow">Frequently asked questions</p><h2>Digital marketing consulting, explained.</h2></div>
          <div className="dmc-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="dmc-cta">
        <div className="container">
          <p className="dmc-eyebrow">Start with a useful conversation</p>
          <h2>Need a clearer digital marketing plan?</h2>
          <p>Let’s discuss your goals, current marketing setup and the most useful next step for your business in Dubai or across the UAE.</p>
          <div className="dmc-actions dmc-center">
            <a className="dmc-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss Your Goals <span>↗</span></a>
            <Link className="dmc-secondary" to="/contact">Contact Ashwin <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
