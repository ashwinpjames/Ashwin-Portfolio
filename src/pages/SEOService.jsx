import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/seo-service.css'

const included = [
  ['Technical SEO', 'Crawlability, indexation, site structure, metadata and technical issues that can limit visibility.'],
  ['Keyword strategy', 'Search themes grouped around commercial intent, location and buyer needs.'],
  ['On page optimisation', 'Sharper page structure, headings, internal links and copy aligned to search intent.'],
  ['Local SEO', 'Optimisation for Dubai and UAE searches where local relevance matters.'],
  ['Content planning', 'Topics and pages prioritised around useful demand rather than publishing volume.'],
  ['Measurement', 'Search Console, analytics and conversion signals used to understand what is actually improving.'],
]

const process = [
  ['01', 'Audit', 'Review technical health, existing visibility, pages, search intent and conversion paths.'],
  ['02', 'Map demand', 'Identify priority search themes and the pages that should own them.'],
  ['03', 'Fix foundations', 'Address technical and on page issues that prevent the site from competing effectively.'],
  ['04', 'Build relevance', 'Create and improve useful commercial content and internal linking around priority topics.'],
  ['05', 'Measure and refine', 'Track visibility, organic behaviour and conversions, then adjust priorities based on evidence.'],
]

const faqs = [
  ['How long does SEO take to work in Dubai?', 'SEO is a compounding channel rather than an instant lead source. The timeline depends on competition, site condition, authority and the amount of relevant demand available.'],
  ['Can you guarantee first place on Google?', 'No credible SEO specialist can guarantee a specific ranking. The objective is to improve the site’s ability to compete for relevant searches and measure the business impact.'],
  ['Do you focus on local SEO in Dubai?', 'Yes. Where local intent matters, the strategy includes local relevance, location pages and the signals that help businesses compete for Dubai and UAE searches.'],
  ['Do you create SEO content?', 'I can plan and optimise the content system around search intent, commercial relevance and conversion. Production can be handled directly or with your existing content resources.'],
  ['Can you audit my existing SEO?', 'Yes. The audit looks at technical issues, search visibility, page relevance, internal linking, local signals and conversion paths.'],
  ['How do you measure SEO results?', 'Beyond rankings and traffic, I look at relevant landing pages, enquiries, conversion signals and the commercial value of organic demand.'],
]

export default function SEOService() {
  return <main className="seo-service-page" id="main">
    <section className="seo-service-hero"><div className="seo-service-grid" aria-hidden="true"/><div className="container seo-service-hero-inner">
      <Link className="seo-service-back" to="/services">← Back to services</Link>
      <div className="seo-service-hero-content">
        <div className="seo-service-copy"><p className="seo-service-eyebrow">SEO · Dubai & UAE</p><h1>SEO That Builds Visibility Around <span>Commercial Search Demand.</span></h1><p className="seo-service-hero-lead">I build SEO around the searches your buyers actually use, with technical foundations, local visibility and content designed to turn relevant organic traffic into enquiries.</p><a className="seo-service-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute SEO Audit <span>↗</span></a><p className="seo-service-trust">No obligation · Dubai based · Technical SEO · Local SEO · Search intent</p></div>
        <div className="seo-service-visual"><div className="seo-ring seo-ring-one"/><div className="seo-ring seo-ring-two"/><div className="seo-core"><span>SEO</span><strong>SEARCH</strong><small>VISIBILITY → DEMAND → LEADS</small></div><span className="seo-node seo-node-one">INTENT</span><span className="seo-node seo-node-two">CONTENT</span><span className="seo-node seo-node-three">TECHNICAL</span></div>
      </div>
    </div></section>

    <section className="seo-service-section"><div className="container"><div className="seo-service-heading"><div><p className="seo-service-eyebrow">The problem</p><h2>More traffic is not the same as more business.</h2></div><p>Ranking for broad keywords can look impressive while doing little for revenue. The goal is to build visibility around searches with commercial relevance.</p></div><div className="seo-pain-grid">{[['“We get traffic, but few enquiries.”','Traffic without intent is not a useful acquisition channel. Pages need to match what the searcher is trying to do.'],['“We do not know what to prioritise.”','Technical fixes, content and local SEO can compete for attention. The work needs a clear order based on commercial impact.'],['“Competitors keep appearing above us.”','A stronger search presence requires understanding the gaps in relevance, authority, technical health and local signals.'],['“SEO feels impossible to measure.”','Organic performance needs to connect rankings and traffic with enquiries, conversions and the pages that influence them.']].map(([title,text]) => <article className="seo-pain-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="seo-service-section seo-service-dark"><div className="container"><div className="seo-service-heading"><div><p className="seo-service-eyebrow">What's included</p><h2>SEO built around the searches that can become demand.</h2></div><p>The work covers the technical foundation, search strategy and page improvements needed to make organic visibility commercially useful.</p></div><div className="seo-included-grid">{included.map(([title,text],index)=><article className="seo-included-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="seo-service-section"><div className="container"><div className="seo-service-heading"><div><p className="seo-service-eyebrow">The process</p><h2>From search audit to measurable organic growth.</h2></div><p>Each stage has a clear job. The process is designed to avoid random optimisation and focus effort on the areas most likely to improve relevant visibility.</p></div><div className="seo-process">{process.map(([number,title,text]) => <article className="seo-process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="seo-service-proof"><div className="container seo-proof-grid"><div><p className="seo-service-eyebrow">Results & proof</p><h2>Measure search visibility by the demand it creates.</h2></div><div><p>Relevant experience includes marketing and lead generation across immigration and visa services, attestation and professional services, healthcare and wellness, recruitment and HR, business services and other high consideration offers.</p><p>When verified data is available, this section should show concrete metrics such as organic enquiries, qualified lead growth, conversion rate and priority keyword visibility.</p><div className="seo-proof-note">No invented SEO results. Only verified performance data should be published here.</div></div></div></section>

    <section className="seo-service-section"><div className="container seo-differentiator"><div><p className="seo-service-eyebrow">Why Ashwin</p><h2>SEO connected to the rest of your acquisition system.</h2></div><p>I do not treat SEO as a rankings exercise in isolation. Search intent, landing pages, analytics, lead quality and the sales journey all affect whether organic traffic becomes useful demand. The goal is to build visibility that supports the business, not just a bigger traffic graph.</p></div></section>

    <section className="seo-service-section seo-service-dark"><div className="container"><div className="seo-service-heading"><div><p className="seo-service-eyebrow">FAQ</p><h2>Questions business owners ask before investing in SEO.</h2></div><p>Clear answers to the concerns a skeptical buyer should have before committing budget.</p></div><div className="seo-faq">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="seo-service-cta"><div className="container"><p className="seo-service-eyebrow">Not sure what is holding your SEO back?</p><h2>Let's spend 15 minutes looking at it.</h2><p>I will review the biggest potential issues in your current search setup and explain what I would prioritise.</p><a className="seo-service-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute SEO Audit <span>↗</span></a><small>No long presentation. No obligation. Just a practical review.</small></div></section>

    <section className="seo-related"><div className="container"><p className="seo-service-eyebrow">Related services</p><div className="seo-related-grid"><Link to="/services/website-development"><span>Website Development</span><b>→</b></Link><Link to="/services/landing-page-optimisation"><span>Landing Page Optimisation</span><b>→</b></Link><Link to="/services/lead-generation"><span>Lead Generation</span><b>→</b></Link></div></div></section>
  </main>
}
