/* ============================================================
   FLOW SWITCHER - Panel for switching between demo flows
   
   Floating panel on the left side of the screen.
   Allows switching between different demo scenarios.
   ============================================================ */

const flowSwitcherState = {
  isOpen: true,
  activeFlowId: 'labubu-trend'
};

function renderFlowSwitcher() {
  const flows = typeof FLOWS_REGISTRY !== 'undefined' ? FLOWS_REGISTRY : [];
  
  const flowItems = flows.map(flow => {
    const isActive = flow.id === flowSwitcherState.activeFlowId;
    return `
      <div class="flow-item${isActive ? ' active' : ''}" 
           data-flow-id="${flow.id}"
           onclick="selectFlow('${flow.id}')"
           role="button"
           tabindex="0">
        <div class="flow-item-indicator"></div>
        <div class="flow-item-content">
          <div class="flow-item-name">${flow.name}</div>
          <div class="flow-item-description">${flow.description}</div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="flow-switcher${flowSwitcherState.isOpen ? ' open' : ''}">
      <div class="flow-switcher-panel">
        <div class="flow-switcher-header">
          <span class="flow-switcher-title">Demo Flows</span>
        </div>
        <div class="flow-switcher-list">
          ${flowItems}
        </div>
      </div>
      <div class="flow-switcher-buttons">
        <div class="flow-switcher-toggle" onclick="toggleFlowSwitcher()" title="Toggle flow switcher">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <button class="flow-reset-btn" onclick="resetCurrentFlow()" title="Reset current flow">
          <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1058 6.40889C18.5542 5.7252 15.8483 5.90255 13.4078 6.91345C10.977 7.92032 8.94475 9.69807 7.62352 11.9727L7.61001 12H12V14H4V6.00001H6V10.7889C7.54307 8.22102 9.87066 6.2138 12.6424 5.06569C15.4897 3.88631 18.6466 3.67939 21.6235 4.47704C24.6003 5.27469 27.2308 7.03232 29.1069 9.47734C30.9831 11.9224 32 14.9181 32 18H30C30 15.3584 29.1283 12.7906 27.5202 10.6949C25.9121 8.59914 23.6574 7.09259 21.1058 6.40889ZM6 18C6 20.6416 6.87165 23.2094 8.47976 25.3051C10.0879 27.4009 12.3426 28.9074 14.8942 29.5911C17.4458 30.2748 20.1517 30.0975 22.5922 29.0866C25.023 28.0797 27.0552 26.3019 28.3765 24.0273L28.39 24H24V22H32V30H30V25.2111C28.4569 27.779 26.1293 29.7862 23.3576 30.9343C20.5103 32.1137 17.3534 32.3206 14.3765 31.523C11.3997 30.7253 8.76918 28.9677 6.89305 26.5227C5.01692 24.0776 4 21.0819 4 18H6Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>`;
}

function toggleFlowSwitcher() {
  flowSwitcherState.isOpen = !flowSwitcherState.isOpen;
  const switcher = document.querySelector('.flow-switcher');
  if (switcher) {
    switcher.classList.toggle('open', flowSwitcherState.isOpen);
  }
}

function selectFlow(flowId) {
  if (flowId === flowSwitcherState.activeFlowId) return;
  
  flowSwitcherState.activeFlowId = flowId;
  
  if (typeof switchToFlow === 'function') {
    switchToFlow(flowId);
  }
  
  updateFlowSwitcherUI();
}

function updateFlowSwitcherUI() {
  const items = document.querySelectorAll('.flow-item');
  items.forEach(item => {
    const isActive = item.dataset.flowId === flowSwitcherState.activeFlowId;
    item.classList.toggle('active', isActive);
  });
}

function initFlowSwitcher() {
  const root = document.getElementById('flow-switcher-root');
  if (!root) return;
  
  root.innerHTML = renderFlowSwitcher();
  
  document.querySelectorAll('.flow-item').forEach(item => {
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectFlow(this.dataset.flowId);
      }
    });
  });
}
