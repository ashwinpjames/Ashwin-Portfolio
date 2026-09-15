import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/crm-data-for-paid-ads.md?raw'

const faq = [
  ['What is CRM data for paid ads?', 'CRM data for paid ads is customer and lead information from a CRM that can be connected with advertising acquisition data and downstream outcomes such as qualification, opportunities, customers and revenue.'],
  ['Why should CRM data be connected to Meta Ads?', 'Connecting CRM outcomes to Meta can help provide information about lead quality beyond the initial form submission. Meta\'s current Conversions API for CRM training specifically describes using first party CRM data to optimise for lead quality rather than only lead volume.'],
  ['Can CRM data improve Google Ads optimisation?', 'Yes. Google Ads supports enhanced conversions for leads and offline conversion workflows that can connect first party lead information and later qualified or converted lead outcomes with advertising measurement.'],
  ['What CRM data should marketers send to ad platforms?', 'Focus on meaningful acquisition and outcome data such as lead source, campaign, identifiers required by the platform, qualification status, opportunity status and customer outcomes. The exact implementation depends on the platform, CRM and consent requirements.'],
  ['Should I optimise for leads, qualified leads or customers?', 'Use the deepest reliable outcome that has enough recurring volume to support optimisation. Customers may be the strongest business outcome, but qualified leads or opportunities can be more practical when customer volume is limited.'],
  ['Does CRM data make attribution accurate?', 'No. CRM data can improve measurement and feedback, but it does not eliminate attribution limitations. Multiple channels, missing identifiers, long sales cycles and different platform attribution models can still affect the analysis.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How CRM Data Can Improve Meta and Google Ads Optimisation',
  description: 'Learn how CRM data for paid ads connects lead quality, first party data and campaign optimisation across Meta Ads and Google Ads.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/crm-data-for-paid-ads',
  keywords: 'CRM data for paid ads, first party data, campaign optimisation',
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

export default function CrmDataForPaidAdsBlog() {
  useEffect(() => {
    document.title = 'CRM Data for Paid Ads: Improve Meta & Google Ads Optimisation | Ashwin James'
    const description = 'Learn how CRM data for paid ads connects lead quality, first party data and campaign optimisation across Meta Ads and Google Ads.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/crm-data-for-paid-ads')
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
        <p className="pms-eyebrow">PERFORMANCE MARKETING · CRM · ANALYTICS</p>
        <div className="pms-meta"><span>Performance Marketing</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>How CRM Data Can Improve Meta and Google Ads Optimisation</h1>
        <p className="pms-lede">Learn how CRM data for paid ads connects lead quality, first party data and campaign optimisation across Meta Ads and Google Ads.</p>
        <div className="pms-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/blog/crm-lead-tracking-paid-ads">CRM Lead Tracking</Link><Link to="/blog/conversion-tracking-performance-marketing">Conversion Tracking</Link><Link to="/blog/google-ads-lead-quality">Google Ads Lead Quality</Link></div>
      </header>
      <div className="pms-article-grid">
        <aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-crm-data-changes-about-paid-advertising">The CRM feedback loop</a><a href="#how-crm-data-can-improve-meta-ads-optimisation">Meta Ads</a><a href="#how-crm-data-can-improve-google-ads-optimisation">Google Ads</a><a href="#the-most-important-decision-what-should-count-as-a-conversion">Choosing conversion events</a><a href="#a-practical-campaign-optimisation-framework">Optimisation framework</a><a href="#common-mistakes-with-crm-data-for-paid-ads">Common mistakes</a><a href="#conclusion">Conclusion</a></aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>
      <footer className="pms-cta"><span>CRM DATA FOR PAID ADS</span><h2>Optimise for what happens after the lead.</h2><p>Connect paid media, CRM qualification and customer outcomes so campaign decisions are based on business value rather than lead volume alone.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
