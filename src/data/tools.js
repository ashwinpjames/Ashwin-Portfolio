export const toolCategories = [
  { id: 'calculators', label: 'Calculators' },
  { id: 'campaign', label: 'Campaign Tools' },
  { id: 'creative', label: 'Creative Tools' },
  { id: 'lead-generation', label: 'Lead Generation' },
  { id: 'analytics', label: 'Analytics & Tracking' },
  { id: 'cro', label: 'Website & CRO' },
  { id: 'frameworks', label: 'Frameworks & Checklists' },
]

export const toolPlatforms = [
  { id: 'meta', label: 'Meta' },
  { id: 'google', label: 'Google' },
  { id: 'hubspot', label: 'HubSpot' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'website', label: 'Website' },
  { id: 'whatsapp', label: 'WhatsApp' },
]

export const tools = [
  { id: 'campaign-budget-calculator', title: 'Campaign Budget Calculator', description: 'Estimate a practical starting advertising budget from your target CPA, contribution margin and learning phase objectives.', type: 'Calculator', category: 'calculators', platforms: ['meta', 'google'], route: '/resources/campaign-budget-calculator', icon: '⌁', status: 'live', featured: true },
  { id: 'meta-ads-launch-checklist', title: 'Meta Ads Launch Checklist', description: 'A practical pre launch checklist covering tracking, audiences, creative, offer, lead quality and campaign hygiene.', type: 'Checklist', category: 'frameworks', platforms: ['meta'], route: '#', icon: '✓', status: 'coming-soon' },
  { id: 'lead-quality-framework', title: 'Lead Quality Framework', description: 'Connect acquisition metrics with sales qualification and downstream commercial outcomes.', type: 'Framework', category: 'lead-generation', platforms: ['meta', 'google', 'hubspot'], route: '#', icon: '↗', status: 'coming-soon' },
  { id: 'utm-builder', title: 'UTM Builder', description: 'Build consistent campaign tracking parameters for Meta, Google, content and partner campaigns.', type: 'Tool', category: 'analytics', platforms: ['meta', 'google', 'analytics', 'hubspot'], route: '/resources/utm-builder', icon: '⌘', status: 'live' },
  { id: 'cpl-calculator', title: 'CPL Calculator', description: 'Translate lead targets and acquisition economics into a practical cost per lead benchmark.', type: 'Calculator', category: 'calculators', platforms: ['meta', 'google'], route: '#', icon: '◌', status: 'coming-soon' },
  { id: 'roas-calculator', title: 'ROAS Calculator', description: 'Understand the revenue and return required for a campaign to meet its commercial target.', type: 'Calculator', category: 'calculators', platforms: ['meta', 'google'], route: '#', icon: '↗', status: 'coming-soon' },
  { id: 'break-even-roas-calculator', title: 'Break Even ROAS Calculator', description: 'Calculate the minimum ROAS required to cover your contribution economics and advertising cost.', type: 'Calculator', category: 'calculators', platforms: ['meta', 'google'], route: '#', icon: '≈', status: 'coming-soon' },
  { id: 'funnel-conversion-calculator', title: 'Funnel Conversion Calculator', description: 'Model how traffic, conversion rates, qualified leads and sales interact across a funnel.', type: 'Calculator', category: 'analytics', platforms: ['meta', 'google', 'analytics'], route: '#', icon: '⌁', status: 'coming-soon' },
  { id: 'campaign-planner', title: 'Campaign Planner', description: 'Plan objectives, audiences, offers, creative, budgets and measurement before launching a campaign.', type: 'Planner', category: 'campaign', platforms: ['meta', 'google'], route: '#', icon: '□', status: 'coming-soon' },
  { id: 'campaign-checklist-builder', title: 'Campaign Checklist Builder', description: 'Create a campaign specific checklist covering setup, tracking, launch, optimisation and reporting.', type: 'Builder', category: 'campaign', platforms: ['meta', 'google', 'hubspot'], route: '#', icon: '✓', status: 'coming-soon' },
  { id: 'ad-performance-analyzer', title: 'Ad Performance Analyzer', description: 'Review core acquisition metrics and identify the most useful next testing or optimisation move.', type: 'Analyzer', category: 'campaign', platforms: ['meta', 'google'], route: '#', icon: '↗', status: 'coming-soon' },
  { id: 'meta-ads-creative-analyzer', title: 'Meta Ads Creative Analyzer', description: 'Analyse creative structure, hooks, messaging and performance signals to improve testing decisions.', type: 'Analyzer', category: 'creative', platforms: ['meta'], route: '#', icon: '◉', status: 'coming-soon' },
  { id: 'meta-ads-library-video-downloader', title: 'Meta Ads Library Video Downloader', description: 'A workflow for collecting publicly available ad creative references from Meta Ads Library for research.', type: 'Tool', category: 'creative', platforms: ['meta'], route: '#', icon: '↓', status: 'coming-soon' },
  { id: 'meta-ads-library-video-analyzer', title: 'Meta Ads Library Video Analyzer', description: 'Break down ad references into hooks, angles, offers, formats and creative patterns for research.', type: 'Analyzer', category: 'creative', platforms: ['meta'], route: '#', icon: '◈', status: 'coming-soon' },
  { id: 'lead-quality-calculator', title: 'Lead Quality Calculator', description: 'Compare lead volume with qualification and downstream conversion to expose acquisition quality.', type: 'Calculator', category: 'lead-generation', platforms: ['meta', 'google', 'hubspot'], route: '#', icon: '◎', status: 'coming-soon' },
  { id: 'lead-funnel-calculator', title: 'Lead Funnel Calculator', description: 'Model MQL, SQL, opportunity and conversion rates to understand where the pipeline is leaking.', type: 'Calculator', category: 'lead-generation', platforms: ['hubspot', 'analytics'], route: '#', icon: '⌁', status: 'coming-soon' },
  { id: 'landing-page-cro-checklist', title: 'Landing Page CRO Checklist', description: 'Audit message clarity, trust, friction, UX and conversion paths before increasing paid traffic.', type: 'Checklist', category: 'cro', platforms: ['website', 'analytics'], route: '#', icon: '✓', status: 'coming-soon' },
  { id: 'creative-testing-framework', title: 'Creative Testing Framework', description: 'A structured framework for testing hooks, angles, formats and offers without losing the signal.', type: 'Framework', category: 'frameworks', platforms: ['meta', 'google'], route: '#', icon: '◇', status: 'coming-soon' },
  { id: 'google-ads-checklist', title: 'Google Ads Campaign Checklist', description: 'A practical checklist for search campaign structure, tracking, keywords, ads and optimisation.', type: 'Checklist', category: 'frameworks', platforms: ['google'], route: '#', icon: '✓', status: 'coming-soon' },
]
