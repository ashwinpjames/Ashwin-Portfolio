import { useMemo, useState } from 'react'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/ai-lead-chat.css'

const starterMessage = {
  role: 'assistant',
  content: "Hi! I’m Ashwin’s AI assistant. I can help you find the right marketing support. What would you like to improve in your business?",
}

export default function AILeadChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([starterMessage])
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [lead, setLead] = useState({})
  const [leadReady, setLeadReady] = useState(false)

  const whatsappHref = useMemo(() => {
    const lines = [
      'New website enquiry from AshwinJames.com',
      '',
      lead.name && `Name: ${lead.name}`,
      lead.company && `Company: ${lead.company}`,
      lead.industry && `Business type: ${lead.industry}`,
      lead.website && `Website: ${lead.website}`,
      lead.service && `Service needed: ${lead.service}`,
      lead.budget && `Monthly ad budget: ${lead.budget}`,
      lead.challenge && `Main challenge: ${lead.challenge}`,
      lead.contact && `Preferred contact: ${lead.contact}`,
      '',
      'Conversation summary:',
      ...messages.slice(-8).map((item) => `${item.role === 'user' ? 'Visitor' : 'Assistant'}: ${item.content}`),
    ].filter(Boolean)
    const base = whatsappUrl.split('?')[0]
    return `${base}?text=${encodeURIComponent(lines.join('\n'))}`
  }, [lead, messages])

  async function submitMessage(event) {
    event.preventDefault()
    const content = draft.trim()
    if (!content || sending) return
    const nextMessages = [...messages, { role: 'user', content }]
    setMessages(nextMessages)
    setDraft('')
    setSending(true)
    setError('')
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.filter((message) => message.role !== 'assistant' || message !== starterMessage) }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'The assistant is temporarily unavailable.')
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }])
      setLead((current) => ({ ...current, ...(data.lead || {}) }))
      setLeadReady(Boolean(data.leadReady))
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return <div className="ai-lead-chat">
    {open && <section className="ai-chat-panel" aria-label="AI marketing assistant">
      <header className="ai-chat-header">
        <div className="ai-chat-avatar" aria-hidden="true">A.</div>
        <div className="ai-chat-heading"><strong>Marketing assistant</strong><span><i /> Online · AI assistant</span></div>
        <button type="button" className="ai-chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
      </header>
      <div className="ai-chat-privacy">Tell me what you need. I’ll ask a few questions so Ashwin can understand your enquiry.</div>
      <div className="ai-chat-messages" aria-live="polite">
        {messages.map((message, index) => <div className={`ai-chat-message ${message.role}`} key={`${message.role}-${index}`}>{message.content}</div>)}
        {sending && <div className="ai-chat-message assistant ai-chat-typing">Thinking…</div>}
      </div>
      {error && <p className="ai-chat-error" role="alert">{error}</p>}
      {leadReady && <a className="ai-chat-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">Send enquiry to Ashwin on WhatsApp ↗</a>}
      <form className="ai-chat-form" onSubmit={submitMessage}>
        <label className="ai-chat-sr-only" htmlFor="ai-chat-input">Your message</label>
        <textarea id="ai-chat-input" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit() } }} placeholder="Type your message…" rows={2} maxLength={1200} disabled={sending} />
        <button type="submit" aria-label="Send message" disabled={sending || !draft.trim()}>{sending ? '…' : '↑'}</button>
      </form>
      <p className="ai-chat-disclaimer">AI generated responses. Please don’t share sensitive information.</p>
    </section>}
    <button className={`ai-chat-launcher ${open ? 'is-open' : ''}`} type="button" aria-expanded={open} aria-label={open ? 'Close AI chat' : 'Chat with Ashwin’s AI assistant'} onClick={() => setOpen((value) => !value)}>
      {open ? '×' : <><span className="ai-chat-launcher-icon">✳</span><span>Ask me</span></>}
    </button>
  </div>
}
