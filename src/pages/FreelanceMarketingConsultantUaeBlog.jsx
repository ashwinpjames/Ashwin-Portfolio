import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/freelance-marketing-consultant-uae.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Freelance Marketing Consultant in UAE: What They Do, When You Need One and How to Choose',
  description: 'Learn what a freelance marketing consultant does, when a UAE business should hire one, consultant versus agency differences, and how performance marketing connects acquisition to revenue.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  mainEntityOfPage: 'https://ashwinjames.com/blog/freelance-marketing-consultant-uae',
  keywords: 'freelance marketing consultant, freelance marketing consultant UAE, marketing consultant UAE, performance marketing consultant, Meta Ads consultant UAE, Google Ads consultant UAE, freelance digital marketing consultant',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['What is a freelance marketing consultant?', 'A freelance marketing consultant is an independent marketing professional who provides strategic advice, specialised execution or both.'],
    ['How much does a freelance marketing consultant cost in the UAE?', 'There is no single standard price. Fees depend on scope, complexity, channels and level of involvement.'],
    ['Is a freelance marketing consultant better than an agency?', 'Not automatically. A consultant can be a strong choice for focused expertise, direct communication and flexibility, while an agency can suit broader team requirements.'],
    ['Can a freelance marketing consultant manage Meta Ads and Google Ads?', 'Yes. A consultant may manage one channel or multiple channels depending on their expertise and the needs of the business.'],
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
      html.push(`<div class="freelance-consultant-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
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

function GrowthSystemGraphic() {
  const stages = [['01', 'Acquisition', 'Meta Ads · Google Ads'], ['02', 'Lead Quality', 'Audience · Offer · Form'], ['03', 'CRM', 'Capture · Assign · Track'], ['04', 'Sales', 'Contact · Qualify · Follow up'], ['05', 'Revenue', 'Customers · CAC · ROAS']]
  return <div className="freelance-system" aria-label="Marketing growth system infographic">
    <div className="freelance-system-head"><span>THE CONNECTED SYSTEM</span><strong>Marketing should connect activity to revenue</strong></div>
    <div className="freelance-system-flow">{stages.map(([number, title, detail], index) => <div className="freelance-system-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i>→</i>}</div>)}</div>
  </div>
}

function ConsultantGraphic() {
  return <div className="freelance-consultant-visual" aria-label="Consultant versus activity comparison">
    <div><span>THE REAL VALUE</span><strong>Less activity. Better decisions.</strong></div>
    <div className="freelance-consultant-compare"><section><small>ACTIVITY FIRST</small><b>More campaigns</b><p>More clicks, more leads, more reports.</p></section><section><small>OUTCOME FIRST</small><b>Better decisions</b><p>Find the bottleneck, test the fix and measure the business result.</p></section></div>
  </div>
}

function MeasurementGraphic() {
  const metrics = [['CPL', 'Cost per lead'], ['CPQL', 'Cost per qualified lead'], ['CAC', 'Cost per customer'], ['ROAS', 'Revenue efficiency']]
  return <div className="freelance-measurement" aria-label="Marketing measurement infographic"><span>MEASURE THE FUNNEL</span><strong>Do not stop at the lead</strong><div>{metrics.map(([metric, label]) => <div key={metric}><b>{metric}</b><small>{label}</small></div>)}</div></div>
}

export default function FreelanceMarketingConsultantUaeBlog() {
  useEffect(() => {
    document.title = 'Freelance Marketing Consultant in UAE: What They Do and How to Choose'
    const description = 'Learn what a freelance marketing consultant does, when a UAE business should hire one, consultant versus agency differences, and how performance marketing connects acquisition to revenue.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/freelance-marketing-consultant-uae')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const html = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="freelance-consultant-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="freelance-consultant-blog-shell">
      <header className="freelance-consultant-hero">
        <Link to="/blog" className="freelance-consultant-back">Back to all blogs</Link>
        <p className="freelance-consultant-eyebrow">FREELANCE CONSULTING · UAE · PERFORMANCE MARKETING</p>
        <div className="freelance-consultant-meta"><span>Marketing Strategy</span><span>•</span><span>8 min read</span><span>•</span><span>September 9, 2026</span></div>
        <h1>Freelance Marketing Consultant in UAE: What They Do, When You Need One and How to Choose</h1>
        <p className="freelance-consultant-lede">A practical guide for UAE businesses that want marketing decisions connected to acquisition, lead quality, CRM, sales and revenue.</p>
        <div className="freelance-consultant-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/services/meta-ads">Meta Ads</Link><Link to="/contact">Work with Ashwin</Link></div>
      </header>
      <GrowthSystemGraphic />
      <div className="freelance-consultant-content"><ConsultantGraphic /><div dangerouslySetInnerHTML={{ __html: html }} /><MeasurementGraphic /></div>
      <footer className="freelance-consultant-cta"><span>FREELANCE MARKETING CONSULTING · UAE</span><h2>Need marketing that connects advertising to revenue?</h2><p>Let us look at your acquisition funnel, identify the biggest constraint and build a clearer path from paid traffic to qualified opportunities and customers.</p><div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div></footer>
    </article>
  </main>
}
