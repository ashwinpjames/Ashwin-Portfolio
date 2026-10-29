import { o as whatsappUrl } from "../entry-server.js";
import { t as AshwinPortraitCard } from "./ashwin-portrait-BovK11Wp.js";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/About.jsx
var principles = [
	[
		"01",
		"Start with the business",
		"The market, the sales process, unit economics and the real constraint all come before a channel recommendation."
	],
	[
		"02",
		"Make the signal clear",
		"Priorities, assumptions and performance signals stay visible so decisions become faster and more useful."
	],
	[
		"03",
		"Build for the handover",
		"Every improvement should make your internal team more capable, not more dependent on an agency."
	]
];
var expectations = [
	["Direct", "Fast feedback and straightforward conversations."],
	["Focused", "Effort concentrated on the few levers that matter most."],
	["Measured", "A shared view of performance and what changes next."]
];
var industries = [
	"Immigration & visa services",
	"Healthcare & wellness",
	"Attestation & professional services",
	"Recruitment & HR",
	"Business services & SMEs",
	"B2B & high consideration services",
	"Marketing agencies",
	"Ecommerce"
];
var brandLogos = [
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/Vector-1.png",
		alt: "Saudi Boost logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/Vector_2.png",
		alt: "Asian Gold logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/notespaedia_logo_white_1.png",
		alt: "Notespaedia logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1786969724/Vector.png",
		alt: "Asian Gold logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1786969723/BOISIA.png",
		alt: "BOISIA logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1786969723/Humns.png",
		alt: "Humns logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1786969359/Dotcom_Logo_white_1.png",
		alt: "Dotcom logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787038702/attestation_LOGO_white_1_1.png",
		alt: "World Attestation logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787038701/prakriti_ayurveda-logo_white_2_1.png",
		alt: "Prakriti Ayurveda logo"
	},
	{
		src: "https://res.cloudinary.com/fo4xyppd/image/upload/v1787038702/attestationLOGO_1_1.png",
		alt: "Attestation logo"
	}
];
function useAboutMotion() {
	const rootRef = useRef(null);
	useEffect(() => {
		const root = rootRef.current;
		if (!root) return void 0;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const coarse = window.matchMedia("(pointer: coarse)").matches;
		const revealNodes = root.querySelectorAll(".about-reveal");
		if (reduced) {
			revealNodes.forEach((node) => node.classList.add("in-view"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .12 });
		revealNodes.forEach((node) => observer.observe(node));
		if (coarse) return () => observer.disconnect();
		const parallaxNodes = root.querySelectorAll("[data-about-parallax]");
		let frame = 0;
		const updateParallax = () => {
			const y = window.scrollY;
			parallaxNodes.forEach((node) => {
				const speed = Number(node.dataset.aboutParallax || 0);
				node.style.transform = `translate3d(0, ${y * speed}px, 0)`;
			});
			frame = 0;
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(updateParallax);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);
	return rootRef;
}
function BrandSet({ reverse = false }) {
	const items = reverse ? [...brandLogos].reverse() : brandLogos;
	return /* @__PURE__ */ jsx("div", {
		className: "about-brand-set",
		children: items.map((logo, index) => /* @__PURE__ */ jsx("div", {
			className: "about-brand-card about-surface",
			children: /* @__PURE__ */ jsx("img", {
				src: logo.src,
				alt: logo.alt,
				loading: "lazy"
			})
		}, `${logo.src}-${index}`))
	});
}
function About() {
	const rootRef = useAboutMotion();
	return /* @__PURE__ */ jsxs("main", {
		ref: rootRef,
		className: "about-page about-editorial",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "about-hero-react",
				id: "about-hero",
				children: [
					/* @__PURE__ */ jsx("div", { className: "about-base-react" }),
					/* @__PURE__ */ jsxs("div", {
						className: "about-blobs-react",
						"data-about-parallax": "0.04",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ jsx("div", { className: "about-blob-react one" }),
							/* @__PURE__ */ jsx("div", { className: "about-blob-react two" }),
							/* @__PURE__ */ jsx("div", { className: "about-blob-react three" }),
							/* @__PURE__ */ jsx("div", { className: "about-blob-react four" }),
							/* @__PURE__ */ jsx("div", { className: "about-blob-react five" })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "about-grid-react",
						"data-about-parallax": "0.015"
					}),
					/* @__PURE__ */ jsx("div", { className: "about-sheen-react" }),
					/* @__PURE__ */ jsx("div", { className: "about-noise-react" }),
					/* @__PURE__ */ jsxs("div", {
						className: "about-marquee-react",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "about-marquee-row-react top",
							children: [/* @__PURE__ */ jsx("div", {
								className: "about-marquee-set-react",
								children: [
									"Growth",
									"Clarity",
									"Momentum",
									"Integrity"
								].map((word) => /* @__PURE__ */ jsx("span", { children: word }, `top-a-${word}`))
							}), /* @__PURE__ */ jsx("div", {
								className: "about-marquee-set-react",
								children: [
									"Growth",
									"Clarity",
									"Momentum",
									"Integrity"
								].map((word) => /* @__PURE__ */ jsx("span", { children: word }, `top-b-${word}`))
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "about-marquee-row-react bottom",
							children: [/* @__PURE__ */ jsx("div", {
								className: "about-marquee-set-react",
								children: [
									"Integrity",
									"Momentum",
									"Clarity",
									"Growth"
								].map((word) => /* @__PURE__ */ jsx("span", { children: word }, `bottom-a-${word}`))
							}), /* @__PURE__ */ jsx("div", {
								className: "about-marquee-set-react",
								children: [
									"Integrity",
									"Momentum",
									"Clarity",
									"Growth"
								].map((word) => /* @__PURE__ */ jsx("span", { children: word }, `bottom-b-${word}`))
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "container about-hero-inner",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "about-hero-copy about-reveal",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "home-eyebrow",
									children: "About Ashwin"
								}),
								/* @__PURE__ */ jsx("h1", { children: "A growth partner who stays close to the work." }),
								/* @__PURE__ */ jsx("p", {
									className: "about-lead",
									children: "I combine business thinking, performance marketing and practical delivery to help ambitious UAE businesses turn more attention into revenue."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "about-secondary",
									children: "The goal is not more dashboards or noise. It is a clear growth system your team understands, can trust and can keep improving."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-hero-actions",
									children: [/* @__PURE__ */ jsxs("a", {
										className: "home-button primary",
										href: whatsappUrl,
										target: "_blank",
										rel: "noreferrer",
										children: ["Work with Ashwin ", /* @__PURE__ */ jsx("span", { children: "↗" })]
									}), /* @__PURE__ */ jsxs(Link, {
										className: "home-button secondary",
										to: "/case-studies",
										children: ["View selected work ", /* @__PURE__ */ jsx("span", { children: "→" })]
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "about-hero-portrait about-reveal",
							style: { transitionDelay: ".12s" },
							children: /* @__PURE__ */ jsx(AshwinPortraitCard, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "about-section about-experience-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "about-section-heading about-editorial-heading about-reveal",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "home-eyebrow",
								children: "Experience across industries"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Different businesses. The same focus on qualified growth." }),
							/* @__PURE__ */ jsx("p", { children: "I have worked across service businesses where acquisition, trust, lead quality and conversion have to work together." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "about-industry-marquee",
						"aria-label": "Industries Ashwin has worked across",
						children: /* @__PURE__ */ jsxs("div", {
							className: "about-industry-track",
							children: [/* @__PURE__ */ jsx("div", {
								className: "about-industry-set",
								children: industries.map((industry) => /* @__PURE__ */ jsx("span", { children: industry }, `industry-a-${industry}`))
							}), /* @__PURE__ */ jsx("div", {
								className: "about-industry-set",
								"aria-hidden": "true",
								children: industries.map((industry) => /* @__PURE__ */ jsx("span", { children: industry }, `industry-b-${industry}`))
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "about-section about-brands-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "about-brands-heading about-reveal",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "home-eyebrow",
							children: "Selected experience"
						}), /* @__PURE__ */ jsx("h2", { children: "Businesses and brands I have worked with." })] }), /* @__PURE__ */ jsx("p", { children: "A selection of the businesses represented in my professional experience across acquisition, lead generation, websites and growth systems." })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "about-brand-editorial",
						"aria-label": "Brands Ashwin has worked with",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "about-brand-track",
							children: [/* @__PURE__ */ jsx(BrandSet, {}), /* @__PURE__ */ jsx(BrandSet, {})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "about-brand-track reverse",
							style: { marginTop: ".8rem" },
							children: [/* @__PURE__ */ jsx(BrandSet, { reverse: true }), /* @__PURE__ */ jsx(BrandSet, { reverse: true })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "about-section about-work-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "about-section-heading about-editorial-heading about-reveal",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "home-eyebrow",
								children: "How I work"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Senior thinking. Hands on delivery. Clear accountability." }),
							/* @__PURE__ */ jsx("p", { children: "You work directly with the person shaping the strategy and improving the work, not a chain of account managers." })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "about-three-points",
						children: principles.map(([number, title, text], index) => /* @__PURE__ */ jsxs("article", {
							className: "about-point about-reveal",
							style: { transitionDelay: `${index * 70}ms` },
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "about-point-number",
									children: number
								}),
								/* @__PURE__ */ jsx("h3", { children: title }),
								/* @__PURE__ */ jsx("p", { children: text })
							]
						}, number))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "about-section about-proof-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container about-proof-layout",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "about-proof-copy about-reveal",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "home-eyebrow",
								children: "The work in practice"
							}),
							/* @__PURE__ */ jsx("h2", { children: "From acquisition to the qualified conversation." }),
							/* @__PURE__ */ jsxs("p", { children: [
								"Good ",
								/* @__PURE__ */ jsx("a", {
									href: "https://www.salesforce.com/marketing/performance-marketing/",
									target: "_blank",
									rel: "noreferrer",
									children: "performance marketing"
								}),
								" is not just about buying traffic. It is about connecting targeting, creative, landing pages, tracking and sales follow up into one measurable system."
							] })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "about-proof-panel about-reveal",
						style: { transitionDelay: ".12s" },
						"aria-label": "Illustrative growth system dashboard",
						children: /* @__PURE__ */ jsxs("div", {
							className: "about-proof-window",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "about-proof-window-top",
									children: [/* @__PURE__ */ jsx("span", { children: "Growth system" }), /* @__PURE__ */ jsx("span", { children: "CONNECTED" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-proof-metrics",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "about-proof-metric",
											children: [/* @__PURE__ */ jsx("strong", { children: "CPA" }), /* @__PURE__ */ jsx("span", { children: "Acquisition signal" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "about-proof-metric",
											children: [/* @__PURE__ */ jsx("strong", { children: "CQL" }), /* @__PURE__ */ jsx("span", { children: "Lead quality" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "about-proof-metric",
											children: [/* @__PURE__ */ jsx("strong", { children: "CRO" }), /* @__PURE__ */ jsx("span", { children: "Conversion layer" })]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "about-proof-bars",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "about-proof-bar",
											children: /* @__PURE__ */ jsx("i", {})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "about-proof-bar",
											children: /* @__PURE__ */ jsx("i", {})
										}),
										/* @__PURE__ */ jsx("div", {
											className: "about-proof-bar",
											children: /* @__PURE__ */ jsx("i", {})
										})
									]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "about-section about-expectations-section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container about-expectations-editorial",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "about-section-heading about-reveal",
						children: [/* @__PURE__ */ jsx("p", {
							className: "home-eyebrow",
							children: "What you can expect"
						}), /* @__PURE__ */ jsx("h2", { children: "A practical partnership built around progress." })]
					}), /* @__PURE__ */ jsx("div", {
						className: "about-expectation-list",
						children: expectations.map(([title, text], index) => /* @__PURE__ */ jsxs("article", {
							className: "about-expectation-editorial about-reveal",
							style: { transitionDelay: `${index * 60}ms` },
							children: [/* @__PURE__ */ jsx("strong", { children: title }), /* @__PURE__ */ jsx("p", { children: text })]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "about-section about-final-cta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container about-final-cta-inner",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "home-eyebrow about-reveal",
							children: "The right fit"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "about-reveal",
							children: "If you want more clarity and momentum, let’s talk."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "about-reveal",
							children: "Bring the constraint that is getting in the way. We’ll identify the most useful next move."
						}),
						/* @__PURE__ */ jsxs("a", {
							className: "about-fit-button about-reveal",
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["Start a conversation ", /* @__PURE__ */ jsx("span", { children: "↗" })]
						})
					]
				})
			})
		]
	});
}
export { About as default };
