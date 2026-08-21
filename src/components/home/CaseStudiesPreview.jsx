import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies.js'

const publishedCaseStudies = new Set(['crm-sales-qualified-lead', 'meta-pixel-capi-signal-loss'])

export default function CaseStudiesPreview() {
  const studies = caseStudies.filter((study) => publishedCaseStudies.has(study.slug)).slice(0, 3)

  return <section id="case-studies" className="home-section case-studies-preview">
    <div className="container">
      <div className="section-heading split-heading reveal-home">
        <div><p className="home-eyebrow">Selected case studies</p><h2>Work measured in business impact.</h2></div>
        <Link className="text-link" to="/case-studies">View all case studies <span>→</span></Link>
      </div>
      <div className="case-grid">
        {studies.map((study) => {
          const [metric1, label1] = study.metrics?.[0] || ['', '']
          const [metric2, label2] = study.metrics?.[1] || ['', '']
          return <article className="case-card reveal-home" key={study.slug}>
            <div className="case-graph">
              <div><span>{study.category}</span><small>{study.period}</small></div>
              <div className="graph-line" aria-hidden="true"><i /></div>
              <div className="case-metrics"><div><small>{label1}</small><strong>{metric1}</strong></div><div><small>{label2}</small><strong>{metric2}</strong></div></div>
            </div>
            <div className="case-body"><p>{study.focus.replaceAll(' · ', ' · ')}</p><h3>{study.title}</h3><span>{study.summary}</span><Link to={`/case-studies/${study.slug}`}>View case study <span>→</span></Link></div>
          </article>
        })}
      </div>
    </div>
  </section>
}
