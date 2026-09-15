import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/paid-advertising-roi.md?raw'

const faq = [
  ['What is a good paid advertising ROI?', 'There is no universal target. A good ROI depends on margin, customer value, sales cycle, retention, operating costs and the economics of the business.'],
  ['Is ROAS or ROI better for paid advertising?', 'Neither replaces the other. ROAS helps evaluate advertising efficiency, while ROI evaluates the broader return after relevant investment costs.'],
  ['How do you measure ROI for lead generation?', 'Connect advertising spend to leads, qualified leads, opportunities, customers and revenue, then use actual customer economics or a defensible expected value model.'],
  ['Should agency or management fees be included in advertising ROI?', 'It depends on the decision. Media ROAS can be reported separately, while complete acquisition ROI should include relevant management, technology and other acquisition costs.'],
  ['Can Google Ads or Meta Ads calculate true ROI automatically?', 'Platforms can report conversion value and advertising efficiency, but true business ROI also depends on costs, margins, sales outcomes and the incremental value created by advertising.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Measure the Real ROI of Paid Advertising',
  description: 'A practical framework for measuring paid advertising ROI beyond clicks, leads and ROAS by connecting advertising spend with qualification, customers, revenue and contribution.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/paid-advertising-roi',
  keywords: 'paid advertising ROI, marketing ROI',
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

function ValueChain() {
  const stages = [['01', 'Spend', 'Ad investment'], ['02', 'Qualify', 'Lead and opportunity quality'], ['03', 'Convert', 'Customers'], ['04', 'Value', 'Revenue and contribution'], ['05', 'Return', 'ROI and next decision']]
  return <section className="pms-funnel" aria-label="Paid advertising ROI measurement chain"><div className="pms-section-label">THE REAL ROI CHAIN</div><h2>Measure the business outcome, not just the ad account.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}

function ROIQuestions() {
  const metrics = [['EFFICIENCY', 'What did the advertising buy?', 'Track spend, CPL, CPA and ROAS to understand media efficiency.'], ['QUALITY', 'What did the advertising create?', 'Track qualification, opportunities and customer conversion rather than stopping at leads.'], ['VALUE', 'What was the outcome worth?', 'Connect customers with revenue, contribution margin or another defensible value measure.'], ['RETURN', 'Did the investment create value?', 'Use ROI and, where practical, incrementality to evaluate the broader investment decision.']]
  return <section className="pms-metric-panel" aria-label="ROI measurement questions"><div className="pms-section-label">THE DECISION LAYER</div><h2>Four questions that make ROI useful.</h2><div className="pms-metric-grid">{metrics.map(([label, title, text]) => <div className="pms-metric-card" key={label}><b>{label}</b><strong>{title}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() {
  return <section className="pms-faq" aria-labelledby="paid-advertising-roi-faq"><div className="pms-section-label">FAQ</div><h2 id="paid-advertising-roi-faq">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section>
}

export default function PaidAdvertisingRoiBlog() {
  useEffect(() => {
    document.title = 'How to Measure Paid Advertising ROI | Ashwin James'
    const description = 'A practical framework for measuring paid advertising ROI beyond clicks, leads and ROAS by connecting advertising spend with qualification, customers, revenue and contribution.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/paid-advertising-roi')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const cleanedMarkdown = articleMarkdown.replace(/cite[^]+/g, '').replace(/url[^]*/g, '')
  const renderedArticle = renderMarkdown(cleanedMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="pms-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="pms-blog-shell">
      <header className="pms-hero">
        <Link to="/blog" className="pms-back">Back to all blogs</Link>
        <p className="pms-eyebrow">PERFORMANCE MARKETING · PAID ADVERTISING · ROI</p>
        <div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>12 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>How to Measure the Real ROI of Paid Advertising</h1>
        <p className="pms-lede">A practical framework for measuring advertising value beyond clicks, leads and ROAS by connecting spend with qualification, customers, revenue and contribution.</p>
        <div className="pms-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link><Link to="/blog/conversion-tracking-performance-marketing">Conversion Tracking</Link><Link to="/blog/crm-lead-tracking-paid-ads">CRM Lead Tracking</Link></div>
      </header>
      <ValueChain />
      <div className="pms-article-grid">
        <aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-paid-advertising-roi-actually-means">What ROI means</a><a href="#roi-vs-roas-they-are-not-the-same-metric">ROI vs ROAS</a><a href="#the-real-measurement-chain">Measurement chain</a><a href="#measure-contribution-margin-not-revenue-alone">Contribution margin</a><a href="#lead-generation-needs-a-different-roi-model">Lead generation ROI</a><a href="#the-difference-between-attributed-roi-and-incremental-roi">Incremental ROI</a><a href="#build-a-marketing-roi-dashboard-around-decisions">ROI dashboard</a><a href="#a-practical-paid-advertising-roi-framework">Practical framework</a><a href="#conclusion-measure-the-business-not-just-the-ad-account">Conclusion</a></aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>
      <ROIQuestions />
      <FAQSection />
      <footer className="pms-cta"><span>PAID ADVERTISING ROI</span><h2>Make advertising measurement a business decision system.</h2><p>Connect spend, lead quality, CRM outcomes, customer value and contribution so the next budget decision is based on economics rather than dashboard vanity.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
