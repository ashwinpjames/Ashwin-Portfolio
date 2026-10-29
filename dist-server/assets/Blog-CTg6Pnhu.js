import { n as blogPosts } from "../entry-server.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/components/blog/BlogCard.jsx
function BlogCard({ post }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "blog-card",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "blog-card-meta",
				children: [/* @__PURE__ */ jsx("span", { children: post.category }), /* @__PURE__ */ jsx("span", { children: post.readTime })]
			}),
			/* @__PURE__ */ jsx("h3", { children: post.title }),
			/* @__PURE__ */ jsx("p", { children: post.excerpt }),
			/* @__PURE__ */ jsxs(Link, {
				to: `/blog/${post.slug}`,
				className: "blog-card-link",
				children: ["Read article ", /* @__PURE__ */ jsx("span", { children: "→" })]
			})
		]
	});
}
// src/pages/Blog.jsx
var bestSpecialistPost = {
	slug: "best-performance-marketing-specialist",
	category: "Performance Marketing",
	title: "Best Performance Marketing Specialist: How to Choose the Right Expert in Dubai",
	excerpt: "Learn how to evaluate performance marketing expertise, qualified lead metrics, CRM analysis and case studies before hiring a specialist.",
	date: "Oct 19, 2026",
	readTime: "12 min read"
};
var newBlogPost = {
	slug: "why-attribution-matters-performance-marketing",
	category: "Performance Marketing",
	title: "Why Attribution Matters in Performance Marketing",
	excerpt: "Understand marketing attribution, attribution models and how attribution should influence performance marketing decisions.",
	date: "Sep 15, 2026",
	readTime: "14 min read"
};
var latestBlogPost = {
	slug: "roas-vs-roi",
	category: "Performance Marketing",
	title: "ROAS vs ROI: What Is the Difference?",
	excerpt: "Understand the difference between ROAS and ROI, how to calculate each metric, when to use them and how they affect advertising decisions.",
	date: "Sep 15, 2026",
	readTime: "12 min read"
};
function Blog() {
	useEffect(() => {
		const button = document.getElementById("ashwin-preferred-source-btn");
		if (!button) return;
		const setupPreferredSource = (preferredSource) => {
			preferredSource.init({
				theme: "light",
				lang: "en"
			});
			button.onclick = () => {
				preferredSource.addPreferredSource();
			};
		};
		(self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || []).push(setupPreferredSource);
		if (!document.querySelector("script[data-google-preferred-source]")) {
			const script = document.createElement("script");
			script.async = true;
			script.src = "https://news.google.com/swg/js/v1/publisher.js";
			script.setAttribute("preferred-sources-control", "manual");
			script.setAttribute("data-google-preferred-source", "true");
			document.head.appendChild(script);
		}
		return () => {
			button.onclick = null;
		};
	}, []);
	const posts = [
		bestSpecialistPost,
		newBlogPost,
		latestBlogPost,
		...blogPosts.filter((post) => post.slug !== bestSpecialistPost.slug && post.slug !== newBlogPost.slug && post.slug !== latestBlogPost.slug)
	];
	const latestPost = posts.filter((post) => post.date !== "Coming soon")[0];
	return /* @__PURE__ */ jsxs("main", {
		className: "blog-page",
		children: [/* @__PURE__ */ jsxs("section", {
			className: "blog-hero",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "blog-orb blog-orb-a",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "blog-orb blog-orb-b",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "container blog-hero-inner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "blog-hero-copy",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "blog-hero-eyebrow",
								children: [/* @__PURE__ */ jsx("span", {
									className: "blog-pulse-dot",
									"aria-hidden": "true"
								}), /* @__PURE__ */ jsx("span", { children: "INSIGHTS" })]
							}),
							/* @__PURE__ */ jsxs("h1", { children: [/* @__PURE__ */ jsx("span", {
								className: "blog-hero-line-one",
								children: "Thinking clearly about"
							}), /* @__PURE__ */ jsx("span", {
								className: "blog-hero-line-two",
								children: "growth and marketing."
							})] }),
							/* @__PURE__ */ jsx("p", {
								className: "blog-hero-sub",
								children: "Practical notes on performance marketing, analytics, lead generation, conversion and the systems that connect them."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "blog-hero-pills",
								"aria-label": "Blog topics",
								children: [
									"Performance Marketing",
									"Marketing Psychology",
									"Analytics",
									"Lead Gen",
									"CRO"
								].map((category) => /* @__PURE__ */ jsx("span", { children: category }, category))
							}),
							/* @__PURE__ */ jsx("button", {
								id: "ashwin-preferred-source-btn",
								type: "button",
								style: {
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									marginTop: "24px",
									minHeight: "42px",
									padding: "9px 16px",
									border: "1px solid rgba(255,255,255,0.22)",
									borderRadius: "10px",
									background: "rgba(255,255,255,0.08)",
									color: "#fff",
									fontFamily: "inherit",
									fontSize: "14px",
									fontWeight: 600,
									cursor: "pointer",
									backdropFilter: "blur(8px)"
								},
								"aria-label": "Add Ashwin James as a preferred source on Google",
								children: "☆ Add as a Preferred Source on Google"
							})
						]
					}), latestPost && /* @__PURE__ */ jsxs("div", {
						className: "blog-post-stack",
						"aria-label": "Latest article",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "blog-stack-card blog-stack-back-two",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "blog-stack-card blog-stack-back-one",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: `/blog/${latestPost.slug}`,
								className: "blog-stack-card blog-stack-front",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "blog-latest-tag",
									children: [/* @__PURE__ */ jsx("span", {}), "LATEST POST"]
								}), /* @__PURE__ */ jsx("h3", { children: latestPost.title })]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ jsx("section", {
			className: "blog-library",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "blog-heading",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "blog-eyebrow",
						children: "From the field"
					}), /* @__PURE__ */ jsx("h2", { children: "Ideas worth testing." })] }), /* @__PURE__ */ jsx("p", { children: "Original articles on performance marketing, analytics, lead generation, conversion and the systems behind sustainable growth." })]
				}), /* @__PURE__ */ jsx("div", {
					className: "blog-grid",
					children: posts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post }, post.slug))
				})]
			})
		})]
	});
}
export { Blog as default };
