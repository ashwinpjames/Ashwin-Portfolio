const caseStudies = [
  { title: 'CRM & Sales Qualified Lead System', tag: 'CRM · Lead Quality', text: 'A practical system for connecting marketing signals, lead qualification and sales follow up.' },
  { title: 'Performance Marketing Systems', tag: 'Paid Acquisition', text: 'Campaign structures built around creative testing, funnel signals and business level KPIs.' },
  { title: 'Conversion Focused Websites', tag: 'CRO · Web', text: 'Landing experiences designed to turn high intent traffic into conversations.' },
]

export default function CaseStudiesPreview() {
  return (
    <section className="home-section case-studies-preview">
      <div className="container">
        <div className="section-heading split-heading reveal-home">
          <div>
            <p className="home-eyebrow">Selected work</p>
            <h2>Systems built around the actual problem.</h2>
          </div>
          <a className="text-link" href="/case-studies">View all case studies <span>↗</span></a>
        </div>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <a className="case-card reveal-home" href="/case-studies" key={study.title}>
              <span>{study.tag}</span>
              <h3>{study.title}</h3>
              <p>{study.text}</p>
              <strong>Read case study ↗</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
