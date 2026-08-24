import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import './google-ads-detail.css'

const problems = [
  ['01', 'Clicks without enough enquiries', 'Traffic is not the same as demand. A campaign can attract clicks while the offer, intent or conversion path is still weak.'],
  ['02', 'Irrelevant or low quality leads', 'Cheap conversions are not useful when they do not match the service, customer profile or commercial intent.'],
  ['03', 'Weak tracking and attribution', 'When forms, calls, WhatsApp actions or downstream qualification are not measured reliably, optimisation is based on incomplete signals.'],
  ['04', 'Budget tied to the wrong metrics', 'Spend can remain concentrated in campaigns that look efficient in the platform while producing weak business outcomes.'],
]

const valueProps = [
  ['Search intent alignment', 'Focus budget on searches that reflect meaningful commercial intent and filter demand that is unlikely to become useful.'],
  ['Relevant traffic', 'Connect keyword strategy, ad messaging and negative keyword management so the account attracts people closer to the actual offer.'],
  ['Better measurement', 'Build a clearer view across platform conversions, qualified leads and downstream outcomes where the data is available.'],
  ['Funnel level thinking', 'Treat Google Ads as one part of acquisition, connected to landing pages, CRM, sales feedback and business economics.'],
]

const approach = [
  ['01', 'Research', 'Understand the business, offer, customer, market, competition, existing campaigns, funnel and objectives before deciding what to change.'],
  ['02', 'Intent', 'Understand what people actually mean when they search and separate commercial demand from lower relevance traffic.'],
  ['03', 'Strategy', 'Develop campaign, keyword, targeting and budget structures around the business objective rather than a fixed template.'],
  ['04', 'Conversion', 'Align ads, landing pages, offers, CTAs and tracking so the path from search to action makes sense.'],
  ['05', 'Qualification', 'Look beyond lead volume and consider whether conversions represent commercially useful opportunities.'],
  ['06', 'Optimisation', 'Use data and business feedback to improve targeting, messaging, budget allocation and conversion efficiency continuously.'],
]

const included = [
  ['Strategy', 'Google Ads audit', 'Campaign strategy', 'Search intent analysis', 'Keyword strategy', 'Budget planning'],
  ['Campaign Management', 'Campaign setup', 'Campaign structure', 'Keyword management', 'Ad creation', 'Targeting', 'Bid strategy'],
  ['Conversion Tracking', 'Conversion setup', 'Tracking validation', 'Google Analytics integration', 'Google Tag Manager where applicable', 'Lead attribution'],
  ['Optimisation', 'Search term analysis', 'Negative keyword management', 'Ad testing', 'Budget optimisation', 'Conversion analysis', 'Bid strategy review'],
  ['Landing Page Alignment', 'Messaging alignment', 'Offer alignment', 'CTA analysis', 'Conversion friction analysis'],
  ['Reporting', 'Performance reporting', 'Funnel analysis', 'Key observations', 'Testing recommendations', 'Next actions'],
]

const funnel = ['Search Intent', 'Google Ad', 'Landing Page', 'Conversion', 'Lead Qualification', 'CRM / Follow Up', 'Sales', 'Customer', 'Revenue']

const metrics = [
  ['Advertising Metrics', ['CTR', 'CPC', 'Search terms', 'Impression share', 'Spend']],
  ['Conversion Metrics', ['Conversion rate', 'Cost per lead', 'Landing page conversion rate', 'Qualified lead rate', 'Cost per qualified lead']],
  ['Business Metrics', ['Sales opportunities', 'Customer acquisition cost', 'Pipeline value', 'Revenue', 'ROAS where reliable revenue data is available']],
]

const framework = [
  ['01', 'Intent', 'Understand what the person is trying to accomplish with the search.'],
  ['02', 'Structure', 'Organise campaigns around meaningful business and intent distinctions.'],
  ['03', 'Message', 'Align the ad with the user’s intent and the value proposition.'],
  ['04', 'Conversion', 'Create a clear path from search result to meaningful action.'],
  ['05', 'Qualification', 'Evaluate whether conversions represent commercially useful leads.'],
  ['06', 'Optimisation', 'Use full funnel data to improve targeting, budget, messaging and conversion efficiency.'],
]

const working = [
  ['01', 'Understand', 'Discuss the business, objectives, offer and current marketing situation.'],
  ['02', 'Assess', 'Review relevant campaigns, tracking, funnel data and opportunities where available.'],
  ['03', 'Plan', 'Identify priorities and develop the appropriate strategy.'],
  ['04', 'Execute', 'Implement campaigns, tracking, testing and optimisation.'],
  ['05', 'Improve', 'Use campaign data and business feedback to continuously improve performance.'],
]

const faq = [
  ['Is Google Ads suitable for my business?', 'It is most useful when your target customers actively search for the problem, service or solution you provide. Suitability depends on search demand, customer value, competition, economics and how well the funnel can convert that demand.'],
  ['How much should I spend?', 'There is no universal budget. A sensible range depends on search volume, customer value, target acquisition cost, competition, conversion rate and how much data is needed to learn.'],
  ['Can you audit my existing Google Ads account?', 'Yes. The starting point is understanding what is already useful, what is unreliable and what should change first across structure, search terms, tracking, budgets, ads and landing page alignment.'],
  ['Why am I getting clicks but not enquiries?', 'The constraint may be search intent, ad relevance, landing page experience, offer clarity, tracking or the conversion path. Clicks only confirm a visit, not commercial effectiveness.'],
  ['Why are my leads low quality?', 'Low relevance can come from loose targeting, weak intent filters, missing negative keywords, broad messaging, poor qualification or a mismatch between the offer and the traffic.'],
  ['How do you measure performance?', 'I use a hierarchy of advertising, conversion and business metrics. The further down the funnel the data can be measured reliably, the more useful it becomes for commercial decisions.'],
  ['Can Google Ads be connected to my CRM?', 'Yes, where the technical setup and available data support it. Qualified lead and sales signals can make optimisation more meaningful than platform conversions alone.'],
  ['How long does optimisation take?', 'There is no useful fixed timeframe. Relevant traffic can begin when demand exists, while reliable optimisation depends on enough meaningful data to separate patterns from noise.'],
]

const internalLinks = [
  ['/services/performance-growth-marketing', 'Performance & Growth Marketing', 'performance and growth marketing'],
  ['/services/lead-generation', 'Lead Generation', 'lead generation strategy'],
  ['/services/cro', 'CRO', 'conversion rate optimisation'],
  ['/services/seo', 'SEO', 'SEO and search visibility'],
  ['/services/website-development', 'Website Development', 'website and landing page development'],
  ['/services/hubspot-crm-automation', 'HubSpot CRM & Automation', 'HubSpot CRM and automation'],
  ['/case-studies', 'Case Studies', 'case studies'],
  ['/resources', 'Resources', 'performance marketing resources'],
  ['/blog', 'Blogs', 'performance marketing blogs'],
  ['/contact', 'Contact', 'contact Ashwin'],
]

export default function GoogleAdsDetail() {
  return <main className="google-ads-page" id="main">
    <section className="ga-hero"><div className="ga-hero-grid" aria-hidden="true"/><div className="container ga-hero-inner">
      <div className="ga-hero-content">
        <div className="ga-hero-copy">
          <p className="services-eyebrow">Google Ads Management · Dubai, UAE</p>
          <h1>Turn Google Search Demand Into <span>Meaningful Business Outcomes.</span></h1>
          <p className="ga-lead ga-lead-small">I manage Google Ads as part of a customer acquisition system, connecting search intent, campaign strategy, landing pages, conversion tracking and lead quality for UAE businesses that want clearer performance visibility.</p>
          <div className="ga-final-actions"><a className="ga-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Free Consultation <span>↗</span></a><Link className="ga-back-button" to="/case-studies">View Case Studies</Link></div>
          <p className="ga-trust">Data driven thinking · Funnel level analysis · Hands on execution</p>
        </div>
        <div className="ga-hero-visual"><div className="ga-visual-ring"/><div className="ga-visual-core"><span>GOOGLE</span><strong>ADS</strong><small>INTENT → SALES → REVENUE</small></div><span className="ga-orbit ga-orbit-1">SEARCH INTENT</span><span className="ga-orbit ga-orbit-2">TRACKING</span><span className="ga-orbit ga-orbit-3">LEAD QUALITY</span></div>
      </div>
    </div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Problem / Pain Points</p><h2>Google Ads can look healthy while the business outcome is weak.</h2><p>The issue is often not the existence of traffic. It is the quality of intent, the conversion path, the measurement system or the connection between advertising and sales.</p></div><div className="ga-pain-grid">{problems.map(([n,title,text]) => <article className="ga-pain" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="ga-outcome"><span>Think beyond traffic</span><strong>Traffic → Leads → Qualified Leads → Sales Opportunities → Customers</strong></div></div></section>

    <section className="ga-section ga-included"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Value Proposition</p><h2>Build a clearer path from search intent to commercial value.</h2><p>The goal is not to promise a specific result. It is to make the acquisition system more relevant, measurable and easier to improve.</p></div><div className="ga-included-grid">{valueProps.map(([title,text]) => <div className="ga-included-item" key={title}><span>✓</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">How Ashwin Approaches Google Ads</p><h2>Research first. Optimise from evidence.</h2><p>The methodology connects advertising decisions to what happens before and after the click rather than treating the Google Ads dashboard as the complete picture.</p></div><div className="ga-process">{approach.map(([n,title,text]) => <article className="ga-process-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="ga-section ga-included"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">What Is Included</p><h2>A focused service scope without the giant feature list.</h2><p>The exact engagement depends on the account and business context. The priority is work that affects relevance, measurement, conversion and decision quality.</p></div><div className="ga-service-groups">{included.map(([group, ...items]) => <article key={group}><span>{group}</span><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section className="ga-proof"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">How Google Ads Fits Into the Business Funnel</p><h2>The advertising dashboard is only one part of the system.</h2><p>A campaign can generate inexpensive leads and still perform poorly if those leads are irrelevant. A landing page can limit conversion. Tracking can prevent accurate optimisation. The full journey matters.</p></div><div className="ga-funnel">{funnel.map((stage, i) => <div className="ga-funnel-stage" key={stage}><span>{String(i + 1).padStart(2, '0')}</span><strong>{stage}</strong>{i < funnel.length - 1 && <b>↓</b>}</div>)}</div></div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Measurement & KPIs</p><h2>Measure clicks, conversions and commercial outcomes differently.</h2><p>The hierarchy matters because each stage answers a different question.</p></div><div className="ga-metrics-grid">{metrics.map(([group, items]) => <article className="ga-metric-card" key={group}><span>{group}</span><div>{items.map((item) => <strong key={item}>{item}</strong>)}</div></article>)}</div><div className="ga-outcome"><span>Core principle</span><strong>Clicks → Leads → Qualified Leads → Opportunities → Customers → Revenue</strong></div><p className="ga-section-note"><strong>A cheap lead is not automatically a valuable lead.</strong> Meaningful benchmarks depend on industry, offer, competition, market, search intent, sales process and customer economics.</p></div></section>

    <section className="ga-section ga-included"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Google Ads Strategy Framework</p><h2>Intent → Structure → Message → Conversion → Qualification → Optimisation</h2><p>Ashwin’s strategic framework for thinking about Google Ads. It is not an official Google framework.</p></div><div className="ga-framework">{framework.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">What Working With Ashwin Looks Like</p><h2>Know what happens after you make contact.</h2><p>The process starts with understanding the situation before deciding what needs to change.</p></div><div className="ga-process">{working.map(([n,title,text]) => <article className="ga-process-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="ga-proof"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Case Studies / Proof</p><h2>Credibility should come from evidence, not invented numbers.</h2><p>No fictional ROAS, revenue, lead volumes, client names, testimonials or percentage improvements are used here. Where verified Google Ads evidence is available, it should be presented with its proper context.</p></div><div className="ga-proof-checks">{['Campaign structure', 'Search intent and search terms', 'Conversion tracking', 'Lead quality', 'Budget allocation', 'Landing page performance', 'Funnel conversion'].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><p>Relevant area to analyse when taking over or auditing an account.</p></div>)}</div></div></section>

    <section className="ga-section"><div className="container ga-diff"><div><p className="services-eyebrow">Why Ashwin</p><h2>The difference is how the work is approached.</h2></div><div><p>Google Ads is treated as part of the funnel. Tracking matters before optimisation. Lead quality matters alongside lead volume. Landing pages matter alongside campaigns. Sales feedback can inform advertising decisions. Testing starts with a clear hypothesis and budget allocation follows evidence.</p><p className="ga-section-note"><strong>Measure → Interpret → Test → Learn → Allocate → Repeat.</strong></p></div></div></section>

    <section className="ga-section ga-faq"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">FAQ</p><h2>Answers to the questions that affect the buying decision.</h2></div><div className="ga-faq-list">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="ga-section ga-social"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Contextual Resources</p><h2>Google Ads becomes more useful when the wider acquisition system is connected.</h2></div><div className="ga-related-grid">{internalLinks.map(([href,title,anchor], i) => <Link to={href} key={title}><span>{String(i + 1).padStart(2, '0')}</span><strong>{title}</strong><small>{anchor} →</small></Link>)}</div></div></section>

    <section className="ga-final"><div className="container"><p className="services-eyebrow">Ready to discuss your Google Ads?</p><h2>Start with a conversation about the system behind the ads.</h2><p>We can discuss your current Google Ads performance, business objectives, acquisition challenges, tracking, lead quality and growth opportunities.</p><div className="ga-final-actions"><a className="ga-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Free Consultation <span>↗</span></a><Link className="ga-back-button" to="/case-studies">View Case Studies</Link></div><small>The consultation is a discussion about your situation, not a promise of a guaranteed result.</small></div></section>
  </main>
}
