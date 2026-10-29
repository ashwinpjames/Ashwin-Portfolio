import { Link } from "react-router-dom";
import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/content/ga4-performance-marketing.md?raw
var ga4_performance_marketing_default = "# GA4 for Performance Marketers: What Should You Actually Track?\r\n\r\nGA4 can tell you almost everything about how people interact with a website, but that does not mean a performance marketer should track everything. The real challenge is deciding which signals are useful for acquisition decisions, which are only diagnostic, and which connect marketing activity to business outcomes.\r\n\r\nFor **GA4 for performance marketing**, the useful question is not “What reports can GA4 show me?” It is “Which measurements help me decide what to scale, fix, test or stop?”\r\n\r\nThis guide focuses on that decision layer. It explains the metrics, events, dimensions and reports worth paying attention to, how GA4 analytics fits with ad platforms, and where marketers commonly create noise instead of useful measurement.\r\n\r\n## What GA4 is actually useful for in performance marketing\r\n\r\nGA4 is an analytics system built around events and user behaviour. An event measures an interaction or occurrence, while a key event identifies an action that is particularly important to the business. Google now distinguishes key events used for Analytics reporting from conversions used to measure important advertising actions and optimise ad campaigns. citeturn0search0turn0search1\r\n\r\nThat distinction matters because performance marketing has two related but different jobs.\r\n\r\nFirst, you need to understand **what happened on the site or app**. Second, you need to understand **whether what happened was commercially useful**.\r\n\r\nGA4 is strongest when it helps connect those two questions.\r\n\r\nFor example, imagine a lead generation campaign. You could report sessions, page views, scrolls and form starts. Those numbers may tell you that people are engaging. But if the actual business objective is qualified leads, the measurement system should eventually answer questions such as:\r\n\r\n* Which acquisition sources brought users to the site?\r\n* Which campaigns produced meaningful key events?\r\n* Which landing pages helped or hurt the journey?\r\n* Which actions happened before a lead was submitted?\r\n* Which campaigns or channels are associated with higher quality outcomes?\r\n\r\nThe goal is not a bigger dashboard. The goal is a better decision.\r\n\r\n## The measurement hierarchy: track from outcome backwards\r\n\r\nA practical GA4 measurement system should start with the business outcome and work backwards.\r\n\r\n| Layer | What to track | Why it matters |\r\n| --- | --- | --- |\r\n| Business outcome | Customers, revenue, qualified opportunities | Tells you whether acquisition created value |\r\n| Primary conversion action | Lead submission, purchase, booking | Measures the main action you are trying to generate |\r\n| Key event | Important actions that indicate progress | Helps analyse meaningful behaviour in GA4 |\r\n| Supporting event | Form start, CTA click, product view | Helps diagnose friction and intent |\r\n| Acquisition context | Source, medium, campaign, landing page | Helps connect behaviour to acquisition activity |\r\n| Engagement | Engagement rate, average engagement time, page or screen activity | Helps explain behaviour rather than define success |\r\n\r\nThis hierarchy prevents a common mistake: treating every event as equally important.\r\n\r\nA button click and a completed purchase are both events, but they do not carry the same commercial meaning. A form start may be useful for diagnosing a landing page, while a qualified lead may be the real business outcome.\r\n\r\nThe measurement hierarchy should reflect that difference.\r\n\r\n## 1. Acquisition: where did the user come from?\r\n\r\nThe first area to examine is acquisition. GA4 provides User acquisition and Traffic acquisition reports, but they answer different questions. User acquisition is scoped to new users, while Traffic acquisition is scoped to sessions. citeturn0search4turn0search15\r\n\r\nFor performance marketers, Traffic acquisition is often particularly useful when evaluating campaign traffic because it helps answer what brought the session to the site.\r\n\r\nUseful acquisition dimensions can include:\r\n\r\n* Session source\r\n* Session medium\r\n* Session campaign\r\n* Landing page\r\n* Device category\r\n* Country or region where relevant to the campaign\r\n\r\nThe important point is not to look at acquisition dimensions in isolation. A campaign that generates a large amount of traffic may be less useful than a smaller campaign that generates more valuable actions.\r\n\r\nA simple diagnostic view is:\r\n\r\n**Acquisition source → landing page → engagement → key event → business outcome**\r\n\r\nIf the first step looks strong but the later steps collapse, increasing spend may simply increase the amount of low value traffic entering the funnel.\r\n\r\n## 2. Engagement: use it as a diagnostic layer\r\n\r\nEngagement metrics are useful, but they are easy to overvalue.\r\n\r\nGA4's Engagement reports include Events, Pages and screens and Landing pages, among other reports. citeturn0search11\r\n\r\nFor a performance marketer, engagement should usually answer questions such as:\r\n\r\n* Did users actually interact with the landing page?\r\n* Which pages are involved in the conversion journey?\r\n* Are users reaching the sections that matter?\r\n* Is one acquisition source producing unusually weak engagement?\r\n\r\nMetrics such as engagement rate and average engagement time can help diagnose differences between traffic sources. GA4 defines average engagement time in its Traffic acquisition report as the average time a session was actively engaged with the site or app. citeturn0search3\r\n\r\nBut engagement is not a substitute for conversion measurement.\r\n\r\nA campaign can generate highly engaged users who never become customers. Conversely, a user may complete a valuable action quickly without generating impressive engagement metrics.\r\n\r\nSo treat engagement as **evidence for diagnosis**, not as the final scorecard.\r\n\r\n## 3. Events: track meaningful actions, not every possible click\r\n\r\nGA4 is event based. Events can represent interactions such as page views, link clicks and purchases, and recommended events can provide more structured data for common use cases. citeturn0search7turn0search10\r\n\r\nFor a performance marketing funnel, useful events might include:\r\n\r\n* Lead form start\r\n* Lead form submission\r\n* Contact click\r\n* Phone click\r\n* WhatsApp click\r\n* Booking initiation\r\n* Booking completion\r\n* Product view\r\n* Add to cart\r\n* Checkout start\r\n* Purchase\r\n\r\nThe exact event set depends on the business model.\r\n\r\nThe mistake is creating an event for every interaction simply because GA4 allows it. More events do not automatically produce better analytics. They can create a reporting environment where important signals are buried among low value interactions.\r\n\r\nA better rule is to ask of every event:\r\n\r\n**What decision will this event help me make?**\r\n\r\nIf the answer is unclear, the event may not deserve priority.\r\n\r\n## 4. Key events: identify the actions that matter\r\n\r\nGoogle defines a key event as an event that measures an action particularly important to the success of a business. Any collected event can be marked as a key event. citeturn0search0turn0search5\r\n\r\nFor a lead generation website, a meaningful hierarchy could look like this:\r\n\r\n**Primary:** completed lead form\r\n\r\n**Secondary:** completed booking request or qualified enquiry\r\n\r\n**Diagnostic:** form start, CTA click, phone click\r\n\r\nThis is more useful than marking every interaction as equally important.\r\n\r\nThere is another important distinction for performance marketers. Google now uses “key event” for important business actions reported in Analytics, while “conversion” refers to important actions used to measure advertising performance and optimise campaigns. A Google Ads conversion can be created from a GA4 key event. citeturn0search1turn0search6\r\n\r\nThat means the measurement architecture should be deliberate. An event can exist for behavioural analysis without necessarily being the action you want an ad platform to optimise toward.\r\n\r\n## 5. Landing pages: find where acquisition succeeds or breaks\r\n\r\nA traffic source can look healthy until you compare it with the landing page experience.\r\n\r\nFor example, two campaigns may produce similar traffic volume. One may generate substantially more meaningful actions because its landing page matches the search intent, offer and audience better.\r\n\r\nWhen analysing landing pages, compare:\r\n\r\n| Question | What to inspect |\r\n| --- | --- |\r\n| Are users arriving? | Sessions and acquisition source |\r\n| Are they engaging? | Engagement rate and average engagement time |\r\n| Are they progressing? | Key events and supporting events |\r\n| Are they converting? | Lead, booking or purchase actions |\r\n| Is the page creating friction? | Form starts versus completions |\r\n\r\nThis is where GA4 analytics becomes more useful than a platform dashboard alone. The ad platform can tell you about campaign delivery and reported conversions. GA4 can help you investigate what users did after arriving on the site.\r\n\r\n## 6. Conversion rate: useful, but only with a defined numerator\r\n\r\nConversion rate sounds simple until you ask: conversion of what?\r\n\r\nA marketer could calculate conversion rate from sessions to leads, users to purchases, landing page sessions to form submissions, or another defined action. Each calculation answers a different question.\r\n\r\nThat is why a percentage without a defined numerator and denominator can be misleading.\r\n\r\nFor example:\r\n\r\n**Landing page conversion rate = completed primary actions ÷ relevant landing page sessions**\r\n\r\nThe important part is not the formula itself. It is defining the population and action consistently enough to compare campaigns or periods.\r\n\r\nIf one report uses users and another uses sessions, the rates may not be directly comparable.\r\n\r\n## 7. Revenue and value: move beyond lead volume when possible\r\n\r\nIf the business model allows it, performance marketing measurement should eventually connect acquisition activity with revenue or customer value.\r\n\r\nA lead is an intermediate outcome. A customer is a business outcome.\r\n\r\nThat does not make lead volume useless. It means lead volume should sit inside a larger measurement chain.\r\n\r\nFor example:\r\n\r\n**Spend → traffic → leads → qualified leads → opportunities → customers → revenue**\r\n\r\nIf GA4 only captures the first few stages, marketers may have to combine GA4 with CRM or sales data to understand the later stages.\r\n\r\nThis is especially important when lead quality varies. A campaign producing 100 leads is not necessarily better than one producing 40 if the second campaign produces more qualified opportunities and customers.\r\n\r\n## 8. Attribution: use it as a model, not absolute truth\r\n\r\nGA4 can help marketers analyse how credit is assigned to touchpoints that contribute to important actions. Google also provides attribution related reporting for key events and cross channel performance, with settings that influence reporting attribution and lookback windows. citeturn0search9\r\n\r\nThis is useful, but attribution should not be treated as a perfect reconstruction of reality.\r\n\r\nAttribution is a measurement model. It helps answer a defined question about how credit is distributed under a particular set of rules.\r\n\r\nThe practical approach is to use attribution alongside other evidence:\r\n\r\n* Platform reported conversions\r\n* GA4 key events and conversions\r\n* CRM outcomes\r\n* Sales feedback\r\n* Revenue data\r\n* Landing page performance\r\n\r\nWhen these sources disagree, the answer is usually not to blindly choose the number you prefer. Investigate the measurement definitions, attribution settings, time windows and tracking implementation.\r\n\r\n## 9. Dimensions: use them to explain differences\r\n\r\nA metric tells you what happened. A dimension helps you understand how the result differs across groups.\r\n\r\nIn GA4, a dimension is an attribute of the data, such as event name. Detail reports can use dimensions to break data into different groupings and can sometimes add a second dimension for deeper analysis. citeturn0search14\r\n\r\nFor performance marketing, useful dimensions can include:\r\n\r\n* Campaign\r\n* Source and medium\r\n* Landing page\r\n* Device\r\n* Geographic area\r\n* Event name\r\n* Page or screen\r\n\r\nThe strongest analysis usually combines a metric with a meaningful dimension.\r\n\r\nInstead of asking “What is my engagement rate?” ask “Which acquisition campaigns have materially different engagement and key event rates?”\r\n\r\nInstead of asking “How many leads did we get?” ask “Which campaign and landing page combinations generated the strongest downstream outcomes?”\r\n\r\n## 10. Custom dimensions and metrics: only when standard data is not enough\r\n\r\nGA4 supports custom dimensions and metrics so businesses can analyse additional data collected from their websites or apps. Custom dimensions can be event scoped, user scoped or item scoped, while custom metrics are useful for numerical values. citeturn0search16\r\n\r\nCustomisation is valuable when the standard reporting model cannot answer an important business question.\r\n\r\nBut custom data should be designed around a real analytical need.\r\n\r\nA useful custom field might distinguish lead type, service category or another business attribute that materially changes lead quality analysis. A random collection of custom parameters can create complexity without improving decisions.\r\n\r\nBefore creating one, ask:\r\n\r\n1. What decision does this data support?\r\n2. Where is the value generated?\r\n3. Is the field consistently populated?\r\n4. Can the team interpret it correctly?\r\n5. Will it still matter six months from now?\r\n\r\n## What should a performance marketer actually track in GA4?\r\n\r\nIf you want a practical starting point, prioritise the following.\r\n\r\n| Priority | Measurement | Primary question |\r\n| --- | --- | --- |\r\n| 1 | Primary key events and conversions | Did the desired action happen? |\r\n| 2 | Acquisition source and campaign | Where did the user come from? |\r\n| 3 | Landing page | Where did the journey start? |\r\n| 4 | Conversion rate | How efficiently did relevant traffic produce the action? |\r\n| 5 | Supporting events | Where might users be progressing or dropping off? |\r\n| 6 | Engagement | Does behaviour help explain performance differences? |\r\n| 7 | Revenue or customer outcomes | Did acquisition create business value? |\r\n| 8 | Attribution views | How is credit distributed under the selected model? |\r\n\r\nThe exact priority changes by business model, but the principle remains: **track the measurements that improve decisions first.**\r\n\r\n## A practical GA4 dashboard for performance marketers\r\n\r\nYou do not need dozens of charts.\r\n\r\nA useful performance view can be built around five questions:\r\n\r\n### 1. Where did the traffic come from?\r\n\r\nUse source, medium, campaign and landing page dimensions.\r\n\r\n### 2. What did users do?\r\n\r\nUse events, engagement and page or screen behaviour to understand the journey.\r\n\r\n### 3. What important action happened?\r\n\r\nUse key events and relevant conversions rather than generic engagement alone.\r\n\r\n### 4. Which traffic produced the best outcomes?\r\n\r\nBreak down meaningful actions by acquisition source, campaign and landing page.\r\n\r\n### 5. Did those outcomes become business value?\r\n\r\nWhere reliable data exists, connect GA4 with CRM, sales and revenue information.\r\n\r\nThat structure is usually more useful than building a dashboard around whichever metrics happen to be available by default.\r\n\r\n## Common GA4 mistakes performance marketers should avoid\r\n\r\n### Tracking everything and prioritising nothing\r\n\r\nA large event list is not the same as a strong measurement system. If everything is important, the team loses the ability to distinguish signal from noise.\r\n\r\n### Optimising around engagement alone\r\n\r\nEngagement can diagnose behaviour, but it does not automatically prove commercial value.\r\n\r\n### Treating every key event as equally valuable\r\n\r\nA form start and a qualified opportunity can both be meaningful, but they represent different stages of the funnel.\r\n\r\n### Comparing incompatible metrics\r\n\r\nUser scoped and session scoped reports answer different questions. Make sure the numerator, denominator, scope and date range are understood before comparing rates.\r\n\r\n### Ignoring downstream data\r\n\r\nFor lead generation, GA4 may stop at the website conversion. If sales quality is the real objective, CRM and sales data may be required to evaluate the full funnel.\r\n\r\n### Assuming attribution is objective truth\r\n\r\nAttribution is a model. Use it as evidence within a broader measurement framework.\r\n\r\n### Building dashboards before defining decisions\r\n\r\nStart with the decisions you need to make. Then identify the data required to make them.\r\n\r\n## How GA4 should fit into the wider performance marketing stack\r\n\r\nGA4 should not be treated as the only source of truth for every question.\r\n\r\nA strong measurement system can look like this:\r\n\r\n**Ad platforms** → delivery, spend, platform reporting and optimisation signals\r\n\r\n**GA4** → website behaviour, acquisition analysis, events and cross channel analytics\r\n\r\n**GTM or another tagging system** → implementation and event deployment\r\n\r\n**CRM** → lead status, qualification, sales stages and customer outcomes\r\n\r\n**Business reporting** → revenue, profitability and commercial decisions\r\n\r\nEach system has a job.\r\n\r\nThe mistake is expecting one platform to answer every question.\r\n\r\nIf you are working as a **[Performance Marketing Specialist](https://ashwinjames.com/)**, the real advantage comes from understanding how these measurement layers connect rather than memorising every report inside GA4.\r\n\r\n## A simple weekly GA4 routine for performance marketers\r\n\r\nA practical weekly review can be structured like this:\r\n\r\n1. Check acquisition trends and identify meaningful changes in traffic quality.\r\n2. Review primary key events and conversions against the previous period.\r\n3. Break important outcomes down by source, medium, campaign and landing page.\r\n4. Investigate unusual changes using supporting events and engagement data.\r\n5. Compare website outcomes with ad platform reporting.\r\n6. Where possible, compare leads with CRM qualification and sales outcomes.\r\n7. Record the decision that follows from the evidence: scale, test, fix, investigate or leave unchanged.\r\n\r\nThe last step is the one most dashboards miss.\r\n\r\nAnalytics becomes useful when it changes what you do next.\r\n\r\n## Frequently asked questions\r\n\r\n### Is GA4 useful for performance marketing?\r\n\r\nYes. GA4 can help performance marketers analyse acquisition, website behaviour, events, key events, conversions and attribution. Its value increases when the measurement structure is connected to actual business objectives.\r\n\r\n### What are the most important GA4 metrics for a performance marketer?\r\n\r\nThere is no universal list. Primary key events and conversions, acquisition dimensions, conversion rate, landing page performance and downstream customer or revenue outcomes are usually more important than vanity metrics. Engagement metrics are useful mainly as diagnostic evidence.\r\n\r\n### Should I track every event in GA4?\r\n\r\nNo. Track events that answer useful business or optimisation questions. Recommended events can provide richer reporting for relevant use cases, but the event plan should still be designed around the customer journey and business objective. citeturn0search7\r\n\r\n### What is the difference between a GA4 key event and a conversion?\r\n\r\nGoogle currently uses key event for important actions reported in Analytics. A conversion is an important action used to measure advertising performance and optimise campaigns. A Google Ads conversion can be created from a GA4 key event. citeturn0search1turn0search6\r\n\r\n### Should GA4 replace Google Ads reporting?\r\n\r\nNo. They serve different purposes. Google Ads is essential for campaign delivery, spend and advertising optimisation, while GA4 provides broader website and cross channel behavioural analysis. The two should be compared and connected rather than treated as competing dashboards.\r\n\r\n### Can GA4 tell me which leads are qualified?\r\n\r\nNot by itself in every lead generation setup. GA4 can measure the website actions and acquisition context, while qualification and sales outcomes may live in a CRM. Connecting those systems gives a more complete view of lead quality.\r\n\r\n## Conclusion: track what helps you make the next decision\r\n\r\nThe biggest mistake in GA4 for performance marketing is thinking the job is to collect more data.\r\n\r\nThe job is to build a measurement system that makes performance decisions clearer.\r\n\r\nStart with the business outcome. Define the primary action. Track the supporting events that explain the journey. Use acquisition dimensions to understand where users came from. Use engagement and behaviour as diagnostic evidence. Then connect GA4 with ad platforms, CRM data and revenue information where the business needs a deeper view.\r\n\r\nGA4 analytics becomes genuinely useful when it moves beyond reporting activity and helps answer a practical question: **what should we do next?**\r\n\r\nFor a performance marketer, that is the standard the measurement system should meet.\r\n\r\n## Further reading\r\n\r\n* [Google Analytics: About key events](https://support.google.com/analytics/answer/9267568)\r\n* [Google Analytics: Conversions vs. key events](https://support.google.com/analytics/answer/13965727)\r\n* [Google Analytics: Traffic acquisition report](https://support.google.com/analytics/answer/12923437)\r\n* [Google Analytics: User acquisition vs. Traffic acquisition](https://support.google.com/analytics/answer/14731736)\r\n";
// src/pages/Ga4PerformanceMarketingBlog.jsx
var faq = [
	["Is GA4 useful for performance marketing?", "Yes. GA4 can help performance marketers analyse acquisition, website behaviour, events, key events, conversions and attribution. Its value increases when the measurement structure is connected to actual business objectives."],
	["What are the most important GA4 metrics for a performance marketer?", "There is no universal list. Primary key events and conversions, acquisition dimensions, conversion rate, landing page performance and downstream customer or revenue outcomes are usually more important than vanity metrics. Engagement metrics are useful mainly as diagnostic evidence."],
	["Should I track every event in GA4?", "No. Track events that answer useful business or optimisation questions. Recommended events can provide richer reporting for relevant use cases, but the event plan should still be designed around the customer journey and business objective."],
	["What is the difference between a GA4 key event and a conversion?", "Google currently uses key event for important actions reported in Analytics. A conversion is an important action used to measure advertising performance and optimise campaigns. A Google Ads conversion can be created from a GA4 key event."],
	["Should GA4 replace Google Ads reporting?", "No. They serve different purposes. Google Ads is essential for campaign delivery, spend and advertising optimisation, while GA4 provides broader website and cross channel behavioural analysis."],
	["Can GA4 tell me which leads are qualified?", "Not by itself in every lead generation setup. GA4 can measure website actions and acquisition context, while qualification and sales outcomes may live in a CRM. Connecting those systems gives a more complete view of lead quality."]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: "GA4 for Performance Marketers: What Should You Actually Track?",
	description: "A practical guide to GA4 for performance marketing, covering acquisition, events, key events, conversion rate, landing pages, attribution, GA4 analytics and business outcomes.",
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
	mainEntityOfPage: "https://ashwinjames.com/blog/ga4-performance-marketing",
	keywords: "GA4 for performance marketing, GA4 analytics"
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
function MeasurementFlow() {
	const stages = [
		[
			"01",
			"Acquire",
			"Source · medium · campaign"
		],
		[
			"02",
			"Engage",
			"Landing page · behaviour"
		],
		[
			"03",
			"Act",
			"Events · key events"
		],
		[
			"04",
			"Qualify",
			"Lead quality · CRM"
		],
		[
			"05",
			"Value",
			"Customers · revenue"
		]
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-funnel",
		"aria-label": "GA4 performance measurement flow",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THE MEASUREMENT CHAIN"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Track the journey, not every click." }),
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
		"aria-label": "GA4 decision metrics",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THE DECISION LAYER"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Measure what changes the next marketing decision." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-metric-grid",
				children: [
					[
						"ACQUISITION",
						"Where did users come from?",
						"Use source, medium, campaign and landing page to understand traffic quality."
					],
					[
						"ACTION",
						"Did the important action happen?",
						"Prioritise primary key events and conversions over generic activity."
					],
					[
						"DIAGNOSIS",
						"What explains the result?",
						"Use engagement and supporting events to investigate friction or intent."
					],
					[
						"VALUE",
						"Did acquisition create value?",
						"Connect analytics with CRM, customer and revenue outcomes where possible."
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
			/* @__PURE__ */ jsx("h2", { children: "Turn GA4 analytics into an operating rhythm." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-learning-track",
				children: [
					[
						"01",
						"Start with the outcome",
						"Define the business result before deciding which events to track."
					],
					[
						"02",
						"Map the customer journey",
						"Connect acquisition, landing pages, actions, qualification and customer outcomes."
					],
					[
						"03",
						"Separate priority levels",
						"Distinguish primary actions from supporting and diagnostic events."
					],
					[
						"04",
						"Break down the result",
						"Use campaign, source, landing page, device and other relevant dimensions."
					],
					[
						"05",
						"Reconcile the stack",
						"Compare GA4 with ad platforms, CRM and business reporting when definitions differ."
					],
					[
						"06",
						"Make the decision",
						"Use the evidence to scale, test, fix, investigate or leave the campaign unchanged."
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
		"aria-labelledby": "ga4-faq-heading",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "FAQ"
			}),
			/* @__PURE__ */ jsx("h2", {
				id: "ga4-faq-heading",
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
function Ga4PerformanceMarketingBlog() {
	useEffect(() => {
		document.title = "GA4 for Performance Marketers: What Should You Actually Track? | Ashwin James";
		const description = "A practical guide to GA4 for performance marketing, covering acquisition, events, key events, conversion rate, landing pages, attribution, GA4 analytics and business outcomes.";
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
		canonical.setAttribute("href", "https://ashwinjames.com/blog/ga4-performance-marketing");
		return () => {
			document.title = "Performance Marketing Specialist in UAE";
		};
	}, []);
	const renderedArticle = renderMarkdown(ga4_performance_marketing_default.replace(/cite[^]+/g, "").replace(/^# .+\n\n/, ""));
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
								children: "PERFORMANCE MARKETING · GA4 · ANALYTICS"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-meta",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Analytics" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "14 min read" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "September 15, 2026" })
								]
							}),
							/* @__PURE__ */ jsx("h1", { children: "GA4 for Performance Marketers: What Should You Actually Track?" }),
							/* @__PURE__ */ jsx("p", {
								className: "pms-lede",
								children: "A practical framework for deciding which GA4 signals matter for acquisition, optimisation, lead quality and business outcomes."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-links",
								children: [
									/* @__PURE__ */ jsx(Link, {
										to: "/services/performance-marketing",
										children: "Performance Marketing"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/performance-marketing-metrics",
										children: "Performance Marketing Metrics"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/google-ads-conversion-tracking",
										children: "Google Ads Conversion Tracking"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/crm-lead-tracking-paid-ads",
										children: "CRM Lead Tracking"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsx(MeasurementFlow, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "pms-article-grid",
						children: [/* @__PURE__ */ jsxs("aside", {
							className: "pms-toc",
							children: [
								/* @__PURE__ */ jsx("span", { children: "ON THIS PAGE" }),
								/* @__PURE__ */ jsx("a", {
									href: "#what-ga4-is-actually-useful-for-in-performance-marketing",
									children: "What GA4 is useful for"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#the-measurement-hierarchy-track-from-outcome-backwards",
									children: "Measurement hierarchy"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#1-acquisition-where-did-the-user-come-from",
									children: "Acquisition"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#2-engagement-use-it-as-a-diagnostic-layer",
									children: "Engagement"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#3-events-track-meaningful-actions-not-every-possible-click",
									children: "Events"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#4-key-events-identify-the-actions-that-matter",
									children: "Key events"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#what-should-a-performance-marketer-actually-track-in-ga4",
									children: "What to track"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#common-ga4-mistakes-performance-marketers-should-avoid",
									children: "Common mistakes"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#conclusion-track-what-helps-you-make-the-next-decision",
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
							/* @__PURE__ */ jsx("span", { children: "GA4 FOR PERFORMANCE MARKETING" }),
							/* @__PURE__ */ jsx("h2", { children: "Build measurement around decisions, not dashboard volume." }),
							/* @__PURE__ */ jsx("p", { children: "Connect acquisition, behaviour, key events, CRM outcomes and revenue so your analytics stack helps you decide what to scale, test and fix." }),
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
export { Ga4PerformanceMarketingBlog as default };
