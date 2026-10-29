import { Link } from "react-router-dom";
import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/content/why-attribution-matters-performance-marketing.md?raw
var why_attribution_matters_performance_marketing_default = "# Why Attribution Matters in Performance Marketing\r\n\r\nMarketing attribution is the process of assigning credit to the interactions that contribute to a conversion. In performance marketing, that sounds straightforward until a customer sees an ad, returns through search, reads a blog post, comes back directly and then becomes a lead or customer.\r\n\r\nIf the final interaction receives all the credit, the earlier interactions can look unimportant even when they helped create demand. If every interaction receives equal credit, the analysis can become just as misleading.\r\n\r\nThat is why attribution matters. It gives marketers a framework for asking a better question than “Which channel got the conversion?” The better question is “What role did each touchpoint play, and how much confidence should we place in the credit assigned to it?”\r\n\r\n## What marketing attribution actually means\r\n\r\nMarketing attribution is a measurement framework. It does not change what happened in the customer journey. It changes how the journey is interpreted.\r\n\r\nA customer journey might look like this:\r\n\r\n1. A person discovers a brand through a paid social ad.\r\n2. They return later through an organic search.\r\n3. They read a useful article.\r\n4. They come back through a branded search.\r\n5. They submit a lead form.\r\n6. Sales qualifies the lead.\r\n\r\nThe conversion is real, but the path contains several interactions. Attribution models determine how the conversion is credited across those interactions.\r\n\r\nGoogle Analytics currently describes an attribution model as a rule, set of rules or data driven algorithm that assigns credit to touchpoints on the path to an important action. Its current attribution reporting includes data driven attribution and last click approaches, while several older models such as first click, linear, time decay and position based attribution are no longer available in Google Analytics. citeturn0search0turn0search2\r\n\r\nThe important point is that an attribution model is not the customer journey itself. It is a lens applied to the journey.\r\n\r\n## Why attribution matters in performance marketing\r\n\r\nPerformance marketing depends on feedback. You spend money, observe outcomes, learn from the data and decide what to change next.\r\n\r\nAttribution sits inside that feedback loop.\r\n\r\nWithout a useful attribution framework, several problems appear quickly.\r\n\r\n### Budget decisions become channel biased\r\n\r\nImagine a customer discovers your business through Meta Ads but converts after a Google search. A last click report may give the search interaction all the credit.\r\n\r\nIf you then reduce Meta spending because Meta appears to have produced fewer conversions, you may be removing a source of demand that helped create the conversion in the first place.\r\n\r\nThat does not mean Meta deserves all the credit either. It means the report needs to be interpreted in the context of the full journey.\r\n\r\n### Optimisation can move toward the wrong event\r\n\r\nAttribution becomes more useful when the conversion being attributed actually represents business value.\r\n\r\nA form submission is not automatically a valuable outcome. The lead may be unqualified, unreachable, outside the service area or unlikely to become a customer.\r\n\r\nThis is why attribution should connect with the broader measurement system. If you are trying to understand how advertising contributes to qualified opportunities or customers, the analysis cannot stop at the first lead event.\r\n\r\nThis is closely related to [conversion tracking in performance marketing](/blog/conversion-tracking-performance-marketing), where the quality of the conversion signal determines what the marketer can realistically learn from campaign data.\r\n\r\n### Reporting can create false certainty\r\n\r\nAttribution reports often present precise looking numbers. That precision can be misleading.\r\n\r\nA report might say that one channel received 42% of the attributed conversions while another received 31%. The numbers are useful for analysis, but they should not automatically be interpreted as proof that one channel caused exactly 42% of the business result.\r\n\r\nAttribution is a model of contribution. It is not a perfect causal measurement system.\r\n\r\n## Attribution models: the main approaches marketers should understand\r\n\r\nDifferent attribution models answer different questions. There is no universally correct model for every business.\r\n\r\n### Last click attribution\r\n\r\nLast click assigns the conversion to the final eligible interaction before the conversion.\r\n\r\nIts strength is simplicity. It is easy to understand, easy to report and useful when the business specifically wants to evaluate the final interaction before conversion.\r\n\r\nIts weakness is that it can understate earlier interactions that created awareness, consideration or intent.\r\n\r\nFor example:\r\n\r\nPaid social → Organic search → Branded search → Lead\r\n\r\nA last click model may make the branded search look like the main acquisition driver even though paid social may have played an earlier role.\r\n\r\n### First click attribution\r\n\r\nFirst click gives credit to the first interaction in the journey.\r\n\r\nConceptually, this is useful when the question is “Which channel introduced people to us?” But it can understate the interactions that helped turn initial interest into action.\r\n\r\nIt is also important to distinguish historical attribution models from the models currently available in the platforms you use. Google Analytics removed first click, linear, time decay and position based models from its current attribution options in November 2023. citeturn0search2\r\n\r\n### Linear attribution\r\n\r\nLinear attribution historically distributed credit evenly across eligible touchpoints.\r\n\r\nIts appeal was fairness. Instead of declaring one interaction the winner, every interaction received a share.\r\n\r\nBut equal credit is still an assumption. Five touchpoints may not have contributed equally to a decision.\r\n\r\n### Time decay attribution\r\n\r\nTime decay historically assigned more credit to interactions closer to the conversion.\r\n\r\nThe logic is intuitive: a touchpoint that happened shortly before a purchase may have been more influential than one that happened weeks earlier.\r\n\r\nAgain, the model is an assumption about influence rather than a direct measurement of causality.\r\n\r\n### Position based attribution\r\n\r\nPosition based models historically gave more credit to particular positions in the journey, often the first and last interactions, with the remaining credit distributed between them.\r\n\r\nThis approach recognises both acquisition and conversion roles, but the weighting itself is still predetermined.\r\n\r\n### Data driven attribution\r\n\r\nData driven attribution takes a different approach. Instead of applying a simple fixed rule, it uses available path data to estimate how different interactions contribute to key events.\r\n\r\nGoogle describes its data driven attribution as using converting and non converting paths and comparing outcomes to estimate the contribution of interactions. The exact model is specific to the property and key event being evaluated. citeturn0search0\r\n\r\nThis can be more sophisticated than a fixed rule, but it does not make attribution perfect. It still depends on the quality, completeness and scope of the underlying data.\r\n\r\n## Why no attribution model should be treated as absolute truth\r\n\r\nA common mistake is to ask, “Which attribution model is correct?” as if one model can reveal the objective truth about every conversion.\r\n\r\nThat is the wrong framing.\r\n\r\nA better question is:\r\n\r\n**Which measurement view is most useful for the decision I need to make?**\r\n\r\nFor example, a marketer might use different views for different questions:\r\n\r\n| Business question | Useful measurement view |\r\n| --- | --- |\r\n| What interaction was closest to conversion? | Last click |\r\n| Which channels participate in customer journeys? | Attribution paths |\r\n| How does channel credit change under different models? | Model comparison |\r\n| Which campaigns generate qualified leads? | CRM and conversion outcome data |\r\n| Which channels appear to support revenue? | Revenue and customer level analysis |\r\n\r\nGoogle Analytics provides attribution paths and model comparison reports specifically so marketers can examine how different attribution models change the valuation of marketing channels. citeturn0search4\r\n\r\nThe strategic lesson is simple: use attribution to improve decisions, not to manufacture certainty.\r\n\r\n## Attribution and the difference between conversion and business outcome\r\n\r\nThis is where attribution becomes particularly important for lead generation.\r\n\r\nSuppose Campaign A generates 100 leads at a lower cost while Campaign B generates 40 leads at a higher cost.\r\n\r\nAt the lead level, Campaign A looks better.\r\n\r\nBut suppose the downstream results are:\r\n\r\n| Metric | Campaign A | Campaign B |\r\n| --- | ---: | ---: |\r\n| Leads | 100 | 40 |\r\n| Qualified leads | 8 | 18 |\r\n| Customers | 2 | 7 |\r\n\r\nIf you optimise only toward lead volume, Campaign A can appear stronger. If you connect acquisition data to qualification and customer outcomes, the decision changes.\r\n\r\nThis is why attribution should not be isolated from lead quality measurement.\r\n\r\nYour [CRM data for paid ads](/blog/crm-data-for-paid-ads) can help connect acquisition activity with later stages such as qualification, opportunities and customers. Attribution does not replace this connection. It becomes more useful when the conversion being measured represents something meaningful.\r\n\r\n## Attribution vs incrementality\r\n\r\nThis distinction is important because attribution and incrementality answer different questions.\r\n\r\nAttribution asks something like:\r\n\r\n**“How should observed credit be assigned across the interactions in the measured journey?”**\r\n\r\nIncrementality asks:\r\n\r\n**“What additional outcome happened because of the marketing activity?”**\r\n\r\nThese are not the same question.\r\n\r\nA user might have converted after interacting with an ad, but that does not automatically prove the ad caused the conversion. The person may already have been highly likely to convert.\r\n\r\nIncrementality is usually studied through controlled experiments, holdout groups or other causal measurement approaches. Attribution is often more practical for day to day reporting and optimisation, but it should not be confused with causal proof.\r\n\r\nThat distinction protects marketers from overclaiming what their dashboards can tell them.\r\n\r\n## How attribution should influence budget decisions\r\n\r\nAttribution should inform budget allocation, but it should not be the only input.\r\n\r\nA stronger decision framework combines at least four layers.\r\n\r\n### Layer 1: Acquisition efficiency\r\n\r\nLook at metrics such as cost per click, cost per lead, conversion rate and cost per acquisition.\r\n\r\nThese show how efficiently the campaign is producing measurable actions.\r\n\r\n### Layer 2: Attribution and journey contribution\r\n\r\nExamine which channels and campaigns participate in the journeys that lead to important actions.\r\n\r\nThis helps prevent a narrow last touch view from becoming the entire story.\r\n\r\n### Layer 3: Lead or customer quality\r\n\r\nConnect marketing activity to qualification, sales outcomes, customer value or revenue where the data allows it.\r\n\r\nThis is often more decision useful than simply asking which campaign generated the most leads.\r\n\r\n### Layer 4: Business economics\r\n\r\nFinally, compare the outcome with what the business can afford to pay for acquisition.\r\n\r\nA channel can have strong attributed conversion volume and still be unattractive if customers have poor retention, low margins or low lifetime value.\r\n\r\nThis is why [paid advertising ROI](/blog/paid-advertising-roi) and [performance marketing metrics](/blog/performance-marketing-metrics) belong in the same measurement conversation as attribution.\r\n\r\n## A practical attribution framework for performance marketers\r\n\r\nIf you are building or improving an attribution system, start with the following process.\r\n\r\n### 1. Define the business outcome\r\n\r\nDo not start by choosing an attribution model.\r\n\r\nStart by defining what matters.\r\n\r\nFor an ecommerce business, that may be profitable purchases. For a lead generation business, it may be qualified opportunities or customers rather than raw form submissions.\r\n\r\n### 2. Map the customer journey\r\n\r\nList the meaningful interactions that can occur before the outcome.\r\n\r\nFor example:\r\n\r\nAd impression → click → landing page → return visit → form submission → qualification → opportunity → customer\r\n\r\nThis exposes where your measurement currently stops.\r\n\r\n### 3. Make tracking consistent\r\n\r\nUse consistent campaign naming, UTMs and conversion definitions. Make sure important events are recorded consistently across analytics, advertising platforms and CRM systems.\r\n\r\nPoor tracking can create attribution problems that no attribution model can solve.\r\n\r\n### 4. Compare more than one attribution view\r\n\r\nDo not rely on a single dashboard number.\r\n\r\nCompare the platform view with analytics, attribution paths and downstream business outcomes where possible.\r\n\r\nIf changing the model dramatically changes the apparent winner, that is useful information. It means the decision is sensitive to the attribution method.\r\n\r\n### 5. Feed better outcomes back into optimisation\r\n\r\nIf your advertising platform is optimising toward low quality leads, the issue may not be the attribution model at all. The conversion signal itself may be too shallow.\r\n\r\nMove toward meaningful conversion events when there is enough reliable data to support the optimisation strategy.\r\n\r\n### 6. Review the system regularly\r\n\r\nAttribution is not a one time setup. Campaign structures change, tracking changes, customer journeys change and sales cycles change.\r\n\r\nReview whether your measurement system still reflects the business question you are trying to answer.\r\n\r\n## Common attribution mistakes\r\n\r\n### Treating platform attribution as neutral truth\r\n\r\nAdvertising platforms have their own measurement systems and attribution settings. Their reports are useful, but they should be interpreted as platform specific views rather than an objective scoreboard for the entire business.\r\n\r\n### Optimising toward the easiest conversion\r\n\r\nA form submit is easier to generate than a customer. If the system rewards the easier event, performance can appear to improve while business outcomes do not.\r\n\r\n### Ignoring offline outcomes\r\n\r\nFor businesses with sales teams, the most valuable outcome may happen outside the website. If marketing reporting ends at the form submission, you lose visibility into what happens next.\r\n\r\n### Comparing channels without normalising the measurement\r\n\r\nIf one channel is evaluated using platform conversions and another is evaluated using analytics conversions, the comparison may not be like for like.\r\n\r\nUse consistent definitions before making budget decisions.\r\n\r\n### Assuming more attributed conversions always means better performance\r\n\r\nAttributed conversion volume is only one part of the decision. Cost, quality, revenue, margin, sales cycle and customer value also matter.\r\n\r\n## What attribution can and cannot tell you\r\n\r\nA useful way to keep attribution grounded is to separate what it can tell you from what it cannot.\r\n\r\n### Attribution can help you understand\r\n\r\n• How credit is distributed under a chosen model\r\n• Which channels and campaigns appear in converting journeys\r\n• How different models change channel valuation\r\n• Which interactions occur before important actions\r\n• Where measurement disagreements exist between systems\r\n\r\n### Attribution cannot automatically prove\r\n\r\n• That a credited interaction caused the conversion\r\n• That one channel deserves an exact percentage of causal responsibility\r\n• That a lower cost per attributed conversion means higher profitability\r\n• That the tracking system captured every relevant interaction\r\n• That the platform with the highest reported conversions created the most incremental business value\r\n\r\nThat distinction is one of the most important ideas in performance marketing measurement.\r\n\r\n## How attribution fits into a modern measurement stack\r\n\r\nA practical measurement system often has several layers:\r\n\r\n**Advertising platforms** capture campaign and interaction data.\r\n\r\n**Analytics** helps analyse journeys, events, traffic sources and attribution views.\r\n\r\n**CRM systems** capture lead status, qualification, opportunities and customer outcomes.\r\n\r\n**Business reporting** connects those signals with revenue, margin and other commercial outcomes.\r\n\r\nAttribution sits between these layers. It helps interpret the journey, but it should not replace the underlying data.\r\n\r\nIf you want a deeper look at the analytics layer, see [GA4 for performance marketers](/blog/ga4-performance-marketing). If your main challenge is connecting paid media with lead quality, see [CRM lead tracking for paid ads](/blog/crm-lead-tracking-paid-ads).\r\n\r\n## Frequently asked questions\r\n\r\n### What is marketing attribution?\r\n\r\nMarketing attribution is a method of assigning credit for a conversion or important action to the interactions that occurred along the customer journey.\r\n\r\n### Why is attribution important in performance marketing?\r\n\r\nIt helps marketers understand how different interactions participate in customer journeys and supports better decisions about budget, optimisation and measurement.\r\n\r\n### Which attribution model is best?\r\n\r\nThere is no universally best model. The appropriate view depends on the business question, available data, customer journey and outcome being measured. Data driven attribution can provide a more evidence based view when sufficient data is available, while last click remains useful for specific reporting questions. citeturn0search0turn0search2\r\n\r\n### Does attribution show which channel caused a sale?\r\n\r\nNot necessarily. Attribution distributes observed credit according to a model. Causal measurement requires stronger experimental or incremental methods.\r\n\r\n### Should I optimise for leads or customers?\r\n\r\nOptimise toward the deepest reliable outcome that has enough volume and data quality to support the decision. For some businesses that may be qualified leads or opportunities; for others it may be customers or revenue.\r\n\r\n### How do attribution models affect budget allocation?\r\n\r\nDifferent models can assign different amounts of credit to the same channels. Comparing those views can reveal whether a budget decision is robust or heavily dependent on one measurement assumption.\r\n\r\n## Conclusion\r\n\r\nMarketing attribution matters because performance marketing is a decision making system. If the measurement layer gives you a distorted view of how customers move through the funnel, the optimisation layer will eventually inherit that distortion.\r\n\r\nThe answer is not to search for a perfect attribution model. The better approach is to build a measurement system that connects acquisition, customer journeys, conversion events, lead quality and business outcomes.\r\n\r\nUse attribution to understand contribution. Use CRM and revenue data to understand business value. Use experiments and incrementality when you need stronger evidence of causality.\r\n\r\nThat combination creates a much more useful foundation for a [Performance Marketing Specialist](https://ashwinjames.com/) to decide where to invest, what to optimise and what the advertising data actually means.\r\n";
// src/pages/MarketingAttributionBlog.jsx
var faq = [
	["What is marketing attribution?", "Marketing attribution is a method of assigning credit for a conversion or important action to the interactions that occurred along the customer journey."],
	["Why is attribution important in performance marketing?", "It helps marketers understand how different interactions participate in customer journeys and supports better decisions about budget, optimisation and measurement."],
	["Which attribution model is best?", "There is no universally best model. The appropriate view depends on the business question, available data, customer journey and outcome being measured."],
	["Does attribution show which channel caused a sale?", "Not necessarily. Attribution distributes observed credit according to a model. Causal measurement requires stronger experimental or incremental methods."],
	["Should I optimise for leads or customers?", "Optimise toward the deepest reliable outcome that has enough volume and data quality to support the decision."],
	["How do attribution models affect budget allocation?", "Different models can assign different amounts of credit to the same channels. Comparing those views can reveal whether a budget decision is robust or dependent on one measurement assumption."]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: "Why Attribution Matters in Performance Marketing",
	description: "Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.",
	author: {
		"@type": "Person",
		name: "Ashwin James",
		url: "https://ashwinjames.com/"
	},
	publisher: {
		"@type": "Person",
		name: "Ashwin James"
	},
	datePublished: "2026-09-15",
	dateModified: "2026-09-15",
	mainEntityOfPage: "https://ashwinjames.com/blog/why-attribution-matters-performance-marketing",
	keywords: "marketing attribution, attribution models, performance marketing"
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
function MarketingAttributionBlog() {
	useEffect(() => {
		document.title = "Why Attribution Matters in Performance Marketing | Ashwin James";
		const description = "Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.";
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
		canonical.setAttribute("href", "https://ashwinjames.com/blog/why-attribution-matters-performance-marketing");
		return () => {
			document.title = "Performance Marketing Specialist in UAE";
		};
	}, []);
	const renderedArticle = renderMarkdown(why_attribution_matters_performance_marketing_default.replace(/cite[^]+/g, "").replace(/url[^]*/g, "").replace(/^# .+\n\n/, ""));
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
								children: "PERFORMANCE MARKETING · ANALYTICS · ATTRIBUTION"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-meta",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Performance Marketing" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "14 min read" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "September 15, 2026" })
								]
							}),
							/* @__PURE__ */ jsx("h1", { children: "Why Attribution Matters in Performance Marketing" }),
							/* @__PURE__ */ jsx("p", {
								className: "pms-lede",
								children: "Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-links",
								children: [
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/conversion-tracking-performance-marketing",
										children: "Conversion Tracking"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/ga4-performance-marketing",
										children: "GA4 for Performance Marketers"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/crm-data-for-paid-ads",
										children: "CRM Data for Paid Ads"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/paid-advertising-roi",
										children: "Paid Advertising ROI"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pms-article-grid",
						children: [/* @__PURE__ */ jsxs("aside", {
							className: "pms-toc",
							children: [
								/* @__PURE__ */ jsx("span", { children: "ON THIS PAGE" }),
								/* @__PURE__ */ jsx("a", {
									href: "#what-marketing-attribution-actually-means",
									children: "What attribution means"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#why-attribution-matters-in-performance-marketing",
									children: "Why it matters"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#attribution-models-the-main-approaches-marketers-should-understand",
									children: "Attribution models"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#why-no-attribution-model-should-be-treated-as-absolute-truth",
									children: "Why models are not truth"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#attribution-and-the-difference-between-conversion-and-business-outcome",
									children: "Business outcomes"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#attribution-vs-incrementality",
									children: "Attribution vs incrementality"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#a-practical-attribution-framework-for-performance-marketers",
									children: "Practical framework"
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
					/* @__PURE__ */ jsxs("footer", {
						className: "pms-cta",
						children: [
							/* @__PURE__ */ jsx("span", { children: "MARKETING ATTRIBUTION" }),
							/* @__PURE__ */ jsx("h2", { children: "Measure the journey, not just the final click." }),
							/* @__PURE__ */ jsx("p", { children: "Use attribution as a decision framework while connecting acquisition data with lead quality, customers and business outcomes." }),
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
export { MarketingAttributionBlog as default };
