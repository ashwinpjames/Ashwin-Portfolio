import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/performance-marketing-metrics.md?raw'

const faq = [
  ['What are the most important performance marketing metrics?', 'Common metrics include CPM, CTR, CPL, conversion rate, CPA, CAC and ROAS. The most important metric depends on the business model, campaign objective and available data.'],
  ['Is CPL more important than CAC?', 'Not usually when reliable customer data is available. CPL measures lead acquisition cost, while CAC moves closer to the actual customer outcome. A low CPL can still produce an expensive CAC if lead quality is poor.'],
  ['What is a good ROAS?', 'There is no universal good ROAS. The required ROAS depends on margins, operating costs, customer value, attribution and the profitability threshold of the business.'],
  ['Should I track CTR if my goal is sales?', 'Yes, but CTR should usually be treated as a diagnostic metric rather than the final success metric. It can help explain whether creative and messaging are generating attention, while sales and revenue determine commercial performance.'],
  ['How do I know whether my leads are high quality?', 'Connect advertising data with qualification, opportunity and customer data where possible. Compare campaigns not only by lead volume and CPL but also by qualified lead rate, customer conversion and CAC.'],
]

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'What Should You Measure in Performance Marketing?',
  description: 'A practical guide to performance marketing metrics including CAC, CPL, ROAS, CPA and conversion rate, and how to connect them to business outcomes.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' }, publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-14', dateModified: '2026-09-14', mainEntityOfPage: 'https://ashwinjames.com/blog/performance-marketing-metrics',
  keywords: 'performance marketing metrics, CAC, CPL, ROAS, CPA, conversion rate',
}
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }

function escapeHtml(value) { return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;') }
function inlineMarkdown(value) {
  let output = escapeHtml(value)
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, (_, text, href) => `<a href="${href}">${text}</a>`)
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  output = output.replace(/`([^`]+)`/g, '<code>$1</code>')
  return output
}
function renderMarkdown(markdown) {
  const lines = markdown.trim().split('\n'); const html = []; let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i += 1; continue }
    const table = line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1])
    if (table) {
      const parseRow = row => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => inlineMarkdown(cell.trim()))
      const headers = parseRow(lines[i]); i += 2; const rows = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) { rows.push(parseRow(lines[i])); i += 1 }
      html.push(`<div class="pms-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`); continue
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) { const level = heading[1].length; const text = inlineMarkdown(heading[2]); const id = heading[2].toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/\s+/g, '-'); html.push(`<h${level} id="${id}">${text}</h${level}>`); i += 1; continue }
    if (/^\d+\.\s+/.test(line) || /^[-*]\s+/.test(line)) {
      const ordered = /^\d+\.\s+/.test(line); const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/; const items = []
      while (i < lines.length && pattern.test(lines[i])) { items.push(`<li>${inlineMarkdown(lines[i].replace(pattern, ''))}</li>`); i += 1 }
      html.push(`<${ordered ? 'ol' : 'ul'}>${items.join('')}</${ordered ? 'ol' : 'ul'}>`); continue
    }
    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) { paragraph.push(lines[i]); i += 1 }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

function MetricFlow() {
  const stages = [['01', 'Reach', 'CPM · audience cost'], ['02', 'Response', 'CTR · message fit'], ['03', 'Conversion', 'CPL · conversion rate'], ['04', 'Customers', 'CPA · CAC · quality'], ['05', 'Revenue', 'ROAS · margin · value']]
  return <section className="pms-funnel" aria-label="Performance marketing metrics flow"><div className="pms-section-label">THE MEASUREMENT SYSTEM</div><h2>Measure the journey, not just the dashboard.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}
function MetricCards() {
  const metrics = [['CPL', 'Lead efficiency', 'Useful for acquisition cost, but incomplete without lead quality.'], ['CPA', 'Acquisition cost', 'Moves measurement closer to a defined conversion or acquisition.'], ['CAC', 'Customer economics', 'Connect acquisition spend with the cost of winning customers.'], ['ROAS', 'Revenue efficiency', 'Compare attributed revenue with advertising spend, then consider margin.']]
  return <section className="pms-metric-panel" aria-label="Core performance marketing metrics"><div className="pms-section-label">CORE METRICS</div><h2>The useful metric depends on the question you need to answer.</h2><div className="pms-metric-grid">{metrics.map(([metric, label, text]) => <div className="pms-metric-card" key={metric}><b>{metric}</b><strong>{label}</strong><p>{text}</p></div>)}</div></section>
}
function DecisionFramework() {
  const steps = [['01', 'Define the outcome', 'Start with the business result rather than the platform.'], ['02', 'Map the funnel', 'Connect reach, response, conversion, quality, customers and revenue.'], ['03', 'Set economic thresholds', 'Use customer value and margins to establish acceptable acquisition costs.'], ['04', 'Diagnose the bottleneck', 'Find the metric relationship that explains the current constraint.'], ['05', 'Feed back sales data', 'Connect lead quality and customer outcomes to campaign data where possible.'], ['06', 'Optimise the system', 'Use the data to decide what to test, change, scale or stop.']]
  return <section className="pms-learning"><div className="pms-section-label">THE OPERATING MODEL</div><h2>Use metrics to make decisions, not to decorate reports.</h2><div className="pms-learning-track">{steps.map(([number, title, body]) => <div className="pms-learning-step" key={number}><span>{number}</span><div><strong>{title}</strong><p>{body}</p></div></div>)}</div></section>
}
function FAQSection() { return <section className="pms-faq" aria-labelledby="pms-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="pms-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function PerformanceMarketingMetricsBlog() {
  useEffect(() => {
    document.title = 'What Should You Measure in Performance Marketing? | Ashwin James'
    const description = 'Learn which performance marketing metrics matter, including CAC, CPL, ROAS, CPA and conversion rate, and how to connect them to business outcomes.'
    let tag = document.querySelector('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }; canonical.setAttribute('href', 'https://ashwinjames.com/blog/performance-marketing-metrics')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])
  const cleanedMarkdown = articleMarkdown.replace(/cite[^]+/g, '')
  const renderedArticle = renderMarkdown(cleanedMarkdown.replace(/^# .+\n\n/, ''))
  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero"><Link to="/blog" className="pms-back">Back to all blogs</Link><p className="pms-eyebrow">PERFORMANCE MARKETING · METRICS · MEASUREMENT</p><div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>11 min read</span><span>•</span><span>September 14, 2026</span></div><h1>What Should You Measure in Performance Marketing?</h1><p className="pms-lede">A practical framework for understanding CAC, CPL, ROAS, CPA, conversion rate and the relationships that turn advertising data into better business decisions.</p><div className="pms-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/blog/performance-marketing-strategy-uae">Performance Marketing Strategy</Link><Link to="/resources/lead-quality-framework">Lead Quality Framework</Link></div></header>
    <MetricFlow />
    <div className="pms-article-grid"><aside className="pms-toc"><span>ON THIS PAGE</span><a href="#start-with-the-business-outcome">Business outcome</a><a href="#the-core-performance-marketing-metrics">Core metrics</a><a href="#how-these-metrics-work-together">How metrics work together</a><a href="#which-metric-should-you-optimize-for">Which metric to optimize</a><a href="#lead-quality-changes-the-meaning-of-cpl">Lead quality</a><a href="#build-a-performance-marketing-measurement-framework">Measurement framework</a><a href="#common-performance-marketing-measurement-mistakes">Common mistakes</a><a href="#conclusion">Conclusion</a></aside><div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} /></div>
    <MetricCards /><DecisionFramework /><FAQSection />
    <footer className="pms-cta"><span>PERFORMANCE MARKETING METRICS</span><h2>Measure what helps the business make its next decision.</h2><p>Connect advertising costs, conversion, lead quality, customer acquisition and revenue instead of treating every dashboard number as equally important.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
