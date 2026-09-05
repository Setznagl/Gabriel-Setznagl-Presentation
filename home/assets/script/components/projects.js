// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class ProjectsComponent extends HTMLElement {
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
        <!-- ===== PROJECTS ===== -->
        <section class="section section--alt" id="projects">
          <div class="container">
            <div class="section__header">
              <span class="section__eyebrow">Work</span>BACKEND
              <h2 class="section__title">Projects</h2>
              <p class="section__subtitle">Personal builds, learning projects, and open-source contributions.</p>
            </div>
    
            <div class="projects__tabs">
              <button class="projects__tab active" data-tab="personal">Personal</button>
              <button class="projects__tab" data-tab="client" id="clientTabBtn" style="display:none;">Client Work</button>
            </div>
    
            <div class="projects__panel active" id="panel-personal">
              <div class="projects__grid">
    
                <div class="project-card">
                  <div class="project-card__img-wrap">
                    <img src="https://placehold.co/600x340/1a1a2e/7c3aed?text=AVA+FullStack+2026" alt="Atlantico Avanti 2026" class="project-card__img" />
                    <div class="project-card__overlay">
                      <a rel="noopener" class="project-card__action">Live ↗</a>
                      <a href="https://github.com/Setznagl/AVA-Full-Stack-2026-Group_04_Project" target="_blank" rel="noopener" class="project-card__action">Code ↗</a>
                    </div>
                  </div>
                  <div class="project-card__body">
                    <div class="project-card__tags">
                      <span class="tag">HTML5</span>
                      <span class="tag">CSS3</span>
                      <span class="tag">JavaScript</span>
                      <span class="tag">TypeScript</span>
                      <span class="tag">Express.js</span>
                      <span class="tag">Prisma ORM</span>
                      <span class="tag">React</span>
                      <span class="tag">PostgreSQL</span>
                      <span class="tag">Docker</span>
                    </div>
                    <h3 class="project-card__title">Bootcamp Atlantico Avanti 2026</h3>
                    <p class="project-card__desc">
                    Group project to conclude the AVA Full-Stack 2026 bootcamp, with a theme chosen by the faculty,
                    focusing on a sports court scheduling system, built using Express.js, Prisma ORM, and React.
                    </p>
                  </div>
                </div>
    
                <div class="project-card">
                  <div class="project-card__img-wrap">
                    <img src="https://placehold.co/600x340/1a1a2e/7c3aed?text=_" alt="" class="project-card__img" />
                    <div class="project-card__overlay">
                      <span class="project-card__action project-card__action--disabled">_</span>
                    </div>
                  </div>
                  <div class="project-card__body">
                    <div class="project-card__tags">
                    </div>
                    <h3 class="project-card__title"></h3>
                    <p class="project-card__desc"></p>
                  </div>
                </div>
    
                <div class="project-card">
                  <div class="project-card__img-wrap">
                    <img src="https://placehold.co/600x340/1a1a2e/7c3aed?text=_" alt="" class="project-card__img" />
                    <div class="project-card__overlay">
                      <span class="project-card__action project-card__action--disabled">_</span>
                    </div>
                  </div>
                  <div class="project-card__body">
                    <div class="project-card__tags">
                    </div>
                    <h3 class="project-card__title"></h3>
                    <p class="project-card__desc"></p>
                  </div>
                </div>
    
              </div>
            </div>
    
            <div class="projects__panel" id="panel-client" style="display:none;">
              <div class="projects__grid">
                <div class="project-card project-card--placeholder">
                  <div class="project-card__placeholder-body">
                    <div class="project-card__placeholder-icon">🔒</div>
                    <h3>Client projects coming soon</h3>
                    <p>Work under NDA or currently in progress. Check back soon.</p>
                  </div>
                </div>
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
           9. PROJECTS
        ============================================================ */
        .projects__tabs {
          display:       flex;
          gap:           0.25rem;
          margin-bottom: 2.25rem;
          border-bottom: 1px solid var(--border-soft);
        }
        .projects__tab {
          padding:       0.625rem 1.375rem;
          font-size:     0.88rem;
          font-weight:   600;
          color:         var(--text-muted);
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition:    color var(--t), border-color var(--t);
        }
        .projects__tab.active { color: var(--purple-light); border-bottom-color: var(--purple-light); }
        
        .projects__panel        { display: none; }
        .projects__panel.active { display: block; }
        
        .projects__grid {
          display:               grid;
          grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));  /* ~320px */
          gap:                   1.5rem;
        }
        
        .project-card {
          background:    var(--surface);
          border:        1px solid var(--border-soft);
          border-radius: var(--radius);
          overflow:      hidden;
          transition:    border-color var(--t), transform var(--t), box-shadow var(--t);
        }
        .project-card:hover {
          border-color: var(--border);
          transform:    translateY(-0.25rem);
          box-shadow:   0 1rem 2.5rem rgba(0,0,0,0.4);
        }
        
        .project-card__img-wrap {
          position:     relative;
          aspect-ratio: 16 / 9;
          overflow:     hidden;
        }
        .project-card__img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-card__img { transform: scale(1.05); }
        
        .project-card__overlay {
          position:        absolute;
          inset:           0;
          background:      rgba(8,8,15,0.75);
          display:         flex;
          align-items:     center;
          justify-content: center;
          gap:             1rem;
          opacity:         0;
          transition:      opacity var(--t);
          backdrop-filter: blur(0.25rem);
        }
        .project-card:hover .project-card__overlay { opacity: 1; }
        
        .project-card__action {
          padding:       0.5rem 1.25rem;
          background:    var(--purple);
          color:         #fff;
          border-radius: var(--radius-sm);
          font-size:     0.85rem;
          font-weight:   600;
          transition:    background var(--t);
        }
        .project-card__action:hover { background: #6d28d9; text-decoration: none; }
        .project-card__action--disabled {
          background: var(--surface-hover);
          color:      var(--text-muted);
          cursor:     default;
        }
        
        .project-card__body { padding: 1.25rem; }
        .project-card__tags {
          display:       flex;
          flex-wrap:     wrap;
          gap:           0.375rem;
          margin-bottom: 0.625rem;
        }
        .tag {
          font-size:      0.72rem;
          font-family: var(--font-mono), serif;
          color:          var(--purple-light);
          background:     var(--purple-faint);
          border:         1px solid var(--border);
          padding:        0.1875rem 0.625rem;
          border-radius:  999px;
        }
        .project-card__title {
          font-family: var(--font-display), serif;
          font-size:     1.05rem;
          font-weight:   700;
          margin-bottom: 0.5rem;
        }
        .project-card__desc { font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; }
        
        .project-card--placeholder .project-card__placeholder-body {
          padding:    3.75rem 1.5rem;
          text-align: center;
        }
        .project-card__placeholder-icon { font-size: 2rem; margin-bottom: 1rem; }
        .project-card--placeholder h3   {
          font-family: var(--font-display), serif; font-size: 1.1rem; margin-bottom: 0.5rem; }
        .project-card--placeholder p    { color: var(--text-muted); font-size: 0.9rem; }
        `;

        return styleNode;
    }

    //browser will run as soon as the component build
    connectedCallback(){
        this.initProjectsTabs();
    };

    /* ===========================__PROJECTS TABS__=========================== */
    initProjectsTabs() {
        const tabs = this.shadowRoot.querySelectorAll('.projects__tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const id = tab.dataset.tab;
                this.shadowRoot.querySelectorAll('.projects__panel').forEach(p => {
                    p.classList.remove('active');
                    p.style.display = 'none';
                });
                const panel = this.shadowRoot.getElementById('panel-' + id);
                if (panel) { panel.style.display = 'block'; panel.classList.add('active'); }
            });
        });
    }
}

customElements.define('projects-component', ProjectsComponent);