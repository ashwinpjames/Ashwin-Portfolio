import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toolCategories, toolPlatforms, tools } from '../data/tools.js'

function ToolCard({ tool }) {
  const category = toolCategories.find((item) => item.id === tool.category)?.label
  const platformLabels = tool.platforms.map((id) => toolPlatforms.find((item) => item.id === id)?.label).filter(Boolean)
  const live = tool.status === 'live'
  return <article className={`resource-card ${tool.featured ? 'featured' : ''}`}><div className="resource-card-top"><div className="resource-icon">{tool.icon}</div><span className={`resource-status ${live ? 'live' : ''}`}>{live ? 'Live' : 'Coming soon'}</span></div><div className="resource-type">{tool.type} · {category}</div><h3>{tool.title}</h3><p>{tool.description}</p><div className="resource-platforms">{platformLabels.map((label) => <span key={label}>{label}</span>)}</div>{live ? <Link className="resource-card-link" to={tool.route}>Open tool <span>→</span></Link> : <span className="resource-card-link muted">Coming next <span>→</span></span>}</article>
}

function ToolGrid({ items }) {
  if (!items.length) return <div className="resources-empty">No tools match your current filters.</div>
  return <div className="resource-grid">{items.map((tool) => <ToolCard key={tool.id} tool={tool} />)}</div>
}

export default function Resources() {
  const [view, setView] = useState('all')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [platform, setPlatform] = useState('all')

  const filteredTools = useMemo(() => tools.filter((tool) => {
    const search = query.trim().toLowerCase()
    const matchesSearch = !search || `${tool.title} ${tool.description} ${tool.type}`.toLowerCase().includes(search)
    const matchesCategory = category === 'all' || tool.category === category
    const matchesPlatform = platform === 'all' || tool.platforms.includes(platform)
    return matchesSearch && matchesCategory && matchesPlatform
  }), [query, category, platform])

  const categoryGroups = useMemo(() => toolCategories.map((group) => ({ ...group, items: filteredTools.filter((tool) => tool.category === group.id) })).filter((group) => group.items.length), [filteredTools])
  const platformGroups = useMemo(() => toolPlatforms.map((group) => ({ ...group, items: filteredTools.filter((tool) => tool.platforms.includes(group.id)) })).filter((group) => group.items.length), [filteredTools])

  return <main className="resources-page"><section className="resources-hero-react"><div className="resources-bg-react" aria-hidden="true"><div className="resources-orb r1"/><div className="resources-orb r2"/><div className="resources-orb r3"/><div className="resources-grid"/></div><div className="container resources-hero-content"><p className="resources-badge">Free growth resources</p><h1>Useful tools for <span>better marketing decisions.</span></h1><p>Practical calculators, campaign tools, creative utilities and frameworks built around real performance marketing work.</p><div className="resources-hero-actions"><Link className="resource-button primary" to="/resources/campaign-budget-calculator">Open campaign calculator <span>↗</span></Link><a className="resource-button secondary" href="#resource-library">Explore all tools</a></div><div className="resource-chips"><span>{tools.length} tools planned</span><span>Free to use</span><span>Built for marketers</span><span>UAE focused</span></div></div></section><section className="resources-library" id="resource-library"><div className="container"><div className="resources-heading-row"><div><p className="resources-eyebrow">Resource library</p><h2>Find the tool you need.</h2></div><p>Browse everything in one place, organise the library by marketing category or explore it by platform.</p></div><div className="resource-view-switcher" role="tablist" aria-label="Resource views">{[['all','All Tools'],['category','By Category'],['platform','By Platform']].map(([id,label]) => <button key={id} type="button" role="tab" aria-selected={view === id} className={view === id ? 'active' : ''} onClick={() => setView(id)}>{label}</button>)}</div><div className="resource-filters"><label className="resource-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tools..." /></label>{view !== 'platform' && <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category"><option value="all">All categories</option>{toolCategories.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}</select>}{view !== 'category' && <select value={platform} onChange={(event) => setPlatform(event.target.value)} aria-label="Filter by platform"><option value="all">All platforms</option>{toolPlatforms.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}</select>}</div>{view === 'all' && <ToolGrid items={filteredTools} />}{view === 'category' && <div className="resource-groups">{categoryGroups.map((group) => <section key={group.id} className="resource-group"><div className="resource-group-heading"><div><p className="resources-eyebrow">Category</p><h3>{group.label}</h3></div><span>{group.items.length} tools</span></div><ToolGrid items={group.items} /></section>)}{!categoryGroups.length && <div className="resources-empty">No tools match your current filters.</div>}</div>}{view === 'platform' && <div className="resource-groups">{platformGroups.map((group) => <section key={group.id} className="resource-group"><div className="resource-group-heading"><div><p className="resources-eyebrow">Platform</p><h3>{group.label}</h3></div><span>{group.items.length} tools</span></div><ToolGrid items={group.items} /></section>)}{!platformGroups.length && <div className="resources-empty">No tools match your current filters.</div>}</div>}</div></section></main>
}
