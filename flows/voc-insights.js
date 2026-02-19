/* ============================================================
   FLOW: VoC Insights
   
   Demo scenario: CX Director analyzes Voice of Customer data for quarterly review
   Persona: CX Director
   ============================================================ */

const FLOW_VOC_INSIGHTS = {
  id: 'voc-insights',
  name: 'VoC Insights',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Q1 VoC insights ready for review',
    description: [
      'I analyzed <strong>4,287 survey responses</strong> and <strong>18,000+ feedback touchpoints</strong> from Q1.',
      'NPS: 42 (up from 38). Key themes identified:'
    ],
    completedDescription: [
      'Q1 Voice of Customer analysis complete. Board presentation ready.'
    ],
    footer: 'This supports your goal: Improve NPS by 10 points and identify top 3 customer pain points quarterly',
    
    checkboxItems: [
      { action: 'nps-breakdown',    label: 'Generate NPS breakdown by segment and channel' },
      { action: 'theme-analysis',   label: 'Deep-dive analysis on top 5 feedback themes' },
      { action: 'journey-mapping',  label: 'Map pain points to customer journey stages' },
      { action: 'action-plan',      label: 'Create prioritized action plan for improvements' }
    ],
    
    moreIdeasPool: [
      { action: 'promoter-profile', label: 'Profile characteristics of promoters vs detractors' },
      { action: 'churn-predict',    label: 'Identify accounts at risk based on feedback signals' },
      { action: 'benchmark-nps',    label: 'Benchmark NPS against industry standards' },
      { action: 'text-sentiment',   label: 'Run sentiment analysis on open-text responses' },
      { action: 'product-feedback', label: 'Extract product-specific improvement requests' },
      { action: 'exec-deck',        label: 'Generate executive presentation deck' }
    ]
  },

  decisionItems: [
    { key: 'nps',       label: 'NPS segment breakdown ready',           href: 'unified-analytics.html' },
    { key: 'themes',    label: 'Top 5 themes analysis complete',        href: 'voc-survey-detail.html' },
    { key: 'journey',   label: 'Journey pain point map created',        href: 'unified-analytics.html' },
    { key: 'actions',   label: 'Q2 action plan drafted',                href: 'voc-survey-detail.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> generated NPS breakdown by segment', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> completed deep-dive on 5 feedback themes', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> mapped pain points to journey stages', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> drafted prioritized Q2 action plan', time: '3 minutes ago' },
    { text: '<strong>You</strong> requested Q1 VoC insights analysis', time: '5 minutes ago' },
    { text: '<strong>Cortex AI</strong> processed 4,287 survey responses', time: '6 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Q1 VoC analysis ready.</strong> NPS improved to 42.', time: '6 min ago', unread: true },
    { icon: 'ai', text: 'Top pain point identified: <strong>checkout process friction</strong>.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Promoter segment grew 8% — driven by support satisfaction.', time: '4 min ago', unread: false },
    { icon: 'activity', text: 'Executive deck generated and ready for board meeting.', time: '1 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I analyzed Q1 Voice of Customer data: <strong>4,287 survey responses</strong> and <strong>18,000+ feedback touchpoints</strong>.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Key finding: NPS improved to 42 (up from 38). Top pain point: <strong>checkout process friction</strong>.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I can generate NPS breakdown, theme analysis, journey mapping, and a prioritized action plan for Q2.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['nps-breakdown', 'theme-analysis', 'journey-mapping', 'action-plan'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Analysis complete! NPS breakdown ready, 5 themes analyzed, pain points mapped to journey, Q2 action plan drafted.', delay: 2500 },
    { type: 'navigate', page: 'unified-analytics.html', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Here\'s your NPS segment breakdown and customer journey pain point map.', delay: 2000 },
    { type: 'navigate', page: 'voc-survey-detail.html', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Promoter segment grew 8% — driven by support satisfaction. Executive deck ready for board meeting. Demo complete!', delay: 2500 }
  ]
};
