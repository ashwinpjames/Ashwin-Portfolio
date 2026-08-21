import { useState } from 'react'
import { whatsappUrl } from '../../utils/contact.js'

const faqs = [
  ['What budget do I need?', 'The right budget depends on your business, industry and objectives. I recommend a realistic level of spend during the consultation, never a one size fits all figure.'],
  ['Do you only work with UAE businesses?', 'I primarily work with UAE businesses, as well as companies targeting the UAE market or expanding into the region.'],
  ['Do you work on monthly retainers?', 'Yes. Most engagements are monthly retainers so campaigns, reporting and strategy can improve continuously.'],
  ['How quickly will I see results?', 'Most campaigns generate meaningful insight in the first few weeks. Sustainable improvement develops over the following months as we learn and optimise.'],
  ['Which advertising platforms do you specialize in?', 'I specialise in Meta Ads and Google Ads, with strategies built around qualified leads and ongoing optimisation.'],
  ['What industries do you work with?', 'I work with immigration, healthcare, wellness, professional services and other lead generation businesses. The approach adapts to each customer journey.'],
  ['Do you manage both Google Ads and Meta Ads?', 'Yes. I align both platforms into one lead generation system rather than managing them as separate channels.'],
  ['Can you audit my existing ad campaigns?', 'Absolutely. I review accounts, targeting, creatives, tracking, landing pages and the conversion funnel before recommending the most useful changes.'],
  ['What makes your approach different?', 'I look beyond ad metrics to the full system: targeting, offers, landing pages, tracking, CRM processes and lead quality.'],
  ['How do you measure campaign success?', 'Success is measured through qualified leads, cost per lead, conversion rate, return on ad spend and overall commercial performance, not vanity metrics.'],
  ['Will I have access to my ad accounts and campaign data?', 'Yes. You retain ownership of your ad accounts and data, with regular reporting and complete visibility into performance.'],
  ['Do you help with landing pages and conversion optimisation?', 'Yes. I review landing pages, user experience, conversion paths and tracking to improve the return from every campaign.'],
  ['What is your onboarding process?', 'We begin with a discovery consultation and audit, then build a tailored strategy, implement improvements and optimise against real data.'],
  ['How do I get started?', 'Book a free consultation and we will discuss your goals, challenges and whether we are the right fit.'],
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return <section id="faq" className="home-section faq-section"><script type="application/ld+json">{JSON.stringify(faqSchema)}</script><div className="container"><div className="section-heading reveal-home"><p className="home-eyebrow">Frequently asked questions</p><h2>A clear start to a considered partnership.</h2><p>Clear answers to the questions that matter before you invest in a growth partnership.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Ask a question on WhatsApp <span>→</span></a></div><div className="faq-grid reveal-home">{faqs.map(([question, answer], index) => <div className={`faq-item${open === index ? ' active' : ''}`} key={question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><span className="faq-icon">+</span></button><div className="faq-answer"><div><p>{answer}</p></div></div></div>)}</div></div></section>
}
