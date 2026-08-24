import { useState } from 'react'

const initialForm = { topic: '', source: '', audience: '', goal: '', research: 'Fact check claims that require current or external evidence.' }

export default function BlogPromptArchitect() {
  const [form, setForm] = useState(initialForm)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))

  async function generate() {
    setError('')
    setCopied(false)
    setPrompt('')
    if (!form.topic.trim() || !form.source.trim()) {
      setError('Add a topic and your source material first.')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('/api/generate-blog-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
        <span className="prompt-architect-badge">AI CONTENT TOOL</span>
        <h1>Turn a rough idea into a <span>better blog prompt.</span></h1>
        <p>Feed the architect your topic and source material. It analyses the subject, search intent, editorial angle and evidence needs, then builds a custom prompt for generating the final article.</p>
        <div className="prompt-architect-proof"><span>SEO strategy</span><span>Editorial angle</span><span>Examples</span><span>Evidence</span><span>Visuals</span><span>QA</span></div>
      </div>
    </section>

    <section className="prompt-architect-workspace">
      <div className="container prompt-architect-grid">
        <div className="prompt-architect-form-card">
          <div className="prompt-architect-card-heading"><div><span className="prompt-architect-eyebrow">01 · INPUT</span><h2>Give it the raw material.</h2></div><span className="prompt-architect-step">AI prompt architect</span></div>
          <label>Blog topic<input value={form.topic} onChange={(e) => update('topic', e.target.value)} placeholder="e.g. Ways to Increase Average Order Value" /></label>
          <label>Source material<textarea value={form.source} onChange={(e) => update('source', e.target.value)} placeholder="Paste your script, notes, research, transcript, rough ideas or existing content..." rows={12} /></label>
          <div className="prompt-architect-two-col">
            <label>Audience <input value={form.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. ecommerce marketers" /></label>
            <label>Article goal <input value={form.goal} onChange={(e) => update('goal', e.target.value)} placeholder="e.g. build authority and organic traffic" /></label>
          </div>
          <label>Research preference<select value={form.research} onChange={(e) => update('research', e.target.value)}><option>Fact check claims that require current or external evidence.</option><option>Use only the supplied source unless verification is essential.</option><option>Research deeply and prioritise primary sources.</option></select></label>
          {error && <div className="prompt-architect-error">{error}</div>}
          <button className="prompt-architect-generate" onClick={generate} disabled={loading}>{loading ? 'Analysing source…' : 'Generate custom blog prompt'} <span>→</span></button>
          <p className="prompt-architect-note">Your source is sent to the AI only when you press Generate. Do not paste passwords, API keys or confidential information.</p>
        </div>

        <div className="prompt-architect-output-card">
          <div className="prompt-architect-card-heading"><div><span className="prompt-architect-eyebrow">02 · OUTPUT</span><h2>Your custom writing prompt.</h2></div>{prompt && <button className="prompt-architect-copy" onClick={copyPrompt}>{copied ? 'Copied' : 'Copy prompt'}</button>}</div>
          {!prompt && !loading && <div className="prompt-architect-empty"><div className="prompt-architect-empty-icon">✦</div><h3>Nothing generated yet.</h3><p>Your finished prompt will appear here with topic-specific SEO, structure, examples, evidence requirements, visuals, FAQ, schema and quality control.</p></div>}
          {loading && <div className="prompt-architect-loading"><span /><span /><span /><p>Analysing the topic, source and content strategy…</p></div>}
          {prompt && <textarea className="prompt-architect-output" value={prompt} readOnly aria-label="Generated blog writing prompt" />}
        </div>
      </div>
    </section>
  </main>
}
