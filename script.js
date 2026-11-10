(() => {
  const intro = document.querySelector('.typing-intro');
  if (!intro) return;

  const text = intro.querySelector('.typing-text');
  const toggle = intro.querySelector('.typing-toggle');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const phrases = ['Data scientist.', 'Building AI agents.', 'Evaluating…', 'Vibing…'];
  let phrase = 0;
  let deleting = true;
  let paused = false;
  let timer;

  function schedule(delay) {
    timer = window.setTimeout(step, delay);
  }

  function step() {
    if (paused || motion.matches) return;
    const current = text.textContent;
    if (deleting) {
      text.textContent = current.slice(0, -1);
      if (text.textContent.length === 0) {
        phrase = (phrase + 1) % phrases.length;
        deleting = false;
        schedule(350);
      } else {
        schedule(65);
      }
    } else {
      text.textContent = phrases[phrase].slice(0, current.length + 1);
      if (text.textContent === phrases[phrase]) {
        deleting = true;
        schedule(2000);
      } else {
        schedule(105);
      }
    }
  }

  function updateControl() {
    const label = `${paused ? 'Resume' : 'Pause'} introduction animation`;
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    toggle.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
    intro.classList.toggle('is-paused', paused);
  }

  function applyMotionPreference() {
    window.clearTimeout(timer);
    phrase = 0;
    deleting = true;
    text.textContent = phrases[0];
    intro.classList.toggle('is-animated', !motion.matches);
    toggle.hidden = motion.matches;
    updateControl();
    if (!motion.matches && !paused) schedule(2000);
  }

  toggle.addEventListener('click', () => {
    paused = !paused;
    window.clearTimeout(timer);
    updateControl();
    if (!paused && !motion.matches) schedule(350);
  });
  motion.addEventListener('change', applyMotionPreference);
  applyMotionPreference();
})();
