import { Link } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/content/cpm-explained.md?raw
var cpm_explained_default = "# CPM Explained: What It Really Measures (And What It Doesn't)\r\n\r\nOpen any ads dashboard — Meta, Google, LinkedIn, doesn't matter which — and CPM is right there at the top, next to spend and clicks. Because it's so visible, it's tempting to treat it as a quick verdict on how a campaign is doing: CPM went up, something's wrong; CPM went down, things are improving.\r\n\r\nThat instinct is understandable, but it's not accurate. CPM is a **reach cost metric** — it tells you what you paid to get in front of people, not what happened once you did. Reading it as a performance score, on its own, will lead you to the wrong conclusions more often than the right ones.\r\n\r\nThis article covers what CPM actually measures, why it moves up and down, what high and low CPM can (and can't) tell you, and how to read it alongside the metrics that actually reflect performance — CTR, conversion rate, and CPA.\r\n\r\n## What CPM Is\r\n\r\nCPM stands for **cost per mille** — \"mille\" being Latin for thousand. It's the cost of 1,000 ad impressions.\r\n\r\n**Formula:**\r\n\r\n`CPM = (Total Spend ÷ Impressions) × 1,000`\r\n\r\n**Worked example (hypothetical):**\r\nIf a campaign spends $500 and generates 250,000 impressions:\r\n\r\n`(500 ÷ 250,000) × 1,000 = $2.00 CPM`\r\n\r\nThat's it — CPM is a unit price for exposure. It doesn't factor in whether anyone clicked, engaged, or converted. It's purely: *how much did it cost to be seen 1,000 times?*\r\n\r\nThis is an established, platform agnostic calculation — Google Ads, Meta Ads, and LinkedIn Ads all define CPM this way, since it's a standard media buying metric that predates digital advertising.\r\n\r\n## Why CPM Matters\r\n\r\nCPM is useful because it reflects the **cost of reach** — and reach is the foundation everything else in a campaign is built on. Specifically, CPM reflects:\r\n\r\n* **Auction competitiveness** — how many other advertisers are bidding for the same audience and inventory\r\n* **Budget efficiency at the impression level** — how far your media budget stretches before anyone even has a chance to act\r\n* **Differences across platforms, placements, and formats** — a LinkedIn feed impression and a Meta Stories impression are not priced the same way, because the audiences, inventory, and demand dynamics differ\r\n\r\nThe key distinction to hold onto: **CPM tells you the cost of exposure. It does not tell you what that exposure produced.** Two campaigns can have identical CPMs and wildly different outcomes, because CPM stops measuring the moment the ad is served — everything downstream (a click, a lead, a sale) is a separate metric.\r\n\r\n## What Drives CPM Up or Down\r\n\r\nCPM isn't a fixed number — it moves in response to several factors, most of which are outside the ad itself:\r\n\r\n* **Audience size and narrowness.** Smaller, more specific audiences generally mean less available inventory, which tends to push CPM up. This is general auction logic rather than a hard rule for every case.\r\n* **Auction competition.** More advertisers bidding for the same audience and placements increases pressure on price — this is the core mechanic behind how ad auctions work on Google Ads, Meta Ads, and LinkedIn Ads.\r\n* **Seasonality and event driven demand.** Periods with heavier advertiser demand, such as major shopping seasons, are widely observed to push CPMs higher across the industry, as more advertisers compete for the same finite inventory. Exact seasonal patterns vary by market and vertical, so treat this as a general pattern rather than a fixed benchmark.\r\n* **Platform and placement differences.** A feed placement, a search placement, and a video placement each draw different demand and inventory levels, so CPMs are not directly comparable across them.\r\n* **Format differences.** Video, carousel, and static image formats can carry different demand and delivery dynamics.\r\n* **Geography and device.** Costs vary by market and, in some cases, by device. The specific magnitude varies by campaign and should be checked in your own account.\r\n\r\nThe important framing: **a change in CPM is not automatically good or bad.** It's a signal that something changed in the auction or audience conditions — the next step is figuring out what, and whether it matters for your goal.\r\n\r\n## High CPM: What It Can Mean\r\n\r\nA rising or elevated CPM often points to:\r\n\r\n* A **narrow or highly specific audience** with less available inventory\r\n* **Premium placements or formats** that carry higher demand\r\n* **Seasonal or event driven demand spikes** where more advertisers are competing for the same audience\r\n\r\nWhat high CPM does **not** automatically mean:\r\n\r\n* Bad creative\r\n* Poor campaign performance\r\n* Inefficient spend\r\n\r\n**Hypothetical example:** Imagine a B2B software company targeting \"VP of Engineering\" job titles at companies with 500+ employees on LinkedIn Ads. That audience is small and in demand — CPM might run several times higher than a broad consumer campaign. But if that narrow audience converts into a small number of high value sales calls, the higher reach cost may be entirely justified by what happens downstream. Judging this campaign as \"expensive\" based on CPM alone, without looking at conversion rate and deal value, would miss the point.\r\n\r\n## Low CPM: What It Can Mean\r\n\r\nA low CPM can indicate:\r\n\r\n* **Broad reach with less auction competition**\r\n* **Off peak timing**, when fewer advertisers are bidding\r\n* **Lower cost placements** with more available inventory\r\n* **Weaker relevance or engagement signals**, which on some platforms can affect how competitively an ad is priced and delivered\r\n\r\nThe trap here: **low CPM can look efficient while actually reaching the wrong audience.** Cheap impressions are only valuable if the people seeing them are the people you want to reach.\r\n\r\n**Hypothetical example:** Imagine an ecommerce brand running a broad, untargeted Meta Ads campaign that achieves a CPM of $3 — noticeably lower than the brand's usual $8. On the surface, that looks like a win. But if CTR drops from 1.5% to 0.4% and conversion rate falls from 3% to 0.5%, the campaign is reaching a much less relevant audience. The impressions are cheap, but they're not doing anything — which usually shows up later as a worse CPA, not a better one.\r\n\r\n## How to Manage or Improve CPM\r\n\r\nNone of these are guarantees — think of them as testing hypotheses, not fixes:\r\n\r\n* **Reassess audience size and specificity.** If CPM is high because an audience is very narrow, decide whether broadening slightly is an acceptable trade off for your goal.\r\n* **Improve relevance and engagement signals.** Ads that generate stronger engagement can, on some platforms, be delivered more competitively. The specific mechanics and impact vary and are worth checking against current platform documentation.\r\n* **Shift spend away from highly competitive periods**, if your timeline allows flexibility.\r\n* **Diversify placements** rather than concentrating budget in the most competitive inventory.\r\n* **Test format mix** — video, static, carousel — to see whether one performs more efficiently for your specific audience.\r\n* **Review geo and device splits** to identify whether cost is concentrated in a particular segment.\r\n\r\nTest these individually where possible, so you can attribute changes in CPM or downstream performance to a specific lever rather than several changes at once.\r\n\r\n## How to Read CPM Correctly\r\n\r\nThis is the part that actually matters most:\r\n\r\n* **Always read CPM alongside CTR and conversion rate.** CPM tells you the cost of exposure; CTR tells you whether that exposure resonated; conversion rate tells you whether it led anywhere.\r\n* **For outcome based campaigns, CPA or cost per result is the metric that matters most.** CPM is an input into CPA, not a substitute for it.\r\n* **Only compare CPM within similar contexts** — same platform, similar placements, similar audience type, similar time period. Comparing Meta Ads CPM to LinkedIn Ads CPM, or a holiday season CPM to an off peak CPM, without adjusting for context will mislead you.\r\n* **There is no universal \"good CPM.\"** Benchmarks you find online are averages across very different accounts, industries, and objectives — treat them as loose orientation, not a target.\r\n\r\nThe most reliable benchmark is your **own historical data** on comparable campaigns — same platform, similar audience, similar objective. That comparison tells you far more than any external number.\r\n\r\n## Final Takeaway\r\n\r\nCPM measures the cost of reach — nothing more, nothing less. Low CPM isn't automatically good, and high CPM isn't automatically bad. The real question is always the same: **is the cost of that reach justified by what happens after the impression is served?**\r\n\r\nAnswer that by looking at CPM together with CTR, conversion rate, and CPA — not in isolation.\r\n\r\n## FAQ\r\n\r\n**What is a good CPM?**\r\nThere's no universal number — CPM varies widely by platform, placement, audience, industry, and time of year. The most useful benchmark is your own account's historical CPM for comparable campaigns, not an external average.\r\n\r\n**Is a lower CPM always better?**\r\nNo. A lower CPM only helps if the audience it reaches is still relevant to your goal. If CTR and conversion rate drop along with CPM, the cheaper reach may be reaching the wrong people.\r\n\r\n**Why did my CPM suddenly increase?**\r\nCommon causes include increased auction competition, seasonal demand, a narrower audience, a shift to a more premium placement or format, or reduced relevance and engagement signals. Check what changed in your targeting, timing, or creative before assuming something is broken.\r\n\r\n**Is CPM more important than CPC or CPA?**\r\nNo — CPM, CPC, and CPA measure different stages of the funnel. CPM covers reach cost, CPC covers cost per click, and CPA covers cost per outcome. For most performance goals, CPA is the more important metric; CPM is useful context, not the end goal.\r\n\r\n**Does CPM matter for conversion focused campaigns?**\r\nYes, but as context rather than a primary success metric. It helps explain why a CPA moved, such as rising reach costs, but shouldn't be the metric you optimize toward directly in a conversion campaign.\r\n";
// src/pages/CPMExplainedBlog.jsx
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: "CPM Explained: What It Really Measures (And What It Doesn't)",
	description: "CPM shows up in every ads dashboard, but it's often misread. Here's what CPM actually measures, why it moves, and how to use it correctly.",
	author: {
		"@type": "Person",
		name: "Ashwin James",
		url: "https://ashwinjames.com/"
	},
	publisher: {
		"@type": "Person",
		name: "Ashwin James"
	},
	datePublished: "2026-08-31",
	dateModified: "2026-08-31",
	mainEntityOfPage: "https://ashwinjames.com/blog/cpm-explained"
};
var faq = [
	["What is a good CPM?", "There's no universal number — CPM varies widely by platform, placement, audience, industry, and time of year. The most useful benchmark is your own account's historical CPM for comparable campaigns, not an external average."],
	["Is a lower CPM always better?", "No. A lower CPM only helps if the audience it reaches is still relevant to your goal. If CTR and conversion rate drop along with CPM, the cheaper reach may be reaching the wrong people."],
	["Why did my CPM suddenly increase?", "Common causes include increased auction competition, seasonal demand, a narrower audience, a shift to a more premium placement or format, or reduced relevance and engagement signals. Check what changed in your targeting, timing, or creative before assuming something is broken."],
	["Is CPM more important than CPC or CPA?", "No — CPM, CPC, and CPA measure different stages of the funnel. CPM covers reach cost, CPC covers cost per click, and CPA covers cost per outcome. For most performance goals, CPA is the more important metric; CPM is useful context, not the end goal."],
	["Does CPM matter for conversion focused campaigns?", "Yes, but as context rather than a primary success metric. It helps explain why a CPA moved, such as rising reach costs, but shouldn't be the metric you optimize toward directly in a conversion campaign."]
];
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
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
}
function inlineMarkdown(value) {
	let output = escapeHtml(value);
	output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
	output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
	output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
	output = output.replace(/\bcost per mille\b/gi, "<a href=\"https://en.wikipedia.org/wiki/Cost_per_mille\" target=\"_blank\" rel=\"noreferrer\">$&</a>");
	output = output.replace(/\bimpressions\b/gi, "<a href=\"https://en.wikipedia.org/wiki/Cost_per_impression\" target=\"_blank\" rel=\"noreferrer\">$&</a>");
	output = output.replace(/\bclick-through rate\b/gi, "<a href=\"https://en.wikipedia.org/wiki/Click-through_rate\" target=\"_blank\" rel=\"noreferrer\">$&</a>");
	return output;
}
function renderMarkdown(markdown) {
	const lines = markdown.trim().split("\n");
	const html = [];
	let i = 0;
	while (i < lines.length) {
		const line = lines[i];
		if (!line.trim()) {
			i += 1;
			continue;
		}
		const heading = line.match(/^(#{1,3})\s+(.+)$/);
		if (heading) {
			const level = heading[1].length;
			html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
			i += 1;
			continue;
		}
		if (/^\d+\.\s+/.test(line) || /^[-*]\s+/.test(line)) {
			const ordered = /^\d+\.\s+/.test(line);
			const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
			const items = [];
			while (i < lines.length && pattern.test(lines[i])) {
				items.push(`<li>${inlineMarkdown(lines[i].replace(pattern, ""))}</li>`);
				i += 1;
			}
			html.push(`<${ordered ? "ol" : "ul"}>${items.join("")}</${ordered ? "ol" : "ul"}>`);
			continue;
		}
		if (/^`[^`]+`$/.test(line.trim())) {
			html.push(`<p class="cpm-code-line">${inlineMarkdown(line.trim())}</p>`);
			i += 1;
			continue;
		}
		const paragraph = [];
		while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i])) {
			paragraph.push(lines[i]);
			i += 1;
		}
		html.push(`<p>${paragraph.map(inlineMarkdown).join("<br />")}</p>`);
	}
	return html.join("");
}
var visuals = [
	{
		label: "01 · FORMULA",
		title: "CPM = Spend ÷ Impressions × 1,000",
		body: "$500 ÷ 250,000 impressions × 1,000 = $2 CPM",
		type: "formula"
	},
	{
		label: "02 · FUNNEL",
		title: "Reach → Interest → Click → Outcome",
		body: "CPM measures the cost of exposure before the next action happens.",
		type: "funnel"
	},
	{
		label: "03 · DIAGNOSIS",
		title: "Low CPM does not guarantee efficiency",
		body: "Cheap impressions can still come from the wrong audience.",
		type: "diagnosis"
	},
	{
		label: "04 · OPTIMISE",
		title: "Cost of reach needs context",
		body: "Judge CPM alongside CTR, conversion rate and CPA.",
		type: "outcome"
	}
];
function VisualCard({ item }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `cpm-visual cpm-visual-${item.type}`,
		children: [
			/* @__PURE__ */ jsx("span", { children: item.label }),
			/* @__PURE__ */ jsx("strong", { children: item.title }),
			/* @__PURE__ */ jsxs("div", {
				className: "cpm-visual-art",
				"aria-hidden": "true",
				children: [
					item.type === "formula" && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("b", { children: "SPEND" }),
						/* @__PURE__ */ jsx("i", { children: "÷" }),
						/* @__PURE__ */ jsx("b", { children: "IMPRESSIONS" }),
						/* @__PURE__ */ jsx("i", { children: "×" }),
						/* @__PURE__ */ jsx("b", { children: "1,000" })
					] }),
					item.type === "funnel" && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("b", { children: "REACH" }),
						/* @__PURE__ */ jsx("i", { children: "→" }),
						/* @__PURE__ */ jsx("b", { children: "INTEREST" }),
						/* @__PURE__ */ jsx("i", { children: "→" }),
						/* @__PURE__ */ jsx("b", { children: "CLICK" }),
						/* @__PURE__ */ jsx("i", { children: "→" }),
						/* @__PURE__ */ jsx("b", { children: "OUTCOME" })
					] }),
					item.type === "diagnosis" && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("b", { children: "LOW CPM" }),
						/* @__PURE__ */ jsx("i", { children: "≠" }),
						/* @__PURE__ */ jsx("b", { children: "WIN" })
					] }),
					item.type === "outcome" && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("b", { children: "CPM" }),
						/* @__PURE__ */ jsx("i", { children: "+" }),
						/* @__PURE__ */ jsx("b", { children: "CTR" }),
						/* @__PURE__ */ jsx("i", { children: "+" }),
						/* @__PURE__ */ jsx("b", { children: "CVR" }),
						/* @__PURE__ */ jsx("i", { children: "+" }),
						/* @__PURE__ */ jsx("b", { children: "CPA" })
					] })
				]
			}),
			/* @__PURE__ */ jsx("p", { children: item.body })
		]
	});
}
function FAQSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "cpm-faq",
		"aria-labelledby": "cpm-faq-heading",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "cpm-faq-heading",
			children: [
				/* @__PURE__ */ jsx("span", { children: "FAQ" }),
				/* @__PURE__ */ jsx("h2", {
					id: "cpm-faq-heading",
					children: "Frequently asked questions"
				}),
				/* @__PURE__ */ jsx("p", { children: "Quick answers to the questions marketers ask most often about CPM." })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "cpm-faq-list",
			children: faq.map(([question, answer]) => /* @__PURE__ */ jsxs("details", {
				className: "cpm-faq-item",
				children: [/* @__PURE__ */ jsxs("summary", { children: [question, /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					children: "+"
				})] }), /* @__PURE__ */ jsx("div", {
					className: "cpm-faq-answer",
					children: /* @__PURE__ */ jsx("p", { children: answer })
				})]
			}, question))
		})]
	});
}
function CPMExplainedBlog() {
	const renderedArticle = renderMarkdown(cpm_explained_default.replace(/^# .+\n\n/, "").replace(/\n## FAQ[\s\S]*$/, ""));
	return /* @__PURE__ */ jsxs("main", {
		className: "cpm-blog-page",
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
				className: "cpm-blog-shell",
				children: [
					/* @__PURE__ */ jsxs("header", {
						className: "cpm-blog-hero",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/blog",
								className: "cpm-blog-back",
								children: "Back to all blogs"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cpm-blog-eyebrow",
								children: "PERFORMANCE MARKETING · PAID ADS · ANALYTICS"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "cpm-blog-meta",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Performance Marketing" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "8 min read" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "August 31, 2026" })
								]
							}),
							/* @__PURE__ */ jsx("h1", { children: "CPM Explained: What It Really Measures (And What It Doesn't)" }),
							/* @__PURE__ */ jsx("p", {
								className: "cpm-blog-lede",
								children: "CPM shows up in every ads dashboard, but it's often misread. Here's what CPM actually measures, why it moves, what high and low CPM really indicate, and how to use it correctly."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "cpm-blog-links",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/services/performance-growth-marketing",
									children: "Performance Marketing"
								}), /* @__PURE__ */ jsx(Link, {
									to: "/resources",
									children: "Explore resources"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "cpm-visual-grid",
						"aria-label": "CPM visual summary",
						children: visuals.map((item) => /* @__PURE__ */ jsx(VisualCard, { item }, item.label))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "cpm-blog-content",
						dangerouslySetInnerHTML: { __html: renderedArticle }
					}),
					/* @__PURE__ */ jsx(FAQSection, {}),
					/* @__PURE__ */ jsxs("footer", {
						className: "cpm-blog-cta",
						children: [
							/* @__PURE__ */ jsx("span", { children: "PERFORMANCE MARKETING" }),
							/* @__PURE__ */ jsx("h2", { children: "Do not optimize reach cost in isolation." }),
							/* @__PURE__ */ jsx("p", { children: "CPM tells you what exposure costs. The real question is whether that exposure produces the outcome your campaign needs." }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: "Work with Ashwin"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/blog",
								children: "Read more insights"
							})] })
						]
					})
				]
			})
		]
	});
}
export { CPMExplainedBlog as default };
