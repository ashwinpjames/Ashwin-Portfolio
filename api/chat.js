const SYSTEM_PROMPT = `You are the website's AI lead qualification assistant for Ashwin James, a UAE based freelance performance marketing specialist. His services include Google Ads, Meta Ads, SEO, website development, lead generation, landing page optimisation, analytics, tracking, HubSpot CRM and marketing automation.

Your job is to have a natural, useful conversation, answer questions about these services, and gently qualify potential clients. Do not pretend to be Ashwin. Do not invent prices, client results, availability, guarantees, or service details not provided. If asked something you cannot verify, say Ashwin can clarify it directly.

Ask only one relevant follow-up question at a time. Collect, when natural: name, company, business type/industry, website, service needed, approximate monthly advertising budget (only if relevant), main marketing challenge, and preferred contact detail. Do not pressure people to provide every field. Be concise, warm, professional, and avoid repeating questions already answered.

Return valid JSON only with this shape:
{"reply":"the conversational message to display","lead":{"name":"","company":"","industry":"","website":"","service":"","budget":"","challenge":"","contact":""},"leadReady":false}

Use empty strings for unknown lead fields. Set leadReady true when you have at least a name or contact detail AND a clear service need or business challenge. The reply should not claim anything has been sent to WhatsApp. The visitor must explicitly click the WhatsApp button to send the summary.`

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({ error: 'The AI assistant is not configured yet. Please contact Ashwin directly on WhatsApp.' })
  }

  try {
    const body = req.body || {}
    const messages = Array.isArray(body.messages) ? body.messages : []
    const safeMessages = messages
      .filter((message) => message && ['user', 'assistant'].includes(message.role) && typeof message.content === 'string')
      .slice(-16)
      .map((message) => ({ role: message.role, content: message.content.slice(0, 1600) }))

    if (!safeMessages.length || safeMessages[safeMessages.length - 1].role !== 'user') {
      return res.status(400).json({ error: 'Please enter a message.' })
    }

    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_CHAT_MODEL || 'gpt-4o-mini',
        temperature: 0.4,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...safeMessages,
        ],
      }),
    })

    const result = await upstream.json()
    if (!upstream.ok) {
      const apiCode = result?.error?.code || ''
      const apiType = result?.error?.type || ''
      console.error('OpenAI chat request failed:', upstream.status, apiType || 'unknown error', apiCode || '')
      if (upstream.status === 401 || upstream.status === 403) {
        return res.status(502).json({ error: 'The AI service credentials were rejected. The site owner needs to check the OPENAI_API_KEY in Vercel.' })
      }
      if (upstream.status === 429) {
        return res.status(502).json({ error: 'The AI service has reached its usage limit or is receiving too many requests. Please try again later or contact Ashwin on WhatsApp.' })
      }
      if (upstream.status === 400 && /model|response_format|json_object/i.test(String(result?.error?.message || apiCode))) {
        return res.status(502).json({ error: 'The AI model configuration needs an update. Please contact Ashwin on WhatsApp while this is fixed.' })
      }
      return res.status(502).json({ error: 'The AI service returned an error. Please try again shortly or contact Ashwin on WhatsApp.' })
    }

    const raw = result?.choices?.[0]?.message?.content
    if (!raw) return res.status(502).json({ error: 'The assistant returned an empty response. Please try again.' })

    const parsed = JSON.parse(raw)
    const lead = parsed.lead && typeof parsed.lead === 'object' ? parsed.lead : {}
    const allowed = ['name', 'company', 'industry', 'website', 'service', 'budget', 'challenge', 'contact']
    const cleanLead = Object.fromEntries(allowed.map((key) => [key, typeof lead[key] === 'string' ? lead[key].slice(0, 300) : '']))
    const hasContact = Boolean(cleanLead.name || cleanLead.contact)
    const hasNeed = Boolean(cleanLead.service || cleanLead.challenge)
    return res.status(200).json({
      reply: typeof parsed.reply === 'string' ? parsed.reply.slice(0, 1800) : 'Could you tell me a little more about what your business needs?',
      lead: cleanLead,
      leadReady: Boolean(parsed.leadReady && hasContact && hasNeed),
    })
  } catch (error) {
    console.error('AI chat handler error:', error?.message || 'unknown error')
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
