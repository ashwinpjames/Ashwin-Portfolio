import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/wordpress-service.css'

const problems = [
  ['01','The website looks good but does not convert','A polished WordPress site can still create friction when the message, structure and calls to action are not aligned with the buyer journey.'],
  ['02','Every change depends on a developer','A site becomes harder to manage when routine content, landing page and campaign changes require unnecessary technical work.'],
  ['03','Performance is treated as an afterthought','Heavy assets, unnecessary plugins and poor implementation can make the site slower and weaken the experience across devices.'],
  ['04','Marketing and website are disconnected','Campaigns, landing pages, tracking and forms should work as one system rather than as separate pieces.'],
  ['05','Plugins create complexity','Adding tools without a clear reason can introduce maintenance, compatibility and security problems.'],
  ['06','The site is not built for continuous improvement','A marketing website should make it easier to test, measure, publish and improve over time.'],
]
const system = [
  ['01','Website Architecture','Structure the WordPress site around clear information hierarchy, user journeys, services and commercial goals.'],
  ['02','Conversion Structure','Use messaging, page sections, forms and calls to action that make the next step obvious.'],
  ['03','Custom Development','Build or customise themes and components where the business needs flexibility beyond an off the shelf template.'],
  ['04','Performance','Keep the implementation focused on useful assets, efficient loading and a strong experience across devices.'],
  ['05','Integrations','Connect forms, CRM, analytics, advertising and other marketing systems where the required integrations are available.'],
  ['06','Maintenance & Growth','Create a foundation that can be updated, monitored and improved as campaigns, offers and business priorities change.'],
]
const process = [
  ['01','Audit','Review the current website, content, structure, performance, tracking, plugins and conversion paths.'],
  ['02','Plan','Define the page architecture, content priorities, user journeys and technical requirements before implementation.'],
  ['03','Build','Develop the agreed WordPress structure, components, pages, forms and integrations.'],
  ['04','Connect','Implement analytics, conversion tracking and marketing connections required for measurement and lead handling.'],
  ['05','Improve','Use real user behaviour, campaign data and business feedback to identify the next improvements.'],
]
const deliverables = ['WordPress website development','Custom theme and component work','Service and landing pages','Conversion focused page structure','Responsive implementation','Performance optimisation','Plugin and integration setup','Forms and lead capture','Analytics and conversion tracking','CRM connections','Technical maintenance','Website optimisation roadmap']
const metrics = [['LOAD EXPERIENCE','Site performance'],['ENGAGEMENT','User behaviour'],['CONVERSION RATE','Enquiry efficiency'],['LEAD QUALITY','Commercial value'],['SOURCE PERFORMANCE','Marketing contribution'],['ENQUIRIES','Business outcome']]
const framework = [
  ['01','Structure','Make the website architecture reflect what buyers need to understand and do.'],
  ['02','Message','Clarify the offer, proof, differentiation and value before adding visual complexity.'],
  ['03','Build','Translate the strategy into a flexible WordPress implementation that the business can maintain.'],
  ['04','Connect','Link forms, analytics, CRM and marketing systems so the site can support the wider funnel.'],
  ['05','Measure','Track meaningful actions rather than treating traffic as the final objective.'],
  ['06','Improve','Use evidence to continuously reduce friction and improve the website experience.'],
]
const fit = ['Need a new WordPress website built around business and marketing goals','Have an existing WordPress site that needs structural or conversion improvements','Need landing pages for paid advertising or lead generation','Want better performance, tracking, integrations or maintainability','Want the website to work as part of a wider acquisition and conversion system']
const faq = [
  ['Do you build WordPress websites from scratch?','Yes. The scope can cover the structure, page build, theme or component work, forms, integrations and measurement setup required for the agreed website.'],
  ['Can you improve an existing WordPress website?','Yes. Existing sites can often be improved without rebuilding everything. The first step is identifying which structural, technical and conversion problems are actually worth solving.'],
  ['Can you build landing pages for paid ads?','Yes. Landing pages can be structured around the campaign message, audience, offer, proof and conversion action rather than simply copying the main website.'],
  ['Do you optimise WordPress performance?','Yes. Performance work can include reviewing assets, plugins, implementation and page behaviour. The exact improvements depend on the current website and hosting setup.'],
  ['Can you connect WordPress with HubSpot or other marketing tools?','Yes. Forms, CRM, analytics and advertising systems can be connected where the required integrations and technical access are available.'],
  ['Do you set up tracking?','Yes. Analytics and conversion tracking can be implemented around the actions that matter to the business, subject to the available platforms and consent requirements.'],
  ['Will I be able to manage the website myself?','The goal is to create a maintainable setup where routine content changes can be handled without unnecessary technical dependency.'],
]
const reviews = [
  ['Muhammed Ashar','Direct Manager','I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing.'],
  ['Deeksha S','Operations Manager · Reliance','I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results.'],
  ['Highrange Flavours Idukki','Google Review','Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results.'],
]
const cards = (items) => <div className="wp-card-grid">{items.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
const funnel = (items) => <div className="wp-funnel">{items.map((item,i) => <div key={item}><strong>{item}</strong>{i < items.length - 1 && <span>→</span>}</div>)}</div>

export default function WordPressService() {
  return <main className="wp-service" id="main">
    <section className="wp-hero"><div className="wp-grid" aria-hidden="true"/><div className="container wp-hero-inner"><div className="wp-hero-copy"><p className="wp-eyebrow">WordPress Development</p><h1>Build a WordPress Website That Supports Your Marketing.</h1><p className="wp-lead">Create a faster, clearer and more flexible WordPress foundation for your website, landing pages, lead capture and growth activity.</p><div className="wp-actions"><a className="wp-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a WordPress Strategy <span>↗</span></a><a className="wp-secondary" href="#approach">View My Approach</a></div><p className="wp-label">WORDPRESS FOCUS AREAS</p><div className="wp-pills"><span>ARCHITECTURE</span><span>CONVERSION</span><span>PERFORMANCE</span><span>INTEGRATIONS</span></div><p className="wp-meta">Plan · Build · Connect · Measure · Improve</p></div></div></section>
    <section className="wp-section"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">The Problem</p><h2>A WordPress site should be more than a collection of pages.</h2><p>When the website is disconnected from the commercial journey, good design can still produce slow performance, unclear messaging and missed enquiries.</p></div>{cards(problems)}</div></section>
    <section className="wp-section wp-dark"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">Strategic Insight</p><h2>Your website should be part of the acquisition system, not separate from it.</h2><p>The strongest WordPress builds connect positioning, page structure, performance, tracking and lead handling around the same customer journey.</p></div>{funnel(['DISCOVER','UNDERSTAND','TRUST','CONVERT','FOLLOW UP','GROW'])}<p className="wp-principle">Build the website around the action you want the visitor to take next.</p></div></section>
    <section className="wp-section"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">WordPress System</p><h2>A website foundation designed around how your business actually grows.</h2><p>Six connected layers turn WordPress into a practical marketing asset rather than a static online brochure.</p></div>{cards(system)}</div></section>
    <section id="approach" className="wp-section wp-dark"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">How I Work</p><h2>Build the right website before adding unnecessary complexity.</h2><p>A five step approach that starts with the business and customer journey, then translates that into a practical WordPress implementation.</p></div><div className="wp-process-cards">{process.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="wp-section"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">Deliverables</p><h2>Everything needed for a marketing ready WordPress foundation.</h2><p>A practical scope covering development, conversion, performance, integrations and ongoing optimisation.</p></div><div className="wp-deliverables">{deliverables.map(item => <div key={item}><span>•</span><strong>{item}</strong></div>)}</div></div></section>
    <section className="wp-section wp-dark"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">Measurement</p><h2>Measure what the website helps the business achieve.</h2><p>Website reporting should connect user behaviour and conversion activity with the marketing and commercial outcomes the site is designed to support.</p></div>{funnel(['TRAFFIC','ENGAGED','INTENT','ENQUIRIES','QUALIFIED','OPPORTUNITIES'])}<div className="wp-metrics">{metrics.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="wp-section"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">Strategy Framework</p><h2>Structure → Message → Build → Connect → Measure → Improve</h2><p>A framework for making website decisions based on the customer journey and business objective rather than isolated design preferences.</p></div>{cards(framework)}</div></section>
    <section className="wp-section wp-dark"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">What Working With Ashwin Looks Like</p><h2>Clear structure, practical development and a website built to improve.</h2><p>The work starts with the current business and website, then focuses effort on the changes that can create the clearest improvement.</p></div><div className="wp-process-list">{[['01','Understand','Business model, audience, offer, website goals and marketing channels.'],['02','Audit','Review structure, content, performance, plugins, forms, tracking and conversion paths.'],['03','Prioritise','Identify the website problems most worth solving first.'],['04','Implement','Translate the agreed strategy into WordPress pages, components, integrations and tracking.'],['05','Improve','Use behaviour, campaign data and business feedback to guide the next iteration.']].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="wp-section"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">Who This Is For</p><h2>Is WordPress development right for your business?</h2><p>This is most useful when the website needs to become a more reliable part of acquisition, conversion and marketing operations.</p></div><div className="wp-fit">{fit.map(item => <div key={item}><span>✓</span><strong>{item}</strong></div>)}</div></div></section>
    <section className="wp-section wp-dark"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">Client Reviews</p><h2>What clients have said about working with Ashwin.</h2><p>Existing website testimonials are used here rather than adding unsupported website performance claims.</p></div><div className="wp-reviews">{reviews.map(([name,role,text]) => <article key={name}><p>“{text}”</p><strong>{name}</strong><span>{role}</span></article>)}</div></div></section>
    <section className="wp-section"><div className="container"><div className="wp-heading"><p className="wp-eyebrow">FAQ</p><h2>Questions worth answering before you build.</h2><p>Clear answers on WordPress development, landing pages, performance, integrations and tracking.</p></div><div className="wp-faq">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <section className="wp-cta"><div className="container"><p className="wp-eyebrow">Ready to improve your website?</p><h2>Build the WordPress foundation your marketing actually needs.</h2><p>Start with a practical review of your current website, conversion journey and technical priorities.</p><a className="wp-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a WordPress Conversation <span>↗</span></a></div></section>
    <section className="wp-related"><div className="container"><p className="wp-eyebrow">Related Services</p><div className="wp-related-grid"><Link to="/services/lead-generation">Lead Generation</Link><Link to="/services/cro">CRO</Link><Link to="/services/hubspot">HubSpot CRM & Automation</Link></div></div></section>
  </main>
}
