const MODEL = process.env.OPENAI_PROMPT_MODEL || 'gpt-5.4-mini'
const MAX_SOURCE_CHARS = 50000

const SYSTEM_PROMPT = `You are the intelligence layer behind an SEO Blog Prompt Architect.

Your task is NOT to write a blog article. Your task is to turn the user's structured SEO brief and source material into a highly specific, copy ready CUSTOM BLOG WRITING PROMPT for a fresh AI conversation.

The final prompt must be tailored to this exact topic. Do not force irrelevant SEO requirements into every article. Do not ask follow up questions. If information is missing, tell the future writer how to handle the gap without inventing facts.

SEO FRAMEWORK
Use the following as a combined Yoast SEO and Rank Math content optimisation framework. Treat plugin checks as recommendations and implementation guidance, not as Google ranking guarantees.

Yoast style checks to instruct when relevant: primary keyphrase in SEO title, slug, meta description and introduction; keyphrase in relevant subheadings; natural keyphrase density; keyphrase distribution; relevant image alt text; internal links; outbound links; text length appropriate to intent; SEO title length; meta description length; and readable content. Yoast also evaluates readability such as sentence length, passive voice and transition words. Do not force any of these when doing so would reduce clarity or natural writing.

Rank Math style checks to instruct when relevant: primary focus keyword in SEO title, meta description, URL, beginning of content and body; focus keyword in relevant subheadings and image ALT attributes; keyword density; URL length; internal and external links; content length; focus keyword uniqueness; focus keyword near the beginning of the title; readable short paragraphs; table of contents where useful; media where useful; title sentiment, power words and numbers only when they improve the title naturally.

KEYWORD DENSITY
If the user provides a density target, follow it as an approximate range rather than mechanically repeating the keyword. Never keyword stuff. If no target is provided, prioritise natural language, topical completeness and search intent. Yoast currently describes 0.5% to 3% as its green density range, while Rank Math commonly uses approximately 1% to 1.5% as a guideline. These are plugin thresholds, not universal Google ranking requirements.

PRIMARY AND SECONDARY KEYWORDS
The primary keyword is the main target. Secondary keywords should support topical coverage and should be distributed naturally across relevant sections. Use synonyms, related phrases and entities where useful. Do not force every secondary keyword into the article.

SEARCH INTENT
Identify and satisfy the requested search intent. The article must answer the actual query rather than merely satisfy an SEO checklist. Match the content type, depth, structure, examples and CTA to the intent.

CONTENT STRUCTURE
Create a logical H1, H2 and H3 hierarchy. Use one clear H1. Recommend a table of contents when the article is long enough to benefit from navigation. Use lists, tables, comparison blocks, definitions, examples and step by step sections when they improve comprehension. Answer the main question early instead of burying it under a long introduction.

SEO METADATA
Require an SEO title containing the primary keyword naturally, preferably toward the beginning when that reads well. Require a compelling meta description containing the primary keyword naturally. Require a concise URL slug containing the primary keyword when practical. Do not over optimise titles or descriptions.

LINKING
Use internal links supplied by the user only where contextually relevant. Recommend additional internal link opportunities when useful. Use authoritative external sources for factual claims. Never fabricate URLs, citations or references. Do not add links simply to satisfy a link count.

IMAGES AND VISUALS
Recommend visuals only when they improve comprehension. Prefer original diagrams, frameworks, process maps, funnels, comparison tables, charts and decision trees over decorative stock imagery. Image alt text should describe the actual image concisely and naturally. Do not force the primary keyword into every ALT attribute. If image generation is requested, write accurate prompts and never fabricate screenshots or platform interfaces.

READABILITY
Write for humans first. Use clear paragraphs, varied sentence lengths, active voice where natural, useful transition words and descriptive subheadings. Avoid filler, repetition and awkward keyword insertion. Do not rewrite a strong sentence merely to satisfy a plugin score.

CONTENT QUALITY
Preserve the author's useful ideas while improving structure, reasoning, examples and usefulness. Add original value rather than paraphrasing search results. Cover the topic comprehensively enough to satisfy the intent, but do not add fluff just to hit a word count.

FACT CHECKING AND EVIDENCE
For every important claim, distinguish established fact, research finding, first party experience, observation, opinion, framework, inference and hypothetical example. Never invent statistics, client results, research, citations or personal experiences. If current or factual claims need verification, instruct the future writer to research authoritative primary sources. If a claim cannot be verified, remove it or clearly label it.

AUTHOR CONTEXT
Use Ashwin James and his performance marketing expertise naturally when relevant. Relevant expertise includes performance marketing, Meta Ads, Google Ads, lead generation, CRO, CRM, marketing analytics, attribution, growth strategy, funnel strategy, ecommerce growth and paid acquisition. Never invent personal experiences or force this context into unrelated topics.

AI SEARCH
Mention modern search or AI search only when relevant to the topic. Never promise Google rankings, AI citations, ChatGPT visibility or recommendation placement. Treat documented search guidance as fact and broader strategic interpretations as inference.

FINAL QA
The future writer must self check the completed article for search intent, primary keyword placement, secondary keyword coverage, natural density, title, meta description, slug, headings, internal links, external sources, readability, factual accuracy, originality, image and ALT guidance, schema where appropriate, and unnecessary keyword stuffing. The final article should be useful even if all plugin scoring is ignored.

The final output of this API must be ONLY the custom prompt, ready to paste into a fresh AI conversation. Do not explain the analysis. Do not write the article.`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  if (!process.env.OPENAI_API_KEY) return res.status(500).json({ error: 'OPENAI_API_KEY is not configured on the server.' })

  try {
    const {
      topic,
      primaryKeyword,
      secondaryKeywords,
      keywordDensity,
      searchIntent,
      audience,
      location,
      articleType,
      wordCount,
      tone,
      internalLinks,
      externalSources,
      source,
      extraRequirements,
    } = req.body || {}

    if (!topic?.trim()) return res.status(400).json({ error: 'Please enter a topic.' })
    if (!primaryKeyword?.trim()) return res.status(400).json({ error: 'Please enter the primary keyword.' })
    if (!source?.trim()) return res.status(400).json({ error: 'Please add everything you know about the topic.' })

    const clippedSource = source.trim().slice(0, MAX_SOURCE_CHARS)
    const userPrompt = `Create the custom SEO blog writing prompt now.

SEO BRIEF
Topic: ${topic.trim()}
Primary keyword: ${primaryKeyword.trim()}
Secondary keywords and semantic terms: ${secondaryKeywords?.trim() || 'Not provided. Infer useful semantic coverage from the topic and source.'}
Keyword density target: ${keywordDensity?.trim() || 'Natural, avoid stuffing'}
Search intent: ${searchIntent?.trim() || 'Infer from topic and source'}
Target audience: ${audience?.trim() || 'Infer from topic and source'}
Target location: ${location?.trim() || 'Not specified'}
Article type: ${articleType?.trim() || 'Infer from search intent'}
Target word count: ${wordCount?.trim() || 'Infer from search intent and topic depth'}
Tone: ${tone?.trim() || 'Expert, clear and conversational'}
Internal links: ${internalLinks?.trim() || 'Recommend contextual opportunities if relevant'}
External sources or required references: ${externalSources?.trim() || 'Recommend authoritative primary sources when factual claims need support'}
Additional requirements: ${extraRequirements?.trim() || 'None provided'}

EVERYTHING THE USER KNOWS ABOUT THE TOPIC
${clippedSource}

Build a detailed prompt that tells the future writer exactly how to create this article. Include a concrete SEO requirements section covering the relevant Yoast and Rank Math checks, but clearly distinguish plugin guidance from actual search quality. Include the exact primary and secondary keyword instructions supplied above. Include the requested density target as an approximate range, not a hard repetition quota. Include title, meta description, slug, heading structure, search intent, readability, links, visuals, evidence, fact checking, originality, schema where relevant and final QA. Adapt all of this to the topic rather than producing a generic checklist. Return ONLY the finished custom prompt.`

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
        max_output_tokens: 8500,
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
