import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/MetaAdsChecklist.jsx
var stages = [
	{
		title: "Account & Pixel Setup",
		items: [
			"Meta Business Manager account verified and permissions set correctly",
			"Meta Pixel installed on all key pages (site-wide, not just landing page)",
			"Pixel events firing correctly (PageView, Lead, Purchase, AddToCart, etc.) — tested via Meta Pixel Helper",
			"Conversions API (CAPI) set up alongside pixel for better tracking accuracy",
			"Domain verified in Business Manager (required for iOS 14+ tracking)",
			"Custom conversions/events named clearly and mapped to actual business goals"
		]
	},
	{
		title: "Campaign Structure",
		items: [
			"Clear campaign objective selected (Leads, Sales, Traffic, Awareness) matched to actual funnel stage",
			"Campaign Budget Optimization (CBO) vs ad set-level budget decided intentionally",
			"Naming convention applied consistently (Campaign_Objective_Audience_Date or similar)",
			"Enough budget allocated to exit learning phase (~50 conversions/week per ad set as a rule of thumb)"
		]
	},
	{
		title: "Audience Targeting",
		items: [
			"Core audience defined (interests, demographics, behaviors) — not too narrow, not too broad",
			"Lookalike audiences created from best existing data (customers, high-value leads, pixel events)",
			"Retargeting audiences set up (website visitors, video viewers, engagement, cart abandoners)",
			"Exclusions in place (existing customers excluded from cold campaigns where relevant)",
			"Audience overlap checked to avoid ad sets competing against each other"
		]
	},
	{
		title: "Creative",
		items: [
			"At least 3–5 creative variations per ad set (avoid single-creative reliance)",
			"Mix of formats tested (static image, carousel, video/Reels)",
			"Hook in first 3 seconds for video creative",
			"Text overlay kept under 20% of image",
			"Mobile-first creative — checked in Stories/Reels placement",
			"Clear, single CTA per ad"
		]
	},
	{
		title: "Ad Copy",
		items: [
			"Primary text leads with the hook/pain point, not the brand",
			"Headline reinforces the offer clearly",
			"CTA button matches campaign objective (Learn More, Sign Up, Shop Now, etc.)",
			"Social proof included where possible (numbers, testimonials, results)",
			"Copy variations tested against each other, not just creative"
		]
	},
	{
		title: "Landing Page Alignment",
		items: [
			"Landing page message matches ad message — no disconnect between promise and page",
			"Page loads fast on mobile (test actual load speed, not just desktop)",
			"Form/CTA above the fold or easily reachable",
			"Thank-you page or confirmation event set up and firing the right pixel event"
		]
	},
	{
		title: "Budget & Bidding",
		items: [
			"Budget realistic for the objective and audience size — not spread too thin across too many ad sets",
			"Bid strategy chosen deliberately (Lowest Cost vs Cost Cap vs Bid Cap) matched to goal, not default",
			"Daily budget vs lifetime budget decided based on campaign duration"
		]
	},
	{
		title: "Tracking & Reporting",
		items: [
			"UTM parameters added to all ad URLs for clean attribution outside Meta",
			"Reporting columns customized in Ads Manager (CPA, CTR, ROAS) — not just default columns",
			"Attribution window set intentionally (7-day click vs 1-day click, depending on sales cycle)",
			"Dashboard or sheet set up to track performance beyond just Ads Manager (especially CAC vs LTV)"
		]
	},
	{
		title: "Compliance & Account Health",
		items: [
			"Ad copy checked against Meta's ad policies before submission, to avoid rejections/flags",
			"Landing page has a privacy policy and matches any claims made in ads",
			"Special ad category selected if applicable (housing, employment, credit, politics)"
		]
	},
	{
		title: "Post-Launch Optimization",
		items: [
			"3–5 day minimum before making major changes — let the learning phase settle",
			"Frequency monitored to catch ad fatigue early",
			"Underperforming ad sets/creatives paused, not endlessly tweaked",
			"Winning creatives scaled gradually — avoid sudden large budget jumps that reset learning"
		]
	}
];
function MetaAdsChecklist() {
	const [checked, setChecked] = useState({});
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const total = stages.reduce((sum, stage) => sum + stage.items.length, 0);
	const completed = Object.values(checked).filter(Boolean).length;
	const percent = Math.round(completed / total * 100);
	const score = percent;
	const findings = useMemo(() => {
		return stages.map((stage) => {
			const done = stage.items.filter((_, index) => checked[`${stages.indexOf(stage)}-${index}`]).length;
			const rate = Math.round(done / stage.items.length * 100);
			return {
				...stage,
				done,
				rate
			};
		});
	}, [checked]);
	const toggle = (stageIndex, itemIndex) => setChecked((current) => ({
		...current,
		[`${stageIndex}-${itemIndex}`]: !current[`${stageIndex}-${itemIndex}`]
	}));
	const reset = () => setChecked({});
	return /* @__PURE__ */ jsxs("main", {
		className: "meta-checklist-page",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "meta-checklist-hero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "resources-eyebrow",
							children: "Free resource · Meta Ads"
						}),
						/* @__PURE__ */ jsxs("h1", { children: ["Is your Meta Ads campaign ", /* @__PURE__ */ jsx("span", { children: "actually ready?" })] }),
						/* @__PURE__ */ jsx("p", { children: "Work through the 10-stage checklist before launch, then use it to spot gaps after the campaign goes live." }),
						/* @__PURE__ */ jsxs("div", {
							className: "meta-checklist-stats",
							children: [
								/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "10" }), " stages"] }),
								/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: total }), " checks"] }),
								/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: "Free" }), " to use"] })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-checklist-workspace",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container meta-checklist-layout",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "meta-checklist-main",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "meta-progress-card",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Campaign readiness" }), /* @__PURE__ */ jsxs("strong", { children: [percent, "%"] })] }),
								/* @__PURE__ */ jsx("div", {
									className: "meta-progress-track",
									children: /* @__PURE__ */ jsx("i", { style: { width: `${percent}%` } })
								}),
								/* @__PURE__ */ jsx("p", { children: completed === 0 ? "Start with the first stage and work through the checklist." : completed === total ? "Everything is checked. Your checklist is complete." : `${completed} of ${total} checks completed.` })
							]
						}), stages.map((stage, stageIndex) => /* @__PURE__ */ jsxs("section", {
							className: "meta-stage",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "meta-stage-heading",
								children: [
									/* @__PURE__ */ jsx("span", { children: String(stageIndex + 1).padStart(2, "0") }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: stage.title }), /* @__PURE__ */ jsxs("p", { children: [stage.items.length, " checks"] })] }),
									/* @__PURE__ */ jsxs("b", { children: [findings[stageIndex].rate, "%"] })
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "meta-checks",
								children: stage.items.map((item, itemIndex) => {
									const id = `${stageIndex}-${itemIndex}`;
									return /* @__PURE__ */ jsxs("label", {
										className: checked[id] ? "checked" : "",
										children: [/* @__PURE__ */ jsx("input", {
											type: "checkbox",
											checked: Boolean(checked[id]),
											onChange: () => toggle(stageIndex, itemIndex)
										}), /* @__PURE__ */ jsx("span", { children: item })]
									}, id);
								})
							})]
						}, stage.title))]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "meta-checklist-side",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "meta-score-card",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Your readiness score" }),
									/* @__PURE__ */ jsx("strong", { children: score }),
									/* @__PURE__ */ jsx("span", { children: "/ 100" }),
									/* @__PURE__ */ jsx("div", {
										className: "meta-score-bar",
										children: /* @__PURE__ */ jsx("i", { style: { width: `${score}%` } })
									}),
									/* @__PURE__ */ jsx("small", { children: score >= 80 ? "Strong foundation" : score >= 50 ? "Some gaps to fix" : "Start with the basics" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "meta-findings-card",
								children: [/* @__PURE__ */ jsx("p", { children: "Stage breakdown" }), findings.map((stage) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: stage.title }), /* @__PURE__ */ jsxs("b", { children: [stage.rate, "%"] })] }, stage.title))]
							}),
							/* @__PURE__ */ jsx("button", {
								className: "meta-reset",
								type: "button",
								onClick: reset,
								children: "Reset checklist"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-download",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "resources-eyebrow",
							children: "Take it with you"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Want the printable checklist?" }),
						/* @__PURE__ */ jsx("p", { children: "Get the full Meta Ads Launch Checklist as a PDF so you can use it before every campaign launch." })
					] }), /* @__PURE__ */ jsx("div", {
						className: "meta-lead-form",
						children: submitted ? /* @__PURE__ */ jsxs("div", {
							className: "meta-form-success",
							children: [/* @__PURE__ */ jsx("strong", { children: "You're on the list." }), /* @__PURE__ */ jsx("span", { children: "The PDF delivery can be connected to your email workflow here." })]
						}) : /* @__PURE__ */ jsxs("form", {
							onSubmit: (event) => {
								event.preventDefault();
								if (email) setSubmitted(true);
							},
							children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "meta-checklist-email",
									children: "Work email"
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("input", {
									id: "meta-checklist-email",
									type: "email",
									required: true,
									value: email,
									onChange: (event) => setEmail(event.target.value),
									placeholder: "you@company.com"
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									children: "Get the PDF →"
								})] }),
								/* @__PURE__ */ jsx("small", { children: "No spam. Just the checklist." })
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "meta-service-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "resources-eyebrow",
							children: "Need help with the gaps?"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Turn the checklist into a campaign that can actually perform." }),
						/* @__PURE__ */ jsx("p", { children: "If the audit exposes issues with tracking, creative, targeting or lead quality, we can work through them together." }),
						/* @__PURE__ */ jsx(Link, {
							to: "/services/meta-ads",
							children: "Explore Meta Ads Management →"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "container meta-bottom-nav",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/resources",
					children: "← Back to resources"
				})
			})
		]
	});
}
export { MetaAdsChecklist as default };
