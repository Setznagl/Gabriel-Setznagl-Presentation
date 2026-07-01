// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class ContactComponent extends HTMLElement {
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
        <!-- ===== CONTACT ===== -->
        <section class="section section--alt" id="contact">
          <div class="container">
            <div class="section__header">
              <span class="section__eyebrow">Let's Talk</span>
              <h2 class="section__title">Get in Touch</h2>
              <p class="section__subtitle">Open to fullstack engineering roles, freelance projects, and collaboration.</p>
            </div>
    
            <div class="contact__layout">
              <div class="contact__info">
                <div class="contact__card">
                  <div class="contact__card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <span class="contact__card-label">Email</span>
                    <a href="mailto:devznagl@gmail.com" class="contact__card-value">devznagl@gmail.com</a>
                  </div>
                </div>
                <div class="contact__card">
                  <div class="contact__card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <div>
                    <span class="contact__card-label">LinkedIn</span>
                    <a href="https://linkedin.com/in/gabriel-setznagl" target="_blank" rel="noopener" class="contact__card-value">@gabriel-setznagl</a>
                  </div>
                </div>
                <div class="contact__card">
                  <div class="contact__card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                  <div>
                    <span class="contact__card-label">GitHub</span>
                    <a href="https://github.com/Setznagl" target="_blank" rel="noopener" class="contact__card-value">@Setznagl</a>
                  </div>
                </div>
                <div class="contact__card">
                  <div class="contact__card-icon">📍</div>
                  <div>
                    <span class="contact__card-label">Location</span>
                    <span class="contact__card-value">Londrina, PR — Brazil · Remote-ready</span>
                  </div>
                </div>
              </div>
    
              <form class="contact__form" id="contactForm">
                <div class="form__group">
                  <label class="form__label" for="name">Name</label>
                  <input type="text" id="name" class="form__input" placeholder="Your name" required />
                </div>
                <div class="form__group">
                  <label class="form__label" for="email">Email</label>
                  <input type="email" id="email" class="form__input" placeholder="your@email.com" required />
                </div>
                <div class="form__group">
                  <label class="form__label" for="subject">Subject</label>
                  <input type="text" id="subject" class="form__input" placeholder="What's this about?" />
                </div>
                <div class="form__group">
                  <label class="form__label" for="message">Message</label>
                  <textarea id="message" class="form__input form__textarea" placeholder="Tell me about your project or opportunity..." required></textarea>
                </div>
                <button type="submit" class="btn btn--primary btn--full">Send Message →</button>
                <p class="form__note">This form opens your email client. You can also reach me directly at the email above.</p>
              </form>
            </div>
          </div>
        </section>
            `;

    }

    CSS() {
        const styleNode = document.createElement('style');
        styleNode.textContent = `
        /* ================================================__11. CONTACT__=================================================== */
        .contact__layout {
          display:     grid;
          grid-template-columns: 1fr 1.3fr;
          gap:         3rem;
          align-items: start;
        }
        
        .contact__info {
          display:        flex;
          flex-direction: column;
          gap:            0.875rem;
        }
        .contact__card {
          display:       flex;
          gap:           0.875rem;
          align-items:   flex-start;
          background:    var(--surface);
          border:        1px solid var(--border-soft);
          border-radius: var(--radius);
          padding:       1rem 1.125rem;
          transition:    border-color var(--t);
        }
        .contact__card:hover     { border-color: var(--border); }
        .contact__card-icon      { color: var(--purple-light); flex-shrink: 0; margin-top: 0.0625rem; font-size: 1.3rem; }
        .contact__card-label {
          display:        block;
          font-size:      0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color:          var(--text-dim);
          font-family: var(--font-mono), serif;
          margin-bottom:  0.125rem;
        }
        .contact__card-value     { font-size: 0.9rem; color: var(--text); word-break: break-all; }
        a.contact__card-value:hover { color: var(--purple-light); text-decoration: none; }
        
        .contact__form {
          display:        flex;
          flex-direction: column;
          gap:            1.125rem;
        }
        .form__group {
          display:        flex;
          flex-direction: column;
          gap:            0.375rem;
        }
        .form__label  { font-size: 0.8rem; font-weight: 500; color: var(--text-muted); letter-spacing: 0.02em; }
        .form__input {
          width:         100%;
          background:    var(--surface);
          border:        1px solid var(--border-soft);
          border-radius: var(--radius-sm);
          padding:       0.6875rem 0.875rem;
          color:         var(--text);
          font-family: var(--font-body), serif;
          font-size:     0.9rem;
          outline:       none;
          transition:    border-color var(--t), box-shadow var(--t);
        }
        .form__input::placeholder { color: var(--text-dim); }
        .form__input:focus {
          border-color: var(--purple);
          box-shadow:   0 0 0 0.1875rem var(--purple-faint);
        }
        .form__textarea { resize: vertical; min-height: 8.125rem; }  /* 130px */
        .form__note     { font-size: 0.75rem; color: var(--text-dim); text-align: center; }
            `;

        return styleNode;
    }

    //browser will run as soon as the component build
    connectedCallback(){
        this.initContactForm()
    };

    /* ===========================__CONTACT FORM__=========================== */
    initContactForm() {
        const form = this.shadowRoot.getElementById('contactForm');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = this.shadowRoot.getElementById('name').value;
            const email = this.shadowRoot.getElementById('email').value;
            const subject = this.shadowRoot.getElementById('subject').value || 'Portfolio Contact';
            const message = this.shadowRoot.getElementById('message').value;
            window.location.href = `mailto:devznagl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Gabriel,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
        });
    }

}

customElements.define('contact-component', ContactComponent);