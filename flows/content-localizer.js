const FLOW_CONTENT_LOCALIZER = {
  id: 'content-localizer',
  name: 'Content Localizer',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Campaign localized for 7 markets — 3 days saved',
    description: [
      'Cortex localized your campaign for <strong>7 markets</strong> — adapted copy, adjusted visual direction guidelines, and flagged 4 culturally sensitive elements.',
      'Estimated time saved: 3 days of manual work. Markets: US, UK, DE, FR, ES, JP, BR. Flagged: JP — honorifics needed; BR — idiom adjustment; DE — formal tone required; FR — regulatory disclaimer for health claim.'
    ],
    completedDescription: ['Localization complete — 7 market variants in Publisher, visual guidelines updated, 4 cultural flags addressed.'],
    footer: 'This supports your goal: Scale global campaigns faster with AI-powered localization',
    checkboxItems: [
      { action: 'create-variants', label: 'Create 7 market variants in Publisher drafts' },
      { action: 'update-guidelines', label: 'Update visual direction guidelines per market' },
      { action: 'address-flags', label: 'Apply suggested fixes for 4 cultural sensitivity flags' }
    ],
    moreIdeasPool: [
      { action: 'legal-review', label: 'Flag FR health claim for legal review' },
      { action: 'jp-honorifics', label: 'Generate JP copy with proper honorifics' }
    ]
  },
  decisionItems: [
    { key: 'variants', label: '7 market variants in Publisher', href: 'publisher-calendar.html' },
    { key: 'guidelines', label: 'Visual guidelines updated', href: 'content-collection.html' },
    { key: 'flags', label: '4 cultural flags addressed', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 7 market-localized variants', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> updated visual guidelines per market', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> localized campaign and flagged 4 cultural elements', time: '5 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Localization done:</strong> 7 markets. 3 days saved. 4 cultural flags to address.', time: '5 min ago', unread: true },
    { icon: 'activity', text: 'Markets: US, UK, DE, FR, ES, JP, BR. JP honorifics, BR idiom, DE tone, FR disclaimer.', time: '4 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I localized your campaign for 7 markets — US, UK, DE, FR, ES, JP, BR. Copy adapted, visual guidelines adjusted. Four cultural flags: JP needs honorifics, BR idiom adjustment, DE formal tone, FR regulatory disclaimer for health claim. Estimated 3 days saved.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['create-variants', 'update-guidelines', 'address-flags'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
