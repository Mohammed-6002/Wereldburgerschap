(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  document.querySelectorAll('[data-nav] a.nav-link').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    const target = href.split('/').pop();
    if (target === path) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();

// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
