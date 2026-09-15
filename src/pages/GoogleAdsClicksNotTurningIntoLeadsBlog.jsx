import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/google-ads-clicks-not-turning-into-leads.md?raw'

const faq = [
  ['Why am I getting Google Ads clicks but no leads?', 'The most common causes are irrelevant search intent, weak message match, landing page friction, an unclear offer, poor mobile experience, incorrect conversion tracking or a mismatch between the campaign signal and the actual business outcome.'],
  ['What is a good conversion rate for Google Ads lead generation?', 'There is no universal benchmark that applies to every business. Conversion rate depends on search intent, offer, industry, landing page, device mix, traffic quality and the action being measured.'],
  ['Should I focus on CTR or conversion rate?', 'Use both for different questions. CTR helps diagnose the relationship between search intent and ad message, while conversion rate tells you more about what happens after the click.'],
  ['Should I use the homepage as the Google Ads landing page?', 'Sometimes. A homepage can work for broad intent, but a focused landing page is often easier to align with a specific commercial search.'],
  ['How can I improve Google Ads lead quality?', 'Improve intent filtering, ad messaging, landing page qualification and form design. Then connect lead qualification and customer outcomes back to campaign data where possible.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Google Ads Clicks Are Not Turning Into Leads',
  description: 'A practical guide to diagnosing why Google Ads clicks are not turning into leads, covering search intent, landing pages, offers, forms, conversion tracking, lead quality and optimisation.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/google-ads-clicks-not-turning-into-leads',
  keywords: 'Google Ads conversion, Google Ads lead generation, Google Ads clicks not converting',
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

function DiagnosticFlow() {
  const stages = [['01', 'Intent', 'Are the clicks relevant?'], ['02', 'Message', 'Does the ad match the query?'], ['03', 'Page', 'Does the landing page continue intent?'], ['04', 'Conversion', 'Is the next step easy?'], ['05', 'Quality', 'Do leads become opportunities?']]
  return <section className="pms-funnel" aria-label="Google Ads conversion diagnostic"><div className="pms-section-label">THE CONVERSION PATH</div><h2>Diagnose the system before increasing the budget.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}

function MetricCards() {
  const metrics = [['INTENT', 'Relevant clicks', 'Traffic should represent a problem or commercial need your offer can solve.'], ['EXPERIENCE', 'Landing conversion', 'The page should continue the promise made by the search and ad.'], ['SIGNAL', 'Conversion tracking', 'Google Ads needs a reliable signal that represents the action you actually want.'], ['QUALITY', 'Qualified leads', 'Lead volume matters less when the downstream sales outcome is weak.']]
  return <section className="pms-metric-panel" aria-label="Google Ads conversion metrics"><div className="pms-section-label">MEASURE THE SYSTEM</div><h2>Clicks are a diagnostic signal, not the business outcome.</h2><div className="pms-metric-grid">{metrics.map(([metric, label, text]) => <div className="pms-metric-card" key={metric}><b>{metric}</b><strong>{label}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() { return <section className="pms-faq" aria-labelledby="ads-conversion-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="ads-conversion-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function GoogleAdsClicksNotTurningIntoLeadsBlog() {
  useEffect(() => {
    document.title = 'Why Google Ads Clicks Are Not Turning Into Leads | Ashwin James'
    const description = 'Learn why Google Ads clicks are not turning into leads and how to diagnose search intent, landing pages, offers, forms, conversion tracking and lead quality.'
    let tag = document.querySelector('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }; canonical.setAttribute('href', 'https://ashwinjames.com/blog/google-ads-clicks-not-turning-into-leads')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])
  const cleanedMarkdown = articleMarkdown.replace(/cite[^]+/g, '')
  const renderedArticle = renderMarkdown(cleanedMarkdown.replace(/^# .+\n\n/, ''))
  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero"><Link to="/blog" className="pms-back">Back to all blogs</Link><p className="pms-eyebrow">GOOGLE ADS · CONVERSION · LEAD GENERATION</p><div className="pms-meta"><span>Google Ads</span><span>•</span><span>13 min read</span><span>•</span><span>September 15, 2026</span></div><h1>Why Google Ads Clicks Are Not Turning Into Leads</h1><p className="pms-lede">A practical diagnostic framework for finding where paid search is losing potential leads, from search intent and message match to landing pages, conversion tracking and lead quality.</p><div className="pms-links"><Link to="/services/google-ads">Google Ads</Link><Link to="/blog/google-ads-lead-generation-uae">Google Ads Lead Generation Guide</Link><Link to="/blog/google-search-ads-lead-generation-campaign">Google Search Ads Campaign Guide</Link><Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link></div></header>
    <DiagnosticFlow />
    <div className="pms-article-grid"><aside className="pms-toc"><span>ON THIS PAGE</span><a href="#start-by-separating-the-click-problem-from-the-conversion-problem">The conversion problem</a><a href="#1-the-campaign-is-attracting-the-wrong-search-intent">Search intent</a><a href="#2-the-ad-makes-a-promise-the-landing-page-does-not-continue">Message match</a><a href="#3-the-landing-page-is-optimised-for-information-instead-of-action">Landing page</a><a href="#4-the-offer-is-not-compelling-enough-to-justify-the-enquiry">Offer</a><a href="#5-the-form-creates-unnecessary-friction">Forms</a><a href="#6-conversion-tracking-is-incomplete-or-measuring-the-wrong-action">Conversion tracking</a><a href="#7-the-campaign-is-optimising-for-volume-instead-of-lead-quality">Lead quality</a><a href="#a-practical-google-ads-conversion-diagnostic">Diagnostic framework</a><a href="#how-to-improve-google-ads-lead-generation-systematically">Optimisation</a><a href="#conclusion">Conclusion</a></aside><div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} /></div>
    <MetricCards /><FAQSection />
    <footer className="pms-cta"><span>GOOGLE ADS · CONVERSION · LEAD GENERATION</span><h2>Fix the conversion path before you scale the clicks.</h2><p>Connect search intent, ad relevance, landing page experience, conversion tracking and lead quality so Google Ads is measured against business outcomes.</p><div><Link to="/services/google-ads">Explore Google Ads</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
