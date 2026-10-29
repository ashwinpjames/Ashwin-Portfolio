import { Link } from "react-router-dom";
import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/content/google-ads-conversion-tracking.md?raw
var google_ads_conversion_tracking_default = "# Google Ads Conversion Tracking: What Businesses Need to Measure\r\n\r\nGoogle Ads conversion tracking is the measurement layer that tells you what happened after someone interacted with an ad. Clicks and impressions show activity, but conversion tracking connects that activity to actions that matter to the business: enquiries, calls, purchases, bookings, sign ups or other defined outcomes.\r\n\r\nThe important question is not simply whether conversion tracking is installed. It is whether the right business actions are being measured, attributed consistently and fed back into optimisation. This guide explains what to measure, how Google Ads, GA4 and Google Tag Manager fit together, and how to diagnose a tracking setup that looks active but produces unreliable data.\r\n\r\n## What Google Ads conversion tracking actually measures\r\n\r\nA conversion is an action you have decided is valuable. Google Ads can measure website actions, app actions, phone calls and offline outcomes, depending on the business and implementation. The exact conversion model should follow the customer journey rather than the easiest event to tag.\r\n\r\nFor a lead generation business, a useful measurement path might look like this:\r\n\r\n| Stage | Example measurement | Why it matters |\r\n| --- | --- | --- |\r\n| Ad interaction | Clicks, impressions, search terms | Shows demand and response |\r\n| Website behaviour | Landing page views, form starts, key actions | Shows what happens after the click |\r\n| Lead | Form submission, qualified call, enquiry | Measures acquisition |\r\n| Qualification | Qualified lead, opportunity | Separates volume from quality |\r\n| Customer | Sale, booking, signed client | Connects marketing to commercial outcome |\r\n| Revenue | Revenue or customer value | Allows economic evaluation |\r\n\r\nThe mistake is treating every tracked event as equally valuable. A button click can be technically correct and still be a weak optimisation signal if most people who click it never become leads or customers.\r\n\r\n## The conversion actions businesses should usually measure\r\n\r\nThe right conversion actions depend on the business model. A lead generation company and an ecommerce store should not use the same measurement plan.\r\n\r\n### Lead generation\r\n\r\nFor a lead generation funnel, useful conversion actions can include:\r\n\r\n* Completed enquiry forms\r\n* Qualified phone calls\r\n* Appointment bookings\r\n* High intent WhatsApp or contact actions when they represent a meaningful business step\r\n* Qualified leads imported back from the CRM\r\n* Sales or customers generated from those leads\r\n\r\nA form submission is often a reasonable first conversion, but it should not be the end of the measurement system. If the business can identify which leads become qualified opportunities and customers, those outcomes provide much stronger feedback for optimisation.\r\n\r\n### Ecommerce\r\n\r\nFor ecommerce, the core conversion is usually the purchase. Measurement should capture the transaction and, where appropriate, its value and currency so that advertising performance can be evaluated against revenue rather than only order count.\r\n\r\nOther ecommerce events such as add to cart or begin checkout can be useful diagnostic events. They should not automatically replace the purchase as the primary business outcome.\r\n\r\n### Service businesses\r\n\r\nService businesses often have several possible conversion points: calls, forms, bookings and consultations. The measurement plan should distinguish between a low friction contact action and a commercially meaningful outcome.\r\n\r\nFor example, a click on a phone number can be tracked as a conversion, but if the business can determine which calls become qualified enquiries, that later outcome is more useful for assessing campaign quality.\r\n\r\n## Primary versus secondary conversions\r\n\r\nOne of the most important decisions is deciding which conversion actions should influence optimisation and which should be observed for analysis.\r\n\r\nGoogle Ads distinguishes between conversion actions that are included in the main Conversions reporting and optimisation process and actions that are treated as secondary observation signals. The distinction matters because automated bidding depends on the signals you give it.\r\n\r\nIf every micro action is treated as equally important, the platform can receive a noisy picture of what success means. A business might accidentally optimise toward form starts, page views or low intent interactions instead of qualified enquiries or purchases.\r\n\r\nA useful rule is:\r\n\r\n> **Primary conversion = the business outcome you want the campaign to optimise toward. Secondary conversion = an action that helps you understand the journey without defining success.**\r\n\r\nThe exact configuration should reflect the account's objectives and data quality. There is no universal list of conversions that every business should mark as primary.\r\n\r\n## Google Tag Manager, GA4 and Google Ads: what each tool does\r\n\r\nThese tools are often treated as interchangeable because they can all appear in a tracking setup. They are not the same thing.\r\n\r\n### Google Ads\r\n\r\nGoogle Ads is where advertising conversion actions are configured and used for campaign reporting and optimisation. A direct Google Ads conversion setup can measure actions that occur after an interaction with an ad.\r\n\r\n### GA4\r\n\r\nGA4 is designed to analyse user and conversion behaviour across the website or app, including traffic from sources beyond Google Ads. Events can be marked as key events in Analytics and relevant events can then be imported into Google Ads.\r\n\r\nThat means GA4 can be useful as the broader analytics layer while Google Ads remains the advertising optimisation layer.\r\n\r\n### Google Tag Manager\r\n\r\nGoogle Tag Manager is the deployment and control layer. It can be used to implement Google tags, Google Ads conversion tracking and other measurement tags without repeatedly editing the website code.\r\n\r\nGoogle currently recommends implementing the Google tag in GTM when GTM is used for Google Ads measurement. A Conversion Linker can also help preserve ad click information for measurement when the implementation requires it.\r\n\r\nThe important distinction is simple:\r\n\r\n| Tool | Primary role |\r\n| --- | --- |\r\n| Google Ads | Advertising measurement and optimisation |\r\n| GA4 | Broader website and app analytics |\r\n| Google Tag Manager | Tag deployment and measurement control |\r\n| CRM | Lead qualification and customer outcome data |\r\n\r\nA strong measurement system connects these layers rather than expecting one platform to answer every question.\r\n\r\n## How Google Ads conversion tracking works technically\r\n\r\nFor website conversion measurement, Google uses information associated with the ad interaction to help connect the later conversion with the advertising interaction. Google documentation describes the use of identifiers such as the GCLID and sitewide tagging to preserve the information needed for measurement.\r\n\r\nA simplified journey looks like this:\r\n\r\n**Ad click → landing page → click information captured → conversion action → conversion data sent → Google Ads reporting and optimisation**\r\n\r\nThe implementation can use the Google tag directly or Google Tag Manager. When GTM is used, Google documents a Conversion Linker setup that can detect ad click information in landing page URLs and store it in first party storage on the domain.\r\n\r\nThis is why tracking should not be treated as a single conversion tag pasted onto a thank you page. The surrounding tagging architecture matters.\r\n\r\n## Where GA4 fits into conversion tracking\r\n\r\nGA4 becomes useful when you need a broader view of customer behaviour across channels.\r\n\r\nA common architecture is:\r\n\r\n**Website event → GA4 key event → Google Ads import → campaign optimisation**\r\n\r\nGoogle allows Analytics conversions to be imported into Google Ads. The current Google documentation notes that the relevant Analytics event must be configured as a key event and that the Analytics property must be linked to the correct Google Ads account. Google also notes that account linking or event changes can take time to propagate before import options appear.\r\n\r\nHowever, importing every GA4 key event into Google Ads is not automatically a good strategy. The event still needs to represent a meaningful advertising outcome.\r\n\r\nFor example, tracking a form submission in GA4 can be useful. But if the business can also distinguish a qualified lead from an incomplete or spam submission, the measurement architecture should be designed around that distinction rather than stopping at the first event available.\r\n\r\n## Google Tag Manager implementation: the practical sequence\r\n\r\nA reliable GTM implementation is easier when the measurement plan is defined before tags are created.\r\n\r\n### 1. Define the business outcome\r\n\r\nWrite down what the business actually considers a successful acquisition.\r\n\r\nExamples include a completed purchase, a qualified enquiry, a booked consultation or a qualified phone call.\r\n\r\n### 2. Create the conversion action in Google Ads\r\n\r\nChoose the appropriate conversion source and define the action you want Google Ads to measure. Decide whether the conversion should be used for optimisation and whether a value should be assigned.\r\n\r\n### 3. Install and configure the Google tag\r\n\r\nIf Google Tag Manager is managing Google Ads measurement, implement the Google tag through GTM and make sure it is available across the relevant site experience.\r\n\r\n### 4. Configure the Conversion Linker where required\r\n\r\nGoogle's current Tag Manager documentation recommends a Conversion Linker for setups where it is needed to preserve ad click information. In many implementations it is configured to fire on all pages so potential landing pages are covered.\r\n\r\n### 5. Create the Google Ads conversion tag\r\n\r\nThe Google Ads conversion tracking tag uses the Conversion ID and Conversion Label associated with the conversion action. Depending on the business, you may also pass conversion value, transaction ID or currency.\r\n\r\n### 6. Create a reliable trigger\r\n\r\nThe trigger should fire when the actual conversion occurs, not merely when a user reaches a page that happens to look like a success state.\r\n\r\nFor example, a form submission event generated after a confirmed successful submission is generally a stronger implementation than a generic click trigger on the submit button.\r\n\r\n### 7. Test before publishing\r\n\r\nUse GTM Preview and debugging tools to confirm that the expected tags fire once, under the right conditions, with the expected values.\r\n\r\nDo not treat a tag firing in Preview as proof that the entire business measurement system is correct. Test the downstream Google Ads reporting as well.\r\n\r\n## What businesses should measure beyond the conversion count\r\n\r\nConversion count is important, but it is not enough for most performance marketing decisions.\r\n\r\nA practical measurement framework should answer at least these questions:\r\n\r\n| Question | Useful metric or signal |\r\n| --- | --- |\r\n| Are people responding to the ads? | CTR, clicks, search terms |\r\n| Are clicks becoming actions? | Conversion rate |\r\n| What does an acquisition cost? | CPA or CPL |\r\n| Are leads useful? | Qualified lead rate |\r\n| Are leads becoming opportunities? | Opportunity rate |\r\n| Are opportunities becoming customers? | Customer conversion rate |\r\n| What does a customer cost? | CAC |\r\n| Is acquisition economically viable? | Revenue, ROAS, margin or customer value |\r\n\r\nThis is where a [Performance Marketing Specialist](https://ashwinjames.com/) should think beyond the ad platform dashboard. The goal is to connect media data with the commercial system that follows it.\r\n\r\n## Lead quality is the missing layer in many tracking setups\r\n\r\nA business can have accurate conversion tracking and still make poor marketing decisions if the conversion itself is poorly defined.\r\n\r\nImagine a hypothetical lead generation campaign that records 100 form submissions. If only 20 are qualified and 4 become customers, the platform's conversion count alone hides the quality problem.\r\n\r\nA better measurement chain is:\r\n\r\n**Lead → Qualified lead → Opportunity → Customer → Revenue**\r\n\r\nThe further the data travels down this chain, the more useful it becomes for business decision making. The challenge is that later stage data is often harder to connect back to the original advertising interaction.\r\n\r\nThat is where CRM integration, offline conversion measurement and appropriate enhanced conversion implementations can become important.\r\n\r\n## Enhanced conversions and better measurement signals\r\n\r\nGoogle's enhanced conversions features can supplement existing conversion measurement with hashed first party customer data. For web conversions, this can include information such as an email address or phone number that is securely hashed before being sent for matching.\r\n\r\nFor lead generation, the broader goal is to improve the ability to connect customer provided information and downstream outcomes with advertising interactions.\r\n\r\nEnhanced conversions are not a replacement for a clear conversion strategy. Better matching cannot fix a badly defined conversion event. It is a measurement enhancement that should sit on top of a sound tracking architecture and appropriate consent and data handling practices.\r\n\r\n## Common Google Ads conversion tracking mistakes\r\n\r\n### Tracking clicks instead of outcomes\r\n\r\nA button click is easy to measure, but it does not necessarily represent a completed business action. Use click events when they are genuinely meaningful or when they are needed as diagnostic events.\r\n\r\n### Counting every event as a primary conversion\r\n\r\nMore conversion actions do not automatically mean better optimisation. Separate the events that define success from the events that provide context.\r\n\r\n### Double counting conversions\r\n\r\nDuplicate tags, multiple triggers or overlapping GA4 and Google Ads implementations can produce inflated conversion totals. Transaction IDs and careful event design can help prevent duplicate reporting where applicable.\r\n\r\n### Firing tags on page load without confirming the action\r\n\r\nA thank you page can work well when it is genuinely reached only after a successful conversion. If users can revisit the URL, access it directly or trigger it without completing the intended action, the conversion count can become unreliable.\r\n\r\n### Ignoring redirects and URL parameters\r\n\r\nGoogle's documentation specifically highlights the importance of preserving ad click information such as the GCLID. Redirects or site configurations that strip those parameters can reduce measurement accuracy.\r\n\r\n### Optimising to a low quality conversion\r\n\r\nA perfectly tracked spam form is still a bad optimisation signal. Measurement accuracy and business relevance are separate problems, and both need to be solved.\r\n\r\n### Never checking the tracking after launch\r\n\r\nTracking is part of the marketing infrastructure. Website changes, forms, consent systems, GTM edits and landing page redesigns can break measurement. A tracking setup should therefore be tested periodically rather than assumed to remain correct forever.\r\n\r\n## A practical Google Ads conversion tracking checklist\r\n\r\nBefore treating a Google Ads account as properly tracked, check the following:\r\n\r\n1. The business has clearly defined what counts as a valuable conversion.\r\n2. Primary and secondary conversion actions reflect that definition.\r\n3. Google tag implementation is present where required.\r\n4. Google Tag Manager tags have clear triggers and do not overlap unnecessarily.\r\n5. Conversion Linker is configured where required by the implementation.\r\n6. Conversion tags fire once under the intended conditions.\r\n7. Conversion values and currencies are correct where values are used.\r\n8. Transaction IDs are passed where duplicate transaction protection is relevant.\r\n9. GA4 events and key events are named consistently with the measurement plan.\r\n10. Imported GA4 conversions are not unintentionally duplicating direct Google Ads conversions.\r\n11. Lead quality data can be connected to CRM outcomes where the business has that capability.\r\n12. Consent and customer data handling follow applicable requirements and platform policies.\r\n13. Changes to forms, landing pages and tag containers are included in tracking QA.\r\n\r\n## How to diagnose a conversion tracking problem\r\n\r\nWhen conversion data suddenly drops or looks inflated, do not immediately rebuild the account. Diagnose the measurement path in order.\r\n\r\n**First, check whether the conversion event occurs.** If the website or form no longer produces the event, the issue may be on the site or in GTM.\r\n\r\n**Second, check whether the tag fires.** Use GTM Preview, Tag Assistant or the relevant browser debugging tools.\r\n\r\n**Third, check whether the conversion is received by the advertising platform.** A tag firing locally is not the same as a conversion appearing correctly in Google Ads.\r\n\r\n**Fourth, compare the event count with the actual business system.** If the website reports 50 leads but the CRM contains 20, investigate duplicates, spam, attribution and event definitions before changing campaign strategy.\r\n\r\n**Finally, check recent changes.** Form redesigns, URL changes, consent updates, GTM container edits and analytics configuration changes are common places to look.\r\n\r\nThis sequence matters because a campaign can look like a performance problem when the real issue is measurement.\r\n\r\n## The measurement model I would use for a lead generation business\r\n\r\nFor a lead generation business, I would structure the measurement hierarchy around commercial progression rather than platform activity:\r\n\r\n**Ad interaction → website conversion → lead → qualified lead → opportunity → customer → revenue**\r\n\r\nThe first layers help explain campaign behaviour. The later layers help determine whether the acquisition system is actually working.\r\n\r\nThe most useful reporting question is therefore not “How many conversions did Google Ads generate?” It is “Which advertising inputs are producing valuable business outcomes, at what economic cost?”\r\n\r\nThat distinction changes how campaigns are evaluated. A campaign with a higher CPL can be healthier than a cheaper campaign if its leads qualify more often and produce more customers.\r\n\r\n## FAQ\r\n\r\n### What is Google Ads conversion tracking?\r\n\r\nGoogle Ads conversion tracking measures valuable actions that happen after people interact with Google Ads, such as purchases, leads, calls or other defined business outcomes. It helps advertisers understand which campaigns, ads and keywords contribute to those actions.\r\n\r\n### Do I need both GA4 and Google Ads conversion tracking?\r\n\r\nNot necessarily for every setup. Google Ads can measure conversions directly, while GA4 provides broader analytics across traffic sources and user behaviour. Many businesses use both because they answer different measurement questions.\r\n\r\n### Is Google Tag Manager the same as Google Ads conversion tracking?\r\n\r\nNo. Google Tag Manager is a tag management and deployment system. Google Ads conversion tracking is the measurement system used to record defined conversions for advertising. GTM can be used to deploy Google Ads conversion tags.\r\n\r\n### Should form submissions be primary conversions?\r\n\r\nThey can be, if a completed form is a meaningful business outcome and the submission is reliable. If the business has a strong qualification process, it can also be useful to feed qualified lead or later customer outcomes back into the measurement system.\r\n\r\n### What is the Conversion Linker in Google Tag Manager?\r\n\r\nThe Conversion Linker helps preserve ad click information so conversion tags can associate a later action with the advertising interaction that brought the visitor to the site. Google generally recommends configuring it across relevant landing pages when the implementation requires it.\r\n\r\n### What should I do if Google Ads conversions suddenly drop?\r\n\r\nStart with measurement rather than campaign changes. Check whether the website event still occurs, whether GTM triggers and tags fire, whether the conversion reaches Google Ads, whether redirects or consent changes affect measurement, and whether the CRM or backend still shows the expected business activity.\r\n\r\n## Conclusion\r\n\r\nGood Google Ads conversion tracking is not about placing more tags on a website. It is about creating a measurement system that reflects what the business actually values.\r\n\r\nStart with the outcome, define the conversion hierarchy, implement the required Google tag and tracking architecture, connect GA4 and Google Tag Manager where they add value, test the complete path and then connect advertising data to lead quality and customer outcomes.\r\n\r\nWhen the measurement system is sound, Google Ads becomes more than a traffic source. It becomes a decision system that can help you understand which acquisition inputs are producing valuable customers and where the funnel needs improvement.\r\n";
// src/pages/GoogleAdsConversionTrackingBlog.jsx
var faq = [
	["What is Google Ads conversion tracking?", "Google Ads conversion tracking measures valuable actions that happen after people interact with Google Ads, such as purchases, leads, calls or other defined business outcomes. It helps advertisers understand which campaigns, ads and keywords contribute to those actions."],
	["Do I need both GA4 and Google Ads conversion tracking?", "Not necessarily for every setup. Google Ads can measure conversions directly, while GA4 provides broader analytics across traffic sources and user behaviour. Many businesses use both because they answer different measurement questions."],
	["Is Google Tag Manager the same as Google Ads conversion tracking?", "No. Google Tag Manager is a tag management and deployment system. Google Ads conversion tracking is the measurement system used to record defined conversions for advertising. GTM can be used to deploy Google Ads conversion tags."],
	["Should form submissions be primary conversions?", "They can be, if a completed form is a meaningful business outcome and the submission is reliable. If the business has a strong qualification process, it can also be useful to feed qualified lead or later customer outcomes back into the measurement system."],
	["What is the Conversion Linker in Google Tag Manager?", "The Conversion Linker helps preserve ad click information so conversion tags can associate a later action with the advertising interaction that brought the visitor to the site. Google generally recommends configuring it across relevant landing pages when the implementation requires it."],
	["What should I do if Google Ads conversions suddenly drop?", "Start with measurement rather than campaign changes. Check whether the website event still occurs, whether GTM triggers and tags fire, whether the conversion reaches Google Ads, whether redirects or consent changes affect measurement, and whether the CRM or backend still shows the expected business activity."]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: "Google Ads Conversion Tracking: What Businesses Need to Measure",
	description: "A practical guide to Google Ads conversion tracking, including what to measure, how GA4 and Google Tag Manager fit together, and how to diagnose tracking problems.",
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
	mainEntityOfPage: "https://ashwinjames.com/blog/google-ads-conversion-tracking",
	keywords: "Google Ads conversion tracking, conversion tracking, GA4, Google Tag Manager"
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
function TrackingFlow() {
	const stages = [
		[
			"01",
			"Ad interaction",
			"Click · search · source"
		],
		[
			"02",
			"Website action",
			"Event · form · purchase"
		],
		[
			"03",
			"Conversion",
			"Google Ads measurement"
		],
		[
			"04",
			"Qualification",
			"CRM · opportunity · customer"
		],
		[
			"05",
			"Business value",
			"Revenue · CAC · value"
		]
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-funnel",
		"aria-label": "Google Ads conversion tracking flow",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THE MEASUREMENT CHAIN"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Track the journey, not just the conversion counter." }),
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
function MeasurementCards() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-metric-panel",
		"aria-label": "Conversion tracking measurement layers",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "WHAT TO MEASURE"
			}),
			/* @__PURE__ */ jsx("h2", { children: "The event is only the beginning." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-metric-grid",
				children: [
					[
						"CONVERSION",
						"Business action",
						"The event you define as valuable, such as a lead, booking or purchase."
					],
					[
						"QUALITY",
						"Lead quality",
						"Shows whether tracked leads are becoming qualified opportunities."
					],
					[
						"CUSTOMER",
						"Commercial outcome",
						"Connects advertising activity with customers instead of stopping at leads."
					],
					[
						"VALUE",
						"Economic result",
						"Revenue, CAC, ROAS or customer value puts acquisition into business context."
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
function ImplementationModel() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-learning",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THE IMPLEMENTATION MODEL"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Build measurement in the same order the business makes decisions." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-learning-track",
				children: [
					[
						"01",
						"Define the outcome",
						"Decide what the business actually considers a successful acquisition."
					],
					[
						"02",
						"Map the event",
						"Identify where the action occurs and what event should represent it."
					],
					[
						"03",
						"Implement the tags",
						"Use the Google tag, Google Tag Manager and Conversion Linker where appropriate."
					],
					[
						"04",
						"Test the signal",
						"Confirm the tag fires once, under the right conditions, with the expected data."
					],
					[
						"05",
						"Connect quality",
						"Bring CRM qualification and customer outcomes into the measurement model."
					],
					[
						"06",
						"Optimise carefully",
						"Use primary conversions for optimisation and secondary events for diagnosis."
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
		"aria-labelledby": "conversion-tracking-faq-heading",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "FAQ"
			}),
			/* @__PURE__ */ jsx("h2", {
				id: "conversion-tracking-faq-heading",
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
function GoogleAdsConversionTrackingBlog() {
	useEffect(() => {
		document.title = "Google Ads Conversion Tracking: What Businesses Need to Measure | Ashwin James";
		const description = "Learn what Google Ads conversion tracking should measure, how GA4 and Google Tag Manager fit together, and how to diagnose tracking problems.";
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
		canonical.setAttribute("href", "https://ashwinjames.com/blog/google-ads-conversion-tracking");
		return () => {
			document.title = "Performance Marketing Specialist in UAE";
		};
	}, []);
	const renderedArticle = renderMarkdown(google_ads_conversion_tracking_default.replace(/^# .+\n\n/, "").replace(/\n## FAQ[\s\S]*$/, ""));
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
								children: "GOOGLE ADS · CONVERSION TRACKING · ANALYTICS"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-meta",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Google Ads" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "14 min read" }),
									/* @__PURE__ */ jsx("span", { children: "•" }),
									/* @__PURE__ */ jsx("span", { children: "September 15, 2026" })
								]
							}),
							/* @__PURE__ */ jsx("h1", { children: "Google Ads Conversion Tracking: What Businesses Need to Measure" }),
							/* @__PURE__ */ jsx("p", {
								className: "pms-lede",
								children: "A practical guide to measuring the actions that matter, connecting Google Ads with GA4 and Google Tag Manager, and turning conversion data into better acquisition decisions."
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
										to: "/resources/lead-quality-framework",
										children: "Lead Quality Framework"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsx(TrackingFlow, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "pms-article-grid",
						children: [/* @__PURE__ */ jsxs("aside", {
							className: "pms-toc",
							children: [
								/* @__PURE__ */ jsx("span", { children: "ON THIS PAGE" }),
								/* @__PURE__ */ jsx("a", {
									href: "#what-google-ads-conversion-tracking-actually-measures",
									children: "What it measures"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#the-conversion-actions-businesses-should-usually-measure",
									children: "Conversion actions"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#google-tag-manager-ga4-and-google-ads-what-each-tool-does",
									children: "GTM, GA4 and Google Ads"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#how-google-ads-conversion-tracking-works-technically",
									children: "How it works"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#google-tag-manager-implementation-the-practical-sequence",
									children: "GTM implementation"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#lead-quality-is-the-missing-layer-in-many-tracking-setups",
									children: "Lead quality"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#common-google-ads-conversion-tracking-mistakes",
									children: "Common mistakes"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#the-measurement-model-i-would-use-for-a-lead-generation-business",
									children: "Measurement model"
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
					/* @__PURE__ */ jsx(MeasurementCards, {}),
					/* @__PURE__ */ jsx(ImplementationModel, {}),
					/* @__PURE__ */ jsx(FAQSection, {}),
					/* @__PURE__ */ jsxs("footer", {
						className: "pms-cta",
						children: [
							/* @__PURE__ */ jsx("span", { children: "GOOGLE ADS CONVERSION TRACKING" }),
							/* @__PURE__ */ jsx("h2", { children: "Measure the business outcome, not just the event." }),
							/* @__PURE__ */ jsx("p", { children: "Better tracking starts with a clear definition of value and ends with data that can explain which acquisition activity produces customers." }),
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
export { GoogleAdsConversionTrackingBlog as default };
