const FLOW_BUDGET_PACING_ALERT = {
  id: 'budget-pacing-alert',
  name: 'Budget Pacing Alert',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: 'Campaign overpacing — 68% budget spent, 41% through flight',
    description: [
      'Campaign is <strong>68% through budget</strong> but only 41% through the flight period — overpacing by 27 points.',
      'Cortex recommends automatic bid adjustments across 4 ad sets to normalize delivery. Proposed: Ad Set A -22%, Ad Set B -18%, Ad Set C -15%, Ad Set D -12%. This will extend runway by 8 days and avoid mid-flight budget exhaustion.'
    ],
    completedDescription: ['Bid adjustments applied — 4 ad sets normalized, pacing now aligned to flight end date.'],
    footer: 'This supports your goal: Deliver campaigns evenly and avoid budget exhaustion before flight end',
    checkboxItems: [
      { action: 'apply-bids', label: 'Apply bid adjustments across 4 ad sets to normalize pacing' },
      { action: 'set-alert', label: 'Set 15% pacing variance alert for future campaigns' },
      { action: 'update-forecast', label: 'Update forecast — 8 days runway extension' }
    ],
    moreIdeasPool: [
      { action: 'audience-expand', label: 'Expand audience to lower CPM and slow spend' },
      { action: 'creative-rotate', label: 'Rotate in fresh creative to improve efficiency' }
    ]
  },
  decisionItems: [
    { key: 'bids', label: '4 ad sets bid-adjusted', href: 'unified-analytics.html' },
    { key: 'alert', label: 'Pacing variance alert set', href: 'command-center.html' },
    { key: 'forecast', label: 'Forecast updated', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> applied bid adjustments to 4 ad sets', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> set 15% pacing variance alert', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> detected overpacing — 68% budget, 41% flight', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Pacing alert:</strong> 68% budget spent, 41% through flight. Overpacing 27 points.', time: '3 min ago', unread: true },
    { icon: 'activity', text: 'Bid adjustments applied. 8 days runway extension.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'command-center.html', cursorTarget: '[data-nav-id="command-center"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'Budget pacing alert: your campaign is 68% through budget but only 41% through the flight — 27 points overpacing. I recommend bid adjustments across 4 ad sets: -22%, -18%, -15%, -12%. That extends runway by 8 days.', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['apply-bids', 'set-alert', 'update-forecast'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 2000 }
  ]
};
