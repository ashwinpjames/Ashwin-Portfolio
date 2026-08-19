import { whatsappUrl } from '../../utils/contact.js'
import PlatformMarquee from './PlatformMarquee.jsx'

const proof = ['Based in UAE', 'Meta & Google Ads Specialist', 'Data Driven Performance Marketing', 'End to End Funnel Strategy']

export default function Hero() {
  return <section className="home-hero" id="top"><div className="home-hero-grid" aria-hidden="true" /><div className="container home-hero-content" style={{ paddingBottom: '4.5rem' }}><div className="rating-pill reveal-home"><span aria-label="Rated 4.8 out of 5">★★★★★</span><strong>4.8/5</strong><small>client rating</small></div><p className="home-eyebrow reveal-home">Performance Marketing · Dubai · UAE</p><h1 className="reveal-home">Performance Marketing That <span>Drives Growth.</span></h1><p className="home-hero-copy reveal-home">I help UAE businesses reduce wasted ad spend, improve lead quality, and build marketing systems that generate measurable growth.</p><div className="home-actions reveal-home"><a className="home-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a free consultation <span>↗</span></a><a className="home-button secondary" href="#case-studies">View case studies <span>↓</span></a></div><div className="hero-proof reveal-home">{proof.map((item) => <span key={item}>✓ {item}</span>)}</div></div><div className="hero-platform-marquee" style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}><PlatformMarquee /></div></section>
}
