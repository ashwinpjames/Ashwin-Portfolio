import { Link } from 'react-router-dom'

const concepts = [
  { n: '01', title: 'Goal Gradient Effect', definition: 'People can become more motivated as they perceive themselves getting closer to a goal or reward.', example: 'A loyalty card that shows a customer is already 6 of 10 purchases toward a reward can make the remaining effort feel more achievable.', application: 'Use visible progress in onboarding, loyalty programs, lead nurturing and multi step forms. The progress cue should represent real progress, not manufactured progress.', visual: ['START', '6 / 10', 'REWARD'] },
  { n: '02', title: 'Von Restorff Effect', definition: 'An item that differs meaningfully from surrounding items can be remembered better. It is also called the isolation effect.', example: 'On a pricing page where every plan uses the same visual treatment, one genuinely recommended plan can be made visually distinct so visitors notice it first.', application: 'Use contrast to establish hierarchy, not to make everything loud. One clear primary action is usually more useful than five competing highlights.', visual: ['A', 'A', '★', 'A', 'A'] },
  { n: '03', title: 'Framing Effect', definition: 'The way equivalent information is presented can change how people evaluate a choice.', example: 'A service can be described as “95% of clients complete the process successfully” or “5% do not.” The underlying proportion is the same, but the frame changes the interpretation.', application: 'Test benefit framing, risk framing, outcome framing and cost framing. Do not use framing to conceal important information.', visual: ['95%', 'SUCCESS'] },
  { n: '04', title: 'Choice Architecture', definition: 'The way options are organised and presented can influence how people navigate a decision without removing their freedom to choose.', example: 'Instead of presenting seven equally prominent plans, a SaaS site can organise them into three clear tiers and explain who each tier is for.', application: 'Design the decision environment. Order, grouping, defaults, labels and comparison points can reduce unnecessary cognitive work.', visual: ['OPTION A', 'OPTION B', 'OPTION C'] },
  { n: '05', title: 'Information Gap Theory', definition: 'Curiosity can increase when people recognise a gap between what they know and what they want to know.', example: 'A headline such as “Why your leads are getting cheaper but your sales are not increasing” creates a specific unanswered question.', application: 'Use open loops carefully in ads, articles and videos. The content must actually close the gap created by the promise.', visual: ['KNOW', '???', 'WANT TO KNOW'] },
  { n: '06', title: 'Endowment Effect', definition: 'People can place greater value on something once they feel ownership of it. Research also shows that market beliefs and context can influence the effect, so it should not be treated as a universal rule.', example: 'A free trial can feel more valuable after a user has customised the product, imported data or built a workflow inside it.', application: 'Create legitimate ownership cues through personalisation, saved work, setup and progress. Avoid trapping customers by making cancellation difficult.', visual: ['TRY', 'CUSTOMISE', 'MY SETUP'] },
  { n: '07', title: 'Peak End Rule', definition: 'People's remembered evaluation of an experience can be influenced disproportionately by its most intense moment and its ending rather than by every moment equally.', example: 'A consultation experience may be remembered more positively if the key insight is clear and the final handoff is smooth, even if the middle of the process was routine.', application: 'Design the high point and the final interaction. A strong onboarding moment and a clean confirmation page can matter beyond their individual duration.', visual: ['EXPERIENCE', 'PEAK', 'END'] },
  { n: '08', title: 'Choice Overload', definition: 'More options do not always improve decisions. Under some conditions, a large assortment can reduce motivation or satisfaction.', example: 'A landing page offering 18 service packages may create more confusion than a page that helps the visitor identify one of three relevant paths.', application: 'Reduce unnecessary decisions. Keep legitimate alternatives available while guiding people toward the next useful choice.', visual: ['18 OPTIONS', '→', '3 CLEAR PATHS'] },
  { n: '09', title: 'Pratfall Effect', definition: 'A small, non central mistake can sometimes make a highly competent person seem more human or relatable. The effect is conditional, not a reason to manufacture flaws.', example: 'A professional sharing a minor lesson from a campaign mistake can feel more credible than presenting every project as flawless.', application: 'Use honest lessons and limitations. Never fake mistakes as a branding tactic.', visual: ['EXPERT', '↓', 'HUMAN'] },
  { n: '10', title: 'Vibe Branding', definition: 'Vibe branding is a modern branding practice rather than a formally established psychological effect. It refers to the consistent mood, aesthetic, language and cultural feeling a brand creates across touchpoints.', example: 'A premium consultancy might use restrained visuals, precise language and calm interfaces rather than repeatedly saying “premium.”', application: 'Treat brand feeling as a system of repeated cues: visual language, tone, pacing, proof, photography, sound and interaction design.', visual: ['LOOK', '+', 'LANGUAGE', '+', 'FEEL'] },
  { n: '11', title: 'Commitment and Consistency Principle', definition: 'People often feel pressure to behave consistently with previous commitments, especially when those commitments are meaningful or public.', example: 'A prospect who first completes a useful diagnostic may be more engaged with the next step because they have already invested attention in the problem.', application: 'Use progressive commitment. Ask for a small useful action before a larger one, but make every step valuable on its own.', visual: ['SMALL YES', '→', 'NEXT STEP', '→', 'COMMIT'] },
  { n: '12', title: 'Anchoring', definition: 'An initial reference point can influence subsequent judgments, even when the reference is not a perfect basis for the decision.', example: 'Showing a clearly justified premium package before a standard package can change how the standard package is perceived.', application: 'Use reference prices, benchmarks and package comparisons honestly. An anchor should clarify value, not mislead the customer.', visual: ['AED 5,000', '↓', 'AED 2,500', 'FEELS DIFFERENT'] },
  { n: '13', title: 'Loss Aversion', definition: 'People often respond more strongly to potential losses than to equivalent gains, although the size of the effect depends on context.', example: '“Do not lose the leads already generated by slow follow up” can create a different response from “Improve lead response speed.”', application: 'Frame genuine risks and opportunity costs clearly. Do not manufacture fear or imply losses that are not supported.', visual: ['GAIN +10', 'vs', 'LOSS −10'] },
  { n: '14', title: 'Processing Fluency', definition: 'Information that is easier to process can sometimes feel more familiar, clear or credible, although fluency does not guarantee truth or quality.', example: 'A landing page with a clear headline, short sections and predictable navigation is easier to process than a dense page with competing messages.', application: 'Improve readability, hierarchy, contrast, terminology and interaction patterns. Make important information easy to find without oversimplifying the substance.', visual: ['CLEAR', '→', 'EASY TO PROCESS'] },
  { n: '15', title: 'Fresh Start Effect', definition: 'Temporal landmarks such as a new year, birthday, month or other meaningful transition can motivate people to initiate aspirational behaviour.', example: 'A fitness brand can build a January acquisition campaign around a new routine, while a B2B product can use the start of a quarter as a planning moment.', application: 'Align campaigns with genuine temporal landmarks when the product solves a relevant need. A calendar date alone does not create demand.', visual: ['OLD ROUTINE', '│', 'NEW START', '│', 'NEW GOAL'] },
  { n: '16', title: 'Scarcity vs. Urgency', definition: 'Scarcity concerns limited availability, while urgency concerns limited time. They can overlap, but they are not the same mechanism.', example: '“Only 20 seats available” is quantity scarcity. “Registration closes Friday” is time urgency.', application: 'Use real constraints. Fake countdowns and invented stock limits can damage trust and may create regulatory or platform risks depending on the context.', visual: ['SCARCITY', 'LIMITED QUANTITY', 'vs', 'URGENCY', 'LIMITED TIME'] },
  { n: '17', title: 'Rule of Seven', definition: 'The popular marketing idea that someone needs seven exposures before buying is not a reliable universal law. Treat it as a reminder that repeated, relevant exposure can matter rather than as a fixed frequency target.', example: 'A considered B2B purchase may require several useful interactions across search, social, content, sales conversations and referrals rather than one advertisement.', application: 'Measure effective reach, frequency, brand demand and conversions by context. Do not force every campaign toward seven impressions.', visual: ['1', '2', '3', '4', '5', '6', '7', '≠ GUARANTEE'] },
]

const faq = [
  ['What are marketing psychology principles?', 'They are concepts from psychology, behavioural science and consumer research that can help marketers understand attention, memory, choice, motivation and decision making. They are tools for forming and testing hypotheses, not guarantees of behaviour.'],
  ['Which psychology principles are most useful for performance marketing?', 'Goal progress, framing, choice architecture, processing fluency, anchoring, loss aversion, scarcity, commitment and consistency, and the peak end rule can all be useful when translated into clear marketing hypotheses and measured against business outcomes.'],
  ['Does the Rule of Seven really mean customers need seven exposures?', 'No. There is no reliable universal rule that seven exposures are required before purchase. Treat repeated exposure as a contextual strategy rather than a fixed number.'],
  ['Is scarcity the same as urgency?', 'No. Scarcity usually concerns limited quantity or availability, while urgency concerns limited time. A message can contain one, the other, or both.'],
  ['Can behavioural psychology guarantee higher conversion rates?', 'No. These principles can suggest useful hypotheses, but audience, offer, market conditions, creative quality, trust, price and execution all influence outcomes. Test the application rather than assuming the principle will work.'],
  ['How should I use psychology in Meta Ads?', 'Start with the customer problem and campaign objective, then test different frames, creative angles, proof, progress cues and calls to action. Judge the result using qualified conversions and downstream business outcomes where possible, not only clicks or CTR.'],
  ['How can psychology improve landing pages?', 'Use clear hierarchy, reduce unnecessary choices, make the value proposition easy to process, show credible proof, handle objections and make the next step obvious. The goal is to reduce decision friction without hiding information.'],
]

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: '17 Marketing Psychology Concepts Every Modern Marketer Should Know',
  description: 'A practical guide to 17 marketing psychology concepts, with examples, performance marketing applications and visual frameworks.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-24', dateModified: '2026-08-24',
  mainEntityOfPage: 'https://ashwinjames.com/blog/marketing-concepts-modern-marketers-should-know',
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }

function ConceptVisual({ concept }) {
  return <div className="marketing-psych-visual" aria-label={`Visual example for ${concept.title}`}>
    <div className="marketing-psych-visual-label">VISUAL EXAMPLE</div>
    <div className="marketing-psych-visual-flow">{concept.visual.map((item, i) => <span key={`${concept.n}-${i}`} className={item.length <= 3 || item.includes('★') ? 'accent' : ''}>{item}</span>)}</div>
  </div>
}

export default function MarketingConceptsBlog() {
  return <main className="marketing-concepts-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    <article className="marketing-concepts-shell">
      <header className="marketing-concepts-hero">
        <Link to="/blog" className="marketing-concepts-back">← Back to all blogs</Link>
        <p className="marketing-concepts-eyebrow">MARKETING · BEHAVIOURAL SCIENCE · PERFORMANCE</p>
        <div className="marketing-concepts-meta"><span>Marketing Psychology</span><span>•</span><span>22 min read</span><span>•</span><span>August 24, 2026</span></div>
        <h1>17 Marketing Psychology Concepts Every Modern Marketer Should Know</h1>
        <p className="marketing-concepts-lede">Marketing gets more interesting when you stop asking only “what should I run?” and start asking “why might a person notice, remember, choose or act?” Here are 17 concepts worth understanding, with practical examples and visual models.</p>
        <div className="marketing-concepts-links"><Link to="/services/performance-growth-marketing">Performance Marketing</Link><Link to="/case-studies">View case studies</Link></div>
      </header>

      <div className="marketing-concepts-content">
        <p className="marketing-concepts-opening">A marketer can know Meta Ads, Google Ads, analytics and CRO and still misunderstand the person on the other side of the screen.</p>
        <p>That is because platforms describe <strong>what happened</strong>. Behavioural science can help us form better hypotheses about <strong>why people responded</strong>.</p>
        <p>This is not a collection of psychological tricks. A behavioural principle is useful only when it helps you understand a customer, create a clearer experience and test a meaningful business hypothesis.</p>
        <div className="marketing-concepts-principle"><span>THE CORE IDEA</span><strong>Psychology should improve the decision environment, not manipulate the customer.</strong><p>Use these concepts to reduce friction, clarify value and make relevant choices easier to understand.</p></div>

        <h2>How to read the 17 concepts</h2>
        <p>For each principle, I use four layers:</p>
        <div className="marketing-concepts-test"><div><span>CONCEPT</span><strong>What the idea means</strong></div><div><span>EXAMPLE</span><strong>What it could look like</strong></div><div><span>APPLICATION</span><strong>How a marketer might use it</strong></div><div><span>MEASURE</span><strong>What to test</strong></div></div>
        <p>The examples are illustrative unless explicitly identified as research findings. They are not presented as guaranteed outcomes.</p>

        <h2>The 17 concepts at a glance</h2>
        <div className="marketing-concepts-grid">{concepts.map(c => <section key={c.n}><span>{c.n}</span><h3>{c.title}</h3><p>{c.definition}</p></section>)}</div>

        {concepts.map((c, index) => <section className="marketing-psych-section" key={c.n}>
          <div className="marketing-psych-number">{c.n}</div>
          <h2>{c.title}</h2>
          <p><strong>What it means:</strong> {c.definition}</p>
          <ConceptVisual concept={c} />
          <div className="marketing-concepts-scenarios">
            <div><span>MARKETING EXAMPLE</span><h3>What it could look like</h3><p>{c.example}</p></div>
            <div><span>PERFORMANCE APPLICATION</span><h3>How to use it responsibly</h3><p>{c.application}</p></div>
          </div>
          <div className="marketing-concepts-measure"><strong>What to test</strong><span>{index % 3 === 0 ? 'Compare conversion or completion behaviour against a clear control.' : index % 3 === 1 ? 'Compare attention, engagement and downstream quality rather than one surface metric.' : 'Test the concept against the business outcome and check whether the effect survives beyond the first interaction.'}</span></div>
        </section>)}

        <h2>Three important distinctions marketers often miss</h2>
        <div className="marketing-concepts-final">
          <strong>Scarcity is not urgency. Limited quantity and limited time are different claims.</strong>
          <strong>Distinctiveness is not decoration. Contrast should create hierarchy and memory, not visual noise.</strong>
          <strong>Psychology is not a conversion guarantee. A principle creates a hypothesis that still needs testing.</strong>
          <strong>Repetition is not the Rule of Seven. Frequency should be based on context, audience and evidence.</strong>
        </div>

        <h2>How these principles fit into a performance marketing system</h2>
        <p>The concepts become more useful when connected rather than deployed individually.</p>
        <div className="marketing-concepts-chain"><span>Customer insight</span><b>→</b><span>Positioning</span><b>→</b><span>Frame</span><b>→</b><span>Creative</span><b>→</b><span>Landing page</span><b>→</b><span>Choice</span><b>→</b><span>Conversion</span><b>→</b><span>CRM</span><b>→</b><span>Revenue</span></div>
        <p>For example, suppose a lead generation campaign is producing plenty of clicks but weak enquiries.</p>
        <p>You might use <strong>framing</strong> to clarify the problem, <strong>processing fluency</strong> to simplify the landing page, <strong>choice architecture</strong> to make the next step clearer and <strong>loss aversion</strong> to explain a genuine cost of delaying action.</p>
        <p>But the real test is not whether the page looks more persuasive. It is whether qualified conversion and downstream commercial outcomes improve.</p>

        <h2>A practical checklist before using a psychology principle</h2>
        <div className="marketing-concepts-checklist">
          <div><span>01</span><p><strong>What customer problem are we solving?</strong> If you cannot answer this, psychology is probably being used as decoration.</p></div>
          <div><span>02</span><p><strong>What behaviour are we trying to change?</strong> Attention, comprehension, consideration, conversion, retention or something else?</p></div>
          <div><span>03</span><p><strong>What principle creates a plausible hypothesis?</strong> Do not start with a tactic and search for a psychology label afterwards.</p></div>
          <div><span>04</span><p><strong>What is the control?</strong> You need a credible comparison to know whether the change mattered.</p></div>
          <div><span>05</span><p><strong>What business metric decides the test?</strong> CTR can be useful, but qualified leads, purchases, revenue or contribution may matter more.</p></div>
          <div><span>06</span><p><strong>Could the message reduce trust?</strong> If the tactic depends on deception, fake scarcity or hidden information, the short term lift may not justify the long term cost.</p></div>
        </div>

        <h2>The bigger lesson</h2>
        <p>The strongest marketers do not memorise psychology principles so they can sprinkle them across landing pages.</p>
        <p>They use behavioural ideas to ask better questions.</p>
        <p>Why did people stop here?</p>
        <p>Why did they choose this option?</p>
        <p>Why did they remember this message?</p>
        <p>Why did they abandon the form?</p>
        <p>Why did the same lead behave differently after entering the CRM?</p>
        <p>That mindset is especially useful in performance marketing because the feedback loop is measurable. You can turn a behavioural hypothesis into a creative test, landing page experiment or funnel change, then connect the result to the commercial outcome.</p>
        <div className="marketing-concepts-cta"><h2>Use psychology to improve decisions, not to replace them.</h2><p>The goal is not to find a magic trigger. It is to understand people well enough to create clearer offers, better experiences and stronger experiments.</p><div><Link to="/services/performance-growth-marketing">Explore performance marketing</Link><Link to="/blog">Read more insights</Link></div></div>

        <h2>Sources and research notes</h2>
        <div className="marketing-concepts-sources">
          <p>Goal Gradient Effect</p><a href="https://journals.sagepub.com/doi/full/10.1509/jmkr.43.1.39" target="_blank" rel="noreferrer">Kivetz, Urminsky & Zheng, Journal of Marketing Research</a>
          <p>Von Restorff Effect</p><a href="https://pubmed.ncbi.nlm.nih.gov/24203592/" target="_blank" rel="noreferrer">Hunt, Psychonomic Bulletin & Review</a>
          <p>Framing Effect</p><a href="https://doi.org/10.1126/science.7455683" target="_blank" rel="noreferrer">Tversky & Kahneman, Science</a>
          <p>Choice Overload</p><a href="https://pubmed.ncbi.nlm.nih.gov/11138768/" target="_blank" rel="noreferrer">Iyengar & Lepper, Journal of Personality and Social Psychology</a>
          <p>Pratfall Effect</p><a href="https://pubmed.ncbi.nlm.nih.gov/5479130/" target="_blank" rel="noreferrer">Helmreich, Aronson & LeFan, Journal of Personality and Social Psychology</a>
          <p>Fresh Start Effect</p><a href="https://faculty.wharton.upenn.edu/wp-content/uploads/2014/06/Dai_Fresh_Start_2014_Mgmt_Sci.pdf" target="_blank" rel="noreferrer">Dai, Milkman & Riis, Management Science</a>
          <p>Scarcity</p><a href="https://www.nowpublishers.com/article/DownloadSummary/MKT-083" target="_blank" rel="noreferrer">Marketing research review on scarcity</a>
          <p>Endowment Effect</p><a href="https://pubmed.ncbi.nlm.nih.gov/33816642/" target="_blank" rel="noreferrer">Recent research examining ownership, market beliefs and valuation</a>
        </div>
        <p className="marketing-concepts-note"><strong>Research note:</strong> Some labels in this article are established psychological effects, while others are marketing heuristics or modern industry language. “Vibe Branding” is treated as a branding practice rather than a validated psychological law. The “Rule of Seven” is treated as a popular heuristic, not a universal empirical threshold.</p>

        <h2>FAQ</h2>
        <div className="marketing-concepts-faq">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </div>
    </article>
  </main>
}
