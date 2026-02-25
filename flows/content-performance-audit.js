const FLOW_CONTENT_PERFORMANCE_AUDIT = {
  id: 'content-performance-audit',
  name: 'Content Performance Audit',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q2 content audit: 3 content types driving 80% of results',
    description: [
      'I audited 240 posts from Q2. The <strong>Pareto finding: 3 content types drive 80% of all engagement</strong> — but they represent only 22% of what you published.',
      'Top performers: (1) Customer story videos (avg 4.8% ER), (2) Tutorial carousels (3.9% ER), (3) Industry data posts (3.2% ER). Bottom performers: stock photo posts (0.6% ER) and promotional posts (0.8% ER).'
    ],
    completedDescription: ['Content audit complete — Q3 content mix reconfigured based on performance data.'],
    footer: 'This supports your goal: Optimize content mix to achieve 3%+ average engagement rate across all channels',
    checkboxItems: [
      { action: 'generate-audit-report', label: 'Generate full Q2 content audit report with performance breakdown' },
      { action: 'reconfigure-q3-mix', label: 'Reconfigure Q3 content calendar mix to 60% top-performers' },
      { action: 'eliminate-low-perf', label: 'Reduce low-performing content types (stock photos, generic promo)' },
      { action: 'content-guidance', label: 'Generate updated content guidelines for team based on audit findings' }
    ],
    moreIdeasPool: [
      { action: 'platform-breakdown', label: 'Break down performance by platform to show if mix differs by channel' },
      { action: 'competitor-compare', label: 'Compare your content mix with top competitor\'s for context' },
      { action: 'ab-test-format', label: 'Set up A/B test: high-performing formats vs status quo for 4 weeks' }
    ]
  },
  decisionItems: [
    { key: 'audit', label: 'Q2 content audit report generated (240 posts)', href: 'unified-analytics.html' },
    { key: 'q3-mix', label: 'Q3 content calendar reconfigured for top-performers', href: 'publisher-calendar.html' },
    { key: 'guidelines', label: 'Updated content guidelines published to team', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> audited 240 Q2 posts by performance and content type', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> reconfigured Q3 content calendar mix based on audit data', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> generated updated content guidelines from audit findings', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Content audit complete</strong> — 3 types drive 80% of engagement. Q3 mix updated.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Q3 target: 60% of posts from top-performing formats. Estimated ER: 3.5%+.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I audited your 240 Q2 posts. Clear finding: 3 content types drive 80% of engagement but represent only 22% of what you publish. Reconfiguring your Q3 mix around these formats would significantly boost average engagement.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-audit-report', 'reconfigure-q3-mix', 'eliminate-low-perf', 'content-guidance'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
