import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/data/tools.js
var toolCategories = [
	{
		id: "calculators",
		label: "Calculators"
	},
	{
		id: "campaign",
		label: "Campaign Tools"
	},
	{
		id: "creative",
		label: "Creative Tools"
	},
	{
		id: "lead-generation",
		label: "Lead Generation"
	},
	{
		id: "analytics",
		label: "Analytics & Tracking"
	},
	{
		id: "cro",
		label: "Website & CRO"
	},
	{
		id: "frameworks",
		label: "Frameworks & Checklists"
	},
	{
		id: "ai",
		label: "AI & Content"
	}
];
var toolPlatforms = [
	{
		id: "meta",
		label: "Meta"
	},
	{
		id: "google",
		label: "Google"
	},
	{
		id: "hubspot",
		label: "HubSpot"
	},
	{
		id: "analytics",
		label: "Analytics"
	},
	{
		id: "website",
		label: "Website"
	},
	{
		id: "whatsapp",
		label: "WhatsApp"
	},
	{
		id: "ai",
		label: "AI"
	}
];
var tools = [
	{
		id: "campaign-budget-calculator",
		title: "Campaign Budget Calculator",
		description: "Estimate a practical starting advertising budget from your target CPA, contribution margin and learning phase objectives.",
		type: "Calculator",
		category: "calculators",
		platforms: ["meta", "google"],
		route: "/resources/campaign-budget-calculator",
		icon: "⌁",
		status: "live",
		featured: true
	},
	{
		id: "meta-ads-launch-checklist",
		title: "Meta Ads Launch Checklist",
		description: "A practical pre launch checklist covering tracking, audiences, creative, offer, lead quality and campaign hygiene.",
		type: "Checklist",
		category: "frameworks",
		platforms: ["meta"],
		route: "/resources/meta-ads-launch-checklist",
		icon: "✓",
		status: "live"
	},
	{
		id: "lead-quality-framework",
		title: "Lead Quality Framework",
		description: "Connect acquisition metrics with sales qualification and downstream commercial outcomes.",
		type: "Framework",
		category: "lead-generation",
		platforms: [
			"meta",
			"google",
			"hubspot"
		],
		route: "/resources/lead-quality-framework",
		icon: "↗",
		status: "live"
	},
	{
		id: "utm-builder",
		title: "UTM Builder",
		description: "Build consistent campaign tracking parameters for Meta, Google, content and partner campaigns.",
		type: "Tool",
		category: "analytics",
		platforms: [
			"meta",
			"google",
			"analytics",
			"hubspot"
		],
		route: "/resources/utm-builder",
		icon: "⌘",
		status: "live"
	},
	{
		id: "blog-prompt-architect",
		title: "SEO Blog Builder",
		description: "Build reusable SEO blog prompts from your brief, save website defaults and run a transparent first pass on generated articles.",
		type: "SEO Tool",
		category: "ai",
		platforms: ["ai", "website"],
		route: "/resources/blog-prompt-architect",
		icon: "✦",
		status: "live",
		featured: true
	}
];
// src/pages/Resources.jsx
function ToolCard({ tool }) {
	const category = toolCategories.find((item) => item.id === tool.category)?.label;
	const platformLabels = tool.platforms.map((id) => toolPlatforms.find((item) => item.id === id)?.label).filter(Boolean);
	const live = tool.status === "live";
	return /* @__PURE__ */ jsxs("article", {
		className: `resource-card ${tool.featured ? "featured" : ""}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "resource-card-top",
				children: [/* @__PURE__ */ jsx("div", {
					className: "resource-icon",
					children: tool.icon
				}), /* @__PURE__ */ jsx("span", {
					className: `resource-status ${live ? "live" : ""}`,
					children: live ? "Live" : "Coming soon"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "resource-type",
				children: [
					tool.type,
					" · ",
					category
				]
			}),
			/* @__PURE__ */ jsx("h3", { children: tool.title }),
			/* @__PURE__ */ jsx("p", { children: tool.description }),
			/* @__PURE__ */ jsx("div", {
				className: "resource-platforms",
				children: platformLabels.map((label) => /* @__PURE__ */ jsx("span", { children: label }, label))
			}),
			live ? /* @__PURE__ */ jsxs(Link, {
				className: "resource-card-link",
				to: tool.route,
				children: ["Open tool ", /* @__PURE__ */ jsx("span", { children: "→" })]
			}) : /* @__PURE__ */ jsxs("span", {
				className: "resource-card-link muted",
				children: ["Coming next ", /* @__PURE__ */ jsx("span", { children: "→" })]
			})
		]
	});
}
function ToolGrid({ items }) {
	if (!items.length) return /* @__PURE__ */ jsx("div", {
		className: "resources-empty",
		children: "No tools match your current filters."
	});
	return /* @__PURE__ */ jsx("div", {
		className: "resource-grid",
		children: items.map((tool) => /* @__PURE__ */ jsx(ToolCard, { tool }, tool.id))
	});
}
function Resources() {
	const [view, setView] = useState("all");
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState("all");
	const [platform, setPlatform] = useState("all");
	const filteredTools = useMemo(() => tools.filter((tool) => {
		const search = query.trim().toLowerCase();
		const matchesSearch = !search || `${tool.title} ${tool.description} ${tool.type}`.toLowerCase().includes(search);
		const matchesCategory = category === "all" || tool.category === category;
		const matchesPlatform = platform === "all" || tool.platforms.includes(platform);
		return matchesSearch && matchesCategory && matchesPlatform;
	}), [
		query,
		category,
		platform
	]);
	const categoryGroups = useMemo(() => toolCategories.map((group) => ({
		...group,
		items: filteredTools.filter((tool) => tool.category === group.id)
	})).filter((group) => group.items.length), [filteredTools]);
	const platformGroups = useMemo(() => toolPlatforms.map((group) => ({
		...group,
		items: filteredTools.filter((tool) => tool.platforms.includes(group.id))
	})).filter((group) => group.items.length), [filteredTools]);
	return /* @__PURE__ */ jsxs("main", {
		className: "resources-page",
		children: [/* @__PURE__ */ jsxs("section", {
			className: "resources-hero-react",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "resources-bg-react",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("div", { className: "resources-orb r1" }),
					/* @__PURE__ */ jsx("div", { className: "resources-orb r2" }),
					/* @__PURE__ */ jsx("div", { className: "resources-orb r3" }),
					/* @__PURE__ */ jsx("div", { className: "resources-grid" })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "container resources-hero-content",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "resources-badge",
						children: "Performance Marketing Tools"
					}),
					/* @__PURE__ */ jsxs("h2", { children: ["Useful tools for ", /* @__PURE__ */ jsx("span", { children: "better marketing decisions." })] }),
					/* @__PURE__ */ jsx("p", { children: "Practical calculators, campaign tools, creative utilities and frameworks built around real performance marketing work." }),
					/* @__PURE__ */ jsxs("div", {
						className: "resources-hero-actions",
						children: [/* @__PURE__ */ jsxs(Link, {
							className: "resource-button primary",
							to: "/resources/campaign-budget-calculator",
							children: ["Open campaign calculator ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						}), /* @__PURE__ */ jsx("a", {
							className: "resource-button secondary",
							href: "#resource-library",
							children: "Explore all tools"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "resource-chips",
						children: [
							/* @__PURE__ */ jsxs("span", { children: [tools.length, " tools planned"] }),
							/* @__PURE__ */ jsx("span", { children: "Free to use" }),
							/* @__PURE__ */ jsx("span", { children: "Built for marketers" }),
							/* @__PURE__ */ jsx("span", { children: "UAE focused" })
						]
					})
				]
			})]
		}), /* @__PURE__ */ jsx("section", {
			className: "resources-library",
			id: "resource-library",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "resources-heading-row",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "resources-eyebrow",
							children: "Resource library"
						}), /* @__PURE__ */ jsx("h2", { children: "Find the tool you need." })] }), /* @__PURE__ */ jsx("p", { children: "Browse everything in one place, organise the library by marketing category or explore it by platform." })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "resource-view-switcher",
						role: "tablist",
						"aria-label": "Resource views",
						children: [
							["all", "All Tools"],
							["category", "By Category"],
							["platform", "By Platform"]
						].map(([id, label]) => /* @__PURE__ */ jsx("button", {
							type: "button",
							role: "tab",
							"aria-selected": view === id,
							className: view === id ? "active" : "",
							onClick: () => setView(id),
							children: label
						}, id))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "resource-filters",
						children: [
							/* @__PURE__ */ jsxs("label", {
								className: "resource-search",
								children: [/* @__PURE__ */ jsx("span", { children: "⌕" }), /* @__PURE__ */ jsx("input", {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "Search tools..."
								})]
							}),
							view !== "platform" && /* @__PURE__ */ jsxs("select", {
								value: category,
								onChange: (event) => setCategory(event.target.value),
								"aria-label": "Filter by category",
								children: [/* @__PURE__ */ jsx("option", {
									value: "all",
									children: "All categories"
								}), toolCategories.map((item) => /* @__PURE__ */ jsx("option", {
									value: item.id,
									children: item.label
								}, item.id))]
							}),
							view !== "category" && /* @__PURE__ */ jsxs("select", {
								value: platform,
								onChange: (event) => setPlatform(event.target.value),
								"aria-label": "Filter by platform",
								children: [/* @__PURE__ */ jsx("option", {
									value: "all",
									children: "All platforms"
								}), toolPlatforms.map((item) => /* @__PURE__ */ jsx("option", {
									value: item.id,
									children: item.label
								}, item.id))]
							})
						]
					}),
					view === "all" && /* @__PURE__ */ jsx(ToolGrid, { items: filteredTools }),
					view === "category" && /* @__PURE__ */ jsxs("div", {
						className: "resource-groups",
						children: [categoryGroups.map((group) => /* @__PURE__ */ jsxs("section", {
							className: "resource-group",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "resource-group-heading",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "resources-eyebrow",
									children: "Category"
								}), /* @__PURE__ */ jsx("h3", { children: group.label })] }), /* @__PURE__ */ jsxs("span", { children: [group.items.length, " tools"] })]
							}), /* @__PURE__ */ jsx(ToolGrid, { items: group.items })]
						}, group.id)), !categoryGroups.length && /* @__PURE__ */ jsx("div", {
							className: "resources-empty",
							children: "No tools match your current filters."
						})]
					}),
					view === "platform" && /* @__PURE__ */ jsxs("div", {
						className: "resource-groups",
						children: [platformGroups.map((group) => /* @__PURE__ */ jsxs("section", {
							className: "resource-group",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "resource-group-heading",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "resources-eyebrow",
									children: "Platform"
								}), /* @__PURE__ */ jsx("h3", { children: group.label })] }), /* @__PURE__ */ jsxs("span", { children: [group.items.length, " tools"] })]
							}), /* @__PURE__ */ jsx(ToolGrid, { items: group.items })]
						}, group.id)), !platformGroups.length && /* @__PURE__ */ jsx("div", {
							className: "resources-empty",
							children: "No tools match your current filters."
						})]
					})
				]
			})
		})]
	});
}
export { Resources as default };
