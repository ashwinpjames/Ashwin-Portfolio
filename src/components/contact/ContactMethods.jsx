import { emailAddress, whatsappUrl } from '../../utils/contact.js'

export default function ContactMethods() {
  return <div className="contact-methods"><a href={whatsappUrl} target="_blank" rel="noreferrer"><span>WhatsApp</span><small>Fastest way to start a conversation</small><b>↗</b></a><a href={`mailto:${emailAddress}`}><span>Email</span><small>{emailAddress}</small><b>↗</b></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span>LinkedIn</span><small>Connect professionally</small><b>↗</b></a></div>
}
