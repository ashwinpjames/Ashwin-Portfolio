import { a as emailAddress, o as whatsappUrl, t as emailjsConfig } from "../entry-server.js";
import { t as AshwinPortraitCard } from "./ashwin-portrait-BovK11Wp.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import emailjs from "@emailjs/browser";
// src/components/contact/ContactForm.jsx
var initial = {
	name: "",
	email: "",
	phone: "",
	company: "",
	service: "",
	message: ""
};
function ContactForm() {
	const [form, setForm] = useState(initial);
	const [status, setStatus] = useState("idle");
	const update = (key, value) => setForm((current) => ({
		...current,
		[key]: value
	}));
	const submit = async (event) => {
		event.preventDefault();
		setStatus("sending");
		try {
			await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, form, { publicKey: emailjsConfig.publicKey });
			setStatus("success");
			setForm(initial);
		} catch (error) {
			console.error("EmailJS enquiry failed:", error);
			setStatus("error");
		}
	};
	return /* @__PURE__ */ jsxs("form", {
		className: "contact-form",
		onSubmit: submit,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "contact-form-heading",
				children: [
					/* @__PURE__ */ jsx("p", { children: "Quick enquiry" }),
					/* @__PURE__ */ jsx("h2", { children: "Tell me what you need." }),
					/* @__PURE__ */ jsx("span", { children: "Usually takes less than a minute." })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-form-grid",
				children: [/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Name" }), /* @__PURE__ */ jsx("input", {
					required: true,
					value: form.name,
					onChange: (event) => update("name", event.target.value),
					placeholder: "Your name",
					autoComplete: "name"
				})] }), /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Email" }), /* @__PURE__ */ jsx("input", {
					required: true,
					type: "email",
					value: form.email,
					onChange: (event) => update("email", event.target.value),
					placeholder: "you@company.com",
					autoComplete: "email"
				})] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "contact-form-grid",
				children: [/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Phone / WhatsApp" }), /* @__PURE__ */ jsx("input", {
					required: true,
					type: "tel",
					value: form.phone,
					onChange: (event) => update("phone", event.target.value),
					placeholder: "+971 50 000 0000",
					autoComplete: "tel"
				})] }), /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Company" }), /* @__PURE__ */ jsx("input", {
					value: form.company,
					onChange: (event) => update("company", event.target.value),
					placeholder: "Company name",
					autoComplete: "organization"
				})] })]
			}),
			/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "What do you need?" }), /* @__PURE__ */ jsxs("select", {
				required: true,
				value: form.service,
				onChange: (event) => update("service", event.target.value),
				children: [
					/* @__PURE__ */ jsx("option", {
						value: "",
						children: "Select a service"
					}),
					/* @__PURE__ */ jsx("option", { children: "Meta Ads" }),
					/* @__PURE__ */ jsx("option", { children: "Google Ads" }),
					/* @__PURE__ */ jsx("option", { children: "Lead generation" }),
					/* @__PURE__ */ jsx("option", { children: "Landing page / CRO" }),
					/* @__PURE__ */ jsx("option", { children: "Analytics & tracking" }),
					/* @__PURE__ */ jsx("option", { children: "Website development" }),
					/* @__PURE__ */ jsx("option", { children: "Not sure yet" })
				]
			})] }),
			/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Briefly tell me about the goal" }), /* @__PURE__ */ jsx("textarea", {
				rows: "4",
				value: form.message,
				onChange: (event) => update("message", event.target.value),
				placeholder: "What are you trying to improve?"
			})] }),
			/* @__PURE__ */ jsxs("button", {
				type: "submit",
				className: "contact-submit",
				disabled: status === "sending",
				children: [
					status === "sending" ? "Sending enquiry…" : "Send enquiry",
					" ",
					/* @__PURE__ */ jsx("span", { children: "↗" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				"aria-live": "polite",
				children: [status === "success" && /* @__PURE__ */ jsx("p", {
					className: "contact-form-note",
					children: "Thanks. Your enquiry has been sent successfully. I’ll get back to you soon."
				}), status === "error" && /* @__PURE__ */ jsx("p", {
					className: "contact-form-note contact-form-note-error",
					children: "Something went wrong while sending the enquiry. Please try again or contact me directly by WhatsApp or email."
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "contact-privacy",
				children: "Your details are only used to respond to this enquiry."
			})
		]
	});
}
// src/components/contact/ContactMethods.jsx
function ContactMethods() {
	return /* @__PURE__ */ jsxs("div", {
		className: "contact-methods",
		children: [
			/* @__PURE__ */ jsxs("a", {
				className: "contact-method-whatsapp",
				href: whatsappUrl,
				target: "_blank",
				rel: "noreferrer",
				children: [/* @__PURE__ */ jsx("span", { children: "WhatsApp" }), /* @__PURE__ */ jsx("small", { children: "Fastest way to start a conversation" })]
			}),
			/* @__PURE__ */ jsxs("a", {
				className: "contact-method-email",
				href: `mailto:${emailAddress}`,
				children: [/* @__PURE__ */ jsx("span", { children: "Email" }), /* @__PURE__ */ jsx("small", { children: emailAddress })]
			}),
			/* @__PURE__ */ jsxs("a", {
				className: "contact-method-linkedin",
				href: "https://www.linkedin.com/in/ashwin-james",
				target: "_blank",
				rel: "noreferrer",
				children: [/* @__PURE__ */ jsx("span", { children: "LinkedIn" }), /* @__PURE__ */ jsx("small", { children: "Connect professionally" })]
			})
		]
	});
}
// src/components/contact/CalendlyBooking.jsx
var calendlyUrl = "https://calendly.com/ashwinjames-marketing/30min?hide_gdpr_banner=1";
function CalendlyBooking() {
	return /* @__PURE__ */ jsxs("section", {
		className: "calendly-booking",
		"aria-labelledby": "calendly-heading",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "calendly-booking-heading",
			children: [
				/* @__PURE__ */ jsx("p", { children: "Book a call" }),
				/* @__PURE__ */ jsx("h2", {
					id: "calendly-heading",
					children: "Choose a time that works for you."
				}),
				/* @__PURE__ */ jsx("span", { children: "A focused 30 minute conversation about your business, marketing and growth opportunities." })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "calendly-frame",
			children: /* @__PURE__ */ jsx("iframe", {
				src: calendlyUrl,
				title: "Book a call with Ashwin James",
				className: "calendly-iframe",
				loading: "eager",
				frameBorder: "0",
				scrolling: "no",
				style: {
					display: "block",
					width: "100%",
					minWidth: "100%",
					height: "680px",
					border: 0
				}
			})
		})]
	});
}
// src/pages/Contact.jsx
function Contact() {
	return /* @__PURE__ */ jsxs("main", {
		className: "contact-page",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "contact-hero",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "contact-hero-glow",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "contact-hero-orbit contact-hero-orbit-one",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "contact-hero-orbit contact-hero-orbit-two",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "container contact-hero-inner",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "contact-copy",
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "contact-eyebrow",
									children: [/* @__PURE__ */ jsx("span", {}), " Get in touch"]
								}),
								/* @__PURE__ */ jsxs("h1", { children: ["Let’s build something ", /* @__PURE__ */ jsx("span", { children: "great together." })] }),
								/* @__PURE__ */ jsx("p", {
									className: "contact-lead",
									children: "Have a project in mind or want to improve your marketing performance? I’d love to hear about it. Tell me what you are trying to achieve and let’s find the clearest next move."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "contact-hero-points",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "contact-hero-point",
											children: [
												/* @__PURE__ */ jsx("b", { children: "01" }),
												/* @__PURE__ */ jsx("strong", { children: "Performance focused" }),
												/* @__PURE__ */ jsx("small", { children: "Built around measurable growth" })
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "contact-hero-point",
											children: [
												/* @__PURE__ */ jsx("b", { children: "02" }),
												/* @__PURE__ */ jsx("strong", { children: "Clear communication" }),
												/* @__PURE__ */ jsx("small", { children: "No unnecessary complexity" })
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "contact-hero-point",
											children: [
												/* @__PURE__ */ jsx("b", { children: "03" }),
												/* @__PURE__ */ jsx("strong", { children: "UAE based" }),
												/* @__PURE__ */ jsx("small", { children: "Dubai and remote collaboration" })
											]
										})
									]
								}),
								/* @__PURE__ */ jsx(Link, {
									className: "contact-back",
									to: "/",
									children: "← Back to home"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "contact-hero-visual contact-hero-portrait",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "contact-portrait-glow",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "contact-portrait-ring",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx(AshwinPortraitCard, {})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "contact-workspace",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container contact-workspace-grid",
					children: [/* @__PURE__ */ jsx("div", {
						className: "contact-form-column",
						children: /* @__PURE__ */ jsx(ContactForm, {})
					}), /* @__PURE__ */ jsxs("div", {
						className: "contact-methods-column",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "contact-panel-heading",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Other ways to connect" }),
									/* @__PURE__ */ jsx("h2", { children: "Prefer a direct conversation?" }),
									/* @__PURE__ */ jsx("span", { children: "Reach out through your preferred channel and I’ll get back to you." })
								]
							}),
							/* @__PURE__ */ jsx(ContactMethods, {}),
							/* @__PURE__ */ jsxs("div", {
								className: "contact-note",
								children: [/* @__PURE__ */ jsx("strong", { children: "Free initial consultation" }), /* @__PURE__ */ jsx("p", { children: "Use the booking calendar below if you would rather choose a time directly." })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(CalendlyBooking, {}),
			/* @__PURE__ */ jsx("section", {
				className: "container",
				"aria-label": "OnToplist recognition",
				style: {
					textAlign: "center",
					padding: "32px 0"
				},
				children: /* @__PURE__ */ jsx("a", {
					href: "https://www.ontoplist.com/social-media-marketing-companies/",
					target: "_blank",
					rel: "noopener noreferrer",
					children: /* @__PURE__ */ jsx("img", {
						src: "https://www.ontoplist.com/images/ontoplist51.png?id=6aa6895481d9f",
						alt: "Top Social Media Marketing Companies - OnToplist.com",
						border: "0"
					})
				})
			})
		]
	});
}
export { Contact as default };
