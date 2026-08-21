import { Link } from 'react-router-dom'
import { caseStudies, crmMonthlyData } from '../data/caseStudies.js'
import CaseStudyLeadForm from '../components/case-studies/CaseStudyLeadForm.jsx'

export default function CrmCaseStudy() {
  const study = caseStudies.find((item) => item.slug === 'crm-sales-qualified-lead')
  const [totalLeads, totalLabel] = study.metrics[0]
  const [sqlLeads] = study.metrics[1]
  const [sqlRate] = study.metrics[2]
  const [bestRate] = study.metrics[3]
  const max = Math.max(...crmMonthlyData.map((item) => item.total))

  return (
    <main className="crm-case-page">
      <div className="crm-case-shell">
        <header className="crm-case-header">
          <Link to="/case-studies" className="crm-back">← Case studies</Link>
          <span>CRM ANALYTICS · UAE</span>
        </header>

        <section className="crm-case-hero">
          <div className="crm-case-hero-copy">
            <p className="crm-kicker">HubSpot CRM · Aug 2025 — Jul 2026</p>
            <h1>{study.title}</h1>
            <p className="crm-hero-summary">{study.summary}</p>
            <div className="crm-tags"><span>Lead quality</span><span>Performance marketing</span><span>Marketing measurement</span></div>
          </div>
          <aside className="crm-hero-result">
            <small>DATASET</small>
            <strong>{totalLeads}</strong>
            <span>{totalLabel}</span>
            <div><b>{sqlLeads}</b> Sales Qualified Leads</div>
          </aside>
        </section>

        <section className="crm-stat-strip" aria-label="Key metrics">
          <div><strong>{totalLeads}</strong><span>Total leads analyzed</span></div>
          <div><strong>{sqlLeads}</strong><span>Sales Qualified Leads</span></div>
          <div><strong>{sqlRate}</strong><span>Overall SQL rate</span></div>
          <div><strong>{bestRate}</strong><span>Best monthly SQL rate</span></div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">01 · THE QUESTION</div>
          <div className="crm-two-col">
            <h2>Lead volume was visible. Lead quality was harder to see.</h2>
            <div>
              <p>Marketing performance could show how many leads entered the CRM, but volume alone could not show whether acquisition was producing commercially useful prospects.</p>
              <p>The analysis connected monthly CRM cohorts with their current lead status to create a clearer view of sales qualification.</p>
            </div>
          </div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">02 · MONTHLY VIEW</div>
          <div className="crm-section-heading"><h2>Volume changed. Quality changed with it.</h2><p>The chart shows monthly lead volume from the CRM cohort data.</p></div>
          <div className="crm-chart-card"><div className="crm-clean-chart">{crmMonthlyData.map((item) => <div className="crm-clean-bar-wrap" key={item.month} title={`${item.month}: ${item.total} leads, ${item.qualified} SQLs`}><div className="crm-clean-bar" style={{ height: `${Math.max(3, item.total / max * 100)}%` }} /><span>{item.month.slice(0, 3)}</span></div>)}</div></div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">03 · KEY FINDING</div>
          <div className="crm-finding"><div><span>March 2026</span><strong>747</strong><small>total leads · 121 SQLs</small></div><div className="crm-finding-arrow">vs</div><div><span>July 2026</span><strong>25.1%</strong><small>SQL rate · 139 SQLs</small></div></div>
          <p className="crm-finding-text">The highest lead volume was not the strongest quality outcome. July generated fewer total leads than March but more Sales Qualified Leads, showing why acquisition should be evaluated beyond CPL.</p>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">04 · THE FRAMEWORK</div>
          <div className="crm-framework">{['Ad spend', 'Leads', 'SQL', 'Opportunity', 'Customer', 'Revenue'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < 5 && <i>→</i>}</div>)}</div>
          <div className="crm-two-col crm-framework-copy"><h2>Move the question from “how many leads?” to “how much commercial value?”</h2><p>Useful downstream measures include SQL rate, cost per Sales Qualified Lead, lead to customer rate, cost per conversion and revenue based efficiency.</p></div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">05 · DATA QUALITY</div>
          <div className="crm-two-col"><h2>CRM discipline is part of marketing measurement.</h2><p>Historical reporting depends on consistent CRM status updates. The dataset contains operational outcomes such as Qualified Hot, Qualified, Converted, Not Responding, On Hold, Wrong Number, Not Interested, Call Back and Not Qualified. Those classifications determine how useful the downstream analysis becomes.</p></div>
        </section>

        <section className="crm-simple-section crm-dataset-section">
          <div className="crm-section-label">06 · DATASET</div>
          <div className="crm-section-heading"><h2>12 month cohort view</h2><p>The monthly CRM records used for the analysis.</p></div>
          <div className="crm-table-card"><table><thead><tr><th>Month</th><th>Total</th><th>SQL</th><th>Not qualified</th><th>SQL rate</th></tr></thead><tbody>{crmMonthlyData.map((item) => <tr key={item.month}><td>{item.month}</td><td>{item.total}</td><td>{item.qualified}</td><td>{item.notQualified}</td><td>{item.rate}%</td></tr>)}</tbody></table></div>
        </section>

        <CaseStudyLeadForm eyebrow="Want a detailed CRM audit?" title="Is your lead volume hiding your real marketing performance?" description="I can help you connect ad acquisition, CRM outcomes and lead quality so you can see which campaigns are producing commercially useful opportunities." buttonLabel="Request a CRM audit" />

        <footer className="crm-case-footer"><Link to="/case-studies">← Back to all case studies</Link><span>CRM Lead Performance Analysis</span></footer>
      </div>
    </main>
  )
}
