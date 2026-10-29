import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/pages/BlogPromptArchitect.jsx
var initialForm = {
	website: "https://www.ashwinjames.com/",
	homepageAnchor: "Performance Marketing Specialist",
	topic: "",
	primaryKeyword: "",
	secondaryKeywords: "",
	searchIntent: "Infer from topic and source",
	audience: "",
	location: "UAE",
	articleType: "Infer from search intent",
	wordCount: "1,500 to 2,000 words",
	tone: "Expert, clear, conversational",
	source: "",
	internalLinks: "",
	externalSources: "",
	extraRequirements: ""
};
var PROFILE_KEY = "ashwin-seo-blog-builder-profile-v1";
var criteria = [
	"Search intent is clearly satisfied",
	"Audience and location are relevant",
	"Primary keyword is used naturally",
	"Primary keyword appears early",
	"Secondary terms are integrated naturally",
	"Title is clear and relevant",
	"Meta description is present",
	"URL slug is concise",
	"One descriptive H1 is used",
	"Logical H2 structure is present",
	"Subheadings answer reader questions",
	"Opening establishes relevance",
	"Article has useful depth",
	"Claims are supported by supplied sources",
	"No unsupported statistics or claims",
	"No fabricated quotes or credentials",
	"Examples make advice practical",
	"Content is original and specific",
	"Paragraphs are easy to scan",
	"Lists or steps improve readability",
	"Internal links are relevant",
	"Required homepage anchor is included",
	"External sources are credible",
	"Images have useful placement guidance",
	"Image alt text is descriptive",
	"Conclusion provides useful closure",
	"FAQ answers genuine questions",
	"Keyword use avoids stuffing",
	"Language is clear and grammatical",
	"Content avoids unnecessary repetition",
	"CTA fits the reader journey",
	"Heading hierarchy is logical",
	"Article matches requested format",
	"Content is ready for human fact check"
];
var Field = ({ label, hint, required, children }) => /* @__PURE__ */ jsxs("label", {
	className: "pa-field",
	children: [
		/* @__PURE__ */ jsxs("span", {
			className: "pa-label",
			children: [label, required && /* @__PURE__ */ jsx("em", { children: "Required" })]
		}),
		hint && /* @__PURE__ */ jsx("span", {
			className: "pa-hint",
			children: hint
		}),
		children
	]
});
function buildPrompt(f) {
	return [
		"You are an experienced SEO editor and subject matter writer. Create a useful, accurate, publication ready blog article using the brief below.",
		"",
		"ARTICLE BRIEF",
		"Topic: " + f.topic,
		"Primary keyword: " + f.primaryKeyword,
		"Secondary keywords and semantic terms: " + (f.secondaryKeywords || "Identify relevant terms from the topic without keyword stuffing."),
		"Search intent: " + f.searchIntent,
		"Audience: " + (f.audience || "Infer from the brief"),
		"Target location: " + (f.location || "Not specified"),
		"Article type: " + f.articleType,
		"Target length: " + f.wordCount,
		"Tone: " + f.tone,
		"Website: " + f.website,
		"Required homepage anchor: " + f.homepageAnchor,
		"Source material supplied by the user:\n" + f.source,
		"Internal links to include:\n" + (f.internalLinks || "Use only if supplied and relevant."),
		"External sources or references:\n" + (f.externalSources || "Use supplied sources where available. Do not invent citations or claim research was performed."),
		"Additional requirements:\n" + (f.extraRequirements || "None supplied."),
		"",
		"EDITORIAL AND SEO REQUIREMENTS",
		"1. Satisfy the likely search intent before optimizing for a plugin score.",
		"2. Build a clear structure with one H1, a compelling introduction, descriptive H2 and H3 headings where useful, and a meaningful conclusion.",
		"3. Use the primary keyword naturally in the title, opening and body where it genuinely fits. Integrate secondary terms contextually. Never force a density target or repeat keywords unnaturally.",
		"4. Address the target audience and geography only where relevant. Avoid generic filler and unsupported local claims.",
		"5. Use the supplied source material as the factual foundation. Preserve its meaning. Do not invent statistics, case studies, quotations, credentials, product details or source citations. Flag gaps that need verification.",
		"6. Explain concepts clearly, add practical examples only when supported or clearly labeled as illustrative, and make the article distinct rather than templated.",
		"7. Use short readable paragraphs, meaningful transitions, lists or tables only when they improve comprehension, and avoid repetition.",
		"8. Add the required homepage link using the exact anchor and website URL in a natural context. Include other internal links only when relevant and use their supplied destinations.",
		"9. Include credible external citations only from supplied references or sources actually available to you. Never fabricate URLs or citations.",
		"10. Include an appropriate next step or CTA without making the article overly promotional.",
		"11. Follow a logical heading hierarchy, accessible language, and factual, non sensational wording.",
		"",
		"OUTPUT FORMAT",
		"A. Suggested SEO title (aim for concise, accurate wording).",
		"B. Meta description (compelling, accurate and within a sensible search snippet length).",
		"C. Suggested URL slug.",
		"D. Article in Markdown, with exactly one H1 and useful H2/H3 headings.",
		"E. FAQ section only if genuine reader questions add value.",
		"F. Suggested featured image concept and descriptive alt text.",
		"G. Internal linking notes and sources used.",
		"H. A short fact check list identifying any claims or details that require human verification.",
		"",
		"Before finalizing, check that the article meets the brief, is coherent, useful, accurate, and does not claim to have verified facts that were not supplied."
	].join("\n");
}
function evaluateArticle(article, f) {
	const text = article.trim();
	const lower = text.toLowerCase();
	const wordCount = text ? text.split(/\s+/).length : 0;
	const h1 = (text.match(/^#\s+.+$/gm) || []).length;
	const h2 = (text.match(/^##\s+.+$/gm) || []).length;
	const checks = [
		["Article text provided", !!text],
		["Primary keyword present", !!f.primaryKeyword && lower.includes(f.primaryKeyword.toLowerCase())],
		["Primary keyword in opening", !!f.primaryKeyword && lower.slice(0, 500).includes(f.primaryKeyword.toLowerCase())],
		["At least one H1", h1 >= 1],
		["Exactly one H1", h1 === 1],
		["At least three H2 headings", h2 >= 3],
		["SEO title included", /(^|\n)(seo title|title tag|suggested seo title)\s*:/i.test(text)],
		["Meta description included", /meta description\s*:/i.test(text)],
		["URL slug included", /(url slug|suggested slug|slug)\s*:/i.test(text)],
		["Conclusion included", /(^|\n)#{1,3}\s*(conclusion|final thoughts|key takeaways)\b/im.test(text)],
		["FAQ included", /(^|\n)#{1,3}\s*(faq|frequently asked questions)\b/im.test(text)],
		["At least 700 words", wordCount >= 700],
		["Secondary terms used", !f.secondaryKeywords.trim() || f.secondaryKeywords.split(/[,\n]/).map((s) => s.trim()).filter(Boolean).some((s) => lower.includes(s.toLowerCase()))],
		["Homepage anchor included", !f.homepageAnchor.trim() || lower.includes(f.homepageAnchor.toLowerCase())],
		["Internal link URL included", !f.internalLinks.trim() || f.internalLinks.split(/\n/).filter(Boolean).some((line) => line.split(/\s+/).some((part) => part.startsWith("http") && text.includes(part)))],
		["Image guidance included", /alt text|featured image|image concept/i.test(text)],
		["Fact check notes included", /fact.?check|verify|verification/i.test(text)]
	];
	const passed = checks.filter((x) => x[1]).length;
	return {
		checks,
		wordCount,
		score: Math.round(passed / checks.length * 100)
	};
}
function BlogPromptArchitect() {
	const [form, setForm] = useState(initialForm);
	const [prompt, setPrompt] = useState("");
	const [article, setArticle] = useState("");
	const [tab, setTab] = useState("builder");
	const [notice, setNotice] = useState("");
	const [showAdvanced, setShowAdvanced] = useState(false);
	const [profileName, setProfileName] = useState("My default profile");
	const [saved, setSaved] = useState(false);
	const result = useMemo(() => evaluateArticle(article, form), [article, form]);
	const completion = Math.round([
		form.topic,
		form.primaryKeyword,
		form.source
	].filter((v) => v.trim()).length / 3 * 100);
	const update = (key, value) => setForm((old) => ({
		...old,
		[key]: value
	}));
	function generate() {
		if (!form.topic.trim() || !form.primaryKeyword.trim() || !form.source.trim()) {
			setNotice("Add a topic, primary keyword and source material first.");
			return;
		}
		setPrompt(buildPrompt(form));
		setNotice("Prompt assembled in your browser. No AI request was made.");
	}
	async function copy(value) {
		if (!value) return;
		try {
			await navigator.clipboard.writeText(value);
			setNotice("Copied to clipboard.");
		} catch {
			setNotice("Clipboard access was blocked. Select and copy the text manually.");
		}
	}
	function saveProfile() {
		try {
			localStorage.setItem(PROFILE_KEY, JSON.stringify({
				name: profileName,
				form: {
					...form,
					topic: "",
					primaryKeyword: "",
					secondaryKeywords: "",
					source: "",
					internalLinks: "",
					externalSources: "",
					extraRequirements: ""
				}
			}));
			setSaved(true);
			setNotice("Default profile saved in this browser.");
		} catch {
			setNotice("Could not save in this browser.");
		}
	}
	function loadProfile() {
		try {
			const p = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
			if (!p) {
				setNotice("No saved profile found in this browser.");
				return;
			}
			setForm((old) => ({
				...old,
				...p.form
			}));
			setProfileName(p.name || "My default profile");
			setNotice("Default profile loaded.");
		} catch {
			setNotice("Could not load the saved profile.");
		}
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "prompt-architect-page sbb-page",
		children: [/* @__PURE__ */ jsx("section", {
			className: "prompt-architect-hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container prompt-architect-hero-inner",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "prompt-architect-badge",
						children: "SEO BLOG BUILDER"
					}),
					/* @__PURE__ */ jsxs("h1", { children: ["Build a better brief. ", /* @__PURE__ */ jsx("span", { children: "Publish with purpose." })] }),
					/* @__PURE__ */ jsx("p", { children: "Create a reusable SEO blog prompt from your own brief, then run a transparent first pass on the article you receive. Prompt assembly and basic scoring work without an AI API." }),
					/* @__PURE__ */ jsxs("div", {
						className: "prompt-architect-hero-meta",
						children: [
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("b", { children: "01" }), " Configure"] }),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("b", { children: "02" }), " Copy prompt"] }),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("b", { children: "03" }), " Evaluate article"] })
						]
					})
				]
			})
		}), /* @__PURE__ */ jsxs("section", {
			className: "prompt-architect-workspace",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "container sbb-layout",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "sbb-howto",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "sbb-howto-heading",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "prompt-architect-eyebrow",
										children: "START HERE"
									}),
									/* @__PURE__ */ jsx("h2", { children: "How to use the SEO Blog Builder" }),
									/* @__PURE__ */ jsx("p", { children: "Follow these steps to create your article brief, generate a prompt and review the finished draft." })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sbb-step-list",
								children: [
									/* @__PURE__ */ jsxs("details", {
										className: "sbb-step",
										open: true,
										children: [/* @__PURE__ */ jsxs("summary", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-num",
												children: "01"
											}),
											/* @__PURE__ */ jsx("strong", { children: "Set your website defaults" }),
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-action",
												children: "View step"
											})
										] }), /* @__PURE__ */ jsx("p", { children: "Add your website, preferred homepage anchor, audience and location. Save the profile in this browser to reuse it later." })]
									}),
									/* @__PURE__ */ jsxs("details", {
										className: "sbb-step",
										children: [/* @__PURE__ */ jsxs("summary", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-num",
												children: "02"
											}),
											/* @__PURE__ */ jsx("strong", { children: "Complete the article brief" }),
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-action",
												children: "View step"
											})
										] }), /* @__PURE__ */ jsx("p", { children: "Enter the topic and primary keyword, then add secondary terms, search intent, article type, tone and target length." })]
									}),
									/* @__PURE__ */ jsxs("details", {
										className: "sbb-step",
										children: [/* @__PURE__ */ jsxs("summary", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-num",
												children: "03"
											}),
											/* @__PURE__ */ jsx("strong", { children: "Add your source material" }),
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-action",
												children: "View step"
											})
										] }), /* @__PURE__ */ jsx("p", { children: "Paste your notes, research, experience and references. Include internal links or extra instructions in Advanced controls when needed." })]
									}),
									/* @__PURE__ */ jsxs("details", {
										className: "sbb-step",
										children: [/* @__PURE__ */ jsxs("summary", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-num",
												children: "04"
											}),
											/* @__PURE__ */ jsx("strong", { children: "Assemble and use the prompt" }),
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-action",
												children: "View step"
											})
										] }), /* @__PURE__ */ jsx("p", { children: "Select “Assemble SEO blog prompt”, copy the result and paste it into your preferred AI writing tool. This page builds the prompt locally and does not generate the article itself." })]
									}),
									/* @__PURE__ */ jsxs("details", {
										className: "sbb-step",
										children: [/* @__PURE__ */ jsxs("summary", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-num",
												children: "05"
											}),
											/* @__PURE__ */ jsx("strong", { children: "Evaluate the draft" }),
											/* @__PURE__ */ jsx("span", {
												className: "sbb-step-action",
												children: "View step"
											})
										] }), /* @__PURE__ */ jsx("p", { children: "Paste the generated article into the SEO blog score tab. Review the automated checks, then manually verify facts, sources, usefulness and editorial quality before publishing." })]
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "sbb-howto-note",
								children: "Tip: provide specific, trustworthy source material. The tool instructs the writer not to invent facts, but the final article still needs a human fact check."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "sbb-intro",
						children: [
							/* @__PURE__ */ jsx("h2", { children: "One workspace for your SEO content workflow" }),
							/* @__PURE__ */ jsx("p", { children: "Set your reusable website preferences once. For each article, add the topic, keyword and source material, then copy the assembled prompt into your preferred AI tool." }),
							/* @__PURE__ */ jsxs("div", {
								className: "sbb-tabs",
								children: [/* @__PURE__ */ jsx("button", {
									className: tab === "builder" ? "active" : "",
									onClick: () => setTab("builder"),
									children: "1. Prompt builder"
								}), /* @__PURE__ */ jsx("button", {
									className: tab === "score" ? "active" : "",
									onClick: () => setTab("score"),
									children: "2. SEO blog score"
								})]
							})
						]
					}),
					tab === "builder" ? /* @__PURE__ */ jsxs("div", {
						className: "prompt-architect-form-card sbb-card",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "pa-topbar",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "prompt-architect-eyebrow",
									children: "ARTICLE WORKSPACE"
								}), /* @__PURE__ */ jsx("h2", { children: "Configure your blog brief" })] }), /* @__PURE__ */ jsx("button", {
									className: "pa-clear",
									type: "button",
									onClick: () => {
										setForm(initialForm);
										setPrompt("");
										setNotice("Article brief cleared.");
									},
									children: "Clear brief"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pa-progress",
								children: [/* @__PURE__ */ jsx("div", {
									className: "pa-progress-track",
									children: /* @__PURE__ */ jsx("span", { style: { width: completion + "%" } })
								}), /* @__PURE__ */ jsxs("span", { children: [completion, "% required fields"] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pa-section",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "pa-section-heading",
										children: [/* @__PURE__ */ jsx("span", {
											className: "pa-section-number",
											children: "01"
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Reusable website defaults" }), /* @__PURE__ */ jsx("p", { children: "Save these once and load them for future articles." })] })]
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Profile name",
										children: /* @__PURE__ */ jsx("input", {
											className: "pa-input",
											value: profileName,
											onChange: (e) => setProfileName(e.target.value)
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pa-two-col",
										children: [/* @__PURE__ */ jsx(Field, {
											label: "Website URL",
											children: /* @__PURE__ */ jsx("input", {
												className: "pa-input",
												value: form.website,
												onChange: (e) => update("website", e.target.value)
											})
										}), /* @__PURE__ */ jsx(Field, {
											label: "Homepage anchor text",
											children: /* @__PURE__ */ jsx("input", {
												className: "pa-input",
												value: form.homepageAnchor,
												onChange: (e) => update("homepageAnchor", e.target.value)
											})
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pa-two-col",
										children: [/* @__PURE__ */ jsx(Field, {
											label: "Default audience",
											children: /* @__PURE__ */ jsx("input", {
												className: "pa-input",
												value: form.audience,
												onChange: (e) => update("audience", e.target.value),
												placeholder: "e.g. founders and marketing teams"
											})
										}), /* @__PURE__ */ jsx(Field, {
											label: "Default location",
											children: /* @__PURE__ */ jsx("input", {
												className: "pa-input",
												value: form.location,
												onChange: (e) => update("location", e.target.value)
											})
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "sbb-actions",
										children: [/* @__PURE__ */ jsx("button", {
											className: "pa-add-link",
											type: "button",
											onClick: saveProfile,
											children: "Save defaults"
										}), /* @__PURE__ */ jsx("button", {
											className: "pa-add-link",
											type: "button",
											onClick: loadProfile,
											children: "Load saved defaults"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pa-section",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "pa-section-heading",
										children: [/* @__PURE__ */ jsx("span", {
											className: "pa-section-number",
											children: "02"
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Article requirements" }), /* @__PURE__ */ jsx("p", { children: "Define the search target and intended reader." })] })]
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Blog topic",
										required: true,
										children: /* @__PURE__ */ jsx("input", {
											className: "pa-input pa-input-large",
											value: form.topic,
											onChange: (e) => update("topic", e.target.value),
											placeholder: "What should this article explain?"
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pa-two-col",
										children: [/* @__PURE__ */ jsx(Field, {
											label: "Primary keyword",
											required: true,
											children: /* @__PURE__ */ jsx("input", {
												className: "pa-input",
												value: form.primaryKeyword,
												onChange: (e) => update("primaryKeyword", e.target.value),
												placeholder: "Main search query"
											})
										}), /* @__PURE__ */ jsx(Field, {
											label: "Search intent",
											children: /* @__PURE__ */ jsx("select", {
												className: "pa-input",
												value: form.searchIntent,
												onChange: (e) => update("searchIntent", e.target.value),
												children: [
													"Infer from topic and source",
													"Informational",
													"Commercial investigation",
													"Transactional",
													"Navigational"
												].map((v) => /* @__PURE__ */ jsx("option", { children: v }, v))
											})
										})]
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Secondary keywords and semantic terms",
										children: /* @__PURE__ */ jsx("textarea", {
											className: "pa-input",
											rows: 3,
											value: form.secondaryKeywords,
											onChange: (e) => update("secondaryKeywords", e.target.value),
											placeholder: "Separate terms with commas or new lines"
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "pa-two-col",
										children: [/* @__PURE__ */ jsx(Field, {
											label: "Article type",
											children: /* @__PURE__ */ jsx("select", {
												className: "pa-input",
												value: form.articleType,
												onChange: (e) => update("articleType", e.target.value),
												children: [
													"Infer from search intent",
													"How to guide",
													"Ultimate guide",
													"Listicle",
													"Comparison",
													"Case study",
													"Explainer",
													"Thought leadership"
												].map((v) => /* @__PURE__ */ jsx("option", { children: v }, v))
											})
										}), /* @__PURE__ */ jsx(Field, {
											label: "Target word count",
											children: /* @__PURE__ */ jsx("input", {
												className: "pa-input",
												value: form.wordCount,
												onChange: (e) => update("wordCount", e.target.value)
											})
										})]
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Tone",
										children: /* @__PURE__ */ jsx("input", {
											className: "pa-input",
											value: form.tone,
											onChange: (e) => update("tone", e.target.value)
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pa-section pa-source-section",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "pa-section-heading",
									children: [/* @__PURE__ */ jsx("span", {
										className: "pa-section-number",
										children: "03"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "Source material" }), /* @__PURE__ */ jsx("p", { children: "Notes, research, experience, statistics, examples and source links." })] })]
								}), /* @__PURE__ */ jsx(Field, {
									label: "Your knowledge and research",
									required: true,
									children: /* @__PURE__ */ jsx("textarea", {
										className: "pa-input pa-source",
										rows: 9,
										value: form.source,
										onChange: (e) => update("source", e.target.value),
										placeholder: "Paste rough notes or source material. The prompt will instruct the writer not to invent missing facts."
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pa-advanced-toggle",
								role: "button",
								tabIndex: 0,
								onClick: () => setShowAdvanced((v) => !v),
								onKeyDown: (e) => {
									if (e.key === "Enter" || e.key === " ") setShowAdvanced((v) => !v);
								},
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "Advanced controls" }), /* @__PURE__ */ jsx("small", { children: "Internal links, references and special instructions" })] }), /* @__PURE__ */ jsx("span", {
									className: showAdvanced ? "pa-chevron open" : "pa-chevron",
									children: "⌄"
								})]
							}),
							showAdvanced && /* @__PURE__ */ jsxs("div", {
								className: "pa-advanced-panel",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "Internal links",
										hint: "Enter one link per line as: anchor text | https://destination",
										children: /* @__PURE__ */ jsx("textarea", {
											className: "pa-input",
											rows: 4,
											value: form.internalLinks,
											onChange: (e) => update("internalLinks", e.target.value),
											placeholder: "performance marketing services | https://www.ashwinjames.com/services/performance-marketing"
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "External sources",
										children: /* @__PURE__ */ jsx("textarea", {
											className: "pa-input",
											rows: 3,
											value: form.externalSources,
											onChange: (e) => update("externalSources", e.target.value),
											placeholder: "Paste trusted source URLs or reference notes"
										})
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Additional requirements",
										children: /* @__PURE__ */ jsx("textarea", {
											className: "pa-input",
											rows: 3,
											value: form.extraRequirements,
											onChange: (e) => update("extraRequirements", e.target.value),
											placeholder: "Brand rules, exclusions, CTA, schema or publishing notes"
										})
									})
								]
							}),
							notice && /* @__PURE__ */ jsx("p", {
								className: "sbb-notice",
								role: "status",
								children: notice
							}),
							/* @__PURE__ */ jsxs("button", {
								className: "prompt-architect-generate",
								type: "button",
								onClick: generate,
								children: ["Assemble SEO blog prompt ", /* @__PURE__ */ jsx("b", { children: "→" })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "prompt-architect-note",
								children: "Runs locally in this page. Your brief is not sent to an AI service to assemble the prompt."
							}),
							prompt && /* @__PURE__ */ jsxs("div", {
								className: "sbb-prompt-output",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "pa-output-head",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "prompt-architect-eyebrow",
										children: "READY TO USE"
									}), /* @__PURE__ */ jsx("h2", { children: "Your assembled prompt" })] }), /* @__PURE__ */ jsx("button", {
										className: "prompt-architect-copy",
										onClick: () => copy(prompt),
										children: "Copy prompt"
									})]
								}), /* @__PURE__ */ jsx("textarea", {
									className: "prompt-architect-output",
									rows: 18,
									readOnly: true,
									value: prompt
								})]
							})
						]
					}) : /* @__PURE__ */ jsxs("div", {
						className: "prompt-architect-form-card sbb-card",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "pa-topbar",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
									className: "prompt-architect-eyebrow",
									children: "FIRST PASS REVIEW"
								}), /* @__PURE__ */ jsx("h2", { children: "Evaluate your generated article" })] }), /* @__PURE__ */ jsx("button", {
									className: "pa-clear",
									onClick: () => {
										setArticle("");
										setNotice("Article text cleared.");
									},
									children: "Clear article"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "sbb-muted",
								children: "Paste the article returned by your AI tool. The score checks visible structure and phrase presence. It is not a Google ranking prediction or a substitute for editorial review."
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Generated article in Markdown",
								children: /* @__PURE__ */ jsx("textarea", {
									className: "pa-input sbb-article",
									rows: 16,
									value: article,
									onChange: (e) => setArticle(e.target.value),
									placeholder: "Paste the SEO title, meta description, slug and article here..."
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sbb-score",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "prompt-architect-eyebrow",
										children: "STRUCTURE CHECK SCORE"
									}),
									/* @__PURE__ */ jsxs("strong", { children: [result.score, /* @__PURE__ */ jsx("small", { children: "/100" })] }),
									/* @__PURE__ */ jsxs("p", { children: [
										result.checks.filter((c) => c[1]).length,
										" of ",
										result.checks.length,
										" automated checks passed · ",
										result.wordCount,
										" words"
									] })
								] }), /* @__PURE__ */ jsx("div", {
									className: "sbb-score-track",
									children: /* @__PURE__ */ jsx("span", { style: { width: result.score + "%" } })
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "sbb-checks",
								children: result.checks.map(([label, pass]) => /* @__PURE__ */ jsxs("div", {
									className: "sbb-check",
									children: [/* @__PURE__ */ jsx("span", {
										className: pass ? "pass" : "fail",
										children: pass ? "✓" : "○"
									}), label]
								}, label))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "pa-trust-note",
								children: [/* @__PURE__ */ jsx("span", { children: "i" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "What this score cannot verify" }), /* @__PURE__ */ jsx("p", { children: "Search intent quality, factual accuracy, originality, source credibility, readability, keyword cannibalization, live links, schema validity and actual search performance require human or external checks." })] })]
							}),
							/* @__PURE__ */ jsx("button", {
								className: "pa-add-link",
								onClick: () => setTab("builder"),
								children: "Back to prompt builder"
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("details", {
				className: "sbb-criteria",
				children: [
					/* @__PURE__ */ jsxs("summary", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "prompt-architect-eyebrow",
							children: "EDITORIAL STANDARD"
						}),
						/* @__PURE__ */ jsx("strong", { children: "View all 34 blog quality criteria" }),
						/* @__PURE__ */ jsx("span", {
							className: "sbb-criteria-summary",
							children: "Included in the generated prompt"
						})
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "sbb-criteria-heading",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "prompt-architect-eyebrow",
								children: "EDITORIAL STANDARD"
							}),
							/* @__PURE__ */ jsx("h2", { children: "Criteria built into the blog prompt" }),
							/* @__PURE__ */ jsx("p", { children: "These are the 34 editorial and SEO criteria the prompt asks the writer to follow. They guide article creation; they are not all automatically measured by the score above." })
						]
					}),
					/* @__PURE__ */ jsx("ol", {
						className: "sbb-criteria-list",
						children: criteria.map((item, index) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }), item] }, item))
					})
				]
			})]
		})]
	});
}
export { BlogPromptArchitect as default };
