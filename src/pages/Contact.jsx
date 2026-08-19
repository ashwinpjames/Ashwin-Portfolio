import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactMethods from '../components/contact/ContactMethods.jsx'

export default function Contact() {
  return <main className="contact-page"><section className="contact-hero"><div className="contact-hero-glow" aria-hidden="true"/><div className="container contact-hero-inner"><div className="contact-copy"><p className="contact-eyebrow">Let’s work together</p><h1>Bring me the growth problem.<br/><span>Let’s find the next move.</span></h1><p className="contact-lead">Tell me what you are trying to improve. The quickest way to start is the short form, and you can also reach me directly on WhatsApp or email.</p><div className="contact-methods-wrap"><ContactMethods/><div className="contact-note"><strong>Based in the UAE</strong><p>Working with ambitious businesses in Dubai and across the UAE, with remote collaboration available.</p></div></div><Link className="contact-back" to="/">← Back to home</Link></div><ContactForm/></div></section></main>
}
