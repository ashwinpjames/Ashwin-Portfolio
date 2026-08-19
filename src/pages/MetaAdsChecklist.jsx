import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const stages = [
  { title: 'Account & Pixel Setup', items: ['Meta Business Manager account verified and permissions set correctly', 'Meta Pixel installed on all key pages (site-wide, not just landing page)', 'Pixel events firing correctly (PageView, Lead, Purchase, AddToCart, etc.) — tested via Meta Pixel Helper', 'Conversions API (CAPI) set up alongside pixel for better tracking accuracy', 'Domain verified in Business Manager (required for iOS 14+ tracking)', 'Custom conversions/events named clearly and mapped to actual business goals'] },
  { title: 'Campaign Structure', items: ['Clear campaign objective selected (Leads, Sales, Traffic, Awareness) matched to actual funnel stage', 'Campaign Budget Optimization (CBO) vs ad set-level budget decided intentionally', 'Naming convention applied consistently (Campaign_Objective_Audience_Date or similar)', 'Enough budget allocated to exit learning phase (~50 conversions/week per ad set as a rule of thumb)'] },
  { title: 'Audience Targeting', items: ['Core audience defined (interests, demographics, behaviors) — not too narrow, not too broad', 'Lookalike audiences created from best existing data (customers, high-value leads, pixel events)', 'Retargeting audiences set up (website visitors, video viewers, engagement, cart abandoners)', 'Exclusions in place (existing customers excluded from cold campaigns where relevant)', 'Audience overlap checked to avoid ad sets competing against each other'] },
  { title: 'Creative', items: ['At least 3–5 creative variations per ad set (avoid single-creative reliance)', 'Mix of formats tested (static image, carousel, video/Reels)', 'Hook in first 3 seconds for video creative', 'Text overlay kept under 20% of image', 'Mobile-first creative — checked in Stories/Reels placement', 'Clear, single CTA per ad'] },
  { title: 'Ad Copy', items: ['Primary text leads with the hook/pain point, not the brand', 'Headline reinforces the offer clearly', 'CTA button matches campaign objective (Learn More, Sign Up, Shop Now, etc.)', 'Social proof included where possible (numbers, testimonials, results)', 'Copy variations tested against each other, not just creative'] },
  { title: 'Landing Page Alignment', items: ['Landing page message matches ad message — no disconnect between promise and page', 'Page loads fast on mobile (test actual load speed, not just desktop)', 'Form/CTA above the fold or easily reachable', 'Thank-you page or confirmation event set up and firing the right pixel event'] },
  { title: 'Budget & Bidding', items: ['Budget realistic for the objective and audience size — not spread too thin across too many ad sets', 'Bid strategy chosen deliberately (Lowest Cost vs Cost Cap vs Bid Cap) matched to goal, not default', 'Daily budget vs lifetime budget decided based on campaign duration'] },
  { title: 'Tracking & Reporting', items: ['UTM parameters added to all ad URLs for clean attribution outside Meta', 'Reporting columns customized in Ads Manager (CPA, CTR, ROAS) — not just default columns', 'Attribution window set intentionally (7-day click vs 1-day click, depending on sales cycle)', 'Dashboard or sheet set up to track performance beyond just Ads Manager (especially CAC vs LTV)'] },
  { title: 'Compliance & Account Health', items: ["Ad copy checked against Meta's ad policies before submission, to avoid rejections/flags", 'Landing page has a privacy policy and matches any claims made in ads', 'Special ad category selected if applicable (housing, employment, credit, politics)'] },
  { title: 'Post-Launch Optimization', items: ['3–5 day minimum before making major changes — let the learning phase settle', 'Frequency monitored to catch ad fatigue early', 'Underperforming ad sets/creatives paused, not endlessly tweaked', 'Winning creatives scaled gradually — avoid sudden large budget jumps that reset learning'] },
]

export default function MetaAdsChecklist() {
  const [checked, setChecked] = useState({})
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const total = stages.reduce((sum, stage) => sum + stage.items.length, 0)
  const completed = Object.values(checked).filter(Boolean).length
  const percent = Math.round((completed / total) * 100)
  const score = percent

  const findings = useMemo(() => {
    return stages.map((stage) => {
      const done = stage.items.filter((_, index) => checked[`${stages.indexOf(stage)}-${index}`]).length
      const rate = Math.round((done / stage.items.length) * 100)
      return { ...stage, done, rate }
    })
  }, [checked])

  const toggle = (stageIndex, itemIndex) => setChecked((current) => ({ ...current, [`${stageIndex}-${itemIndex}`]: !current[`${stageIndex}-${itemIndex}`] }))
  const reset = () => setChecked({})

  return <main className="meta-checklist-page">
    <section className="meta-checklist-hero"><div className="container"><p className="resources-eyebrow">Free resource · Meta Ads</p><h1>Is your Meta Ads campaign <span>actually ready?</span></h1><p>Work through the 10-stage checklist before launch, then use it to spot gaps after the campaign goes live.</p><div className="meta-checklist-stats"><span><strong>10</strong> stages</span><span><strong>{total}</strong> checks</span><span><strong>Free</strong> to use</span></div></div></section>
    <section className="meta-checklist-workspace"><div className="container meta-checklist-layout">
      <div className="meta-checklist-main"><div className="meta-progress-card"><div><span>Campaign readiness</span><strong>{percent}%</strong></div><div className="meta-progress-track"><i style={{ width: `${percent}%` }} /></div><p>{completed === 0 ? 'Start with the first stage and work through the checklist.' : completed === total ? 'Everything is checked. Your checklist is complete.' : `${completed} of ${total} checks completed.`}</p></div>
      {stages.map((stage, stageIndex) => <section className="meta-stage" key={stage.title}><div className="meta-stage-heading"><span>{String(stageIndex + 1).padStart(2, '0')}</span><div><h2>{stage.title}</h2><p>{stage.items.length} checks</p></div><b>{findings[stageIndex].rate}%</b></div><div className="meta-checks">{stage.items.map((item, itemIndex) => { const id = `${stageIndex}-${itemIndex}`; return <label className={checked[id] ? 'checked' : ''} key={id}><input type="checkbox" checked={Boolean(checked[id])} onChange={() => toggle(stageIndex, itemIndex)} /><span>{item}</span></label> })}</div></section>)}
      </div>
      <aside className="meta-checklist-side"><div className="meta-score-card"><p>Your readiness score</p><strong>{score}</strong><span>/ 100</span><div className="meta-score-bar"><i style={{ width: `${score}%` }} /></div><small>{score >= 80 ? 'Strong foundation' : score >= 50 ? 'Some gaps to fix' : 'Start with the basics'}</small></div><div className="meta-findings-card"><p>Stage breakdown</p>{findings.map((stage) => <div key={stage.title}><span>{stage.title}</span><b>{stage.rate}%</b></div>)}</div><button className="meta-reset" type="button" onClick={reset}>Reset checklist</button></aside>
    </div></section>
    <section className="meta-download"><div className="container"><div><p className="resources-eyebrow">Take it with you</p><h2>Want the printable checklist?</h2><p>Get the full Meta Ads Launch Checklist as a PDF so you can use it before every campaign launch.</p></div><div className="meta-lead-form">{submitted ? <div className="meta-form-success"><strong>You're on the list.</strong><span>The PDF delivery can be connected to your email workflow here.</span></div> : <form onSubmit={(event) => { event.preventDefault(); if (email) setSubmitted(true) }}><label htmlFor="meta-checklist-email">Work email</label><div><input id="meta-checklist-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" /><button type="submit">Get the PDF →</button></div><small>No spam. Just the checklist.</small></form>}</div></div></section>
    <section className="meta-service-cta"><div className="container"><p className="resources-eyebrow">Need help with the gaps?</p><h2>Turn the checklist into a campaign that can actually perform.</h2><p>If the audit exposes issues with tracking, creative, targeting or lead quality, we can work through them together.</p><Link to="/services/meta-ads">Explore Meta Ads Management →</Link></div></section>
    <div className="container meta-bottom-nav"><Link to="/resources">← Back to resources</Link></div>
  </main>
}
