import { renderToPipeableStream } from "react-dom/server";
import { Link, MemoryRouter, NavLink, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { PassThrough } from "node:stream";
import { Suspense, lazy, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import emailjs from "@emailjs/browser";
// src/data/navigation.js
var navigation = [
	{
		label: "Home",
		path: "/"
	},
	{
		label: "About",
		path: "/about"
	},
	{
		label: "Services",
		path: "/services"
	},
	{
		label: "Case Studies",
		path: "/case-studies"
	},
	{
		label: "Resources",
		path: "/resources"
	},
	{
		label: "Blogs",
		path: "/blog"
	},
	{
		label: "Contact",
		path: "/contact"
	}
];
// src/hooks/useScroll.js
function useScroll(threshold = 24) {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > threshold);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [threshold]);
	return scrolled;
}
// src/utils/contact.js
var emailAddress = "ashwinjames2720@gmail.com";
var whatsappUrl = "https://wa.me/971527704142?text=Hello%20Ashwin%2C%20I%20would%20like%20to%20discuss%20generating%20more%20qualified%20leads%20for%20my%20business.";
// src/components/layout/Header.jsx
var calendlyUrl$1 = "https://calendly.com/ashwinjames-marketing/30min";
function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const scrolled = useScroll(24);
	const { pathname } = useLocation();
	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);
	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		document.body.classList.toggle("menu-open", menuOpen);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.classList.remove("menu-open");
		};
	}, [menuOpen]);
	const headerClassName = ["site-header", scrolled ? "is-scrolled" : ""].filter(Boolean).join(" ");
	const linkClassName = ({ isActive }) => isActive ? "active" : void 0;
	return /* @__PURE__ */ jsxs("header", {
		className: headerClassName,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "nav-wrap",
			children: [
				/* @__PURE__ */ jsxs(NavLink, {
					className: "brand",
					to: "/",
					"aria-label": "Ashwin James home",
					children: ["ASHWIN", /* @__PURE__ */ jsx("span", { children: "." })]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "desktop-nav",
					"aria-label": "Primary navigation",
					children: navigation.map((item) => /* @__PURE__ */ jsx(NavLink, {
						className: linkClassName,
						to: item.path,
						end: item.path === "/",
						children: item.label
					}, item.path))
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "consultation-link",
					href: calendlyUrl$1,
					target: "_blank",
					rel: "noreferrer",
					children: ["Book a call ", /* @__PURE__ */ jsx("span", {
						className: "consultation-icon",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsx("svg", {
							viewBox: "0 0 16 16",
							fill: "none",
							children: /* @__PURE__ */ jsx("path", { d: "M4 12L12 4M6 4H12V10" })
						})
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					className: "menu-button",
					type: "button",
					"aria-expanded": menuOpen,
					"aria-controls": "mobile-menu",
					"aria-label": menuOpen ? "Close menu" : "Open menu",
					onClick: () => setMenuOpen((value) => !value),
					children: /* @__PURE__ */ jsx("svg", {
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.8",
						strokeLinecap: "round",
						"aria-hidden": "true",
						children: menuOpen ? /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) : /* @__PURE__ */ jsx("path", { d: "M4 7h16M4 12h16M4 17h16" })
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			id: "mobile-menu",
			className: `mobile-menu${menuOpen ? " open" : ""}`,
			"aria-hidden": !menuOpen,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mobile-menu-header",
					children: [/* @__PURE__ */ jsxs(NavLink, {
						className: "brand mobile-menu-brand",
						to: "/",
						"aria-label": "Ashwin James home",
						children: ["ASHWIN", /* @__PURE__ */ jsx("span", { children: "." })]
					}), /* @__PURE__ */ jsx("button", {
						className: "mobile-menu-close",
						type: "button",
						"aria-label": "Close menu",
						onClick: () => setMenuOpen(false),
						children: /* @__PURE__ */ jsx("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.7",
							strokeLinecap: "round",
							"aria-hidden": "true",
							children: /* @__PURE__ */ jsx("path", { d: "M5 5l14 14M19 5L5 19" })
						})
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "mobile-menu-links",
					"aria-label": "Mobile navigation",
					children: navigation.map((item) => /* @__PURE__ */ jsx(NavLink, {
						className: linkClassName,
						to: item.path,
						end: item.path === "/",
						children: item.label
					}, item.path))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mobile-menu-footer",
					children: [
						/* @__PURE__ */ jsx("a", {
							className: "mobile-menu-email",
							href: "mailto:ashwinjames2720@gmail.com",
							children: "ASHWINJAMES2720@GMAIL.COM"
						}),
						/* @__PURE__ */ jsx("a", {
							className: "mobile-menu-cta",
							href: calendlyUrl$1,
							target: "_blank",
							rel: "noreferrer",
							children: "↗ LET'S TALK"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mobile-menu-socials",
							children: [/* @__PURE__ */ jsx("a", {
								href: "https://www.linkedin.com/",
								target: "_blank",
								rel: "noreferrer",
								children: "↗ LINKEDIN"
							}), /* @__PURE__ */ jsx("a", {
								href: "mailto:ashwinjames2720@gmail.com",
								children: "↗ EMAIL"
							})]
						})
					]
				})
			]
		})]
	});
}
// src/components/layout/Footer.jsx
var linkedinUrl$1 = "https://www.linkedin.com/in/ashwin-james";
var githubUrl = "https://github.com/ashwinpjames";
var instagramUrl = "https://www.instagram.com/";
var xUrl = "https://x.com/";
var redditUrl = "https://www.reddit.com/";
var threadsUrl = "https://www.threads.net/";
var googleReviewUrl$1 = "https://search.google.com/local/writereview?placeid=ChIJn3EsesSYBK4RKmOOSOVoEI8";
var googleBusinessUrl = "https://share.google/OIRIEsstXUcjmDEgr";
var socialLinks = [
	{
		label: "X",
		url: xUrl,
		icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\" fill=\"currentColor\"/></svg>"
	},
	{
		label: "Instagram",
		url: instagramUrl,
		icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"4.25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"17.5\" cy=\"6.5\" r=\"1.1\" fill=\"currentColor\"/></svg>"
	},
	{
		label: "GitHub",
		url: githubUrl,
		icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.94.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75\" fill=\"currentColor\"/></svg>"
	},
	{
		label: "Reddit",
		url: redditUrl,
		icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M21 12.5c0-1.1-.9-2-2-2-.54 0-1.03.22-1.39.57-1.35-.94-3.1-1.55-5.05-1.65l.86-3.98 2.77.6a1.8 1.8 0 1 0 .2-1.03l-3.03-.66a.65.65 0 0 0-.77.49l-.96 4.51c-1.95.09-3.7.7-5.05 1.65A1.99 1.99 0 0 0 5 10.5c-1.1 0-2 .9-2 2 0 .8.47 1.49 1.14 1.81-.04.23-.06.46-.06.69 0 2.82 3.55 5.1 7.92 5.1s7.92-2.28 7.92-5.1c0-.23-.02-.46-.06-.69A2 2 0 0 0 21 12.5ZM8.1 13.7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm7.83 4.01c-.96.9-2.52 1.34-3.93 1.34s-2.97-.44-3.93-1.34a.55.55 0 0 1 .75-.8c.71.67 1.91 1.05 3.18 1.05s2.47-.38 3.18-1.05a.55.55 0 1 1 .75.8Zm-.03-1.51a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z\" fill=\"currentColor\"/></svg>"
	},
	{
		label: "Threads",
		url: threadsUrl,
		icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12.7 20.7c-4.8 0-8.2-3.12-8.2-8.63 0-5.5 3.16-8.77 8.05-8.77 4.42 0 7.1 2.23 7.57 6.12l-2.24.35c-.38-2.65-2.07-4.1-5.3-4.1-3.55 0-5.77 2.19-5.77 6.38 0 4.16 2.17 6.49 5.96 6.49 3.16 0 5.08-1.63 5.08-4.02 0-1.99-1.22-3.14-3.32-3.14-1.63 0-2.75.7-2.75 1.84 0 1.03.83 1.65 2.16 1.65 1.08 0 2.04-.42 2.81-1.18-.23 3.24-1.82 5.01-4.05 5.01-2.02 0-3.32-1.03-3.32-2.72 0-2.06 1.75-3.31 4.65-3.31 1.14 0 2.15.2 3.02.57-.32-2.13-1.68-3.3-4.12-3.3-2.15 0-3.57 1.04-4.07 3.04l-2.13-.5c.73-2.99 2.98-4.74 6.28-4.74 4.18 0 6.55 2.24 6.68 6.25 2.14 1.01 3.34 2.79 3.34 5.24 0 3.64-2.88 6.99-7.37 6.99Z\" fill=\"currentColor\"/></svg>"
	},
	{
		label: "LinkedIn",
		url: linkedinUrl$1,
		icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5.15 3.25A2.15 2.15 0 1 1 5.14 7.55a2.15 2.15 0 0 1 .01-4.3ZM3.3 8.8h3.7V20.7H3.3V8.8Zm5.95 0h3.55v1.63h.05c.49-.94 1.69-1.93 3.48-1.93 3.72 0 4.41 2.45 4.41 5.64v6.56h-3.7v-5.82c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.08v5.92h-3.61V8.8Z\" fill=\"currentColor\"/></svg>"
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "site-footer",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container footer-grid",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "footer-brand-column",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "footer-brand",
							children: ["ASHWIN", /* @__PURE__ */ jsx("span", { children: "." })]
						}),
						/* @__PURE__ */ jsx("p", { children: "Performance marketing and growth systems for businesses ready to create a more predictable pipeline." }),
						/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "footer-primary-cta",
							children: ["Book a consultation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h3", { children: "What I do" }),
					/* @__PURE__ */ jsx(Link, {
						to: "/services",
						children: "Performance marketing"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/services",
						children: "Lead generation"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/services",
						children: "Landing pages & CRO"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/services",
						children: "Analytics"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/services",
						children: "CRM automation"
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h3", { children: "Who I am" }),
					/* @__PURE__ */ jsx(Link, {
						to: "/about",
						children: "About"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/case-studies",
						children: "Case studies"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/blog",
						children: "Insights"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/#testimonials",
						children: "Testimonials"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						children: "Contact"
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h3", { children: "Resources" }),
					/* @__PURE__ */ jsx(Link, {
						to: "/blog",
						children: "Marketing insights"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/blog",
						children: "Articles"
					}),
					/* @__PURE__ */ jsx("a", {
						href: googleBusinessUrl,
						target: "_blank",
						rel: "noreferrer",
						children: "Google Business"
					}),
					/* @__PURE__ */ jsx("a", {
						href: googleReviewUrl$1,
						target: "_blank",
						rel: "noreferrer",
						children: "Leave a Google review ↗"
					})
				] }),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-contact",
					children: [
						/* @__PURE__ */ jsx("h3", { children: "Need help?" }),
						/* @__PURE__ */ jsx("p", { children: "Dubai, United Arab Emirates" }),
						/* @__PURE__ */ jsx("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ jsx("a", {
							href: `mailto:${emailAddress}`,
							children: "Email"
						}),
						/* @__PURE__ */ jsx("a", {
							href: linkedinUrl$1,
							target: "_blank",
							rel: "noreferrer",
							children: "LinkedIn"
						})
					]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "container footer-bottom",
			children: [
				/* @__PURE__ */ jsxs("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Ashwin James. All rights reserved."
				] }),
				/* @__PURE__ */ jsx("div", {
					className: "footer-social-icons",
					"aria-label": "Social links",
					children: socialLinks.map(({ label, url, icon }) => /* @__PURE__ */ jsx("a", {
						href: url,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": label,
						dangerouslySetInnerHTML: { __html: icon }
					}, label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-bottom-links",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/privacy",
							children: "Privacy policy"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/terms",
							children: "Terms & conditions"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/sitemap.xml",
							children: "Sitemap"
						})
					]
				})
			]
		})]
	});
}
// src/components/layout/MobileActionBar.jsx
function MobileActionBar() {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const update = () => setVisible(window.innerWidth <= 767 && window.scrollY > Math.max(90, window.innerHeight * .2));
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update, { passive: true });
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: `mobile-action-bar${visible ? " is-visible" : ""}`,
		"aria-hidden": !visible,
		children: [/* @__PURE__ */ jsx("a", {
			href: whatsappUrl,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "Chat on WhatsApp",
			children: "WhatsApp"
		}), /* @__PURE__ */ jsx("a", {
			href: `mailto:${emailAddress}`,
			"aria-label": "Send email",
			children: "Email"
		})]
	});
}
// src/seo-meta.js
var routeMeta = {
	"/": ["Performance Marketing Specialist in Dubai, UAE | Ashwin James", "Performance marketing specialist in Dubai, UAE, helping businesses generate and qualify leads through Meta Ads, Google Ads, CRM and funnel optimisation."],
	"/about": ["About Ashwin James | Performance Marketing Specialist", "Learn about Ashwin James, a UAE based performance marketing specialist focused on paid advertising, lead generation, analytics and measurable business growth."],
	"/services": ["Performance Marketing Services in Dubai, UAE | Ashwin James", "Explore performance marketing services in Dubai including paid ads, lead generation, CRO, analytics and growth systems built around measurable business outcomes."],
	"/services/google-ads": ["Google Ads Specialist in UAE | Ashwin James", "Google Ads specialist in UAE helping businesses attract qualified leads through search campaigns, conversion tracking, landing pages and performance optimisation."],
	"/services/meta-ads": ["Meta Ads Specialist in UAE | Ashwin James", "Meta Ads specialist in UAE helping businesses generate qualified leads through audience strategy, creative testing, campaign optimisation and conversion focused funnels."],
	"/services/seo": ["SEO Specialist in Dubai, UAE | Ashwin James", "SEO specialist in Dubai helping businesses improve search visibility through technical SEO, useful content, entity authority and AI search optimisation."],
	"/services/website-development": ["Website Development in Dubai | Ashwin James", "Website development in Dubai focused on fast, conversion focused websites that support SEO, lead generation, analytics and measurable marketing performance."],
	"/services/lead-generation": ["Lead Generation Specialist in Dubai | Ashwin James", "Lead generation specialist in Dubai helping businesses attract, qualify and convert better leads through paid ads, landing pages, CRM workflows and optimisation."],
	"/services/cro": ["CRO Specialist in Dubai, UAE | Ashwin James", "CRO specialist in Dubai helping businesses turn more website visitors into qualified leads through landing page optimisation, testing, analytics and funnel improvements."],
	"/services/performance-marketing-specialist": ["Performance Marketing Services in Dubai | Ashwin James", "Performance marketing services in Dubai connecting paid acquisition, conversion optimisation, analytics, CRM and lead quality to measurable business outcomes."],
	"/performance-marketing-specialist-in-dubai": ["Performance Marketing Specialist in Dubai | Ashwin James", "Meet Ashwin James, a Performance Marketing Specialist in Dubai focused on paid acquisition, lead quality, conversion tracking, analytics and measurable business outcomes."],
	"/services/digital-marketing-consultant-dubai": ["Digital Marketing Consultant in Dubai | Ashwin James", "Digital marketing consultant in Dubai helping businesses plan and improve paid advertising, SEO, lead generation, conversion optimisation, analytics and CRM around measurable business goals."],
	"/services/performance-growth-marketing": ["Performance Growth Marketing in UAE | Ashwin James", "Performance growth marketing in UAE combining paid acquisition, conversion optimisation, analytics and CRM systems to build a more measurable growth engine."],
	"/services/whatsapp-marketing": ["WhatsApp Marketing Specialist in UAE | Ashwin James", "WhatsApp marketing specialist in UAE helping businesses turn leads into conversations through structured messaging, follow ups and conversion focused workflows."],
	"/services/hubspot-crm-integration": ["HubSpot CRM Integration & Automation Specialist in UAE | Ashwin James", "HubSpot CRM integration specialist in UAE helping businesses connect lead capture, CRM data, automation, qualification and sales workflows for measurable growth."],
	"/services/wordpress": ["WordPress Website Development in Dubai | Ashwin James", "WordPress website development in Dubai for businesses that need fast, SEO friendly and conversion focused websites built around lead generation and growth."],
	"/case-studies": ["Performance Marketing Case Studies | Ashwin James", "Explore performance marketing case studies covering lead generation, paid advertising, CRM, tracking and conversion optimisation with a focus on business results."],
	"/case-studies/crm-sales-qualified-lead": ["CRM Lead Qualification Case Study | Ashwin James", "See how CRM workflows and lead qualification can improve marketing efficiency, sales follow up and the quality of opportunities passed to the sales team."],
	"/case-studies/meta-pixel-capi-signal-loss": ["Meta Pixel and CAPI Case Study | Ashwin James", "Explore how Meta Pixel and Conversions API tracking can improve signal quality, attribution and campaign optimisation when browser data is lost or incomplete."],
	"/resources": ["Performance Marketing Resources | Ashwin James", "Access practical marketing tools, calculators, checklists and frameworks for paid advertising, lead generation, tracking, analytics and conversion optimisation."],
	"/resources/campaign-budget-calculator": ["Campaign Budget Calculator for Paid Ads", "Estimate your paid advertising budget using target leads, conversion rates, cost per lead and acquisition goals before launching a campaign."],
	"/resources/utm-builder": ["UTM Builder for Marketing Campaigns | Ashwin James", "Build consistent UTM parameters for your marketing campaigns and make traffic sources easier to track across analytics, CRM and reporting systems."],
	"/resources/meta-ads-launch-checklist": ["Meta Ads Launch Checklist | Ashwin James", "Use this Meta Ads launch checklist to review campaign structure, tracking, creative, targeting and conversion setup before spending your advertising budget."],
	"/resources/lead-quality-framework": ["Lead Quality Framework for Marketers | Ashwin James", "Use this lead quality framework to evaluate prospects beyond lead volume and connect marketing campaigns with qualification, sales follow up and revenue outcomes."],
	"/resources/blog-prompt-architect": ["SEO Blog Prompt Architect | Ashwin James", "Build a copy ready SEO content prompt using your topic, keywords, search intent, source material, internal links and editorial requirements."],
	"/blog/best-performance-marketing-specialist": ["Best Performance Marketing Specialist in Dubai: How to Choose | Ashwin James", "Discover how to choose the best performance marketing specialist in Dubai. Learn which skills, metrics, and case studies matter when evaluating marketing expertise."],
	"/blog": ["Performance Marketing Insights | Ashwin James", "Practical insights on performance marketing, Meta Ads, Google Ads, lead generation, analytics, CRO and digital growth for marketers and business owners."],
	"/blog/performance-marketing-salary": ["Performance Marketing Salary in 2026: Dubai Career Guide | Ashwin James", "Explore performance marketing salary in 2026, Dubai career opportunities, essential skills and how to grow your earning potential."],
	"/blog/crm-data-for-paid-ads": ["CRM Data for Paid Ads: Improve Meta & Google Ads Optimisation", "Learn how CRM data for paid ads connects lead quality, first party data and campaign optimisation across Meta Ads and Google Ads."],
	"/blog/paid-advertising-roi": ["How to Measure Paid Advertising ROI | Ashwin James", "Learn how to measure paid advertising ROI beyond clicks, leads and ROAS by connecting advertising spend with qualification, customers, revenue and contribution."],
	"/blog/ga4-performance-marketing": ["GA4 for Performance Marketers: What Should You Actually Track? | Ashwin James", "A practical guide to GA4 for performance marketing, covering acquisition, events, key events, conversion rate, landing pages, attribution, GA4 analytics and business outcomes."],
	"/blog/crm-lead-tracking-paid-ads": ["How to Connect Paid Ads With CRM Data for Better Lead Quality | Ashwin James", "Learn how CRM lead tracking, lead scoring and HubSpot can connect paid advertising with qualification, sales outcomes and customer data to improve lead quality."],
	"/blog/marketing-sales-funnel-sales-pipeline": ["Marketing Sales Funnel: Why Your Sales Pipeline Does Not Work | Ashwin James", "Understand why a marketing sales funnel can generate leads while the sales pipeline struggles, and how sales and marketing alignment can reveal the real bottleneck."],
	"/blog/cost-per-lead-vs-cost-per-customer": ["Marketing Sales Funnel: Cost Per Lead vs Cost Per Customer | Ashwin James", "Learn how a marketing sales funnel connects lead generation, sales and customer acquisition, and how sales and marketing alignment can improve acquisition decisions."],
	"/blog/customer-acquisition-cost-vs-cpl": ["Customer Acquisition Cost: Why CAC Matters More Than CPL | Ashwin James", "Understand customer acquisition cost, CAC vs CPL, why a lower CPL can produce a higher CAC, and how to connect paid acquisition with customer outcomes."],
	"/blog/lead-form-optimisation": ["How Lead Forms Affect Paid Advertising Performance | Ashwin James", "Learn how lead forms affect paid advertising performance, lead quality, CPL, qualification and downstream campaign outcomes, with a practical lead form optimisation framework."],
	"/blog/lead-generation-vs-lead-qualification": ["Lead Generation vs Lead Qualification: What Is the Difference? | Ashwin James", "Understand the difference between lead generation and lead qualification, how they work together, which metrics matter and how to connect marketing with sales outcomes."],
	"/blog/google-ads-lead-quality": ["How to Optimise Google Ads for Qualified Leads Instead of More Leads | Ashwin James", "Learn how to improve Google Ads lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes."],
	"/blog/google-ads-keyword-intent": ["Google Ads Keyword Intent: Informational vs Commercial vs Transactional | Ashwin James", "Learn how Google Ads keyword intent works across informational, commercial and transactional searches and how search intent should influence campaigns, ads, landing pages and measurement."],
	"/blog/google-ads-clicks-not-turning-into-leads": ["Why Google Ads Clicks Are Not Turning Into Leads | Ashwin James", "Learn why Google Ads clicks are not turning into leads and how to diagnose search intent, landing pages, offers, forms, conversion tracking and lead quality."],
	"/blog/google-ads-vs-meta-ads": ["Google Ads vs Meta Ads for Lead Generation | UAE Guide | Ashwin James", "Compare Google Ads vs Meta Ads for lead generation in the UAE. Learn how intent, creative, lead quality, budgets and measurement should shape the channel decision."],
	"/blog/google-ads-lead-generation-uae": ["Google Ads for Lead Generation: A Practical Guide for UAE Businesses | Ashwin James", "Learn how UAE businesses can use Google Ads for lead generation, from search intent and keywords to landing pages, tracking, lead quality and optimisation."],
	"/blog/google-search-ads-lead-generation-campaign": ["Google Search Ads Campaign for Lead Generation | Ashwin James", "Learn how to build a Google Search Ads campaign for lead generation, from search intent and keywords to ads, landing pages, tracking, lead quality and optimisation."],
	"/blog/meta-ads-campaign-structure": ["How to Structure Meta Ads Campaigns for Lead Generation | Ashwin James", "Learn how to structure Meta Ads campaigns for lead generation, including Facebook Ads campaign structure, ad creative testing and Facebook Ads testing."],
	"/blog/meta-ads-lead-generation-uae": ["Meta Ads for Lead Generation: A Practical Guide for UAE Businesses | Ashwin James", "Learn how UAE businesses can use Meta Ads for lead generation, including Facebook Ads lead generation, Instagram Ads, creative, lead forms, qualification and measurement."],
	"/blog/performance-marketing-metrics": ["What Should You Measure in Performance Marketing? | Ashwin James", "Learn which performance marketing metrics matter, including CAC, CPL, ROAS, CPA and conversion rate, and how to connect them to business outcomes."],
	"/blog/creative-is-the-new-targeting": ["Creative Is the New Targeting: How the Right Message Finds the Right Customer", "Learn how Meta Ads creative can pre qualify leads, shape audience response and improve lead quality by using the message as part of the targeting system."],
	"/blog/ctr-explained": ["CTR Explained: Why This Metric Matters in Ad Campaigns | Ashwin James", "Learn what click through rate means, how CTR is calculated and how creative, audience, message match and campaign objectives influence it."],
	"/blog/cpm-explained": ["CPM Explained: What It Really Measures | Ashwin James", "Learn what CPM measures in paid advertising, why it changes and how to evaluate reach costs alongside CTR, conversion rate and CPA."],
	"/blog/lead-generation-right-leads": ["Lead Generation Is About the Right Leads | Ashwin James", "Learn how targeting, creative, offers and lead forms work together to improve lead quality and why qualified opportunities matter more than lead volume."],
	"/blog/increase-average-order-value": ["10 Practical Ways to Increase Average Order Value | Ashwin James", "Learn how bundles, upsells, cross sells, free shipping thresholds and funnel optimisation can increase average order value without simply raising prices."],
	"/blog/content-angles-strategy": ["Content Angles Strategy: How to Turn One Topic Into Better Content | Ashwin James", "Learn how to develop stronger content angles by connecting audience questions, tensions, objections, desires and intent to one core topic."],
	"/blog/how-meta-ads-algorithm-works": ["How Meta Ads Algorithm Works in 2026 | Ashwin James", "Learn how the Meta Ads algorithm evaluates and ranks ads, from retrieval and ranking to the auction, and what advertisers can do to improve performance."],
	"/blog/hormozi-meta-ads-strategy": ["Alex Hormozi Meta Ads Strategy | Ashwin James", "Analyse Alex Hormozi's Meta Ads strategy, creative approach and targeting philosophy to understand how creative volume can influence modern paid acquisition."],
	"/blog/more-leads-revenue-didnt-move": ["Why More Leads Do Not Always Mean More Revenue", "Getting more leads does not guarantee more revenue. Learn how lead quality, sales follow up, conversion rates and acquisition economics affect growth."],
	"/blog/seo-ai-search-entity-authority-2026": ["SEO for AI Search and Entity Authority in 2026", "Learn how entity authority, structured content, retrieval friendly information and topical relevance can help businesses become more visible in AI search."],
	"/blog/marketing-concepts-modern-marketers-should-know": ["Marketing Concepts Every Modern Marketer Should Know", "Understand the essential marketing concepts behind acquisition, conversion, customer value, attribution, analytics and growth in modern digital marketing."],
	"/blog/meta-ads-generating-leads-but-not-sales": ["Why Your Meta Ads Are Generating Leads but Not Sales | Ashwin James", "Learn why Meta Ads can generate leads without customers and how lead quality, follow up, CRM, conversion and sales feedback affect revenue."],
	"/blog/freelance-marketing-consultant-uae": ["Freelance Marketing Consultant in UAE: What They Do and How to Choose", "Learn what a freelance marketing consultant does, when a UAE business should hire one, consultant versus agency differences and how marketing connects to revenue."],
	"/blog/paid-ads-specialist-uae": ["Paid Ads Specialist in UAE: What They Do and How to Choose One", "Learn what a paid ads specialist manages across Meta Ads and Google Ads, how paid advertising should be measured and how UAE businesses can choose one."],
	"/blog/performance-marketing-specialist-in-dubai": ["What Does a Performance Marketing Specialist Do? | Ashwin James", "Understand what a performance marketing specialist does, including paid acquisition, lead generation, analytics, conversion optimisation and measurable growth systems."],
	"/blog/performance-marketing-dubai": ["What Is Performance Marketing? A Dubai Business Guide", "Learn what performance marketing is, how it works, which metrics matter, and how Dubai businesses can build measurable acquisition campaigns."],
	"/blog/performance-marketing-vs-digital-marketing": ["Performance Marketing vs Digital Marketing: What Is the Difference? | Ashwin James", "Compare performance marketing and digital marketing by scope, channels, measurement, use cases and strategy, and learn how businesses can combine both approaches."],
	"/blog/performance-marketing-strategy-uae": ["How to Build a Performance Marketing Strategy for a UAE Business | Ashwin James", "Learn how to build a performance marketing strategy for a UAE business, from objectives and audiences to channels, conversion tracking, budgets, lead quality, CRM and optimisation."],
	"/blog/free-invoice-generator-for-freelancers": ["Free Invoice Generator for Freelancers: Why Proper Invoicing Matters | Ashwin James", "Learn why freelancers need professional invoices, what a good invoice should include and how proper invoicing can improve cash flow, client trust and business organisation."],
	"/blog/google-ads-conversion-tracking": ["Google Ads Conversion Tracking: What Businesses Need to Measure | Ashwin James", "Learn what Google Ads conversion tracking should measure, how GA4 and Google Tag Manager fit together, and how to diagnose tracking problems."],
	"/blog/conversion-tracking-performance-marketing": ["Why Conversion Tracking Matters in Performance Marketing | Ashwin James", "Understand why conversion tracking matters in performance marketing, how it changes optimisation decisions and how performance marketing analytics connects advertising activity with business outcomes."],
	"/contact": ["Contact Ashwin James | Performance Marketing Specialist", "Contact Ashwin James to discuss performance marketing, paid ads, lead generation, CRM, conversion optimisation and growth opportunities for your business."]
};
// src/components/layout/RouteMeta.jsx
function setMeta(name, content) {
	let element = document.head.querySelector(`meta[name="${name}"]`);
	if (!element) {
		element = document.createElement("meta");
		element.name = name;
		document.head.appendChild(element);
	}
	element.content = content;
}
function setCanonical(pathname) {
	let element = document.head.querySelector("link[rel=\"canonical\"]");
	if (!element) {
		element = document.createElement("link");
		element.rel = "canonical";
		document.head.appendChild(element);
	}
	element.href = `https://www.ashwinjames.com${pathname === "/" ? "/" : pathname}`;
}
function RouteMeta() {
	const { pathname } = useLocation();
	useEffect(() => {
		const [title, description] = routeMeta[pathname] || ["Performance Marketing Specialist in UAE | Ashwin James", "Ashwin James is a performance marketing specialist in the UAE focused on paid advertising, lead generation, analytics, conversion optimisation and measurable business growth."];
		document.title = title;
		setMeta("description", description);
		setMeta("theme-color", "#050816");
		setCanonical(pathname);
	}, [pathname]);
	return null;
}
// src/components/layout/CursorGlow.jsx
function CursorGlow() {
	useEffect(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return void 0;
		const root = document.documentElement;
		let frame = 0;
		let pending = null;
		const move = (event) => {
			pending = {
				x: event.clientX,
				y: event.clientY
			};
			if (frame) return;
			frame = window.requestAnimationFrame(() => {
				if (pending) {
					root.style.setProperty("--cursor-x", `${pending.x}px`);
					root.style.setProperty("--cursor-y", `${pending.y}px`);
					root.classList.add("cursor-active");
				}
				pending = null;
				frame = 0;
			});
		};
		const leave = () => root.classList.remove("cursor-active");
		window.addEventListener("pointermove", move, { passive: true });
		document.documentElement.addEventListener("mouseleave", leave);
		return () => {
			window.removeEventListener("pointermove", move);
			document.documentElement.removeEventListener("mouseleave", leave);
			root.classList.remove("cursor-active");
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: "cursor-glow",
		"aria-hidden": "true"
	});
}
// src/components/layout/ScrollToTop.jsx
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant"
		});
	}, [pathname]);
	return null;
}
// src/layouts/MainLayout.jsx
function MainLayout() {
	const isBlogArticle = useLocation().pathname.startsWith("/blog/");
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(RouteMeta, {}),
		/* @__PURE__ */ jsx(ScrollToTop, {}),
		/* @__PURE__ */ jsx(CursorGlow, {}),
		/* @__PURE__ */ jsx("a", {
			className: "skip-link",
			href: "#page-content",
			children: "Skip to content"
		}),
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsx("div", {
			id: "page-content",
			children: /* @__PURE__ */ jsx(Outlet, {})
		}),
		isBlogArticle && /* @__PURE__ */ jsxs("div", {
			className: "blog-home-link-note",
			children: [
				"Looking for a ",
				/* @__PURE__ */ jsx("a", {
					href: "https://www.ashwinjames.com/",
					children: "Performance Marketing Specialist"
				}),
				" in the UAE? Explore my approach and services."
			]
		}),
		/* @__PURE__ */ jsx(MobileActionBar, {}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
// src/components/home/PlatformMarquee.jsx
var platforms = [
	"META",
	"GOOGLE ADS",
	"GA4",
	"HUBSPOT",
	"NOTION",
	"LOOKER STUDIO"
];
function PlatformMarquee() {
	const items = [...platforms, ...platforms];
	return /* @__PURE__ */ jsx("section", {
		className: "platform-strip",
		"aria-label": "Growth platforms and tools",
		children: /* @__PURE__ */ jsx("div", {
			className: "platform-mask",
			children: /* @__PURE__ */ jsx("div", {
				className: "platform-track-react",
				children: items.map((platform, index) => /* @__PURE__ */ jsx("span", { children: platform }, `${platform}-${index}`))
			})
		})
	});
}
// src/components/home/Hero.jsx
var proof = [
	"Based in UAE",
	"Meta & Google Ads Specialist",
	"Data Driven Performance Marketing",
	"End to End Funnel Strategy"
];
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "home-hero",
		id: "top",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "home-hero-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "home-hero-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container home-hero-content",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "home-eyebrow reveal-home",
						children: "Performance Marketing Specialist"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "home-hero-title reveal-home",
						"aria-label": "Growth Driven By Better Marketing",
						children: [/* @__PURE__ */ jsx("span", {
							className: "hero-title-line",
							children: "Growth Driven"
						}), /* @__PURE__ */ jsx("span", {
							className: "hero-title-line hero-title-accent",
							children: "By Better Marketing"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "home-hero-copy reveal-home",
						children: "I’m a performance marketing specialist helping businesses in Dubai and across the UAE plan, execute, and scale data driven campaigns that deliver qualified leads, higher conversions, and measurable growth."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "home-actions reveal-home",
						children: [/* @__PURE__ */ jsxs("a", {
							className: "home-button primary",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Get a free consultation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						}), /* @__PURE__ */ jsxs("a", {
							className: "home-button secondary",
							href: "#case-studies",
							children: ["View case studies ", /* @__PURE__ */ jsx("span", { children: "↓" })]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hero-proof reveal-home",
						children: proof.map((item) => /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("i", {
							className: "hero-proof-check",
							"aria-hidden": "true",
							children: "✓"
						}), item] }, item))
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hero-platform-marquee",
				children: /* @__PURE__ */ jsx(PlatformMarquee, {})
			})
		]
	});
}
// src/components/home/ProblemSection.jsx
var problems = [
	[
		"01",
		"Targeting and offers",
		"Weak targeting and an unclear offer can attract attention without attracting the right buyers."
	],
	[
		"02",
		"Conversion and tracking",
		"Low converting landing pages and broken tracking hide where customers hesitate and what is working."
	],
	[
		"03",
		"Sales follow up",
		"Slow sales follow up can turn high intent enquiries into missed opportunities before a real conversation begins."
	]
];
function ProblemSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "home-section problem-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "problem-heading reveal-home",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow",
					children: "Designed for growth minded teams"
				}), /* @__PURE__ */ jsx("h2", { children: "Poor performance is rarely just traffic." })] }), /* @__PURE__ */ jsx("p", { children: "Poor performance usually starts before the click becomes revenue: weak targeting, an unclear offer, a low converting landing page, broken tracking, or slow sales follow up. I look across the full journey to identify where demand is leaking and what needs to change first." })]
			}), /* @__PURE__ */ jsx("div", {
				className: "problem-grid reveal-home",
				children: problems.map(([number, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
					/* @__PURE__ */ jsx("span", { children: number }),
					/* @__PURE__ */ jsx("h3", { children: title }),
					/* @__PURE__ */ jsx("p", { children: text })
				] }, number))
			})]
		})
	});
}
// src/components/home/BestFit.jsx
var audiences = [
	[
		"UAE SMEs",
		"Growing businesses ready to turn paid media into a more dependable source of qualified enquiries.",
		"building"
	],
	[
		"Healthcare businesses",
		"Clinics and providers that need to attract the right patients while protecting enquiry quality and cost.",
		"health"
	],
	[
		"Immigration and visa services",
		"Teams that need clearer qualification, stronger trust, and faster response paths for high intent prospects.",
		"globe"
	],
	[
		"Professional services",
		"Advisory, consulting and specialist firms with a valuable service that needs a sharper demand engine.",
		"briefcase"
	],
	[
		"B2B companies",
		"Businesses with longer decision cycles that need to connect acquisition, qualification and follow up.",
		"network"
	],
	[
		"Consistent marketing investors",
		"Businesses prepared to invest consistently, learn from the data, and improve performance over time.",
		"growth"
	]
];
function AudienceIcon({ type }) {
	const common = {
		width: 22,
		height: 22,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.7,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": true
	};
	if (type === "building") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [
			/* @__PURE__ */ jsx("path", { d: "M4 21h16" }),
			/* @__PURE__ */ jsx("path", { d: "M6 21V5l6-2 6 2v16" }),
			/* @__PURE__ */ jsx("path", { d: "M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" }),
			/* @__PURE__ */ jsx("path", { d: "M11 21v-3h2v3" })
		]
	});
	if (type === "health") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [/* @__PURE__ */ jsx("path", { d: "M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.5Z" }), /* @__PURE__ */ jsx("path", { d: "M8.5 10h2l1-2.2 1.4 4.4 1-2.2h1.6" })]
	});
	if (type === "globe") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}), /* @__PURE__ */ jsx("path", { d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" })]
	});
	if (type === "briefcase") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [/* @__PURE__ */ jsx("rect", {
			x: "3",
			y: "7",
			width: "18",
			height: "13",
			rx: "2"
		}), /* @__PURE__ */ jsx("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" })]
	});
	if (type === "network") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [
			/* @__PURE__ */ jsx("circle", {
				cx: "6",
				cy: "12",
				r: "2.5"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "18",
				cy: "6",
				r: "2.5"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "18",
				cy: "18",
				r: "2.5"
			}),
			/* @__PURE__ */ jsx("path", { d: "m8.2 10.9 7.5-3.8M8.2 13.1l7.5 3.8" })
		]
	});
	return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [
			/* @__PURE__ */ jsx("path", { d: "M4 19V9M10 19V5M16 19v-7M22 19V3" }),
			/* @__PURE__ */ jsx("path", { d: "m3 15 6-5 5 2 7-7" }),
			/* @__PURE__ */ jsx("path", { d: "M18 5h3v3" })
		]
	});
}
function BestFit() {
	return /* @__PURE__ */ jsx("section", {
		id: "who-i-work-best-with",
		className: "home-section best-fit-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading split-heading reveal-home",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow",
					children: "Best fit"
				}), /* @__PURE__ */ jsx("h2", { children: "Who I work best with." })] }), /* @__PURE__ */ jsx("p", { children: "Businesses that see performance marketing as a connected system, not a collection of isolated campaigns." })]
			}), /* @__PURE__ */ jsx("div", {
				className: "audience-grid",
				children: audiences.map(([title, text, icon]) => /* @__PURE__ */ jsxs("article", {
					className: "surface audience-card reveal-home",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "service-icon audience-icon",
							"aria-hidden": "true",
							children: /* @__PURE__ */ jsx(AudienceIcon, { type: icon })
						}),
						/* @__PURE__ */ jsx("h3", { children: title }),
						/* @__PURE__ */ jsx("p", { children: text })
					]
				}, title))
			})]
		})
	});
}
// src/components/home/Results.jsx
var results = [
	[
		140,
		"+",
		"Campaigns managed"
	],
	[
		12e3,
		"+",
		"Qualified leads generated"
	],
	[
		31,
		"%",
		"Average CPL reduction"
	],
	[
		4.8,
		"x",
		"Average return on ad spend"
	],
	[
		8,
		"",
		"Industries served"
	],
	[
		95,
		"%",
		"Client satisfaction rate"
	]
];
function Counter({ target, suffix }) {
	const [value, setValue] = useState(0);
	useEffect(() => {
		let frame;
		let start;
		const tick = (time) => {
			if (!start) start = time;
			const progress = Math.min((time - start) / 1200, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setValue(target < 10 ? Number((target * eased).toFixed(1)) : Math.round(target * eased));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [target]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [target < 10 ? value.toFixed(1) : value.toLocaleString("en-US"), suffix] });
}
function Results() {
	return /* @__PURE__ */ jsx("section", {
		id: "results",
		className: "home-section results-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading reveal-home",
					children: [/* @__PURE__ */ jsx("p", {
						className: "home-eyebrow",
						children: "Business results"
					}), /* @__PURE__ */ jsx("h2", { children: "Growth should be visible in the numbers that matter." })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "results-grid six",
					children: results.map(([target, suffix, label]) => /* @__PURE__ */ jsxs("article", {
						className: "result-card reveal-home",
						children: [/* @__PURE__ */ jsx("strong", { children: /* @__PURE__ */ jsx(Counter, {
							target,
							suffix
						}) }), /* @__PURE__ */ jsx("span", { children: label })]
					}, label))
				}),
				/* @__PURE__ */ jsx("p", {
					className: "results-note",
					children: "Representative performance across past engagements. Results vary by market, offer, spend, sales process and starting point."
				})
			]
		})
	});
}
// assets/ashwin-signature.png
var ashwin_signature_default = "/assets/ashwin-signature-DSJAcwMJ.png";
// src/components/home/AboutPreview.jsx
var portraitUrl = "https://res.cloudinary.com/fo4xyppd/image/upload/v1789634305/ChatGPT_Image_Sep_17_2026_12_38_01_PM.png";
var linkedinUrl = "https://www.linkedin.com/in/ashwin-james";
function AboutPreview() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "home-section about-preview",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container about-preview-grid",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "portrait-frame reveal-home",
				children: [/* @__PURE__ */ jsx("div", { className: "portrait-glow" }), /* @__PURE__ */ jsxs("div", {
					className: "portrait-inner",
					children: [
						/* @__PURE__ */ jsx("img", {
							className: "portrait-image",
							src: portraitUrl,
							alt: "Professional portrait of Ashwin James, Performance Marketing Specialist in UAE"
						}),
						/* @__PURE__ */ jsx("div", { className: "portrait-overlay" }),
						/* @__PURE__ */ jsxs("span", {
							className: "availability",
							children: [/* @__PURE__ */ jsx("span", {
								className: "availability-dot",
								"aria-hidden": "true"
							}), "Available to work"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "portrait-info",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "portrait-quote",
									children: "“Build the system, not just the campaign.”"
								}),
								/* @__PURE__ */ jsx("div", { className: "portrait-divider" }),
								/* @__PURE__ */ jsxs("div", {
									className: "portrait-bottom",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "portrait-caption",
										children: [/* @__PURE__ */ jsx("strong", { children: "Ashwin James" }), /* @__PURE__ */ jsx("span", { children: "Performance Marketing Specialist" })]
									}), /* @__PURE__ */ jsx("a", {
										className: "linkedin-button",
										href: linkedinUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "View Ashwin James on LinkedIn",
										children: /* @__PURE__ */ jsx("span", { children: "in" })
									})]
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "about-preview-copy reveal-home",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "home-eyebrow",
						children: "A practical growth partner"
					}),
					/* @__PURE__ */ jsx("h2", { children: "A disciplined way to turn marketing spend into commercial momentum." }),
					/* @__PURE__ */ jsxs("div", {
						className: "about-copy",
						children: [/* @__PURE__ */ jsx("p", { children: "Good growth work starts by understanding the business behind the brief: your market, the buying decision, your sales reality, and where revenue is currently leaking." }), /* @__PURE__ */ jsx("p", { children: "I bring the strategic view and hands on execution together. The aim is straightforward: fewer assumptions, better conversations with potential customers, and a marketing engine your business can confidently invest in." })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "about-actions",
						children: [/* @__PURE__ */ jsxs("a", {
							className: "text-link",
							href: "/about",
							children: ["Work with Ashwin ", /* @__PURE__ */ jsx("span", { children: "→" })]
						}), /* @__PURE__ */ jsx("img", {
							src: ashwin_signature_default,
							alt: "Ashwin signature",
							loading: "lazy"
						})]
					})
				]
			})]
		})
	});
}
// src/components/home/Approach.jsx
var points = [
	[
		"Senior ownership",
		"You work directly with the person shaping the strategy and doing the work.",
		"user"
	],
	[
		"Direct communication",
		"No layers between the question and the answer. Practical communication with the person responsible.",
		"message"
	],
	[
		"Nimble execution",
		"Focused work means less internal friction and faster movement from decision to tested action.",
		"bolt"
	],
	[
		"Strategy and delivery",
		"Strategy and execution stay connected instead of being split across different teams.",
		"target"
	],
	[
		"Flexible support",
		"The engagement adapts to the work that matters now without forcing a large agency structure.",
		"sliders"
	],
	[
		"Clear accountability",
		"One senior owner stays close to outcomes, learns quickly and takes responsibility for the next move.",
		"shield"
	]
];
function ApproachIcon({ type }) {
	const common = {
		width: 22,
		height: 22,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.7,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": true
	};
	if (type === "user") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "8",
			r: "3"
		}), /* @__PURE__ */ jsx("path", { d: "M5.5 20a6.5 6.5 0 0 1 13 0" })]
	});
	if (type === "message") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [/* @__PURE__ */ jsx("path", { d: "M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.5-.75L4 20l1.75-4.25A7.2 7.2 0 0 1 4.5 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" }), /* @__PURE__ */ jsx("path", { d: "M8 11.5h.01M12 11.5h.01M16 11.5h.01" })]
	});
	if (type === "bolt") return /* @__PURE__ */ jsx("svg", {
		...common,
		children: /* @__PURE__ */ jsx("path", { d: "M13 2 4.5 13h6L11 22l8.5-11h-6L13 2Z" })
	});
	if (type === "target") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [
			/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "8.5"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "4.5"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "1"
			})
		]
	});
	if (type === "sliders") return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [
			/* @__PURE__ */ jsx("path", { d: "M4 6h16M4 12h16M4 18h16" }),
			/* @__PURE__ */ jsx("circle", {
				cx: "9",
				cy: "6",
				r: "2"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "15",
				cy: "12",
				r: "2"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "10",
				cy: "18",
				r: "2"
			})
		]
	});
	return /* @__PURE__ */ jsxs("svg", {
		...common,
		children: [/* @__PURE__ */ jsx("path", { d: "M12 3 20 6v5.5c0 4.8-3.1 7.9-8 9.5-4.9-1.6-8-4.7-8-9.5V6l8-3Z" }), /* @__PURE__ */ jsx("path", { d: "m8.5 12 2.2 2.2 4.8-5" })]
	});
}
function Approach() {
	return /* @__PURE__ */ jsx("section", {
		id: "approach",
		className: "home-section approach-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading split-heading reveal-home",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow",
					children: "Why hire me"
				}), /* @__PURE__ */ jsx("h2", { children: "Why hire an independent growth partner?" })] }), /* @__PURE__ */ jsx("p", { children: "A senior, hands on consultant who brings the clarity and pace of a focused freelancer without the agency layers." })]
			}), /* @__PURE__ */ jsx("div", {
				className: "approach-grid",
				children: points.map(([title, text, icon]) => /* @__PURE__ */ jsxs("article", {
					className: "surface approach-card reveal-home",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "approach-mark",
							children: /* @__PURE__ */ jsx(ApproachIcon, { type: icon })
						}),
						/* @__PURE__ */ jsx("h3", { children: title }),
						/* @__PURE__ */ jsx("p", { children: text })
					]
				}, title))
			})]
		})
	});
}
// src/components/home/ServicesPreview.jsx
var services = [
	[
		"Google Ads",
		"Capture high intent searches from people already looking for what your business offers.",
		"More sales ready enquiries",
		"#google-ads"
	],
	[
		"Meta Ads",
		"Build demand on Facebook and Instagram with campaigns that earn attention and action.",
		"A stronger flow of leads",
		"#meta-ads"
	],
	[
		"SEO",
		"Increase visibility for the high value local searches that bring customers to your door.",
		"Durable organic demand",
		"#seo"
	],
	[
		"Website development",
		"Create a fast, credible website that makes the value clear and turns visits into enquiries.",
		"A conversion ready presence",
		"#website-development"
	],
	[
		"Lead generation",
		"Connect media, messaging and qualification into a predictable path to new conversations.",
		"A more dependable pipeline",
		"#lead-generation"
	],
	[
		"Landing page optimisation",
		"Reduce hesitation and make every paid click work harder for your business.",
		"A better conversion rate",
		"#landing-page-optimisation"
	]
];
function ServicesPreview() {
	return /* @__PURE__ */ jsx("section", {
		id: "services",
		className: "home-section services-preview",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "section-heading split-heading reveal-home",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "home-eyebrow",
						children: "Growth services"
					}), /* @__PURE__ */ jsx("h2", { children: "The services UAE businesses ask for most." })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", { children: [
						"Start with the service that removes your biggest growth constraint. Each engagement is connected to ",
						/* @__PURE__ */ jsx("a", {
							href: "https://www.linkedin.com/top-content/sales/identifying-high-value-leads/best-metrics-for-evaluating-lead-quality/",
							target: "_blank",
							rel: "noreferrer",
							children: "lead quality"
						}),
						", conversion and commercial outcomes."
					] }), /* @__PURE__ */ jsxs("a", {
						className: "text-link",
						href: "/services",
						children: ["View all services ", /* @__PURE__ */ jsx("span", { children: "→" })]
					})] })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "services-grid six",
					children: services.map(([title, text, outcome, anchor], index) => /* @__PURE__ */ jsxs("a", {
						className: "service-card reveal-home",
						href: `/services${anchor}`,
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "service-number",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h3", { children: title }),
								/* @__PURE__ */ jsx("p", { children: text }),
								/* @__PURE__ */ jsxs("strong", { children: [
									"Outcome: ",
									outcome,
									" ",
									/* @__PURE__ */ jsx("span", { children: "→" })
								] })
							] }),
							/* @__PURE__ */ jsx("span", {
								className: "service-arrow",
								children: "↗"
							})
						]
					}, title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "service-footer",
					children: [/* @__PURE__ */ jsxs("a", {
						className: "home-button secondary",
						href: "/services",
						children: ["See all services ", /* @__PURE__ */ jsx("span", { children: "→" })]
					}), /* @__PURE__ */ jsx("p", { children: "Explore all 10 services, outcomes and engagement options." })]
				})
			]
		})
	});
}
// src/components/home/Process.jsx
var steps = [
	[
		"01",
		"Discovery",
		"Understand goals, economics and constraints."
	],
	[
		"02",
		"Audit",
		"Review demand, campaigns, conversion paths and measurement."
	],
	[
		"03",
		"Strategy",
		"Choose the clearest route to meaningful progress."
	],
	[
		"04",
		"Implementation",
		"Build and deploy with quality controls in place."
	],
	[
		"05",
		"Optimisation",
		"Improve the signals that connect to qualified growth."
	],
	[
		"06",
		"Scale",
		"Expand proven activity with intent and control."
	]
];
function Process() {
	return /* @__PURE__ */ jsx("section", {
		className: "home-section process-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal-home",
				children: [/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow",
					children: "The growth framework"
				}), /* @__PURE__ */ jsx("h2", { children: "A methodical process, without the theatre." })]
			}), /* @__PURE__ */ jsx("ol", {
				className: "process-grid six",
				children: steps.map(([number, title, text]) => /* @__PURE__ */ jsxs("li", {
					className: "process-card reveal-home",
					children: [
						/* @__PURE__ */ jsx("span", { children: number }),
						/* @__PURE__ */ jsx("h3", { children: title }),
						/* @__PURE__ */ jsx("p", { children: text })
					]
				}, number))
			})]
		})
	});
}
// src/data/caseStudies.js
var caseStudies = [
	{
		slug: "crm-sales-qualified-lead",
		category: "CRM Analytics",
		title: "Turning 4,499 CRM leads into actionable marketing insights.",
		summary: "A 12 month HubSpot analysis designed to move performance measurement beyond lead volume and understand how acquisition translated into sales qualified opportunities.",
		period: "Aug 2025 — Jul 2026",
		metrics: [
			["4,499", "Total leads analyzed"],
			["609", "Sales Qualified Leads"],
			["13.5%", "Overall SQL rate"],
			["25.1%", "Best monthly SQL rate"]
		],
		focus: "HubSpot CRM · lead quality · performance marketing"
	},
	{
		slug: "meta-pixel-capi-signal-loss",
		category: "Meta Ads",
		title: "Half your conversions are invisible. The dashboard just doesn’t say so.",
		summary: "A draft analysis of Meta Pixel and Conversions API signal loss, showing why browser only tracking can underreport conversions and weaken measurement.",
		period: "2026 signal landscape",
		metrics: [["30 to 50%", "Typical signal loss cited"], ["95 to 99%", "Combined capture rate cited"]],
		focus: "Meta Pixel · Conversions API · attribution"
	},
	{
		slug: "healthcare-lead-pipeline",
		category: "Healthcare",
		title: "From expensive enquiries to a clearer patient pipeline.",
		summary: "Campaign structure, conversion pages and qualification rebuilt around high value treatments for a multi specialty clinic in Dubai.",
		period: "90 day engagement",
		metrics: [["+68%", "Qualified leads"], ["−36%", "Cost per lead"]],
		focus: "Google Ads · landing pages · tracking"
	},
	{
		slug: "education-lead-journey",
		category: "Education",
		title: "A lead journey that improved volume and intent.",
		summary: "Decision friction was mapped first, then a sharper offer and automated nurturing sequence were introduced for a UAE education provider.",
		period: "120 day engagement",
		metrics: [["+54%", "Enrolment enquiries"], ["+22%", "Show up rate"]],
		focus: "Meta Ads · offer · automation"
	},
	{
		slug: "professional-services-growth",
		category: "Professional services",
		title: "More of the right conversations from the same market.",
		summary: "Demand capture and attribution were tightened to show which enquiries became genuine opportunities for a Dubai advisory firm.",
		period: "60 day sprint",
		metrics: [["5.7x", "ROAS"], ["+41%", "Sales ready leads"]],
		focus: "Search · CRM · attribution"
	}
];
var crmMonthlyData = [
	[
		"Aug 2025",
		86,
		0,
		7
	],
	[
		"Sep 2025",
		197,
		47,
		66
	],
	[
		"Oct 2025",
		299,
		53,
		122
	],
	[
		"Nov 2025",
		338,
		57,
		105
	],
	[
		"Dec 2025",
		310,
		45,
		101
	],
	[
		"Jan 2026",
		351,
		55,
		111
	],
	[
		"Feb 2026",
		271,
		48,
		88
	],
	[
		"Mar 2026",
		747,
		121,
		224
	],
	[
		"Apr 2026",
		477,
		50,
		182
	],
	[
		"May 2026",
		400,
		34,
		168
	],
	[
		"Jun 2026",
		550,
		60,
		217
	],
	[
		"Jul 2026",
		553,
		139,
		173
	]
].map(([month, total, qualified, notQualified]) => ({
	month,
	total,
	qualified,
	notQualified,
	other: total - qualified - notQualified,
	rate: total ? +(qualified / total * 100).toFixed(1) : 0
}));
// src/components/home/CaseStudiesPreview.jsx
var publishedCaseStudies = /* @__PURE__ */ new Set(["crm-sales-qualified-lead", "meta-pixel-capi-signal-loss"]);
function CaseStudiesPreview() {
	const studies = caseStudies.filter((study) => publishedCaseStudies.has(study.slug)).slice(0, 3);
	return /* @__PURE__ */ jsx("section", {
		id: "case-studies",
		className: "home-section case-studies-preview",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading split-heading reveal-home",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow",
					children: "Selected case studies"
				}), /* @__PURE__ */ jsx("h2", { children: "Work measured in business impact." })] }), /* @__PURE__ */ jsxs(Link, {
					className: "text-link",
					to: "/case-studies",
					children: ["View all case studies ", /* @__PURE__ */ jsx("span", { children: "→" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "case-grid",
				children: studies.map((study) => {
					const [metric1, label1] = study.metrics?.[0] || ["", ""];
					const [metric2, label2] = study.metrics?.[1] || ["", ""];
					return /* @__PURE__ */ jsxs("article", {
						className: "case-card reveal-home",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "case-graph",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: study.category }), /* @__PURE__ */ jsx("small", { children: study.period })] }),
								/* @__PURE__ */ jsx("div", {
									className: "graph-line",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx("i", {})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "case-metrics",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: label1 }), /* @__PURE__ */ jsx("strong", { children: metric1 })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: label2 }), /* @__PURE__ */ jsx("strong", { children: metric2 })] })]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "case-body",
							children: [
								/* @__PURE__ */ jsx("p", { children: study.focus.replaceAll(" · ", " · ") }),
								/* @__PURE__ */ jsx("h3", { children: study.title }),
								/* @__PURE__ */ jsx("span", { children: study.summary }),
								/* @__PURE__ */ jsxs(Link, {
									to: `/case-studies/${study.slug}`,
									children: ["View case study ", /* @__PURE__ */ jsx("span", { children: "→" })]
								})
							]
						})]
					}, study.slug);
				})
			})]
		})
	});
}
// src/components/home/Testimonials.jsx
var googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJn3EsesSYBK4RKmOOSOVoEI8";
var testimonials = [
	[
		"MA",
		"Muhammed Ashar",
		"Direct Manager · February 13, 2026",
		"I have had the pleasure of working with Aswin and can confidently say that he is exceptional at problem solving and strategic thinking. He brings a rare combination of analytical depth and creative insight to performance marketing.",
		"https://www.linkedin.com/in/ashwin-james",
		"https://media.licdn.com/dms/image/v2/D5603AQF5GgupwAL3mA/profile-displayphoto-scale_100_100/B56Z.vCjy3HYAc-/0/1785348112574?e=1788998400&v=beta&t=o8PMTbNRp5saAyrzfeUAR_q6XP1iaUKjEUvQ4r58z5E"
	],
	[
		"DS",
		"Deeksha S",
		"Operations Manager · Reliance · July 13, 2026",
		"I had the pleasure of working closely with Ashwin at Reliance, and it was a great experience collaborating with someone who is both highly skilled and genuinely committed to delivering results.",
		"https://www.linkedin.com/in/ashwin-james",
		"https://media.licdn.com/dms/image/v2/D4D03AQF7KrgZy4uKWQ/profile-displayphoto-scale_100_100/B4DZtv2UkkIEAc-/0/1767108071198?e=1788998400&v=beta&t=mX2vvhQjNGw-RpX86Hl0CV9-lJr4nG8ei90Lqc5JmAk"
	],
	[
		"HF",
		"Highrange Flavours Idukki",
		"Google Review",
		"Really happy with the work Ashwin did for Highrange Flavours Idukki. He helped us build our website and is also handling our digital marketing. What I liked most is that he focuses on actual results, not...",
		"https://goo.gl/maps/qUUn8BM3J9aDGxPD9?g_st=ac",
		"https://highrangeflavoursidukki.com"
	],
	[
		"CO",
		"Commercial Director",
		"Professional services, Dubai",
		"The reporting is refreshingly simple: we know the numbers, the decisions and the next move. That is rare."
	],
	[
		"GM",
		"General Manager",
		"Real estate, Dubai",
		"The campaign became far easier to manage because we could finally see what was converting and why."
	],
	[
		"OD",
		"Operations Director",
		"Recruitment, UAE",
		"The process was calm, direct and genuinely helpful. We left each review knowing exactly what to improve next."
	]
];
function Cards({ hidden = false }) {
	return /* @__PURE__ */ jsx("div", {
		className: "testimonial-set",
		"aria-hidden": hidden,
		children: testimonials.map(([initials, role, company, quote, url, image, websiteUrl]) => /* @__PURE__ */ jsxs("figure", {
			className: "testimonial-card surface",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "stars",
				"aria-label": "Five out of five stars",
				children: "★★★★★"
			}), /* @__PURE__ */ jsxs("blockquote", { children: [
				"“",
				quote,
				"”"
			] })] }), /* @__PURE__ */ jsxs("figcaption", { children: [image ? /* @__PURE__ */ jsx("a", {
				className: "testimonial-profile",
				href: url,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": `View ${role} LinkedIn profile`,
				children: /* @__PURE__ */ jsx("img", {
					src: image,
					alt: "",
					loading: "lazy",
					referrerPolicy: "no-referrer"
				})
			}) : /* @__PURE__ */ jsx("span", { children: initials }), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("strong", { children: websiteUrl ? /* @__PURE__ */ jsx("a", {
					href: websiteUrl,
					target: "_blank",
					rel: "noreferrer",
					children: role
				}) : role }),
				/* @__PURE__ */ jsx("small", { children: company }),
				url && /* @__PURE__ */ jsx("a", {
					className: "recommendation-link",
					href: url,
					target: "_blank",
					rel: "noreferrer",
					children: image ? "LinkedIn · View Recommedation ↗" : "Google · Read full review ↗"
				})
			] })] })]
		}, `${initials}-${company}`))
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsxs("section", {
		id: "testimonials",
		className: "home-section testimonials-section",
		children: [/* @__PURE__ */ jsx("div", {
			className: "container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "section-heading split-heading reveal-home",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow",
					children: "Client perspectives"
				}), /* @__PURE__ */ jsx("h2", { children: "Results matter. So does the way we get there." })] }), /* @__PURE__ */ jsxs("div", {
					className: "testimonials-heading-actions",
					children: [/* @__PURE__ */ jsx("p", { children: "A few words from growth minded teams." }), /* @__PURE__ */ jsx("div", {
						className: "google-review-actions",
						children: /* @__PURE__ */ jsx("a", {
							className: "google-review-button",
							href: googleReviewUrl,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Leave a Google review",
							children: "Leave a Google review ↗"
						})
					})]
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "testimonial-marquee",
			"aria-label": "Client reviews",
			children: /* @__PURE__ */ jsxs("div", {
				className: "testimonial-track",
				children: [/* @__PURE__ */ jsx(Cards, {}), /* @__PURE__ */ jsx(Cards, { hidden: true })]
			})
		})]
	});
}
// src/components/home/FAQ.jsx
var faqs = [
	["What budget do I need?", "The right budget depends on your business, industry and objectives. I recommend a realistic level of spend during the consultation, never a one size fits all figure."],
	["Do you only work with UAE businesses?", "I primarily work with UAE businesses, as well as companies targeting the UAE market or expanding into the region."],
	["Do you work on monthly retainers?", "Yes. Most engagements are monthly retainers so campaigns, reporting and strategy can improve continuously."],
	["How quickly will I see results?", "Most campaigns generate meaningful insight in the first few weeks. Sustainable improvement develops over the following months as we learn and optimise."],
	["Which advertising platforms do you specialize in?", "I specialise in Meta Ads and Google Ads, with strategies built around qualified leads and ongoing optimisation."],
	["What industries do you work with?", "I work with immigration, healthcare, wellness, professional services and other lead generation businesses. The approach adapts to each customer journey."],
	["Do you manage both Google Ads and Meta Ads?", "Yes. I align both platforms into one lead generation system rather than managing them as separate channels."],
	["Can you audit my existing ad campaigns?", "Absolutely. I review accounts, targeting, creatives, tracking, landing pages and the conversion funnel before recommending the most useful changes."],
	["What makes your approach different?", "I look beyond ad metrics to the full system: targeting, offers, landing pages, tracking, CRM processes and lead quality."],
	["How do you measure campaign success?", "Success is measured through qualified leads, cost per lead, conversion rate, return on ad spend and overall commercial performance, not vanity metrics."],
	["Will I have access to my ad accounts and campaign data?", "Yes. You retain ownership of your ad accounts and data, with regular reporting and complete visibility into performance."],
	["Do you help with landing pages and conversion optimisation?", "Yes. I review landing pages, user experience, conversion paths and tracking to improve the return from every campaign."],
	["What is your onboarding process?", "We begin with a discovery consultation and audit, then build a tailored strategy, implement improvements and optimise against real data."],
	["How do I get started?", "Book a free consultation and we will discuss your goals, challenges and whether we are the right fit."]
];
var faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map(([question, answer]) => ({
		"@type": "Question",
		name: question,
		acceptedAnswer: {
			"@type": "Answer",
			text: answer
		}
	}))
};
function FAQ() {
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsxs("section", {
		id: "faq",
		className: "home-section faq-section",
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify(faqSchema)
		}), /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-heading reveal-home",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "home-eyebrow",
						children: "Frequently asked questions"
					}),
					/* @__PURE__ */ jsx("h2", { children: "A clear start to a considered partnership." }),
					/* @__PURE__ */ jsx("p", { children: "Clear answers to the questions that matter before you invest in a growth partnership." }),
					/* @__PURE__ */ jsxs("a", {
						className: "text-link",
						href: whatsappUrl,
						target: "_blank",
						rel: "noreferrer",
						children: ["Ask a question on WhatsApp ", /* @__PURE__ */ jsx("span", { children: "→" })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "faq-grid reveal-home",
				children: faqs.map(([question, answer], index) => /* @__PURE__ */ jsxs("div", {
					className: `faq-item${open === index ? " active" : ""}`,
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-expanded": open === index,
						onClick: () => setOpen(open === index ? -1 : index),
						children: [/* @__PURE__ */ jsx("span", { children: question }), /* @__PURE__ */ jsx("span", {
							className: "faq-icon",
							children: "+"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "faq-answer",
						children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: answer }) })
					})]
				}, question))
			})]
		})]
	});
}
// src/data/blog.js
var blogPosts = [
	{
		slug: "performance-marketing-salary",
		category: "Performance Marketing",
		title: "Is Performance Marketing a High Paying Career in 2026?",
		excerpt: "Explore performance marketing salary in 2026, Dubai career opportunities, essential skills and how professionals can grow their earning potential.",
		date: "Sep 29, 2026",
		readTime: "10 min read"
	},
	{
		slug: "crm-data-for-paid-ads",
		category: "Performance Marketing",
		title: "How CRM Data Can Improve Meta and Google Ads Optimisation",
		excerpt: "Learn how CRM data for paid ads connects lead quality, first party data and campaign optimisation across Meta Ads and Google Ads.",
		date: "Sep 15, 2026",
		readTime: "14 min read"
	},
	{
		slug: "customer-acquisition-cost-vs-cpl",
		category: "Performance Marketing",
		title: "What Is Customer Acquisition Cost and Why Does It Matter More Than CPL?",
		excerpt: "Understand customer acquisition cost, CAC vs CPL, why a lower CPL can produce a higher CAC, and how to connect paid acquisition with customer outcomes.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "paid-advertising-roi",
		category: "Performance Marketing",
		title: "How to Measure the Real ROI of Paid Advertising",
		excerpt: "A practical framework for measuring paid advertising ROI beyond clicks, leads and ROAS by connecting advertising spend with qualification, customers, revenue and contribution.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "ga4-performance-marketing",
		category: "Analytics",
		title: "GA4 for Performance Marketers: What Should You Actually Track?",
		excerpt: "A practical framework for deciding which GA4 signals matter for acquisition, optimisation, lead quality and business outcomes.",
		date: "Sep 15, 2026",
		readTime: "14 min read"
	},
	{
		slug: "conversion-tracking-performance-marketing",
		category: "Performance Marketing",
		title: "Why Conversion Tracking Matters in Performance Marketing",
		excerpt: "Understand why conversion tracking matters in performance marketing, how it changes optimisation decisions and how performance marketing analytics connects advertising activity with business outcomes.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "crm-lead-tracking-paid-ads",
		category: "Lead Gen",
		title: "How to Connect Paid Ads With CRM Data for Better Lead Quality",
		excerpt: "Learn how CRM lead tracking, lead scoring and HubSpot can connect paid advertising with qualification, sales outcomes and customer data to improve lead quality.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "marketing-sales-funnel-sales-pipeline",
		category: "Performance Marketing",
		title: "Why Your Marketing Sales Funnel Works but Your Sales Pipeline Does Not",
		excerpt: "Understand why marketing can generate leads while the sales pipeline struggles, and how qualification, CRM, handoffs and sales and marketing alignment reveal the real bottleneck.",
		date: "Sep 15, 2026",
		readTime: "14 min read"
	},
	{
		slug: "cost-per-lead-vs-cost-per-customer",
		category: "Performance Marketing",
		title: "Cost Per Lead vs Cost Per Customer: Which Should You Optimise For?",
		excerpt: "Understand the difference between CPL and customer acquisition cost, when each metric is useful, and how to optimise lead generation around customer outcomes.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "lead-form-optimisation",
		category: "Lead Gen",
		title: "How Lead Forms Affect Paid Advertising Performance",
		excerpt: "Learn how lead forms affect paid advertising performance, lead quality, CPL, qualification and downstream campaign outcomes, with a practical lead form optimisation framework.",
		date: "Sep 15, 2026",
		readTime: "11 min read"
	},
	{
		slug: "lead-generation-vs-lead-qualification",
		category: "Lead Gen",
		title: "Lead Generation vs Lead Qualification: What Is the Difference?",
		excerpt: "Understand the difference between lead generation and lead qualification, how they work together, which metrics matter and how to connect marketing with sales outcomes.",
		date: "Sep 15, 2026",
		readTime: "10 min read"
	},
	{
		slug: "google-ads-conversion-tracking",
		category: "Google Ads",
		title: "Google Ads Conversion Tracking: What Businesses Need to Measure",
		excerpt: "Learn what Google Ads conversion tracking should measure, how GA4 and Google Tag Manager fit together, and how to diagnose tracking problems.",
		date: "Sep 15, 2026",
		readTime: "14 min read"
	},
	{
		slug: "google-ads-lead-quality",
		category: "Google Ads",
		title: "How to Optimise Google Ads for Qualified Leads Instead of More Leads",
		excerpt: "Learn how to improve Google Ads lead quality by aligning search intent, ad messaging, landing pages, qualification, conversion tracking and CRM outcomes.",
		date: "Sep 15, 2026",
		readTime: "14 min read"
	},
	{
		slug: "google-ads-keyword-intent",
		category: "Google Ads",
		title: "Google Ads Keyword Intent: Informational vs Commercial vs Transactional",
		excerpt: "Learn how to classify Google Ads keyword intent, use search intent to evaluate informational, commercial and transactional searches, and match keywords with campaigns, ads, landing pages and conversion goals.",
		date: "Sep 15, 2026",
		readTime: "11 min read"
	},
	{
		slug: "google-ads-clicks-not-turning-into-leads",
		category: "Google Ads",
		title: "Why Google Ads Clicks Are Not Turning Into Leads",
		excerpt: "A practical diagnostic framework for finding why Google Ads clicks are not becoming leads, covering search intent, landing pages, offers, forms, conversion tracking and lead quality.",
		date: "Sep 15, 2026",
		readTime: "13 min read"
	},
	{
		slug: "google-search-ads-lead-generation-campaign",
		category: "Google Ads",
		title: "How to Build a Google Search Ads Campaign for Lead Generation",
		excerpt: "A practical framework for building Google Search Ads campaigns around search intent, campaign structure, keywords, ads, landing pages, tracking and lead quality.",
		date: "Sep 15, 2026",
		readTime: "15 min read"
	},
	{
		slug: "google-ads-vs-meta-ads",
		category: "Performance Marketing",
		title: "Google Ads vs Meta Ads for Lead Generation: Which Is Better for UAE Businesses?",
		excerpt: "A practical comparison of Google Ads vs Meta Ads for lead generation, covering intent, creative, lead quality, budgets, measurement and UAE use cases.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "google-ads-lead-generation-uae",
		category: "Google Ads",
		title: "Google Ads for Lead Generation: A Practical Guide for UAE Businesses",
		excerpt: "A practical guide for UAE businesses covering search intent, campaign structure, keywords, landing pages, tracking, lead quality, budgets and optimisation.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "meta-ads-campaign-structure",
		category: "Meta Ads",
		title: "How to Structure Meta Ads Campaigns for Lead Generation",
		excerpt: "A practical guide to Meta Ads campaign structure, Facebook Ads campaign structure, ad creative testing and Facebook Ads testing for lead generation.",
		date: "Sep 15, 2026",
		readTime: "14 min read"
	},
	{
		slug: "meta-ads-lead-generation-uae",
		category: "Meta Ads",
		title: "Meta Ads for Lead Generation: A Practical Guide for UAE Businesses",
		excerpt: "A practical guide for UAE businesses covering Meta Ads lead generation, Facebook Ads lead generation, Instagram Ads, creative, lead forms, qualification and measurement.",
		date: "Sep 15, 2026",
		readTime: "12 min read"
	},
	{
		slug: "performance-marketing-metrics",
		category: "Performance Marketing",
		title: "What Should You Measure in Performance Marketing?",
		excerpt: "Learn which performance marketing metrics matter, including CAC, CPL, ROAS, CPA and conversion rate, and how to connect them to business outcomes.",
		date: "Sep 14, 2026",
		readTime: "11 min read"
	},
	{
		slug: "performance-marketing-strategy-uae",
		category: "Performance Marketing",
		title: "How to Build a Performance Marketing Strategy for a UAE Business",
		excerpt: "A practical framework for UAE businesses covering objectives, audiences, channels, conversion tracking, budgets, lead quality, CRM and performance optimisation.",
		date: "Sep 14, 2026",
		readTime: "12 min read"
	},
	{
		slug: "performance-marketing-vs-digital-marketing",
		category: "Performance Marketing",
		title: "Performance Marketing vs Digital Marketing: What Is the Difference?",
		excerpt: "A practical comparison of performance marketing and digital marketing, including their scope, channels, measurement, use cases and how businesses can combine both approaches.",
		date: "Sep 14, 2026",
		readTime: "11 min read"
	},
	{
		slug: "performance-marketing-dubai",
		category: "Performance Marketing",
		title: "What Is Performance Marketing? A Dubai Business Guide",
		excerpt: "Learn what performance marketing is, how it works, which metrics matter, and how Dubai businesses can build measurable acquisition campaigns.",
		date: "Sep 14, 2026",
		readTime: "10 min read"
	},
	{
		slug: "free-invoice-generator-for-freelancers",
		category: "Freelancing",
		title: "Free Invoice Generator for Freelancers: Create Professional Invoices",
		excerpt: "Learn why freelancers need professional invoices, what a good invoice should include and how proper invoicing can improve cash flow, client trust and business organisation.",
		date: "Sep 14, 2026",
		readTime: "9 min read"
	},
	{
		slug: "performance-marketing-specialist-in-dubai",
		category: "Performance Marketing",
		title: "What Is a Performance Marketing Specialist and What Do They Do?",
		excerpt: "A detailed guide to the role, responsibilities, metrics, tools, skills and business thinking behind modern performance marketing.",
		date: "Sep 10, 2026",
		readTime: "12 min read"
	},
	{
		slug: "paid-ads-specialist-uae",
		category: "Paid Advertising",
		title: "Paid Ads Specialist in UAE: What They Do, What They Manage and How to Choose One",
		excerpt: "A practical guide to paid advertising for UAE businesses, from Meta Ads and Google Ads to lead quality, CRM, sales and revenue.",
		date: "Sep 9, 2026",
		readTime: "10 min read"
	},
	{
		slug: "freelance-marketing-consultant-uae",
		category: "Marketing Strategy",
		title: "Freelance Marketing Consultant in UAE: What They Do, When You Need One and How to Choose",
		excerpt: "A practical guide for UAE businesses on what a freelance marketing consultant does, when to hire one, consultant versus agency differences, and how marketing connects acquisition to revenue.",
		date: "Sep 9, 2026",
		readTime: "8 min read"
	},
	{
		slug: "meta-ads-generating-leads-but-not-sales",
		category: "Meta Ads",
		title: "Why Your Meta Ads Are Generating Leads but Not Sales",
		excerpt: "Meta Ads bringing in leads but not customers? Learn why cheap leads don't convert and how targeting, forms, qualification, CRM and revenue tracking can reveal the real bottleneck.",
		date: "Sep 9, 2026",
		readTime: "7 min read"
	},
	{
		slug: "creative-is-the-new-targeting",
		category: "Meta Ads Strategy",
		title: "Creative Is the New Targeting: How the Right Message Finds the Right Customer",
		excerpt: "Targeting and creative are no longer separate levers in Meta Ads. Learn how the right message pre-qualifies leads, shapes response, and improves lead quality — not just CTR.",
		date: "Sep 3, 2026",
		readTime: "12 min read"
	},
	{
		slug: "lead-generation-right-leads",
		category: "Lead Gen",
		title: "Lead Generation Is Not About More Leads. It's About the Right Leads.",
		excerpt: "Cheap leads aren't the same as good leads. Learn how targeting, creative, offer, and form design work together as a filtering system for lead quality.",
		date: "Sep 3, 2026",
		readTime: "9 min read"
	},
	{
		slug: "cpm-explained",
		category: "Performance Marketing",
		title: "CPM Explained: What It Really Measures (And What It Doesn't)",
		excerpt: "CPM shows up in every ads dashboard, but it's often misread. Here's what CPM actually measures, why it moves, and how to use it correctly.",
		date: "Aug 31, 2026",
		readTime: "8 min read"
	},
	{
		slug: "ctr-explained",
		category: "Performance Marketing",
		title: "CTR Explained: Why This One Metric Can Make or Break Your Ad Campaign",
		excerpt: "What click-through rate actually measures, why it matters, what high and low CTR really indicate, and how to improve it without losing sight of conversions and business outcomes.",
		date: "Aug 31, 2026",
		readTime: "10 min read"
	},
	{
		slug: "content-angles-strategy",
		category: "Content Strategy",
		title: "There Are No Boring Topics, Only Boring Angles",
		excerpt: "A practical framework for turning one topic into multiple useful pieces of content by starting with audience questions, tensions, objections, desires and intent.",
		date: "Aug 24, 2026",
		readTime: "18 min read"
	},
	{
		slug: "increase-average-order-value",
		category: "CRO & Ecommerce",
		title: "10 Practical Ways to Increase Average Order Value Without Simply Raising Prices",
		excerpt: "A practical framework for increasing AOV through bundles, upsells, contextual cross sells, shipping thresholds and smarter funnel design without treating AOV as a vanity metric.",
		date: "Aug 24, 2026",
		readTime: "16 min read"
	},
	{
		slug: "marketing-concepts-modern-marketers-should-know",
		category: "Marketing Psychology",
		title: "17 Marketing Psychology Concepts Every Modern Marketer Should Know",
		excerpt: "A practical guide to goal progress, framing, choice architecture, anchoring, loss aversion, processing fluency, scarcity and other behavioural concepts with marketing examples and visual frameworks.",
		date: "Aug 24, 2026",
		readTime: "22 min read"
	},
	{
		slug: "seo-ai-search-entity-authority-2026",
		category: "SEO & AI Search",
		title: "SEO Is No Longer Just About Keywords: How Search Engines and AI Understand Websites in 2026",
		excerpt: "What my own AI search experiment taught me about intent, entities, evidence, authority, topical relevance and building a discoverable professional identity.",
		date: "Aug 24, 2026",
		readTime: "14 min read"
	},
	{
		slug: "how-meta-ads-algorithm-works",
		category: "Meta Ads",
		title: "How Meta's Ad Algorithm Actually Works in 2026",
		excerpt: "A plain English breakdown of retrieval, light ranking, heavy ranking and the auction, plus what Meta's Total Value model means for advertisers.",
		date: "Aug 21, 2026",
		readTime: "9 min read"
	},
	{
		slug: "hormozi-meta-ads-strategy",
		category: "Meta Ads Strategy",
		title: "Steal Like an Artist: What Alex Hormozi’s Meta Ads Strategy Reveals About Creative Targeting",
		excerpt: "A practical analysis of business specific callouts, creative volume, format diversity and what the Andromeda era changes about Meta Ads creative strategy.",
		date: "Aug 21, 2026",
		readTime: "10 min read"
	},
	{
		slug: "more-leads-revenue-didnt-move",
		category: "Lead Generation",
		title: "More leads walked in. Revenue didn't move.",
		excerpt: "A look at 2026 funnel benchmarks and why lead quality, qualification and speed can matter more than simply increasing lead volume.",
		date: "Aug 21, 2026",
		readTime: "8 min read"
	}
];
// src/components/home/Insights.jsx
function Insights() {
	const publishedPosts = blogPosts.filter((post) => post.date !== "Coming soon").slice(0, 3);
	return /* @__PURE__ */ jsx("section", {
		id: "insights",
		className: "home-section insights-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx("div", {
				className: "section-heading split-heading reveal-home",
				children: /* @__PURE__ */ jsxs("div", {
					className: "insights-heading",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "home-eyebrow",
							children: "Insights"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Useful thinking for better growth decisions." }),
						/* @__PURE__ */ jsxs(Link, {
							className: "text-link insights-all-link",
							to: "/blog",
							children: ["View all insights ", /* @__PURE__ */ jsx("span", { children: "→" })]
						})
					]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "insights-grid",
				children: publishedPosts.map((post) => /* @__PURE__ */ jsxs("article", {
					className: "insight-card reveal-home",
					children: [
						/* @__PURE__ */ jsxs("p", { children: [
							post.category,
							" · ",
							post.readTime
						] }),
						/* @__PURE__ */ jsx("h3", { children: post.title }),
						/* @__PURE__ */ jsx("span", { children: post.excerpt }),
						/* @__PURE__ */ jsxs(Link, {
							to: `/blog/${post.slug}`,
							children: ["Read article ", /* @__PURE__ */ jsx("span", { children: "→" })]
						})
					]
				}, post.slug))
			})]
		})
	});
}
// src/config/emailjs.js
var emailjsConfig = {
	publicKey: "RjE2W0GjtX8CR4F7x",
	serviceId: "service_8ctr8rf",
	templateId: "template_fnhfcfn"
};
// src/components/home/ResourceLead.jsx
function ResourceLead() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle");
	const [message, setMessage] = useState("No spam. Just the checklist and occasional useful ideas.");
	const submit = async (event) => {
		event.preventDefault();
		if (!email.trim() || !email.includes("@")) {
			setMessage("Please enter a valid work email.");
			return;
		}
		setStatus("sending");
		setMessage("Sending your checklist request…");
		try {
			await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
				name: "Resource request",
				email,
				phone: "",
				company: "",
				service: "Meta Ads Performance Checklist",
				message: "Requested the Meta Ads Performance Checklist from the website."
			}, { publicKey: emailjsConfig.publicKey });
			setStatus("success");
			setMessage("Thanks. Your checklist request has been sent successfully.");
			setEmail("");
		} catch (error) {
			console.error("Resource request failed:", error);
			setStatus("error");
			setMessage("Something went wrong. Please try again or contact me directly.");
		}
	};
	return /* @__PURE__ */ jsx("section", {
		className: "home-section resource-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container resource-grid",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "field-note reveal-home",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", { children: "FIELD NOTE 01" }),
					/* @__PURE__ */ jsx("span", {}),
					/* @__PURE__ */ jsxs("h3", { children: [
						"Meta Ads",
						/* @__PURE__ */ jsx("br", {}),
						"Performance",
						/* @__PURE__ */ jsx("br", {}),
						"Checklist"
					] }),
					/* @__PURE__ */ jsx("small", { children: "A practical review for businesses investing in paid social." })
				] }), /* @__PURE__ */ jsxs("footer", { children: [/* @__PURE__ */ jsx("b", { children: "ASHWIN JAMES" }), /* @__PURE__ */ jsx("b", { children: "2026" })] })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "reveal-home",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "home-eyebrow",
						children: "Free resource"
					}),
					/* @__PURE__ */ jsx("h2", { children: "A practical checkpoint for your Meta Ads account." }),
					/* @__PURE__ */ jsx("p", {
						className: "resource-copy",
						children: "Use this focused checklist to spot the common performance gaps that quietly erode lead quality, efficiency and confidence in paid social."
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: submit,
						children: [
							/* @__PURE__ */ jsx("label", {
								className: "sr-only",
								htmlFor: "resource-email",
								children: "Work email"
							}),
							/* @__PURE__ */ jsx("input", {
								id: "resource-email",
								required: true,
								type: "email",
								value: email,
								onChange: (event) => setEmail(event.target.value),
								placeholder: "Your work email",
								autoComplete: "email"
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: status === "sending",
								children: status === "sending" ? "Sending…" : "Download checklist"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "resource-message",
						"aria-live": "polite",
						children: message
					})
				]
			})]
		})
	});
}
// src/components/home/HomeCTA.jsx
var calendlyUrl = "https://calendly.com/ashwinjames-marketing/30min";
function HomeCTA() {
	return /* @__PURE__ */ jsxs("section", {
		id: "consultation",
		className: "home-cta",
		children: [/* @__PURE__ */ jsx("div", { className: "home-cta-glow" }), /* @__PURE__ */ jsxs("div", {
			className: "container home-cta-inner",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow reveal-home",
					children: "A focused first conversation"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "reveal-home",
					children: "Ready to generate better leads?"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "reveal-home",
					children: "Let’s discuss your business, identify the clearest growth opportunities, and build a marketing system that delivers measurable results."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "home-cta-actions reveal-home",
					children: [/* @__PURE__ */ jsxs("a", {
						className: "home-button primary",
						href: calendlyUrl,
						target: "_blank",
						rel: "noreferrer",
						children: ["Book a strategy call ", /* @__PURE__ */ jsx("span", { children: "↗" })]
					}), /* @__PURE__ */ jsxs("a", {
						className: "home-button secondary",
						href: whatsappUrl,
						target: "_blank",
						rel: "noreferrer",
						children: ["Chat on WhatsApp ", /* @__PURE__ */ jsx("span", { children: "●" })]
					})]
				}),
				/* @__PURE__ */ jsx("small", {
					className: "reveal-home",
					children: "No hard sell. Just a useful conversation about what is possible."
				})
			]
		})]
	});
}
// src/components/home/ExpertiseTags.jsx
var tags = [
	["Performance Marketing", "/services/performance-marketing-specialist"],
	["Performance Marketing Consultant", "/blog/freelance-marketing-consultant-uae"],
	["Digital Marketing Consultant", "/services/digital-marketing-consultant-dubai"],
	["Performance Marketing Specialist", "/services/performance-marketing-specialist"],
	["Performance Marketing Specialist in Dubai", "/performance-marketing-specialist-in-dubai"],
	["Performance Marketing Services", "/services"],
	["Performance Marketing UAE", "/blog/performance-marketing-strategy-uae"],
	["Performance Marketing Dubai", "/performance-marketing-specialist-in-dubai"],
	["Marketing Specialist", "/about"],
	["Growth Marketing", "/services/performance-marketing-specialist"],
	["Paid Media", "/services"],
	["Meta Ads", "/services/meta-ads"],
	["Google Ads", "/services"],
	["Lead Generation", "/services/lead-generation"],
	["Conversion Rate Optimization", "/services/cro"],
	["Landing Page Optimization", "/services"],
	["Marketing Funnel Strategy", "/blog/marketing-sales-funnel-sales-pipeline"],
	["Campaign Management", "/services/performance-marketing-specialist"],
	["Marketing Analytics", "/blog/performance-marketing-metrics"],
	["Google Analytics 4", "/blog/ga4-performance-marketing"],
	["Google Tag Manager", "/blog/conversion-tracking-performance-marketing"],
	["HubSpot CRM", "/services/hubspot-crm-integration"],
	["Conversion Tracking", "/blog/conversion-tracking-performance-marketing"],
	["UTM Tracking", "/resources/utm-builder"],
	["A/B Testing", "/services/cro"],
	["Retargeting", "/services/meta-ads"],
	["Audience Research", "/blog/how-meta-ads-algorithm-works"],
	["Creative Testing", "/blog/creative-is-the-new-targeting"],
	["Reporting & Attribution", "/blog/why-attribution-matters-performance-marketing"],
	["SEO Strategy", "/blog/seo-ai-search-entity-authority-2026"],
	["Digital Marketing", "/blog/performance-marketing-vs-digital-marketing"]
];
function ExpertiseTags() {
	return /* @__PURE__ */ jsx("section", {
		className: "expertise-tags-section",
		"aria-labelledby": "expertise-tags-title",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "home-eyebrow",
					children: "Services & Expertise"
				}),
				/* @__PURE__ */ jsx("h2", {
					id: "expertise-tags-title",
					children: "The skills behind measurable growth"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "expertise-tags-copy",
					children: "From campaign strategy to tracking and conversion optimization, I connect the pieces that help marketing perform better."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "expertise-tags-list",
					children: tags.map(([tag, to]) => /* @__PURE__ */ jsx(Link, {
						className: "expertise-pill",
						to,
						children: tag
					}, tag))
				})
			]
		})
	});
}
// src/pages/Home.jsx
function Home() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(ProblemSection, {}),
		/* @__PURE__ */ jsx(BestFit, {}),
		/* @__PURE__ */ jsx(Results, {}),
		/* @__PURE__ */ jsx(AboutPreview, {}),
		/* @__PURE__ */ jsx(Approach, {}),
		/* @__PURE__ */ jsx(ServicesPreview, {}),
		/* @__PURE__ */ jsx(Process, {}),
		/* @__PURE__ */ jsx(CaseStudiesPreview, {}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx(FAQ, {}),
		/* @__PURE__ */ jsx(Insights, {}),
		/* @__PURE__ */ jsx(ResourceLead, {}),
		/* @__PURE__ */ jsx(ExpertiseTags, {}),
		/* @__PURE__ */ jsx(HomeCTA, {})
	] });
}
// src/App.jsx
var lazyWithStyles = (loadPage, loadStyles = []) => lazy(async () => {
	await Promise.all(loadStyles.map((loadStyle) => loadStyle()));
	return loadPage();
});
var About = lazyWithStyles(() => import("./assets/About-OObxavB9.js"), [
	() => Promise.resolve({                 }),
	() => Promise.resolve({                           }),
	() => Promise.resolve({                         }),
	() => Promise.resolve({                               }),
	() => Promise.resolve({                  })
]);
var Services = lazyWithStyles(() => import("./assets/Services-Dbkk_u3y.js"), [() => Promise.resolve({                    })]);
var ServiceDetail = lazyWithStyles(() => import("./assets/ServiceDetail-C75fRkzM.js"), [() => Promise.resolve({                    }), () => Promise.resolve({                          })]);
var ServiceLanding = lazyWithStyles(() => import("./assets/ServiceLanding-DwNkjbqK.js"), [() => Promise.resolve({                           })]);
var MetaAdsService = lazyWithStyles(() => import("./assets/MetaAdsService-BCCp6VL0.js"), [() => Promise.resolve({                    }), () => Promise.resolve({                          })]);
var PerformanceMarketingService = lazyWithStyles(() => import("./assets/PerformanceMarketingService-DwOA0KGj.js"), [() => Promise.resolve({                    }), () => Promise.resolve({                          })]);
var PerformanceSpecialistDubai = lazy(() => import("./assets/PerformanceSpecialistDubai-C3wL_Mbu.js"));
var DigitalMarketingConsultantDubai = lazy(() => import("./assets/DigitalMarketingConsultantDubai-BCIptfpe.js"));
var LeadGenerationService = lazyWithStyles(() => import("./assets/LeadGenerationService-IsRVBT1y.js"), [() => Promise.resolve({                                   })]);
var CROService = lazyWithStyles(() => import("./assets/CROService-DTxPG1rQ.js"), [() => Promise.resolve({                       })]);
var WhatsAppMarketingService = lazyWithStyles(() => import("./assets/WhatsAppMarketingService-X8y3aQK_.js"), [() => Promise.resolve({                                      })]);
var HubSpotCRMService = lazyWithStyles(() => import("./assets/HubSpotCRMService-35tq1ksd.js"), [() => Promise.resolve({                    }), () => Promise.resolve({                          })]);
var WordPressService = lazyWithStyles(() => import("./assets/WordPressService-CxAH4ftm.js"), [() => Promise.resolve({                             })]);
var CaseStudies = lazyWithStyles(() => import("./assets/CaseStudies-CnnTCAYC.js"), [() => Promise.resolve({                        })]);
var CrmCaseStudy = lazyWithStyles(() => import("./assets/CrmCaseStudy-CtVCS-I8.js"), [() => Promise.resolve({                        }), () => Promise.resolve({                    })]);
var MetaTrackingCaseStudy = lazyWithStyles(() => import("./assets/MetaTrackingCaseStudy-Cv9azCae.js"), [() => Promise.resolve({                        }), () => Promise.resolve({                    })]);
var MetaAdsAlgorithmBlog = lazyWithStyles(() => import("./assets/MetaAdsAlgorithmBlog-D-B7nqaF.js"), [() => Promise.resolve({                }), () => Promise.resolve({                          })]);
var HormoziMetaAdsStrategy = lazyWithStyles(() => import("./assets/HormoziMetaAdsStrategy-Bb5yfJcR.js"), [() => Promise.resolve({                }), () => Promise.resolve({                        })]);
var LeadQualityBenchmarksBlog = lazyWithStyles(() => import("./assets/LeadQualityBenchmarksBlog-DpEeYZsJ.js"), [() => Promise.resolve({                }), () => Promise.resolve({                             })]);
var SeoAiSearchBlog = lazyWithStyles(() => import("./assets/SeoAiSearchBlog-CdBVC7rl.js"), [() => Promise.resolve({                }), () => Promise.resolve({                       })]);
var MarketingConceptsBlog = lazyWithStyles(() => import("./assets/MarketingConceptsBlog-Bq-7RdSf.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                   })]);
var IncreaseAverageOrderValueBlog = lazyWithStyles(() => import("./assets/IncreaseAverageOrderValueBlog-Vmu8t-t7.js"), [() => Promise.resolve({                }), () => Promise.resolve({                             })]);
var ContentAnglesStrategyBlog = lazyWithStyles(() => import("./assets/ContentAnglesStrategyBlog-B6oxc55n.js"), [() => Promise.resolve({                }), () => Promise.resolve({                               })]);
var CTRExplainedBlog = lazyWithStyles(() => import("./assets/CTRExplainedBlog-Bn3piQoK.js"), [() => Promise.resolve({                }), () => Promise.resolve({                    })]);
var CPMExplainedBlog = lazyWithStyles(() => import("./assets/CPMExplainedBlog-B9Yu9NA0.js"), [() => Promise.resolve({                }), () => Promise.resolve({                    })]);
var LeadGenerationRightLeadsBlog = lazyWithStyles(() => import("./assets/LeadGenerationRightLeadsBlog-yCzVGoOU.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                            })]);
var CreativeIsTheNewTargetingBlog = lazyWithStyles(() => import("./assets/CreativeIsTheNewTargetingBlog-CaIVdxTN.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                   })]);
var MetaAdsLeadsNoSalesBlog = lazyWithStyles(() => import("./assets/MetaAdsLeadsNoSalesBlog-Ldju8tBl.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                        })]);
var FreelanceMarketingConsultantUaeBlog = lazyWithStyles(() => import("./assets/FreelanceMarketingConsultantUaeBlog-DHnsmr_9.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                               })]);
var PaidAdsSpecialistUaeBlog = lazyWithStyles(() => import("./assets/PaidAdsSpecialistUaeBlog-BRTufpX8.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                    })]);
var PerformanceMarketingSpecialistBlog = lazyWithStyles(() => import("./assets/PerformanceMarketingSpecialistBlog-COq7ZU4P.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var BestPerformanceMarketingSpecialistBlog = lazyWithStyles(() => import("./assets/BestPerformanceMarketingSpecialistBlog-zmpBTuqU.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var PerformanceMarketingDubaiGuideBlog = lazyWithStyles(() => import("./assets/PerformanceMarketingDubaiGuideBlog-BkEg0_y7.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var FreelanceInvoiceGeneratorBlog = lazyWithStyles(() => import("./assets/FreelanceInvoiceGeneratorBlog-DwYovlMm.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                               })]);
var PerformanceMarketingVsDigitalMarketingBlog = lazyWithStyles(() => import("./assets/PerformanceMarketingVsDigitalMarketingBlog-BTCuFePN.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var PerformanceMarketingStrategyUaeBlog = lazyWithStyles(() => import("./assets/PerformanceMarketingStrategyUaeBlog-B2glBhRx.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var PerformanceMarketingMetricsBlog = lazyWithStyles(() => import("./assets/PerformanceMarketingMetricsBlog-C33sZqOn.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var PerformanceMarketingSalaryBlog = lazyWithStyles(() => import("./assets/PerformanceMarketingSalaryBlog-CsCqz_Wp.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                             })]);
var MetaAdsLeadGenerationUaeBlog = lazyWithStyles(() => import("./assets/MetaAdsLeadGenerationUaeBlog-BA5K7Nx0.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var MetaAdsCampaignStructureBlog = lazyWithStyles(() => import("./assets/MetaAdsCampaignStructureBlog-C2nGCxJB.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var GoogleAdsLeadGenerationUaeBlog = lazyWithStyles(() => import("./assets/GoogleAdsLeadGenerationUaeBlog-Bo2JGfIS.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var GoogleAdsVsMetaAdsBlog = lazyWithStyles(() => import("./assets/GoogleAdsVsMetaAdsBlog-24RKKwQu.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var GoogleSearchAdsLeadGenerationCampaignBlog = lazyWithStyles(() => import("./assets/GoogleSearchAdsLeadGenerationCampaignBlog-CMudD67q.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var GoogleAdsClicksNotTurningIntoLeadsBlog = lazyWithStyles(() => import("./assets/GoogleAdsClicksNotTurningIntoLeadsBlog-DLSXB5vp.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var GoogleAdsKeywordIntentBlog = lazyWithStyles(() => import("./assets/GoogleAdsKeywordIntentBlog-I7W2xWCH.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var GoogleAdsLeadQualityBlog = lazyWithStyles(() => import("./assets/GoogleAdsLeadQualityBlog-CQAbO2uR.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var GoogleAdsConversionTrackingBlog = lazyWithStyles(() => import("./assets/GoogleAdsConversionTrackingBlog-3WHkPBVN.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var ConversionTrackingPerformanceMarketingBlog = lazyWithStyles(() => import("./assets/ConversionTrackingPerformanceMarketingBlog-Dpigfj83.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var LeadGenerationVsLeadQualificationBlog = lazyWithStyles(() => import("./assets/LeadGenerationVsLeadQualificationBlog-Dc8WJfy_.js"), [() => Promise.resolve({                })]);
var LeadFormOptimisationBlog = lazyWithStyles(() => import("./assets/LeadFormOptimisationBlog-4rfO88Pc.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var CostPerLeadVsCostPerCustomerBlog = lazyWithStyles(() => import("./assets/CostPerLeadVsCostPerCustomerBlog-DSD7TuDW.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var MarketingSalesFunnelSalesPipelineBlog = lazyWithStyles(() => import("./assets/MarketingSalesFunnelSalesPipelineBlog-1rzo1u4Y.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var CrmLeadTrackingPaidAdsBlog = lazyWithStyles(() => import("./assets/CrmLeadTrackingPaidAdsBlog-BLdzQ2A8.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var Ga4PerformanceMarketingBlog = lazyWithStyles(() => import("./assets/Ga4PerformanceMarketingBlog-BEM0MPUR.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var PaidAdvertisingRoiBlog = lazyWithStyles(() => import("./assets/PaidAdvertisingRoiBlog-QY6kD44o.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var CustomerAcquisitionCostVsCplBlog = lazyWithStyles(() => import("./assets/CustomerAcquisitionCostVsCplBlog-VV2juRor.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var RoasVsRoiBlog = lazyWithStyles(() => import("./assets/RoasVsRoiBlog-BlmdnRZg.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var CrmDataForPaidAdsBlog = lazyWithStyles(() => import("./assets/CrmDataForPaidAdsBlog-HQTVxK9z.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var MarketingAttributionBlog = lazyWithStyles(() => import("./assets/MarketingAttributionBlog-jFa6Q1z2.js"), [() => Promise.resolve({                }), () => Promise.resolve({                                                 })]);
var Resources = lazyWithStyles(() => import("./assets/Resources-COSoT2Cn.js"), [() => Promise.resolve({                     })]);
var CampaignBudgetCalculator = lazyWithStyles(() => import("./assets/CampaignBudgetCalculator-BGdoq6l2.js"), [() => Promise.resolve({                     })]);
var UTMBuilder = lazyWithStyles(() => import("./assets/UTMBuilder-CD3Hbpht.js"), [() => Promise.resolve({                     }), () => Promise.resolve({                       })]);
var MetaAdsChecklist = lazyWithStyles(() => import("./assets/MetaAdsChecklist-BbNJGofS.js"), [() => Promise.resolve({                     }), () => Promise.resolve({                          })]);
var LeadQualityFramework = lazyWithStyles(() => import("./assets/LeadQualityFramework-DRWPIALG.js"), [() => Promise.resolve({                     }), () => Promise.resolve({                        })]);
var BlogPromptArchitect = lazyWithStyles(() => import("./assets/BlogPromptArchitect-CGt4nddG.js"), [() => Promise.resolve({                     }), () => Promise.resolve({                                 })]);
var Blog = lazyWithStyles(() => import("./assets/Blog-CTg6Pnhu.js"), [() => Promise.resolve({                }), () => Promise.resolve({                            })]);
var Contact = lazyWithStyles(() => import("./assets/Contact-bfQ7sTJd.js"), [
	() => Promise.resolve({                   }),
	() => Promise.resolve({                                 }),
	() => Promise.resolve({                    })
]);
var PlaceholderPage = lazy(() => import("./assets/PlaceholderPage-BAEqUW4y.js"));
function App() {
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: null,
		children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, {
			element: /* @__PURE__ */ jsx(MainLayout, {}),
			children: [
				/* @__PURE__ */ jsx(Route, {
					path: "/",
					element: /* @__PURE__ */ jsx(Home, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/performance-marketing-specialist-in-dubai",
					element: /* @__PURE__ */ jsx(PerformanceSpecialistDubai, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/digital-marketing-consultant-dubai",
					element: /* @__PURE__ */ jsx(DigitalMarketingConsultantDubai, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/about",
					element: /* @__PURE__ */ jsx(About, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services",
					element: /* @__PURE__ */ jsx(Services, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/meta-ads",
					element: /* @__PURE__ */ jsx(MetaAdsService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/performance-marketing",
					element: /* @__PURE__ */ jsx(Navigate, {
						to: "/services/performance-marketing-specialist",
						replace: true
					})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/performance-marketing-specialist",
					element: /* @__PURE__ */ jsx(PerformanceMarketingService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/performance-growth-marketing",
					element: /* @__PURE__ */ jsx(Navigate, {
						to: "/services/performance-marketing",
						replace: true
					})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/lead-generation",
					element: /* @__PURE__ */ jsx(LeadGenerationService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/cro",
					element: /* @__PURE__ */ jsx(CROService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/whatsapp-marketing",
					element: /* @__PURE__ */ jsx(WhatsAppMarketingService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/hubspot-crm-integration",
					element: /* @__PURE__ */ jsx(HubSpotCRMService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/hubspot",
					element: /* @__PURE__ */ jsx(Navigate, {
						to: "/services/hubspot-crm-integration",
						replace: true
					})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/wordpress",
					element: /* @__PURE__ */ jsx(WordPressService, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/website-development",
					element: /* @__PURE__ */ jsx(ServiceLanding, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/services/:slug",
					element: /* @__PURE__ */ jsx(ServiceDetail, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/case-studies",
					element: /* @__PURE__ */ jsx(CaseStudies, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/case-studies/crm-sales-qualified-lead",
					element: /* @__PURE__ */ jsx(CrmCaseStudy, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/case-studies/meta-pixel-capi-signal-loss",
					element: /* @__PURE__ */ jsx(MetaTrackingCaseStudy, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/resources",
					element: /* @__PURE__ */ jsx(Resources, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/resources/campaign-budget-calculator",
					element: /* @__PURE__ */ jsx(CampaignBudgetCalculator, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/resources/utm-builder",
					element: /* @__PURE__ */ jsx(UTMBuilder, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/resources/meta-ads-launch-checklist",
					element: /* @__PURE__ */ jsx(MetaAdsChecklist, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/resources/lead-quality-framework",
					element: /* @__PURE__ */ jsx(LeadQualityFramework, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/resources/blog-prompt-architect",
					element: /* @__PURE__ */ jsx(BlogPromptArchitect, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog",
					element: /* @__PURE__ */ jsx(Blog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/creative-is-the-new-targeting",
					element: /* @__PURE__ */ jsx(CreativeIsTheNewTargetingBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/ctr-explained",
					element: /* @__PURE__ */ jsx(CTRExplainedBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/cpm-explained",
					element: /* @__PURE__ */ jsx(CPMExplainedBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/lead-generation-right-leads",
					element: /* @__PURE__ */ jsx(LeadGenerationRightLeadsBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/increase-average-order-value",
					element: /* @__PURE__ */ jsx(IncreaseAverageOrderValueBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/content-angles-strategy",
					element: /* @__PURE__ */ jsx(ContentAnglesStrategyBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/how-meta-ads-algorithm-works",
					element: /* @__PURE__ */ jsx(MetaAdsAlgorithmBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/hormozi-meta-ads-strategy",
					element: /* @__PURE__ */ jsx(HormoziMetaAdsStrategy, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/more-leads-revenue-didnt-move",
					element: /* @__PURE__ */ jsx(LeadQualityBenchmarksBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/seo-ai-search-entity-authority-2026",
					element: /* @__PURE__ */ jsx(SeoAiSearchBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/marketing-concepts-modern-marketers-should-know",
					element: /* @__PURE__ */ jsx(MarketingConceptsBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/meta-ads-generating-leads-but-not-sales",
					element: /* @__PURE__ */ jsx(MetaAdsLeadsNoSalesBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/freelance-marketing-consultant-uae",
					element: /* @__PURE__ */ jsx(FreelanceMarketingConsultantUaeBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/paid-ads-specialist-uae",
					element: /* @__PURE__ */ jsx(PaidAdsSpecialistUaeBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/performance-marketing-specialist-in-dubai",
					element: /* @__PURE__ */ jsx(PerformanceMarketingSpecialistBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/best-performance-marketing-specialist",
					element: /* @__PURE__ */ jsx(BestPerformanceMarketingSpecialistBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/performance-marketing-dubai",
					element: /* @__PURE__ */ jsx(PerformanceMarketingDubaiGuideBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/free-invoice-generator-for-freelancers",
					element: /* @__PURE__ */ jsx(FreelanceInvoiceGeneratorBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/performance-marketing-vs-digital-marketing",
					element: /* @__PURE__ */ jsx(PerformanceMarketingVsDigitalMarketingBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/performance-marketing-strategy-uae",
					element: /* @__PURE__ */ jsx(PerformanceMarketingStrategyUaeBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/performance-marketing-metrics",
					element: /* @__PURE__ */ jsx(PerformanceMarketingMetricsBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/performance-marketing-salary",
					element: /* @__PURE__ */ jsx(PerformanceMarketingSalaryBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/meta-ads-lead-generation-uae",
					element: /* @__PURE__ */ jsx(MetaAdsLeadGenerationUaeBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/meta-ads-campaign-structure",
					element: /* @__PURE__ */ jsx(MetaAdsCampaignStructureBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/google-ads-lead-generation-uae",
					element: /* @__PURE__ */ jsx(GoogleAdsLeadGenerationUaeBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/google-ads-vs-meta-ads",
					element: /* @__PURE__ */ jsx(GoogleAdsVsMetaAdsBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/google-search-ads-lead-generation-campaign",
					element: /* @__PURE__ */ jsx(GoogleSearchAdsLeadGenerationCampaignBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/google-ads-clicks-not-turning-into-leads",
					element: /* @__PURE__ */ jsx(GoogleAdsClicksNotTurningIntoLeadsBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/google-ads-keyword-intent",
					element: /* @__PURE__ */ jsx(GoogleAdsKeywordIntentBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/google-ads-lead-quality",
					element: /* @__PURE__ */ jsx(GoogleAdsLeadQualityBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/google-ads-conversion-tracking",
					element: /* @__PURE__ */ jsx(GoogleAdsConversionTrackingBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/conversion-tracking-performance-marketing",
					element: /* @__PURE__ */ jsx(ConversionTrackingPerformanceMarketingBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/lead-generation-vs-lead-qualification",
					element: /* @__PURE__ */ jsx(LeadGenerationVsLeadQualificationBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/lead-form-optimisation",
					element: /* @__PURE__ */ jsx(LeadFormOptimisationBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/cost-per-lead-vs-cost-per-customer",
					element: /* @__PURE__ */ jsx(CostPerLeadVsCostPerCustomerBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/marketing-sales-funnel-sales-pipeline",
					element: /* @__PURE__ */ jsx(MarketingSalesFunnelSalesPipelineBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/crm-lead-tracking-paid-ads",
					element: /* @__PURE__ */ jsx(CrmLeadTrackingPaidAdsBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/ga4-performance-marketing",
					element: /* @__PURE__ */ jsx(Ga4PerformanceMarketingBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/paid-advertising-roi",
					element: /* @__PURE__ */ jsx(PaidAdvertisingRoiBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/customer-acquisition-cost-vs-cpl",
					element: /* @__PURE__ */ jsx(CustomerAcquisitionCostVsCplBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/roas-vs-roi",
					element: /* @__PURE__ */ jsx(RoasVsRoiBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/crm-data-for-paid-ads",
					element: /* @__PURE__ */ jsx(CrmDataForPaidAdsBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/blog/why-attribution-matters-performance-marketing",
					element: /* @__PURE__ */ jsx(MarketingAttributionBlog, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/contact",
					element: /* @__PURE__ */ jsx(Contact, {})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "*",
					element: /* @__PURE__ */ jsx(PlaceholderPage, {})
				})
			]
		}) })
	});
}
// src/entry-server.jsx
function render(url) {
	return new Promise((resolve, reject) => {
		let didError = false;
		const stream = new PassThrough();
		const chunks = [];
		stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
		stream.on("end", () => {
			if (didError) reject(/* @__PURE__ */ new Error("Server rendering completed with an error."));
			else resolve(Buffer.concat(chunks).toString("utf8"));
		});
		stream.on("error", reject);
		const { pipe } = renderToPipeableStream(/* @__PURE__ */ jsx(MemoryRouter, {
			initialEntries: [url],
			children: /* @__PURE__ */ jsx(App, {})
		}), {
			onAllReady() {
				pipe(stream);
			},
			onError(error) {
				didError = true;
				console.error(error);
			}
		});
	});
}
export { emailAddress as a, crmMonthlyData as i, blogPosts as n, whatsappUrl as o, caseStudies as r, render, emailjsConfig as t };
