const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', function(e) {
  e.preventDefault();

  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Suppress every transition for the swap so the theme snaps instead of smearing
  const styleEl = document.createElement('style');
  styleEl.textContent = '*,*::before,*::after{transition:none !important}';
  document.head.appendChild(styleEl);

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Force a reflow, then restore transitions on the next frame
  void htmlElement.offsetWidth;
  requestAnimationFrame(() => styleEl.remove());

  window.scrollTo({ top: 0, behavior: 'smooth' });
});
