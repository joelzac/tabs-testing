// Get all tab buttons and all panels
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    // Remove active/selected state from all tabs and hide all panels
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach(p => {
      p.classList.remove('active');
      p.setAttribute('hidden', 'hidden');
    });

    // Activate current tab
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Display associated panel
    const panelId = tab.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    panel.classList.add('active');
    panel.removeAttribute('hidden');
  });
});
