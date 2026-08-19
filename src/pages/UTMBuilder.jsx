import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const PLATFORMS = {
  meta: {
    label: 'Meta Ads',
    source: 'facebook',
    medium: 'paid-social',
    dynamic: [
      ['utm_content', '{{ad.name}}', 'Ad name'],
      ['utm_term', '{{adset.name}}', 'Ad set name'],
      ['campaign_id', '{{campaign.id}}', 'Campaign ID'],
      ['placement', '{{placement}}', 'Placement'],
    ],
    checks: ['Meta Pixel or Conversions API is active', 'Your key conversion event is configured', 'The destination page is receiving analytics data'],
  },
  google: {
    label: 'Google Ads',
    source: 'google',
    medium: 'cpc',
    dynamic: [
      ['utm_content', '{creative}', 'Creative ID'],
      ['utm_term', '{keyword}', 'Keyword'],
      ['campaign_id', '{campaignid}', 'Campaign ID'],
      ['adgroup_id', '{adgroupid}', 'Ad group ID'],
      ['match_type', '{matchtype}', 'Match type'],
      ['device', '{device}', 'Device'],
      ['network', '{network}', 'Network'],
    ],
    checks: ['Google Ads conversion tracking or GA4 conversion is active', 'Google Ads auto tagging is enabled', 'The destination page is receiving analytics data'],
  },
  other: {
    label: 'Other',
    source: '',
    medium: '',
    dynamic: [],
    checks: ['Analytics is active on the destination page', 'You have a consistent source and medium naming convention'],
  },
}

const STANDARD = [
  ['utm_source', 'Source', 'Required', 'facebook'],
  ['utm_medium', 'Medium', 'Required', 'paid-social'],
  ['utm_campaign', 'Campaign', 'Required', 'golden-visa-august'],
  ['utm_content', 'Content', 'Optional', 'carousel-v2'],
  ['utm_term', 'Term', 'Optional', 'residency-consultant'],
]

function clean(value) {
  return String(value || '').trim().toLowerCase().replace(/[^a-z0-9._{}]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

function initialValues(platform) {
  return { utm_source: PLATFORMS[platform].source, utm_medium: PLATFORMS[platform].medium, utm_campaign: '' }
}

export default function UTMBuilder() {
  const [platform, setPlatform] = useState('meta')
  const [baseUrl, setBaseUrl] = useState('')
  const [values, setValues] = useState(initialValues('meta'))
  const [active, setActive] = useState({ utm_source: true, utm_medium: true, utm_campaign: true, utm_content: false, utm_term: false })
  const [dynamic, setDynamic] = useState([])
  const [checks, setChecks] = useState([])
  const [custom, setCustom] = useState([])
  const [customKey, setCustomKey] = useState('')
  const [customValue, setCustomValue] = useState('')
  const [copied, setCopied] = useState(false)

  const config = PLATFORMS[platform]

  const changePlatform = (next) => {
    setPlatform(next)
    setValues(initialValues(next))
    setDynamic([])
    setChecks([])
  }

  const params = useMemo(() => {
    const result = []
    STANDARD.forEach(([key]) => {
      if (active[key] && values[key]) result.push([key, clean(values[key])])
    })
    config.dynamic.forEach(([key, value]) => {
      if (dynamic.includes(value)) result.push([key, value])
    })
    custom.forEach((item) => result.push([item.key, item.value]))
    return result
  }, [active, values, config, dynamic, custom])

  const result = useMemo(() => {
    if (!baseUrl.trim()) return ''
    try {
      const url = new URL(baseUrl.trim())
      params.forEach(([key, value]) => url.searchParams.set(key, value))
      return url.toString()
    } catch {
      return ''
    }
  }, [baseUrl, params])

  const warnings = []
  if (baseUrl && !/^https?:\/\//i.test(baseUrl.trim())) warnings.push('Use a complete URL beginning with https://')
  STANDARD.filter((item) => active[item[0]] && item[2] === 'Required').forEach(([key, label]) => {
    if (!values[key]?.trim()) warnings.push(`Enter a ${label.toLowerCase()} value`)
  })

  const addCustom = () => {
    const key = clean(customKey)
    const value = clean(customValue)
    if (!key || !value) return
    setCustom((current) => [...current.filter((item) => item.key !== key), { key, value }])
    setCustomKey('')
    setCustomValue('')
  }

  const copy = async () => {
    if (!result || warnings.length) return
    await navigator.clipboard.writeText(result)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const reset = () => {
    setBaseUrl('')
    setValues(initialValues(platform))
    setDynamic([])
    setCustom([])
    setChecks([])
    setCopied(false)
  }

  return <main className="utm-page">
    <div className="container utm-container">
      <Link className="utm-back" to="/resources">← Back to resources</Link>
      <header className="utm-hero">
        <p className="resources-eyebrow">Free marketing tool</p>
        <h1>UTM <span>Builder.</span></h1>
        <p>Build consistent campaign URLs for Meta, Google and other channels without manually formatting tracking parameters.</p>
      </header>

      <section className="utm-section">
        <div className="utm-section-title"><span>01</span><div><h2>Choose your platform</h2><p>Set sensible source and medium defaults for your campaign.</p></div></div>
        <div className="utm-platforms">{Object.entries(PLATFORMS).map(([id, item]) => <button type="button" key={id} className={platform === id ? 'active' : ''} onClick={() => changePlatform(id)}><strong>{item.label}</strong><small>{id === 'meta' ? 'Facebook and Instagram' : id === 'google' ? 'Search, Display, PMax and YouTube' : 'Email, social, referral and other channels'}</small></button>)}</div>
      </section>

      <section className="utm-section">
        <div className="utm-section-title"><span>02</span><div><h2>Destination URL</h2><p>Use the exact page visitors should land on.</p></div></div>
        <label className="utm-field full"><span>Landing page URL <b>Required</b></span><input value={baseUrl} onChange={(event) => setBaseUrl(event.target.value)} placeholder="https://example.com/landing-page" /><small>Existing query parameters are preserved and matching UTM parameters are updated.</small></label>
      </section>

      <section className="utm-section">
        <div className="utm-section-title"><span>03</span><div><h2>Campaign parameters</h2><p>Use lowercase naming and keep your campaign naming consistent.</p></div></div>
        <div className="utm-chip-row">{STANDARD.map(([key, label, required]) => <label key={key} className={active[key] ? 'utm-chip active' : 'utm-chip'}><input type="checkbox" checked={active[key]} disabled={required === 'Required'} onChange={(event) => setActive((current) => ({ ...current, [key]: event.target.checked }))} /><span>{label}</span><code>{key}</code></label>)}</div>
        <div className="utm-fields">{STANDARD.filter(([key]) => active[key]).map(([key, label, required, placeholder]) => <label className="utm-field" key={key}><span>{label} {required === 'Required' && <b>Required</b>}</span><input value={values[key] || ''} onChange={(event) => setValues((current) => ({ ...current, [key]: event.target.value }))} placeholder={placeholder} /><small>{key}</small></label>)}</div>
      </section>

      {config.dynamic.length > 0 && <section className="utm-section">
        <div className="utm-section-title"><span>04</span><div><h2>Platform dynamic parameters</h2><p>Optional values that can be populated automatically by the ad platform.</p></div></div>
        <div className="utm-chip-row">{config.dynamic.map(([key, value, label]) => <label key={`${key}-${value}`} className={dynamic.includes(value) ? 'utm-chip active' : 'utm-chip'}><input type="checkbox" checked={dynamic.includes(value)} onChange={() => setDynamic((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value])} /><span>{label}</span><code>{value}</code></label>)}</div>
      </section>}

      <section className="utm-section">
        <div className="utm-section-title"><span>05</span><div><h2>Tracking check</h2><p>Confirm the measurement layer before relying on the campaign data.</p></div></div>
        <div className="utm-checks">{config.checks.map((item, index) => <label key={item}><input type="checkbox" checked={checks.includes(index)} onChange={() => setChecks((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])} /><span>{item}</span></label>)}</div>
        <div className={checks.length === config.checks.length ? 'utm-notice good' : 'utm-notice'}>{checks.length === config.checks.length ? '✓ Tracking checks completed. You can build the link.' : `${config.checks.length - checks.length} tracking check${config.checks.length - checks.length === 1 ? '' : 's'} still unconfirmed. You can still build the link.`}</div>
      </section>

      <section className="utm-section">
        <div className="utm-section-title"><span>06</span><div><h2>Custom parameters</h2><p>Add another parameter only when your reporting system needs it.</p></div></div>
        <div className="utm-custom"><input value={customKey} onChange={(event) => setCustomKey(event.target.value)} placeholder="Key e.g. audience" /><input value={customValue} onChange={(event) => setCustomValue(event.target.value)} placeholder="Value e.g. lookalike-1pct" /><button type="button" onClick={addCustom}>Add</button></div>
        {custom.length > 0 && <div className="utm-custom-list">{custom.map((item) => <span key={item.key}>{item.key}={item.value}<button type="button" onClick={() => setCustom((current) => current.filter((entry) => entry.key !== item.key))}>×</button></span>)}</div>}
      </section>

      <section className="utm-output">
        <div className="utm-output-head"><div><p className="resources-eyebrow">Generated URL</p><h2>{result && !warnings.length ? 'Ready to use.' : 'Complete the required fields.'}</h2></div><span>{result ? `${result.length} characters` : 'Draft'}</span></div>
        <div className="utm-url">{result && !warnings.length ? result : 'Your tagged URL will appear here.'}</div>
        {warnings.length > 0 && <ul className="utm-warnings">{warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul>}
        <div className="utm-actions"><button type="button" className="utm-primary" disabled={!result || warnings.length > 0} onClick={copy}>{copied ? 'Copied ✓' : 'Copy URL'}</button><button type="button" onClick={reset}>Reset</button></div>
      </section>

      <p className="utm-note">UTMs help identify campaign context in analytics. They do not replace platform conversion tracking, auto tagging or proper CRM attribution.</p>
    </div>
  </main>
}
