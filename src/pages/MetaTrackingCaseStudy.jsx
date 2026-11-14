import { Link } from 'react-router-dom'
import CaseStudyLeadForm from '../components/case-studies/CaseStudyLeadForm.jsx'

const checks = [
  ['Event delivery', 'Check that the intended action produces an event, and that failed forms do not count as successful enquiries.'],
  ['Browser and server events', 'Inspect which actions each integration sends. Having two integrations does not establish that every conversion is recorded.'],
  ['Deduplication', 'Where browser and server integrations report the same action, check matching event names and event IDs so the action is not counted twice.'],
  ['Business outcomes', 'Compare submitted enquiries with CRM records and review qualification separately from the advertising platform’s attribution.'],
]

export default function MetaTrackingCaseStudy() {
  return <main className="crm-case-page"><div className="crm-case-shell">
    <header className="crm-case-header"><Link to="/case-studies" className="crm-back">← Practical frameworks</Link><span>META ADS · TRACKING REVIEW</span></header>
    <section className="crm-case-hero"><div className="crm-case-hero-copy"><p className="crm-kicker">Pixel and Conversions API</p><h1>Check the conversion signal behind your campaigns.</h1><p className="crm-hero-summary">A tracking review should establish what is sent, what is received and whether the event represents a useful business action. This framework explains the checks without promising a universal recovery rate.</p></div></section>
    <section className="crm-simple-section"><h2>Start with one real customer action.</h2><p>Follow the journey from landing page to successful enquiry, then compare the event with the CRM record. Consent choices, integration behaviour and attribution rules can all affect what is reported.</p><p>This is a practical review framework, not a report of measured client results. As a <Link to="/">performance marketing specialist</Link>, I use tracking alongside lead quality and sales feedback when evaluating campaigns.</p></section>
    {checks.map(([title, text], index) => <section className="crm-simple-section" key={title}><div className="crm-section-label">{String(index + 1).padStart(2, '0')} · REVIEW</div><div className="crm-two-col"><h2>{title}</h2><p>{text}</p></div></section>)}
    <section className="crm-simple-section"><h2>Separate tracking from attribution and lead quality.</h2><p>An event arriving in Events Manager does not automatically mean it will be attributed to an ad or become a paying customer. Review event delivery, attributed conversions and qualified enquiries as separate questions.</p><p>Read Meta’s documentation on <a href="https://developers.facebook.com/docs/marketing-api/conversions-api/" target="_blank" rel="noreferrer">Conversions API</a> and <a href="https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/" target="_blank" rel="noreferrer">browser and server event deduplication</a>. Explore <Link to="/services/meta-ads">Meta Ads services</Link> for a broader campaign review.</p></section>
    <CaseStudyLeadForm eyebrow="Review your measurement" title="Do your reported leads match your actual enquiries?" description="Tell me which platform, landing page and CRM you use, and what discrepancy you are seeing." buttonLabel="Request a tracking review" />
  </div></main>
}
