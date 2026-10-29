import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/MarketingConceptsBlog.jsx
var concepts = [
	{
		n: "01",
		title: "Goal Gradient Effect",
		definition: "People can become more motivated as they perceive themselves getting closer to a goal or reward.",
		example: "A loyalty card showing 6 of 10 purchases completed can make the remaining effort feel more achievable.",
		application: "Use real progress indicators in onboarding, loyalty programmes, lead nurturing and multi step forms.",
		test: "Compare completion rate with and without a visible progress indicator.",
		visual: [
			"START",
			"6 / 10",
			"REWARD"
		]
	},
	{
		n: "02",
		title: "Von Restorff Effect",
		definition: "An item that differs meaningfully from surrounding items can be remembered better. It is also called the isolation effect.",
		example: "One genuinely recommended pricing plan is visually distinct while the other plans remain quieter.",
		application: "Use contrast to establish hierarchy. Do not make every CTA loud.",
		test: "Compare interaction and conversion when one focal element is differentiated versus when all elements have equal emphasis.",
		visual: [
			"NORMAL",
			"NORMAL",
			"DIFFERENT",
			"NORMAL"
		]
	},
	{
		n: "03",
		title: "Framing Effect",
		definition: "The way equivalent information is presented can change how people evaluate a choice.",
		example: "A service described as 95% successful can create a different perception from the same service described as having a 5% failure rate.",
		application: "Test benefit, risk, outcome and cost framing while keeping important information transparent.",
		test: "Compare equivalent gain and loss frames using qualified conversion as the main outcome.",
		visual: [
			"SAME FACT",
			"95% SUCCESS",
			"VS",
			"5% FAILURE"
		]
	},
	{
		n: "04",
		title: "Choice Architecture",
		definition: "The organisation and presentation of options can influence decisions without removing freedom of choice.",
		example: "A SaaS website can group many features into three understandable plans and explain who each plan suits.",
		application: "Use ordering, grouping, labels, defaults and comparison points to reduce unnecessary decision work.",
		test: "Compare completion and selection behaviour after simplifying the decision environment.",
		visual: [
			"MANY OPTIONS",
			"GROUP",
			"3 CLEAR PATHS"
		]
	},
	{
		n: "05",
		title: "Information Gap Theory",
		definition: "Curiosity can increase when people recognise a gap between what they know and what they want to know.",
		example: "Why are your leads getting cheaper while sales are not increasing? creates a specific unanswered question.",
		application: "Use open loops in ads, articles and videos only when the content genuinely closes the gap.",
		test: "Measure qualified engagement and content completion rather than curiosity clicks alone.",
		visual: [
			"WHAT I KNOW",
			"?",
			"WHAT I WANT TO KNOW"
		]
	},
	{
		n: "06",
		title: "Endowment Effect",
		definition: "People can place greater value on something once they feel ownership of it. Context matters, so this is not a universal rule.",
		example: "A product trial may feel more valuable after a user customises it, imports data or builds a workflow.",
		application: "Create legitimate ownership through personalisation, saved work and progress. Never make cancellation intentionally difficult.",
		test: "Compare activation, retention or purchase after meaningful personalisation.",
		visual: [
			"TRY",
			"CUSTOMISE",
			"MY SETUP",
			"OWNERSHIP"
		]
	},
	{
		n: "07",
		title: "Peak End Rule",
		definition: "Remembered evaluations of an experience can be influenced strongly by its most intense moment and its ending.",
		example: "A consultation can be remembered positively when the key insight is clear and the final handoff is smooth.",
		application: "Design the important moment and final interaction instead of treating every touchpoint as equally memorable.",
		test: "Compare satisfaction, completion, referral or repeat behaviour after improving the peak and ending.",
		visual: [
			"EXPERIENCE",
			"PEAK",
			"END"
		]
	},
	{
		n: "08",
		title: "Choice Overload",
		definition: "More options do not always improve decisions. Under some conditions, large assortments can reduce motivation or satisfaction.",
		example: "A service page with 18 equally prominent packages may create more confusion than three clear paths.",
		application: "Remove unnecessary decisions while preserving legitimate alternatives.",
		test: "Compare completion, lead quality or purchase rate with a simpler choice set.",
		visual: [
			"18 OPTIONS",
			"VS",
			"3 CLEAR PATHS"
		]
	},
	{
		n: "09",
		title: "Pratfall Effect",
		definition: "A small non central mistake can sometimes make a highly competent person seem more human or relatable. The effect is conditional.",
		example: "A marketer explaining a genuine campaign mistake and what changed afterwards may feel more credible than presenting every campaign as flawless.",
		application: "Share real limitations and lessons. Never manufacture mistakes for authenticity.",
		test: "Compare qualified engagement and trust signals after adding a genuine lesson or limitation.",
		visual: [
			"EXPERT",
			"REAL LIMITATION",
			"MORE HUMAN"
		]
	},
	{
		n: "10",
		title: "Vibe Branding",
		definition: "Vibe branding is a contemporary branding practice describing the consistent mood, aesthetic, language and cultural feeling a brand creates. It is not presented as a formal psychological effect.",
		example: "A premium consultancy can communicate restraint through typography, language, pacing, proof and interaction rather than repeatedly saying premium.",
		application: "Build consistent visual and verbal cues across ads, landing pages, social content and sales materials.",
		test: "Track brand recall, direct demand, engagement quality and conversion over time.",
		visual: [
			"LOOK",
			"LANGUAGE",
			"SOUND",
			"FEEL"
		]
	},
	{
		n: "11",
		title: "Commitment and Consistency",
		definition: "People often feel pressure to behave consistently with meaningful previous commitments.",
		example: "A prospect who completes a useful diagnostic may be more engaged with the next useful step.",
		application: "Use progressive commitment where each step provides genuine value.",
		test: "Compare completion of the next meaningful action after a useful micro commitment.",
		visual: [
			"SMALL YES",
			"NEXT STEP",
			"COMMIT"
		]
	},
	{
		n: "12",
		title: "Anchoring",
		definition: "An initial reference point can influence subsequent judgments.",
		example: "Showing a clearly justified premium package before a standard package can change how the standard package is perceived.",
		application: "Use reference prices, benchmarks and comparisons honestly.",
		test: "Compare package presentation while keeping the actual offer constant.",
		visual: [
			"AED 5,000",
			"REFERENCE",
			"AED 2,500"
		]
	},
	{
		n: "13",
		title: "Loss Aversion",
		definition: "People can respond more strongly to potential losses than to equivalent gains, depending on context.",
		example: "Do not lose qualified enquiries through slow follow up frames a real business risk differently from Improve response speed.",
		application: "Communicate genuine risks and opportunity costs without inventing fear.",
		test: "Compare qualified action and downstream outcomes, not just clicks.",
		visual: [
			"GAIN +10",
			"VS",
			"LOSS -10"
		]
	},
	{
		n: "14",
		title: "Processing Fluency",
		definition: "Information that is easier to process can sometimes feel more familiar, clear or credible, although fluency does not guarantee truth.",
		example: "A landing page with one clear headline, predictable navigation and concise sections is easier to process than a dense page with competing messages.",
		application: "Improve hierarchy, readability, terminology and interaction patterns without removing useful substance.",
		test: "Compare comprehension, conversion and error rates after simplifying the experience.",
		visual: [
			"CLEAR",
			"EASY TO PROCESS",
			"ACTION"
		]
	},
	{
		n: "15",
		title: "Fresh Start Effect",
		definition: "Temporal landmarks such as a new year, birthday, month or meaningful transition can motivate aspirational behaviour.",
		example: "A fitness brand can align a campaign with a new routine, while a B2B company can use the start of a quarter as a planning moment.",
		application: "Connect genuine temporal landmarks to a relevant customer need.",
		test: "Compare campaign response around the relevant transition with normal periods.",
		visual: [
			"OLD ROUTINE",
			"NEW START",
			"NEW GOAL"
		]
	},
	{
		n: "16",
		title: "Scarcity vs Urgency",
		definition: "Scarcity concerns limited availability or quantity. Urgency concerns limited time. They can overlap but are not the same claim.",
		example: "Only 20 seats available signals scarcity. Registration closes Friday signals urgency.",
		application: "Use real constraints. Fake stock counts and countdowns can damage trust.",
		test: "Compare truthful scarcity or urgency with a neutral control while monitoring lead quality and complaints.",
		visual: [
			"SCARCITY",
			"QUANTITY",
			"VS",
			"URGENCY",
			"TIME"
		]
	},
	{
		n: "17",
		title: "Rule of Seven",
		definition: "The popular idea that someone needs exactly seven exposures before buying is not a reliable universal law.",
		example: "A considered B2B purchase may require several useful interactions across search, social, content, sales and referrals.",
		application: "Treat repeated relevant exposure as contextual, not as a fixed frequency target.",
		test: "Measure effective reach, frequency, branded demand and conversions by buying cycle.",
		visual: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"NOT A GUARANTEE"
		]
	}
];
var faq = [
	["What are marketing psychology principles?", "They are concepts from psychology, behavioural science and consumer research that help marketers form better hypotheses about attention, memory, motivation, choice and decision making. They are not guarantees of behaviour."],
	["Which concepts are most useful for performance marketing?", "Goal progress, framing, choice architecture, processing fluency, anchoring, loss aversion, scarcity, commitment and consistency and the peak end rule can all be useful when converted into testable hypotheses."],
	["Does the Rule of Seven mean customers need seven exposures?", "No. There is no reliable universal law that seven exposures are required before purchase. Frequency depends on the audience, buying cycle, channel, creative and context."],
	["What is the difference between scarcity and urgency?", "Scarcity concerns limited quantity or availability. Urgency concerns limited time. A message can use one, the other or both when the constraint is real."],
	["Can psychology guarantee higher conversion rates?", "No. Behavioural principles suggest hypotheses. Audience, offer, trust, competition, price, creative, experience and economics still affect results."],
	["How can these concepts be applied to Meta Ads?", "Use them to develop creative hypotheses around framing, distinctiveness, curiosity, progress, proof, loss and commitment. Judge them using qualified conversions and business outcomes where possible."],
	["How can psychology improve a landing page?", "Use clear hierarchy, reduce unnecessary decisions, make the value proposition easy to process, show credible proof, address objections and make the next useful action obvious."]
];
var articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "17 Marketing Psychology Concepts Every Modern Marketer Should Know",
	description: "A practical guide to 17 marketing psychology concepts with examples, performance marketing applications, experiments and visual frameworks.",
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
	mainEntityOfPage: "https://ashwinjames.com/blog/marketing-concepts-modern-marketers-should-know"
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
function ConceptVisual({ concept }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "marketing-psych-visual",
		"aria-label": `Visual example for ${concept.title}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "marketing-psych-visual-label",
			children: "VISUAL EXAMPLE"
		}), /* @__PURE__ */ jsx("div", {
			className: "marketing-psych-visual-flow",
			children: concept.visual.map((item, i) => /* @__PURE__ */ jsx("span", { children: item }, `${concept.n}-${i}`))
		})]
	});
}
function MarketingConceptsBlog() {
	return /* @__PURE__ */ jsxs("main", {
		className: "marketing-concepts-blog-page",
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
				className: "marketing-concepts-shell",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "marketing-concepts-hero",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/blog",
							className: "marketing-concepts-back",
							children: "Back to all blogs"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "marketing-concepts-eyebrow",
							children: "MARKETING · BEHAVIOURAL SCIENCE · PERFORMANCE"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-meta",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Marketing Psychology" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "22 min read" }),
								/* @__PURE__ */ jsx("span", { children: "•" }),
								/* @__PURE__ */ jsx("span", { children: "August 24, 2026" })
							]
						}),
						/* @__PURE__ */ jsx("h1", { children: "17 Marketing Psychology Concepts Every Modern Marketer Should Know" }),
						/* @__PURE__ */ jsx("p", {
							className: "marketing-concepts-lede",
							children: "Marketing gets more interesting when you stop asking only what should I run and start asking why a person might notice, remember, choose or act. Here are 17 concepts worth understanding, with practical examples and visual models."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-links",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/services/performance-growth-marketing",
								children: "Performance Marketing"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/case-studies",
								children: "View case studies"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "marketing-concepts-content",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "marketing-concepts-opening",
							children: "A marketer can know Meta Ads, Google Ads, analytics and CRO and still misunderstand the person on the other side of the screen."
						}),
						/* @__PURE__ */ jsx("p", { children: "Platforms tell us what happened. Behavioural science can help us form better hypotheses about why people noticed something, remembered it, evaluated an option or decided to act." }),
						/* @__PURE__ */ jsx("p", { children: "This is not a collection of psychological tricks. A behavioural principle is useful when it helps us understand a customer, create a clearer experience and test a meaningful business hypothesis." }),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-principle",
							children: [
								/* @__PURE__ */ jsx("span", { children: "THE CORE IDEA" }),
								/* @__PURE__ */ jsx("strong", { children: "Use psychology to improve the decision environment, not to manipulate people into decisions they would not otherwise want to make." }),
								/* @__PURE__ */ jsx("p", { children: "The strongest applications reduce friction, clarify value, improve memory or make the next step easier to understand." })
							]
						}),
						/* @__PURE__ */ jsx("h2", { children: "How to use this article" }),
						/* @__PURE__ */ jsx("p", { children: "Each concept is explained through four layers: what it means, what it could look like in marketing, how a performance marketer might apply it, and what should be tested." }),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-test",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "CONCEPT" }), /* @__PURE__ */ jsx("strong", { children: "Understand the principle" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "EXAMPLE" }), /* @__PURE__ */ jsx("strong", { children: "Translate it into marketing" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "APPLICATION" }), /* @__PURE__ */ jsx("strong", { children: "Build a practical hypothesis" })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "MEASURE" }), /* @__PURE__ */ jsx("strong", { children: "Test the business outcome" })] })
							]
						}),
						/* @__PURE__ */ jsx("h2", { children: "The 17 concepts at a glance" }),
						/* @__PURE__ */ jsx("div", {
							className: "marketing-concepts-grid",
							children: concepts.map((c) => /* @__PURE__ */ jsxs("section", { children: [
								/* @__PURE__ */ jsx("span", { children: c.n }),
								/* @__PURE__ */ jsx("h3", { children: c.title }),
								/* @__PURE__ */ jsx("p", { children: c.definition })
							] }, c.n))
						}),
						concepts.map((c) => /* @__PURE__ */ jsxs("section", {
							className: "marketing-psych-section",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "marketing-psych-number",
									children: c.n
								}),
								/* @__PURE__ */ jsx("h2", { children: c.title }),
								/* @__PURE__ */ jsxs("p", { children: [
									/* @__PURE__ */ jsx("strong", { children: "What it means:" }),
									" ",
									c.definition
								] }),
								/* @__PURE__ */ jsx(ConceptVisual, { concept: c }),
								/* @__PURE__ */ jsxs("div", {
									className: "marketing-concepts-scenarios",
									children: [/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("span", { children: "MARKETING EXAMPLE" }),
										/* @__PURE__ */ jsx("h3", { children: "What it could look like" }),
										/* @__PURE__ */ jsx("p", { children: c.example })
									] }), /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("span", { children: "PERFORMANCE APPLICATION" }),
										/* @__PURE__ */ jsx("h3", { children: "How to use it responsibly" }),
										/* @__PURE__ */ jsx("p", { children: c.application })
									] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "marketing-concepts-measure",
									children: [/* @__PURE__ */ jsx("strong", { children: "What to test" }), /* @__PURE__ */ jsx("span", { children: c.test })]
								})
							]
						}, c.n)),
						/* @__PURE__ */ jsx("h2", { children: "How these principles connect to performance marketing" }),
						/* @__PURE__ */ jsx("p", { children: "Behavioural principles become more useful when connected to the actual funnel rather than treated as isolated tricks." }),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-chain",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Customer insight" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "Positioning" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "Frame" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "Creative" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "Landing page" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "Choice" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "Conversion" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "CRM" }),
								/* @__PURE__ */ jsx("b", { children: "→" }),
								/* @__PURE__ */ jsx("span", { children: "Revenue" })
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "For example, a lead generation campaign may use framing to clarify the problem, processing fluency to simplify the landing page, choice architecture to make the next step clearer and loss aversion to explain a genuine cost of delaying action." }),
						/* @__PURE__ */ jsx("p", { children: "The real test is not whether the page looks more persuasive. It is whether qualified conversion and downstream commercial outcomes improve." }),
						/* @__PURE__ */ jsx("h2", { children: "Five mistakes marketers should avoid" }),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-final",
							children: [
								/* @__PURE__ */ jsx("strong", { children: "Do not treat every psychology principle as equally established science." }),
								/* @__PURE__ */ jsx("strong", { children: "Do not manufacture scarcity, mistakes, urgency or fear." }),
								/* @__PURE__ */ jsx("strong", { children: "Do not optimise curiosity clicks while ignoring qualified conversions." }),
								/* @__PURE__ */ jsx("strong", { children: "Do not assume a principle will work simply because it worked somewhere else." }),
								/* @__PURE__ */ jsx("strong", { children: "Do not confuse a memorable experience with a profitable customer journey." })
							]
						}),
						/* @__PURE__ */ jsx("h2", { children: "A practical checklist" }),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-checklist",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "What customer problem are we solving?" }), " Psychology should support a real customer need."] })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "What behaviour are we trying to change?" }), " Attention, comprehension, consideration, conversion or retention?"] })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "What principle creates a plausible hypothesis?" }), " Start with the problem, not the psychology label."] })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "04" }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "What is the control?" }), " A credible comparison is needed to learn whether the change mattered."] })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "05" }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "What business metric decides the test?" }), " CTR can help, but qualified leads, purchases and revenue may matter more."] })] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "06" }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Could the tactic reduce trust?" }), " If it depends on deception, fake scarcity or hidden information, reconsider it."] })] })
							]
						}),
						/* @__PURE__ */ jsx("h2", { children: "The bigger lesson" }),
						/* @__PURE__ */ jsx("p", { children: "The strongest marketers do not memorise psychology principles so they can sprinkle them across landing pages." }),
						/* @__PURE__ */ jsx("p", { children: "They use behavioural ideas to ask better questions: Why did people stop here? Why did they choose this option? Why did they remember this message? Why did they abandon the form?" }),
						/* @__PURE__ */ jsx("p", { children: "That mindset is especially useful in performance marketing because the feedback loop is measurable. A behavioural hypothesis can become a creative test, landing page experiment or funnel change, and the result can be connected to the commercial outcome." }),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-cta",
							children: [
								/* @__PURE__ */ jsx("h2", { children: "Use psychology to improve decisions, not to replace them." }),
								/* @__PURE__ */ jsx("p", { children: "The goal is not to find a magic trigger. It is to understand people well enough to create clearer offers, better experiences and stronger experiments." }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
									to: "/services/performance-growth-marketing",
									children: "Explore performance marketing"
								}), /* @__PURE__ */ jsx(Link, {
									to: "/blog",
									children: "Read more insights"
								})] })
							]
						}),
						/* @__PURE__ */ jsx("h2", { children: "Sources and research notes" }),
						/* @__PURE__ */ jsxs("div", {
							className: "marketing-concepts-sources",
							children: [
								/* @__PURE__ */ jsx("p", { children: "Goal Gradient Effect" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://journals.sagepub.com/doi/full/10.1509/jmkr.43.1.39",
									target: "_blank",
									rel: "noreferrer",
									children: "Kivetz, Urminsky and Zheng, Journal of Marketing Research"
								}),
								/* @__PURE__ */ jsx("p", { children: "Von Restorff Effect" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://pubmed.ncbi.nlm.nih.gov/24203592/",
									target: "_blank",
									rel: "noreferrer",
									children: "Hunt, Psychonomic Bulletin and Review"
								}),
								/* @__PURE__ */ jsx("p", { children: "Framing Effect" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://doi.org/10.1126/science.7455683",
									target: "_blank",
									rel: "noreferrer",
									children: "Tversky and Kahneman, Science"
								}),
								/* @__PURE__ */ jsx("p", { children: "Choice Overload" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://pubmed.ncbi.nlm.nih.gov/11138768/",
									target: "_blank",
									rel: "noreferrer",
									children: "Iyengar and Lepper, Journal of Personality and Social Psychology"
								}),
								/* @__PURE__ */ jsx("p", { children: "Pratfall Effect" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://pubmed.ncbi.nlm.nih.gov/5479130/",
									target: "_blank",
									rel: "noreferrer",
									children: "Helmreich, Aronson and LeFan, Journal of Personality and Social Psychology"
								}),
								/* @__PURE__ */ jsx("p", { children: "Fresh Start Effect" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://faculty.wharton.upenn.edu/wp-content/uploads/2014/06/Dai_Fresh_Start_2014_Mgmt_Sci.pdf",
									target: "_blank",
									rel: "noreferrer",
									children: "Dai, Milkman and Riis, Management Science"
								}),
								/* @__PURE__ */ jsx("p", { children: "Scarcity" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://www.nowpublishers.com/article/DownloadSummary/MKT-083",
									target: "_blank",
									rel: "noreferrer",
									children: "Marketing research review on scarcity"
								}),
								/* @__PURE__ */ jsx("p", { children: "Endowment Effect" }),
								/* @__PURE__ */ jsx("a", {
									href: "https://pubmed.ncbi.nlm.nih.gov/33816642/",
									target: "_blank",
									rel: "noreferrer",
									children: "Research examining ownership, market beliefs and valuation"
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "marketing-concepts-note",
							children: [/* @__PURE__ */ jsx("strong", { children: "Research note:" }), " Some labels in this article are established psychological effects, while others are marketing heuristics or modern industry language. Vibe Branding is treated as a branding practice rather than a validated psychological law. The Rule of Seven is treated as a popular heuristic, not a universal empirical threshold."]
						}),
						/* @__PURE__ */ jsx("h2", { children: "FAQ" }),
						/* @__PURE__ */ jsx("div", {
							className: "marketing-concepts-faq",
							children: faq.map(([question, answer]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [question, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: answer })] }, question))
						})
					]
				})]
			})
		]
	});
}
export { MarketingConceptsBlog as default };
