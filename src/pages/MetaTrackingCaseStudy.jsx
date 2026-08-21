import { Link } from 'react-router-dom'
import CaseStudyLeadForm from '../components/case-studies/CaseStudyLeadForm.jsx'

const signalSources = [
  ['Ad blockers', 'Prevents the browser pixel from loading', '42.7% of users affected'],
  ['iOS App Tracking Transparency', 'Requires explicit opt in before app tracking', '~89% opt out rate'],
  ['Safari ITP / Firefox ETP', 'Restricts cookie lifetime and multi session attribution', 'Attribution becomes less reliable'],
  ['Chrome cookie restrictions', 'Reduces browser based tracking signals', 'Impact varies by browser'],
  ['Attribution window changes', 'Changes which conversions are reported to Meta', 'Reported performance can fall'],
  ['Combined effect', 'Multiple barriers can affect the same visitor', '30 to 50% signal loss in the source benchmark'],
]

export default function MetaTrackingCaseStudy() {
  return (
    <main className="crm-case-page">
      <div className="crm-case-shell">
        <header className="crm-case-header">
          <Link to="/case-studies" className="crm-back">← Case studies</Link>
          <span>PAID MEDIA · META ADS</span>
        </header>

        <section className="crm-case-hero">
          <div className="crm-case-hero-copy">
            <p className="crm-kicker">Meta Pixel + CAPI · 2026 signal landscape</p>
            <h1>Half your conversions are invisible. The dashboard just doesn’t say so.</h1>
            <p className="crm-hero-summary">A practical breakdown of why pixel only Meta Ads tracking can underreport performance, where the signal breaks and why Pixel plus Conversions API has become important tracking infrastructure.</p>
            <div className="crm-tags"><span>Signal loss</span><span>Server side tracking</span><span>Attribution accuracy</span><span>Ad blockers</span></div>
          </div>
          <aside className="crm-hero-result">
            <small>TYPICAL SIGNAL LOSS</small>
            <strong>30 to 50%</strong>
            <span>of real conversions missed on pixel only setups</span>
            <div><b>95 to 99%</b> capture rate cited for combined Pixel + CAPI setups</div>
          </aside>
        </section>

        <section className="crm-stat-strip" aria-label="Key metrics">
          <div><strong>42.7%</strong><span>Ad blocker adoption in the source benchmark</span></div>
          <div><strong>11%</strong><span>iOS users opting in to app tracking</span></div>
          <div><strong>20 to 40%</strong><span>Conversions cited as recoverable with CAPI</span></div>
          <div><strong>8.0+</strong><span>EMQ score referenced for stronger signal quality</span></div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">01 · THE QUESTION</div>
          <div className="crm-two-col">
            <h2>The graph in Ads Manager looked fine. The revenue in Stripe didn’t agree with it.</h2>
            <div>
              <p>Pixel based tracking depends on the browser successfully sending events back to Meta. The source draft identifies iOS tracking restrictions, browser privacy controls, ad blockers and cookie changes as separate barriers to that signal.</p>
              <p>The practical question is therefore not only whether the pixel fires, but whether enough trustworthy conversion signal reaches Meta to support measurement and optimisation.</p>
            </div>
          </div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">02 · WHERE THE SIGNAL BREAKS</div>
          <div className="crm-two-col">
            <h2>It isn’t one leak. It’s several layers of signal loss.</h2>
            <div><p>A visitor can encounter more than one tracking barrier during the same journey. That makes the combined measurement problem larger than any single source of loss.</p></div>
          </div>
          <div className="crm-chart-card meta-signal-chart">
            {signalSources.slice(0, 4).map(([label, , value], index) => <div className="meta-signal-row" key={label}><div><span>{label}</span><small>{value}</small></div><i style={{ width: `${[85, 100, 55, 62][index]}%` }} /></div>)}
          </div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">03 · KEY FINDING</div>
          <h2 className="crm-feature-heading">Pixel only and Pixel plus CAPI are two different measurement paths.</h2>
          <div className="crm-finding">
            <div><span>PIXEL ONLY</span><strong>60 to 70%</strong><small>of actual conversions captured in the source benchmark</small></div>
            <div className="crm-finding-arrow">vs</div>
            <div><span>PIXEL + CAPI</span><strong>95 to 99%</strong><small>of actual conversions captured in the source benchmark</small></div>
          </div>
          <p className="crm-finding-text">Missing conversion events can affect both reporting and the signal available to Meta’s optimisation system. The draft therefore frames CAPI as an infrastructure improvement rather than simply a reporting add on.</p>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">04 · THE FRAMEWORK</div>
          <div className="crm-framework">
            {['Browser Pixel fires', 'Privacy layer intercepts', 'Server side CAPI fires', 'Event ID deduplication', 'Advanced Matching', 'Clean signal reaches Meta'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < 5 && <i>→</i>}</div>)}
          </div>
          <div className="crm-two-col crm-framework-copy"><h2>Move the question from “is the pixel firing?” to “is the signal reaching Meta?”</h2><p>Pixel and CAPI should work as complementary paths, with shared event IDs used to prevent duplicate conversions. Advanced Matching can further improve event matching quality.</p></div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">05 · WHERE CAPI ALONE STILL FALLS SHORT</div>
          <div className="crm-two-col"><h2>Server side tracking is not a silver bullet.</h2><div><p>The source draft highlights cross browser journeys and poor deduplication as important limitations. A visitor can begin in one environment and complete the journey somewhere else, while incorrect event matching can create duplicate conversion reporting.</p><p>The practical fix is a properly designed event architecture with reliable event IDs and ongoing match quality checks.</p></div></div>
        </section>

        <section className="crm-simple-section">
          <div className="crm-section-label">06 · SIGNAL LOSS SOURCES</div>
          <h2 className="crm-feature-heading">What can block or weaken the browser signal?</h2>
          <div className="crm-table-card"><table><thead><tr><th>Cause</th><th>Mechanism</th><th>Typical impact</th></tr></thead><tbody>{signalSources.map(([cause, mechanism, impact]) => <tr key={cause}><td>{cause}</td><td>{mechanism}</td><td className="impact">{impact}</td></tr>)}</tbody></table></div>
          <p className="crm-source-note">Draft case study based on the supplied 2026 benchmark material. Figures should be independently verified against current primary sources before this case study is presented as a final published analysis.</p>
        </section>

        <CaseStudyLeadForm
          eyebrow="Want a Meta Ads tracking audit?"
          title="Not sure how much conversion signal you’re losing?"
          description="I can review your Meta Pixel, Conversions API setup, event quality, deduplication and measurement flow. Prefer a practical starting point? Ask for the Meta Ads launch checklist."
          buttonLabel="Request a tracking audit"
        />

        <footer className="crm-case-footer"><Link to="/case-studies">← Back to all case studies</Link><span>META ADS · SIGNAL LOSS & TRACKING</span></footer>
      </div>
    </main>
  )
}
