// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class TimelineComponent extends HTMLElement {
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
        <!-- ===== EXPERIENCE ===== -->
        <section class="section" id="experience">
          <div class="container">
            <div class="section__header">
              <span class="section__eyebrow">Journey</span>
              <h2 class="section__title">Experience</h2>
              <p class="section__subtitle">From tech support to engineering — the path so far.</p>
            </div>
    
            <div class="timeline">
              <div class="timeline__item">
                <div class="timeline__dot"></div>
                <div class="timeline__content">
                  <div class="timeline__meta">
                    <span class="timeline__date">May 2025 — Present</span>
                    <span class="timeline__badge timeline__badge--active">Current</span>
                  </div>
                  <h3 class="timeline__role">Bilingual Service Desk Agent</h3>
                  <span class="timeline__company">Tata Consultancy Services · Night Shift</span>
                  <ul class="timeline__list">
                    <li>All support conducted in English (B2 level)</li>
                    <li>Helpdesk environment for a nuclear energy customer</li>
                    <li>Call handling and backlog ticket management</li>
                    <li>Ticket escalation according to priority rulesets</li>
                    <li>Windows and MS Office repairs and instructions</li>
                  </ul>
                </div>
              </div>
    
              <div class="timeline__item">
                <div class="timeline__dot"></div>
                <div class="timeline__content">
                  <div class="timeline__meta">
                    <span class="timeline__date">Dec 2023 — Apr 2025</span>
                  </div>
                  <h3 class="timeline__role">Service Desk Analyst N1</h3>
                  <span class="timeline__company">Atos</span>
                  <ul class="timeline__list">
                    <li>Helpdesk support for audit customer environment</li>
                    <li>Call handling and backlog ticket management</li>
                    <li>Zero trust policy enforcement for software, network &amp; website use</li>
                    <li>Windows and MS Office troubleshooting</li>
                  </ul>
                </div>
              </div>
    
              <div class="timeline__item">
                <div class="timeline__dot"></div>
                <div class="timeline__content">
                  <div class="timeline__meta">
                    <span class="timeline__date">Apr 2022 — Oct 2023</span>
                  </div>
                  <h3 class="timeline__role">Tech Consultancy &amp; Salesperson Lead</h3>
                  <span class="timeline__company">C&amp;A</span>
                  <ul class="timeline__list">
                    <li>Mobile hardware consultancy and B2C sales</li>
                    <li>Contributed to database-related issue resolution</li>
                    <li>Star of the Month · Store 2nd best result in Paraná (2023)</li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div class="education">
              <h3 class="education__title">Education &amp; Training</h3>
              <div class="education__grid">
                <div class="edu-card">
                  <div class="edu-card__icon">🎓</div>
                  <div><strong>Software Engineering</strong><span>Anhanguera Ampli · In progress</span></div>
                </div>
                <div class="edu-card">
                  <div class="edu-card__icon">🤖</div>
                  <div><strong>Artificial Intelligence </strong><span>PUC · In progress</span></div>
                </div>
                <div class="edu-card">
                  <div class="edu-card__icon">☕</div>
                  <div><strong>Java Academy</strong><span>Atos-UFN · Solid Java, JDBC, Hibernate, Spring, Angular, Docker</span></div>
                </div>
                <div class="edu-card">
                  <div class="edu-card__icon">🖥</div>
                  <div><strong>Codifica Fullstack +PraTi 2024</strong><span>Data Structures · React · NodeJS · HTML/CSS/JS</span></div>
                </div>
                <div class="edu-card">
                  <div class="edu-card__icon">⚡</div>
                  <div><strong>Ada Tech — Cognizant Diversability</strong><span>Java IO/NIO · Concurrency · JUnit &amp; Mockito</span></div>
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
        .timeline {
          position:      relative;
          padding-left:  1.5rem;
          margin-bottom: 4rem;
        }
        .timeline::before {
          content:    '';
          position:   absolute;
          left: 0; top: 0.5rem; bottom: 0.5rem;
          width:      1px;
          background: linear-gradient(to bottom, var(--purple), transparent);
        }
        
        .timeline__item {
          position:       relative;
          padding-left:   2.25rem;
          padding-bottom: 3rem;
        }
        .timeline__item:last-child { padding-bottom: 0; }
        
        .timeline__dot {
          position:      absolute;
          left:          -1.8125rem;  /* aligns with the ::before line */
          top:           0.5rem;
          width:         0.625rem;
          height:        0.625rem;
          border-radius: 50%;
          background:    var(--purple);
          border:        2px solid var(--bg);
          box-shadow:    0 0 0.625rem var(--purple-glow);
        }
        
        .timeline__meta {
          display:       flex;
          align-items:   center;
          gap:           0.75rem;
          margin-bottom: 0.375rem;
        }
        .timeline__date {
          font-family: var(--font-mono), serif;
          font-size:   0.78rem;
          color:       var(--text-dim);
        }
        .timeline__badge {
          font-size:      0.68rem;
          font-weight:    600;
          padding:        0.125rem 0.625rem;
          border-radius:  999px;
          font-family: var(--font-mono), serif;
          letter-spacing: 0.06em;
        }
        .timeline__badge--active {
          background: rgba(34,197,94,0.12);
          color:      #22c55e;
          border:     1px solid rgba(34,197,94,0.3);
        }
        
        .timeline__role {
          font-family: var(--font-display), serif;
          font-size:     1.1rem;
          font-weight:   700;
          margin-bottom: 0.25rem;
        }
        .timeline__company {
          display:       block;
          font-size:     0.875rem;
          color:         var(--purple-light);
          margin-bottom: 0.875rem;
        }
        .timeline__list li {
          font-size:  0.875rem;
          color:      var(--text-muted);
          padding:    0.25rem 0 0.25rem 0.875rem;
          position:   relative;
        }
        .timeline__list li::before {
          content:   '→';
          position:  absolute;
          left:      0;
          color:     var(--purple);
          font-size: 0.75rem;
        }
        
        /* Education */
        .education        { margin-top: 0; }
        .education__title {
          font-family: var(--font-display), serif;
          font-size:     1.2rem;
          font-weight:   700;
          margin-bottom: 1.25rem;
        }
        .education__grid {
          display:               grid;
          grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));  /* ~280px */
          gap:                   0.75rem;
        }
        .edu-card {
          display:       flex;
          gap:           0.875rem;
          align-items:   flex-start;
          background:    var(--surface);
          border:        1px solid var(--border-soft);
          border-radius: var(--radius);
          padding:       1rem 1.125rem;
          transition:    border-color var(--t);
        }
        .edu-card:hover       { border-color: var(--border); }
        .edu-card__icon       { font-size: 1.4rem; flex-shrink: 0; margin-top: 0.125rem; }
        .edu-card strong      { display: block;
          font-family: var(--font-display), serif; font-size: 0.92rem; font-weight: 600; margin-bottom: 0.1875rem; }
        .edu-card span        { font-size: 0.8rem; color: var(--text-muted); }
            `;

        return styleNode;
    }

    //browser will run as soon as the component build
    connectedCallback(){
        this.builder();
    };

    builder() {
        return `insert builder script here!`
    }

}

customElements.define('timeline-component', TimelineComponent);