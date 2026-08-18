import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/meta-ads-service.css'

const included = [
  ['Audience and offer strategy', 'Define who the campaign should reach, what problem the offer solves and which audience signals matter.'],
  ['Campaign architecture', 'Structure prospecting, retargeting and lead generation campaigns around clear objectives and budget.'],
  ['Creative direction', 'Develop angles, hooks and creative briefs designed to stop the scroll and move the right prospect toward action.'],
  ['Lead qualification', 'Build forms, questions and campaign signals around the type of lead your sales team actually wants.'],
  ['Conversion tracking', 'Track meaningful actions so campaign decisions are based on useful conversion signals rather than clicks alone.'],
  ['Testing and optimisation', 'Test audiences, offers, creative angles and campaign structure, then move budget toward stronger signals.'],
]

const process = [
  ['01', 'Audit', 'Review the account, existing campaigns, creative, audiences, tracking and lead quality before changing the setup.'],
  ['02', 'Define the demand', 'Clarify the audience, offer, buying trigger and qualification criteria the campaigns need to attract.'],
  ['03', 'Build the system', 'Create the campaign structure, creative direction, lead flow and conversion signals around the commercial goal.'],
  ['04', 'Test and optimise', 'Compare creative, audiences and campaign signals, then adjust spend based on evidence rather than assumptions.'],
  ['05', 'Feed back sales data', 'Where CRM data is available, connect lead quality back to acquisition so optimisation moves beyond cheap lead volume.'],
]

const faqs = [
  ['Is Meta Ads suitable for a UAE service business?', 'It can be, but not every service should use Meta in the same way. Meta is particularly useful when the offer can create demand, the audience can be defined clearly and the business has a strong enough value proposition to interrupt the feed.'],
  ['Why am I getting Meta Ads leads but poor quality enquiries?', 'Lead volume is not the same as lead quality. The issue can come from audience signals, the offer, creative promise, form friction, qualification questions or sales follow up. I review the full journey rather than optimising only for the cheapest lead.'],
  ['How much should I spend on Meta Ads in Dubai?', 'There is no useful universal budget. A sensible starting budget depends on audience size, offer economics, expected lead value and how much testing is needed to identify a repeatable acquisition pattern.'],
  ['Do you create the ad creatives?', 'I provide creative direction around hooks, angles, offers and conversion messaging. The exact production model can be adapted to whether you already have an internal designer, content team or existing creative assets.'],
  ['Can you fix Meta conversion tracking?', 'Yes. I can review the important conversion actions and whether the signals being sent back to Meta are meaningful for campaign optimisation. The objective is to measure actions that matter to the business, not just clicks.'],
  ['How quickly can Meta Ads generate leads?', 'A campaign can start generating traffic and enquiries soon after launch when the audience, offer and creative have enough relevance. Reliable optimisation takes longer because useful patterns need to be separated from early noise.'],
  ['Do you manage Meta Ads yourself?', 'Yes. The work is hands on, with campaign analysis and optimisation handled directly rather than passed through multiple account layers.'],
]

export default function MetaAdsService() {
  return <main className="meta-service-page" id="main">
    <section className="meta-service-hero"><div className="meta-service-grid" aria-hidden="true"/><div className="container meta-service-hero-inner">
      <Link className="meta-service-back" to="/services">← Back to services</Link>
      <div className="meta-hero-layout">
        <div className="meta-hero-copy">
          <p className="meta-service-eyebrow">Meta Ads Management · Dubai & UAE</p>
          <h1>Meta Ads That Turn Attention Into <span>Qualified Leads.</span></h1>
          <p className="meta-service-hero-lead">I build Facebook and Instagram campaigns around audience, offer, creative and lead quality signals so paid social creates useful conversations, not just cheap enquiries.</p>
          <a className="meta-service-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Meta Ads Audit <span>↗</span></a>
          <p className="meta-service-trust">No obligation · Hands on management · Audience strategy · Creative direction · Lead qualification</p>
        </div>
        <div className="meta-hero-visual" aria-hidden="true">
          <div className="meta-visual-ring meta-visual-ring-one"/>
          <div className="meta-visual-ring meta-visual-ring-two"/>
          <div className="meta-visual-core"><span>META</span><strong>ADS</strong><small>ATTENTION → DEMAND → LEADS</small></div>
          <span className="meta-orbit meta-orbit-one">AUDIENCE</span>
          <span className="meta-orbit meta-orbit-two">CREATIVE</span>
          <span className="meta-orbit meta-orbit-three">LEAD QUALITY</span>
        </div>
      </div>
    </div></section>

    <section className="meta-service-section"><div className="container"><div className="meta-service-heading"><div><p className="meta-service-eyebrow">The problem</p><h2>More leads do not automatically mean more demand.</h2></div><p>Meta can generate inexpensive enquiries that look good in Ads Manager but create little value for the sales team. The campaign has to be built around the commercial problem, not just the platform metric.</p></div><div className="meta-pain-grid">{[['“We are getting leads, but they are not serious.”','Cheap lead volume can hide weak audience signals, vague offers and insufficient qualification.'],['“Our ads work for a few weeks, then performance drops.”','Creative fatigue and audience saturation can reduce response when testing is not built into the system.'],['“We do not know which creative is actually working.”','Without clear testing angles and meaningful conversion signals, changing ads becomes guesswork.'],['“Meta reports conversions, but sales sees little value.”','The platform can optimise toward the wrong action when the conversion signal does not represent business quality.']].map(([title,text])=><article className="meta-pain-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="meta-service-section meta-service-dark"><div className="container"><div className="meta-service-heading"><div><p className="meta-service-eyebrow">What's included</p><h2>Meta Ads built around the whole acquisition journey.</h2></div><p>The focus is not simply launching Facebook and Instagram campaigns. It is creating a system that can learn which audience, offer and creative combinations produce useful demand.</p></div><div className="meta-included-grid">{included.map(([title,text],index)=><article className="meta-included-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="meta-service-section"><div className="container"><div className="meta-service-heading"><div><p className="meta-service-eyebrow">The process</p><h2>From audience hypothesis to better signals.</h2></div><p>Every stage has a job. The process is designed to reduce wasted testing and make campaign decisions easier to explain.</p></div><div className="meta-process">{process.map(([number,title,text])=><article className="meta-process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="meta-service-proof"><div className="container meta-proof-grid"><div><p className="meta-service-eyebrow">Results & proof</p><h2>Measure the quality of demand, not just the number of forms.</h2></div><div><p>Relevant experience includes paid acquisition and lead generation across immigration and visa services, attestation and professional services, healthcare and wellness, recruitment and HR, business services and other high consideration offers.</p><p>When verified campaign and CRM data is available, this section should show concrete metrics such as qualified lead cost, lead to opportunity rate, conversion rate and spend to qualified enquiry.</p><div className="meta-proof-note">No invented performance figures. Only verified results should be published here.</div></div></div></section>

    <section className="meta-service-section"><div className="container meta-differentiator"><div><p className="meta-service-eyebrow">Why Ashwin</p><h2>You work directly with the person making the campaign decisions.</h2></div><p>I treat Meta Ads as one part of a growth system. Audience strategy, creative, landing pages, tracking, CRM and lead quality all affect whether paid social becomes useful demand. The goal is to understand what is happening, make the right change and measure what happens next.</p></div></section>

    <section className="meta-service-section meta-service-dark"><div className="container"><div className="meta-service-heading"><div><p className="meta-service-eyebrow">FAQ</p><h2>Questions to answer before handing over your ad budget.</h2></div><p>Clear answers to the concerns a skeptical business owner should have before starting.</p></div><div className="meta-faq">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="meta-service-cta"><div className="container"><p className="meta-service-eyebrow">Ready to look at the account?</p><h2>Find out whether your Meta Ads are attracting the right demand.</h2><p>Book 15 minutes. I will review the biggest potential issues in your current setup and explain what I would prioritise.</p><a className="meta-service-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Meta Ads Audit <span>↗</span></a></div></section>

    <section className="meta-related"><div className="container"><p className="meta-service-eyebrow">Related services</p><div className="meta-related-grid"><Link to="/services/landing-page-optimisation"><span>Landing Page Optimisation</span><b>→</b></Link><Link to="/services/lead-generation"><span>Lead Generation</span><b>→</b></Link><Link to="/services/hubspot"><span>HubSpot CRM & Automation</span><b>→</b></Link></div></div></section>
  </main>
}
