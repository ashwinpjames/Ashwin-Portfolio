import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/website-development-service.css'

const included = [
  ['UX & structure', 'Clear information architecture, page hierarchy and journeys built around what visitors need to understand before they act.'],
  ['Trust', 'Proof, credibility signals, service detail and risk reduction placed where they support the buying decision.'],
  ['Performance', 'A lean implementation focused on speed, usability and a stable experience across devices.'],
  ['Mobile experience', 'Responsive layouts designed for smaller screens from the beginning, not patched in at the end.'],
  ['Conversion paths', 'Clear CTAs, forms, WhatsApp actions and contact journeys that make the next step obvious.'],
  ['Analytics & SEO foundations', 'Meaningful conversion tracking plus clean technical foundations that support future organic visibility.'],
]

const process = [
  ['01', 'Diagnose', 'Review the current website, audience, offer, traffic sources, conversion paths and the points where visitors lose clarity or confidence.'],
  ['02', 'Structure', 'Define the information architecture, page hierarchy and primary journeys before adding visual polish.'],
  ['03', 'Design', 'Turn the strategy into a responsive interface with clear hierarchy, useful interactions and a consistent visual system.'],
  ['04', 'Build', 'Implement reusable components, forms, WhatsApp actions, analytics events and the technical foundations needed for marketing.'],
  ['05', 'Improve', 'Use behaviour and conversion signals to identify what should be refined next instead of redesigning blindly.'],
]

const faqs = [
  ['Can you build a website that is designed for lead generation?', 'Yes. The structure starts with the desired conversion and works backwards through messaging, trust, page hierarchy, forms and contact paths.'],
  ['Will the website work properly on mobile?', 'Yes. Mobile behaviour is considered during structure and design, not treated as a final resizing exercise.'],
  ['Can you add WhatsApp and lead forms?', 'Yes. WhatsApp actions and forms can be built into the conversion journey so visitors have a clear low friction way to enquire.'],
  ['Can you connect Google Analytics and conversion tracking?', 'Yes. Important interactions can be structured as measurable events so marketing traffic can be evaluated beyond page views.'],
  ['Will the website be SEO friendly?', 'The build includes SEO foundations such as sensible structure, headings, metadata support, internal linking opportunities, performance considerations and crawlable content. Full ongoing SEO is a separate service.'],
  ['Do you redesign existing websites or only build new ones?', 'Both. If the current platform and structure are useful, targeted improvements can be more sensible than rebuilding everything.'],
  ['Can the website support Google Ads and Meta Ads?', 'Yes. Landing experiences, conversion paths and tracking can be structured around the traffic sources that will drive demand.'],
]

export default function WebsiteDevelopmentService() {
  return <main className="website-development-service-page" id="main">
    <section className="wds-hero"><div className="wds-grid" aria-hidden="true"/><div className="container wds-hero-inner">
      <Link className="wds-back" to="/services">← Back to services</Link>
      <div className="wds-hero-content">
        <div className="wds-copy">
          <p className="wds-eyebrow">Website Development · Dubai & UAE</p>
          <h1>Website Development Built to Support Your <span>Marketing.</span></h1>
          <p className="wds-lead">Your website should make your marketing easier, not give your traffic another place to disappear. I build conversion focused websites around UX, trust, performance and measurable next steps.</p>
          <a className="wds-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Website Review <span>↗</span></a>
          <p className="wds-trust">No obligation · Dubai based · Conversion focused · Mobile first</p>
        </div>
        <div className="wds-visual" aria-hidden="true">
          <div className="wds-browser"><div className="wds-browser-top"><i/><i/><i/><span>yourbusiness.com</span></div><div className="wds-browser-body"><div className="wds-line wds-line-main"/><div className="wds-line wds-line-short"/><div className="wds-card-row"><div/><div/><div/></div><div className="wds-button">ENQUIRE →</div></div></div>
          <div className="wds-node wds-node-one">UX</div><div className="wds-node wds-node-two">TRUST</div><div className="wds-node wds-node-three">CONVERSION</div><div className="wds-node wds-node-four">ANALYTICS</div>
        </div>
      </div>
    </div></section>

    <section className="wds-section"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">The problem</p><h2>A website can look good and still work against your marketing.</h2></div><p>Paid traffic, organic demand and referrals all end up on the same digital foundation. If that foundation creates confusion or friction, more traffic simply makes the leak larger.</p></div><div className="wds-pain-grid">
      {[
        ['“People visit but do not enquire.”', 'The offer may be unclear, the hierarchy weak or the next step buried beneath unnecessary information.'],
        ['“Our website feels outdated.”', 'A dated or inconsistent experience can reduce trust before a prospect ever speaks to your team.'],
        ['“Mobile users struggle.”', 'A desktop layout squeezed onto a phone can make navigation, reading and enquiry actions unnecessarily difficult.'],
        ['“We cannot tell what is working.”', 'Without meaningful analytics and conversion events, you are left judging the website by traffic instead of business outcomes.'],
      ].map(([title, text]) => <article className="wds-pain-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
    </div></div></section>

    <section className="wds-section wds-dark"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">Strategic insight</p><h2>The website is part of the acquisition system.</h2></div><p>It has to answer the visitor's questions quickly, establish enough trust to continue, make the next action obvious and send useful signals back into your marketing stack.</p></div><div className="wds-principles"><div><span>01</span><strong>Clarity</strong><p>Visitors understand what you do, who it is for and why it matters.</p></div><div><span>02</span><strong>Confidence</strong><p>Proof and useful detail reduce uncertainty before the CTA.</p></div><div><span>03</span><strong>Action</strong><p>Forms, WhatsApp and CTAs create a clear path to enquiry.</p></div><div><span>04</span><strong>Measurement</strong><p>Analytics show where people engage, convert or drop off.</p></div></div></div></section>

    <section className="wds-section"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">What's included</p><h2>Specific work. Clear deliverables. Built for the next marketing step.</h2></div><p>The website is designed as a usable commercial asset, not just a collection of attractive screens.</p></div><div className="wds-included-grid">{included.map(([title, text], index) => <article className="wds-included-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wds-section wds-dark"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">The process</p><h2>From diagnosis to a website your marketing can actually use.</h2></div><p>You know what is being changed, why it matters and what happens next.</p></div><div className="wds-process">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="wds-proof"><div className="container wds-proof-grid"><div><p className="wds-eyebrow">Measurement & proof</p><h2>A website should be judged by what it helps your business do.</h2></div><div><p>Useful signals include form submissions, WhatsApp enquiries, CTA interactions, landing page engagement, qualified leads and the conversion behaviour of visitors from different acquisition sources.</p><p>Relevant experience spans immigration and visa services, attestation and professional services, healthcare and wellness, recruitment and HR, business services and other high consideration offers.</p><div className="wds-proof-tags"><span>UX</span><span>Conversion</span><span>Analytics</span><span>SEO foundations</span></div></div></div></section>

    <section className="wds-section"><div className="container wds-differentiator"><div><p className="wds-eyebrow">Why Ashwin</p><h2>I build the website with the marketing journey in mind.</h2></div><p>Because I work across paid acquisition, SEO, landing pages, analytics and lead generation, I do not view the website as an isolated design project. The question is whether the site can receive traffic, communicate value, build trust, create action and produce useful data for the next decision.</p></div></section>

    <section className="wds-section wds-dark"><div className="container"><div className="wds-heading"><div><p className="wds-eyebrow">FAQ</p><h2>Questions worth answering before rebuilding your website.</h2></div><p>Clear answers to the concerns a careful business owner should have before starting.</p></div><div className="wds-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="wds-cta"><div className="container"><p className="wds-eyebrow">Is your website helping or hurting your marketing?</p><h2>Let's look at it for 15 minutes.</h2><p>I will review the biggest UX, conversion and measurement issues I can identify and explain what I would prioritise.</p><a className="wds-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute Website Review <span>↗</span></a><small>No long presentation. No obligation. Just a practical review.</small></div></section>

    <section className="wds-related"><div className="container"><p className="wds-eyebrow">Related services</p><div className="wds-related-grid"><Link to="/services/landing-page-optimisation"><span>Landing Page Optimisation</span><b>→</b></Link><Link to="/services/seo"><span>SEO</span><b>→</b></Link><Link to="/services/lead-generation"><span>Lead Generation</span><b>→</b></Link></div></div></section>
  </main>
}
