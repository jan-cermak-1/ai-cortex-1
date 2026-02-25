const FLOW_BOT_HANDOFF_OPTIMIZATION = {
  id: 'bot-handoff-optimization',
  name: 'Bot Handoff Optimization',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Bot containment rate dropped to 58% — 12% below target',
    description: [
      'Your bot containment rate is <strong>58%</strong> this week (target: 70%). 42% of bot conversations are being handed off to human agents unnecessarily.',
      'I analyzed 1,200 handoff transcripts and identified the top 3 failure points: ambiguous intent on 280 conversations, missing FAQ content for 190 queries, and outdated flow logic in 94 cases.'
    ],
    completedDescription: ['Bot optimization complete — 3 intents retrained, 8 FAQ answers added, and handoff criteria updated.'],
    footer: 'This supports your goal: Achieve 70%+ bot containment rate and reduce agent volume by 30%',
    checkboxItems: [
      { action: 'retrain-intents', label: 'Retrain 3 ambiguous intent classifiers with new training examples' },
      { action: 'add-faqs', label: 'Add 8 missing FAQ answers to bot knowledge base' },
      { action: 'update-handoff', label: 'Update handoff criteria to require 3 failed attempts before escalation' },
      { action: 'test-flows', label: 'Run automated test suite on updated bot flows' }
    ],
    moreIdeasPool: [
      { action: 'ab-test-flows', label: 'A/B test new vs original flow logic on 20% of conversations' },
      { action: 'sentiment-gate', label: 'Add sentiment-based escalation: auto-escalate when frustration detected' },
      { action: 'weekly-audit', label: 'Set up weekly bot performance audit report' }
    ]
  },
  decisionItems: [
    { key: 'intents', label: '3 intent classifiers retrained', href: 'bot-builder.html' },
    { key: 'faqs', label: '8 FAQ answers added to bot knowledge base', href: 'bot-builder.html' },
    { key: 'criteria', label: 'Handoff criteria updated (3-attempt rule)', href: 'bot-builder.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> retrained 3 ambiguous intent classifiers', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> added 8 FAQ answers to bot knowledge base', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 1,200 bot handoff transcripts', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Bot optimized</strong> — projected containment improvement: 58% → 72%.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Test suite passed on all 3 updated intent classifiers.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your bot containment rate dropped to 58% — 12 points below target. I analyzed 1,200 handoff transcripts and found 3 fixable failure points. Here\'s what I can do right now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['retrain-intents', 'add-faqs', 'update-handoff', 'test-flows'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'bot-builder.html', cursorTarget: '[data-nav-id="bot"]', delay: 2000 }
  ]
};
