import { useMemo, useState } from 'react'

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
  externalSources: '',
  extraRequirements: '',
}

const emptyInternalLink = () => ({ anchorText: '', url: '' })

const Field = ({ label, hint, required, children }) => (
  <label className="pa-field">
    <span className="pa-label">{label}{required && <em>Required</em>}</span>
    {hint && <span className="pa-hint">{hint}</span>}
    {children}
  </label>
)

export default function BlogPromptArchitect() {
  const [form, setForm] = useState(initialForm)
  const [source, setSource] = useState('')
  const [internalLinks, setInternalLinks] = useState([emptyInternalLink()])
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function updateInternalLink(index, field, value) {
    setInternalLinks((current) => current.map((link, linkIndex) => linkIndex === index ? { ...link, [field]: value } : link))
  }

  function addInternalLink() {
    setInternalLinks((current) => [...current, emptyInternalLink()])
  }

  function removeInternalLink(index) {
    setInternalLinks((current) => {
      const next = current.filter((_, linkIndex) => linkIndex !== index)
      return next.length ? next : [emptyInternalLink()]
    })
  }

  const validInternalLinks = useMemo(() => internalLinks.filter((link) => link.anchorText.trim() && link.url.trim()), [internalLinks])

  const completion = useMemo(() => {
    const required = [form.topic, form.primaryKeyword, source]
    const optional = [form.secondaryKeywords, form.searchIntent, form.audience, form.location, form.articleType, form.wordCount, form.tone, validInternalLinks.length ? 'links' : '', form.externalSources, form.extraRequirements]
    return Math.round(((required.filter(Boolean).length + optional.filter(Boolean).length * 0.35) / (required.length + optional.length * 0.35)) * 100)
  }, [form, source, validInternalLinks])

  async function generate() {
    setError('')
    setCopied(false)
    if (!form.topic.trim() || !form.primaryKeyword.trim() || !source.trim()) {
      setError('Complete the three required fields before generating your prompt.')
      return
    }

    const incompleteLink = internalLinks.some((link) => (link.anchorText.trim() && !link.url.trim()) || (!link.anchorText.trim() && link.url.trim()))
    if (incompleteLink) {
      setShowAdvanced(true)
      setError('Each internal link needs both anchor text and a destination URL, or both fields should be empty.')
      return
    }

    const formattedInternalLinks = validInternalLinks.length
      ? validInternalLinks.map((link, index) => `${index + 1}. Anchor text: ${link.anchorText.trim()} | Destination URL: ${link.url.trim()}`).join('\n')
      : ''

    setLoading(true)
    setPrompt('')
    try {
      const response = await fetch('/api/generate-blog-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, internalLinks: formattedInternalLinks, source }),
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

  function clearForm() {
    setForm(initialForm)
    setSource('')
    setInternalLinks([emptyInternalLink()])
    setPrompt('')
    setError('')
    setCopied(false)
  }

  return <main className="prompt-architect-page">
    <section className="prompt-architect-hero">
      <div className="prompt-architect-glow glow-one" aria-hidden="true" />
      <div className="prompt-architect-glow glow-two" aria-hidden="true" />
      <div className="container prompt-architect-hero-inner">
        <span className="prompt-architect-badge">SEO CONTENT ARCHITECT</span>
        <h1>Turn a keyword into a <span>better content brief.</span></h1>
        <p>Give the architect your topic, keyword strategy and source material. It builds a copy ready prompt that combines Yoast and Rank Math guidance with search intent, content quality and editorial strategy.</p>
        <div className="prompt-architect-hero-meta"><span><b>01</b> Brief</span><span><b>02</b> Strategy</span><span><b>03</b> Prompt</span></div>
      </div>
    </section>

    <section className="prompt-architect-workspace">
      <div className="container prompt-architect-layout">
        <div className="prompt-architect-form-card">
          <div className="pa-topbar">
            <div><span className="prompt-architect-eyebrow">CONTENT BRIEF</span><h2>Tell the architect what you need.</h2></div>
            <button className="pa-clear" type="button" onClick={clearForm}>Clear</button>
          </div>

          <div className="pa-progress"><div className="pa-progress-track"><span style={{ width: `${completion}%` }} /></div><span>{completion}% ready</span></div>

          <div className="pa-section">
            <div className="pa-section-heading"><span className="pa-section-number">01</span><div><h3>Core SEO target</h3><p>The three things the AI needs before it can build the prompt.</p></div></div>
            <Field label="Blog topic" required hint="The subject the article needs to cover."><input className="pa-input pa-input-large" value={form.topic} onChange={(e) => update('topic', e.target.value)} placeholder="e.g. How to reduce customer acquisition cost" /></Field>
            <div className="pa-two-col">
              <Field label="Primary keyword" required hint="Your main search query."><input className="pa-input" value={form.primaryKeyword} onChange={(e) => update('primaryKeyword', e.target.value)} placeholder="e.g. reduce customer acquisition cost" /></Field>
              <Field label="Keyword density" hint="Use as a range, never as a repetition quota."><select className="pa-input" value={form.keywordDensity} onChange={(e) => update('keywordDensity', e.target.value)}><option>Natural, avoid stuffing</option><option>0.5% to 1%</option><option>1% to 1.5%</option><option>1.5% to 2%</option><option>2% to 3%</option><option>Custom, decide from context</option></select></Field>
            </div>
            <Field label="Secondary keywords and semantic terms" hint="Synonyms, related queries, entities and subtopics. Separate with commas or new lines."><textarea className="pa-input" value={form.secondaryKeywords} onChange={(e) => update('secondaryKeywords', e.target.value)} placeholder="customer acquisition cost, CAC, paid acquisition, customer acquisition strategy, reduce CAC" rows={4} /></Field>
          </div>

          <div className="pa-section">
            <div className="pa-section-heading"><span className="pa-section-number">02</span><div><h3>Article strategy</h3><p>Shape the article around the person searching, not the plugin score.</p></div></div>
            <div className="pa-two-col">
              <Field label="Search intent"><select className="pa-input" value={form.searchIntent} onChange={(e) => update('searchIntent', e.target.value)}><option>Infer from topic and source</option><option>Informational</option><option>Commercial investigation</option><option>Transactional</option><option>Navigational</option></select></Field>
              <Field label="Article type"><select className="pa-input" value={form.articleType} onChange={(e) => update('articleType', e.target.value)}><option>Infer from search intent</option><option>How to guide</option><option>Ultimate guide</option><option>Listicle</option><option>Comparison</option><option>Case study</option><option>Explainer</option><option>Opinion or thought leadership</option></select></Field>
            </div>
            <div className="pa-two-col"><Field label="Target audience"><input className="pa-input" value={form.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. UAE SME founders" /></Field><Field label="Target location"><input className="pa-input" value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="e.g. UAE, India, Global" /></Field></div>
            <div className="pa-two-col"><Field label="Target word count"><input className="pa-input" value={form.wordCount} onChange={(e) => update('wordCount', e.target.value)} placeholder="e.g. 1,800 to 2,200" /></Field><Field label="Tone"><input className="pa-input" value={form.tone} onChange={(e) => update('tone', e.target.value)} placeholder="e.g. authoritative and conversational" /></Field></div>
          </div>

          <div className="pa-section pa-source-section">
            <div className="pa-section-heading"><span className="pa-section-number">03</span><div><h3>Your source material</h3><p>This is where you give the model your knowledge, research and point of view.</p></div><span className="pa-required-pill">Required</span></div>
            <Field label="Everything you know about the topic" hint="Notes, research, statistics, examples, personal experience, rough outlines, frameworks, opinions or source links."><textarea className="pa-input pa-source" value={source} onChange={(e) => setSource(e.target.value)} placeholder="Paste your material here. More useful context gives the architect more to work with." rows={13} /></Field>
            <div className="pa-source-tip"><span>✦</span><div><strong>Give it raw material, not polished prose.</strong><p>The architect will organise it. You do not need to write the article yourself.</p></div></div>
          </div>

          <div className="pa-advanced-toggle" onClick={() => setShowAdvanced((value) => !value)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setShowAdvanced((value) => !value)}>
            <div><span className="pa-advanced-icon">+</span><div><strong>Advanced controls</strong><small>Links, references and special requirements</small></div></div><span className={showAdvanced ? 'pa-chevron open' : 'pa-chevron'}>⌄</span>
          </div>

          {showAdvanced && <div className="pa-advanced-panel">
            <div className="pa-link-builder">
              <div className="pa-link-builder-head"><div><span className="pa-label">Internal links to include</span><span className="pa-hint">Pair the exact anchor text with its destination page. The writer will place it only where it reads naturally.</span></div>{validInternalLinks.length > 0 && <span className="pa-link-count">{validInternalLinks.length} ready</span>}</div>
              <div className="pa-link-list">
                {internalLinks.map((link, index) => <div className="pa-link-row" key={index}>
                  <div className="pa-link-index">{index + 1}</div>
                  <div className="pa-link-fields">
                    <input className="pa-input" value={link.anchorText} onChange={(e) => updateInternalLink(index, 'anchorText', e.target.value)} placeholder="Anchor text, e.g. paid ads specialist" aria-label={`Internal link ${index + 1} anchor text`} />
                    <input className="pa-input" type="url" value={link.url} onChange={(e) => updateInternalLink(index, 'url', e.target.value)} placeholder="Destination URL, e.g. https://ashwinjames.com/..." aria-label={`Internal link ${index + 1} destination URL`} />
                  </div>
                  <button className="pa-link-remove" type="button" onClick={() => removeInternalLink(index)} aria-label={`Remove internal link ${index + 1}`}>×</button>
                </div>)}
              </div>
              <button className="pa-add-link" type="button" onClick={addInternalLink}><span>+</span> Add another internal link</button>
            </div>
            <Field label="External sources or required references" hint="Official documentation, studies or sources that should inform the article."><textarea className="pa-input" value={form.externalSources} onChange={(e) => update('externalSources', e.target.value)} placeholder="Official sources, research papers, documentation or leave blank for authoritative source recommendations." rows={4} /></Field>
            <Field label="Additional requirements" hint="Anything the final article must include, avoid or emphasise."><textarea className="pa-input" value={form.extraRequirements} onChange={(e) => update('extraRequirements', e.target.value)} placeholder="For example: include a practical framework, use UAE examples, avoid generic agency language." rows={4} /></Field>
          </div>}

          <div className="pa-trust-note"><span>✓</span><div><strong>SEO guidance is a framework, not a ranking guarantee.</strong><p>The prompt separates plugin checks from actual search quality and prevents forced keyword usage.</p></div></div>
          {error && <div className="prompt-architect-error">{error}</div>}
          <button className="prompt-architect-generate" type="button" onClick={generate} disabled={loading}><span>{loading ? 'Building your content strategy…' : 'Generate SEO blog prompt'}</span><b>→</b></button>
          <p className="prompt-architect-note">Only your form data is sent when you generate. Never paste passwords, API keys or confidential information.</p>
        </div>

        <aside className="prompt-architect-output-card">
          <div className="pa-output-sticky">
            <div className="pa-output-head"><div><span className="prompt-architect-eyebrow">GENERATED PROMPT</span><h2>Your writing instructions.</h2></div>{prompt && <button className="prompt-architect-copy" type="button" onClick={copyPrompt}>{copied ? '✓ Copied' : 'Copy prompt'}</button>}</div>
            {!prompt && !loading && <div className="prompt-architect-empty"><div className="prompt-architect-empty-icon">✦</div><span className="pa-empty-label">Waiting for your brief</span><h3>Your finished prompt will appear here.</h3><p>Once generated, this panel becomes your copy ready SEO content prompt.</p><div className="pa-output-features"><span>SEO structure</span><span>Keywords</span><span>Readability</span><span>Fact checking</span><span>Content QA</span></div></div>}
            {loading && <div className="prompt-architect-loading"><div className="pa-loader-orb">✦</div><strong>Building your prompt</strong><p>Analysing intent, keywords, structure and SEO requirements.</p><div className="pa-loading-bar"><span /></div></div>}
            {prompt && <textarea className="prompt-architect-output" value={prompt} readOnly aria-label="Generated SEO blog writing prompt" />}
            {prompt && <div className="pa-output-footer"><span>Ready to paste into a fresh AI conversation</span><button type="button" onClick={copyPrompt}>{copied ? 'Copied' : 'Copy again'}</button></div>}
          </div>
        </aside>
      </div>
    </section>
  </main>
}
