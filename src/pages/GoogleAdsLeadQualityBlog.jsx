import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/google-ads-lead-quality.md?raw'

const faq = [
  ['What is Google Ads lead quality?', 'Google Ads lead quality refers to how useful the leads generated from advertising are to the business. A high quality lead is not simply a completed form. It is an enquiry that fits the business target criteria and has a realistic chance of progressing toward an opportunity or customer.'],
  ['How do I optimise Google Ads for qualified leads?', 'Define what a qualified lead means, improve search intent filtering, use ad messaging to pre qualify clicks, align landing pages with the query, design forms around useful qualification data and feed appropriate downstream outcomes back into Google Ads.'],
  ['Is a higher CPL acceptable if lead quality improves?', 'Yes. A higher CPL can be acceptable when the additional cost produces materially better qualified lead, opportunity or customer outcomes. Judge acquisition efficiency at the business outcome level rather than treating low CPL as the objective.'],
  ['Should every form submission be counted as a primary conversion?', 'Not necessarily. A form submission may be an appropriate primary conversion when it represents the business goal. If the business can distinguish stronger downstream outcomes, it may be more useful to optimise around qualified or converted lead stages where the measurement setup supports it.'],
  ['How can CRM data improve Google Ads optimisation?', 'A CRM can record qualification, opportunity and customer outcomes that do not happen on the initial website visit. Connecting appropriate offline outcomes with Google Ads can provide a deeper feedback signal than measuring the initial form submission alone.'],
  ['What should I do if I have many leads but poor sales results?', 'First confirm that lead classification is consistent. Then examine search terms, ad messaging, landing page intent, form qualification and the sales follow up process. The problem may sit before the lead, after the lead or across both.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Optimise Google Ads for Qualified Leads Instead of More Leads',
  description: 'Learn how to improve Google Ads lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/google-ads-lead-quality',
  keywords: 'Google Ads lead quality, qualified leads, conversion optimisation',
}

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
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, (_, text, href) => `<a href="${href}">${text}</a>`)
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

    if (!line.trim()) {
      i += 1
      continue
    }

    const table = line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1])
    if (table) {
      const parseRow = row => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => inlineMarkdown(cell.trim()))
      const headers = parseRow(lines[i])
      i += 2
      const rows = []

      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        rows.push(parseRow(lines[i]))
        i += 1
      }

      html.push(`<div class="pms-table-wrap"><table><thead><tr>${headers.map(cell => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
      continue
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      const text = inlineMarkdown(heading[2])
      const id = heading[2].toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/\s+/g, '-')
      html.push(`<h${level} id="${id}">${text}</h${level}>`)
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
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,3}\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))
    ) {
      paragraph.push(lines[i])
      i += 1
    }

    html.push(`<p>${paragraph.map(inlineMarkdown).join('<br />')}</p>`)
  }

  return html.join('')
}

function QualityFlow() {
  const stages = [
    ['01', 'Intent', 'Find the right demand'],
    ['02', 'Message', 'Pre qualify the click'],
    ['03', 'Page', 'Continue the promise'],
    ['04', 'Lead', 'Capture useful intent'],
    ['05', 'Outcome', 'Optimise for business value'],
  ]

  return (
    <section className="pms-funnel" aria-label="Google Ads lead quality framework">
      <div className="pms-section-label">THE LEAD QUALITY FRAMEWORK</div>
      <h2>Optimise the path from search intent to business outcome.</h2>
      <div className="pms-funnel-flow">
        {stages.map(([number, title, detail], index) => (
          <div className="pms-funnel-stage" key={title}>
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{detail}</small>
            {index < stages.length - 1 && <i aria-hidden="true">→</i>}
          </div>
        ))}
      </div>
    </section>
  )
}

function QualityCards() {
  const cards = [
    ['TRAFFIC', 'Right intent', 'Bring in searches that have a realistic relationship with the offer.'],
    ['QUALIFICATION', 'Right lead', 'Use messaging, pages and forms to filter for genuine fit.'],
    ['MEASUREMENT', 'Right signal', 'Connect qualified and converted outcomes to campaign optimisation.'],
  ]

  return (
    <section className="pms-metric-panel" aria-label="Google Ads lead quality principles">
      <div className="pms-section-label">THREE PRACTICAL PRINCIPLES</div>
      <h2>Better lead quality starts before the form submission.</h2>
      <div className="pms-metric-grid">
        {cards.map(([label, title, text]) => (
          <div className="pms-metric-card" key={label}>
            <b>{label}</b>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="pms-faq" aria-labelledby="google-ads-lead-quality-faq-heading">
      <div className="pms-section-label">FAQ</div>
      <h2 id="google-ads-lead-quality-faq-heading">Frequently asked questions</h2>
      <div className="pms-faq-list">
        {faq.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <div><p>{answer}</p></div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default function GoogleAdsLeadQualityBlog() {
  useEffect(() => {
    document.title = 'How to Optimise Google Ads for Qualified Leads Instead of More Leads | Ashwin James'
    const description = 'Learn how to improve Google Ads lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/google-ads-lead-quality')

    return () => {
      document.title = 'Performance Marketing Specialist in UAE'
    }
  }, [])

  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, ''))

  return (
    <main className="pms-blog-page">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <article className="pms-blog-shell">
        <header className="pms-hero">
          <Link to="/blog" className="pms-back">Back to all blogs</Link>
          <p className="pms-eyebrow">GOOGLE ADS · LEAD QUALITY · CONVERSION OPTIMISATION</p>
          <div className="pms-meta"><span>Google Ads</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div>
          <h1>How to Optimise Google Ads for Qualified Leads Instead of More Leads</h1>
          <p className="pms-lede">A practical framework for improving lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes.</p>
          <div className="pms-links">
            <Link to="/services/google-ads">Google Ads</Link>
            <Link to="/blog/google-ads-clicks-not-turning-into-leads">Why Google Ads Clicks Are Not Turning Into Leads</Link>
            <Link to="/blog/google-ads-keyword-intent">Google Ads Keyword Intent</Link>
            <Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link>
            <Link to="/resources/lead-quality-framework">Lead Quality Framework</Link>
          </div>
        </header>

        <QualityFlow />

        <div className="pms-article-grid">
          <aside className="pms-toc">
            <span>ON THIS PAGE</span>
            <a href="#the-real-problem-with-optimising-for-lead-volume">Lead volume</a>
            <a href="#what-counts-as-a-qualified-lead">Qualified lead</a>
            <a href="#1-start-with-search-intent-not-keyword-volume">Search intent</a>
            <a href="#2-make-the-ad-pre-qualify-the-click">Ad qualification</a>
            <a href="#3-match-the-landing-page-to-the-promise">Landing page</a>
            <a href="#5-separate-primary-conversion-signals-from-diagnostic-events">Conversion signals</a>
            <a href="#6-feed-qualified-lead-data-back-into-google-ads">Offline outcomes</a>
            <a href="#11-measure-cost-per-qualified-lead-not-only-cpl">Measurement</a>
            <a href="#conversion-optimisation-should-follow-the-bottleneck">Optimisation</a>
            <a href="#what-to-do-this-week">What to do this week</a>
            <a href="#conclusion">Conclusion</a>
          </aside>
          <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
        </div>

        <QualityCards />
        <FAQSection />

        <footer className="pms-cta">
          <span>GOOGLE ADS · LEAD QUALITY</span>
          <h2>Stop optimising for leads that sales cannot use.</h2>
          <p>Build a measurement and optimisation system that connects paid search with qualification, sales and business outcomes.</p>
          <div>
            <Link to="/services/google-ads">Explore Google Ads</Link>
            <Link to="/contact">Start a Conversation</Link>
          </div>
        </footer>
      </article>
    </main>
  )
}
