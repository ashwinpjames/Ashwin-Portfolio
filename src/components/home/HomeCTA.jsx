import { whatsappUrl } from '../../utils/contact.js'

export default function HomeCTA() {
  return (
    <section className="home-cta" id="consultation">
      <div className="container home-cta-inner reveal-home">
        <p className="home-eyebrow">Start with the problem</p>
        <h2>Have a growth problem worth solving?</h2>
        <p>Tell me what you are trying to improve, where the funnel is breaking and what the business needs next.</p>
        <a className="home-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
      </div>
    </section>
  )
}
