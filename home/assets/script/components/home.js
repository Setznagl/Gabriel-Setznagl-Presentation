// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class HomeComponent extends HTMLElement {
    constructor() {
        super();

        const shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.innerHTML = this.HTML();
        shadowDOM.appendChild(this.CSS());
        
        const base_CSS_patterns = document.createElement('link');
            let path = "../../assets/style/style.css";
            base_CSS_patterns.setAttribute('rel', 'stylesheet');
            base_CSS_patterns.setAttribute('href', path);
            shadowDOM.appendChild(base_CSS_patterns);
    }

    HTML() {
        // noinspection HtmlUnknownAnchorTarget
        return  `
        <!-- ===== HOME ===== -->
        <section class="section hero" id="home">
          <div class="hero__bg-grid"></div>
          <div class="hero__glow"></div>
          <div class="container hero__container">
            <div class="hero__tag">Available for new opportunities</div>
            <h1 class="hero__name">Gabriel<br /><span class="hero__name--accent">Setznagl</span></h1>
            <p class="hero__role">
              <span class="typed-text" id="typedText"></span><span class="typed-cursor">|</span>
            </p>
            <p class="hero__bio">
              Fullstack Engineer (Java + React) in career transition — building scalable systems
              with hands-on experience in DevOps, CI/CD pipelines, Cloud Computing and AI-assisted development.
              <br>
              Bachelor's degree in Software Engineering at Anhanguera Ampli.
              Currently, pursuing an Associate Degree for Applied Artificial Intelligence at PUC-PR.
            </p>
            <div class="hero__cta">
              <a href="#projects" class="btn btn--primary">View Projects</a>
              <a href="#contact"  class="btn btn--outline">Get in Touch</a>
            </div>
            <div class="hero__links">
              <a href="https://github.com/Setznagl" target="_blank" rel="noopener" class="hero__social" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://linkedin.com/in/gabriel-setznagl" target="_blank" rel="noopener" class="hero__social" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:devznagl@gmail.com" class="hero__social" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
          <div class="hero__scroll-hint">
            <span>scroll</span>
            <div class="hero__scroll-line"></div>
          </div>
        </section>
        `;

    }

    CSS() {
        const styleNode = document.createElement('style');
        styleNode.textContent = `
        /* ============================================================
           7. HERO
        ============================================================ */
        .hero {
          position:    relative;
          min-height:  100vh;
          padding-top: var(--nav-h);
          overflow:    hidden;
          display:     flex;
          align-items: center;
        }
        
        /* Decorative grid + glow — purely visual */
        .hero__bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px);
          background-size: 3.75rem 3.75rem;   /* 60px */
          mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }
        .hero__glow {
          position:      absolute;
          top:           -20%;
          left:          50%;
          transform:     translateX(-50%);
          width:         43.75rem;  /* 700px */
          height:        43.75rem;
          background:    radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        
        .hero__container {
          position:  relative;
          z-index:   1;
          padding:   3.75rem 1.5rem;  /* 60px 24px */
        }
        
        .hero__tag {
          display:        inline-flex;
          align-items:    center;
          gap:            0.5rem;
          font-family: var(--font-mono), serif;
          font-size:      0.78rem;
          color:          var(--purple-light);
          border:         1px solid var(--border);
          background:     var(--purple-faint);
          padding:        0.375rem 0.875rem;
          border-radius:  999px;
          margin-bottom:  1.75rem;
          letter-spacing: 0.04em;
        }
        .hero__tag::before {
          content:       '';
          width:         0.4375rem;  /* 7px */
          height:        0.4375rem;
          background:    #22c55e;
          border-radius: 50%;
          animation:     pulse-dot 2s infinite;
        }
        @keyframes pulse-dot { 0%,100%{ opacity:1 } 50%{ opacity:0.4 } }
        
        .hero__name {
          font-family: var(--font-display), serif;
          font-size:      clamp(3rem, 9vw, 7rem);
          font-weight:    700;
          line-height:    0.95;
          letter-spacing: -0.04em;
          margin-bottom:  1.25rem;
        }
        .hero__name--accent { color: var(--purple-light); }
        
        .hero__role {
          font-family: var(--font-mono), serif;
          font-size:     clamp(0.9rem, 2.5vw, 1.2rem);
          color:         var(--text-muted);
          margin-bottom: 1.5rem;
          height:        2em;
        }
        .typed-cursor {
          display:   inline-block;
          color:     var(--purple-light);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50%{ opacity:0 } }
        
        .hero__bio {
          max-width:     35rem;
          color:         var(--text-muted);
          font-size:     1rem;
          margin-bottom: 2.25rem;
          line-height:   1.7;
        }
        
        .hero__cta {
          display:       flex;
          gap:           0.875rem;
          flex-wrap:     wrap;
          margin-bottom: 2.5rem;
        }
        
        .hero__links {
          display: flex;
          gap:     0.75rem;
        }
        .hero__social {
          display:       grid;
          place-items:   center;
          width:         2.625rem;  /* 42px */
          height:        2.625rem;
          border-radius: var(--radius-sm);
          border:        1px solid var(--border-soft);
          color:         var(--text-muted);
          transition:    all var(--t);
        }
        .hero__social:hover {
          color:           var(--purple-light);
          border-color:    var(--border);
          background:      var(--purple-faint);
          text-decoration: none;
        }
        
        .hero__scroll-hint {
          position:  absolute;
          bottom:    2rem;
          left:      50%;
          transform: translateX(-50%);
          display:   flex;
          flex-direction: column;
          align-items: center;
          gap:         0.5rem;
          color:       var(--text-dim);
          font-size:   0.7rem;
          font-family: var(--font-mono), serif;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero__scroll-line {
          width:      1px;
          height:     2.5rem;  /* 40px */
          background: linear-gradient(to bottom, var(--purple-light), transparent);
          animation:  scroll-line 2s ease-in-out infinite;
        }
        @keyframes scroll-line { 0%,100%{ opacity:0.4 } 50%{ opacity:1 } }
        `;

        return styleNode;
    }

    //browser will run as soon as the component build
    connectedCallback(){
        this.builder();
    };

    builder() {
        /* ===========================TYPED TEXT=========================== */
        const ROLES = [
            'Fullstack Engineer',
            'Java + React Developer',
            'DevOps Enthusiast',
            'Builder Propelled by AI ',
        ];
        
        const el = this.shadowRoot.getElementById('typedText');
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
        }tick();

        this.shadowRoot.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
    }

    
}

customElements.define('home-component', HomeComponent);

