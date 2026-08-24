import { Link } from 'react-router-dom'

const concepts = [
  { n: '01', title: 'Goal Gradient Effect', definition: 'People can become more motivated as they perceive themselves getting closer to a goal or reward.', example: 'A loyalty card showing 6 of 10 purchases completed can make the remaining effort feel more achievable.', application: 'Use real progress indicators in onboarding, loyalty programmes, lead nurturing and multi step forms.', test: 'Compare completion rate with and without a visible progress indicator.', visual: ['START', '6 / 10', 'REWARD'] },
  { n: '02', title: 'Von Restorff Effect', definition: 'An item that differs meaningfully from surrounding items can be remembered better. It is also called the isolation effect.', example: 'One genuinely recommended pricing plan is visually distinct while the other plans remain quieter.', application: 'Use contrast to establish hierarchy. Do not make every CTA loud.', test: 'Compare interaction and conversion when one focal element is differentiated versus when all elements have equal emphasis.', visual: ['NORMAL', 'NORMAL', 'DIFFERENT', 'NORMAL'] },
  { n: '03', title: 'Framing Effect', definition: 'The way equivalent information is presented can change how people evaluate a choice.', example: 'A service described as 95% successful can create a different perception from the same service described as having a 5% failure rate.', application: 'Test benefit, risk, outcome and cost framing while keeping important information transparent.', test: 'Compare equivalent gain and loss frames using qualified conversion as the main outcome.', visual: ['SAME FACT', '95% SUCCESS', 'VS', '5% FAILURE'] },
  { n: '04', title: 'Choice Architecture', definition: 'The organisation and presentation of options can influence decisions without removing freedom of choice.', example: 'A SaaS website can group many features into three understandable plans and explain who each plan suits.', application: 'Use ordering, grouping, labels, defaults and comparison points to reduce unnecessary decision work.', test: 'Compare completion and selection behaviour after simplifying the decision environment.', visual: ['MANY OPTIONS', 'GROUP', '3 CLEAR PATHS'] },
  { n: '05', title: 'Information Gap Theory', definition: 'Curiosity can increase when people recognise a gap between what they know and what they want to know.', example: 'Why are your leads getting cheaper while sales are not increasing? creates a specific unanswered question.', application: 'Use open loops in ads, articles and videos only when the content genuinely closes the gap.', test: 'Measure qualified engagement and content completion rather than curiosity clicks alone.', visual: ['WHAT I KNOW', '?', 'WHAT I WANT TO KNOW'] },
  { n: '06', title: 'Endowment Effect', definition: 'People can place greater value on something once they feel ownership of it. Context matters, so this is not a universal rule.', example: 'A product trial may feel more valuable after a user customises it, imports data or builds a workflow.', application: 'Create legitimate ownership through personalisation, saved work and progress. Never make cancellation intentionally difficult.', test: 'Compare activation, retention or purchase after meaningful personalisation.', visual: ['TRY', 'CUSTOMISE', 'MY SETUP', 'OWNERSHIP'] },
  { n: '07', title: 'Peak End Rule', definition: 'Remembered evaluations of an experience can be influenced strongly by its most intense moment and its ending.', example: 'A consultation can be remembered positively when the key insight is clear and the final handoff is smooth.', application: 'Design the important moment and final interaction instead of treating every touchpoint as equally memorable.', test: 'Compare satisfaction, completion, referral or repeat behaviour after improving the peak and ending.', visual: ['EXPERIENCE', 'PEAK', 'END'] },
  { n: '08', title: 'Choice Overload', definition: 'More options do not always improve decisions. Under some conditions, large assortments can reduce motivation or satisfaction.', example: 'A service page with 18 equally prominent packages may create more confusion than three clear paths.', application: 'Remove unnecessary decisions while preserving legitimate alternatives.', test: 'Compare completion, lead quality or purchase rate with a simpler choice set.', visual: ['18 OPTIONS', 'VS', '3 CLEAR PATHS'] },
  { n: '09', title: 'Pratfall Effect', definition: 'A small non central mistake can sometimes make a highly competent person seem more human or relatable. The effect is conditional.', example: 'A marketer explaining a genuine campaign mistake and what changed afterwards may feel more credible than presenting every campaign as flawless.', application: 'Share real limitations and lessons. Never manufacture mistakes for authenticity.', test: 'Compare qualified engagement and trust signals after adding a genuine lesson or limitation.', visual: ['EXPERT', 'REAL LIMITATION', 'MORE HUMAN'] },
  { n: '10', title: 'Vibe Branding', definition: 'Vibe branding is a contemporary branding practice describing the consistent mood, aesthetic, language and cultural feeling a brand creates. It is not presented as a formal psychological effect.', example: 'A premium consultancy can communicate restraint through typography, language, pacing, proof and interaction rather than repeatedly saying premium.', application: 'Build consistent visual and verbal cues across ads, landing pages, social content and sales materials.', test: 'Track brand recall, direct demand, engagement quality and conversion over time.', visual: ['LOOK', 'LANGUAGE', 'SOUND', 'FEEL'] },
  { n: '11', title: 'Commitment and Consistency', definition: 'People often feel pressure to behave consistently with meaningful previous commitments.', example: 'A prospect who completes a useful diagnostic may be more engaged with the next useful step.', application: 'Use progressive commitment where each step provides genuine value.', test: 'Compare completion of the next meaningful action after a useful micro commitment.', visual: ['SMALL YES', 'NEXT STEP', 'COMMIT'] },
  { n: '12', title: 'Anchoring', definition: 'An initial reference point can influence subsequent judgments.', example: 'Showing a clearly justified premium package before a standard package can change how the standard package is perceived.', application: 'Use reference prices, benchmarks and comparisons honestly.', test: 'Compare package presentation while keeping the actual offer constant.', visual: ['AED 5,000', 'REFERENCE', 'AED 2,500'] },
  { n: '13', title: 'Loss Aversion', definition: 'People can respond more strongly to potential losses than to equivalent gains, depending on context.', example: 'Do not lose qualified enquiries through slow follow up frames a real business risk differently from Improve response speed.', application: 'Communicate genuine risks and opportunity costs without inventing fear.', test: 'Compare qualified action and downstream outcomes, not just clicks.', visual: ['GAIN +10', 'VS', 'LOSS -10'] },
  { n: '14', title: 'Processing Fluency', definition: 'Information that is easier to process can sometimes feel more familiar, clear or credible, although fluency does not guarantee truth.', example: 'A landing page with one clear headline, predictable navigation and concise sections is easier to process than a dense page with competing messages.', application: 'Improve hierarchy, readability, terminology and interaction patterns without removing useful substance.', test: 'Compare comprehension, conversion and error rates after simplifying the experience.', visual: ['CLEAR', 'EASY TO PROCESS', 'ACTION'] },
  { n: '15', title: 'Fresh Start Effect', definition: 'Temporal landmarks such as a new year, birthday, month or meaningful transition can motivate aspirational behaviour.', example: 'A fitness brand can align a campaign with a new routine, while a B2B company can use the start of a quarter as a planning moment.', application: 'Connect genuine temporal landmarks to a relevant customer need.', test: 'Compare campaign response around the relevant transition with normal periods.', visual: ['OLD ROUTINE', 'NEW START', 'NEW GOAL'] },
  { n: '16', title: 'Scarcity vs Urgency', definition: 'Scarcity concerns limited availability or quantity. Urgency concerns limited time. They can overlap but are not the same claim.', example: 'Only 20 seats available signals scarcity. Registration closes Friday signals urgency.', application: 'Use real constraints. Fake stock counts and countdowns can damage trust.', test: 'Compare truthful scarcity or urgency with a neutral control while monitoring lead quality and complaints.', visual: ['SCARCITY', 'QUANTITY', 'VS', 'URGENCY', 'TIME'] },
  { n: '17', title: 'Rule of Seven', definition: 'The popular idea that someone needs exactly seven exposures before buying is not a reliable universal law.', example: 'A considered B2B purchase may require several useful interactions across search, social, content, sales and referrals.', application: 'Treat repeated relevant exposure as contextual, not as a fixed frequency target.', test: 'Measure effective reach, frequency, branded demand and conversions by buying cycle.', visual: ['1', '2', '3', '4', '5', '6', '7', 'NOT A GUARANTEE'] }
]

const faq = [
  ['What are marketing psychology principles?', 'They are concepts from psychology, behavioural science and consumer research that help marketers form better hypotheses about attention, memory, motivation, choice and decision making. They are not guarantees of behaviour.'],
  ['Which concepts are most useful for performance marketing?', 'Goal progress, framing, choice architecture, processing fluency, anchoring, loss aversion, scarcity, commitment and consistency and the peak end rule can all be useful when converted into testable hypotheses.'],
  ['Does the Rule of Seven mean customers need seven exposures?', 'No. There is no reliable universal law that seven exposures are required before purchase. Frequency depends on the audience, buying cycle, channel, creative and context.'],
  ['What is the difference between scarcity and urgency?', 'Scarcity concerns limited quantity or availability. Urgency concerns limited time. A message can use one, the other or both when the constraint is real.'],
  ['Can psychology guarantee higher conversion rates?', 'No. Behavioural principles suggest hypotheses. Audience, offer, trust, competition, price, creative, experience and economics still affect results.'],
  ['How can these concepts be applied to Meta Ads?', 'Use them to develop creative hypotheses around framing, distinctiveness, curiosity, progress, proof, loss and commitment. Judge them using qualified conversions and business outcomes where possible.'],
  ['How can psychology improve a landing page?', 'Use clear hierarchy, reduce unnecessary decisions, make the value proposition easy to process, show credible proof, address objections and make the next useful action obvious.']
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '17 Marketing Psychology Concepts Every Modern Marketer Should Know',
  description: 'A practical guide to 17 marketing psychology concepts with examples, performance marketing applications, experiments and visual frameworks.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  mainEntityOfPage: 'https://ashwinjames.com/blog/marketing-concepts-modern-marketers-should-know'
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer }
  }))
}

function ConceptVisual({ concept }) {
  return (
    <div className="marketing-psych-visual" aria-label={`Visual example for ${concept.title}`}>
      <div className="marketing-psych-visual-label">VISUAL EXAMPLE</div>
      <div className="marketing-psych-visual-flow">
        {concept.visual.map((item, i) => <span key={`${concept.n}-${i}`}>{item}</span>)}
      </div>
    </div>
  )
}

export default function MarketingConceptsBlog() {
  return (
    <main className="marketing-concepts-blog-page">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <article className="marketing-concepts-shell">
        <header className="marketing-concepts-hero">
          <Link to="/blog" className="marketing-concepts-back">Back to all blogs</Link>
          <p className="marketing-concepts-eyebrow">MARKETING · BEHAVIOURAL SCIENCE · PERFORMANCE</p>
          <div className="marketing-concepts-meta"><span>Marketing Psychology</span><span>•</span><span>22 min read</span><span>•</span><span>August 24, 2026</span></div>
          <h1>17 Marketing Psychology Concepts Every Modern Marketer Should Know</h1>
          <p className="marketing-concepts-lede">Marketing gets more interesting when you stop asking only what should I run and start asking why a person might notice, remember, choose or act. Here are 17 concepts worth understanding, with practical examples and visual models.</p>
          <div className="marketing-concepts-links"><Link to="/services/performance-growth-marketing">Performance Marketing</Link><Link to="/case-studies">View case studies</Link></div>
        </header>

        <div className="marketing-concepts-content">
          <p className="marketing-concepts-opening">A marketer can know Meta Ads, Google Ads, analytics and CRO and still misunderstand the person on the other side of the screen.</p>
          <p>Platforms tell us what happened. Behavioural science can help us form better hypotheses about why people noticed something, remembered it, evaluated an option or decided to act.</p>
          <p>This is not a collection of psychological tricks. A behavioural principle is useful when it helps us understand a customer, create a clearer experience and test a meaningful business hypothesis.</p>

          <div className="marketing-concepts-principle"><span>THE CORE IDEA</span><strong>Use psychology to improve the decision environment, not to manipulate people into decisions they would not otherwise want to make.</strong><p>The strongest applications reduce friction, clarify value, improve memory or make the next step easier to understand.</p></div>

          <h2>How to use this article</h2>
          <p>Each concept is explained through four layers: what it means, what it could look like in marketing, how a performance marketer might apply it, and what should be tested.</p>
          <div className="marketing-concepts-test"><div><span>CONCEPT</span><strong>Understand the principle</strong></div><div><span>EXAMPLE</span><strong>Translate it into marketing</strong></div><div><span>APPLICATION</span><strong>Build a practical hypothesis</strong></div><div><span>MEASURE</span><strong>Test the business outcome</strong></div></div>

          <h2>The 17 concepts at a glance</h2>
          <div className="marketing-concepts-grid">{concepts.map(c => <section key={c.n}><span>{c.n}</span><h3>{c.title}</h3><p>{c.definition}</p></section>)}</div>

          {concepts.map(c => (
            <section className="marketing-psych-section" key={c.n}>
              <div className="marketing-psych-number">{c.n}</div>
              <h2>{c.title}</h2>
              <p><strong>What it means:</strong> {c.definition}</p>
              <ConceptVisual concept={c} />
              <div className="marketing-concepts-scenarios">
                <div><span>MARKETING EXAMPLE</span><h3>What it could look like</h3><p>{c.example}</p></div>
                <div><span>PERFORMANCE APPLICATION</span><h3>How to use it responsibly</h3><p>{c.application}</p></div>
              </div>
              <div className="marketing-concepts-measure"><strong>What to test</strong><span>{c.test}</span></div>
            </section>
          ))}

          <h2>How these principles connect to performance marketing</h2>
          <p>Behavioural principles become more useful when connected to the actual funnel rather than treated as isolated tricks.</p>
          <div className="marketing-concepts-chain"><span>Customer insight</span><b>→</b><span>Positioning</span><b>→</b><span>Frame</span><b>→</b><span>Creative</span><b>→</b><span>Landing page</span><b>→</b><span>Choice</span><b>→</b><span>Conversion</span><b>→</b><span>CRM</span><b>→</b><span>Revenue</span></div>
          <p>For example, a lead generation campaign may use framing to clarify the problem, processing fluency to simplify the landing page, choice architecture to make the next step clearer and loss aversion to explain a genuine cost of delaying action.</p>
          <p>The real test is not whether the page looks more persuasive. It is whether qualified conversion and downstream commercial outcomes improve.</p>

          <h2>Five mistakes marketers should avoid</h2>
          <div className="marketing-concepts-final">
            <strong>Do not treat every psychology principle as equally established science.</strong>
            <strong>Do not manufacture scarcity, mistakes, urgency or fear.</strong>
            <strong>Do not optimise curiosity clicks while ignoring qualified conversions.</strong>
            <strong>Do not assume a principle will work simply because it worked somewhere else.</strong>
            <strong>Do not confuse a memorable experience with a profitable customer journey.</strong>
          </div>

          <h2>A practical checklist</h2>
          <div className="marketing-concepts-checklist">
            <div><span>01</span><p><strong>What customer problem are we solving?</strong> Psychology should support a real customer need.</p></div>
            <div><span>02</span><p><strong>What behaviour are we trying to change?</strong> Attention, comprehension, consideration, conversion or retention?</p></div>
            <div><span>03</span><p><strong>What principle creates a plausible hypothesis?</strong> Start with the problem, not the psychology label.</p></div>
            <div><span>04</span><p><strong>What is the control?</strong> A credible comparison is needed to learn whether the change mattered.</p></div>
            <div><span>05</span><p><strong>What business metric decides the test?</strong> CTR can help, but qualified leads, purchases and revenue may matter more.</p></div>
            <div><span>06</span><p><strong>Could the tactic reduce trust?</strong> If it depends on deception, fake scarcity or hidden information, reconsider it.</p></div>
          </div>

          <h2>The bigger lesson</h2>
          <p>The strongest marketers do not memorise psychology principles so they can sprinkle them across landing pages.</p>
          <p>They use behavioural ideas to ask better questions: Why did people stop here? Why did they choose this option? Why did they remember this message? Why did they abandon the form?</p>
          <p>That mindset is especially useful in performance marketing because the feedback loop is measurable. A behavioural hypothesis can become a creative test, landing page experiment or funnel change, and the result can be connected to the commercial outcome.</p>

          <div className="marketing-concepts-cta"><h2>Use psychology to improve decisions, not to replace them.</h2><p>The goal is not to find a magic trigger. It is to understand people well enough to create clearer offers, better experiences and stronger experiments.</p><div><Link to="/services/performance-growth-marketing">Explore performance marketing</Link><Link to="/blog">Read more insights</Link></div></div>

          <h2>Sources and research notes</h2>
          <div className="marketing-concepts-sources">
            <p>Goal Gradient Effect</p><a href="https://journals.sagepub.com/doi/full/10.1509/jmkr.43.1.39" target="_blank" rel="noreferrer">Kivetz, Urminsky and Zheng, Journal of Marketing Research</a>
            <p>Von Restorff Effect</p><a href="https://pubmed.ncbi.nlm.nih.gov/24203592/" target="_blank" rel="noreferrer">Hunt, Psychonomic Bulletin and Review</a>
            <p>Framing Effect</p><a href="https://doi.org/10.1126/science.7455683" target="_blank" rel="noreferrer">Tversky and Kahneman, Science</a>
            <p>Choice Overload</p><a href="https://pubmed.ncbi.nlm.nih.gov/11138768/" target="_blank" rel="noreferrer">Iyengar and Lepper, Journal of Personality and Social Psychology</a>
            <p>Pratfall Effect</p><a href="https://pubmed.ncbi.nlm.nih.gov/5479130/" target="_blank" rel="noreferrer">Helmreich, Aronson and LeFan, Journal of Personality and Social Psychology</a>
            <p>Fresh Start Effect</p><a href="https://faculty.wharton.upenn.edu/wp-content/uploads/2014/06/Dai_Fresh_Start_2014_Mgmt_Sci.pdf" target="_blank" rel="noreferrer">Dai, Milkman and Riis, Management Science</a>
            <p>Scarcity</p><a href="https://www.nowpublishers.com/article/DownloadSummary/MKT-083" target="_blank" rel="noreferrer">Marketing research review on scarcity</a>
            <p>Endowment Effect</p><a href="https://pubmed.ncbi.nlm.nih.gov/33816642/" target="_blank" rel="noreferrer">Research examining ownership, market beliefs and valuation</a>
          </div>
          <p className="marketing-concepts-note"><strong>Research note:</strong> Some labels in this article are established psychological effects, while others are marketing heuristics or modern industry language. Vibe Branding is treated as a branding practice rather than a validated psychological law. The Rule of Seven is treated as a popular heuristic, not a universal empirical threshold.</p>

          <h2>FAQ</h2>
          <div className="marketing-concepts-faq">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </article>
    </main>
  )
}
