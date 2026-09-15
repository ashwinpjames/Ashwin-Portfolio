import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/cost-per-lead-vs-cost-per-customer.md?raw'

const faq = [
  ['Is CAC better than CPL?', 'CAC is usually the more commercially meaningful metric because it measures customer acquisition rather than lead acquisition. However, it is only better for optimisation when customer data is reliable enough to guide decisions. CPL remains useful for diagnosing the acquisition stage.'],
  ['Should I stop optimising for CPL?', 'No. CPL can still be an important operating metric. The mistake is treating it as the final measure of success when the business ultimately needs customers or revenue.'],
  ['What is a good CPL?', 'There is no universal good CPL. An acceptable CPL depends on lead quality, conversion rates, customer value, margins and the business\'s acquisition economics.'],
  ['What is a good CAC?', 'There is no universal good CAC either. A sustainable CAC depends on customer contribution, customer lifetime value, payback expectations and the broader economics of the business.'],
  ['Can a higher CPL lead to a lower CAC?', 'Yes. A higher CPL can be acceptable when it produces leads with stronger intent or fit that convert into customers at a higher rate.'],
  ['How do I know whether my low CPL is actually good?', 'Follow the leads downstream. Compare qualification rate, cost per qualified lead, opportunity rate, customer conversion and CAC. If possible, connect advertising data with CRM outcomes.'],
  ['Should CAC include sales salaries and other costs?', 'It depends on the purpose of the calculation. A paid media CAC can focus on acquisition spend, while a broader business CAC can include additional sales and marketing costs. Define the calculation before using it for comparison.'],
]

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'BlogPosting',
  headline: 'Cost Per Lead vs Cost Per Customer: Which Should You Optimise For?',
  description: 'Learn how a marketing sales funnel connects lead generation, sales and customer acquisition, and how sales and marketing alignment can improve acquisition decisions.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15', dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/cost-per-lead-vs-cost-per-customer',
  keywords: 'marketing sales funnel, sales and marketing alignment, cost per lead vs cost per customer, CPL, CAC',
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

function DecisionFlow() {
  const stages = [['01', 'Spend', 'Start with acquisition cost'], ['02', 'Lead', 'Measure CPL'], ['03', 'Qualify', 'Check lead quality'], ['04', 'Customer', 'Measure CAC'], ['05', 'Economics', 'Test sustainable value']]
  return <section className="pms-funnel" aria-label="CPL to CAC decision flow"><div className="pms-section-label">THE ACQUISITION MEASUREMENT FLOW</div><h2>Do not stop measuring when the lead is created.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}
function DecisionCards() {
  const cards = [['CPL', 'Diagnose acquisition', 'Use CPL to understand how efficiently campaigns create enquiries and to diagnose upstream changes.'], ['QUALITY', 'Follow the funnel', 'Compare qualification and customer conversion so a cheap lead does not automatically look like a valuable lead.'], ['CAC', 'Optimise the outcome', 'When customer data is reliable, use customer acquisition cost to guide commercial optimisation.'], ['ECONOMICS', 'Check sustainability', 'A customer can still be unprofitable if acquisition cost is too high relative to contribution and customer value.']]
  return <section className="pms-metric-panel" aria-label="CPL and CAC optimisation principles"><div className="pms-section-label">FOUR PRACTICAL PRINCIPLES</div><h2>CPL is a signal. CAC is closer to the outcome.</h2><div className="pms-metric-grid">{cards.map(([label, title, text]) => <div className="pms-metric-card" key={label}><b>{label}</b><strong>{title}</strong><p>{text}</p></div>)}</div></section>
}
function FAQSection() { return <section className="pms-faq" aria-labelledby="cpl-cac-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="cpl-cac-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function CostPerLeadVsCostPerCustomerBlog() {
  useEffect(() => {
    document.title = 'Marketing Sales Funnel: Cost Per Lead vs Cost Per Customer | Ashwin James'
    const description = 'Learn how a marketing sales funnel connects lead generation, sales and customer acquisition, and how sales and marketing alignment can improve acquisition decisions.'
    let tag = document.querySelector('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }; canonical.setAttribute('href', 'https://ashwinjames.com/blog/cost-per-lead-vs-cost-per-customer')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])
  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))
  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero"><Link to="/blog" className="pms-back">Back to all blogs</Link><p className="pms-eyebrow">PERFORMANCE MARKETING · LEAD GENERATION · CAC</p><div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>12 min read</span><span>•</span><span>September 15, 2026</span></div><h1>Cost Per Lead vs Cost Per Customer: Which Should You Optimise For?</h1><p className="pms-lede">A marketing sales funnel only works when lead generation, qualification, sales and customer outcomes are connected. This guide explains how sales and marketing alignment changes the way you should evaluate CPL, CAC and the performance of paid acquisition.</p><div className="pms-links"><Link to="/services/lead-generation">Lead Generation</Link><Link to="/resources/lead-quality-framework">Lead Quality Framework</Link><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link><Link to="/blog/lead-form-optimisation">Lead Form Optimisation</Link><Link to="/blog/google-ads-lead-quality">Google Ads Lead Quality</Link></div></header>
    <DecisionFlow />
    <div className="pms-article-grid"><aside className="pms-toc"><span>ON THIS PAGE</span><a href="#cost-per-lead-vs-cost-per-customer-at-a-glance">Comparison</a><a href="#what-is-cpl">CPL</a><a href="#what-is-cac">CAC</a><a href="#why-a-lower-cpl-can-produce-a-higher-cac">Why CPL can mislead</a><a href="#when-cpl-is-the-right-metric-to-optimise-for">When CPL works</a><a href="#when-cac-should-become-the-primary-business-metric">When CAC matters</a><a href="#cpl-cost-per-qualified-lead-and-cac-work-together">The metric chain</a><a href="#how-crm-data-changes-the-optimisation-decision">CRM data</a><a href="#how-to-decide-what-to-optimise-for">Decision framework</a><a href="#conclusion">Conclusion</a></aside><div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} /></div>
    <DecisionCards /><FAQSection />
    <footer className="pms-cta"><span>CPL · CAC · LEAD QUALITY</span><h2>Optimise for the customer, diagnose with the lead.</h2><p>Connect paid acquisition, qualification, CRM and customer outcomes so campaign optimisation reflects the economics of the business.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
