const FLOW_FAQ_BOT_EXPANSION = {
  id: 'faq-bot-expansion',
  name: 'FAQ Bot Expansion',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '34 new question patterns detected — bot can\'t answer them',
    description: [
      'I analyzed your Care inbox for the past 30 days and found <strong>34 new question patterns</strong> that your bot currently can\'t answer — accounting for 18% of total human agent volume.',
      'Adding these to your bot knowledge base would reduce agent volume by ~180 conversations per week.'
    ],
    completedDescription: ['Bot FAQ expanded — 34 new intents added, answers reviewed, and deployment scheduled.'],
    footer: 'This supports your goal: Automate 75% of tier-1 customer questions and reduce agent contact volume',
    checkboxItems: [
      { action: 'generate-answers', label: 'Generate AI-drafted answers for all 34 new question patterns' },
      { action: 'add-intents', label: 'Add 34 new intent-answer pairs to bot knowledge base' },
      { action: 'review-queue', label: 'Add to review queue: flag for expert review before deployment' },
      { action: 'deploy-staging', label: 'Deploy to staging bot for QA testing before going live' }
    ],
    moreIdeasPool: [
      { action: 'cluster-similar', label: 'Cluster 34 new questions into parent intents for cleaner bot architecture' },
      { action: 'human-fallback', label: 'Set up specific human fallback phrases for high-complexity variants' },
      { action: 'testing-suite', label: 'Generate automated test cases for the 34 new intents' }
    ]
  },
  decisionItems: [
    { key: 'intents', label: '34 new intents added to bot knowledge base', href: 'bot-builder.html' },
    { key: 'staging', label: 'Bot deployed to staging for QA testing', href: 'bot-builder.html' },
    { key: 'queue', label: '34 answers in review queue for expert check', href: 'bot-builder.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated answers for 34 new question patterns', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> added 34 new intents to bot knowledge base', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 30 days of Care inbox for new patterns', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>FAQ expansion ready</strong> — 34 new intents added, staging deployment complete.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Expected agent volume reduction: ~180 conversations/week.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'bot-builder.html', cursorTarget: '[data-nav-id="bot"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I analyzed 30 days of Care inbox and found 34 new question patterns your bot can\'t answer — that\'s ~180 conversations per week hitting human agents unnecessarily. I can draft answers and add them now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-answers', 'add-intents', 'review-queue', 'deploy-staging'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'bot-builder.html', cursorTarget: '[data-nav-id="bot"]', delay: 1500 }
  ]
};
