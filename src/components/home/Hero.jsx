import { whatsappUrl } from '../../utils/contact.js'

export default function Hero() {
  return (
    <section className="home-hero" id="top">
      <div className="home-hero-grid" aria-hidden="true" />
      <div className="container home-hero-content">
        <div className="rating-pill reveal-home">
          <span aria-label="Rated 4.8 out of 5">★★★★★</span>
          <strong>4.8/5</strong>
          <small>client rating</small>
        </div>
        <p className="home-eyebrow reveal-home">Performance Marketing · Dubai · UAE</p>
        <h1 className="reveal-home">Building growth systems that turn marketing spend into qualified demand.</h1>
        <p className="home-hero-copy reveal-home">Performance marketing, conversion optimisation, analytics and CRM systems designed around measurable business outcomes.</p>
        <div className="home-actions reveal-home">
          <a className="home-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a>
          <a className="home-button secondary" href="/case-studies">View case studies</a>
        </div>
        <p className="hero-note reveal-home">For businesses that care about qualified demand, not vanity metrics.</p>
      </div>
    </section>
  )
}
