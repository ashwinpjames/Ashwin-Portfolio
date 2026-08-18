import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/performance-growth-service.css'

const pains = [
  ['Channels work in isolation', 'Google Ads, Meta, SEO, landing pages and CRM activity can each look acceptable while the overall acquisition system underperforms.'],
  ['You cannot see the real constraint', 'More traffic may not fix weak conversion. More leads may not fix poor qualification. Better ads may not fix a slow sales follow up.'],
  ['Budget follows habit', 'Spend should move toward channels, audiences and offers that create stronger commercial outcomes, not simply the ones with the cheapest surface level metric.'],
  ['Growth becomes harder to scale', 'When tracking, conversion paths and feedback loops are weak, increasing budget can increase inefficiency instead of increasing profitable demand.'],
]

const included = [
  ['Acquisition', 'Review channels, audiences, offers and demand sources to identify where qualified opportunities can be created.'],
  ['Conversion', 'Improve landing pages, website journeys, CTAs and forms so relevant traffic has a clearer path to enquiry.'],
  ['Tracking & analytics', 'Connect acquisition activity with conversion and CRM signals so decisions are based on evidence.'],
  ['Lead quality', 'Look beyond lead volume and identify the sources, messages and segments producing leads sales can actually work with.'],
  ['Testing', 'Build a prioritised testing system across channels, creative, offers, landing pages and conversion paths.'],
  ['Budget allocation', 'Shift investment toward stronger opportunities using performance and business signals rather than platform metrics alone.'],
  ['Funnel optimisation', 'Find leaks between first touch, enquiry, qualification and sales progression, then address the highest impact constraint.'],
  ['Scaling', 'Increase what works carefully while protecting lead quality, conversion efficiency and the economics of the business.'],
  ['Business KPIs', 'Connect marketing activity to the numbers leadership actually cares about: qualified leads, opportunities, revenue and efficiency.'],
]

const process = [
  ['01', 'Diagnose the system', 'Map acquisition, conversion, tracking, CRM and sales feedback to understand how the whole funnel currently behaves.'],
  ['02', 'Find the constraint', 'Separate the symptom from the bottleneck. The problem may be demand, conversion, measurement, lead quality or follow up.'],
  ['03', 'Prioritise', 'Create a ranked improvement plan based on commercial impact, confidence, effort and available evidence.'],
  ['04', 'Improve & test', 'Implement focused changes across channels, funnel stages, tracking and conversion paths, then measure the response.'],
  ['05', 'Scale deliberately', 'Reallocate budget and resources toward validated opportunities while monitoring quality and business KPIs.'],
]

const faqs = [
  ['Is Performance & Growth Marketing just managing ads?', 'No. Paid media can be part of the system, but the service looks across acquisition, conversion, tracking, lead quality, sales feedback and business outcomes.'],
  ['How do you decide what to fix first?', 'The first priority is the constraint with the strongest likely effect on the commercial outcome. More traffic is not the answer if the website or sales process is leaking demand.'],
  ['Can you work with our existing marketing team?', 'Yes. The work can be hands on execution, strategic direction or a combination depending on the capability already inside the business.'],
  ['Which KPIs do you optimise for?', 'That depends on the business, but the focus can include cost per qualified lead, lead to opportunity rate, conversion rate, acquisition efficiency, pipeline and revenue signals.'],
  ['Do you guarantee a specific growth result?', 'No. A responsible growth system starts with diagnosis and evidence. Specific performance guarantees before understanding the funnel would be misleading.'],
  ['When does this make more sense than hiring a single channel specialist?', 'When the business has enough activity to expose problems between channels or funnel stages and needs someone looking at the system as a whole.'],
]

export default function PerformanceGrowthService() {
  return <main className="pg-service" id="main">
    <section className="pg-hero"><div className="pg-grid" aria-hidden="true"/><div className="container pg-hero-inner">
      <Link className="pg-back" to="/services">← Back to services</Link>
      <div className="pg-hero-layout"><div className="pg-hero-copy"><p className="pg-eyebrow">Performance & Growth Marketing · Dubai & UAE</p><h1>Make Your Entire Acquisition System Perform Better.</h1><p className="pg-lead">I connect acquisition, conversion, tracking and sales feedback so marketing decisions are tied to qualified demand and business KPIs, not isolated channel metrics.</p><a className="pg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Growth Review <span>↗</span></a><p className="pg-trust">No obligation · Hands on specialist support · Dubai based</p></div><div className="pg-hero-panel"><span>SYSTEM VIEW</span><div className="pg-system"><b>ACQUISITION</b><i>↓</i><b>CONVERSION</b><i>↓</i><b>QUALIFICATION</b><i>↓</i><strong>BUSINESS KPI</strong></div><small>Traffic is only one input. The system is the outcome.</small></div></div>
    </div></section>

    <section className="pg-section"><div className="container"><div className="pg-heading"><div><p className="pg-eyebrow">The problem</p><h2>Individual channels can improve while the business stays stuck.</h2></div><p>Growth is rarely limited to one platform. The constraint can sit anywhere between first touch and revenue.</p></div><div className="pg-pain-grid">{pains.map(([title,text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="pg-section pg-dark"><div className="container"><div className="pg-heading"><div><p className="pg-eyebrow">Strategic insight</p><h2>Optimising a channel is not the same as optimising the system.</h2></div><p>The highest impact improvement may be an acquisition change, a conversion fix, a tracking correction, a lead qualification rule or a budget shift.</p></div><div className="pg-principles"><article><span>01</span><h3>Acquire</h3><p>Create demand and capture existing demand from the audiences most likely to matter.</p></article><article><span>02</span><h3>Convert</h3><p>Turn relevant attention into clear, measurable enquiries.</p></article><article><span>03</span><h3>Learn</h3><p>Use analytics, CRM and sales feedback to improve the next decision.</p></article><article><span>04</span><h3>Scale</h3><p>Put more resources behind validated opportunities without losing quality.</p></article></div></div></section>

    <section className="pg-section"><div className="container"><div className="pg-heading"><div><p className="pg-eyebrow">What's included</p><h2>A wider view of the acquisition system.</h2></div><p>Each workstream exists to improve a measurable part of the path from demand to business outcome.</p></div><div className="pg-included-grid">{included.map(([title,text],i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="pg-section pg-dark"><div className="container"><div className="pg-heading"><div><p className="pg-eyebrow">The methodology</p><h2>Diagnose the system. Find the constraint. Improve and scale.</h2></div><p>A structured operating rhythm keeps growth decisions connected to evidence and commercial priorities.</p></div><div className="pg-process">{process.map(([number,title,text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="pg-measure"><div className="container pg-measure-grid"><div><p className="pg-eyebrow">Measurement</p><h2>Optimise toward business KPIs, not platform vanity metrics.</h2></div><div><p>The measurement layer can connect channel performance to conversion, qualification, sales progression and revenue signals.</p><div className="pg-tags"><span>Qualified leads</span><span>Cost per qualified lead</span><span>Lead to opportunity</span><span>Conversion rate</span><span>Pipeline</span><span>Revenue</span></div></div></div></section>

    <section className="pg-section"><div className="container pg-proof"><div><p className="pg-eyebrow">Proof</p><h2>Built from working across the full acquisition chain.</h2></div><div><p>Experience spans paid acquisition, websites, landing pages, analytics, HubSpot CRM, lead qualification and sales feedback across immigration, attestation, healthcare, recruitment and professional services.</p><p>Verified performance data can be added as case study evidence grows. No invented growth numbers.</p></div></div></section>

    <section className="pg-section pg-dark"><div className="container pg-why"><div><p className="pg-eyebrow">Why Ashwin</p><h2>You are not hiring another person to watch one dashboard.</h2></div><p>The value is connecting the dashboards. I look at where demand comes from, what happens after the click, whether the enquiry is useful, how sales responds and what the business should change next.</p></div></section>

    <section className="pg-section"><div className="container"><div className="pg-heading"><div><p className="pg-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2></div><p>Direct answers for businesses considering a broader growth engagement.</p></div><div className="pg-faq">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="pg-cta"><div className="container"><p className="pg-eyebrow">Ready to improve the system?</p><h2>Let's find the constraint before increasing the budget.</h2><p>Book 15 minutes. We can look at the acquisition system, identify the biggest bottleneck and define the first practical move.</p><a className="pg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Free Growth Review <span>↗</span></a></div></section>

    <section className="pg-related"><div className="container"><p className="pg-eyebrow">Related services</p><div className="pg-related-grid"><Link to="/services/google-ads"><span>Google Ads</span><b>→</b></Link><Link to="/services/meta-ads"><span>Meta Ads</span><b>→</b></Link><Link to="/services/lead-generation"><span>Lead Generation</span><b>→</b></Link><Link to="/services/cro"><span>Conversion Rate Optimisation</span><b>→</b></Link></div></div></section>
  </main>
}
