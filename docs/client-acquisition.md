# SEO and client acquisition implementation

Prepared 14 November 2026. Branch: `seo/client-acquisition`. Base: `37806ce31d799c2630a763313f0865362ff009c3`.

## Decision and business objective

Improve qualified enquiries from existing commercial visibility before expanding the article library. Search Console data for 16 October–10 November returned 30 site-level clicks and 2,413 impressions. Four commercial queries produced 229 impressions and zero clicks on the apex homepage, at average positions 4.26–5.15. Those observations support improving the homepage's commercial offer; they do not prove copy alone caused the lack of clicks.

The homepage retains its specialist title, existing brand headline, and ranking URL. It now describes consultant support, lead quality and the connected ads/landing page/CRM offer. Service and article links give readers a clearer path to enquire. No overlapping commercial pages were merged or removed based on this short observation window.

## Implemented

- Explicit HTTPS www host/index redirects and direct permanent redirects for legacy service destinations. Existing intended public URLs are retained.
- Removed the catch-all homepage rewrite. Known pages have prerendered static files; `dist/404.html` supplies a useful noindex fallback with Vercel's native 404 behaviour. Trailing slash preference is explicit. API functions and static assets remain outside any catch-all rewrite.
- Fixed internal links to final canonical destinations, including dynamically generated services/related-service links.
- One metadata registry for initial HTML and React navigation, including both extra article routes. Removed competing page title effects. Added page-specific OG titles/descriptions and normalized canonical paths.
- Standardized first-party website references to www in article schema and links.
- Fixed repeated H1 elements in the AOV and invoice articles; regenerated the sitemap from current metadata.
- Added a factual privacy/contact page describing the site's present enquiry, measurement and website enquiry chat interfaces. Removed the nonexistent terms link and generic social-homepage links. This is not a legal compliance certification.
- Replaced unsupported animated homepage counters with the actual measurement framework. Removed role-only testimonials without established provenance and corrected the testimonial website-as-image error.
- Reframed the two promoted case-study pages as practical frameworks. Their URLs are retained, but disputed CRM totals and unsupported signal-recovery percentages are no longer marketed as verified client results. Removed unsupported placeholder project results from the index.
- Replaced the service page's unsupported experience/rating badges with factual delivery positioning.
- Added separate success-only enquiry events, resource-request events and contact-click events; form submissions are locked while delivery is pending. Measurement errors cannot turn successful delivery into a form failure. Analytics payloads contain controlled labels and known route paths, not form details, destination URLs, messages or query strings.
- Resource CTA now says “Request checklist” and provides immediate online access to the existing checklist.
- Below-fold homepage portrait is lazy-loaded with dimensions.
- Added repeatable regression tests and wired them into the existing CI workflow.
- Explicitly set the Vercel build command to `npm run build` and output directory to `dist`, so the static prerender and custom 404 artifacts are produced consistently.

## Proof that must be supplied before restoring results claims

The old CRM summary showed 4,499 leads and 609 SQLs. Its monthly rows summed to 4,579 and 709. Neither dataset has been declared authoritative. Reconcile the original export, duplicate handling, cohort dates, reporting cutoff and SQL rules before republishing quantitative results. The earlier source remains in git history at the base revision.

For any restored homepage metric or project claim, record the source, period, denominator, attribution, scope of Ashwin's contribution, and permission to publish. Named recommendations already present in the site are retained; that is not independent verification of their provenance.

## Verification and limits

`npm run verify` builds the production site and runs the regression suite. It checks all 72 intended page outputs for one H1, unique title/description, canonical and page-specific OG metadata, plus internal link integrity and the 404 artifact/configuration. UI integration tests exercise extra-route metadata, slash normalization, successful/failed/duplicate enquiry submissions, resource requests and contact click classification using jsdom. Email delivery is replaced by a test transport; no test enquiry is sent.

A real Chromium preview could not be launched in the execution sandbox; the cloud browser could not access the local server. Therefore responsive visual QA and a real browser network trace remain release checks. There is no new Lighthouse/Core Web Vitals claim. Build-generated server bundles are restored after verification, keeping the review focused on source changes; the release build regenerates them.

## Release checks (not performed)

No git push, deployment, indexing submission, third-party contact or production setting change has been made.

1. In the production Vercel project confirm this repository root, `npm run build`, output `dist`, both apex/www domains and TLS. Ensure no project/bulk route overrides the static 404 or redirects www to apex.
2. Deploy only after authorization. Test `/`, a service, an article, a resource and `/privacy` by direct request, refresh and client navigation.
3. Confirm invented paths and missing assets return 404; the custom page renders for unknown HTML routes; `/api/lead-chat` retains its own response handling. Confirm www root returns 200 without a redirect loop.
4. Check apex/index/legacy/trailing-slash variants and query preservation with real HTTP requests. Config/unit checks are not a substitute for Vercel HTTP verification.
5. Confirm external email delivery, WhatsApp and the booking destination in a controlled, authorized release check. No form was sent during this implementation.
6. Review privacy text against the enabled production tags and service configuration; no legal completeness claim is made.

Vercel references: https://vercel.com/kb/guide/custom-404-page and https://vercel.com/docs/project-configuration/vercel-json

## GA4/GTM setup required

The site pushes these events into the existing data layer. They are not confirmed as arriving in GA4 until GTM is configured and tested:

| Data layer event | `form_id` | Meaning | GA4 key event? |
| --- | --- | --- | --- |
| `generate_lead` | `contact`, `case_study`, `chatbot` | EmailJS reports successful enquiry delivery | Yes, once validated |
| `resource_request` | `homepage_checklist` | Successful checklist request | Keep separate from client leads |
| `contact_click` | `whatsapp`, `email`, `booking` | Visitor opens a contact destination | No, this is intent, not a confirmed enquiry |

All include `page_path` from the known route registry. In GTM create Custom Event triggers using these exact event names, corresponding GA4 event tags, and Data Layer Variables `form_id`/`page_path`. Reuse the existing GA4 configuration and consent settings. Check for existing form-click/automatic lead tags to avoid duplicate counts. Test successful and failed submissions and cross-route navigation in Preview/DebugView, then publish only when authorized. Do not send names, emails, phone numbers, messages or complete contact URLs as analytics parameters.

Do not interpret `generate_lead` as a qualified lead or booked client. Qualification and client outcomes need CRM feedback.

## Measurement after release

- Annotate the actual release date. Compare complete windows with consistent country/device/query filters; do not compare to partial current days.
- Track homepage commercial impressions, clicks and CTR at comparable positions. The baseline is small; avoid declaring a winner from one or two clicks.
- Monitor www/apex reporting and Google-selected canonicals. Historical apex impressions do not prove the current redirect is broken. URL Inspection remains outside this connection's exposed capabilities.
- Track organic enquiry success, qualified enquiries, meetings and clients separately. Derive organic enquiry rate from successful enquiries/organic landing sessions only after the GA4 event and attribution definitions are validated.
- Search Console site totals and page/query rows use different aggregation and may not reconcile. The returned query rows omitted much of the site total; do not label unreported clicks non-branded or allocate them to guessed queries.
- Windsor's current trial allows 30 days of history. Use a direct Search Console export for a 90-day comparison; no subscription upgrade is required to review exported data.

## Exact changed files

- `.github/workflows/ci.yml`
- `.gitignore`
- `content/roas-vs-roi.md`
- `docs/client-acquisition.md`
- `index.html`
- `package-lock.json`
- `package.json`
- `public/sitemap.xml`
- `scripts/generate-sitemap.js`
- `scripts/prerender-seo.js`
- `src/App.jsx`
- `src/components/case-studies/CaseStudyLeadForm.jsx`
- `src/components/contact/ContactForm.jsx`
- `src/components/home/AboutPreview.jsx`
- `src/components/home/CaseStudiesPreview.jsx`
- `src/components/home/ExpertiseTags.jsx`
- `src/components/home/Hero.jsx`
- `src/components/home/ResourceLead.jsx`
- `src/components/home/Results.jsx`
- `src/components/home/ServicesPreview.jsx`
- `src/components/home/Testimonials.jsx`
- `src/components/layout/ContactTracking.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/layout/RouteMeta.jsx`
- `src/content/conversion-tracking-performance-marketing.md`
- `src/content/cost-per-lead-vs-cost-per-customer.md`
- `src/content/crm-data-for-paid-ads.md`
- `src/content/crm-lead-tracking-paid-ads.md`
- `src/content/customer-acquisition-cost-vs-cpl.md`
- `src/content/free-invoice-generator-for-freelancers.md`
- `src/content/ga4-performance-marketing.md`
- `src/content/google-ads-clicks-not-turning-into-leads.md`
- `src/content/google-ads-conversion-tracking.md`
- `src/content/google-ads-keyword-intent.md`
- `src/content/google-ads-lead-generation-uae.md`
- `src/content/google-ads-lead-quality.md`
- `src/content/google-ads-vs-meta-ads.md`
- `src/content/google-search-ads-lead-generation-campaign.md`
- `src/content/lead-form-optimisation.md`
- `src/content/lead-generation-vs-lead-qualification.md`
- `src/content/meta-ads-campaign-structure.md`
- `src/content/meta-ads-lead-generation-uae.md`
- `src/content/meta-ads-targeting.md`
- `src/content/paid-advertising-roi.md`
- `src/content/performance-marketing-dubai-guide.md`
- `src/content/performance-marketing-metrics.md`
- `src/content/performance-marketing-strategy-uae.md`
- `src/content/performance-marketing-vs-digital-marketing.md`
- `src/content/roas-vs-roi.md`
- `src/content/why-attribution-matters-performance-marketing.md`
- `src/data/caseStudies.js`
- `src/layouts/MainLayout.jsx`
- `src/pages/BestPerformanceMarketingSpecialistBlog.jsx`
- `src/pages/BlogPromptArchitect.jsx`
- `src/pages/CROService.jsx`
- `src/pages/CTRExplainedBlog.jsx`
- `src/pages/CaseStudies.jsx`
- `src/pages/ContentAnglesStrategyBlog.jsx`
- `src/pages/ConversionTrackingPerformanceMarketingBlog.jsx`
- `src/pages/CostPerLeadVsCostPerCustomerBlog.jsx`
- `src/pages/CreativeIsTheNewTargetingBlog.jsx`
- `src/pages/CrmCaseStudy.jsx`
- `src/pages/CrmDataForPaidAdsBlog.jsx`
- `src/pages/CrmLeadTrackingPaidAdsBlog.jsx`
- `src/pages/CustomerAcquisitionCostVsCplBlog.jsx`
- `src/pages/DigitalMarketingConsultantDubai.jsx`
- `src/pages/FreelanceInvoiceGeneratorBlog.jsx`
- `src/pages/FreelanceMarketingConsultantUaeBlog.jsx`
- `src/pages/Ga4PerformanceMarketingBlog.jsx`
- `src/pages/GoogleAdsClicksNotTurningIntoLeadsBlog.jsx`
- `src/pages/GoogleAdsConversionTrackingBlog.jsx`
- `src/pages/GoogleAdsDetail.jsx`
- `src/pages/GoogleAdsKeywordIntentBlog.jsx`
- `src/pages/GoogleAdsLeadGenerationUaeBlog.jsx`
- `src/pages/GoogleAdsLeadQualityBlog.jsx`
- `src/pages/GoogleAdsVsMetaAdsBlog.jsx`
- `src/pages/GoogleSearchAdsLeadGenerationCampaignBlog.jsx`
- `src/pages/HormoziMetaAdsStrategy.jsx`
- `src/pages/HubSpotCRMService.jsx`
- `src/pages/IncreaseAverageOrderValueBlog.jsx`
- `src/pages/LeadFormOptimisationBlog.jsx`
- `src/pages/LeadGenerationRightLeadsBlog.jsx`
- `src/pages/LeadGenerationService.jsx`
- `src/pages/LeadGenerationVsLeadQualificationBlog.jsx`
- `src/pages/LeadQualityBenchmarksBlog.jsx`
- `src/pages/LeadQualityConnectionRatesBlog.jsx`
- `src/pages/LeadQualityFramework.jsx`
- `src/pages/MarketingAttributionBlog.jsx`
- `src/pages/MarketingConceptsBlog.jsx`
- `src/pages/MarketingSalesFunnelSalesPipelineBlog.jsx`
- `src/pages/MetaAdsAlgorithmBlog.jsx`
- `src/pages/MetaAdsCampaignStructureBlog.jsx`
- `src/pages/MetaAdsLeadGenerationUaeBlog.jsx`
- `src/pages/MetaAdsLeadsNoSalesBlog.jsx`
- `src/pages/MetaAdsService.jsx`
- `src/pages/MetaAdsTargetingBlog.jsx`
- `src/pages/MetaTrackingCaseStudy.jsx`
- `src/pages/PaidAdsSpecialistUaeBlog.jsx`
- `src/pages/PaidAdvertisingRoiBlog.jsx`
- `src/pages/PerformanceMarketingDubaiGuideBlog.jsx`
- `src/pages/PerformanceMarketingMetricsBlog.jsx`
- `src/pages/PerformanceMarketingSalaryBlog.jsx`
- `src/pages/PerformanceMarketingService.jsx`
- `src/pages/PerformanceMarketingSpecialistBlog.jsx`
- `src/pages/PerformanceMarketingStrategyUaeBlog.jsx`
- `src/pages/PerformanceMarketingVsDigitalMarketingBlog.jsx`
- `src/pages/Privacy.jsx`
- `src/pages/RoasVsRoiBlog.jsx`
- `src/pages/SEOService.jsx`
- `src/pages/SeoAiSearchBlog.jsx`
- `src/pages/ServiceDetail.jsx`
- `src/pages/ServiceLanding.jsx`
- `src/pages/Services.jsx`
- `src/pages/WhatsAppMarketingService.jsx`
- `src/pages/WordPressDevelopmentService.jsx`
- `src/pages/WordPressService.jsx`
- `src/seo-meta.js`
- `src/seo.js`
- `src/utils/analytics.js`
- `tests/emailjs-mock.js`
- `tests/seo.test.js`
- `tests/ui-fixture.jsx`
- `tests/ui.test.js`
- `tests/vite.config.js`
- `vercel.json`

## Follow-up: analytics and hosting evidence

Read-only checks on 14 November 2026 confirmed:

- GA4 property `552714700` returned 180 sessions for 16 October–10 November: 43 Organic Search sessions (27 engaged), 66 Direct, 46 AI Assistant, 13 Referral, 5 Organic Social, 4 Paid Search and 3 Unassigned. Channel classifications are as returned by GA4.
- GA4 returned 14 `form_start` events, 21 generic `click` events and no recorded `generate_lead` or form-success event in this window. All returned key-event counts were zero. This is a measurement limitation, not proof that no enquiries occurred.
- Organic landing sessions were concentrated on the Hormozi article (12), salary article (8), homepage (6) and About (3). Three had an unset landing page. These are not qualification or client counts.
- The production Vercel project is connected to the expected repository and currently serves base revision `37806ce`. Both custom domains are verified. The apex domain is already configured as a 308 redirect to www, and www has no reverse redirect. No project-level routing rules were returned. Node is configured as 24.x.
- The scripted website enquiry chat submits completed answers through its dedicated EmailJS template. Added its own success-only `generate_lead` event (`form_id: chatbot`) and a pending-send lock. Restarting is disabled while delivery is pending. Updated the privacy notice to describe that actual flow rather than an assumed AI API integration.
- The extra chat regression runs the questionnaire against the mocked transport and verifies that no lead event is emitted until delivery resolves, and no personal answers enter the event payload.

Additional changed file: `src/components/AILeadChat.jsx`. The optional server-side AI endpoint was not invoked or changed. No external email was sent, and no GTM or production configuration was modified.

## Additional discovery, content and performance work

- Added visible breadcrumbs and matching `BreadcrumbList` JSON-LD for every known non-home page, derived from the same route registry. Unknown pages receive no misleading breadcrumb markup. Added homepage `WebSite` identity markup referencing the existing Person entity. These make hierarchy and identity explicit; no rich-result or ranking guarantee is made.
- Added bounded, topic-matched related-reading/service links on article, service detail and framework pages, with no self-links or invented destinations. Articles link to the author profile. The destination sets are curated rather than generated keyword pages.
- Replaced the homepage's date-based feature list with existing lead-quality, CRM and CPM diagnostic articles that support business enquiries.
- Added practical starting-point guidance to the performance marketing services page: a review, a focused acquisition channel, or a connected enquiry journey. No new prices, performance claims or ranking URLs were introduced.
- Set article Open Graph type consistently in initial HTML and client navigation.
- Enabled lazy loading for the below-fold booking iframe. The homepage portrait now requests Cloudinary's automatic format/quality delivery at 640px width and reserves its actual square aspect ratio. Test responses were 1,607,391 bytes for the original PNG and 26,902 bytes for the optimized JPEG response, both HTTP 200: approximately 98.3% fewer image bytes. The browser may negotiate a different format. This measures one asset response, not page speed or Core Web Vitals.
- Expanded validation to parse JSON-LD and compare generated breadcrumb markup and visible navigation across all 72 page outputs. All 13 regression checks pass after the production build.

Additional source files in this step: `src/utils/content-navigation.js`, `src/components/layout/ContentNavigation.jsx`, `src/styles/content-navigation.css`, `src/pages/Home.jsx`, `src/components/home/Insights.jsx`, `src/components/home/AboutPreview.jsx`, `src/components/contact/CalendlyBooking.jsx`, `src/pages/PerformanceMarketingService.jsx`, `src/layouts/MainLayout.jsx`, `src/seo.js`, `src/components/layout/RouteMeta.jsx`, `scripts/prerender-seo.js`, `tests/seo.test.js` and `tests/ui.test.js`.

References: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb and https://developers.google.com/search/docs/crawling-indexing/links-crawlable
