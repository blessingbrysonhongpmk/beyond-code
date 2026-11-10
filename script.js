/**
 * Academic Portfolio - Ms. V. Mulli Mary, M.E., (Ph.D.)
 * Senior Academic Script: Theme Management, 7-Item ScrollSpy, Scroll Reveal, Copy Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Light / Executive Dark Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('vmm_academic_theme_v2');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else if (prefersDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('vmm_academic_theme_v2', target);
      updateThemeIcon(target);
      showToast(target === 'dark' ? 'Executive Dark mode active' : 'Academic Light mode active');
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (!icon) return;
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      themeToggleBtn.title = 'Switch to Light theme';
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggleBtn.title = 'Switch to Dark theme';
    }
  }

  // 2. Mobile Navigation Drawer Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    // Close menu when clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileNavToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // 3. Header Shadow on Scroll & 7-Item ScrollSpy Navigation Highlighting
  const siteHeader = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const scrollPos = window.scrollY;

    // Header elevation shadow
    if (siteHeader) {
      if (scrollPos > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // ScrollSpy active link highlighting across all 7 sections
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 4. Subtle Scroll-Reveal Entrance Animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if observer not supported
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // 5. Faculty Photo Fallback Handling
  const facultyPhoto = document.getElementById('facultyPhoto');
  if (facultyPhoto) {
    facultyPhoto.addEventListener('error', () => {
      if (!facultyPhoto.src.endsWith('profile.jpg')) {
        facultyPhoto.src = 'profile.jpg';
      }
    });
  }
});

// 6. One-Click Copy Utility with Inline Checkmark Feedback
function copyContactText(text, btnElement) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      handleCopySuccess(text, btnElement);
    }).catch(() => {
      fallbackCopy(text, btnElement);
    });
  } else {
    fallbackCopy(text, btnElement);
  }
}

function handleCopySuccess(text, btnElement) {
  showToast(`Copied "${text}" to clipboard`);
  if (btnElement) {
    const originalHtml = btnElement.innerHTML;
    btnElement.innerHTML = `<i class="fa-solid fa-check" style="color: #244B78;"></i> <span>Copied!</span>`;
    setTimeout(() => {
      btnElement.innerHTML = originalHtml;
    }, 2000);
  }
}

function fallbackCopy(text, btnElement) {
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  try {
    document.execCommand('copy');
    handleCopySuccess(text, btnElement);
  } catch (err) {
    showToast('Press Ctrl+C to copy: ' + text);
  }
  document.body.removeChild(el);
}

// 7. Toast Notification Handler
let toastTimer;
function showToast(message) {
  const toastBox = document.getElementById('toastBox');
  const toastMsg = document.getElementById('toastMsg');
  if (!toastBox || !toastMsg) return;

  toastMsg.textContent = message;
  toastBox.classList.add('active');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastBox.classList.remove('active');
  }, 2600);
}
