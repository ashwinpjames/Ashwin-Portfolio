import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/components/resources/BudgetCalculator.jsx
var initial = {
	monthlyRevenue: "",
	grossMargin: "",
	targetCpa: "",
	monthlyConversions: "",
	learningWeeks: "4"
};
function BudgetCalculator() {
	const [values, setValues] = useState(initial);
	const update = (key, value) => setValues((current) => ({
		...current,
		[key]: value
	}));
	const result = useMemo(() => {
		const revenue = Number(values.monthlyRevenue);
		const margin = Number(values.grossMargin) / 100;
		const cpa = Number(values.targetCpa);
		const conversions = Number(values.monthlyConversions);
		const weeks = Number(values.learningWeeks);
		if (!revenue || !margin || !cpa || !conversions || !weeks) return null;
		const contribution = revenue * margin;
		const maxMonthly = Math.max(0, contribution * .3);
		const conversionBudget = cpa * conversions;
		const recommended = Math.max(conversionBudget, maxMonthly * .5);
		const weekly = recommended / 4.345;
		return {
			contribution,
			recommended,
			weekly,
			learning: weekly * weeks
		};
	}, [values]);
	const reset = () => setValues(initial);
	const money = (value) => new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(value);
	return /* @__PURE__ */ jsxs("div", {
		className: "budget-tool",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "budget-form",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "tool-section-heading",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Your inputs" }), /* @__PURE__ */ jsx("p", { children: "Use realistic numbers. This is a planning model, not a forecast." })] })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "budget-fields",
					children: [
						[
							"monthlyRevenue",
							"Monthly revenue",
							"AED"
						],
						[
							"grossMargin",
							"Gross margin",
							"%"
						],
						[
							"targetCpa",
							"Target CPA",
							"AED"
						],
						[
							"monthlyConversions",
							"Target monthly conversions",
							"leads"
						]
					].map(([key, label, unit]) => /* @__PURE__ */ jsxs("label", {
						className: "budget-field",
						children: [/* @__PURE__ */ jsx("span", { children: label }), /* @__PURE__ */ jsxs("div", {
							className: "budget-input-wrap",
							children: [/* @__PURE__ */ jsx("input", {
								type: "number",
								min: "0",
								value: values[key],
								onChange: (event) => update(key, event.target.value),
								placeholder: "0"
							}), /* @__PURE__ */ jsx("b", { children: unit })]
						})]
					}, key))
				}),
				/* @__PURE__ */ jsxs("label", {
					className: "budget-field budget-range",
					children: [/* @__PURE__ */ jsx("span", { children: "Learning phase duration" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("input", {
						type: "range",
						min: "2",
						max: "8",
						value: values.learningWeeks,
						onChange: (event) => update("learningWeeks", event.target.value)
					}), /* @__PURE__ */ jsxs("strong", { children: [values.learningWeeks, " weeks"] })] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "budget-actions",
					children: [/* @__PURE__ */ jsxs("button", {
						className: "budget-button primary",
						type: "button",
						onClick: () => setValues((current) => ({ ...current })),
						children: ["Calculate budget ", /* @__PURE__ */ jsx("span", { children: "→" })]
					}), /* @__PURE__ */ jsx("button", {
						className: "budget-button",
						type: "button",
						onClick: reset,
						children: "Reset"
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "budget-results",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "budget-result-label",
					children: "Recommended starting point"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "budget-result-value",
					children: result ? `AED ${money(result.recommended)}` : "Enter your numbers"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "budget-result-copy",
					children: result ? "A practical monthly test budget based on the inputs above." : "Complete the fields to generate an estimate."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "budget-result-grid",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: "Weekly budget" }), /* @__PURE__ */ jsx("strong", { children: result ? `AED ${money(result.weekly)}` : "—" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: "Learning budget" }), /* @__PURE__ */ jsx("strong", { children: result ? `AED ${money(result.learning)}` : "—" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: "Contribution base" }), /* @__PURE__ */ jsx("strong", { children: result ? `AED ${money(result.contribution)}` : "—" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: "Target CPA" }), /* @__PURE__ */ jsx("strong", { children: values.targetCpa ? `AED ${money(Number(values.targetCpa))}` : "—" })] })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "budget-note",
					children: [/* @__PURE__ */ jsx("b", { children: "How to use this:" }), " start with the estimate, then validate it against actual conversion rate, lead quality and sales economics before scaling spend."]
				})
			]
		})]
	});
}
// src/pages/CampaignBudgetCalculator.jsx
function CampaignBudgetCalculator() {
	return /* @__PURE__ */ jsx("main", {
		className: "calculator-page",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx(Link, {
					className: "calculator-back",
					to: "/resources",
					children: "← Back to resources"
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "calculator-hero",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "resources-eyebrow",
							children: "Free marketing tool"
						}),
						/* @__PURE__ */ jsxs("h1", { children: ["Campaign Budget ", /* @__PURE__ */ jsx("span", { children: "Calculator." })] }),
						/* @__PURE__ */ jsx("p", { children: "Estimate a sensible starting advertising budget from your economics and growth objective. Use the result as a planning baseline, then validate it against real campaign data." })
					]
				}),
				/* @__PURE__ */ jsx(BudgetCalculator, {}),
				/* @__PURE__ */ jsxs("section", {
					className: "calculator-explanation",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "resources-eyebrow",
						children: "The logic"
					}), /* @__PURE__ */ jsx("h2", { children: "A budget is a business decision, not just an ad platform setting." })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "The calculator combines contribution economics with your target acquisition cost and intended conversion volume. It is deliberately conservative because the correct budget depends on what the business can afford to learn while the campaign proves itself." }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Important:" }), " the output is an estimate. It does not predict revenue, conversion rate or campaign performance."] })] })]
				})
			]
		})
	});
}
export { CampaignBudgetCalculator as default };
