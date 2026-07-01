// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class StackComponent extends HTMLElement {
    constructor() {
        super();

        const shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.innerHTML = this.HTML();
        shadowDOM.appendChild(this.CSS());

        const base_CSS_patterns = document.createElement('link');
            let path = "../../assets/style/style.css"; //insert the base CSS path here
            base_CSS_patterns.setAttribute('rel', 'stylesheet');
            base_CSS_patterns.setAttribute('href', path);
            shadowDOM.appendChild(base_CSS_patterns);
            
    }

    HTML() {
        // noinspection HtmlUnknownAnchorTarget
        return  `
        <!-- ===== SKILLS ===== -->
        <section class="section" id="skills">
          <div class="container">
            <div class="section__header">
              <span class="section__eyebrow">Expertise</span>
              <h2 class="section__title">Skills &amp; Stack</h2>
              <p class="section__subtitle">Technologies I work with — ranked by hands-on proficiency.</p>
            </div>
            <div class="skills__filter">
              <button class="skills__filter-btn active" data-filter="all">All</button>
              <button class="skills__filter-btn" data-filter="backend">Backend</button>
              <button class="skills__filter-btn" data-filter="frontend">Frontend</button>
              <button class="skills__filter-btn" data-filter="database">Database</button>
              <button class="skills__filter-btn" data-filter="tools">Tools &amp; DevOps</button>
            </div>
            <div class="skills__grid" id="skillsGrid"></div>
            <div class="skills__soft">
              <h3 class="skills__soft-title">Soft Skills</h3>
              <div class="skills__soft-grid">
                <div class="soft-tag">Troubleshooting</div>
                <div class="soft-tag">Backlog Management</div>
                <div class="soft-tag">Small Group Leadership</div>
                <div class="soft-tag">KPI Pressure</div>
                <div class="soft-tag">Process Optimization</div>
                <div class="soft-tag">Adaptive Communication</div>
              </div>
            </div>
          </div>
        </section>
        `;

    }

    CSS() {
        const styleNode = document.createElement('style');
        styleNode.textContent = `
        /* ============================================================
        8. SKILLS
        ============================================================ */
        .skills__filter {
          display:         flex;
          flex-wrap:       wrap;
          justify-content: center;
          gap:             0.5rem;
          margin-bottom:   2.5rem;
        }
        .skills__filter-btn {
          padding:       0.4375rem 1.125rem;
          border-radius: 999px;
          border:        1px solid var(--border-soft);
          font-size:     0.83rem;
          font-weight:   500;
          color:         var(--text-muted);
          transition:    all var(--t);
        }
        .skills__filter-btn:hover  { color: var(--text); border-color: var(--border); }
        .skills__filter-btn.active { background: var(--purple); color: #fff; border-color: var(--purple); }
        
        .skills__grid {
          display:               grid;
          grid-template-columns: repeat(auto-fill, minmax(16.25rem, 1fr));  /* ~260px */
          gap:                   1rem;
          margin-bottom:         3.5rem;
        }
        
        /* Skill card */
        .skill-card {
          background:    var(--surface);
          border:        1px solid var(--border-soft);
          border-radius: var(--radius);
          padding:       1.125rem 1.25rem;
          transition:    border-color var(--t), transform var(--t);
        }
        .skill-card:hover { border-color: var(--border); transform: translateY(-0.125rem); }
        
        .skill-card__head {
          display:       flex;
          align-items:   center;
          gap:           0.625rem;
          margin-bottom: 0.75rem;
        }
        .skill-card__icon {
          font-size:     1.35rem;
          width:         2.25rem;
          height:        2.25rem;
          display:       grid;
          place-items:   center;
          background:    var(--purple-faint);
          border-radius: 0.5rem;
          flex-shrink:   0;
        }
        .skill-card__name {
          font-family: var(--font-display), serif;
          font-size:   0.92rem;
          font-weight: 600;
        }
        .skill-card__category {
          margin-left:    auto;
          font-size:      0.7rem;
          color:          var(--text-dim);
          font-family: var(--font-mono), serif;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .skill-card__bar-track {
          height:        0.3125rem;  /* 5px */
          background:    var(--surface-hover);
          border-radius: 999px;
          overflow:      hidden;
          margin-bottom: 0.375rem;
        }
        .skill-card__bar-fill {
          height:        100%;
          border-radius: 999px;
          background:    linear-gradient(90deg, var(--purple), var(--purple-light));
          width:         0;
          transition:    width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-card__level {
          display:         flex;
          justify-content: space-between;
          font-size:       0.72rem;
          color:           var(--text-dim);
          font-family: var(--font-mono), serif;
        }
        
        /* Soft skills */
        .skills__soft { margin-top: 0; }
        .skills__soft-title {
          font-family: var(--font-display), serif;
          font-size:      0.78rem;
          font-weight:    600;
          color:          var(--text-muted);
          text-align:     center;
          margin-bottom:  1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .skills__soft-grid {
          display:         flex;
          flex-wrap:       wrap;
          gap:             0.625rem;
          justify-content: center;
        }
        .soft-tag {
          padding:       0.4375rem 1rem;
          border-radius: 999px;
          background:    var(--surface);
          border:        1px solid var(--border-soft);
          font-size:     0.84rem;
          color:         var(--text-muted);
        }
        `;

        return styleNode;
    }

    //browser will run as soon as the component build
    connectedCallback(){
        this.initReveal();
        this.renderSkills();
        this.initSkillFilters();
    };

    renderSkills(filter = 'all') {
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
        
        const grid = this.shadowRoot.getElementById('skillsGrid');
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

    /* ===========================__SKILL FILTERS__=========================== */
    initSkillFilters() {
        const btns = this.shadowRoot.querySelectorAll('.skills__filter-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderSkills(btn.dataset.filter);
            });
        });
    }
    /* ===========================__SCROLL REVEAL (Intersection Observer)__=========================== */
    initReveal() {
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

        this.shadowRoot.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }
    

}

customElements.define('stack-component', StackComponent);