const FLOW_INBOX_ZERO = {
  id: 'inbox-zero',
  name: 'Community Inbox Zero',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '847 unresponded messages — inbox at critical level',
    description: [
      'Your Community inbox has <strong>847 unresponded messages</strong> from the past 72 hours. 214 are negative sentiment and 38 are flagged as urgent.',
      'Based on content patterns, I can reduce this by 80% with the following actions:'
    ],
    completedDescription: ['Inbox triage complete — 680 messages routed, templates deployed, 38 urgent cases escalated to Care.'],
    footer: 'This supports your goal: Respond to 90% of community messages within 4 hours',
    checkboxItems: [
      { action: 'auto-route', label: 'Auto-route 420 FAQ-type messages using smart labels' },
      { action: 'escalate-urgent', label: 'Escalate 38 urgent negative messages to Care team' },
      { action: 'deploy-templates', label: 'Deploy AI response templates for top 5 question categories' },
      { action: 'hide-spam', label: 'Auto-hide 162 identified spam and bot messages' }
    ],
    moreIdeasPool: [
      { action: 'setup-rules', label: 'Set up automated routing rules to prevent future backlog' },
      { action: 'vip-detection', label: 'Flag VIP customer messages for priority response' },
      { action: 'sentiment-board', label: 'Create sentiment monitoring board for inbox trends' }
    ]
  },
  decisionItems: [
    { key: 'routed', label: '420 messages auto-routed by category', href: 'community-inbox.html' },
    { key: 'escalated', label: '38 urgent cases sent to Care', href: 'care-inbox.html' },
    { key: 'spam', label: '162 spam messages hidden', href: 'community-inbox.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> routed 420 messages using smart labels', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> escalated 38 urgent cases to Care team', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> auto-hid 162 spam and bot messages', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> detected inbox at critical level (847 unresponded)', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>URGENT: Inbox at critical level</strong> — 847 unresponded messages.', time: '2 min ago', unread: true },
    { icon: 'ai', text: 'Triage complete — 680 messages processed. 167 need manual review.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '38 urgent cases sent to Care team for immediate response.', time: '1 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'community-inbox.html', cursorTarget: '[data-nav-id="community"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Alert: Your Community inbox has 847 unresponded messages — 38 are marked urgent. I can triage 80% of them automatically so your team focuses on what matters.', delay: 2000 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['auto-route', 'escalate-urgent', 'deploy-templates', 'hide-spam'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2000 }
  ]
};
