const FLOW_ANNUAL_REPORT_PREP = {
  id: 'annual-report-prep',
  name: 'Annual Report Preparation',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Annual report due in 3 weeks — social media chapter ready to compile',
    description: [
      'Your annual report is due in 3 weeks. The social media chapter requires 12 months of performance data across 8 KPIs.',
      'I can compile the full year of social performance data, generate year-in-review narrative, and export everything in your board-approved format.'
    ],
    completedDescription: ['Annual report social chapter compiled — 12 months of data, narrative, highlights, and board-formatted export ready.'],
    footer: 'This supports your goal: Deliver the social media chapter of the annual report 5 days before deadline',
    checkboxItems: [
      { action: 'compile-12mo', label: 'Compile 12 months of performance data across all 8 required KPIs' },
      { action: 'generate-narrative', label: 'Generate year-in-review narrative with highlights and milestones' },
      { action: 'create-visuals', label: 'Create charts and visualizations for board presentation format' },
      { action: 'export-report', label: 'Export in board-approved format (PDF + editable PPTX)' }
    ],
    moreIdeasPool: [
      { action: 'yoy-benchmarks', label: 'Add year-over-year benchmarks for all headline metrics' },
      { action: 'roi-section', label: 'Include social media ROI section with attribution methodology' },
      { action: 'forward-looking', label: 'Add Q1 outlook section with projections and key initiatives' }
    ]
  },
  decisionItems: [
    { key: 'data', label: '12-month social performance data compiled', href: 'unified-analytics.html' },
    { key: 'report', label: 'Annual report social chapter in PDF + PPTX', href: 'unified-analytics.html' },
    { key: 'narrative', label: 'Year-in-review narrative and highlights generated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> compiled 12 months of social performance across 8 KPIs', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> generated year-in-review narrative with highlights', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> exported report in PDF and editable PPTX formats', time: '4 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Annual report chapter ready</strong> — PDF and PPTX exported. 3 weeks ahead of deadline.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Year highlight: Brand sentiment improved +18 points. Follower growth: +34% YoY.', time: '3 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Annual report is due in 3 weeks. The social chapter needs 12 months of data across 8 KPIs — a task that typically takes your team 3-4 days. I can compile it now and have a board-formatted draft ready in minutes.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['compile-12mo', 'generate-narrative', 'create-visuals', 'export-report'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
