import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactMethods from '../components/contact/ContactMethods.jsx'

export default function Contact() {
  return <main className="contact-page"><section className="contact-hero"><div className="contact-hero-glow" aria-hidden="true"/><div className="container"><p className="contact-eyebrow">Let’s work together</p><h1>Bring me the growth problem.<br/><span>Let’s find the next move.</span></h1><p className="contact-lead">If you are trying to improve lead quality, acquisition, conversion or the systems behind your marketing, start with the constraint. I’ll help you work out what deserves attention first.</p><div className="contact-layout"><div><ContactMethods/><div className="contact-note"><strong>Based in the UAE</strong><p>Working with ambitious businesses in Dubai and across the UAE, with remote collaboration available.</p></div></div><ContactForm/></div><Link className="contact-back" to="/">← Back to home</Link></div></section></main>
}
