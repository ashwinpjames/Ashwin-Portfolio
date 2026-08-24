import { Link } from 'react-router-dom'
import aovMarkdown from '../content/increase-average-order-value.md?raw'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '10 Practical Ways to Increase Average Order Value Without Simply Raising Prices',
  description: 'Learn how to increase average order value with bundles, upsells, cross sells, free shipping thresholds and funnel optimisation without relying on price increases.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  mainEntityOfPage: 'https://ashwinjames.com/blog/increase-average-order-value',
}

const faq = [
  ['What is Average Order Value?', 'Average Order Value is the average revenue generated per completed order. The basic calculation is total revenue divided by the number of orders.'],
  ['How do you calculate AOV?', 'AOV is calculated as total revenue divided by the number of orders.'],
  ['Is increasing AOV always good?', 'No. A higher AOV can be accompanied by lower conversion, lower revenue per visitor or lower contribution margin.'],
  ['What is the difference between upselling and cross selling?', 'Upselling encourages the customer to choose a higher value version of the product they are considering. Cross selling recommends an additional product that complements the original purchase.'],
  ['Should ecommerce businesses focus on AOV or conversion rate?', 'Neither should automatically dominate the other. The better question is which combination produces stronger revenue and contribution economics from the available traffic.'],
  ['How can I increase AOV without discounting?', 'You can test bundles, relevant upsells, contextual cross sells, larger packs, product recommendations, free shipping thresholds, product tiering and post purchase offers.'],
  ['Should I offer free shipping to increase AOV?', 'Possibly, but the threshold should be based on your economics and customer behaviour rather than a universal percentage above AOV.'],
  ['How should I measure an AOV experiment?', 'Track AOV alongside conversion rate, revenue per visitor, gross profit, contribution margin and relevant customer metrics such as repeat purchase rate and customer lifetime value.'],
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
  output = output.replace(/`([^`]+)`/g, '<code>$1</code>')
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  return output
}

function renderMarkdown(markdown) {
  const lines = markdown.trim().split('\n')
  const html = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i += 1; continue }

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

    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`)
      i += 1
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
      const items = []
      const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/
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

const visuals = [
  { label: 'AOV FORMULA', title: 'Revenue ÷ Orders', body: 'AED 50,000 ÷ 250 orders = AED 200 AOV', type: 'formula' },
  { label: 'ECONOMICS', title: 'Traffic → Conversion → Orders → AOV → Revenue → Contribution', body: 'AOV is one part of the funnel, not the whole outcome.', type: 'flow' },
  { label: 'BUNDLE', title: 'Complete the solution', body: 'Cleanser + Moisturiser + SPF', type: 'bundle' },
  { label: 'OFFER LOGIC', title: 'Upsell vs Cross Sell', body: 'Higher value version vs complementary product', type: 'split' },
  { label: 'SHIPPING', title: 'AED 30 more', body: 'Unlock free shipping at AED 200', type: 'progress' },
  { label: 'GUARDRAIL', title: 'AOV can rise while economics fall', body: 'AED 200 → AED 240 AOV while revenue per visitor falls from AED 6 to AED 5.52', type: 'compare' },
  { label: 'FRAMEWORK', title: 'Understand → Design → Place → Test → Scale', body: 'A practical operating system for AOV experimentation.', type: 'framework' },
]

function VisualCard({ item }) {
  return (
    <div className={`aov-visual aov-visual-${item.type}`}>
      <span>{item.label}</span>
      <strong>{item.title}</strong>
      <div className="aov-visual-art" aria-hidden="true">
        {item.type === 'formula' && <><b>AOV</b><i>=</i><b>REVENUE</b><i>÷</i><b>ORDERS</b></>}
        {item.type === 'flow' && <><b>TRAFFIC</b><i>→</i><b>CONVERSION</b><i>→</i><b>VALUE</b></>}
        {item.type === 'bundle' && <><b>1</b><b>2</b><b>3</b></>}
        {item.type === 'split' && <><b>UPSELL</b><i>VS</i><b>CROSS SELL</b></>}
        {item.type === 'progress' && <div className="aov-progress"><span /></div>}
        {item.type === 'compare' && <><b>AOV ↑</b><i>≠</i><b>RPV ↑</b></>}
        {item.type === 'framework' && <><b>1</b><i>→</i><b>2</b><i>→</i><b>3</b><i>→</i><b>4</b><i>→</i><b>5</b></>}
      </div>
      <p>{item.body}</p>
    </div>
  )
}

export default function IncreaseAverageOrderValueBlog() {
  const body = aovMarkdown.replace(/^# .+\n\n/, '')
  const renderedArticle = renderMarkdown(body)

  return <main className="aov-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="aov-blog-shell">
      <header className="aov-blog-hero">
        <Link to="/blog" className="aov-blog-back">Back to all blogs</Link>
        <p className="aov-blog-eyebrow">Ecommerce · CRO · Performance Marketing</p>
        <div className="aov-blog-meta"><span>Conversion &amp; Ecommerce</span><span>•</span><span>16 min read</span><span>•</span><span>August 24, 2026</span></div>
        <h1>10 Practical Ways to Increase Average Order Value Without Simply Raising Prices</h1>
        <p className="aov-blog-lede">A practical framework for increasing ecommerce order value through better offers, stronger merchandising and smarter funnel design without treating AOV as a vanity metric.</p>
        <div className="aov-blog-links"><Link to="/services/performance-growth-marketing">Performance Marketing</Link><Link to="/resources">Explore resources</Link></div>
      </header>
      <section className="aov-visual-grid" aria-label="AOV visual summary">
        {visuals.map(item => <VisualCard key={item.label} item={item} />)}
      </section>
      <div className="aov-blog-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      <footer className="aov-blog-cta">
        <span>PERFORMANCE MARKETING</span>
        <h2>Better order economics start with better funnel decisions.</h2>
        <p>If you are evaluating paid traffic, conversion and ecommerce growth together, the goal is not simply more revenue per order. It is stronger economics from the traffic you already acquire.</p>
        <div><Link to="/contact">Work with Ashwin</Link><Link to="/blog">Read more insights</Link></div>
      </footer>
    </article>
  </main>
}
