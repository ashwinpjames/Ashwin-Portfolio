import { Link } from 'react-router-dom'

const faq = [
  ['Does Meta always show the ad with the highest bid?', 'No. The impression goes to the ad with the highest Total Value, which combines bid, estimated action rate and ad quality.'],
  ['How long does the whole process take?', 'About 200 milliseconds from retrieval through ranking and auction, according to the source article.'],
  ['What is Andromeda in Meta ads?', 'Andromeda is described in the article as a retrieval stage system that uses ad creative as a targeting input.'],
  ['Is the Total Value formula public?', 'Meta has confirmed the key inputs, but the source article notes that there is no single fixed arithmetic formula published.'],
]

export default function MetaAdsAlgorithmBlog() {
  return <main className="algorithm-blog-page">
    <article className="algorithm-blog-shell">
      <header className="algorithm-blog-hero">
        <Link to="/blog" className="algorithm-blog-back">← Back to all blogs</Link>
        <p className="algorithm-blog-eyebrow">META ADS · HOW IT WORKS</p>
        <div className="algorithm-blog-meta"><span>Performance Marketing</span><span>•</span><span>9 min read</span><span>•</span><span>Updated 2026</span></div>
        <h1>How Meta's Ad Algorithm Actually Works in 2026</h1>
        <p className="algorithm-blog-lede">Every time someone opens Instagram or Facebook, millions of ads compete for one impression. Here is the four step process behind how Meta narrows that field, ranks candidates and selects a winner.</p>
      </header>

      <div className="algorithm-blog-content">
        <p>If you run Meta ads, you have probably felt it: two campaigns with near identical budgets and audiences can produce wildly different costs. One scales smoothly. The other burns budget and barely delivers.</p>
        <p>This article breaks down the mechanics of retrieval, ranking and the auction, then translates each stage into practical decisions for advertisers.</p>

        <h2>The short version: four steps, one impression, 200 milliseconds</h2>
        <p>Every time someone opens Instagram or Facebook, Meta runs a four step process to decide which ad, if any, reaches that person.</p>
        <div className="algorithm-pipeline">
          {[['01','Retrieval','Meta narrows the eligible pool using relevance signals, including creative content.','Millions → thousands'],['02','Light ranking','A fast model reduces the pool using simplified signals.','Thousands → hundreds'],['03','Heavy ranking','A deeper model predicts the likelihood of the desired action for the user and ad pairing.','Hundreds → finalists'],['04','The auction','Finalists compete using Total Value, combining bid, estimated action rate and ad quality.','One winner']].map(([n,t,d,c]) => <div className="algorithm-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><strong>{c}</strong></div>)}
        </div>

        <p>The sequence runs continuously as people use the platform. The important point is that the auction is only the final stage. Creative and relevance affect which ads make it through the earlier stages.</p>

        <h2>Step 1: Retrieval — your creative is your targeting</h2>
        <p>Retrieval asks which active ads are plausibly relevant to a specific person. The source describes Andromeda as a retrieval stage system that reads the ad itself, including the hook, format, talent, copy and landing page.</p>
        <div className="algorithm-callout"><strong>Why this matters</strong><p>If the creative is vague, the system has less clarity about who the ad is for and what demand it should match. Clear positioning and specific creative therefore become important inputs before the auction even happens.</p></div>

        <h2>Step 2 and 3: Ranking — from thousands to the real competition</h2>
        <p>Light ranking applies a fast scoring model across a large candidate pool. Heavy ranking then applies a deeper model to the survivors, predicting how likely the specific user is to take the action the campaign is optimising for.</p>
        <div className="algorithm-two-col"><div><span>LIGHT RANKING</span><h3>Fast filtering</h3><p>Efficient enough to run across a large pool without the cost of deep scoring for every candidate.</p></div><div><span>HEAVY RANKING</span><h3>Precise prediction</h3><p>More detailed modelling narrows the field to genuine finalists for the auction.</p></div></div>

        <h2>Step 4: The auction — why the highest bid does not automatically win</h2>
        <p>Meta does not simply award the impression to the advertiser willing to pay the most. The article describes Total Value as a combination of three inputs.</p>
        <div className="algorithm-formula"><div><strong>Bid</strong><span>What you are willing to pay</span></div><b>×</b><div><strong>Estimated Action Rate</strong><span>Likelihood of the desired action</span></div><b>+</b><div><strong>Ad Quality</strong><span>Relevance and user experience</span></div></div>
        <p className="algorithm-note">The source article explicitly notes that Meta has not published one fixed arithmetic equation with fixed coefficients. Treat this as a directional model rather than a formula to reverse engineer.</p>

        <h3>The three diagnostics you can actually see</h3>
        <div className="algorithm-diagnostics">{[['Quality Ranking','How perceived ad quality compares with competing ads.'],['Engagement Rate Ranking','Expected engagement rate compared with competing ads.'],['Conversion Rate Ranking','Expected conversion rate compared with ads optimising for the same action.']].map(([t,d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>

        <h2>What this means for how you run Meta ads</h2>
        <div className="algorithm-takeaways"><h3>Practical takeaways</h3><ul><li><strong>Stop over engineering targeting.</strong> Give the system clear, specific creative and audience signals.</li><li><strong>Creative diversity beats minor variations.</strong> Distinct concepts give the system different signals to learn from.</li><li><strong>Do not chase the bid when quality tanks.</strong> Weak diagnostics usually point toward a creative or relevance problem.</li><li><strong>Protect the user experience.</strong> Strong hooks still need a credible landing page and offer.</li><li><strong>Give campaigns enough time to learn.</strong> Early performance can be noisy before useful patterns emerge.</li></ul></div>

        <h2>Frequently asked questions</h2>
        <div className="algorithm-faq">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>

        <section className="algorithm-cta"><p className="algorithm-blog-eyebrow">Want a stronger Meta Ads system?</p><h2>Get a practical Meta Ads audit focused on creative, signals and conversion quality.</h2><p>I can review your current setup and identify the highest priority areas to improve.</p><Link to="/contact">Request a Meta Ads audit ↗</Link></section>
      </div>
    </article>
  </main>
}
