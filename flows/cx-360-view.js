const FLOW_CX_360_VIEW = {
  id: 'cx-360-view',
  name: 'CX 360° View',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Unified CX score: 3 high-churn-risk segments identified',
    description: [
      'Cortex connected social interactions, care tickets, reviews, and purchase data to build a unified CX score per customer segment.',
      'Identified 3 high-churn-risk segments: "Frustrated repeat buyers" (2,340 customers), "Silent detractors" (1,890), "Support-heavy low spend" (4,120). Recommended proactive retention campaigns for each.'
    ],
    completedDescription: ['CX 360° view built — 3 high-churn segments identified with recommended retention campaigns.'],
    footer: 'This supports your goal: Prevent churn with proactive, segment-specific retention',
    checkboxItems: [
      { action: 'build-scores', label: 'Build unified CX scores per segment' },
      { action: 'flag-segments', label: 'Flag 3 high-churn-risk segments' },
      { action: 'recommend-campaigns', label: 'Recommend retention campaigns per segment' }
    ],
    moreIdeasPool: [
      { action: 'churn-model', label: 'Refine churn prediction model' }
    ]
  },
  decisionItems: [
    { key: 'segments', label: '3 churn-risk segments identified', href: 'unified-analytics.html' },
    { key: 'campaigns', label: 'Retention campaigns recommended', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> built unified CX scores from social, care, reviews, purchase', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> identified 3 high-churn segments', time: '2 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>CX 360°:</strong> 3 churn-risk segments — 2.3K frustrated buyers, 1.9K silent detractors, 4.1K support-heavy. Retention campaigns ready.', time: '2 min ago', unread: true }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I connected social, care, reviews, and purchase data into a unified CX score. Found 3 high-churn-risk segments: 2,340 frustrated repeat buyers, 1,890 silent detractors, 4,120 support-heavy low spend. Recommended proactive retention campaigns for each.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['build-scores', 'flag-segments', 'recommend-campaigns'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
