import { useState } from 'react'

export default function BlogPromptArchitect() {
  const [topic, setTopic] = useState('')
  const [source, setSource] = useState('')
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function generate() {
    setError('')
    setCopied(false)
    setPrompt('')
    if (!topic.trim() || !source.trim()) {
      setError('Add the topic and everything you know about it first.')
      return
    }
    setLoading(true)
    try {
      const response = await fetch('/api/generate-blog-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, source }),
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
        <h1>Turn your idea into a <span>custom blog prompt.</span></h1>
        <p>Tell the architect what you are writing about and add everything you already know. It will work out the audience, search intent, editorial angle, structure, evidence, SEO, visuals and other requirements for you.</p>
        <div className="prompt-architect-proof"><span>SEO</span><span>Strategy</span><span>Examples</span><span>Evidence</span><span>Visuals</span><span>QA</span></div>
      </div>
    </section>

    <section className="prompt-architect-workspace">
      <div className="container prompt-architect-grid">
        <div className="prompt-architect-form-card">
          <div className="prompt-architect-card-heading"><div><span className="prompt-architect-eyebrow">01 · YOUR INPUT</span><h2>Give it everything you know.</h2></div><span className="prompt-architect-step">Simple by design</span></div>
          <label>What is the blog about?<input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Ways to Increase Average Order Value" /></label>
          <label>Tell me everything you know about it<textarea value={source} onChange={(e) => setSource(e.target.value)} placeholder="Paste your notes, script, research, examples, personal experience, statistics, links, rough outline, ideas or anything else you know about the topic..." rows={20} /></label>
          <div className="prompt-architect-helper"><strong>You do not need to answer questions about audience, SEO, structure or article type.</strong><span>The AI will analyse your material and decide what the final blog prompt needs.</span></div>
          {error && <div className="prompt-architect-error">{error}</div>}
          <button className="prompt-architect-generate" onClick={generate} disabled={loading}>{loading ? 'Analysing your topic…' : 'Generate custom blog prompt'} <span>→</span></button>
          <p className="prompt-architect-note">Your material is sent to the AI only when you press Generate. Do not paste passwords, API keys or confidential information.</p>
        </div>

        <div className="prompt-architect-output-card">
          <div className="prompt-architect-card-heading"><div><span className="prompt-architect-eyebrow">02 · GENERATED PROMPT</span><h2>Ready to use.</h2></div>{prompt && <button className="prompt-architect-copy" onClick={copyPrompt}>{copied ? 'Copied' : 'Copy prompt'}</button>}</div>
          {!prompt && !loading && <div className="prompt-architect-empty"><div className="prompt-architect-empty-icon">✦</div><h3>Your custom prompt will appear here.</h3><p>It will be built specifically around your topic and source material, including the parts that actually matter for that article.</p></div>}
          {loading && <div className="prompt-architect-loading"><span /><span /><span /><p>Understanding the topic and building your article strategy…</p></div>}
          {prompt && <textarea className="prompt-architect-output" value={prompt} readOnly aria-label="Generated blog writing prompt" />}
        </div>
      </div>
    </section>
  </main>
}
