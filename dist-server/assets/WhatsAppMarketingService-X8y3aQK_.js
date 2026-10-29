import { o as whatsappUrl } from "../entry-server.js";
/* empty css                                    */
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/WhatsAppMarketingService.jsx
var problems = [
	[
		"01",
		"Clicks become unanswered chats",
		"A WhatsApp click is only the beginning. Without a clear response path, valuable purchase or enquiry intent can disappear after the first message."
	],
	[
		"02",
		"Every conversation starts differently",
		"When qualification depends on whoever replies, lead quality, sales context and customer experience become inconsistent."
	],
	[
		"03",
		"Follow up is easy to lose",
		"Interested prospects can go cold when reminders, ownership and next steps are left to memory."
	],
	[
		"04",
		"WhatsApp is disconnected from acquisition",
		"Without campaign, conversation and CRM visibility, it becomes difficult to understand which marketing activity creates useful opportunities."
	],
	[
		"05",
		"Automation happens before strategy",
		"Automating a weak conversation flow can simply make a poor customer experience happen faster."
	],
	[
		"06",
		"Message volume replaces business outcomes",
		"More chats do not necessarily mean more revenue. The important question is what those conversations become."
	]
];
var system = [
	[
		"01",
		"Entry Points",
		"Connect ads, website CTAs and other acquisition sources to relevant WhatsApp conversations."
	],
	[
		"02",
		"Conversation Design",
		"Structure the opening, questions, responses and next steps around real customer intent."
	],
	[
		"03",
		"Qualification",
		"Capture the information sales needs while keeping the conversation simple enough for prospects to continue."
	],
	[
		"04",
		"Automation",
		"Use automation for appropriate first responses, FAQs, routing and follow up without removing useful human interaction."
	],
	[
		"05",
		"CRM & Handoff",
		"Create clear ownership and visibility so useful conversations can move into the sales process."
	],
	[
		"06",
		"Measurement",
		"Track the journey from WhatsApp click to conversation, qualification, opportunity and downstream outcome."
	]
];
var process = [
	[
		"01",
		"Map",
		"Understand where WhatsApp enters the funnel, what the prospect already knows and what the next action should be."
	],
	[
		"02",
		"Design",
		"Create the conversation logic, qualification questions, response paths and handoff points."
	],
	[
		"03",
		"Connect",
		"Bring together tracking, segmentation, routing, automation and CRM connections where appropriate."
	],
	[
		"04",
		"Test",
		"Review entry points, offers, messages and conversation flows to identify where intent is being lost."
	],
	[
		"05",
		"Improve",
		"Use conversation and sales feedback to refine qualification, follow up and the path to opportunity."
	]
];
var deliverables = [
	"Click to WhatsApp strategy",
	"WhatsApp conversion audit",
	"Conversation flow mapping",
	"Lead qualification logic",
	"Automated response planning",
	"Follow up sequences",
	"Lead segmentation",
	"Campaign messaging",
	"CRM integration planning",
	"Tracking and event mapping",
	"Sales handoff recommendations",
	"Performance reporting"
];
var metrics = [
	["WHATSAPP CLICKS", "Entry intent"],
	["CONVERSATION STARTS", "Engagement"],
	["QUALIFIED RATE", "Lead quality"],
	["RESPONSE SPEED", "Sales readiness"],
	["CONVERSION RATE", "Opportunity creation"],
	["SALES OUTCOMES", "Commercial value"]
];
var framework = [
	[
		"01",
		"Intent",
		"Understand why the prospect is starting the conversation and what triggered the action."
	],
	[
		"02",
		"Context",
		"Give the conversation enough information to make the next step relevant."
	],
	[
		"03",
		"Qualification",
		"Identify whether the enquiry fits the offer and what sales needs to know."
	],
	[
		"04",
		"Follow Up",
		"Create a clear next step so interested prospects do not disappear between conversations."
	],
	[
		"05",
		"Handoff",
		"Move useful conversations to the right person, process or CRM stage."
	],
	[
		"06",
		"Learning",
		"Use conversation data and sales feedback to improve the system over time."
	]
];
var fit = [
	"Already receive enquiries through WhatsApp",
	"Use Meta Ads, Google Ads or other acquisition channels",
	"Have a sales team that needs better qualified conversations",
	"Want more structure around response and follow up",
	"Need clearer visibility from marketing activity to sales outcome"
];
var faq = [
	["Why should I optimise WhatsApp instead of just adding a WhatsApp button?", "A button creates an entry point. A conversion system defines what happens after the click, including response, qualification, follow up, routing and measurement."],
	["Can WhatsApp work with Google Ads and Meta Ads?", "Yes. Click to WhatsApp can be part of acquisition campaigns, with the conversation flow designed to continue the intent created by the ad."],
	["Can you automate WhatsApp conversations?", "Automation can handle appropriate first responses, FAQs, routing and follow up. The level of automation should depend on the complexity and sensitivity of the enquiry."],
	["Will automation make conversations feel impersonal?", "It can if it is overused. The goal is to remove repetitive work while keeping useful conversations clear and human where a sales decision requires context."],
	["Can WhatsApp leads be connected to a CRM?", "Yes, where the available setup supports it. CRM integration can help centralise lead information, ownership, status and follow up."],
	["How do you measure WhatsApp marketing?", "Depending on the setup, measurement can include WhatsApp clicks, conversation starts, qualified conversations, response speed, conversion rate and downstream sales outcomes."],
	["Is WhatsApp marketing useful for UAE businesses?", "Yes. WhatsApp is a widely used enquiry and communication channel for businesses in the UAE, which makes the quality of the post click experience especially important."]
];
var testimonials = [
	[
		"MA",
		"Muhammed Ashar",
		"Direct Manager · February 13, 2026",
		"I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing."
	],
	[
		"DS",
		"Deeksha S",
		"Operations Manager · Reliance · July 13, 2026",
		"I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results."
	],
	[
		"HF",
		"Highrange Flavours Idukki",
		"Google Review",
		"Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results, not..."
	]
];
function WhatsAppMarketingService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "wa-service",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "wa-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "wa-grid",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container wa-hero-inner",
					children: /* @__PURE__ */ jsxs("div", {
						className: "wa-hero-copy wa-hero-copy-centered",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wa-eyebrow",
								children: "WhatsApp Marketing"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Turn WhatsApp Conversations Into Qualified Opportunities" }),
							/* @__PURE__ */ jsx("p", {
								className: "wa-lead",
								children: "Build a clearer path from the first WhatsApp message to qualification, follow up and sales action, so your conversations become part of a measurable acquisition system."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "wa-actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "wa-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Get a WhatsApp Strategy ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}), /* @__PURE__ */ jsx("a", {
									className: "wa-secondary",
									href: "#approach",
									children: "View My Approach"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "wa-label",
								children: "WHATSAPP FOCUS AREAS"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "wa-pills",
								children: [
									/* @__PURE__ */ jsx("span", { children: "CLICK TO WHATSAPP" }),
									/* @__PURE__ */ jsx("span", { children: "CONVERSATION FLOWS" }),
									/* @__PURE__ */ jsx("span", { children: "QUALIFICATION" }),
									/* @__PURE__ */ jsx("span", { children: "CRM & AUTOMATION" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "wa-meta",
								children: "Map · Design · Connect · Test · Improve"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "The Problem"
						}), /* @__PURE__ */ jsx("h2", { children: "A WhatsApp Click Is Not a Conversion" })] }), /* @__PURE__ */ jsx("p", { children: "The conversation after the click determines whether intent becomes a useful lead, a sales opportunity or another unanswered chat." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-pain-grid",
						children: problems.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section wa-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "wa-heading",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "wa-eyebrow",
								children: "Strategic Insight"
							}), /* @__PURE__ */ jsx("h2", { children: "WhatsApp Is Part of the Conversion Path, Not Just a Messaging Channel" })] }), /* @__PURE__ */ jsx("p", { children: "The goal is to reduce the gap between marketing intent and sales action while keeping the conversation useful for the prospect and workable for the team." })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "wa-funnel",
							children: [
								"CLICK",
								"CONVERSATION",
								"CONTEXT",
								"QUALIFICATION",
								"OPPORTUNITY",
								"SALE"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "wa-principle",
							children: "The goal is not more chats. The goal is more useful conversations that can move forward."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "WhatsApp System"
						}), /* @__PURE__ */ jsx("h2", { children: "A Conversation System Built Around Customer Intent" })] }), /* @__PURE__ */ jsx("p", { children: "Six connected layers turn WhatsApp from an isolated inbox into a more structured part of acquisition and sales." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-system-grid",
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
				className: "wa-section wa-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "How I Work"
						}), /* @__PURE__ */ jsx("h2", { children: "Design the Conversation Before Automating It" })] }), /* @__PURE__ */ jsx("p", { children: "Automation is useful only when the underlying customer journey is clear and the next action is understood." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-process-cards",
						children: process.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "Deliverables"
						}), /* @__PURE__ */ jsx("h2", { children: "Everything Needed to Build a Better WhatsApp Conversion Path" })] }), /* @__PURE__ */ jsx("p", { children: "A practical scope covering conversation design, qualification, automation, CRM, tracking and sales handoff." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-deliverables",
						children: deliverables.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section wa-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "wa-heading",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "wa-eyebrow",
								children: "Measurement"
							}), /* @__PURE__ */ jsx("h2", { children: "Measure Conversations by What They Become" })] }), /* @__PURE__ */ jsx("p", { children: "WhatsApp performance should be evaluated beyond message volume. The useful signal is whether conversations become qualified opportunities and sales outcomes." })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "wa-funnel wa-revenue",
							children: [
								"CLICKS",
								"CONVERSATIONS",
								"QUALIFIED",
								"OPPORTUNITIES",
								"SALES",
								"REVENUE"
							].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < 5 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "wa-metrics",
							children: metrics.map(([title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] }, title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "Strategy Framework"
						}), /* @__PURE__ */ jsx("h2", { children: "Intent → Context → Qualification → Follow Up → Handoff → Learning" })] }), /* @__PURE__ */ jsx("p", { children: "A practical framework for understanding where WhatsApp conversations are losing momentum and what to improve next." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-system-grid",
						children: framework.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section wa-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "What Working With Ashwin Looks Like"
						}), /* @__PURE__ */ jsx("h2", { children: "Know What Happens After the Click" })] }), /* @__PURE__ */ jsx("p", { children: "The process starts with the acquisition and sales context already available before recommendations are made." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-process-list",
						children: [
							[
								"01",
								"Understand",
								"Business model, traffic sources, offer and conversation goal."
							],
							[
								"02",
								"Audit",
								"Review entry points, conversation flow, response process and measurement."
							],
							[
								"03",
								"Prioritise",
								"Identify the opportunities most likely to improve conversation quality and sales movement."
							],
							[
								"04",
								"Implement",
								"Translate recommendations into focused conversation, automation and handoff changes."
							],
							[
								"05",
								"Learn",
								"Measure the result and use sales feedback to determine the next iteration."
							]
						].map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("span", { children: n }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] })] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "Client Perspectives"
						}), /* @__PURE__ */ jsx("h2", { children: "Results Matter. So Does the Way We Get There." })] }), /* @__PURE__ */ jsx("p", { children: "A few perspectives from people who have worked with Ashwin across performance marketing and growth projects." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-testimonials",
						children: testimonials.map(([initials, name, role, quote]) => /* @__PURE__ */ jsxs("figure", { children: [
							/* @__PURE__ */ jsx("div", {
								className: "wa-stars",
								children: "★★★★★"
							}),
							/* @__PURE__ */ jsxs("blockquote", { children: [
								"“",
								quote,
								"”"
							] }),
							/* @__PURE__ */ jsxs("figcaption", { children: [/* @__PURE__ */ jsx("span", { children: initials }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: name }), /* @__PURE__ */ jsx("small", { children: role })] })] })
						] }, name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section wa-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "Who This Is For"
						}), /* @__PURE__ */ jsx("h2", { children: "Is WhatsApp Marketing Right for Your Business?" })] }), /* @__PURE__ */ jsx("p", { children: "This approach is most useful when WhatsApp already plays a meaningful role in enquiries, sales or customer communication." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-fit",
						children: fit.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "✓" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wa-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "FAQ"
						}), /* @__PURE__ */ jsx("h2", { children: "Answers to the Questions That Affect the Decision" })] }), /* @__PURE__ */ jsx("p", { children: "Clear answers on automation, acquisition, CRM, measurement and conversion." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "wa-faq",
						children: faq.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "wa-eyebrow",
							children: "Make WhatsApp Part of the Sales System"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Improve What Happens After the Click." }),
						/* @__PURE__ */ jsx("p", { children: "Build a clearer conversation journey that turns more of the right WhatsApp enquiries into measurable business opportunities." }),
						/* @__PURE__ */ jsxs("a", {
							className: "wa-primary",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Start a WhatsApp Conversation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wa-related",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("p", {
						className: "wa-eyebrow",
						children: "Related Services"
					}), /* @__PURE__ */ jsxs("div", {
						className: "wa-related-grid",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/services/meta-ads",
								children: "Meta Ads"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/lead-generation",
								children: "Lead Generation"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/hubspot",
								children: "HubSpot CRM & Automation"
							})
						]
					})]
				})
			})
		]
	});
}
export { WhatsAppMarketingService as default };
