import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'

const detailSlugs = new Set(['crm-sales-qualified-lead', 'meta-pixel-capi-signal-loss'])

export default function CaseStudies() {
  return <main className="case-studies-page">
    <section className="case-hero case-hero-minimal">
      <div className="case-container">
        <p className="case-eyebrow">Selected case studies</p>
        <div className="case-minimal-heading">
          <h1>Work that <span>moved the numbers.</span></h1>
          <p>Selected work across paid acquisition, conversion and marketing operations.</p>
        </div>
      </div>
    </section>
    <section className="case-list-section case-list-minimal">
      <div className="case-container">
        <div className="case-list-intro"><span>Selected work</span><span>{String(caseStudies.length).padStart(2,'0')} cases</span></div>
        <div className="case-minimal-list">
          {caseStudies.map((study,index) => {
            const [metric,label] = study.metrics?.[0] || ['','Selected work']
            return <article className="case-minimal-card" key={study.slug}>
              <div className="case-minimal-number">{String(index+1).padStart(2,'0')}</div>
              <div className="case-minimal-main">
                <div className="case-minimal-meta"><span>{study.category}</span><span>{study.period}</span></div>
                <h2>{study.title}</h2>
                <p>{study.summary}</p>
                <div className="case-minimal-focus"><span>Focus</span>{study.focus.split(' · ').map(item => <em key={item}>{item}</em>)}</div>
              </div>
              <div className="case-minimal-result"><strong>{metric}</strong><small>{label}</small></div>
              <div className="case-minimal-action">{detailSlugs.has(study.slug) ? <Link to={`/case-studies/${study.slug}`}>View case study <span>↗</span></Link> : <span>Selected work</span>}</div>
            </article>
          })}
        </div>
        <p className="case-privacy">Specific client names and sensitive data are kept private.</p>
      </div>
    </section>
  </main>
}
