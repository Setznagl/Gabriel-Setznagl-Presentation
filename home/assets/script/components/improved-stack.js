// noinspection JSUnusedGlobalSymbols
class ImprovedStackComponent extends HTMLElement {
    static SKILLS = [
        { name: 'Java', icon: '☕', category: 'backend', frequency: 'daily', stage: 'deployed', deployUrl: '#' },
        { name: 'Maven', icon: '📦', category: 'backend', frequency: 'weekly', stage: 'built', deployUrl: '#' },
        { name: 'Hibernate', icon: '🗄', category: 'backend', frequency: 'weekly', stage: 'built', deployUrl: '#' },
        { name: 'Spring Boot', icon: '🌱', category: 'backend', frequency: 'daily', stage: 'deployed', deployUrl: '#' },
        { name: 'Node.js', icon: '🟢', category: 'backend', frequency: 'occasional', stage: 'studied', deployUrl: '#' },
        { name: 'HTML5', icon: '🧱', category: 'frontend', frequency: 'daily', stage: 'deployed', deployUrl: '#' },
        { name: 'CSS3', icon: '🎨', category: 'frontend', frequency: 'weekly', stage: 'deployed', deployUrl: '#' },
        { name: 'JavaScript', icon: '⚡', category: 'frontend', frequency: 'weekly', stage: 'built', deployUrl: '#' },
        { name: 'React', icon: '⚛️', category: 'frontend', frequency: 'occasional', stage: 'built', deployUrl: '#' },
        { name: 'PostgreSQL', icon: '🐘', category: 'database', frequency: 'weekly', stage: 'deployed', deployUrl: '#' },
        { name: 'MySQL', icon: '🗃', category: 'database', frequency: 'occasional', stage: 'studied', deployUrl: '#' },
        { name: 'Git & GitHub', icon: '🔀', category: 'tools', frequency: 'daily', stage: 'deployed', deployUrl: '#' },
        { name: 'Docker', icon: '🐳', category: 'tools', frequency: 'occasional', stage: 'built', deployUrl: '#' },
        { name: 'Postman', icon: '📬', category: 'tools', frequency: 'weekly', stage: 'built', deployUrl: '#' },
        { name: 'JUnit & Mockito', icon: '🧪', category: 'tools', frequency: 'occasional', stage: 'studied', deployUrl: '#' },
    ];

    static STAGES = ['studied', 'built', 'deployed'];

    constructor() {
        super();

        const shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.innerHTML = this.HTML();
        shadowDOM.appendChild(this.CSS());

        const baseCSS = document.createElement('link');
        baseCSS.setAttribute('rel', 'stylesheet');
        baseCSS.setAttribute('href', '../../assets/style/style.css');
        shadowDOM.appendChild(baseCSS);
    }

    HTML() {
        return `
        <!-- ===== IMPROVED SKILLS & STACK ===== -->
        <section class="section" id="skills">
          <div class="container">
            <div class="section__header reveal">
              <span class="section__eyebrow">Expertise</span>
              <h2 class="section__title">Skills &amp; Stack</h2>
              <p class="section__subtitle">Technologies I work with — organized by usage and hands-on evidence.</p>
            </div>

            <div class="skills__filter" role="group" aria-label="Filter technologies by category">
              <button class="skills__filter-btn active" type="button" data-filter="all" aria-pressed="true">All</button>
              <button class="skills__filter-btn" type="button" data-filter="backend" aria-pressed="false">Backend</button>
              <button class="skills__filter-btn" type="button" data-filter="frontend" aria-pressed="false">Frontend</button>
              <button class="skills__filter-btn" type="button" data-filter="database" aria-pressed="false">Database</button>
              <button class="skills__filter-btn" type="button" data-filter="tools" aria-pressed="false">Tools &amp; DevOps</button>
            </div>

            <div class="skills__grid" id="skillsGrid" aria-live="polite"></div>

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
        </section>`;
    }

    CSS() {
        const styleNode = document.createElement('style');
        styleNode.textContent = `
        .skills__filter {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .skills__filter-btn {
          padding: 0.4375rem 1.125rem;
          border: 1px solid var(--border-soft);
          border-radius: 999px;
          color: var(--text-muted);
          font-size: 0.83rem;
          font-weight: 500;
          transition: color var(--t), border-color var(--t), background var(--t), box-shadow var(--t);
        }

        .skills__filter-btn:hover { color: var(--text); border-color: var(--border); }
        .skills__filter-btn.active {
          color: #fff;
          background: var(--purple);
          border-color: var(--purple);
          box-shadow: 0 0 1rem rgba(124, 58, 237, 0.22);
        }

        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.875rem;
          margin-bottom: 3.5rem;
        }

        .skill-card {
          position: relative;
          min-width: 0;
          padding: 0.875rem 1rem 0.875rem 1.35rem;
          overflow: hidden;
          background: linear-gradient(135deg, var(--surface), rgba(19, 19, 31, 0.82));
          border: 1px solid var(--border-soft);
          border-radius: var(--radius);
          transition: border-color var(--t), transform var(--t), box-shadow var(--t);
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0.5rem;
          bottom: 0.5rem;
          left: 0.42rem;
          width: 0.25rem;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--purple-light), var(--purple));
          box-shadow: 0 0 0.75rem var(--purple-glow);
        }

        .skill-card:hover {
          border-color: var(--border);
          transform: translateY(-0.125rem);
          box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.22);
        }

        .skill-card__head {
          display: grid;
          grid-template-columns: 2rem minmax(0, 1fr) auto;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 0.5rem;
        }

        .skill-card__icon {
          display: grid;
          width: 2rem;
          height: 2rem;
          place-items: center;
          flex-shrink: 0;
          background: var(--purple-faint);
          border-radius: 0.45rem;
          font-size: 1.15rem;
          line-height: 1;
        }

        .skill-card__name {
          min-width: 0;
          overflow: hidden;
          color: var(--text);
          font-family: var(--font-display), serif;
          font-size: 0.9rem;
          font-weight: 600;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .skill-card__category,
        .skill-card__frequency-label {
          color: var(--text-dim);
          font-family: var(--font-mono), serif;
          font-size: 0.625rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .skill-card__usage {
          display: grid;
          grid-template-columns: auto minmax(2.75rem, 1fr) auto;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 0.625rem;
          color: var(--text-muted);
          font-size: 0.72rem;
        }

        .skill-card__pips { display: flex; gap: 0.28rem; }
        .skill-card__pip {
          width: 0.48rem;
          height: 0.48rem;
          border-radius: 50%;
          background: rgba(136, 136, 170, 0.28);
        }

        .skill-card[data-frequency='daily'] .skill-card__pip.is-active { background: #22c55e; box-shadow: 0 0 0.4rem rgba(34, 197, 94, 0.32); }
        .skill-card[data-frequency='weekly'] .skill-card__pip.is-active { background: var(--purple-light); box-shadow: 0 0 0.4rem rgba(167, 139, 250, 0.3); }
        .skill-card[data-frequency='occasional'] .skill-card__pip.is-active { background: #f59e0b; box-shadow: 0 0 0.4rem rgba(245, 158, 11, 0.28); }
        .skill-card[data-frequency='daily'] .skill-card__frequency-label { color: #22c55e; }
        .skill-card[data-frequency='weekly'] .skill-card__frequency-label { color: var(--purple-light); }
        .skill-card[data-frequency='occasional'] .skill-card__frequency-label { color: #f59e0b; }

        .skill-card__evidence {
          display: grid;
          grid-template-columns: auto minmax(0.75rem, 1fr) auto minmax(0.75rem, 1fr) auto 1.25rem;
          align-items: center;
          gap: 0.35rem;
        }

        .skill-card__stage {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          min-width: 0;
          color: var(--text-dim);
          font-family: var(--font-mono), serif;
          font-size: 0.57rem;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .skill-card__stage svg { width: 0.9rem; height: 0.9rem; flex-shrink: 0; }
        .skill-card__stage.is-reached { color: var(--purple-light); }
        .skill-card__stage.is-current { text-shadow: 0 0 0.6rem var(--purple-glow); }

        .skill-card__connector {
          height: 1px;
          background: rgba(136, 136, 170, 0.28);
        }
        .skill-card__connector.is-reached {
          background: linear-gradient(90deg, var(--purple-light), var(--purple));
          box-shadow: 0 0 0.35rem var(--purple-glow);
        }

        .skill-card__deploy-link,
        .skill-card__deploy-disabled {
          display: grid;
          width: 1.25rem;
          height: 1.25rem;
          place-items: center;
          justify-self: end;
          border-radius: 0.25rem;
        }
        .skill-card__deploy-link { color: var(--purple-light); transition: color var(--t), background var(--t); }
        .skill-card__deploy-link:hover { color: #fff; background: var(--purple-faint); text-decoration: none; }
        .skill-card__deploy-disabled { color: var(--text-dim); opacity: 0.55; cursor: not-allowed; }
        .skill-card__deploy-link svg,
        .skill-card__deploy-disabled svg { width: 0.9rem; height: 0.9rem; }

        .skills__soft-title {
          margin-bottom: 1.25rem;
          color: var(--text-muted);
          font-family: var(--font-display), serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-align: center;
          text-transform: uppercase;
        }
        .skills__soft-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.625rem; }
        .soft-tag {
          padding: 0.4375rem 1rem;
          color: var(--text-muted);
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 999px;
          font-size: 0.84rem;
        }

        @media (max-width: 900px) {
          .skills__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 700px) {
          .skills__grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 425px) {
          .skill-card { padding-right: 0.8rem; }
          .skill-card__head { grid-template-columns: 1.8rem minmax(0, 1fr) auto; gap: 0.45rem; }
          .skill-card__icon { width: 1.8rem; height: 1.8rem; }
          .skill-card__evidence { gap: 0.22rem; }
          .skill-card__stage { gap: 0.2rem; font-size: 0.51rem; }
          .skill-card__stage svg { width: 0.78rem; height: 0.78rem; }
        }
        `;

        return styleNode;
    }

    connectedCallback() {
        this.renderSkills();
        this.initSkillFilters();
        this.initReveal();
    }

    renderSkills(filter = 'all') {
        const grid = this.shadowRoot.getElementById('skillsGrid');
        if (!grid) return;

        const skills = filter === 'all'
            ? ImprovedStackComponent.SKILLS
            : ImprovedStackComponent.SKILLS.filter(skill => skill.category === filter);

        grid.innerHTML = skills.map(skill => this.skillCard(skill)).join('');

        requestAnimationFrame(() => {
            grid.querySelectorAll('.reveal').forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.04}s`;
                requestAnimationFrame(() => card.classList.add('visible'));
            });
        });
    }

    skillCard(skill) {
        const currentStage = ImprovedStackComponent.STAGES.indexOf(skill.stage);
        const frequencyStrength = { daily: 3, weekly: 2, occasional: 1 }[skill.frequency];

        const stages = ImprovedStackComponent.STAGES.map((stage, index) => {
            const classes = [
                'skill-card__stage',
                index <= currentStage ? 'is-reached' : '',
                index === currentStage ? 'is-current' : '',
            ].filter(Boolean).join(' ');

            return `<span class="${classes}">${this.stageIcon(stage)}<span>${stage}</span></span>`;
        });

        const deployControl = skill.stage === 'deployed'
            ? `<a class="skill-card__deploy-link" href="${skill.deployUrl}" aria-label="Open ${skill.name} deployment" title="Open deployment">${this.externalLinkIcon()}</a>`
            : `<span class="skill-card__deploy-disabled" role="img" aria-label="Deployment unavailable" title="Deployment unavailable">${this.externalLinkIcon()}</span>`;

        return `
        <article class="skill-card reveal" data-category="${skill.category}" data-frequency="${skill.frequency}">
          <div class="skill-card__head">
            <span class="skill-card__icon" aria-hidden="true">${skill.icon}</span>
            <h3 class="skill-card__name">${skill.name}</h3>
            <span class="skill-card__category">${skill.category}</span>
          </div>
          <div class="skill-card__usage">
            <span>Usage</span>
            <span class="skill-card__pips" aria-hidden="true">
              ${[1, 2, 3].map(pip => `<span class="skill-card__pip ${pip <= frequencyStrength ? 'is-active' : ''}"></span>`).join('')}
            </span>
            <span class="skill-card__frequency-label">${skill.frequency}</span>
          </div>
          <div class="skill-card__evidence" aria-label="Hands-on evidence: ${skill.stage}">
            ${stages[0]}
            <span class="skill-card__connector ${currentStage >= 1 ? 'is-reached' : ''}" aria-hidden="true"></span>
            ${stages[1]}
            <span class="skill-card__connector ${currentStage >= 2 ? 'is-reached' : ''}" aria-hidden="true"></span>
            ${stages[2]}
            ${deployControl}
          </div>
        </article>`;
    }

    stageIcon(stage) {
        const icons = {
            studied: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4.5A3.5 3.5 0 0 1 5.5 1H11v18H5.5A3.5 3.5 0 0 0 2 22.5z"/><path d="M22 4.5A3.5 3.5 0 0 0 18.5 1H13v18h5.5a3.5 3.5 0 0 1 3.5 3.5z"/></svg>',
            built: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5-5l2.1 2.1-8.4 8.4a2 2 0 0 0 2.8 2.8l8.4-8.4z"/><path d="m12 14 6.5 6.5a2 2 0 0 0 2.8-2.8L14.8 11"/></svg>',
            deployed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.8-.9.8-2.3-.1-3.1a2.2 2.2 0 0 0-2.9.1z"/><path d="m9 15-3-3s.5-1.5 2-3c1.5-1.5 5-2 5-2l4 4s-.5 3.5-2 5c-1.5 1.5-3 2-3 2z"/><path d="M13 7c0-2 2-4 6-4 0 4-2 6-4 6"/><path d="M9 15H4v-4"/><path d="M12 18v-5"/></svg>',
        };
        return icons[stage];
    }

    externalLinkIcon() {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';
    }

    initSkillFilters() {
        const buttons = this.shadowRoot.querySelectorAll('.skills__filter-btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(item => {
                    const active = item === button;
                    item.classList.toggle('active', active);
                    item.setAttribute('aria-pressed', String(active));
                });
                this.renderSkills(button.dataset.filter);
            });
        });
    }

    initReveal() {
        const header = this.shadowRoot.querySelector('.section__header');
        if (!header) return;

        if (!('IntersectionObserver' in window)) {
            header.classList.add('visible');
            return;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        observer.observe(header);
    }
}

customElements.define('improved-stack-component', ImprovedStackComponent);
