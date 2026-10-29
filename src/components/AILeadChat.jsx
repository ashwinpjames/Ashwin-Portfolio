import { useEffect, useMemo, useRef, useState } from 'react'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/ai-lead-chat.css'

const questions = [
  { key: 'name', label: 'your name', prompt: "Great. What’s your name?", required: true },
  { key: 'company', label: 'company', prompt: 'Thanks! What’s your company or business name? You can type “Skip” if you prefer.', required: false },
  { key: 'industry', label: 'business type', prompt: 'What industry are you in? For example, healthcare, real estate, professional services or ecommerce.', required: true },
  { key: 'website', label: 'website', prompt: 'What’s your website URL? Type “Skip” if you don’t have one yet.', required: false },
  { key: 'service', label: 'service', prompt: 'Which service are you interested in? For example, Google Ads, Meta Ads, SEO, lead generation, landing pages or CRM automation.', required: true },
  { key: 'budget', label: 'monthly advertising budget', prompt: 'If you plan to run ads, what’s your approximate monthly ad budget? You can type “Skip” if not applicable.', required: false },
  { key: 'challenge', label: 'main challenge', prompt: 'What’s the main marketing challenge you want to solve?', required: true },
  { key: 'contact', label: 'contact details', prompt: 'Finally, what’s the best phone number or email address to reach you?', required: true },
]

const firstMessage = {
  role: 'assistant',
  content: 'Hi! I’m Ashwin’s website assistant. I’ll ask a few quick questions so Ashwin can understand what your business needs. When we’re done, you can send the details directly to him on WhatsApp.',
}

const skipValues = ['skip', 'n/a', 'na', 'none', 'not applicable', 'no website']

export default function AILeadChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([firstMessage])
  const [draft, setDraft] = useState('')
  const [lead, setLead] = useState({})
  const [step, setStep] = useState(-1)
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState('')
  const messagesRef = useRef(null)

  useEffect(() => {
    const container = messagesRef.current
    if (container) container.scrollTop = container.scrollHeight
  }, [messages, error, complete])

  const whatsappHref = useMemo(() => {
    const fields = [
      ['Name', lead.name],
      ['Company', lead.company],
      ['Business type', lead.industry],
      ['Website', lead.website],
      ['Service needed', lead.service],
      ['Monthly advertising budget', lead.budget],
      ['Main marketing challenge', lead.challenge],
      ['Preferred contact', lead.contact],
    ]
    const summary = [
      'Hi Ashwin, I have a new enquiry from your portfolio website.',
      '',
      ...fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
    ].join('\n')
    return `${whatsappUrl.split('?')[0]}?text=${encodeURIComponent(summary)}`
  }, [lead])

  function addAssistantMessage(content) {
    setMessages((current) => [...current, { role: 'assistant', content }])
  }

  function submitMessage(event) {
    event.preventDefault()
    const answer = draft.trim()
    if (!answer) return
    setError('')
    setMessages((current) => [...current, { role: 'user', content: answer }])
    setDraft('')

    if (step === -1) {
      setStep(0)
      addAssistantMessage(questions[0].prompt)
      return
    }

    const question = questions[step]
    const skipped = skipValues.includes(answer.toLowerCase())
    if (question.required && skipped) {
      setError(`Please share ${question.label}, or enter a brief answer so Ashwin can follow up.`)
      return
    }

    const nextLead = { ...lead, [question.key]: skipped ? '' : answer }
    setLead(nextLead)

    if (step < questions.length - 1) {
      const nextStep = step + 1
      setStep(nextStep)
      addAssistantMessage(questions[nextStep].prompt)
    } else {
      setComplete(true)
      addAssistantMessage('Thanks! Your enquiry summary is ready. Tap the WhatsApp button below to send these details to Ashwin. WhatsApp will open with the message prepared, and you’ll need to press Send there.')
    }
  }

  function startOver() {
    setMessages([firstMessage])
    setDraft('')
    setLead({})
    setStep(-1)
    setComplete(false)
    setError('')
  }

  return <div className="ai-lead-chat">
    {open && <section className="ai-chat-panel" aria-label="Website enquiry chat">
      <header className="ai-chat-header">
        <img className="ai-chat-avatar" src="/ashwin-chatbot-mascot.svg" alt="" aria-hidden="true" />
        <div className="ai-chat-heading"><strong>Marketing assistant</strong><span><i /> Website enquiry</span></div>
        <button type="button" className="ai-chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
      </header>
      <div className="ai-chat-privacy">Answer a few quick questions. Your details will only be sent to WhatsApp when you choose to send them.</div>
      <div className="ai-chat-messages" aria-live="polite" ref={messagesRef}>
        {messages.map((message, index) => <div className={`ai-chat-message ${message.role}`} key={`${message.role}-${index}`}>{message.content}</div>)}
      </div>
      {error && <p className="ai-chat-error" role="alert">{error}</p>}
      {complete && <>
        <div className="ai-chat-lead-summary">
          <strong>Enquiry summary</strong>
          {lead.name && <span>{lead.name}</span>}
          {lead.company && <span>{lead.company}</span>}
          {lead.service && <span>{lead.service}</span>}
          {lead.contact && <span>{lead.contact}</span>}
        </div>
        <a className="ai-chat-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">Send details to Ashwin on WhatsApp ↗</a>
        <button type="button" className="ai-chat-restart" onClick={startOver}>Start a new enquiry</button>
      </>}
      {!complete && <form className="ai-chat-form" onSubmit={submitMessage}>
        <label className="ai-chat-sr-only" htmlFor="ai-chat-input">Your answer</label>
        <textarea id="ai-chat-input" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit() } }} placeholder="Type your answer…" rows={2} maxLength={1200} />
        <button type="submit" aria-label="Send answer" disabled={!draft.trim()}>↑</button>
      </form>}
      <p className="ai-chat-disclaimer">Your details are not sent until you choose to open WhatsApp and press Send.</p>
    </section>}
    <button className={`ai-chat-launcher ${open ? 'is-open' : ''}`} type="button" aria-expanded={open} aria-label={open ? 'Close enquiry chat' : 'Start a website enquiry'} onClick={() => setOpen((value) => !value)}>
      {open ? '×' : <><img className="ai-chat-launcher-mascot" src="/ashwin-chatbot-mascot.svg" alt="" /><span>Ask me</span></>}
    </button>
  </div>
}
