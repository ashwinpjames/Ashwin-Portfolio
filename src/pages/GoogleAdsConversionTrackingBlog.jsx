import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import articleMarkdown from '../content/google-ads-conversion-tracking.md?raw'

const faq = [
  ['What is Google Ads conversion tracking?', 'Google Ads conversion tracking measures valuable actions that happen after people interact with Google Ads, such as purchases, leads, calls or other defined business outcomes. It helps advertisers understand which campaigns, ads and keywords contribute to those actions.'],
  ['Do I need both GA4 and Google Ads conversion tracking?', 'Not necessarily for every setup. Google Ads can measure conversions directly, while GA4 provides broader analytics across traffic sources and user behaviour. Many businesses use both because they answer different measurement questions.'],
  ['Is Google Tag Manager the same as Google Ads conversion tracking?', 'No. Google Tag Manager is a tag management and deployment system. Google Ads conversion tracking is the measurement system used to record defined conversions for advertising. GTM can be used to deploy Google Ads conversion tags.'],
  ['Should form submissions be primary conversions?', 'They can be, if a completed form is a meaningful business outcome and the submission is reliable. If the business has a strong qualification process, it can also be useful to feed qualified lead or later customer outcomes back into the measurement system.'],
  ['What is the Conversion Linker in Google Tag Manager?', 'The Conversion Linker helps preserve ad click information so conversion tags can associate a later action with the advertising interaction that brought the visitor to the site. Google generally recommends configuring it across relevant landing pages when the implementation requires it.'],
  ['What should I do if Google Ads conversions suddenly drop?', 'Start with measurement rather than campaign changes. Check whether the website event still occurs, whether GTM triggers and tags fire, whether the conversion reaches Google Ads, whether redirects or consent changes affect measurement, and whether the CRM or backend still shows the expected business activity.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Ads Conversion Tracking: What Businesses Need to Measure',
  description: 'A practical guide to Google Ads conversion tracking, including what to measure, how GA4 and Google Tag Manager fit together, and how to diagnose tracking problems.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  mainEntityOfPage: 'https://ashwinjames.com/blog/google-ads-conversion-tracking',
  keywords: 'Google Ads conversion tracking, conversion tracking, GA4, Google Tag Manager',
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
    if (!line.trim()) { i += 1; continue }

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

function TrackingFlow() {
  const stages = [
    ['01', 'Ad interaction', 'Click · search · source'],
    ['02', 'Website action', 'Event · form · purchase'],
    ['03', 'Conversion', 'Google Ads measurement'],
    ['04', 'Qualification', 'CRM · opportunity · customer'],
    ['05', 'Business value', 'Revenue · CAC · value'],
  ]
  return <section className="pms-funnel" aria-label="Google Ads conversion tracking flow">
    <div className="pms-section-label">THE MEASUREMENT CHAIN</div>
    <h2>Track the journey, not just the conversion counter.</h2>
    <div className="pms-funnel-flow">
      {stages.map(([number, title, detail], index) => <div className="pms-funnel-stage" key={title}>
        <span>{number}</span>
        <strong>{title}</strong>
        <small>{detail}</small>
        {index < stages.length - 1 && <i aria-hidden="true">→</i>}
      </div>)}
    </div>
  </section>
}

function MeasurementCards() {
  const metrics = [
    ['CONVERSION', 'Business action', 'The event you define as valuable, such as a lead, booking or purchase.'],
    ['QUALITY', 'Lead quality', 'Shows whether tracked leads are becoming qualified opportunities.'],
    ['CUSTOMER', 'Commercial outcome', 'Connects advertising activity with customers instead of stopping at leads.'],
    ['VALUE', 'Economic result', 'Revenue, CAC, ROAS or customer value puts acquisition into business context.'],
  ]
  return <section className="pms-metric-panel" aria-label="Conversion tracking measurement layers">
    <div className="pms-section-label">WHAT TO MEASURE</div>
    <h2>The event is only the beginning.</h2>
    <div className="pms-metric-grid">
      {metrics.map(([metric, label, text]) => <div className="pms-metric-card" key={metric}>
        <b>{metric}</b>
        <strong>{label}</strong>
        <p>{text}</p>
      </div>)}
    </div>
  </section>
}

function ImplementationModel() {
  const steps = [
    ['01', 'Define the outcome', 'Decide what the business actually considers a successful acquisition.'],
    ['02', 'Map the event', 'Identify where the action occurs and what event should represent it.'],
    ['03', 'Implement the tags', 'Use the Google tag, Google Tag Manager and Conversion Linker where appropriate.'],
    ['04', 'Test the signal', 'Confirm the tag fires once, under the right conditions, with the expected data.'],
    ['05', 'Connect quality', 'Bring CRM qualification and customer outcomes into the measurement model.'],
    ['06', 'Optimise carefully', 'Use primary conversions for optimisation and secondary events for diagnosis.'],
  ]
  return <section className="pms-learning">
    <div className="pms-section-label">THE IMPLEMENTATION MODEL</div>
    <h2>Build measurement in the same order the business makes decisions.</h2>
    <div className="pms-learning-track">
      {steps.map(([number, title, body]) => <div className="pms-learning-step" key={number}>
        <span>{number}</span>
        <div><strong>{title}</strong><p>{body}</p></div>
      </div>)}
    </div>
  </section>
}

function FAQSection() {
  return <section className="pms-faq" aria-labelledby="conversion-tracking-faq-heading">
    <div className="pms-section-label">FAQ</div>
    <h2 id="conversion-tracking-faq-heading">Frequently asked questions</h2>
    <div className="pms-faq-list">
      {faq.map(([question, answer]) => <details key={question}>
        <summary>{question}<span aria-hidden="true">+</span></summary>
        <div><p>{answer}</p></div>
      </details>)}
    </div>
  </section>
}

export default function GoogleAdsConversionTrackingBlog() {
  useEffect(() => {
    document.title = 'Google Ads Conversion Tracking: What Businesses Need to Measure | Ashwin James'
    const description = 'Learn what Google Ads conversion tracking should measure, how GA4 and Google Tag Manager fit together, and how to diagnose tracking problems.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://ashwinjames.com/blog/google-ads-conversion-tracking')
    return () => { document.title = 'Performance Marketing Specialist in UAE' }
  }, [])

  const renderedArticle = renderMarkdown(articleMarkdown.replace(/^# .+\n\n/, '').replace(/\n## FAQ[\s\S]*$/, ''))

  return <main className="pms-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="pms-blog-shell">
      <header className="pms-hero">
        <Link to="/blog" className="pms-back">Back to all blogs</Link>
        <p className="pms-eyebrow">GOOGLE ADS · CONVERSION TRACKING · ANALYTICS</p>
        <div className="pms-meta"><span>Google Ads</span><span>•</span><span>14 min read</span><span>•</span><span>September 15, 2026</span></div>
        <h1>Google Ads Conversion Tracking: What Businesses Need to Measure</h1>
        <p className="pms-lede">A practical guide to measuring the actions that matter, connecting Google Ads with GA4 and Google Tag Manager, and turning conversion data into better acquisition decisions.</p>
        <div className="pms-links">
          <Link to="/services/performance-marketing">Performance Marketing</Link>
          <Link to="/blog/performance-marketing-metrics">Performance Marketing Metrics</Link>
          <Link to="/resources/lead-quality-framework">Lead Quality Framework</Link>
        </div>
      </header>
      <TrackingFlow />
      <div className="pms-article-grid">
        <aside className="pms-toc">
          <span>ON THIS PAGE</span>
          <a href="#what-google-ads-conversion-tracking-actually-measures">What it measures</a>
          <a href="#the-conversion-actions-businesses-should-usually-measure">Conversion actions</a>
          <a href="#google-tag-manager-ga4-and-google-ads-what-each-tool-does">GTM, GA4 and Google Ads</a>
          <a href="#how-google-ads-conversion-tracking-works-technically">How it works</a>
          <a href="#google-tag-manager-implementation-the-practical-sequence">GTM implementation</a>
          <a href="#lead-quality-is-the-missing-layer-in-many-tracking-setups">Lead quality</a>
          <a href="#common-google-ads-conversion-tracking-mistakes">Common mistakes</a>
          <a href="#the-measurement-model-i-would-use-for-a-lead-generation-business">Measurement model</a>
          <a href="#conclusion">Conclusion</a>
        </aside>
        <div className="pms-content" dangerouslySetInnerHTML={{ __html: renderedArticle }} />
      </div>
      <MeasurementCards />
      <ImplementationModel />
      <FAQSection />
      <footer className="pms-cta">
        <span>GOOGLE ADS CONVERSION TRACKING</span>
        <h2>Measure the business outcome, not just the event.</h2>
        <p>Better tracking starts with a clear definition of value and ends with data that can explain which acquisition activity produces customers.</p>
        <div><Link to="/services/performance-marketing">Explore Performance Marketing</Link><Link to="/contact">Start a Conversation</Link></div>
      </footer>
    </article>
  </main>
}
