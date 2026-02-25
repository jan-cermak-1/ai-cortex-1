const FLOW_AMBASSADOR_PROGRAM_AI = {
  id: 'ambassador-program-ai',
  name: 'Ambassador Program AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '20 top brand advocates identified from 180K followers',
    description: [
      'From <strong>180,000 social followers</strong>, I identified your <strong>20 top brand advocates</strong> — those who mention you most, have highest authentic reach, and strongest audience alignment.',
      'Personalized ambassador recruitment messages drafted for each.'
    ],
    completedDescription: ['20 top advocates identified and recruitment messages drafted — ready for ambassador program outreach.'],
    footer: 'This supports your goal: Build ambassador program from organic brand advocates',
    checkboxItems: [
      { action: 'identify-20', label: 'Confirm top 20 advocates with reach and alignment scores' },
      { action: 'draft-messages', label: 'Generate personalized recruitment messages for each' },
      { action: 'outreach-tracker', label: 'Create outreach tracker and response dashboard' }
    ],
    moreIdeasPool: [
      { action: 'tier-structure', label: 'Propose ambassador tier structure (gold/silver/bronze)' },
      { action: 'content-guidelines', label: 'Draft ambassador content guidelines' }
    ]
  },
  decisionItems: [
    { key: 'advocates', label: '20 top advocates identified', href: 'content-collection.html' },
    { key: 'messages', label: 'Recruitment messages drafted', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> analyzed 180K followers for advocate signals', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 20 top advocates with highest reach', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Ambassador Program</strong> — 20 top advocates from 180K followers. Messages ready.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'From 180,000 social followers, I identified your <strong>20 top brand advocates</strong> — highest mentions, authentic reach, and audience alignment. I drafted personalized ambassador recruitment messages for each.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['identify-20', 'draft-messages', 'outreach-tracker'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
