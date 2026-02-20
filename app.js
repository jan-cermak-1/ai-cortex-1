/* ============================================================
   CORTEX AI FLOW PROTOTYPE - PAGE-SPECIFIC LOGIC
   
   Each page's init logic is wrapped in a callable function.
   The router calls the appropriate function after injecting content.
   ============================================================ */

// --- Command Center page logic ---
function initCommandCenter() {
  updateExecuteButton();
}

function toggleCheckbox(el) {
  el.classList.toggle('checked');
  el.setAttribute('aria-checked', el.classList.contains('checked') ? 'true' : 'false');
  updateSelectAllState();
  updateExecuteButton();
}

function toggleSelectAll(el) {
  var container = document.getElementById('intelligence-box-initial');
  if (!container) return;
  var items = container.querySelectorAll('.checkbox:not(.checkbox-select-all)');
  var allChecked = Array.from(items).every(function(cb) { return cb.classList.contains('checked'); });

  items.forEach(function(cb) {
    if (allChecked) {
      cb.classList.remove('checked');
      cb.setAttribute('aria-checked', 'false');
    } else {
      cb.classList.add('checked');
      cb.setAttribute('aria-checked', 'true');
    }
  });

  updateSelectAllState();
  updateExecuteButton();
}

function updateSelectAllState() {
  var container = document.getElementById('intelligence-box-initial');
  if (!container) return;
  var selectAll = container.querySelector('.checkbox-select-all');
  if (!selectAll) return;

  var items = container.querySelectorAll('.checkbox:not(.checkbox-select-all)');
  var checked = Array.from(items).filter(function(cb) { return cb.classList.contains('checked'); });
  var allChecked = checked.length === items.length && items.length > 0;
  var someChecked = checked.length > 0 && !allChecked;

  selectAll.classList.toggle('checked', allChecked);
  selectAll.classList.toggle('indeterminate', someChecked);
  selectAll.setAttribute('aria-checked', allChecked ? 'true' : someChecked ? 'mixed' : 'false');
}

function updateExecuteButton() {
  const checkboxes = document.querySelectorAll('#intelligence-box-initial .checkbox');
  if (!checkboxes.length) return;

  const anyChecked = Array.from(checkboxes).some(cb => cb.classList.contains('checked'));
  const executeBtn = document.getElementById('execute-btn');
  if (!executeBtn) return;

  if (anyChecked) {
    executeBtn.classList.remove('disabled');
    executeBtn.disabled = false;
  } else {
    executeBtn.classList.add('disabled');
    executeBtn.disabled = true;
  }
}

function executeSelected() {
  var executeBtn = document.getElementById('execute-btn');
  if (!executeBtn || executeBtn.classList.contains('disabled')) return;

  var initialBox = document.getElementById('intelligence-box-initial');
  if (!initialBox) return;

  var area = document.getElementById('cortex-intelligence-area');
  if (!area) return;

  area.innerHTML = renderExecuteSkeleton();

  setTimeout(function() {
    cortexState.mode = 'completed';
    area.innerHTML = renderIntelligenceCompleted('');
    initDecisionItemListeners();

    var newCompletedBox = document.getElementById('intelligence-box-completed');
    if (newCompletedBox) {
      var items = newCompletedBox.querySelectorAll('.decision-item');
      items.forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(6px)';
        setTimeout(function() {
          item.style.transition = 'all 0.3s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
      });
    }

  }, 2000);
}

function renderExecuteSkeleton() {
  return '<div class="intelligence-box" id="intelligence-box-initial">' +
    '<div class="intelligence-box-header">' +
      '<span class="intelligence-box-title">Labubu trend in your country</span>' +
      '<div class="intelligence-box-close" role="button" tabindex="0" aria-label="Close intelligence box" onclick="closeIntelligenceBox(this)">' +
        '<img src="assets/cortex/close-x.svg" alt="">' +
      '</div>' +
    '</div>' +
    '<div class="intelligence-box-description">' +
      '<p>Labubu is trending in your country &mdash; your competitors are publishing content related to this trend.</p>' +
      '<p>Based on your decision I created:</p>' +
    '</div>' +
    '<div style="display:flex;flex-direction:column;gap:12px;width:100%;padding:6px 0;">' +
      '<div style="display:flex;gap:6px;align-items:center;">' +
        '<div class="skeleton-row" style="width:18px;height:18px;min-width:18px;border-radius:50%;"></div>' +
        '<div class="skeleton-row" style="flex:1;height:18px;"></div>' +
      '</div>' +
      '<div style="display:flex;gap:6px;align-items:center;">' +
        '<div class="skeleton-row" style="width:18px;height:18px;min-width:18px;border-radius:50%;"></div>' +
        '<div class="skeleton-row" style="flex:1;height:18px;width:70%;"></div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

// --- Settings / Listening page logic ---
function initSettingsListening() {
  const backdrop = document.getElementById('wizard-backdrop');
  const container = document.getElementById('wizard-container');

  // Wizard overlay uses position: fixed to cover the entire viewport
  // (nav + page content). Cortex panel stays above via z-index: 10000.
  // Sync wizard container right padding with Cortex panel width
  // so the wizard panel ends where the Cortex panel starts.
  const cortexRoot = document.getElementById('cortex-panel-root');
  if (cortexRoot && container) {
    function syncWizardPosition() {
      container.style.paddingRight = cortexRoot.offsetWidth + 'px';
    }
    syncWizardPosition();
    const observer = new ResizeObserver(syncWizardPosition);
    observer.observe(cortexRoot);

    // Clean up when navigating away from settings
    function cleanup() {
      observer.disconnect();
      window.removeEventListener('route:changed', cleanup);
    }
    window.addEventListener('route:changed', cleanup);
  }
}

function showWizard() {
  const backdrop = document.getElementById('wizard-backdrop');
  const container = document.getElementById('wizard-container');
  if (backdrop) backdrop.style.display = 'block';
  if (container) container.style.display = 'flex';
}

function hideWizard() {
  const backdrop = document.getElementById('wizard-backdrop');
  const container = document.getElementById('wizard-container');
  if (backdrop) backdrop.style.display = 'none';
  if (container) container.style.display = 'none';
}

// --- Register page init functions with router ---
if (typeof registerPageInit === 'function') {
  registerPageInit('command-center.html', initCommandCenter);
  registerPageInit('settings-listening.html', initSettingsListening);
}
