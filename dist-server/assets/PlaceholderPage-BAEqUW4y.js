import { o as whatsappUrl } from "../entry-server.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/PlaceholderPage.jsx
var shortcuts = [
	{
		label: "Services",
		to: "/services",
		hint: "Meta Ads, Google Ads, CRO & more"
	},
	{
		label: "Case studies",
		to: "/case-studies",
		hint: "Real results from real accounts"
	},
	{
		label: "Resources",
		to: "/resources",
		hint: "Free tools & checklists"
	},
	{
		label: "Contact",
		to: "/contact",
		hint: "Start a project or ask a question"
	}
];
function PlaceholderPage() {
	return /* @__PURE__ */ jsx("main", {
		className: "placeholder-page",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", { children: "This page took a wrong turn." }),
				/* @__PURE__ */ jsx("p", { children: "The page you're looking for doesn't exist, may have moved, or the link might be out of date. Here's where you probably meant to go:" }),
				/* @__PURE__ */ jsx("div", {
					className: "placeholder-shortcuts",
					children: shortcuts.map((item) => /* @__PURE__ */ jsxs(Link, {
						to: item.to,
						className: "placeholder-shortcut",
						children: [/* @__PURE__ */ jsx("span", { children: item.label }), /* @__PURE__ */ jsx("small", { children: item.hint })]
					}, item.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "placeholder-actions",
					children: [/* @__PURE__ */ jsxs(Link, {
						className: "home-button primary",
						to: "/",
						children: ["Back to homepage ", /* @__PURE__ */ jsx("span", { children: "↗" })]
					}), /* @__PURE__ */ jsxs("a", {
						className: "home-button secondary",
						href: whatsappUrl,
						target: "_blank",
						rel: "noreferrer",
						children: ["Message me directly ", /* @__PURE__ */ jsx("span", { children: "↗" })]
					})]
				})
			]
		})
	});
}
export { PlaceholderPage as default };
