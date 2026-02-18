/* ============================================================
   SPA ROUTER - Client-side page navigation
   
   Intercepts internal link clicks, fetches page HTML,
   extracts content, and injects it into #page-content.
   Fires 'route:changed' custom event for other modules.
   ============================================================ */

const ROUTE_CONFIG = {
  'command-center.html':      { nav: 'command-center',    title: 'Command Center — Cortex AI',      highlight: '',           mode: 'initial' },
  'unified-analytics.html':   { nav: 'unified-analytics', title: 'Unified Analytics — Cortex AI',    highlight: 'analytics',  mode: 'completed' },
  'publisher-campaign.html':  { nav: 'publisher',         title: 'Publisher Campaign — Cortex AI',   highlight: 'campaign',   mode: 'completed' },
  'content-collection.html':  { nav: 'content',           title: 'Content Collection — Cortex AI',   highlight: 'collection', mode: 'completed' },
  'settings-listening.html':  { nav: 'settings',          title: 'Settings / Listening — Cortex AI', highlight: 'listening',  mode: 'completed' },
};

const PAGE_INIT = {};
let currentPage = null;
const pageCache = {};

function registerPageInit(pageName, initFn) {
  PAGE_INIT[pageName] = initFn;
}

function getPageName(href) {
  const filename = href.split('/').pop().split('?')[0].split('#')[0];
  return filename || 'command-center.html';
}

async function navigateTo(href, pushState = true) {
  const pageName = getPageName(href);
  const config = ROUTE_CONFIG[pageName];
  if (!config) return;
  if (pageName === currentPage) return;

  const container = document.getElementById('page-content');
  if (!container) return;

  try {
    let html = pageCache[pageName];
    if (!html) {
      const resp = await fetch(pageName);
      if (!resp.ok) return;
      html = await resp.text();
      pageCache[pageName] = html;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const screen = doc.querySelector('.screen');
    if (!screen) return;

    const fragment = document.createDocumentFragment();
    const inlineScripts = [];

    Array.from(screen.children).forEach(child => {
      if (child.id === 'nav-slot' || child.id === 'cortex-slot') return;
      if (child.tagName === 'SCRIPT') return;
      fragment.appendChild(child.cloneNode(true));
    });

    // Collect inline scripts from the page body
    doc.querySelectorAll('body > script:not([src])').forEach(script => {
      const text = script.textContent.trim();
      if (text && !text.includes('initNav') && !text.includes('initCortexPanel')) {
        // Filter out the init calls, keep page-specific logic
        const filtered = text
          .replace(/initNav\(\);?/g, '')
          .replace(/initCortexPanel\(\);?/g, '')
          .replace(/updateExecuteButton\(\);?/g, '')
          .trim();
        if (filtered) inlineScripts.push(filtered);
      }
    });

    container.innerHTML = '';
    container.appendChild(fragment);

    document.title = config.title;
    currentPage = pageName;

    if (pushState) {
      history.pushState({ page: pageName }, config.title, pageName);
    }

    // Update nav active state
    if (typeof setActiveNavItem === 'function') {
      setActiveNavItem(config.nav);
    }

    // Notify cortex panel of route change
    window.dispatchEvent(new CustomEvent('route:changed', {
      detail: { page: pageName, config }
    }));

    // Run page-specific inline scripts
    inlineScripts.forEach(code => {
      try { new Function(code)(); } catch (e) { console.warn('Page script error:', e); }
    });

    // Run registered page init function
    const initFn = PAGE_INIT[pageName];
    if (typeof initFn === 'function') initFn();

  } catch (err) {
    console.error('Navigation error:', err);
  }
}

function initRouter(initialPage) {
  // Don't set currentPage here -- navigateTo needs it null for the first load

  // Intercept clicks on internal links and nav items
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href]');
    if (link) {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && ROUTE_CONFIG[getPageName(href)]) {
        e.preventDefault();
        navigateTo(href);
        return;
      }
    }

    // Handle onclick="window.location.href='...'" pattern via data-href
    const navTarget = e.target.closest('[data-href]');
    if (navTarget) {
      e.preventDefault();
      e.stopPropagation();
      navigateTo(navTarget.dataset.href);
    }
  });

  // Handle keyboard activation (Enter/Space) on nav items with data-href
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const navTarget = e.target.closest('[data-href]');
      if (navTarget) {
        e.preventDefault();
        navigateTo(navTarget.dataset.href);
      }
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', function(e) {
    const page = (e.state && e.state.page) || getPageName(location.pathname);
    navigateTo(page, false);
  });
}
