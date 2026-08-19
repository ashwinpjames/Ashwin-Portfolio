import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/hubspot-crm-service.css'

const pains = [
  ['Leads disappear after capture', 'A lead can be generated successfully and still be lost when ownership, routing or follow up is unclear.'],
  ['Sales cannot see the full picture', 'When lead source, lifecycle stage and activity are disconnected, sales teams have less context when deciding what to do next.'],
  ['Too much work is manual', 'Repetitive assignment, notifications, status changes and follow up can consume time that should be spent on actual opportunities.'],
  ['Marketing cannot prove what worked', 'Without reliable attribution and reporting, it becomes difficult to connect campaigns with qualified leads, pipeline and revenue.'],
]

const included = [
  ['CRM setup', 'Structure HubSpot around the business process, lead sources, properties, ownership and reporting requirements.'],
  ['Lead lifecycle', 'Define clear stages and rules so marketing and sales share the same understanding of where a lead sits.'],
  ['Pipeline', 'Build practical pipeline stages that reflect how opportunities actually move through the sales process.'],
  ['Lead distribution', 'Create routing logic so new leads reach the appropriate person, team or queue with less manual intervention.'],
  ['Automation', 'Automate repetitive operational actions while keeping important customer decisions under human control.'],
  ['Workflows', 'Build workflows for assignment, notifications, lifecycle changes, follow up and other repeatable processes.'],
  ['Lead scoring', 'Use relevant signals to help prioritise leads instead of treating every enquiry as equally valuable.'],
  ['Marketing attribution', 'Connect campaign and source information to lead and opportunity data where the available tracking supports it.'],
  ['Sales visibility', 'Give sales a clearer view of lead context, activity, ownership, stage and next action.'],
  ['Reporting', 'Create reporting that moves beyond lead volume toward qualified leads, pipeline and business outcomes.'],
]

const process = [
  ['01', 'Audit the flow', 'Map how leads currently enter, move, get assigned, receive follow up and become opportunities.'],
  ['02', 'Define the lifecycle', 'Create the stages, properties, ownership rules and qualification logic the team can actually use.'],
  ['03', 'Build the workflows', 'Implement routing, notifications, automation, scoring and operational workflows around the agreed process.'],
  ['04', 'Connect the data', 'Bring marketing sources, conversion events and sales activity together where the technical setup supports it.'],
  ['05', 'Report & improve', 'Use CRM data and sales feedback to identify process gaps and improve the system over time.'],
]

const faqs = [
  ['Do you set up HubSpot from scratch?', 'Yes. The work can cover a new HubSpot setup or the restructuring of an existing portal, depending on the current state and business requirements.'],
  ['Can you improve an existing HubSpot CRM without rebuilding it?', 'Yes. Often the highest value comes from cleaning up lifecycle stages, properties, ownership, workflows and reporting rather than starting again.'],
  ['Can you automate lead distribution?', 'Yes. Lead routing can be designed around factors such as source, service, geography, team ownership or qualification signals, subject to the available HubSpot setup.'],
  ['Can HubSpot show where leads came from?', 'It can capture and report on source and attribution information when tracking is implemented correctly. The quality of the reporting depends on the underlying data and integrations.'],
  ['Can you connect advertising with HubSpot?', 'Yes. Google Ads, Meta Ads, website conversion tracking and CRM data can be connected where the required integrations and tracking architecture are available.'],
  ['Do you build lead scoring and workflows?', 'Yes. Scoring and workflows can help prioritise leads, automate operational tasks and trigger appropriate follow up based on defined rules.'],
  ['Will automation replace our sales team?', 'No. The purpose is to remove repetitive operational work and improve visibility so sales can spend more time on conversations and opportunities that need human judgement.'],
]

export default function HubSpotCRMService() {
  return <main className="hs-service" id="main">
    <section className="hs-hero"><div className="hs-grid" aria-hidden="true"/><div className="container hs-hero-inner">
      <Link className="hs-back" to="/services">← Back to services</Link>
      <div className="hs-hero-layout"><div className="hs-hero-copy"><p className="hs-eyebrow">HubSpot CRM & Automation · Dubai & UAE</p><h1>Fix What Happens After Lead Capture.</h1><p className="hs-lead">I build the CRM, routing, automation and reporting layer that helps your team capture, assign, follow up and measure leads properly.</p><a className="hs-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute CRM Review <span>↗</span></a><p className="hs-trust">No obligation · Marketing operations focused · Dubai based</p></div><div className="hs-hero-panel"><span>LEAD OPERATIONS</span><div className="hs-flow"><b>LEAD CAPTURE</b><i>↓</i><b>ASSIGN</b><i>↓</i><b>FOLLOW UP</b><i>↓</i><strong>OPPORTUNITY</strong></div><small>Capture is only the beginning.</small></div></div>
    </div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><div><p className="hs-eyebrow">The problem</p><h2>Generating the lead is only half the job.</h2></div><p>The real operational problem starts after capture: who owns the lead, what happens next and can anyone measure the outcome?</p></div><div className="hs-pain-grid">{pains.map(([title,text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="hs-section hs-dark"><div className="container"><div className="hs-heading"><div><p className="hs-eyebrow">Strategic insight</p><h2>Your CRM should connect marketing activity with sales action.</h2></div><p>HubSpot becomes valuable when the system reflects the real lead journey rather than simply storing contact records.</p></div><div className="hs-principles"><article><span>01</span><h3>Capture</h3><p>Bring lead information into one structured system with useful source and context.</p></article><article><span>02</span><h3>Route</h3><p>Make ownership and next action clear so leads do not sit unattended.</p></article><article><span>03</span><h3>Automate</h3><p>Remove repetitive operational tasks with controlled workflows and rules.</p></article><article><span>04</span><h3>Measure</h3><p>Connect lead activity with qualification, pipeline and business outcomes.</p></article></div></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><div><p className="hs-eyebrow">What's included</p><h2>Build the operational layer behind your marketing.</h2></div><p>Each component is designed to make lead handling more consistent, visible and measurable.</p></div><div className="hs-included-grid">{included.map(([title,text],i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="hs-section hs-dark"><div className="container"><div className="hs-heading"><div><p className="hs-eyebrow">The methodology</p><h2>Map the process before automating the process.</h2></div><p>Automation should reinforce a clear sales process. It should not hide a broken one.</p></div><div className="hs-process">{process.map(([number,title,text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="hs-measure"><div className="container hs-measure-grid"><div><p className="hs-eyebrow">Measurement</p><h2>See what happens after the lead is captured.</h2></div><div><p>The reporting layer can connect source, lifecycle, qualification, ownership and sales progression so marketing is evaluated on more than lead volume.</p><div className="hs-tags"><span>Lead source</span><span>Qualified leads</span><span>Lead response</span><span>Pipeline</span><span>Attribution</span><span>Sales progression</span></div></div></div></section>

    <section className="hs-section"><div className="container hs-proof"><div><p className="hs-eyebrow">Proof</p><h2>Built from experience across marketing and CRM operations.</h2></div><div><p>Hands on experience with HubSpot, lead distribution, lifecycle stages, qualification, websites, paid acquisition and campaign tracking informs the operational approach.</p><p>Verified CRM performance data can be added as case study evidence grows. No invented automation or revenue claims.</p></div></div></section>

    <section className="hs-section hs-dark"><div className="container hs-why"><div><p className="hs-eyebrow">Why Ashwin</p><h2>This moves beyond advertising into marketing operations.</h2></div><p>I look at what happens after acquisition: how the lead enters the CRM, who receives it, what information sales sees, what gets automated and whether the eventual outcome can be measured.</p></div></section>

    <section className="hs-section"><div className="container"><div className="hs-heading"><div><p className="hs-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2></div><p>Direct answers for businesses considering CRM and automation work.</p></div><div className="hs-faq">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="hs-cta"><div className="container"><p className="hs-eyebrow">Ready to fix the post lead process?</p><h2>Let's look at what happens after your next enquiry.</h2><p>Book 15 minutes and we can identify where leads are being lost, delayed or poorly measured.</p><a className="hs-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Free CRM Review <span>↗</span></a></div></section>

    <section className="hs-related"><div className="container"><p className="hs-eyebrow">Related services</p><div className="hs-related-grid"><Link to="/services/lead-generation"><span>Lead Generation</span><b>→</b></Link><Link to="/services/whatsapp-marketing"><span>WhatsApp Marketing</span><b>→</b></Link><Link to="/services/performance-growth-marketing"><span>Performance & Growth Marketing</span><b>→</b></Link></div></div></section>
  </main>
}
