import { Link } from 'react-router-dom'

const funnel = [
  ['Website visitor → Lead', '2.3%', '23%'],
  ['Lead → Marketing qualified lead', '31%', '31%'],
  ['MQL → Sales qualified lead', '9.8%', '9.8%'],
  ['SQL → Opportunity (top performers)', '59%', '59%'],
]

const volumeVsFit = {
  volume: [
    'More top of funnel spend as the default fix for a slow quarter',
    'Cost per lead keeps climbing industry wide as channels get more competitive',
    'Close to half of what lands in the CRM gets waved off by sales',
    'Leads sit for hours before anyone reaches out',
  ],
  fit: [
    'Pre qualification criteria set before the campaign launches, not after',
    'Negative scoring filters out bad fit signups instead of just adding points for good ones',
    'A same hour follow up standard, since contact speed is one of the strongest predictors of qualification',
    'A shared marketing and sales definition of qualified, reviewed on a set cadence',
  ],
}

const framework = [
  ['01', 'Define fit before volume', 'Write the ideal customer profile and a negative scoring list such as competitor employees, wrong company size and no reply domains before the next campaign, not after the leads arrive.'],
  ['02', 'Score intent, not just form fills', 'A form submission and genuine buying intent are not the same signal. Weight behavior such as repeat visits, pricing page views and content depth alongside the fact that a form was filled out at all.'],
  ['03', 'Route and contact within the hour', 'Leads contacted within the first hour are several times more likely to qualify than leads left until the next day. Speed to lead is one of the cheapest fixes available and one of the most neglected.'],
  ['04', 'Put a service agreement between marketing and sales', 'Agree on what qualified means in writing, and revisit it quarterly. Teams that document this consistently report stronger alignment and better downstream numbers than teams that leave it informal.'],
  ['05', 'Put SQL rate and pipeline velocity on the same dashboard as lead count', 'If leads generated is the only number leadership sees, it will keep getting optimised in isolation. Report it next to the number that actually indicates revenue is coming.'],
]

const caveats = [
  'The product is pre product market fit and the ICP itself is still being tested. You need enough signal to find the pattern before you can score against it.',
  'The business is entering a genuinely new market or segment with no historical conversion data to build a scoring model from.',
  'Sales capacity is currently under utilised and any additional qualified signal would be immediately actioned, not queued.',
]

const sources = [
  ['Visitor to lead, lead to MQL funnel benchmarks', 'Aggregated B2B funnel benchmark data, 2026 lead quality statistics compilation'],
  ['MQL to SQL decline, 13% → 9.8%', 'Forrester / Demand Gen Report data, cited in 2026 lead generation benchmarks'],
  ['SQL to opportunity top performer rate', 'SalesSo 2025 benchmark data'],
  ['Sales ignoring 48% of marketing leads', 'Email Vendor Selection, cited in 2026 lead generation statistics'],
  ['Cost per lead dispersion, 4.7x', 'HubSpot State of Marketing 2026'],
  ['Marketing and sales SLA revenue impact', 'HubSpot research, cited in 2025 MQL quality analysis'],
  ['Sales and marketing alignment and conversion lift', 'Martal Group 2025 B2B digital marketing ROI benchmarks'],
  ['Speed to lead qualification impact', 'InsideSales / Velocify benchmark replication, 2026'],
]

export default function LeadQualityBenchmarksBlog() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "More leads walked in. Revenue didn't move.",
    description: 'A look at 2026 funnel benchmarks and why lead quality can matter more than lead volume.',
    author: { '@type': 'Person', name: 'Ashwin James' },
    mainEntityOfPage: 'https://ashwinjames.com/blog/more-leads-revenue-didnt-move',
  }

  return <main className="lead-quality-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <article className="lead-quality-blog-shell">
      <header className="lead-quality-blog-hero">
        <div className="lead-quality-blog-eyebrow-row">
          <Link to="/blog">← Blog</Link>
          <span>Growth Strategy · Demand Gen</span>
        </div>
        <p className="lead-quality-blog-meta">Funnel Benchmarks & CAC Data · 2026</p>
        <h1>More leads walked in.<br />Revenue didn't <span>move</span>.</h1>
        <p className="lead-quality-blog-lede">Most B2B funnels leak more than 90% of leads before they ever reach a real sales conversation. When pipeline stalls, the instinct is to widen the top of the funnel. The 2026 data says the actual lever is almost never volume.</p>
        <div className="lead-quality-blog-tags">{['Lead Quality', 'MQL / SQL', 'Pipeline Velocity', 'CAC'].map(tag => <span key={tag}>{tag}</span>)}</div>
      </header>

      <div className="lead-quality-blog-content">
        <div className="lead-quality-callout lead-quality-stat-callout">
          <strong>9.8%</strong>
          <div><span>MQL to SQL conversion rate in 2026, down from 13% just two years ago, a 24% decline industry wide.</span><p>Marketing is still generating leads at roughly the same pace. Sales is rejecting more of them than ever.</p></div>
        </div>

        <div className="lead-quality-stat-grid">
          {[
            ['2.3%', 'of website visitors become a lead in the average B2B funnel'],
            ['31%', 'of leads get promoted to marketing qualified status'],
            ['48%', 'of marketing sourced leads sales ignores outright'],
            ['4.7x', 'gap in cost per lead between top and bottom quartile teams'],
          ].map(([number, label]) => <div className="lead-quality-stat" key={number}><strong>{number}</strong><span>{label}</span></div>)}
        </div>

        <section>
          <p className="lead-quality-section-tag">01 · The Metric</p>
          <h2>The number that flatters the dashboard, and the number that pays the bills</h2>
          <p>"Leads generated" is the easiest growth metric to report because it almost always trends upward as long as budget keeps flowing. It says nothing, though, about whether the person filling out the form was ever going to buy. A rising lead count and a stalling pipeline can, and increasingly do, sit on the same slide.</p>
          <p>The disconnect shows up downstream. Sales teams now dismiss close to half of what marketing hands over as a poor fit, and even among the leads that do get accepted, only a small fraction receive proper, timely follow up. Volume and revenue have quietly come apart.</p>
        </section>

        <section>
          <p className="lead-quality-section-tag">02 · Where It Leaks</p>
          <h2>Each funnel stage converts a smaller share of what came before it</h2>
          <div className="lead-quality-funnel">
            {funnel.map(([label, pct, width]) => <div className="lead-quality-funnel-row" key={label}><div><span>{label}</span><strong>{pct}</strong></div><div className="lead-quality-funnel-track"><i style={{ width }} /></div></div>)}
          </div>
          <p className="lead-quality-caption">Stage over stage conversion rate at each step of the funnel, based on aggregated 2026 B2B benchmark data. Each bar shows what share of the previous stage advances, not a share of total visitors.</p>
        </section>

        <section>
          <p className="lead-quality-section-tag">03 · Key Finding</p>
          <h2>Chasing volume and chasing fit produce two different businesses</h2>
          <div className="lead-quality-vs">
            <div className="lead-quality-vs-box lead-quality-volume"><h3>Chasing Volume</h3><ul>{volumeVsFit.volume.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="lead-quality-vs-divider">VS</div>
            <div className="lead-quality-vs-box lead-quality-fit"><h3>Chasing Fit</h3><ul>{volumeVsFit.fit.map(item => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <p>The obvious fix for a stalling pipeline is "get more leads." The data points somewhere else almost every time: teams with a documented sales and marketing service agreement report meaningfully higher revenue, and full alignment between the two functions is tied to a real lift in conversion rate and a shorter sales cycle. Fit and speed move the needle that volume can't.</p>
        </section>

        <section>
          <p className="lead-quality-section-tag">04 · The Framework</p>
          <h2>Shifting the target without starving the pipeline</h2>
          <div className="lead-quality-steps">{framework.map(([number, title, body]) => <div className="lead-quality-step" key={number}><strong>{number}</strong><div><h3>{title}</h3><p>{body}</p></div></div>)}</div>
          <div className="lead-quality-reframe">Move the scoreboard from "leads generated" to "qualified conversations reached". The first number can go up every month without the business getting any healthier.</div>
        </section>

        <section>
          <p className="lead-quality-section-tag">05 · Where This Doesn't Apply</p>
          <h2>More leads is still the right call in a few specific situations</h2>
          <div className="lead-quality-caveat"><p>This isn't an argument for scarcity for its own sake. A smaller lead count that's mismatched to sales capacity wastes resources in the opposite direction. Volume is still the right short term target when:</p><ul>{caveats.map(item => <li key={item}>{item}</li>)}</ul><p>Even in these cases, the goal is to graduate off pure volume once there's enough data to define fit, not to keep it as the permanent target.</p></div>
        </section>

        <section>
          <p className="lead-quality-section-tag">06 · Sources</p>
          <h2>Where the numbers come from</h2>
          <div className="lead-quality-sources">{sources.map(([metric, source]) => <div key={metric}><strong>{metric}</strong><span>{source}</span></div>)}</div>
          <p className="lead-quality-source-note">Figures are aggregated industry benchmarks compiled from multiple third party research reports, not results from a specific client engagement. Presented here to make the general argument, not as a claim about any one company's numbers.</p>
        </section>

        <section className="lead-quality-cta"><p className="lead-quality-section-tag">Want better lead economics?</p><h2>Let's look beyond CPL and find where the funnel is actually leaking.</h2><p>Use the contact page to start a conversation about acquisition, lead quality and downstream conversion.</p><Link to="/contact">Start a conversation ↗</Link></section>
      </div>
    </article>
  </main>
}
