import { t as emailjsConfig } from "../entry-server.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import emailjs from "@emailjs/browser";
// src/components/case-studies/CaseStudyLeadForm.jsx
var initial = {
	name: "",
	email: "",
	phone: "",
	company: "",
	message: ""
};
function CaseStudyLeadForm({ eyebrow = "Get the next step", title = "Want a deeper look at your marketing?", description = "Tell me what you want to improve and I’ll point you toward the most useful next step.", buttonLabel = "Request a consultation" }) {
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
			await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
				...form,
				service: "Case study enquiry"
			}, { publicKey: emailjsConfig.publicKey });
			setStatus("success");
			setForm(initial);
		} catch (error) {
			console.error("Case study enquiry failed:", error);
			setStatus("error");
		}
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "case-study-lead-form",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "case-study-lead-copy",
			children: [
				/* @__PURE__ */ jsx("p", { children: eyebrow }),
				/* @__PURE__ */ jsx("h2", { children: title }),
				/* @__PURE__ */ jsx("span", { children: description })
			]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: submit,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "case-study-form-grid",
					children: [
						/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Name" }), /* @__PURE__ */ jsx("input", {
							required: true,
							value: form.name,
							onChange: (event) => update("name", event.target.value),
							placeholder: "Your name",
							autoComplete: "name"
						})] }),
						/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Email" }), /* @__PURE__ */ jsx("input", {
							required: true,
							type: "email",
							value: form.email,
							onChange: (event) => update("email", event.target.value),
							placeholder: "you@company.com",
							autoComplete: "email"
						})] }),
						/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Phone / WhatsApp" }), /* @__PURE__ */ jsx("input", {
							required: true,
							type: "tel",
							value: form.phone,
							onChange: (event) => update("phone", event.target.value),
							placeholder: "+971 50 000 0000",
							autoComplete: "tel"
						})] }),
						/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "Company" }), /* @__PURE__ */ jsx("input", {
							value: form.company,
							onChange: (event) => update("company", event.target.value),
							placeholder: "Company name",
							autoComplete: "organization"
						})] })
					]
				}),
				/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("span", { children: "What would you like help with?" }), /* @__PURE__ */ jsx("textarea", {
					required: true,
					rows: "3",
					value: form.message,
					onChange: (event) => update("message", event.target.value),
					placeholder: "Tell me what you want to audit, improve or understand."
				})] }),
				/* @__PURE__ */ jsxs("button", {
					type: "submit",
					disabled: status === "sending",
					children: [
						status === "sending" ? "Sending enquiry…" : buttonLabel,
						" ",
						/* @__PURE__ */ jsx("span", { children: "↗" })
					]
				}),
				status === "success" && /* @__PURE__ */ jsx("p", {
					className: "case-study-form-note",
					children: "Thanks. Your enquiry has been sent successfully."
				}),
				status === "error" && /* @__PURE__ */ jsx("p", {
					className: "case-study-form-note error",
					children: "Something went wrong. Please try again or contact me directly."
				}),
				/* @__PURE__ */ jsx("small", { children: "Your details are only used to respond to this enquiry." })
			]
		})]
	});
}
export { CaseStudyLeadForm as t };
