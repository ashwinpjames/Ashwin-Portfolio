import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/crm-lead-tracking-paid-ads.md?raw'

const faq = [
  ['What is CRM lead tracking?', 'CRM lead tracking connects lead source and acquisition information with qualification, sales and customer outcomes inside a CRM so marketing can evaluate lead quality beyond initial conversion volume.'],
  ['Why should paid ads connect to a CRM?', 'Advertising platforms usually show what happened up to the conversion, while the CRM can show what happened after the conversion. Connecting them helps identify which campaigns produce qualified opportunities and customers.'],
  ['How does lead scoring improve lead quality?', 'Lead scoring can help prioritise contacts using fit and behaviour signals. It is most useful when scoring criteria are aligned with actual qualification and sales outcomes.'],
  ['Can HubSpot connect paid advertising data with CRM outcomes?', 'HubSpot provides ad tracking and attribution capabilities that can connect advertising interactions with contacts and, depending on setup and subscription, downstream deal or revenue outcomes.'],
  ['Should I optimise campaigns for leads or customers?', 'Use customers or revenue as the deeper business outcome when the data is sufficiently reliable. When customer volume is too low, qualified leads or opportunities can serve as useful mid funnel outcomes while lead volume and CPL remain diagnostic metrics.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Connect Paid Ads With CRM Data for Better Lead Quality',
  description: 'Learn how CRM lead tracking, lead scoring and HubSpot can connect paid advertising with qualification, sales outcomes and customer data to improve lead quality.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/crm-lead-tracking-paid-ads',
  keywords: 'CRM lead tracking, lead scoring, HubSpot, paid ads, lead quality',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;')
}

function inlineMarkdown(value) {
  let output = value.replace(/cite[^]+/g, '')
  output = escapeHtml(output)
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
      const headers = parseRow(lines[i])
      i += 2
      const rows = []
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
    if (/^>\s?/.test(line)) {
      const quote = []
      while (i < lines.length && /^>\s?/.test(lines[i])) { quote.push(lines[i].replace(/^>\s?/, '')); i += 1 }
      html.push(`<blockquote>${quote.map(inlineMarkdown).join('<br />')}</blockquote>`)
      continue
    }
    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !/^>\s?/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) { paragraph.push(lines[i]); i += 1 }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

function CRMDataFlow() {
  const stages = [
    ['01', 'Paid Ad', 'Capture the acquisition source'],
    ['02', 'Lead', 'Preserve campaign context'],
    ['03', 'Qualified', 'Apply fit and intent criteria'],
    ['04', 'Opportunity', 'Measure real sales potential'],
    ['05', 'Customer', 'Feed the outcome back'],
  ]
  return <section className="pms-funnel" aria-label="CRM lead tracking flow"><div className="pms-section-label">THE CRM FEEDBACK LOOP</div><h2>Move beyond the form submission as the final conversion.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}

function MeasurementCards() {
  const cards = [
    ['ACQUISITION', 'Where did it come from?', 'Campaign, creative, source and tracking context'],
    ['QUALITY', 'Was it a good lead?', 'Qualification status, score and rejection reason'],
    ['SALES', 'Did it become an opportunity?', 'Contact, opportunity and pipeline outcomes'],
    ['CUSTOMER', 'Did it create value?', 'Customer status, acquisition cost and revenue'],
  ]
  return <section className="pms-metric-panel" aria-label="CRM measurement layers"><div className="pms-section-label">FOUR MEASUREMENT LAYERS</div><h2>Connect the metric to the decision it should improve.</h2><div className="pms-metric-grid">{cards.map(([label, title, text]) => <div className="pms-metric-card" key={label}><b>{label}</b><strong>{title}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() {
  return <section className="pms-faq" aria-labelledby="crm-lead-tracking-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="crm-lead-tracking-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section>
}

export default function CrmLeadTrackingPaidAdsBlog() {
  useEffect(() => {
    document.title = 'How to Connect Paid Ads With CRM Data for Better Lead Quality | Ashwin James'
    const description = 'Learn how CRM lead tracking, lead scoring and HubSpot can connect paid advertising with qualification, sales outcomes and customer data to improve lead quality.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/crm-lead-tracking-paid-ads')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero">
      <Link to="/blog" className="pms-back">Back to all blogs</Link>
      <p className="pms-eyebrow">PERFORMANCE MARKETING · CRM · LEAD QUALITY</p>
      <div className="pms-meta"><span>Lead Gen</span><span>•</span><span>12 min read</span><span>•</span><span>September 15, 2026</span></div>
      <h1>How to Connect Paid Ads With CRM Data for Better Lead Quality</h1>
      <p className="pms-lede">Paid ads can generate leads without generating enough qualified opportunities. Connecting advertising data with CRM outcomes creates the feedback loop needed to optimise for lead quality, not just lead volume.</p>
      <div className="pms-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/services/lead-generation">Lead Generation</Link><Link to="/services/hubspot">HubSpot CRM</Link><Link to="/resources/lead-quality-framework">Lead Quality Framework</Link><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link><Link to="/case-studies/crm-sales-qualified-lead">CRM Lead Qualification Case Study</Link></div>
    </header>
    <CRMDataFlow />
    <div className="pms-article-grid">
      <aside className="pms-toc"><span>ON THIS PAGE</span><a href="#why-paid-ad-metrics-alone-can-mislead-you">Why ad metrics can mislead</a><a href="#what-crm-lead-tracking-actually-connects">What CRM tracking connects</a><a href="#the-measurement-chain-you-should-build">Measurement chain</a><a href="#where-lead-scoring-fits">Lead scoring</a><a href="#send-sales-outcomes-back-to-marketing">Sales feedback</a><a href="#how-to-diagnose-a-lead-quality-problem">Diagnosis</a><a href="#a-practical-crm-lead-tracking-dashboard">Dashboard</a><a href="#conclusion">Conclusion</a></aside>
      <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
    </div>
    <MeasurementCards />
    <FAQSection />
    <footer className="pms-cta"><span>PAID ADS · CRM · SALES</span><h2>Stop optimising the lead before you know what happens after it.</h2><p>Connect acquisition, qualification and sales outcomes so your next campaign decision is based on lead quality and commercial value.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
