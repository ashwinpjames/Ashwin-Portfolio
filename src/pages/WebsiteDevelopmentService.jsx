import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/website-development-service.css'

const included = [
  ['UX & structure', 'Clear information architecture, page hierarchy and user journeys.'],
  ['Trust', 'Proof, credibility signals and useful service detail placed around the buying decision.'],
  ['Performance', 'A lean implementation focused on speed, usability and stability.'],
  ['Mobile experience', 'Responsive layouts designed for smaller screens from the beginning.'],
  ['Conversion paths', 'Clear CTAs, forms and WhatsApp actions that make the next step obvious.'],
  ['Analytics & SEO foundations', 'Conversion tracking and technical foundations for future marketing.'],
]
const process = [
  ['01', 'Diagnose', 'Review the audience, offer, traffic sources, conversion paths and current friction.'],
  ['02', 'Structure', 'Define the information architecture, page hierarchy and primary user journeys.'],
  ['03', 'Design', 'Create a responsive interface with clear hierarchy and useful interactions.'],
  ['04', 'Build', 'Implement reusable components, forms, WhatsApp actions and analytics events.'],
  ['05', 'Improve', 'Use behaviour and conversion signals to identify what should be refined next.'],
]
const faqs = [
  ['Can you build a website designed for lead generation?', 'Yes. The structure starts with the desired conversion and works backwards through messaging, trust, page hierarchy, forms and contact paths.'],
  ['Will the website work properly on mobile?', 'Yes. Mobile behaviour is considered during structure and design, not treated as a final resizing exercise.'],
  ['Can you add WhatsApp and lead forms?', 'Yes. They can be built directly into the conversion journey.'],
  ['Can you connect Google Analytics and conversion tracking?', 'Yes. Important interactions can be structured as measurable events.'],
  ['Will the website be SEO friendly?', 'The build includes sensible structure, headings, metadata support, internal linking opportunities and performance considerations.'],
  ['Do you redesign existing websites?', 'Yes. If the current platform is useful, targeted improvements can be more sensible than rebuilding everything.'],
  ['Can the website support Google Ads and Meta Ads?', 'Yes. Landing experiences, conversion paths and tracking can be structured around paid traffic sources.'],
]
export default function WebsiteDevelopmentService() {
  return <main className="website-development-service-page" id="main">
    <section className="wds-hero"><div className="wds-grid"/><div className="container wds-hero-inner">
      <Link className="wds-back" to="/services">← Back to services</Link>
      <div className="wds-hero-content"><div className="wds-copy">
        <p className="wds-eyebrow">Website Development · Dubai & UAE</p>
        <h1>Website Development Built to Support Your Marketing.</h1>
        <p className="wds-lead">Your website should make your marketing easier, not give your traffic another place to disappear. I build conversion focused websites around UX, trust, performance and measurable next steps.</p>
        <a className="wds-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Website Review <span>↗</span></a>
        <p className="wds-trust">No obligation · Dubai based · Conversion focused</p>
      </div><div className="wds-visual"><div className="wds-browser"><div className="wds-browser-top"><i/><i/><i/><span>yourbusiness.com</span></div><div className="wds-browser-body"><b>YOUR BUSINESS</b><strong>Clear message. Clear action.</strong><div><i/><i/><i/></div><em>ENQUIRE →</em></div></div></div></div>
    </div></section>
    <section className="wds-section"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">The problem</p><h2>A website can look good and still work against your marketing.</h2></div><p>Paid traffic, organic demand and referrals all end up on the same digital foundation. If that foundation creates confusion or friction, more traffic simply makes the leak larger.</p></div><div className="wds-pain-grid">{[['People visit but do not enquire.','The offer may be unclear, the hierarchy weak or the next step buried.'],['The website feels outdated.','A dated or inconsistent experience can reduce trust before a prospect speaks to your team.'],['Mobile users struggle.','A desktop layout squeezed onto a phone can make navigation and enquiry actions difficult.'],['You cannot tell what is working.','Without meaningful analytics, traffic gets judged instead of business outcomes.']].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="wds-section wds-dark"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">Strategic insight</p><h2>The website is part of the acquisition system.</h2></div><p>It needs to communicate value, establish trust, make the next action obvious and send useful signals back into your marketing stack.</p></div><div className="wds-principles">{[['01','Clarity','Visitors understand what you do and who it is for.'],['02','Confidence','Proof and useful detail reduce uncertainty.'],['03','Action','Forms, WhatsApp and CTAs create a clear path.'],['04','Measurement','Analytics show where people engage or drop off.']].map(([n,t,d])=><div key={n}><span>{n}</span><strong>{t}</strong><p>{d}</p></div>)}</div></div></section>
    <section className="wds-section"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">What's included</p><h2>Specific work. Clear deliverables. Built for the next marketing step.</h2></div><p>The website is designed as a usable commercial asset, not just attractive screens.</p></div><div className="wds-included-grid">{included.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="wds-section wds-dark"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">The process</p><h2>From diagnosis to a website your marketing can actually use.</h2></div><p>You know what is being changed, why it matters and what happens next.</p></div><div className="wds-process">{process.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>
    <section className="wds-proof"><div className="container wds-proof-grid"><div><p className="wds-eyebrow">Measurement & proof</p><h2>A website should be judged by what it helps your business do.</h2></div><div><p>Useful signals include form submissions, WhatsApp enquiries, CTA interactions, landing page engagement, qualified leads and conversion behaviour from different acquisition sources.</p><div className="wds-proof-tags"><span>UX</span><span>Conversion</span><span>Analytics</span><span>SEO foundations</span></div></div></div></section>
    <section className="wds-section"><div className="container wds-differentiator"><div><p className="wds-eyebrow">Why Ashwin</p><h2>I build the website with the marketing journey in mind.</h2></div><p>Because I work across paid acquisition, SEO, landing pages, analytics and lead generation, I do not view the website as an isolated design project. The question is whether the site can receive traffic, communicate value, build trust, create action and produce useful data.</p></div></section>
    <section className="wds-section wds-dark"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">FAQ</p><h2>Questions worth answering before rebuilding your website.</h2></div><p>Direct answers for businesses considering website development.</p></div><div className="wds-faq">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <section className="wds-cta"><div className="container"><p className="wds-eyebrow">Ready to improve the website?</p><h2>Let's look at what your website actually needs.</h2><p>Book 15 minutes and identify the most important improvement first.</p><a className="wds-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Free Website Review <span>↗</span></a></div></section>
    <section className="wds-related"><div className="container"><p className="wds-eyebrow">Related services</p><div><Link to="/services/wordpress"><span>WordPress Development</span><b>→</b></Link><Link to="/services/cro"><span>Conversion Rate Optimisation</span><b>→</b></Link><Link to="/services/google-ads"><span>Google Ads</span><b>→</b></Link></div></div></section>
  </main>
}
