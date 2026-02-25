const FLOW_RATINGS_REVIEW_RESPONSE_AI = {
  id: 'ratings-review-response-ai',
  name: 'Ratings & Review Response AI',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '1,240 reviews: Drafted responses with tone calibration',
    description: [
      '1,240 new product reviews across Amazon, Google, and your website this week. Cortex drafted personalized responses for each, calibrating tone by star rating: apologetic for 1★, grateful for 5★.',
      'Estimated impact: +0.3 points on aggregate review score if all published. 847 drafts ready for approval.'
    ],
    completedDescription: ['1,240 reviews — personalized drafts with tone calibration. Estimated +0.3 points on aggregate score.'],
    footer: 'This supports your goal: Respond to reviews at scale while protecting reputation',
    checkboxItems: [
      { action: 'draft-responses', label: 'Draft responses for 1,240 reviews' },
      { action: 'calibrate-tone', label: 'Calibrate tone by rating (apologetic 1★, grateful 5★)' },
      { action: 'estimate-impact', label: 'Estimate response impact on aggregate score' }
    ],
    moreIdeasPool: [
      { action: 'bulk-approve', label: 'Bulk approve high-confidence drafts' }
    ]
  },
  decisionItems: [
    { key: 'drafts', label: '847 drafts ready', href: 'unified-analytics.html' },
    { key: 'impact', label: 'Impact estimate: +0.3 points', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> drafted 847 personalized review responses', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> calibrated tone by star rating', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>1,240 reviews this week:</strong> 847 drafts ready. Tone calibrated. Est. +0.3 aggregate score.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: '1,240 new reviews across Amazon, Google, and your site. I drafted personalized responses for each — apologetic for 1★, grateful for 5★. 847 drafts ready. Estimated impact: +0.3 points on aggregate review score if all published.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['draft-responses', 'calibrate-tone', 'estimate-impact'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
