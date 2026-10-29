import { r as caseStudies } from "../entry-server.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/CaseStudies.jsx
var detailSlugs = /* @__PURE__ */ new Set(["crm-sales-qualified-lead", "meta-pixel-capi-signal-loss"]);
function CaseStudies() {
	return /* @__PURE__ */ jsxs("main", {
		className: "case-studies-page",
		children: [/* @__PURE__ */ jsx("section", {
			className: "case-hero case-hero-minimal",
			children: /* @__PURE__ */ jsxs("div", {
				className: "case-container",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "case-eyebrow",
					children: "Performance Marketing Case Studies"
				}), /* @__PURE__ */ jsxs("div", {
					className: "case-minimal-heading",
					children: [/* @__PURE__ */ jsxs("h2", { children: ["Work that ", /* @__PURE__ */ jsx("span", { children: "moved the numbers." })] }), /* @__PURE__ */ jsx("p", { children: "Selected work across paid acquisition, conversion and marketing operations." })]
				})]
			})
		}), /* @__PURE__ */ jsx("section", {
			className: "case-list-section case-list-minimal",
			children: /* @__PURE__ */ jsxs("div", {
				className: "case-container",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "case-list-intro",
						children: [/* @__PURE__ */ jsx("span", { children: "Selected work" }), /* @__PURE__ */ jsxs("span", { children: [String(caseStudies.length).padStart(2, "0"), " cases"] })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "case-minimal-list",
						children: caseStudies.map((study, index) => {
							const [metric, label] = study.metrics?.[0] || ["", "Selected work"];
							return /* @__PURE__ */ jsxs("article", {
								className: "case-minimal-card",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "case-minimal-number",
										children: String(index + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "case-minimal-main",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "case-minimal-meta",
												children: [/* @__PURE__ */ jsx("span", { children: study.category }), /* @__PURE__ */ jsx("span", { children: study.period })]
											}),
											/* @__PURE__ */ jsx("h2", { children: study.title }),
											/* @__PURE__ */ jsx("p", { children: study.summary }),
											/* @__PURE__ */ jsxs("div", {
												className: "case-minimal-focus",
												children: [/* @__PURE__ */ jsx("span", { children: "Focus" }), study.focus.split(" · ").map((item) => /* @__PURE__ */ jsx("em", { children: item }, item))]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "case-minimal-result",
										children: [/* @__PURE__ */ jsx("strong", { children: metric }), /* @__PURE__ */ jsx("small", { children: label })]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "case-minimal-action",
										children: detailSlugs.has(study.slug) ? /* @__PURE__ */ jsxs(Link, {
											to: `/case-studies/${study.slug}`,
											children: ["View case study ", /* @__PURE__ */ jsx("span", { children: "↗" })]
										}) : /* @__PURE__ */ jsx("span", { children: "Selected work" })
									})
								]
							}, study.slug);
						})
					}),
					/* @__PURE__ */ jsx("p", {
						className: "case-privacy",
						children: "Specific client names and sensitive data are kept private."
					})
				]
			})
		})]
	});
}
export { CaseStudies as default };
