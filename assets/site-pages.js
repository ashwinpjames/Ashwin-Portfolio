const whatsappNumber = '97105227704142';
const whatsappMessage = 'Hello Ashwin, I would like to discuss generating more qualified leads for my business.';
const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}` : `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
document.querySelectorAll('[data-whatsapp]').forEach((link) => { link.href = whatsappUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; });

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const opened = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', opened);
    menuButton.setAttribute('aria-expanded', String(!opened));
    document.body.classList.toggle('menu-open', !opened);
  });
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));
}

document.querySelectorAll('nav[aria-label="Primary navigation"], nav[aria-label="Mobile navigation"]').forEach((nav) => {
  if (nav.querySelector('a[href="resume.html"]')) return;
  const aboutLink = [...nav.querySelectorAll('a')].find((link) => link.getAttribute('href') === 'about.html');
  if (!aboutLink) return;
  const resumeLink = document.createElement('a');
  resumeLink.href = 'resume.html';
  resumeLink.textContent = 'Resume';
  resumeLink.className = aboutLink.className;
  aboutLink.insertAdjacentElement('afterend', resumeLink);
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
}), { threshold: .1 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

if (window.matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches) {
  const glow = document.querySelector('.cursor-glow');
  if (glow) window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; glow.classList.add('active');
  }, { passive: true });
}

const aboutHero = document.getElementById('about-hero');
if (aboutHero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = [...aboutHero.querySelectorAll('[data-parallax]')];
  let current = { x: 0, y: 0 }, target = { x: 0, y: 0 }, raf = null;
  const tick = () => {
    current.x += (target.x - current.x) * .06; current.y += (target.y - current.y) * .06;
    targets.forEach((el) => { const strength = Number(el.dataset.parallax || .2); el.style.transform = `translate3d(${(current.x * 20 * strength).toFixed(2)}px,${(current.y * 20 * strength).toFixed(2)}px,0)`; });
    if (Math.abs(target.x - current.x) > .001 || Math.abs(target.y - current.y) > .001) raf = requestAnimationFrame(tick); else raf = null;
  };
  aboutHero.addEventListener('pointermove', (event) => { const rect = aboutHero.getBoundingClientRect(); target.x = ((event.clientX - rect.left) / rect.width - .5) * 2; target.y = ((event.clientY - rect.top) / rect.height - .5) * 2; if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
}

const calculator = document.getElementById('growth-calculator');
if (calculator) {
  const updateCalculator = () => {
    const value = (name) => Math.max(0, Number(calculator.elements[name].value) || 0);
    const visits = value('visits'), conversion = value('conversion') / 100, qualified = value('qualified') / 100, close = value('close') / 100, cpc = value('cpc');
    const leads = visits * conversion, goodLeads = leads * qualified, customers = goodLeads * close, spend = visits * cpc;
    calculator.querySelector('[data-output="leads"]').textContent = Math.round(leads).toLocaleString();
    calculator.querySelector('[data-output="qualified"]').textContent = Math.round(goodLeads).toLocaleString();
    calculator.querySelector('[data-output="customers"]').textContent = customers.toFixed(1);
    calculator.querySelector('[data-output="cac"]').textContent = customers ? `AED ${(spend / customers).toFixed(0)}` : '—';
  };
  calculator.querySelectorAll('input').forEach((input) => input.addEventListener('input', updateCalculator)); updateCalculator();
}

/* Mobile sticky action bar: show after user scrolls ~10% of the page height on small screens
   - The bar is initially hidden on page load
   - It appears with a smooth fade + slide when user scrolls past the threshold
   - It hides again when user scrolls back above the threshold
   - If a page doesn't include a .mobile-action-bar element, one is injected dynamically here
*/
(function() {
  const MOBILE_MAX = 767; // px
  const THRESHOLD = 0.10; // 10% of scrollable height
  if (!document.getElementById('mobile-action-bar-styles')) {
    const styles = document.createElement('style');
    styles.id = 'mobile-action-bar-styles';
    styles.textContent = '.mobile-action-bar{display:none}@media (max-width:767px){main{padding-bottom:92px}.mobile-action-bar{position:fixed;right:0;bottom:0;left:0;z-index:60;display:flex;gap:.75rem;justify-content:center;padding:.75rem;background:linear-gradient(180deg,transparent,rgba(5,8,22,.1));opacity:0;pointer-events:none;transform:translateY(12px);transition:opacity .32s ease,transform .32s cubic-bezier(.2,.9,.2,1)}.mobile-action-bar.is-visible{opacity:1;pointer-events:auto;transform:translateY(0)}.mobile-action-bar .btn{display:inline-flex;flex:1;align-items:center;justify-content:center;gap:.6rem;border:1px solid rgba(255,255,255,.12);border-radius:9999px;background:rgba(255,255,255,.12);padding:.95rem 1rem;color:#fff;font-weight:700;text-decoration:none;box-shadow:0 8px 30px rgba(2,6,23,.55);backdrop-filter:blur(6px)}.mobile-action-bar .btn:hover{background:rgba(255,255,255,.18)}.fixed.bottom-5.right-5{display:none!important}}';
    document.head.appendChild(styles);
  }
  // Helper: create button SVGs to avoid relying on external icon fonts
  const whatsappSVG = '<svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.7 11.7 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.6-8.4zM12.2 21.7h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7zm5.4-7.4c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5 0-.1-.2-.2-.5-.3z"/></svg>';
  const envelopeSVG = '<svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 6.91L12 13l9.99-6.09A2 2 0 0 0 20.99 4H3.01a2 2 0 0 0-1 2.91z"/><path d="M22 8.24l-10 6.09L2 8.24V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.24z"/></svg>';

  // Find existing bar or create one
  let mobileBar = document.querySelector('.mobile-action-bar');
  if (!mobileBar) {
    mobileBar = document.createElement('div');
    mobileBar.className = 'mobile-action-bar';
    // Use data-whatsapp attribute for the whatsapp link so existing logic may update it; still set href to whatsappUrl for safety
    mobileBar.innerHTML = `
      <a class="btn" data-whatsapp href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">${whatsappSVG}<span class="hidden sm:inline">WhatsApp</span></a>
      <a class="btn" href="mailto:your@email.com" aria-label="Send email">${envelopeSVG}<span class="hidden sm:inline">Email</span></a>
    `;
    document.body.appendChild(mobileBar);
  } else {
    // Ensure whatsapp link uses the generated whatsappUrl if present
    const w = mobileBar.querySelector('[data-whatsapp]'); if (w) { w.href = whatsappUrl; w.target = '_blank'; w.rel = 'noopener noreferrer'; }
  }

  // Ensure bar starts hidden on initial load
  mobileBar.classList.remove('is-visible');

  let ticking = false;
  let lastState = false;
  // Only respond to scroll events (keeps the bar hidden on initial load even if the user opened the page already scrolled)
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const scrollable = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const scrolled = Math.max(0, window.scrollY);
      const ratio = scrollable > 0 ? scrolled / scrollable : 0;
      const shouldShow = window.innerWidth <= MOBILE_MAX && ratio >= THRESHOLD;
      if (shouldShow !== lastState) {
        lastState = shouldShow;
        mobileBar.classList.toggle('is-visible', shouldShow);
      }
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { /* recalc on resize */ }, { passive: true });
  // Additionally, when the user navigates via history (back/forward), they may already be scrolled; we'll still require a user scroll to show the bar per spec, so do not auto-show on load.
})();
