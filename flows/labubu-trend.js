/* ============================================================
   FLOW: Labubu Trend
   
   Demo scenario: Trend detection and campaign creation
   This is the first demo flow with intelligence box and decisions.
   ============================================================ */

const FLOW_LABUBU_TREND = {
  id: 'labubu-trend',
  name: 'Labubu Trend',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Labubu trend in your country',
    description: [
      'Labubu is trending in your country — your competitors are publishing content related to this trend.',
      'Do you want to:'
    ],
    completedDescription: [
      'Labubu is trending in your country — your competitors are publishing content related to this trend.'
    ],
    footer: 'This actions helping reach goal of your team objective: Increase social engagement with trending content by 30% in Q2',
    
    checkboxItems: [
      { action: 'campaign',  label: 'Create campaign + collection with content ideas' },
      { action: 'listening', label: 'Create listening query on this trend' },
      { action: 'analytics', label: 'Create custom board in Unified analytics on this trend with data from listening query' },
      { action: 'ugc',       label: 'Check UGC content' }
    ],
    
    moreIdeasPool: [
      { action: 'benchmark',   label: 'Run competitor benchmark analysis on this trend' },
      { action: 'influencer',  label: 'Find top influencers posting about Labubu' },
      { action: 'sentiment',   label: 'Analyze audience sentiment around this trend' },
      { action: 'schedule',    label: 'Schedule optimal posting times based on trend peaks' },
      { action: 'hashtags',    label: 'Generate trending hashtag recommendations' },
      { action: 'report',      label: 'Create weekly trend performance report' }
    ]
  },

  decisionItems: [
    { key: 'collection', label: 'Collection "Labubu"',             href: 'content-collection.html' },
    { key: 'campaign',   label: 'Publisher campaign "Labubu"',     href: 'publisher-campaign.html' },
    { key: 'listening',  label: 'Listening query "Labubu"',        href: 'settings-listening.html' },
    { key: 'analytics',  label: 'Analytics custom board "Labubu"', href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> created Collection "Labubu"', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created Publisher campaign "Labubu"', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> created Listening query "Labubu"', time: '3 minutes ago' },
    { text: '<strong>Cortex AI</strong> created Analytics board "Labubu"', time: '3 minutes ago' },
    { text: '<strong>You</strong> approved trend "Labubu" actions', time: '5 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected trending topic "Labubu"', time: '10 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>Labubu trend</strong> is gaining momentum in Germany. Your competitors published 12 new posts.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Campaign <strong>"Labubu"</strong> content ideas are ready for review.', time: '12 min ago', unread: true },
    { icon: 'activity', text: 'Your listening query <strong>"Labubu"</strong> collected 687 new mentions today.', time: '1 hour ago', unread: false },
    { icon: 'activity', text: 'Analytics board <strong>"Labubu"</strong> has new data available.', time: '2 hours ago', unread: false }
  ]
};
