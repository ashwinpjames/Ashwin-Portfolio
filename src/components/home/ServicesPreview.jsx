const services = [
  { title: 'Performance Marketing', text: 'Paid acquisition across Meta and Google with a focus on qualified demand, efficient spend and scalable testing.' },
  { title: 'Conversion Optimisation', text: 'Landing pages and funnels designed to reduce friction and improve the percentage of traffic that becomes a useful enquiry.' },
  { title: 'Analytics & Reporting', text: 'Measurement systems that connect campaign data with the metrics that matter to sales and management.' },
  { title: 'CRM & Automation', text: 'Lead routing, lifecycle stages and automation that help marketing and sales work from the same operating system.' },
]

export default function ServicesPreview() {
  return (
    <section className="home-section services-preview" id="services">
      <div className="container">
        <div className="section-heading split-heading reveal-home">
          <div>
            <p className="home-eyebrow">What I do</p>
            <h2>Growth work across the whole funnel.</h2>
          </div>
          <p>Instead of treating advertising, websites, analytics and CRM as separate problems, I connect them into one measurable system.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <a className="service-card reveal-home" href="/services" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="service-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
