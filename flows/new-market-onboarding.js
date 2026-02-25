const FLOW_NEW_MARKET_ONBOARDING = {
  id: 'new-market-onboarding',
  name: 'New Market Onboarding',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Brazil market launch — social media setup needed',
    description: [
      'Your Brazil market launch is scheduled for Q3. I can set up the complete social media infrastructure: profiles, listening, publishing, and Care — following your global standard with Brazil-specific configurations.'
    ],
    completedDescription: ['Brazil market social media setup complete — profiles configured, Listening active, Care inbox ready, team onboarded.'],
    footer: 'This supports your goal: Launch Brazil market with full social media infrastructure within 2 weeks',
    checkboxItems: [
      { action: 'setup-profiles', label: 'Configure Instagram, Facebook, and LinkedIn Brazil profiles in Emplifi' },
      { action: 'setup-listening', label: 'Set up Portuguese-language Listening queries for brand + category keywords' },
      { action: 'care-templates', label: 'Create Portuguese Care response templates (top 20 question types)' },
      { action: 'onboard-team', label: 'Onboard Brazilian social media team (5 users) with correct role assignments' }
    ],
    moreIdeasPool: [
      { action: 'local-influencers', label: 'Generate initial list of Brazil-market influencers for outreach' },
      { action: 'local-analytics', label: 'Set up Brazil-specific analytics board with local benchmark targets' },
      { action: 'competitor-setup', label: 'Add Brazil market competitors to competitive tracking' }
    ]
  },
  decisionItems: [
    { key: 'profiles', label: 'Brazil social profiles configured in Emplifi', href: 'publisher-calendar.html' },
    { key: 'listening', label: 'Portuguese Listening queries active', href: 'settings-listening.html' },
    { key: 'team', label: '5 Brazil team users onboarded with roles', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured Brazil social profiles in Emplifi', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up Portuguese Listening queries for brand and category', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> onboarded 5 Brazil team users with role assignments', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Brazil market setup complete</strong> — all infrastructure configured for Q3 launch.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '5 team members onboarded. Portuguese Care templates ready.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Brazil market launch is Q3. I can set up the complete social media infrastructure — profiles, Portuguese listening queries, Care templates, and team onboarding — following your global standard with Brazil-specific configurations.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['setup-profiles', 'setup-listening', 'care-templates', 'onboard-team'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1500 }
  ]
};
