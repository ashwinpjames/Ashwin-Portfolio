const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJn3EsesSYBK4RKmOOSOVoEI8'
const googleBusinessUrl = 'https://maps.google.com/maps?cid=10308854881025155882'

const testimonials = [
  ['MA', 'Muhammed Ashar', 'Direct Manager · February 13, 2026', 'I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing.', 'https://www.linkedin.com/in/connectashar/', 'https://media.licdn.com/dms/image/v2/D5603AQF5GgupwAL3mA/profile-displayphoto-scale_100_100/B56Z.vCjy3HYAc-/0/1785348112574?e=1788998400&v=beta&t=o8PMTbNRp5saAyrzfeUAR_q6XP1iaUKjEUvQ4r58z5E'],
  ['DS', 'Deeksha S', 'Operations Manager · Reliance · July 13, 2026', 'I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results.', 'https://www.linkedin.com/in/deeksha-ops-manager/', 'https://media.licdn.com/dms/image/v2/D4D03AQF7KrgZy4uKWQ/profile-displayphoto-scale_100_100/B4DZtv2UkkIEAc-/0/1767108071198?e=1788998400&v=beta&t=mX2vvhQjNGw-RpX86Hl0CV9-lJr4nG8ei90Lqc5JmAk'],
  ['CO', 'Commercial Director', 'Professional services, Dubai', 'The reporting is refreshingly simple: we know the numbers, the decisions and the next move. That is rare.'],
  ['GM', 'General Manager', 'Real estate, Dubai', 'The campaign became far easier to manage because we could finally see what was converting and why.'],
  ['OD', 'Operations Director', 'Recruitment, UAE', 'The process was calm, direct and genuinely helpful. We left each review knowing exactly what to improve next.'],
]

function Cards({ hidden = false }) {
  return <div className="testimonial-set" aria-hidden={hidden}>{testimonials.map(([initials, role, company, quote, url, image]) => <figure className="testimonial-card surface" key={`${initials}-${company}`}><div><div className="stars" aria-label="Five out of five stars">★★★★★</div><blockquote>“{quote}”</blockquote></div><figcaption>{image ? <a className="testimonial-profile" href={url} target="_blank" rel="noreferrer" aria-label={`View ${role} on LinkedIn`}><img src={image} alt="" loading="lazy" referrerPolicy="no-referrer" /></a> : <span>{initials}</span>}<div><strong>{role}</strong><small>{company}</small>{url && <a className="recommendation-link" href={url} target="_blank" rel="noreferrer">LinkedIn · Read full recommendation ↗</a>}</div></figcaption></figure>)}</div>
}

export default function Testimonials() {
  return <section id="testimonials" className="home-section testimonials-section"><div className="container"><div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Client perspectives</p><h2>Results matter. So does the way we get there.</h2></div><div className="testimonials-heading-actions"><p>A few words from growth minded teams.</p><div className="google-review-actions"><a className="google-business-link" href={googleBusinessUrl} target="_blank" rel="noreferrer">View Google Business ↗</a><a className="google-review-button" href={googleReviewUrl} target="_blank" rel="noreferrer" aria-label="Leave a Google review">Leave a Google review ↗</a></div></div></div></div><div className="testimonial-marquee" aria-label="Client reviews"><div className="testimonial-track"><Cards /><Cards hidden /></div></div></section>
}
