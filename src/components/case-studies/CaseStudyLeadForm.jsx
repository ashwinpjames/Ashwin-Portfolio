import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../../config/emailjs.js'

const initial = { name: '', email: '', phone: '', company: '', message: '' }

export default function CaseStudyLeadForm({ eyebrow = 'Get the next step', title = 'Want a deeper look at your marketing?', description = 'Tell me what you want to improve and I’ll point you toward the most useful next step.', buttonLabel = 'Request a consultation' }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))

  const submit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, { ...form, service: 'Case study enquiry' }, { publicKey: emailjsConfig.publicKey })
      setStatus('success')
      setForm(initial)
    } catch (error) {
      console.error('Case study enquiry failed:', error)
      setStatus('error')
    }
  }

  return (
    <section className="case-study-lead-form">
      <div className="case-study-lead-copy">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <form onSubmit={submit}>
        <div className="case-study-form-grid">
          <label><span>Name</span><input required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" autoComplete="name" /></label>
          <label><span>Email</span><input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="you@company.com" autoComplete="email" /></label>
          <label><span>Phone / WhatsApp</span><input required type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="+971 50 000 0000" autoComplete="tel" /></label>
          <label><span>Company</span><input value={form.company} onChange={(event) => update('company', event.target.value)} placeholder="Company name" autoComplete="organization" /></label>
        </div>
        <label><span>What would you like help with?</span><textarea required rows="3" value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="Tell me what you want to audit, improve or understand." /></label>
        <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry…' : buttonLabel} <span>↗</span></button>
        {status === 'success' && <p className="case-study-form-note">Thanks. Your enquiry has been sent successfully.</p>}
        {status === 'error' && <p className="case-study-form-note error">Something went wrong. Please try again or contact me directly.</p>}
        <small>Your details are only used to respond to this enquiry.</small>
      </form>
    </section>
  )
}
