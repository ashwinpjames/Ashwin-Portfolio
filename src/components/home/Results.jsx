const results = [
  { value: 'Qualified', label: 'lead focused acquisition' },
  { value: 'Lower waste', label: 'through better funnel signals' },
  { value: 'Clearer data', label: 'from ad to CRM' },
  { value: 'Scalable', label: 'systems built for growth' },
]

export default function Results() {
  return (
    <section className="home-section results-section">
      <div className="container">
        <div className="section-heading reveal-home">
          <p className="home-eyebrow">The outcome</p>
          <h2>Marketing should connect spend to business results.</h2>
          <p>I focus on the full path from acquisition to sales so the numbers you optimise actually mean something to the business.</p>
        </div>
        <div className="results-grid">
          {results.map((item) => (
            <article className="result-card reveal-home" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
