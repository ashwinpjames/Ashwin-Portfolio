import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'

function CaseVisual({ study }) {
  if (study.category === 'CRM Analytics') return <div className="mini-pipeline" aria-hidden="true"><span>Leads</span><i>↓</i><span>Qualified</span><i>↓</i><span>Sales</span></div>
  if (study.category === 'Healthcare') return <div className="mini-bars" aria-hidden="true"><b style={{ height: '48%' }}/><b style={{ height: '72%' }}/><b style={{ height: '92%' }}/></div>
  if (study.category === 'Education') return <div className="mini-test" aria-hidden="true"><span>A</span><span>B</span><span>C</span><strong>↗</strong></div>
  return <div className="mini-search" aria-hidden="true"><span>Search</span><span>Click</span><span>Lead</span></div>
}

export default function CaseStudies() {
  return <main className="case-studies-page">
    <section className="case-hero">
      <div className="case-grid-bg" aria-hidden="true"/>
      <div className="case-container case-hero-inner">
        <p className="case-eyebrow">Selected case studies</p>
        <div className="case-hero-grid">
          <div className="case-hero-copy">
            <h1>Work measured in <span>business impact.</span></h1>
            <p>A small selection of growth engagements across demand capture, conversion and lead management. Company details are kept private where needed.</p>
          </div>
          <div className="case-hero-panel" aria-label="Case study framework">
            <div className="case-panel-label">CASE STUDY FRAMEWORK</div>
            <div className="case-panel-orbit"><span className="case-node node-top">INPUT</span><span className="case-node node-right">STRATEGY</span><span className="case-node node-bottom">EXECUTION</span><span className="case-node node-left">OUTCOME</span><div className="case-panel-core"><strong>01</strong><small>CASE</small></div></div>
            <div className="case-panel-footer"><span>Problem</span><i>→</i><span>Work</span><i>→</i><span>Impact</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="case-list-section">
      <div className="case-container">
        <div className="case-list-intro"><p>SELECTED WORK</p><span>Outcomes first. Context second.</span></div>
        <div className="case-grid case-grid-minimal">
          {caseStudies.map((study, index) => {
            const [primaryMetric, primaryLabel] = study.metrics[0]
            const [secondaryMetric, secondaryLabel] = study.metrics[1] || []
            return <article className={`case-card case-card-minimal case-tone-${index}`} key={study.slug}>
              <div className="case-card-top"><span>{study.category}</span><small>{study.period}</small></div>
              <div className="case-result-row">
                <div className="case-result"><strong>{primaryMetric}</strong><span>{primaryLabel}</span>{secondaryMetric && <small>{secondaryMetric} {secondaryLabel}</small>}</div>
                <CaseVisual study={study}/>
              </div>
              <div className="case-card-copy"><h2>{study.title}</h2><p>{study.summary}</p><div className="case-focus"><span>Focus</span>{study.focus.split(' · ').map(item => <em key={item}>{item}</em>)}</div></div>
              {study.slug === 'crm-sales-qualified-lead' ? <Link className="case-read" to={`/case-studies/${study.slug}`}>Read case study <span>↗</span></Link> : <span className="case-read case-private">Selected work <span>↗</span></span>}
            </article>
          })}
        </div>
        <div className="case-privacy"><span>◌</span> Specific client names and sensitive data are kept private.</div>
      </div>
    </section>
  </main>
}
