import { Link } from 'react-router-dom'
import { trackEnquiryEvent } from '../../utils/analytics.js'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../../config/emailjs.js'

export default function ResourceLead() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const pending = useRef(false)
  const [message, setMessage] = useState('Request the checklist or open it online.')

  const submit = async (event) => {
    event.preventDefault()
    if (pending.current) return
    if (!email.trim() || !email.includes('@')) {
      setMessage('Please enter a valid work email.')
      return
    }

    pending.current = true
    setStatus('sending')
    setMessage('Sending your checklist request…')

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: 'Resource request',
          email,
          phone: '',
          company: '',
          service: 'Meta Ads Performance Checklist',
          message: 'Requested the Meta Ads Performance Checklist from the website.',
        },
        { publicKey: emailjsConfig.publicKey },
      )
      trackEnquiryEvent('resource_request', 'homepage_checklist')
      setStatus('success')
      setMessage('Thanks. Your checklist request has been sent. You can also open the checklist online below.')
      setEmail('')
    } catch (error) {
      console.error('Resource request failed:', error)
      setStatus('error')
      setMessage('Something went wrong. Please try again or contact me directly.')
    }
  }

  return <section className="home-section resource-section"><div className="container resource-grid"><div className="field-note reveal-home"><div><p>FIELD NOTE 01</p><span></span><h3>Meta Ads<br />Performance<br />Checklist</h3><small>A practical review for businesses investing in paid social.</small></div><footer><b>ASHWIN JAMES</b><b>2026</b></footer></div><div className="reveal-home"><p className="home-eyebrow">Free resource</p><h2>A practical checkpoint for your Meta Ads account.</h2><p className="resource-copy">Use this focused checklist to spot the common performance gaps that quietly erode lead quality, efficiency and confidence in paid social.</p><form onSubmit={submit}><label className="sr-only" htmlFor="resource-email">Work email</label><input id="resource-email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your work email" autoComplete="email" /><button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Request checklist'}</button></form><p className="resource-message" aria-live="polite">{message}</p><Link className="text-link" to="/resources/meta-ads-launch-checklist">Open the checklist online →</Link></div></div></section>
}
