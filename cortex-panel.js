/* ============================================================
   CORTEX AI PANEL - Persistent stateful side panel
   
   Rendered once into the SPA shell (#cortex-panel-root).
   State persists across page navigations.
   Includes: AI Chat, Activity Log, Notifications views.
   Right bar acts as tab switcher.
   
   UI configuration is in cortex-config.js
   Flow-specific data is in flows/*.js
   ============================================================ */

/* SOUL icons (assets/icons/soul/Document.svg, Close.svg) — currentColor for badge */
const SOUL_ICON_DOCUMENT = '<svg viewBox="0 0 36 36" fill="currentColor" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6 4.23858 8.23858 2 11 2H21.3431C22.6692 2 23.941 2.52678 24.8787 3.46447L28.5355 7.12132C29.4732 8.059 30 9.33077 30 10.6569V14H28V12H23C21.3431 12 20 10.6569 20 9V4H11C9.34315 4 8 5.34315 8 7V29C8 30.6569 9.34315 32 11 32H26C27.1046 32 28 31.1046 28 30H30C30 32.2091 28.2091 34 26 34H11C8.23858 34 6 31.7614 6 29V7ZM22 4.07278V9C22 9.55228 22.4477 10 23 10H27.9272C27.8037 9.44969 27.5264 8.94065 27.1213 8.53553L23.4645 4.87868C23.0594 4.47357 22.5503 4.19628 22 4.07278ZM18 20C18 18.8954 18.8954 18 20 18H30C31.1046 18 32 18.8954 32 20V24C32 25.1046 31.1046 26 30 26H20C18.8954 26 18 25.1046 18 24V20ZM30 20H20V24H30V20Z"/></svg>';
const SOUL_ICON_CLOSE = '<svg viewBox="0 0 36 36" fill="currentColor" width="12" height="12" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 16.5859L26.293 8.29297L27.7072 9.70718L19.4143 18.0001L27.7072 26.293L26.293 27.7072L18.0001 19.4143L9.70718 27.7072L8.29297 26.293L16.5859 18.0001L8.29297 9.70718L9.70718 8.29297L18.0001 16.5859Z"/></svg>';

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
  deletedDecisions: {},
  deletedActivityItems: [],
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
  const items = flowData && flowData.activityItems ? [...flowData.activityItems] : [];
  const deletedItems = cortexState.deletedActivityItems || [];
  const merged = [...deletedItems, ...items];
  
  if (merged.length > 0) {
    activityHtml = merged.map(item => {
      const isDeleted = item.deleted;
      const textClass = isDeleted ? 'activity-text activity-text--deleted' : 'activity-text';
      return `
              <div class="activity-item${isDeleted ? ' activity-item--deleted' : ''}">
                <div class="activity-dot"></div>
                <div class="activity-content">
                  <div class="${textClass}">${item.text}</div>
                  <div class="activity-time">${item.time}</div>
                </div>
              </div>`;
    }).join('');
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
            <div class="cortex-input-body">
              <div class="file-attachments" id="cortex-file-attachments"></div>
              <textarea class="cortex-input-field" id="cortex-input-field" placeholder="${config.placeholder}" rows="1"></textarea>
            </div>
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
              <div class="checkbox" data-action="${item.action}" role="checkbox" tabindex="0" aria-checked="false" aria-label="${item.label}">
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
  const deleted = cortexState.deletedDecisions || {};
  
  const decisionItems = flowData.decisionItems.map(function(item) {
    var isDeleted = deleted[item.key];
    var isCurrent = item.key === highlight && !isDeleted;
    var isVisited = visited[item.key];
    var cls = 'decision-item' + (isVisited ? ' visited' : '') + (isDeleted ? ' decision-item--deleted' : '');
    var icon = isDeleted ? 'assets/icons/soul/status-done.svg' : (isVisited ? 'assets/icons/soul/status-done.svg' : 'assets/icons/soul/upcoming-permission.svg');
    var onclick = !isDeleted && !isCurrent ? ' onclick="visitDecisionItem(this, \'' + item.key + '\', \'' + item.href + '\')"' : '';
    var removeOnclick = !isDeleted ? ' onclick="event.stopPropagation(); removeDecisionItem(\'' + item.key + '\')"' : '';
    var labelClass = 'decision-label' + (isDeleted ? ' decision-label--deleted' : '');
    return '<div class="' + cls + '" data-decision-key="' + item.key + '" role="' + (isDeleted ? 'presentation' : 'link') + '" tabindex="' + (isDeleted ? '-1' : '0') + '" aria-label="' + item.label + '"' + onclick + '>' +
      '<div class="check-icon"><img src="' + icon + '" alt=""></div>' +
      '<span class="' + labelClass + '">' + item.label + '</span>' +
      (!isDeleted ? '<button class="decision-item-remove" type="button" title="Remove" aria-label="Remove ' + item.label + '"' + removeOnclick + '>' +
        '<img src="assets/icons/soul/remove-delete-trash.svg" alt="" width="14" height="14">' +
      '</button>' : '') +
    '</div>';
  }).join('\n              ');

  const descriptionHtml = (box.completedDescription || box.description).map(p => `<p>${p}</p>`).join('\n              ');

  return `
          <div class="intelligence-box intelligence-box-completed" id="intelligence-box-completed">
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
    el.innerHTML = `<div class="chat-message-bubble">${msg.content}</div>`;
  } else if (msg.type === 'user') {
    el.innerHTML = `<div class="chat-message-bubble">${msg.content}</div>`;
  } else if (msg.type === 'system') {
    el.innerHTML = `<div class="chat-message-system">${msg.content}</div>`;
  }

  if (msg.type === 'user') {
    container.querySelectorAll('.chat-message--user').forEach(function(m) { m.classList.remove('chat-message--latest-user'); });
    el.classList.add('chat-message--latest-user');
    container.appendChild(el);
  } else if (msg.type === 'ai') {
    container.appendChild(el);
  } else {
    container.appendChild(el);
  }
  markChatDecisionLinksVisited();
}

function scrollChatToBottom() {
  const chatMessages = document.getElementById('cortex-chat-messages');
  if (!chatMessages) return;
  const doScroll = () => {
    const lastMsg = chatMessages.lastElementChild;
    if (lastMsg) {
      lastMsg.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
      const scrollParent = chatMessages.closest('.cortex-messages') || chatMessages.parentElement;
      if (scrollParent && scrollParent.scrollHeight > scrollParent.clientHeight) {
        scrollParent.scrollTop = scrollParent.scrollHeight;
      }
    }
  };
  requestAnimationFrame(() => {
    requestAnimationFrame(doScroll);
  });
  // Delayed scroll for async content (AI responses) - ensures scroll after render
  setTimeout(doScroll, 100);
}

function renderAllChatMessages() {
  const container = document.getElementById('cortex-chat-messages');
  if (!container) return;
  container.innerHTML = '';
  var ordered = [];
  for (var i = 0; i < cortexState.messages.length - 1; i += 2) {
    ordered.push(cortexState.messages[i], cortexState.messages[i + 1]);
  }
  if (cortexState.messages.length % 2 === 1) {
    ordered.push(cortexState.messages[cortexState.messages.length - 1]);
  }
  var latestUser = null;
  for (var j = ordered.length - 1; j >= 0; j--) {
    if (ordered[j].type === 'user') { latestUser = ordered[j]; break; }
  }
  ordered.forEach(function(msg) {
    var el = document.createElement('div');
    el.className = 'chat-message chat-message--' + msg.type;
    el.dataset.msgId = msg.id;
    if (msg.type === 'ai') {
      el.innerHTML = '<div class="chat-message-bubble">' + msg.content + '</div>';
    } else if (msg.type === 'user') {
      el.innerHTML = '<div class="chat-message-bubble">' + msg.content + '</div>';
    } else {
      el.innerHTML = '<div class="chat-message-system">' + msg.content + '</div>';
    }
    if (msg.type === 'user' && msg === latestUser) {
      el.classList.add('chat-message--latest-user');
    }
    container.appendChild(el);
  });
  markChatDecisionLinksVisited();
  scrollChatToBottom();
}

function simulateAIResponse(userMessage) {
  var responses = [
    '<h3 class="chat-response-heading">Summary</h3><p>Based on your listening queries and analytics, here\'s a summary of the relevant data.</p><h3 class="chat-response-heading">Key findings</h3><ul class="chat-response-list"><li>Engagement rate increased by 12% compared to last week</li><li>Top performing content: video posts with 3.2x average reach</li><li>Peak engagement times: Tuesday 9–11 AM, Thursday 2–4 PM</li></ul><h3 class="chat-response-heading">Recommendations</h3><p>Consider scheduling more video content during peak hours. The sentiment analysis shows positive trends in customer feedback.</p>',
    '<h3 class="chat-response-heading">Analysis complete</h3><p>I\'ve processed your request. Here are the key findings from your data sources.</p><h3 class="chat-response-heading">Overview</h3><p>Your campaign performance shows strong alignment with Q2 objectives. The Labubu trend integration has driven notable engagement.</p><h3 class="chat-response-heading">Next steps</h3><ul class="chat-response-list"><li>Review the content calendar for optimal posting times</li><li>Monitor competitor activity in the trending space</li><li>Export the report for stakeholder review</li></ul>',
    '<h3 class="chat-response-heading">Here\'s what I found</h3><p>I can help with that. Let me pull up the relevant information from your connected profiles.</p><p>Based on the current data, your social presence is performing well across platforms. The unified analytics show consistent growth in key metrics.</p><h3 class="chat-response-heading">Data breakdown</h3><p>Facebook and Instagram show the highest engagement. TikTok has the fastest growth rate. Consider reallocating budget based on these insights.</p><h3 class="chat-response-heading">Conclusion</h3><p>Great question! The trends suggest focusing on video content and community engagement for the next quarter.</p>',
    '<h3 class="chat-response-heading">Results</h3><p>I\'ll look into that for you. Based on the current data, here\'s what I found.</p><h3 class="chat-response-heading">Performance metrics</h3><ul class="chat-response-list"><li>Reach: 1.2M impressions (up 18%)</li><li>Engagement: 4.2% average (above benchmark)</li><li>Sentiment: 78% positive across all channels</li></ul><h3 class="chat-response-heading">Insights</h3><p>The listening data indicates strong brand awareness. Competitor share of voice has decreased by 5% in your primary markets.</p><p>Would you like me to generate a detailed report or dive deeper into any specific metric?</p>',
    '<h3 class="chat-response-heading">Overview</h3><p>Based on your listening queries and analytics, here\'s a summary of the relevant data.</p><h3 class="chat-response-heading">Trends</h3><p>Your content strategy is resonating well with the target audience. The Labubu trend integration has been particularly effective.</p><h3 class="chat-response-heading">Action items</h3><ul class="chat-response-list"><li>Schedule weekly listening report</li><li>Update campaign creative based on top performers</li><li>Share insights with the content team</li></ul><h3 class="chat-response-heading">Additional context</h3><p>Great question! Let me analyze the trends and get back to you with insights. The data suggests maintaining current posting frequency while testing new content formats.</p>'
  ];
  var response = responses[Math.floor(Math.random() * responses.length)];
  setTimeout(function() {
    removeThinkingPlaceholder();
    addChatMessage('ai', response);
  }, 1200 + Math.random() * 800);
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
  cortexState.deletedDecisions = {};
  cortexState.deletedActivityItems = [];
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

function markChatDecisionLinksVisited() {
  const page = cortexState.currentPage;
  if (!page) return;
  document.querySelectorAll('.decision-item[data-chat-href]').forEach(function(row) {
    const href = row.getAttribute('data-chat-href');
    const targetPage = (href || '').split('?')[0];
    if (targetPage === page) {
      row.classList.add('visited');
      const img = row.querySelector('.check-icon img');
      if (img) img.src = 'assets/cortex/decision-done.svg';
    }
  });
}

function onRouteChange(page, config) {
  cortexState.currentPage = page;
  updateInputContext(page);

  markChatDecisionLinksVisited();

  const area = document.getElementById('cortex-intelligence-area');
  if (!area) return;

  const flowData = getCurrentFlowData();
  
  if (!flowData) {
    area.innerHTML = '';
    return;
  }

  if (cortexState.mode === 'empty') {
    area.innerHTML = '';
    return;
  }

  if (config.mode === 'initial' && cortexState.mode !== 'completed') {
    cortexState.mode = 'initial';
    area.innerHTML = renderIntelligenceInitial();
  } else if (config.mode === 'completed' || cortexState.mode === 'completed') {
    cortexState.mode = 'completed';
    area.innerHTML = renderIntelligenceCompleted(config.highlight || '');
    initDecisionItemListeners();
  }

  // Navigation no longer adds system messages to chat — user requested to avoid clutter when clicking through
}

// ============================================================
//  INIT & INTERACTION
// ============================================================

function initChatScrollObserver() {
  const chatMessages = document.getElementById('cortex-chat-messages');
  if (!chatMessages) return;
  const observer = new MutationObserver(function() {
    scrollChatToBottom();
  });
  observer.observe(chatMessages, { childList: true });
}

function initCortexPanel() {
  const root = document.getElementById('cortex-panel-root');
  if (!root) return;

  root.innerHTML = renderCortexPanelFull();
  initCortexListeners();
  renderAllChatMessages();
  initChatScrollObserver();
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
    inputField.addEventListener('focus', function() {
      if (cortexState.activeFlowId === 'bulk-user-import' &&
          fileUploadState.pendingFiles.length > 0 &&
          !this.value.trim()) {
        const hasXls = fileUploadState.pendingFiles.some(f =>
          f.name.toLowerCase().endsWith('.xlsx') || f.name.toLowerCase().endsWith('.xls')
        );
        if (hasXls) {
          this.value = 'add this users';
          autoResizeInput(this);
        }
      }
    });
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

function removeChatDecisionItem(btn, key) {
  const row = btn && btn.closest ? btn.closest('.decision-item') : null;
  const wrapper = row && row.parentElement;
  if (row) row.remove();
  if (wrapper && wrapper.classList.contains('chat-decision-wrapper') && !wrapper.querySelector('.decision-item')) {
    wrapper.remove();
  }
  cortexState.visitedDecisions[key] = false;
}

function removeDecisionItem(key) {
  const flowData = getCurrentFlowData();
  if (!flowData || !flowData.decisionItems) return;
  const item = flowData.decisionItems.find(function(i) { return i.key === key; });
  if (!item) return;

  cortexState.deletedDecisions[key] = true;
  cortexState.deletedActivityItems.unshift({
    text: '<strong>You</strong> removed ' + item.label,
    time: 'just now',
    deleted: true
  });

  function updateCortexPanel() {
    var area = document.getElementById('cortex-intelligence-area');
    if (area) {
      area.innerHTML = renderIntelligenceCompleted('');
      initDecisionItemListeners();
    }
    var activityView = document.getElementById('cortex-view-activity');
    if (activityView) {
      activityView.outerHTML = renderActivityView();
    }
  }

  updateCortexPanel();

  if (typeof navigateTo === 'function') {
    navigateTo('command-center.html');
  }
}

function initDecisionItemListeners() {
  // kept for backwards compatibility; inline onclick handles clicks now
}

function isRoleChangePrompt(text) {
  const t = text.toLowerCase();
  return /change\s+(team\s+)?role|team\s+manager|team\s+lead|care\s+agent/.test(t);
}

const ROLE_OPTIONS = ['Team Manager', 'Team Lead', 'Care Agent', 'Agent', 'Supervisor'];

function showRolePicker(userPrompt) {
  const roleOptionsHtml = ROLE_OPTIONS.map(role =>
    `<button class="role-option" data-role="${role}">${role}</button>`
  ).join('');
  const content = `
    <p>Select the new role for the selected users:</p>
    <div class="role-picker-options">${roleOptionsHtml}</div>
  `;
  addChatMessage('ai', content);
  setTimeout(function() {
    document.querySelectorAll('.role-option').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectRoleOption(this.dataset.role);
      });
    });
  }, 0);
}

function selectRoleOption(role) {
  addChatMessage('ai', "I've updated the role for the selected users to <strong>" + role + "</strong>.");
}

function isShowUsersPrompt(text) {
  const t = text.toLowerCase();
  return /show\s+(list\s+of\s+)?(all\s+)?users\s+I\s+added|list\s+(of\s+)?users\s+I\s+added/.test(t);
}

async function sendChatMessage(text) {
  const files = [...fileUploadState.pendingFiles];
  
  if (files.length > 0) {
    const fileBadgesHtml = files.map(f => {
      const ext = (f.name.split('.').pop() || '').toLowerCase();
      const isXls = ['xlsx', 'xls'].includes(ext);
      const cls = isXls ? 'file-attachment-chip file-attachment-chip--xlsx' : 'file-attachment-chip';
      return `<span class="${cls}"><span class="file-icon">${SOUL_ICON_DOCUMENT}</span><span class="file-name">${f.name}</span></span>`;
    }).join(' ');
    addChatMessage('user', `<span class="attached-files">${fileBadgesHtml}</span> ${text}`);
    addThinkingPlaceholder();
    
    const attachmentArea = document.getElementById('cortex-file-attachments');
    if (attachmentArea) attachmentArea.innerHTML = '';
    fileUploadState.pendingFiles = [];

    try {
      const processedFiles = await Promise.all(files.map(f => processFileForAI(f)));
      simulateFileProcessingResponse(text, processedFiles);
    } catch (err) {
      removeThinkingPlaceholder();
      addChatMessage('ai', 'Sorry, I had trouble processing the attached files. Please try again.');
    }
  } else {
    addChatMessage('user', text);
    addThinkingPlaceholder();

    if (cortexState.activeFlowId === 'bulk-user-import') {
      if (isShowUsersPrompt(text)) {
        setTimeout(function() {
          removeThinkingPlaceholder();
          addChatMessage('ai', 'Here are the users you recently added.');
          if (typeof navigateTo === 'function') {
            navigateTo('settings-users.html?filter=lastAdded');
          }
        }, 800);
        return;
      }
      if (isRoleChangePrompt(text)) {
        setTimeout(function() {
          removeThinkingPlaceholder();
          showRolePicker(text);
        }, 800);
        return;
      }
    }

    simulateAIResponse(text);
  }
}

function addThinkingPlaceholder() {
  var container = document.getElementById('cortex-chat-messages');
  if (!container) return;
  var el = document.createElement('div');
  el.className = 'chat-message chat-message--thinking';
  el.id = 'cortex-thinking-placeholder';
  el.innerHTML = '<div class="chat-message-thinking">Agent is thinking...</div>';
  container.appendChild(el);
}

function removeThinkingPlaceholder() {
  var el = document.getElementById('cortex-thinking-placeholder');
  if (el) el.remove();
}

function simulateFileProcessingResponse(userMessage, processedFiles) {
  setTimeout(function() {
    const file = processedFiles[0];
    const rowCount = file.parsed?.rows?.length || 0;
    const headers = file.parsed?.headers || [];
    
    let response = '';
    
    if (cortexState.activeFlowId === 'bulk-user-import' && file.name === 'users-import.xlsx') {
      response = 'I found <strong>65 users</strong>. I added them to the team <strong>Toutique Care UK</strong> and set their default team role to <strong>care agent</strong>. All of them received an invitation email.<div class="chat-decision-wrapper"><div class="decision-item" data-decision-key="settings-users" data-chat-href="settings-users.html" role="link" tabindex="0" aria-label="Settings / Users" onclick="visitDecisionItem(this, \'settings-users\', \'settings-users.html\')"><div class="check-icon"><img src="assets/icons/soul/upcoming-permission.svg" alt="" width="16" height="16"></div><span class="decision-label">Settings / Users</span><button class="decision-item-remove" type="button" title="Remove" aria-label="Remove Settings / Users" onclick="event.stopPropagation(); removeChatDecisionItem(this, \'settings-users\')"><img src="assets/icons/soul/remove-delete-trash.svg" alt="" width="14" height="14"></button></div></div>';
    } else if (file.name.endsWith('.csv') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
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
    
    removeThinkingPlaceholder();
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
  
  if (cortexState.activeFlowId === 'bulk-user-import') {
    showFinderModal();
    return;
  }
  
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

// ============================================================
//  FINDER MODAL (macOS-style file picker for bulk-user-import)
// ============================================================

const FINDER_FILES = [
  { name: 'report-q1.xlsx', size: 245000, dateModified: 'Today at 11:42', kind: 'Microsoft Excel' },
  { name: 'users-import.xlsx', size: 128000, dateModified: 'Today at 10:15', kind: 'Microsoft Excel' },
  { name: 'data-export.xlsx', size: 89000, dateModified: 'Yesterday at 14:22', kind: 'Microsoft Excel' }
];

function formatFinderSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function showFinderModal() {
  let modal = document.getElementById('finder-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'finder-modal';
    modal.className = 'finder-modal';
    modal.innerHTML = `
      <div class="finder-modal-backdrop" onclick="hideFinderModal()"></div>
      <div class="finder-modal-window">
        <div class="finder-titlebar">
          <div class="finder-traffic-lights">
            <span class="finder-btn finder-btn-close"></span>
            <span class="finder-btn finder-btn-minimize"></span>
            <span class="finder-btn finder-btn-maximize"></span>
          </div>
        </div>
        <div class="finder-toolbar">
          <button class="finder-nav-btn" disabled>&#10094;</button>
          <button class="finder-nav-btn" disabled>&#10095;</button>
          <span class="finder-toolbar-title">Downloads</span>
          <div class="finder-view-buttons">
            <button class="finder-view-btn active" title="Grid view"><svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor"/><rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor"/><rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor"/><rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor"/></svg></button>
            <button class="finder-view-btn" title="List view"><svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="12" height="2" rx="0.5" fill="currentColor"/><rect x="1" y="6" width="12" height="2" rx="0.5" fill="currentColor"/><rect x="1" y="11" width="12" height="2" rx="0.5" fill="currentColor"/></svg></button>
          </div>
          <div class="finder-search-wrap">
            <svg class="finder-search-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input type="text" class="finder-search" placeholder="Search" readonly>
          </div>
        </div>
        <div class="finder-body">
          <div class="finder-sidebar">
            <div class="finder-sidebar-section">
              <div class="finder-sidebar-label">Favourites</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128340;</span>Recents</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128101;</span>Shared</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128451;</span>Applications</div>
              <div class="finder-sidebar-item active"><span class="finder-sidebar-icon">&#8595;</span>Downloads</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128187;</span>Desktop</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128196;</span>Documents</div>
            </div>
            <div class="finder-sidebar-section">
              <div class="finder-sidebar-label">Locations</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#9729;</span>iCloud Drive</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128193;</span>jancermak</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128225;</span>AirDrop</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128367;</span>Network</div>
              <div class="finder-sidebar-item"><span class="finder-sidebar-icon">&#128465;</span>Bin</div>
            </div>
            <div class="finder-sidebar-section">
              <div class="finder-sidebar-label">Tags</div>
            </div>
          </div>
          <div class="finder-main">
            <div class="finder-list-header">
              <div class="finder-col finder-col-name">Name</div>
              <div class="finder-col finder-col-date">Date Modified</div>
              <div class="finder-col finder-col-size">Size</div>
              <div class="finder-col finder-col-kind">Kind</div>
            </div>
            <div class="finder-list-body">
              ${FINDER_FILES.map(f => `
                <div class="finder-file-row" data-name="${f.name}" data-size="${f.size}" onclick="selectFinderFile('${f.name}', ${f.size})">
                  <div class="finder-col finder-col-name">
                    <span class="finder-file-icon-small">
                      <svg viewBox="0 0 36 36" fill="#217346" width="20" height="20"><path d="M8 4C6.89543 4 6 4.89543 6 6V30C6 31.1046 6.89543 32 8 32H28C29.1046 32 30 31.1046 30 30V12L22 4H8Z"/><path fill="white" d="M13 18L16 23H14L12 20L10 23H8L11 18L8 13H10L12 16L14 13H16L13 18Z"/><path fill="white" d="M18 13H26V15H18V13ZM18 17H26V19H18V17ZM18 21H24V23H18V21Z"/></svg>
                    </span>
                    <span class="finder-file-name">${f.name}</span>
                  </div>
                  <div class="finder-col finder-col-date">${f.dateModified}</div>
                  <div class="finder-col finder-col-size">${formatFinderSize(f.size)}</div>
                  <div class="finder-col finder-col-kind">${f.kind}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.classList.add('visible');
}

function hideFinderModal() {
  const modal = document.getElementById('finder-modal');
  if (modal) modal.classList.remove('visible');
}

function selectFinderFile(fileName, size) {
  const mockFile = new File([], fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const fileInfo = {
    name: fileName,
    size: size || 0,
    type: mockFile.type,
    file: mockFile
  };
  fileUploadState.pendingFiles.push(fileInfo);
  renderFileAttachment(fileInfo);
  hideFinderModal();
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
  const attachmentArea = document.getElementById('cortex-file-attachments');
  if (!attachmentArea) return;

  const fileId = 'file-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  const icon = getFileIcon(fileInfo.name);
  const ext = (fileInfo.name.split('.').pop() || '').toLowerCase();
  const typeClass = ['xlsx', 'xls'].includes(ext) ? 'file-attachment-chip--xlsx' : '';

  const chip = document.createElement('div');
  chip.className = 'file-attachment-chip' + (typeClass ? ' ' + typeClass : '');
  chip.dataset.fileId = fileId;
    chip.innerHTML = `
    <span class="file-icon">${icon}</span>
    <span class="file-name">${fileInfo.name}</span>
    <button type="button" class="file-remove" onclick="removeFileAttachment('${fileId}')" title="Remove" aria-label="Remove attachment">
      ${SOUL_ICON_CLOSE}
    </button>
  `;
  attachmentArea.appendChild(chip);
  fileInfo.chipId = fileId;
}

function removeFileAttachment(fileId) {
  const chip = document.querySelector(`.file-attachment-chip[data-file-id="${fileId}"]`);
  if (chip) chip.remove();
  
  fileUploadState.pendingFiles = fileUploadState.pendingFiles.filter(f => f.chipId !== fileId);
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getFileIcon(filename) {
  return SOUL_ICON_DOCUMENT;
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

async function animateCursorToElement(selector, clickAfter = true, offset = 'center') {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn('Cursor target not found:', selector);
    return false;
  }
  
  const rect = element.getBoundingClientRect();
  let x;
  if (offset === 'start') {
    x = rect.left + 25;
  } else if (offset === 'end') {
    x = rect.right - 25;
  } else {
    x = rect.left + rect.width / 2;
  }
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
  cortexState.deletedDecisions = {};
  cortexState.deletedActivityItems = [];

  // Reset file upload state so previous attachments don't bleed into the new playback
  fileUploadState.pendingFiles = [];
  
  if (typeof flowSwitcherState !== 'undefined') {
    flowSwitcherState.activeFlowId = flowId;
  }

  const root = document.getElementById('cortex-panel-root');
  if (root) {
    root.classList.add('playback-active');
    root.innerHTML = renderCortexPanelFull();
    initCortexListeners();
  }

  // Clear chat input field
  const inputField = document.getElementById('cortex-input-field');
  if (inputField) inputField.value = '';

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

  const root = document.getElementById('cortex-panel-root');
  if (root) root.classList.remove('playback-active');
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
    return;
  }

  const step = playbackState.steps[playbackState.currentStep];
  await executeStep(step);
  updatePlaybackUI();
}

async function executeStep(step) {
  if (step.cursorTarget && step.type !== 'action') {
    await animateCursorToElement(step.cursorTarget, true, step.cursorOffset || 'center');
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
    case 'positionCursorAtStart': {
      const panel = document.querySelector('.cortex-panel-wrapper:not(.panel-collapsed)') || document.getElementById('cortex-panel-root');
      if (panel) {
        const rect = panel.getBoundingClientRect();
        const x = rect.left - 8;
        const y = rect.top + 50;
        showDemoCursor();
        await moveCursorTo(x, y, 300);
      }
      break;
    }

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
            await animateCursorToElement(selector + ' .checkbox-label');
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
      
    case 'clickMoreIdeas': {
      const moreIdeasBtn = document.querySelector('button[onclick*="generateMoreIdeas"]');
      if (moreIdeasBtn && step.cursorTarget !== false) {
        await animateCursorToElement('button[onclick*="generateMoreIdeas"]');
      }
      if (typeof generateMoreIdeas === 'function' && moreIdeasBtn && !moreIdeasBtn.disabled) {
        generateMoreIdeas(moreIdeasBtn);
      }
      break;
    }

    case 'executeSelected':
      const executeBtn = document.getElementById('execute-btn');
      if (executeBtn && step.cursorTarget !== false) {
        await animateCursorToElement('#execute-btn');
      }
      if (typeof executeSelected === 'function') {
        executeSelected();
      }
      break;
      
    case 'clickDecisionItem':
      if (step.cursorTarget) {
        await animateCursorToElement(step.cursorTarget, true, step.cursorOffset || 'center');
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

    case 'deleteDecisionItem':
      if (step.item) {
        const itemEl = document.querySelector(`.decision-item[data-decision-key="${step.item}"]`);
        if (itemEl) {
          itemEl.classList.add('decision-item--show-remove');
        }
        const removeSelector = `.decision-item[data-decision-key="${step.item}"] .decision-item-remove`;
        await animateCursorToElement(removeSelector);
        if (itemEl) {
          itemEl.classList.remove('decision-item--show-remove');
        }
        if (typeof removeDecisionItem === 'function') {
          removeDecisionItem(step.item);
        }
      }
      break;

    case 'clickAttachmentBtn': {
      const attachBtn = document.querySelector('.attachment-btn');
      if (attachBtn) {
        await animateCursorToElement('.attachment-btn');
        const dropdown = attachBtn.querySelector('.attachment-dropdown');
        if (dropdown) dropdown.classList.add('open');
      }
      break;
    }

    case 'clickUploadFile': {
      const uploadItem = document.querySelector('.attachment-dropdown-item[onclick*="triggerFileUpload"]');
      if (uploadItem) {
        await animateCursorToElement('.attachment-dropdown-item[onclick*="triggerFileUpload"]');
        document.querySelectorAll('.attachment-dropdown.open').forEach(d => d.classList.remove('open'));
        showFinderModal();
      }
      break;
    }

    case 'selectFinderFile': {
      const fileName = step.fileName || 'users-import.xlsx';
      const fileSize = step.fileSize || 128000;
      const fileRow = document.querySelector(`.finder-file-row[data-name="${fileName}"]`);
      if (fileRow) {
        await animateCursorToElement(`.finder-file-row[data-name="${fileName}"]`);
        await new Promise(r => setTimeout(r, 300));
        selectFinderFile(fileName, fileSize);
      } else {
        selectFinderFile(fileName, fileSize);
      }
      break;
    }

    case 'typeInChat': {
      const input = document.getElementById('cortex-input-field');
      if (input) {
        await animateCursorToElement('#cortex-input-field');
        await new Promise(r => setTimeout(r, 200));
        const text = step.text || '';
        input.value = '';
        input.focus();
        for (let i = 0; i < text.length; i++) {
          input.value += text[i];
          await new Promise(r => setTimeout(r, 40 + Math.random() * 40));
        }
        input.dispatchEvent(new Event('input'));
      }
      break;
    }

    case 'submitChat': {
      const text = step.text || '';
      // Snapshot pending files BEFORE any cursor animation (animations are async
      // and could in theory interleave with other state changes).
      const filesToSend = [...fileUploadState.pendingFiles];

      // Move cursor: input area → send button
      const inputField = document.getElementById('cortex-input-field');
      if (inputField) {
        inputField.value = '';
        await animateCursorToElement('#cortex-input-field');
        await new Promise(r => setTimeout(r, 400));
      }
      await animateCursorToElement('#cortex-send-btn');
      await new Promise(r => setTimeout(r, 200));

      // Build and show user message bubble
      if (filesToSend.length > 0) {
        const fileBadgesHtml = filesToSend.map(f => {
          const ext = (f.name.split('.').pop() || '').toLowerCase();
          const isXls = ['xlsx', 'xls'].includes(ext);
          const cls = isXls ? 'file-attachment-chip file-attachment-chip--xlsx' : 'file-attachment-chip';
          return `<span class="${cls}"><span class="file-icon">${SOUL_ICON_DOCUMENT}</span><span class="file-name">${f.name}</span></span>`;
        }).join(' ');
        addChatMessage('user', `<span class="attached-files">${fileBadgesHtml}</span>${text ? ' ' + text : ''}`);
        const attachmentArea = document.getElementById('cortex-file-attachments');
        if (attachmentArea) attachmentArea.innerHTML = '';
        fileUploadState.pendingFiles = [];
      } else if (text) {
        addChatMessage('user', text);
      }
      if (inputField) inputField.value = '';
      break;
    }
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
