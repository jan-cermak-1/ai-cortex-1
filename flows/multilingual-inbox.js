const FLOW_MULTILINGUAL_INBOX = {
  id: 'multilingual-inbox',
  name: 'Multilingual Inbox Setup',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '18% of inbox messages are in non-English languages',
    description: [
      'I analyzed your inbox over the past 60 days and found that <strong>18% of messages</strong> (≈340/week) arrive in languages without assigned routing.',
      'Top languages: Spanish (41%), German (28%), Portuguese (19%), French (12%).',
      'These messages currently get no response for an average of 3.2 hours — twice the English average.'
    ],
    completedDescription: ['Multilingual inbox configured — auto-detection active, routing rules set up for 4 languages, and translation assist enabled.'],
    footer: 'This supports your goal: Achieve equal response SLA across all language markets',
    checkboxItems: [
      { action: 'auto-detect', label: 'Enable auto language detection on all incoming messages' },
      { action: 'setup-routing', label: 'Set up language-based routing rules for ES, DE, PT, FR' },
      { action: 'translation-assist', label: 'Enable AI translation assist for agents handling multilingual messages' },
      { action: 'assign-teams', label: 'Assign language-capable agents to respective message queues' }
    ],
    moreIdeasPool: [
      { action: 'multilingual-templates', label: 'Generate response templates in all 4 languages' },
      { action: 'bot-coverage', label: 'Set up multilingual bot for after-hours coverage in Spanish' },
      { action: 'performance-tracking', label: 'Create per-language response time tracking board' }
    ]
  },
  decisionItems: [
    { key: 'routing', label: 'Language routing active for ES, DE, PT, FR', href: 'care-inbox.html' },
    { key: 'translation', label: 'AI translation assist enabled for agents', href: 'care-inbox.html' },
    { key: 'analytics', label: 'Per-language performance tracking configured', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured routing rules for 4 languages', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> enabled auto language detection and translation assist', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 60 days of inbox messages for language patterns', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Multilingual routing live</strong> — ES, DE, PT, FR messages now auto-routed.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Translation assist available for all agents in the multilingual queue.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found that 18% of your inbox messages (about 340 per week) arrive in languages without routing rules — they wait twice as long as English messages. I can fix this now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['auto-detect', 'setup-routing', 'translation-assist', 'assign-teams'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 1500 }
  ]
};
