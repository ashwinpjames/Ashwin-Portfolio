import { whatsappUrl } from '../../utils/contact.js'
import PlatformMarquee from './PlatformMarquee.jsx'

const proof = ['Based in UAE', 'Meta & Google Ads Specialist', 'Data Driven Performance Marketing', 'End to End Funnel Strategy']

export default function Hero() {
  return <section className="home-hero" id="top">
    <div className="home-hero-grid" aria-hidden="true" />
    <div className="home-hero-glow" aria-hidden="true" />
    <div className="container home-hero-content">
      <p className="home-eyebrow reveal-home">Performance Marketing Specialist</p>
      <h1 className="home-hero-title reveal-home" aria-label="Growth Driven By Better Marketing">
        <span className="hero-title-line">Growth Driven</span>
        <span className="hero-title-line hero-title-accent">By Better Marketing</span>
      </h1>
      <p className="home-hero-copy reveal-home">I’m a performance marketing specialist helping businesses in Dubai and across the UAE plan, execute, and scale data driven campaigns that deliver qualified leads, higher conversions, and measurable growth.</p>
      <div className="home-actions reveal-home">
        <a className="home-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a>
        <a className="home-button secondary" href="#case-studies">View case studies <span>↓</span></a>
      </div>
      <div className="hero-proof reveal-home">{proof.map((item) => <span key={item}><i className="hero-proof-check" aria-hidden="true">✓</i>{item}</span>)}</div>
    </div>
    <div className="hero-platform-marquee"><PlatformMarquee /></div>
  </section>
}
