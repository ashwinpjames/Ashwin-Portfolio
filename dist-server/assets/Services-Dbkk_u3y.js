import { o as whatsappUrl } from "../entry-server.js";
import { n as growthServices, t as coreServices } from "./services-BwWud2Ra.js";
/* empty css                  */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/Services.jsx
var allServices = [...coreServices, ...growthServices];
function useReveal() {
	useEffect(() => {
		const nodes = document.querySelectorAll(".services-reveal");
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			nodes.forEach((node) => node.classList.add("in-view"));
			return;
		}
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("in-view");
				observer.unobserve(entry.target);
			}
		}), { threshold: .12 });
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
}
function ServiceCard({ service, index }) {
	return /* @__PURE__ */ jsxs("article", {
		id: service.id,
		className: `service-card surface services-reveal tone-${service.tone}`,
		style: { transitionDelay: `${index % 3 * 60}ms` },
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "service-card-top",
				children: [/* @__PURE__ */ jsx("span", {
					className: "service-number",
					children: service.number
				}), /* @__PURE__ */ jsx("span", {
					className: "service-badge",
					children: service.badge
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "service-card-main",
				children: [/* @__PURE__ */ jsx("h3", { children: service.title }), /* @__PURE__ */ jsx("p", {
					className: "service-description",
					children: service.description
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "service-card-footer",
				children: [/* @__PURE__ */ jsx("ul", { children: service.points.map((point) => /* @__PURE__ */ jsx("li", { children: point }, point)) }), /* @__PURE__ */ jsxs("p", {
					className: "service-best",
					children: [/* @__PURE__ */ jsx("span", { children: "Best for" }), service.bestFor]
				})]
			}),
			/* @__PURE__ */ jsxs(Link, {
				className: "service-card-button",
				to: `/services/${service.id}`,
				children: ["Explore this service ", /* @__PURE__ */ jsx("span", { children: "→" })]
			})
		]
	});
}
function Services() {
	useReveal();
	useEffect(() => {
		const hash = window.location.hash;
		if (!hash) return;
		requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		}));
	}, []);
	return /* @__PURE__ */ jsxs("main", {
		className: "services-page",
		id: "main",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "services-hero",
				children: [/* @__PURE__ */ jsx("div", {
					className: "services-grid-bg",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("div", {
					className: "container services-hero-inner",
					children: /* @__PURE__ */ jsxs("div", {
						className: "services-hero-content services-reveal",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "services-rating",
								"aria-label": "5 out of 5 client rating",
								children: [
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										children: "★★★★★"
									}),
									/* @__PURE__ */ jsx("strong", { children: "5/5" }),
									/* @__PURE__ */ jsx("span", { children: "client rating" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "services-eyebrow",
								children: "PERFORMANCE MARKETING · DUBAI · UAE"
							}),
							/* @__PURE__ */ jsxs("h1", { children: ["Performance Marketing Services in Dubai for ", /* @__PURE__ */ jsx("span", { children: "Measurable Growth." })] }),
							/* @__PURE__ */ jsx("p", {
								className: "services-hero-description",
								children: "As a Performance Marketing Specialist, I provide data driven digital marketing services for businesses in Dubai and across the UAE, helping improve lead quality, reduce wasted ad spend, and build scalable marketing systems that drive measurable business growth."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "services-hero-actions",
								children: [/* @__PURE__ */ jsxs("a", {
									className: "services-hero-primary",
									href: whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Message on WhatsApp ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								}), /* @__PURE__ */ jsxs(Link, {
									className: "services-hero-secondary",
									to: "/contact",
									children: ["Book a Consultation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "services-hero-points",
								"aria-label": "Performance marketing capabilities",
								children: [
									/* @__PURE__ */ jsx("span", { children: "✓ Based in UAE" }),
									/* @__PURE__ */ jsx("i", { "aria-hidden": "true" }),
									/* @__PURE__ */ jsx("span", { children: "✓ Meta & Google Ads Specialist" }),
									/* @__PURE__ */ jsx("i", { "aria-hidden": "true" }),
									/* @__PURE__ */ jsx("span", { children: "✓ Data Driven Performance Marketing" }),
									/* @__PURE__ */ jsx("i", { "aria-hidden": "true" }),
									/* @__PURE__ */ jsx("span", { children: "✓ End to End Funnel Strategy" })
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "services-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "services-heading services-reveal",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "services-eyebrow",
							children: "Our Services"
						}), /* @__PURE__ */ jsx("h2", { children: "Built around the growth problem, not the platform." })] }), /* @__PURE__ */ jsx("p", { children: "Choose the part of the acquisition system that needs attention, or combine services when the constraint sits across the funnel." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "core-services-grid all-services-grid",
						children: allServices.map((service, index) => /* @__PURE__ */ jsx(ServiceCard, {
							service,
							index
						}, service.id))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "services-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container services-cta-inner",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "services-eyebrow services-reveal",
							children: "Not sure where to start?"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "services-reveal",
							children: "Start with the constraint, not a channel."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "services-reveal",
							children: "In a free consultation, we can identify the change most likely to improve your lead quality, conversion or customer follow up."
						}),
						/* @__PURE__ */ jsxs("a", {
							className: "services-cta-button services-reveal",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Get a free consultation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			})
		]
	});
}
export { Services as default };
