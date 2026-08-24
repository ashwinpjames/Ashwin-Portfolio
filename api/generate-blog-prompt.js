const MODEL = process.env.OPENAI_PROMPT_MODEL || 'gpt-5.4-mini'
const MAX_SOURCE_CHARS = 30000

const SYSTEM_PROMPT = `You are a senior editorial strategist, SEO strategist, performance marketing strategist, and prompt engineer.

Your task is NOT to write the blog article. Your task is to create a highly specific CUSTOM BLOG WRITING PROMPT that another AI can use to write the final publication-ready article.

The user will provide only two things: a topic and everything they currently know about that topic. Do not ask the user additional questions. Infer the audience, search intent, article type, editorial angle, structure, SEO strategy, evidence needs, examples, visual strategy and other requirements from the material and topic.

The custom prompt should adapt to the specific article. Include only sections that genuinely improve that article. Where relevant, cover SEO title, meta description, URL slug, primary keyword, secondary semantic topics and entities, search intent, editorial angle, audience, article architecture, depth, realistic examples, evidence and fact checking, modern search and AI search without unsupported ranking claims, personal brand positioning, topical authority, internal linking, external sources, FAQ, schema, visual strategy, image-generation prompts, writing style, things to avoid, quality control, and follow-up content.

Distinguish established facts, research findings, first-party experience, observations, opinions, frameworks, inferences, and hypothetical examples. Never invent statistics, client results, research, citations, or personal experiences. If current claims require verification, instruct the future writer to use authoritative primary sources.

Author context: Ashwin James, Performance Marketing Specialist in UAE. Relevant expertise includes Performance Marketing, Meta Ads, Google Ads, Lead Generation, CRO, CRM, Marketing Analytics, Attribution, Growth Strategy, Funnel Strategy, Ecommerce Growth, and Paid Acquisition. Use this context only where it naturally improves the article. Do not turn every article into a sales pitch.

The final output must be a copy-ready prompt, not an explanation of your analysis and not the article itself. It should be specific enough that a fresh AI conversation can use it to produce a substantially better article than it could from the topic alone.`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  if (!process.env.OPENAI_API_KEY) return res.status(500).json({ error: 'OPENAI_API_KEY is not configured on the server.' })

  try {
    const { topic, source } = req.body || {}
    if (!topic?.trim()) return res.status(400).json({ error: 'Please enter a topic.' })
    if (!source?.trim()) return res.status(400).json({ error: 'Please add everything you know about the topic.' })

    const clippedSource = source.trim().slice(0, MAX_SOURCE_CHARS)
    const userPrompt = `Create the custom blog writing prompt now.

TOPIC:
${topic.trim()}

EVERYTHING THE USER KNOWS ABOUT THE TOPIC:
${clippedSource}

Infer everything else needed for a strong article. Do not ask follow-up questions. Return ONLY the custom prompt. Do not write the article.`

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        input: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        max_output_tokens: 6000,
      }),
    })

    const data = await response.json()
    if (!response.ok) return res.status(response.status).json({ error: data?.error?.message || 'OpenAI request failed.' })

    const output = data.output_text || data.output?.flatMap((item) => item.content || []).map((item) => item.text || '').join('') || ''
    if (!output.trim()) return res.status(502).json({ error: 'The AI returned an empty prompt.' })

    return res.status(200).json({ prompt: output.trim(), model: MODEL })
  } catch (error) {
    return res.status(500).json({ error: error?.message || 'Something went wrong while generating the prompt.' })
  }
}
