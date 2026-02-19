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

  const attachmentItems = config.attachmentMenu.map(item => {
    const onclick = item.id === 'upload' ? ' onclick="triggerFileUpload()"' : '';
    return `<div class="attachment-dropdown-item"${onclick}><img src="${item.icon}" alt="" width="18" height="18">${item.label}</div>`;
  }).join('\n                  ');

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
  if (playbackState.isPlaying) {
    stopPlayback();
  }
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

async function sendChatMessage(text) {
  const files = [...fileUploadState.pendingFiles];
  
  if (files.length > 0) {
    const fileNames = files.map(f => f.name).join(', ');
    addChatMessage('user', `${text}\n<span class="attached-files">📎 ${fileNames}</span>`);
    
    const attachmentArea = document.querySelector('.file-attachments');
    if (attachmentArea) attachmentArea.remove();
    fileUploadState.pendingFiles = [];

    try {
      const processedFiles = await Promise.all(files.map(f => processFileForAI(f)));
      simulateFileProcessingResponse(text, processedFiles);
    } catch (err) {
      addChatMessage('ai', 'Sorry, I had trouble processing the attached files. Please try again.');
    }
  } else {
    addChatMessage('user', text);
    simulateAIResponse(text);
  }
}

function simulateFileProcessingResponse(userMessage, processedFiles) {
  setTimeout(() => {
    const file = processedFiles[0];
    const rowCount = file.parsed?.rows?.length || 0;
    const headers = file.parsed?.headers || [];
    
    let response = '';
    
    if (file.name.endsWith('.csv') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      if (rowCount > 0) {
        response = `I've analyzed <strong>${file.name}</strong> containing <strong>${rowCount} rows</strong>.`;
        if (headers.length > 0) {
          response += `\n\nColumns found: <em>${headers.slice(0, 5).join(', ')}${headers.length > 5 ? '...' : ''}</em>`;
        }
        response += `\n\nWhat would you like me to do with this data?`;
      } else {
        response = `I received the file <strong>${file.name}</strong>, but it appears to be empty or I couldn't parse its contents.`;
      }
    } else if (file.name.endsWith('.json')) {
      response = `I've parsed <strong>${file.name}</strong> as JSON with <strong>${rowCount} ${rowCount === 1 ? 'object' : 'objects'}</strong>.`;
      if (headers.length > 0) {
        response += `\n\nKeys found: <em>${headers.slice(0, 5).join(', ')}${headers.length > 5 ? '...' : ''}</em>`;
      }
    } else {
      response = `I've received <strong>${file.name}</strong>. How can I help you with this file?`;
    }
    
    addChatMessage('ai', response);
  }, 1200 + Math.random() * 800);
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

// ============================================================
//  FILE UPLOAD HANDLING
// ============================================================

const fileUploadState = {
  pendingFiles: [],
  fileInput: null
};

function triggerFileUpload() {
  document.querySelectorAll('.attachment-dropdown.open').forEach(d => d.classList.remove('open'));
  
  if (!fileUploadState.fileInput) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls,.csv,.json,.txt';
    input.multiple = true;
    input.style.display = 'none';
    input.addEventListener('change', handleFileSelect);
    document.body.appendChild(input);
    fileUploadState.fileInput = input;
  }
  fileUploadState.fileInput.value = '';
  fileUploadState.fileInput.click();
}

function handleFileSelect(e) {
  const files = Array.from(e.target.files);
  if (files.length === 0) return;

  files.forEach(file => {
    const fileInfo = {
      name: file.name,
      size: file.size,
      type: file.type || getFileTypeFromName(file.name),
      file: file
    };
    fileUploadState.pendingFiles.push(fileInfo);
    renderFileAttachment(fileInfo);
  });
}

function getFileTypeFromName(name) {
  const ext = name.split('.').pop().toLowerCase();
  const types = {
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'xls': 'application/vnd.ms-excel',
    'csv': 'text/csv',
    'json': 'application/json',
    'txt': 'text/plain'
  };
  return types[ext] || 'application/octet-stream';
}

function renderFileAttachment(fileInfo) {
  const inputBox = document.querySelector('.cortex-input-box');
  if (!inputBox) return;

  let attachmentArea = inputBox.querySelector('.file-attachments');
  if (!attachmentArea) {
    attachmentArea = document.createElement('div');
    attachmentArea.className = 'file-attachments';
    const contextEl = inputBox.querySelector('.cortex-input-context');
    if (contextEl) {
      contextEl.after(attachmentArea);
    } else {
      inputBox.prepend(attachmentArea);
    }
  }

  const fileId = 'file-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  const sizeStr = formatFileSize(fileInfo.size);
  const icon = getFileIcon(fileInfo.name);

  const chip = document.createElement('div');
  chip.className = 'file-attachment-chip';
  chip.dataset.fileId = fileId;
  chip.innerHTML = `
    <span class="file-icon">${icon}</span>
    <span class="file-name">${fileInfo.name}</span>
    <span class="file-size">${sizeStr}</span>
    <button class="file-remove" onclick="removeFileAttachment('${fileId}')" title="Remove">
      <svg viewBox="0 0 36 36" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 16.5859L26.293 8.29297L27.7072 9.70718L19.4143 18.0001L27.7072 26.293L26.293 27.7072L18.0001 19.4143L9.70718 27.7072L8.29297 26.293L16.5859 18.0001L8.29297 9.70718L9.70718 8.29297L18.0001 16.5859Z"/></svg>
    </button>
  `;
  attachmentArea.appendChild(chip);
  fileInfo.chipId = fileId;
}

function removeFileAttachment(fileId) {
  const chip = document.querySelector(`.file-attachment-chip[data-file-id="${fileId}"]`);
  if (chip) chip.remove();
  
  fileUploadState.pendingFiles = fileUploadState.pendingFiles.filter(f => f.chipId !== fileId);
  
  const attachmentArea = document.querySelector('.file-attachments');
  if (attachmentArea && attachmentArea.children.length === 0) {
    attachmentArea.remove();
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getFileIcon(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const icons = {
    'xlsx': '<svg viewBox="0 0 36 36" fill="var(--color-success)" width="16" height="16"><path d="M8 4C6.89543 4 6 4.89543 6 6V30C6 31.1046 6.89543 32 8 32H28C29.1046 32 30 31.1046 30 30V12L22 4H8Z"/><path fill="white" d="M13 18L16 23H14L12 20L10 23H8L11 18L8 13H10L12 16L14 13H16L13 18Z"/><path fill="white" d="M18 13H26V15H18V13ZM18 17H26V19H18V17ZM18 21H24V23H18V21Z"/></svg>',
    'xls': '<svg viewBox="0 0 36 36" fill="var(--color-success)" width="16" height="16"><path d="M8 4C6.89543 4 6 4.89543 6 6V30C6 31.1046 6.89543 32 8 32H28C29.1046 32 30 31.1046 30 30V12L22 4H8Z"/><path fill="white" d="M13 18L16 23H14L12 20L10 23H8L11 18L8 13H10L12 16L14 13H16L13 18Z"/></svg>',
    'csv': '<svg viewBox="0 0 36 36" fill="var(--color-info)" width="16" height="16"><path d="M8 4C6.89543 4 6 4.89543 6 6V30C6 31.1046 6.89543 32 8 32H28C29.1046 32 30 31.1046 30 30V12L22 4H8Z"/><path fill="white" d="M10 14H26V16H10V14ZM10 18H26V20H10V18ZM10 22H20V24H10V22Z"/></svg>',
    'json': '<svg viewBox="0 0 36 36" fill="var(--color-warning)" width="16" height="16"><path d="M8 4C6.89543 4 6 4.89543 6 6V30C6 31.1046 6.89543 32 8 32H28C29.1046 32 30 31.1046 30 30V12L22 4H8Z"/><path fill="white" d="M12 16C12 14.8954 12.8954 14 14 14H16V16H14V20H16V22H14C12.8954 22 12 21.1046 12 20V16ZM20 14H22C23.1046 14 24 14.8954 24 16V20C24 21.1046 23.1046 22 22 22H20V20H22V16H20V14Z"/></svg>',
    'txt': '<svg viewBox="0 0 36 36" fill="var(--color-on-layer-secondary)" width="16" height="16"><path d="M8 4C6.89543 4 6 4.89543 6 6V30C6 31.1046 6.89543 32 8 32H28C29.1046 32 30 31.1046 30 30V12L22 4H8Z"/><path fill="white" d="M10 14H26V16H10V14ZM10 18H26V20H10V18ZM10 22H20V24H10V22Z"/></svg>'
  };
  return icons[ext] || icons['txt'];
}

function processFileForAI(fileInfo) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const ext = fileInfo.name.split('.').pop().toLowerCase();

    reader.onload = function(e) {
      const content = e.target.result;
      let parsed = { raw: content, rows: [], headers: [] };

      if (ext === 'csv') {
        parsed = parseCSV(content);
      } else if (ext === 'json') {
        try {
          const json = JSON.parse(content);
          if (Array.isArray(json)) {
            parsed.rows = json;
            parsed.headers = json.length > 0 ? Object.keys(json[0]) : [];
          } else {
            parsed.rows = [json];
            parsed.headers = Object.keys(json);
          }
        } catch (err) {
          parsed.error = 'Invalid JSON';
        }
      } else if (ext === 'txt') {
        parsed.rows = content.split('\n').filter(l => l.trim()).map(l => ({ line: l }));
        parsed.headers = ['line'];
      }

      resolve({ ...fileInfo, parsed });
    };

    reader.onerror = () => reject(new Error('Failed to read file'));

    if (['xlsx', 'xls'].includes(ext)) {
      resolve({ ...fileInfo, parsed: { note: 'Excel files require server-side processing', rows: [], headers: [] } });
    } else {
      reader.readAsText(fileInfo.file);
    }
  });
}

function parseCSV(content) {
  const lines = content.split('\n').filter(l => l.trim());
  if (lines.length === 0) return { rows: [], headers: [] };

  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim().replace(/^"|"$/g, ''));
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = values[idx] || '';
    });
    rows.push(row);
  }

  return { headers, rows };
}

// ============================================================
//  FLOW PLAYBACK ENGINE
// ============================================================

const playbackState = {
  isPlaying: false,
  isPaused: false,
  currentStep: 0,
  speed: 1,
  flowId: null,
  timerId: null,
  steps: []
};

// ============================================================
//  DEMO CURSOR - Visual cursor simulation
// ============================================================

function createDemoCursor() {
  let cursor = document.getElementById('demo-cursor');
  if (cursor) return cursor;
  
  cursor = document.createElement('div');
  cursor.id = 'demo-cursor';
  cursor.className = 'demo-cursor';
  cursor.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.53.35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z" fill="#fff" stroke="#000" stroke-width="1.5"/>
  </svg>`;
  document.body.appendChild(cursor);
  return cursor;
}

function showDemoCursor() {
  const cursor = createDemoCursor();
  cursor.classList.add('visible');
}

function hideDemoCursor() {
  const cursor = document.getElementById('demo-cursor');
  if (cursor) {
    cursor.classList.remove('visible', 'moving');
  }
  document.querySelectorAll('.demo-cursor-ripple').forEach(r => r.remove());
}

function moveCursorTo(x, y, duration = 400) {
  return new Promise(resolve => {
    const cursor = createDemoCursor();
    cursor.classList.add('visible', 'moving');
    cursor.style.transitionDuration = duration + 'ms';
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    setTimeout(resolve, duration);
  });
}

function showClickRipple(x, y) {
  const ripple = document.createElement('div');
  ripple.className = 'demo-cursor-ripple';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  document.body.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}

async function animateCursorToElement(selector, clickAfter = true) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn('Cursor target not found:', selector);
    return false;
  }
  
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  showDemoCursor();
  await moveCursorTo(x, y);
  
  if (clickAfter) {
    showClickRipple(x, y);
    await new Promise(r => setTimeout(r, 200));
  }
  
  return true;
}

function startFlowPlayback(flowId) {
  const flow = typeof getFlowById === 'function' ? getFlowById(flowId) : null;
  if (!flow || !flow.data || !flow.data.playbackSteps) {
    console.warn('Flow has no playback steps:', flowId);
    return;
  }

  stopPlayback();

  playbackState.flowId = flowId;
  playbackState.steps = flow.data.playbackSteps;
  playbackState.currentStep = 0;
  playbackState.isPlaying = true;
  playbackState.isPaused = false;

  cortexState.activeFlowId = flowId;
  cortexState.messages = [];
  cortexState.visitedDecisions = {};
  
  if (typeof flowSwitcherState !== 'undefined') {
    flowSwitcherState.activeFlowId = flowId;
  }

  const root = document.getElementById('cortex-panel-root');
  if (root) {
    root.innerHTML = renderCortexPanelFull();
    initCortexListeners();
  }

  renderPlaybackControls();
  updatePlaybackUI();
  
  if (typeof updateFlowSwitcherUI === 'function') {
    updateFlowSwitcherUI();
  }

  executeCurrentStep();
}

function pausePlayback() {
  if (!playbackState.isPlaying) return;
  
  playbackState.isPaused = true;
  if (playbackState.timerId) {
    clearTimeout(playbackState.timerId);
    playbackState.timerId = null;
  }
  updatePlaybackUI();
}

function resumePlayback() {
  if (!playbackState.isPlaying || !playbackState.isPaused) return;
  
  playbackState.isPaused = false;
  updatePlaybackUI();
  scheduleNextStep();
}

function stopPlayback() {
  playbackState.isPlaying = false;
  playbackState.isPaused = false;
  playbackState.currentStep = 0;
  playbackState.flowId = null;
  playbackState.steps = [];
  
  if (playbackState.timerId) {
    clearTimeout(playbackState.timerId);
    playbackState.timerId = null;
  }

  hideDemoCursor();
  removePlaybackControls();
}

function setPlaybackSpeed(speed) {
  playbackState.speed = speed;
  updatePlaybackUI();
}

async function executeCurrentStep() {
  if (!playbackState.isPlaying || playbackState.isPaused) return;
  if (playbackState.currentStep >= playbackState.steps.length) {
    stopPlayback();
    addChatMessage('system', 'Playback completed');
    return;
  }

  const step = playbackState.steps[playbackState.currentStep];
  await executeStep(step);
  updatePlaybackUI();
}

async function executeStep(step) {
  if (step.cursorTarget) {
    await animateCursorToElement(step.cursorTarget);
  }
  
  switch (step.type) {
    case 'navigate':
      if (step.cursorTarget) {
        await animateCursorToElement(step.cursorTarget);
      }
      if (typeof navigateTo === 'function') {
        navigateTo(step.page);
      }
      break;
      
    case 'message':
      addChatMessage(step.sender || 'ai', step.text);
      break;
      
    case 'action':
      await executePlaybackAction(step);
      break;
  }

  scheduleNextStep(step.delay || 2000);
}

async function executePlaybackAction(step) {
  switch (step.action) {
    case 'showIntelligenceBox':
      const area = document.getElementById('cortex-intelligence-area');
      if (area) {
        area.innerHTML = renderIntelligenceInitial();
      }
      break;
      
    case 'selectCheckboxes':
      if (step.items && Array.isArray(step.items)) {
        for (const action of step.items) {
          const selector = `.checkbox[data-action="${action}"]`;
          if (step.cursorTarget !== false) {
            await animateCursorToElement(selector);
          }
          const checkbox = document.querySelector(selector);
          if (checkbox && !checkbox.classList.contains('checked')) {
            checkbox.classList.add('checked');
            checkbox.setAttribute('aria-checked', 'true');
          }
          await new Promise(r => setTimeout(r, 300));
        }
        updateExecuteButton();
      }
      break;
      
    case 'executeSelected':
      const executeBtn = document.querySelector('.intelligence-execute-btn');
      if (executeBtn && step.cursorTarget !== false) {
        await animateCursorToElement('.intelligence-execute-btn');
      }
      if (typeof executeSelected === 'function') {
        executeSelected();
      }
      break;
      
    case 'clickDecisionItem':
      if (step.cursorTarget) {
        await animateCursorToElement(step.cursorTarget);
      }
      const flowData = getCurrentFlowData();
      if (flowData && flowData.decisionItems && step.item) {
        const decisionItem = flowData.decisionItems.find(d => d.key === step.item);
        if (decisionItem && decisionItem.href) {
          cortexState.visitedDecisions[step.item] = true;
          if (typeof navigateTo === 'function') {
            navigateTo(decisionItem.href);
          }
        }
      }
      break;
  }
}

function scheduleNextStep(delay) {
  if (!playbackState.isPlaying || playbackState.isPaused) return;
  
  const adjustedDelay = (delay || 2000) / playbackState.speed;
  
  playbackState.timerId = setTimeout(() => {
    playbackState.currentStep++;
    executeCurrentStep();
  }, adjustedDelay);
}

function renderPlaybackControls() {
  removePlaybackControls();
  
  const controlsBar = document.createElement('div');
  controlsBar.id = 'playback-controls';
  controlsBar.className = 'playback-controls';
  controlsBar.innerHTML = `
    <div class="playback-controls-inner">
      <button class="playback-btn" id="playback-pause-btn" onclick="togglePlaybackPause()" title="Pause/Resume">
        <svg class="pause-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>
        <svg class="play-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="display:none">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
      <button class="playback-btn" onclick="stopPlayback()" title="Stop">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <rect x="6" y="6" width="12" height="12" rx="1"/>
        </svg>
      </button>
      <div class="playback-divider"></div>
      <div class="playback-progress">
        <span id="playback-step-current">1</span>
        <span class="playback-step-separator">/</span>
        <span id="playback-step-total">1</span>
      </div>
      <div class="playback-divider"></div>
      <div class="playback-speed">
        <button class="speed-btn${playbackState.speed === 0.5 ? ' active' : ''}" onclick="setPlaybackSpeed(0.5)">0.5x</button>
        <button class="speed-btn${playbackState.speed === 1 ? ' active' : ''}" onclick="setPlaybackSpeed(1)">1x</button>
        <button class="speed-btn${playbackState.speed === 2 ? ' active' : ''}" onclick="setPlaybackSpeed(2)">2x</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(controlsBar);
}

function removePlaybackControls() {
  const existing = document.getElementById('playback-controls');
  if (existing) existing.remove();
}

function updatePlaybackUI() {
  const pauseBtn = document.getElementById('playback-pause-btn');
  if (pauseBtn) {
    const pauseIcon = pauseBtn.querySelector('.pause-icon');
    const playIcon = pauseBtn.querySelector('.play-icon');
    if (pauseIcon && playIcon) {
      pauseIcon.style.display = playbackState.isPaused ? 'none' : '';
      playIcon.style.display = playbackState.isPaused ? '' : 'none';
    }
  }

  const currentEl = document.getElementById('playback-step-current');
  const totalEl = document.getElementById('playback-step-total');
  if (currentEl) currentEl.textContent = playbackState.currentStep + 1;
  if (totalEl) totalEl.textContent = playbackState.steps.length;

  document.querySelectorAll('.playback-speed .speed-btn').forEach(btn => {
    const speed = parseFloat(btn.textContent);
    btn.classList.toggle('active', speed === playbackState.speed);
  });

  document.querySelectorAll('.flow-item').forEach(item => {
    const flowId = item.dataset.flowId;
    const isPlayingThis = playbackState.isPlaying && flowId === playbackState.flowId;
    item.classList.toggle('playing', isPlayingThis);
  });

  updateFlowPlayButtons();
}

function updateFlowPlayButtons() {
  document.querySelectorAll('.flow-play-btn').forEach(btn => {
    const flowId = btn.dataset.flowId;
    const isPlayingThis = playbackState.isPlaying && flowId === playbackState.flowId;
    const isPausedThis = isPlayingThis && playbackState.isPaused;
    
    btn.classList.toggle('playing', isPlayingThis && !isPausedThis);
    btn.classList.toggle('paused', isPausedThis);
    
    if (isPlayingThis && !isPausedThis) {
      btn.title = 'Pause demo';
      btn.onclick = function(e) { e.stopPropagation(); pausePlayback(); };
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <rect x="6" y="4" width="4" height="16" rx="1"/>
        <rect x="14" y="4" width="4" height="16" rx="1"/>
      </svg>`;
    } else if (isPausedThis) {
      btn.title = 'Resume demo';
      btn.onclick = function(e) { e.stopPropagation(); resumePlayback(); };
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>`;
    } else {
      btn.title = 'Play demo';
      btn.onclick = function(e) { e.stopPropagation(); startFlowPlayback(flowId); };
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>`;
    }
  });
  
  }

function restartFlowPlayback(flowId) {
  stopPlayback();
  startFlowPlayback(flowId);
}

function resetFlowToInitial(flowId) {
  stopPlayback();
  switchToFlow(flowId);
}

function togglePlaybackPause() {
  if (playbackState.isPaused) {
    resumePlayback();
  } else {
    pausePlayback();
  }
}

function hasPlaybackSteps(flowId) {
  const flow = typeof getFlowById === 'function' ? getFlowById(flowId) : null;
  return flow && flow.data && flow.data.playbackSteps && flow.data.playbackSteps.length > 0;
}
