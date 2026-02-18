/* ============================================================
   DRAG AND DROP - Cross-panel drag support
   
   Makes elements inside the Cortex panel draggable.
   Page content area acts as a drop zone.
   Since both live in the same DOM, this works natively.
   ============================================================ */

function initDragDrop() {
  // Make decision items in the cortex panel draggable
  setupDraggables();

  // Set up the page content as a drop zone
  setupDropZone();

  // Re-init draggables on route change (new intelligence box content)
  window.addEventListener('route:changed', () => {
    setTimeout(setupDraggables, 100);
  });
}

function setupDraggables() {
  document.querySelectorAll('.decision-item[data-href]').forEach(item => {
    if (item.getAttribute('draggable') === 'true') return;
    item.setAttribute('draggable', 'true');
    item.classList.add('draggable');

    item.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', this.dataset.href);
      e.dataTransfer.setData('text/label', this.querySelector('.decision-label')?.textContent || '');
      e.dataTransfer.effectAllowed = 'copy';
      this.classList.add('dragging');

      // Show drop zone indicators on page content
      document.getElementById('page-content')?.classList.add('drop-target-active');
    });

    item.addEventListener('dragend', function() {
      this.classList.remove('dragging');
      document.getElementById('page-content')?.classList.remove('drop-target-active');
      document.querySelectorAll('.drop-highlight').forEach(el => el.classList.remove('drop-highlight'));
    });
  });

  // Chat messages with interactive cards can also be draggable
  document.querySelectorAll('.chat-message--ai .chat-message-bubble').forEach(bubble => {
    if (bubble.getAttribute('draggable') === 'true') return;
    bubble.setAttribute('draggable', 'true');

    bubble.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', this.textContent);
      e.dataTransfer.effectAllowed = 'copy';
      this.classList.add('dragging');
      document.getElementById('page-content')?.classList.add('drop-target-active');
    });

    bubble.addEventListener('dragend', function() {
      this.classList.remove('dragging');
      document.getElementById('page-content')?.classList.remove('drop-target-active');
    });
  });
}

function setupDropZone() {
  const pageContent = document.getElementById('page-content');
  if (!pageContent) return;

  pageContent.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    this.classList.add('drop-highlight');
  });

  pageContent.addEventListener('dragleave', function(e) {
    if (!this.contains(e.relatedTarget)) {
      this.classList.remove('drop-highlight');
    }
  });

  pageContent.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('drop-highlight');
    this.classList.remove('drop-target-active');

    const href = e.dataTransfer.getData('text/plain');
    const label = e.dataTransfer.getData('text/label');

    // Fire custom event for page-specific handling
    window.dispatchEvent(new CustomEvent('cortex:drop', {
      detail: { href, label, x: e.clientX, y: e.clientY }
    }));

    // If dropped item has a valid href, navigate to it
    if (href && typeof ROUTE_CONFIG !== 'undefined' && ROUTE_CONFIG[href.split('/').pop()]) {
      navigateTo(href);
    }
  });
}
