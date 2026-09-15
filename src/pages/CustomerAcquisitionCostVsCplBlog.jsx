import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/customer-acquisition-cost-vs-cpl.md?raw'

const faq = [
  ['Is CAC better than CPL?', 'CAC is usually more commercially meaningful because it measures customer acquisition rather than lead acquisition. However, CPL remains useful for diagnosing the acquisition stage, especially when customer data is limited or delayed.'],
  ['What is the difference between CAC and CPL?', 'CPL measures the cost of generating a lead. CAC measures the cost of acquiring a customer. CPL is an upstream acquisition metric, while CAC is closer to the business outcome.'],
  ['Can a higher CPL produce a lower CAC?', 'Yes. A campaign can generate fewer and more expensive leads while converting those leads into customers at a higher rate. In that situation, the higher CPL can coexist with a lower CAC.'],
  ['Should I stop optimising for CPL?', 'No. Use CPL as a leading diagnostic metric and use CAC as a customer level outcome metric when the underlying customer data is reliable enough.'],
  ['What is a good CAC?', 'There is no universal good CAC. It depends on customer value, contribution margin, sales cycle, retention, payback expectations and the broader economics of the business.'],
  ['Should CAC include sales and marketing salaries?', 'It depends on the purpose of the calculation. A paid media CAC can focus on advertising spend, while a broader business CAC can include relevant acquisition costs. Define the calculation clearly before comparing results.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is Customer Acquisition Cost and Why Does It Matter More Than CPL?',
  description: 'Understand customer acquisition cost, CAC vs CPL, why a lower CPL can produce a higher CAC, and how to connect paid acquisition with customer outcomes.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/customer-acquisition-cost-vs-cpl',
  keywords: 'customer acquisition cost, CAC vs CPL, CAC, CPL, customer acquisition',
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
    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) {
      paragraph.push(lines[i])
      i += 1
    }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

function AcquisitionFlow() {
  const stages = [['01', 'Spend', 'Acquisition cost'], ['02', 'Lead', 'CPL'], ['03', 'Qualify', 'Lead quality'], ['04', 'Customer', 'CAC'], ['05', 'Value', 'Sustainable economics']]
  return <section className="pms-funnel" aria-label="Customer acquisition measurement flow"><div className="pms-section-label">THE CUSTOMER ACQUISITION FLOW</div><h2>Do not stop measuring when the lead is created.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}

function MetricCards() {
  const cards = [['CPL', 'Diagnose acquisition', 'Use CPL to understand how efficiently campaigns create enquiries and diagnose upstream changes.'], ['QUALITY', 'Follow the funnel', 'Measure qualification and customer conversion so cheap leads do not automatically look valuable.'], ['CAC', 'Measure the customer', 'Use customer acquisition cost to compare acquisition efficiency when customer data is reliable.'], ['ECONOMICS', 'Test sustainability', 'Compare CAC with customer value, contribution and payback expectations before scaling.']]
  return <section className="pms-metric-panel" aria-label="CAC and CPL principles"><div className="pms-section-label">FOUR PRACTICAL PRINCIPLES</div><h2>CPL is a signal. CAC is closer to the outcome.</h2><div className="pms-metric-grid">{cards.map(([label, title, text]) => <div className="pms-metric-card" key={label}><b>{label}</b><strong>{title}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() {
  return <section className="pms-faq" aria-labelledby="cac-cpl-faq"><div className="pms-section-label">FAQ</div><h2 id="cac-cpl-faq">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section>
}

export default function CustomerAcquisitionCostVsCplBlog() {
  useEffect(() => {
    document.title = 'Customer Acquisition Cost: Why CAC Matters More Than CPL | Ashwin James'
    const description = 'Understand customer acquisition cost, CAC vs CPL, why a lower CPL can produce a higher CAC, and how to connect paid acquisition with customer outcomes.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/customer-acquisition-cost-vs-cpl')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="pms-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="pms-blog-shell">
      <header className="pms-hero">
        <Link to="/blog" className="pms-back">Back to all blogs</Link>
        <p className="pms-eyebrow">PERFORMANCE MARKETING · ACQUISITION · CAC</p>
        <div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>12 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>What Is Customer Acquisition Cost and Why Does It Matter More Than CPL?</h1>
        <p className="pms-lede">A low CPL can make a campaign look efficient while the business still struggles to acquire customers profitably. This guide explains why customer acquisition cost matters, how CAC differs from CPL, and how to connect paid acquisition with customer outcomes.</p>
        <div className="pms-links"><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link><Link to="/blog/cost-per-lead-vs-cost-per-customer">Cost Per Lead vs Cost Per Customer</Link><Link to="/blog/crm-lead-tracking-paid-ads">CRM Lead Tracking</Link><Link to="/resources/lead-quality-framework">Lead Quality Framework</Link><Link to="/services/performance-marketing">Performance Marketing</Link></div>
      </header>
      <AcquisitionFlow />
      <div className="pms-article-grid">
        <aside className="pms-toc"><span>ON THIS PAGE</span><a href="#customer-acquisition-cost-at-a-glance">CAC at a glance</a><a href="#what-is-cpl">What is CPL?</a><a href="#cac-vs-cpl-what-is-the-difference">CAC vs CPL</a><a href="#why-a-lower-cpl-can-produce-a-higher-cac">Why CPL can mislead</a><a href="#why-cac-matters-more-for-business-decisions">Why CAC matters</a><a href="#when-cpl-is-the-right-metric-to-optimise-for">When CPL works</a><a href="#when-cac-should-become-the-primary-business-metric">When CAC matters</a><a href="#how-crm-data-changes-the-cac-calculation">CRM data</a><a href="#a-practical-framework-for-deciding-what-to-optimise">Decision framework</a><a href="#conclusion-optimise-for-customers-diagnose-with-cpl">Conclusion</a></aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>
      <MetricCards />
      <FAQSection />
      <footer className="pms-cta"><span>CAC · CPL · CUSTOMER ECONOMICS</span><h2>Optimise for the customer, diagnose with the lead.</h2><p>Connect paid acquisition, lead quality, CRM outcomes and customer economics so campaign decisions reflect the result the business actually needs.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
