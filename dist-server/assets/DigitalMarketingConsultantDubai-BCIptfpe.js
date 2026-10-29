import { o as whatsappUrl } from "../entry-server.js";
/* empty css                                 */
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/DigitalMarketingConsultantDubai.jsx
var problems = [
	[
		"01",
		"Disconnected channels",
		"Ads, SEO, website content and CRM activity are managed separately without one shared goal."
	],
	[
		"02",
		"Unclear priorities",
		"Teams are busy producing activity but do not know which improvements will have the greatest impact."
	],
	[
		"03",
		"Inconsistent lead quality",
		"Campaigns generate enquiries, but too many fail to become useful sales conversations."
	],
	[
		"04",
		"Weak conversion paths",
		"Landing pages, offers and forms create friction between interest and enquiry."
	],
	[
		"05",
		"Incomplete measurement",
		"Reporting focuses on clicks and platform conversions without showing what happens to leads afterward."
	],
	[
		"06",
		"Slow follow up",
		"Lead sources, CRM stages and sales feedback are not connected clearly enough to guide optimisation."
	]
];
var services = [
	[
		"01",
		"Digital Marketing Strategy",
		"Set priorities around business goals, audience, offer, budget and the customer journey. Build a practical channel plan instead of treating every platform as a separate task."
	],
	[
		"02",
		"Google Ads and Meta Ads",
		"Connect campaign structure, targeting, creative, messaging and conversion signals to attract relevant demand and capture intent."
	],
	[
		"03",
		"SEO and Content Direction",
		"Map search intent to useful service pages and content, strengthen internal links and improve how potential customers discover the business organically."
	],
	[
		"04",
		"Lead Generation and Qualification",
		"Align acquisition with the type of lead the sales team needs, then assess quality beyond the initial form submission."
	],
	[
		"05",
		"Landing Pages and CRO",
		"Improve offer clarity, message match, page structure, calls to action and forms to make the path to enquiry easier."
	],
	[
		"06",
		"Analytics and Conversion Tracking",
		"Use GA4, Google Tag Manager, conversion events and UTM conventions to make performance more reliable and easier to interpret."
	],
	[
		"07",
		"CRM and Marketing Automation",
		"Connect lead sources, lifecycle stages, routing, follow up and sales feedback so the team can see what happens after an enquiry."
	],
	[
		"08",
		"Ongoing Optimisation",
		"Review performance regularly, identify bottlenecks and prioritise tests using the strongest available campaign and business data."
	]
];
var process = [
	[
		"01",
		"Understand",
		"Clarify business goals, audience, offer, sales process and what a valuable lead or customer means."
	],
	[
		"02",
		"Audit",
		"Review channels, website, landing pages, tracking, CRM flow and the performance data currently available."
	],
	[
		"03",
		"Prioritise",
		"Build a practical roadmap with clear actions, measurement and an order of work based on likely impact."
	],
	[
		"04",
		"Implement",
		"Put agreed campaign, conversion, tracking or workflow improvements into practice and establish a baseline."
	],
	[
		"05",
		"Optimise",
		"Use results and sales feedback to improve the journey over time rather than relying on assumptions."
	]
];
var deliverables = [
	"Digital marketing strategy",
	"Channel and campaign recommendations",
	"Audience and offer review",
	"Google Ads and Meta Ads planning",
	"SEO and content priorities",
	"Landing page recommendations",
	"Lead capture and qualification review",
	"GA4 and conversion tracking review",
	"UTM tracking conventions",
	"CRM and lead flow recommendations",
	"Performance reporting framework",
	"Prioritised optimisation roadmap"
];
var metrics = [
	["QUALIFIED LEADS", "Enquiries that meet agreed qualification criteria"],
	["COST / QUALIFIED LEAD", "Acquisition efficiency beyond raw lead volume"],
	["CONVERSION RATE", "How effectively visits become meaningful actions"],
	["LEAD → OPPORTUNITY", "Progression into the sales pipeline"],
	["CUSTOMER ACQUISITION COST", "Where reliable cost and customer data exist"],
	["REVENUE CONTRIBUTION", "Commercial outcomes where attribution is supportable"]
];
var faqs = [
	["What does a digital marketing consultant do?", "A digital marketing consultant reviews business goals, audience, channels and the customer journey, then recommends or supports a practical plan to improve visibility, lead generation and measurable outcomes."],
	["What services can you help with?", "The scope can include digital strategy, Google Ads, Meta Ads, SEO direction, landing page optimisation, lead generation, analytics, conversion tracking and CRM alignment. It depends on your priorities and current setup."],
	["Do you work with businesses in Dubai and across the UAE?", "I am based in the UAE. An initial conversation helps clarify your market, objectives, scope and the support that makes sense for your business."],
	["Can you audit existing campaigns and a website?", "Yes. A review can cover campaign structure, targeting, offers, landing pages, conversion tracking, lead quality and how enquiries are handled after submission."],
	["Do you only work on paid advertising?", "No. Paid media is one part of the wider customer journey. Where relevant, I also consider SEO, conversion experience, analytics and CRM processes so the different activities support the same business goal."],
	["How do you measure digital marketing performance?", "Metrics depend on the objective and available data. They can include qualified leads, cost per qualified lead, conversion rate, opportunity progression, customer acquisition cost and revenue."],
	["How do we get started?", "Start with a conversation about your goals, current marketing setup and constraints. From there, we can identify the most useful audit or next step rather than assume every business needs the same package."]
];
var faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map(([question, answer]) => ({
		"@type": "Question",
		name: question,
		acceptedAnswer: {
			"@type": "Answer",
			text: answer
		}
	}))
};
function DigitalMarketingConsultantDubai() {
	return /* @__PURE__ */ jsxs("main", {
		className: "lead-generation-page",
		id: "main",
		children: [
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: JSON.stringify(faqSchema)
			}),
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
								children: "Digital Marketing Consulting · Dubai, UAE"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Digital Marketing Consultant in Dubai for Measurable Business Growth" }),
							/* @__PURE__ */ jsx("p", {
								className: "lg-lead",
								children: "Bring strategy, paid advertising, SEO, conversion optimisation and analytics together in a practical marketing plan built around your business goals."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "lg-actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "lg-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Discuss Your Marketing Goals ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}), /* @__PURE__ */ jsx("a", {
									className: "lg-secondary",
									href: "#approach",
									children: "View My Approach"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "lg-label",
								children: "CONSULTING CAPABILITIES"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "lg-pills",
								children: [
									/* @__PURE__ */ jsx("span", { children: "STRATEGY & PLANNING" }),
									/* @__PURE__ */ jsx("span", { children: "PAID ACQUISITION" }),
									/* @__PURE__ */ jsx("span", { children: "SEO & CONTENT" }),
									/* @__PURE__ */ jsx("span", { children: "ANALYTICS & CRM" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "lg-meta",
								children: "Strategy · Acquisition · Conversion · Measurement"
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
							/* @__PURE__ */ jsx("h2", { children: "More Marketing Activity Does Not Always Mean Better Results" }),
							/* @__PURE__ */ jsx("p", { children: "Digital marketing underperforms when channels, conversion paths and follow up are managed as separate tasks." })
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
									children: "The Approach"
								}),
								/* @__PURE__ */ jsx("h2", { children: "One Connected Customer Journey, Not a Collection of Disconnected Channels" }),
								/* @__PURE__ */ jsxs("p", { children: [
									"As a ",
									/* @__PURE__ */ jsx(Link, {
										to: "/",
										children: "Performance Marketing Specialist"
									}),
									", I look at how people discover your business, what persuades them to enquire and how the team follows up afterward."
								] })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lg-funnel",
							children: [
								"AUDIENCE",
								"CHANNELS",
								"LANDING PAGE",
								"ENQUIRY",
								"QUALIFICATION",
								"SALES FOLLOW UP",
								"OUTCOME"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 6 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "lg-principle",
							children: "The goal is not simply more activity. It is a clearer path from marketing investment to meaningful business outcomes."
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
								children: "Consulting Services"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Practical Support Across the Digital Marketing Funnel" }),
							/* @__PURE__ */ jsx("p", { children: "The scope is shaped around your business priorities, with connected services where the bottleneck crosses multiple parts of the funnel." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-system-grid",
						children: services.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
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
							/* @__PURE__ */ jsx("h2", { children: "A Five Step Process From Audit to Optimisation" }),
							/* @__PURE__ */ jsx("p", { children: "A clear process keeps the work focused on business objectives and measurable next steps." })
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
								children: "Potential Deliverables"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Know What the Consulting Work Can Cover" }),
							/* @__PURE__ */ jsx("p", { children: "Recommendations and deliverables depend on the audit findings, agreed scope and the data available." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-deliverables",
						children: deliverables.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
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
								/* @__PURE__ */ jsx("h2", { children: "Measure Outcomes, Not Just Clicks and Impressions" }),
								/* @__PURE__ */ jsx("p", { children: "Reporting should reflect the commercial goal and the reliability of the available tracking data." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lg-funnel lg-revenue",
							children: [
								"REACH",
								"CLICKS",
								"ENQUIRIES",
								"QUALIFIED LEADS",
								"OPPORTUNITIES",
								"CUSTOMERS"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lg-metrics",
							children: metrics.map(([title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] }, title))
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "lg-principle",
							children: [
								"Tracking may include ",
								/* @__PURE__ */ jsx(Link, {
									to: "/blog/ga4-performance-marketing",
									children: "Google Analytics 4"
								}),
								", ",
								/* @__PURE__ */ jsx(Link, {
									to: "/blog/conversion-tracking-performance-marketing",
									children: "conversion tracking"
								}),
								", consistent UTM parameters and CRM source data."
							]
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
								children: "Related Services"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Connect the Areas That Need Attention" }),
							/* @__PURE__ */ jsx("p", { children: "Explore relevant services and resources for specific parts of the customer journey." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-related",
						children: /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/services/performance-marketing-specialist",
								children: "Performance Marketing Services"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/meta-ads",
								children: "Meta Ads"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/lead-generation",
								children: "Lead Generation"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/cro",
								children: "Conversion Optimisation"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/hubspot",
								children: "HubSpot CRM"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/seo",
								children: "SEO"
							})
						] })
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
							/* @__PURE__ */ jsx("h2", { children: "For Businesses That Need Clarity on What to Improve Next" }),
							/* @__PURE__ */ jsx("p", { children: "This service may suit growing businesses, professional services, healthcare and wellness providers, immigration services and B2B teams that rely on digital channels for enquiries." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-fit",
						children: [
							"Marketing feels fragmented across channels",
							"Lead quality or conversion rates are inconsistent",
							"Reporting does not explain business outcomes",
							"You need a clearer plan for your marketing budget",
							"You want marketing and sales follow up to work together"
						].map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "✓" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
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
							/* @__PURE__ */ jsx("h2", { children: "Questions About Digital Marketing Consulting" }),
							/* @__PURE__ */ jsx("p", { children: "Clear answers to common questions about scope, process and measurement." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg-faq",
						children: faqs.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q))
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
							children: "Start With a Useful Conversation"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Need a Clearer Digital Marketing Plan?" }),
						/* @__PURE__ */ jsx("p", { children: "Let’s discuss your goals, current marketing setup and the most useful next step for your business in Dubai or across the UAE." }),
						/* @__PURE__ */ jsxs("a", {
							className: "lg-primary",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Start a Conversation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			})
		]
	});
}
export { DigitalMarketingConsultantDubai as default };
