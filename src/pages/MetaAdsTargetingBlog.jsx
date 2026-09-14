import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/meta-ads-targeting.md?raw'

const faq = [
  ['Is broad targeting better than detailed targeting on Meta Ads?', 'Not universally. Broad targeting can work well when the market is large, the conversion signal is useful and the creative is specific. Detailed targeting can make sense when there is a genuine audience constraint or hypothesis worth testing.'],
  ['What is broad targeting in Meta Ads?', 'Broad targeting generally means using fewer audience restrictions, while keeping the business constraints that genuinely matter, such as geography or other necessary controls. The platform then has more room to find people likely to complete the chosen action.'],
  ['When should I use detailed targeting?', 'Use it when the targeting input reflects a meaningful business distinction, eligibility requirement or testable audience hypothesis. Avoid adding interests simply because they sound relevant.'],
  ['Should I test broad and detailed targeting separately?', 'Usually yes when the goal is to understand whether audience breadth itself changes performance. Keep the major variables comparable so the audience difference remains interpretable.'],
  ['Can creative replace detailed targeting?', 'Creative can perform some of the qualification work by making the offer highly relevant to the intended customer, but it cannot replace hard constraints such as geography or strict eligibility requirements.'],
  ['What should I measure when testing Meta Ads targeting?', 'Look beyond CPL. Compare qualified lead rate, cost per qualified opportunity, customer acquisition cost and revenue where the business has reliable downstream data.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Meta Ads Targeting: Broad vs Detailed Targeting',
  description: 'A practical guide to Meta Ads targeting, comparing broad targeting and detailed targeting, with frameworks for audience testing, creative testing and lead quality.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/meta-ads-targeting',
  keywords: 'Meta Ads targeting, broad targeting Meta, audience targeting, ad creative testing, Facebook Ads testing',
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

function TargetingFlow() {
  const stages = [['01', 'Constraint', 'Define what must be controlled'], ['02', 'Audience', 'Choose the breadth of delivery'], ['03', 'Creative', 'Make relevance obvious'], ['04', 'Conversion', 'Optimise toward a useful action'], ['05', 'Quality', 'Judge downstream lead value']]
  return <section className="pms-funnel" aria-label="Meta Ads targeting decision flow"><div className="pms-section-label">THE TARGETING DECISION</div><h2>Use targeting to control reality, not to create complexity.</h2><div className="pms-funnel-flow">{stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></section>
}

function ComparisonCards() {
  const items = [['Broad', 'More room to learn', 'Useful when the market is large and the conversion signal is strong.'], ['Detailed', 'More audience guidance', 'Useful when a real business constraint or hypothesis needs independent control.'], ['Creative', 'Message level filtering', 'Makes the intended customer and problem more specific.'], ['Quality', 'Commercial validation', 'Shows whether the audience produces useful opportunities, not just leads.']]
  return <section className="pms-metric-panel" aria-label="Broad and detailed targeting comparison"><div className="pms-section-label">BROAD VS DETAILED</div><h2>The right audience setup depends on the decision you need to make.</h2><div className="pms-metric-grid">{items.map(([metric, label, text]) => <div className="pms-metric-card" key={metric}><b>{metric}</b><strong>{label}</strong><p>{text}</p></div>)}</div></section>
}

function FAQSection() { return <section className="pms-faq" aria-labelledby="meta-targeting-faq-heading"><div className="pms-section-label">FAQ</div><h2 id="meta-targeting-faq-heading">Frequently asked questions</h2><div className="pms-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p>{answer}</p></div></details>)}</div></section> }

export default function MetaAdsTargetingBlog() {
  useEffect(() => {
    document.title = 'Meta Ads Targeting: Broad vs Detailed Targeting | Ashwin James'
    const description = 'Learn how to choose between broad and detailed Meta Ads targeting, test audience hypotheses, use creative effectively and measure lead quality.'
    let tag = document.querySelector('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }; canonical.setAttribute('href', 'https://ashwinjames.com/blog/meta-ads-targeting')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])
  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))
  return <main className="pms-blog-page"><script type="application/ld+json">{JSON.stringify(articleSchema)}</script><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><article className="pms-blog-shell">
    <header className="pms-hero"><Link to="/blog" className="pms-back">Back to all blogs</Link><p className="pms-eyebrow">META ADS · TARGETING · AUDIENCE STRATEGY</p><div className="pms-meta"><span>Meta Ads</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div><h1>Meta Ads Targeting: Broad vs Detailed Targeting</h1><p className="pms-lede">A practical framework for deciding when broad targeting makes sense, when detailed targeting adds useful control and how to test both without confusing audience strategy with creative strategy.</p><div className="pms-links"><Link to="/services/meta-ads">Meta Ads</Link><Link to="/blog/meta-ads-campaign-structure">Campaign Structure</Link><Link to="/blog/creative-is-the-new-targeting">Creative Is the New Targeting</Link><Link to="/resources/meta-ads-launch-checklist">Meta Ads Launch Checklist</Link></div></header>
    <TargetingFlow />
    <ComparisonCards />
    <div className="pms-article-grid"><aside className="pms-toc"><span>ON THIS PAGE</span><a href="#what-is-the-difference-between-broad-and-detailed-targeting">Broad vs detailed</a><a href="#why-the-broad-versus-detailed-debate-is-often-framed-incorrectly">The real question</a><a href="#when-broad-targeting-makes-sense">Broad targeting</a><a href="#when-detailed-targeting-makes-sense">Detailed targeting</a><a href="#the-real-role-of-creative-in-broad-targeting">Creative</a><a href="#how-to-compare-broad-and-detailed-targeting-properly">Testing</a><a href="#what-should-you-measure">Measurement</a><a href="#how-to-decide-between-broad-and-detailed-targeting">Decision framework</a><a href="#common-meta-ads-targeting-mistakes">Mistakes</a><a href="#conclusion">Conclusion</a></aside><div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} /></div>
    <FAQSection />
    <footer className="pms-cta"><span>META ADS TARGETING</span><h2>Make audience strategy a testable decision.</h2><p>Use real business constraints, meaningful audience hypotheses, strong creative and downstream quality data instead of adding targeting options for the sake of precision.</p><div><Link to="/services/meta-ads">Explore Meta Ads</Link><Link to="/contact">Start a Conversation</Link></div></footer>
  </article></main>
}
