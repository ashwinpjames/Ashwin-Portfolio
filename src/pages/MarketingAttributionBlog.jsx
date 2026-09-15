import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/why-attribution-matters-performance-marketing.md?raw'

const faq = [
  ['What is marketing attribution?', 'Marketing attribution is a method of assigning credit for a conversion or important action to the interactions that occurred along the customer journey.'],
  ['Why is attribution important in performance marketing?', 'It helps marketers understand how different interactions participate in customer journeys and supports better decisions about budget, optimisation and measurement.'],
  ['Which attribution model is best?', 'There is no universally best model. The appropriate view depends on the business question, available data, customer journey and outcome being measured.'],
  ['Does attribution show which channel caused a sale?', 'Not necessarily. Attribution distributes observed credit according to a model. Causal measurement requires stronger experimental or incremental methods.'],
  ['Should I optimise for leads or customers?', 'Optimise toward the deepest reliable outcome that has enough volume and data quality to support the decision.'],
  ['How do attribution models affect budget allocation?', 'Different models can assign different amounts of credit to the same channels. Comparing those views can reveal whether a budget decision is robust or dependent on one measurement assumption.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Attribution Matters in Performance Marketing',
  description: 'Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/why-attribution-matters-performance-marketing',
  keywords: 'marketing attribution, attribution models, performance marketing',
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

export default function MarketingAttributionBlog() {
  useEffect(() => {
    document.title = 'Why Attribution Matters in Performance Marketing | Ashwin James'
    const description = 'Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/why-attribution-matters-performance-marketing')
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
        <p className="pms-eyebrow">PERFORMANCE MARKETING · ANALYTICS · ATTRIBUTION</p>
        <div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>Why Attribution Matters in Performance Marketing</h1>
        <p className="pms-lede">Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.</p>
        <div className="pms-links"><Link to="/blog/conversion-tracking-performance-marketing">Conversion Tracking</Link><Link to="/blog/ga4-performance-marketing">GA4 for Performance Marketers</Link><Link to="/blog/crm-data-for-paid-ads">CRM Data for Paid Ads</Link><Link to="/blog/paid-advertising-roi">Paid Advertising ROI</Link></div>
      </header>
      <div className="pms-article-grid">
        <aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-marketing-attribution-actually-means">What attribution means</a><a href="#why-attribution-matters-in-performance-marketing">Why it matters</a><a href="#attribution-models-the-main-approaches-marketers-should-understand">Attribution models</a><a href="#why-no-attribution-model-should-be-treated-as-absolute-truth">Why models are not truth</a><a href="#attribution-and-the-difference-between-conversion-and-business-outcome">Business outcomes</a><a href="#attribution-vs-incrementality">Attribution vs incrementality</a><a href="#a-practical-attribution-framework-for-performance-marketers">Practical framework</a><a href="#conclusion">Conclusion</a></aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>
      <footer className="pms-cta"><span>MARKETING ATTRIBUTION</span><h2>Measure the journey, not just the final click.</h2><p>Use attribution as a decision framework while connecting acquisition data with lead quality, customers and business outcomes.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
