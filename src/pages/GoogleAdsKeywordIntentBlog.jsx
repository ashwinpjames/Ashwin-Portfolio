import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/google-ads-keyword-intent.md?raw'

const faq = [
  ['What is keyword intent in Google Ads?', 'Keyword intent describes what a person is trying to accomplish with a search. For practical campaign planning, queries can be grouped into informational, commercial, transactional and irrelevant or mixed intent.'],
  ['What is the difference between informational and commercial keywords?', 'Informational keywords usually indicate that the person is learning or solving a problem. Commercial keywords usually indicate that the person is evaluating solutions, providers, prices or alternatives.'],
  ['Are transactional keywords always better for Google Ads?', 'No. Transactional intent can be valuable, but the best keyword depends on the business model, economics, competition, offer, conversion rate and downstream customer value.'],
  ['How do I identify commercial keywords?', 'Look at the complete query, modifiers such as best, agency, specialist, reviews or pricing, the search results, and the action the visitor would reasonably expect to take after clicking.'],
  ['Should informational keywords be excluded from Google Ads?', 'Not automatically. Exclude them when they consistently attract demand that does not support the campaign objective. Keep them when they produce valuable outcomes or support a deliberate education and nurture strategy.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Ads Keyword Intent: Informational vs Commercial vs Transactional',
  description: 'Learn how to classify Google Ads keyword intent as informational, commercial or transactional and use search intent to improve campaign structure, ads, landing pages and measurement.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/google-ads-keyword-intent',
  keywords: 'Google Ads keyword intent, search intent, commercial keywords',
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

function IntentFlow() {
  const stages = [['01', 'Informational', 'Learn · Understand · Solve'], ['02', 'Commercial', 'Compare · Evaluate · Choose'], ['03', 'Transactional', 'Book · Buy · Contact'], ['04', 'Match', 'Ad · Page · Offer'], ['05', 'Outcome', 'Lead · Customer · Revenue']]
  return <section className="pms-funnel" aria-label="Google Ads keyword intent framework"><div className="pms-section-label">THE INTENT FRAMEWORK</div><h2>Search intent should shape the experience after the click.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}

function IntentCards() {
  const intents = [['INFORMATIONAL', 'Teach first', 'The searcher wants to learn, understand or solve a problem.'], ['COMMERCIAL', 'Help evaluate', 'The searcher is comparing solutions, providers, prices or alternatives.'], ['TRANSACTIONAL', 'Make action easy', 'The searcher is closer to booking, buying, contacting or requesting a quote.']]
  return <section className="pms-metric-panel" aria-label="Keyword intent types"><div className="pms-section-label">THREE PRACTICAL INTENT TYPES</div><h2>Classify the query before deciding how to buy it.</h2><div className="pms-metric-grid">{intents.map(([intent, label, text]) => <div className="pms-metric-card" key={intent}><b>{intent}</b><strong>{label}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() { return <section className="pms-faq" aria-labelledby="keyword-intent-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="keyword-intent-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function GoogleAdsKeywordIntentBlog() {
  useEffect(() => {
    document.title = 'Google Ads Keyword Intent: Informational vs Commercial vs Transactional | Ashwin James'
    const description = 'Learn how Google Ads keyword intent works across informational, commercial and transactional searches and how search intent should influence campaigns, ads, landing pages and measurement.'
    let tag = document.querySelector('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }; canonical.setAttribute('href', 'https://ashwinjames.com/blog/google-ads-keyword-intent')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])
  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))
  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero"><Link to="/blog" className="pms-back">Back to all blogs</Link><p className="pms-eyebrow">GOOGLE ADS · KEYWORD RESEARCH · SEARCH INTENT</p><div className="pms-meta"><span>Google Ads</span><span>•</span><span>11 min read</span><span>•</span><span>September 15, 2026</span></div><h1>Google Ads Keyword Intent: Informational vs Commercial vs Transactional</h1><p className="pms-lede">A practical framework for classifying search intent and matching keywords with campaigns, ads, landing pages and conversion goals.</p><div className="pms-links"><Link to="/services/google-ads">Google Ads</Link><Link to="/blog/google-ads-lead-generation-uae">Google Ads Lead Generation Guide</Link><Link to="/blog/google-search-ads-lead-generation-campaign">Google Search Ads Campaign Guide</Link><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link></div></header>
    <IntentFlow />
    <div className="pms-article-grid"><aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-is-keyword-intent-in-google-ads">Keyword intent</a><a href="#informational-search-intent">Informational</a><a href="#commercial-search-intent">Commercial</a><a href="#transactional-search-intent">Transactional</a><a href="#how-to-identify-search-intent-from-a-keyword">Identify intent</a><a href="#how-keyword-intent-should-influence-google-ads-campaign-structure">Campaign structure</a><a href="#match-the-ad-to-the-intent">Ad and page match</a><a href="#how-to-use-keyword-intent-during-keyword-research">Keyword research</a><a href="#how-to-measure-whether-your-intent-strategy-is-working">Measurement</a><a href="#a-practical-google-ads-keyword-intent-framework">Framework</a><a href="#conclusion">Conclusion</a></aside><div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} /></div>
    <IntentCards /><FAQSection />
    <footer className="pms-cta"><span>GOOGLE ADS · SEARCH INTENT</span><h2>Buy the right demand, not just more clicks.</h2><p>Use search intent to connect keyword selection with ad relevance, landing page experience, conversion quality and business outcomes.</p><div><Link to="/services/google-ads">Explore Google Ads</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
