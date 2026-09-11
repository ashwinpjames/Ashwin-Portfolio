import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/contact.js'
import '../styles/cro-service.css'

const problems = [
  ['01', 'Traffic without enough conversions', 'More visitors do not automatically create more enquiries, purchases or opportunities.'],
  ['02', 'Unclear value proposition', 'When the page does not quickly communicate relevance and value, users have little reason to continue.'],
  ['03', 'Weak calls to action', 'Vague or poorly placed CTAs create unnecessary hesitation at the point of decision.'],
  ['04', 'Too much friction', 'Long forms, confusing navigation and unnecessary steps can suppress conversion intent.'],
  ['05', 'Mobile experience gaps', 'A page that works on desktop can still lose high intent users on smaller screens.'],
  ['06', 'Guesswork instead of evidence', 'Without analytics and testing, optimisation becomes opinion rather than learning.'],
]

const system = [
  ['01', 'Research & Behaviour', 'Understand users, intent, objections, traffic sources and where the journey breaks.'],
  ['02', 'Value Proposition', 'Make the offer, relevance and reason to choose you clear within seconds.'],
  ['03', 'UX & Information Flow', 'Remove friction and structure information around how people make decisions.'],
  ['04', 'CTA & Forms', 'Improve calls to action, forms and conversion moments without adding pressure.'],
  ['05', 'Experimentation', 'Test meaningful changes with a clear hypothesis instead of changing everything at once.'],
  ['06', 'Measurement', 'Track conversion behaviour and use evidence to decide what should happen next.'],
]

const process = [
  ['01', 'Audit', 'Review analytics, pages, traffic sources, conversion paths and existing friction.'],
  ['02', 'Diagnose', 'Identify the highest impact conversion problems and formulate testable hypotheses.'],
  ['03', 'Prioritise', 'Rank opportunities by expected impact, confidence, effort and business value.'],
  ['04', 'Test', 'Implement focused experiments across messaging, UX, CTAs, forms and page structure.'],
  ['05', 'Learn & Scale', 'Read the evidence, document learning and roll successful improvements forward.'],
]

const deliverables = ['Conversion audit', 'Landing page review', 'Value proposition analysis', 'Message match review', 'CTA optimisation', 'Form optimisation', 'Mobile UX review', 'Page structure recommendations', 'Analytics and event review', 'A/B testing roadmap', 'Experiment hypotheses', 'Performance reporting']

const metrics = [
  ['CONVERSION RATE', 'Visitor → action'],
  ['CTA RATE', 'Interaction'],
  ['FORM COMPLETION', 'Lead friction'],
  ['QUALIFIED RATE', 'Lead quality'],
  ['COST / CONVERSION', 'Acquisition efficiency'],
  ['REVENUE / VISITOR', 'Commercial value'],
]

const framework = [
  ['01', 'Intent', 'What does the visitor want and what brought them here?'],
  ['02', 'Clarity', 'Can they understand the offer, value and next step quickly?'],
  ['03', 'Trust', 'Does the page provide enough evidence to reduce perceived risk?'],
  ['04', 'Friction', 'What unnecessary effort or uncertainty is blocking action?'],
  ['05', 'Action', 'Is the next step obvious, relevant and easy to complete?'],
  ['06', 'Learning', 'What does behaviour and experimentation tell us to improve next?'],
]

const fit = ['Already receiving meaningful website traffic', 'Have a clear product or service offer', 'Can measure enquiries, purchases or other conversions', 'Want to improve efficiency before simply buying more traffic', 'Are willing to make decisions from evidence']

const faq = [
  ['What is CRO?', 'Conversion Rate Optimisation is the systematic process of improving the percentage of visitors who take a desired action by reducing friction, improving clarity and testing meaningful changes.'],
  ['Do I need a lot of traffic for CRO?', 'Not necessarily, but the amount and quality of data affects how confidently experiments can be interpreted. Lower traffic can still support valuable qualitative analysis and prioritisation.'],
  ['Can CRO reduce my cost per lead?', 'It can. When the same qualified traffic converts at a higher rate, the effective cost per conversion can decrease without increasing media spend.'],
  ['Do you work on landing pages?', 'Yes. Landing page structure, messaging, value proposition, CTA placement, forms, mobile UX and conversion friction are all relevant CRO areas.'],
  ['Do you run A/B tests?', 'Testing is used where the traffic and measurement environment can support useful experimentation. Where it cannot, CRO can focus on evidence based UX and funnel improvements.'],
  ['How do you decide what to test?', 'Tests are prioritised from business impact, user behaviour, analytics, qualitative evidence, implementation effort and the strength of the underlying hypothesis.'],
  ['Is CRO only for ecommerce?', 'No. CRO applies to lead generation, SaaS, services, ecommerce and other websites where visitors are expected to take measurable actions.'],
]

export default function CROService() {
  return <main className="cro-service" id="main">
    <section className="cro-hero"><div className="cro-grid" aria-hidden="true"/><div className="container cro-hero-inner"><div className="cro-hero-copy cro-hero-copy-centered"><p className="cro-eyebrow">Conversion Rate Optimisation</p><h1>Turn More of Your Existing Traffic Into Valuable Actions</h1><p className="cro-lead">Improve conversion rates by removing friction, sharpening your message and building a decision journey around real user behaviour.</p><div className="cro-actions"><a className="cro-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Get a CRO Strategy <span>↗</span></a><a className="cro-secondary" href="#approach">View My Approach</a></div><p className="cro-label">CRO FOCUS AREAS</p><div className="cro-pills"><span>LANDING PAGES</span><span>UX & MESSAGING</span><span>CTA & FORMS</span><span>TESTING & ANALYTICS</span></div><p className="cro-meta">Research · Diagnose · Prioritise · Test · Learn</p></div></div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">The Problem</p><h2>More Traffic Is Not Always the Answer</h2><p>If the conversion path is weak, buying more traffic can simply make an inefficient funnel more expensive.</p></div><div className="cro-pain-grid">{problems.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cro-section cro-dark"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">Strategic Insight</p><h2>CRO Is About Improving the Decision Journey, Not Just Changing Buttons</h2><p>People convert when the page answers the right questions with enough clarity, relevance and trust at the right moment.</p></div><div className="cro-funnel">{['VISITOR','INTENT','VALUE','TRUST','ACTION','CONVERSION'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div><p className="cro-principle">The goal is not more clicks. The goal is more meaningful actions.</p></div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">CRO System</p><h2>A Conversion System Built Around How Users Decide</h2><p>Six connected layers turn behavioural evidence into practical improvements.</p></div><div className="cro-system-grid">{system.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="approach" className="cro-section cro-dark"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">How I Work</p><h2>A Five Step Approach to Conversion Optimisation</h2><p>A disciplined process designed to find the highest value opportunities before changing the page.</p></div><div className="cro-process-cards">{process.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">Deliverables</p><h2>Everything Needed to Build a Better Conversion Path</h2><p>A practical CRO scope covering research, UX, messaging, measurement and experimentation.</p></div><div className="cro-deliverables">{deliverables.map(item => <div key={item}><span>•</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="cro-section cro-dark"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">Measurement</p><h2>I Measure What Happens After the Click</h2><p>CRO needs to connect page behaviour with the business outcome the conversion is supposed to create.</p></div><div className="cro-funnel cro-revenue">{['VISITS','ENGAGEMENT','CONVERSIONS','QUALIFIED','OPPORTUNITIES','REVENUE'].map((item,i) => <div key={item}><strong>{item}</strong>{i < 5 && <span>→</span>}</div>)}</div><div className="cro-metrics">{metrics.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">Strategy Framework</p><h2>Intent → Clarity → Trust → Friction → Action → Learning</h2><p>A framework for understanding where a conversion journey is losing people and what to improve next.</p></div><div className="cro-system-grid">{framework.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="cro-section cro-dark"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">What Working With Ashwin Looks Like</p><h2>Know what happens after you make contact.</h2><p>The process starts with the evidence already available before recommendations are made.</p></div><div className="cro-process-list">{[['01','Understand','Business model, traffic sources, offer and conversion goal.'],['02','Audit','Review pages, analytics, UX and existing conversion behaviour.'],['03','Prioritise','Identify the opportunities most likely to create meaningful improvement.'],['04','Implement','Translate recommendations into focused page and funnel changes.'],['05','Learn','Measure the result and use the evidence to determine the next iteration.']].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="cro-section"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">Who This Is For</p><h2>Is CRO Right for Your Business?</h2><p>CRO is most useful when there is enough meaningful traffic or behavioural evidence to identify where the conversion journey can improve.</p></div><div className="cro-fit">{fit.map(item => <div key={item}><span>✓</span><strong>{item}</strong></div>)}</div></div></section>

    <section className="cro-section cro-dark"><div className="container"><div className="cro-heading"><p className="cro-eyebrow">FAQ</p><h2>Answers to the Questions That Affect the CRO Decision</h2><p>Clear answers on scope, data, testing and expected outcomes.</p></div><div className="cro-faq">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="cro-cta"><div className="container"><p className="cro-eyebrow">Make Your Existing Traffic Work Harder</p><h2>Improve the conversion system before simply buying more traffic.</h2><p>Build a clearer, lower friction journey that turns more of the right visitors into measurable business outcomes.</p><a className="cro-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Start a CRO Conversation <span>↗</span></a></div></section>

    <section className="cro-related"><div className="container"><p className="cro-eyebrow">Related Services</p><div className="cro-related-grid"><Link to="/services/lead-generation">Lead Generation</Link><Link to="/services/performance-marketing">Performance Marketing</Link><Link to="/services/website-development">Website Development</Link></div></div></section>
  </main>
}
