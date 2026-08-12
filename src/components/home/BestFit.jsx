const audiences = [
  ['UAE SMEs', 'Growing businesses ready to turn paid media into a more dependable source of qualified enquiries.'],
  ['Healthcare businesses', 'Clinics and providers that need to attract the right patients while protecting enquiry quality and cost.'],
  ['Immigration and visa services', 'Teams that need clearer qualification, stronger trust, and faster response paths for high intent prospects.'],
  ['Professional services', 'Advisory, consulting and specialist firms with a valuable service that needs a sharper demand engine.'],
  ['B2B companies', 'Businesses with longer decision cycles that need to connect acquisition, qualification and follow up.'],
  ['Consistent marketing investors', 'Businesses prepared to invest consistently, learn from the data, and improve performance over time.'],
]

export default function BestFit() {
  return (
    <section id="who-i-work-best-with" className="home-section best-fit-section">
      <div className="container">
        <div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Best fit</p><h2>Who I work best with.</h2></div><p>Businesses that see performance marketing as a connected system, not a collection of isolated campaigns.</p></div>
        <div className="audience-grid">
          {audiences.map(([title, text]) => <article className="surface audience-card reveal-home" key={title}><span className="service-icon" aria-hidden="true">↗</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  )
}
