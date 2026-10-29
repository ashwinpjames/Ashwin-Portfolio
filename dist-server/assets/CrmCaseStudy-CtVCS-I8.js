import { i as crmMonthlyData, r as caseStudies } from "../entry-server.js";
import { t as CaseStudyLeadForm } from "./CaseStudyLeadForm-ApMOz956.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/CrmCaseStudy.jsx
function CrmCaseStudy() {
	const study = caseStudies.find((item) => item.slug === "crm-sales-qualified-lead");
	const [totalLeads, totalLabel] = study.metrics[0];
	const [sqlLeads] = study.metrics[1];
	const [sqlRate] = study.metrics[2];
	const [bestRate] = study.metrics[3];
	const max = Math.max(...crmMonthlyData.map((item) => item.total));
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
					}), /* @__PURE__ */ jsx("span", { children: "CRM ANALYTICS · UAE" })]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-case-hero",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "crm-case-hero-copy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "crm-kicker",
								children: "HubSpot CRM · Aug 2025 — Jul 2026"
							}),
							/* @__PURE__ */ jsx("h1", { children: study.title }),
							/* @__PURE__ */ jsx("p", {
								className: "crm-hero-summary",
								children: study.summary
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "crm-tags",
								children: [
									/* @__PURE__ */ jsx("span", { children: "Lead quality" }),
									/* @__PURE__ */ jsx("span", { children: "Performance marketing" }),
									/* @__PURE__ */ jsx("span", { children: "Marketing measurement" })
								]
							})
						]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "crm-hero-result",
						children: [
							/* @__PURE__ */ jsx("small", { children: "DATASET" }),
							/* @__PURE__ */ jsx("strong", { children: totalLeads }),
							/* @__PURE__ */ jsx("span", { children: totalLabel }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("b", { children: sqlLeads }), " Sales Qualified Leads"] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-stat-strip",
					"aria-label": "Key metrics",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: totalLeads }), /* @__PURE__ */ jsx("span", { children: "Total leads analyzed" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: sqlLeads }), /* @__PURE__ */ jsx("span", { children: "Sales Qualified Leads" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: sqlRate }), /* @__PURE__ */ jsx("span", { children: "Overall SQL rate" })] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: bestRate }), /* @__PURE__ */ jsx("span", { children: "Best monthly SQL rate" })] })
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [/* @__PURE__ */ jsx("div", {
						className: "crm-section-label",
						children: "01 · THE QUESTION"
					}), /* @__PURE__ */ jsxs("div", {
						className: "crm-two-col",
						children: [/* @__PURE__ */ jsx("h2", { children: "Lead volume was visible. Lead quality was harder to see." }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Marketing performance could show how many leads entered the CRM, but volume alone could not show whether acquisition was producing commercially useful prospects." }), /* @__PURE__ */ jsx("p", { children: "The analysis connected monthly CRM cohorts with their current lead status to create a clearer view of sales qualification." })] })]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "crm-section-label",
							children: "02 · MONTHLY VIEW"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "crm-section-heading",
							children: [/* @__PURE__ */ jsx("h2", { children: "Volume changed. Quality changed with it." }), /* @__PURE__ */ jsx("p", { children: "The chart shows monthly lead volume from the CRM cohort data." })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "crm-chart-card",
							children: /* @__PURE__ */ jsx("div", {
								className: "crm-clean-chart",
								children: crmMonthlyData.map((item) => /* @__PURE__ */ jsxs("div", {
									className: "crm-clean-bar-wrap",
									title: `${item.month}: ${item.total} leads, ${item.qualified} SQLs`,
									children: [/* @__PURE__ */ jsx("div", {
										className: "crm-clean-bar",
										style: { height: `${Math.max(3, item.total / max * 100)}%` }
									}), /* @__PURE__ */ jsx("span", { children: item.month.slice(0, 3) })]
								}, item.month))
							})
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
						/* @__PURE__ */ jsxs("div", {
							className: "crm-finding",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", { children: "March 2026" }),
									/* @__PURE__ */ jsx("strong", { children: "747" }),
									/* @__PURE__ */ jsx("small", { children: "total leads · 121 SQLs" })
								] }),
								/* @__PURE__ */ jsx("div", {
									className: "crm-finding-arrow",
									children: "vs"
								}),
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", { children: "July 2026" }),
									/* @__PURE__ */ jsx("strong", { children: "25.1%" }),
									/* @__PURE__ */ jsx("small", { children: "SQL rate · 139 SQLs" })
								] })
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "crm-finding-text",
							children: "The highest lead volume was not the strongest quality outcome. July generated fewer total leads than March but more Sales Qualified Leads, showing why acquisition should be evaluated beyond CPL."
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
								"Ad spend",
								"Leads",
								"SQL",
								"Opportunity",
								"Customer",
								"Revenue"
							].map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
								/* @__PURE__ */ jsx("strong", { children: item }),
								index < 5 && /* @__PURE__ */ jsx("i", { children: "→" })
							] }, item))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "crm-two-col crm-framework-copy",
							children: [/* @__PURE__ */ jsx("h2", { children: "Move the question from “how many leads?” to “how much commercial value?”" }), /* @__PURE__ */ jsx("p", { children: "Useful downstream measures include SQL rate, cost per Sales Qualified Lead, lead to customer rate, cost per conversion and revenue based efficiency." })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section",
					children: [/* @__PURE__ */ jsx("div", {
						className: "crm-section-label",
						children: "05 · DATA QUALITY"
					}), /* @__PURE__ */ jsxs("div", {
						className: "crm-two-col",
						children: [/* @__PURE__ */ jsx("h2", { children: "CRM discipline is part of marketing measurement." }), /* @__PURE__ */ jsx("p", { children: "Historical reporting depends on consistent CRM status updates. The dataset contains operational outcomes such as Qualified Hot, Qualified, Converted, Not Responding, On Hold, Wrong Number, Not Interested, Call Back and Not Qualified. Those classifications determine how useful the downstream analysis becomes." })]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "crm-simple-section crm-dataset-section",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "crm-section-label",
							children: "06 · DATASET"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "crm-section-heading",
							children: [/* @__PURE__ */ jsx("h2", { children: "12 month cohort view" }), /* @__PURE__ */ jsx("p", { children: "The monthly CRM records used for the analysis." })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "crm-table-card",
							children: /* @__PURE__ */ jsxs("table", { children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", { children: "Month" }),
								/* @__PURE__ */ jsx("th", { children: "Total" }),
								/* @__PURE__ */ jsx("th", { children: "SQL" }),
								/* @__PURE__ */ jsx("th", { children: "Not qualified" }),
								/* @__PURE__ */ jsx("th", { children: "SQL rate" })
							] }) }), /* @__PURE__ */ jsx("tbody", { children: crmMonthlyData.map((item) => /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("td", { children: item.month }),
								/* @__PURE__ */ jsx("td", { children: item.total }),
								/* @__PURE__ */ jsx("td", { children: item.qualified }),
								/* @__PURE__ */ jsx("td", { children: item.notQualified }),
								/* @__PURE__ */ jsxs("td", { children: [item.rate, "%"] })
							] }, item.month)) })] })
						})
					]
				}),
				/* @__PURE__ */ jsx(CaseStudyLeadForm, {
					eyebrow: "Want a detailed CRM audit?",
					title: "Is your lead volume hiding your real marketing performance?",
					description: "I can help you connect ad acquisition, CRM outcomes and lead quality so you can see which campaigns are producing commercially useful opportunities.",
					buttonLabel: "Request a CRM audit"
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "crm-case-footer",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/case-studies",
						children: "← Back to all case studies"
					}), /* @__PURE__ */ jsx("span", { children: "CRM Lead Performance Analysis" })]
				})
			]
		})
	});
}
export { CrmCaseStudy as default };
