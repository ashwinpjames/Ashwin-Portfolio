import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'

const detailSlugs = new Set(['crm-sales-qualified-lead', 'meta-pixel-capi-signal-loss'])

export default function CaseStudies() {
  return <main className="case-studies-page">
    <section className="case-hero case-hero-minimal">
      <div className="case-container">
        <h1 className="case-eyebrow">Performance Marketing Frameworks</h1>
        <div className="case-minimal-heading">
          <h2>A clearer view of <span>what to improve.</span></h2>
          <p>Practical approaches to lead qualification, tracking and marketing measurement.</p>
        </div>
      </div>
    </section>
    <section className="case-list-section case-list-minimal">
      <div className="case-container">
        <div className="case-list-intro"><span>Practical frameworks</span><span>{String(caseStudies.length).padStart(2,'0')} frameworks</span></div>
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
              <div className="case-minimal-action">{detailSlugs.has(study.slug) ? <Link to={`/case-studies/${study.slug}`}>Explore framework <span>↗</span></Link> : <span>Practical frameworks</span>}</div>
            </article>
          })}
        </div>
        <p className="case-privacy">These frameworks explain an approach; they do not represent verified client performance results.</p>
      </div>
    </section>
  </main>
}
