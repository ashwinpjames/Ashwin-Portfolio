import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/LeadQualityBenchmarksBlog.jsx
var funnel = [
	[
		"Website visitor → Lead",
		"2.3%",
		"23%"
	],
	[
		"Lead → Marketing qualified lead",
		"31%",
		"31%"
	],
	[
		"MQL → Sales qualified lead",
		"9.8%",
		"9.8%"
	],
	[
		"SQL → Opportunity (top performers)",
		"59%",
		"59%"
	]
];
var volumeVsFit = {
	volume: [
		"More top of funnel spend as the default fix for a slow quarter",
		"Cost per lead keeps climbing industry wide as channels get more competitive",
		"Close to half of what lands in the CRM gets waved off by sales",
		"Leads sit for hours before anyone reaches out"
	],
	fit: [
		"Pre qualification criteria set before the campaign launches, not after",
		"Negative scoring filters out bad fit signups instead of just adding points for good ones",
		"A same hour follow up standard, since contact speed is one of the strongest predictors of qualification",
		"A shared marketing and sales definition of qualified, reviewed on a set cadence"
	]
};
var framework = [
	[
		"01",
		"Define fit before volume",
		"Write the ideal customer profile and a negative scoring list such as competitor employees, wrong company size and no reply domains before the next campaign, not after the leads arrive."
	],
	[
		"02",
		"Score intent, not just form fills",
		"A form submission and genuine buying intent are not the same signal. Weight behavior such as repeat visits, pricing page views and content depth alongside the fact that a form was filled out at all."
	],
	[
		"03",
		"Route and contact within the hour",
		"Leads contacted within the first hour are several times more likely to qualify than leads left until the next day. Speed to lead is one of the cheapest fixes available and one of the most neglected."
	],
	[
		"04",
		"Put a service agreement between marketing and sales",
		"Agree on what qualified means in writing, and revisit it quarterly. Teams that document this consistently report stronger alignment and better downstream numbers than teams that leave it informal."
	],
	[
		"05",
		"Put SQL rate and pipeline velocity on the same dashboard as lead count",
		"If leads generated is the only number leadership sees, it will keep getting optimised in isolation. Report it next to the number that actually indicates revenue is coming."
	]
];
var caveats = [
	"The product is pre product market fit and the ICP itself is still being tested. You need enough signal to find the pattern before you can score against it.",
	"The business is entering a genuinely new market or segment with no historical conversion data to build a scoring model from.",
	"Sales capacity is currently under utilised and any additional qualified signal would be immediately actioned, not queued."
];
var sources = [
	["Visitor to lead, lead to MQL funnel benchmarks", "Aggregated B2B funnel benchmark data, 2026 lead quality statistics compilation"],
	["MQL to SQL decline, 13% → 9.8%", "Forrester / Demand Gen Report data, cited in 2026 lead generation benchmarks"],
	["SQL to opportunity top performer rate", "SalesSo 2025 benchmark data"],
	["Sales ignoring 48% of marketing leads", "Email Vendor Selection, cited in 2026 lead generation statistics"],
	["Cost per lead dispersion, 4.7x", "HubSpot State of Marketing 2026"],
	["Marketing and sales SLA revenue impact", "HubSpot research, cited in 2025 MQL quality analysis"],
	["Sales and marketing alignment and conversion lift", "Martal Group 2025 B2B digital marketing ROI benchmarks"],
	["Speed to lead qualification impact", "InsideSales / Velocify benchmark replication, 2026"]
];
function LeadQualityBenchmarksBlog() {
	return /* @__PURE__ */ jsxs("main", {
		className: "lead-quality-blog-page",
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "More leads walked in. Revenue didn't move.",
				description: "A look at 2026 funnel benchmarks and why lead quality can matter more than lead volume.",
				author: {
					"@type": "Person",
					name: "Ashwin James"
				},
				mainEntityOfPage: "https://ashwinjames.com/blog/more-leads-revenue-didnt-move"
			})
		}), /* @__PURE__ */ jsxs("article", {
			className: "lead-quality-blog-shell",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "lead-quality-blog-hero",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lead-quality-blog-eyebrow-row",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/blog",
							children: "← Blog"
						}), /* @__PURE__ */ jsx("span", { children: "Growth Strategy · Demand Gen" })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "lead-quality-blog-meta",
						children: "Funnel Benchmarks & CAC Data · 2026"
					}),
					/* @__PURE__ */ jsxs("h1", { children: [
						"More leads walked in.",
						/* @__PURE__ */ jsx("br", {}),
						"Revenue didn't ",
						/* @__PURE__ */ jsx("span", { children: "move" }),
						"."
					] }),
					/* @__PURE__ */ jsx("p", {
						className: "lead-quality-blog-lede",
						children: "Most B2B funnels leak more than 90% of leads before they ever reach a real sales conversation. When pipeline stalls, the instinct is to widen the top of the funnel. The 2026 data says the actual lever is almost never volume."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "lead-quality-blog-tags",
						children: [
							"Lead Quality",
							"MQL / SQL",
							"Pipeline Velocity",
							"CAC"
						].map((tag) => /* @__PURE__ */ jsx("span", { children: tag }, tag))
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lead-quality-blog-content",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lead-quality-callout lead-quality-stat-callout",
						children: [/* @__PURE__ */ jsx("strong", { children: "9.8%" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "MQL to SQL conversion rate in 2026, down from 13% just two years ago, a 24% decline industry wide." }), /* @__PURE__ */ jsx("p", { children: "Marketing is still generating leads at roughly the same pace. Sales is rejecting more of them than ever." })] })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "lead-quality-stat-grid",
						children: [
							["2.3%", "of website visitors become a lead in the average B2B funnel"],
							["31%", "of leads get promoted to marketing qualified status"],
							["48%", "of marketing sourced leads sales ignores outright"],
							["4.7x", "gap in cost per lead between top and bottom quartile teams"]
						].map(([number, label]) => /* @__PURE__ */ jsxs("div", {
							className: "lead-quality-stat",
							children: [/* @__PURE__ */ jsx("strong", { children: number }), /* @__PURE__ */ jsx("span", { children: label })]
						}, number))
					}),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-section-tag",
							children: "01 · The Metric"
						}),
						/* @__PURE__ */ jsx("h2", { children: "The number that flatters the dashboard, and the number that pays the bills" }),
						/* @__PURE__ */ jsx("p", { children: "\"Leads generated\" is the easiest growth metric to report because it almost always trends upward as long as budget keeps flowing. It says nothing, though, about whether the person filling out the form was ever going to buy. A rising lead count and a stalling pipeline can, and increasingly do, sit on the same slide." }),
						/* @__PURE__ */ jsx("p", { children: "The disconnect shows up downstream. Sales teams now dismiss close to half of what marketing hands over as a poor fit, and even among the leads that do get accepted, only a small fraction receive proper, timely follow up. Volume and revenue have quietly come apart." })
					] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-section-tag",
							children: "02 · Where It Leaks"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Each funnel stage converts a smaller share of what came before it" }),
						/* @__PURE__ */ jsx("div", {
							className: "lead-quality-funnel",
							children: funnel.map(([label, pct, width]) => /* @__PURE__ */ jsxs("div", {
								className: "lead-quality-funnel-row",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: label }), /* @__PURE__ */ jsx("strong", { children: pct })] }), /* @__PURE__ */ jsx("div", {
									className: "lead-quality-funnel-track",
									children: /* @__PURE__ */ jsx("i", { style: { width } })
								})]
							}, label))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-caption",
							children: "Stage over stage conversion rate at each step of the funnel, based on aggregated 2026 B2B benchmark data. Each bar shows what share of the previous stage advances, not a share of total visitors."
						})
					] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-section-tag",
							children: "03 · Key Finding"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Chasing volume and chasing fit produce two different businesses" }),
						/* @__PURE__ */ jsxs("div", {
							className: "lead-quality-vs",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "lead-quality-vs-box lead-quality-volume",
									children: [/* @__PURE__ */ jsx("h3", { children: "Chasing Volume" }), /* @__PURE__ */ jsx("ul", { children: volumeVsFit.volume.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "lead-quality-vs-divider",
									children: "VS"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "lead-quality-vs-box lead-quality-fit",
									children: [/* @__PURE__ */ jsx("h3", { children: "Chasing Fit" }), /* @__PURE__ */ jsx("ul", { children: volumeVsFit.fit.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })]
								})
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "The obvious fix for a stalling pipeline is \"get more leads.\" The data points somewhere else almost every time: teams with a documented sales and marketing service agreement report meaningfully higher revenue, and full alignment between the two functions is tied to a real lift in conversion rate and a shorter sales cycle. Fit and speed move the needle that volume can't." })
					] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-section-tag",
							children: "04 · The Framework"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Shifting the target without starving the pipeline" }),
						/* @__PURE__ */ jsx("div", {
							className: "lead-quality-steps",
							children: framework.map(([number, title, body]) => /* @__PURE__ */ jsxs("div", {
								className: "lead-quality-step",
								children: [/* @__PURE__ */ jsx("strong", { children: number }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: body })] })]
							}, number))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lead-quality-reframe",
							children: "Move the scoreboard from \"leads generated\" to \"qualified conversations reached\". The first number can go up every month without the business getting any healthier."
						})
					] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-section-tag",
							children: "05 · Where This Doesn't Apply"
						}),
						/* @__PURE__ */ jsx("h2", { children: "More leads is still the right call in a few specific situations" }),
						/* @__PURE__ */ jsxs("div", {
							className: "lead-quality-caveat",
							children: [
								/* @__PURE__ */ jsx("p", { children: "This isn't an argument for scarcity for its own sake. A smaller lead count that's mismatched to sales capacity wastes resources in the opposite direction. Volume is still the right short term target when:" }),
								/* @__PURE__ */ jsx("ul", { children: caveats.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) }),
								/* @__PURE__ */ jsx("p", { children: "Even in these cases, the goal is to graduate off pure volume once there's enough data to define fit, not to keep it as the permanent target." })
							]
						})
					] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-section-tag",
							children: "06 · Sources"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Where the numbers come from" }),
						/* @__PURE__ */ jsx("div", {
							className: "lead-quality-sources",
							children: sources.map(([metric, source]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: metric }), /* @__PURE__ */ jsx("span", { children: source })] }, metric))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "lead-quality-source-note",
							children: "Figures are aggregated industry benchmarks compiled from multiple third party research reports, not results from a specific client engagement. Presented here to make the general argument, not as a claim about any one company's numbers."
						})
					] }),
					/* @__PURE__ */ jsxs("section", {
						className: "lead-quality-cta",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lead-quality-section-tag",
								children: "Want better lead economics?"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Let's look beyond CPL and find where the funnel is actually leaking." }),
							/* @__PURE__ */ jsx("p", { children: "Use the contact page to start a conversation about acquisition, lead quality and downstream conversion." }),
							/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: "Start a conversation ↗"
							})
						]
					})
				]
			})]
		})]
	});
}
export { LeadQualityBenchmarksBlog as default };
