import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation.js'
import { useScroll } from '../../hooks/useScroll.js'
import { whatsappUrl } from '../../utils/contact.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScroll(24)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.toggle('menu-open', menuOpen)
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('menu-open') }
  }, [menuOpen])

  const headerClassName = ['site-header', !scrolled ? 'is-transparent' : '', scrolled ? 'is-scrolled' : ''].filter(Boolean).join(' ')
  const linkClassName = ({ isActive }) => isActive ? 'active' : undefined

  return <header className={headerClassName}>
    <div className="nav-wrap">
      <NavLink className="brand" to="/" aria-label="Ashwin James home">ASHWIN<span>.</span></NavLink>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <NavLink key={item.path} className={linkClassName} to={item.path} end={item.path === '/'}>{item.label}</NavLink>)}</nav>
      <a className="consultation-link" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((value) => !value)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg></button>
    </div>
    <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}><nav aria-label="Mobile navigation">{navigation.map((item) => <NavLink key={item.path} className={linkClassName} to={item.path} end={item.path === '/'}>{item.label}</NavLink>)}<a className="mobile-consultation" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation</a></nav></div>
  </header>
}
