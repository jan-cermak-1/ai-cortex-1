const FLOW_TEAM_PERFORMANCE_REVIEW = {
  id: 'team-performance-review',
  name: 'Team Performance Review',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Q2 team performance data ready for review',
    description: [
      'I compiled <strong>Q2 performance data for your 14-person social media team</strong>: publishing output, response SLAs, content quality scores, and engagement benchmarks.',
      'Top performers exceeded targets by 40%. Two team members show signs of burnout (response quality declining, overtime hours up). Three need skills development in video content creation.'
    ],
    completedDescription: ['Q2 team performance review prepared — individual scorecards, coaching recommendations, and skills development plan ready.'],
    footer: 'This supports your goal: Develop a high-performing social team with clear growth paths and sustainable workloads',
    checkboxItems: [
      { action: 'generate-scorecards', label: 'Generate individual performance scorecards for all 14 team members' },
      { action: 'burnout-alerts', label: 'Flag 2 at-risk team members for manager check-in conversation' },
      { action: 'skills-plan', label: 'Create video content skills development plan for 3 team members' },
      { action: 'top-performer-recognition', label: 'Draft recognition and growth opportunity proposal for top 3 performers' }
    ],
    moreIdeasPool: [
      { action: 'workload-rebalance', label: 'Rebalance Q3 assignments based on Q2 capacity data' },
      { action: 'training-budget', label: 'Identify external training programs for team skills gaps' },
      { action: 'team-benchmarks', label: 'Set Q3 team-level benchmarks based on industry standards' }
    ]
  },
  decisionItems: [
    { key: 'scorecards', label: 'Individual performance scorecards for all 14 members', href: 'settings-users.html' },
    { key: 'at-risk', label: 'Burnout flag: 2 team members flagged for manager check-in', href: 'care-inbox.html' },
    { key: 'skills', label: 'Video skills development plan created', href: 'settings-users.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> compiled Q2 performance scorecards for 14 team members', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> flagged 2 team members showing burnout signals for manager review', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created video skills development plan for 3 team members', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Team performance ready</strong> — 14 scorecards, 2 burnout flags, skills plan prepared.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Burnout risk: 2 team members working 22% above capacity for 6+ weeks.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Q2 team performance data is in. Most of the team performed well, but 2 members are showing burnout signals — response quality declining and sustained overtime for 6 weeks. Three members need video content skills development. Shall I prepare the full review package?', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['generate-scorecards', 'burnout-alerts', 'skills-plan', 'top-performer-recognition'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'settings-users.html', cursorTarget: '[data-nav-id="settings"]', delay: 1500 }
  ]
};
