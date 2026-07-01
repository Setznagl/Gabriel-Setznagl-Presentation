// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class FooterComponent extends HTMLElement {
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
        <footer class="footer">
            <div class="container footer__inner">
              <span class="footer__logo"><span class="nav__logo-bracket">&lt;</span>Devznagl<span class="nav__logo-bracket">/&gt;</span></span>
              <span class="footer__copy">© 2026 Gabriel Setznagl · Built with HTML, CSS &amp; JS</span>
              <div class="footer__links">
                <a href="https://github.com/Setznagl" target="_blank" rel="noopener">GitHub</a>
                <a href="https://linkedin.com/in/gabriel-setznagl" target="_blank" rel="noopener">LinkedIn</a>
              </div>
            </div>
        </footer>    
            `;
    }

    CSS() {
        const styleNode = document.createElement('style');
        styleNode.textContent = `
        /* ============================__12. FOOTER__====================================================== */
        .nav__logo-bracket { color: var(--purple-light); }
        
        .footer { border-top: 1px solid var(--border-soft); padding: 1.75rem 0; }
        
        .footer__inner {
          display:         flex;
          align-items:     center;
          justify-content: space-between;
          flex-wrap:       wrap;
          gap:             0.75rem;
        }
        .footer__logo  {
          font-family: var(--font-mono), serif; font-size: 1rem; }
        .footer__copy  { font-size: 0.8rem; color: var(--text-dim); }
        .footer__links { display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); }
        .footer__links a:hover { color: var(--purple-light); text-decoration: none; }
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

customElements.define('footer-component', FooterComponent);