import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/lead-generation-service.css'

const problems = [
  ['01', 'Low quality enquiries', 'More submissions can still mean fewer real opportunities.'],
  ['02', 'Leads that never respond', 'Acquisition is wasted when follow up breaks down.'],
  ['03', 'High cost per lead', 'Rising CPL can hide deeper funnel inefficiencies.'],
  ['04', 'Poor targeting', 'Broad traffic creates noise instead of intent.'],
  ['05', 'Landing pages that fail', 'Good campaigns cannot rescue weak conversion paths.'],
  ['06', 'Weak sales alignment', 'Marketing needs feedback from what actually closes.'],
]

const system = [
  ['01', 'Audience & Market Research', 'Identify audiences, intent signals and targeting opportunities.'],
  ['02', 'Paid Acquisition', 'Build and manage channels that create demand and capture intent.'],
  ['03', 'Conversion Funnel', 'Align offers, landing pages, forms and conversion paths.'],
  ['04', 'Lead Qualification', 'Improve lead quality rather than blindly maximising volume.'],
  ['05', 'CRM & Lead Flow', 'Capture, distribute and track leads through the sales process.'],
  ['06', 'Performance Optimisation', 'Use data to improve efficiency and downstream outcomes.'],
]

const process = [
  ['01', 'Understand', 'Business, audience, offer and sales process.'],
  ['02', 'Build', 'Campaigns, targeting, messaging and conversion infrastructure.'],
  ['03', 'Launch', 'Activate campaigns and establish performance baselines.'],
  ['04', 'Analyse', 'Evaluate CPL, conversion rate, lead quality and downstream performance.'],
  ['05', 'Optimise', 'Improve the parts of the funnel limiting growth.'],
]

const deliverables = [
  'Campaign strategy', 'Audience research', 'Ad campaign setup', 'Ad creative direction',
  'Landing page recommendations', 'Lead capture setup', 'Conversion tracking',
  'CRM integration and workflows', 'Lead quality analysis', 'Performance reporting', 'Ongoing optimisation',
]

const metrics = [
  ['CPL', 'Cost per lead'],
  ['QUALIFICATION RATE', 'Lead quality'],
  ['COST / QUALIFIED LEAD', 'Efficiency'],
  ['LEAD → OPPORTUNITY', 'Pipeline'],
  ['LEAD → CUSTOMER', 'Revenue outcome'],
  ['ROAS', 'Where applicable'],
]

const framework = [
  ['01', 'Intent', 'Understand what the person is trying to accomplish.'],
  ['02', 'Structure', 'Organise campaigns around meaningful business distinctions.'],
  ['03', 'Message', 'Align the ad and offer with search or audience intent.'],
  ['04', 'Conversion', 'Create a clear path from attention to meaningful action.'],
  ['05', 'Qualification', 'Evaluate whether conversions represent useful leads.'],
  ['06', 'Optimisation', 'Use full funnel data to improve targeting and efficiency.'],
]

const fit = ['Consistent flow of enquiries', 'Already investing in paid advertising', 'Defined service or offer', 'Fast lead follow up', 'Measurable acquisition goals']

const reviews = [
  ['MA', 'Direct Manager', 'February 13, 2026', 'I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing.'],
  ['DS', 'Operations Manager · Reliance', 'July 13, 2026', 'I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results.'],
  ['HF', 'Highrange Flavours Idukki', 'Google Review', 'Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results, not...'],
]

const faq = [
  ['How do you generate leads?', 'Lead generation connects audience research, paid acquisition, conversion paths, qualification, CRM flow and continuous optimisation around the sales process.'],
  ['Do you work with Meta Ads and Google Ads?', 'Yes. The channel mix depends on where relevant demand exists and how the business can convert it.'],
  ['Can you help with landing pages?', 'Yes. The work can cover messaging, offer clarity, forms, calls to action and conversion friction.'],
  ['How do you measure lead quality?', 'Lead quality is evaluated beyond platform conversions by looking at qualification, opportunity progression and downstream outcomes where data is available.'],
  ['How long does it take to generate results?', 'There is no useful universal timeframe. Results depend on demand, offer strength, competition, budget, conversion rate and sales follow up.'],
  ['Do you manage CRM and lead distribution?', 'Where the technical setup supports it, lead capture, distribution, CRM workflows and visibility can be connected.'],
  ['How do you reduce low quality leads?', 'Better audience definition, tighter targeting, stronger messaging, qualification, landing page alignment and sales feedback all contribute.'],
]

export default function LeadGenerationService() {
  return <main className="lead-generation-page" id="main">
    <section className="lg-hero"><div className="lg-grid" aria-hidden="true"/><div className="container lg-hero-inner"><div className="lg-hero-copy"><p className="lg-eyebrow">Lead Generation</p><h1>Lead Generation That Gives Your Sales Team Better Opportunities</h1><p className="lg-lead">Build a predictable flow of qualified leads through paid acquisition, conversion focused funnels and continuous optimisation.</p><div className="lg-actions"><a className="lg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Lead Generation Strategy <span>↗</span></a><a className="lg-secondary" href="#approach">View My Approach</a></div><p className="lg-label">TRUSTED CAPABILITIES</p><div className="lg-pills"><span>PAID ACQUISITION</span><span>CRM & LEAD MANAGEMENT</span><span>CONVERSION OPTIMISATION</span><span>PERFORMANCE TRACKING</span></div><p className="lg-meta">Strategy · Acquisition · Funnel · Measurement</p></div></div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">The Problem</p><h2>More Leads Does Not Always Mean Better Leads</h2><p>Lead generation breaks when the system is optimised for volume instead of commercial value.</p></div><div className="lg-pain-grid">{problems.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="lg-section lg-alt"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">Strategic Insight</p><h2>Lead Generation Is a Funnel Problem, Not Just an Advertising Problem</h2><p>A lead is only valuable when the rest of the system can turn intent into a commercial opportunity.</p></div><div className="lg-funnel">{['TRAFFIC','AD','LANDING PAGE','LEAD','QUALIFICATION','SALES FOLLOW UP','CUSTOMER'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 6 && <span>→</span>}</div>)}</div><p className="lg-principle">A cheap lead is not necessarily a valuable lead.</p></div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">Lead Generation System</p><h2>A Lead Generation System Built Around Your Sales Process</h2><p>Six connected layers keep acquisition, conversion, qualification and measurement working together.</p></div><div className="lg-system-grid">{system.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="approach" className="lg-section lg-alt"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">How I Work</p><h2>A Five Step Approach to Better Lead Generation</h2><p>A repeatable process that starts with business context and ends with continuous optimisation.</p></div><div className="lg-process-cards">{process.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">Deliverables</p><h2>Everything Needed to Run the Acquisition System</h2><p>A practical service scope spanning acquisition, conversion, tracking and optimisation.</p></div><div className="lg-deliverables">{deliverables.map((item,i) => <div key={item}><span>•</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="lg-section lg-alt"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">Measurement</p><h2>I Do Not Optimise for Leads. I Optimise for Business Outcomes.</h2><p>The reporting hierarchy connects advertising activity to the outcomes that matter.</p></div><div className="lg-funnel lg-revenue">{['REACH','CLICKS','LEADS','QUALIFIED LEADS','SALES','REVENUE'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div><div className="lg-metrics">{metrics.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">Strategy Framework</p><h2>Intent → Structure → Message → Conversion → Qualification → Optimisation</h2><p>A practical framework for connecting acquisition decisions to commercial outcomes.</p></div><div className="lg-system-grid">{framework.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="lg-section lg-alt"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">What Working With Ashwin Looks Like</p><h2>Know what happens after you make contact.</h2><p>The process starts with understanding the situation before deciding what needs to change.</p></div><div className="lg-process-list">{[['01','Understand','Business, audience, offer and sales process.'],['02','Assess','Review acquisition, tracking, funnel data and opportunities where available.'],['03','Plan','Identify priorities and develop the appropriate strategy.'],['04','Execute','Implement campaigns, tracking, testing and optimisation.'],['05','Improve','Use campaign data and business feedback to continuously improve performance.']].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">Client Reviews</p><h2>What Clients Say</h2><p>Selected testimonials already published on the Home page.</p></div><div className="lg-reviews">{reviews.map(([initials,role,date,quote]) => <article key={initials}><span className="lg-avatar">{initials}</span><div><div className="lg-stars">★★★★★</div><blockquote>“{quote}”</blockquote><strong>{role}</strong><small>{date}</small></div></article>)}</div></div></section>

    <section className="lg-section lg-alt"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">Who This Is For</p><h2>Is Lead Generation Right for Your Business?</h2><p>The strongest fit is a business with a clear offer, a sales process and a need for measurable acquisition.</p></div><div className="lg-fit">{fit.map(item => <div key={item}><span>✓</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="lg-section"><div className="container"><div className="lg-heading"><p className="lg-eyebrow">FAQ</p><h2>Answers to the Questions That Affect the Buying Decision</h2><p>Keep answers concise, specific and focused on high intent objections.</p></div><div className="lg-faq">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="lg-cta"><div className="container"><p className="lg-eyebrow">Let’s Build the System Behind the Leads</p><h2>Build a lead generation system your sales team can actually use.</h2><p>A focused acquisition system built around qualified demand, measurable performance and commercial outcomes.</p><a className="lg-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Conversation <span>↗</span></a></div></section>

    <section className="lg-related"><div className="container"><p className="lg-eyebrow">Related Services</p><div><Link to="/services/google-ads">Google Ads</Link><Link to="/services/meta-ads">Meta Ads</Link><Link to="/services/hubspot">HubSpot CRM & Automation</Link></div></div></section>
  </main>
}
