import { Link } from 'react-router-dom'
import './related-links.css'

export default function RelatedLinks({ eyebrow = 'Continue Exploring', title = 'Related work and services', links = [] }) {
  if (!links.length) return null

  return (
    <section className="related-links" aria-label={title}>
      <div className="container related-links-inner">
        <div className="related-links-heading">
          <p className="services-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <nav className="related-links-grid" aria-label={title}>
          {links.map(({ to, label, description }) => (
            <Link className="related-link-card" to={to} key={to}>
              <span className="related-link-arrow">↗</span>
              <strong>{label}</strong>
              {description && <span>{description}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
