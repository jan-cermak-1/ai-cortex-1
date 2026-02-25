const FLOW_ANALYTICS_DASHBOARD_MIGRATION = {
  id: 'analytics-dashboard-migration',
  name: 'Analytics Dashboard Migration',
  initialState: { mode: 'initial', messages: [], visitedDecisions: {} },
  intelligenceBox: {
    title: '12 legacy dashboards ready for migration to Unified Analytics',
    description: [
      'I found <strong>12 legacy dashboards</strong> being exported manually from 3 separate tools (Sprout, Brandwatch, Google Sheets). Migrating them to Unified Analytics would save your team 8 hours per week of manual data export and reconciliation.',
      'I\'ve mapped all the equivalent metrics and can rebuild them automatically.'
    ],
    completedDescription: ['12 dashboards migrated to Unified Analytics — all KPIs mapped, data reconciled, and legacy exports decommissioned.'],
    footer: 'This supports your goal: Consolidate all reporting into Unified Analytics to eliminate manual data reconciliation',
    checkboxItems: [
      { action: 'map-metrics', label: 'Map all 12 legacy dashboard metrics to Unified Analytics equivalents' },
      { action: 'rebuild-dashboards', label: 'Rebuild 12 dashboards in Unified Analytics with same layout' },
      { action: 'validate-data', label: 'Run data validation: compare last 4 weeks of data across old and new' },
      { action: 'schedule-decommission', label: 'Schedule decommission of legacy tool exports after 2-week parallel run' }
    ],
    moreIdeasPool: [
      { action: 'add-benchmarks', label: 'Enhance migrated dashboards with competitive benchmarks not in legacy tools' },
      { action: 'auto-schedule', label: 'Set up automated PDF delivery for all 12 dashboards to stakeholders' },
      { action: 'training-guide', label: 'Generate team training guide for new Unified Analytics dashboards' }
    ]
  },
  decisionItems: [
    { key: 'migrated', label: '12 dashboards rebuilt in Unified Analytics', href: 'unified-analytics.html' },
    { key: 'validated', label: 'Data validated — metrics match legacy tools within 0.5%', href: 'unified-analytics.html' },
    { key: 'decommission', label: 'Legacy export decommission scheduled (2 weeks)', href: 'unified-analytics.html' }
  ],
  activityItems: [
    { text: '<strong>Cortex AI</strong> rebuilt 12 legacy dashboards in Unified Analytics', time: '1 minute ago' },
    { text: '<strong>Cortex AI</strong> validated data against legacy tools — match confirmed', time: '2 minutes ago' },
    { text: '<strong>Cortex AI</strong> mapped all legacy metrics to Unified Analytics equivalents', time: '3 minutes ago' }
  ],
  notifications: [
    { icon: 'ai', text: '<strong>Migration complete</strong> — 12 dashboards rebuilt, data validated, legacy to be decommissioned.', time: '1 min ago', unread: true },
    { icon: 'activity', text: 'Parallel run period: 2 weeks. Estimated weekly time savings: 8 hours.', time: '2 min ago', unread: false }
  ],
  playbackSteps: [
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1200 },
    { type: 'message', sender: 'ai', text: 'I found 12 legacy dashboards being manually exported from 3 separate tools — costing 8 hours per week of manual reconciliation. I can rebuild them all in Unified Analytics with data validation. Ready to migrate?', delay: 2500 },
    { type: 'action', action: 'showIntelligenceBox', delay: 1500 },
    { type: 'action', action: 'selectCheckboxes', items: ['map-metrics', 'rebuild-dashboards', 'validate-data', 'schedule-decommission'], delay: 1500 },
    { type: 'action', action: 'executeSelected', delay: 2000 },
    { type: 'navigate', page: 'unified-analytics.html', cursorTarget: '[data-nav-id="unified-analytics"]', delay: 1500 }
  ]
};
