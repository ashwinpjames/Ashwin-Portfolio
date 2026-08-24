import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import './google-ads-detail.css'

const problemCards = [
  ['01', 'Keyword targeting without intent', 'Choosing keywords without understanding what the searcher is actually trying to accomplish can create traffic that looks relevant but has weak commercial value.'],
  ['02', 'Irrelevant search queries', 'Broad demand can absorb budget through searches that are adjacent to the offer but unlikely to become useful enquiries.'],
  ['03', 'Cheap leads instead of useful leads', 'A low cost per lead can hide weak qualification, low buying intent and poor downstream sales outcomes.'],
  ['04', 'Weak measurement', 'Without reliable conversion and lead quality signals, optimisation decisions are built on incomplete evidence.'],
]

const approach = [
  ['01', 'Research', 'Understand the business model, offer, target customer, acquisition funnel, competitive environment and historical campaign data where available.'],
  ['02', 'Search intent', 'Separate high intent searches from informational, research and low relevance demand so budget follows commercial opportunity.'],
  ['03', 'Campaign strategy', 'Build a structure around business objectives, services, intent, geography, budget and conversion goals rather than forcing one universal template.'],
  ['04', 'Tracking', 'Measure meaningful actions such as forms, calls, WhatsApp enquiries where technically trackable, qualified leads and sales outcomes where CRM data is available.'],
  ['05', 'Landing page alignment', 'Keep search intent, ad messaging, landing page content, offer and CTA consistent from the first click to the conversion.'],
  ['06', 'Optimisation', 'Use search terms, conversion data, lead quality, cost efficiency, budget distribution, ad performance, landing page behaviour and business outcomes to guide decisions.'],
]

const serviceItems = [
  ['Account audit', 'What it is', 'A structured review of account architecture, conversion actions, targeting, search terms, budgets and campaign settings.', 'Why it matters', 'It identifies structural constraints before budget is pushed into the wrong parts of the account.'],
  ['Campaign strategy', 'What it is', 'A plan that connects business objectives, intent, services, geography, budget and conversion goals.', 'Why it matters', 'The structure should reflect how demand actually exists rather than follow a generic setup.'],
  ['Keyword and search intent research', 'What it is', 'Research into relevant queries, intent patterns, match types and negative keyword opportunities.', 'Why it matters', 'The goal is to capture commercially useful demand and reduce waste.'],
  ['Search campaigns and ad messaging', 'What it is', 'Campaign, ad group and responsive search ad setup with messaging aligned to the searcher and offer.', 'Why it matters', 'Relevance helps create a clearer path from query to landing page and conversion.'],
  ['Conversion tracking', 'What it is', 'Implementation or review of meaningful conversion actions, including forms, calls and relevant WhatsApp actions where technically trackable.', 'Why it matters', 'Optimisation depends on the signals being measured.'],
  ['Google Tag Manager support', 'What it is', 'Tag and event support where GTM is appropriate for the measurement setup.', 'Why it matters', 'A reliable implementation can make conversion and attribution data more useful.'],
  ['Landing page recommendations', 'What it is', 'Recommendations for relevance, message continuity, offer clarity and conversion friction.', 'Why it matters', 'A strong ad cannot compensate for a weak post click experience.'],
  ['Budget and bid strategy', 'What it is', 'Budget allocation and bid strategy decisions based on available evidence and business economics.', 'Why it matters', 'Budget should follow stronger signals instead of being distributed evenly by default.'],
  ['Search term and negative keyword optimisation', 'What it is', 'Ongoing review of real search queries and negative keyword expansion.', 'Why it matters', 'Actual search behaviour reveals both waste and new opportunities.'],
  ['Lead quality and funnel analysis', 'What it is', 'Connect acquisition data with qualification and downstream funnel signals where available.', 'Why it matters', 'The best conversion is not simply the easiest conversion to generate.'],
]

const funnelStages = [
  ['01', 'Search demand'],
  ['02', 'Google Ads'],
  ['03', 'Landing page'],
  ['04', 'Conversion'],
  ['05', 'Lead qualification'],
  ['06', 'CRM'],
  ['07', 'Sales follow up'],
  ['08', 'Customer'],
  ['09', 'Revenue'],
]

const metricGroups = [
  ['Platform metrics', ['Impressions', 'CTR', 'CPC', 'Search impression share', 'Cost', 'Conversion rate']],
  ['Funnel metrics', ['Cost per lead', 'Landing page conversion rate', 'Qualified lead rate', 'Cost per qualified lead', 'Lead to opportunity rate']],
  ['Business metrics', ['Cost per acquisition', 'Customer acquisition cost', 'Pipeline value', 'Revenue', 'ROAS where revenue tracking is available']],
]

const framework = [
  ['01', 'Intent', 'Understand what the person is actually trying to accomplish with the search.'],
  ['02', 'Structure', 'Organise campaigns around meaningful business and intent distinctions.'],
  ['03', 'Message', 'Align ad messaging with the user’s search intent and the value proposition.'],
  ['04', 'Conversion', 'Create a clear path from the search result to a meaningful conversion.'],
  ['05', 'Qualification', 'Evaluate whether conversions represent commercially useful leads.'],
  ['06', 'Optimisation', 'Use full funnel data to improve targeting, budget allocation, messaging and conversion efficiency.'],
]

const deliverables = {
  Strategy: ['Account and campaign strategy', 'Keyword and intent research', 'Budget planning'],
  Implementation: ['Campaign setup', 'Keyword configuration', 'Ad creation', 'Targeting', 'Conversion tracking'],
  Optimisation: ['Search term analysis', 'Negative keywords', 'Ad testing', 'Budget allocation', 'Bid strategy review', 'Conversion analysis'],
  Reporting: ['Performance reporting', 'Funnel analysis', 'Key observations', 'Testing recommendations', 'Next actions'],
}

const faq = [
  ['Is Google Ads suitable for my business?', 'It is most useful when your target customers actively search for the problem, service or solution you provide. Suitability depends on search demand, customer value, competition, economics and how well the rest of the funnel can convert that demand.'],
  ['How much should I spend on Google Ads?', 'There is no universal starting budget. The sensible range depends on search volume, target acquisition cost, customer value, competition, conversion rate and how much evidence is needed to learn.'],
  ['How long does it take to see results?', 'Relevant traffic can begin soon after launch when search demand exists. Reliable optimisation takes enough meaningful data to distinguish repeatable patterns from noise.'],
  ['Should I use Search Ads or other Google Ads campaign types?', 'The choice should follow the acquisition goal and available data. Search is often strong for active demand, while other campaign types can make sense for different stages, audiences or objectives.'],
  ['Why am I getting clicks but not leads?', 'The constraint may be search intent, ad relevance, landing page experience, offer clarity, tracking or the conversion path itself. Clicks only confirm that someone visited, not that the journey was commercially effective.'],
  ['Why are my Google Ads leads not relevant?', 'Low relevance can come from loose targeting, weak search intent filters, missing negative keywords, broad messaging, poor qualification or a mismatch between the offer and the traffic being attracted.'],
  ['How do you measure Google Ads performance?', 'I use a hierarchy of platform, funnel and business metrics. The further down the funnel the data can be measured, the more useful it becomes for commercial decision making.'],
  ['Can you work with my existing Google Ads account?', 'Yes. An existing account can be audited and improved without rebuilding everything automatically. The starting point is identifying what is already useful, what is unreliable and what should change first.'],
  ['How important is the landing page?', 'Very important. Search intent and ad messaging need to continue into the landing experience. A strong campaign can still underperform when the post click experience creates friction or weakens relevance.'],
  ['Can Google Ads performance be connected to CRM and sales data?', 'Yes, where the technical setup and available data support it. Connecting qualified lead and sales outcomes can make optimisation more commercially meaningful than relying only on platform conversions.'],
]

const internalLinks = [
  ['/services/performance-growth-marketing', 'Performance & Growth Marketing', 'Performance and growth marketing'],
  ['/services/lead-generation', 'Lead Generation', 'lead generation strategy'],
  ['/services/cro', 'CRO', 'conversion rate optimisation'],
  ['/services/seo', 'SEO', 'SEO and search visibility'],
  ['/services/website-development', 'Website Development', 'website and landing page development'],
  ['/services/hubspot-crm-automation', 'HubSpot CRM & Automation', 'HubSpot CRM and automation'],
  ['/case-studies', 'Case Studies', 'Google Ads and performance case studies'],
  ['/resources', 'Resources', 'performance marketing resources'],
  ['/blog', 'Blogs', 'marketing and performance marketing blogs'],
  ['/contact', 'Contact', 'start a conversation'],
]

export default function GoogleAdsDetail() {
  return <main className="google-ads-page" id="main">
    <section className="ga-hero"><div className="ga-hero-grid" aria-hidden="true"/><div className="container ga-hero-inner">
      <div className="ga-hero-content">
        <div className="ga-hero-copy">
          <p className="services-eyebrow">Google Ads Management · Dubai, UAE</p>
          <h1>Turn Search Demand Into <span>Measurable Customer Acquisition.</span></h1>
          <p className="ga-lead ga-lead-small">I manage Google Ads as part of a measurable acquisition system, connecting search intent, campaign structure, landing pages, conversion tracking and lead quality so your budget is working toward meaningful business outcomes.</p>
          <div className="ga-final-actions"><a className="ga-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Free Consultation <span>↗</span></a><Link className="ga-back-button" to="/case-studies">View Case Studies</Link></div>
          <p className="ga-trust">UAE focused · Hands on management · Conversion tracking · Lead quality</p>
        </div>
        <div className="ga-hero-visual"><div className="ga-visual-ring"/><div className="ga-visual-core"><span>GOOGLE</span><strong>ADS</strong><small>INTENT → DEMAND → OUTCOMES</small></div><span className="ga-orbit ga-orbit-1">SEARCH INTENT</span><span className="ga-orbit ga-orbit-2">TRACKING</span><span className="ga-orbit ga-orbit-3">LEAD QUALITY</span></div>
      </div>
    </div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">The Problem</p><h2>Google Ads problems are often business and measurement problems, not setup problems.</h2><p>A campaign can show a healthy CTR and still produce weak business results. Cheap conversions can still become expensive customers when the leads are irrelevant or difficult for sales to qualify.</p></div><div className="ga-pain-grid">{problemCards.map(([n,title,text]) => <article className="ga-pain" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="ga-section-note">The important distinction is between a click, a conversion, a qualified lead, an opportunity, a customer and revenue. They are not interchangeable signals.</p></div></section>

    <section className="ga-section ga-included"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">The Approach</p><h2>A practical system built around search intent, measurement and lead quality.</h2><p>The work starts with the business and searcher, then moves through campaign structure, tracking, landing page alignment and continuous optimisation.</p></div><div className="ga-process">{approach.map(([n,title,text]) => <article className="ga-process-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">What the Service Includes</p><h2>Google Ads management built around the parts that influence commercial performance.</h2><p>The exact scope depends on the account, funnel and engagement. The focus is on work that materially improves relevance, measurement and decision quality.</p></div><div className="ga-included-grid">{serviceItems.map(([title, l1, t1, l2, t2]) => <div className="ga-included-item" key={title}><span>✓</span><div><h3>{title}</h3><p><strong>{l1}:</strong> {t1}</p><p><strong>{l2}:</strong> {t2}</p></div></div>)}</div></div></section>

    <section className="ga-proof"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">How Google Ads Fits Into the Funnel</p><h2>Google Ads is one component of the customer acquisition system.</h2><p>For lead generation businesses, the useful chain is not simply click to lead. It continues through qualification, CRM, sales follow up and revenue.</p></div><div className="ga-funnel">{funnelStages.map(([n, title], i) => <div className="ga-funnel-stage" key={title}><span>{n}</span><strong>{title}</strong>{i < funnelStages.length - 1 && <b>↓</b>}</div>)}</div><p className="ga-section-note">Google Ads can also support SEO, CRO, CRM, WhatsApp marketing and analytics when those systems are part of the same acquisition journey. The goal is not to force every channel into one model, but to understand where Google Ads creates value within the actual funnel.</p></div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Measurement & KPIs</p><h2>Measure from platform activity to business outcomes.</h2><p>The farther down the funnel you can measure reliably, the more commercially meaningful the analysis becomes.</p></div><div className="ga-metrics-grid">{metricGroups.map(([title, metrics]) => <article className="ga-metric-card" key={title}><span>{title}</span><div>{metrics.map((metric) => <strong key={metric}>{metric}</strong>)}</div></article>)}</div><div className="ga-outcome"><span>Important</span><strong>A low CPL is not automatically a good result. Benchmarks depend on industry, offer, market, competition, search intent, conversion process, sales process and business economics.</strong></div></div></section>

    <section className="ga-section ga-included"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Google Ads Strategy Framework</p><h2>Intent → Structure → Message → Conversion → Qualification → Optimisation</h2><p>This is Ashwin’s way of thinking about Google Ads. It is not an official Google framework.</p></div><div className="ga-framework">{framework.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Deliverables</p><h2>Clear workstreams from strategy through reporting.</h2></div><div className="ga-deliverables">{Object.entries(deliverables).map(([group, items]) => <article key={group}><span>{group}</span><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><p className="ga-section-note">Exact deliverables depend on the account and engagement scope. The objective is a useful operating system, not a long checklist for its own sake.</p></div></section>

    <section className="ga-proof"><div className="container"><div className="ga-proof-grid"><div><p className="services-eyebrow">Tools & Platforms</p><h2>The stack supports tracking, analysis, attribution, reporting and optimisation.</h2><p>Relevant tools can include Google Ads, Google Analytics, Google Tag Manager, Google Search Console, Looker Studio, HubSpot, WordPress and landing page or analytics tools where relevant.</p></div><div className="ga-proof-card"><span>Used for</span><strong>Tracking · Analysis · Attribution · Reporting · Optimisation</strong><p>The toolset should serve the measurement problem, not become a generic software list.</p></div></div></div></section>

    <section className="ga-section"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Case Study / Proof</p><h2>Proof should be specific, verified and connected to the funnel.</h2><p>I do not publish fictional ROAS, revenue, lead volumes, CPL reductions, client names, budgets or percentage improvements. Where verified Google Ads evidence is available, it should be presented with its proper context.</p></div><div className="ga-proof-checks">{['Campaign structure', 'Search term quality', 'Conversion tracking', 'Lead quality', 'Budget allocation', 'Landing page performance', 'Funnel conversion'].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><p>Area to analyse when taking over or auditing an account.</p></div>)}</div></div></section>

    <section className="ga-section"><div className="container ga-diff"><div><p className="services-eyebrow">Why Work With Ashwin</p><h2>The differentiator is how the account is analysed and managed.</h2></div><div><p>Google Ads is treated as part of the funnel. Tracking is considered before optimisation. Lead quality matters alongside lead volume. Landing pages matter alongside campaigns. Sales feedback can improve advertising decisions. Budget allocation should follow evidence, and testing should begin with a clear hypothesis.</p><p>That creates a practical operating loop: <strong>measure → interpret → test → learn → allocate → repeat.</strong></p></div></div></section>

    <section className="ga-section ga-faq"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">FAQ</p><h2>Google Ads questions business owners usually ask.</h2></div><div className="ga-faq-list">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="ga-section ga-social"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Keep the acquisition system connected</p><h2>Related services and resources that can strengthen the full funnel.</h2></div><div className="ga-related-grid">{internalLinks.map(([href,title,anchor], i) => <Link to={href} key={title}><span>{String(i + 1).padStart(2, '0')}</span><strong>{title}</strong><small>{anchor} →</small></Link>)}</div></div></section>

    <section className="ga-section ga-visuals"><div className="container"><div className="ga-section-heading"><p className="services-eyebrow">Recommended Visuals</p><h2>Use visuals that explain the system, not decorative stock imagery.</h2></div><div className="ga-visual-recs"><article><span>01</span><h3>Google Ads Funnel</h3><p><strong>Where:</strong> After the funnel section.</p><p><strong>Communicates:</strong> Search Intent → Ad → Landing Page → Lead → Qualified Lead → Customer.</p><p><strong>Format:</strong> Horizontal process infographic.</p></article><article><span>02</span><h3>Measurement Framework</h3><p><strong>Where:</strong> Inside the Measurement section.</p><p><strong>Communicates:</strong> Platform Metrics → Funnel Metrics → Business Metrics.</p><p><strong>Format:</strong> Three tier framework diagram.</p></article><article><span>03</span><h3>Optimisation Framework</h3><p><strong>Where:</strong> Strategy Framework section.</p><p><strong>Communicates:</strong> Intent → Structure → Message → Conversion → Qualification → Optimisation.</p><p><strong>Format:</strong> Circular or linear loop infographic.</p></article><article><span>04</span><h3>Search Intent Diagram</h3><p><strong>Where:</strong> The Approach section.</p><p><strong>Communicates:</strong> Informational → Commercial Investigation → High Intent → Conversion.</p><p><strong>Format:</strong> Intent spectrum or stepped flow.</p></article></div></div></section>

    <section className="ga-final"><div className="container"><p className="services-eyebrow">Ready to inspect your Google Ads?</p><h2>Let’s build the right acquisition system around your search demand.</h2><p>Start with a practical conversation about your offer, search demand, current account, tracking and business goals.</p><div className="ga-final-actions"><a className="ga-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Free Consultation <span>↗</span></a><Link className="ga-back-button" to="/case-studies">View Case Studies</Link></div><small>No unsupported promises. Just a clear view of what should be measured, improved and tested.</small></div></section>
  </main>
}
