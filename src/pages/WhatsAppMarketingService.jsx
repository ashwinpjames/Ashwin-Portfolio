import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/whatsapp-marketing-service.css'

const problems = [
  ['01', 'Clicks become unanswered chats', 'A WhatsApp click is only the beginning. Without a clear response path, valuable purchase or enquiry intent can disappear after the first message.'],
  ['02', 'Every conversation starts differently', 'When qualification depends on whoever replies, lead quality, sales context and customer experience become inconsistent.'],
  ['03', 'Follow up is easy to lose', 'Interested prospects can go cold when reminders, ownership and next steps are left to memory.'],
  ['04', 'WhatsApp is disconnected from acquisition', 'Without campaign, conversation and CRM visibility, it becomes difficult to understand which marketing activity creates useful opportunities.'],
  ['05', 'Automation happens before strategy', 'Automating a weak conversation flow can simply make a poor customer experience happen faster.'],
  ['06', 'Message volume replaces business outcomes', 'More chats do not necessarily mean more revenue. The important question is what those conversations become.'],
]

const system = [
  ['01', 'Entry Points', 'Connect ads, website CTAs and other acquisition sources to relevant WhatsApp conversations.'],
  ['02', 'Conversation Design', 'Structure the opening, questions, responses and next steps around real customer intent.'],
  ['03', 'Qualification', 'Capture the information sales needs while keeping the conversation simple enough for prospects to continue.'],
  ['04', 'Automation', 'Use automation for appropriate first responses, FAQs, routing and follow up without removing useful human interaction.'],
  ['05', 'CRM & Handoff', 'Create clear ownership and visibility so useful conversations can move into the sales process.'],
  ['06', 'Measurement', 'Track the journey from WhatsApp click to conversation, qualification, opportunity and downstream outcome.'],
]

const process = [
  ['01', 'Map', 'Understand where WhatsApp enters the funnel, what the prospect already knows and what the next action should be.'],
  ['02', 'Design', 'Create the conversation logic, qualification questions, response paths and handoff points.'],
  ['03', 'Connect', 'Bring together tracking, segmentation, routing, automation and CRM connections where appropriate.'],
  ['04', 'Test', 'Review entry points, offers, messages and conversation flows to identify where intent is being lost.'],
  ['05', 'Improve', 'Use conversation and sales feedback to refine qualification, follow up and the path to opportunity.'],
]

const deliverables = ['Click to WhatsApp strategy', 'WhatsApp conversion audit', 'Conversation flow mapping', 'Lead qualification logic', 'Automated response planning', 'Follow up sequences', 'Lead segmentation', 'Campaign messaging', 'CRM integration planning', 'Tracking and event mapping', 'Sales handoff recommendations', 'Performance reporting']

const metrics = [
  ['WHATSAPP CLICKS', 'Entry intent'],
  ['CONVERSATION STARTS', 'Engagement'],
  ['QUALIFIED RATE', 'Lead quality'],
  ['RESPONSE SPEED', 'Sales readiness'],
  ['CONVERSION RATE', 'Opportunity creation'],
  ['SALES OUTCOMES', 'Commercial value'],
]

const framework = [
  ['01', 'Intent', 'Understand why the prospect is starting the conversation and what triggered the action.'],
  ['02', 'Context', 'Give the conversation enough information to make the next step relevant.'],
  ['03', 'Qualification', 'Identify whether the enquiry fits the offer and what sales needs to know.'],
  ['04', 'Follow Up', 'Create a clear next step so interested prospects do not disappear between conversations.'],
  ['05', 'Handoff', 'Move useful conversations to the right person, process or CRM stage.'],
  ['06', 'Learning', 'Use conversation data and sales feedback to improve the system over time.'],
]

const fit = ['Already receive enquiries through WhatsApp', 'Use Meta Ads, Google Ads or other acquisition channels', 'Have a sales team that needs better qualified conversations', 'Want more structure around response and follow up', 'Need clearer visibility from marketing activity to sales outcome']

const faq = [
  ['Why should I optimise WhatsApp instead of just adding a WhatsApp button?', 'A button creates an entry point. A conversion system defines what happens after the click, including response, qualification, follow up, routing and measurement.'],
  ['Can WhatsApp work with Google Ads and Meta Ads?', 'Yes. Click to WhatsApp can be part of acquisition campaigns, with the conversation flow designed to continue the intent created by the ad.'],
  ['Can you automate WhatsApp conversations?', 'Automation can handle appropriate first responses, FAQs, routing and follow up. The level of automation should depend on the complexity and sensitivity of the enquiry.'],
  ['Will automation make conversations feel impersonal?', 'It can if it is overused. The goal is to remove repetitive work while keeping useful conversations clear and human where a sales decision requires context.'],
  ['Can WhatsApp leads be connected to a CRM?', 'Yes, where the available setup supports it. CRM integration can help centralise lead information, ownership, status and follow up.'],
  ['How do you measure WhatsApp marketing?', 'Depending on the setup, measurement can include WhatsApp clicks, conversation starts, qualified conversations, response speed, conversion rate and downstream sales outcomes.'],
  ['Is WhatsApp marketing useful for UAE businesses?', 'Yes. WhatsApp is a widely used enquiry and communication channel for businesses in the UAE, which makes the quality of the post click experience especially important.'],
]

const testimonials = [
  ['MA', 'Muhammed Ashar', 'Direct Manager · February 13, 2026', 'I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing.'],
  ['DS', 'Deeksha S', 'Operations Manager · Reliance · July 13, 2026', 'I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results.'],
  ['HF', 'Highrange Flavours Idukki', 'Google Review', 'Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results, not...'],
]

export default function WhatsAppMarketingService() {
  return <main className="wa-service" id="main">
    <section className="wa-hero"><div className="wa-grid" aria-hidden="true"/><div className="container wa-hero-inner"><div className="wa-hero-copy wa-hero-copy-centered"><p className="wa-eyebrow">WhatsApp Marketing</p><h1>Turn WhatsApp Conversations Into Qualified Opportunities</h1><p className="wa-lead">Build a clearer path from the first WhatsApp message to qualification, follow up and sales action, so your conversations become part of a measurable acquisition system.</p><div className="wa-actions"><a className="wa-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a WhatsApp Strategy <span>↗</span></a><a className="wa-secondary" href="#approach">View My Approach</a></div><p className="wa-label">WHATSAPP FOCUS AREAS</p><div className="wa-pills"><span>CLICK TO WHATSAPP</span><span>CONVERSATION FLOWS</span><span>QUALIFICATION</span><span>CRM & AUTOMATION</span></div><p className="wa-meta">Map · Design · Connect · Test · Improve</p></div></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">The Problem</p><h2>A WhatsApp Click Is Not a Conversion</h2></div><p>The conversation after the click determines whether intent becomes a useful lead, a sales opportunity or another unanswered chat.</p></div><div className="wa-pain-grid">{problems.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wa-section wa-dark"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">Strategic Insight</p><h2>WhatsApp Is Part of the Conversion Path, Not Just a Messaging Channel</h2></div><p>The goal is to reduce the gap between marketing intent and sales action while keeping the conversation useful for the prospect and workable for the team.</p></div><div className="wa-funnel">{['CLICK','CONVERSATION','CONTEXT','QUALIFICATION','OPPORTUNITY','SALE'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div><p className="wa-principle">The goal is not more chats. The goal is more useful conversations that can move forward.</p></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">WhatsApp System</p><h2>A Conversation System Built Around Customer Intent</h2></div><p>Six connected layers turn WhatsApp from an isolated inbox into a more structured part of acquisition and sales.</p></div><div className="wa-system-grid">{system.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="approach" className="wa-section wa-dark"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">How I Work</p><h2>Design the Conversation Before Automating It</h2></div><p>Automation is useful only when the underlying customer journey is clear and the next action is understood.</p></div><div className="wa-process-cards">{process.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">Deliverables</p><h2>Everything Needed to Build a Better WhatsApp Conversion Path</h2></div><p>A practical scope covering conversation design, qualification, automation, CRM, tracking and sales handoff.</p></div><div className="wa-deliverables">{deliverables.map(item => <div key={item}><span>•</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="wa-section wa-dark"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">Measurement</p><h2>Measure Conversations by What They Become</h2></div><p>WhatsApp performance should be evaluated beyond message volume. The useful signal is whether conversations become qualified opportunities and sales outcomes.</p></div><div className="wa-funnel wa-revenue">{['CLICKS','CONVERSATIONS','QUALIFIED','OPPORTUNITIES','SALES','REVENUE'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div><div className="wa-metrics">{metrics.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">Strategy Framework</p><h2>Intent → Context → Qualification → Follow Up → Handoff → Learning</h2></div><p>A practical framework for understanding where WhatsApp conversations are losing momentum and what to improve next.</p></div><div className="wa-system-grid">{framework.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wa-section wa-dark"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">What Working With Ashwin Looks Like</p><h2>Know What Happens After the Click</h2></div><p>The process starts with the acquisition and sales context already available before recommendations are made.</p></div><div className="wa-process-list">{[['01','Understand','Business model, traffic sources, offer and conversation goal.'],['02','Audit','Review entry points, conversation flow, response process and measurement.'],['03','Prioritise','Identify the opportunities most likely to improve conversation quality and sales movement.'],['04','Implement','Translate recommendations into focused conversation, automation and handoff changes.'],['05','Learn','Measure the result and use sales feedback to determine the next iteration.']].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">Client Perspectives</p><h2>Results Matter. So Does the Way We Get There.</h2></div><p>A few perspectives from people who have worked with Ashwin across performance marketing and growth projects.</p></div><div className="wa-testimonials">{testimonials.map(([initials,name,role,quote]) => <figure key={name}><div className="wa-stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></figcaption></figure>)}</div></div></section>

    <section className="wa-section wa-dark"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">Who This Is For</p><h2>Is WhatsApp Marketing Right for Your Business?</h2></div><p>This approach is most useful when WhatsApp already plays a meaningful role in enquiries, sales or customer communication.</p></div><div className="wa-fit">{fit.map(item => <div key={item}><span>✓</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">FAQ</p><h2>Answers to the Questions That Affect the Decision</h2></div><p>Clear answers on automation, acquisition, CRM, measurement and conversion.</p></div><div className="wa-faq">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="wa-cta"><div className="container"><p className="wa-eyebrow">Make WhatsApp Part of the Sales System</p><h2>Improve What Happens After the Click.</h2><p>Build a clearer conversation journey that turns more of the right WhatsApp enquiries into measurable business opportunities.</p><a className="wa-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a WhatsApp Conversation <span>↗</span></a></div></section>

    <section className="wa-related"><div className="container"><p className="wa-eyebrow">Related Services</p><div className="wa-related-grid"><Link to="/services/meta-ads">Meta Ads</Link><Link to="/services/lead-generation">Lead Generation</Link><Link to="/services/hubspot">HubSpot CRM & Automation</Link></div></div></section>
  </main>
}
