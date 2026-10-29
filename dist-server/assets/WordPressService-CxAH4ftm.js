import { o as whatsappUrl } from "../entry-server.js";
/* empty css                           */
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/WordPressService.jsx
var problems = [
	[
		"01",
		"The website looks good but does not convert",
		"A polished WordPress site can still create friction when the message, structure and calls to action are not aligned with the buyer journey."
	],
	[
		"02",
		"Every change depends on a developer",
		"A site becomes harder to manage when routine content, landing page and campaign changes require unnecessary technical work."
	],
	[
		"03",
		"Performance is treated as an afterthought",
		"Heavy assets, unnecessary plugins and poor implementation can make the site slower and weaken the experience across devices."
	],
	[
		"04",
		"Marketing and website are disconnected",
		"Campaigns, landing pages, tracking and forms should work as one system rather than as separate pieces."
	],
	[
		"05",
		"Plugins create complexity",
		"Adding tools without a clear reason can introduce maintenance, compatibility and security problems."
	],
	[
		"06",
		"The site is not built for continuous improvement",
		"A marketing website should make it easier to test, measure, publish and improve over time."
	]
];
var system = [
	[
		"01",
		"Website Architecture",
		"Structure the WordPress site around clear information hierarchy, user journeys, services and commercial goals."
	],
	[
		"02",
		"Conversion Structure",
		"Use messaging, page sections, forms and calls to action that make the next step obvious."
	],
	[
		"03",
		"Custom Development",
		"Build or customise themes and components where the business needs flexibility beyond an off the shelf template."
	],
	[
		"04",
		"Performance",
		"Keep the implementation focused on useful assets, efficient loading and a strong experience across devices."
	],
	[
		"05",
		"Integrations",
		"Connect forms, CRM, analytics, advertising and other marketing systems where the required integrations are available."
	],
	[
		"06",
		"Maintenance & Growth",
		"Create a foundation that can be updated, monitored and improved as campaigns, offers and business priorities change."
	]
];
var process = [
	[
		"01",
		"Audit",
		"Review the current website, content, structure, performance, tracking, plugins and conversion paths."
	],
	[
		"02",
		"Plan",
		"Define the page architecture, content priorities, user journeys and technical requirements before implementation."
	],
	[
		"03",
		"Build",
		"Develop the agreed WordPress structure, components, pages, forms and integrations."
	],
	[
		"04",
		"Connect",
		"Implement analytics, conversion tracking and marketing connections required for measurement and lead handling."
	],
	[
		"05",
		"Improve",
		"Use real user behaviour, campaign data and business feedback to identify the next improvements."
	]
];
var deliverables = [
	"WordPress website development",
	"Custom theme and component work",
	"Service and landing pages",
	"Conversion focused page structure",
	"Responsive implementation",
	"Performance optimisation",
	"Plugin and integration setup",
	"Forms and lead capture",
	"Analytics and conversion tracking",
	"CRM connections",
	"Technical maintenance",
	"Website optimisation roadmap"
];
var metrics = [
	["LOAD EXPERIENCE", "Site performance"],
	["ENGAGEMENT", "User behaviour"],
	["CONVERSION RATE", "Enquiry efficiency"],
	["LEAD QUALITY", "Commercial value"],
	["SOURCE PERFORMANCE", "Marketing contribution"],
	["ENQUIRIES", "Business outcome"]
];
var framework = [
	[
		"01",
		"Structure",
		"Make the website architecture reflect what buyers need to understand and do."
	],
	[
		"02",
		"Message",
		"Clarify the offer, proof, differentiation and value before adding visual complexity."
	],
	[
		"03",
		"Build",
		"Translate the strategy into a flexible WordPress implementation that the business can maintain."
	],
	[
		"04",
		"Connect",
		"Link forms, analytics, CRM and marketing systems so the site can support the wider funnel."
	],
	[
		"05",
		"Measure",
		"Track meaningful actions rather than treating traffic as the final objective."
	],
	[
		"06",
		"Improve",
		"Use evidence to continuously reduce friction and improve the website experience."
	]
];
var fit = [
	"Need a new WordPress website built around business and marketing goals",
	"Have an existing WordPress site that needs structural or conversion improvements",
	"Need landing pages for paid advertising or lead generation",
	"Want better performance, tracking, integrations or maintainability",
	"Want the website to work as part of a wider acquisition and conversion system"
];
var faq = [
	["Do you build WordPress websites from scratch?", "Yes. The scope can cover the structure, page build, theme or component work, forms, integrations and measurement setup required for the agreed website."],
	["Can you improve an existing WordPress website?", "Yes. Existing sites can often be improved without rebuilding everything. The first step is identifying which structural, technical and conversion problems are actually worth solving."],
	["Can you build landing pages for paid ads?", "Yes. Landing pages can be structured around the campaign message, audience, offer, proof and conversion action rather than simply copying the main website."],
	["Do you optimise WordPress performance?", "Yes. Performance work can include reviewing assets, plugins, implementation and page behaviour. The exact improvements depend on the current website and hosting setup."],
	["Can you connect WordPress with HubSpot or other marketing tools?", "Yes. Forms, CRM, analytics and advertising systems can be connected where the required integrations and technical access are available."],
	["Do you set up tracking?", "Yes. Analytics and conversion tracking can be implemented around the actions that matter to the business, subject to the available platforms and consent requirements."],
	["Will I be able to manage the website myself?", "The goal is to create a maintainable setup where routine content changes can be handled without unnecessary technical dependency."]
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
var cards = (items) => /* @__PURE__ */ jsx("div", {
	className: "wp-card-grid",
	children: items.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
		/* @__PURE__ */ jsx("span", { children: n }),
		/* @__PURE__ */ jsx("h3", { children: title }),
		/* @__PURE__ */ jsx("p", { children: text })
	] }, n))
});
var funnel = (items) => /* @__PURE__ */ jsx("div", {
	className: "wp-funnel",
	children: items.map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: item }), i < items.length - 1 && /* @__PURE__ */ jsx("span", { children: "→" })] }, item))
});
function WordPressService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "wp-service",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "wp-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "wp-grid",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container wp-hero-inner",
					children: /* @__PURE__ */ jsxs("div", {
						className: "wp-hero-copy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "WordPress Development"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Build a WordPress Website That Supports Your Marketing." }),
							/* @__PURE__ */ jsx("p", {
								className: "wp-lead",
								children: "Create a faster, clearer and more flexible WordPress foundation for your website, landing pages, lead capture and growth activity."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "wp-actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "wp-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Get a WordPress Strategy ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}), /* @__PURE__ */ jsx("a", {
									className: "wp-secondary",
									href: "#approach",
									children: "View My Approach"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "wp-label",
								children: "WORDPRESS FOCUS AREAS"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "wp-pills",
								children: [
									/* @__PURE__ */ jsx("span", { children: "ARCHITECTURE" }),
									/* @__PURE__ */ jsx("span", { children: "CONVERSION" }),
									/* @__PURE__ */ jsx("span", { children: "PERFORMANCE" }),
									/* @__PURE__ */ jsx("span", { children: "INTEGRATIONS" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "wp-meta",
								children: "Plan · Build · Connect · Measure · Improve"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "The Problem"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A WordPress site should be more than a collection of pages." }),
							/* @__PURE__ */ jsx("p", { children: "When the website is disconnected from the commercial journey, good design can still produce slow performance, unclear messaging and missed enquiries." })
						]
					}), cards(problems)]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section wp-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "wp-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "wp-eyebrow",
									children: "Strategic Insight"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Your website should be part of the acquisition system, not separate from it." }),
								/* @__PURE__ */ jsx("p", { children: "The strongest WordPress builds connect positioning, page structure, performance, tracking and lead handling around the same customer journey." })
							]
						}),
						funnel([
							"DISCOVER",
							"UNDERSTAND",
							"TRUST",
							"CONVERT",
							"FOLLOW UP",
							"GROW"
						]),
						/* @__PURE__ */ jsx("p", {
							className: "wp-principle",
							children: "Build the website around the action you want the visitor to take next."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "WordPress System"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A website foundation designed around how your business actually grows." }),
							/* @__PURE__ */ jsx("p", { children: "Six connected layers turn WordPress into a practical marketing asset rather than a static online brochure." })
						]
					}), cards(system)]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "approach",
				className: "wp-section wp-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "How I Work"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Build the right website before adding unnecessary complexity." }),
							/* @__PURE__ */ jsx("p", { children: "A five step approach that starts with the business and customer journey, then translates that into a practical WordPress implementation." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "wp-process-cards",
						children: process.map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: n }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "Deliverables"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Everything needed for a marketing ready WordPress foundation." }),
							/* @__PURE__ */ jsx("p", { children: "A practical scope covering development, conversion, performance, integrations and ongoing optimisation." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "wp-deliverables",
						children: deliverables.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section wp-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "wp-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "wp-eyebrow",
									children: "Measurement"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Measure what the website helps the business achieve." }),
								/* @__PURE__ */ jsx("p", { children: "Website reporting should connect user behaviour and conversion activity with the marketing and commercial outcomes the site is designed to support." })
							]
						}),
						funnel([
							"TRAFFIC",
							"ENGAGED",
							"INTENT",
							"ENQUIRIES",
							"QUALIFIED",
							"OPPORTUNITIES"
						]),
						/* @__PURE__ */ jsx("div", {
							className: "wp-metrics",
							children: metrics.map(([title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] }, title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "Strategy Framework"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Structure → Message → Build → Connect → Measure → Improve" }),
							/* @__PURE__ */ jsx("p", { children: "A framework for making website decisions based on the customer journey and business objective rather than isolated design preferences." })
						]
					}), cards(framework)]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section wp-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "What Working With Ashwin Looks Like"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Clear structure, practical development and a website built to improve." }),
							/* @__PURE__ */ jsx("p", { children: "The work starts with the current business and website, then focuses effort on the changes that can create the clearest improvement." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "wp-process-list",
						children: [
							[
								"01",
								"Understand",
								"Business model, audience, offer, website goals and marketing channels."
							],
							[
								"02",
								"Audit",
								"Review structure, content, performance, plugins, forms, tracking and conversion paths."
							],
							[
								"03",
								"Prioritise",
								"Identify the website problems most worth solving first."
							],
							[
								"04",
								"Implement",
								"Translate the agreed strategy into WordPress pages, components, integrations and tracking."
							],
							[
								"05",
								"Improve",
								"Use behaviour, campaign data and business feedback to guide the next iteration."
							]
						].map(([n, title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("span", { children: n }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] })] }, n))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "Who This Is For"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Is WordPress development right for your business?" }),
							/* @__PURE__ */ jsx("p", { children: "This is most useful when the website needs to become a more reliable part of acquisition, conversion and marketing operations." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "wp-fit",
						children: fit.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "✓" }), /* @__PURE__ */ jsx("strong", { children: item })] }, item))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-section wp-dark",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "Client Reviews"
							}),
							/* @__PURE__ */ jsx("h2", { children: "What clients have said about working with Ashwin." }),
							/* @__PURE__ */ jsx("p", { children: "Existing website testimonials are used here rather than adding unsupported website performance claims." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "wp-reviews",
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
				className: "wp-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "wp-heading",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "wp-eyebrow",
								children: "FAQ"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Questions worth answering before you build." }),
							/* @__PURE__ */ jsx("p", { children: "Clear answers on WordPress development, landing pages, performance, integrations and tracking." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "wp-faq",
						children: faq.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [q, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: a })] }, q))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "wp-eyebrow",
							children: "Ready to improve your website?"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Build the WordPress foundation your marketing actually needs." }),
						/* @__PURE__ */ jsx("p", { children: "Start with a practical review of your current website, conversion journey and technical priorities." }),
						/* @__PURE__ */ jsxs("a", {
							className: "wp-primary",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Start a WordPress Conversation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "wp-related",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("p", {
						className: "wp-eyebrow",
						children: "Related Services"
					}), /* @__PURE__ */ jsxs("div", {
						className: "wp-related-grid",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/services/lead-generation",
								children: "Lead Generation"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services/cro",
								children: "CRO"
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
export { WordPressService as default };
