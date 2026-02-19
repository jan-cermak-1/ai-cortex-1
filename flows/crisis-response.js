/* ============================================================
   FLOW: Crisis Response
   
   Demo scenario: Brand Manager handles sudden negative sentiment spike
   Persona: Brand Manager
   ============================================================ */

const FLOW_CRISIS_RESPONSE = {
  id: 'crisis-response',
  name: 'Crisis Response',
  
  initialState: {
    mode: 'initial',
    messages: [],
    visitedDecisions: {}
  },

  intelligenceBox: {
    title: 'Negative sentiment spike detected',
    description: [
      '<strong>Alert:</strong> 340% increase in negative mentions about your brand in the last 2 hours.',
      'Primary topic: Product quality complaints about "EcoBottle Pro".',
      'Recommended actions:'
    ],
    completedDescription: [
      'Crisis response protocol activated for the EcoBottle Pro negative sentiment spike.'
    ],
    footer: 'This supports your goal: Maintain brand reputation score above 85% and respond to crises within 30 minutes',
    
    checkboxItems: [
      { action: 'pause-ads',      label: 'Pause all EcoBottle Pro promotional content' },
      { action: 'create-response', label: 'Draft crisis response statement' },
      { action: 'escalate-care',  label: 'Escalate mentions to Care team for immediate response' },
      { action: 'monitor-board',  label: 'Create real-time monitoring board in Unified Analytics' }
    ],
    
    moreIdeasPool: [
      { action: 'sentiment-report', label: 'Generate detailed sentiment breakdown report' },
      { action: 'influencer-check', label: 'Check if any influencers are amplifying the issue' },
      { action: 'competitor-watch', label: 'Monitor competitor reactions to the situation' },
      { action: 'press-alert',      label: 'Set up press mention alerts for brand name' },
      { action: 'response-template', label: 'Create approved response templates for Care agents' },
      { action: 'exec-brief',       label: 'Generate executive briefing document' }
    ]
  },

  decisionItems: [
    { key: 'paused',    label: '12 promotional posts paused',          href: 'publisher-calendar.html' },
    { key: 'response',  label: 'Crisis statement drafted',             href: 'community-inbox.html' },
    { key: 'escalated', label: '28 mentions escalated to Care',        href: 'care-inbox.html' },
    { key: 'board',     label: 'Crisis monitoring board created',      href: 'unified-analytics.html' }
  ],

  activityItems: [
    { text: '<strong>Cortex AI</strong> paused 12 EcoBottle Pro promotional posts', time: '30 seconds ago' },
    { text: '<strong>Cortex AI</strong> drafted crisis response statement', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> escalated 28 negative mentions to Care', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> created real-time crisis monitoring board', time: '2 minutes ago' },
    { text: '<strong>You</strong> approved crisis response actions', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected 340% negative sentiment spike', time: '5 minutes ago' }
  ],

  notifications: [
    { icon: 'ai', text: '<strong>URGENT:</strong> Negative sentiment spike detected for EcoBottle Pro.', time: '5 min ago', unread: true },
    { icon: 'ai', text: 'Crisis response protocol activated. 12 posts paused.', time: '2 min ago', unread: true },
    { icon: 'activity', text: 'Care team is responding to escalated mentions. 8 of 28 handled.', time: '10 min ago', unread: false },
    { icon: 'activity', text: 'Crisis monitoring board shows sentiment stabilizing.', time: '15 min ago', unread: false }
  ],

  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1500 },
    { type: 'message', sender: 'ai', text: '<strong>URGENT ALERT:</strong> I detected a 340% increase in negative mentions about your brand in the last 2 hours.', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Primary topic: Product quality complaints about <strong>EcoBottle Pro</strong>. This requires immediate attention.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'message', sender: 'ai', text: 'I recommend activating crisis response: pause promotional content, draft response, escalate to Care, and set up monitoring.', delay: 2500 },
    { type: 'action', action: 'selectCheckboxes', items: ['pause-ads', 'create-response', 'escalate-care', 'monitor-board'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Crisis protocol activated. 12 promotional posts paused, 28 mentions escalated to Care team.', delay: 2500 },
    { type: 'navigate', page: 'publisher-calendar.html', cursorTarget: '[data-nav-id="publisher"]', delay: 2000 },
    { type: 'message', sender: 'ai', text: 'Here are the paused promotional posts. They will remain on hold until the crisis is resolved.', delay: 2000 },
    { type: 'navigate', page: 'care-inbox.html', cursorTarget: '[data-nav-id="care"]', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Care team is now handling the escalated mentions. Crisis monitoring board is active.', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2500 },
    { type: 'message', sender: 'ai', text: 'Real-time crisis monitoring board shows sentiment data. The demo is complete!', delay: 2000 }
  ]
};
