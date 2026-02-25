const FLOW_SOCIAL_CUSTOMER_PROFILES = {
  id: 'social-customer-profiles',
  name: 'Social Customer Profiles',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '1,200 care contacts enriched with social data',
    description: [
      'Cortex enriched <strong>1,200 care contacts</strong> with social data.',
      'Added: sentiment history, topic interests, influence score, and platform preferences. Syncing enriched profiles back to CRM.'
    ],
    completedDescription: ['1,200 profiles enriched and synced to CRM.'],
    footer: 'This supports your goal: Personalize care at scale',
    checkboxItems: [
      { action: 'add-sentiment', label: 'Add sentiment history to profile' },
      { action: 'add-interests', label: 'Add topic interests and preferences' },
      { action: 'add-influence', label: 'Add influence score' },
      { action: 'sync-crm', label: 'Sync enriched profiles to CRM' }
    ],
    moreIdeasPool: [
      { action: 'vip-flag', label: 'Flag high-influence customers for VIP treatment' },
      { action: 'profile-dashboard', label: 'Create enriched profile dashboard' }
    ]
  },
  decisionItems: [
    { key: 'profiles-synced', label: '1,200 enriched profiles synced to CRM', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> enriched 1,200 care contacts with social data', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> synced enriched profiles to CRM', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Profile Enrichment</strong> — 1,200 contacts enriched, sentiment + influence + interests', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I enriched 1,200 care contacts with social data: sentiment history, topic interests, influence score, and platform preferences. Syncing enriched profiles back to your CRM now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['add-sentiment', 'add-interests', 'add-influence', 'sync-crm'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
