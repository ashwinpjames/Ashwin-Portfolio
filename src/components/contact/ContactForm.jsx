import { useState } from 'react'
import { emailAddress } from '../../utils/contact.js'

const initial = { name: '', email: '', company: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  const submit = (event) => { event.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'website'}`); const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`); window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`; setSubmitted(true) }
  return <form className="contact-form" onSubmit={submit}><div className="contact-form-grid"><label><span>Name</span><input required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" /></label><label><span>Email</span><input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="you@company.com" /></label></div><label><span>Company</span><input value={form.company} onChange={(event) => update('company', event.target.value)} placeholder="Company name" /></label><label><span>What would you like to improve?</span><textarea required rows="6" value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="Tell me about the problem, goal or opportunity." /></label><button type="submit" className="contact-submit">Send enquiry <span>↗</span></button>{submitted && <p className="contact-form-note">Your email app should open with the enquiry prepared. If it does not, email {emailAddress} directly.</p>}</form>
}
