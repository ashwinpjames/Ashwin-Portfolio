import { useState } from 'react'

const initialForm = {
  topic: '',
  primaryKeyword: '',
  secondaryKeywords: '',
  keywordDensity: 'Natural, avoid stuffing',
  searchIntent: 'Infer from topic and source',
  audience: '',
  location: '',
  articleType: 'Infer from search intent',
  wordCount: 'Infer from search intent and topic depth',
  tone: 'Expert, clear, conversational',
  internalLinks: '',
  externalSources: '',
  extraRequirements: '',
}

export default function BlogPromptArchitect() {
  const [form, setForm] = useState(initialForm)
  const [source, setSource] = useState('')
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function generate() {
    setError('')
    setCopied(false)
    setPrompt('')
    if (!form.topic.trim() || !form.primaryKeyword.trim() || !source.trim()) {
      setError('Add the topic, primary keyword and source material before generating.')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('/api/generate-blog-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to generate the prompt.')
      setPrompt(data.prompt)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  async function copyPrompt() {
    if (!prompt) return
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return <main className="prompt-architect-page">
    <section className="prompt-architect-hero">
      <div className="prompt-architect-glow glow-one" aria-hidden="true" />
      <div className="prompt-architect-glow glow-two" aria-hidden="true" />
      <div className="container prompt-architect-hero-inner">
        <span className="prompt-architect-badge">SEO CONTENT TOOL</span>
        <h1>Build a <span>search optimised blog prompt.</span></h1>
        <p>Define the topic, keywords and SEO targets. The architect turns them into a detailed writing prompt covering Yoast, Rank Math, search intent, structure, readability, links, evidence and content quality.</p>
        <div className="prompt-architect-proof"><span>Primary keyword</span><span>Secondary keywords</span><span>Yoast</span><span>Rank Math</span><span>Search intent</span><span>Content QA</span></div>
      </div>
    </section>

    <section className="prompt-architect-workspace">
      <div className="container prompt-architect-grid">
        <div className="prompt-architect-form-card">
          <div className="prompt-architect-card-heading"><div><span className="prompt-architect-eyebrow">01 · SEO BRIEF</span><h2>Define what the article must achieve.</h2></div><span className="prompt-architect-step">SEO first</span></div>

          <label>What is the blog about?<input value={form.topic} onChange={(e) => update('topic', e.target.value)} placeholder="e.g. How to reduce customer acquisition cost" /></label>

          <div className="prompt-architect-two-col">
            <label>Primary keyword<input value={form.primaryKeyword} onChange={(e) => update('primaryKeyword', e.target.value)} placeholder="Main keyword to target" /></label>
            <label>Keyword density<select value={form.keywordDensity} onChange={(e) => update('keywordDensity', e.target.value)}><option>Natural, avoid stuffing</option><option>0.5% to 1%</option><option>1% to 1.5%</option><option>1.5% to 2%</option><option>2% to 3%</option><option>Custom, decide from context</option></select></label>
          </div>

          <label>Secondary keywords and semantic terms<textarea value={form.secondaryKeywords} onChange={(e) => update('secondaryKeywords', e.target.value)} placeholder="Add supporting keywords, synonyms, related queries, entities and subtopics, one per line or comma separated." rows={5} /></label>

          <div className="prompt-architect-two-col">
            <label>Search intent<select value={form.searchIntent} onChange={(e) => update('searchIntent', e.target.value)}><option>Infer from topic and source</option><option>Informational</option><option>Commercial investigation</option><option>Transactional</option><option>Navigational</option></select></label>
            <label>Article type<select value={form.articleType} onChange={(e) => update('articleType', e.target.value)}><option>Infer from search intent</option><option>How to guide</option><option>Ultimate guide</option><option>Listicle</option><option>Comparison</option><option>Case study</option><option>Explainer</option><option>Opinion or thought leadership</option></select></label>
          </div>

          <div className="prompt-architect-two-col">
            <label>Target audience<input value={form.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. UAE SME founders" /></label>
            <label>Target location<input value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="e.g. UAE, India, Global" /></label>
          </div>

          <div className="prompt-architect-two-col">
            <label>Target word count<input value={form.wordCount} onChange={(e) => update('wordCount', e.target.value)} placeholder="e.g. 1800 to 2200, or let AI decide" /></label>
            <label>Tone<input value={form.tone} onChange={(e) => update('tone', e.target.value)} placeholder="e.g. authoritative and conversational" /></label>
          </div>

          <label>Internal links to include<textarea value={form.internalLinks} onChange={(e) => update('internalLinks', e.target.value)} placeholder="Paste relevant pages or URLs. The AI will place them only where contextually useful." rows={4} /></label>
          <label>External sources or required references<textarea value={form.externalSources} onChange={(e) => update('externalSources', e.target.value)} placeholder="Official documentation, studies, statistics, competitors to reference, or leave blank for the AI to recommend authoritative sources." rows={4} /></label>

          <label>Everything you know about the topic<textarea value={source} onChange={(e) => setSource(e.target.value)} placeholder="Paste your notes, research, examples, personal experience, statistics, links, rough outline, opinions, frameworks or anything else you know about the topic..." rows={14} /></label>

          <label>Additional requirements<textarea value={form.extraRequirements} onChange={(e) => update('extraRequirements', e.target.value)} placeholder="Anything else the final article must include or avoid." rows={4} /></label>

          <div className="prompt-architect-helper"><strong>SEO rules are treated as a framework, not a ranking guarantee.</strong><span>The generated prompt separates Yoast and Rank Math checks from broader search quality requirements and tells the writer not to force keywords unnaturally.</span></div>
          {error && <div className="prompt-architect-error">{error}</div>}
          <button className="prompt-architect-generate" onClick={generate} disabled={loading}>{loading ? 'Building your SEO content prompt…' : 'Generate SEO blog prompt'} <span>→</span></button>
          <p className="prompt-architect-note">Your material is sent to the AI only when you press Generate. Do not paste passwords, API keys or confidential information.</p>
        </div>

        <div className="prompt-architect-output-card">
          <div className="prompt-architect-card-heading"><div><span className="prompt-architect-eyebrow">02 · GENERATED PROMPT</span><h2>Ready to use.</h2></div>{prompt && <button className="prompt-architect-copy" onClick={copyPrompt}>{copied ? 'Copied' : 'Copy prompt'}</button>}</div>
          {!prompt && !loading && <div className="prompt-architect-empty"><div className="prompt-architect-empty-icon">✦</div><h3>Your SEO content prompt will appear here.</h3><p>It will contain your keyword strategy, Yoast and Rank Math requirements, content architecture, evidence rules, internal linking guidance, readability requirements and final QA checks.</p></div>}
          {loading && <div className="prompt-architect-loading"><span /><span /><span /><p>Building the SEO strategy and writing instructions…</p></div>}
          {prompt && <textarea className="prompt-architect-output" value={prompt} readOnly aria-label="Generated SEO blog writing prompt" />}
        </div>
      </div>
    </section>
  </main>
}
