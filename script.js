// ===== sticky nav shadow on scroll =====
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== mobile menu =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const toggleMenu = (open) => {
  const isOpen = open ?? !navLinks.classList.contains('open');
  navLinks.classList.toggle('open', isOpen);
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
};
burger.addEventListener('click', () => toggleMenu());
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// ===== copy contract address =====
const CA = 'EQCo0bIynpFOtt-Gunjo71VYcdmuZSbeqxPV0-Bd3oLy_xIR';
const toast = document.getElementById('toast');
let toastTimer;
const showToast = (msg) => {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
};
const copyCA = async () => {
  try {
    await navigator.clipboard.writeText(CA);
  } catch {
    const t = document.createElement('textarea');
    t.value = CA; document.body.appendChild(t); t.select();
    document.execCommand('copy'); t.remove();
  }
  showToast('Contract address copied ✓');
};
['copyCa', 'copyCa2', 'copyCa3'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', copyCA);
});

// ===== scroll reveal =====
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== year (footer) =====
const y = new Date().getFullYear();
document.querySelectorAll('.footer__disc').forEach(el => {
  el.innerHTML = el.innerHTML.replace('2026', y);
});
