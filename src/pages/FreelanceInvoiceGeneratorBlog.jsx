import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/free-invoice-generator-for-freelancers.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Free Invoice Generator for Freelancers: How to Create Professional Invoices and Get Paid Faster',
  description: 'Learn why proper invoicing matters for freelancers, what a professional invoice should include, how to invoice for freelance marketing services and how to build a simple invoicing process.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-14',
  dateModified: '2026-09-14',
  mainEntityOfPage: 'https://ashwinjames.com/blog/free-invoice-generator-for-freelancers',
  keywords: 'free invoice generator for freelancers, freelance invoice generator, invoice generator for freelancers, professional invoice for freelancers, freelance invoice, how to create an invoice as a freelancer, invoice template for freelancers, freelance marketing services, digital marketing services',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['What is a freelance invoice?', 'A freelance invoice is a formal document a self employed professional sends to a client to request payment for completed work or services.'],
    ['What should a freelancer include on an invoice?', 'Include your details, the client details, a unique invoice number, invoice and due dates, service descriptions, pricing, applicable taxes, total amount due and payment instructions.'],
    ['Can freelancers create invoices for free?', 'Yes. A free invoice generator for freelancers can help independent professionals create invoices without paying for a full accounting platform.'],
    ['How do I create an invoice for freelance marketing services?', 'List each service clearly and connect it to the agreed billing model, such as Meta Ads management, Google Ads management, SEO or consulting with the relevant billing period, quantity and rate.'],
    ['Can I use an invoice generator without accounting software?', 'Yes. An invoice generator can handle invoice creation on its own, while full accounting software becomes more relevant for broader bookkeeping and financial management.'],
    ['What payment terms should freelancers put on an invoice?', 'Common terms include due on receipt, Net 7, Net 15 and Net 30. The terms should match the client agreement and be stated clearly on the invoice.'],
  ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Create an Invoice as a Freelancer',
  description: 'A simple process for creating a professional freelance invoice.',
  step: [
    'Add your business details',
    "Add your client's details",
    'Assign a unique invoice number',
    'Add the invoice and due dates',
    'Add the services and billing details',
    'Add applicable tax or discounts',
    'Check the total',
    'Download the invoice',
    'Send the invoice promptly',
  ].map((text, index) => ({ '@type': 'HowToStep', position: index + 1, text })),
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
    document.title = 'Free Invoice Generator for Freelancers: How to Create Professional Invoices | Ashwin James'
    const description = 'Learn why proper invoicing matters for freelancers, what a professional invoice should include, how to invoice for freelance marketing services and how to build a simple invoicing process.'
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
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
    <article className="blog-article">
      <header className="blog-hero">
        <Link to="/blog" className="blog-back">Back to all blogs</Link>
        <p className="blog-eyebrow">FREELANCING · BUSINESS · INVOICING</p>
        <div className="blog-meta"><span>Freelancing</span><span>•</span><span>9 min read</span><span>•</span><span>September 14, 2026</span></div>
        <h1>Free Invoice Generator for Freelancers: How to Create Professional Invoices and Get Paid Faster</h1>
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
