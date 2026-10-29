import { Link } from "react-router-dom";
import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/content/performance-marketing-metrics.md?raw
var performance_marketing_metrics_default = "# What Should You Measure in Performance Marketing?\r\n\r\nPerformance marketing is easy to overcomplicate because advertising platforms give you dozens of numbers. The difficult part is deciding which numbers actually tell you whether marketing is creating business value.\r\n\r\nThat is why **performance marketing metrics** should be treated as a measurement system rather than a dashboard full of isolated figures.\r\n\r\nA campaign can have a low CPL and still produce poor customers. It can have a strong CTR and weak conversion rate. It can generate an attractive ROAS while producing little profit after costs. The useful metric depends on where you are in the customer journey and what the business is trying to achieve.\r\n\r\nThis guide explains the core performance marketing metrics worth tracking, how CAC, CPL, CPA, ROAS and conversion rate relate to one another, and how to build a measurement framework that moves beyond clicks and leads.\r\n\r\n## Start With the Business Outcome\r\n\r\nBefore choosing metrics, define the outcome the campaign is supposed to create.\r\n\r\nFor a lead generation business, the outcome may be qualified opportunities or customers. For ecommerce, it may be profitable revenue. For a consultation business, it may be booked appointments that become paying clients.\r\n\r\nThe measurement chain should therefore look something like:\r\n\r\n**Ad spend → traffic → conversion → lead quality → customer → revenue → profit**\r\n\r\nEach stage answers a different question.\r\n\r\n| Stage | Useful metric | Question it answers |\r\n| --- | --- | --- |\r\n| Advertising | CPM | What does it cost to reach the audience? |\r\n| Engagement | CTR | Are people responding to the message? |\r\n| Acquisition | CPL | What does each lead cost? |\r\n| Conversion | Conversion rate | How efficiently does traffic become an action? |\r\n| Customer acquisition | CPA / CAC | What does it cost to acquire a customer? |\r\n| Revenue | ROAS | How much attributed revenue comes from ad spend? |\r\n| Business quality | Revenue, margin, LTV | Is the acquisition economically worthwhile? |\r\n\r\nThe key is not to track every number equally. Track the numbers that help you make better decisions.\r\n\r\n## The Core Performance Marketing Metrics\r\n\r\n### 1. CPM: Cost Per Thousand Impressions\r\n\r\nCPM measures the cost of delivering one thousand impressions.\r\n\r\n**CPM = Ad spend ÷ impressions × 1,000**\r\n\r\nCPM is useful for understanding the cost of reaching an audience. It can help identify changes in competition, audience availability, placement mix and auction conditions.\r\n\r\nBut CPM does not tell you whether the audience clicked, converted or purchased.\r\n\r\nA low CPM can be attractive while producing low value traffic. A higher CPM can be acceptable if the audience is more valuable and the downstream conversion economics are stronger.\r\n\r\nTreat CPM as a delivery and market cost signal, not as a final performance score.\r\n\r\n### 2. CTR: Click Through Rate\r\n\r\nCTR measures the percentage of impressions that result in clicks.\r\n\r\n**CTR = clicks ÷ impressions × 100**\r\n\r\nCTR can provide insight into the relationship between the audience, creative and message. A weak CTR may indicate that the advertisement is not earning attention or that the message is not relevant enough to the audience.\r\n\r\nHowever, a high CTR is not automatically good.\r\n\r\nIf an advertisement attracts curiosity but sends poorly qualified visitors to a landing page, the campaign can produce more clicks without producing more customers.\r\n\r\nCTR is therefore best interpreted alongside conversion rate and lead or customer quality.\r\n\r\n## 3. CPL: Cost Per Lead\r\n\r\nCPL measures the advertising cost required to generate a lead.\r\n\r\n**CPL = ad spend ÷ leads**\r\n\r\nSuppose a campaign spends AED 5,000 and generates 100 leads. The CPL is AED 50.\r\n\r\nThat number is useful, but it is incomplete.\r\n\r\nImagine another campaign spends AED 5,000 and generates 50 leads at AED 100 CPL. If those 50 leads are substantially more qualified and generate more customers, the second campaign may be the better investment.\r\n\r\nThis is one of the most important lessons in lead generation: **cheap leads are not necessarily valuable leads.**\r\n\r\nCPL should be connected to qualification rate, sales conversion and customer acquisition cost.\r\n\r\n## 4. Conversion Rate\r\n\r\nConversion rate measures how efficiently visitors or clicks become a defined conversion.\r\n\r\n**Conversion rate = conversions ÷ relevant visits or clicks × 100**\r\n\r\nThe denominator matters. A website conversion rate, lead form conversion rate and sales conversion rate are different measurements.\r\n\r\nFor example:\r\n\r\n**1,000 relevant visits → 50 enquiries = 5% conversion rate**\r\n\r\nA change in conversion rate can point to problems or opportunities in the offer, message match, landing page, form, user experience or traffic quality.\r\n\r\nConversion rate is particularly useful because it helps separate an acquisition problem from a conversion problem.\r\n\r\nIf traffic is expensive but converts extremely well, the acquisition strategy may need attention. If traffic is affordable but barely converts, the bottleneck may be further down the funnel.\r\n\r\n## 5. CPA: Cost Per Acquisition\r\n\r\nCPA measures the advertising cost associated with a defined acquisition.\r\n\r\n**CPA = ad spend ÷ acquisitions**\r\n\r\nThe important question is what counts as an acquisition.\r\n\r\nFor one campaign, CPA could mean a completed purchase. For another, it could mean a booked appointment or another defined conversion.\r\n\r\nBecause CPA sits closer to the business outcome than CPL, it is often more useful for evaluating whether acquisition is becoming efficient.\r\n\r\nStill, CPA should not be confused with profitability. A business may acquire customers at a reasonable CPA but still lose money if customer value and margins are low.\r\n\r\n## 6. CAC: Customer Acquisition Cost\r\n\r\nCAC is the cost required to acquire a customer.\r\n\r\nA simple paid media view is:\r\n\r\n**CAC = acquisition spend ÷ new customers**\r\n\r\nIn a broader business calculation, CAC can include additional sales and marketing costs rather than advertising spend alone. The definition should therefore be agreed before comparing CAC across reports.\r\n\r\nCAC becomes powerful when compared with customer economics.\r\n\r\nSuppose a business acquires customers for AED 400. If the contribution generated by those customers is comfortably higher than AED 400, acquisition may be viable. If the customer produces only AED 250 of contribution, increasing spend is unlikely to solve the problem.\r\n\r\nCAC is where marketing measurement begins to connect directly with business economics.\r\n\r\n## 7. ROAS: Return on Ad Spend\r\n\r\nROAS compares attributed revenue with advertising spend.\r\n\r\n**ROAS = attributed revenue ÷ ad spend**\r\n\r\nIf AED 10,000 in advertising is associated with AED 40,000 in revenue, ROAS is 4x.\r\n\r\nROAS is useful for ecommerce and other businesses where revenue can be reliably connected to advertising activity.\r\n\r\nBut ROAS has a major limitation: revenue is not the same as profit.\r\n\r\nA 4x ROAS may look strong, but the business still needs to consider product margins, fulfilment, refunds, discounts, salaries, agency fees and other costs.\r\n\r\nROAS should therefore be interpreted alongside contribution margin, customer value and the business's profitability threshold.\r\n\r\n## How These Metrics Work Together\r\n\r\nThe strongest measurement systems do not ask which metric is the most important. They ask how the metrics connect.\r\n\r\nConsider this hypothetical funnel:\r\n\r\n| Metric | Result |\r\n| --- | ---: |\r\n| Ad spend | AED 10,000 |\r\n| Impressions | 500,000 |\r\n| Clicks | 5,000 |\r\n| Leads | 250 |\r\n| Qualified leads | 100 |\r\n| Customers | 20 |\r\n| Revenue | AED 80,000 |\r\n\r\nFrom this data, you can calculate several useful indicators.\r\n\r\nCTR is 1%.\r\n\r\nCPL is AED 40.\r\n\r\nCost per qualified lead is AED 100.\r\n\r\nCAC is AED 500.\r\n\r\nROAS is 8x.\r\n\r\nEach number describes a different part of the system.\r\n\r\nThe bigger insight comes from the relationships between them. If another campaign produces a CPL of AED 25 but a CAC of AED 900, the cheaper campaign is not necessarily the better campaign.\r\n\r\nThis is why optimization should move progressively down the funnel as sufficient data becomes available.\r\n\r\n## Which Metric Should You Optimize For?\r\n\r\nThere is no universal answer.\r\n\r\nA useful hierarchy is:\r\n\r\n### If the campaign is still testing creative\r\n\r\nCTR, engagement and CPM can help diagnose whether the message is earning attention and whether delivery costs have changed.\r\n\r\n### If the campaign is generating leads\r\n\r\nCPL becomes useful, but lead quality and qualification rate must be monitored at the same time.\r\n\r\n### If the business has reliable sales data\r\n\r\nCPA, CAC, customer conversion rate and revenue become more important than lead volume.\r\n\r\n### If revenue attribution is reliable\r\n\r\nROAS and contribution economics can help guide budget allocation.\r\n\r\nThe mistake is using an easy to measure metric as a substitute for the metric that actually matters.\r\n\r\n## Lead Quality Changes the Meaning of CPL\r\n\r\nLead generation is where performance reporting frequently breaks down.\r\n\r\nConsider two campaigns:\r\n\r\n**Campaign A:** 200 leads at AED 30 CPL\r\n\r\n**Campaign B:** 80 leads at AED 75 CPL\r\n\r\nCampaign A looks better if CPL is the only metric.\r\n\r\nNow assume Campaign A produces 10 qualified opportunities and Campaign B produces 24.\r\n\r\nThe interpretation changes completely.\r\n\r\nThe correct question is not simply, \"Which campaign generated leads more cheaply?\"\r\n\r\nIt is, \"Which campaign generated commercially useful opportunities at an acceptable acquisition cost?\"\r\n\r\nThis is why CRM data can become an important part of performance marketing measurement. Marketing platform data tells you what happened at the advertising level. Sales and CRM data can reveal what happened after the lead entered the business.\r\n\r\n## The Difference Between Reporting and Measurement\r\n\r\nReporting describes what happened.\r\n\r\nMeasurement helps you decide what to do next.\r\n\r\nA report might say:\r\n\r\n**CPL increased from AED 45 to AED 60.**\r\n\r\nA measurement system asks why.\r\n\r\nDid CPM increase?\r\n\r\nDid CTR decline?\r\n\r\nDid the landing page conversion rate fall?\r\n\r\nDid the traffic mix change?\r\n\r\nDid the lead qualification rate change?\r\n\r\nDid the sales team follow up more slowly?\r\n\r\nDid customer conversion decline?\r\n\r\nWithout these relationships, a dashboard can become a collection of numbers rather than a decision making system.\r\n\r\n## Build a Performance Marketing Measurement Framework\r\n\r\nA practical framework can be built around six questions.\r\n\r\n### 1. What is the business objective?\r\n\r\nDefine the commercial result first.\r\n\r\n### 2. What is the conversion event?\r\n\r\nDecide what action should be measured as a meaningful conversion.\r\n\r\n### 3. What are the acquisition economics?\r\n\r\nEstablish acceptable CPL, CPA or CAC based on customer value and margins rather than arbitrary platform targets.\r\n\r\n### 4. What happens after conversion?\r\n\r\nTrack qualification, opportunities, sales and revenue where the business model allows it.\r\n\r\n### 5. Which metric identifies the current bottleneck?\r\n\r\nDo not optimize every metric simultaneously. Identify the constraint that has the greatest effect on the business outcome.\r\n\r\n### 6. What decision will the data change?\r\n\r\nIf a metric never changes a decision, question whether it deserves priority in the dashboard.\r\n\r\nA useful measurement system should help answer questions such as:\r\n\r\n* Should this campaign receive more budget?\r\n* Should this audience be changed?\r\n* Is the creative attracting the right people?\r\n* Is the landing page limiting conversion?\r\n* Are low cost leads actually becoming customers?\r\n* Is customer acquisition economically sustainable?\r\n\r\n## Common Performance Marketing Measurement Mistakes\r\n\r\n### Optimizing only for CPL\r\n\r\nLow CPL can hide poor qualification and weak sales conversion.\r\n\r\n### Treating ROAS as profit\r\n\r\nRevenue attributed to advertising does not automatically equal profitable revenue.\r\n\r\n### Comparing metrics without consistent definitions\r\n\r\nCAC, CPA and conversion rate can be calculated differently across teams. Definitions need to be consistent before numbers are compared.\r\n\r\n### Ignoring the denominator\r\n\r\nA conversion rate is meaningless without knowing what population it is calculated from.\r\n\r\n### Measuring platform results without CRM feedback\r\n\r\nFor lead generation, the advertising platform often cannot tell you whether a lead became a valuable customer.\r\n\r\n### Tracking too many vanity metrics\r\n\r\nA large dashboard can create the appearance of sophistication while making decision making harder.\r\n\r\n## How a Performance Marketing Specialist Should Think About Metrics\r\n\r\nA strong measurement approach is less about memorizing formulas and more about understanding causality.\r\n\r\nWhen a number changes, ask what changed upstream and downstream.\r\n\r\nIf CPL rises, investigate CPM, CTR, conversion rate and traffic quality.\r\n\r\nIf leads rise but customers do not, investigate qualification, sales follow up and customer conversion.\r\n\r\nIf ROAS falls, investigate traffic, conversion rate, average order value, attribution and the economics of the offer.\r\n\r\nThe goal is not to make every metric look good.\r\n\r\nThe goal is to understand which part of the acquisition system is limiting profitable growth.\r\n\r\nThat is the difference between reading an advertising dashboard and practicing performance marketing.\r\n\r\n## Frequently Asked Questions\r\n\r\n### What are the most important performance marketing metrics?\r\n\r\nCommon metrics include CPM, CTR, CPL, conversion rate, CPA, CAC and ROAS. The most important metric depends on the business model, campaign objective and available data.\r\n\r\n### Is CPL more important than CAC?\r\n\r\nNot usually when reliable customer data is available. CPL measures lead acquisition cost, while CAC moves closer to the actual customer outcome. A low CPL can still produce an expensive CAC if lead quality is poor.\r\n\r\n### What is a good ROAS?\r\n\r\nThere is no universal good ROAS. The required ROAS depends on margins, operating costs, customer value, attribution and the profitability threshold of the business.\r\n\r\n### Should I track CTR if my goal is sales?\r\n\r\nYes, but CTR should usually be treated as a diagnostic metric rather than the final success metric. It can help explain whether creative and messaging are generating attention, while sales and revenue determine commercial performance.\r\n\r\n### How do I know whether my leads are high quality?\r\n\r\nConnect advertising data with qualification, opportunity and customer data where possible. Compare campaigns not only by lead volume and CPL but also by qualified lead rate, customer conversion and CAC.\r\n\r\n## Conclusion\r\n\r\nThe best performance marketing metrics are not necessarily the numbers that appear most prominently in an advertising platform.\r\n\r\nThey are the numbers that help you understand the path from spend to business value.\r\n\r\nCPM can explain delivery cost. CTR can explain response. CPL can explain lead acquisition efficiency. Conversion rate can reveal funnel friction. CPA and CAC can connect acquisition to customers. ROAS can connect advertising spend to attributed revenue.\r\n\r\nBut none of these numbers should be viewed in isolation.\r\n\r\nThe real measurement system is the relationship between them and the business economics behind them.\r\n\r\nIf you want to understand how these metrics fit into a broader acquisition and optimisation system, you can explore the work of a [Performance Marketing Specialist](https://ashwinjames.com/) focused on connecting paid acquisition, conversion tracking, lead quality and business outcomes.\r\n\r\n## About the Author\r\n\r\nAshwin James is a Performance Marketing Specialist focused on paid acquisition, Meta Ads, Google Ads, lead generation, conversion optimisation, analytics, CRM workflows and data driven marketing.\r\n\r\nHis approach focuses on connecting marketing activity with measurable business outcomes rather than optimizing campaigns around surface level metrics alone.\r\n\r\n## Related Articles\r\n\r\n* [Performance Marketing Strategy for a UAE Business](https://ashwinjames.com/blog/performance-marketing-strategy-uae)\r\n* [What Is Performance Marketing? A Dubai Business Guide](https://ashwinjames.com/blog/performance-marketing-dubai)\r\n* [Why Your Meta Ads Are Generating Leads but Not Sales](https://ashwinjames.com/blog/meta-ads-generating-leads-but-not-sales)\r\n* [Lead Generation Is About the Right Leads](https://ashwinjames.com/blog/lead-generation-right-leads)\r\n";
// src/pages/PerformanceMarketingMetricsBlog.jsx
var faq = [
	["What are the most important performance marketing metrics?", "Common metrics include CPM, CTR, CPL, conversion rate, CPA, CAC and ROAS. The most important metric depends on the business model, campaign objective and available data."],
	["Is CPL more important than CAC?", "Not usually when reliable customer data is available. CPL measures lead acquisition cost, while CAC moves closer to the actual customer outcome. A low CPL can still produce an expensive CAC if lead quality is poor."],
	["What is a good ROAS?", "There is no universal good ROAS. The required ROAS depends on margins, operating costs, customer value, attribution and the profitability threshold of the business."],
	["Should I track CTR if my goal is sales?", "Yes, but CTR should usually be treated as a diagnostic metric rather than the final success metric. It can help explain whether creative and messaging are generating attention, while sales and revenue determine commercial performance."],
	["How do I know whether my leads are high quality?", "Connect advertising data with qualification, opportunity and customer data where possible. Compare campaigns not only by lead volume and CPL but also by qualified lead rate, customer conversion and CAC."]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: "What Should You Measure in Performance Marketing?",
	description: "A practical guide to performance marketing metrics including CAC, CPL, ROAS, CPA and conversion rate, and how to connect them to business outcomes.",
	author: {
		"@type": "Person",
		name: "Ashwin James",
		url: "https://ashwinjames.com/"
	},
	publisher: {
		"@type": "Person",
		name: "Ashwin James"
	},
	datePublished: "2026-09-14",
	dateModified: "2026-09-14",
	mainEntityOfPage: "https://ashwinjames.com/blog/performance-marketing-metrics",
	keywords: "performance marketing metrics, CAC, CPL, ROAS, CPA, conversion rate"
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
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
}
function inlineMarkdown(value) {
	let output = escapeHtml(value);
	output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, (_, text, href) => `<a href="${href}">${text}</a>`);
	output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
	output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
	output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
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
		if (line.includes("|") && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1])) {
			const parseRow = (row) => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => inlineMarkdown(cell.trim()));
			const headers = parseRow(lines[i]);
			i += 2;
			const rows = [];
			while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
				rows.push(parseRow(lines[i]));
				i += 1;
			}
			html.push(`<div class="pms-table-wrap"><table><thead><tr>${headers.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
			continue;
		}
		const heading = line.match(/^(#{1,3})\s+(.+)$/);
		if (heading) {
			const level = heading[1].length;
			const text = inlineMarkdown(heading[2]);
			const id = heading[2].toLowerCase().replace(/[^a-z0-9 ]/g, "").trim().replace(/\s+/g, "-");
			html.push(`<h${level} id="${id}">${text}</h${level}>`);
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
		const paragraph = [];
		while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !(lines[i].includes("|") && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1]))) {
			paragraph.push(lines[i]);
			i += 1;
		}
		html.push(`<p>${paragraph.map(inlineMarkdown).join("<br />")}</p>`);
	}
	return html.join("");
}
function MetricFlow() {
	const stages = [
		[
			"01",
			"Reach",
			"CPM · audience cost"
		],
		[
			"02",
			"Response",
			"CTR · message fit"
		],
		[
			"03",
			"Conversion",
			"CPL · conversion rate"
		],
		[
			"04",
			"Customers",
			"CPA · CAC · quality"
		],
		[
			"05",
			"Revenue",
			"ROAS · margin · value"
		]
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-funnel",
		"aria-label": "Performance marketing metrics flow",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THE MEASUREMENT SYSTEM"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Measure the journey, not just the dashboard." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-funnel-flow",
				children: stages.map(([number, title, detail], index) => /* @__PURE__ */ jsxs("div", {
					className: "pms-funnel-stage",
					children: [
						/* @__PURE__ */ jsx("span", { children: number }),
						/* @__PURE__ */ jsx("strong", { children: title }),
						/* @__PURE__ */ jsx("small", { children: detail }),
						index < stages.length - 1 && /* @__PURE__ */ jsx("i", {
							"aria-hidden": "true",
							children: "→"
						})
					]
				}, title))
			})
		]
	});
}
function MetricCards() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-metric-panel",
		"aria-label": "Core performance marketing metrics",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "CORE METRICS"
			}),
			/* @__PURE__ */ jsx("h2", { children: "The useful metric depends on the question you need to answer." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-metric-grid",
				children: [
					[
						"CPL",
						"Lead efficiency",
						"Useful for acquisition cost, but incomplete without lead quality."
					],
					[
						"CPA",
						"Acquisition cost",
						"Moves measurement closer to a defined conversion or acquisition."
					],
					[
						"CAC",
						"Customer economics",
						"Connect acquisition spend with the cost of winning customers."
					],
					[
						"ROAS",
						"Revenue efficiency",
						"Compare attributed revenue with advertising spend, then consider margin."
					]
				].map(([metric, label, text]) => /* @__PURE__ */ jsxs("div", {
					className: "pms-metric-card",
					children: [
						/* @__PURE__ */ jsx("b", { children: metric }),
						/* @__PURE__ */ jsx("strong", { children: label }),
						/* @__PURE__ */ jsx("p", { children: text })
					]
				}, metric))
			})
		]
	});
}
function DecisionFramework() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-learning",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THE OPERATING MODEL"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Use metrics to make decisions, not to decorate reports." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-learning-track",
				children: [
					[
						"01",
						"Define the outcome",
						"Start with the business result rather than the platform."
					],
					[
						"02",
						"Map the funnel",
						"Connect reach, response, conversion, quality, customers and revenue."
					],
					[
						"03",
						"Set economic thresholds",
						"Use customer value and margins to establish acceptable acquisition costs."
					],
					[
						"04",
						"Diagnose the bottleneck",
						"Find the metric relationship that explains the current constraint."
					],
					[
						"05",
						"Feed back sales data",
						"Connect lead quality and customer outcomes to campaign data where possible."
					],
					[
						"06",
						"Optimise the system",
						"Use the data to decide what to test, change, scale or stop."
					]
				].map(([number, title, body]) => /* @__PURE__ */ jsxs("div", {
					className: "pms-learning-step",
					children: [/* @__PURE__ */ jsx("span", { children: number }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: title }), /* @__PURE__ */ jsx("p", { children: body })] })]
				}, number))
			})
		]
	});
}
function FAQSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-faq",
		"aria-labelledby": "pms-faq-heading",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "FAQ"
			}),
			/* @__PURE__ */ jsx("h2", {
				id: "pms-faq-heading",
				children: "Frequently asked questions"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pms-faq-list",
				children: faq.map(([question, answer]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [question, /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					children: "+"
				})] }), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: answer }) })] }, question))
			})
		]
	});
}
function PerformanceMarketingMetricsBlog() {
	useEffect(() => {
		document.title = "What Should You Measure in Performance Marketing? | Ashwin James";
		const description = "Learn which performance marketing metrics matter, including CAC, CPL, ROAS, CPA and conversion rate, and how to connect them to business outcomes.";
		let tag = document.querySelector("meta[name=\"description\"]");
		if (!tag) {
			tag = document.createElement("meta");
			tag.name = "description";
			document.head.appendChild(tag);
		}
		tag.setAttribute("content", description);
		let canonical = document.querySelector("link[rel=\"canonical\"]");
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.rel = "canonical";
			document.head.appendChild(canonical);
		}
		canonical.setAttribute("href", "https://ashwinjames.com/blog/performance-marketing-metrics");
		return () => {
			document.title = "Performance Marketing Specialist in UAE";
		};
	}, []);
	const renderedArticle = renderMarkdown(performance_marketing_metrics_default.replace(/cite[^]+/g, "").replace(/^# .+\n\n/, ""));
	return /* @__PURE__ */ jsxs("main", {
		className: "pms-blog-page",
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
				className: "pms-blog-shell",
				children: [
					/* @__PURE__ */ jsxs("header", {
						className: "pms-hero",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/blog",
								className: "pms-back",
								children: "Back to all blogs"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "pms-eyebrow",
								children: "PERFORMANCE MARKETING · METRICS · MEASUREMENT"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-meta",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Performance Marketing" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "11 min read" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "September 14, 2026" })
								]
							}),
							/* @__PURE__ */ jsx("h1", { children: "What Should You Measure in Performance Marketing?" }),
							/* @__PURE__ */ jsx("p", {
								className: "pms-lede",
								children: "A practical framework for understanding CAC, CPL, ROAS, CPA, conversion rate and the relationships that turn advertising data into better business decisions."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-links",
								children: [
									/* @__PURE__ */ jsx(Link, {
										to: "/services/performance-marketing",
										children: "Performance Marketing"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/performance-marketing-strategy-uae",
										children: "Performance Marketing Strategy"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/resources/lead-quality-framework",
										children: "Lead Quality Framework"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsx(MetricFlow, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "pms-article-grid",
						children: [/* @__PURE__ */ jsxs("aside", {
							className: "pms-toc",
							children: [
								/* @__PURE__ */ jsx("span", { children: "ON THIS PAGE" }),
								/* @__PURE__ */ jsx("a", {
									href: "#start-with-the-business-outcome",
									children: "Business outcome"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#the-core-performance-marketing-metrics",
									children: "Core metrics"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#how-these-metrics-work-together",
									children: "How metrics work together"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#which-metric-should-you-optimize-for",
									children: "Which metric to optimize"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#lead-quality-changes-the-meaning-of-cpl",
									children: "Lead quality"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#build-a-performance-marketing-measurement-framework",
									children: "Measurement framework"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#common-performance-marketing-measurement-mistakes",
									children: "Common mistakes"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#conclusion",
									children: "Conclusion"
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "pms-content",
							dangerouslySetInnerHTML: { __html: renderedArticle }
						})]
					}),
					/* @__PURE__ */ jsx(MetricCards, {}),
					/* @__PURE__ */ jsx(DecisionFramework, {}),
					/* @__PURE__ */ jsx(FAQSection, {}),
					/* @__PURE__ */ jsxs("footer", {
						className: "pms-cta",
						children: [
							/* @__PURE__ */ jsx("span", { children: "PERFORMANCE MARKETING METRICS" }),
							/* @__PURE__ */ jsx("h2", { children: "Measure what helps the business make its next decision." }),
							/* @__PURE__ */ jsx("p", { children: "Connect advertising costs, conversion, lead quality, customer acquisition and revenue instead of treating every dashboard number as equally important." }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
								to: "/services/performance-marketing",
								children: "Explore Performance Marketing"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: "Start a Conversation"
							})] })
						]
					})
				]
			})
		]
	});
}
export { PerformanceMarketingMetricsBlog as default };
