import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/SeoAiSearchBlog.jsx
var faq = [
	["Is SEO still important for AI search?", "Yes. Google’s current guidance says foundational SEO practices remain relevant to generative AI search experiences."],
	["Does ChatGPT Search guarantee that the most optimised website will appear?", "No. OpenAI describes ChatGPT Search as using multiple factors to retrieve relevant and reliable information, and it does not guarantee top placement."],
	["Should I optimise my website specifically for ChatGPT?", "Do not treat ChatGPT as a ranking system with a known secret formula. Build a technically accessible website, clear subject and entity information, useful original content, first hand expertise and legitimate external references."],
	["Does structured data guarantee better rankings or AI recommendations?", "No. Structured data can help search engines understand content and may support eligibility for certain search features, but it does not guarantee rankings or inclusion in AI answers."],
	["Should I publish hundreds of AI generated articles to build topical authority?", "No. Google’s guidance prioritises useful, original, people first content and warns against producing large quantities of content primarily to manipulate search visibility."]
];
var layers = [
	[
		"01",
		"Intent",
		"Understand what the searcher is actually trying to accomplish."
	],
	[
		"02",
		"Entity",
		"Make the person, business, service or subject clearly identifiable."
	],
	[
		"03",
		"Relevance",
		"Connect the entity to the topic with natural, descriptive language and structure."
	],
	[
		"04",
		"Evidence",
		"Show the work, data, methodology, outcomes and limitations behind your claims."
	],
	[
		"05",
		"Authority",
		"Build credibility through expertise, useful work and legitimate references."
	],
	[
		"06",
		"Connections",
		"Connect relevant information across your website and professional ecosystem."
	],
	[
		"07",
		"Distribution",
		"Make useful information discoverable where your audience actually searches."
	]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "SEO Is No Longer Just About Keywords: How Search Engines and AI Understand Websites in 2026",
	description: "SEO is evolving beyond keywords. Learn how search intent, entities, evidence, authority, topical relevance and AI powered search shape discoverability in 2026.",
	author: {
		"@type": "Person",
		name: "Ashwin James",
		url: "https://ashwinjames.com/"
	},
	publisher: {
		"@type": "Person",
		name: "Ashwin James"
	},
	datePublished: "2026-08-24",
	dateModified: "2026-08-24",
	mainEntityOfPage: "https://ashwinjames.com/blog/seo-ai-search-entity-authority-2026"
};
var faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faq.map(([question, answer]) => ({
		"@type": "Question",
		name: question,
		acceptedAnswer: {
			"@type": "Answer",
			text: answer
		}
	}))
};
function SeoAiSearchBlog() {
	return /* @__PURE__ */ jsxs("main", {
		className: "seo-ai-blog-page",
		children: [
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: JSON.stringify(articleSchema)
			}),
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: JSON.stringify(faqSchema)
			}),
			/* @__PURE__ */ jsxs("article", {
				className: "seo-ai-blog-shell",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "seo-ai-blog-hero",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/blog",
							className: "seo-ai-blog-back",
							children: "← Back to all blogs"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "seo-ai-blog-eyebrow",
							children: "SEO · AI SEARCH · PERSONAL BRAND"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-blog-meta",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Search & Discovery" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "14 min read" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "August 24, 2026" })
							]
						}),
						/* @__PURE__ */ jsx("h1", { children: "SEO Is No Longer Just About Keywords: How Search Engines and AI Understand Websites in 2026" }),
						/* @__PURE__ */ jsx("p", {
							className: "seo-ai-blog-lede",
							children: "What happens when search systems need to understand not only your page, but also who you are, what you do and what evidence supports it? My own search experiment changed how I think about modern SEO."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-blog-hero-links",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/",
								children: "Ashwin James homepage"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/services/seo",
								children: "Explore SEO services"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "seo-ai-blog-content",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "seo-ai-lede-question",
							children: "I searched ChatGPT for “best performance marketing specialist in Dubai”. My own website did not appear in that particular search."
						}),
						/* @__PURE__ */ jsxs("p", { children: ["I was not looking for a performance marketer to hire. I was trying to understand something more interesting: ", /* @__PURE__ */ jsx("strong", { children: "how does an AI powered search system discover and select professionals when someone asks for a recommendation?" })] }),
						/* @__PURE__ */ jsx("p", { children: "The search process included web searches around phrases such as “best performance marketing specialist Dubai UAE 2026”, alongside broader discovery around performance marketing specialists, digital marketing consultants and agencies." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Several specialists and agencies appeared. My site, ",
							/* @__PURE__ */ jsx("strong", { children: "ashwinjames.com" }),
							", did not."
						] }),
						/* @__PURE__ */ jsxs("p", { children: [
							"That result surprised me because the website was already optimised around the obvious terminology. The homepage identifies me as a ",
							/* @__PURE__ */ jsx("strong", { children: "Performance Marketing Specialist in UAE" }),
							" and uses phrases including Performance Marketing, Dubai, UAE, Meta & Google Ads Specialist, Data Driven Performance Marketing and End to End Funnel Strategy."
						] }),
						/* @__PURE__ */ jsx("p", { children: "So the obvious question was:" }),
						/* @__PURE__ */ jsx("blockquote", { children: "If the relevant keywords are already there, why was my website not surfaced?" }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-note",
							children: [/* @__PURE__ */ jsx("strong", { children: "Important limitation" }), /* @__PURE__ */ jsx("p", { children: "This experiment does not reveal the private ranking or retrieval logic behind ChatGPT Search. It is an observation from one query at one point in time, not evidence that another professional was objectively “better”. The useful lesson is the gap between keyword relevance and broader information retrieval." })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "1. The old SEO mental model" }),
						/* @__PURE__ */ jsx("p", { children: "For a long time, a useful mental model for SEO was:" }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-model seo-ai-model-old",
							children: [/* @__PURE__ */ jsx("span", { children: "OLD MODEL" }), /* @__PURE__ */ jsx("strong", { children: "Keyword → Page → Ranking" })]
						}),
						/* @__PURE__ */ jsx("p", { children: "Someone searches for “performance marketing specialist Dubai”. You create a relevant page, include the phrase in important places, build internal links, earn legitimate external references and make sure the page can be crawled and indexed." }),
						/* @__PURE__ */ jsx("p", { children: "This model is not wrong. Google still recommends using words people search for in important locations such as titles, headings and link text. The mistake is treating keyword relevance as the whole model." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Two websites can both contain the phrase ",
							/* @__PURE__ */ jsx("strong", { children: "Performance Marketing Specialist in Dubai" }),
							". The keyword alone cannot answer who is behind the page, what they have done, what evidence demonstrates their experience, how consistent their professional identity is or what other information corroborates the claims."
						] }),
						/* @__PURE__ */ jsx("h2", { children: "2. Search intent comes before keywords" }),
						/* @__PURE__ */ jsx("p", { children: "Consider these three searches:" }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-query-grid",
							children: [
								/* @__PURE__ */ jsxs("div", { children: ["“performance marketing Dubai”", /* @__PURE__ */ jsx("span", { children: "Exploratory" })] }),
								/* @__PURE__ */ jsxs("div", { children: ["“best performance marketing specialist in Dubai”", /* @__PURE__ */ jsx("span", { children: "Recommendation oriented" })] }),
								/* @__PURE__ */ jsxs("div", { children: ["“performance marketing consultant for healthcare businesses in Dubai”", /* @__PURE__ */ jsx("span", { children: "Specific commercial and industry context" })] })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "They contain related terminology, but they do not express the same need." }),
						/* @__PURE__ */ jsxs("p", { children: ["So SEO should not begin with ", /* @__PURE__ */ jsx("strong", { children: "“What keyword should I insert?”" })] }),
						/* @__PURE__ */ jsxs("p", { children: ["It should begin with ", /* @__PURE__ */ jsx("strong", { children: "“What is this person actually trying to accomplish?”" })] }),
						/* @__PURE__ */ jsx("p", { children: "That changes content architecture. A general service query may deserve a service page. A recommendation query needs clear professional identity and evidence. A niche industry query may need relevant case studies, experience and context." }),
						/* @__PURE__ */ jsx("p", { children: "This is very similar to performance marketing. I would not optimise a campaign simply because a demographic exists. I start with the objective, then the audience, intent, offer, message and conversion path." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-callout",
							children: [/* @__PURE__ */ jsx("strong", { children: "SEO principle" }), /* @__PURE__ */ jsx("p", { children: "Intent should determine the content architecture." })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "3. From keywords to entities" }),
						/* @__PURE__ */ jsx("p", { children: "A keyword is a search expression. An entity is the thing the information is about." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-entity-compare",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "KEYWORD" }), /* @__PURE__ */ jsx("strong", { children: "performance marketing specialist Dubai" })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "ENTITY" }), /* @__PURE__ */ jsx("strong", { children: "Ashwin James" })] })]
						}),
						/* @__PURE__ */ jsx("p", { children: "The entity can then be connected to concepts such as Performance Marketing, Meta Ads, Google Ads, Lead Generation, CRM, CRO, Analytics, Dubai, UAE, Case Studies and Professional Experience." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Schema.org reflects this idea by defining a ",
							/* @__PURE__ */ jsx("strong", { children: "Person" }),
							" type with properties such as jobTitle, knowsAbout, worksFor, sameAs and URL."
						] }),
						/* @__PURE__ */ jsxs("p", { children: [
							"That does ",
							/* @__PURE__ */ jsx("strong", { children: "not" }),
							" mean adding Person schema causes ChatGPT to recommend you. That would be an unsupported claim."
						] }),
						/* @__PURE__ */ jsxs("p", { children: ["The practical lesson is simpler: ", /* @__PURE__ */ jsx("strong", { children: "make it easy for humans and machines to understand exactly who or what the website represents." })] }),
						/* @__PURE__ */ jsx("h2", { children: "4. Relevance is not the same as authority" }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-four-signals",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "RELEVANCE" }), /* @__PURE__ */ jsx("strong", { children: "Does this page match the topic?" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "EVIDENCE" }), /* @__PURE__ */ jsx("strong", { children: "What demonstrates the expertise?" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "AUTHORITY" }), /* @__PURE__ */ jsx("strong", { children: "Why should this source be trusted or selected?" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "CORROBORATION" }), /* @__PURE__ */ jsx("strong", { children: "Does relevant information elsewhere support the same identity?" })] })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "My homepage already contained substantial keyword relevance. The more useful question became whether the wider body of work made the professional identity easy to evaluate." }),
						/* @__PURE__ */ jsx("p", { children: "Google’s people first guidance similarly emphasises first hand expertise, original information or analysis, clear authorship and reasons for users to trust the source." }),
						/* @__PURE__ */ jsx("h2", { children: "5. Evidence beats empty claims" }),
						/* @__PURE__ */ jsx("p", { children: "Compare these two statements:" }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-quote-grid",
							children: [/* @__PURE__ */ jsx("blockquote", { children: "“I am an expert performance marketer.”" }), /* @__PURE__ */ jsx("blockquote", { children: "“I have managed 140+ campaigns, generated 12,000+ qualified leads, achieved a 31% average CPL reduction and delivered 4.8× average ROAS across my reported engagements.”" })]
						}),
						/* @__PURE__ */ jsx("p", { children: "The second statement is more useful because it gives the reader something to examine." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"My portfolio also presents first party case study evidence such as ",
							/* @__PURE__ */ jsx("strong", { children: "4,499 CRM leads analysed" }),
							", ",
							/* @__PURE__ */ jsx("strong", { children: "609 Sales Qualified Leads" }),
							", a ",
							/* @__PURE__ */ jsx("strong", { children: "13.5% overall SQL rate" }),
							" and a ",
							/* @__PURE__ */ jsx("strong", { children: "25.1% best monthly SQL rate" }),
							". Other case study results include ",
							/* @__PURE__ */ jsx("strong", { children: "+68% qualified leads and −36% CPL" }),
							" in healthcare, ",
							/* @__PURE__ */ jsx("strong", { children: "+54% enrolment enquiries and +22% show up rate" }),
							" in education, and ",
							/* @__PURE__ */ jsx("strong", { children: "5.7× ROAS and +41% sales ready leads" }),
							" in professional services."
						] }),
						/* @__PURE__ */ jsx("p", { children: "These figures are not independent proof that I am objectively better than another marketer. They are first party evidence presented by me about work I have done." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-evidence-grid",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Case studies" }),
								/* @__PURE__ */ jsx("span", { children: "Screenshots" }),
								/* @__PURE__ */ jsx("span", { children: "Before / after data" }),
								/* @__PURE__ */ jsx("span", { children: "Methodology" }),
								/* @__PURE__ */ jsx("span", { children: "Experiments" }),
								/* @__PURE__ */ jsx("span", { children: "CRM analysis" }),
								/* @__PURE__ */ jsx("span", { children: "Attribution analysis" }),
								/* @__PURE__ */ jsx("span", { children: "Original research" })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Do not merely describe your expertise. Show the work behind it." }) }),
						/* @__PURE__ */ jsx("h2", { children: "6. Your website is only one part of SEO" }),
						/* @__PURE__ */ jsx("p", { children: "For personal brand SEO, I increasingly think about the information ecosystem rather than one homepage:" }),
						/* @__PURE__ */ jsx("div", {
							className: "seo-ai-ecosystem",
							children: /* @__PURE__ */ jsx("strong", { children: "Website + professional profiles + case studies + published content + external mentions + client references + original research" })
						}),
						/* @__PURE__ */ jsx("p", { children: "The objective is not to copy and paste the same keyword everywhere. Distribution is useful when each source adds legitimate context." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-identity-grid",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "WEBSITE" }), /* @__PURE__ */ jsx("strong", { children: "Ashwin James · Performance Marketing Specialist" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "LINKEDIN" }), /* @__PURE__ */ jsx("strong", { children: "Ashwin James · Performance Marketing Specialist" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "CASE STUDIES" }), /* @__PURE__ */ jsx("strong", { children: "Documented performance marketing work" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "ARTICLES" }), /* @__PURE__ */ jsx("strong", { children: "Original performance marketing analysis" })] })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "This is different from keyword stuffing. Legitimate links and references should help users understand the subject, not manufacture reputation." }),
						/* @__PURE__ */ jsx("h2", { children: "7. Topical authority is built through depth, not random blogging" }),
						/* @__PURE__ */ jsx("p", { children: "“Write more articles” is not a strategy by itself." }),
						/* @__PURE__ */ jsx("p", { children: "A blog containing Meta Ads, WordPress, AI news, email marketing, productivity and web design may have many pages but weak topical identity." }),
						/* @__PURE__ */ jsx("p", { children: "A focused structure is stronger:" }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-cluster",
							children: [/* @__PURE__ */ jsx("div", {
								className: "seo-ai-cluster-core",
								children: "Performance Marketing"
							}), [
								"Meta Ads",
								"Google Ads",
								"Lead Generation",
								"Lead Quality",
								"CRM",
								"CRO",
								"Attribution",
								"Case Studies",
								"Original Research"
							].map((topic) => /* @__PURE__ */ jsx("div", { children: topic }, topic))]
						}),
						/* @__PURE__ */ jsx("p", { children: "The goal is not simply more content. It is stronger relationships between useful pieces of content." }),
						/* @__PURE__ */ jsx("p", { children: "For my own site, I would rather publish ten genuinely useful articles around performance marketing and growth systems than fifty unrelated pages built only because a keyword tool shows search volume." }),
						/* @__PURE__ */ jsx("h2", { children: "8. Local SEO is more than adding “Dubai”" }),
						/* @__PURE__ */ jsx("p", { children: "If you want to be discoverable in Dubai, adding “Dubai” to every heading is easy. It is also not enough to create genuine local context." }),
						/* @__PURE__ */ jsx("p", { children: "A stronger local strategy can include Dubai case studies, UAE client experience, local industry examples, UAE specific customer behaviour, relevant professional profiles, consistent geographic information and legitimate local references." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-local-model",
							children: [
								/* @__PURE__ */ jsx("span", { children: "WEAKER" }),
								/* @__PURE__ */ jsx("strong", { children: "Dubai as a repeated keyword" }),
								/* @__PURE__ */ jsx("span", { children: "STRONGER" }),
								/* @__PURE__ */ jsx("strong", { children: "Dubai as part of the professional context" })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Dubai should become context, not just a keyword." }) }),
						/* @__PURE__ */ jsx("h2", { children: "9. Technical SEO still matters" }),
						/* @__PURE__ */ jsx("p", { children: "None of this makes technical SEO obsolete. A search system cannot make much use of a page it cannot reliably access, render or index." }),
						/* @__PURE__ */ jsx("div", {
							className: "seo-ai-check-grid",
							children: [
								"Crawlability",
								"Indexability",
								"XML sitemap",
								"Robots.txt",
								"Canonical URLs",
								"Page speed",
								"Mobile experience",
								"Structured data",
								"Internal linking",
								"HTTPS",
								"Clean URLs",
								"Rendering"
							].map((item) => /* @__PURE__ */ jsx("span", { children: item }, item))
						}),
						/* @__PURE__ */ jsx("p", { children: "Think about this like a marketing funnel. Excellent messaging cannot compensate for a broken tracking system. Likewise, excellent content cannot compensate for a page that cannot be reliably discovered or indexed." }),
						/* @__PURE__ */ jsx("p", { children: "Google’s current generative AI guidance says the foundational SEO practices used for normal search remain relevant to AI Overviews and AI Mode, while the same technical eligibility principles still apply." }),
						/* @__PURE__ */ jsx("h2", { children: "10. Structured data helps clarify meaning" }),
						/* @__PURE__ */ jsx("p", { children: "Structured data is useful, but it is frequently overpromised." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-schema-grid",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Person" }), /* @__PURE__ */ jsx("span", { children: "Professional identity" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Article" }), /* @__PURE__ */ jsx("span", { children: "Article content and metadata" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "WebSite" }), /* @__PURE__ */ jsx("span", { children: "Overall website identity" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "BreadcrumbList" }), /* @__PURE__ */ jsx("span", { children: "Navigation hierarchy" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "ProfessionalService" }), /* @__PURE__ */ jsx("span", { children: "Only where factually appropriate" })] })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "Schema does not magically make a website authoritative. Use it to accurately describe information already present on the site." }),
						/* @__PURE__ */ jsx("h2", { children: "11. AI search does not mean SEO is dead" }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-venn",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", { children: "Traditional Search" }),
									/* @__PURE__ */ jsx("span", { children: "Crawlability" }),
									/* @__PURE__ */ jsx("span", { children: "Indexability" }),
									/* @__PURE__ */ jsx("span", { children: "Keywords" }),
									/* @__PURE__ */ jsx("span", { children: "Links" }),
									/* @__PURE__ */ jsx("span", { children: "Technical SEO" }),
									/* @__PURE__ */ jsx("span", { children: "Content" })
								] }),
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", { children: "AI Powered Search" }),
									/* @__PURE__ */ jsx("span", { children: "Query interpretation" }),
									/* @__PURE__ */ jsx("span", { children: "Information retrieval" }),
									/* @__PURE__ */ jsx("span", { children: "Synthesis" }),
									/* @__PURE__ */ jsx("span", { children: "Citations" }),
									/* @__PURE__ */ jsx("span", { children: "Context" }),
									/* @__PURE__ */ jsx("span", { children: "Recommendations" })
								] }),
								/* @__PURE__ */ jsx("strong", { children: "Relevant, useful, accessible information" })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "OpenAI describes ChatGPT Search as a web search experience that can rewrite queries into targeted searches and retrieve information from the web with cited sources. OpenAI also states that search ranking uses multiple factors and that top placement is not guaranteed." }),
						/* @__PURE__ */ jsx("p", { children: "Google similarly documents AI search experiences while keeping foundational SEO in the picture." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-warning",
							children: [/* @__PURE__ */ jsx("strong", { children: "Be sceptical of certainty" }), /* @__PURE__ */ jsx("p", { children: "There is no publicly documented universal “AI authority score” and no legitimate checklist that guarantees inclusion in every AI answer." })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "12. My 7 layer SEO framework" }),
						/* @__PURE__ */ jsx("div", {
							className: "seo-ai-seven-layer",
							children: layers.map(([number, title, description]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: number }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: description })] })] }, number))
						}),
						/* @__PURE__ */ jsx("p", { children: "This is not a ranking formula. I am not claiming that Google or OpenAI uses these seven layers in this exact order. It is a practical mental model for testing whether a professional identity is understandable, relevant and supported." }),
						/* @__PURE__ */ jsx("h2", { children: "13. How I am applying this to my own portfolio" }),
						/* @__PURE__ */ jsx("p", { children: "The experiment changed the question I ask about my website." }),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-ai-question-card",
							children: [
								/* @__PURE__ */ jsx("span", { children: "BEFORE" }),
								/* @__PURE__ */ jsx("strong", { children: "“How do I optimise this page for the keyword?”" }),
								/* @__PURE__ */ jsx("span", { children: "NOW" }),
								/* @__PURE__ */ jsx("strong", { children: "“What information would a search system need to understand who I am, what I do and why I am relevant?”" })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "That means improving entity clarity, creating stronger Dubai specific content, expanding case study depth, strengthening internal linking, implementing appropriate structured data, improving technical SEO, building topical clusters, connecting professional profiles, publishing original research and tracking AI search visibility where measurement is possible." }),
						/* @__PURE__ */ jsx("p", { children: "The honest part is important: I am testing whether a clearer, more useful and better supported professional information ecosystem improves discoverability over time. I am not claiming that these changes will make ChatGPT recommend me." }),
						/* @__PURE__ */ jsx("h2", { children: "14. How to measure SEO in the AI search era" }),
						/* @__PURE__ */ jsx("div", {
							className: "seo-ai-metrics",
							children: [
								"Rankings",
								"Organic traffic",
								"Clicks",
								"Impressions",
								"Conversions",
								"AI answer appearances",
								"Pages referenced",
								"Competitors surfaced",
								"Brand facts associated with the site",
								"Citation patterns",
								"Branded search growth",
								"Non branded impressions"
							].map((item) => /* @__PURE__ */ jsx("span", { children: item }, item))
						}),
						/* @__PURE__ */ jsx("p", { children: "Some AI visibility measurements are difficult and some platforms do not provide equivalent analytics. Manual sampling can still be useful, provided the sample is documented and its limitations are clear." }),
						/* @__PURE__ */ jsx("p", { children: "The right approach is not to throw away traditional SEO reporting. Add new questions where reliable data exists." }),
						/* @__PURE__ */ jsx("h2", { children: "15. The bigger lesson" }),
						/* @__PURE__ */ jsx("p", { children: "The most interesting part of the experiment was not that my website failed to appear. It was what that failure revealed about my mental model." }),
						/* @__PURE__ */ jsx("p", { children: "I initially thought I needed to optimise a page." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"The broader lesson was that I needed to think about the ",
							/* @__PURE__ */ jsx("strong", { children: "information ecosystem around the person" }),
							"."
						] }),
						/* @__PURE__ */ jsx("blockquote", { children: "Modern SEO is increasingly about making expertise understandable, relevant, useful and supportable across an information ecosystem, not merely inserting a keyword into a page." }),
						/* @__PURE__ */ jsx("p", { children: "That does not mean keywords are irrelevant. It does not mean links are irrelevant. It does not mean technical SEO is obsolete. It does not mean AI has replaced Google." }),
						/* @__PURE__ */ jsx("p", { children: "It means the web is becoming more interpretable and search interfaces are increasingly able to handle longer questions, retrieve information from multiple sources and synthesise it into answers." }),
						/* @__PURE__ */ jsx("h2", { children: "Conclusion" }),
						/* @__PURE__ */ jsx("p", { children: "SEO is not disappearing. It is becoming harder to reduce to a checklist." }),
						/* @__PURE__ */ jsx("p", { children: "Keywords still matter. Technical SEO still matters. Content still matters. Links still matter." }),
						/* @__PURE__ */ jsx("p", { children: "But the deeper question I now ask when building my portfolio is:" }),
						/* @__PURE__ */ jsx("div", {
							className: "seo-ai-final-question",
							children: "Can a search system clearly understand what this person represents, why they are relevant and what evidence supports that understanding?"
						}),
						/* @__PURE__ */ jsx("p", { children: "For a performance marketer, this should feel familiar. The best campaigns are rarely built around one metric. You look at the audience, the intent, the offer, the message, the landing page, the conversion, the CRM, the sales process and the revenue." }),
						/* @__PURE__ */ jsx("p", { children: "SEO is moving in a similar direction." }),
						/* @__PURE__ */ jsx("p", { children: "The page still matters. But the page exists inside a much larger information system." }),
						/* @__PURE__ */ jsxs("section", {
							className: "seo-ai-cta",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "seo-ai-blog-eyebrow",
									children: "Build discoverability around real expertise"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Want your portfolio, service pages and case studies to form a clearer search ecosystem?" }),
								/* @__PURE__ */ jsx("p", { children: "I can help you audit the structure, content, technical foundation and evidence across your site." }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Start a conversation"
								}), /* @__PURE__ */ jsx(Link, {
									to: "/case-studies",
									children: "See the case studies"
								})] })
							]
						}),
						/* @__PURE__ */ jsx("h2", { children: "Frequently asked questions" }),
						/* @__PURE__ */ jsx("div", {
							className: "seo-ai-faq",
							children: faq.map(([question, answer]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [question, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: answer })] }, question))
						}),
						/* @__PURE__ */ jsxs("footer", {
							className: "seo-ai-sources",
							children: [
								/* @__PURE__ */ jsx("p", { children: "Further reading" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Google Search Central: SEO Starter Guide"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Google Search Central: Creating Helpful, Reliable, People First Content"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://developers.google.com/search/docs/fundamentals/ai-overviews-and-your-website",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Google Search Central: AI features and your website"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://help.openai.com/en/articles/9237897-chatgpt-search",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "OpenAI: ChatGPT Search"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "OpenAI: Publishers and Developers FAQ"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://schema.org/Person",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Schema.org: Person"
								})
							]
						})
					]
				})]
			})
		]
	});
}
export { SeoAiSearchBlog as default };
