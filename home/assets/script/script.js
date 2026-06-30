/* ===========================
   SKILL DATA
=========================== */
const SKILLS = [
  // Backend
  { name: 'Java', icon: '☕', category: 'backend', level: 85, label: 'Advanced' },
  { name: 'Maven', icon: '📦', category: 'backend', level: 75, label: 'Proficient' },
  { name: 'Hibernate', icon: '🗄', category: 'backend', level: 80, label: 'Advanced' },
  { name: 'Spring Boot', icon: '🌱', category: 'backend', level: 65, label: 'Proficient' },
  { name: 'Node.js', icon: '🟢', category: 'backend', level: 20, label: 'Intermediate' },
  // Frontend
  { name: 'HTML5', icon: '🧱', category: 'frontend', level: 90, label: 'Advanced' },
  { name: 'CSS3', icon: '🎨', category: 'frontend', level: 90, label: 'Advanced' },
  { name: 'JavaScript', icon: '⚡', category: 'frontend', level: 60, label: 'Intermediate'},
  { name: 'React', icon: '⚛️', category: 'frontend', level: 40, label: 'Learning' },
  //{ name: 'Angular', icon: '🅰', category: 'frontend', level: 0, label: 'Learning' },
  // Database
  { name: 'PostgreSQL', icon: '🐘', category: 'database', level: 65, label: 'Intermediate' },
  { name: 'MySQL', icon: '🗃', category: 'database', level: 65, label: 'Intermediate' },
  // Tools
  { name: 'Git & GitHub', icon: '🔀', category: 'tools', level: 85, label: 'Advanced' },
  { name: 'Docker', icon: '🐳', category: 'tools', level: 75, label: 'Proficient' },
  { name: 'Postman', icon: '📬', category: 'tools', level: 70, label: 'Proficient' },
  { name: 'JUnit & Mockito', icon: '🧪', category: 'tools', level: 55, label: 'Intermediate' },
  { name: 'Tomcat', icon: '🐱', category: 'tools', level: 55, label: 'Intermediate' },
];

/* ===========================
   TYPED TEXT
=========================== */
const ROLES = [
  'Fullstack Engineer',
  'Java + React Developer',
  'DevOps Enthusiast',
  'Builder Propelled by AI ',
];

function initTyped() {
  const el = document.getElementById('typedText');
  if (!el) return;
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = ROLES[roleIndex];
    if (deleting) {
      el.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        setTimeout(tick, 400);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    }
    setTimeout(tick, deleting ? 45 : 80);
  }
  tick();
}

/* ===========================
   SKILLS RENDER
=========================== */
function renderSkills(filter = 'all') {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? SKILLS : SKILLS.filter(s => s.category === filter);

  grid.innerHTML = filtered.map(s => `
    <div class="skill-card reveal" data-category="${s.category}">
      <div class="skill-card__head">
        <div class="skill-card__icon">${s.icon}</div>
        <span class="skill-card__name">${s.name}</span>
        <span class="skill-card__category">${s.category}</span>
      </div>
      <div class="skill-card__bar-track">
        <div class="skill-card__bar-fill" data-level="${s.level}" style="width:0"></div>
      </div>
      <div class="skill-card__level">
        <span>${s.label}</span>
        <span>${s.level}%</span>
      </div>
    </div>
  `).join('');

  // Animate bars after short delay (allow DOM paint)
  requestAnimationFrame(() => {
    grid.querySelectorAll('.skill-card__bar-fill').forEach(bar => {
      setTimeout(() => {
        bar.style.width = bar.dataset.level + '%';
      }, 100);
    });
    grid.querySelectorAll('.reveal').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 80);
    });
  });
}

/* ===========================
   SKILL FILTERS
=========================== */
function initSkillFilters() {
  const btns = document.querySelectorAll('.skills__filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.filter);
    });
  });
}

/* ===========================
   PROJECTS TABS
=========================== */
function initProjectsTabs() {
  const tabs = document.querySelectorAll('.projects__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const id = tab.dataset.tab;
      document.querySelectorAll('.projects__panel').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
      });
      const panel = document.getElementById('panel-' + id);
      if (panel) { panel.style.display = 'block'; panel.classList.add('active'); }
    });
  });
}

/* ===========================
   NAV — SCROLL + ACTIVE
=========================== */
function initNav() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.dataset.section === current);
    });
  }, { passive: true });

  // Smooth close mobile menu on link click
  document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(l => {
    l.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('navBurger').classList.remove('open');
    });
  });
}

/* ===========================
   MOBILE BURGER
=========================== */
function initBurger() {
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
}

/* ===========================
   SCROLL REVEAL (Intersection Observer)
=========================== */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Animate skill bars when they come into view
        const bars = e.target.querySelectorAll('.skill-card__bar-fill');
        bars.forEach(bar => { bar.style.width = bar.dataset.level + '%'; });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ===========================
   ADD REVEAL TO STATIC ELEMENTS
=========================== */
function addRevealClasses() {
  const targets = [
    '.section__header',
    '.timeline__item',
    '.edu-card',
    '.project-card',
    '.contact__card',
    '.contact__form',
    '.soft-tag',
  ];
  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.07) + 's';
    });
  });
}

/* ===========================
   CONTACT FORM
=========================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value || 'Portfolio Contact';
    const message = document.getElementById('message').value;
    window.location.href = `mailto:devznagl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Gabriel,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
  });
}

/* ===========================
   INIT
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  initTyped();
  renderSkills();
  initSkillFilters();
  initProjectsTabs();
  initNav();
  initBurger();
  addRevealClasses();
  // Reveal runs after adding classes
  requestAnimationFrame(() => initReveal());
  initContactForm();

  // Hero reveal immediately
  document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
});
