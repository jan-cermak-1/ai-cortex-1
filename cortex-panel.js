/* ============================================================
   CORTEX AI PANEL - Persistent stateful side panel
   
   Rendered once into the SPA shell (#cortex-panel-root).
   State persists across page navigations.
   Includes: AI Chat, Activity Log, Notifications views.
   Right bar acts as tab switcher.
   
   UI configuration is in cortex-config.js
   Flow-specific data is in flows/*.js
   ============================================================ */

// --- Persistent state (survives across route changes) ---
const cortexState = {
  messages: [],
  currentPage: null,
  activeView: 'ai-chat',
  isCollapsed: false,
  mode: 'initial',
  pageSpecificTabs: [],
  scrollPositions: {},
  visitedDecisions: {},
  activeFlowId: 'labubu-trend'
};

// --- Get current flow data ---
function getCurrentFlowData() {
  if (typeof getFlowData === 'function') {
    return getFlowData(cortexState.activeFlowId);
  }
  return null;
}

// ============================================================
//  RENDER FUNCTIONS
// ============================================================

function renderCortexPanelFull() {
  return `
    <div class="cortex-panel-wrapper${cortexState.isCollapsed ? ' panel-collapsed' : ''}">
      <div class="cortex-panel" id="cortex-panel">
        ${renderCortexHeader()}
        <div class="cortex-views-container">
          ${renderAIChatView()}
          ${renderActivityView()}
          ${renderNotificationsView()}
        </div>
        ${renderCortexInput()}
      </div>
      ${renderCortexRightBar()}
    </div>`;
}

function renderCortexHeader() {
  const config = CORTEX_UI_CONFIG.header;
  const actionsHtml = config.actions.map(action => {
    const onclick = action.onClick ? ` onclick="${action.onClick}()"` : '';
    return `
            <div class="header-btn" title="${action.title}" role="button" tabindex="0"${onclick}>
              <img class="header-btn-icon" src="${action.icon}" alt="${action.title}">
            </div>`;
  }).join('');

  return `
        <div class="cortex-header">
          <div class="cortex-title">
            <img class="ai-icon" src="${config.icon}" alt="" width="18" height="18">
            <span class="cortex-title-text" id="cortex-header-title">${config.title}</span>
          </div>
          <div class="cortex-header-actions">${actionsHtml}
          </div>
        </div>`;
}

function renderAIChatView() {
  const isActive = cortexState.activeView === 'ai-chat';
  return `
          <div class="cortex-view${isActive ? ' active' : ''}" id="cortex-view-ai-chat">
            <div class="cortex-messages" id="cortex-messages">
              <div class="cortex-intelligence-area" id="cortex-intelligence-area"></div>
              <div class="cortex-chat-messages" id="cortex-chat-messages"></div>
            </div>
          </div>`;
}

function renderActivityView() {
  const isActive = cortexState.activeView === 'activity';
  const flowData = getCurrentFlowData();
  
  let activityHtml = '';
  if (flowData && flowData.activityItems) {
    activityHtml = flowData.activityItems.map(item => `
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="activity-text">${item.text}</div>
                  <div class="activity-time">${item.time}</div>
                </div>
              </div>`).join('');
  }

  return `
          <div class="cortex-view${isActive ? ' active' : ''}" id="cortex-view-activity">
            <div class="activity-list">${activityHtml}
            </div>
          </div>`;
}

function renderNotificationsView() {
  const isActive = cortexState.activeView === 'notifications';
  const flowData = getCurrentFlowData();
  
  let notificationsHtml = '';
  if (flowData && flowData.notifications) {
    notificationsHtml = flowData.notifications.map(item => {
      const iconSrc = item.icon === 'ai' 
        ? CORTEX_UI_CONFIG.chat.aiAvatar 
        : 'assets/cortex/activity.svg';
      return `
              <div class="notification-item${item.unread ? ' unread' : ''}">
                <div class="notification-icon">
                  <img src="${iconSrc}" alt="" width="16" height="16">
                </div>
                <div class="notification-content">
                  <div class="notification-text">${item.text}</div>
                  <div class="notification-time">${item.time}</div>
                </div>
              </div>`;
    }).join('');
  }

  return `
          <div class="cortex-view${isActive ? ' active' : ''}" id="cortex-view-notifications">
            <div class="notification-list">${notificationsHtml}
            </div>
          </div>`;
}

function renderCortexInput() {
  const config = CORTEX_UI_CONFIG.input;
  const pageTitles = CORTEX_UI_CONFIG.pageTitles;
  const contextLabel = pageTitles[cortexState.currentPage] || 'Command center';

  const attachmentItems = config.attachmentMenu.map(item => 
    `<div class="attachment-dropdown-item"><img src="${item.icon}" alt="" width="18" height="18">${item.label}</div>`
  ).join('\n                  ');

  return `
        <div class="cortex-input-area" id="cortex-input-area">
          <div class="cortex-input-box">
            <div class="cortex-input-context" id="cortex-input-context">
              <div class="context-label">${config.contextLabel}</div>
              <div class="context-value">
                <span class="context-page-name" id="cortex-context-page">${contextLabel}</span>
                <div class="context-close" onclick="removeInputContext()">
                  <svg viewBox="0 0 36 36" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 10.2929L18 18L10.2929 25.7071L11.7071 27.1213L19.4142 19.4142L27.1213 27.1213L28.5355 25.7071L20.8284 18L28.5355 10.2929L27.1213 8.87868L19.4142 16.5858L11.7071 8.87868L10.2929 10.2929Z"/></svg>
                </div>
              </div>
            </div>
            <textarea class="cortex-input-field" id="cortex-input-field" placeholder="${config.placeholder}" rows="1"></textarea>
            <div class="cortex-input-footer">
              <div class="attachment-btn" onclick="toggleAttachmentMenu(this, event)">
                <img src="${config.attachmentIcon}" alt="Attach">
                <div class="attachment-dropdown">
                  ${attachmentItems}
                </div>
              </div>
              <div class="send-btn" id="cortex-send-btn"><img src="${config.sendIcon}" alt="Send"></div>
            </div>
          </div>
          <div class="cortex-input-meta">
            <span class="cortex-input-powered">${config.poweredByText}</span>
          </div>
        </div>`;
}

function renderCortexRightBar() {
  const config = CORTEX_UI_CONFIG.rightBar;
  const activeView = cortexState.activeView;
  
  const tabsHtml = config.tabs.map(tab => {
    const isActive = activeView === tab.id;
    const badgeHtml = tab.badge ? `<span class="badge">${tab.badge}</span>` : '';
    return `
          <div class="bar-btn${isActive ? ' active' : ''}" data-view="${tab.id}" title="${tab.label}">
            ${badgeHtml}
            <img src="${tab.icon}" alt="${tab.label}">
          </div>`;
  }).join('');

  const toggleIcon = cortexState.isCollapsed ? config.toggleIcons.expand : config.toggleIcons.collapse;

  return `
      <div class="cortex-right-bar">
        <div class="cortex-right-bar-header">
          <div class="toggle-btn" id="cortex-toggle-btn" title="Toggle Cortex panel">
            <img class="toggle-icon" src="${toggleIcon}" alt="Toggle">
          </div>
          <div class="bar-divider"></div>
        </div>
        <div class="cortex-right-bar-nav">${tabsHtml}
        </div>
        <div class="cortex-right-bar-bottom">
          <div class="ai-btn${activeView === config.aiButton.id ? ' active' : ''}" data-view="${config.aiButton.id}" title="${config.aiButton.label}">
            <img src="${config.aiButton.icon}" alt="${config.aiButton.label}">
          </div>
        </div>
      </div>`;
}

// ============================================================
//  INTELLIGENCE BOX (page-context content inside AI Chat view)
// ============================================================

function renderIntelligenceInitial() {
  const flowData = getCurrentFlowData();
  if (!flowData || !flowData.intelligenceBox) return '';

  const box = flowData.intelligenceBox;
  const checkboxes = box.checkboxItems.map(item => `
              <div class="checkbox" data-action="${item.action}" role="checkbox" tabindex="0" aria-checked="false" aria-label="${item.label}" onclick="toggleCheckbox(this)">
                <div class="checkbox-box">
                  <img src="assets/cortex/checkbox-checked.svg" alt="">
                </div>
                <span class="checkbox-label">${item.label}</span>
              </div>`).join('');

  const descriptionHtml = box.description.map(p => `<p>${p}</p>`).join('\n              ');

  return `
          <div class="intelligence-box" id="intelligence-box-initial">
            <div class="intelligence-box-header">
              <span class="intelligence-box-title">${box.title}</span>
              <div class="intelligence-box-close" role="button" tabindex="0" aria-label="Close intelligence box" onclick="closeIntelligenceBox(this)">
                <img src="assets/cortex/close-x.svg" alt="">
              </div>
            </div>
            <div class="intelligence-box-description">
              ${descriptionHtml}
            </div>
            <div class="intelligence-box-actions">${checkboxes}
            </div>
            <div class="intelligence-box-buttons">
              <button class="btn btn-s btn-ghost disabled" id="execute-btn" onclick="executeSelected()">Execute selected</button>
              <span class="or-text">or</span>
              <button class="btn btn-s btn-ghost" onclick="generateMoreIdeas(this)">More ideas</button>
            </div>
            <div class="intelligence-box-footer">
              ${box.footer}
            </div>
          </div>`;
}

function renderIntelligenceCompleted(highlight) {
  const flowData = getCurrentFlowData();
  if (!flowData || !flowData.decisionItems) return '';

  const box = flowData.intelligenceBox;
  const visited = cortexState.visitedDecisions || {};
  
  const decisionItems = flowData.decisionItems.map(function(item) {
    var isCurrent = item.key === highlight;
    var isVisited = visited[item.key];
    var cls = 'decision-item' + (isVisited ? ' visited' : '');
    var icon = isVisited ? 'assets/cortex/decision-done.svg' : 'assets/cortex/decision-pending.svg';
    var onclick = isCurrent ? '' : ' onclick="visitDecisionItem(this, \'' + item.key + '\', \'' + item.href + '\')"';
    return '<div class="' + cls + '" role="link" tabindex="0" aria-label="' + item.label + '"' + onclick + '>' +
      '<div class="check-icon"><img src="' + icon + '" alt=""></div>' +
      '<span class="decision-label">' + item.label + '</span>' +
    '</div>';
  }).join('\n              ');

  const descriptionHtml = (box.completedDescription || box.description).map(p => `<p>${p}</p>`).join('\n              ');

  return `
          <div class="intelligence-box no-bg" id="intelligence-box-completed">
            <div class="intelligence-box-header">
              <span class="intelligence-box-title">${box.title}</span>
              <div class="intelligence-box-close" role="button" tabindex="0" aria-label="Close intelligence box" onclick="closeIntelligenceBox(this)">
                <img src="assets/cortex/close-x.svg" alt="">
              </div>
            </div>
            <div class="intelligence-box-description">
              ${descriptionHtml}
            </div>
            <div class="decision-completed">
              <div class="decision-header">Based on your decision I created:</div>
              ${decisionItems}
            </div>
          </div>`;
}

// ============================================================
//  CHAT MESSAGE SYSTEM
// ============================================================

function addChatMessage(type, content, options = {}) {
  const msg = {
    id: Date.now() + Math.random(),
    type,
    content,
    timestamp: new Date(),
    ...options,
  };
  cortexState.messages.push(msg);
  renderChatMessage(msg);
  scrollChatToBottom();
  return msg;
}

function renderChatMessage(msg) {
  const container = document.getElementById('cortex-chat-messages');
  if (!container) return;

  const el = document.createElement('div');
  el.className = `chat-message chat-message--${msg.type}`;
  el.dataset.msgId = msg.id;

  if (msg.type === 'ai') {
    el.innerHTML = `
      <div class="chat-message-avatar">
        <img src="${CORTEX_UI_CONFIG.chat.aiAvatar}" alt="AI" width="16" height="16">
      </div>
      <div class="chat-message-bubble">${msg.content}</div>`;
  } else if (msg.type === 'user') {
    el.innerHTML = `
      <div class="chat-message-bubble">${msg.content}</div>`;
  } else if (msg.type === 'system') {
    el.innerHTML = `
      <div class="chat-message-system">${msg.content}</div>`;
  }

  container.appendChild(el);
}

function scrollChatToBottom() {
  const messages = document.getElementById('cortex-messages');
  if (messages) {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }
}

function renderAllChatMessages() {
  const container = document.getElementById('cortex-chat-messages');
  if (!container) return;
  container.innerHTML = '';
  cortexState.messages.forEach(msg => renderChatMessage(msg));
  scrollChatToBottom();
}

function simulateAIResponse(userMessage) {
  const responses = [
    "I'll look into that for you. Based on the current data, here's what I found...",
    "Great question! Let me analyze the trends and get back to you with insights.",
    "I've processed your request. Here are the key findings from your data sources.",
    "Based on your listening queries and analytics, here's a summary of the relevant data.",
    "I can help with that. Let me pull up the relevant information from your connected profiles.",
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  setTimeout(() => {
    addChatMessage('ai', response);
  }, 800 + Math.random() * 1200);
}

// ============================================================
//  VIEW SWITCHING (Right Bar Tab System)
// ============================================================

function switchPanelView(viewId) {
  const currentView = document.getElementById('cortex-view-' + cortexState.activeView);
  if (currentView) {
    cortexState.scrollPositions[cortexState.activeView] = currentView.scrollTop;
  }

  document.querySelectorAll('.cortex-view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('cortex-view-' + viewId);
  if (target) {
    target.classList.add('active');
    const savedScroll = cortexState.scrollPositions[viewId];
    if (savedScroll) target.scrollTop = savedScroll;
  }

  document.querySelectorAll('.bar-btn, .ai-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-view="${viewId}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const inputArea = document.getElementById('cortex-input-area');
  if (inputArea) {
    inputArea.style.display = viewId === 'ai-chat' ? '' : 'none';
  }

  const headerTitle = document.getElementById('cortex-header-title');
  if (headerTitle) {
    headerTitle.textContent = CORTEX_UI_CONFIG.viewTitles[viewId] || 'Cortex';
  }

  cortexState.activeView = viewId;

  if (viewId === 'ai-chat' && cortexState.isCollapsed) {
    toggleCortexPanel();
  }
}

// ============================================================
//  PANEL TOGGLE
// ============================================================

function toggleCortexPanel() {
  const wrapper = document.querySelector('.cortex-panel-wrapper');
  if (!wrapper) return;

  cortexState.isCollapsed = !cortexState.isCollapsed;
  wrapper.classList.toggle('panel-collapsed', cortexState.isCollapsed);

  const toggleIcon = document.querySelector('#cortex-toggle-btn .toggle-icon');
  if (toggleIcon) {
    const icons = CORTEX_UI_CONFIG.rightBar.toggleIcons;
    toggleIcon.src = cortexState.isCollapsed ? icons.expand : icons.collapse;
  }
}

// ============================================================
//  FLOW MANAGEMENT
// ============================================================

function switchToFlow(flowId) {
  const flow = typeof getFlowById === 'function' ? getFlowById(flowId) : null;
  if (!flow) return;

  cortexState.activeFlowId = flowId;
  cortexState.messages = [];
  cortexState.visitedDecisions = {};
  cortexState.mode = flow.data ? flow.data.initialState.mode : 'empty';

  const root = document.getElementById('cortex-panel-root');
  if (root) {
    root.innerHTML = renderCortexPanelFull();
    initCortexListeners();
  }

  const config = typeof ROUTE_CONFIG !== 'undefined' ? ROUTE_CONFIG[flow.startPage] : null;
  const currentPageName = cortexState.currentPage;
  
  if (typeof navigateTo === 'function' && currentPageName !== flow.startPage) {
    navigateTo(flow.startPage);
  } else if (config) {
    onRouteChange(flow.startPage, config);
  }

  if (typeof updateFlowSwitcherUI === 'function') {
    updateFlowSwitcherUI();
  }
}

function resetCurrentFlow() {
  switchToFlow(cortexState.activeFlowId);
}

// ============================================================
//  ROUTE CHANGE HANDLER
// ============================================================

function onRouteChange(page, config) {
  cortexState.currentPage = page;
  updateInputContext(page);

  const area = document.getElementById('cortex-intelligence-area');
  if (!area) return;

  const flowData = getCurrentFlowData();
  
  if (!flowData) {
    area.innerHTML = '';
    return;
  }

  if (config.mode === 'initial') {
    cortexState.mode = 'initial';
    area.innerHTML = renderIntelligenceInitial();
  } else {
    cortexState.mode = 'completed';
    area.innerHTML = renderIntelligenceCompleted(config.highlight);
    initDecisionItemListeners();
  }

  if (cortexState.messages.length > 0) {
    const title = CORTEX_UI_CONFIG.pageTitles[page] || page;
    addChatMessage('system', `Navigated to ${title}`);
  }
}

// ============================================================
//  INIT & INTERACTION
// ============================================================

function initCortexPanel() {
  const root = document.getElementById('cortex-panel-root');
  if (!root) return;

  root.innerHTML = renderCortexPanelFull();
  initCortexListeners();
  renderAllChatMessages();
}

function initCortexListeners() {
  document.addEventListener('click', function(e) {
    document.querySelectorAll('.attachment-dropdown.open').forEach(dropdown => {
      if (!dropdown.parentElement.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  const toggleBtn = document.getElementById('cortex-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleCortexPanel);
  }

  document.querySelectorAll('.bar-btn[data-view], .ai-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', function() {
      const viewId = this.dataset.view;
      if (viewId === cortexState.activeView && viewId === 'ai-chat') {
        if (cortexState.isCollapsed) toggleCortexPanel();
      } else {
        switchPanelView(viewId);
        if (cortexState.isCollapsed) toggleCortexPanel();
      }
    });
  });

  const inputField = document.getElementById('cortex-input-field');
  const sendBtn = document.getElementById('cortex-send-btn');

  if (inputField) {
    inputField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey && this.value.trim()) {
        e.preventDefault();
        sendChatMessage(this.value.trim());
        this.value = '';
        autoResizeInput(this);
      }
    });
    inputField.addEventListener('input', function() {
      autoResizeInput(this);
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', function() {
      const field = document.getElementById('cortex-input-field');
      if (field && field.value.trim()) {
        sendChatMessage(field.value.trim());
        field.value = '';
        autoResizeInput(field);
      }
    });
  }

  initDecisionItemListeners();

  window.addEventListener('route:changed', function(e) {
    onRouteChange(e.detail.page, e.detail.config);
  });
}

function visitDecisionItem(el, key, href) {
  cortexState.visitedDecisions[key] = true;
  el.classList.add('visited');
  if (typeof navigateTo === 'function') navigateTo(href);
}

function initDecisionItemListeners() {
  // kept for backwards compatibility; inline onclick handles clicks now
}

function sendChatMessage(text) {
  addChatMessage('user', text);
  simulateAIResponse(text);
}

function generateMoreIdeas(btn) {
  const flowData = getCurrentFlowData();
  if (!flowData || !flowData.intelligenceBox) return;

  const box = btn.closest('.intelligence-box');
  if (!box) return;
  const actionsContainer = box.querySelector('.intelligence-box-actions');
  if (!actionsContainer) return;

  const existing = Array.from(actionsContainer.querySelectorAll('.checkbox')).map(
    el => el.dataset.action
  );
  const moreIdeasPool = flowData.intelligenceBox.moreIdeasPool || [];
  const available = moreIdeasPool.filter(item => !existing.includes(item.action));

  if (available.length === 0) {
    btn.textContent = 'No more ideas';
    btn.disabled = true;
    btn.classList.add('disabled');
    return;
  }

  btn.disabled = true;
  btn.classList.add('disabled');

  var buttonsArea = box.querySelector('.intelligence-box-buttons');
  if (buttonsArea) buttonsArea.style.display = 'none';

  var skeletonWrap = document.createElement('div');
  skeletonWrap.className = 'intelligence-box-skeleton';
  skeletonWrap.style.cssText = 'display:flex;flex-direction:column;gap:6px;width:100%;padding:6px 0;';
  skeletonWrap.innerHTML = '<div class="skeleton-row"></div><div class="skeleton-row"></div>';
  actionsContainer.after(skeletonWrap);

  var count = Math.min(2, available.length);
  var picked = available.slice(0, count);

  setTimeout(function() {
    skeletonWrap.remove();
    if (buttonsArea) buttonsArea.style.display = '';

    if (!actionsContainer.querySelector('.checkbox-select-all')) {
      var selectAllDiv = document.createElement('div');
      selectAllDiv.className = 'checkbox checkbox-select-all';
      selectAllDiv.setAttribute('role', 'checkbox');
      selectAllDiv.setAttribute('tabindex', '0');
      selectAllDiv.setAttribute('aria-checked', 'false');
      selectAllDiv.setAttribute('aria-label', 'Select all');
      selectAllDiv.setAttribute('onclick', 'toggleSelectAll(this)');
      selectAllDiv.innerHTML =
        '<div class="checkbox-box">' +
          '<img src="assets/cortex/checkbox-checked.svg" alt="">' +
          '<svg class="indeterminate-icon" viewBox="0 0 18 18"><rect x="4" y="8" width="10" height="2" rx="1" fill="white"/></svg>' +
        '</div>' +
        '<span class="checkbox-label" style="font-weight:400;">Select all</span>';
      selectAllDiv.style.opacity = '0';
      actionsContainer.insertBefore(selectAllDiv, actionsContainer.firstChild);
      requestAnimationFrame(function() {
        selectAllDiv.style.transition = 'opacity 0.3s ease';
        selectAllDiv.style.opacity = '1';
      });
    }

    picked.forEach(function(item) {
      var div = document.createElement('div');
      div.className = 'checkbox';
      div.dataset.action = item.action;
      div.setAttribute('role', 'checkbox');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-checked', 'false');
      div.setAttribute('aria-label', item.label);
      div.setAttribute('onclick', 'toggleCheckbox(this)');
      div.innerHTML =
        '<div class="checkbox-box">' +
          '<img src="assets/cortex/checkbox-checked.svg" alt="">' +
        '</div>' +
        '<span class="checkbox-label">' + item.label + '</span>';
      div.style.opacity = '0';
      actionsContainer.appendChild(div);
      requestAnimationFrame(function() {
        div.style.transition = 'opacity 0.3s ease';
        div.style.opacity = '1';
      });
    });

    var remaining = available.length - count;
    if (remaining === 0) {
      var orText = buttonsArea ? buttonsArea.querySelector('.or-text') : null;
      if (orText) orText.style.display = 'none';
      btn.style.display = 'none';
    } else {
      btn.disabled = false;
      btn.classList.remove('disabled');
    }
    updateExecuteButton();
  }, 1500);
}

function closeIntelligenceBox(el) {
  var box = el.parentElement;
  while (box && !box.classList.contains('intelligence-box')) {
    box = box.parentElement;
  }
  if (box) {
    box.style.display = 'none';
  }
}

function startNewChat() {
  cortexState.messages = [];
  cortexState.mode = 'initial';

  var chatContainer = document.getElementById('cortex-chat-messages');
  if (chatContainer) chatContainer.innerHTML = '';

  var area = document.getElementById('cortex-intelligence-area');
  if (area) area.innerHTML = '';

  var field = document.getElementById('cortex-input-field');
  if (field) {
    field.value = '';
    autoResizeInput(field);
  }

  updateInputContext(cortexState.currentPage);
  switchPanelView('ai-chat');
}

function autoResizeInput(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 300) + 'px';
}

function removeInputContext() {
  const ctx = document.getElementById('cortex-input-context');
  if (ctx) ctx.style.display = 'none';
}

function updateInputContext(page) {
  const pageTitles = CORTEX_UI_CONFIG.pageTitles;
  const ctx = document.getElementById('cortex-input-context');
  const label = document.getElementById('cortex-context-page');
  if (ctx) ctx.style.display = '';
  if (label) label.textContent = pageTitles[page] || page;
}

function toggleAttachmentMenu(el, e) {
  const dropdown = el.querySelector('.attachment-dropdown');
  if (dropdown) dropdown.classList.toggle('open');
  if (e) e.stopPropagation();
}
