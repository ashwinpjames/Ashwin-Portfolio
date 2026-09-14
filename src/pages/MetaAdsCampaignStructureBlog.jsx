import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/meta-ads-campaign-structure.md?raw'

const faq = [
  ['What is the best Meta Ads campaign structure for lead generation?', 'There is no universal structure. A practical starting point is a focused lead generation campaign with a small number of meaningful ad sets and several genuinely different creative concepts. The right structure depends on budget, audience, offer, geography and data.'],
  ['How many ad sets should a Meta Ads campaign have?', 'Use as few as necessary to represent meaningful differences. More ad sets are not automatically better. If budget is limited, excessive segmentation can spread delivery too thinly and make learning harder.'],
  ['What should I test in Meta Ads first?', 'Start with the variables most likely to change customer response, such as the offer, hook, creative angle, audience hypothesis or format. Define the hypothesis and success metric before launching the test.'],
  ['What is the difference between campaign testing and ad creative testing?', 'Campaign or ad set testing usually concerns larger strategic variables such as objectives, audiences, geography or delivery controls. Creative testing focuses on the message and presentation inside that structure.'],
  ['Should I create a new campaign for every new ad?', 'Usually no. A new creative concept normally belongs at the ad level. Create a separate campaign only when there is a meaningful strategic reason that requires independent control.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Structure Meta Ads Campaigns for Lead Generation',
  description: 'A practical guide to Meta Ads campaign structure for lead generation, including Facebook Ads campaign structure, ad creative testing and Facebook Ads testing.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/meta-ads-campaign-structure',
  keywords: 'Meta Ads campaign structure, Facebook Ads campaign structure, ad creative testing, Facebook Ads testing',
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

function StructureFlow() {
  const stages = [['01', 'Outcome', 'Define the conversion'], ['02', 'Campaign', 'Give the campaign a reason to exist'], ['03', 'Ad set', 'Separate meaningful differences'], ['04', 'Creative', 'Test useful messages'], ['05', 'Quality', 'Measure qualified demand'], ['06', 'Learning', 'Turn results into the next test']]
  return <section className="pms-funnel" aria-label="Meta Ads campaign structure flow"><div className="pms-section-label">THE CAMPAIGN STRUCTURE</div><h2>Build structure around decisions, not complexity.</h2><div className="pms-funnel-flow">{stages.slice(0, 5).map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < 4 && <i aria-hidden="true">→</i>}</div>)}</div><div className="pms-funnel-flow" style={{ marginTop: '.55rem' }}>{stages.slice(5).map(([number, title, detail]) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small></div>)}</div></section>
}

function MetricCards() {
  const metrics = [['Structure', 'Useful control', 'Each campaign and ad set should exist for a reason.'], ['Creative', 'Message learning', 'Test concepts that can change how the customer responds.'], ['Quality', 'Commercial relevance', 'Compare lead volume with qualified opportunities.'], ['Learning', 'Next decision', 'Use each test to improve the next hypothesis.']]
  return <section className="pms-metric-panel" aria-label="Meta Ads campaign structure principles"><div className="pms-section-label">STRUCTURE PRINCIPLES</div><h2>More segmentation does not automatically mean more control.</h2><div className="pms-metric-grid">{metrics.map(([metric, label, text]) => <div className="pms-metric-card" key={metric}><b>{metric}</b><strong>{label}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() { return <section className="pms-faq" aria-labelledby="meta-structure-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="meta-structure-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function MetaAdsCampaignStructureBlog() {
  useEffect(() => {
    document.title = 'How to Structure Meta Ads Campaigns for Lead Generation | Ashwin James'
    const description = 'Learn how to structure Meta Ads campaigns for lead generation, including Facebook Ads campaign structure, ad creative testing and Facebook Ads testing.'
    let tag = document.querySelector('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }; canonical.setAttribute('href', 'https://ashwinjames.com/blog/meta-ads-campaign-structure')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])
  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))
  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero"><Link to="/blog" className="pms-back">Back to all blogs</Link><p className="pms-eyebrow">META ADS · CAMPAIGN STRUCTURE · LEAD GENERATION</p><div className="pms-meta"><span>Meta Ads</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div><h1>How to Structure Meta Ads Campaigns for Lead Generation</h1><p className="pms-lede">A practical framework for structuring campaigns, ad sets and creative tests so your advertising account produces useful learning instead of unnecessary complexity.</p><div className="pms-links"><Link to="/services/meta-ads">Meta Ads</Link><Link to="/services/lead-generation">Lead Generation</Link><Link to="/blog/meta-ads-lead-generation-uae">Meta Ads lead generation</Link><Link to="/resources/meta-ads-launch-checklist">Meta Ads Launch Checklist</Link></div></header>
    <StructureFlow />
    <div className="pms-article-grid"><aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-does-meta-ads-campaign-structure-actually-mean">Campaign structure</a><a href="#start-with-the-conversion-outcome">Conversion outcome</a><a href="#the-three-levels-of-a-practical-campaign-structure">Three levels</a><a href="#a-simple-meta-ads-campaign-structure-for-lead-generation">Practical structure</a><a href="#ad-creative-testing-should-happen-inside-the-structure">Creative testing</a><a href="#facebook-ads-testing-what-should-you-actually-test">Testing</a><a href="#match-campaign-structure-to-budget">Budget</a><a href="#do-not-judge-structure-using-cpl-alone">Measurement</a><a href="#a-practical-checklist-before-launch">Checklist</a><a href="#conclusion">Conclusion</a></aside><div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} /></div>
    <MetricCards /><FAQSection />
    <footer className="pms-cta"><span>META ADS CAMPAIGN STRUCTURE</span><h2>Build a structure that makes the next decision clearer.</h2><p>Connect campaign organisation, creative testing, lead quality and measurement instead of adding complexity without a reason.</p><div><Link to="/services/meta-ads">Explore Meta Ads</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
