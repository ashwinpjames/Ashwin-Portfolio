const audiences = [
  ['UAE SMEs', 'Growing businesses ready to turn paid media into a more dependable source of qualified enquiries.', 'building'],
  ['Healthcare businesses', 'Clinics and providers that need to attract the right patients while protecting enquiry quality and cost.', 'health'],
  ['Immigration and visa services', 'Teams that need clearer qualification, stronger trust, and faster response paths for high intent prospects.', 'globe'],
  ['Professional services', 'Advisory, consulting and specialist firms with a valuable service that needs a sharper demand engine.', 'briefcase'],
  ['B2B companies', 'Businesses with longer decision cycles that need to connect acquisition, qualification and follow up.', 'network'],
  ['Consistent marketing investors', 'Businesses prepared to invest consistently, learn from the data, and improve performance over time.', 'growth'],
]

function AudienceIcon({ type }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (type === 'building') return <svg {...common}><path d="M4 21h16"/><path d="M6 21V5l6-2 6 2v16"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/><path d="M11 21v-3h2v3"/></svg>
  if (type === 'health') return <svg {...common}><path d="M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.5Z"/><path d="M8.5 10h2l1-2.2 1.4 4.4 1-2.2h1.6"/></svg>
  if (type === 'globe') return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
  if (type === 'briefcase') return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>
  if (type === 'network') return <svg {...common}><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.9 7.5-3.8M8.2 13.1l7.5 3.8"/></svg>
  return <svg {...common}><path d="M4 19V9M10 19V5M16 19v-7M22 19V3"/><path d="m3 15 6-5 5 2 7-7"/><path d="M18 5h3v3"/></svg>
}

export default function BestFit() {
  return (
    <section id="who-i-work-best-with" className="home-section best-fit-section">
      <div className="container">
        <div className="section-heading split-heading reveal-home"><div><p className="home-eyebrow">Best fit</p><h2>Who I work best with.</h2></div><p>Businesses that see performance marketing as a connected system, not a collection of isolated campaigns.</p></div>
        <div className="audience-grid">
          {audiences.map(([title, text, icon]) => <article className="surface audience-card reveal-home" key={title}><span className="service-icon audience-icon" aria-hidden="true"><AudienceIcon type={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  )
}
