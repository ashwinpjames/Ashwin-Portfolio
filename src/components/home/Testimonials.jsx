const testimonials = [
  ['MA', 'Managing Director', 'Healthcare, Dubai', 'We finally had a view of marketing that our sales team trusted. The quality of the conversations changed noticeably.'],
  ['FO', 'Founder', 'Education provider, UAE', 'Ashwin challenged our assumptions, found the leaks, and gave us a system our internal team could actually run with.'],
  ['CO', 'Commercial Director', 'Professional services, Dubai', 'The reporting is refreshingly simple: we know the numbers, the decisions and the next move. That is rare.'],
  ['GM', 'General Manager', 'Real estate, Dubai', 'The campaign became far easier to manage because we could finally see what was converting and why.'],
  ['OD', 'Operations Director', 'Recruitment, UAE', 'The process was calm, direct and genuinely helpful. We left each review knowing exactly what to improve next.'],
]

const recommendations = [
  {
    initials: 'MA',
    name: 'Muhammed Ashar',
    role: 'Direct Manager',
    date: 'February 13, 2026',
    quote: 'I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing.',
    url: 'https://www.linkedin.com/in/connectashar/'
  },
  {
    initials: 'DS',
    name: 'Deeksha S',
    role: 'Operations Manager · Reliance',
    date: 'July 13, 2026',
    quote: 'I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results.',
    url: 'https://www.linkedin.com/in/deeksha-ops-manager/'
  }
]

function Cards({ hidden = false }) {
  return <div className="testimonial-set" aria-hidden={hidden}>{testimonials.map(([initials, role, company, quote]) => <figure className="testimonial-card surface" key={`${initials}-${company}`}><div><div className="stars" aria-label="Five out of five stars">★★★★★</div><blockquote>“{quote}”</blockquote></div><figcaption><span>{initials}</span><div><strong>{role}</strong><small>{company}</small></div></figcaption></figure>)}</div>
}

export default function Testimonials() {
  return <section id="testimonials" className="home-section testimonials-section"><div className="container"><div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Client perspectives</p><h2>Results matter. So does the way we get there.</h2></div><p>A few words from growth minded teams.</p></div></div><div className="testimonial-marquee" aria-label="Client reviews"><div className="testimonial-track"><Cards /><Cards hidden /></div></div><div className="recommendations-block"><div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">LinkedIn recommendations</p><h3>What people I’ve worked with say.</h3></div><p>Read the full recommendations on LinkedIn.</p></div><div className="recommendations-grid">{recommendations.map(({ initials, name, role, date, quote, url }) => <article className="testimonial-card recommendation-card surface" key={name}><div><div className="recommendation-meta"><span>{initials}</span><div><strong>{name}</strong><small>{role} · {date}</small></div></div><blockquote>“{quote}”</blockquote></div><a className="recommendation-link" href={url} target="_blank" rel="noreferrer">LinkedIn · Read full recommendation ↗</a></article>)}</div></div></section>
}
