import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactMethods from '../components/contact/ContactMethods.jsx'
import CalendlyBooking from '../components/contact/CalendlyBooking.jsx'
import portrait from '../../assets/ashwin-james-portrait.png'

export default function Contact() {
  return <main className="contact-page">
    <section className="contact-hero">
      <div className="contact-hero-glow" aria-hidden="true" />
      <div className="contact-hero-orbit contact-hero-orbit-one" aria-hidden="true" />
      <div className="contact-hero-orbit contact-hero-orbit-two" aria-hidden="true" />
      <div className="container contact-hero-inner">
        <div className="contact-copy">
          <p className="contact-eyebrow"><span /> Get in touch</p>
          <h1>Let’s build something <span>great together.</span></h1>
          <p className="contact-lead">Have a project in mind or want to improve your marketing performance? I’d love to hear about it. Tell me what you are trying to achieve and let’s find the clearest next move.</p>
          <div className="contact-hero-points">
            <div className="contact-hero-point"><b>01</b><strong>Performance focused</strong><small>Built around measurable growth</small></div>
            <div className="contact-hero-point"><b>02</b><strong>Clear communication</strong><small>No unnecessary complexity</small></div>
            <div className="contact-hero-point"><b>03</b><strong>UAE based</strong><small>Dubai and remote collaboration</small></div>
          </div>
          <Link className="contact-back" to="/">← Back to home</Link>
        </div>
        <div className="contact-hero-visual">
          <div className="contact-portrait-glow" aria-hidden="true" />
          <div className="contact-portrait-ring" aria-hidden="true" />
          <div className="contact-portrait-stage">
            <img src={portrait} alt="Ashwin James" className="contact-portrait" />
          </div>
          <div className="contact-hero-card">
            <span className="contact-card-label">Performance Marketing</span>
            <strong>Ashwin James</strong>
            <small>Dubai, United Arab Emirates</small>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-workspace">
      <div className="container contact-workspace-grid">
        <div className="contact-form-column">
          <ContactForm />
        </div>
        <div className="contact-methods-column">
          <div className="contact-panel-heading">
            <p>Other ways to connect</p>
            <h2>Prefer a direct conversation?</h2>
            <span>Reach out through your preferred channel and I’ll get back to you.</span>
          </div>
          <ContactMethods />
          <div className="contact-note"><strong>Free initial consultation</strong><p>Use the booking calendar below if you would rather choose a time directly.</p></div>
        </div>
      </div>
    </section>

    <CalendlyBooking />
  </main>
}
