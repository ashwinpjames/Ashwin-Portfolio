import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SOURCE = 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'
const phases = [
  { label: 'Within 1 hour', x: 90, y: 38, value: '100', note: 'Call within the hour: the baseline.', detail: 'Reference point for the relative qualification comparison.' },
  { label: '1 hour later', x: 315, y: 156, value: '≈14', note: 'Wait one more hour: nearly 7× less likely to qualify.', detail: 'Relative index shown as approximately 100 ÷ 7; not a measured conversion percentage.' },
  { label: '24 hours+', x: 540, y: 275, value: '<1.7', note: 'Wait a day or more: over 60× less likely to qualify.', detail: 'Relative index below 100 ÷ 60; not a measured conversion percentage.' },
]
const faq = [
  ['What is lead response time?', 'Lead response time is the elapsed time between an enquiry arriving and the first meaningful attempt to contact that person. Measure it from the actual submission timestamp, not from when a salesperson opens the CRM.'],
  ['Does responding within an hour guarantee seven times more sales?', 'No. The 2011 research compared the likelihood of qualifying a lead, defined as having a meaningful conversation with a key decision maker. It did not establish a sevenfold increase in purchases or revenue.'],
  ['What is a good speed-to-lead target?', 'There is no universal target. Aim to respond promptly during agreed service hours, then measure contact and qualification rates by response-time cohort to establish what works for your audience.'],
  ['How can HubSpot help with lead response time?', 'HubSpot workflows, assignment rules, task notifications and timestamp properties can support faster routing and monitoring when configured and maintained correctly.'],
]
const schema = {
  '@context':'https://schema.org', '@type':'BlogPosting',
  headline:'Lead Response Time: How Fast Do Sales Leads Go Cold?',
  description:'Explore the Harvard Business Review lead response time study with an animated chart, its limitations and a practical CRM follow-up framework.',
  datePublished:'2026-11-15', dateModified:'2026-11-15',
  mainEntityOfPage:'https://www.ashwinjames.com/blog/lead-response-time-study',
  author:{'@type':'Person',name:'Ashwin James',url:'https://www.ashwinjames.com/'},
  publisher:{'@type':'Person',name:'Ashwin James'},
  citation:SOURCE,
  keywords:'lead response time, speed to lead, lead follow up time, CRM lead management, lead qualification'
}
function LeadResponseChart() {
  const [step,setStep] = useState(0)
  const [playing,setPlaying] = useState(true)
  useEffect(() => {
    if (!playing || typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const interval = window.setInterval(() => setStep(current => (current + 1) % phases.length), 2900)
    return () => window.clearInterval(interval)
  }, [playing])
  const selected = phases[step]
  const path = phases.slice(0,step+1).map((point,i) => `${i===0?'M':'L'} ${point.x} ${point.y}`).join(' ')
  return <figure className="s2l-chart" aria-labelledby="s2l-chart-heading">
    <div className="s2l-chart-top"><span>RESEARCH VISUALISED</span><span>2011 · 42 US companies · 1.25M leads</span></div>
    <h2 id="s2l-chart-heading">How fast a lead goes cold</h2>
    <p className="s2l-chart-sub">Relative likelihood of qualifying a lead, indexed to contact within the first hour (= 100)</p>
    <p className="s2l-chart-note" aria-live="polite">{selected.note}</p>
    <svg viewBox="0 0 650 340" role="img" aria-label={`Relative qualification likelihood: within one hour index 100; an hour later approximately 14; 24 hours or more below 1.7. Currently highlighting ${selected.label}.`}>
      {[38,156,275].map((y,i)=><g key={y}><line x1="90" x2="540" y1={y} y2={y} className="s2l-grid"/><text x="70" y={y+5} textAnchor="end" className="s2l-axis">{['100','10','1'][i]}</text></g>)}
      <line x1="90" x2="90" y1="30" y2="288" className="s2l-axis-line"/>
      <line x1="90" x2="540" y1="288" y2="288" className="s2l-axis-line"/>
      <path d={path} className="s2l-path" />
      {phases.slice(0,step+1).map((point,i)=><circle key={point.label} cx={point.x} cy={point.y} r={i===step?7:4.5} className="s2l-point"/>)}
      {phases.map((point,i)=><text key={point.label} x={point.x} y="314" textAnchor={i===0?'start':i===2?'end':'middle'} className="s2l-axis">{point.label}</text>)}
      <text x={Math.min(selected.x+14,555)} y={Math.max(selected.y-12,23)} className="s2l-value">{selected.value}</text>
    </svg>
    <div className="s2l-chart-footer"><div><span>SELECTED RESPONSE WINDOW</span><strong>{selected.label}</strong><p>{selected.detail}</p></div><div className="s2l-chart-actions"><button type="button" onClick={()=>{setPlaying(false);setStep((step+1)%3)}}>Next stage</button><button type="button" onClick={()=>setPlaying(!playing)} aria-pressed={playing}>{playing?'Pause':'Play'}</button></div></div>
    <div className="s2l-tabs" role="group" aria-label="Choose response time">{phases.map((phase,i)=><button key={phase.label} type="button" className={step===i?'active':''} aria-pressed={step===i} onClick={()=>{setPlaying(false);setStep(i)}}>{phase.label}</button>)}</div>
    <figcaption>Conceptual line joins reported comparison points; the intermediate values are approximate index calculations, not independently measured percentages. The vertical axis is logarithmic. Source: <a href={SOURCE} target="_blank" rel="noopener noreferrer">Oldroyd, McElheran & Elkington, Harvard Business Review (2011)</a>.</figcaption>
  </figure>
}
export default function LeadResponseTimeBlog(){
 return <main className="s2l-page"><script type="application/ld+json">{JSON.stringify(schema)}</script><article className="s2l-article">
  <header className="s2l-hero"><Link to="/blog" className="s2l-back">← All articles</Link><p className="s2l-eyebrow">LEAD GENERATION / SALES OPERATIONS / CRM</p><p className="s2l-date"><time dateTime="2026-11-15">15 November 2026</time> · 8 min read</p><h1>Lead Response Time: How Fast Do Sales Leads Go Cold?</h1><p className="s2l-lede">Generating an enquiry is only the beginning. A landmark Harvard Business Review analysis found a striking association between follow-up speed and the chance of reaching a decision maker. Explore the evidence, then learn how to measure your own lead response process.</p></header>
  <LeadResponseChart/>
  <div className="s2l-prose">
    <h2>What the Harvard Business Review study actually found</h2>
    <p>In <a href={SOURCE} target="_blank" rel="noopener noreferrer">The Short Life of Online Sales Leads</a> (March 2011), James B. Oldroyd, Kristina McElheran and David Elkington described research involving <strong>1.25 million online sales leads across 42 US companies</strong>: 29 business-to-consumer and 13 business-to-business organisations.</p>
    <p>Companies attempting contact within one hour were <strong>nearly seven times as likely to qualify a lead</strong> as those attempting contact even one hour later, and <strong>more than 60 times as likely</strong> as those waiting 24 hours or longer. The researchers defined qualification as a meaningful conversation with a key decision maker. These are relative comparisons, not lead-to-customer conversion rates.</p>
    <h2>Why response time matters after a form submission</h2>
    <p>When someone submits a form after seeing a Meta Ad, clicking a Google Search Ad or reading a landing page, their intent is current. A delayed callback creates an avoidable gap between the moment they ask for help and the moment the business responds. But speed alone cannot rescue poor targeting, an irrelevant offer or a weak sales conversation.</p>
    <p>That distinction matters for <Link to="/">performance marketing specialists</Link>: advertising dashboards usually record the lead at submission, while the actual business outcome depends on what happens afterwards. Treat response time as a controllable part of the acquisition funnel, not as a substitute for lead quality.</p>
    <h2>What the separate response-time audit revealed</h2>
    <p>The same HBR article also reported a separate audit of <strong>2,241 US companies</strong> using test web enquiries. Of those businesses, 37% responded within an hour, 16% within one to 24 hours, 24% after more than 24 hours and 23% did not respond. Among those that replied within 30 days, the average response time was 42 hours. These audit percentages should not be confused with the 1.25-million-lead qualification analysis.</p>
    <h2>How to measure speed to lead in your CRM</h2>
    <ol><li><strong>Capture the lead-created timestamp.</strong> Preserve the original submission time and lead source, including campaign UTMs when available.</li><li><strong>Record the first human contact attempt.</strong> Distinguish an automated acknowledgement from a genuine call or relevant personal message.</li><li><strong>Calculate elapsed time.</strong> Compare first-attempt time minus submission time, and separately report in-hours versus after-hours enquiries.</li><li><strong>Segment by response window.</strong> Start with under 5 minutes, 5–15 minutes, 15–60 minutes, 1–24 hours and 24 hours or more. These are suggested operational buckets, not HBR's study categories.</li><li><strong>Compare downstream outcomes.</strong> Review valid-lead rate, contact rate, qualified rate, meeting attendance and customer conversion within comparable cohorts.</li></ol>
    <h2>Build a practical follow-up workflow</h2>
    <p>Connect your landing page or lead form to a CRM such as HubSpot. Assign each enquiry to an owner, notify the responsible person promptly and flag records with no first contact attempt after an agreed interval. Use an escalation rule when an owner is unavailable, and make sure follow-up attempts and outcomes are recorded consistently.</p>
    <p>For Meta Ads and Google Ads, preserve campaign identifiers alongside CRM statuses. This lets you distinguish campaigns that produce cheap but unreachable leads from campaigns that produce genuine sales conversations. For implementation details, see <Link to="/blog/crm-lead-tracking-paid-ads">how to connect paid ads with CRM data</Link> and <Link to="/blog/improve-lead-quality-connection-rates">ways to improve lead quality and connection rates</Link>.</p>
    <h2>A measurement example</h2>
    <p>Suppose two campaigns each generate 100 leads. Campaign A costs less per lead, but many enquiries are contacted late. Campaign B costs more per lead, but receives prompt follow-up and produces more qualified conversations. Without CRM timestamps and qualification outcomes, the lower CPL may appear to win even when it contributes less to pipeline. This is a hypothetical example, not a result from the HBR study.</p>
    <h2>Important limitations before using the statistics</h2>
    <p>The research was published in 2011 and examined US businesses. It predates today's widespread WhatsApp workflows, modern CRM automation and many current acquisition channels. The reported multipliers describe associations between response windows and lead qualification; they do not prove that changing response time alone causes the same uplift for every business. The chart intentionally uses an index, not invented conversion percentages.</p>
    <p>Use the study as a reason to investigate your own sales response process, then evaluate improvements using your own industry, audience, operating hours and CRM data.</p>
    <h2>Frequently asked questions</h2>
    {faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    <h2>Final takeaway</h2>
    <p>Better lead generation does not end when someone clicks Submit. It connects relevant advertising, accurate tracking, timely human follow-up and measurable sales outcomes. If your business is investing in paid acquisition, response time deserves a place alongside CPL, lead quality and customer acquisition cost.</p>
    <div className="s2l-cta"><h2>Connect advertising performance with sales outcomes</h2><p>Explore a more complete approach to lead generation, CRM measurement and funnel optimisation.</p><Link to="/services/lead-generation">Explore lead generation services →</Link></div>
    <p className="s2l-source"><strong>Original research:</strong> James B. Oldroyd, Kristina McElheran and David Elkington, <a href={SOURCE} target="_blank" rel="noopener noreferrer">The Short Life of Online Sales Leads</a>, Harvard Business Review, March 2011. Chart independently recreated as an educational interpretation of the cited comparisons.</p>
  </div>
 </article></main>
}