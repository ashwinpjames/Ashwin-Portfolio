import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/wordpress-development-service.css'

const pains = [
  ['The site does not fit the business', 'A template can get you online, but custom requirements often need a more deliberate WordPress implementation.'],
  ['Plugins create more problems', 'Adding plugins without considering compatibility, performance and security can make the site harder to maintain.'],
  ['Performance is treated as an afterthought', 'Heavy themes, scripts and assets can make a site slower and weaken both user experience and marketing performance.'],
  ['Marketing needs are bolted on later', 'Tracking, landing pages, forms and conversion paths work better when they are considered as part of the build.'],
]

const included = [
  ['Development', 'Build and configure WordPress experiences around the actual requirements of the business rather than forcing the business into a template.'],
  ['Customization', 'Adapt layouts, components and functionality where the standard setup does not meet the required experience.'],
  ['Theme work', 'Work with existing themes or implement theme level changes while protecting structure, responsiveness and maintainability.'],
  ['Plugin integration', 'Select and configure appropriate plugins while considering compatibility, performance and the wider site architecture.'],
  ['Performance', 'Reduce unnecessary page weight, scripts and implementation issues that can slow down the experience.'],
  ['Security', 'Apply practical WordPress security and maintenance considerations to reduce avoidable technical risk.'],
  ['Maintenance', 'Keep the installation, plugins, content and technical components manageable as the website evolves.'],
  ['Tracking', 'Implement or support analytics, conversion tracking and marketing measurement requirements.'],
  ['Landing pages', 'Build campaign specific WordPress landing pages that support paid acquisition and conversion goals.'],
  ['Technical improvements', 'Diagnose and fix implementation issues that affect UX, conversion, SEO foundations or marketing operations.'],
]

const process = [
  ['01', 'Understand the requirement', 'Review the current site, business goal, technical constraints and marketing requirements before changing the implementation.'],
  ['02', 'Plan the architecture', 'Decide what belongs in the theme, plugins, content structure and tracking layer so the solution remains manageable.'],
  ['03', 'Build & customise', 'Implement the required pages, components, integrations and functionality with responsive behaviour in mind.'],
  ['04', 'Test & improve', 'Check performance, mobile UX, forms, tracking, integrations and critical user journeys before launch.'],
  ['05', 'Maintain', 'Keep the WordPress environment updated, monitored and ready for future marketing and technical changes.'],
]

const faqs = [
  ['Do you only build new WordPress websites?', 'No. The work can include new builds, redesigns, theme customisation, plugin integration, landing pages and targeted technical improvements to an existing WordPress site.'],
  ['Can you work with our existing WordPress theme?', 'Yes. If the theme is suitable for the requirements, it can often be extended or customised. A replacement is considered only when the existing foundation creates unnecessary limitations.'],
  ['Can you improve a slow WordPress website?', 'Yes. Performance work starts by identifying the actual bottlenecks rather than simply installing more optimisation plugins.'],
  ['Can you integrate forms, analytics and tracking?', 'Yes. Tracking and conversion requirements can be considered alongside forms, landing pages and the rest of the marketing journey.'],
  ['Do you manage WordPress security and maintenance?', 'Practical maintenance and security improvements can be included depending on the site and ongoing requirements.'],
  ['Can you build landing pages for Google Ads and Meta Ads?', 'Yes. WordPress landing pages can be structured around the campaign, message match, conversion path and tracking requirements.'],
  ['Will you use a page builder?', 'That depends on the project. The priority is a maintainable implementation that fits the existing stack and business requirements rather than using a particular builder by default.'],
]

export default function WordPressDevelopmentService() {
  return <main className="wp-service" id="main">
    <section className="wp-hero"><div className="wp-grid" aria-hidden="true"/><div className="container wp-hero-inner">
      <Link className="wp-back" to="/services">← Back to services</Link>
      <div className="wp-hero-layout"><div className="wp-hero-copy"><p className="wp-eyebrow">WordPress Development · Dubai & UAE</p><h1>WordPress Built Around Your Business Requirements.</h1><p className="wp-lead">I build and improve WordPress websites with the flexibility, performance, tracking and marketing requirements needed to support the business behind them.</p><a className="wp-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute WordPress Review <span>↗</span></a><p className="wp-trust">No obligation · Practical implementation · Dubai based</p></div><div className="wp-hero-panel"><span>WORDPRESS STACK</span><div className="wp-stack"><b>WORDPRESS</b><i>↓</i><div><span>THEME</span><span>PLUGINS</span></div><i>↓</i><strong>MARKETING + TRACKING</strong></div></div></div>
    </div></section>

    <section className="wp-section"><div className="container"><div className="wp-heading"><div><p className="wp-eyebrow">The problem</p><h2>WordPress is flexible. The implementation still matters.</h2></div><p>A website can have the right CMS and still create problems through poor structure, plugin choices, performance or disconnected marketing requirements.</p></div><div className="wp-pain-grid">{pains.map(([title,text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wp-section wp-dark"><div className="container"><div className="wp-heading"><div><p className="wp-eyebrow">Strategic insight</p><h2>Good WordPress development supports the system around the website.</h2></div><p>The site needs to be flexible enough for the business, stable enough to maintain and connected enough to support acquisition, conversion and measurement.</p></div><div className="wp-principles"><article><span>01</span><h3>Flexible</h3><p>Build around actual business requirements rather than forcing every need into a template.</p></article><article><span>02</span><h3>Fast</h3><p>Keep implementation and assets focused on a usable, responsive experience.</p></article><article><span>03</span><h3>Reliable</h3><p>Consider compatibility, security and maintainability as part of the implementation.</p></article><article><span>04</span><h3>Measurable</h3><p>Make forms, tracking and conversion paths part of the technical foundation.</p></article></div></div></section>

    <section className="wp-section"><div className="container"><div className="wp-heading"><div><p className="wp-eyebrow">What's included</p><h2>Specialized WordPress implementation from build to improvement.</h2></div><p>Choose the parts of the WordPress stack that need to be built, fixed or improved.</p></div><div className="wp-included-grid">{included.map(([title,text],i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wp-section wp-dark"><div className="container"><div className="wp-heading"><div><p className="wp-eyebrow">The methodology</p><h2>Understand first. Build deliberately. Test before handing it over.</h2></div><p>The implementation is shaped around the current site, business requirement and future marketing needs.</p></div><div className="wp-process">{process.map(([number,title,text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="wp-measure"><div className="container wp-measure-grid"><div><p className="wp-eyebrow">Measurement</p><h2>A website should be measurable as well as functional.</h2></div><div><p>Tracking can be connected to the website's important actions so marketing performance is not separated from the technical implementation.</p><div className="wp-tags"><span>Page performance</span><span>Forms</span><span>CTA interactions</span><span>Analytics</span><span>Conversion tracking</span><span>Landing pages</span></div></div></div></section>

    <section className="wp-section"><div className="container wp-proof"><div><p className="wp-eyebrow">Proof</p><h2>Development informed by the marketing system around the site.</h2></div><div><p>Experience across websites, landing pages, paid acquisition, analytics, conversion tracking and CRM workflows means WordPress implementation can be considered in the context of the wider acquisition system.</p><p>Verified technical performance metrics can be added as case study evidence grows. No invented speed or conversion claims.</p></div></div></section>

    <section className="wp-section wp-dark"><div className="container wp-why"><div><p className="wp-eyebrow">Why Ashwin</p><h2>The website should make marketing easier, not create another bottleneck.</h2></div><p>I approach WordPress from both the implementation and performance side, so the conversation includes UX, conversion, tracking and marketing requirements rather than treating development as an isolated technical task.</p></div></section>

    <section className="wp-section"><div className="container"><div className="wp-heading"><div><p className="wp-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2></div><p>Direct answers for businesses considering specialized WordPress development.</p></div><div className="wp-faq">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="wp-cta"><div className="container"><p className="wp-eyebrow">Need WordPress support?</p><h2>Let's look at what your website actually needs.</h2><p>Book 15 minutes and we can identify the technical, performance or marketing improvement worth addressing first.</p><a className="wp-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Free WordPress Review <span>↗</span></a></div></section>

    <section className="wp-related"><div className="container"><p className="wp-eyebrow">Related services</p><div className="wp-related-grid"><Link to="/services/website-development"><span>Website Development</span><b>→</b></Link><Link to="/services/landing-page-optimisation"><span>Landing Page Optimisation</span><b>→</b></Link><Link to="/services/cro"><span>Conversion Rate Optimisation</span><b>→</b></Link></div></div></section>
  </main>
}
