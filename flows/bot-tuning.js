/* ============================================================
   FLOW: Bot Tuning
   
   Demo scenario: Bot Manager improves chatbot performance based on analytics
   Persona: Bot Manager
   ============================================================ */

const FLOW_BOT_TUNING = {
  id: 'bot-tuning',
  name: 'Bot Tuning',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Bot performance improvement opportunities',
    description: [
      'Your chatbot handled <strong>2,847 conversations</strong> this week.',
      'Containment rate: 73% (target: 80%). I identified improvement opportunities:'
    ],
    completedDescription: [
      'Bot optimization applied. Expected containment improvement: +8%.'
    ],
    footer: 'This supports your goal: Achieve 80% bot containment rate and reduce handoff to agents by 25%',
    
    checkboxItems: [
      { action: 'improve-intents',  label: 'Improve recognition for top 5 failed intents' },
      { action: 'add-responses',    label: 'Add responses for 12 common unanswered questions' },
      { action: 'update-fallback',  label: 'Update fallback messages with better escalation paths' },
      { action: 'train-entities',   label: 'Train entity recognition for product names' }
    ],
    
    moreIdeasPool: [
      { action: 'ab-test-flows',    label: 'A/B test new conversation flows' },
      { action: 'sentiment-detect', label: 'Add sentiment detection for early escalation' },
      { action: 'language-expand',  label: 'Expand language support to Spanish' },
      { action: 'handoff-analysis', label: 'Analyze handoff conversations for training data' },
      { action: 'peak-scaling',     label: 'Configure scaling for predicted peak hours' },
      { action: 'persona-update',   label: 'Update bot personality based on feedback' }
    ]
  },

  decisionItems: [
    { key: 'intents',   label: '5 intent recognizers improved',         href: 'bot-overview.html' },
    { key: 'responses', label: '12 new response templates added',       href: 'bot-overview.html' },
    { key: 'fallback',  label: 'Fallback flow updated',                 href: 'bot-overview.html' },
    { key: 'entities',  label: 'Product entity model retrained',        href: 'bot-overview.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> improved 5 intent recognition models', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> added 12 new response templates', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> updated fallback escalation flow', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> retrained product entity recognition', time: '3 minutes ago' },
    { text: '<strong>You</strong> approved bot optimization recommendations', time: '4 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 2,847 bot conversations', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Bot analysis complete.</strong> 7% containment improvement possible.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Top failed intent: "order_status" — improved with 94% new accuracy.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'New fallback flow reduced escalation time by 30 seconds.', time: '3 min ago', unread: false },
    { icon: 'activity', text: 'Bot is now live with updated models. Monitoring started.', time: '2 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I analyzed your chatbot performance from this week: <strong>2,847 conversations</strong> handled.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Current containment rate: 73% (target: 80%). I identified opportunities for +8% improvement.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I can improve intent recognition, add missing responses, update fallback flows, and train entity models.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['improve-intents', 'add-responses', 'update-fallback', 'train-entities'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Bot optimization complete! 5 intents improved, 12 new responses added, fallback updated, product entities retrained.', delay: 2500 },
    { type: 'navigate', page: 'bot-overview.html', cursorTarget: '[data-nav-id="bot"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Top failed intent "order_status" now has 94% accuracy. Bot is live with updated models.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Expected containment improvement: +8%. Monitoring started. Demo complete!', delay: 2000 }
  ]
};
