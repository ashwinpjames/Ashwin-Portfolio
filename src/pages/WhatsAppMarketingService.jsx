import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/whatsapp-marketing-service.css'

const pains = [
  ['Clicks become unanswered chats', 'A WhatsApp click is only the start. Without a clear conversation path, valuable intent can disappear after the first message.'],
  ['Sales receives inconsistent information', 'When qualification happens differently in every conversation, follow up becomes slower and lead quality becomes harder to assess.'],
  ['Follow up depends on memory', 'Good prospects can go cold when there is no structured response, reminder or segmentation process behind the conversation.'],
  ['WhatsApp is disconnected from marketing', 'Without tracking and CRM integration, it becomes difficult to connect campaigns and conversations to actual business outcomes.'],
]

const included = [
  ['Click to WhatsApp', 'Build and measure the path from ads, website CTAs and other entry points into a WhatsApp conversation.'],
  ['Conversation flow', 'Create practical conversation paths that move a prospect from first message to the next useful action.'],
  ['Lead qualification', 'Capture the information sales needs without turning the conversation into a long form.'],
  ['Automated responses', 'Use appropriate automation for first responses, routing, FAQs and follow up without making the experience feel robotic.'],
  ['Follow up', 'Design structured follow up sequences so interested prospects are not lost simply because the first conversation ended.'],
  ['Segmentation', 'Separate conversations by intent, service, stage or other useful attributes so follow up can be more relevant.'],
  ['Campaigns', 'Plan WhatsApp campaigns around specific offers, audiences and conversion objectives rather than sending undifferentiated messages.'],
  ['Tracking', 'Measure clicks, conversations, qualification and conversion signals so WhatsApp can be evaluated as part of acquisition.'],
  ['CRM integration', 'Connect WhatsApp activity with CRM workflows where the business needs centralised lead visibility and sales handoff.'],
  ['Conversion', 'Improve the path from conversation to qualified opportunity and ultimately the business outcome that matters.'],
]

const process = [
  ['01', 'Map the journey', 'Identify where WhatsApp enters the funnel, what the prospect already knows and what needs to happen next.'],
  ['02', 'Design the conversation', 'Create the opening, qualification logic, responses and handoff points around real customer intent.'],
  ['03', 'Connect the system', 'Set up tracking, segmentation, routing, automation and CRM connections where appropriate.'],
  ['04', 'Launch & test', 'Test entry points, offers, messages and conversation flows to identify what creates stronger conversations.'],
  ['05', 'Improve conversion', 'Use conversation and sales feedback to refine qualification, follow up and the path to opportunity.'],
]

const faqs = [
  ['Why should I optimise WhatsApp instead of just adding a WhatsApp button?', 'A button creates an entry point. A conversion system defines what happens after the click, including response, qualification, follow up, routing and measurement.'],
  ['Can WhatsApp work with Google Ads and Meta Ads?', 'Yes. Click to WhatsApp can be part of acquisition campaigns, with the conversation flow designed to continue the intent created by the ad.'],
  ['Can you automate WhatsApp conversations?', 'Automation can handle appropriate first responses, FAQs, routing and follow up. The level of automation should depend on the complexity and sensitivity of the enquiry.'],
  ['Will automation make conversations feel impersonal?', 'It can if it is overused. The goal is to remove repetitive work while keeping useful conversations clear and human where a sales decision requires context.'],
  ['Can WhatsApp leads be connected to a CRM?', 'Yes, where the available setup supports it. CRM integration can help centralise lead information, ownership, status and follow up.'],
  ['How do you measure WhatsApp marketing?', 'Depending on the setup, measurement can include click to WhatsApp rate, conversation starts, qualified conversations, response speed, conversion rate and downstream sales outcomes.'],
  ['Is this relevant for UAE businesses?', 'Yes. WhatsApp is a common enquiry and communication channel for businesses in the UAE, which makes the quality of the post click conversation particularly important.'],
]

export default function WhatsAppMarketingService() {
  return <main className="wa-service" id="main">
    <section className="wa-hero"><div className="wa-grid" aria-hidden="true"/><div className="container wa-hero-inner">
      <Link className="wa-back" to="/services">← Back to services</Link>
      <div className="wa-hero-layout"><div className="wa-hero-copy"><p className="wa-eyebrow">WhatsApp Marketing · Dubai & UAE</p><h1>Turn WhatsApp Conversations Into Opportunities.</h1><p className="wa-lead">A WhatsApp click is not a conversion. I build the conversation, qualification, follow up and measurement system that turns intent into opportunities your sales team can work with.</p><a className="wa-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Book a Free 15 Minute WhatsApp Review <span>↗</span></a><p className="wa-trust">No obligation · Conversation focused · Dubai based</p></div><div className="wa-hero-panel"><span>CONVERSATION PATH</span><div className="wa-chat"><div className="wa-bubble wa-left">Hi, I want to know more.</div><div className="wa-bubble wa-right">Sure. What service are you interested in?</div><div className="wa-bubble wa-left">I need help with my enquiry.</div><div className="wa-status"><i/>QUALIFIED OPPORTUNITY</div></div></div></div>
    </div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">The problem</p><h2>What happens after someone clicks WhatsApp?</h2></div><p>The first message creates an opportunity. The system behind the conversation determines whether that opportunity becomes a useful lead or disappears.</p></div><div className="wa-pain-grid">{pains.map(([title,text]) => <article key={title}><span>→</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wa-section wa-dark"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">Strategic insight</p><h2>WhatsApp is not just a messaging channel. It is part of the conversion path.</h2></div><p>The job is to reduce the gap between intent and sales action while keeping the conversation useful for the prospect and workable for the team.</p></div><div className="wa-principles"><article><span>01</span><h3>Start</h3><p>Make the entry point relevant to the campaign, offer and visitor intent.</p></article><article><span>02</span><h3>Qualify</h3><p>Ask the right questions and capture useful context without unnecessary friction.</p></article><article><span>03</span><h3>Follow up</h3><p>Give interested prospects a structured next step instead of leaving the outcome to chance.</p></article><article><span>04</span><h3>Convert</h3><p>Connect conversations with sales ownership and measurable business outcomes.</p></article></div></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">What's included</p><h2>Build the system behind the WhatsApp click.</h2></div><p>Every component exists to improve the movement from conversation to qualified opportunity.</p></div><div className="wa-included-grid">{included.map(([title,text],i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="wa-section wa-dark"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">The methodology</p><h2>Design the conversation before automating it.</h2></div><p>Automation is useful only when the underlying customer journey is clear.</p></div><div className="wa-process">{process.map(([number,title,text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="wa-measure"><div className="container wa-measure-grid"><div><p className="wa-eyebrow">Measurement</p><h2>Measure conversations by what they become.</h2></div><div><p>WhatsApp performance should be evaluated beyond message volume. The useful signal is whether conversations become qualified opportunities and sales outcomes.</p><div className="wa-tags"><span>WhatsApp clicks</span><span>Conversation starts</span><span>Qualified conversations</span><span>Response speed</span><span>Conversion rate</span><span>Sales outcomes</span></div></div></div></section>

    <section className="wa-section"><div className="container wa-proof"><div><p className="wa-eyebrow">Proof</p><h2>Built around the acquisition and sales systems around the conversation.</h2></div><div><p>Experience across paid acquisition, websites, landing pages, analytics, CRM and lead qualification helps connect WhatsApp with what happens before and after the conversation.</p><p>Verified WhatsApp performance data can be added as case study evidence grows. No invented conversion claims.</p></div></div></section>

    <section className="wa-section wa-dark"><div className="container wa-why"><div><p className="wa-eyebrow">Why Ashwin</p><h2>The goal is not more chats. It is better opportunities.</h2></div><p>I look at the entire path from acquisition to conversation to qualification and sales handoff, so WhatsApp is treated as part of the acquisition system rather than an isolated inbox.</p></div></section>

    <section className="wa-section"><div className="container"><div className="wa-heading"><div><p className="wa-eyebrow">FAQ</p><h2>Questions worth answering before you start.</h2></div><p>Direct answers for businesses considering WhatsApp as a conversion channel.</p></div><div className="wa-faq">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="wa-cta"><div className="container"><p className="wa-eyebrow">Ready to improve WhatsApp conversion?</p><h2>Let's look at what happens after the click.</h2><p>Book 15 minutes and we can identify where conversations are being lost and what the next practical improvement should be.</p><a className="wa-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Free WhatsApp Review <span>↗</span></a></div></section>

    <section className="wa-related"><div className="container"><p className="wa-eyebrow">Related services</p><div className="wa-related-grid"><Link to="/services/meta-ads"><span>Meta Ads</span><b>→</b></Link><Link to="/services/lead-generation"><span>Lead Generation</span><b>→</b></Link><Link to="/services/hubspot"><span>HubSpot CRM & Automation</span><b>→</b></Link></div></div></section>
  </main>
}
