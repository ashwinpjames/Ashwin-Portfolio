export const toolCategories = [
  { id: 'calculators', label: 'Calculators' },
  { id: 'campaign', label: 'Campaign Tools' },
  { id: 'creative', label: 'Creative Tools' },
  { id: 'lead-generation', label: 'Lead Generation' },
  { id: 'analytics', label: 'Analytics & Tracking' },
  { id: 'cro', label: 'Website & CRO' },
  { id: 'frameworks', label: 'Frameworks & Checklists' },
  { id: 'ai', label: 'AI & Content' },
]

export const toolPlatforms = [
  { id: 'meta', label: 'Meta' },
  { id: 'google', label: 'Google' },
  { id: 'hubspot', label: 'HubSpot' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'website', label: 'Website' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'ai', label: 'AI' },
]

export const tools = [
  { id: 'campaign-budget-calculator', title: 'Campaign Budget Calculator', description: 'Estimate a practical starting advertising budget from your target CPA, contribution margin and learning phase objectives.', type: 'Calculator', category: 'calculators', platforms: ['meta', 'google'], route: '/resources/campaign-budget-calculator', icon: '⌁', status: 'live', featured: true },
  { id: 'meta-ads-launch-checklist', title: 'Meta Ads Launch Checklist', description: 'A practical pre launch checklist covering tracking, audiences, creative, offer, lead quality and campaign hygiene.', type: 'Checklist', category: 'frameworks', platforms: ['meta'], route: '/resources/meta-ads-launch-checklist', icon: '✓', status: 'live' },
  { id: 'lead-quality-framework', title: 'Lead Quality Framework', description: 'Connect acquisition metrics with sales qualification and downstream commercial outcomes.', type: 'Framework', category: 'lead-generation', platforms: ['meta', 'google', 'hubspot'], route: '/resources/lead-quality-framework', icon: '↗', status: 'live' },
  { id: 'utm-builder', title: 'UTM Builder', description: 'Build consistent campaign tracking parameters for Meta, Google, content and partner campaigns.', type: 'Tool', category: 'analytics', platforms: ['meta', 'google', 'analytics', 'hubspot'], route: '/resources/utm-builder', icon: '⌘', status: 'live' },
  { id: 'blog-prompt-architect', title: 'AI Blog Prompt Architect', description: 'Turn a topic and source material into a custom, research aware prompt for creating stronger publication ready blog articles.', type: 'AI Tool', category: 'ai', platforms: ['ai', 'website'], route: '/resources/blog-prompt-architect', icon: '✦', status: 'live', featured: true },
]
