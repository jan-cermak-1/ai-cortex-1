const FLOW_AUTONOMOUS_CONTENT_PIPELINE = {
  id: 'autonomous-content-pipeline',
  name: 'Autonomous Content Pipeline',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Content pipeline automation opportunity detected',
    description: [
      'I analyzed your content production workflow and identified a fully automatable pipeline for your weekly evergreen content.',
      'Based on your top-performing formats, I can autonomously: generate briefs → draft content → apply brand voice → schedule to optimal slots → track performance → optimize the next cycle. Estimated time savings: <strong>6 hours per week</strong>.'
    ],
    completedDescription: ['Autonomous content pipeline configured — weekly evergreen cycle set up end-to-end with human approval gate at draft stage.'],
    footer: 'This supports your goal: Maintain a consistent 5-post-per-week publishing cadence without increasing team headcount',
    checkboxItems: [
      { action: 'configure-pipeline', label: 'Configure automated weekly content pipeline with your parameters' },
      { action: 'set-approval-gate', label: 'Add human approval gate at the draft review stage' },
      { action: 'set-performance-feedback', label: 'Enable performance feedback loop: learning from engagement data each cycle' },
      { action: 'define-content-rules', label: 'Define content rules: topics, formats, channel-specific constraints' }
    ],
    moreIdeasPool: [
      { action: 'trend-inject', label: 'Enable real-time trend injection: auto-adapt content to current trends' },
      { action: 'ab-generation', label: 'Enable A/B generation: produce 2 variants and auto-promote winner' },
      { action: 'seasonal-aware', label: 'Make pipeline seasonally aware: adjust topics by upcoming events and holidays' }
    ]
  },
  decisionItems: [
    { key: 'pipeline', label: 'Autonomous content pipeline configured', href: 'publisher-calendar.html' },
    { key: 'approval', label: 'Human approval gate active at draft stage', href: 'publisher-calendar.html' },
    { key: 'schedule', label: 'First automated batch in queue for Monday', href: 'publisher-calendar.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> configured autonomous weekly content pipeline', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set up approval gate and performance feedback loop', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> defined content rules for topics, formats, and channels', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Autonomous pipeline active</strong> — first batch generating. Awaiting approval Monday.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Estimated 6 hours/week saved. Human approval required before publishing.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I\'ve analyzed your content workflow and can automate the entire weekly evergreen cycle: briefs → drafts → brand voice → scheduling → tracking → optimization. That\'s 6 hours back per week, with you reviewing at draft stage.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['configure-pipeline', 'set-approval-gate', 'set-performance-feedback', 'define-content-rules'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
