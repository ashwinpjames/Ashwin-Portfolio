import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'

const shortcuts = [
  { label: 'Services', to: '/services', hint: 'Meta Ads, Google Ads, CRO & more' },
  { label: 'Case studies', to: '/case-studies', hint: 'Real results from real accounts' },
  { label: 'Resources', to: '/resources', hint: 'Free tools & checklists' },
  { label: 'Contact', to: '/contact', hint: 'Start a project or ask a question' },
]

export default function PlaceholderPage() {
  return (
    <main className="placeholder-page">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page took a wrong turn.</h1>
        <p>The page you're looking for doesn't exist, may have moved, or the link might be out of date. Here's where you probably meant to go:</p>

        <div className="placeholder-shortcuts">
          {shortcuts.map((item) => (
            <Link key={item.to} to={item.to} className="placeholder-shortcut">
              <span>{item.label}</span>
              <small>{item.hint}</small>
            </Link>
          ))}
        </div>

        <div className="placeholder-actions">
          <Link className="home-button primary" to="/">Back to homepage <span>↗</span></Link>
          <a className="home-button secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Message me directly <span>↗</span></a>
        </div>
      </div>
    </main>
  )
}
