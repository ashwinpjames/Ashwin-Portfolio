import { emailAddress, whatsappUrl } from '../../utils/contact.js'

export default function ContactMethods() {
  return <div className="contact-methods">
    <a className="contact-method-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
      <span>WhatsApp</span>
      <small>Fastest way to start a conversation</small>
    </a>
    <a className="contact-method-email" href={`mailto:${emailAddress}`}>
      <span>Email</span>
      <small>{emailAddress}</small>
    </a>
    <a className="contact-method-linkedin" href="https://www.linkedin.com/in/ashwin-james" target="_blank" rel="noreferrer">
      <span>LinkedIn</span>
      <small>Connect professionally</small>
    </a>
  </div>
}
