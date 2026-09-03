import { Link } from 'react-router-dom'
import articleMarkdown from '../content/lead-generation-right-leads.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "Lead Generation Is Not About More Leads. It's About the Right Leads.",
  description: "Cheap leads aren't the same as good leads. Learn how targeting, creative, offer, and form design work together as a filtering system for lead quality.",
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  mainEntityOfPage: 'https://ashwinjames.com/blog/lead-generation-right-leads',
}

const faq = [
  ['What is lead quality?', 'Lead quality describes how closely a lead matches the profile of someone who could realistically become a paying customer — based on fit, intent, and readiness to act, not just interest in a form.'],
  ['How do you improve lead quality in paid ads?', 'Improve it across the funnel, not in one spot: set targeting boundaries that reflect real eligibility, write creative that clearly names who the offer is for, connect the offer to a genuine problem or outcome, and add form questions that qualify rather than just capture contact details.'],
  ['Is a higher cost per lead always bad?', 'No. A higher CPL paired with a higher qualification rate often produces more sales opportunities and better use of sales time than a lower CPL with poor conversion downstream.'],
  ['What questions should be on a lead form?', "Only questions that help determine fit — typically some combination of location, service needed, budget range, timeline, or eligibility. If a question doesn't improve qualification, it shouldn't be there."],
  ['How do you know if a lead is qualified?', 'Track it downstream: what percentage of leads become sales conversations, what percentage of those become customers, and what it actually costs to reach each of those stages. That data tells you more than CPL ever will.'],
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
  { label: '01 · FILTER', title: 'Targeting → Creative → Offer → Form', body: 'Lead quality is built through multiple filters, not one targeting setting.', type: 'funnel' },
  { label: '02 · CREATIVE', title: 'Creative is part of targeting', body: 'Specific messaging helps the right people recognise themselves and lets others opt out.', type: 'creative' },
  { label: '03 · FRICTION', title: 'Useful friction can improve relevance', body: 'A few meaningful questions can reduce low intent submissions before sales spends time on them.', type: 'friction' },
  { label: '04 · OUTCOME', title: 'Measure beyond CPL', body: 'Qualified leads, sales opportunities, customers and revenue tell the real story.', type: 'outcome' },
]

function VisualCard({ item }) {
  return (
    <div className={`lead-quality-visual lead-quality-visual-${item.type}`}>
      <span>{item.label}</span>
      <strong>{item.title}</strong>
      <div className="lead-quality-visual-art" aria-hidden="true">
        {item.type === 'funnel' && <><b>TARGETING</b><i>→</i><b>CREATIVE</b><i>→</i><b>OFFER</b><i>→</i><b>FORM</b></>}
        {item.type === 'creative' && <><b>WHO</b><i>+</i><b>PROBLEM</b><i>+</i><b>OUTCOME</b><i>→</i><b>RELEVANCE</b></>}
        {item.type === 'friction' && <><b>MORE</b><i>≠</i><b>BETTER</b><i>→</i><b>USEFUL</b></>}
        {item.type === 'outcome' && <><b>CPL</b><i>→</i><b>CPQL</b><i>→</i><b>OPPORTUNITY</b><i>→</i><b>CUSTOMER</b></>}
      </div>
      <p>{item.body}</p>
    </div>
  )
}

function FAQSection() {
  return (
    <section className="lead-quality-faq" aria-labelledby="lead-quality-faq-heading">
      <div className="lead-quality-faq-heading">
        <span>FAQ</span>
        <h2 id="lead-quality-faq-heading">Frequently asked questions</h2>
        <p>Quick answers to the questions marketers ask most often about lead quality and qualification.</p>
      </div>
      <div className="lead-quality-faq-list">
        {faq.map(([question, answer]) => (
          <details className="lead-quality-faq-item" key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <div className="lead-quality-faq-answer"><p>{answer}</p></div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default function LeadGenerationRightLeadsBlog() {
  const body = articleMarkdown.replace(/^# .+\n\n/, '').replace(/\n## FAQ[\s\S]*$/, '')
  const renderedArticle = renderMarkdown(body)
  return <main className="lead-quality-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="lead-quality-blog-shell">
      <header className="lead-quality-blog-hero">
        <Link to="/blog" className="lead-quality-blog-back">Back to all blogs</Link>
        <p className="lead-quality-blog-eyebrow">LEAD GENERATION · PAID ADS · FUNNEL STRATEGY</p>
        <div className="lead-quality-blog-meta"><span>Lead Gen</span><span>•</span><span>9 min read</span><span>•</span><span>September 3, 2026</span></div>
        <h1>Lead Generation Is Not About More Leads. It's About the Right Leads.</h1>
        <p className="lead-quality-blog-lede">Cheap leads aren't the same as good leads. Learn how targeting, creative, offer, and form design work together as a filtering system for lead quality.</p>
        <div className="lead-quality-blog-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/resources/lead-quality-framework">Lead Quality Framework</Link></div>
      </header>
      <section className="lead-quality-visual-grid" aria-label="Lead quality visual summary">
        {visuals.map(item => <VisualCard key={item.label} item={item} />)}
      </section>
      <div className="lead-quality-blog-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      <FAQSection />
      <footer className="lead-quality-blog-cta">
        <span>LEAD GENERATION</span>
        <h2>Do not optimize for the lead. Optimize for the opportunity.</h2>
        <p>The campaign is doing its job when the right people raise their hand and the wrong ones self-select out before sales spends the time.</p>
        <div><Link to="/contact">Work with Ashwin</Link><Link to="/blog">Read more insights</Link></div>
      </footer>
    </article>
  </main>
}
