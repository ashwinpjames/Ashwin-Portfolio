import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../../config/emailjs.js'

const initial = { name: '', email: '', phone: '', company: '', service: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))

  const submit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, form, {
        publicKey: emailjsConfig.publicKey,
      })
      setStatus('success')
      setForm(initial)
    } catch (error) {
      console.error('EmailJS enquiry failed:', error)
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-heading">
        <p>Quick enquiry</p>
        <h2>Tell me what you need.</h2>
        <span>Usually takes less than a minute.</span>
      </div>

      <div className="contact-form-grid">
        <label>
          <span>Name</span>
          <input required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="you@company.com" autoComplete="email" />
        </label>
      </div>

      <div className="contact-form-grid">
        <label>
          <span>Phone / WhatsApp</span>
          <input required type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="+971 50 000 0000" autoComplete="tel" />
        </label>
        <label>
          <span>Company</span>
          <input value={form.company} onChange={(event) => update('company', event.target.value)} placeholder="Company name" autoComplete="organization" />
        </label>
      </div>

      <label>
        <span>What do you need?</span>
        <select required value={form.service} onChange={(event) => update('service', event.target.value)}>
          <option value="">Select a service</option>
          <option>Meta Ads</option>
          <option>Google Ads</option>
          <option>Lead generation</option>
          <option>Landing page / CRO</option>
          <option>Analytics & tracking</option>
          <option>Website development</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label>
        <span>Briefly tell me about the goal</span>
        <textarea rows="4" value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="What are you trying to improve?" />
      </label>

      <button type="submit" className="contact-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending enquiry…' : 'Send enquiry'} <span>↗</span>
      </button>

      <div aria-live="polite">
        {status === 'success' && <p className="contact-form-note">Thanks. Your enquiry has been sent successfully. I’ll get back to you soon.</p>}
        {status === 'error' && <p className="contact-form-note contact-form-note-error">Something went wrong while sending the enquiry. Please try again or contact me directly by WhatsApp or email.</p>}
      </div>
      <p className="contact-privacy">Your details are only used to respond to this enquiry.</p>
    </form>
  )
}
