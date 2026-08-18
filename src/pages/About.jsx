import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import portrait from '../../assets/ashwin-james-portrait.png'
import '../styles/about-brands.css'

const principles = [
  ['01', 'Start with the business', 'The market, the sales process, unit economics and the real constraint all come before a channel recommendation.'],
  ['02', 'Make the signal clear', 'Priorities, assumptions and performance signals stay visible so decisions become faster and more useful.'],
  ['03', 'Build for the handover', 'Every improvement should make your internal team more capable, not more dependent on an agency.'],
]

const expectations = [
  ['Direct', 'Fast feedback and straightforward conversations.'],
  ['Focused', 'Effort concentrated on the few levers that matter most.'],
  ['Measured', 'A shared view of performance and what changes next.'],
]

const industries = [
  'Immigration & visa services',
  'Healthcare & wellness',
  'Attestation & professional services',
  'Recruitment & HR',
  'Business services & SMEs',
  'B2B & high consideration services',
  'Marketing agencies',
  'Ecommerce',
]

const brandLogos = [
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/Vector-1.png', alt: 'Saudi Boost logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/Vector_2.png', alt: 'Asian Gold logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/notespaedia_logo_white_1.png', alt: 'Notespaedia logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/Vector.png', alt: 'Asian Gold logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1786969723/BOISIA.png', alt: 'BOISIA logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1786969723/Humns.png', alt: 'Humns logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1786969359/Dotcom_Logo_white_1.png', alt: 'Dotcom logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1787038702/attestation_LOGO_white_1_1.png', alt: 'World Attestation logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1787038701/prakriti_ayurveda-logo_white_2_1.png', alt: 'Prakriti Ayurveda logo' },
  { src: 'https://res.cloudinary.com/fo4xyppd/image/upload/v1787038702/attestationLOGO_1_1.png', alt: 'Attestation logo' },
]

function useAboutMotion() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const revealNodes = root.querySelectorAll('.about-reveal')

    if (reduced) {
      revealNodes.forEach((node) => node.classList.add('in-view'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    revealNodes.forEach((node) => observer.observe(node))

    if (coarse) return () => observer.disconnect()

    const parallaxNodes = root.querySelectorAll('[data-about-parallax]')
    let frame = 0
    const updateParallax = () => {
      const y = window.scrollY
      parallaxNodes.forEach((node) => {
        const speed = Number(node.dataset.aboutParallax || 0)
        node.style.transform = `translate3d(0, ${y * speed}px, 0)`
      })
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateParallax)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return rootRef
}

function BrandSet({ reverse = false }) {
  const items = reverse ? [...brandLogos].reverse() : brandLogos
  return <div className="about-brand-set">{items.map((logo, index) => <div className="about-brand-card about-surface" key={`${logo.src}-${index}`}><img src={logo.src} alt={logo.alt} loading="lazy" /></div>)}</div>
}

export default function About() {
  const rootRef = useAboutMotion()

  return <main ref={rootRef} className="about-page about-editorial">
    <section className="about-hero-react" id="about-hero">
      <div className="about-base-react" />
      <div className="about-blobs-react" data-about-parallax="0.04" aria-hidden="true"><div className="about-blob-react one" /><div className="about-blob-react two" /><div className="about-blob-react three" /><div className="about-blob-react four" /><div className="about-blob-react five" /></div>
      <div className="about-grid-react" data-about-parallax="0.015" />
      <div className="about-sheen-react" />
      <div className="about-noise-react" />
      <div className="about-marquee-react" aria-hidden="true">
        <div className="about-marquee-row-react top"><div className="about-marquee-set-react">{['Growth', 'Clarity', 'Momentum', 'Integrity'].map((word) => <span key={`top-a-${word}`}>{word}</span>)}</div><div className="about-marquee-set-react">{['Growth', 'Clarity', 'Momentum', 'Integrity'].map((word) => <span key={`top-b-${word}`}>{word}</span>)}</div></div>
        <div className="about-marquee-row-react bottom"><div className="about-marquee-set-react">{['Integrity', 'Momentum', 'Clarity', 'Growth'].map((word) => <span key={`bottom-a-${word}`}>{word}</span>)}</div><div className="about-marquee-set-react">{['Integrity', 'Momentum', 'Clarity', 'Growth'].map((word) => <span key={`bottom-b-${word}`}>{word}</span>)}</div></div>
      </div>
      <div className="container about-hero-inner">
        <div className="about-hero-copy about-reveal">
          <p className="home-eyebrow">About Ashwin</p>
          <h1>A growth partner who stays close to the work.</h1>
          <p className="about-lead">I combine business thinking, performance marketing and practical delivery to help ambitious UAE businesses turn more attention into revenue.</p>
          <p className="about-secondary">The goal is not more dashboards or noise. It is a clear growth system your team understands, can trust and can keep improving.</p>
          <div className="about-hero-actions"><a className="home-button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Work with Ashwin <span>↗</span></a><Link className="home-button secondary" to="/case-studies">View selected work <span>→</span></Link></div>
        </div>
        <div className="about-portrait-wrap about-reveal" style={{ transitionDelay: '.12s' }}>
          <div className="about-portrait-glow" />
          <div className="about-portrait-card"><img src={portrait} width="1024" height="1536" alt="Professional portrait of Ashwin James" fetchPriority="high" /><span className="about-availability"><i />Available to work</span><div className="about-portrait-caption"><strong>Ashwin James</strong><span>Performance Marketing &amp; Growth Systems</span></div></div>
          <div className="about-principle-tag"><small>Operating principle</small><span>Build the system, not just the campaign.</span></div>
        </div>
      </div>
    </section>

    <section className="about-section about-experience-section">
      <div className="container">
        <div className="about-section-heading about-editorial-heading about-reveal">
          <p className="home-eyebrow">Experience across industries</p>
          <h2>Different businesses. The same focus on qualified growth.</h2>
          <p>I have worked across service businesses where acquisition, trust, lead quality and conversion have to work together.</p>
        </div>
        <div className="about-industry-marquee" aria-label="Industries Ashwin has worked across">
          <div className="about-industry-track">
            <div className="about-industry-set">{industries.map((industry) => <span key={`industry-a-${industry}`}>{industry}</span>)}</div>
            <div className="about-industry-set" aria-hidden="true">{industries.map((industry) => <span key={`industry-b-${industry}`}>{industry}</span>)}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-section about-brands-section">
      <div className="container">
        <div className="about-brands-heading about-reveal">
          <div><p className="home-eyebrow">Selected experience</p><h2>Businesses and brands I have worked with.</h2></div>
          <p>A selection of the businesses represented in my professional experience across acquisition, lead generation, websites and growth systems.</p>
        </div>
        <div className="about-brand-editorial" aria-label="Brands Ashwin has worked with">
          <div className="about-brand-track"><BrandSet /><BrandSet /></div>
          <div className="about-brand-track reverse" style={{ marginTop: '.8rem' }}><BrandSet reverse /><BrandSet reverse /></div>
        </div>
      </div>
    </section>

    <section className="about-section about-work-section">
      <div className="container">
        <div className="about-section-heading about-editorial-heading about-reveal">
          <p className="home-eyebrow">How I work</p>
          <h2>Senior thinking. Hands on delivery. Clear accountability.</h2>
          <p>You work directly with the person shaping the strategy and improving the work, not a chain of account managers.</p>
        </div>
        <div className="about-three-points">
          {principles.map(([number, title, text], index) => <article className="about-point about-reveal" style={{ transitionDelay: `${index * 70}ms` }} key={number}><span className="about-point-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="about-section about-proof-section">
      <div className="container about-proof-layout">
        <div className="about-proof-copy about-reveal">
          <p className="home-eyebrow">The work in practice</p>
          <h2>From acquisition to the qualified conversation.</h2>
          <p>Good performance marketing is not just about buying traffic. It is about connecting targeting, creative, landing pages, tracking and sales follow up into one measurable system.</p>
        </div>
        <div className="about-proof-panel about-reveal" style={{ transitionDelay: '.12s' }} aria-label="Illustrative growth system dashboard">
          <div className="about-proof-window">
            <div className="about-proof-window-top"><span>Growth system</span><span>CONNECTED</span></div>
            <div className="about-proof-metrics"><div className="about-proof-metric"><strong>CPA</strong><span>Acquisition signal</span></div><div className="about-proof-metric"><strong>CQL</strong><span>Lead quality</span></div><div className="about-proof-metric"><strong>CRO</strong><span>Conversion layer</span></div></div>
            <div className="about-proof-bars"><div className="about-proof-bar"><i /></div><div className="about-proof-bar"><i /></div><div className="about-proof-bar"><i /></div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-section about-expectations-section">
      <div className="container about-expectations-editorial">
        <div className="about-section-heading about-reveal"><p className="home-eyebrow">What you can expect</p><h2>A practical partnership built around progress.</h2></div>
        <div className="about-expectation-list">{expectations.map(([title, text], index) => <article className="about-expectation-editorial about-reveal" style={{ transitionDelay: `${index * 60}ms` }} key={title}><strong>{title}</strong><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="about-section about-final-cta">
      <div className="container about-final-cta-inner">
        <p className="home-eyebrow about-reveal">The right fit</p>
        <h2 className="about-reveal">If you want more clarity and momentum, let’s talk.</h2>
        <p className="about-reveal">Bring the constraint that is getting in the way. We’ll identify the most useful next move.</p>
        <a className="about-fit-button about-reveal" href={whatsappUrl} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
      </div>
    </section>
  </main>
}
