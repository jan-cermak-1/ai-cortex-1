const FLOW_B2B_LINKEDIN_PROGRAM = {
  id: 'b2b-linkedin-program',
  name: 'B2B LinkedIn Thought Leadership',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'LinkedIn thought leadership gap: 0 executive posts in 60 days',
    description: [
      'Your executives haven\'t posted on LinkedIn in 60 days — but your top competitors\' C-suite are averaging 2.4 posts per week.',
      'B2B companies with active executive LinkedIn presence generate <strong>3.4x more qualified leads</strong> than those without. I can build and manage a ghostwriting pipeline.'
    ],
    completedDescription: ['Executive LinkedIn program launched — content calendar for 4 executives, ghostwriting workflow, and performance tracking configured.'],
    footer: 'This supports your goal: Build a B2B thought leadership presence that generates 50+ qualified LinkedIn leads per month',
    checkboxItems: [
      { action: 'content-calendar', label: 'Create 90-day LinkedIn content calendar for 4 executives (8 posts/month each)' },
      { action: 'ghostwriting-workflow', label: 'Set up ghostwriting workflow: brief → draft → approval → publish' },
      { action: 'topic-research', label: 'Research top 10 industry topics driving engagement in your LinkedIn niche' },
      { action: 'performance-tracking', label: 'Set up executive LinkedIn performance tracking board' }
    ],
    moreIdeasPool: [
      { action: 'employee-amplification', label: 'Create plan for employees to amplify executive posts' },
      { action: 'newsletter', label: 'Set up LinkedIn Newsletter for CEO as long-form content channel' },
      { action: 'comment-strategy', label: 'Build comment engagement strategy for key industry posts' }
    ]
  },
  decisionItems: [
    { key: 'calendar', label: '90-day LinkedIn content calendar for 4 executives', href: 'publisher-calendar.html' },
    { key: 'workflow', label: 'Ghostwriting approval workflow configured', href: 'publisher-calendar.html' },
    { key: 'tracking', label: 'Executive LinkedIn performance tracking board', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> created 90-day LinkedIn calendar for 4 executives', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> configured ghostwriting approval workflow', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> researched top 10 engagement topics for B2B LinkedIn niche', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>LinkedIn program launched</strong> — 4 executives with 90-day calendar and workflow.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'First executive posts scheduled for Monday. Ghostwriting briefs sent to content team.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Your executives haven\'t posted on LinkedIn in 60 days. B2B companies with active executive LinkedIn presence generate 3.4x more qualified leads. Your competitors\' C-suite average 2.4 posts per week. I can build the ghostwriting pipeline.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['content-calendar', 'ghostwriting-workflow', 'topic-research', 'performance-tracking'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 }
  ]
};
