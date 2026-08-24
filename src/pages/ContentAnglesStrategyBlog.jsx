import { Link } from 'react-router-dom'
import articleMarkdown from '../content/content-angles-strategy.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'There Are No Boring Topics, Only Boring Angles',
  description: 'A practical content strategy framework for turning one topic into multiple useful angles by starting with audience questions, tensions, objections, desires and intent.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  mainEntityOfPage: 'https://ashwinjames.com/blog/content-angles-strategy',
}

const faq = [
  ['What is the difference between a topic and an angle?', 'A topic is the subject the content discusses. An angle is the specific perspective, question, tension or reason that makes that subject relevant to a particular audience.'],
  ['How do I find a content angle?', 'Start with one topic, identify the audience, then list their questions, problems, objections, desires and misconceptions. Turn those tensions into specific questions and choose the angle with the strongest relevance and clearest payoff.'],
  ['Can one topic have multiple angles?', 'Yes. One topic can support educational, diagnostic, strategic, contrarian, comparative, tactical and decision focused angles.'],
  ['Why do some content ideas feel boring?', 'Often because they describe a subject without creating a specific reason to care. Broad topics become more engaging when connected to a real problem, question, decision, tension or desired outcome.'],
  ['How does this apply to SEO and social content?', 'A keyword or topic gives you a subject area, but the content still needs a useful angle that matches the audience intent.'],
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

    if (/^\|/.test(line) && i + 1 < lines.length && /^\|?\s*:?-{3,}/.test(lines[i + 1])) {
      const parseRow = (row) => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim())
      const headers = parseRow(line)
      html.push(`<table><thead><tr>${headers.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>`)
      i += 2
      while (i < lines.length && /^\|/.test(lines[i])) {
        const cells = parseRow(lines[i])
        html.push(`<tr>${cells.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`)
        i += 1
      }
      html.push('</tbody></table>')
      continue
    }

    if (/^>\s?/.test(line)) {
      const quote = []
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quote.push(inlineMarkdown(lines[i].replace(/^>\s?/, '')))
        i += 1
      }
      html.push(`<blockquote>${quote.join('<br />')}</blockquote>`)
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
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^>\s?/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !/^\|/.test(lines[i])) {
      paragraph.push(lines[i])
      i += 1
    }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }

  return html.join('')
}

const body = articleMarkdown.replace(/^# .+\n\n/, '').replace(/^## SEO title options[\s\S]*?## Introduction\n\n/, '## Introduction\n\n')

export default function ContentAnglesStrategyBlog() {
  const renderedArticle = renderMarkdown(body)

  return <main className="content-angles-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="content-angles-blog-shell">
      <header className="content-angles-blog-hero">
        <Link to="/blog" className="content-angles-back">Back to all blogs</Link>
        <p className="content-angles-eyebrow">CONTENT STRATEGY · POSITIONING · PERFORMANCE</p>
        <div className="content-angles-meta"><span>Content Strategy</span><span>•</span><span>18 min read</span><span>•</span><span>August 24, 2026</span></div>
        <h1>There Are No Boring Topics, Only Boring Angles</h1>
        <p className="content-angles-lede">A practical framework for turning one topic into multiple useful pieces of content by starting with audience questions, tensions, objections, desires and intent.</p>
        <div className="content-angles-links"><Link to="/blog/seo-ai-search-entity-authority-2026">Read the SEO and AI Search article</Link><Link to="/blog/hormozi-meta-ads-strategy">Explore creative strategy</Link></div>
      </header>

      <section className="content-angles-visuals" aria-label="Content angle framework">
        <div className="content-angle-card"><span>01 · TOPIC</span><strong>What are we talking about?</strong><div>SEO</div></div>
        <div className="content-angle-card"><span>02 · AUDIENCE</span><strong>Who needs this?</strong><div>Founder · Marketer · Growth Team</div></div>
        <div className="content-angle-card"><span>03 · TENSION</span><strong>Why should they care?</strong><div>Question · Problem · Objection</div></div>
        <div className="content-angle-card content-angle-card-wide"><span>04 · ANGLE</span><strong>Topic → Audience → Tension → Angle → Evidence → Content</strong><div>One subject can become many useful conversations.</div></div>
      </section>

      <div className="content-angles-article" dangerouslySetInnerHTML={{ __html: renderedArticle }} />

      <footer className="content-angles-cta">
        <span>CONTENT STRATEGY</span>
        <h2>Do not search for more topics. Search for better questions.</h2>
        <p>Strong content planning starts by finding the reader tension inside a subject and choosing the perspective that gives the audience a clear reason to care.</p>
        <div><Link to="/contact">Work with Ashwin</Link><Link to="/blog">Read more insights</Link></div>
      </footer>
    </article>
  </main>
}
