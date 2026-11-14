import { Link } from 'react-router-dom'
import CaseStudyLeadForm from '../components/case-studies/CaseStudyLeadForm.jsx'

const checks = [
  ['Define qualification', 'Agree what makes an enquiry sales qualified: service fit, eligibility, intent and the information your sales team needs.'],
  ['Connect acquisition', 'Keep the campaign source and landing page attached to each enquiry so lead quality can be reviewed alongside acquisition cost.'],
  ['Use consistent statuses', 'Separate invalid details, unsuccessful contact attempts, qualified prospects and customers. A missed call is not evidence that a lead is unqualified.'],
  ['Compare fair cohorts', 'Use a consistent reporting cutoff and allow for sales cycle length. Recent leads have had less time to progress than older cohorts.'],
  ['Reconcile before deciding', 'Check duplicates and definitions, then reconcile the summary with the underlying records before changing budgets.'],
]

export default function CrmCaseStudy() {
  return <main className="crm-case-page"><div className="crm-case-shell">
    <header className="crm-case-header"><Link to="/case-studies" className="crm-back">← Practical frameworks</Link><span>CRM ANALYTICS · UAE</span></header>
    <section className="crm-case-hero"><div className="crm-case-hero-copy"><p className="crm-kicker">Lead qualification framework</p><h1>Connect lead volume with sales qualification.</h1><p className="crm-hero-summary">More enquiries do not automatically mean more useful opportunities. This framework connects paid acquisition with HubSpot CRM outcomes so marketing and sales can review the same journey.</p><div className="crm-tags"><span>Lead quality</span><span>CRM workflows</span><span>Marketing measurement</span></div></div></section>
    <section className="crm-simple-section"><h2>Start with the journey after the form submission.</h2><p>As a <Link to="/">performance marketing specialist</Link>, I look at what happens between an ad click, an enquiry and a qualified conversation. Lead volume and CPL are useful starting points, but they need sales feedback to support a budget decision.</p><p>This page presents a practical method, not a verified client results report.</p></section>
    {checks.map(([title, text], index) => <section className="crm-simple-section" key={title}><div className="crm-section-label">{String(index + 1).padStart(2, '0')} · REVIEW</div><div className="crm-two-col"><h2>{title}</h2><p>{text}</p></div></section>)}
    <section className="crm-simple-section"><h2>Measure the outcome, with a clear definition.</h2><div className="crm-table-card"><table><thead><tr><th>Measure</th><th>Calculation</th><th>What to check</th></tr></thead><tbody><tr><td>SQL rate</td><td>Sales qualified leads ÷ total leads</td><td>Consistent qualification rules and cohort dates</td></tr><tr><td>Cost per SQL</td><td>Attributed ad spend ÷ sales qualified leads</td><td>Matching spend and lead cohorts</td></tr><tr><td>Lead to customer rate</td><td>Customers ÷ leads</td><td>Enough time for the sales cycle</td></tr></tbody></table></div><p>These measures describe observed outcomes. They do not by themselves establish that a marketing change caused an improvement.</p><p>Explore <Link to="/services/hubspot-crm-integration">HubSpot CRM integration</Link> or the connected <Link to="/services/performance-marketing-services">performance marketing services</Link>.</p></section>
    <CaseStudyLeadForm eyebrow="Review your lead journey" title="Which campaigns are producing qualified conversations?" description="Share your business goal and where leads are getting stuck. We can discuss the tracking, qualification and follow up that need attention." buttonLabel="Request a CRM review" />
  </div></main>
}
