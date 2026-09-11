import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/hubspot-crm-service.css'

const problems = [
  ['01', 'Leads are captured but not followed up', 'A lead can enter the CRM successfully and still be lost when ownership, routing or next action is unclear.'],
  ['02', 'Sales lacks useful context', 'When source, lifecycle stage, activity and qualification data are disconnected, sales has less information for the next conversation.'],
  ['03', 'Too much work is manual', 'Repetitive assignment, notifications, lifecycle changes and follow up can consume time that should go toward real opportunities.'],
  ['04', 'Marketing cannot see the full journey', 'Lead volume alone does not explain which sources create qualified conversations, pipeline or revenue.'],
  ['05', 'The CRM does not match the sales process', 'Poorly defined stages and properties create inconsistent data and make reporting harder to trust.'],
  ['06', 'Automation is added before the process is clear', 'Automating a weak process can make the underlying problem harder to see instead of solving it.'],
]

const system = [
  ['01', 'CRM Architecture', 'Structure HubSpot around the actual business process, lead sources, properties, ownership and reporting needs.'],
  ['02', 'Lifecycle & Pipeline', 'Define practical stages so marketing and sales share the same understanding of where a lead or opportunity sits.'],
  ['03', 'Lead Routing', 'Create clear ownership and distribution rules so enquiries reach the right person, team or queue.'],
  ['04', 'Automation & Workflows', 'Automate repeatable operational actions while keeping important customer decisions under human control.'],
  ['05', 'Lead Scoring', 'Use meaningful signals to help the team prioritise leads instead of treating every enquiry equally.'],
  ['06', 'Attribution & Reporting', 'Connect marketing source, lifecycle, qualification, pipeline and sales progression where the tracking supports it.'],
]

const process = [
  ['01', 'Audit', 'Map how leads enter, move, get assigned, receive follow up and become opportunities.'],
  ['02', 'Design', 'Define the lifecycle, properties, ownership rules, qualification logic and reporting structure.'],
  ['03', 'Build', 'Implement routing, workflows, automation, scoring and operational rules around the agreed process.'],
  ['04', 'Connect', 'Bring website, advertising, conversion and sales activity together where the available integrations support it.'],
  ['05', 'Improve', 'Use CRM data and sales feedback to identify gaps and continuously improve the operating system.'],
]

const deliverables = ['CRM architecture', 'Lifecycle stage design', 'Pipeline structure', 'Lead routing', 'Workflow automation', 'Lead scoring', 'Property design', 'Marketing attribution', 'Sales visibility', 'Reporting dashboards', 'Process documentation', 'CRM optimisation roadmap']

const metrics = [
  ['LEAD RESPONSE', 'Speed to action'],
  ['QUALIFIED RATE', 'Lead quality'],
  ['SOURCE QUALITY', 'Channel value'],
  ['PIPELINE', 'Commercial progression'],
  ['OPPORTUNITY RATE', 'Sales movement'],
  ['REVENUE', 'Business outcome'],
]

const framework = [
  ['01', 'Capture', 'Bring the enquiry into a structured system with useful context and source information.'],
  ['02', 'Route', 'Make ownership and next action clear so leads do not sit unattended.'],
  ['03', 'Qualify', 'Use consistent criteria to distinguish activity from genuine sales opportunity.'],
  ['04', 'Automate', 'Remove repetitive operational work with controlled workflows and rules.'],
  ['05', 'Measure', 'Connect marketing activity with lifecycle, pipeline and sales progression.'],
  ['06', 'Improve', 'Use evidence and feedback to refine the process over time.'],
]

const fit = ['Generate leads through paid ads, websites, WhatsApp or other channels', 'Have a sales team that needs better lead visibility', 'Want a clearer CRM and lead management process', 'Need to reduce repetitive manual follow up and routing work', 'Want marketing performance connected to pipeline rather than lead volume alone']

const faq = [
  ['Do you set up HubSpot from scratch?', 'Yes. The work can cover a new HubSpot setup or the restructuring of an existing portal, depending on the current system and business requirements.'],
  ['Can you improve an existing HubSpot CRM without rebuilding it?', 'Yes. Often the highest value comes from cleaning up lifecycle stages, properties, ownership, workflows and reporting rather than starting again.'],
  ['Can you automate lead distribution?', 'Yes. Routing can be designed around source, service, geography, team ownership or qualification signals, subject to the available HubSpot setup.'],
  ['Can HubSpot show where leads came from?', 'It can capture and report source and attribution information when tracking is implemented correctly. Reporting quality depends on the underlying data and integrations.'],
  ['Can you connect advertising with HubSpot?', 'Yes. Google Ads, Meta Ads, website conversion tracking and CRM data can be connected where the required integrations and tracking architecture are available.'],
  ['Do you build lead scoring and workflows?', 'Yes. Scoring and workflows can help prioritise leads, automate operational tasks and trigger appropriate actions based on defined rules.'],
  ['Will automation replace our sales team?', 'No. The purpose is to remove repetitive operational work and improve visibility so sales can spend more time on conversations and opportunities that require human judgement.'],
]

const reviews = [
  ['Muhammed Ashar', 'Direct Manager', 'I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing.'],
  ['Deeksha S', 'Operations Manager · Reliance', 'I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results.'],
  ['Highrange Flavours Idukki', 'Google Review', 'Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results.'],
]

export default function HubSpotCRMService() {
  return <main className="hs-service" id="main">
    <section className="hs-hero"><div className="hs-grid" aria-hidden="true"/><div className="container hs-hero-inner"><div className="hs-hero-copy"><p className="hs-eyebrow">HubSpot CRM & Automation</p><h1>Turn Your CRM Into the Operating System Behind Your Marketing.</h1><p className="hs-lead">Build a clearer system for capturing, routing, qualifying, following up and measuring leads across the customer journey.</p><div className="hs-actions"><a className="hs-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a HubSpot Strategy <span>↗</span></a><a className="hs-secondary" href="#approach">View My Approach</a></div><p className="hs-label">HUBSPOT FOCUS AREAS</p><div className="hs-pills"><span>CRM ARCHITECTURE</span><span>LEAD ROUTING</span><span>AUTOMATION</span><span>ATTRIBUTION</span></div><p className="hs-meta">Audit · Design · Build · Connect · Improve</p></div></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">The Problem</p><h2>A CRM should do more than store contacts.</h2><p>When the system behind lead management is unclear, good marketing can still produce slow follow up, poor visibility and inconsistent sales execution.</p></div><div className="hs-card-grid">{problems.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="hs-section hs-dark"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">Strategic Insight</p><h2>HubSpot becomes valuable when marketing activity connects to sales action.</h2><p>The goal is not to add more CRM fields or automation. The goal is to create a reliable operating system around the real customer journey.</p></div><div className="hs-funnel">{['CAPTURE','ROUTE','QUALIFY','FOLLOW UP','OPPORTUNITY','REVENUE'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div><p className="hs-principle">The CRM should make the next action clearer, not make the process more complicated.</p></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">HubSpot System</p><h2>A CRM system built around how your business actually sells.</h2><p>Six connected layers turn HubSpot from a contact database into a practical marketing and sales operating system.</p></div><div className="hs-card-grid">{system.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="approach" className="hs-section hs-dark"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">How I Work</p><h2>Map the process before automating the process.</h2><p>A disciplined five step approach that starts with the business process, not with a list of HubSpot features.</p></div><div className="hs-process-cards">{process.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">Deliverables</p><h2>Everything needed to build a more reliable CRM operation.</h2><p>A practical scope covering architecture, lead management, automation, reporting and optimisation.</p></div><div className="hs-deliverables">{deliverables.map(item => <div key={item}><span>•</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="hs-section hs-dark"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">Measurement</p><h2>Measure what happens after the lead enters the CRM.</h2><p>HubSpot reporting should help answer whether marketing is producing leads that progress, not simply whether forms are being submitted.</p></div><div className="hs-funnel hs-revenue">{['LEADS','RESPONDED','QUALIFIED','OPPORTUNITIES','PIPELINE','REVENUE'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div><div className="hs-metrics">{metrics.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">Strategy Framework</p><h2>Capture → Route → Qualify → Automate → Measure → Improve</h2><p>A framework for finding where lead operations break and deciding what the CRM should solve next.</p></div><div className="hs-card-grid">{framework.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="hs-section hs-dark"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">What Working With Ashwin Looks Like</p><h2>Clear process, practical automation and measurable outcomes.</h2><p>The work starts with how the business operates today and builds only what the process actually needs.</p></div><div className="hs-process-list">{[['01','Understand','Business model, lead sources, sales process and conversion goals.'],['02','Audit','Review CRM structure, lifecycle, workflows, routing and reporting.'],['03','Prioritise','Identify the operational problems most worth solving first.'],['04','Implement','Translate the agreed process into HubSpot structure, automation and reporting.'],['05','Improve','Use data and sales feedback to refine the system over time.']].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">Who This Is For</p><h2>Is HubSpot CRM work right for your business?</h2><p>This is most useful when lead volume is growing but the operational system behind it needs more structure, visibility and consistency.</p></div><div className="hs-fit">{fit.map(item => <div key={item}><span>✓</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="hs-section hs-dark"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">Client Reviews</p><h2>What clients have said about working with Ashwin.</h2><p>Existing website testimonials are used here rather than adding unsupported CRM performance claims.</p></div><div className="hs-reviews">{reviews.map(([name,role,text]) => <article key={name}><p>“{text}”</p><strong>{name}</strong><span>{role}</span></article>)}</div></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><p className="hs-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2><p>Clear answers on CRM setup, automation, attribution and lead management.</p></div><div className="hs-faq">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="hs-cta"><div className="container"><p className="hs-eyebrow">Ready to fix the post lead process?</p><h2>Build the CRM system your marketing actually needs.</h2><p>Start with a practical review of your current lead flow, CRM structure and automation opportunities.</p><a className="hs-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a HubSpot Conversation <span>↗</span></a></div></section>

    <section className="hs-related"><div className="container"><p className="hs-eyebrow">Related Services</p><div className="hs-related-grid"><Link to="/services/lead-generation">Lead Generation</Link><Link to="/services/whatsapp-marketing">WhatsApp Marketing</Link><Link to="/services/performance-marketing">Performance Marketing</Link></div></div></section>
  </main>
}
