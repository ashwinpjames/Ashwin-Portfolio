export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed.' })
  }

  const lead = req.body && typeof req.body === 'object' ? req.body : {}
  const allowed = ['name', 'company', 'industry', 'website', 'service', 'budget', 'challenge', 'contact']
  const clean = Object.fromEntries(allowed.map((key) => [
    key,
    typeof lead[key] === 'string' ? lead[key].trim().slice(0, 1200) : '',
  ]))

  if (!clean.name || !clean.contact || (!clean.service && !clean.challenge)) {
    return res.status(400).json({ success: false, error: 'Please provide your name, contact details, and marketing need.' })
  }

  const fields = {
    _subject: `New portfolio enquiry from ${clean.name}`,
    _template: 'table',
    _captcha: 'true',
    Name: clean.name,
    Company: clean.company || 'Not provided',
    Industry: clean.industry || 'Not provided',
    Website: clean.website || 'Not provided',
    'Service needed': clean.service || 'Not provided',
    'Monthly advertising budget': clean.budget || 'Not provided',
    'Main marketing challenge': clean.challenge || 'Not provided',
    'Preferred contact': clean.contact,
    'Source': 'ashwinjames.com website chatbot',
  }

  try {
    const upstream = await fetch('https://formsubmit.co/ajax/ashwinjames2720@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(fields),
    })
    const result = await upstream.json().catch(() => ({}))
    if (!upstream.ok || result.success !== 'true' && result.success !== true) {
      console.error('FormSubmit lead email failed:', upstream.status, result.message || 'unknown response')
      return res.status(502).json({
        success: false,
        error: 'Email notification is not active yet. Please use the WhatsApp option instead.',
      })
    }
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Lead email endpoint error:', error?.message || 'unknown error')
    return res.status(500).json({ success: false, error: 'Could not send the email notification.' })
  }
}
