import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/free-invoice-generator-for-freelancers.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Free Invoice Generator for Freelancers: Why Proper Invoicing Matters',
  description: 'Learn why freelancers need professional invoices, what a good invoice should include and how proper invoicing can improve cash flow, client trust and business organisation.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-14',
  dateModified: '2026-09-14',
  mainEntityOfPage: 'https://ashwinjames.com/blog/free-invoice-generator-for-freelancers',
  keywords: 'free invoice generator for freelancers, freelance invoice generator, freelance marketing services, freelancer invoicing, professional invoice for freelancers, digital marketing services',
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;')
}

function inlineMarkdown(value) {
  let output = escapeHtml(value)
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  output = output.replace(/`([^`]+)`/g, '<code>$1</code>')
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
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
      html.push(`<div class="blog-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
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

export default function FreelanceInvoiceGeneratorBlog() {
  useEffect(() => {
    document.title = 'Free Invoice Generator for Freelancers: Why Proper Invoicing Matters | Ashwin James'
    const description = 'Learn why freelancers need professional invoices, what a good invoice should include and how proper invoicing can improve cash flow, client trust and business organisation.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/free-invoice-generator-for-freelancers')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const html = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))

  return <main className="blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <article className="blog-article">
      <header className="blog-hero">
        <Link to="/blog" className="blog-back">Back to all blogs</Link>
        <p className="blog-eyebrow">FREELANCING · BUSINESS · INVOICING</p>
        <div className="blog-meta"><span>Freelancing</span><span>•</span><span>9 min read</span><span>•</span><span>September 14, 2026</span></div>
        <h1>Free Invoice Generator for Freelancers: Why Proper Invoicing Matters</h1>
        <p className="blog-lede">A practical guide to professional invoicing, client trust, payment tracking and building a simple invoicing process as a freelancer.</p>
        <div className="blog-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/services/lead-generation">Lead Generation</Link><Link to="/contact">Work with Ashwin</Link></div>
      </header>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
      <footer className="blog-cta">
        <span>FREELANCE MARKETING SERVICES</span>
        <h2>Need marketing support for your business?</h2>
        <p>Explore performance marketing, paid advertising and lead generation services built around measurable business outcomes.</p>
        <div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div>
      </footer>
    </article>
  </main>
}
