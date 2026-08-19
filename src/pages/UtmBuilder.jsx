import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const PLATFORMS = {
  meta: { label: 'Meta Ads', source: 'facebook', medium: 'paid-social', dynamic: [['utm_content', '{{ad.name}}'], ['utm_term', '{{adset.name}}'], ['campaign_id', '{{campaign.id}}'], ['placement', '{{placement}}']] },
  google: { label: 'Google Ads', source: 'google', medium: 'cpc', dynamic: [['utm_content', '{creative}'], ['utm_term', '{keyword}'], ['campaign_id', '{campaignid}'], ['adgroup_id', '{adgroupid}'], ['match_type', '{matchtype}'], ['device', '{device}'], ['network', '{network}']] },
  other: { label: 'Other / Generic', source: '', medium: '', dynamic: [] },
}

const fields = [
  ['utm_source', 'Source', true, 'facebook'],
  ['utm_medium', 'Medium', true, 'paid-social'],
  ['utm_campaign', 'Campaign', true, 'golden-visa-portugal-aug'],
  ['utm_content', 'Content', false, 'carousel-v2'],
  ['utm_term', 'Term', false, 'residency-consultant'],
]

const QUICK_PARAMS = [
  ['audience', 'business-owners'],
  ['location', 'dubai'],
  ['creative', 'video-01'],
  ['offer', 'free-consultation'],
  ['placement', 'instagram-stories'],
  ['variant', 'a'],
]

function slug(value) { return String(value || '').trim().toLowerCase().replace(/[^a-z0-9_.{}-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') }

export default function UtmBuilder() {
  const [platform, setPlatform] = useState('meta')
  const [url, setUrl] = useState('')
  const [values, setValues] = useState({ utm_source: 'facebook', utm_medium: 'paid-social' })
  const [dynamic, setDynamic] = useState([])
  const [custom, setCustom] = useState([])
  const [customKey, setCustomKey] = useState('')
  const [customValue, setCustomValue] = useState('')
  const [copied, setCopied] = useState(false)

  const changePlatform = (id) => {
    setPlatform(id)
    setValues((current) => ({ ...current, utm_source: PLATFORMS[id].source, utm_medium: PLATFORMS[id].medium }))
    setDynamic([])
  }

  const result = useMemo(() => {
    const warnings = []
    let base = url.trim()
    if (!base) warnings.push('Add the destination URL.')
    if (base && !/^https?:\/\//i.test(base)) warnings.push('Use a full URL starting with http:// or https://.')
    try { if (base) new URL(base) } catch { if (base) warnings.push('Enter a valid destination URL.') }
    const params = []
    fields.forEach(([key, , required]) => { if (values[key]) params.push([key, slug(values[key])]); else if (required) warnings.push(`Fill in ${key}.`) })
    PLATFORMS[platform].dynamic.forEach(([key, value]) => { if (dynamic.includes(key)) params.push([key, value]) })
    custom.forEach((item) => params.push(item))
    if (!base || warnings.length) return { warnings, full: '', params }
    const parsed = new URL(base)
    params.forEach(([key, value]) => parsed.searchParams.set(key, value))
    return { warnings, full: parsed.toString(), params }
  }, [url, values, platform, dynamic, custom])

  const copy = async () => {
    if (!result.full) return
    await navigator.clipboard.writeText(result.full)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  const addCustom = () => {
    const key = slug(customKey)
    const value = slug(customValue)
    if (!key || !value) return
    setCustom((current) => [...current, [key, value]])
    setCustomKey('')
    setCustomValue('')
  }

  const addQuickParam = ([key, value]) => {
    setCustom((current) => current.some(([existingKey]) => existingKey === key) ? current : [...current, [key, value]])
  }

  return <main className="utm-builder-page"><div className="container">
    <Link className="utm-back" to="/resources">← Back to resources</Link>
    <section className="utm-hero"><p className="resources-eyebrow">Free marketing tool</p><h1>Build cleaner <span>UTM links.</span></h1><p>Create consistent campaign URLs for Meta, Google and other channels without manually building query strings.</p></section>
    <section className="utm-tool">
      <div className="utm-section"><div className="utm-heading"><span>01</span><div><h2>Choose your platform</h2><p>Sets sensible source and medium defaults.</p></div></div><div className="utm-platforms">{Object.entries(PLATFORMS).map(([id, item]) => <button type="button" key={id} className={platform === id ? 'active' : ''} onClick={() => changePlatform(id)}><strong>{item.label}</strong><small>{id === 'meta' ? 'Facebook & Instagram' : id === 'google' ? 'Search, Display, PMax & YouTube' : 'Email, organic, referral and more'}</small></button>)}</div></div>
      <div className="utm-section"><div className="utm-heading"><span>02</span><div><h2>Destination URL</h2><p>Use the exact live landing page URL.</p></div></div><input className="utm-input full" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/landing-page" /></div>
      <div className="utm-section"><div className="utm-heading"><span>03</span><div><h2>Campaign parameters</h2><p>Required fields are marked. Values are normalised automatically.</p></div></div><div className="utm-fields">{fields.map(([key, label, required, placeholder]) => <label className="utm-field" key={key}><span>{label} {required && <b>required</b>}</span><input className="utm-input" value={values[key] || ''} onChange={(e) => setValues((current) => ({ ...current, [key]: e.target.value }))} placeholder={placeholder} /></label>)}</div></div>
      {PLATFORMS[platform].dynamic.length > 0 && <div className="utm-section"><div className="utm-heading"><span>04</span><div><h2>Platform dynamic parameters</h2><p>Optional tokens can populate values automatically when the ad runs.</p></div></div><div className="utm-chips">{PLATFORMS[platform].dynamic.map(([key, value]) => <label key={key} className={dynamic.includes(key) ? 'checked' : ''}><input type="checkbox" checked={dynamic.includes(key)} onChange={(e) => setDynamic((current) => e.target.checked ? [...current, key] : current.filter((item) => item !== key))} />{key} <code>{value}</code></label>)}</div></div>}
      <div className="utm-section"><div className="utm-heading"><span>05</span><div><h2>Custom parameters</h2><p>Add useful reporting context instantly, or create your own parameter.</p></div></div><div className="utm-quick"><div className="utm-quick-label">Quick add</div><div className="utm-quick-grid">{QUICK_PARAMS.map((item) => <button type="button" key={item[0]} onClick={() => addQuickParam(item)} disabled={custom.some(([key]) => key === item[0])}><strong>{item[0]}</strong><span>{item[1]}</span><i>+</i></button>)}</div></div><div className="utm-custom"><input className="utm-input" value={customKey} onChange={(e) => setCustomKey(e.target.value)} placeholder="custom key, e.g. sales_rep" /><input className="utm-input" value={customValue} onChange={(e) => setCustomValue(e.target.value)} placeholder="custom value, e.g. ashwin" /><button type="button" onClick={addCustom}>Add custom</button></div>{custom.length > 0 && <div className="utm-custom-list">{custom.map(([key, value], index) => <span key={`${key}-${index}`}>{key}={value}<button type="button" onClick={() => setCustom((current) => current.filter((_, i) => i !== index))}>×</button></span>)}</div>}</div>
      <div className="utm-output"><div className="utm-output-top"><span><i className={result.full ? 'ready' : ''} />{result.full ? 'Ready to copy' : result.warnings[0] || 'Waiting for your URL'}</span>{result.full && <small>{result.full.length} chars</small>}</div><div className="utm-url">{result.full || 'Your tagged URL will appear here.'}</div>{result.warnings.length > 0 && <ul>{result.warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul>}<div className="utm-actions"><button className="primary" type="button" disabled={!result.full} onClick={copy}>{copied ? 'Copied ✓' : 'Copy link'}</button><button type="button" onClick={() => { setUrl(''); setValues({ utm_source: PLATFORMS[platform].source, utm_medium: PLATFORMS[platform].medium }); setDynamic([]); setCustom([]) }}>Reset</button></div></div>
    </section>
    <section className="utm-note"><strong>Remember:</strong> UTMs identify campaign traffic. They do not replace GA4, Google Ads conversion tracking, Meta Pixel, Conversions API or CRM attribution.</section>
  </div></main>
}
