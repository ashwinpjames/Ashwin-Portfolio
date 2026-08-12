const testimonials = [
  { quote: 'Clear thinking, better structure and a much stronger focus on what actually moves the business.', name: 'Client feedback', role: 'Growth project' },
  { quote: 'The biggest difference was having marketing, tracking and follow up considered as one system.', name: 'Client feedback', role: 'Lead generation project' },
  { quote: 'The work brought much more clarity to where the budget was going and what we should optimise next.', name: 'Client feedback', role: 'Performance marketing project' },
]

export default function Testimonials() {
  return (
    <section className="home-section testimonials-section">
      <div className="container">
        <div className="section-heading reveal-home">
          <p className="home-eyebrow">Working together</p>
          <h2>Clarity is part of the deliverable.</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <blockquote className="testimonial-card reveal-home" key={index}>
              <p>“{item.quote}”</p>
              <footer><strong>{item.name}</strong><span>{item.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
