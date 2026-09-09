import { Link } from 'react-router-dom'
import articleMarkdown from '../content/meta-ads-leads-no-sales.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Your Meta Ads Are Generating Leads but Not Sales',
  description: "Meta Ads bringing in leads but not customers? A performance marketing specialist in UAE explains why cheap leads don't convert and how to fix it.",
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  mainEntityOfPage: 'https://ashwinjames.com/blog/meta-ads-generating-leads-but-not-sales',
  keywords: 'performance marketing specialist in UAE, Meta Ads lead quality, Meta Ads lead generation, Meta Ads sales funnel, customer acquisition cost',
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
      const parseRow = (row) => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => inlineMarkdown(cell.trim()))
      const headers = parseRow(lines[i])
      i += 2
      const rows = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) { rows.push(parseRow(lines[i])); i += 1 }
      html.push(`<div class="meta-sales-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
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
  const stages = ['Meta Ad', 'Click', 'Lead', 'Contacted', 'Qualified', 'Opportunity', 'Sale', 'Revenue']
  return <div className="meta-sales-funnel" aria-label="Meta Ads to revenue funnel infographic">
    <div className="meta-sales-funnel-title"><span>THE REAL FUNNEL</span><strong>More leads ≠ more sales</strong></div>
    <div className="meta-sales-funnel-stages">{stages.map((stage, index) => <div className="meta-sales-funnel-stage" key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong></div>)}</div>
    <p>Revenue is created at the end of the funnel, so performance should be evaluated across every stage, not only the form submission.</p>
  </div>
}

function CampaignComparison() {
  return <div className="meta-sales-comparison" aria-label="Campaign comparison infographic">
    <div className="meta-sales-comparison-head"><span>THE CPL TRAP</span><strong>Campaign B costs more per lead but produces 4× the sales</strong></div>
    <div className="meta-sales-comparison-grid">
      <div><small>CAMPAIGN A</small><b>AED 10</b><span>CPL</span><strong>5 sales</strong><span>AED 10,000 revenue</span></div>
      <div className="meta-sales-comparison-winner"><small>CAMPAIGN B</small><b>AED 25</b><span>CPL</span><strong>20 sales</strong><span>AED 50,000 revenue</span></div>
    </div>
  </div>
}

function ResponseGraphic() {
  return <div className="meta-sales-response" aria-label="Lead response time infographic">
    <div><span>RESPONSE TIME</span><strong>The first few minutes matter</strong></div>
    <div className="meta-sales-response-track">{['1 min', '5 min', '30 min', '6+ hrs'].map((time, index) => <div key={time} className={`meta-sales-response-step step-${index}`}><b>{time}</b><span>{index < 2 ? 'high priority' : index === 2 ? 'lower intent' : 'risk of loss'}</span></div>)}</div>
  </div>
}

function MetricsGraphic() {
  const metrics = [['CPL', 'Can acquire leads'], ['CPQL', 'Can acquire qualified leads'], ['CAC', 'Can acquire customers'], ['ROAS', 'Can measure revenue efficiency']]
  return <div className="meta-sales-metrics" aria-label="Performance marketing metrics infographic">
    <span>MEASURE WHAT MATTERS</span><strong>Move from lead volume to business outcomes</strong>
    <div>{metrics.map(([metric, label]) => <div key={metric}><b>{metric}</b><span>{label}</span></div>)}</div>
  </div>
}

export default function MetaAdsLeadsNoSalesBlog() {
  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))
  const [introAndOne, afterOne] = renderedArticle.split('<h2>2. Why Cheap Leads')
  const [sectionTwo, afterTwo] = afterOne.split('<h2>3. Your Lead Generation')
  const [sectionThree, afterThree] = afterTwo.split('<h2>4. The Problem May Happen')
  const [sectionFour, afterFour] = afterThree.split('<h2>5. Why Businesses Need')
  const [sectionFive, afterFive] = afterFour.split('<h2>6. How a Performance')
  const [sectionSix, sectionSeven] = afterFive.split('<h2>7. How to Fix')

  return <main className="meta-sales-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <article className="meta-sales-blog-shell">
      <header className="meta-sales-blog-hero">
        <Link to="/blog" className="meta-sales-back">Back to all blogs</Link>
        <p className="meta-sales-eyebrow">META ADS · LEAD GENERATION · PERFORMANCE MARKETING</p>
        <div className="meta-sales-meta"><span>Meta Ads</span><span>•</span><span>7 min read</span><span>•</span><span>September 9, 2026</span></div>
        <h1>Why Your Meta Ads Are Generating Leads but Not Sales</h1>
        <p className="meta-sales-lede">Meta Ads bringing in leads but not customers? A performance marketing specialist in UAE explains why cheap leads don't convert and how to fix it.</p>
        <div className="meta-sales-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/resources/lead-quality-framework">Lead Quality Framework</Link></div>
      </header>

      <FunnelGraphic />

      <div className="meta-sales-blog-content">
        <div dangerouslySetInnerHTML={{ __html: introAndOne }} />
        <CampaignComparison />
        <div dangerouslySetInnerHTML={{ __html: `<h2>2. Why Cheap Leads${sectionTwo}` }} />
        <div dangerouslySetInnerHTML={{ __html: `<h2>3. Your Lead Generation${sectionThree}` }} />
        <div dangerouslySetInnerHTML={{ __html: `<h2>4. The Problem May Happen${sectionFour}` }} />
      </div>

      <div className="meta-sales-inline-visual"><ResponseGraphic /></div>

      <div className="meta-sales-blog-content">
        <div dangerouslySetInnerHTML={{ __html: `<h2>5. Why Businesses Need${sectionFive}` }} />
        <MetricsGraphic />
        <div dangerouslySetInnerHTML={{ __html: `<h2>6. How a Performance${sectionSix}` }} />
        <div dangerouslySetInnerHTML={{ __html: `<h2>7. How to Fix${sectionSeven}` }} />
      </div>

      <footer className="meta-sales-blog-cta">
        <span>PERFORMANCE MARKETING</span>
        <h2>Stop optimizing for cheap leads. Start optimizing for customers.</h2>
        <p>See how performance marketing connects advertising, lead quality, CRM data and sales outcomes into one measurable acquisition system.</p>
        <div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Work with Ashwin</Link></div>
      </footer>
    </article>
  </main>
}
