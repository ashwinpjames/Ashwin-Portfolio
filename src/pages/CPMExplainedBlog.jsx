import { Link } from 'react-router-dom'
import articleMarkdown from '../content/cpm-explained.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "CPM Explained: What It Really Measures (And What It Doesn't)",
  description: "CPM shows up in every ads dashboard, but it's often misread. Here's what CPM actually measures, why it moves, and how to use it correctly.",
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-31',
  dateModified: '2026-08-31',
  mainEntityOfPage: 'https://ashwinjames.com/blog/cpm-explained',
}

const faq = [
  ['What is a good CPM?', "There's no universal number — CPM varies widely by platform, placement, audience, industry, and time of year. The most useful benchmark is your own account's historical CPM for comparable campaigns, not an external average."],
  ['Is a lower CPM always better?', 'No. A lower CPM only helps if the audience it reaches is still relevant to your goal. If CTR and conversion rate drop along with CPM, the cheaper reach may be reaching the wrong people.'],
  ['Why did my CPM suddenly increase?', 'Common causes include increased auction competition, seasonal demand, a narrower audience, a shift to a more premium placement or format, or reduced relevance and engagement signals. Check what changed in your targeting, timing, or creative before assuming something is broken.'],
  ['Is CPM more important than CPC or CPA?', 'No — CPM, CPC, and CPA measure different stages of the funnel. CPM covers reach cost, CPC covers cost per click, and CPA covers cost per outcome. For most performance goals, CPA is the more important metric; CPM is useful context, not the end goal.'],
  ['Does CPM matter for conversion focused campaigns?', "Yes, but as context rather than a primary success metric. It helps explain why a CPA moved, such as rising reach costs, but shouldn't be the metric you optimize toward directly in a conversion campaign."],
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
    if (/^`[^`]+`$/.test(line.trim())) {
      html.push(`<p class="cpm-code-line">${inlineMarkdown(line.trim())}</p>`)
      i += 1
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
  { label: '01 · FORMULA', title: 'CPM = Spend ÷ Impressions × 1,000', body: '$500 ÷ 250,000 impressions × 1,000 = $2 CPM', type: 'formula' },
  { label: '02 · FUNNEL', title: 'Reach → Interest → Click → Outcome', body: 'CPM measures the cost of exposure before the next action happens.', type: 'funnel' },
  { label: '03 · DIAGNOSIS', title: 'Low CPM does not guarantee efficiency', body: 'Cheap impressions can still come from the wrong audience.', type: 'diagnosis' },
  { label: '04 · OPTIMISE', title: 'Cost of reach needs context', body: 'Judge CPM alongside CTR, conversion rate and CPA.', type: 'outcome' },
]

function VisualCard({ item }) {
  return (
    <div className={`cpm-visual cpm-visual-${item.type}`}>
      <span>{item.label}</span>
      <strong>{item.title}</strong>
      <div className="cpm-visual-art" aria-hidden="true">
        {item.type === 'formula' && <><b>SPEND</b><i>÷</i><b>IMPRESSIONS</b><i>×</i><b>1,000</b></>}
        {item.type === 'funnel' && <><b>REACH</b><i>→</i><b>INTEREST</b><i>→</i><b>CLICK</b><i>→</i><b>OUTCOME</b></>}
        {item.type === 'diagnosis' && <><b>LOW CPM</b><i>≠</i><b>WIN</b></>}
        {item.type === 'outcome' && <><b>CPM</b><i>+</i><b>CTR</b><i>+</i><b>CVR</b><i>+</i><b>CPA</b></>}
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
        <p>Quick answers to the questions marketers ask most often about CPM.</p>
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
  const body = articleMarkdown.replace(/^# .+\n\n/, '').replace(/\n## FAQ[\s\S]*$/, '')
  const renderedArticle = renderMarkdown(body)
  return <main className="cpm-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="cpm-blog-shell">
      <header className="cpm-blog-hero">
        <Link to="/blog" className="cpm-blog-back">Back to all blogs</Link>
        <p className="cpm-blog-eyebrow">PERFORMANCE MARKETING · PAID ADS · ANALYTICS</p>
        <div className="cpm-blog-meta"><span>Performance Marketing</span><span>•</span><span>8 min read</span><span>•</span><span>August 31, 2026</span></div>
        <h1>CPM Explained: What It Really Measures (And What It Doesn't)</h1>
        <p className="cpm-blog-lede">CPM shows up in every ads dashboard, but it's often misread. Here's what CPM actually measures, why it moves, what high and low CPM really indicate, and how to use it correctly.</p>
        <div className="cpm-blog-links"><Link to="/services/performance-growth-marketing">Performance Marketing</Link><Link to="/resources">Explore resources</Link></div>
      </header>
      <section className="cpm-visual-grid" aria-label="CPM visual summary">
        {visuals.map(item => <VisualCard key={item.label} item={item} />)}
      </section>
      <div className="cpm-blog-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      <FAQSection />
      <footer className="cpm-blog-cta">
        <span>PERFORMANCE MARKETING</span>
        <h2>Do not optimize reach cost in isolation.</h2>
        <p>CPM tells you what exposure costs. The real question is whether that exposure produces the outcome your campaign needs.</p>
        <div><Link to="/contact">Work with Ashwin</Link><Link to="/blog">Read more insights</Link></div>
      </footer>
    </article>
  </main>
}
