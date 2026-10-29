import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/UTMBuilder.jsx
var PLATFORMS = {
	meta: {
		label: "Meta Ads",
		source: "facebook",
		medium: "paid-social",
		dynamic: [
			[
				"utm_content",
				"{{ad.name}}",
				"Ad name"
			],
			[
				"utm_term",
				"{{adset.name}}",
				"Ad set name"
			],
			[
				"campaign_id",
				"{{campaign.id}}",
				"Campaign ID"
			],
			[
				"placement",
				"{{placement}}",
				"Placement"
			]
		],
		checks: [
			"Meta Pixel or Conversions API is active",
			"Your key conversion event is configured",
			"The destination page is receiving analytics data"
		]
	},
	google: {
		label: "Google Ads",
		source: "google",
		medium: "cpc",
		dynamic: [
			[
				"utm_content",
				"{creative}",
				"Creative ID"
			],
			[
				"utm_term",
				"{keyword}",
				"Keyword"
			],
			[
				"campaign_id",
				"{campaignid}",
				"Campaign ID"
			],
			[
				"adgroup_id",
				"{adgroupid}",
				"Ad group ID"
			],
			[
				"match_type",
				"{matchtype}",
				"Match type"
			],
			[
				"device",
				"{device}",
				"Device"
			],
			[
				"network",
				"{network}",
				"Network"
			]
		],
		checks: [
			"Google Ads conversion tracking or GA4 conversion is active",
			"Google Ads auto tagging is enabled",
			"The destination page is receiving analytics data"
		]
	},
	other: {
		label: "Other",
		source: "",
		medium: "",
		dynamic: [],
		checks: ["Analytics is active on the destination page", "You have a consistent source and medium naming convention"]
	}
};
var STANDARD = [
	[
		"utm_source",
		"Source",
		"Required",
		"facebook"
	],
	[
		"utm_medium",
		"Medium",
		"Required",
		"paid-social"
	],
	[
		"utm_campaign",
		"Campaign",
		"Required",
		"golden-visa-august"
	],
	[
		"utm_content",
		"Content",
		"Optional",
		"carousel-v2"
	],
	[
		"utm_term",
		"Term",
		"Optional",
		"residency-consultant"
	]
];
function clean(value) {
	return String(value || "").trim().toLowerCase().replace(/[^a-z0-9._{}]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function initialValues(platform) {
	return {
		utm_source: PLATFORMS[platform].source,
		utm_medium: PLATFORMS[platform].medium,
		utm_campaign: ""
	};
}
function UTMBuilder() {
	const [platform, setPlatform] = useState("meta");
	const [baseUrl, setBaseUrl] = useState("");
	const [values, setValues] = useState(initialValues("meta"));
	const [active, setActive] = useState({
		utm_source: true,
		utm_medium: true,
		utm_campaign: true,
		utm_content: false,
		utm_term: false
	});
	const [dynamic, setDynamic] = useState([]);
	const [checks, setChecks] = useState([]);
	const [custom, setCustom] = useState([]);
	const [customKey, setCustomKey] = useState("");
	const [customValue, setCustomValue] = useState("");
	const [copied, setCopied] = useState(false);
	const config = PLATFORMS[platform];
	const changePlatform = (next) => {
		setPlatform(next);
		setValues(initialValues(next));
		setDynamic([]);
		setChecks([]);
	};
	const params = useMemo(() => {
		const result = [];
		STANDARD.forEach(([key]) => {
			if (active[key] && values[key]) result.push([key, clean(values[key])]);
		});
		config.dynamic.forEach(([key, value]) => {
			if (dynamic.includes(value)) result.push([key, value]);
		});
		custom.forEach((item) => result.push([item.key, item.value]));
		return result;
	}, [
		active,
		values,
		config,
		dynamic,
		custom
	]);
	const result = useMemo(() => {
		if (!baseUrl.trim()) return "";
		try {
			const url = new URL(baseUrl.trim());
			params.forEach(([key, value]) => url.searchParams.set(key, value));
			return url.toString();
		} catch {
			return "";
		}
	}, [baseUrl, params]);
	const warnings = [];
	if (baseUrl && !/^https?:\/\//i.test(baseUrl.trim())) warnings.push("Use a complete URL beginning with https://");
	STANDARD.filter((item) => active[item[0]] && item[2] === "Required").forEach(([key, label]) => {
		if (!values[key]?.trim()) warnings.push(`Enter a ${label.toLowerCase()} value`);
	});
	const addCustom = () => {
		const key = clean(customKey);
		const value = clean(customValue);
		if (!key || !value) return;
		setCustom((current) => [...current.filter((item) => item.key !== key), {
			key,
			value
		}]);
		setCustomKey("");
		setCustomValue("");
	};
	const copy = async () => {
		if (!result || warnings.length) return;
		await navigator.clipboard.writeText(result);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	};
	const reset = () => {
		setBaseUrl("");
		setValues(initialValues(platform));
		setDynamic([]);
		setCustom([]);
		setChecks([]);
		setCopied(false);
	};
	return /* @__PURE__ */ jsx("main", {
		className: "utm-page",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container utm-container",
			children: [
				/* @__PURE__ */ jsx(Link, {
					className: "utm-back",
					to: "/resources",
					children: "← Back to resources"
				}),
				/* @__PURE__ */ jsxs("header", {
					className: "utm-hero",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "resources-eyebrow",
							children: "Free marketing tool"
						}),
						/* @__PURE__ */ jsxs("h1", { children: ["UTM ", /* @__PURE__ */ jsx("span", { children: "Builder." })] }),
						/* @__PURE__ */ jsx("p", { children: "Build consistent campaign URLs for Meta, Google and other channels without manually formatting tracking parameters." })
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "utm-section",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "utm-section-title",
						children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Choose your platform" }), /* @__PURE__ */ jsx("p", { children: "Set sensible source and medium defaults for your campaign." })] })]
					}), /* @__PURE__ */ jsx("div", {
						className: "utm-platforms",
						children: Object.entries(PLATFORMS).map(([id, item]) => /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: platform === id ? "active" : "",
							onClick: () => changePlatform(id),
							children: [/* @__PURE__ */ jsx("strong", { children: item.label }), /* @__PURE__ */ jsx("small", { children: id === "meta" ? "Facebook and Instagram" : id === "google" ? "Search, Display, PMax and YouTube" : "Email, social, referral and other channels" })]
						}, id))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "utm-section",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "utm-section-title",
						children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Destination URL" }), /* @__PURE__ */ jsx("p", { children: "Use the exact page visitors should land on." })] })]
					}), /* @__PURE__ */ jsxs("label", {
						className: "utm-field full",
						children: [
							/* @__PURE__ */ jsxs("span", { children: ["Landing page URL ", /* @__PURE__ */ jsx("b", { children: "Required" })] }),
							/* @__PURE__ */ jsx("input", {
								value: baseUrl,
								onChange: (event) => setBaseUrl(event.target.value),
								placeholder: "https://example.com/landing-page"
							}),
							/* @__PURE__ */ jsx("small", { children: "Existing query parameters are preserved and matching UTM parameters are updated." })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "utm-section",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "utm-section-title",
							children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Campaign parameters" }), /* @__PURE__ */ jsx("p", { children: "Use lowercase naming and keep your campaign naming consistent." })] })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "utm-chip-row",
							children: STANDARD.map(([key, label, required]) => /* @__PURE__ */ jsxs("label", {
								className: active[key] ? "utm-chip active" : "utm-chip",
								children: [
									/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										checked: active[key],
										disabled: required === "Required",
										onChange: (event) => setActive((current) => ({
											...current,
											[key]: event.target.checked
										}))
									}),
									/* @__PURE__ */ jsx("span", { children: label }),
									/* @__PURE__ */ jsx("code", { children: key })
								]
							}, key))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "utm-fields",
							children: STANDARD.filter(([key]) => active[key]).map(([key, label, required, placeholder]) => /* @__PURE__ */ jsxs("label", {
								className: "utm-field",
								children: [
									/* @__PURE__ */ jsxs("span", { children: [
										label,
										" ",
										required === "Required" && /* @__PURE__ */ jsx("b", { children: "Required" })
									] }),
									/* @__PURE__ */ jsx("input", {
										value: values[key] || "",
										onChange: (event) => setValues((current) => ({
											...current,
											[key]: event.target.value
										})),
										placeholder
									}),
									/* @__PURE__ */ jsx("small", { children: key })
								]
							}, key))
						})
					]
				}),
				config.dynamic.length > 0 && /* @__PURE__ */ jsxs("section", {
					className: "utm-section",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "utm-section-title",
						children: [/* @__PURE__ */ jsx("span", { children: "04" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Platform dynamic parameters" }), /* @__PURE__ */ jsx("p", { children: "Optional values that can be populated automatically by the ad platform." })] })]
					}), /* @__PURE__ */ jsx("div", {
						className: "utm-chip-row",
						children: config.dynamic.map(([key, value, label]) => /* @__PURE__ */ jsxs("label", {
							className: dynamic.includes(value) ? "utm-chip active" : "utm-chip",
							children: [
								/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: dynamic.includes(value),
									onChange: () => setDynamic((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value])
								}),
								/* @__PURE__ */ jsx("span", { children: label }),
								/* @__PURE__ */ jsx("code", { children: value })
							]
						}, `${key}-${value}`))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "utm-section",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "utm-section-title",
							children: [/* @__PURE__ */ jsx("span", { children: "05" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Tracking check" }), /* @__PURE__ */ jsx("p", { children: "Confirm the measurement layer before relying on the campaign data." })] })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "utm-checks",
							children: config.checks.map((item, index) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: checks.includes(index),
								onChange: () => setChecks((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])
							}), /* @__PURE__ */ jsx("span", { children: item })] }, item))
						}),
						/* @__PURE__ */ jsx("div", {
							className: checks.length === config.checks.length ? "utm-notice good" : "utm-notice",
							children: checks.length === config.checks.length ? "✓ Tracking checks completed. You can build the link." : `${config.checks.length - checks.length} tracking check${config.checks.length - checks.length === 1 ? "" : "s"} still unconfirmed. You can still build the link.`
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "utm-section",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "utm-section-title",
							children: [/* @__PURE__ */ jsx("span", { children: "06" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Custom parameters" }), /* @__PURE__ */ jsx("p", { children: "Add another parameter only when your reporting system needs it." })] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "utm-custom",
							children: [
								/* @__PURE__ */ jsx("input", {
									value: customKey,
									onChange: (event) => setCustomKey(event.target.value),
									placeholder: "Key e.g. audience"
								}),
								/* @__PURE__ */ jsx("input", {
									value: customValue,
									onChange: (event) => setCustomValue(event.target.value),
									placeholder: "Value e.g. lookalike-1pct"
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: addCustom,
									children: "Add"
								})
							]
						}),
						custom.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "utm-custom-list",
							children: custom.map((item) => /* @__PURE__ */ jsxs("span", { children: [
								item.key,
								"=",
								item.value,
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setCustom((current) => current.filter((entry) => entry.key !== item.key)),
									children: "×"
								})
							] }, item.key))
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "utm-output",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "utm-output-head",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "resources-eyebrow",
								children: "Generated URL"
							}), /* @__PURE__ */ jsx("h2", { children: result && !warnings.length ? "Ready to use." : "Complete the required fields." })] }), /* @__PURE__ */ jsx("span", { children: result ? `${result.length} characters` : "Draft" })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "utm-url",
							children: result && !warnings.length ? result : "Your tagged URL will appear here."
						}),
						warnings.length > 0 && /* @__PURE__ */ jsx("ul", {
							className: "utm-warnings",
							children: warnings.map((warning) => /* @__PURE__ */ jsx("li", { children: warning }, warning))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "utm-actions",
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								className: "utm-primary",
								disabled: !result || warnings.length > 0,
								onClick: copy,
								children: copied ? "Copied ✓" : "Copy URL"
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: reset,
								children: "Reset"
							})]
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "utm-note",
					children: "UTMs help identify campaign context in analytics. They do not replace platform conversion tracking, auto tagging or proper CRM attribution."
				})
			]
		})
	});
}
export { UTMBuilder as default };
