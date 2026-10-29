import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/data/hormoziAdsExternal.js
var hormoziAds = [
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/729219646_1361541732534095_4249772417476555215_n.jpg",
		alt: "Meta ad calling out a specific business owner segment with a scaling roadmap",
		title: "Business specific positioning",
		caption: "The creative identifies a specific business owner before introducing the growth message.",
		analysis: "The audience is built directly into the creative. Instead of opening with a generic promise, the ad first signals who should pay attention. This makes the message feel selective and relevant while giving Meta stronger contextual information about the type of person the creative is designed for.",
		structure: "Audience callout → specific business context → growth promise → next step"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/728255013_1346405374332860_1824275421304752709_n.jpg",
		alt: "Meta ad calling out tree service business owners doing over one million dollars a year",
		title: "Vertical specific callout",
		caption: "The creative speaks directly to tree service business owners above a defined revenue level.",
		analysis: "The industry is not hidden inside the body copy. It is part of the main message. The revenue threshold adds another layer of qualification, making the creative relevant to a narrower commercial profile rather than every business owner.",
		structure: "Industry → revenue threshold → relevant offer → response prompt"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/728286995_27130921449910684_5609014893862007582_n.jpg",
		alt: "Meta ad calling out an MSP or IT services company doing over one million dollars a year",
		title: "Professional services segmentation",
		caption: "The creative narrows the audience to MSP and IT services businesses at a specific scale.",
		analysis: "This is a strong example of turning market segmentation into the hook. The advertiser does not need the viewer to infer whether the offer applies to them. The business model is stated immediately, reducing ambiguity and increasing message relevance.",
		structure: "Business model → qualification → problem or opportunity → offer"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/727621678_1897357330954229_4862842828001176025_n.jpg",
		alt: "Meta ad calling out med spa business owners doing over one million dollars a year",
		title: "Identity based targeting through creative",
		caption: "The creative uses the med spa owner identity as the first relevance signal.",
		analysis: "The important idea is not simply mentioning med spas. It is making the viewer self identify before asking them to consider the offer. A qualified owner can recognise themselves almost instantly, while an unrelated viewer has a natural reason to keep scrolling.",
		structure: "Identity → qualification → desired outcome → call to action"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/728555903_1574367474022409_5074681778585344385_n.jpg",
		alt: "Meta marketing workshop creative inviting business owners doing over one million dollars a year",
		title: "Founder and workshop format",
		caption: "The creative shifts from a pure industry callout toward a broader founder led invitation.",
		analysis: "This type of creative adds breadth to the system. Instead of relying only on vertical specific messaging, it can use the founder, education and workshop concept to build interest across multiple business categories while still qualifying the intended audience.",
		structure: "Founder authority → educational promise → qualification → invitation"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/767300881_2580826009014981_4034328188586406025_n.jpg",
		alt: "Meta ad calling out excavation company owners doing over one million dollars a year",
		title: "Industry plus scale qualification",
		caption: "The creative combines a specific construction related industry with a revenue qualification.",
		analysis: "The message does two jobs before the offer is even considered. It identifies the business category and signals the scale of business being addressed. That creates a much more precise commercial context than a generic statement about helping businesses grow.",
		structure: "Industry → scale → business challenge or opportunity → solution"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/729068644_1406105734773292_6554678395127265920_n.jpg",
		alt: "Meta ad calling out tax firm owners doing over one million dollars a year",
		title: "Niche professional audience",
		caption: "The creative directly identifies tax firm owners and uses business scale as a qualification layer.",
		analysis: "The strength comes from specificity. A tax firm owner immediately knows whether the message is intended for their type of business. This approach lets multiple creatives speak to different niches without forcing one broad message to cover the entire market.",
		structure: "Niche identity → qualification → relevant promise → action"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787301755/728637095_1331948648305864_2491103331242992144_n.jpg",
		alt: "Meta ad calling out a veterinary clinic doing over one million dollars a year",
		title: "Healthcare niche creative",
		caption: "The creative applies the same audience first principle to veterinary clinic owners.",
		analysis: "The underlying framework stays consistent even when the vertical changes. The creative names the business type first, qualifies the commercial profile and then connects the audience with the relevant opportunity. This creates a repeatable creative system rather than a collection of unrelated ads.",
		structure: "Business type → qualification → relevant outcome → action"
	}
];
// src/pages/HormoziMetaAdsStrategy.jsx
var observations = [
	["Creative volume", "A large number of active ads creates more opportunities for Meta’s system to learn which creative concepts fit different people and situations."],
	["Format diversity", "The supplied examples show videos, images and carousels, with different presentation styles including headlines, founder content, explainers, behind the scenes and direct callouts."],
	["Business specific callouts", "The strongest repeated pattern is direct language such as calling out a business owner and an annual revenue threshold before presenting the offer."],
	["Hybrid creative system", "The business specific ads appear to be one layer of a broader system rather than the entire strategy. Problem agitation solution, AIDA style and founder led formats can serve broader audiences."]
];
var faq = [
	["Does calling out an industry guarantee Meta will find that audience?", "No. It is better understood as a creative relevance signal. Meta’s recommendation system uses many signals, and creative should not be treated as a guaranteed replacement for every other targeting or measurement input."],
	["Why create many small ads instead of one winning ad?", "Highly specific callout creatives can be designed for narrow business segments. Their value is often in relevance and message market fit rather than expecting one creative to become a universal winner."],
	["Should every advertiser copy this strategy?", "No. The right creative volume depends on budget, audience size, offer complexity and how much variation the account can support without creating noise."],
	["What does Andromeda actually do?", "Meta describes Andromeda as a personalized ads retrieval system. Retrieval is an early stage that narrows a very large candidate pool before later ranking stages determine which ads are ultimately shown."]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "Steal Like an Artist: What Alex Hormozi’s Meta Ads Strategy Reveals About Creative Targeting",
	description: "An analysis of Alex Hormozi’s Meta Ads creative strategy, business specific callouts, creative volume, format diversity and the role of Andromeda.",
	author: {
		"@type": "Person",
		name: "Ashwin James",
		url: "https://ashwinjames.com/"
	},
	publisher: {
		"@type": "Person",
		name: "Ashwin James"
	},
	datePublished: "2026-08-21",
	dateModified: "2026-08-21",
	mainEntityOfPage: "https://ashwinjames.com/blog/hormozi-meta-ads-strategy"
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
function HormoziMetaAdsStrategy() {
	return /* @__PURE__ */ jsxs("main", {
		className: "hormozi-blog-page",
		children: [
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(articleSchema) }
			}),
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
			}),
			/* @__PURE__ */ jsxs("article", {
				className: "hormozi-blog-shell",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "hormozi-hero",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/blog",
							className: "hormozi-back",
							children: "← Back to all insights"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "hormozi-eyebrow",
							children: "STEAL LIKE AN ARTIST · META ADS"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "hormozi-meta",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Meta Ads Strategy" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "10 min read" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "August 2026" })
							]
						}),
						/* @__PURE__ */ jsx("h1", { children: "Steal Like an Artist: What Alex Hormozi’s Meta Ads Strategy Reveals About Creative Targeting" }),
						/* @__PURE__ */ jsx("p", {
							className: "hormozi-lede",
							children: "Instead of trying to guess which audience to select in the ad set, Hormozi’s creative system repeatedly tells Meta who the ad is for. Here is what that pattern can teach performance marketers about creative volume, specificity and post Andromeda advertising."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "hormozi-hero-links",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/",
								children: "Ashwin James homepage"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/services/meta-ads",
								children: "Explore Meta Ads services"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "hormozi-content",
					children: [
						/* @__PURE__ */ jsx("p", { children: "There is a useful way to study great advertising without pretending you invented it: steal the principle, not the execution." }),
						/* @__PURE__ */ jsx("p", { children: "That is the idea behind this analysis. I looked at the supplied examples of Alex Hormozi’s Meta ads and focused on the repeated creative patterns rather than trying to reproduce any individual ad." }),
						/* @__PURE__ */ jsxs("div", {
							className: "hormozi-note",
							children: [/* @__PURE__ */ jsx("strong", { children: "Source note" }), /* @__PURE__ */ jsx("p", { children: "The creative examples in this article are the screenshots supplied for this analysis. The approximate active ad count is treated as an observation from the supplied material, not as a permanently verified Meta Ad Library figure." })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "The first thing that stands out is not the hook. It is the volume." }),
						/* @__PURE__ */ jsx("p", { children: "The supplied analysis describes roughly 513 active ads across video, image and carousel formats. Whether that exact number changes from day to day is less important than the strategic signal: this is a high volume creative system." }),
						/* @__PURE__ */ jsx("p", { children: "Instead of searching for one perfect ad, the system creates many opportunities for Meta to understand different messages, formats and business contexts." }),
						/* @__PURE__ */ jsx("h2", { children: "But there is a pattern inside all that variation" }),
						/* @__PURE__ */ jsx("p", { children: "Look across the examples and one format keeps returning: the ad calls out a very specific type of business owner." }),
						/* @__PURE__ */ jsx("div", {
							className: "hormozi-callout-grid",
							children: [
								"Commercial real estate brokers doing $1M+ a year",
								"Steel fabrication owners doing $1M+ a year",
								"Chiropractic practices",
								"Business broker firms",
								"PT clinics",
								"Demolition company owners",
								"Remodeling owners",
								"Packaging manufacturers"
							].map((item) => /* @__PURE__ */ jsx("div", { children: item }, item))
						}),
						/* @__PURE__ */ jsx("p", { children: "The copy does something deceptively simple. It identifies the person before presenting the message." }),
						/* @__PURE__ */ jsx("p", { children: "That creates a strong relevance cue. A commercial real estate broker can immediately recognise that the ad is meant for someone like them. The same logic can be repeated for another vertical without forcing one generic creative to speak to everyone." }),
						/* @__PURE__ */ jsx("h2", { children: "This is where Andromeda matters" }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Meta describes Andromeda as a personalized ads retrieval engine. Retrieval is an early stage of the recommendation system that narrows tens of millions of possible ad candidates into a much smaller set of relevant candidates before later ranking stages. ",
							/* @__PURE__ */ jsx("a", {
								href: "https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Read Meta’s engineering explanation of Andromeda"
							}),
							"."
						] }),
						/* @__PURE__ */ jsx("p", { children: "That supports an important strategic shift: creative can carry more contextual information about who an ad is relevant to. It does not mean the creative literally replaces targeting, but it does make the message itself a more important signal in the system." }),
						/* @__PURE__ */ jsxs("div", {
							className: "hormozi-model",
							children: [
								/* @__PURE__ */ jsx("span", { children: "OLD MENTAL MODEL" }),
								/* @__PURE__ */ jsx("strong", { children: "Choose the audience first → make a generic ad" }),
								/* @__PURE__ */ jsx("span", { children: "CREATIVE LED MODEL" }),
								/* @__PURE__ */ jsx("strong", { children: "Build a specific message → let the system find relevant people" })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "This is the part worth stealing. Not the exact wording. Not the exact design. The principle that specificity can be built into the creative itself." }),
						/* @__PURE__ */ jsx("h2", { children: "The caveat: micro ads are not universal winners" }),
						/* @__PURE__ */ jsx("p", { children: "There is a tradeoff. If every creative speaks to a different business segment, each individual ad can become highly specific. That can be excellent for relevance, but it can also mean that you are building a collection of micro ads rather than one universal winner." }),
						/* @__PURE__ */ jsx("p", { children: "For a large account, that can be a feature. For a smaller advertiser, producing dozens of highly segmented creatives may spread the budget too thin." }),
						/* @__PURE__ */ jsxs("div", {
							className: "hormozi-two-col",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: "MICRO CREATIVE" }),
								/* @__PURE__ */ jsx("h3", { children: "Specificity" }),
								/* @__PURE__ */ jsx("p", { children: "Call out a business type, problem or identity directly. Strong for relevance and message market fit." })
							] }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: "SCALE CREATIVE" }),
								/* @__PURE__ */ jsx("h3", { children: "Breadth" }),
								/* @__PURE__ */ jsx("p", { children: "Use broader problem, agitation, solution, founder and educational formats when one creative needs to speak across a larger market." })
							] })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "That is why the strategy is hybrid" }),
						/* @__PURE__ */ jsx("p", { children: "The most interesting lesson is that Hormozi does not appear to rely on one creative formula. The supplied examples show a mix of direct callouts, founder led content, expert explainers, behind the scenes content, headlines and other variations." }),
						/* @__PURE__ */ jsx("p", { children: "The strategic role of each format can therefore be different:" }),
						/* @__PURE__ */ jsx("div", {
							className: "hormozi-roles",
							children: observations.map(([title, text]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] }, title))
						}),
						/* @__PURE__ */ jsx("h2", { children: "What I would actually steal from this strategy" }),
						/* @__PURE__ */ jsxs("ol", {
							className: "hormozi-list",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Turn the audience into the headline." }), " Instead of saying “we help businesses grow”, test “if you own a [specific business] doing [specific threshold], this is for you”."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Create creative around business identity." }), " Industry, business model, revenue stage and role can all become creative angles."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Separate micro ads from scale ads." }), " Do not expect every specific creative to become a massive spend winner."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Keep format diversity high." }), " Images, videos, carousels, founder content and explainers give the system more creative signals to work with."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Use specificity where it creates real relevance." }), " A callout should describe a genuine problem or identity, not just insert an industry name into generic copy."] })
							]
						}),
						/* @__PURE__ */ jsx("h2", { children: "The examples" }),
						/* @__PURE__ */ jsx("p", { children: "Now we can look at the creative system one ad at a time. Each example shows what the ad is doing, why the structure matters and how the message is built." }),
						/* @__PURE__ */ jsx("div", {
							className: "hormozi-creative-breakdown",
							children: hormoziAds.map((ad, index) => /* @__PURE__ */ jsxs("article", {
								className: `hormozi-creative-row ${index % 2 ? "reverse" : ""}`,
								children: [/* @__PURE__ */ jsxs("figure", {
									className: "hormozi-creative-image",
									children: [/* @__PURE__ */ jsx("img", {
										src: ad.src,
										alt: ad.alt,
										loading: "lazy",
										decoding: "async"
									}), /* @__PURE__ */ jsx("figcaption", { children: ad.caption })]
								}), /* @__PURE__ */ jsxs("div", {
									className: "hormozi-creative-analysis",
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "hormozi-creative-number",
											children: ["CREATIVE ", String(index + 1).padStart(2, "0")]
										}),
										/* @__PURE__ */ jsx("h3", { children: ad.title }),
										/* @__PURE__ */ jsx("p", { children: ad.analysis }),
										/* @__PURE__ */ jsxs("div", {
											className: "hormozi-creative-structure",
											children: [/* @__PURE__ */ jsx("span", { children: "CREATIVE STRUCTURE" }), /* @__PURE__ */ jsx("strong", { children: ad.structure })]
										})
									]
								})]
							}, ad.src))
						}),
						/* @__PURE__ */ jsx("h2", { children: "The bigger lesson for performance marketers" }),
						/* @__PURE__ */ jsx("p", { children: "The lesson is not “copy Alex Hormozi”. The lesson is to stop thinking about creative as decoration placed on top of targeting." }),
						/* @__PURE__ */ jsx("p", { children: "In a more automated Meta ads environment, creative can communicate the audience, problem, offer and context at the same time. That gives the recommendation system richer information to work with while giving the user a message that feels immediately relevant." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Meta’s own description of Andromeda emphasises the scale of creative candidates and the role of AI in retrieving relevant ads. ",
							/* @__PURE__ */ jsx("a", {
								href: "https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Meta Engineering explains the retrieval system here"
							}),
							"."
						] }),
						/* @__PURE__ */ jsx("p", { children: "For advertisers, that points toward a different testing question:" }),
						/* @__PURE__ */ jsx("blockquote", { children: "What different versions of the market can my creative clearly describe?" }),
						/* @__PURE__ */ jsx("p", { children: "That is a much more interesting question than simply asking which interest targeting option to select." }),
						/* @__PURE__ */ jsx("h2", { children: "Frequently asked questions" }),
						/* @__PURE__ */ jsx("div", {
							className: "hormozi-faq",
							children: faq.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q))
						}),
						/* @__PURE__ */ jsxs("section", {
							className: "hormozi-cta",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "hormozi-eyebrow",
									children: "Want to apply this to your account?"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Get a Meta Ads creative and tracking audit." }),
								/* @__PURE__ */ jsx("p", { children: "I can review your creative structure, audience signals and measurement setup and identify the highest priority opportunities." }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									rel: "nofollow",
									children: "Request an audit"
								}), /* @__PURE__ */ jsx(Link, {
									to: "/resources/meta-ads-launch-checklist",
									rel: "nofollow",
									children: "Get the Meta Ads checklist"
								})] })
							]
						}),
						/* @__PURE__ */ jsxs("footer", {
							className: "hormozi-sources",
							children: [
								/* @__PURE__ */ jsx("p", { children: "Further reading" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Meta Engineering: Andromeda and personalized ads retrieval"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://en.wikipedia.org/wiki/Alex_Hormozi",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Wikipedia: Alex Hormozi"
								})
							]
						})
					]
				})]
			})
		]
	});
}
export { HormoziMetaAdsStrategy as default };
