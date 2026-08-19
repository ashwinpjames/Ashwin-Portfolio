import { useState } from 'react'

export default function ResourceLead() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('No spam. Just the checklist and occasional useful ideas.')

  const submit = (event) => {
    event.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      setMessage('Please enter a valid work email.')
      return
    }
    setMessage('Thanks. The checklist request has been captured.')
  }

  return <section className="home-section resource-section"><div className="container resource-grid"><div className="field-note reveal-home"><div><p>FIELD NOTE 01</p><span></span><h3>Meta Ads<br />Performance<br />Checklist</h3><small>A practical review for businesses investing in paid social.</small></div><footer><b>ASHWIN JAMES</b><b>2026</b></footer></div><div className="reveal-home"><p className="home-eyebrow">Free resource</p><h2>A practical checkpoint for your Meta Ads account.</h2><p className="resource-copy">Use this focused checklist to spot the common performance gaps that quietly erode lead quality, efficiency and confidence in paid social.</p><form onSubmit={submit}><label className="sr-only" htmlFor="resource-email">Work email</label><input id="resource-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your work email" autoComplete="email" /><button type="submit">Download checklist</button></form><p className="resource-message" aria-live="polite">{message}</p></div></div></section>
}
