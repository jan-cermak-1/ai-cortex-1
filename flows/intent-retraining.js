const FLOW_INTENT_RETRAINING = {
  id: 'intent-retraining',
  name: 'Bot Intent Retraining',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Bot misclassification rate at 24% — intent drift detected',
    description: [
      'Your bot is misclassifying <strong>24% of incoming intents</strong> — up from 8% six months ago. This is classic intent drift: your customer language has evolved but your training data hasn\'t.',
      'The top 5 drifted intents account for 71% of all misclassifications. I can retrain these specifically.'
    ],
    completedDescription: ['Intent retraining complete — 5 intents retrained with 340 new examples, projected misclassification drop to 9%.'],
    footer: 'This supports your goal: Maintain bot intent accuracy above 92% with continuous retraining cycles',
    checkboxItems: [
      { action: 'extract-examples', label: 'Extract 340 new training examples from recent misclassified transcripts' },
      { action: 'retrain-top5', label: 'Retrain the top 5 drifted intents with new language patterns' },
      { action: 'validate-accuracy', label: 'Validate accuracy improvement on held-out test set' },
      { action: 'deploy-updated', label: 'Deploy updated model to production bot with rollback option' }
    ],
    moreIdeasPool: [
      { action: 'schedule-retraining', label: 'Schedule quarterly intent retraining cycle automatically' },
      { action: 'semantic-clustering', label: 'Run semantic clustering on all intents to identify overlap issues' },
      { action: 'ab-deploy', label: 'A/B deploy retrained model vs current — measure containment rate' }
    ]
  },
  decisionItems: [
    { key: 'retrained', label: '5 intents retrained with 340 new examples', href: 'bot-builder.html' },
    { key: 'validated', label: 'Accuracy validated — projected 9% misclassification rate', href: 'bot-builder.html' },
    { key: 'deployed', label: 'Updated model deployed to production', href: 'bot-builder.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> retrained 5 drifted intents with 340 new examples', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> validated accuracy on test set — 24% → 9% misclassification', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> deployed updated model to production with rollback ready', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Intent retraining complete</strong> — misclassification projected to drop from 24% to 9%.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Rollback option available for 48 hours. Production monitoring active.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'bot-builder.html', cursorTarget: '[data-nav-id="bot"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Bot intent accuracy has dropped to 76% — that\'s intent drift. Customer language evolved but training data didn\'t. The top 5 drifted intents cause 71% of misclassifications. I can retrain them now.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['extract-examples', 'retrain-top5', 'validate-accuracy', 'deploy-updated'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'bot-builder.html', cursorTarget: '[data-nav-id="bot"]', delay: 1500 }
  ]
};
