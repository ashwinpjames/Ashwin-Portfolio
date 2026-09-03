import { Link } from 'react-router-dom'
import articleMarkdown from '../content/creative-is-the-new-targeting.md?raw'

const faq = [
  ['Is creative really replacing targeting?', "Not replacing it — absorbing part of its function. Manual targeting controls still matter, but as they've narrowed, creative has become one of the more controllable levers advertisers have over who actually engages with a campaign."],
  ['Why does creative affect lead quality?', "Because the message itself acts as a filter. Specific, well-framed creative causes people who aren't a good fit to disqualify themselves before converting, while broad, generic creative tends to attract a wider — and often less qualified — pool."],
  ['How do I know if a creative is pre-qualifying too aggressively?', 'If lead volume drops sharply and cost-per-lead rises without a corresponding improvement in lead quality or close rate, the creative may be filtering too narrowly, or filtering on the wrong criteria. Downstream metrics, not CTR, will show this.'],
  ['What metrics should I use beyond CTR and CPL?', 'Contactability, eligibility rate, consultation attendance, sales progression, and ultimately cost per customer and customer value. These reveal whether cheap interest was actually worth generating.'],
]

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Creative Is the New Targeting: How the Right Message Finds the Right Customer',
  description: 'Targeting and creative are no longer separate levers in Meta Ads. Learn how the right message pre-qualifies leads, shapes response, and improves lead quality — not just CTR.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  datePublished: '2026-09-03', dateModified: '2026-09-03',
  mainEntityOfPage: 'https://ashwinjames.com/blog/creative-is-the-new-targeting',
}
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }

function escapeHtml(value) { return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;') }
function inlineMarkdown(value) {
  let output = escapeHtml(value)
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/`([^`]+)`/g, '<code>$1</code>')
  return output
}
function renderMarkdown(markdown) {
  const lines = markdown.trim().split('\n'), html = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }
    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) { const level = heading[1].length; html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`); i++; continue }
    if (/^\d+\.\s+/.test(line) || /^[-*]\s+/.test(line)) {
      const ordered = /^\d+\.\s+/.test(line), pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/, items = []
      while (i < lines.length && pattern.test(lines[i])) { items.push(`<li>${inlineMarkdown(lines[i].replace(pattern, ''))}</li>`); i++ }
      html.push(`<${ordered ? 'ol' : 'ul'}>${items.join('')}</${ordered ? 'ol' : 'ul'}>`); continue
    }
    if (line.trim().startsWith('> ')) {
      const quote = []
      while (i < lines.length && lines[i].trim().startsWith('> ')) { quote.push(lines[i].trim().slice(2)); i++ }
      html.push(`<blockquote>${quote.map(inlineMarkdown).join('<br />')}</blockquote>`); continue
    }
    const paragraph = []
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !lines[i].trim().startsWith('> ')) { paragraph.push(lines[i]); i++ }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

export default function CreativeIsTheNewTargetingBlog() {
  const body = articleMarkdown.replace(/^# .+\n\n/, '').replace(/\n## Suggested Visuals[\s\S]*?\n## Suggested Internal Links/, '').replace(/\n## FAQ[\s\S]*$/, '')
  const renderedArticle = renderMarkdown(body)
  return <main className="creative-targeting-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="creative-targeting-blog-shell">
      <header className="creative-targeting-blog-hero">
        <Link to="/blog" className="creative-targeting-blog-back">Back to all blogs</Link>
        <p className="creative-targeting-blog-eyebrow">PERFORMANCE MARKETING · META ADS · CREATIVE STRATEGY</p>
        <div className="creative-targeting-blog-meta"><span>Performance Marketing</span><span>•</span><span>12 min read</span><span>•</span><span>September 3, 2026</span></div>
        <h1>Creative Is the New Targeting: How the Right Message Finds the Right Customer</h1>
        <p className="creative-targeting-blog-lede">Targeting and creative are no longer separate levers in Meta Ads. The right message can pre-qualify leads, shape response, and improve lead quality — not just CTR.</p>
        <div className="creative-targeting-blog-tags"><span>Meta Ads</span><span>Creative Strategy</span><span>Lead Quality</span><span>Performance Marketing</span></div>
      </header>
      <section className="creative-targeting-angle-grid" aria-label="Creative targeting framework">
        <div><span>01 · FILTER</span><strong>Creative filters attention.</strong><p>The message influences who stops, clicks, and converts.</p></div>
        <div><span>02 · FRAME</span><strong>Words shape self-selection.</strong><p>Spend vs. invest can attract different mindsets.</p></div>
        <div><span>03 · TEST</span><strong>Test reasons to buy.</strong><p>Strategic angles can matter more than cosmetic variants.</p></div>
        <div><span>04 · MEASURE</span><strong>Judge downstream quality.</strong><p>CTR is interest. Revenue is the outcome.</p></div>
      </section>
      <div className="creative-targeting-blog-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      <section className="creative-targeting-faq" aria-labelledby="creative-targeting-faq-heading">
        <p>FAQ</p><h2 id="creative-targeting-faq-heading">Frequently asked questions</h2>
        {faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><div><p>{answer}</p></div></details>)}
      </section>
      <footer className="creative-targeting-blog-cta"><span>THE TAKEAWAY</span><h2>Stop optimizing creative for cheap attention.</h2><p>Write ads to attract the right attention, then measure what happens after the click.</p><Link to="/contact">Work with Ashwin</Link></footer>
    </article>
  </main>
}
