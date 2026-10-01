import { useMemo, useState } from 'react'

const initialForm = {
  website: 'https://www.ashwinjames.com/',
  homepageAnchor: 'Performance Marketing Specialist',
  topic: '',
  primaryKeyword: '',
  secondaryKeywords: '',
  searchIntent: 'Infer from topic and source',
  audience: '',
  location: 'UAE',
  articleType: 'Infer from search intent',
  wordCount: '1,500 to 2,000 words',
  tone: 'Expert, clear, conversational',
  source: '',
  internalLinks: '',
  externalSources: '',
  extraRequirements: '',
}
const PROFILE_KEY = 'ashwin-seo-blog-builder-profile-v1'
const criteria = [
  'Search intent is clearly satisfied','Audience and location are relevant','Primary keyword is used naturally','Primary keyword appears early','Secondary terms are integrated naturally','Title is clear and relevant','Meta description is present','URL slug is concise','One descriptive H1 is used','Logical H2 structure is present','Subheadings answer reader questions','Opening establishes relevance','Article has useful depth','Claims are supported by supplied sources','No unsupported statistics or claims','No fabricated quotes or credentials','Examples make advice practical','Content is original and specific','Paragraphs are easy to scan','Lists or steps improve readability','Internal links are relevant','Required homepage anchor is included','External sources are credible','Images have useful placement guidance','Image alt text is descriptive','Conclusion provides useful closure','FAQ answers genuine questions','Keyword use avoids stuffing','Language is clear and grammatical','Content avoids unnecessary repetition','CTA fits the reader journey','Heading hierarchy is logical','Article matches requested format','Content is ready for human fact check'
]
const Field = ({ label, hint, required, children }) => <label className="pa-field"><span className="pa-label">{label}{required && <em>Required</em>}</span>{hint && <span className="pa-hint">{hint}</span>}{children}</label>

function buildPrompt(f) {
  const lines = [
    'You are an experienced SEO editor and subject matter writer. Create a useful, accurate, publication ready blog article using the brief below.',
    '', 'ARTICLE BRIEF', 'Topic: ' + f.topic, 'Primary keyword: ' + f.primaryKeyword,
    'Secondary keywords and semantic terms: ' + (f.secondaryKeywords || 'Identify relevant terms from the topic without keyword stuffing.'),
    'Search intent: ' + f.searchIntent, 'Audience: ' + (f.audience || 'Infer from the brief'),
    'Target location: ' + (f.location || 'Not specified'), 'Article type: ' + f.articleType,
    'Target length: ' + f.wordCount, 'Tone: ' + f.tone, 'Website: ' + f.website,
    'Required homepage anchor: ' + f.homepageAnchor,
    'Source material supplied by the user:\n' + f.source,
    'Internal links to include:\n' + (f.internalLinks || 'Use only if supplied and relevant.'),
    'External sources or references:\n' + (f.externalSources || 'Use supplied sources where available. Do not invent citations or claim research was performed.'),
    'Additional requirements:\n' + (f.extraRequirements || 'None supplied.'),
    '', 'EDITORIAL AND SEO REQUIREMENTS',
    '1. Satisfy the likely search intent before optimizing for a plugin score.',
    '2. Build a clear structure with one H1, a compelling introduction, descriptive H2 and H3 headings where useful, and a meaningful conclusion.',
    '3. Use the primary keyword naturally in the title, opening and body where it genuinely fits. Integrate secondary terms contextually. Never force a density target or repeat keywords unnaturally.',
    '4. Address the target audience and geography only where relevant. Avoid generic filler and unsupported local claims.',
    '5. Use the supplied source material as the factual foundation. Preserve its meaning. Do not invent statistics, case studies, quotations, credentials, product details or source citations. Flag gaps that need verification.',
    '6. Explain concepts clearly, add practical examples only when supported or clearly labeled as illustrative, and make the article distinct rather than templated.',
    '7. Use short readable paragraphs, meaningful transitions, lists or tables only when they improve comprehension, and avoid repetition.',
    '8. Add the required homepage link using the exact anchor and website URL in a natural context. Include other internal links only when relevant and use their supplied destinations.',
    '9. Include credible external citations only from supplied references or sources actually available to you. Never fabricate URLs or citations.',
    '10. Include an appropriate next step or CTA without making the article overly promotional.',
    '11. Follow a logical heading hierarchy, accessible language, and factual, non sensational wording.',
    '', 'OUTPUT FORMAT',
    'A. Suggested SEO title (aim for concise, accurate wording).',
    'B. Meta description (compelling, accurate and within a sensible search snippet length).',
    'C. Suggested URL slug.',
    'D. Article in Markdown, with exactly one H1 and useful H2/H3 headings.',
    'E. FAQ section only if genuine reader questions add value.',
    'F. Suggested featured image concept and descriptive alt text.',
    'G. Internal linking notes and sources used.',
    'H. A short fact check list identifying any claims or details that require human verification.',
    '', 'Before finalizing, check that the article meets the brief, is coherent, useful, accurate, and does not claim to have verified facts that were not supplied.'
  ]
  return lines.join('\n')
}

function evaluateArticle(article, f) {
  const text = article.trim()
  const lower = text.toLowerCase()
  const wordCount = text ? text.split(/\s+/).length : 0
  const h1 = (text.match(/^#\s+.+$/gm) || []).length
  const h2 = (text.match(/^##\s+.+$/gm) || []).length
  const checks = [
    ['Article text provided', !!text],
    ['Primary keyword present', !!f.primaryKeyword && lower.includes(f.primaryKeyword.toLowerCase())],
    ['Primary keyword in opening', !!f.primaryKeyword && lower.slice(0, 500).includes(f.primaryKeyword.toLowerCase())],
    ['At least one H1', h1 >= 1],
    ['Exactly one H1', h1 === 1],
    ['At least three H2 headings', h2 >= 3],
    ['SEO title included', /(^|\n)(seo title|title tag|suggested seo title)\s*:/i.test(text)],
    ['Meta description included', /meta description\s*:/i.test(text)],
    ['URL slug included', /(url slug|suggested slug|slug)\s*:/i.test(text)],
    ['Conclusion included', /(^|\n)#{1,3}\s*(conclusion|final thoughts|key takeaways)\b/im.test(text)],
    ['FAQ included', /(^|\n)#{1,3}\s*(faq|frequently asked questions)\b/im.test(text)],
    ['At least 700 words', wordCount >= 700],
    ['Secondary terms used', !f.secondaryKeywords.trim() || f.secondaryKeywords.split(/[,\n]/).map(s=>s.trim()).filter(Boolean).some(s=>lower.includes(s.toLowerCase()))],
    ['Homepage anchor included', !f.homepageAnchor.trim() || lower.includes(f.homepageAnchor.toLowerCase())],
    ['Internal link URL included', !f.internalLinks.trim() || f.internalLinks.split(/\n/).filter(Boolean).some(line=>line.split(/\s+/).some(part=>part.startsWith('http') && text.includes(part)))],
    ['Image guidance included', /alt text|featured image|image concept/i.test(text)],
    ['Fact check notes included', /fact.?check|verify|verification/i.test(text)],
  ]
  const passed = checks.filter(x=>x[1]).length
  return { checks, wordCount, score: Math.round(passed / checks.length * 100) }
}

export default function BlogPromptArchitect() {
  const [form, setForm] = useState(initialForm)
  const [prompt, setPrompt] = useState('')
  const [article, setArticle] = useState('')
  const [tab, setTab] = useState('builder')
  const [notice, setNotice] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [profileName, setProfileName] = useState('My default profile')
  const [saved, setSaved] = useState(false)
  const result = useMemo(() => evaluateArticle(article, form), [article, form])
  const completion = Math.round([form.topic,form.primaryKeyword,form.source].filter(v=>v.trim()).length/3*100)
  const update = (key,value) => setForm(old=>({...old,[key]:value}))
  function generate() {
    if (!form.topic.trim() || !form.primaryKeyword.trim() || !form.source.trim()) { setNotice('Add a topic, primary keyword and source material first.'); return }
    setPrompt(buildPrompt(form)); setNotice('Prompt assembled in your browser. No AI request was made.')
  }
  async function copy(value) {
    if (!value) return
    try { await navigator.clipboard.writeText(value); setNotice('Copied to clipboard.') }
    catch { setNotice('Clipboard access was blocked. Select and copy the text manually.') }
  }
  function saveProfile() {
    try { localStorage.setItem(PROFILE_KEY, JSON.stringify({name:profileName, form:{...form,topic:'',primaryKeyword:'',secondaryKeywords:'',source:'',internalLinks:'',externalSources:'',extraRequirements:''}})); setSaved(true); setNotice('Default profile saved in this browser.') }
    catch { setNotice('Could not save in this browser.') }
  }
  function loadProfile() {
    try { const p=JSON.parse(localStorage.getItem(PROFILE_KEY)||'null'); if(!p) {setNotice('No saved profile found in this browser.');return}; setForm(old=>({...old,...p.form})); setProfileName(p.name||'My default profile'); setNotice('Default profile loaded.') }
    catch { setNotice('Could not load the saved profile.') }
  }
  return <main className="prompt-architect-page sbb-page">
    <section className="prompt-architect-hero"><div className="container prompt-architect-hero-inner"><span className="prompt-architect-badge">SEO BLOG BUILDER</span><h1>Build a better brief. <span>Publish with purpose.</span></h1><p>Create a reusable SEO blog prompt from your own brief, then run a transparent first pass on the article you receive. Prompt assembly and basic scoring work without an AI API.</p><div className="prompt-architect-hero-meta"><span><b>01</b> Configure</span><span><b>02</b> Copy prompt</span><span><b>03</b> Evaluate article</span></div></div></section>
    <section className="prompt-architect-workspace"><div className="container sbb-layout">
      <div className="sbb-intro"><h2>One workspace for your SEO content workflow</h2><p>Set your reusable website preferences once. For each article, add the topic, keyword and source material, then copy the assembled prompt into your preferred AI tool.</p><div className="sbb-tabs"><button className={tab==='builder'?'active':''} onClick={()=>setTab('builder')}>1. Prompt builder</button><button className={tab==='score'?'active':''} onClick={()=>setTab('score')}>2. SEO blog score</button></div></div>
      {tab==='builder' ? <div className="prompt-architect-form-card sbb-card">
        <div className="pa-topbar"><div><span className="prompt-architect-eyebrow">ARTICLE WORKSPACE</span><h2>Configure your blog brief</h2></div><button className="pa-clear" type="button" onClick={()=>{setForm(initialForm);setPrompt('');setNotice('Article brief cleared.')}}>Clear brief</button></div>
        <div className="pa-progress"><div className="pa-progress-track"><span style={{width:completion+'%'}}/></div><span>{completion}% required fields</span></div>
        <div className="pa-section"><div className="pa-section-heading"><span className="pa-section-number">01</span><div><h3>Reusable website defaults</h3><p>Save these once and load them for future articles.</p></div></div>
          <Field label="Profile name"><input className="pa-input" value={profileName} onChange={e=>setProfileName(e.target.value)}/></Field>
          <div className="pa-two-col"><Field label="Website URL"><input className="pa-input" value={form.website} onChange={e=>update('website',e.target.value)} /></Field><Field label="Homepage anchor text"><input className="pa-input" value={form.homepageAnchor} onChange={e=>update('homepageAnchor',e.target.value)}/></Field></div>
          <div className="pa-two-col"><Field label="Default audience"><input className="pa-input" value={form.audience} onChange={e=>update('audience',e.target.value)} placeholder="e.g. founders and marketing teams"/></Field><Field label="Default location"><input className="pa-input" value={form.location} onChange={e=>update('location',e.target.value)}/></Field></div>
          <div className="sbb-actions"><button className="pa-add-link" type="button" onClick={saveProfile}>Save defaults</button><button className="pa-add-link" type="button" onClick={loadProfile}>Load saved defaults</button></div>
        </div>
        <div className="pa-section"><div className="pa-section-heading"><span className="pa-section-number">02</span><div><h3>Article requirements</h3><p>Define the search target and intended reader.</p></div></div>
          <Field label="Blog topic" required><input className="pa-input pa-input-large" value={form.topic} onChange={e=>update('topic',e.target.value)} placeholder="What should this article explain?"/></Field>
          <div className="pa-two-col"><Field label="Primary keyword" required><input className="pa-input" value={form.primaryKeyword} onChange={e=>update('primaryKeyword',e.target.value)} placeholder="Main search query"/></Field><Field label="Search intent"><select className="pa-input" value={form.searchIntent} onChange={e=>update('searchIntent',e.target.value)}>{['Infer from topic and source','Informational','Commercial investigation','Transactional','Navigational'].map(v=><option key={v}>{v}</option>)}</select></Field></div>
          <Field label="Secondary keywords and semantic terms"><textarea className="pa-input" rows={3} value={form.secondaryKeywords} onChange={e=>update('secondaryKeywords',e.target.value)} placeholder="Separate terms with commas or new lines"/></Field>
          <div className="pa-two-col"><Field label="Article type"><select className="pa-input" value={form.articleType} onChange={e=>update('articleType',e.target.value)}>{['Infer from search intent','How to guide','Ultimate guide','Listicle','Comparison','Case study','Explainer','Thought leadership'].map(v=><option key={v}>{v}</option>)}</select></Field><Field label="Target word count"><input className="pa-input" value={form.wordCount} onChange={e=>update('wordCount',e.target.value)}/></Field></div>
          <Field label="Tone"><input className="pa-input" value={form.tone} onChange={e=>update('tone',e.target.value)}/></Field>
        </div>
        <div className="pa-section pa-source-section"><div className="pa-section-heading"><span className="pa-section-number">03</span><div><h3>Source material</h3><p>Notes, research, experience, statistics, examples and source links.</p></div></div><Field label="Your knowledge and research" required><textarea className="pa-input pa-source" rows={9} value={form.source} onChange={e=>update('source',e.target.value)} placeholder="Paste rough notes or source material. The prompt will instruct the writer not to invent missing facts."/></Field></div>
        <div className="pa-advanced-toggle" role="button" tabIndex={0} onClick={()=>setShowAdvanced(v=>!v)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ')setShowAdvanced(v=>!v)}}><div><strong>Advanced controls</strong><small>Internal links, references and special instructions</small></div><span className={showAdvanced?'pa-chevron open':'pa-chevron'}>⌄</span></div>
        {showAdvanced&&<div className="pa-advanced-panel"><Field label="Internal links" hint="Enter one link per line as: anchor text | https://destination"><textarea className="pa-input" rows={4} value={form.internalLinks} onChange={e=>update('internalLinks',e.target.value)} placeholder="performance marketing services | https://www.ashwinjames.com/services/performance-marketing"/></Field><Field label="External sources"><textarea className="pa-input" rows={3} value={form.externalSources} onChange={e=>update('externalSources',e.target.value)} placeholder="Paste trusted source URLs or reference notes"/></Field><Field label="Additional requirements"><textarea className="pa-input" rows={3} value={form.extraRequirements} onChange={e=>update('extraRequirements',e.target.value)} placeholder="Brand rules, exclusions, CTA, schema or publishing notes"/></Field></div>}
        {notice&&<p className="sbb-notice" role="status">{notice}</p>}<button className="prompt-architect-generate" type="button" onClick={generate}>Assemble SEO blog prompt <b>→</b></button><p className="prompt-architect-note">Runs locally in this page. Your brief is not sent to an AI service to assemble the prompt.</p>
        {prompt&&<div className="sbb-prompt-output"><div className="pa-output-head"><div><span className="prompt-architect-eyebrow">READY TO USE</span><h2>Your assembled prompt</h2></div><button className="prompt-architect-copy" onClick={()=>copy(prompt)}>Copy prompt</button></div><textarea className="prompt-architect-output" rows={18} readOnly value={prompt}/></div>}
      </div> : <div className="prompt-architect-form-card sbb-card"><div className="pa-topbar"><div><span className="prompt-architect-eyebrow">FIRST PASS REVIEW</span><h2>Evaluate your generated article</h2></div><button className="pa-clear" onClick={()=>{setArticle('');setNotice('Article text cleared.')}}>Clear article</button></div><p className="sbb-muted">Paste the article returned by your AI tool. The score checks visible structure and phrase presence. It is not a Google ranking prediction or a substitute for editorial review.</p><Field label="Generated article in Markdown"><textarea className="pa-input sbb-article" rows={16} value={article} onChange={e=>setArticle(e.target.value)} placeholder="Paste the SEO title, meta description, slug and article here..."/></Field><div className="sbb-score"><div><span className="prompt-architect-eyebrow">STRUCTURE CHECK SCORE</span><strong>{result.score}<small>/100</small></strong><p>{result.checks.filter(c=>c[1]).length} of {result.checks.length} automated checks passed · {result.wordCount} words</p></div><div className="sbb-score-track"><span style={{width:result.score+'%'}}/></div></div><div className="sbb-checks">{result.checks.map(([label,pass])=><div className="sbb-check" key={label}><span className={pass?'pass':'fail'}>{pass?'✓':'○'}</span>{label}</div>)}</div><div className="pa-trust-note"><span>i</span><div><strong>What this score cannot verify</strong><p>Search intent quality, factual accuracy, originality, source credibility, readability, keyword cannibalization, live links, schema validity and actual search performance require human or external checks.</p></div></div><button className="pa-add-link" onClick={()=>setTab('builder')}>Back to prompt builder</button></div>}
      <aside className="sbb-side"><div className="prompt-architect-form-card"><span className="prompt-architect-eyebrow">HOW IT WORKS</span><ol><li><b>Configure</b><span>Set site preferences and fill in the article brief.</span></li><li><b>Generate and copy</b><span>The page assembles a detailed prompt without calling an AI API.</span></li><li><b>Write externally</b><span>Paste the prompt into your preferred AI writing tool.</span></li><li><b>Review</b><span>Paste the resulting article into the score tab and review each check.</span></li></ol></div><div className="prompt-architect-form-card"><span className="prompt-architect-eyebrow">SCORING TRANSPARENCY</span><p className="sbb-muted">The score is based on 17 simple checks, each weighted equally. Passing a check only confirms that a pattern was detected, not that the content is good or correct.</p><p className="sbb-muted">Saved defaults stay in this browser. They are not synced across devices.</p></div></aside>
    </div></section>
  </main>
}
