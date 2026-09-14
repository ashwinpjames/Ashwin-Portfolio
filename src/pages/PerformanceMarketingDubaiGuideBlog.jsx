import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/performance-marketing-dubai-guide.md?raw'
import '../styles/performance-marketing-specialist-blog.css'

const faq = [
  ['Is performance marketing the same as digital marketing?', 'No. Performance marketing is a part of digital marketing focused strongly on measurable actions and business outcomes. Digital marketing is broader and includes areas such as SEO, content, social media, email and paid advertising.'],
  ['Is performance marketing suitable for small businesses in Dubai?', 'It can be, provided the business has a clear offer, measurable conversion goal and viable customer economics. A smaller budget makes measurement and efficient allocation even more important.'],
  ['Which is better for performance marketing: Google Ads or Meta Ads?', 'Neither is universally better. Google Ads can capture existing search demand, while Meta Ads can be effective for generating demand through audience targeting and creative. The right channel depends on the business and customer journey.'],
  ['What should I measure in a performance marketing campaign?', 'Common metrics include CPL, CPA, conversion rate, ROAS, qualified lead rate, customer acquisition cost and revenue. The most important metric depends on the business objective.'],
  ['How much should a Dubai business spend on performance marketing?', 'There is no universal correct budget. The budget should be connected to customer economics, available demand, conversion rates, testing requirements and the amount of growth the business wants to pursue.'],
  ['Does performance marketing guarantee results?', 'No. Performance marketing improves measurability and provides a framework for optimization, but results still depend on the offer, market demand, competition, creative, audience, landing page, sales process, tracking and execution.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is Performance Marketing? A Dubai Business Guide',
  description: 'Learn what performance marketing is, how it works, which metrics matter, and how Dubai businesses can build measurable acquisition campaigns.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-14',
  dateModified: '2026-09-14',
  mainEntityOfPage: 'https://ashwinjames.com/blog/performance-marketing-dubai',
  keywords: 'performance marketing, performance marketing Dubai, digital performance marketing, performance marketing specialist',
}
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }

function escapeHtml(value) { return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;') }
function inlineMarkdown(value) {
  let output = escapeHtml(value)
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
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

function FunnelGraphic() {
  const stages = [['01', 'Objective', 'Outcome · target · economics'], ['02', 'Audience', 'Intent · fit · demand'], ['03', 'Acquisition', 'Google · Meta · other channels'], ['04', 'Conversion', 'Page · form · offer · follow up'], ['05', 'Revenue', 'Customers · CAC · ROAS']]
  return <section className="pms-funnel" aria-label="Performance marketing funnel"><div className="pms-section-label">THE PERFORMANCE SYSTEM</div><h2>Connect advertising activity to the business outcome.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}
function MetricCards() {
  const metrics = [['CPL', 'Lead cost', 'Useful for acquisition efficiency, but incomplete alone.'], ['CPA', 'Customer cost', 'Moves measurement closer to the actual commercial outcome.'], ['CVR', 'Conversion rate', 'Shows how efficiently traffic becomes a desired action.'], ['ROAS', 'Revenue efficiency', 'Compares attributed revenue with advertising spend.']]
  return <section className="pms-metric-panel" aria-label="Performance marketing metrics"><div className="pms-section-label">MEASURE WHAT MATTERS</div><h2>Dashboard metrics are useful only when they support better decisions.</h2><div className="pms-metric-grid">{metrics.map(([metric, label, text]) => <div className="pms-metric-card" key={metric}><b>{metric}</b><strong>{label}</strong><p>{text}</p></div>)}</div></section>
}
function FAQSection() { return <section className="pms-faq" aria-labelledby="pmd-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="pmd-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function PerformanceMarketingDubaiGuideBlog() {
  useEffect(() => {
    document.title = 'What Is Performance Marketing? A Dubai Business Guide'
    const description = 'Learn what performance marketing is, how Google Ads and Meta Ads work, which KPIs matter, and how Dubai businesses can build measurable campaigns.'
    let tag = document.querySelector('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }; canonical.setAttribute('href', 'https://ashwinjames.com/blog/performance-marketing-dubai')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])
  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))
  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero"><Link to="/blog" className="pms-back">Back to all blogs</Link><p className="pms-eyebrow">PERFORMANCE MARKETING · DUBAI · GROWTH</p><div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>10 min read</span><span>•</span><span>September 14, 2026</span></div><h1>What Is Performance Marketing? A Dubai Business Guide</h1><p className="pms-lede">A practical guide to measurable acquisition, campaign economics, conversion tracking and the metrics Dubai businesses should actually use to evaluate marketing.</p><div className="pms-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/resources">Marketing Resources</Link><Link to="/contact">Work with Ashwin</Link></div></header>
    <FunnelGraphic />
    <div className="pms-article-grid"><aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-is-performance-marketing">What it is</a><a href="#how-does-performance-marketing-work">How it works</a><a href="#performance-marketing-vs-traditional-digital-marketing">Performance vs digital</a><a href="#what-are-the-most-important-performance-marketing-metrics">Metrics</a><a href="#why-conversion-tracking-matters-in-dubai-campaigns">Tracking</a><a href="#a-practical-performance-marketing-framework-for-dubai-businesses">Framework</a><a href="#common-performance-marketing-mistakes">Mistakes</a><a href="#frequently-asked-questions">FAQ</a></aside><div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} /></div>
    <MetricCards /><FAQSection />
    <footer className="pms-cta"><span>DUBAI PERFORMANCE MARKETING</span><h2>Do not optimize the dashboard. Optimize the business.</h2><p>Connect acquisition, tracking, lead quality, sales and revenue before deciding where the next marketing dirham should go.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
