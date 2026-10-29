import { o as whatsappUrl } from "../entry-server.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/HubSpotCRMService.jsx
var problems = [
	[
		"01",
		"Leads are captured but not followed up",
		"A lead can enter the CRM successfully and still be lost when ownership, routing or next action is unclear."
	],
	[
		"02",
		"Sales lacks useful context",
		"When source, lifecycle stage, activity and qualification data are disconnected, sales has less information for the next conversation."
	],
	[
		"03",
		"Too much work is manual",
		"Repetitive assignment, notifications, lifecycle changes and follow up can consume time that should go toward real opportunities."
	],
	[
		"04",
		"Marketing cannot see the full journey",
		"Lead volume alone does not explain which sources create qualified conversations, pipeline or revenue."
	],
	[
		"05",
		"The CRM does not match the sales process",
		"Poorly defined stages and properties create inconsistent data and make reporting harder to trust."
	],
	[
		"06",
		"Automation is added before the process is clear",
		"Automating a weak process can make the underlying problem harder to see instead of solving it."
	]
];
var system = [
	[
		"01",
		"CRM Architecture",
		"Structure HubSpot around the actual business process, lead sources, properties, ownership and reporting needs."
	],
	[
		"02",
		"Lifecycle & Pipeline",
		"Define practical stages so marketing and sales share the same understanding of where a lead or opportunity sits."
	],
	[
		"03",
		"Lead Routing",
		"Create clear ownership and distribution rules so enquiries reach the right person, team or queue."
	],
	[
		"04",
		"Automation & Workflows",
		"Automate repeatable operational actions while keeping important customer decisions under human control."
	],
	[
		"05",
		"Lead Scoring",
		"Use meaningful signals to help the team prioritise leads instead of treating every enquiry equally."
	],
	[
		"06",
		"Attribution & Reporting",
		"Connect marketing source, lifecycle, qualification, pipeline and sales progression where the tracking supports it."
	]
];
var process = [
	[
		"01",
		"Audit",
		"Map how leads enter, move, get assigned, receive follow up and become opportunities."
	],
	[
		"02",
		"Design",
		"Define the lifecycle, properties, ownership rules, qualification logic and reporting structure."
	],
	[
		"03",
		"Build",
		"Implement routing, workflows, automation, scoring and operational rules around the agreed process."
	],
	[
		"04",
		"Connect",
		"Bring website, advertising, conversion and sales activity together where the available integrations support it."
	],
	[
		"05",
		"Improve",
		"Use CRM data and sales feedback to identify gaps and continuously improve the operating system."
	]
];
var deliverables = [
	"CRM architecture",
	"Lifecycle stage design",
	"Pipeline structure",
	"Lead routing",
	"Workflow automation",
	"Lead scoring",
	"Property design",
	"Marketing attribution",
	"Sales visibility",
	"Reporting dashboards",
	"Process documentation",
	"CRM optimisation roadmap"
];
var metrics = [
	["LEAD RESPONSE", "Speed to action"],
	["QUALIFIED RATE", "Lead quality"],
	["SOURCE QUALITY", "Channel value"],
	["PIPELINE", "Commercial progression"],
	["OPPORTUNITY RATE", "Sales movement"],
	["REVENUE", "Business outcome"]
];
var framework = [
	[
		"01",
		"Capture",
		"Bring the enquiry into a structured system with useful context and source information."
	],
	[
		"02",
		"Route",
		"Make ownership and next action clear so leads do not sit unattended."
	],
	[
		"03",
		"Qualify",
		"Use consistent criteria to distinguish activity from genuine sales opportunity."
	],
	[
		"04",
		"Automate",
		"Remove repetitive operational work with controlled workflows and rules."
	],
	[
		"05",
		"Measure",
		"Connect marketing activity with lifecycle, pipeline and sales progression."
	],
	[
		"06",
		"Improve",
		"Use evidence and feedback to refine the process over time."
	]
];
var fit = [
	"Generate leads through paid ads, websites, WhatsApp or other channels",
	"Have a sales team that needs better lead visibility",
	"Want a clearer CRM and lead management process",
	"Need to reduce repetitive manual follow up and routing work",
	"Want marketing performance connected to pipeline rather than lead volume alone"
];
var faq = [
	["Do you set up HubSpot from scratch?", "Yes. The work can cover a new HubSpot setup or the restructuring of an existing portal, depending on the current system and business requirements."],
	["Can you improve an existing HubSpot CRM without rebuilding it?", "Yes. Often the highest value comes from cleaning up lifecycle stages, properties, ownership, workflows and reporting rather than starting again."],
	["Can you automate lead distribution?", "Yes. Routing can be designed around source, service, geography, team ownership or qualification signals, subject to the available HubSpot setup."],
	["Can HubSpot show where leads came from?", "It can capture and report source and attribution information when tracking is implemented correctly. Reporting quality depends on the underlying data and integrations."],
	["Can you connect advertising with HubSpot?", "Yes. Google Ads, Meta Ads, website conversion tracking and CRM data can be connected where the required integrations and tracking architecture are available."],
	["Do you build lead scoring and workflows?", "Yes. Scoring and workflows can help prioritise leads, automate operational tasks and trigger appropriate actions based on defined rules."],
	["Will automation replace our sales team?", "No. The purpose is to remove repetitive operational work and improve visibility so sales can spend more time on conversations and opportunities that require human judgement."]
];
var reviews = [
	[
		"Muhammed Ashar",
		"Direct Manager",
		"I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing."
	],
	[
		"Deeksha S",
		"Operations Manager · Reliance",
		"I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results."
	],
	[
		"Highrange Flavours Idukki",
		"Google Review",
		"Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results."
	]
];
function HubSpotCRMService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "hs-service",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "hs-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "hs-grid",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container hs-hero-inner",
					children: /* @__PURE__ */ jsxs("div", {
						className: "hs-hero-copy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "HubSpot CRM & Automation"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Turn Your CRM Into the Operating System Behind Your Marketing." }),
							/* @__PURE__ */ jsx("p", {
								className: "hs-lead",
								children: "Build a clearer system for capturing, routing, qualifying, following up and measuring leads across the customer journey."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "hs-actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "hs-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Get a HubSpot Strategy ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}), /* @__PURE__ */ jsx("a", {
									className: "hs-secondary",
									href: "#approach",
									children: "View My Approach"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "hs-label",
								children: "HUBSPOT FOCUS AREAS"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "hs-pills",
								children: [
									/* @__PURE__ */ jsx("span", { children: "CRM ARCHITECTURE" }),
									/* @__PURE__ */ jsx("span", { children: "LEAD ROUTING" }),
									/* @__PURE__ */ jsx("span", { children: "AUTOMATION" }),
									/* @__PURE__ */ jsx("span", { children: "ATTRIBUTION" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "hs-meta",
								children: "Audit · Design · Build · Connect · Improve"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "The Problem"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A CRM should do more than store contacts." }),
							/* @__PURE__ */ jsx("p", { children: "When the system behind lead management is unclear, good marketing can still produce slow follow up, poor visibility and inconsistent sales execution." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-card-grid",
						children: problems.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section hs-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "hs-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "hs-eyebrow",
									children: "Strategic Insight"
								}),
								/* @__PURE__ */ jsx("h2", { children: "HubSpot becomes valuable when marketing activity connects to sales action." }),
								/* @__PURE__ */ jsx("p", { children: "The goal is not to add more CRM fields or automation. The goal is to create a reliable operating system around the real customer journey." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hs-funnel",
							children: [
								"CAPTURE",
								"ROUTE",
								"QUALIFY",
								"FOLLOW UP",
								"OPPORTUNITY",
								"REVENUE"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "hs-principle",
							children: "The CRM should make the next action clearer, not make the process more complicated."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "HubSpot System"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A CRM system built around how your business actually sells." }),
							/* @__PURE__ */ jsx("p", { children: "Six connected layers turn HubSpot from a contact database into a practical marketing and sales operating system." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-card-grid",
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
				className: "hs-section hs-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "How I Work"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Map the process before automating the process." }),
							/* @__PURE__ */ jsx("p", { children: "A disciplined five step approach that starts with the business process, not with a list of HubSpot features." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-process-cards",
						children: process.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "Deliverables"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Everything needed to build a more reliable CRM operation." }),
							/* @__PURE__ */ jsx("p", { children: "A practical scope covering architecture, lead management, automation, reporting and optimisation." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-deliverables",
						children: deliverables.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section hs-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "hs-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "hs-eyebrow",
									children: "Measurement"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Measure what happens after the lead enters the CRM." }),
								/* @__PURE__ */ jsx("p", { children: "HubSpot reporting should help answer whether marketing is producing leads that progress, not simply whether forms are being submitted." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hs-funnel hs-revenue",
							children: [
								"LEADS",
								"RESPONDED",
								"QUALIFIED",
								"OPPORTUNITIES",
								"PIPELINE",
								"REVENUE"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hs-metrics",
							children: metrics.map(([title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] }, title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "Strategy Framework"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Capture → Route → Qualify → Automate → Measure → Improve" }),
							/* @__PURE__ */ jsx("p", { children: "A framework for finding where lead operations break and deciding what the CRM should solve next." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-card-grid",
						children: framework.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section hs-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "What Working With Ashwin Looks Like"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Clear process, practical automation and measurable outcomes." }),
							/* @__PURE__ */ jsx("p", { children: "The work starts with how the business operates today and builds only what the process actually needs." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-process-list",
						children: [
							[
								"01",
								"Understand",
								"Business model, lead sources, sales process and conversion goals."
							],
							[
								"02",
								"Audit",
								"Review CRM structure, lifecycle, workflows, routing and reporting."
							],
							[
								"03",
								"Prioritise",
								"Identify the operational problems most worth solving first."
							],
							[
								"04",
								"Implement",
								"Translate the agreed process into HubSpot structure, automation and reporting."
							],
							[
								"05",
								"Improve",
								"Use data and sales feedback to refine the system over time."
							]
						].map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("span", { children: n }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] })] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "Who This Is For"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Is HubSpot CRM work right for your business?" }),
							/* @__PURE__ */ jsx("p", { children: "This is most useful when lead volume is growing but the operational system behind it needs more structure, visibility and consistency." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-fit",
						children: fit.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "✓" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section hs-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "Client Reviews"
							}),
							/* @__PURE__ */ jsx("h2", { children: "What clients have said about working with Ashwin." }),
							/* @__PURE__ */ jsx("p", { children: "Existing website testimonials are used here rather than adding unsupported CRM performance claims." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-reviews",
						children: reviews.map(([name, role, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsxs("p", { children: [
								"“",
								text,
								"”"
							] }),
							/* @__PURE__ */ jsx("strong", { children: name }),
							/* @__PURE__ */ jsx("span", { children: role })
						] }, name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hs-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hs-eyebrow",
								children: "FAQ"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Questions worth answering before you start." }),
							/* @__PURE__ */ jsx("p", { children: "Clear answers on CRM setup, automation, attribution and lead management." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hs-faq",
						children: faq.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "hs-eyebrow",
							children: "Ready to fix the post lead process?"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Build the CRM system your marketing actually needs." }),
						/* @__PURE__ */ jsx("p", { children: "Start with a practical review of your current lead flow, CRM structure and automation opportunities." }),
						/* @__PURE__ */ jsxs("a", {
							className: "hs-primary",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Start a HubSpot Conversation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "hs-related",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("p", {
						className: "hs-eyebrow",
						children: "Related Services"
					}), /* @__PURE__ */ jsxs("div", {
						className: "hs-related-grid",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/services/lead-generation",
								children: "Lead Generation"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/whatsapp-marketing",
								children: "WhatsApp Marketing"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/performance-marketing",
								children: "Performance Marketing"
							})
						]
					})]
				})
			})
		]
	});
}
export { HubSpotCRMService as default };
