import { useEffect, useState } from 'react'
import { emailAddress, whatsappUrl } from '../../utils/contact.js'

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => setVisible(window.innerWidth <= 767 && window.scrollY > Math.max(90, window.innerHeight * 0.12))
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  return <div className={`mobile-action-bar${visible ? ' is-visible' : ''}`} aria-hidden={!visible}><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a><a href={`mailto:${emailAddress}`} aria-label="Send email">Email</a></div>
}
