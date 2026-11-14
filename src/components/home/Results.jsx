const measures = [
  ['Lead quality', 'Connect campaign leads with qualification and sales feedback.'],
  ['Acquisition cost', 'Review cost per qualified enquiry alongside lead volume.'],
  ['Conversion', 'Find friction between the ad click, landing page and enquiry.'],
]
export default function Results() {
  return <section id="results" className="home-section results-section"><div className="container"><div className="section-heading reveal-home"><p className="home-eyebrow">What we measure</p><h2>Make marketing decisions around the leads your business needs.</h2></div><div className="results-grid">{measures.map(([title, text]) => <article className="result-card reveal-home" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
}
