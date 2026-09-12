import { whatsappUrl } from '../../utils/contact.js'
import PlatformMarquee from './PlatformMarquee.jsx'

const proof = ['Based in UAE', 'Meta & Google Ads Specialist', 'Data Driven Performance Marketing', 'End to End Funnel Strategy']

const heroBackground = 'https://res.cloudinary.com/fo4xyppd/image/upload/f_auto,q_auto,c_fill,w_2400,h_1600/v1789221068/dubai-city-skyline-and-waterfront-united-arab-emi-2026-01-09-08-24-38-utc.jpg'

export default function Hero() {
  return <section
    className="home-hero"
    id="top"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(3, 8, 20, 0.72) 0%, rgba(3, 8, 20, 0.64) 48%, rgba(3, 8, 20, 0.86) 100%), url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="home-hero-grid" aria-hidden="true" />
    <div className="home-hero-glow" aria-hidden="true" />
    <div className="container home-hero-content" style={{ paddingBottom: '4.5rem' }}>
      <h1 className="reveal-home">Performance Marketing Specialist</h1>
      <p className="home-eyebrow reveal-home">Growth Driven by Better Marketing</p>
      <p className="home-hero-copy reveal-home">I’m a performance marketing specialist helping businesses in Dubai and across the UAE plan, execute, and scale data driven campaigns that deliver qualified leads, higher conversions, and measurable growth.</p>
      <div className="home-actions reveal-home">
        <a className="home-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a>
        <a className="home-button secondary" href="#case-studies">View case studies <span>↓</span></a>
      </div>
      <div className="hero-proof reveal-home">{proof.map((item) => <span key={item}>✓ {item}</span>)}</div>
    </div>
    <div className="hero-platform-marquee" style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}><PlatformMarquee /></div>
  </section>
}
