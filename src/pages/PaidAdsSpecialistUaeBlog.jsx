import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/paid-ads-specialist-uae.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Paid Ads Specialist in UAE: What They Do, What They Manage and How to Choose One',
  description: 'Learn what a paid ads specialist does, which platforms they manage, how paid advertising should be measured and how UAE businesses can choose the right specialist.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  mainEntityOfPage: 'https://ashwinjames.com/blog/paid-ads-specialist-uae',
  keywords: 'paid ads specialist, paid ads specialist UAE, paid advertising specialist UAE, PPC specialist UAE, Google Ads specialist UAE, Meta Ads specialist UAE, paid media specialist UAE, performance marketing specialist UAE, paid advertising consultant UAE',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['What is a paid ads specialist?', 'A paid ads specialist is a marketing professional focused on planning, managing, testing and improving paid advertising campaigns, with the goal of generating measurable business outcomes.'],
    ['What does a paid ads specialist do?', 'They can manage campaign strategy, targeting, creative testing, budgets, conversion tracking, optimisation, reporting and analysis of what happens after an ad conversion.'],
    ['Should I hire a Meta Ads specialist or Google Ads specialist?', 'It depends on how customers discover your business. Meta can be strong for demand creation and creative led acquisition, while Google can be strong for capturing existing search intent. Some businesses can benefit from both.'],
    ['How much does a paid ads specialist cost in the UAE?', 'There is no single standard price. Cost depends on the scope of work, advertising platforms, account complexity, reporting requirements, business size and level of involvement.'],
  ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;')
}

function inlineMarkdown(value) {
  let output = escapeHtml(value)
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
      html.push(`<div class="paid-ads-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
      continue
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`)
      i += 1
      continue
    }
    if (/^[-*]\s+/.test(line)) {
      const items = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) { items.push(`<li>${inlineMarkdown(lines[i].replace(/^[-*]\s+/, ''))}</li>`); i += 1 }
      html.push(`<ul>${items.join('')}</ul>`)
      continue
    }
    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) { paragraph.push(lines[i]); i += 1 }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

function FunnelGraphic() {
  const stages = [['01', 'Acquisition', 'Meta Ads · Google Ads'], ['02', 'Lead Quality', 'Audience · Creative · Offer'], ['03', 'CRM', 'Capture · Assign · Track'], ['04', 'Sales', 'Contact · Qualify · Follow up'], ['05', 'Revenue', 'Customers · CAC · ROAS']]
  return <div className="paid-ads-funnel" aria-label="Paid advertising funnel infographic">
    <div className="paid-ads-funnel-head"><span>THE PAID ACQUISITION SYSTEM</span><strong>Ads are only the first stage</strong></div>
    <div className="paid-ads-funnel-flow">{stages.map(([number, title, detail], index) => <div className="paid-ads-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i>→</i>}</div>)}</div>
  </div>
}

function SpecialistGraphic() {
  return <div className="paid-ads-specialist-visual" aria-label="Paid ads specialist outcome comparison">
    <div><span>THE SPECIALIST MINDSET</span><strong>Optimise for outcomes, not dashboard vanity</strong></div>
    <div className="paid-ads-compare"><section><small>PLATFORM FIRST</small><b>Cheap clicks</b><p>Focus on traffic, impressions and low acquisition costs without enough downstream context.</p></section><section><small>BUSINESS FIRST</small><b>Qualified opportunities</b><p>Connect acquisition data with lead quality, sales activity, customers and revenue.</p></section></div>
  </div>
}

function MetricsGraphic() {
  const metrics = [['CPL', 'Cost per lead'], ['CPQL', 'Cost per qualified lead'], ['CAC', 'Cost per customer'], ['ROAS', 'Revenue efficiency']]
  return <div className="paid-ads-metrics" aria-label="Paid advertising measurement infographic"><span>MEASURE THE FUNNEL</span><strong>The deeper you measure, the better you optimise</strong><div>{metrics.map(([metric, label]) => <div key={metric}><b>{metric}</b><small>{label}</small></div>)}</div></div>
}

export default function PaidAdsSpecialistUaeBlog() {
  useEffect(() => {
    document.title = 'Paid Ads Specialist in UAE: What They Do and How to Choose One'
    const description = 'Learn what a paid ads specialist does, which platforms they manage, how paid advertising should be measured and how UAE businesses can choose the right specialist.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/paid-ads-specialist-uae')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const html = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="paid-ads-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="paid-ads-blog-shell">
      <header className="paid-ads-hero">
        <Link to="/blog" className="paid-ads-back">Back to all blogs</Link>
        <p className="paid-ads-eyebrow">PAID ADVERTISING · UAE · PERFORMANCE MARKETING</p>
        <div className="paid-ads-meta"><span>Paid Advertising</span><span>•</span><span>10 min read</span><span>•</span><span>September 9, 2026</span></div>
        <h1>Paid Ads Specialist in UAE: What They Do, What They Manage and How to Choose One</h1>
        <p className="paid-ads-lede">A practical guide to paid advertising for UAE businesses, from Meta Ads and Google Ads to lead quality, CRM, sales and revenue.</p>
        <div className="paid-ads-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/services/meta-ads">Meta Ads</Link><Link to="/contact">Work with Ashwin</Link></div>
      </header>
      <FunnelGraphic />
      <div className="paid-ads-content"><SpecialistGraphic /><div dangerouslySetInnerHTML={{ __html: html }} /><MetricsGraphic /></div>
      <footer className="paid-ads-cta"><span>PAID ADS SPECIALIST · UAE</span><h2>Want paid advertising connected to real business outcomes?</h2><p>Let us look at your acquisition funnel, identify the biggest constraint and build a clearer path from paid traffic to qualified opportunities, customers and revenue.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
