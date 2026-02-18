(function () {
  const feedback = (el, text, ok = true) => {
    if (!el) return;
    el.textContent = text;
    el.classList.toggle('ok', ok);
    el.classList.toggle('error', !ok);
  };

  const contactForm = document.querySelector('.contact-form[action="#"][method="post"]:not(#owner-login-form):not(#join-request-form)');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Message Sent ✓';
      btn?.setAttribute('disabled', 'disabled');
    });
  }

  const joinForm = document.getElementById('join-request-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = joinForm.querySelector('#join-name')?.value.trim();
      const discord = joinForm.querySelector('#join-discord')?.value.trim();
      const box = document.getElementById('join-request-feedback');
      if (!name || !discord) {
        feedback(box, 'Please complete both fields before submitting.', false);
        return;
      }
      feedback(box, `Thanks ${name}! We received your Discord handle (${discord}).`);
      joinForm.reset();
    });
  }

  const loginForm = document.getElementById('owner-login-form');
  const ownerPanel = document.getElementById('owner-panel');
  const logoutBtn = document.getElementById('owner-logout');
  const ownerFeedback = document.getElementById('owner-login-feedback');

  const setOwnerSession = (loggedIn) => {
    localStorage.setItem('gocode-owner-logged-in', loggedIn ? '1' : '0');
    if (ownerPanel) ownerPanel.classList.toggle('hidden', !loggedIn);
  };

  if (loginForm) {
    const session = localStorage.getItem('gocode-owner-logged-in') === '1';
    setOwnerSession(session);

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('owner-email')?.value.trim();
      const password = document.getElementById('owner-password')?.value;

      if (!email || !password || password.length < 8) {
        feedback(ownerFeedback, 'Enter a valid owner email and a password with at least 8 characters.', false);
        return;
      }

      setOwnerSession(true);
      feedback(ownerFeedback, 'Login successful (demo mode).');
      loginForm.reset();
    });
  }

  logoutBtn?.addEventListener('click', () => {
    setOwnerSession(false);
    feedback(ownerFeedback, 'Logged out successfully.');
  });
})();
