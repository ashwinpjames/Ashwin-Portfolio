import { o as whatsappUrl } from "../entry-server.js";
/* empty css                     */
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/CROService.jsx
var problems = [
	[
		"01",
		"Traffic without enough conversions",
		"More visitors do not automatically create more enquiries, purchases or opportunities."
	],
	[
		"02",
		"Unclear value proposition",
		"When the page does not quickly communicate relevance and value, users have little reason to continue."
	],
	[
		"03",
		"Weak calls to action",
		"Vague or poorly placed CTAs create unnecessary hesitation at the point of decision."
	],
	[
		"04",
		"Too much friction",
		"Long forms, confusing navigation and unnecessary steps can suppress conversion intent."
	],
	[
		"05",
		"Mobile experience gaps",
		"A page that works on desktop can still lose high intent users on smaller screens."
	],
	[
		"06",
		"Guesswork instead of evidence",
		"Without analytics and testing, optimisation becomes opinion rather than learning."
	]
];
var system = [
	[
		"01",
		"Research & Behaviour",
		"Understand users, intent, objections, traffic sources and where the journey breaks."
	],
	[
		"02",
		"Value Proposition",
		"Make the offer, relevance and reason to choose you clear within seconds."
	],
	[
		"03",
		"UX & Information Flow",
		"Remove friction and structure information around how people make decisions."
	],
	[
		"04",
		"CTA & Forms",
		"Improve calls to action, forms and conversion moments without adding pressure."
	],
	[
		"05",
		"Experimentation",
		"Test meaningful changes with a clear hypothesis instead of changing everything at once."
	],
	[
		"06",
		"Measurement",
		"Track conversion behaviour and use evidence to decide what should happen next."
	]
];
var process = [
	[
		"01",
		"Audit",
		"Review analytics, pages, traffic sources, conversion paths and existing friction."
	],
	[
		"02",
		"Diagnose",
		"Identify the highest impact conversion problems and formulate testable hypotheses."
	],
	[
		"03",
		"Prioritise",
		"Rank opportunities by expected impact, confidence, effort and business value."
	],
	[
		"04",
		"Test",
		"Implement focused experiments across messaging, UX, CTAs, forms and page structure."
	],
	[
		"05",
		"Learn & Scale",
		"Read the evidence, document learning and roll successful improvements forward."
	]
];
var deliverables = [
	"Conversion audit",
	"Landing page review",
	"Value proposition analysis",
	"Message match review",
	"CTA optimisation",
	"Form optimisation",
	"Mobile UX review",
	"Page structure recommendations",
	"Analytics and event review",
	"A/B testing roadmap",
	"Experiment hypotheses",
	"Performance reporting"
];
var metrics = [
	["CONVERSION RATE", "Visitor → action"],
	["CTA RATE", "Interaction"],
	["FORM COMPLETION", "Lead friction"],
	["QUALIFIED RATE", "Lead quality"],
	["COST / CONVERSION", "Acquisition efficiency"],
	["REVENUE / VISITOR", "Commercial value"]
];
var framework = [
	[
		"01",
		"Intent",
		"What does the visitor want and what brought them here?"
	],
	[
		"02",
		"Clarity",
		"Can they understand the offer, value and next step quickly?"
	],
	[
		"03",
		"Trust",
		"Does the page provide enough evidence to reduce perceived risk?"
	],
	[
		"04",
		"Friction",
		"What unnecessary effort or uncertainty is blocking action?"
	],
	[
		"05",
		"Action",
		"Is the next step obvious, relevant and easy to complete?"
	],
	[
		"06",
		"Learning",
		"What does behaviour and experimentation tell us to improve next?"
	]
];
var fit = [
	"Already receiving meaningful website traffic",
	"Have a clear product or service offer",
	"Can measure enquiries, purchases or other conversions",
	"Want to improve efficiency before simply buying more traffic",
	"Are willing to make decisions from evidence"
];
var faq = [
	["What is CRO?", "Conversion Rate Optimisation is the systematic process of improving the percentage of visitors who take a desired action by reducing friction, improving clarity and testing meaningful changes."],
	["Do I need a lot of traffic for CRO?", "Not necessarily, but the amount and quality of data affects how confidently experiments can be interpreted. Lower traffic can still support valuable qualitative analysis and prioritisation."],
	["Can CRO reduce my cost per lead?", "It can. When the same qualified traffic converts at a higher rate, the effective cost per conversion can decrease without increasing media spend."],
	["Do you work on landing pages?", "Yes. Landing page structure, messaging, value proposition, CTA placement, forms, mobile UX and conversion friction are all relevant CRO areas."],
	["Do you run A/B tests?", "Testing is used where the traffic and measurement environment can support useful experimentation. Where it cannot, CRO can focus on evidence based UX and funnel improvements."],
	["How do you decide what to test?", "Tests are prioritised from business impact, user behaviour, analytics, qualitative evidence, implementation effort and the strength of the underlying hypothesis."],
	["Is CRO only for ecommerce?", "No. CRO applies to lead generation, SaaS, services, ecommerce and other websites where visitors are expected to take measurable actions."]
];
function CROService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "cro-service",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "cro-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "cro-grid",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container cro-hero-inner",
					children: /* @__PURE__ */ jsxs("div", {
						className: "cro-hero-copy cro-hero-copy-centered",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "Conversion Rate Optimisation"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Turn More of Your Existing Traffic Into Valuable Actions" }),
							/* @__PURE__ */ jsx("p", {
								className: "cro-lead",
								children: "Improve conversion rates by removing friction, sharpening your message and building a decision journey around real user behaviour."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "cro-actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "cro-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Get a CRO Strategy ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}), /* @__PURE__ */ jsx("a", {
									className: "cro-secondary",
									href: "#approach",
									children: "View My Approach"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cro-label",
								children: "CRO FOCUS AREAS"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "cro-pills",
								children: [
									/* @__PURE__ */ jsx("span", { children: "LANDING PAGES" }),
									/* @__PURE__ */ jsx("span", { children: "UX & MESSAGING" }),
									/* @__PURE__ */ jsx("span", { children: "CTA & FORMS" }),
									/* @__PURE__ */ jsx("span", { children: "TESTING & ANALYTICS" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "cro-meta",
								children: "Research · Diagnose · Prioritise · Test · Learn"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "The Problem"
							}),
							/* @__PURE__ */ jsx("h2", { children: "More Traffic Is Not Always the Answer" }),
							/* @__PURE__ */ jsx("p", { children: "If the conversion path is weak, buying more traffic can simply make an inefficient funnel more expensive." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-pain-grid",
						children: problems.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section cro-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "cro-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "cro-eyebrow",
									children: "Strategic Insight"
								}),
								/* @__PURE__ */ jsx("h2", { children: "CRO Is About Improving the Decision Journey, Not Just Changing Buttons" }),
								/* @__PURE__ */ jsx("p", { children: "People convert when the page answers the right questions with enough clarity, relevance and trust at the right moment." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cro-funnel",
							children: [
								"VISITOR",
								"INTENT",
								"VALUE",
								"TRUST",
								"ACTION",
								"CONVERSION"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "cro-principle",
							children: "The goal is not more clicks. The goal is more meaningful actions."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "CRO System"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A Conversion System Built Around How Users Decide" }),
							/* @__PURE__ */ jsx("p", { children: "Six connected layers turn behavioural evidence into practical improvements." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-system-grid",
						children: system.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "approach",
				className: "cro-section cro-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "How I Work"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A Five Step Approach to Conversion Optimisation" }),
							/* @__PURE__ */ jsx("p", { children: "A disciplined process designed to find the highest value opportunities before changing the page." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-process-cards",
						children: process.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "Deliverables"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Everything Needed to Build a Better Conversion Path" }),
							/* @__PURE__ */ jsx("p", { children: "A practical CRO scope covering research, UX, messaging, measurement and experimentation." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-deliverables",
						children: deliverables.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section cro-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "cro-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "cro-eyebrow",
									children: "Measurement"
								}),
								/* @__PURE__ */ jsx("h2", { children: "I Measure What Happens After the Click" }),
								/* @__PURE__ */ jsx("p", { children: "CRO needs to connect page behaviour with the business outcome the conversion is supposed to create." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cro-funnel cro-revenue",
							children: [
								"VISITS",
								"ENGAGEMENT",
								"CONVERSIONS",
								"QUALIFIED",
								"OPPORTUNITIES",
								"REVENUE"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "cro-metrics",
							children: metrics.map(([title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] }, title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "Strategy Framework"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Intent → Clarity → Trust → Friction → Action → Learning" }),
							/* @__PURE__ */ jsx("p", { children: "A framework for understanding where a conversion journey is losing people and what to improve next." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-system-grid",
						children: framework.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section cro-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "What Working With Ashwin Looks Like"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Know what happens after you make contact." }),
							/* @__PURE__ */ jsx("p", { children: "The process starts with the evidence already available before recommendations are made." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-process-list",
						children: [
							[
								"01",
								"Understand",
								"Business model, traffic sources, offer and conversion goal."
							],
							[
								"02",
								"Audit",
								"Review pages, analytics, UX and existing conversion behaviour."
							],
							[
								"03",
								"Prioritise",
								"Identify the opportunities most likely to create meaningful improvement."
							],
							[
								"04",
								"Implement",
								"Translate recommendations into focused page and funnel changes."
							],
							[
								"05",
								"Learn",
								"Measure the result and use the evidence to determine the next iteration."
							]
						].map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("span", { children: n }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] })] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "Who This Is For"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Is CRO Right for Your Business?" }),
							/* @__PURE__ */ jsx("p", { children: "CRO is most useful when there is enough meaningful traffic or behavioural evidence to identify where the conversion journey can improve." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-fit",
						children: fit.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "✓" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-section cro-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "cro-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "cro-eyebrow",
								children: "FAQ"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Answers to the Questions That Affect the CRO Decision" }),
							/* @__PURE__ */ jsx("p", { children: "Clear answers on scope, data, testing and expected outcomes." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "cro-faq",
						children: faq.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "cro-eyebrow",
							children: "Make Your Existing Traffic Work Harder"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Improve the conversion system before simply buying more traffic." }),
						/* @__PURE__ */ jsx("p", { children: "Build a clearer, lower friction journey that turns more of the right visitors into measurable business outcomes." }),
						/* @__PURE__ */ jsxs("a", {
							className: "cro-primary",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Start a CRO Conversation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cro-related",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("p", {
						className: "cro-eyebrow",
						children: "Related Services"
					}), /* @__PURE__ */ jsxs("div", {
						className: "cro-related-grid",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/services/lead-generation",
								children: "Lead Generation"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/performance-marketing",
								children: "Performance Marketing"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/website-development",
								children: "Website Development"
							})
						]
					})]
				})
			})
		]
	});
}
export { CROService as default };
