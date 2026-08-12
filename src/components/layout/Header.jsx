import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation.js'

const whatsappUrl = 'https://wa.me/97105227704142?text=Hello%20Ashwin%2C%20I%20would%20like%20to%20discuss%20generating%20more%20qualified%20leads%20for%20my%20business.'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <NavLink className="brand" to="/" aria-label="Ashwin James home">
          ASHWIN<span>.</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="consultation-link" href={whatsappUrl} target="_blank" rel="noreferrer">
          Get a free consultation <span>↗</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <a className="mobile-consultation" href={whatsappUrl} target="_blank" rel="noreferrer">
            Get a free consultation
          </a>
        </nav>
      )}
    </header>
  )
}
