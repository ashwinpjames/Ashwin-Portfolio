import { Link } from 'react-router-dom'
import { hormoziAds } from '../data/hormoziAdsExternal.js'

const observations = [
  ['Creative volume', 'A large number of active ads creates more opportunities for Meta’s system to learn which creative concepts fit different people and situations.'],
  ['Format diversity', 'The supplied examples show videos, images and carousels, with different presentation styles including headlines, founder content, explainers, behind the scenes and direct callouts.'],
  ['Business specific callouts', 'The strongest repeated pattern is direct language such as calling out a business owner and an annual revenue threshold before presenting the offer.'],
  ['Hybrid creative system', 'The business specific ads appear to be one layer of a broader system rather than the entire strategy. Problem agitation solution, AIDA style and founder led formats can serve broader audiences.'],
]

const faq = [
  ['Does calling out an industry guarantee Meta will find that audience?', 'No. It is better understood as a creative relevance signal. Meta’s recommendation system uses many signals, and creative should not be treated as a guaranteed replacement for every other targeting or measurement input.'],
  ['Why create many small ads instead of one winning ad?', 'Highly specific callout creatives can be designed for narrow business segments. Their value is often in relevance and message market fit rather than expecting one creative to become a universal winner.'],
  ['Should every advertiser copy this strategy?', 'No. The right creative volume depends on budget, audience size, offer complexity and how much variation the account can support without creating noise.'],
  ['What does Andromeda actually do?', 'Meta describes Andromeda as a personalized ads retrieval system. Retrieval is an early stage that narrows a very large candidate pool before later ranking stages determine which ads are ultimately shown.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Steal Like an Artist: What Alex Hormozi’s Meta Ads Strategy Reveals About Creative Targeting',
  description: 'An analysis of Alex Hormozi’s Meta Ads creative strategy, business specific callouts, creative volume, format diversity and the role of Andromeda.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  mainEntityOfPage: 'https://ashwinjames.com/blog/hormozi-meta-ads-strategy'
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } }))
}

export default function HormoziMetaAdsStrategy() {
  return <main className="hormozi-blog-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <article className="hormozi-blog-shell">
      <header className="hormozi-hero">
        <Link to="/blog" className="hormozi-back">← Back to all insights</Link>
        <p className="hormozi-eyebrow">STEAL LIKE AN ARTIST · META ADS</p>
        <div className="hormozi-meta"><span>Meta Ads Strategy</span><span>•</span><span>10 min read</span><span>•</span><span>August 2026</span></div>
        <h1>Steal Like an Artist: What Alex Hormozi’s Meta Ads Strategy Reveals About Creative Targeting</h1>
        <p className="hormozi-lede">Instead of trying to guess which audience to select in the ad set, Hormozi’s creative system repeatedly tells Meta who the ad is for. Here is what that pattern can teach performance marketers about creative volume, specificity and post Andromeda advertising.</p>
        <div className="hormozi-hero-links"><Link to="/">Ashwin James homepage</Link><Link to="/services/meta-ads">Explore Meta Ads services</Link></div>
      </header>

      <div className="hormozi-content">
        <p>There is a useful way to study great advertising without pretending you invented it: steal the principle, not the execution.</p>
        <p>That is the idea behind this analysis. I looked at the supplied examples of Alex Hormozi’s Meta ads and focused on the repeated creative patterns rather than trying to reproduce any individual ad.</p>

        <div className="hormozi-note"><strong>Source note</strong><p>The creative examples in this article are the screenshots supplied for this analysis. The approximate active ad count is treated as an observation from the supplied material, not as a permanently verified Meta Ad Library figure.</p></div>

        <h2>The first thing that stands out is not the hook. It is the volume.</h2>
        <p>The supplied analysis describes roughly 513 active ads across video, image and carousel formats. Whether that exact number changes from day to day is less important than the strategic signal: this is a high volume creative system.</p>
        <p>Instead of searching for one perfect ad, the system creates many opportunities for Meta to understand different messages, formats and business contexts.</p>

        <h2>But there is a pattern inside all that variation</h2>
        <p>Look across the examples and one format keeps returning: the ad calls out a very specific type of business owner.</p>
        <div className="hormozi-callout-grid">{['Commercial real estate brokers doing $1M+ a year','Steel fabrication owners doing $1M+ a year','Chiropractic practices','Business broker firms','PT clinics','Demolition company owners','Remodeling owners','Packaging manufacturers'].map(item => <div key={item}>{item}</div>)}</div>
        <p>The copy does something deceptively simple. It identifies the person before presenting the message.</p>
        <p>That creates a strong relevance cue. A commercial real estate broker can immediately recognise that the ad is meant for someone like them. The same logic can be repeated for another vertical without forcing one generic creative to speak to everyone.</p>

        <h2>This is where Andromeda matters</h2>
        <p>Meta describes Andromeda as a personalized ads retrieval engine. Retrieval is an early stage of the recommendation system that narrows tens of millions of possible ad candidates into a much smaller set of relevant candidates before later ranking stages. <a href="https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/" target="_blank" rel="noopener noreferrer">Read Meta’s engineering explanation of Andromeda</a>.</p>
        <p>That supports an important strategic shift: creative can carry more contextual information about who an ad is relevant to. It does not mean the creative literally replaces targeting, but it does make the message itself a more important signal in the system.</p>
        <div className="hormozi-model"><span>OLD MENTAL MODEL</span><strong>Choose the audience first → make a generic ad</strong><span>CREATIVE LED MODEL</span><strong>Build a specific message → let the system find relevant people</strong></div>
        <p>This is the part worth stealing. Not the exact wording. Not the exact design. The principle that specificity can be built into the creative itself.</p>

        <h2>The caveat: micro ads are not universal winners</h2>
        <p>There is a tradeoff. If every creative speaks to a different business segment, each individual ad can become highly specific. That can be excellent for relevance, but it can also mean that you are building a collection of micro ads rather than one universal winner.</p>
        <p>For a large account, that can be a feature. For a smaller advertiser, producing dozens of highly segmented creatives may spread the budget too thin.</p>
        <div className="hormozi-two-col"><div><span>MICRO CREATIVE</span><h3>Specificity</h3><p>Call out a business type, problem or identity directly. Strong for relevance and message market fit.</p></div><div><span>SCALE CREATIVE</span><h3>Breadth</h3><p>Use broader problem, agitation, solution, founder and educational formats when one creative needs to speak across a larger market.</p></div></div>

        <h2>That is why the strategy is hybrid</h2>
        <p>The most interesting lesson is that Hormozi does not appear to rely on one creative formula. The supplied examples show a mix of direct callouts, founder led content, expert explainers, behind the scenes content, headlines and other variations.</p>
        <p>The strategic role of each format can therefore be different:</p>
        <div className="hormozi-roles">{observations.map(([title,text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>

        <h2>What I would actually steal from this strategy</h2>
        <ol className="hormozi-list">
          <li><strong>Turn the audience into the headline.</strong> Instead of saying “we help businesses grow”, test “if you own a [specific business] doing [specific threshold], this is for you”.</li>
          <li><strong>Create creative around business identity.</strong> Industry, business model, revenue stage and role can all become creative angles.</li>
          <li><strong>Separate micro ads from scale ads.</strong> Do not expect every specific creative to become a massive spend winner.</li>
          <li><strong>Keep format diversity high.</strong> Images, videos, carousels, founder content and explainers give the system more creative signals to work with.</li>
          <li><strong>Use specificity where it creates real relevance.</strong> A callout should describe a genuine problem or identity, not just insert an industry name into generic copy.</li>
        </ol>

        <h2>The examples</h2>
        <p>Now we can look at the creative system one ad at a time. Each example shows what the ad is doing, why the structure matters and how the message is built.</p>
        <div className="hormozi-creative-breakdown">
          {hormoziAds.map((ad, index) => <article className={`hormozi-creative-row ${index % 2 ? 'reverse' : ''}`} key={ad.src}>
            <figure className="hormozi-creative-image"><img src={ad.src} alt={ad.alt} loading="lazy" decoding="async" /><figcaption>{ad.caption}</figcaption></figure>
            <div className="hormozi-creative-analysis">
              <span className="hormozi-creative-number">CREATIVE {String(index + 1).padStart(2, '0')}</span>
              <h3>{ad.title}</h3>
              <p>{ad.analysis}</p>
              <div className="hormozi-creative-structure"><span>CREATIVE STRUCTURE</span><strong>{ad.structure}</strong></div>
            </div>
          </article>)}
        </div>

        <h2>The bigger lesson for performance marketers</h2>
        <p>The lesson is not “copy Alex Hormozi”. The lesson is to stop thinking about creative as decoration placed on top of targeting.</p>
        <p>In a more automated Meta ads environment, creative can communicate the audience, problem, offer and context at the same time. That gives the recommendation system richer information to work with while giving the user a message that feels immediately relevant.</p>
        <p>Meta’s own description of Andromeda emphasises the scale of creative candidates and the role of AI in retrieving relevant ads. <a href="https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/" target="_blank" rel="noopener noreferrer">Meta Engineering explains the retrieval system here</a>.</p>
        <p>For advertisers, that points toward a different testing question:</p>
        <blockquote>What different versions of the market can my creative clearly describe?</blockquote>
        <p>That is a much more interesting question than simply asking which interest targeting option to select.</p>

        <h2>Frequently asked questions</h2>
        <div className="hormozi-faq">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>

        <section className="hormozi-cta"><p className="hormozi-eyebrow">Want to apply this to your account?</p><h2>Get a Meta Ads creative and tracking audit.</h2><p>I can review your creative structure, audience signals and measurement setup and identify the highest priority opportunities.</p><div><Link to="/contact" rel="nofollow">Request an audit</Link><Link to="/resources/meta-ads-launch-checklist" rel="nofollow">Get the Meta Ads checklist</Link></div></section>

        <footer className="hormozi-sources"><p>Further reading</p><a href="https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/" target="_blank" rel="noopener noreferrer">Meta Engineering: Andromeda and personalized ads retrieval</a><a href="https://en.wikipedia.org/wiki/Alex_Hormozi" target="_blank" rel="noopener noreferrer">Wikipedia: Alex Hormozi</a></footer>
      </div>
    </article>
  </main>
}
