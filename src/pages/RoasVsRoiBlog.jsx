import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/roas-vs-roi.md?raw'

const faq = [
  ['Is ROAS or ROI better?', 'Neither is universally better. ROAS is useful for advertising efficiency, while ROI is useful for evaluating the broader financial return of an investment.'],
  ['Is a 3x ROAS good?', 'It depends on margins, customer value, fulfilment costs and the wider acquisition economics. There is no universal ROAS target for every business.'],
  ['Can ROAS be positive while ROI is negative?', 'Yes. A campaign can generate more attributed revenue than ad spend while losing money after other relevant costs are included.'],
  ['Is ROAS the same as advertising ROI?', 'No. ROAS is a specific ratio of conversion value to ad spend. Advertising ROI can include the wider costs and returns relevant to evaluating the investment.'],
  ['How do I measure ROI for lead generation?', 'Connect ad spend to leads, qualified leads, opportunities, customers and customer value, then calculate ROI using a clearly defined return and cost model.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'ROAS vs ROI: What Is the Difference?',
  description: 'Understand the difference between ROAS and ROI, how to calculate each metric, when to use them and how they affect advertising decisions.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/roas-vs-roi',
  keywords: 'ROAS vs ROI, advertising ROI',
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

function MetricStrip() {
  const metrics = [['ROAS', 'Media efficiency', 'Conversion value compared with ad spend.'], ['ROI', 'Business return', 'Return compared with the relevant investment cost.'], ['CAC', 'Customer economics', 'Acquisition cost measured at customer level.'], ['iROAS', 'Incremental value', 'Additional conversion value attributable to advertising lift.']]
  return <section className="pms-metric-panel" aria-label="ROAS and ROI comparison"><div className="pms-section-label">THE METRIC LAYER</div><h2>Use the metric that matches the decision.</h2><div className="pms-metric-grid">{metrics.map(([label, title, text]) => <div className="pms-metric-card" key={label}><b>{label}</b><strong>{title}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() {
  return <section className="pms-faq" aria-labelledby="roas-vs-roi-faq"><div className="pms-section-label">FAQ</div><h2 id="roas-vs-roi-faq">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section>
}

export default function RoasVsRoiBlog() {
  useEffect(() => {
    document.title = 'ROAS vs ROI: What Is the Difference? | Ashwin James'
    const description = 'Understand ROAS vs ROI, how each metric is calculated, when to use them and how to connect advertising efficiency with business profitability.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/roas-vs-roi')
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
        <p className="pms-eyebrow">PERFORMANCE MARKETING · ADVERTISING · ANALYTICS</p>
        <div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>12 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>ROAS vs ROI: What Is the Difference?</h1>
        <p className="pms-lede">Understand what ROAS and ROI actually measure, why the numbers can tell different stories, and how to use both metrics to make better advertising decisions.</p>
        <div className="pms-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link><Link to="/blog/conversion-tracking-performance-marketing">Conversion Tracking</Link><Link to="/blog/customer-acquisition-cost-vs-cpl">Customer Acquisition Cost</Link></div>
      </header>
      <MetricStrip />
      <div className="pms-article-grid">
        <aside className="pms-toc"><span>ON THIS PAGE</span><a href="#roas-vs-roi-the-short-answer">Short answer</a><a href="#what-is-roas">What is ROAS?</a><a href="#what-is-roi">What is ROI?</a><a href="#why-roas-and-roi-can-tell-different-stories">Different stories</a><a href="#advertising-roi-for-lead-generation-businesses">Lead generation</a><a href="#should-you-report-both-roas-and-roi">Reporting both</a><a href="#roas-vs-roi-and-incrementality">Incrementality</a><a href="#conclusion-roas-vs-roi-is-really-about-the-decision">Conclusion</a></aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>
      <FAQSection />
      <footer className="pms-cta"><span>ROAS VS ROI</span><h2>Measure advertising in the language of the business.</h2><p>Use ROAS to understand media efficiency, ROI to understand economics, and downstream data to connect advertising activity with real business outcomes.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
