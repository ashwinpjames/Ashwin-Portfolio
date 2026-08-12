import { Link } from 'react-router-dom'
import { whatsappUrl, emailAddress } from '../utils/contact.js'

const competencies = [
  ['Performance Marketing', ['Meta Ads', 'Google Ads', 'Paid acquisition']],
  ['Lead Generation', ['Lead funnels', 'Qualification', 'Campaign strategy']],
  ['Analytics', ['GA4', 'Attribution', 'Performance reporting']],
  ['Conversion', ['Landing pages', 'CRO', 'Offer testing']],
  ['CRM & Automation', ['HubSpot', 'Lead distribution', 'Workflow design']],
]

const experience = [
  {
    company: 'Reliance Immigration Services',
    role: 'Digital Marketing Specialist',
    dates: '2025 — Present',
    brands: 'Reliance Immigration · World Attestation · Prakriti Ayurveda',
    bullets: [
      'Manage paid acquisition across Meta and Google for lead generation focused businesses.',
      'Connect campaign performance with lead quality, CRM stages and sales follow up.',
      'Build landing pages, tracking systems and reporting workflows to improve conversion visibility.',
    ],
  },
  {
    company: 'BrandNMark',
    role: 'Digital Marketing',
    dates: 'Previous role',
    brands: 'Digital marketing and campaign delivery',
    bullets: [
      'Worked across digital marketing execution, campaign optimisation and client focused delivery.',
      'Developed a practical foundation in performance marketing, creative testing and reporting.',
    ],
  },
]

const certifications = ['Google Ads', 'Google Analytics', 'Meta Ads', 'HubSpot', 'Performance Marketing', 'Digital Marketing']

const education = [
  ['Professional development', 'Performance Marketing, Analytics, SQL, Python and Automation', 'Ongoing'],
  ['Digital Marketing foundation', 'Marketing strategy, paid media and conversion optimisation', 'Completed'],
]

export default function Resume() {
  return <main className="resume-page"><div className="resume-glow" /><div className="resume-wrap">
    <header className="resume-hero"><div className="resume-line" /><p className="resume-kicker">Performance Marketing · Dubai · UAE</p><h1>Ashwin James</h1><p className="resume-title">Performance Marketing Specialist</p><div className="resume-contact"><a href={`mailto:${emailAddress}`}>Email</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><Link to="/">Portfolio</Link></div></header>

    <section className="resume-section resume-summary"><div className="resume-section-head"><span>01</span><h2>Profile</h2></div><p>I work at the intersection of paid acquisition, conversion optimisation, analytics and CRM operations. My focus is not simply generating more leads, but building a measurable path from advertising spend to qualified conversations and commercial outcomes.</p></section>

    <section className="resume-section"><div className="resume-section-head"><span>02</span><h2>Core competencies</h2></div><div className="resume-competency-grid">{competencies.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="resume-section"><div className="resume-section-head"><span>03</span><h2>Experience</h2></div><div className="resume-timeline">{experience.map((item) => <article className="resume-exp" key={item.company}><span className="resume-dot" /><div className="resume-exp-card"><h3>{item.company}</h3><div className="resume-role"><span>{item.role}</span><b>·</b><strong>{item.dates}</strong></div><p className="resume-brands">{item.brands}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></section>

    <section className="resume-section"><div className="resume-section-head"><span>04</span><h2>Selected project</h2></div><article className="resume-project"><div className="resume-project-icon">↗</div><div><h3>Campaign Planning & Analytics Tool</h3><p>Building a practical marketing operations product around campaign planning, performance reporting, future projections, creative planning and structured client input.</p></div></article></section>

    <section className="resume-section"><div className="resume-section-head"><span>05</span><h2>Certifications & tools</h2></div><div className="resume-cert-grid">{certifications.map((item) => <span key={item}>✓ {item}</span>)}</div></section>

    <section className="resume-section"><div className="resume-section-head"><span>06</span><h2>Education & development</h2></div><div className="resume-education">{education.map(([degree, detail, dates]) => <article key={degree}><span className="resume-edu-dot" /><div><h3>{degree}</h3><p>{detail}</p><strong>{dates}</strong></div></article>)}</div></section>

    <section className="resume-cta"><p className="resume-kicker">Open to the right opportunity</p><h2>Let’s build something measurable.</h2><p>For performance marketing, growth strategy or hands on acquisition work.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Start a conversation ↗</a></section>
  </div></main>
}
