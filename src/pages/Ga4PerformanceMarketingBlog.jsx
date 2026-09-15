import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/ga4-performance-marketing.md?raw'

const faq = [
  ['Is GA4 useful for performance marketing?', 'Yes. GA4 can help performance marketers analyse acquisition, website behaviour, events, key events, conversions and attribution. Its value increases when the measurement structure is connected to actual business objectives.'],
  ['What are the most important GA4 metrics for a performance marketer?', 'There is no universal list. Primary key events and conversions, acquisition dimensions, conversion rate, landing page performance and downstream customer or revenue outcomes are usually more important than vanity metrics. Engagement metrics are useful mainly as diagnostic evidence.'],
  ['Should I track every event in GA4?', 'No. Track events that answer useful business or optimisation questions. Recommended events can provide richer reporting for relevant use cases, but the event plan should still be designed around the customer journey and business objective.'],
  ['What is the difference between a GA4 key event and a conversion?', 'Google currently uses key event for important actions reported in Analytics. A conversion is an important action used to measure advertising performance and optimise campaigns. A Google Ads conversion can be created from a GA4 key event.'],
  ['Should GA4 replace Google Ads reporting?', 'No. They serve different purposes. Google Ads is essential for campaign delivery, spend and advertising optimisation, while GA4 provides broader website and cross channel behavioural analysis.'],
  ['Can GA4 tell me which leads are qualified?', 'Not by itself in every lead generation setup. GA4 can measure website actions and acquisition context, while qualification and sales outcomes may live in a CRM. Connecting those systems gives a more complete view of lead quality.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'GA4 for Performance Marketers: What Should You Actually Track?',
  description: 'A practical guide to GA4 for performance marketing, covering acquisition, events, key events, conversion rate, landing pages, attribution, GA4 analytics and business outcomes.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/ga4-performance-marketing',
  keywords: 'GA4 for performance marketing, GA4 analytics',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;')
}

function inlineMarkdown(value) {
  let output = escapeHtml(value)
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, (_, text, href) => `<a href="${href}">${text}</a>`)
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  output = output.replace(/`([^`]+)`/g, '<code>$1</code>')
  return output
}

function renderMarkdown(markdown) {
  const lines = markdown.trim().split('\n')
  const html = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i += 1; continue }
    const table = line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1])
    if (table) {
      const parseRow = row => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => inlineMarkdown(cell.trim()))
      const headers = parseRow(lines[i]); i += 2; const rows = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) { rows.push(parseRow(lines[i])); i += 1 }
      html.push(`<div class="pms-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
      continue
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      const text = inlineMarkdown(heading[2])
      const id = heading[2].toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/\s+/g, '-')
      html.push(`<h${level} id="${id}">${text}</h${level}>`)
      i += 1
      continue
    }
    if (/^\d+\.\s+/.test(line) || /^[-*]\s+/.test(line)) {
      const ordered = /^\d+\.\s+/.test(line)
      const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/
      const items = []
      while (i < lines.length && pattern.test(lines[i])) { items.push(`<li>${inlineMarkdown(lines[i].replace(pattern, ''))}</li>`); i += 1 }
      html.push(`<${ordered ? 'ol' : 'ul'}>${items.join('')}</${ordered ? 'ol' : 'ul'}>`)
      continue
    }
    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) {
      paragraph.push(lines[i]); i += 1
    }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

function MeasurementFlow() {
  const stages = [['01', 'Acquire', 'Source · medium · campaign'], ['02', 'Engage', 'Landing page · behaviour'], ['03', 'Act', 'Events · key events'], ['04', 'Qualify', 'Lead quality · CRM'], ['05', 'Value', 'Customers · revenue']]
  return <section className="pms-funnel" aria-label="GA4 performance measurement flow"><div className="pms-section-label">THE MEASUREMENT CHAIN</div><h2>Track the journey, not every click.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}

function MetricCards() {
  const metrics = [['ACQUISITION', 'Where did users come from?', 'Use source, medium, campaign and landing page to understand traffic quality.'], ['ACTION', 'Did the important action happen?', 'Prioritise primary key events and conversions over generic activity.'], ['DIAGNOSIS', 'What explains the result?', 'Use engagement and supporting events to investigate friction or intent.'], ['VALUE', 'Did acquisition create value?', 'Connect analytics with CRM, customer and revenue outcomes where possible.']]
  return <section className="pms-metric-panel" aria-label="GA4 decision metrics"><div className="pms-section-label">THE DECISION LAYER</div><h2>Measure what changes the next marketing decision.</h2><div className="pms-metric-grid">{metrics.map(([metric, label, text]) => <div className="pms-metric-card" key={metric}><b>{metric}</b><strong>{label}</strong><p>{text}</p></div>)}</div></section>
}

function DecisionFramework() {
  const steps = [['01', 'Start with the outcome', 'Define the business result before deciding which events to track.'], ['02', 'Map the customer journey', 'Connect acquisition, landing pages, actions, qualification and customer outcomes.'], ['03', 'Separate priority levels', 'Distinguish primary actions from supporting and diagnostic events.'], ['04', 'Break down the result', 'Use campaign, source, landing page, device and other relevant dimensions.'], ['05', 'Reconcile the stack', 'Compare GA4 with ad platforms, CRM and business reporting when definitions differ.'], ['06', 'Make the decision', 'Use the evidence to scale, test, fix, investigate or leave the campaign unchanged.']]
  return <section className="pms-learning"><div className="pms-section-label">THE OPERATING MODEL</div><h2>Turn GA4 analytics into an operating rhythm.</h2><div className="pms-learning-track">{steps.map(([number, title, body]) => <div className="pms-learning-step" key={number}><span>{number}</span><div><strong>{title}</strong><p>{body}</p></div></div>)}</div></section>
}

function FAQSection() { return <section className="pms-faq" aria-labelledby="ga4-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="ga4-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function Ga4PerformanceMarketingBlog() {
  useEffect(() => {
    document.title = 'GA4 for Performance Marketers: What Should You Actually Track? | Ashwin James'
    const description = 'A practical guide to GA4 for performance marketing, covering acquisition, events, key events, conversion rate, landing pages, attribution, GA4 analytics and business outcomes.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/ga4-performance-marketing')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const cleanedMarkdown = articleMarkdown.replace(/cite[^]+/g, '')
  const renderedArticle = renderMarkdown(cleanedMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="pms-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="pms-blog-shell">
      <header className="pms-hero">
        <Link to="/blog" className="pms-back">Back to all blogs</Link>
        <p className="pms-eyebrow">PERFORMANCE MARKETING · GA4 · ANALYTICS</p>
        <div className="pms-meta"><span>Analytics</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>GA4 for Performance Marketers: What Should You Actually Track?</h1>
        <p className="pms-lede">A practical framework for deciding which GA4 signals matter for acquisition, optimisation, lead quality and business outcomes.</p>
        <div className="pms-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link><Link to="/blog/google-ads-conversion-tracking">Google Ads Conversion Tracking</Link><Link to="/blog/crm-lead-tracking-paid-ads">CRM Lead Tracking</Link></div>
      </header>
      <MeasurementFlow />
      <div className="pms-article-grid">
        <aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-ga4-is-actually-useful-for-in-performance-marketing">What GA4 is useful for</a><a href="#the-measurement-hierarchy-track-from-outcome-backwards">Measurement hierarchy</a><a href="#1-acquisition-where-did-the-user-come-from">Acquisition</a><a href="#2-engagement-use-it-as-a-diagnostic-layer">Engagement</a><a href="#3-events-track-meaningful-actions-not-every-possible-click">Events</a><a href="#4-key-events-identify-the-actions-that-matter">Key events</a><a href="#what-should-a-performance-marketer-actually-track-in-ga4">What to track</a><a href="#common-ga4-mistakes-performance-marketers-should-avoid">Common mistakes</a><a href="#conclusion-track-what-helps-you-make-the-next-decision">Conclusion</a></aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>
      <MetricCards />
      <DecisionFramework />
      <FAQSection />
      <footer className="pms-cta"><span>GA4 FOR PERFORMANCE MARKETING</span><h2>Build measurement around decisions, not dashboard volume.</h2><p>Connect acquisition, behaviour, key events, CRM outcomes and revenue so your analytics stack helps you decide what to scale, test and fix.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
