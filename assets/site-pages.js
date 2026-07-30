(() => {
const whatsappNumber = '97105227704142';
const contactEmail = 'ashwinjames2720@gmail.com';
const whatsappMessage = 'Hello Ashwin, I would like to discuss generating more qualified leads for my business.';
const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

const navItems = [
  ['index.html', 'Home'],
  ['about.html', 'About'],
  ['resume.html', 'Resume'],
  ['services.html', 'Services'],
  ['case-studies.html', 'Case Studies'],
  ['resources.html', 'Resources'],
  ['blog.html', 'Blogs'],
  ['contact.html', 'Contact'],
];

const currentPage = (() => {
  const page = window.location.pathname.split('/').pop();
  return page || 'index.html';
})();
const activePage = currentPage === 'campaign-budget-calculator.html' ? 'resources.html' : currentPage;

const whatsappSVG = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.7 11.7 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.6-8.4zM12.2 21.7h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7zm5.4-7.4c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5 0-.1-.2-.2-.5-.3z"/></svg>';
const envelopeSVG = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 6.91L12 13l9.99-6.09A2 2 0 0 0 20.99 4H3.01a2 2 0 0 0-1 2.91z"/><path d="M22 8.24l-10 6.09L2 8.24V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.24z"/></svg>';

const updateWhatsappLinks = () => {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
};

const normalizeNav = () => {
  const primaryNavs = document.querySelectorAll('nav[aria-label="Primary navigation"], nav.desktop-nav');
  const mobileNavs = document.querySelectorAll('nav[aria-label="Mobile navigation"], nav.mobile-menu');

  primaryNavs.forEach((nav) => {
    const template = nav.querySelector('a') || document.createElement('a');
    nav.innerHTML = '';
    navItems.forEach(([href, label]) => {
      const link = template.cloneNode(false);
      link.href = href;
      link.textContent = label;
      link.className = nav.classList.contains('desktop-nav') ? 'aj-nav-link' : (template.className || 'aj-nav-link transition hover:text-white');
      if (!link.className.includes('aj-nav-link')) link.className = `${link.className} aj-nav-link`.trim();
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.removeAttribute('aria-current');
      if (href === activePage) {
        link.setAttribute('aria-current', 'page');
        if (!nav.classList.contains('desktop-nav')) link.className = link.className.replace('text-slate-300', 'text-white').replace('transition hover:text-white', 'text-white');
      }
      nav.appendChild(link);
    });
  });

  mobileNavs.forEach((nav) => {
    const isMenuContainer = nav.id === 'mobile-menu';
    const targetNav = isMenuContainer && !nav.matches('nav[aria-label="Mobile navigation"]')
      ? nav.querySelector('nav[aria-label="Mobile navigation"]')
      : nav;
    if (!targetNav) return;

    targetNav.innerHTML = '';
    navItems.forEach(([href, label]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      link.className = targetNav.classList.contains('mobile-menu') || nav.classList.contains('mobile-menu')
        ? 'aj-nav-link'
        : 'aj-nav-link rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5';
      if (href === activePage) {
        link.setAttribute('aria-current', 'page');
        if (!targetNav.classList.contains('mobile-menu') && !nav.classList.contains('mobile-menu')) {
          link.className = 'aj-nav-link rounded-lg bg-white/5 px-3 py-3 text-white';
        }
      }
      targetNav.appendChild(link);
    });

    const consultation = document.createElement('a');
    consultation.href = whatsappUrl;
    consultation.dataset.whatsapp = '';
    consultation.textContent = 'Get a free consultation';
    consultation.className = targetNav.classList.contains('mobile-menu') || nav.classList.contains('mobile-menu')
      ? 'aj-nav-link'
      : 'mt-3 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950';
    targetNav.appendChild(consultation);
  });

  updateWhatsappLinks();
};

const setupMenu = () => {
  const setOpen = (open) => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuButton || !mobileMenu) return;
    mobileMenu.classList.toggle('hidden', !open);
    mobileMenu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  };

  setOpen(false);
  document.addEventListener('click', (event) => {
    const menuButton = event.target.closest?.('#menu-button');
    if (menuButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const opened = menuButton.getAttribute('aria-expanded') === 'true';
      setOpen(!opened);
      return;
    }

    if (event.target.closest?.('#mobile-menu a')) {
      setOpen(false);
    }
  }, true);
};

const setupMobileActionBar = () => {
  let mobileBar = document.querySelector('.mobile-action-bar');
  if (!mobileBar) {
    mobileBar = document.createElement('div');
    mobileBar.className = 'mobile-action-bar';
    mobileBar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(mobileBar);
  }

  mobileBar.innerHTML = `
    <a class="btn" data-whatsapp href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">${whatsappSVG}<span>WhatsApp</span></a>
    <a class="btn" href="mailto:${contactEmail}" aria-label="Send email">${envelopeSVG}<span>Email</span></a>
  `;
  mobileBar.classList.remove('is-visible');
  mobileBar.setAttribute('aria-hidden', 'true');

  let ticking = false;
  const update = () => {
    const shouldShow = window.innerWidth <= 767 && window.scrollY > Math.max(90, window.innerHeight * 0.12);
    mobileBar.classList.toggle('is-visible', shouldShow);
    mobileBar.setAttribute('aria-hidden', String(!shouldShow));
    ticking = false;
  };
  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
};

normalizeNav();
setupMenu();
setupMobileActionBar();

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('in-view');
    observer.unobserve(entry.target);
  }
}), { threshold: .1 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

if (window.matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches) {
  const glow = document.querySelector('.cursor-glow');
  if (glow) window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.classList.add('active');
  }, { passive: true });
}

const aboutHero = document.getElementById('about-hero');
if (aboutHero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = [...aboutHero.querySelectorAll('[data-parallax]')];
  let current = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  let raf = null;
  const tick = () => {
    current.x += (target.x - current.x) * .06;
    current.y += (target.y - current.y) * .06;
    targets.forEach((el) => {
      const strength = Number(el.dataset.parallax || .2);
      el.style.transform = `translate3d(${(current.x * 20 * strength).toFixed(2)}px,${(current.y * 20 * strength).toFixed(2)}px,0)`;
    });
    if (Math.abs(target.x - current.x) > .001 || Math.abs(target.y - current.y) > .001) raf = requestAnimationFrame(tick);
    else raf = null;
  };
  aboutHero.addEventListener('pointermove', (event) => {
    const rect = aboutHero.getBoundingClientRect();
    target.x = ((event.clientX - rect.left) / rect.width - .5) * 2;
    target.y = ((event.clientY - rect.top) / rect.height - .5) * 2;
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });
}

const calculator = document.getElementById('growth-calculator');
if (calculator) {
  const updateCalculator = () => {
    const value = (name) => Math.max(0, Number(calculator.elements[name].value) || 0);
    const visits = value('visits');
    const conversion = value('conversion') / 100;
    const qualified = value('qualified') / 100;
    const close = value('close') / 100;
    const cpc = value('cpc');
    const leads = visits * conversion;
    const goodLeads = leads * qualified;
    const customers = goodLeads * close;
    const spend = visits * cpc;
    calculator.querySelector('[data-output="leads"]').textContent = Math.round(leads).toLocaleString();
    calculator.querySelector('[data-output="qualified"]').textContent = Math.round(goodLeads).toLocaleString();
    calculator.querySelector('[data-output="customers"]').textContent = customers.toFixed(1);
    calculator.querySelector('[data-output="cac"]').textContent = customers ? `AED ${(spend / customers).toFixed(0)}` : '-';
  };
  calculator.querySelectorAll('input').forEach((input) => input.addEventListener('input', updateCalculator));
  updateCalculator();
}
})();
