const FLOW_EXECUTIVE_BRIEFING = {
  id: 'executive-briefing',
  name: 'Executive Weekly Briefing',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Weekly executive briefing ready for delivery',
    description: [
      'I\'ve compiled this week\'s social media performance data into an executive summary with the 5 most important business insights.',
      '<strong>This week\'s headline:</strong> Brand sentiment improved +12 points following the product fix announcement. Community response time hit a record low of 1.8 hours.'
    ],
    completedDescription: ['Executive briefing generated and scheduled for delivery — PDF report, email summary, and Slack digest all set up.'],
    footer: 'This supports your goal: Keep leadership informed with weekly social intelligence that connects to business outcomes',
    checkboxItems: [
      { action: 'generate-pdf', label: 'Generate full executive briefing PDF with data visualizations' },
      { action: 'email-summary', label: 'Send 1-page email summary to leadership distribution list' },
      { action: 'slack-digest', label: 'Post top 3 metrics to #executive-social-digest Slack channel' },
      { action: 'schedule-recurring', label: 'Schedule this briefing to recur every Monday 7am' }
    ],
    moreIdeasPool: [
      { action: 'board-deck', label: 'Export board-ready slide deck version of the briefing' },
      { action: 'competitive-section', label: 'Add competitive intelligence section to next week\'s briefing' },
      { action: 'yoy-comparison', label: 'Include YoY performance comparison in the briefing' }
    ]
  },
  decisionItems: [
    { key: 'pdf', label: 'Executive briefing PDF generated', href: 'unified-analytics.html' },
    { key: 'email', label: 'Email summary sent to leadership (8 recipients)', href: 'unified-analytics.html' },
    { key: 'recurring', label: 'Weekly briefing scheduled every Monday 7am', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> generated executive briefing PDF with 5 key insights', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> sent 1-page email summary to 8 leadership recipients', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> scheduled weekly briefing for every Monday 7am', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Executive briefing delivered</strong> — PDF, email, and Slack digest sent.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Next briefing scheduled: Monday 7am.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'ve compiled this week\'s social data into an executive briefing. Headline: Brand sentiment improved +12 points after last week\'s product fix announcement. Ready to deliver to leadership.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-pdf', 'email-summary', 'slack-digest', 'schedule-recurring'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
