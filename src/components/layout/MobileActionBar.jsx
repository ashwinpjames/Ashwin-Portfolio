import { emailAddress, whatsappUrl } from '../../utils/contact.js'

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick contact actions">
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>
      <a href={`mailto:${emailAddress}`} aria-label="Send email">Email</a>
    </div>
  )
}
