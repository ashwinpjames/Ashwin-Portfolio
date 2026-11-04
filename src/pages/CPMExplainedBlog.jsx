import { Link } from 'react-router-dom'
import articleMarkdown from '../content/cpm-explained.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Is Your Meta Ads CPM So High? A Data-Driven Diagnostic Framework',
  description: 'A technical guide to diagnosing high Meta Ads CPM using auction mechanics, CTR, frequency, placement breakdowns, conversion rates and cost per qualified lead.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://www.ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-31',
  dateModified: '2026-11-04',
  mainEntityOfPage: 'https://www.ashwinjames.com/blog/cpm-explained',
}

const faq = [
  ['What is a good CPM for Meta Ads?', 'There is no universal good CPM. Costs vary by market, audience, objective, placement, competition and time period. Compare your campaign with its own historical performance under similar conditions and evaluate the cost of the business outcome.'],
  ['Why did my Meta Ads CPM suddenly increase?', 'Possible explanations include increased auction demand, a change in placement mix, different audience delivery, campaign edits or changes in market conditions. Compare like-for-like breakdowns and check whether CPQL or other business outcomes also changed.'],
  ['Does a higher CTR automatically reduce CPM?', 'No. CTR is a useful response metric, but it is not a direct CPM control. Meta’s auction considers bid, estimated action rate and ad quality. A stronger click response does not guarantee cheaper impressions or better lead quality.'],
  ['Does Facebook page follower count reduce CPM?', 'A large follower count is not a published direct discount in Meta’s auction. Page identity, audience familiarity and social proof may affect how people respond, but a comparison between two pages cannot establish that follower count caused a CPM difference.'],
  ['Should I pause an ad when CPM becomes high?', 'Not based on CPM alone. First check whether the increase is accompanied by deteriorating conversion rate, CPQL or downstream business outcomes. If qualified acquisition remains within the business’s acceptable range, a higher CPM may not justify pausing the ad.'],
  ['Is CPM more important than cost per qualified lead?', 'They answer different questions. CPM measures impression cost; CPQL measures the advertising cost of generating a qualified lead. For a lead generation business, CPQL is generally closer to the commercial objective, provided qualification criteria are reliable and consistent.'],
]

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
  output = output.replace(/\[\[HOMEPAGE_LINK\]\]/g, '<a href="https://www.ashwinjames.com/">Performance Marketing Specialist</a>')
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g, (match, label, href) => {
    const safeHref = href.replace(/&amp;/g, '&amp;')
    return href.startsWith('https://')
      ? `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${label}</a>`
      : `<a href="${safeHref}">${label}</a>`
  })
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
    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`)
      i += 1
      continue
    }
    if (/^\d+\.\s+/.test(line) || /^[-*]\s+/.test(line)) {
      const ordered = /^\d+\.\s+/.test(line)
      const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/
      const items = []
      while (i < lines.length && pattern.test(lines[i])) {
        items.push(`<li>${inlineMarkdown(lines[i].replace(pattern, ''))}</li>`)
        i += 1
      }
      html.push(`<${ordered ? 'ol' : 'ul'}>${items.join('')}</${ordered ? 'ol' : 'ul'}>`)
      continue
    }
    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i])) {
      paragraph.push(lines[i])
      i += 1
    }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

const visuals = [
  { label: '01 · AUCTION', title: 'Bid + estimated action rate + ad quality', body: 'Meta evaluates total value, not just the highest monetary bid.', type: 'formula' },
  { label: '02 · DIAGNOSE', title: 'CPM → CTR → Conversion → CPQL', body: 'Follow the cost of exposure through to qualified acquisition.', type: 'funnel' },
  { label: '03 · AUDIENCE', title: 'Frequency needs context', body: 'Look for rising exposure alongside declining response and worsening outcomes.', type: 'diagnosis' },
  { label: '04 · OPTIMISE', title: 'Optimize for qualified acquisition', body: 'A higher CPM can still support a lower cost per qualified lead.', type: 'outcome' },
]

function VisualCard({ item }) {
  return (
    <div className={`cpm-visual cpm-visual-${item.type}`}>
      <span>{item.label}</span>
      <strong>{item.title}</strong>
      <div className="cpm-visual-art" aria-hidden="true">
        {item.type === 'formula' && <><b>BID</b><i>+</i><b>ACTION RATE</b><i>+</i><b>QUALITY</b></>}
        {item.type === 'funnel' && <><b>CPM</b><i>→</i><b>CTR</b><i>→</i><b>CVR</b><i>→</i><b>CPQL</b></>}
        {item.type === 'diagnosis' && <><b>FREQUENCY</b><i>+</i><b>RESPONSE</b></>}
        {item.type === 'outcome' && <><b>LEADS</b><i>→</i><b>QUALIFIED</b><i>→</i><b>CUSTOMERS</b></>}
      </div>
      <p>{item.body}</p>
    </div>
  )
}

function FAQSection() {
  return (
    <section className="cpm-faq" aria-labelledby="cpm-faq-heading">
      <div className="cpm-faq-heading">
        <span>FAQ</span>
        <h2 id="cpm-faq-heading">Frequently asked questions</h2>
        <p>Practical answers to common questions about diagnosing Meta Ads CPM.</p>
      </div>
      <div className="cpm-faq-list">
        {faq.map(([question, answer]) => (
          <details className="cpm-faq-item" key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <div className="cpm-faq-answer"><p>{answer}</p></div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default function CPMExplainedBlog() {
  const body = articleMarkdown.replace(/^# .+\n\n/, '')
  const renderedArticle = renderMarkdown(body)
  return <main className="cpm-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="cpm-blog-shell">
      <header className="cpm-blog-hero">
        <Link to="/blog" className="cpm-blog-back">Back to all blogs</Link>
        <p className="cpm-blog-eyebrow">META ADS · PAID ACQUISITION · ANALYTICS</p>
        <div className="cpm-blog-meta"><span>Meta Ads</span><span>•</span><span>14 min read</span><span>•</span><span>November 4, 2026</span></div>
        <h1>Why Is Your Meta Ads CPM So High? A Data-Driven Diagnostic Framework</h1>
        <p className="cpm-blog-lede">A practical framework for understanding Meta's ad auction, diagnosing rising CPM and connecting impression costs with qualified lead acquisition.</p>
        <div className="cpm-blog-links"><Link to="/services/meta-ads">Meta Ads</Link><Link to="/resources">Explore resources</Link></div>
      </header>
      <section className="cpm-visual-grid" aria-label="Meta Ads CPM diagnostic summary">
        {visuals.map(item => <VisualCard key={item.label} item={item} />)}
      </section>
      <div className="cpm-blog-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      <FAQSection />
      <footer className="cpm-blog-cta">
        <span>PERFORMANCE MARKETING</span>
        <h2>Measure the cost of acquisition, not impressions alone.</h2>
        <p>Connect paid advertising, conversion tracking and CRM outcomes to understand what your campaigns actually deliver.</p>
        <div><Link to="/">Performance Marketing Specialist</Link><Link to="/case-studies">Explore case studies</Link><Link to="/blog">Read more insights</Link></div>
      </footer>
    </article>
  </main>
}
