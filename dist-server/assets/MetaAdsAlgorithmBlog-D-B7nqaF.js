import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/MetaAdsAlgorithmBlog.jsx
var faq = [
	["Does Meta always show the ad with the highest bid?", "No. The impression goes to the ad with the highest Total Value, which combines bid, estimated action rate and ad quality."],
	["How long does the whole process take?", "About 200 milliseconds from retrieval through ranking and auction, according to the source article."],
	["What is Andromeda in Meta ads?", "Andromeda is described in the article as a retrieval stage system that uses ad creative as a targeting input."],
	["Is the Total Value formula public?", "Meta has confirmed the key inputs, but the source article notes that there is no single fixed arithmetic formula published."]
];
var steps = [
	[
		"01",
		"Retrieval",
		"Meta narrows the eligible pool using relevance signals, including creative content.",
		"Millions → thousands"
	],
	[
		"02",
		"Light ranking",
		"A fast model reduces the pool using simplified signals.",
		"Thousands → hundreds"
	],
	[
		"03",
		"Heavy ranking",
		"A deeper model predicts the likelihood of the desired action for the user and ad pairing.",
		"Hundreds → finalists"
	],
	[
		"04",
		"The auction",
		"Finalists compete using Total Value, combining bid, estimated action rate and ad quality.",
		"One winner"
	]
];
var diagnostics = [
	["Quality Ranking", "How perceived ad quality compares with competing ads."],
	["Engagement Rate Ranking", "Expected engagement rate compared with competing ads."],
	["Conversion Rate Ranking", "Expected conversion rate compared with ads optimising for the same action."]
];
var takeaways = [
	["Stop over engineering targeting.", "Give the system clear, specific creative and audience signals."],
	["Creative diversity beats minor variations.", "Distinct concepts give the system different signals to learn from."],
	["Do not chase the bid when quality tanks.", "Weak diagnostics usually point toward a creative or relevance problem."],
	["Protect the user experience.", "Strong hooks still need a credible landing page and offer."],
	["Give campaigns enough time to learn.", "Early performance can be noisy before useful patterns emerge."]
];
function MetaAdsAlgorithmBlog() {
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "How Meta's Ad Algorithm Actually Works in 2026",
		description: "A structured breakdown of Meta Ads retrieval, ranking and auction mechanics for performance marketers.",
		author: {
			"@type": "Person",
			name: "Ashwin James"
		},
		mainEntityOfPage: "https://ashwinjames.com/blog/how-meta-ads-algorithm-works"
	};
	const faqSchema = {
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
	return /* @__PURE__ */ jsxs("main", {
		className: "algorithm-blog-page",
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
				className: "algorithm-blog-shell",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "algorithm-blog-hero",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/blog",
							className: "algorithm-blog-back",
							children: "← Back to all blogs"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "algorithm-blog-eyebrow",
							children: "META ADS · HOW IT WORKS"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "algorithm-blog-meta",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Performance Marketing" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "9 min read" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "Updated 2026" })
							]
						}),
						/* @__PURE__ */ jsx("h1", { children: "How Meta's Ad Algorithm Actually Works in 2026" }),
						/* @__PURE__ */ jsx("p", {
							className: "algorithm-blog-lede",
							children: "Every time someone opens Instagram or Facebook, millions of ads compete for one impression. Here is the four step process behind how Meta narrows that field, ranks candidates and selects a winner."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "algorithm-blog-content",
					children: [
						/* @__PURE__ */ jsx("p", { children: "If you run Meta ads, you have probably felt it: two campaigns with near identical budgets and audiences can produce wildly different costs. One scales smoothly. The other burns budget and barely delivers." }),
						/* @__PURE__ */ jsx("p", { children: "This article breaks down the mechanics of retrieval, ranking and the auction, then translates each stage into practical decisions for advertisers." }),
						/* @__PURE__ */ jsx("h2", { children: "The short version: four steps, one impression, 200 milliseconds" }),
						/* @__PURE__ */ jsx("p", { children: "Every time someone opens Instagram or Facebook, Meta runs a four step process to decide which ad, if any, reaches that person." }),
						/* @__PURE__ */ jsx("div", {
							className: "algorithm-pipeline",
							children: steps.map(([number, title, description, count]) => /* @__PURE__ */ jsxs("div", {
								className: "algorithm-step",
								children: [
									/* @__PURE__ */ jsx("span", { children: number }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: description })] }),
									/* @__PURE__ */ jsx("strong", { children: count })
								]
							}, number))
						}),
						/* @__PURE__ */ jsx("p", { children: "The sequence runs continuously as people use the platform. The important point is that the auction is only the final stage. Creative and relevance affect which ads make it through the earlier stages." }),
						/* @__PURE__ */ jsx("h2", { children: "Step 1: Retrieval — your creative is your targeting" }),
						/* @__PURE__ */ jsx("p", { children: "Retrieval asks which active ads are plausibly relevant to a specific person. The source describes Andromeda as a retrieval stage system that reads the ad itself, including the hook, format, talent, copy and landing page." }),
						/* @__PURE__ */ jsxs("div", {
							className: "algorithm-callout",
							children: [/* @__PURE__ */ jsx("strong", { children: "Why this matters" }), /* @__PURE__ */ jsx("p", { children: "If the creative is vague, the system has less clarity about who the ad is for and what demand it should match. Clear positioning and specific creative therefore become important inputs before the auction even happens." })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "Step 2 and 3: Ranking — from thousands to the real competition" }),
						/* @__PURE__ */ jsx("p", { children: "Light ranking applies a fast scoring model across a large candidate pool. Heavy ranking then applies a deeper model to the survivors, predicting how likely the specific user is to take the action the campaign is optimising for." }),
						/* @__PURE__ */ jsxs("div", {
							className: "algorithm-two-col",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: "LIGHT RANKING" }),
								/* @__PURE__ */ jsx("h3", { children: "Fast filtering" }),
								/* @__PURE__ */ jsx("p", { children: "Efficient enough to run across a large pool without the cost of deep scoring for every candidate." })
							] }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: "HEAVY RANKING" }),
								/* @__PURE__ */ jsx("h3", { children: "Precise prediction" }),
								/* @__PURE__ */ jsx("p", { children: "More detailed modelling narrows the field to genuine finalists for the auction." })
							] })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "Step 4: The auction — why the highest bid does not automatically win" }),
						/* @__PURE__ */ jsx("p", { children: "Meta does not simply award the impression to the advertiser willing to pay the most. The article describes Total Value as a combination of three inputs." }),
						/* @__PURE__ */ jsxs("div", {
							className: "algorithm-formula",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Bid" }), /* @__PURE__ */ jsx("span", { children: "What you are willing to pay" })] }),
								/* @__PURE__ */ jsx("b", { children: "×" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Estimated Action Rate" }), /* @__PURE__ */ jsx("span", { children: "Likelihood of the desired action" })] }),
								/* @__PURE__ */ jsx("b", { children: "+" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Ad Quality" }), /* @__PURE__ */ jsx("span", { children: "Relevance and user experience" })] })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "algorithm-note",
							children: "The source article explicitly notes that Meta has not published one fixed arithmetic equation with fixed coefficients. Treat this as a directional model rather than a formula to reverse engineer."
						}),
						/* @__PURE__ */ jsx("h3", { children: "The three diagnostics you can actually see" }),
						/* @__PURE__ */ jsx("div", {
							className: "algorithm-diagnostics",
							children: diagnostics.map(([title, description]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: description })] }, title))
						}),
						/* @__PURE__ */ jsx("h2", { children: "What this means for how you run Meta ads" }),
						/* @__PURE__ */ jsxs("div", {
							className: "algorithm-takeaways",
							children: [/* @__PURE__ */ jsx("h3", { children: "Practical takeaways" }), /* @__PURE__ */ jsx("ul", { children: takeaways.map(([title, description]) => /* @__PURE__ */ jsxs("li", { children: [
								/* @__PURE__ */ jsx("strong", { children: title }),
								" ",
								description
							] }, title)) })]
						}),
						/* @__PURE__ */ jsx("h2", { children: "Frequently asked questions" }),
						/* @__PURE__ */ jsx("div", {
							className: "algorithm-faq",
							children: faq.map(([question, answer]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [question, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: answer })] }, question))
						}),
						/* @__PURE__ */ jsxs("section", {
							className: "algorithm-cta",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "algorithm-blog-eyebrow",
									children: "Want a stronger Meta Ads system?"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Get a practical Meta Ads audit focused on creative, signals and conversion quality." }),
								/* @__PURE__ */ jsx("p", { children: "I can review your current setup and identify the highest priority areas to improve." }),
								/* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Request a Meta Ads audit ↗"
								})
							]
						})
					]
				})]
			})
		]
	});
}
export { MetaAdsAlgorithmBlog as default };
