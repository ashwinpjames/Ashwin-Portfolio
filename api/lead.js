const EMAILJS_SERVICE_ID = 'service_yzt7adq'
const EMAILJS_TEMPLATE_ID = 'template_docyrb9'
const EMAILJS_PUBLIC_KEY = 'ADrVKvriIATeakFp6'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed.' })
  }

  const lead = req.body && typeof req.body === 'object' ? req.body : {}
  const allowed = ['name', 'service', 'phone', 'email', 'website', 'budget', 'challenge', 'anythingElse']
  const clean = Object.fromEntries(allowed.map((key) => [
    key,
    typeof lead[key] === 'string' ? lead[key].trim().slice(0, 1200) : '',
  ]))

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)
  const phoneDigits = clean.phone.replace(/\D/g, '')

  if (!clean.name || !clean.service || !clean.phone || phoneDigits.length < 7 || phoneDigits.length > 15 || !emailIsValid ) {
    return res.status(400).json({
      success: false,
      error: 'Please provide your name, enquiry type, valid WhatsApp number, valid email address.',
    })
  }

  const templateParams = {
    name: clean.name,
    service: clean.service,
    phone: clean.phone,
    phone_digits: phoneDigits,
    email: clean.email,
    website: clean.website || 'Not provided',
    budget: clean.budget || 'Not provided',
    challenge: [clean.challenge ? `Main marketing challenge: ${clean.challenge}` : 'Main marketing challenge: Not provided', clean.anythingElse ? `Additional details: ${clean.anythingElse}` : ''].filter(Boolean).join('\n\n'),
  }

  try {
    const upstream = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: templateParams,
      }),
    })

    if (!upstream.ok) {
      const detail = (await upstream.text().catch(() => '')).slice(0, 500)
      console.error('Chatbot EmailJS send failed:', upstream.status, detail || 'unknown response')
      return res.status(502).json({
        success: false,
        error: 'Email notification failed. Please use the WhatsApp option to send your enquiry directly.',
      })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Chatbot EmailJS endpoint error:', error?.message || 'unknown error')
    return res.status(500).json({
      success: false,
      error: 'Could not send the email notification. Please use WhatsApp instead.',
    })
  }
}
