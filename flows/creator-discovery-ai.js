const FLOW_CREATOR_DISCOVERY_AI = {
  id: 'creator-discovery-ai',
  name: 'Creator Discovery AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '34 micro-influencers found for your campaign brief',
    description: [
      'Searched 50M+ creator profiles for your campaign brief — found <strong>34 micro-influencers</strong> (10K–100K followers) with authentic audience overlap.',
      'Audience age matches your 18–34 target at <strong>73%</strong>. Ready to shortlist and outreach.'
    ],
    completedDescription: ['Creator discovery complete — 34 micro-influencers shortlisted with 73% audience alignment for your product category.'],
    footer: 'This supports your goal: Find authentic micro-influencers with real audience overlap for Q2 campaign',
    checkboxItems: [
      { action: 'shortlist', label: 'Add top 15 creators to campaign shortlist' },
      { action: 'export-profiles', label: 'Export creator profiles with audience demographics' },
      { action: 'draft-outreach', label: 'Draft personalized outreach messages for top 10' }
    ],
    moreIdeasPool: [
      { action: 'audience-overlap', label: 'Deep-dive audience overlap analysis for top 5' },
      { action: 'past-brand-work', label: 'Check past brand work and content style compatibility' }
    ]
  },
  decisionItems: [
    { key: 'shortlist', label: '15 creators added to campaign shortlist', href: 'content-collection.html' },
    { key: 'profiles', label: 'Creator profiles exported with demographics', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> searched 50M+ profiles and found 34 micro-influencers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> validated 73% audience age alignment (18–34)', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Creator Discovery</strong> — 34 micro-influencers found with 73% audience match.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I searched 50M+ creator profiles for your campaign brief. Found <strong>34 micro-influencers</strong> (10K–100K) with authentic audience overlap — 73% match to your 18–34 target.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['shortlist', 'export-profiles', 'draft-outreach'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'content-collection.html', cursorTarget: '[data-nav-id="ugc"]', delay: 2000 }
  ]
};
