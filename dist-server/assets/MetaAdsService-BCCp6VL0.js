import { o as whatsappUrl } from "../entry-server.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/MetaAdsService.jsx
var included = [
	["Audience and offer strategy", "Define who the campaign should reach, what problem the offer solves and which audience signals matter."],
	["Campaign architecture", "Structure prospecting, retargeting and lead generation campaigns around clear objectives and budget."],
	["Creative direction", "Develop angles, hooks and creative briefs designed to stop the scroll and move the right prospect toward action."],
	["Lead qualification", "Build forms, questions and campaign signals around the type of lead your sales team actually wants."],
	["Conversion tracking", "Track meaningful actions so campaign decisions are based on useful conversion signals rather than clicks alone."],
	["Testing and optimisation", "Test audiences, offers, creative angles and campaign structure, then move budget toward stronger signals."]
];
var process = [
	[
		"01",
		"Audit",
		"Review the account, existing campaigns, creative, audiences, tracking and lead quality before changing the setup."
	],
	[
		"02",
		"Define the demand",
		"Clarify the audience, offer, buying trigger and qualification criteria the campaigns need to attract."
	],
	[
		"03",
		"Build the system",
		"Create the campaign structure, creative direction, lead flow and conversion signals around the commercial goal."
	],
	[
		"04",
		"Test and optimise",
		"Compare creative, audiences and campaign signals, then adjust spend based on evidence rather than assumptions."
	],
	[
		"05",
		"Feed back sales data",
		"Where CRM data is available, connect lead quality back to acquisition so optimisation moves beyond cheap lead volume."
	]
];
var faqs = [
	["Is Meta Ads suitable for a UAE service business?", "It can be, but not every service should use Meta in the same way. Meta is particularly useful when the offer can create demand, the audience can be defined clearly and the business has a strong enough value proposition to interrupt the feed."],
	["Why am I getting Meta Ads leads but poor quality enquiries?", "Lead volume is not the same as lead quality. The issue can come from audience signals, the offer, creative promise, form friction, qualification questions or sales follow up. I review the full journey rather than optimising only for the cheapest lead."],
	["How much should I spend on Meta Ads in Dubai?", "There is no useful universal budget. A sensible starting budget depends on audience size, offer economics, expected lead value and how much testing is needed to identify a repeatable acquisition pattern."],
	["Do you create the ad creatives?", "I provide creative direction around hooks, angles, offers and conversion messaging. The exact production model can be adapted to whether you already have an internal designer, content team or existing creative assets."],
	["Can you fix Meta conversion tracking?", "Yes. I can review the important conversion actions and whether the signals being sent back to Meta are meaningful for campaign optimisation. The objective is to measure actions that matter to the business, not just clicks."],
	["How quickly can Meta Ads generate leads?", "A campaign can start generating traffic and enquiries soon after launch when the audience, offer and creative have enough relevance. Reliable optimisation takes longer because useful patterns need to be separated from early noise."],
	["Do you manage Meta Ads yourself?", "Yes. The work is hands on, with campaign analysis and optimisation handled directly rather than passed through multiple account layers."]
];
function MetaAdsService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "meta-service-page",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "meta-service-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "meta-service-grid",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container meta-service-hero-inner",
					children: /* @__PURE__ */ jsx("div", {
						className: "meta-hero-layout",
						children: /* @__PURE__ */ jsxs("div", {
							className: "meta-hero-copy",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "meta-service-eyebrow",
									children: "Meta Ads Management · Dubai & UAE"
								}),
								/* @__PURE__ */ jsx("h1", { children: "Meta Ads Specialist in Dubai, UAE" }),
								/* @__PURE__ */ jsx("p", {
									className: "meta-service-hero-lead",
									children: "I build Facebook and Instagram campaigns around audience, offer, creative and lead quality signals so paid social creates useful conversations, not just cheap enquiries."
								}),
								/* @__PURE__ */ jsxs("a", {
									className: "meta-service-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Book a Free 15 Minute Meta Ads Audit ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "meta-service-trust",
									children: "No obligation · Hands on management · Audience strategy · Creative direction · Lead qualification"
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "meta-service-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "meta-service-eyebrow",
							children: "The problem"
						}), /* @__PURE__ */ jsx("h2", { children: "More leads do not automatically mean more demand." })] }), /* @__PURE__ */ jsx("p", { children: "Meta can generate inexpensive enquiries that look good in Ads Manager but create little value for the sales team. The campaign has to be built around the commercial problem, not just the platform metric." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "meta-pain-grid",
						children: [
							["“We are getting leads, but they are not serious.”", "Cheap lead volume can hide weak audience signals, vague offers and insufficient qualification."],
							["“Our ads work for a few weeks, then performance drops.”", "Creative fatigue and audience saturation can reduce response when testing is not built into the system."],
							["“We do not know which creative is actually working.”", "Without clear testing angles and meaningful conversion signals, changing ads becomes guesswork."],
							["“Meta reports conversions, but sales sees little value.”", "The platform can optimise toward the wrong action when the conversion signal does not represent business quality."]
						].map(([title, text]) => /* @__PURE__ */ jsxs("article", {
							className: "meta-pain-card",
							children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-section meta-service-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "meta-service-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "meta-service-eyebrow",
							children: "What's included"
						}), /* @__PURE__ */ jsx("h2", { children: "Meta Ads built around the whole acquisition journey." })] }), /* @__PURE__ */ jsx("p", { children: "The focus is not simply launching Facebook and Instagram campaigns. It is creating a system that can learn which audience, offer and creative combinations produce useful demand." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "meta-included-grid",
						children: included.map(([title, text], index) => /* @__PURE__ */ jsxs("article", {
							className: "meta-included-card",
							children: [
								/* @__PURE__ */ jsxs("span", { children: ["0", index + 1] }),
								/* @__PURE__ */ jsx("h3", { children: title }),
								/* @__PURE__ */ jsx("p", { children: text })
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "meta-service-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "meta-service-eyebrow",
							children: "The process"
						}), /* @__PURE__ */ jsx("h2", { children: "From audience hypothesis to better signals." })] }), /* @__PURE__ */ jsx("p", { children: "Every stage has a job. The process is designed to reduce wasted testing and make campaign decisions easier to explain." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "meta-process",
						children: process.map(([number, title, text]) => /* @__PURE__ */ jsxs("article", {
							className: "meta-process-row",
							children: [
								/* @__PURE__ */ jsx("span", { children: number }),
								/* @__PURE__ */ jsx("h3", { children: title }),
								/* @__PURE__ */ jsx("p", { children: text })
							]
						}, number))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-proof",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container meta-proof-grid",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "meta-service-eyebrow",
						children: "Results & proof"
					}), /* @__PURE__ */ jsx("h2", { children: "Measure the quality of demand, not just the number of forms." })] }), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", { children: "Relevant experience includes paid acquisition and lead generation across immigration and visa services, attestation and professional services, healthcare and wellness, recruitment and HR, business services and other high consideration offers." }),
						/* @__PURE__ */ jsx("p", { children: "When verified campaign and CRM data is available, this section should show concrete metrics such as qualified lead cost, lead to opportunity rate, conversion rate and spend to qualified enquiry." }),
						/* @__PURE__ */ jsx("div", {
							className: "meta-proof-note",
							children: "No invented performance figures. Only verified results should be published here."
						})
					] })]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container meta-differentiator",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "meta-service-eyebrow",
						children: "Why Ashwin"
					}), /* @__PURE__ */ jsx("h2", { children: "You work directly with the person making the campaign decisions." })] }), /* @__PURE__ */ jsx("p", { children: "I treat Meta Ads as one part of a growth system. Audience strategy, creative, landing pages, tracking, CRM and lead quality all affect whether paid social becomes useful demand. The goal is to understand what is happening, make the right change and measure what happens next." })]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-section meta-service-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "meta-service-heading",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "meta-service-eyebrow",
							children: "FAQ"
						}), /* @__PURE__ */ jsx("h2", { children: "Questions to answer before handing over your ad budget." })] }), /* @__PURE__ */ jsx("p", { children: "Clear answers to the concerns a skeptical business owner should have before starting." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "meta-faq",
						children: faqs.map(([question, answer]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [question, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: answer })] }, question))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "meta-service-eyebrow",
							children: "Ready to look at the account?"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Find out whether your Meta Ads are attracting the right demand." }),
						/* @__PURE__ */ jsx("p", { children: "Book 15 minutes. I will review the biggest potential issues in your current setup and explain what I would prioritise." }),
						/* @__PURE__ */ jsxs("div", {
							className: "meta-service-final-actions",
							children: [/* @__PURE__ */ jsxs("a", {
								className: "meta-service-primary",
								href: whatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								children: ["Book a Free 15 Minute Meta Ads Audit ", /* @__PURE__ */ jsx("span", { children: "↗" })]
							}), /* @__PURE__ */ jsx(Link, {
								className: "meta-service-back-button",
								to: "/services",
								children: "← Back to Services"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-related",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("p", {
						className: "meta-service-eyebrow",
						children: "Related services"
					}), /* @__PURE__ */ jsxs("div", {
						className: "meta-related-grid",
						children: [
							/* @__PURE__ */ jsxs(Link, {
								to: "/services/landing-page-optimisation",
								children: [/* @__PURE__ */ jsx("span", { children: "Landing Page Optimisation" }), /* @__PURE__ */ jsx("b", { children: "→" })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: "/services/lead-generation",
								children: [/* @__PURE__ */ jsx("span", { children: "Lead Generation" }), /* @__PURE__ */ jsx("b", { children: "→" })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: "/services/hubspot",
								children: [/* @__PURE__ */ jsx("span", { children: "HubSpot CRM & Automation" }), /* @__PURE__ */ jsx("b", { children: "→" })]
							})
						]
					})]
				})
			})
		]
	});
}
export { MetaAdsService as default };
