/* ============================================================
   FLOW: Review Automation
   
   Demo scenario: eCommerce Manager sets up review response automation
   Persona: eCommerce Manager
   ============================================================ */

const FLOW_REVIEW_AUTOMATION = {
  id: 'review-automation',
  name: 'Review Automation',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Pending reviews require attention',
    description: [
      'You have <strong>156 unresponded reviews</strong> across your product catalog.',
      '89 are positive (4-5 stars), 42 neutral (3 stars), 25 negative (1-2 stars).',
      'I can help automate responses:'
    ],
    completedDescription: [
      'Review response automation configured. Processing 156 pending reviews.'
    ],
    footer: 'This supports your goal: Maintain 95% review response rate within 24 hours',
    
    checkboxItems: [
      { action: 'auto-positive',   label: 'Auto-respond to 4-5 star reviews with thank you message' },
      { action: 'draft-negative',  label: 'Draft personalized responses for 1-2 star reviews' },
      { action: 'flag-refund',     label: 'Flag reviews mentioning refund/return for escalation' },
      { action: 'sentiment-tag',   label: 'Auto-tag reviews by product issue category' }
    ],
    
    moreIdeasPool: [
      { action: 'response-templates', label: 'Create response template library by review type' },
      { action: 'syndication-check',  label: 'Check syndication status across retail partners' },
      { action: 'nps-correlation',    label: 'Correlate reviews with NPS scores in VoC' },
      { action: 'product-insights',   label: 'Generate product improvement insights from reviews' },
      { action: 'competitor-reviews', label: 'Compare review sentiment with competitors' },
      { action: 'photo-reviews',      label: 'Identify and feature high-quality photo reviews' }
    ]
  },

  decisionItems: [
    { key: 'positive',  label: '89 positive reviews auto-responded',    href: 'reviews-moderate.html' },
    { key: 'negative',  label: '25 negative review drafts ready',       href: 'reviews-moderate.html' },
    { key: 'flagged',   label: '8 reviews flagged for escalation',      href: 'reviews-moderate.html' },
    { key: 'tagged',    label: 'All reviews tagged by category',        href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> auto-responded to 89 positive reviews', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> drafted responses for 25 negative reviews', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> flagged 8 reviews for customer service escalation', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> tagged all 156 reviews by issue category', time: '3 minutes ago' },
    { text: '<strong>You</strong> approved review automation workflow', time: '4 minutes ago' },
    { text: '<strong>Cortex AI</strong> analyzed 156 pending reviews', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>156 pending reviews</strong> detected. Automation workflow ready.', time: '5 min ago', unread: true },
    { icon: 'ai', text: '<strong>89 positive reviews</strong> auto-responded successfully.', time: '1 min ago', unread: true },
    { icon: 'activity', text: '8 escalation-worthy reviews flagged for customer service.', time: '3 min ago', unread: false },
    { icon: 'activity', text: 'Review response rate improved to 97% this week.', time: '1 hour ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I noticed you have <strong>156 unresponded reviews</strong> across your product catalog.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Breakdown: 89 positive (4-5 stars), 42 neutral (3 stars), 25 negative (1-2 stars). I can help automate responses.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I recommend auto-responding to positive reviews, drafting personalized responses for negatives, and flagging refund mentions.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['auto-positive', 'draft-negative', 'flag-refund', 'sentiment-tag'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Automation complete! 89 positive reviews responded, 25 negative drafts ready, 8 flagged for escalation.', delay: 2500 },
    { type: 'navigate', page: 'reviews-moderate.html', cursorTarget: '[data-nav-id="rating-reviews"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Review your negative review drafts before publishing. All reviews are now tagged by category.', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Analytics shows review sentiment breakdown by category. Your response rate is now at 97%! Demo complete.', delay: 2000 }
  ]
};
