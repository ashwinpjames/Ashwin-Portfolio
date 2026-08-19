import { useState } from 'react'
import { Link } from 'react-router-dom'

const stages = [
  {
    number: '01',
    title: 'Acquisition',
    system: 'Meta & Google',
    summary: 'Capture acquisition signals at campaign and ad set level, with source data that survives the handoff.',
    metrics: ['CPL by campaign and ad set', 'CTR and CPM', 'Lead volume', 'Form completion rate', 'UTM / source tagging'],
    good: 'Every campaign, ad set and creative variant follows a consistent UTM structure into a dedicated CRM property.',
    breaks: 'Redirects strip UTMs, forms fail to pass hidden fields, or naming conventions change and orphan historical data.',
  },
  {
    number: '02',
    title: 'Qualification',
    system: 'HubSpot',
    summary: 'Turn lead volume into a trustworthy quality signal by scoring and qualifying leads consistently.',
    metrics: ['Lead score at intake', 'MQL → SQL conversion rate', 'Disqualification reason by source', 'Speed to first touch'],
    good: 'Disqualification reasons are required and reviewed by source so acquisition problems can be separated from sales problems.',
    breaks: 'Sales marks leads unqualified without a reason, removing the data marketing needs to improve targeting.',
  },
  {
    number: '03',
    title: 'Conversion',
    system: 'HubSpot & CRM',
    summary: 'Connect qualified leads to opportunities and revenue so channel quality can be judged commercially.',
    metrics: ['Opportunity → closed won rate', 'Average deal value by source', 'Sales cycle length by source', 'Win / loss reason'],
    good: 'Closed won deals can be traced back to their original source without manual lookup.',
    breaks: 'Last touch overwrites the original source and silently removes the campaign that generated the lead.',
  },
  {
    number: '04',
    title: 'Attribution',
    system: 'Revenue reporting',
    summary: 'Put acquisition cost and closed revenue into the same view so budget decisions reflect commercial outcomes.',
    metrics: ['Revenue by campaign', 'CAC by channel', 'CAC : LTV ratio', 'True cost per customer'],
    good: 'Revenue and CAC : LTV are reported by channel on the same cadence as ad spend.',
    breaks: 'Attribution is reviewed too late, so budget continues flowing into channels before their true economics are understood.',
  },
]

const flow = [
  ['Campaign / ad set', 'Meta / Google', 'UTM → HubSpot source property'],
  ['Lead score, MQL / SQL status', 'HubSpot', 'Deal level source field'],
  ['Deal value, close date', 'HubSpot / CRM', 'Revenue by source report'],
  ['CAC, CAC : LTV', 'Revenue reporting', 'Feeds back into budget allocation'],
]

export default function LeadQualityFramework() {
  const [active, setActive] = useState(0)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const stage = stages[active]

  const submit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return <main className="lead-quality-page">
    <section className="lq-hero"><div className="container lq-container"><p className="resources-eyebrow">Framework · Meta · Google · HubSpot</p><h1>Stop optimizing for cheap leads. <span>Measure what becomes revenue.</span></h1><p className="lq-hero-copy">A practical framework for connecting acquisition metrics with sales qualification and downstream commercial outcomes.</p><div className="lq-pills"><span>Acquisition</span><span>Qualification</span><span>Conversion</span><span>Attribution</span></div></div></section>

    <section className="lq-gap"><div className="container lq-container"><div className="lq-section-label">THE GAP</div><div className="lq-two-col"><div><h2>Most advertisers optimize the wrong end of the funnel.</h2></div><div><p>Campaigns are often judged on CPL, CTR and lead volume. Those numbers live inside Meta and Google. The harder question is what happens after the form fill.</p><p className="lq-callout">A $40 lead that closes at 25% can be cheaper than a $15 lead that closes at 2%.</p></div></div><div className="lq-contrast"><div><strong>✕ CPL alone</strong><p>Marketing sees cheap volume. Sales says the leads are bad. Neither side can prove what happened after submission.</p></div><div><strong>✓ Full thread</strong><p>Source and campaign data follow the lead into the CRM, qualification feeds back into acquisition, and revenue becomes the scaling signal.</p></div></div></div></section>

    <section className="lq-model"><div className="container lq-container"><div className="lq-section-label">THE MODEL</div><div className="lq-model-heading"><h2>Four stages. One connected thread.</h2><p>Each stage has its own metrics and system of record. The framework is the wiring between them.</p></div><div className="lq-stage-tabs">{stages.map((item, index) => <button type="button" key={item.number} className={active === index ? 'active' : ''} onClick={() => setActive(index)}><span>{item.number}</span><strong>{item.title}</strong><small>{item.system}</small></button>)}</div><article className="lq-stage-detail"><div className="lq-stage-top"><div><span className="lq-number">{stage.number}</span><p className="lq-system">{stage.system}</p><h3>{stage.title}</h3><p>{stage.summary}</p></div><div className="lq-metrics"><p>Key signals</p>{stage.metrics.map((metric) => <span key={metric}>✓ {metric}</span>)}</div></div><div className="lq-good-break"><div><span>WHAT GOOD LOOKS LIKE</span><p>{stage.good}</p></div><div><span>WHERE THIS BREAKS</span><p>{stage.breaks}</p></div></div></article></div></section>

    <section className="lq-thread"><div className="container lq-container"><div className="lq-section-label">PUTTING IT TOGETHER</div><h2>One thread. Four systems.</h2><p className="lq-intro">Every lead keeps its original source and campaign attached as it moves through qualification, conversion and attribution. Break that thread anywhere and the reports disconnect again.</p><div className="lq-table"><div className="lq-table-head"><span>Field</span><span>Captured in</span><span>Carries forward as</span></div>{flow.map((row) => <div className="lq-table-row" key={row[0]}><span>{row[0]}</span><strong>{row[1]}</strong><span>{row[2]}</span></div>)}</div><div className="lq-thread-note">The framework does not replace your ad dashboard or CRM reporting. It wires them together so a lead's source survives to its closed revenue outcome.</div></div></section>

    <section className="lq-practice"><div className="container lq-container"><div className="lq-section-label">IN PRACTICE</div><h2>Four stages. One thread.<br /><span>One number that actually matters.</span></h2><p>The goal is not to report more metrics. It is to make the original source survive far enough down the funnel to influence budget decisions.</p><div className="lq-practice-list">{stages.map((item, index) => <button type="button" key={item.number} onClick={() => { setActive(index); window.scrollTo({ top: document.querySelector('.lq-model')?.offsetTop - 80 || 0, behavior: 'smooth' }) }}><i>{item.number}</i><span><strong>{item.title}</strong> — {index === 0 ? 'capture CPL, CPM, CTR and volume with UTM tagging.' : index === 1 ? 'score leads consistently and log disqualification reasons by source.' : index === 2 ? 'track deal value, cycle length and win/loss reason back to source.' : 'report revenue and CAC:LTV by channel and let economics drive budget.'}</span></button>)}</div></div></section>

    <section className="lq-download"><div className="container lq-container"><div><p className="lq-section-label">GET THE FRAMEWORK</p><h2>Want the full framework offline?</h2><p>Get the 9 page Lead Quality Framework as a printable PDF for your team.</p></div><div className="lq-form-wrap">{submitted ? <div className="lq-success"><strong>You're on the list.</strong><span>We'll use this email for the framework download when delivery is connected.</span></div> : <form onSubmit={submit}><label htmlFor="lq-email">Work email</label><div><input id="lq-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required /><button type="submit">Get the framework</button></div></form>}</div></div></section>

    <section className="lq-related"><div className="container lq-container"><p className="lq-section-label">GO DEEPER</p><div className="lq-related-grid"><Link to="/resources/utm-builder"><span>UTM Builder</span><small>Make source data survive the handoff.</small><b>↗</b></Link><Link to="/services/hubspot-crm-automation"><span>HubSpot CRM & Automation</span><small>Fix what happens after lead capture.</small><b>↗</b></Link><Link to="/services/performance-growth-marketing"><span>Performance & Growth Marketing</span><small>Connect acquisition to business KPIs.</small><b>↗</b></Link></div><Link className="lq-back" to="/resources">← Back to resources</Link></div></section>
  </main>
}
