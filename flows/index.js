/* ============================================================
   FLOWS REGISTRY - All available demo flows
   
   Add new flows here. Each flow defines its own data and content.
   The Cortex UI component is shared across all flows.
   ============================================================ */

const FLOWS_REGISTRY = [
  {
    id: 'none',
    name: 'Flow 0: None',
    description: 'Empty Cortex component (for UI debugging)',
    startPage: 'command-center.html',
    data: null
  },
  {
    id: 'labubu-trend',
    name: 'Flow 1: Labubu Trend',
    description: 'Trend detection and campaign creation',
    startPage: 'command-center.html',
    data: FLOW_LABUBU_TREND
  }
];

function getFlowById(id) {
  return FLOWS_REGISTRY.find(f => f.id === id) || FLOWS_REGISTRY[0];
}

function getFlowData(id) {
  const flow = getFlowById(id);
  return flow ? flow.data : null;
}
