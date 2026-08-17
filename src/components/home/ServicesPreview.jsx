const services = [
  ['Google Ads', 'Capture high intent searches from people already looking for what your business offers.', 'More sales ready enquiries', '#google-ads', '⌕'],
  ['Meta Ads', 'Build demand on Facebook and Instagram with campaigns that earn attention and action.', 'A stronger flow of leads', '#meta-ads', '◉'],
  ['SEO', 'Increase visibility for the high value local searches that bring customers to your door.', 'Durable organic demand', '#seo', '⌁'],
  ['Website development', 'Create a fast, credible website that makes the value clear and turns visits into enquiries.', 'A conversion ready presence', '#website-development', '▣'],
  ['Lead generation', 'Connect media, messaging and qualification into a predictable path to new conversations.', 'A more dependable pipeline', '#lead-generation', '◎'],
  ['Landing page optimisation', 'Reduce hesitation and make every paid click work harder for your business.', 'A better conversion rate', '#landing-page-optimisation', '↗'],
]

export default function ServicesPreview() {
  return <section id="services" className="home-section services-preview"><div className="container"><div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Growth services</p><h2>The services UAE businesses ask for most.</h2></div><div><p>Start with the service that removes your biggest growth constraint. Each engagement is connected to lead quality, conversion and commercial outcomes.</p><a className="text-link" href="/services">View all services <span>→</span></a></div></div><div className="services-grid six">{services.map(([title, text, outcome, anchor, icon], index) => <a className="service-card reveal-home" href={`/services${anchor}`} key={title}><span className="service-number">0{index + 1}</span><div><span className="service-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p><strong>Outcome: {outcome} <span>→</span></strong></div><span className="service-arrow">↗</span></a>)}</div><div className="service-footer"><a className="home-button secondary" href="/services">See all services <span>→</span></a><p>Explore all 10 services, outcomes and engagement options.</p></div></div></section>
}
