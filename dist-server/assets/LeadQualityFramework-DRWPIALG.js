import { Link } from "react-router-dom";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/LeadQualityFramework.jsx
var stages = [
	{
		number: "01",
		title: "Acquisition",
		system: "Meta & Google",
		summary: "Capture acquisition signals at campaign and ad set level, with source data that survives the handoff.",
		metrics: [
			"CPL by campaign and ad set",
			"CTR and CPM",
			"Lead volume",
			"Form completion rate",
			"UTM / source tagging"
		],
		good: "Every campaign, ad set and creative variant follows a consistent UTM structure into a dedicated CRM property.",
		breaks: "Redirects strip UTMs, forms fail to pass hidden fields, or naming conventions change and orphan historical data."
	},
	{
		number: "02",
		title: "Qualification",
		system: "HubSpot",
		summary: "Turn lead volume into a trustworthy quality signal by scoring and qualifying leads consistently.",
		metrics: [
			"Lead score at intake",
			"MQL → SQL conversion rate",
			"Disqualification reason by source",
			"Speed to first touch"
		],
		good: "Disqualification reasons are required and reviewed by source so acquisition problems can be separated from sales problems.",
		breaks: "Sales marks leads unqualified without a reason, removing the data marketing needs to improve targeting."
	},
	{
		number: "03",
		title: "Conversion",
		system: "HubSpot & CRM",
		summary: "Connect qualified leads to opportunities and revenue so channel quality can be judged commercially.",
		metrics: [
			"Opportunity → closed won rate",
			"Average deal value by source",
			"Sales cycle length by source",
			"Win / loss reason"
		],
		good: "Closed won deals can be traced back to their original source without manual lookup.",
		breaks: "Last touch overwrites the original source and silently removes the campaign that generated the lead."
	},
	{
		number: "04",
		title: "Attribution",
		system: "Revenue reporting",
		summary: "Put acquisition cost and closed revenue into the same view so budget decisions reflect commercial outcomes.",
		metrics: [
			"Revenue by campaign",
			"CAC by channel",
			"CAC : LTV ratio",
			"True cost per customer"
		],
		good: "Revenue and CAC : LTV are reported by channel on the same cadence as ad spend.",
		breaks: "Attribution is reviewed too late, so budget continues flowing into channels before their true economics are understood."
	}
];
var flow = [
	[
		"Campaign / ad set",
		"Meta / Google",
		"UTM → HubSpot source property"
	],
	[
		"Lead score, MQL / SQL status",
		"HubSpot",
		"Deal level source field"
	],
	[
		"Deal value, close date",
		"HubSpot / CRM",
		"Revenue by source report"
	],
	[
		"CAC, CAC : LTV",
		"Revenue reporting",
		"Feeds back into budget allocation"
	]
];
function LeadQualityFramework() {
	const [active, setActive] = useState(0);
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const stage = stages[active];
	const submit = (event) => {
		event.preventDefault();
		if (!email.trim()) return;
		setSubmitted(true);
	};
	return /* @__PURE__ */ jsxs("main", {
		className: "lead-quality-page",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "lq-hero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container lq-container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "resources-eyebrow",
							children: "Framework · Meta · Google · HubSpot"
						}),
						/* @__PURE__ */ jsxs("h1", { children: ["Stop optimizing for cheap leads. ", /* @__PURE__ */ jsx("span", { children: "Measure what becomes revenue." })] }),
						/* @__PURE__ */ jsx("p", {
							className: "lq-hero-copy",
							children: "A practical framework for connecting acquisition metrics with sales qualification and downstream commercial outcomes."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lq-pills",
							children: [
								/* @__PURE__ */ jsx("span", { children: "Acquisition" }),
								/* @__PURE__ */ jsx("span", { children: "Qualification" }),
								/* @__PURE__ */ jsx("span", { children: "Conversion" }),
								/* @__PURE__ */ jsx("span", { children: "Attribution" })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lq-gap",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container lq-container",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "lq-section-label",
							children: "THE GAP"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lq-two-col",
							children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { children: "Most advertisers optimize the wrong end of the funnel." }) }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Campaigns are often judged on CPL, CTR and lead volume. Those numbers live inside Meta and Google. The harder question is what happens after the form fill." }), /* @__PURE__ */ jsx("p", {
								className: "lq-callout",
								children: "A $40 lead that closes at 25% can be cheaper than a $15 lead that closes at 2%."
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lq-contrast",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "✕ CPL alone" }), /* @__PURE__ */ jsx("p", { children: "Marketing sees cheap volume. Sales says the leads are bad. Neither side can prove what happened after submission." })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "✓ Full thread" }), /* @__PURE__ */ jsx("p", { children: "Source and campaign data follow the lead into the CRM, qualification feeds back into acquisition, and revenue becomes the scaling signal." })] })]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lq-model",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container lq-container",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "lq-section-label",
							children: "THE MODEL"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lq-model-heading",
							children: [/* @__PURE__ */ jsx("h2", { children: "Four stages. One connected thread." }), /* @__PURE__ */ jsx("p", { children: "Each stage has its own metrics and system of record. The framework is the wiring between them." })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lq-stage-tabs",
							children: stages.map((item, index) => /* @__PURE__ */ jsxs("button", {
								type: "button",
								className: active === index ? "active" : "",
								onClick: () => setActive(index),
								children: [
									/* @__PURE__ */ jsx("span", { children: item.number }),
									/* @__PURE__ */ jsx("strong", { children: item.title }),
									/* @__PURE__ */ jsx("small", { children: item.system })
								]
							}, item.number))
						}),
						/* @__PURE__ */ jsxs("article", {
							className: "lq-stage-detail",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lq-stage-top",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "lq-number",
										children: stage.number
									}),
									/* @__PURE__ */ jsx("p", {
										className: "lq-system",
										children: stage.system
									}),
									/* @__PURE__ */ jsx("h3", { children: stage.title }),
									/* @__PURE__ */ jsx("p", { children: stage.summary })
								] }), /* @__PURE__ */ jsxs("div", {
									className: "lq-metrics",
									children: [/* @__PURE__ */ jsx("p", { children: "Key signals" }), stage.metrics.map((metric) => /* @__PURE__ */ jsxs("span", { children: ["✓ ", metric] }, metric))]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lq-good-break",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "WHAT GOOD LOOKS LIKE" }), /* @__PURE__ */ jsx("p", { children: stage.good })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "WHERE THIS BREAKS" }), /* @__PURE__ */ jsx("p", { children: stage.breaks })] })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lq-thread",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container lq-container",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "lq-section-label",
							children: "PUTTING IT TOGETHER"
						}),
						/* @__PURE__ */ jsx("h2", { children: "One thread. Four systems." }),
						/* @__PURE__ */ jsx("p", {
							className: "lq-intro",
							children: "Every lead keeps its original source and campaign attached as it moves through qualification, conversion and attribution. Break that thread anywhere and the reports disconnect again."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lq-table",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lq-table-head",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Field" }),
									/* @__PURE__ */ jsx("span", { children: "Captured in" }),
									/* @__PURE__ */ jsx("span", { children: "Carries forward as" })
								]
							}), flow.map((row) => /* @__PURE__ */ jsxs("div", {
								className: "lq-table-row",
								children: [
									/* @__PURE__ */ jsx("span", { children: row[0] }),
									/* @__PURE__ */ jsx("strong", { children: row[1] }),
									/* @__PURE__ */ jsx("span", { children: row[2] })
								]
							}, row[0]))]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "lq-thread-note",
							children: "The framework does not replace your ad dashboard or CRM reporting. It wires them together so a lead's source survives to its closed revenue outcome."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lq-practice",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container lq-container",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "lq-section-label",
							children: "IN PRACTICE"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							"Four stages. One thread.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", { children: "One number that actually matters." })
						] }),
						/* @__PURE__ */ jsx("p", { children: "The goal is not to report more metrics. It is to make the original source survive far enough down the funnel to influence budget decisions." }),
						/* @__PURE__ */ jsx("div", {
							className: "lq-practice-list",
							children: stages.map((item, index) => /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => {
									setActive(index);
									window.scrollTo({
										top: document.querySelector(".lq-model")?.offsetTop - 80 || 0,
										behavior: "smooth"
									});
								},
								children: [/* @__PURE__ */ jsx("i", { children: item.number }), /* @__PURE__ */ jsxs("span", { children: [
									/* @__PURE__ */ jsx("strong", { children: item.title }),
									" — ",
									index === 0 ? "capture CPL, CPM, CTR and volume with UTM tagging." : index === 1 ? "score leads consistently and log disqualification reasons by source." : index === 2 ? "track deal value, cycle length and win/loss reason back to source." : "report revenue and CAC:LTV by channel and let economics drive budget."
								] })]
							}, item.number))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lq-download",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container lq-container",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "lq-section-label",
							children: "GET THE FRAMEWORK"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Want the full framework offline?" }),
						/* @__PURE__ */ jsx("p", { children: "Get the 9 page Lead Quality Framework as a printable PDF for your team." })
					] }), /* @__PURE__ */ jsx("div", {
						className: "lq-form-wrap",
						children: submitted ? /* @__PURE__ */ jsxs("div", {
							className: "lq-success",
							children: [/* @__PURE__ */ jsx("strong", { children: "You're on the list." }), /* @__PURE__ */ jsx("span", { children: "We'll use this email for the framework download when delivery is connected." })]
						}) : /* @__PURE__ */ jsxs("form", {
							onSubmit: submit,
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "lq-email",
								children: "Work email"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("input", {
								id: "lq-email",
								type: "email",
								value: email,
								onChange: (event) => setEmail(event.target.value),
								placeholder: "you@company.com",
								required: true
							}), /* @__PURE__ */ jsx("button", {
								type: "submit",
								children: "Get the framework"
							})] })]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "lq-related",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container lq-container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "lq-section-label",
							children: "GO DEEPER"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lq-related-grid",
							children: [
								/* @__PURE__ */ jsxs(Link, {
									to: "/resources/utm-builder",
									children: [
										/* @__PURE__ */ jsx("span", { children: "UTM Builder" }),
										/* @__PURE__ */ jsx("small", { children: "Make source data survive the handoff." }),
										/* @__PURE__ */ jsx("b", { children: "↗" })
									]
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/services/hubspot-crm-automation",
									children: [
										/* @__PURE__ */ jsx("span", { children: "HubSpot CRM & Automation" }),
										/* @__PURE__ */ jsx("small", { children: "Fix what happens after lead capture." }),
										/* @__PURE__ */ jsx("b", { children: "↗" })
									]
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/services/performance-growth-marketing",
									children: [
										/* @__PURE__ */ jsx("span", { children: "Performance & Growth Marketing" }),
										/* @__PURE__ */ jsx("small", { children: "Connect acquisition to business KPIs." }),
										/* @__PURE__ */ jsx("b", { children: "↗" })
									]
								})
							]
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "lq-back",
							to: "/resources",
							children: "← Back to resources"
						})
					]
				})
			})
		]
	});
}
export { LeadQualityFramework as default };
