import portrait from '../../../assets/ashwin-james-portrait.png'

export default function AboutPreview() {
  return (
    <section className="home-section about-preview">
      <div className="container about-preview-grid">
        <div className="portrait-frame reveal-home">
          <img src={portrait} alt="Ashwin James" loading="lazy" />
        </div>
        <div className="about-preview-copy reveal-home">
          <p className="home-eyebrow">How I think</p>
          <h2>Acquisition is only useful when the business can absorb the demand.</h2>
          <p>I work at the intersection of paid acquisition, conversion, analytics and CRM operations. The goal is not simply more leads. It is a system where better leads can be measured, routed and converted.</p>
          <a className="text-link" href="/about">More about my approach <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}
