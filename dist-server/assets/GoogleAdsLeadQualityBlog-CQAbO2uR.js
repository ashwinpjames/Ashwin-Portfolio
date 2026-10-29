import { Link } from "react-router-dom";
import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/content/google-ads-lead-quality.md?raw
var google_ads_lead_quality_default = "# How to Optimise Google Ads for Qualified Leads Instead of More Leads\r\n\r\nMore leads can look like growth while quietly making a sales team less efficient.\r\n\r\nIf a Google Ads campaign is generating form submissions but few of those enquiries become qualified opportunities, the problem is not necessarily that the account needs more traffic. The bigger question is whether Google Ads is being measured and optimised around the type of lead the business actually wants.\r\n\r\n**Google Ads lead quality** is the gap between a conversion recorded in the advertising platform and a lead that sales can genuinely use. Improving it requires more than changing keywords. Search intent, ad messaging, landing pages, qualification, conversion tracking and CRM feedback all influence what the campaign learns.\r\n\r\nThis guide shows how to move from a volume based approach to a qualified lead system, with practical checks for campaign structure, conversion optimisation and measurement.\r\n\r\n## The real problem with optimising for lead volume\r\n\r\nA platform can report more conversions while the business gets fewer useful opportunities.\r\n\r\nImagine two campaigns.\r\n\r\nCampaign A generates 120 leads at AED 50 per lead, but only 8 become qualified opportunities.\r\n\r\nCampaign B generates 50 leads at AED 100 per lead, but 15 become qualified opportunities.\r\n\r\nCampaign A has the lower CPL and the higher lead count. Campaign B produces more qualified opportunities.\r\n\r\nThe lesson is simple: **CPL is a cost metric, not a quality metric.**\r\n\r\nFor lead generation, the funnel should be understood as:\r\n\r\n**Spend → Clicks → Leads → Qualified leads → Opportunities → Customers → Revenue**\r\n\r\nThe further downstream you can measure, the better you can judge whether the acquisition system is working.\r\n\r\n## What counts as a qualified lead?\r\n\r\nThere is no universal definition. Qualification should be tied to the business model.\r\n\r\nA qualified lead might meet criteria such as:\r\n\r\n1. The person needs a service the business actually provides.\r\n2. The person is in the target geography.\r\n3. The need is relevant to the offer.\r\n4. The person has a realistic buying timeline.\r\n5. The person meets important eligibility or budget requirements.\r\n6. The enquiry contains enough information for sales to take a useful next step.\r\n\r\nThe important part is consistency.\r\n\r\nIf one salesperson labels an enquiry qualified while another rejects the same type of lead, the marketing team cannot reliably learn from the CRM data.\r\n\r\nCreate a practical qualification definition before trying to optimise campaigns toward it.\r\n\r\n## 1. Start with search intent, not keyword volume\r\n\r\nOne of the biggest causes of poor Google Ads lead quality is attracting searches that are related to the topic but not to the commercial objective.\r\n\r\nA keyword can have high volume and still produce weak business outcomes.\r\n\r\nFor example, a search related to a service could represent:\r\n\r\n1. Someone researching what the service means.\r\n2. Someone looking for a free solution.\r\n3. Someone comparing providers.\r\n4. Someone looking for a job.\r\n5. Someone trying to solve a different problem.\r\n6. Someone actively looking to buy.\r\n\r\nThese users should not automatically receive the same message or conversion path.\r\n\r\nReview actual search terms and ask:\r\n\r\n**What did this person appear to want when they searched?**\r\n\r\nThen group searches by intent.\r\n\r\n| Intent | Typical behaviour | Campaign response |\r\n| --- | --- | --- |\r\n| Informational | Learning or solving a problem | Educate or exclude depending on strategy |\r\n| Commercial | Comparing providers or solutions | Demonstrate differentiation |\r\n| Transactional | Ready to enquire or buy | Make the next action easy |\r\n| Irrelevant | Not a realistic customer | Exclude or reduce exposure |\r\n\r\nDo not assume every informational query is bad. Some businesses have a deliberate education and nurture strategy. The point is to understand the intent instead of treating every click as equally valuable.\r\n\r\n## 2. Make the ad pre qualify the click\r\n\r\nAn ad does more than earn the click. It can also filter the audience.\r\n\r\nIf the message is broad enough to appeal to almost anyone, it may generate more clicks while allowing poorly matched visitors into the funnel.\r\n\r\nSpecificity can work as a qualification mechanism.\r\n\r\nIf your offer is designed for a particular geography, customer type, service level or use case, communicate that where it genuinely helps the searcher decide.\r\n\r\nThe goal is not to make the ad artificially restrictive. The goal is to make the promise accurate enough that the wrong person has less reason to click.\r\n\r\nThink of the ad as the first filter:\r\n\r\n**Search query → Ad promise → Click**\r\n\r\nA useful optimisation question is therefore not just:\r\n\r\n“Can we increase CTR?”\r\n\r\nIt is:\r\n\r\n“Can we improve the relevance of the people who choose to click?”\r\n\r\nA lower CTR can sometimes be acceptable if the remaining clicks have materially better commercial intent.\r\n\r\n## 3. Match the landing page to the promise\r\n\r\nThe landing page should continue the conversation started by the search and ad.\r\n\r\nIf the visitor searches for a specific service, sees a specific promise and then lands on a generic page, the campaign creates unnecessary friction.\r\n\r\nThe page should make four things clear quickly:\r\n\r\n**What is being offered?**\r\n\r\nThe visitor should understand the service without searching through the site.\r\n\r\n**Who is it for?**\r\n\r\nQualification can start before the form.\r\n\r\n**Why should the visitor trust it?**\r\n\r\nUse relevant evidence, process clarity, experience or other genuine trust signals. Do not invent proof.\r\n\r\n**What happens next?**\r\n\r\nThe call to action should make the next step understandable.\r\n\r\nThis is conversion optimisation at its most practical: reduce uncertainty between intent and action.\r\n\r\n## 4. Use the form as a qualification tool\r\n\r\nA lead form is not only a conversion mechanism. It can also be a filter.\r\n\r\nThe mistake is to assume that either the shortest form or the longest form is automatically best.\r\n\r\nA very short form can increase submissions but provide little information for sales.\r\n\r\nA very long form can discourage good prospects.\r\n\r\nThe right question is:\r\n\r\n**Which fields provide useful qualification information without adding unnecessary friction?**\r\n\r\nFor example, a service business may need to know the person's location, service requirement and preferred contact method. Another business may need company size, budget range or purchase timeline.\r\n\r\nThe fields should exist because the business can use the information.\r\n\r\nDo not collect information simply because it is technically possible.\r\n\r\n## 5. Separate primary conversion signals from diagnostic events\r\n\r\nGoogle Ads optimisation becomes difficult when the account treats every interaction as equally valuable.\r\n\r\nA button click can be useful for diagnosing behaviour. A form submission can represent a lead. A qualified lead is a stronger business signal. A closed customer is stronger still.\r\n\r\nThe account should make a clear distinction between actions that represent the campaign's optimisation goal and events that are mainly useful for analysis.\r\n\r\nFor a lead generation campaign, ask:\r\n\r\n**What do we actually want the bidding system to find more often?**\r\n\r\nIf the answer is “qualified leads”, measuring only form submissions creates a gap between the platform signal and the business objective.\r\n\r\nGoogle currently supports qualified lead and converted lead goals for offline lead outcomes, and its guidance recommends using those deeper stages when they reflect the business objective.\r\n\r\n## 6. Feed qualified lead data back into Google Ads\r\n\r\nThis is where lead quality becomes an optimisation problem rather than a reporting problem.\r\n\r\nSuppose a lead submits a form today. Sales later marks the lead as qualified. The business eventually knows whether that opportunity became a customer.\r\n\r\nIf only the initial form submission is sent to Google Ads, the platform receives a shallow signal.\r\n\r\nIf appropriate downstream conversion data can be imported, Google can receive information about later outcomes.\r\n\r\nGoogle's current documentation describes enhanced conversions for leads as an upgraded approach to offline lead measurement that can use hashed first party information alongside offline conversion data. Google also recommends continuing to include GCLIDs when possible to improve attribution accuracy.\r\n\r\nThis does not mean every business needs a complex data pipeline. It means the closer your measurable conversion signal is to the actual business outcome, the more useful your optimisation can become.\r\n\r\nA useful [Performance Marketing Specialist](https://ashwinjames.com/) should therefore look beyond platform metrics and understand how acquisition data connects with qualification, sales and revenue.\r\n\r\n## 7. Use conversion values when lead quality differs materially\r\n\r\nNot every qualified lead is worth the same amount.\r\n\r\nOne enquiry might represent a small transaction. Another might represent a high value customer with much greater expected revenue.\r\n\r\nWhen the economics support it, assigning meaningful conversion values can help express those differences to the advertising system.\r\n\r\nGoogle Ads supports conversion value rules to adjust conversion values based on business relevant conditions and use those values in value based bidding.\r\n\r\nThe principle is more important than the feature:\r\n\r\n**If two conversions have very different economic value, reporting them as identical can hide important information.**\r\n\r\nDo not invent precise values simply to make an account look sophisticated. Use values that have a defensible relationship with expected business outcomes.\r\n\r\n## 8. Build campaign structure around meaningful differences\r\n\r\nCampaign structure should make important decisions easier.\r\n\r\nYou may have a reason to separate campaigns by:\r\n\r\n1. Geography\r\n2. Service\r\n3. Business economics\r\n4. Search intent\r\n5. Budget ownership\r\n6. Distinct offers\r\n\r\nBut segmentation for its own sake can fragment data.\r\n\r\nA useful rule is:\r\n\r\n**Split when the difference changes what you would do.**\r\n\r\nIf two groups require different budgets, landing pages, offers or optimisation goals, separation can be useful.\r\n\r\nIf splitting them creates smaller data sets without changing the decision, keeping them together may be better.\r\n\r\nThe objective is not the most complicated account. It is the clearest account.\r\n\r\n## 9. Treat negative keywords as quality control\r\n\r\nNegative keywords can protect budget from searches that are unlikely to produce useful outcomes.\r\n\r\nCommon areas to review include:\r\n\r\n1. Jobs and careers.\r\n2. Free or do it yourself searches when the business sells a service.\r\n3. Irrelevant industries.\r\n4. Student or academic intent when it does not match the offer.\r\n5. Unrelated locations.\r\n6. Unsupported product or service variants.\r\n\r\nBut do not turn negative keyword management into a reflex.\r\n\r\nA term that looks informational may still produce valuable prospects for a business with a strong education funnel.\r\n\r\nUse actual search behaviour and downstream outcomes to decide.\r\n\r\n## 10. Optimise the offer, not just the ads\r\n\r\nSometimes poor lead quality is caused by the offer itself.\r\n\r\nIf the next step is vague, the visitor may submit simply to “find out more” without understanding what the business can actually help with.\r\n\r\nA clearer offer can improve both conversion intent and qualification.\r\n\r\nInstead of relying on a generic “Contact us” message, explain the purpose of the next step where appropriate:\r\n\r\n1. Request an assessment.\r\n2. Discuss your requirements.\r\n3. Check service eligibility.\r\n4. Get a tailored consultation.\r\n5. Request a quote.\r\n\r\nThe wording should reflect what actually happens after submission.\r\n\r\nNever use a qualification promise that the sales process cannot fulfil.\r\n\r\n## 11. Measure cost per qualified lead, not only CPL\r\n\r\nOnce the CRM provides qualification data, expand the reporting framework.\r\n\r\nUseful metrics include:\r\n\r\n**Cost per lead**\r\n\r\nTotal advertising spend divided by leads.\r\n\r\n**Lead qualification rate**\r\n\r\nQualified leads divided by total leads.\r\n\r\n**Cost per qualified lead**\r\n\r\nAdvertising spend divided by qualified leads.\r\n\r\n**Opportunity rate**\r\n\r\nOpportunities divided by qualified leads or leads, depending on the business definition.\r\n\r\n**Customer acquisition cost**\r\n\r\nAdvertising and relevant acquisition costs divided by customers acquired.\r\n\r\n**Revenue per lead**\r\n\r\nAttributed revenue divided by leads.\r\n\r\nThe exact formula should match the company's reporting definitions.\r\n\r\nThe important shift is from asking:\r\n\r\n“Which campaign gives us the cheapest leads?”\r\n\r\nto:\r\n\r\n“Which campaign gives us the most valuable outcomes for the money?”\r\n\r\n## A simple Google Ads lead quality dashboard\r\n\r\nA practical dashboard might look like this:\r\n\r\n| Metric | What it tells you |\r\n| --- | --- |\r\n| Spend | Investment level |\r\n| Clicks | Traffic generated |\r\n| Leads | Initial conversion volume |\r\n| CPL | Cost of initial lead |\r\n| Qualified leads | Commercially useful enquiries |\r\n| Qualification rate | Quality of lead volume |\r\n| Cost per qualified lead | Acquisition efficiency at the qualified stage |\r\n| Opportunities | Sales potential |\r\n| Customers | Closed outcomes |\r\n| Revenue | Business result |\r\n\r\nThis makes it much harder for a campaign with cheap but weak leads to appear successful simply because its CPL is low.\r\n\r\n## 12. Diagnose the funnel before changing bids\r\n\r\nA common optimisation mistake is to change bids whenever lead volume falls.\r\n\r\nThat can be the wrong intervention.\r\n\r\nUse this diagnostic sequence:\r\n\r\n### If clicks are low\r\n\r\nCheck search demand, keyword coverage, match types, bids, ad relevance and budget constraints.\r\n\r\n### If clicks are healthy but leads are low\r\n\r\nCheck search intent, landing page relevance, offer strength, mobile experience, form friction and conversion tracking.\r\n\r\n### If leads are high but qualified leads are low\r\n\r\nCheck keyword intent, ad messaging, qualification questions, offer positioning and CRM classification.\r\n\r\n### If qualified leads are high but customers are low\r\n\r\nInvestigate sales follow up, speed to lead, sales qualification, pricing, offer fit and the broader sales process.\r\n\r\n### If customers are high but profitability is weak\r\n\r\nLook at acquisition cost, customer value, margins, sales efficiency and budget allocation.\r\n\r\nThis is a better decision framework than applying the same optimisation tactic to every stage.\r\n\r\n## Conversion optimisation should follow the bottleneck\r\n\r\nConversion optimisation is often discussed as if there is one universal checklist.\r\n\r\nThere is not.\r\n\r\nIf the problem is traffic quality, changing button colour is unlikely to solve it.\r\n\r\nIf the problem is a weak offer, adding more negative keywords may not solve it.\r\n\r\nIf the problem is sales follow up, rewriting the landing page may have limited impact.\r\n\r\nFind the bottleneck first.\r\n\r\nA useful optimisation loop is:\r\n\r\n**Observe → Diagnose → Form a hypothesis → Change → Measure → Learn**\r\n\r\nFor example:\r\n\r\n**Observation:** The campaign generates many leads but few qualified opportunities.\r\n\r\n**Hypothesis:** Broad search intent is allowing low fit users into the funnel.\r\n\r\n**Change:** Tighten search term coverage, negative keyword logic and ad qualification language.\r\n\r\n**Primary metric:** Qualified lead rate.\r\n\r\n**Secondary metrics:** CPL, cost per qualified lead and conversion rate.\r\n\r\nThat creates a testable learning process instead of random account changes.\r\n\r\n## Do not confuse a higher qualification rate with automatic growth\r\n\r\nThere is another assumption worth challenging.\r\n\r\nImproving lead quality does not mean rejecting as many leads as possible.\r\n\r\nIf qualification rules become too strict, the business can remove legitimate prospects and reduce total opportunity.\r\n\r\nThe goal is not:\r\n\r\n**Maximum qualification rate**\r\n\r\nThe goal is:\r\n\r\n**Maximum useful business outcome for the available acquisition budget**\r\n\r\nThat means a campaign with a 60 percent qualification rate is not automatically better than one with a 35 percent qualification rate. The value and volume of the resulting opportunities still matter.\r\n\r\nQuality and scale have to be evaluated together.\r\n\r\n## A practical optimisation framework\r\n\r\nUse this framework when a campaign generates leads but sales quality is weak.\r\n\r\n| Stage | Question | Action |\r\n| --- | --- | --- |\r\n| Search | Are people searching with the right intent? | Review search terms |\r\n| Ad | Does the message pre qualify the click? | Refine messaging |\r\n| Landing page | Does the page continue the promise? | Improve relevance and clarity |\r\n| Offer | Is the next step valuable and clear? | Strengthen the offer |\r\n| Form | Does the form balance friction and qualification? | Adjust fields |\r\n| Tracking | Are meaningful actions measured? | Audit conversion setup |\r\n| CRM | Is lead quality classified consistently? | Standardise qualification |\r\n| Feedback | Does Google receive downstream outcomes? | Import appropriate lead stages |\r\n| Economics | Are valuable outcomes being prioritised? | Evaluate values and cost |\r\n\r\n## What to do this week\r\n\r\nIf your Google Ads account is producing too many weak leads, do not start by increasing the budget.\r\n\r\nStart with five checks.\r\n\r\n1. Export recent search terms and classify them by intent.\r\n2. Compare ad promises with the landing pages receiving the traffic.\r\n3. Review which conversion actions are primary and which are diagnostic.\r\n4. Calculate qualification rate and cost per qualified lead by campaign.\r\n5. Check whether qualified or converted lead outcomes can be connected back to Google Ads.\r\n\r\nThese five checks can reveal whether the problem is traffic, messaging, conversion experience, measurement or sales alignment.\r\n\r\n## FAQ\r\n\r\n### What is Google Ads lead quality?\r\n\r\nGoogle Ads lead quality refers to how useful the leads generated from advertising are to the business. A high quality lead is not simply a completed form. It is an enquiry that fits the business's target criteria and has a realistic chance of progressing toward an opportunity or customer.\r\n\r\n### How do I optimise Google Ads for qualified leads?\r\n\r\nDefine what a qualified lead means, improve search intent filtering, use ad messaging to pre qualify clicks, align landing pages with the query, design forms around useful qualification data and feed appropriate downstream outcomes back into Google Ads.\r\n\r\n### Is a higher CPL acceptable if lead quality improves?\r\n\r\nYes. A higher CPL can be acceptable when the additional cost produces materially better qualified lead, opportunity or customer outcomes. Judge acquisition efficiency at the business outcome level rather than treating low CPL as the objective.\r\n\r\n### Should every form submission be counted as a primary conversion?\r\n\r\nNot necessarily. A form submission may be an appropriate primary conversion when it represents the business goal. If the business can distinguish stronger downstream outcomes, it may be more useful to optimise around qualified or converted lead stages where the measurement setup supports it.\r\n\r\n### How can CRM data improve Google Ads optimisation?\r\n\r\nA CRM can record qualification, opportunity and customer outcomes that do not happen on the initial website visit. Connecting appropriate offline outcomes with Google Ads can provide a deeper feedback signal than measuring the initial form submission alone.\r\n\r\n### What should I do if I have many leads but poor sales results?\r\n\r\nFirst confirm that lead classification is consistent. Then examine search terms, ad messaging, landing page intent, form qualification and the sales follow up process. The problem may sit before the lead, after the lead or across both.\r\n\r\n## Conclusion\r\n\r\nOptimising Google Ads for qualified leads requires changing the definition of success.\r\n\r\nMore clicks can be useful. More leads can be useful. But neither automatically means more customers.\r\n\r\nThe stronger system connects search intent, ad messaging, landing page experience, qualification, conversion tracking, CRM outcomes and acquisition economics.\r\n\r\nStart by defining the lead you actually want. Then build the campaign so the right searches are more likely to click, the landing page makes the next step clear, and the measurement system captures what happens after the form submission.\r\n\r\nThat is the foundation of **Google Ads lead quality**.\r\n\r\nThe objective is not to make the dashboard report more conversions.\r\n\r\nIt is to make the business receive better opportunities from the budget it is already spending.\r\n\r\n### Sources for current Google Ads measurement guidance\r\n\r\n[Google Ads: About qualified leads and converted leads](https://support.google.com/google-ads/answer/11459091)\r\n\r\n[Google Ads: About enhanced conversions for leads](https://support.google.com/google-ads/answer/15713840)\r\n\r\n[Google Ads: Configure enhanced conversions for leads](https://support.google.com/google-ads/answer/11021502)\r\n\r\n[Google Ads: About conversion value rules](https://support.google.com/google-ads/answer/10518330)\r\n";
// src/pages/GoogleAdsLeadQualityBlog.jsx
var faq = [
	["What is Google Ads lead quality?", "Google Ads lead quality refers to how useful the leads generated from advertising are to the business. A high quality lead is not simply a completed form. It is an enquiry that fits the business target criteria and has a realistic chance of progressing toward an opportunity or customer."],
	["How do I optimise Google Ads for qualified leads?", "Define what a qualified lead means, improve search intent filtering, use ad messaging to pre qualify clicks, align landing pages with the query, design forms around useful qualification data and feed appropriate downstream outcomes back into Google Ads."],
	["Is a higher CPL acceptable if lead quality improves?", "Yes. A higher CPL can be acceptable when the additional cost produces materially better qualified lead, opportunity or customer outcomes. Judge acquisition efficiency at the business outcome level rather than treating low CPL as the objective."],
	["Should every form submission be counted as a primary conversion?", "Not necessarily. A form submission may be an appropriate primary conversion when it represents the business goal. If the business can distinguish stronger downstream outcomes, it may be more useful to optimise around qualified or converted lead stages where the measurement setup supports it."],
	["How can CRM data improve Google Ads optimisation?", "A CRM can record qualification, opportunity and customer outcomes that do not happen on the initial website visit. Connecting appropriate offline outcomes with Google Ads can provide a deeper feedback signal than measuring the initial form submission alone."],
	["What should I do if I have many leads but poor sales results?", "First confirm that lead classification is consistent. Then examine search terms, ad messaging, landing page intent, form qualification and the sales follow up process. The problem may sit before the lead, after the lead or across both."]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: "How to Optimise Google Ads for Qualified Leads Instead of More Leads",
	description: "Learn how to improve Google Ads lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes.",
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
	mainEntityOfPage: "https://ashwinjames.com/blog/google-ads-lead-quality",
	keywords: "Google Ads lead quality, qualified leads, conversion optimisation"
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
function QualityFlow() {
	const stages = [
		[
			"01",
			"Intent",
			"Find the right demand"
		],
		[
			"02",
			"Message",
			"Pre qualify the click"
		],
		[
			"03",
			"Page",
			"Continue the promise"
		],
		[
			"04",
			"Lead",
			"Capture useful intent"
		],
		[
			"05",
			"Outcome",
			"Optimise for business value"
		]
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-funnel",
		"aria-label": "Google Ads lead quality framework",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THE LEAD QUALITY FRAMEWORK"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Optimise the path from search intent to business outcome." }),
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
function QualityCards() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-metric-panel",
		"aria-label": "Google Ads lead quality principles",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "THREE PRACTICAL PRINCIPLES"
			}),
			/* @__PURE__ */ jsx("h2", { children: "Better lead quality starts before the form submission." }),
			/* @__PURE__ */ jsx("div", {
				className: "pms-metric-grid",
				children: [
					[
						"TRAFFIC",
						"Right intent",
						"Bring in searches that have a realistic relationship with the offer."
					],
					[
						"QUALIFICATION",
						"Right lead",
						"Use messaging, pages and forms to filter for genuine fit."
					],
					[
						"MEASUREMENT",
						"Right signal",
						"Connect qualified and converted outcomes to campaign optimisation."
					]
				].map(([label, title, text]) => /* @__PURE__ */ jsxs("div", {
					className: "pms-metric-card",
					children: [
						/* @__PURE__ */ jsx("b", { children: label }),
						/* @__PURE__ */ jsx("strong", { children: title }),
						/* @__PURE__ */ jsx("p", { children: text })
					]
				}, label))
			})
		]
	});
}
function FAQSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "pms-faq",
		"aria-labelledby": "google-ads-lead-quality-faq-heading",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pms-section-label",
				children: "FAQ"
			}),
			/* @__PURE__ */ jsx("h2", {
				id: "google-ads-lead-quality-faq-heading",
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
function GoogleAdsLeadQualityBlog() {
	useEffect(() => {
		document.title = "How to Optimise Google Ads for Qualified Leads Instead of More Leads | Ashwin James";
		const description = "Learn how to improve Google Ads lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes.";
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
		canonical.setAttribute("href", "https://ashwinjames.com/blog/google-ads-lead-quality");
		return () => {
			document.title = "Performance Marketing Specialist in UAE";
		};
	}, []);
	const renderedArticle = renderMarkdown(google_ads_lead_quality_default.replace(/^# .+\n\n/, ""));
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
								children: "GOOGLE ADS · LEAD QUALITY · CONVERSION OPTIMISATION"
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
							/* @__PURE__ */ jsx("h1", { children: "How to Optimise Google Ads for Qualified Leads Instead of More Leads" }),
							/* @__PURE__ */ jsx("p", {
								className: "pms-lede",
								children: "A practical framework for improving lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pms-links",
								children: [
									/* @__PURE__ */ jsx(Link, {
										to: "/services/google-ads",
										children: "Google Ads"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/google-ads-clicks-not-turning-into-leads",
										children: "Why Google Ads Clicks Are Not Turning Into Leads"
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog/google-ads-keyword-intent",
										children: "Google Ads Keyword Intent"
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
					/* @__PURE__ */ jsx(QualityFlow, {}),
					/* @__PURE__ */ jsxs("div", {
						className: "pms-article-grid",
						children: [/* @__PURE__ */ jsxs("aside", {
							className: "pms-toc",
							children: [
								/* @__PURE__ */ jsx("span", { children: "ON THIS PAGE" }),
								/* @__PURE__ */ jsx("a", {
									href: "#the-real-problem-with-optimising-for-lead-volume",
									children: "Lead volume"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#what-counts-as-a-qualified-lead",
									children: "Qualified lead"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#1-start-with-search-intent-not-keyword-volume",
									children: "Search intent"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#2-make-the-ad-pre-qualify-the-click",
									children: "Ad qualification"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#3-match-the-landing-page-to-the-promise",
									children: "Landing page"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#5-separate-primary-conversion-signals-from-diagnostic-events",
									children: "Conversion signals"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#6-feed-qualified-lead-data-back-into-google-ads",
									children: "Offline outcomes"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#11-measure-cost-per-qualified-lead-not-only-cpl",
									children: "Measurement"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#conversion-optimisation-should-follow-the-bottleneck",
									children: "Optimisation"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#what-to-do-this-week",
									children: "What to do this week"
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
					/* @__PURE__ */ jsx(QualityCards, {}),
					/* @__PURE__ */ jsx(FAQSection, {}),
					/* @__PURE__ */ jsxs("footer", {
						className: "pms-cta",
						children: [
							/* @__PURE__ */ jsx("span", { children: "GOOGLE ADS · LEAD QUALITY" }),
							/* @__PURE__ */ jsx("h2", { children: "Stop optimising for leads that sales cannot use." }),
							/* @__PURE__ */ jsx("p", { children: "Build a measurement and optimisation system that connects paid search with qualification, sales and business outcomes." }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
								to: "/services/google-ads",
								children: "Explore Google Ads"
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
export { GoogleAdsLeadQualityBlog as default };
