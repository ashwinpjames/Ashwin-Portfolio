import { whatsappUrl } from '../../utils/contact.js'

const calendlyUrl = 'https://calendly.com/ashwinjames-marketing/30min'

export default function HomeCTA() {
  return <section id="consultation" className="home-cta"><div className="home-cta-glow" /><div className="container home-cta-inner"><p className="home-eyebrow reveal-home">A focused first conversation</p><h2 className="reveal-home">Ready to generate better leads?</h2><p className="reveal-home">Let’s discuss your business, identify the clearest growth opportunities, and build a marketing system that delivers measurable results.</p><div className="home-cta-actions reveal-home"><a className="home-button primary" href={calendlyUrl} target="_blank" rel="noreferrer">Book a strategy call <span>↗</span></a><a className="home-button secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp <span>●</span></a></div><small className="reveal-home">No hard sell. Just a useful conversation about what is possible.</small></div></section>
}
