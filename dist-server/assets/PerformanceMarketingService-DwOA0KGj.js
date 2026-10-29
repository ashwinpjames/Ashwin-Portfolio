import { o as whatsappUrl } from "../entry-server.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
import { FiAward, FiMapPin, FiStar } from "react-icons/fi";
// src/pages/PerformanceMarketingService.jsx
var included = [
	{
		title: "Paid Media Strategy & Execution",
		text: "I plan and manage paid acquisition around commercial intent, audience quality and business economics. This includes Google Ads across Search, Shopping, Display and Performance Max, alongside Meta Ads across Facebook and Instagram, retargeting and creative testing."
	},
	{
		title: "Landing Pages That Convert",
		text: "Paid traffic only creates value when the destination continues the promise made in the ad. I apply CRO fundamentals to landing page structure, messaging, calls to action and conversion friction so more of the right visitors have a clear path to enquire."
	},
	{
		title: "Lead Generation Systems",
		text: "A lead generation system connects the offer, acquisition channels, qualification process and sales handoff. I build the acquisition side around the type of lead the business actually needs, with measurement that makes lead quality visible.",
		link: ["/services/lead-generation", "Lead Generation"]
	},
	{
		title: "CRM & Marketing Automation",
		text: "Getting a lead is only the start. CRM workflows, lifecycle stages, source tracking, routing and automation help make sure opportunities are captured, followed up and measured instead of disappearing after the first enquiry.",
		link: ["/services/hubspot", "HubSpot"]
	},
	{
		title: "WhatsApp & Conversational Follow-Up",
		text: "For high intent leads, the conversation after the click can determine whether an enquiry becomes an opportunity. Structured WhatsApp journeys can improve response consistency, qualification and handoff while keeping the customer experience practical and human.",
		link: ["/services/whatsapp-marketing", "WhatsApp Marketing"]
	},
	{
		title: "SEO & Organic Growth",
		text: "Paid acquisition does not have to carry the entire growth burden. Search visibility can create a compounding acquisition channel by building authority around the commercial searches that matter to the business.",
		link: ["/services/seo", "SEO"]
	},
	{
		title: "Website Foundations",
		text: "The website is part of the acquisition system, not just a brochure. I can help with the technical and conversion foundations required for a reliable marketing journey, from WordPress implementation to broader website development.",
		links: [["/services/wordpress", "WordPress"], ["/services/website-development", "Website Development"]]
	}
];
var steps = [
	[
		"01",
		"Audit",
		"Review your current channels, tracking, and CRM setup to find what is actually broken or missing."
	],
	[
		"02",
		"Build",
		"Set up or rebuild campaigns, landing pages, and CRM workflows as one connected system."
	],
	[
		"03",
		"Launch & Optimize",
		"Run campaigns with ongoing optimization based on real conversion data, not vanity metrics."
	],
	[
		"04",
		"Report",
		"Clear, honest reporting tied to leads and revenue, not just clicks and impressions."
	]
];
var faqs = [
	["How fast will I see results?", "Paid media can start generating leads within the first 1–2 weeks of launch. Structural fixes, like CRM automation or landing page rebuilds, tend to compound over the following months as data comes in."],
	["Do I need to already have a website or CRM set up?", "No. Part of the audit is figuring out what is missing and building it, whether that is a landing page, a HubSpot CRM instance, or a properly tracked website."],
	["What if I’m only interested in one part of this, like Google Ads?", "That is fine. Each service can be run on its own. The system approach is recommended because disconnected pieces tend to leak leads, but it is not required to get started."],
	["Is there a minimum commitment?", "This is discussed on the strategy call based on your goals and current setup. There are no generic lock-in packages."]
];
function CTA({ children }) {
	return /* @__PURE__ */ jsxs("a", {
		className: "pm-primary",
		href: whatsappUrl,
		target: "_blank",
		rel: "noreferrer",
		children: [
			children,
			" ",
			/* @__PURE__ */ jsx("span", { children: "↗" })
		]
	});
}
function ServiceLink({ href, children }) {
	return /* @__PURE__ */ jsx(Link, {
		className: "pm-inline-link",
		to: href,
		children
	});
}
var trustIndicators = [
	{
		icon: FiMapPin,
		title: "UAE Market Experience",
		subtitle: "Local Expertise"
	},
	{
		icon: FiStar,
		title: "5/5 Rated",
		subtitle: "Client Satisfaction"
	},
	{
		icon: FiAward,
		title: "5+ Years",
		subtitle: "Industry Experience"
	}
];
function PerformanceMarketingService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "pm-page",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "pm-hero",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "pm-grid",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pm-glow pm-glow-one",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pm-glow pm-glow-two",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "container pm-hero-inner",
						children: /* @__PURE__ */ jsxs("div", {
							className: "pm-hero-copy",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "services-eyebrow",
									children: "Performance Marketing · Dubai, UAE"
								}),
								/* @__PURE__ */ jsxs("h1", { children: ["Performance Marketing Services for Businesses in ", /* @__PURE__ */ jsx("span", { children: "Dubai, UAE" })] }),
								/* @__PURE__ */ jsx("p", {
									className: "pm-lead",
									children: "I connect paid acquisition, conversion-focused landing pages, analytics and CRM workflows into a practical performance marketing system for businesses in Dubai and across the UAE."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "pm-hero-actions",
									children: [/* @__PURE__ */ jsxs("a", {
										className: "pm-primary pm-whatsapp-cta",
										href: whatsappUrl,
										target: "_blank",
										rel: "noreferrer",
										children: ["Message on WhatsApp ", /* @__PURE__ */ jsx("span", { children: "↗" })]
									}), /* @__PURE__ */ jsxs(Link, {
										className: "pm-secondary",
										to: "/contact",
										children: ["Book a Consultation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "pm-trust-grid",
									"aria-label": "Trust indicators",
									children: trustIndicators.map(({ icon: Icon, title, subtitle }) => /* @__PURE__ */ jsxs("div", {
										className: "pm-trust-item",
										children: [/* @__PURE__ */ jsx("span", {
											className: "pm-trust-icon",
											children: /* @__PURE__ */ jsx(Icon, { "aria-hidden": "true" })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: title }), /* @__PURE__ */ jsx("span", { children: subtitle })] })]
									}, title))
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pm-section pm-problem",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container pm-narrow",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "pm-section-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "services-eyebrow",
									children: "The Problem"
								}),
								/* @__PURE__ */ jsx("h2", { children: "The Problem" }),
								/* @__PURE__ */ jsx("p", { children: "Most businesses running ads are stuck with one (or more) of these:" })
							]
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "pm-problem-list",
							children: [
								/* @__PURE__ */ jsx("li", { children: "Spend going up, but leads staying flat or getting more expensive" }),
								/* @__PURE__ */ jsx("li", { children: "Traffic landing on pages that were never built to convert" }),
								/* @__PURE__ */ jsx("li", { children: "Leads coming in but going cold because follow-up is slow or manual" }),
								/* @__PURE__ */ jsx("li", { children: "Multiple freelancers or agencies handling different pieces, none of them talking to each other" })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "pm-closing",
							children: "Individually, none of these look like a crisis. Together, they quietly cap how much you can grow."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pm-section pm-fix",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container pm-two-column",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "services-eyebrow",
						children: "The Fix"
					}), /* @__PURE__ */ jsx("h2", { children: "The Fix: One System, Not Separate Services" })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", { children: [
						"As a ",
						/* @__PURE__ */ jsx("a", {
							href: "/",
							children: "Performance Marketing Specialist"
						}),
						", I build and manage acquisition systems where the channel, landing page, tracking, and follow up all work toward the same goal: generating qualified leads at a cost you can scale. I plan, launch, and manage paid acquisition across ",
						/* @__PURE__ */ jsx(ServiceLink, {
							href: "/services/google-ads",
							children: "Google Ads"
						}),
						" and ",
						/* @__PURE__ */ jsx(ServiceLink, {
							href: "/services/meta-ads",
							children: "Meta Ads"
						}),
						", supported by conversion focused landing pages built on ",
						/* @__PURE__ */ jsx(ServiceLink, {
							href: "/services/cro",
							children: "CRO"
						}),
						" principles and CRM systems in ",
						/* @__PURE__ */ jsx(ServiceLink, {
							href: "/services/hubspot",
							children: "HubSpot"
						}),
						" that ensure no lead sits unattended. One person, one system, and full visibility into what is actually driving revenue."
					] }), /* @__PURE__ */ jsx(CTA, { children: "See If This Fits Your Business" })] })]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pm-section pm-included",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "pm-section-heading",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "services-eyebrow",
									children: "What’s Included"
								}),
								/* @__PURE__ */ jsx("h2", { children: "Everything connected to the growth problem." }),
								/* @__PURE__ */ jsx("p", { children: "Choose the parts you need now, with the option to connect the rest when the bottleneck sits across the funnel." })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pm-included-grid",
							children: included.map((item, index) => /* @__PURE__ */ jsxs("article", {
								className: "pm-card",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "pm-card-number",
										children: ["0", index + 1]
									}),
									/* @__PURE__ */ jsx("h3", { children: item.title }),
									/* @__PURE__ */ jsx("p", { children: item.text }),
									item.link && /* @__PURE__ */ jsxs(ServiceLink, {
										href: item.link[0],
										children: [
											"Explore ",
											item.link[1],
											" ",
											/* @__PURE__ */ jsx("span", { children: "→" })
										]
									}),
									item.links && /* @__PURE__ */ jsx("div", {
										className: "pm-card-links",
										children: item.links.map(([href, label]) => /* @__PURE__ */ jsxs(ServiceLink, {
											href,
											children: [
												label,
												" ",
												/* @__PURE__ */ jsx("span", { children: "→" })
											]
										}, label))
									})
								]
							}, item.title))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pm-section-cta",
							children: /* @__PURE__ */ jsx(CTA, { children: "Get Your Free Growth Audit" })
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pm-section pm-work",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "pm-section-heading",
						children: [/* @__PURE__ */ jsx("p", {
							className: "services-eyebrow",
							children: "How I Work"
						}), /* @__PURE__ */ jsx("h2", { children: "A simple process built around evidence." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "pm-steps",
						children: steps.map(([number, title, text]) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("span", { children: number }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: title }), /* @__PURE__ */ jsx("p", { children: text })] })] }, number))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pm-section pm-why",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container pm-two-column",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "services-eyebrow",
						children: "Why Work With Me"
					}), /* @__PURE__ */ jsx("h2", { children: "One person accountable for the system." })] }), /* @__PURE__ */ jsxs("ul", {
						className: "pm-why-list",
						children: [
							/* @__PURE__ */ jsx("li", { children: "Based in Dubai, working directly with UAE businesses — no account managers, no hand-offs" }),
							/* @__PURE__ */ jsx("li", { children: "Hands-on across paid media, CRO, CRM, and analytics, managed by one person end-to-end" }),
							/* @__PURE__ */ jsx("li", { children: "Systems-first approach: campaigns, pages, and follow-up are built to work together, not billed as separate line items" })
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pm-section pm-faq",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container pm-narrow",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "pm-section-heading",
						children: [/* @__PURE__ */ jsx("p", {
							className: "services-eyebrow",
							children: "FAQ"
						}), /* @__PURE__ */ jsx("h2", { children: "Common Questions" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "pm-faq-list",
						children: faqs.map(([question, answer]) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: [question, /* @__PURE__ */ jsx("span", { children: "+" })] }), /* @__PURE__ */ jsx("p", { children: answer })] }, question))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pm-final",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container pm-final-inner",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "services-eyebrow",
							children: "Ready to Fix Your Growth System?"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Ready to Fix Your Growth System?" }),
						/* @__PURE__ */ jsx("p", { children: "Book a free strategy call. You’ll walk away with a clear view of what’s working, what’s leaking leads, and what to do next — whether or not we end up working together." }),
						/* @__PURE__ */ jsx(CTA, { children: "Book a Free Strategy Call" })
					]
				})
			})
		]
	});
}
export { PerformanceMarketingService as default };
