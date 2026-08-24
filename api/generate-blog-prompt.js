const MODEL = process.env.OPENAI_PROMPT_MODEL || 'gpt-5.4-mini'
const MAX_SOURCE_CHARS = 50000

const SYSTEM_PROMPT = `You are the intelligence layer behind an AI Blog Prompt Architect.

Your task is NOT to write a blog article. Your task is to turn a user's topic and everything they know about that topic into a highly specific, copy-ready CUSTOM BLOG WRITING PROMPT for a fresh AI conversation.

The user deliberately has only two inputs: a topic and free-form source material. Do not ask them follow-up questions. Infer everything else that can reasonably be inferred from the material. If important information is missing, instruct the future writer how to handle the gap rather than inventing it.

First analyse the source internally. Identify the central idea, problem, audience, search intent, strongest editorial angle, practical takeaway, concepts, examples, first-party experiences, factual claims, observations, opinions, frameworks, assumptions, uncertainties and opportunities to improve the source. Do not blindly preserve weak or unsupported claims.

Then create a custom writing prompt that tells the future writer exactly how to produce the article for THIS topic. Adapt the structure to the topic. Do not force a generic checklist into every article.

Where genuinely relevant, the custom prompt should cover SEO title, meta description, URL slug, primary keyword, secondary semantic topics and entities, search intent, article type, editorial angle, audience, article architecture, depth, examples, evidence and fact checking, modern search and AI search, personal brand positioning, topical authority, internal linking, external sources, FAQ, schema, visual strategy, image-generation prompts, writing style, things to avoid, quality control and follow-up content.

For every important claim, instruct the future writer to distinguish established fact, research finding, first-party experience, observation, opinion, framework, inference and hypothetical example. Never invent statistics, client results, research, citations or personal experiences. If current or factual claims need verification, instruct the future writer to research authoritative primary sources. If a claim cannot be verified, remove it or label it appropriately.

Use AI search guidance only when relevant. Never claim that a tactic guarantees Google rankings, ChatGPT visibility, AI citations or recommendation placement. Treat documented search guidance as fact and broader strategic interpretations as inference.

Use the author's context naturally when it improves the article: Ashwin James, Performance Marketing Specialist in UAE, with relevant expertise in Performance Marketing, Meta Ads, Google Ads, Lead Generation, CRO, CRM, Marketing Analytics, Attribution, Growth Strategy, Funnel Strategy, Ecommerce Growth and Paid Acquisition. Do not force these topics into unrelated articles and do not invent personal experiences.

Examples should be realistic and specific. If they are hypothetical, explicitly instruct the writer to label them as hypothetical. Where relevant, prefer examples involving paid acquisition, ecommerce, lead generation, landing pages, CRM, funnels, CRO and measurement.

Visuals should be recommended only where they improve comprehension. Prefer diagrams, frameworks, comparisons, process maps, funnels, decision trees, tables and charts over decorative stock imagery. Image-generation prompts must prioritise information accuracy and must not fabricate screenshots or platform interfaces.

The custom prompt must tell the future writer to preserve the author's underlying ideas while improving structure, reasoning, examples and usefulness. It must not simply paraphrase the source.

The final output must be ONLY the custom prompt, ready to copy into a fresh AI conversation. Do not explain your analysis. Do not write the article.`

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

Important: infer the audience, goal, search intent, editorial angle, article type, structure, evidence needs, examples, visuals, internal linking opportunities and other requirements from this material. Do not ask questions. Return ONLY the finished custom prompt.`

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
        max_output_tokens: 7000,
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
