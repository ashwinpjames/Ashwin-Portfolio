import { t as CaseStudyLeadForm } from "./CaseStudyLeadForm-ApMOz956.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/MetaTrackingCaseStudy.jsx
var signalSources = [
	[
		"Ad blockers",
		"Prevents the browser pixel from loading",
		"42.7% of users affected"
	],
	[
		"iOS App Tracking Transparency",
		"Requires explicit opt in before app tracking",
		"~89% opt out rate"
	],
	[
		"Safari ITP / Firefox ETP",
		"Restricts cookie lifetime and multi session attribution",
		"Attribution becomes less reliable"
	],
	[
		"Chrome cookie restrictions",
		"Reduces browser based tracking signals",
		"Impact varies by browser"
	],
	[
		"Attribution window changes",
		"Changes which conversions are reported to Meta",
		"Reported performance can fall"
	],
	[
		"Combined effect",
		"Multiple barriers can affect the same visitor",
		"30 to 50% signal loss in the source benchmark"
	]
];
function MetaTrackingCaseStudy() {
	return /* @__PURE__ */ jsx("main", {
		className: "crm-case-page",
		children: /* @__PURE__ */ jsxs("div", {
			className: "crm-case-shell",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "crm-case-header",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/case-studies",
						className: "crm-back",
						children: "← Case studies"
					}), /* @__PURE__ */ jsx("span", { children: "PAID MEDIA · META ADS" })]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-case-hero",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "crm-case-hero-copy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "crm-kicker",
								children: "Meta Pixel + CAPI · 2026 signal landscape"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Half your conversions are invisible. The dashboard just doesn’t say so." }),
							/* @__PURE__ */ jsx("p", {
								className: "crm-hero-summary",
								children: "A practical breakdown of why pixel only Meta Ads tracking can underreport performance, where the signal breaks and why Pixel plus Conversions API has become important tracking infrastructure."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "crm-tags",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Signal loss" }),
									/* @__PURE__ */ jsx("span", { children: "Server side tracking" }),
									/* @__PURE__ */ jsx("span", { children: "Attribution accuracy" }),
									/* @__PURE__ */ jsx("span", { children: "Ad blockers" })
								]
							})
						]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "crm-hero-result",
						children: [
							/* @__PURE__ */ jsx("small", { children: "TYPICAL SIGNAL LOSS" }),
							/* @__PURE__ */ jsx("strong", { children: "30 to 50%" }),
							/* @__PURE__ */ jsx("span", { children: "of real conversions missed on pixel only setups" }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("b", { children: "95 to 99%" }), " capture rate cited for combined Pixel + CAPI setups"] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-stat-strip",
					"aria-label": "Key metrics",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "42.7%" }), /* @__PURE__ */ jsx("span", { children: "Ad blocker adoption in the source benchmark" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "11%" }), /* @__PURE__ */ jsx("span", { children: "iOS users opting in to app tracking" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "20 to 40%" }), /* @__PURE__ */ jsx("span", { children: "Conversions cited as recoverable with CAPI" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "8.0+" }), /* @__PURE__ */ jsx("span", { children: "EMQ score referenced for stronger signal quality" })] })
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [/* @__PURE__ */ jsx("div", {
						className: "crm-section-label",
						children: "01 · THE QUESTION"
					}), /* @__PURE__ */ jsxs("div", {
						className: "crm-two-col",
						children: [/* @__PURE__ */ jsx("h2", { children: "The graph in Ads Manager looked fine. The revenue in Stripe didn’t agree with it." }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Pixel based tracking depends on the browser successfully sending events back to Meta. The source draft identifies iOS tracking restrictions, browser privacy controls, ad blockers and cookie changes as separate barriers to that signal." }), /* @__PURE__ */ jsx("p", { children: "The practical question is therefore not only whether the pixel fires, but whether enough trustworthy conversion signal reaches Meta to support measurement and optimisation." })] })]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "crm-section-label",
							children: "02 · WHERE THE SIGNAL BREAKS"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "crm-two-col",
							children: [/* @__PURE__ */ jsx("h2", { children: "It isn’t one leak. It’s several layers of signal loss." }), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "A visitor can encounter more than one tracking barrier during the same journey. That makes the combined measurement problem larger than any single source of loss." }) })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "crm-chart-card meta-signal-chart",
							children: signalSources.slice(0, 4).map(([label, , value], index) => /* @__PURE__ */ jsxs("div", {
								className: "meta-signal-row",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: label }), /* @__PURE__ */ jsx("small", { children: value })] }), /* @__PURE__ */ jsx("i", { style: { width: `${[
									85,
									100,
									55,
									62
								][index]}%` } })]
							}, label))
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "crm-section-label",
							children: "03 · KEY FINDING"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "crm-feature-heading",
							children: "Pixel only and Pixel plus CAPI are two different measurement paths."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "crm-finding",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", { children: "PIXEL ONLY" }),
									/* @__PURE__ */ jsx("strong", { children: "60 to 70%" }),
									/* @__PURE__ */ jsx("small", { children: "of actual conversions captured in the source benchmark" })
								] }),
								/* @__PURE__ */ jsx("div", {
									className: "crm-finding-arrow",
									children: "vs"
								}),
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", { children: "PIXEL + CAPI" }),
									/* @__PURE__ */ jsx("strong", { children: "95 to 99%" }),
									/* @__PURE__ */ jsx("small", { children: "of actual conversions captured in the source benchmark" })
								] })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "crm-finding-text",
							children: "Missing conversion events can affect both reporting and the signal available to Meta’s optimisation system. The draft therefore frames CAPI as an infrastructure improvement rather than simply a reporting add on."
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "crm-section-label",
							children: "04 · THE FRAMEWORK"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "crm-framework",
							children: [
								"Browser Pixel fires",
								"Privacy layer intercepts",
								"Server side CAPI fires",
								"Event ID deduplication",
								"Advanced Matching",
								"Clean signal reaches Meta"
							].map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
								/* @__PURE__ */ jsx("strong", { children: item }),
								index < 5 && /* @__PURE__ */ jsx("i", { children: "→" })
							] }, item))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "crm-two-col crm-framework-copy",
							children: [/* @__PURE__ */ jsx("h2", { children: "Move the question from “is the pixel firing?” to “is the signal reaching Meta?”" }), /* @__PURE__ */ jsx("p", { children: "Pixel and CAPI should work as complementary paths, with shared event IDs used to prevent duplicate conversions. Advanced Matching can further improve event matching quality." })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [/* @__PURE__ */ jsx("div", {
						className: "crm-section-label",
						children: "05 · WHERE CAPI ALONE STILL FALLS SHORT"
					}), /* @__PURE__ */ jsxs("div", {
						className: "crm-two-col",
						children: [/* @__PURE__ */ jsx("h2", { children: "Server side tracking is not a silver bullet." }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "The source draft highlights cross browser journeys and poor deduplication as important limitations. A visitor can begin in one environment and complete the journey somewhere else, while incorrect event matching can create duplicate conversion reporting." }), /* @__PURE__ */ jsx("p", { children: "The practical fix is a properly designed event architecture with reliable event IDs and ongoing match quality checks." })] })]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "crm-section-label",
							children: "06 · SIGNAL LOSS SOURCES"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "crm-feature-heading",
							children: "What can block or weaken the browser signal?"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "crm-table-card",
							children: /* @__PURE__ */ jsxs("table", { children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", { children: "Cause" }),
								/* @__PURE__ */ jsx("th", { children: "Mechanism" }),
								/* @__PURE__ */ jsx("th", { children: "Typical impact" })
							] }) }), /* @__PURE__ */ jsx("tbody", { children: signalSources.map(([cause, mechanism, impact]) => /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("td", { children: cause }),
								/* @__PURE__ */ jsx("td", { children: mechanism }),
								/* @__PURE__ */ jsx("td", {
									className: "impact",
									children: impact
								})
							] }, cause)) })] })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "crm-source-note",
							children: "Draft case study based on the supplied 2026 benchmark material. Figures should be independently verified against current primary sources before this case study is presented as a final published analysis."
						})
					]
				}),
				/* @__PURE__ */ jsx(CaseStudyLeadForm, {
					eyebrow: "Want a Meta Ads tracking audit?",
					title: "Not sure how much conversion signal you’re losing?",
					description: "I can review your Meta Pixel, Conversions API setup, event quality, deduplication and measurement flow. Prefer a practical starting point? Ask for the Meta Ads launch checklist.",
					buttonLabel: "Request a tracking audit"
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "crm-case-footer",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/case-studies",
						children: "← Back to all case studies"
					}), /* @__PURE__ */ jsx("span", { children: "META ADS · SIGNAL LOSS & TRACKING" })]
				})
			]
		})
	});
}
export { MetaTrackingCaseStudy as default };
