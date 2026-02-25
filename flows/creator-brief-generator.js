const FLOW_CREATOR_BRIEF_GENERATOR = {
  id: 'creator-brief-generator',
  name: 'Creator Brief Generator',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 personalized creator briefs ready — launch in 4 days',
    description: [
      'Campaign launches in <strong>4 days</strong> but briefs weren\'t ready for 12 creators.',
      'I auto-generated personalized creative briefs for each — tailored to their content style, past brand work, and audience preferences.'
    ],
    completedDescription: ['12 personalized creator briefs generated and sent — tailored to each creator\'s style, past work, and audience.'],
    footer: 'This supports your goal: Launch campaign on time with creators fully briefed',
    checkboxItems: [
      { action: 'generate-briefs', label: 'Generate 12 personalized briefs from campaign assets' },
      { action: 'send-briefs', label: 'Send briefs to all 12 creators via DM/email' },
      { action: 'track-reads', label: 'Track brief opens and confirmations' }
    ],
    moreIdeasPool: [
      { action: 'content-examples', label: 'Add creator-specific content examples to each brief' },
      { action: 'deadline-reminders', label: 'Set up posting deadline reminders' }
    ]
  },
  decisionItems: [
    { key: 'briefs-sent', label: '12 creator briefs sent', href: 'content-collection.html' },
    { key: 'confirmations', label: 'Brief read confirmations tracked', href: 'care-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated 12 personalized creator briefs', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> tailored each brief to content style and past brand work', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Briefs ready</strong> — 12 personalized creator briefs for 4-day launch.', time: '1 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Campaign launches in 4 days and 12 creators still need briefs. I generated <strong>12 personalized briefs</strong> — each tailored to their content style, past brand work, and audience preferences.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-briefs', 'send-briefs', 'track-reads'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
