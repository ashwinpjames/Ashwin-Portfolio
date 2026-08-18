import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/cro-service.css'

const pains = [
  ['Visitors arrive but leave', 'Traffic is reaching the page, but the value proposition does not make the next step obvious enough.'],
  ['The offer is unclear', 'A visitor should understand what you do, who it is for and why it matters without having to work it out.'],
  ['There is too much friction', 'Long forms, weak CTAs, poor mobile UX and unnecessary decisions can quietly reduce enquiries.'],
  ['You cannot see what is failing', 'Without conversion tracking and testing, changes become opinions instead of measurable decisions.'],
]

const included = [
  ['Message match', 'Align the ad, search intent or traffic source with the page promise and visitor expectation.'],
  ['Value proposition', 'Clarify the outcome, differentiation and reasons to believe so visitors can decide faster.'],
  ['CTA strategy', 'Improve CTA placement, language and hierarchy around the action that matters commercially.'],
  ['Page structure', 'Rework information hierarchy so proof, offer, objections and action appear at the right moments.'],
  ['Trust', 'Strengthen proof, credibility signals, reassurance and evidence where uncertainty is blocking action.'],
  ['Forms & mobile UX', 'Reduce unnecessary fields, improve usability and remove friction across smaller screens.'],
  ['Conversion tracking', 'Track meaningful actions so we can distinguish engagement from actual enquiry behaviour.'],
  ['Testing', 'Prioritise hypotheses and test changes based on evidence rather than redesigning pages for preference.'],
]

const process = [
  ['01', 'Diagnose', 'Review traffic sources, page behaviour, messaging, CTAs, forms and conversion data.'],
  ['02', 'Find friction', 'Identify where visitors lose clarity, trust or momentum before taking action.'],
  ['03', 'Prioritise', 'Rank opportunities by likely impact, effort and confidence rather than changing everything at once.'],
  ['04', 'Improve', 'Implement focused changes to messaging, structure, trust, UX and conversion paths.'],
  ['05', 'Test & learn', 'Measure the response, document the learning and use it to decide what should happen next.'],
]

const faqs = [
  ['Do I need more traffic before working on CRO?', 'Not necessarily. If your existing traffic is relevant, improving conversion can create more enquiries from the demand you already paid or worked to acquire.'],
  ['Can you improve an existing website without rebuilding it?', 'Yes. CRO often starts with targeted changes to messaging, page structure, CTAs, forms and mobile UX. A rebuild is only recommended when the current foundation genuinely limits improvement.'],
  ['How do you know what should be changed?', 'The starting point is evidence: traffic sources, page behaviour, conversion tracking, user intent and the commercial goal. Testing is used where the evidence does not give us a clear answer.'],
  ['Will CRO guarantee more leads?', 'No. Anyone guaranteeing a specific uplift before understanding the traffic, offer and page is making a claim they cannot responsibly support. The goal is to identify and improve the biggest conversion constraints.'],
  ['Do you work on mobile conversion?', 'Yes. Mobile UX is treated as a core conversion environment, including page hierarchy, CTA visibility, form usability, load experience and friction.'],
  ['Can CRO work with Google Ads and Meta Ads?', 'Yes. Message match between ads and landing pages is one of the most important areas to review when paid traffic is already reaching the site.'],
]

export default function CROService() {
  return <main className="cro-service" id="main">
    <section className="cro-hero"><div className="cro-grid" aria-hidden="true"/><div className="container cro-hero-inner">
      <Link className="cro-back" to="/services">← Back to services</Link>
      <div className="cro-hero-layout"><div className="cro-hero-copy"><p className="cro-eyebrow">CRO · Conversion Rate Optimisation</p><h1>Turn More of Your Existing Traffic Into Enquiries.</h1><p className="cro-lead">You're already getting visitors. The job is to remove the reasons they hesitate, lose trust or fail to take the next step.</p><a className="cro-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute CRO Review <span>↗</span></a><p className="cro-trust">No obligation · Evidence led · Dubai based</p></div><div className="cro-hero-panel"><span>CONVERSION PATH</span><div className="cro-funnel"><b>VISIT</b><i>↓</i><b>UNDERSTAND</b><i>↓</i><b>TRUST</b><i>↓</i><strong>ENQUIRE</strong></div></div></div>
    </div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><div><p className="cro-eyebrow">The problem</p><h2>You're getting visitors. Too many are leaving without taking action.</h2></div><p>More traffic does not automatically solve a conversion problem. If the page creates uncertainty or friction, additional traffic can simply create more wasted opportunity.</p></div><div className="cro-pain-grid">{pains.map(([title, text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cro-section cro-dark"><div className="container"><div className="cro-heading"><div><p className="cro-eyebrow">Strategic insight</p><h2>Conversion usually breaks where clarity, trust or momentum breaks.</h2></div><p>The goal is not to make a page look better. It is to make the next decision easier for the right visitor.</p></div><div className="cro-principles"><article><span>01</span><h3>Clarity</h3><p>Can the visitor immediately understand the offer and outcome?</p></article><article><span>02</span><h3>Confidence</h3><p>Does the page provide enough proof to make the next step feel safe?</p></article><article><span>03</span><h3>Momentum</h3><p>Does every section help the visitor move closer to enquiry?</p></article><article><span>04</span><h3>Measurement</h3><p>Can we tell which changes actually improve conversion?</p></article></div></div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><div><p className="cro-eyebrow">What's included</p><h2>Specific improvements across the conversion path.</h2></div><p>Each area is tied to a visitor behaviour or business outcome rather than a generic design checklist.</p></div><div className="cro-included-grid">{included.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cro-section cro-dark"><div className="container"><div className="cro-heading"><div><p className="cro-eyebrow">The methodology</p><h2>Find the constraint. Fix it. Measure it. Repeat.</h2></div><p>CRO works best as a structured learning process, not a one time redesign.</p></div><div className="cro-process">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="cro-measure"><div className="container cro-measure-grid"><div><p className="cro-eyebrow">Measurement</p><h2>Measure enquiries, not just clicks.</h2></div><div><p>Depending on the funnel, measurement can include CTA interactions, form starts, form completions, WhatsApp enquiries, qualified leads and conversion rate.</p><div className="cro-tags"><span>Conversion rate</span><span>Form completion</span><span>WhatsApp enquiries</span><span>Qualified leads</span><span>Testing</span></div></div></div></section>

    <section className="cro-section"><div className="container cro-proof"><div><p className="cro-eyebrow">Proof</p><h2>Built from acquisition experience, not design theory alone.</h2></div><div><p>Conversion work is informed by hands on experience across paid acquisition, landing pages, websites, analytics, CRM and lead qualification for high consideration services.</p><p>Verified performance data can be added as case study evidence becomes available. No fabricated uplift claims.</p></div></div></section>

    <section className="cro-section cro-dark"><div className="container cro-why"><div><p className="cro-eyebrow">Why Ashwin</p><h2>The page is only one part of the conversion system.</h2></div><p>I look at what brought the visitor, what they see, what they need to believe, how they enquire and what happens after the enquiry. That makes CRO useful beyond cosmetic page changes.</p></div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><div><p className="cro-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2></div><p>Direct answers to common CRO objections.</p></div><div className="cro-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="cro-cta"><div className="container"><p className="cro-eyebrow">Ready to improve conversion?</p><h2>Let's find where your visitors are getting stuck.</h2><p>Book 15 minutes and we can identify the biggest conversion constraint before deciding what to change.</p><a className="cro-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Free CRO Review <span>↗</span></a></div></section>

    <section className="cro-related"><div className="container"><p className="cro-eyebrow">Related services</p><div className="cro-related-grid"><Link to="/services/google-ads"><span>Google Ads</span><b>→</b></Link><Link to="/services/meta-ads"><span>Meta Ads</span><b>→</b></Link><Link to="/services/website-development"><span>Website Development</span><b>→</b></Link></div></div></section>
  </main>
}
