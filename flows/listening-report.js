/* ============================================================
   FLOW: Listening Report
   
   Demo scenario: PR Manager generates weekly brand listening report
   Persona: PR Manager
   ============================================================ */

const FLOW_LISTENING_REPORT = {
  id: 'listening-report',
  name: 'Listening Report',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Weekly listening report ready',
    description: [
      'I compiled this week\'s brand listening data: <strong>12,456 mentions</strong> across all channels.',
      'Key insights ready for your stakeholder report:'
    ],
    completedDescription: [
      'Weekly listening report generated and distributed to stakeholders.'
    ],
    footer: 'This supports your goal: Deliver weekly brand intelligence reports with actionable insights to leadership',
    
    checkboxItems: [
      { action: 'exec-summary',     label: 'Generate executive summary with key metrics' },
      { action: 'sentiment-chart',  label: 'Create sentiment trend visualization' },
      { action: 'topic-breakdown',  label: 'Break down mentions by topic and source' },
      { action: 'share-voice',      label: 'Calculate share of voice vs competitors' }
    ],
    
    moreIdeasPool: [
      { action: 'influencer-list',  label: 'List top influencers mentioning the brand' },
      { action: 'press-summary',    label: 'Summarize press and news coverage' },
      { action: 'crisis-flags',     label: 'Highlight potential reputation risks' },
      { action: 'trend-forecast',   label: 'Forecast next week\'s conversation trends' },
      { action: 'email-report',     label: 'Schedule automated email report delivery' },
      { action: 'benchmark-compare', label: 'Compare metrics to industry benchmarks' }
    ]
  },

  decisionItems: [
    { key: 'summary',   label: 'Executive summary ready',              href: 'unified-analytics.html' },
    { key: 'sentiment', label: 'Sentiment trend chart created',        href: 'unified-analytics.html' },
    { key: 'topics',    label: 'Topic breakdown analysis complete',    href: 'unified-analytics.html' },
    { key: 'sov',       label: 'Share of voice report (34% SOV)',      href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> generated executive summary for leadership', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created sentiment trend visualization', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> completed topic breakdown analysis', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> calculated share of voice: 34%', time: '3 minutes ago' },
    { text: '<strong>You</strong> requested weekly listening report', time: '4 minutes ago' },
    { text: '<strong>Cortex AI</strong> processed 12,456 brand mentions', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Weekly report ready.</strong> 12,456 mentions analyzed.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Positive sentiment up <strong>+12%</strong> vs last week.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Share of voice: 34% (up from 31% last month).', time: '3 min ago', unread: false },
    { icon: 'activity', text: 'Report PDF generated and ready for download.', time: '2 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I compiled this week\'s brand listening data: <strong>12,456 mentions</strong> across all channels.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Key insight: Positive sentiment is up <strong>+12%</strong> vs last week. Ready to generate your stakeholder report.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I can create an executive summary, sentiment visualization, topic breakdown, and share of voice analysis.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['exec-summary', 'sentiment-chart', 'topic-breakdown', 'share-voice'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Report generated! Executive summary ready, sentiment trends visualized, topics broken down, SOV: 34%.', delay: 2500 },
    { type: 'navigate', page: 'unified-analytics.html', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Here\'s your weekly listening report with all visualizations and metrics.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Share of voice increased to 34% (up from 31% last month). Report PDF ready for download. Demo complete!', delay: 2500 }
  ]
};
