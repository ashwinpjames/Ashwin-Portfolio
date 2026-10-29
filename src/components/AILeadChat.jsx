import { useEffect, useMemo, useRef, useState } from 'react'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/ai-lead-chat.css'

const questions = [
  { key: 'name', label: 'your name', prompt: 'Great. What’s your name?', required: true, type: 'text', placeholder: 'Enter your name' },
  { key: 'service', label: 'what you need help with', prompt: 'What do you need help with?', required: true, type: 'choice', options: ['E-commerce', 'Lead generation', 'Other'] },
  { key: 'phone', label: 'WhatsApp number', prompt: 'What’s your WhatsApp mobile number?', required: true, type: 'phone', placeholder: 'Mobile number' },
  { key: 'website', label: 'website', prompt: 'What’s your website URL? You can skip this if you don’t have one.', required: false, type: 'url', placeholder: 'https://yourwebsite.com' },
  { key: 'budget', label: 'monthly advertising budget', prompt: 'What is your approximate monthly advertising budget (AED)?', required: true, type: 'choice', options: ['Below AED 3,000', 'AED 3,000–5,000', 'AED 5,001–10,000', 'Above AED 10,000', 'Let’s discuss and decide'] },
  { key: 'email', label: 'email address', prompt: 'What’s the best email address to reach you?', required: true, type: 'email', placeholder: 'you@example.com' },
  { key: 'challenge', label: 'main marketing challenge', prompt: 'What’s the main marketing challenge you want to solve?', required: false, type: 'textarea', placeholder: 'Tell Ashwin what you want to improve…' },
  { key: 'anythingElse', label: 'anything else', prompt: 'Is there anything else you’d like Ashwin to know? You can add details here or skip this step.', required: false, type: 'textarea', placeholder: 'Anything else you’d like to share…' },
]

const firstMessage = {
  role: 'assistant',
  content: 'Hi! I’m Ashwin’s website assistant. I’ll ask a few quick questions so Ashwin can understand what your business needs. You can also add any extra details at the end or contact him directly on WhatsApp.',
}

const countryCodes = [
  { label: 'UAE +971', value: '+971' },
  { label: 'India +91', value: '+91' },
  { label: 'UK +44', value: '+44' },
  { label: 'US/Canada +1', value: '+1' },
  { label: 'Pakistan +92', value: '+92' },
  { label: 'Philippines +63', value: '+63' },
  { label: 'Australia +61', value: '+61' },
]

export default function AILeadChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([firstMessage, { role: 'assistant', content: questions[0].prompt }])
  const [draft, setDraft] = useState('')
  const [phoneCountry, setPhoneCountry] = useState('+971')
  const [lead, setLead] = useState({})
  const [step, setStep] = useState(0)
  const [review, setReview] = useState(false)
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState('')
  const [emailStatus, setEmailStatus] = useState('')
  const messagesRef = useRef(null)

  useEffect(() => {
    const container = messagesRef.current
    if (container) container.scrollTop = container.scrollHeight
  }, [messages, error, complete, review])

  const whatsappHref = useMemo(() => {
    const fields = [
      ['Name', lead.name],
      ['What they need help with', lead.service],
      ['WhatsApp', lead.phone],
      ['Website', lead.website || 'Not provided'],
      ['Monthly advertising budget', lead.budget],
      ['Email', lead.email],
      ['Main marketing challenge', lead.challenge || 'Not provided'],
      ['Anything else', lead.anythingElse || 'Not provided'],
    ]
    const summary = [
      'Hi Ashwin, I have a new enquiry from your portfolio website.',
      '',
      ...fields.map(([label, value]) => `${label}: ${value || 'Not provided'}`),
    ].join('\n')
    return `${whatsappUrl.split('?')[0]}?text=${encodeURIComponent(summary)}`
  }, [lead])

  function addAssistantMessage(content) {
    setMessages((current) => [...current, { role: 'assistant', content }])
  }

  function answerQuestion(rawAnswer) {
    const answer = String(rawAnswer ?? '').trim()
    const question = questions[step]
    if (!question) return
    const skipped = ['skip', 'n/a', 'na', 'none', 'not applicable', 'no website'].includes(answer.toLowerCase())

    if (question.required && (!answer || skipped)) {
      setError(`Please share ${question.label} so Ashwin can follow up.`)
      return
    }
    if (question.type === 'phone') {
      const digits = answer.replace(/\D/g, '')
      if (digits.length < 7 || digits.length > 15) {
        setError('Please enter a valid mobile number, including the selected country code.')
        return
      }
    }
    if (question.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer)) {
      setError('Please enter a valid email address.')
      return
    }
    if (question.type === 'url' && answer && !skipped) {
      const candidate = /^https?:\/\//i.test(answer) ? answer : `https://${answer}`
      try {
        new URL(candidate)
        setLead((current) => ({ ...current, website: candidate }))
      } catch {
        setError('Please enter a valid website URL, or choose Skip.')
        return
      }
    }

    setError('')
    const normalized = skipped && !question.required ? '' : question.type === 'phone' ? `${phoneCountry} ${answer.replace(/\s+/g, ' ')}` : answer
    setMessages((current) => [...current, { role: 'user', content: skipped ? 'Skip' : normalized }])
    setDraft('')
    const nextLead = {
      ...lead,
      [question.key]: question.type === 'url' && answer && !skipped
        ? (/^https?:\/\//i.test(answer) ? answer : `https://${answer}`)
        : normalized,
    }
    setLead(nextLead)

    if (step < questions.length - 1) {
      const nextStep = step + 1
      setStep(nextStep)
      addAssistantMessage(questions[nextStep].prompt)
    } else {
      addAssistantMessage('Thanks — that’s everything. I’m sending your details to Ashwin now.')
      submitLead(nextLead)
    }
  }

  function submitMessage(event) {
    event.preventDefault()
    answerQuestion(draft)
  }

  async function submitLead(submittedLead = lead) {
    setError('')
    setEmailStatus('sending')
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedLead),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.success) throw new Error(result.error || 'Email could not be sent.')
      setEmailStatus('sent')
      setComplete(true)
      setReview(false)
      addAssistantMessage('All details are in! I’ll get back to you as soon as I can. You can ask more questions or contact me directly on WhatsApp below.')
    } catch (sendError) {
      console.error('Chatbot lead email notification failed:', sendError)
      setEmailStatus('failed')
      setComplete(true)
      addAssistantMessage('I couldn’t send the email automatically, but your details are ready. Please use the WhatsApp button below to send them directly.')
      setError(sendError.message || 'We couldn’t email your enquiry. Please use the WhatsApp option below.')
    }
  }

  function startOver() {
    setMessages([firstMessage, { role: 'assistant', content: questions[0].prompt }])
    setDraft('')
    setPhoneCountry('+971')
    setLead({})
    setStep(0)
    setReview(false)
    setComplete(false)
    setError('')
    setEmailStatus('')
  }

  const activeQuestion = questions[step]

  return <div className="ai-lead-chat">
    {open && <section className="ai-chat-panel" aria-label="Website enquiry chat">
      <header className="ai-chat-header">
        <img className="ai-chat-avatar" src="/ashwin-chatbot-mascot.svg" alt="" aria-hidden="true" />
        <div className="ai-chat-heading"><strong>Marketing assistant</strong><span><i /> Website enquiry</span></div>
        <button type="button" className="ai-chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
      </header>
      <div className="ai-chat-privacy">A few quick questions to understand what you need. WhatsApp is optional.</div>
      <div className="ai-chat-messages" aria-live="polite" ref={messagesRef}>
        {messages.map((message, index) => <div className={`ai-chat-message ${message.role}`} key={`${message.role}-${index}`}>{message.content}</div>)}
        {!review && !complete && (activeQuestion?.type === 'choice' || activeQuestion?.type === 'url' || activeQuestion?.type === 'textarea') && <div className="ai-chat-inline-options" aria-label={activeQuestion.label}>
          {(activeQuestion.type === 'choice' ? activeQuestion.options : activeQuestion.type === 'url' ? ['Skip website'] : ['Skip this question']).map((option) => <button type="button" className="ai-chat-choice" key={option} onClick={() => answerQuestion(option === 'Skip website' || option === 'Skip this question' ? 'Skip' : option)}>{option}</button>)}
        </div>}
      </div>
      {error && <p className="ai-chat-error" role="alert">{error}</p>}
      {review && !complete && <div className="ai-chat-lead-summary">
        <strong>Review your enquiry</strong>
        {[
          ['Name', lead.name],
          ['What you need help with', lead.service],
          ['WhatsApp', lead.phone],
          ['Website', lead.website || 'Not provided'],
          ['Monthly advertising budget', lead.budget],
          ['Email', lead.email],
          ['Main marketing challenge', lead.challenge || 'Not provided'],
      ['Anything else', lead.anythingElse || 'Not provided'],
        ].map(([label, value]) => <span key={label}><b>{label}:</b> {value || 'Not provided'}</span>)}
        <button type="button" className="ai-chat-restart" onClick={() => { setReview(false); setStep(questions.length - 1); setDraft(lead.challenge || ''); setError(''); addAssistantMessage('You can edit your main marketing challenge below, or submit your enquiry as shown.') }}>Edit last answer</button>
      </div>}
      {complete && <>
        <div className="ai-chat-lead-summary">
          <strong>{emailStatus === 'failed' ? 'Ready to send on WhatsApp' : 'Enquiry sent'}</strong>
          {lead.name && <span>{lead.name}</span>}
          {lead.service && <span>{lead.service}</span>}
          {lead.phone && <span>{lead.phone}</span>}
          {lead.email && <span>{lead.email}</span>}
        </div>
      </>}
      {(review || complete) && <>
        <p className="ai-chat-email-status" role="status">{emailStatus === 'sending' ? 'Sending your enquiry by email…' : emailStatus === 'sent' ? 'Your enquiry has been emailed to Ashwin.' : emailStatus === 'failed' ? 'We couldn’t email your enquiry automatically. Please use the WhatsApp option below to send it directly.' : ''}</p>
        <a className="ai-chat-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">Send details to Ashwin on WhatsApp ↗</a>
        {complete && <button type="button" className="ai-chat-restart" onClick={startOver}>Ask more / Start again</button>}
      </>}
      {!review && !complete && <form className="ai-chat-form" onSubmit={submitMessage}>
        <label className="ai-chat-sr-only" htmlFor="ai-chat-input">{activeQuestion?.label || 'Your answer'}</label>
        {activeQuestion?.type !== 'choice' && <>
          {activeQuestion?.type === 'phone' && <select className="ai-chat-country-code" aria-label="Country calling code" value={phoneCountry} onChange={(event) => setPhoneCountry(event.target.value)}>
            {countryCodes.map((country) => <option key={country.value} value={country.value}>{country.label}</option>)}
          </select>}
          {activeQuestion?.type === 'textarea'
            ? <textarea id="ai-chat-input" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder={activeQuestion.placeholder} rows={2} maxLength={1200} />
            : <input id="ai-chat-input" type={activeQuestion?.type === 'email' ? 'email' : activeQuestion?.type === 'phone' ? 'tel' : 'text'} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder={activeQuestion?.placeholder || 'Type your answer…'} maxLength={activeQuestion?.type === 'phone' ? 30 : 1200} autoComplete={activeQuestion?.type === 'email' ? 'email' : activeQuestion?.type === 'phone' ? 'tel-national' : 'off'} />}
          <button type="submit" aria-label="Send answer" disabled={!draft.trim()}>↑</button>
        </>}
      </form>}
      <p className="ai-chat-disclaimer">Your details are sent to Ashwin automatically. WhatsApp opens a message for you to send directly.</p>
    </section>}
    {!open && <button className="ai-chat-launcher" type="button" aria-expanded={false} aria-label="Start a website enquiry" onClick={() => setOpen(true)}><img className="ai-chat-launcher-mascot" src="/ashwin-chatbot-mascot.svg" alt="" /><span>Ask me</span></button>}
  </div>
}
