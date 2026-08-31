import { Link } from 'react-router-dom'
import articleMarkdown from '../content/ctr-explained.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'CTR Explained: Why This One Metric Can Make or Break Your Ad Campaign',
  description: "CTR looks simple but gets misread constantly. Learn what click-through rate actually measures, why it matters, and how to improve it the right way.",
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-31',
  dateModified: '2026-08-31',
  mainEntityOfPage: 'https://ashwinjames.com/blog/ctr-explained',
}

const faq = [
  ['What is a good CTR?', 'There\'s no single universal benchmark — a good CTR depends on the platform, ad format, industry, and campaign objective. A search ad and a brand-awareness display ad shouldn\'t be judged by the same standard. Compare CTR against your own historical performance and similar campaigns rather than a generic external number.'],
  ['Is CTR more important than conversion rate?', 'No — they answer different questions. CTR tells you whether people are interested enough to click; conversion rate tells you whether that interest turns into a result. Both matter, and they should be read together, not ranked against each other.'],
  ['Why is my CTR high but conversions low?', 'This usually points to a gap between what the ad promises and what the landing page delivers, or clicks driven by curiosity rather than genuine intent. Check message match between the ad and the landing page first.'],
  ['How do I improve CTR on Google Ads or Meta Ads?', 'Start with the message: sharpen the headline or hook, test creative systematically, and make sure copy matches search intent (for Google) or audience context (for Meta). Ad extensions, rich formats, and regular creative refreshes also help.'],
  ['Does CTR matter for every campaign objective?', 'Its importance varies. For consideration and conversion campaigns, CTR is a meaningful relevance signal. For pure brand-awareness or reach objectives, it matters less, since the goal isn\'t necessarily to drive immediate clicks.'],
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
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
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
  { label: '01 · FORMULA', title: 'CTR = Clicks ÷ Impressions × 100', body: '500 clicks ÷ 25,000 impressions = 2%', type: 'formula' },
  { label: '02 · FUNNEL', title: 'Impression → Interest → Click → Conversion', body: 'CTR sits between attention and the next action.', type: 'funnel' },
  { label: '03 · DIAGNOSIS', title: 'High CTR does not guarantee high conversion', body: 'Curiosity can create clicks without commercial intent.', type: 'diagnosis' },
  { label: '04 · OPTIMISE', title: 'Right click > more clicks', body: 'Judge CTR alongside conversion rate, CPC and the business outcome.', type: 'outcome' },
]

function VisualCard({ item }) {
  return (
    <div className={`ctr-visual ctr-visual-${item.type}`}>
      <span>{item.label}</span>
      <strong>{item.title}</strong>
      <div className="ctr-visual-art" aria-hidden="true">
        {item.type === 'formula' && <><b>CLICKS</b><i>÷</i><b>IMPRESSIONS</b><i>×</i><b>100</b></>}
        {item.type === 'funnel' && <><b>IMPRESSION</b><i>→</i><b>INTEREST</b><i>→</i><b>CLICK</b><i>→</i><b>CONVERSION</b></>}
        {item.type === 'diagnosis' && <><b>HIGH CTR</b><i>≠</i><b>WIN</b></>}
        {item.type === 'outcome' && <><b>CTR</b><i>+</i><b>CVR</b><i>+</i><b>CPC</b><i>+</i><b>OUTCOME</b></>}
      </div>
      <p>{item.body}</p>
    </div>
  )
}

export default function CTRExplainedBlog() {
  const body = articleMarkdown.replace(/^# .+\n\n/, '')
  const renderedArticle = renderMarkdown(body)
  return <main className="ctr-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="ctr-blog-shell">
      <header className="ctr-blog-hero">
        <Link to="/blog" className="ctr-blog-back">Back to all blogs</Link>
        <p className="ctr-blog-eyebrow">PERFORMANCE MARKETING · PAID ADS · ANALYTICS</p>
        <div className="ctr-blog-meta"><span>Performance Marketing</span><span>•</span><span>10 min read</span><span>•</span><span>August 31, 2026</span></div>
        <h1>CTR Explained: Why This One Metric Can Make or Break Your Ad Campaign</h1>
        <p className="ctr-blog-lede">CTR looks simple but gets misread constantly. Learn what click-through rate actually measures, why it matters, what high and low CTR really indicate, and how to improve it without losing sight of conversions.</p>
        <div className="ctr-blog-links"><Link to="/services/performance-growth-marketing">Performance Marketing</Link><Link to="/resources">Explore resources</Link></div>
      </header>
      <section className="ctr-visual-grid" aria-label="CTR visual summary">
        {visuals.map(item => <VisualCard key={item.label} item={item} />)}
      </section>
      <div className="ctr-blog-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      <footer className="ctr-blog-cta">
        <span>PERFORMANCE MARKETING</span>
        <h2>Do not chase clicks. Diagnose what the clicks mean.</h2>
        <p>Strong CTR is useful when it reflects relevant attention that moves toward the business outcome you actually care about.</p>
        <div><Link to="/contact">Work with Ashwin</Link><Link to="/blog">Read more insights</Link></div>
      </footer>
    </article>
  </main>
}
