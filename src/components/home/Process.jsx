const steps = [
  ['01', 'Diagnose', 'Understand the offer, audience, funnel and commercial constraint before changing campaigns.'],
  ['02', 'Measure', 'Build the signals needed to distinguish traffic, leads, qualified leads and real business outcomes.'],
  ['03', 'Test', 'Run structured experiments across creative, audience, landing page and follow up.'],
  ['04', 'Scale', 'Increase what works while protecting lead quality, sales capacity and unit economics.'],
]

export default function Process() {
  return (
    <section className="home-section process-section">
      <div className="container">
        <div className="section-heading reveal-home">
          <p className="home-eyebrow">The framework</p>
          <h2>A repeatable process instead of random optimisation.</h2>
        </div>
        <ol className="process-grid">
          {steps.map(([number, title, text]) => (
            <li className="process-card reveal-home" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
