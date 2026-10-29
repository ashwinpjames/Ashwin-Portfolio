import { o as whatsappUrl } from "../entry-server.js";
/* empty css                                 */
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/LeadGenerationService.jsx
var problems = [
	[
		"01",
		"Low quality enquiries",
		"More submissions can still mean fewer real opportunities."
	],
	[
		"02",
		"Leads that never respond",
		"Acquisition is wasted when follow up breaks down."
	],
	[
		"03",
		"High cost per lead",
		"Rising CPL can hide deeper funnel inefficiencies."
	],
	[
		"04",
		"Poor targeting",
		"Broad traffic creates noise instead of intent."
	],
	[
		"05",
		"Landing pages that fail",
		"Good campaigns cannot rescue weak conversion paths."
	],
	[
		"06",
		"Weak sales alignment",
		"Marketing needs feedback from what actually closes."
	]
];
var system = [
	[
		"01",
		"Audience & Market Research",
		"Identify audiences, intent signals and targeting opportunities."
	],
	[
		"02",
		"Paid Acquisition",
		"Build and manage channels that create demand and capture intent."
	],
	[
		"03",
		"Conversion Funnel",
		"Align offers, landing pages, forms and conversion paths."
	],
	[
		"04",
		"Lead Qualification",
		"Improve lead quality rather than blindly maximising volume."
	],
	[
		"05",
		"CRM & Lead Flow",
		"Capture, distribute and track leads through the sales process."
	],
	[
		"06",
		"Performance Optimisation",
		"Use data to improve efficiency and downstream outcomes."
	]
];
var process = [
	[
		"01",
		"Understand",
		"Business, audience, offer and sales process."
	],
	[
		"02",
		"Build",
		"Campaigns, targeting, messaging and conversion infrastructure."
	],
	[
		"03",
		"Launch",
		"Activate campaigns and establish performance baselines."
	],
	[
		"04",
		"Analyse",
		"Evaluate CPL, conversion rate, lead quality and downstream performance."
	],
	[
		"05",
		"Optimise",
		"Improve the parts of the funnel limiting growth."
	]
];
var deliverables = [
	"Campaign strategy",
	"Audience research",
	"Ad campaign setup",
	"Ad creative direction",
	"Landing page recommendations",
	"Lead capture setup",
	"Conversion tracking",
	"CRM integration and workflows",
	"Lead quality analysis",
	"Performance reporting",
	"Ongoing optimisation"
];
var metrics = [
	["CPL", "Cost per lead"],
	["QUALIFICATION RATE", "Lead quality"],
	["COST / QUALIFIED LEAD", "Efficiency"],
	["LEAD → OPPORTUNITY", "Pipeline"],
	["LEAD → CUSTOMER", "Revenue outcome"],
	["ROAS", "Where applicable"]
];
var framework = [
	[
		"01",
		"Intent",
		"Understand what the person is trying to accomplish."
	],
	[
		"02",
		"Structure",
		"Organise campaigns around meaningful business distinctions."
	],
	[
		"03",
		"Message",
		"Align the ad and offer with search or audience intent."
	],
	[
		"04",
		"Conversion",
		"Create a clear path from attention to meaningful action."
	],
	[
		"05",
		"Qualification",
		"Evaluate whether conversions represent useful leads."
	],
	[
		"06",
		"Optimisation",
		"Use full funnel data to improve targeting and efficiency."
	]
];
var fit = [
	"Consistent flow of enquiries",
	"Already investing in paid advertising",
	"Defined service or offer",
	"Fast lead follow up",
	"Measurable acquisition goals"
];
var reviews = [
	[
		"MA",
		"Direct Manager",
		"February 13, 2026",
		"I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing."
	],
	[
		"DS",
		"Operations Manager · Reliance",
		"July 13, 2026",
		"I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results."
	],
	[
		"HF",
		"Highrange Flavours Idukki",
		"Google Review",
		"Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results, not..."
	]
];
var faq = [
	["How do you generate leads?", "Lead generation connects audience research, paid acquisition, conversion paths, qualification, CRM flow and continuous optimisation around the sales process."],
	["Do you work with Meta Ads and Google Ads?", "Yes. The channel mix depends on where relevant demand exists and how the business can convert it."],
	["Can you help with landing pages?", "Yes. The work can cover messaging, offer clarity, forms, calls to action and conversion friction."],
	["How do you measure lead quality?", "Lead quality is evaluated beyond platform conversions by looking at qualification, opportunity progression and downstream outcomes where data is available."],
	["How long does it take to generate results?", "There is no useful universal timeframe. Results depend on demand, offer strength, competition, budget, conversion rate and sales follow up."],
	["Do you manage CRM and lead distribution?", "Where the technical setup supports it, lead capture, distribution, CRM workflows and visibility can be connected."],
	["How do you reduce low quality leads?", "Better audience definition, tighter targeting, stronger messaging, qualification, landing page alignment and sales feedback all contribute."]
];
function LeadGenerationService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "lead-generation-page",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "lg-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg-grid",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container lg-hero-inner",
					children: /* @__PURE__ */ jsxs("div", {
						className: "lg-hero-copy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "Lead Generation"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Lead Generation That Gives Your Sales Team Better Opportunities" }),
							/* @__PURE__ */ jsx("p", {
								className: "lg-lead",
								children: "Build a predictable flow of qualified leads through paid acquisition, conversion focused funnels and continuous optimisation."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "lg-actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "lg-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Get a Lead Generation Strategy ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}), /* @__PURE__ */ jsx("a", {
									className: "lg-secondary",
									href: "#approach",
									children: "View My Approach"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "lg-label",
								children: "TRUSTED CAPABILITIES"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "lg-pills",
								children: [
									/* @__PURE__ */ jsx("span", { children: "PAID ACQUISITION" }),
									/* @__PURE__ */ jsx("span", { children: "CRM & LEAD MANAGEMENT" }),
									/* @__PURE__ */ jsx("span", { children: "CONVERSION OPTIMISATION" }),
									/* @__PURE__ */ jsx("span", { children: "PERFORMANCE TRACKING" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "lg-meta",
								children: "Strategy · Acquisition · Funnel · Measurement"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "The Problem"
							}),
							/* @__PURE__ */ jsx("h2", { children: "More Leads Does Not Always Mean Better Leads" }),
							/* @__PURE__ */ jsx("p", { children: "Lead generation breaks when the system is optimised for volume instead of commercial value." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-pain-grid",
						children: problems.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section lg-alt",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "lg-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "lg-eyebrow",
									children: "Strategic Insight"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Lead Generation Is a Funnel Problem, Not Just an Advertising Problem" }),
								/* @__PURE__ */ jsx("p", { children: "A lead is only valuable when the rest of the system can turn intent into a commercial opportunity." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lg-funnel",
							children: [
								"TRAFFIC",
								"AD",
								"LANDING PAGE",
								"LEAD",
								"QUALIFICATION",
								"SALES FOLLOW UP",
								"CUSTOMER"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 6 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "lg-principle",
							children: "A cheap lead is not necessarily a valuable lead."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "Lead Generation System"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A Lead Generation System Built Around Your Sales Process" }),
							/* @__PURE__ */ jsx("p", { children: "Six connected layers keep acquisition, conversion, qualification and measurement working together." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-system-grid",
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
				className: "lg-section lg-alt",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "How I Work"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A Five Step Approach to Better Lead Generation" }),
							/* @__PURE__ */ jsx("p", { children: "A repeatable process that starts with business context and ends with continuous optimisation." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-process-cards",
						children: process.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "Deliverables"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Everything Needed to Run the Acquisition System" }),
							/* @__PURE__ */ jsx("p", { children: "A practical service scope spanning acquisition, conversion, tracking and optimisation." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-deliverables",
						children: deliverables.map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section lg-alt",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "lg-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "lg-eyebrow",
									children: "Measurement"
								}),
								/* @__PURE__ */ jsx("h2", { children: "I Do Not Optimise for Leads. I Optimise for Business Outcomes." }),
								/* @__PURE__ */ jsx("p", { children: "The reporting hierarchy connects advertising activity to the outcomes that matter." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lg-funnel lg-revenue",
							children: [
								"REACH",
								"CLICKS",
								"LEADS",
								"QUALIFIED LEADS",
								"SALES",
								"REVENUE"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lg-metrics",
							children: metrics.map(([title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] }, title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "Strategy Framework"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Intent → Structure → Message → Conversion → Qualification → Optimisation" }),
							/* @__PURE__ */ jsx("p", { children: "A practical framework for connecting acquisition decisions to commercial outcomes." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-system-grid",
						children: framework.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section lg-alt",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "What Working With Ashwin Looks Like"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Know what happens after you make contact." }),
							/* @__PURE__ */ jsx("p", { children: "The process starts with understanding the situation before deciding what needs to change." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-process-list",
						children: [
							[
								"01",
								"Understand",
								"Business, audience, offer and sales process."
							],
							[
								"02",
								"Assess",
								"Review acquisition, tracking, funnel data and opportunities where available."
							],
							[
								"03",
								"Plan",
								"Identify priorities and develop the appropriate strategy."
							],
							[
								"04",
								"Execute",
								"Implement campaigns, tracking, testing and optimisation."
							],
							[
								"05",
								"Improve",
								"Use campaign data and business feedback to continuously improve performance."
							]
						].map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("span", { children: n }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] })] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "Client Reviews"
							}),
							/* @__PURE__ */ jsx("h2", { children: "What Clients Say" }),
							/* @__PURE__ */ jsx("p", { children: "Selected testimonials already published on the Home page." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-reviews",
						children: reviews.map(([initials, role, date, quote]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("span", {
							className: "lg-avatar",
							children: initials
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("div", {
								className: "lg-stars",
								children: "★★★★★"
							}),
							/* @__PURE__ */ jsxs("blockquote", { children: [
								"“",
								quote,
								"”"
							] }),
							/* @__PURE__ */ jsx("strong", { children: role }),
							/* @__PURE__ */ jsx("small", { children: date })
						] })] }, initials))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section lg-alt",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "Who This Is For"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Is Lead Generation Right for Your Business?" }),
							/* @__PURE__ */ jsx("p", { children: "The strongest fit is a business with a clear offer, a sales process and a need for measurable acquisition." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-fit",
						children: fit.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "✓" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "lg-eyebrow",
								children: "FAQ"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Answers to the Questions That Affect the Buying Decision" }),
							/* @__PURE__ */ jsx("p", { children: "Keep answers concise, specific and focused on high intent objections." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-faq",
						children: faq.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "lg-eyebrow",
							children: "Let’s Build the System Behind the Leads"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Build a lead generation system your sales team can actually use." }),
						/* @__PURE__ */ jsx("p", { children: "A focused acquisition system built around qualified demand, measurable performance and commercial outcomes." }),
						/* @__PURE__ */ jsxs("a", {
							className: "lg-primary",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Start a Conversation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lg-related",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("p", {
						className: "lg-eyebrow",
						children: "Related Services"
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/services/google-ads",
							children: "Google Ads"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/services/meta-ads",
							children: "Meta Ads"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/services/hubspot",
							children: "HubSpot CRM & Automation"
						})
					] })]
				})
			})
		]
	});
}
export { LeadGenerationService as default };
