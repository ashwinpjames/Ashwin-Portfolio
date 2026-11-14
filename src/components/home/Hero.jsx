import { whatsappUrl } from '../../utils/contact.js'
import PlatformMarquee from './PlatformMarquee.jsx'

const proof = ['Dubai & UAE Focus', 'Meta & Google Ads Specialist', 'Data Driven Performance Marketing', 'End to End Funnel Strategy']

export default function Hero() {
  return <section className="home-hero" id="top">
    <div className="home-hero-grid" aria-hidden="true" />
    <div className="home-hero-glow" aria-hidden="true" />
    <div className="container home-hero-content">
      <h1 className="home-eyebrow reveal-home">Performance Marketing Specialist in Dubai, UAE</h1>
      <h2 className="home-hero-title reveal-home" aria-label="Growth Driven By Better Marketing">
        <span className="hero-title-line">Growth Driven</span>
        <span className="hero-title-line hero-title-accent">By Better Marketing</span>
      </h2>
      <p className="home-hero-copy reveal-home">Need better leads from your marketing? I’m Ashwin James, a performance marketing specialist and consultant in Dubai. I connect Meta Ads, Google Ads, landing pages and CRM to help UAE businesses improve lead quality and make better budget decisions.</p>
      <div className="home-actions reveal-home">
        <a className="home-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss Your Marketing Goals <span>↗</span></a>
        <a className="home-button secondary" href="#services">Explore services <span>↓</span></a>
      </div>
      <div className="hero-proof reveal-home">{proof.map((item) => <span key={item}><i className="hero-proof-check" aria-hidden="true">✓</i>{item}</span>)}</div>
    </div>
    <div className="hero-platform-marquee"><PlatformMarquee /></div>
  </section>
}
