import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/marketing-sales-funnel-sales-pipeline.md?raw'

const faq = [
  ['Why can marketing generate leads while sales says the leads are bad?', 'Because lead generation and lead qualification are different stages. A campaign can produce many enquiries without producing enough prospects that meet the sales team’s actual qualification criteria.'],
  ['What should marketing measure if sales conversion is poor?', 'Marketing should monitor acquisition and qualification metrics while determining whether the problem occurs before or after qualified opportunities are created. If qualified opportunities are healthy, the bottleneck may be downstream of marketing.'],
  ['How can sales and marketing alignment improve lead quality?', 'By agreeing on qualification criteria, recording consistent sales outcomes and using those outcomes to improve targeting, creative, offers, forms and campaign optimisation.'],
  ['Should a business optimise for leads or customers?', 'Optimise toward the deepest reliable business outcome that has enough trustworthy data to guide decisions. Leads can remain useful diagnostic metrics even when customers are the ultimate goal.'],
  ['What CRM data is most useful for marketing optimisation?', 'Useful fields can include source, campaign, qualification status, disqualification reason, opportunity status, customer status and revenue where available. The exact fields should match the sales process.'],
  ['How do I know whether the bottleneck is marketing or sales?', 'Map the funnel and compare conversion between stages. If lead quality is poor, investigate acquisition and qualification. If qualified opportunities are healthy but customer conversion is weak, investigate the sales process and other downstream factors.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Your Marketing Sales Funnel Works but Your Sales Pipeline Does Not',
  description: 'Understand why a marketing sales funnel can generate leads while the sales pipeline struggles, and how sales and marketing alignment can reveal the real bottleneck.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/marketing-sales-funnel-sales-pipeline',
  keywords: 'marketing sales funnel, sales and marketing alignment, sales pipeline, lead quality, lead generation',
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

    if (/^>\s?/.test(line)) {
      const quote = []
      while (i < lines.length && /^>\s?/.test(lines[i])) { quote.push(lines[i].replace(/^>\s?/, '')); i += 1 }
      html.push(`<blockquote>${quote.map(inlineMarkdown).join('<br />')}</blockquote>`)
      continue
    }

    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !/^>\s?/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) {
      paragraph.push(lines[i]); i += 1
    }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }

  return html.join('')
}

function FunnelFlow() {
  const stages = [
    ['01', 'Traffic', 'Attract relevant demand'],
    ['02', 'Lead', 'Capture enquiries'],
    ['03', 'Qualify', 'Define fit and intent'],
    ['04', 'Opportunity', 'Create real sales potential'],
    ['05', 'Customer', 'Measure the outcome'],
  ]
  return <section className="pms-funnel" aria-label="Marketing sales funnel flow">
    <div className="pms-section-label">THE REVENUE HANDOFF</div>
    <h2>A working marketing funnel can still feed a broken sales pipeline.</h2>
    <div className="pms-funnel-flow">
      {stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}>
        <span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}
      </div>)}
    </div>
  </section>
}

function AlignmentCards() {
  const cards = [
    ['DEFINITION', 'Agree what “qualified” means', 'Marketing and sales need the same operational definition of a valuable lead.'],
    ['FEEDBACK', 'Send outcomes upstream', 'Sales rejection and conversion data should influence acquisition decisions.'],
    ['HANDOFF', 'Make ownership explicit', 'A lead should move into a clear sales process without avoidable delay or ambiguity.'],
    ['ECONOMICS', 'Optimise for commercial value', 'Lead volume is useful, but customer and revenue outcomes determine whether acquisition is working.'],
  ]
  return <section className="pms-metric-panel" aria-label="Sales and marketing alignment principles">
    <div className="pms-section-label">FOUR ALIGNMENT PRINCIPLES</div>
    <h2>Do not optimise each department in isolation.</h2>
    <div className="pms-metric-grid">{cards.map(([label, title, text]) => <div className="pms-metric-card" key={label}><b>{label}</b><strong>{title}</strong><p>{text}</p></div>)}</div>
  </section>
}

function FAQSection() {
  return <section className="pms-faq" aria-labelledby="marketing-sales-funnel-faq-heading">
    <div className="pms-section-label">FAQ</div>
    <h2 id="marketing-sales-funnel-faq-heading">Frequently asked questions</h2>
    <div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div>
  </section>
}

export default function MarketingSalesFunnelSalesPipelineBlog() {
  useEffect(() => {
    document.title = 'Why Your Marketing Sales Funnel Works but Your Sales Pipeline Does Not | Ashwin James'
    const description = 'Understand why a marketing sales funnel can generate leads while the sales pipeline struggles, and how sales and marketing alignment can reveal the real bottleneck.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/marketing-sales-funnel-sales-pipeline')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="pms-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="pms-blog-shell">
      <header className="pms-hero">
        <Link to="/blog" className="pms-back">Back to all blogs</Link>
        <p className="pms-eyebrow">PERFORMANCE MARKETING · SALES FUNNEL · CRM</p>
        <div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>Why Your Marketing Sales Funnel Works but Your Sales Pipeline Does Not</h1>
        <p className="pms-lede">Your campaigns can generate leads consistently while the sales pipeline stays weak. The problem is often the handoff between acquisition, qualification, CRM and sales. Here is how to find the real bottleneck.</p>
        <div className="pms-links">
          <Link to="/services/performance-marketing">Performance Marketing</Link>
          <Link to="/services/lead-generation">Lead Generation</Link>
          <Link to="/services/hubspot">HubSpot CRM</Link>
          <Link to="/resources/lead-quality-framework">Lead Quality Framework</Link>
          <Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link>
        </div>
      </header>

      <FunnelFlow />

      <div className="pms-article-grid">
        <aside className="pms-toc">
          <span>ON THIS PAGE</span>
          <a href="#the-real-problem-a-lead-is-not-the-same-as-a-sales-opportunity">The real problem</a>
          <a href="#where-the-marketing-sales-funnel-breaks">Where it breaks</a>
          <a href="#the-metrics-you-should-monitor-between-cpl-and-cac">Measurement chain</a>
          <a href="#how-stronger-sales-and-marketing-alignment-changes-optimisation">Alignment</a>
          <a href="#how-to-diagnose-the-bottleneck-in-practice">Diagnosis</a>
          <a href="#the-practical-operating-model">Operating model</a>
          <a href="#conclusion">Conclusion</a>
        </aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>

      <AlignmentCards />
      <FAQSection />

      <footer className="pms-cta">
        <span>MARKETING · SALES · CRM</span>
        <h2>Find the bottleneck before you buy more traffic.</h2>
        <p>Connect acquisition, qualification, CRM and sales outcomes so the next optimisation decision is based on where commercial value is actually being lost.</p>
        <div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div>
      </footer>
    </article>
  </main>
}
