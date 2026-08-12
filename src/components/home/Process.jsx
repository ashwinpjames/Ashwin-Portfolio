const steps = [
  ['01', 'Discovery', 'Understand goals, economics and constraints.'],
  ['02', 'Audit', 'Review demand, campaigns, conversion paths and measurement.'],
  ['03', 'Strategy', 'Choose the clearest route to meaningful progress.'],
  ['04', 'Implementation', 'Build and deploy with quality controls in place.'],
  ['05', 'Optimisation', 'Improve the signals that connect to qualified growth.'],
  ['06', 'Scale', 'Expand proven activity with intent and control.'],
]

export default function Process() {
  return <section className="home-section process-section"><div className="container"><div className="section-heading reveal-home"><p className="home-eyebrow">The growth framework</p><h2>A methodical process, without the theatre.</h2></div><ol className="process-grid six">{steps.map(([number, title, text]) => <li className="process-card reveal-home" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
}
