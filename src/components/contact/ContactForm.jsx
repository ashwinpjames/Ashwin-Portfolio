import { useState } from 'react'
import { whatsappUrl } from '../../utils/contact.js'

const initial = { name: '', phone: '', company: '', service: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  const submit = (event) => {
    event.preventDefault()
    const details = [`Name: ${form.name}`, `Phone: ${form.phone}`, `Company: ${form.company || 'Not provided'}`, `Service: ${form.service || 'Not sure yet'}`, `Message: ${form.message || 'No additional message'}`].join('\n')
    const separator = whatsappUrl.includes('?') ? '&' : '?'
    const target = `${whatsappUrl}${separator}text=${encodeURIComponent(`Hello Ashwin, I would like to discuss my business growth.\n\n${details}`)}`
    window.open(target, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }
  return <form className="contact-form" onSubmit={submit}><div className="contact-form-heading"><p>Quick enquiry</p><h2>Tell me what you need.</h2><span>Usually takes less than a minute.</span></div><div className="contact-form-grid"><label><span>Name</span><input required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" autoComplete="name" /></label><label><span>Phone / WhatsApp</span><input required type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="+971 50 000 0000" autoComplete="tel" /></label></div><div className="contact-form-grid"><label><span>Company</span><input value={form.company} onChange={(event) => update('company', event.target.value)} placeholder="Company name" autoComplete="organization" /></label><label><span>What do you need?</span><select value={form.service} onChange={(event) => update('service', event.target.value)}><option value="">Select a service</option><option>Meta Ads</option><option>Google Ads</option><option>Lead generation</option><option>Landing page / CRO</option><option>Analytics & tracking</option><option>Website development</option><option>Not sure yet</option></select></label></div><label><span>Briefly tell me about the goal</span><textarea rows="4" value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="What are you trying to improve?" /></label><button type="submit" className="contact-submit">Start on WhatsApp <span>↗</span></button>{submitted && <p className="contact-form-note">WhatsApp has been opened with your enquiry prepared. Send the message to complete the enquiry.</p>}<p className="contact-privacy">Your details are only used to respond to this enquiry.</p></form>
}
