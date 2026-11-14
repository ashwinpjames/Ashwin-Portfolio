# SEO blog acquisition implementation

Implemented 14 November 2026. Repository-local changes; no deployment or external messages in this change set.

## Editorial decisions

The 12-topic plan is implemented as six substantial practical updates on established URLs and six new guides. Existing articles are retained to avoid new URLs competing for the same intent. Publication dates on refreshed pages are preserved; the visible update date and existing dateModified values reflect the new work. Numerical examples are explicitly illustrative, and industry guides do not claim client results.

| Plan week | Action | URL |
| --- | --- | --- |
| 1 | Expanded selection questions, scope and ownership | /blog/best-performance-marketing-specialist |
| 2 | Added Meta lead-to-client diagnosis and cohort review | /blog/improve-lead-quality-connection-rates |
| 3 | Added tracking acceptance and failure checklist | /blog/google-ads-conversion-tracking |
| 4 | Added channel decision and fair comparison guidance | /blog/google-ads-vs-meta-ads |
| 5 | New audit guide with decision table | /blog/meta-ads-audit-checklist-uae |
| 6 | New landing page optimisation guide | /blog/landing-page-optimisation-lead-generation |
| 7 | New search terms audit with intent examples | /blog/google-ads-search-terms-audit |
| 8 | Expanded HubSpot instant-form versus website-form handoff | /blog/crm-lead-tracking-paid-ads |
| 9 | New buyer scope and deliverables checklist | /blog/performance-marketing-services-checklist |
| 10 | New clinic enquiry-to-attendance framework | /blog/clinic-lead-generation-dubai |
| 11 | New document attestation campaign framework | /blog/google-ads-document-attestation |
| 12 | Added cost-per-qualified-lead worked example | /blog/customer-acquisition-cost-vs-cpl |

## Discovery and conversion

- Added problem-based reading paths on the blog index.
- New guides appear in the searchable, filterable article library.
- Reciprocal curated links from six relevant service pages.
- Contextual service and contact links, author/about links, homepage specialist links and two related resources per guide/update.
- Unique metadata, canonical URLs, article structured data, visible breadcrumbs and sitemap inclusion for all new routes.
- Small metadata registry is separate from long article copy to keep full content out of the shared SEO module.
- Semantic tables with headers and mobile horizontal scrolling; no new dependency or tracking behaviour.

## Validation

npm run verify passed: production build prerendered 78 routes; all 13 tests passed. Existing checks validate one H1, unique metadata/canonicals, internal destinations and matching breadcrumbs across all routes, plus form and analytics regression coverage. No separate lint script is available. git diff --check passed. Browser visual verification has not been performed for this local change set.

## Release and measurement

No hosting-side configuration change is required. Publish this change set through the existing Vercel/GitHub process when releasing the articles. A weekly schedule has not been configured: all six new guides are available together on deployment. To stagger publication, release separately and use the actual release dates in the article registry.

GTM/GA4 event configuration remains a separate pending task from the earlier release. Do not interpret CTA clicks as qualified leads. Review Search Console after indexing, then at roughly 28, 60 and 90 days from actual publication; correlate organic enquiry source with CRM qualification and client outcomes. These are review checkpoints, not ranking deadlines. Industry keyword demand is not validated by this implementation.

Official platform references are linked in the relevant guides and updates: Google Ads search terms reports, primary/secondary conversion actions, and HubSpot lead-ad syncing. Platform interface and subscription availability should be checked when applying instructions.

## Exact files changed

- `public/sitemap.xml`
- `src/App.jsx`
- `src/components/blog/BlogCard.jsx`
- `src/components/blog/EditorialRefresh.jsx`
- `src/components/blog/EditorialSections.jsx`
- `src/components/blog/editorial.css`
- `src/data/acquisitionArticleMeta.js`
- `src/data/acquisitionArticles.js`
- `src/data/blog.js`
- `src/data/editorialRefreshes.js`
- `src/pages/AcquisitionArticle.jsx`
- `src/pages/BestPerformanceMarketingSpecialistBlog.jsx`
- `src/pages/Blog.jsx`
- `src/pages/CrmLeadTrackingPaidAdsBlog.jsx`
- `src/pages/CustomerAcquisitionCostVsCplBlog.jsx`
- `src/pages/GoogleAdsConversionTrackingBlog.jsx`
- `src/pages/GoogleAdsVsMetaAdsBlog.jsx`
- `src/pages/LeadQualityConnectionRatesBlog.jsx`
- `src/seo.js`
- `src/utils/content-navigation.js`
- `docs/seo-blog-strategy.md`
