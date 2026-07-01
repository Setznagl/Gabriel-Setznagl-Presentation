// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class HeaderComponent extends HTMLElement {
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
        
        // Don't add the script to the shadow DOM, JS() doesn't work, only read DOM tree elements!
    }

    HTML() {
        // noinspection HtmlUnknownAnchorTarget
        return `
              <header class="nav" id="navbar">
                <div class="container">
                 <div class="nav__logo">
                  <span class="nav__logo-bracket">&lt;</span>Devznagl<span class="nav__logo-bracket">/&gt;</span>
                 </div>
                <nav class="nav__links" id="navLinks">
                  <a href="#home"       class="nav__link active" data-section="home">Home</a>
                  <a href="#skills"     class="nav__link"        data-section="skills">Skills</a>
                  <a href="#projects"   class="nav__link"        data-section="projects">Projects</a>
                  <a href="#experience" class="nav__link"        data-section="experience">Experience</a>
                  <a href="#contact"    class="nav__link"        data-section="contact">Contact</a>
                </nav>
                 <button class="nav__burger" id="navBurger" aria-label="Menu">
                  <span></span><span></span><span></span>
                 </button>
                </div>
              </header>
              
              <div class="mobile-menu" id="mobileMenu">
                <a href="#home" class="mobile-menu__link">Home</a>
                <a href="#skills" class="mobile-menu__link">Skills</a>
                <a href="#projects" class="mobile-menu__link">Projects</a>
                <a href="#experience" class="mobile-menu__link">Experience</a>
                <a href="#contact" class="mobile-menu__link">Contact</a>
              </div>
        `;
    }

    CSS() {
        const styleNode = document.createElement("style");
        styleNode.textContent = `
        .nav {
          position:        fixed;    /* ======================__ADD REVEAL TO STATIC ELEMENTS__=========================== */
    addRevealClasses() {
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
            this.shadowRoot.querySelectorAll(sel).forEach((el, i) => {
                el.classList.add('reveal');
                el.style.transitionDelay = (i * 0.07) + 's';
            });
        });
    }
          top: 0; left: 0; right: 0;
          height:          var(--nav-h);
          display:         flex;
          align-items:     center;
          justify-content: center;
          z-index:         100;
          background:      rgba(8, 8, 15, 0.7);
          backdrop-filter: blur(1rem);
          border-bottom:   1px solid var(--border-soft);
          transition:      background var(--t);
        }
        .nav.scrolled { background: rgba(8, 8, 15, 0.95); }
        
        .nav > .container {
          display:         flex;
          align-items:     center;
          justify-content: space-between;
          width:           100%;
          padding:         0 2rem;
        }
        
        .nav__logo {
          font-family: var(--font-mono), serif;
          font-size:      1.1rem;
          font-weight:    500;
          letter-spacing: 0.02em;
          flex-shrink:    0;
        }
        .nav__logo-bracket { color: var(--purple-light); }
        
        .nav__links {
          display:         flex;
          align-items:     center;
          gap:             0.25rem;
          flex:            1;
          justify-content: flex-end;
        }
        .nav__link {
          font-size:     0.875rem;
          font-weight:   500;
          color:         var(--text-muted);
          padding:       0.375rem 0.875rem;
          border-radius: var(--radius-sm);
          transition:    color var(--t), background var(--t);
        }
        .nav__link:hover,
        .nav__link.active { color: var(--text); background: var(--purple-faint); }
        .nav__link.active { color: var(--purple-light); }
        
        .mobile-menu {
          display:         none;
          position:        fixed;
          top:             var(--nav-h);
          left: 0; right: 0;
          flex-direction:  column;
          background:      rgba(8, 8, 15, 0.97);
          backdrop-filter: blur(1.25rem);
          border-bottom:   1px solid var(--border-soft);
          padding:         1rem 0;
          z-index:         99;
        }
        
        .mobile-menu.open { display: flex; }

        .mobile-menu__link {
          padding:     0.875rem 2rem;
          font-size:   1rem;
          font-weight: 500;
          color:       var(--text-muted);
          text-align:  center;
          transition:  color var(--t), background var(--t);
          display:     block;
          text-decoration: none;
        }
        
        .mobile-menu__link:hover { 
          color:      var(--text); 
          background: var(--purple-faint); 
        }
        
        .nav__burger {
          display:        none;
          flex-direction: column;
          gap:            0.3125rem;
          padding:        0.25rem;
          margin-left:    1rem;
          background:     none;
          border:         none;
          cursor:         pointer;
        }
        .nav__burger span {
          display:       block;
          width:         1.375rem;
          height:        0.125rem;
          background:    var(--text);
          border-radius: 0.125rem;
          transition:    var(--t);
        }
        .nav__burger.open span:nth-child(1) { 
          transform: translateY(0.4375rem) rotate(45deg); 
        }
        .nav__burger.open span:nth-child(2) { 
          opacity: 0; 
        }
        .nav__burger.open span:nth-child(3) { 
          transform: translateY(-0.4375rem) rotate(-45deg); 
        }
        
        @media (max-width: 768px) {
          .nav__burger { display: flex; }
          .nav__links { display: none; }
        }
        `;

        return styleNode;
    }
    
    /*
    ////////////////////////////////////////__IMPORTANT__///////////////////////////////////////////////////////////////
    A function named "connectedCallback", "disconnectedCallback", or "attributeChangedCallback"
    will be automatically called by the browser when the component is added, removed, modified, or moved within the DOM. 
    
    This allows you to use the function to execute the component's JavaScript,
    such as adding event listeners, manipulating the DOM, etc.
    */
    connectedCallback() {
        // Automatically executed when the component is added to the DOM
        this.builder();
    };

    builder() {
        const burger = this.shadowRoot.getElementById('navBurger');
        const menu = this.shadowRoot.getElementById('mobileMenu');
        const navbar = this.shadowRoot.getElementById('navbar');
        const links = this.shadowRoot.querySelectorAll('.nav__link');
        const sections = document.querySelectorAll('section[id]');

        if (!navbar || !burger || !menu) return;

        // Scroll listener
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
        
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            menu.classList.toggle('open');
        });
        
        this.shadowRoot.querySelectorAll('.nav__link, .mobile-menu__link').forEach(l => {
            l.addEventListener('click', () => {
                menu.classList.remove('open');
                burger.classList.remove('open');
            });
        });
    }
    
    
}

customElements.define('header-component', HeaderComponent);