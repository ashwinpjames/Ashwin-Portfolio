const testimonials = [
  ['MA', 'Managing Director', 'Healthcare, Dubai', 'We finally had a view of marketing that our sales team trusted. The quality of the conversations changed noticeably.'],
  ['FO', 'Founder', 'Education provider, UAE', 'Ashwin challenged our assumptions, found the leaks, and gave us a system our internal team could actually run with.'],
  ['CO', 'Commercial Director', 'Professional services, Dubai', 'The reporting is refreshingly simple: we know the numbers, the decisions and the next move. That is rare.'],
  ['GM', 'General Manager', 'Real estate, Dubai', 'The campaign became far easier to manage because we could finally see what was converting and why.'],
  ['OD', 'Operations Director', 'Recruitment, UAE', 'The process was calm, direct and genuinely helpful. We left each review knowing exactly what to improve next.'],
]

function Cards() {
  return <div className="testimonial-set">{testimonials.map(([initials, role, company, quote]) => <figure className="testimonial-card surface" key={`${initials}-${company}`}><div><div className="stars" aria-label="Five out of five stars">★★★★★</div><blockquote>“{quote}”</blockquote></div><figcaption><span>{initials}</span><div><strong>{role}</strong><small>{company}</small></div></figcaption></figure>)}</div>
}

export default function Testimonials() {
  return <section id="testimonials" className="home-section testimonials-section"><div className="container"><div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Client perspectives</p><h2>Results matter. So does the way we get there.</h2></div><p>A few words from growth minded teams.</p></div></div><div className="testimonial-marquee" aria-label="Client reviews"><div className="testimonial-track"><Cards /><div aria-hidden="true"><Cards /></div></div></div></section>
}
