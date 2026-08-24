import { Link } from 'react-router-dom'

const faq = [
  ['Is SEO still important for AI search?', 'Yes. Google’s current guidance says foundational SEO practices remain relevant to generative AI search experiences.'],
  ['Does ChatGPT Search guarantee that the most optimised website will appear?', 'No. OpenAI describes ChatGPT Search as using multiple factors to retrieve relevant and reliable information, and it does not guarantee top placement.'],
  ['Should I optimise my website specifically for ChatGPT?', 'Do not treat ChatGPT as a ranking system with a known secret formula. Build a technically accessible website, clear subject and entity information, useful original content, first hand expertise and legitimate external references.'],
  ['Does structured data guarantee better rankings or AI recommendations?', 'No. Structured data can help search engines understand content and may support eligibility for certain search features, but it does not guarantee rankings or inclusion in AI answers.'],
  ['Should I publish hundreds of AI generated articles to build topical authority?', 'No. Google’s guidance prioritises useful, original, people first content and warns against producing large quantities of content primarily to manipulate search visibility.'],
]

const layers = [
  ['01', 'Intent', 'Understand what the searcher is actually trying to accomplish.'],
  ['02', 'Entity', 'Make the person, business, service or subject clearly identifiable.'],
  ['03', 'Relevance', 'Connect the entity to the topic with natural, descriptive language and structure.'],
  ['04', 'Evidence', 'Show the work, data, methodology, outcomes and limitations behind your claims.'],
  ['05', 'Authority', 'Build credibility through expertise, useful work and legitimate references.'],
  ['06', 'Connections', 'Connect relevant information across your website and professional ecosystem.'],
  ['07', 'Distribution', 'Make useful information discoverable where your audience actually searches.'],
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SEO Is No Longer Just About Keywords: How Search Engines and AI Understand Websites in 2026',
  description: 'SEO is evolving beyond keywords. Learn how search intent, entities, evidence, authority, topical relevance and AI powered search shape discoverability in 2026.',
  author: { '@type': 'Person', name: 'Ashwin James', url: 'https://ashwinjames.com/' },
  publisher: { '@type': 'Person', name: 'Ashwin James' },
  datePublished: '2026-08-24',
  dateModified: '2026-08-24',
  mainEntityOfPage: 'https://ashwinjames.com/blog/seo-ai-search-entity-authority-2026',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function SeoAiSearchBlog() {
  return <main className="seo-ai-blog-page">
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

    <article className="seo-ai-blog-shell">
      <header className="seo-ai-blog-hero">
        <Link to="/blog" className="seo-ai-blog-back">← Back to all blogs</Link>
        <p className="seo-ai-blog-eyebrow">SEO · AI SEARCH · PERSONAL BRAND</p>
        <div className="seo-ai-blog-meta"><span>Search &amp; Discovery</span><span>•</span><span>14 min read</span><span>•</span><span>August 24, 2026</span></div>
        <h1>SEO Is No Longer Just About Keywords: How Search Engines and AI Understand Websites in 2026</h1>
        <p className="seo-ai-blog-lede">What happens when search systems need to understand not only your page, but also who you are, what you do and what evidence supports it? My own search experiment changed how I think about modern SEO.</p>
        <div className="seo-ai-blog-hero-links"><Link to="/">Ashwin James homepage</Link><Link to="/services/seo">Explore SEO services</Link></div>
      </header>

      <div className="seo-ai-blog-content">
        <p className="seo-ai-lede-question">I searched ChatGPT for “best performance marketing specialist in Dubai”. My own website did not appear in that particular search.</p>
        <p>I was not looking for a performance marketer to hire. I was trying to understand something more interesting: <strong>how does an AI powered search system discover and select professionals when someone asks for a recommendation?</strong></p>
        <p>The search process included web searches around phrases such as “best performance marketing specialist Dubai UAE 2026”, alongside broader discovery around performance marketing specialists, digital marketing consultants and agencies.</p>
        <p>Several specialists and agencies appeared. My site, <strong>ashwinjames.com</strong>, did not.</p>
        <p>That result surprised me because the website was already optimised around the obvious terminology. The homepage identifies me as a <strong>Performance Marketing Specialist in UAE</strong> and uses phrases including Performance Marketing, Dubai, UAE, Meta &amp; Google Ads Specialist, Data Driven Performance Marketing and End to End Funnel Strategy.</p>
        <p>So the obvious question was:</p>
        <blockquote>If the relevant keywords are already there, why was my website not surfaced?</blockquote>
        <div className="seo-ai-note"><strong>Important limitation</strong><p>This experiment does not reveal the private ranking or retrieval logic behind ChatGPT Search. It is an observation from one query at one point in time, not evidence that another professional was objectively “better”. The useful lesson is the gap between keyword relevance and broader information retrieval.</p></div>

        <h2>1. The old SEO mental model</h2>
        <p>For a long time, a useful mental model for SEO was:</p>
        <div className="seo-ai-model seo-ai-model-old"><span>OLD MODEL</span><strong>Keyword → Page → Ranking</strong></div>
        <p>Someone searches for “performance marketing specialist Dubai”. You create a relevant page, include the phrase in important places, build internal links, earn legitimate external references and make sure the page can be crawled and indexed.</p>
        <p>This model is not wrong. Google still recommends using words people search for in important locations such as titles, headings and link text. The mistake is treating keyword relevance as the whole model.</p>
        <p>Two websites can both contain the phrase <strong>Performance Marketing Specialist in Dubai</strong>. The keyword alone cannot answer who is behind the page, what they have done, what evidence demonstrates their experience, how consistent their professional identity is or what other information corroborates the claims.</p>

        <h2>2. Search intent comes before keywords</h2>
        <p>Consider these three searches:</p>
        <div className="seo-ai-query-grid">
          <div>“performance marketing Dubai”<span>Exploratory</span></div>
          <div>“best performance marketing specialist in Dubai”<span>Recommendation oriented</span></div>
          <div>“performance marketing consultant for healthcare businesses in Dubai”<span>Specific commercial and industry context</span></div>
        </div>
        <p>They contain related terminology, but they do not express the same need.</p>
        <p>So SEO should not begin with <strong>“What keyword should I insert?”</strong></p>
        <p>It should begin with <strong>“What is this person actually trying to accomplish?”</strong></p>
        <p>That changes content architecture. A general service query may deserve a service page. A recommendation query needs clear professional identity and evidence. A niche industry query may need relevant case studies, experience and context.</p>
        <p>This is very similar to performance marketing. I would not optimise a campaign simply because a demographic exists. I start with the objective, then the audience, intent, offer, message and conversion path.</p>
        <div className="seo-ai-callout"><strong>SEO principle</strong><p>Intent should determine the content architecture.</p></div>

        <h2>3. From keywords to entities</h2>
        <p>A keyword is a search expression. An entity is the thing the information is about.</p>
        <div className="seo-ai-entity-compare"><div><span>KEYWORD</span><strong>performance marketing specialist Dubai</strong></div><div><span>ENTITY</span><strong>Ashwin James</strong></div></div>
        <p>The entity can then be connected to concepts such as Performance Marketing, Meta Ads, Google Ads, Lead Generation, CRM, CRO, Analytics, Dubai, UAE, Case Studies and Professional Experience.</p>
        <p>Schema.org reflects this idea by defining a <strong>Person</strong> type with properties such as jobTitle, knowsAbout, worksFor, sameAs and URL.</p>
        <p>That does <strong>not</strong> mean adding Person schema causes ChatGPT to recommend you. That would be an unsupported claim.</p>
        <p>The practical lesson is simpler: <strong>make it easy for humans and machines to understand exactly who or what the website represents.</strong></p>

        <h2>4. Relevance is not the same as authority</h2>
        <div className="seo-ai-four-signals">
          <div><span>RELEVANCE</span><strong>Does this page match the topic?</strong></div>
          <div><span>EVIDENCE</span><strong>What demonstrates the expertise?</strong></div>
          <div><span>AUTHORITY</span><strong>Why should this source be trusted or selected?</strong></div>
          <div><span>CORROBORATION</span><strong>Does relevant information elsewhere support the same identity?</strong></div>
        </div>
        <p>My homepage already contained substantial keyword relevance. The more useful question became whether the wider body of work made the professional identity easy to evaluate.</p>
        <p>Google’s people first guidance similarly emphasises first hand expertise, original information or analysis, clear authorship and reasons for users to trust the source.</p>

        <h2>5. Evidence beats empty claims</h2>
        <p>Compare these two statements:</p>
        <div className="seo-ai-quote-grid"><blockquote>“I am an expert performance marketer.”</blockquote><blockquote>“I have managed 140+ campaigns, generated 12,000+ qualified leads, achieved a 31% average CPL reduction and delivered 4.8× average ROAS across my reported engagements.”</blockquote></div>
        <p>The second statement is more useful because it gives the reader something to examine.</p>
        <p>My portfolio also presents first party case study evidence such as <strong>4,499 CRM leads analysed</strong>, <strong>609 Sales Qualified Leads</strong>, a <strong>13.5% overall SQL rate</strong> and a <strong>25.1% best monthly SQL rate</strong>. Other case study results include <strong>+68% qualified leads and −36% CPL</strong> in healthcare, <strong>+54% enrolment enquiries and +22% show up rate</strong> in education, and <strong>5.7× ROAS and +41% sales ready leads</strong> in professional services.</p>
        <p>These figures are not independent proof that I am objectively better than another marketer. They are first party evidence presented by me about work I have done.</p>
        <div className="seo-ai-evidence-grid"><span>Case studies</span><span>Screenshots</span><span>Before / after data</span><span>Methodology</span><span>Experiments</span><span>CRM analysis</span><span>Attribution analysis</span><span>Original research</span></div>
        <p><strong>Do not merely describe your expertise. Show the work behind it.</strong></p>

        <h2>6. Your website is only one part of SEO</h2>
        <p>For personal brand SEO, I increasingly think about the information ecosystem rather than one homepage:</p>
        <div className="seo-ai-ecosystem"><strong>Website + professional profiles + case studies + published content + external mentions + client references + original research</strong></div>
        <p>The objective is not to copy and paste the same keyword everywhere. Distribution is useful when each source adds legitimate context.</p>
        <div className="seo-ai-identity-grid">
          <div><span>WEBSITE</span><strong>Ashwin James · Performance Marketing Specialist</strong></div>
          <div><span>LINKEDIN</span><strong>Ashwin James · Performance Marketing Specialist</strong></div>
          <div><span>CASE STUDIES</span><strong>Documented performance marketing work</strong></div>
          <div><span>ARTICLES</span><strong>Original performance marketing analysis</strong></div>
        </div>
        <p>This is different from keyword stuffing. Legitimate links and references should help users understand the subject, not manufacture reputation.</p>

        <h2>7. Topical authority is built through depth, not random blogging</h2>
        <p>“Write more articles” is not a strategy by itself.</p>
        <p>A blog containing Meta Ads, WordPress, AI news, email marketing, productivity and web design may have many pages but weak topical identity.</p>
        <p>A focused structure is stronger:</p>
        <div className="seo-ai-cluster">
          <div className="seo-ai-cluster-core">Performance Marketing</div>
          {['Meta Ads', 'Google Ads', 'Lead Generation', 'Lead Quality', 'CRM', 'CRO', 'Attribution', 'Case Studies', 'Original Research'].map(topic => <div key={topic}>{topic}</div>)}
        </div>
        <p>The goal is not simply more content. It is stronger relationships between useful pieces of content.</p>
        <p>For my own site, I would rather publish ten genuinely useful articles around performance marketing and growth systems than fifty unrelated pages built only because a keyword tool shows search volume.</p>

        <h2>8. Local SEO is more than adding “Dubai”</h2>
        <p>If you want to be discoverable in Dubai, adding “Dubai” to every heading is easy. It is also not enough to create genuine local context.</p>
        <p>A stronger local strategy can include Dubai case studies, UAE client experience, local industry examples, UAE specific customer behaviour, relevant professional profiles, consistent geographic information and legitimate local references.</p>
        <div className="seo-ai-local-model"><span>WEAKER</span><strong>Dubai as a repeated keyword</strong><span>STRONGER</span><strong>Dubai as part of the professional context</strong></div>
        <p><strong>Dubai should become context, not just a keyword.</strong></p>

        <h2>9. Technical SEO still matters</h2>
        <p>None of this makes technical SEO obsolete. A search system cannot make much use of a page it cannot reliably access, render or index.</p>
        <div className="seo-ai-check-grid">{['Crawlability', 'Indexability', 'XML sitemap', 'Robots.txt', 'Canonical URLs', 'Page speed', 'Mobile experience', 'Structured data', 'Internal linking', 'HTTPS', 'Clean URLs', 'Rendering'].map(item => <span key={item}>{item}</span>)}</div>
        <p>Think about this like a marketing funnel. Excellent messaging cannot compensate for a broken tracking system. Likewise, excellent content cannot compensate for a page that cannot be reliably discovered or indexed.</p>
        <p>Google’s current generative AI guidance says the foundational SEO practices used for normal search remain relevant to AI Overviews and AI Mode, while the same technical eligibility principles still apply.</p>

        <h2>10. Structured data helps clarify meaning</h2>
        <p>Structured data is useful, but it is frequently overpromised.</p>
        <div className="seo-ai-schema-grid"><div><strong>Person</strong><span>Professional identity</span></div><div><strong>Article</strong><span>Article content and metadata</span></div><div><strong>WebSite</strong><span>Overall website identity</span></div><div><strong>BreadcrumbList</strong><span>Navigation hierarchy</span></div><div><strong>ProfessionalService</strong><span>Only where factually appropriate</span></div></div>
        <p>Schema does not magically make a website authoritative. Use it to accurately describe information already present on the site.</p>

        <h2>11. AI search does not mean SEO is dead</h2>
        <div className="seo-ai-venn">
          <div><h3>Traditional Search</h3><span>Crawlability</span><span>Indexability</span><span>Keywords</span><span>Links</span><span>Technical SEO</span><span>Content</span></div>
          <div><h3>AI Powered Search</h3><span>Query interpretation</span><span>Information retrieval</span><span>Synthesis</span><span>Citations</span><span>Context</span><span>Recommendations</span></div>
          <strong>Relevant, useful, accessible information</strong>
        </div>
        <p>OpenAI describes ChatGPT Search as a web search experience that can rewrite queries into targeted searches and retrieve information from the web with cited sources. OpenAI also states that search ranking uses multiple factors and that top placement is not guaranteed.</p>
        <p>Google similarly documents AI search experiences while keeping foundational SEO in the picture.</p>
        <div className="seo-ai-warning"><strong>Be sceptical of certainty</strong><p>There is no publicly documented universal “AI authority score” and no legitimate checklist that guarantees inclusion in every AI answer.</p></div>

        <h2>12. My 7 layer SEO framework</h2>
        <div className="seo-ai-seven-layer">{layers.map(([number, title, description]) => <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
        <p>This is not a ranking formula. I am not claiming that Google or OpenAI uses these seven layers in this exact order. It is a practical mental model for testing whether a professional identity is understandable, relevant and supported.</p>

        <h2>13. How I am applying this to my own portfolio</h2>
        <p>The experiment changed the question I ask about my website.</p>
        <div className="seo-ai-question-card"><span>BEFORE</span><strong>“How do I optimise this page for the keyword?”</strong><span>NOW</span><strong>“What information would a search system need to understand who I am, what I do and why I am relevant?”</strong></div>
        <p>That means improving entity clarity, creating stronger Dubai specific content, expanding case study depth, strengthening internal linking, implementing appropriate structured data, improving technical SEO, building topical clusters, connecting professional profiles, publishing original research and tracking AI search visibility where measurement is possible.</p>
        <p>The honest part is important: I am testing whether a clearer, more useful and better supported professional information ecosystem improves discoverability over time. I am not claiming that these changes will make ChatGPT recommend me.</p>

        <h2>14. How to measure SEO in the AI search era</h2>
        <div className="seo-ai-metrics">{['Rankings', 'Organic traffic', 'Clicks', 'Impressions', 'Conversions', 'AI answer appearances', 'Pages referenced', 'Competitors surfaced', 'Brand facts associated with the site', 'Citation patterns', 'Branded search growth', 'Non branded impressions'].map(item => <span key={item}>{item}</span>)}</div>
        <p>Some AI visibility measurements are difficult and some platforms do not provide equivalent analytics. Manual sampling can still be useful, provided the sample is documented and its limitations are clear.</p>
        <p>The right approach is not to throw away traditional SEO reporting. Add new questions where reliable data exists.</p>

        <h2>15. The bigger lesson</h2>
        <p>The most interesting part of the experiment was not that my website failed to appear. It was what that failure revealed about my mental model.</p>
        <p>I initially thought I needed to optimise a page.</p>
        <p>The broader lesson was that I needed to think about the <strong>information ecosystem around the person</strong>.</p>
        <blockquote>Modern SEO is increasingly about making expertise understandable, relevant, useful and supportable across an information ecosystem, not merely inserting a keyword into a page.</blockquote>
        <p>That does not mean keywords are irrelevant. It does not mean links are irrelevant. It does not mean technical SEO is obsolete. It does not mean AI has replaced Google.</p>
        <p>It means the web is becoming more interpretable and search interfaces are increasingly able to handle longer questions, retrieve information from multiple sources and synthesise it into answers.</p>

        <h2>Conclusion</h2>
        <p>SEO is not disappearing. It is becoming harder to reduce to a checklist.</p>
        <p>Keywords still matter. Technical SEO still matters. Content still matters. Links still matter.</p>
        <p>But the deeper question I now ask when building my portfolio is:</p>
        <div className="seo-ai-final-question">Can a search system clearly understand what this person represents, why they are relevant and what evidence supports that understanding?</div>
        <p>For a performance marketer, this should feel familiar. The best campaigns are rarely built around one metric. You look at the audience, the intent, the offer, the message, the landing page, the conversion, the CRM, the sales process and the revenue.</p>
        <p>SEO is moving in a similar direction.</p>
        <p>The page still matters. But the page exists inside a much larger information system.</p>

        <section className="seo-ai-cta"><p className="seo-ai-blog-eyebrow">Build discoverability around real expertise</p><h2>Want your portfolio, service pages and case studies to form a clearer search ecosystem?</h2><p>I can help you audit the structure, content, technical foundation and evidence across your site.</p><div><Link to="/contact">Start a conversation</Link><Link to="/case-studies">See the case studies</Link></div></section>

        <h2>Frequently asked questions</h2>
        <div className="seo-ai-faq">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>

        <footer className="seo-ai-sources">
          <p>Further reading</p>
          <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google Search Central: SEO Starter Guide</a>
          <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">Google Search Central: Creating Helpful, Reliable, People First Content</a>
          <a href="https://developers.google.com/search/docs/fundamentals/ai-overviews-and-your-website" target="_blank" rel="noopener noreferrer">Google Search Central: AI features and your website</a>
          <a href="https://help.openai.com/en/articles/9237897-chatgpt-search" target="_blank" rel="noopener noreferrer">OpenAI: ChatGPT Search</a>
          <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">OpenAI: Publishers and Developers FAQ</a>
          <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">Schema.org: Person</a>
        </footer>
      </div>
    </article>
  </main>
}
