import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const stages = [
  { number: '01', title: 'Account & Pixel Setup', items: ['Business Manager verified', 'Pixel installed site wide', 'Events firing correctly', 'Conversions mapped to business goals', 'Domain verified where required'] },
  { number: '02', title: 'Campaign Structure', items: ['Campaign objective matches the funnel goal', 'Budget structure is intentional', 'Naming convention is consistent', 'Testing plan is defined', 'Conversion location is correct'] },
  { number: '03', title: 'Audience Targeting', items: ['Core audience is clearly defined', 'Audience size is sufficient for the objective', 'Retargeting audiences are available', 'Exclusions are applied where needed'] },
  { number: '04', title: 'Creative', items: ['Hook is clear in the first seconds', 'Creative matches the audience and offer', 'Multiple meaningful variations are ready', 'Formats are suitable for placements'] },
  { number: '05', title: 'Ad Copy', items: ['Primary text communicates the value clearly', 'Headline supports the offer', 'CTA matches the desired action', 'Claims and messaging are supportable'] },
  { number: '06', title: 'Landing Page Alignment', items: ['Message matches the ad', 'Value proposition is clear above the fold', 'CTA is easy to find', 'Mobile experience is usable', 'Lead form asks only for necessary information'] },
  { number: '07', title: 'Budget & Bidding', items: ['Budget matches the testing objective', 'Bid strategy matches the conversion goal', 'Spend limits and pacing are understood', 'There is enough room to gather useful conversion data'] },
  { number: '08', title: 'Tracking & Reporting', items: ['UTMs are consistent', 'Key conversion events are tested', 'CRM source data is captured', 'Lead quality can be measured after submission'] },
  { number: '09', title: 'Compliance & Account Health', items: ['Ads follow Meta policies', 'Landing page follows platform requirements', 'Business and payment details are in order', 'No avoidable account health issues remain'] },
  { number: '10', title: 'Post Launch Optimization', items: ['Early performance is monitored without unnecessary edits', 'Search and audience signals are reviewed', 'Creative performance is compared by meaningful variables', 'Lead quality is reviewed with sales', 'Budget changes follow evidence rather than single day noise'] },
]

export default function MetaAdsLaunchChecklist() {
  const [checked, setChecked] = useState(() => new Set())
  const total = stages.reduce((sum, stage) => sum + stage.items.length, 0)
  const completed = checked.size
  const progress = total ? Math.round((completed / total) * 100) : 0

  const toggle = (key) => setChecked((current) => {
    const next = new Set(current)
    next.has(key) ? next.delete(key) : next.add(key)
    return next
  })

  const reset = () => setChecked(new Set())
  const status = useMemo(() => progress === 100 ? 'Ready to launch' : progress >= 75 ? 'Almost ready' : progress >= 40 ? 'Needs a few checks' : 'Start with the fundamentals', [progress])

  return <main className="meta-checklist-page">
    <section className="meta-checklist-hero"><div className="container"><p className="resources-eyebrow">Checklist · Meta Ads</p><h1>Launch Meta Ads with fewer <span>avoidable mistakes.</span></h1><p>Work through the checks before launch, then use the same framework to review tracking, creative, landing pages and lead quality after the campaign starts.</p><div className="meta-checklist-pills"><span>10 stages</span><span>{total} checks</span><span>Free to use</span></div></div></section>

    <section className="meta-checklist-summary"><div className="container"><div><p className="resources-eyebrow">Your progress</p><strong>{progress}%</strong><span>{status}</span></div><div className="meta-progress"><div style={{ width: `${progress}%` }} /></div><div className="meta-summary-actions"><span>{completed} of {total} completed</span><button type="button" onClick={reset}>Reset checklist</button></div></div></section>

    <section className="meta-checklist-body"><div className="container"><div className="meta-checklist-intro"><div><p className="resources-eyebrow">Pre launch audit</p><h2>Check the system, not just the ads.</h2></div><p>The goal is not to tick boxes for the sake of it. Use the checklist to find gaps that can distort performance or make lead quality harder to diagnose.</p></div><div className="meta-stage-list">{stages.map((stage) => { const stageDone = stage.items.filter((_, index) => checked.has(`${stage.number}-${index}`)).length; return <article className="meta-stage" key={stage.number}><div className="meta-stage-heading"><span>{stage.number}</span><div><h3>{stage.title}</h3><small>{stageDone}/{stage.items.length} complete</small></div></div><div className="meta-check-items">{stage.items.map((item, index) => { const key = `${stage.number}-${index}`; const done = checked.has(key); return <label className={done ? 'checked' : ''} key={key}><input type="checkbox" checked={done} onChange={() => toggle(key)} /><span>{item}</span></label> })}</div></article> })}</div></div></section>

    <section className="meta-checklist-next"><div className="container"><div><p className="resources-eyebrow">What next?</p><h2>Found gaps you don't want to fix alone?</h2><p>Use the checklist to identify the weak points, then bring the campaign, landing page and lead quality together in one review.</p></div><Link to="/services/meta-ads">Explore Meta Ads Management <span>↗</span></Link></div></section>
    <section className="meta-checklist-footer"><div className="container"><Link to="/resources">← Back to resources</Link></div></section>
  </main>
}
