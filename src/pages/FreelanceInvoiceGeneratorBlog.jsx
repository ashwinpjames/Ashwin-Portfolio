import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/free-invoice-generator-for-freelancers.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Free Invoice Generator for Freelancers: Create Professional Invoices',
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
  step: ['Add your business details', "Add your client's details", 'Assign a unique invoice number', 'Add the invoice and due dates', 'Add the services and billing details', 'Add applicable tax or discounts', 'Check the total', 'Download the invoice', 'Send the invoice promptly'].map((text, index) => ({ '@type': 'HowToStep', position: index + 1, text })),
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

function normalizeArticleMarkdown(markdown) {
  return markdown.replace(/<div style="text-align:center; margin: (?:32|36)px 0;">\s*<a href="([^"]+)"[^>]*>\s*([^<]+?)\s*<\/a>\s*<\/div>/gs, (_, href, label) => `\n[CTA_BUTTON::${label.trim()}::${href}]\n`)
}

function renderMarkdown(markdown) {
  const lines = markdown.trim().split('\n')
  const html = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i += 1; continue }

    const cta = line.match(/^\[CTA_BUTTON::(.+)::([^\]]+)\]$/)
    if (cta) {
      const label = inlineMarkdown(cta[1])
      const href = escapeHtml(cta[2])
      html.push(`<div style="text-align:center; margin:32px 0;"><a href="${href}" target="_blank" rel="noreferrer" style="display:inline-flex; align-items:center; justify-content:center; padding:14px 32px; background:linear-gradient(90deg,#5b6cff,#8a5cff); color:#ffffff; font-weight:700; text-decoration:none; border-radius:999px; font-family:inherit;">${label}</a></div>`)
      i += 1
      continue
    }

    const table = line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1])
    if (table) {
      const parseRow = row => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => inlineMarkdown(cell.trim()))
      const headers = parseRow(lines[i])
      i += 2
      const rows = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) { rows.push(parseRow(lines[i])); i += 1 }
      html.push(`<div class="freelance-consultant-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
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
    while (i < lines.length && lines[i].trim() && !/^\[CTA_BUTTON::/.test(lines[i]) && !/^#{1,3}\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) { paragraph.push(lines[i]); i += 1 }
    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }
  return html.join('')
}

function InvoiceSystemGraphic() {
  const stages = [['01', 'Create', 'Business · Client'], ['02', 'Describe', 'Services · Quantity'], ['03', 'Calculate', 'Rate · Tax · Total'], ['04', 'Send', 'PDF · Payment terms'], ['05', 'Track', 'Due · Paid · Records']]
  return <div className="freelance-system" aria-label="Freelance invoicing workflow infographic">
    <div className="freelance-system-head"><span>THE INVOICING SYSTEM</span><strong>Turn completed work into a clear payment process</strong></div>
    <div className="freelance-system-flow">{stages.map(([number, title, detail], index) => <div className="freelance-system-stage" key={title}><span>{number}</span><strong>{title}</strong><small>{detail}</small>{index < stages.length - 1 && <i>→</i>}</div>)}</div>
  </div>
}

function InvoiceVisual() {
  return <div className="freelance-consultant-visual" aria-label="Professional invoice comparison">
    <div><span>THE REAL VALUE</span><strong>Less friction. Faster payment.</strong></div>
    <div className="freelance-consultant-compare"><section><small>UNCLEAR INVOICE</small><b>More questions</b><p>Vague services, missing dates and unclear payment terms create unnecessary back and forth.</p></section><section><small>PROFESSIONAL INVOICE</small><b>Clear next step</b><p>Specific services, accurate totals and visible due dates make the payment request easy to process.</p></section></div>
  </div>
}

function InvoiceMetricsGraphic() {
  const metrics = [['ID', 'Invoice number'], ['DUE', 'Payment deadline'], ['TOTAL', 'Amount due'], ['STATUS', 'Paid or outstanding']]
  return <div className="freelance-measurement" aria-label="Invoice essentials infographic"><span>MAKE EVERY INVOICE CLEAR</span><strong>Give the client the information they need</strong><div>{metrics.map(([metric, label]) => <div key={metric}><b>{metric}</b><small>{label}</small></div>)}</div></div>
}

export default function FreelanceInvoiceGeneratorBlog() {
  useEffect(() => {
    document.title = 'Free Invoice Generator for Freelancers: Create Professional Invoices | Ashwin James'
    const description = 'Learn why proper invoicing matters for freelancers, what a professional invoice should include, how to invoice for freelance marketing services and how to build a simple invoicing process.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/free-invoice-generator-for-freelancers')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const html = renderMarkdown(normalizeArticleMarkdown(articleMarkdown.replace(/^# .+\n\n/, '')))

  return <main className="freelance-consultant-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
    <article className="freelance-consultant-blog-shell">
      <header className="freelance-consultant-hero">
        <Link to="/blog" className="freelance-consultant-back">Back to all blogs</Link>
        <p className="freelance-consultant-eyebrow">FREELANCING · BUSINESS · INVOICING</p>
        <div className="freelance-consultant-meta"><span>Freelancing</span><span>•</span><span>9 min read</span><span>•</span><span>September 14, 2026</span></div>
        <h1>Free Invoice Generator for Freelancers: Create Professional Invoices</h1>
        <p className="freelance-consultant-lede">A practical guide to professional invoicing, client trust, payment tracking and building a simple invoicing process as a freelancer.</p>
        <div className="freelance-consultant-links"><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/services/lead-generation">Lead Generation</Link><Link to="/contact">Work with Ashwin</Link></div>
      </header>
      <InvoiceSystemGraphic />
      <div className="freelance-consultant-content"><InvoiceVisual /><div dangerouslySetInnerHTML={{ __html: html }} /><InvoiceMetricsGraphic /></div>
      <footer className="freelance-consultant-cta"><span>FREE INVOICE GENERATOR FOR FREELANCERS</span><h2>Ready to create your next invoice?</h2><p>Use InvoiceFlow to create a professional invoice for your freelance work without rebuilding the document from scratch.</p><div><a href="https://invoiceflow.myportfoliowebsite.com/" target="_blank" rel="noreferrer">Try InvoiceFlow</a><Link to="/contact">Work with Ashwin</Link></div></footer>
    </article>
  </main>
}
