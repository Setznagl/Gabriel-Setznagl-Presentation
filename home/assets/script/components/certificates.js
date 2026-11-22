// noinspection JSUnusedGlobalSymbols
class CertificatesComponent extends HTMLElement {
    // Single source of truth; filter counts and cards are derived from this array.
    static COURSES = [
        { platform: 'Other Sources', title: '7th UFN Java Academy', desc: 'Professional Java fundamentals academy', tags: ['Java', 'Backend'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Icons/other/Certificado_S%C3%A9tima_Academia_Java_UFN_logo.png', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Other%20Sources/Certificado_Setima_Academia_Java_UFN.pdf' },
        { platform: 'Other Sources', title: '+PraTi Program', desc: 'Technology training program', tags: ['Technology', 'Professional Training'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Icons/other/%2Bprati.jpg', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Other%20Sources/MaisPraTi.jpg' },
        { platform: 'Other Sources', title: 'Cognizant Diversability', desc: 'Professional development program', tags: ['Inclusion', 'Technology'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Icons/other/cognizant_logo.jpeg', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Other%20Sources/cognizant-diversability.jpeg' },
        { platform: 'Other Sources', title: 'Avanti Bootcamp 2026', desc: 'Technology bootcamp', tags: ['Technology', 'Bootcamp'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Icons/other/avanti-icon.jpg', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Other%20Sources/avanti-2026.pdf' },
        { platform: 'Digital Innovation One', title: 'Microsoft Azure AI Fundamentals', desc: 'Cloud and artificial intelligence fundamentals', tags: ['Azure', 'AI-900', 'Cloud'], cover: 'https://assets.dio.me/xaR8tVsVrumv6mqTBDp6ZgDZ3g0s8t2ceeqlEYKL3iw/f:webp/q:80/w:120/L3RyYWNrcy80ZDk5OGQ1Yy0zNmMxLTQ5N2ItOGRhMC04ZGI0NjVjODIwZWIucG5n', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Digital%20Inovation%20One/Bootcamp%20Azure%20AI900/Microsoft%20Azure%20AI%20Fundamentals.pdf' },
        { platform: 'Digital Innovation One', title: 'Riachuelo Java Bootcamp 2025', desc: 'Java development from fundamentals to persistence', tags: ['Java', 'OOP', 'Git', 'SQL'], cover: 'https://assets.dio.me/tHhAiI_xe0xWE05MWDOdvIEJOy5NVV_rWyLxTy1lKWs/f:webp/q:80/w:120/L3RyYWNrcy83NTUyMmVmNi00Y2RjLTQzNjktYWUwYy0zMGNmNjhjZDM3ZDcucG5n', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Digital%20Inovation%20One/Bootcamp%20Riachuelo%20Java%202025/certificate.jpg' },
        { platform: 'Digital Innovation One', title: 'Linux Fundamentals 2025', desc: 'Linux system and command-line fundamentals', tags: ['Linux', 'CLI', 'System Administration'], cover: 'https://assets.dio.me/BCMnGR0bzZjAUV-Uy9FyBqQH7amT0LyP24TNAmEvgMU/f:webp/q:80/w:120/L3RyYWNrcy9kMzNlZTljMy04YTM0LTQ5MTMtOGJmYS1kMjFiZGMyMTA5YjAucG5n', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Digital%20Inovation%20One/Linux%20Fundamentals%202025/certificate.png' },
        { platform: 'Udemy', title: 'Power Apps Essential', desc: 'Business application development with Microsoft Power Platform', tags: ['Power Apps', 'Low-code'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Udemy/powerapps-essencial-wagner-cardoso.jpg', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Udemy/powerapps-essencial-wagner-cardoso.jpg' },
        { platform: 'Udemy', title: 'Power Automate Basics', desc: 'Workflow automation with Microsoft Power Platform', tags: ['Power Automate', 'Workflow Automation'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Udemy/powerautomate-basics-marcos-adriani-peres.jpg', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Udemy/powerautomate-basics-marcos-adriani-peres.jpg' },
        { platform: 'Udemy', title: 'Docker Fundamentals', desc: 'Core Docker toolkit and how to use Docker Swarm', tags: ['DevOps', 'Docker'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Udemy/docker-project-based-approach-udemy.png', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Udemy/docker-project-based-approach-udemy.png' },
        { platform: 'Alura', title: 'LLMs with LangChain', desc: 'Oracle ONE · Certificate 1', tags: ['AI', 'Python', 'LangChain', 'Gemini'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Icons/other/oracle-ne-logo.png', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Alura/Alura-Oracle-One-1.pdf' },
        { platform: 'Alura', title: 'LLMs with LangGraph & n8n', desc: 'Oracle ONE · Certificate 2', tags: ['AI', 'Python', 'LangGraph', 'n8n'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Icons/other/oracle-ne-logo.png', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Alura/Alura-Oracle-One-2.pdf' },
        { platform: 'Alura', title: 'RAG with AI agents', desc: 'Oracle ONE · Certificate 3', tags: ['AI', 'RAG', 'Agents'], cover: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Icons/other/oracle-ne-logo.png', cert: 'https://raw.githubusercontent.com/Setznagl/Setznagl/main/Assets/Certificates/Alura/Alura-Oracle-One-3.pdf' },
    ];

    constructor() {
        super();

        const shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.innerHTML = this.HTML();
        shadowDOM.appendChild(this.CSS());

        const baseCSS = document.createElement('link');
        baseCSS.setAttribute('rel', 'stylesheet');
        baseCSS.setAttribute('href', '../../assets/style/style.css');
        shadowDOM.appendChild(baseCSS);

        this.bindFilters(shadowDOM);
        this.initReveal(shadowDOM);
    }

    HTML() {
        const platforms = [...new Set(CertificatesComponent.COURSES.map(c => c.platform))];
        const count = p => CertificatesComponent.COURSES.filter(c => c.platform === p).length;
        const tabs = [`<button class="cert__filter-btn active" type="button" data-filter="all" aria-pressed="true">All · ${CertificatesComponent.COURSES.length}</button>`]
            .concat(platforms.map(p => `<button class="cert__filter-btn" type="button" data-filter="${p}" aria-pressed="false">${p} · ${count(p)}</button>`));
        const cards = CertificatesComponent.COURSES.map(c => `
            <article class="cert-card" data-platform="${c.platform}">
              <div class="cert-card__cover"><img src="${c.cover}" alt="${c.title}" loading="lazy"></div>
              <h4 class="cert-card__title">${c.title}</h4>
              <p class="cert-card__desc">${c.desc}</p>
              <div class="cert-card__tags">${c.tags.map(t => `<span class="cert-card__tag">${t}</span>`).join('')}</div>
              <a class="cert-card__link" href="${c.cert}" target="_blank" rel="noopener noreferrer">View certificate ↗</a>
            </article>`).join('');

        return `
        <!-- ===== CERTIFICATES ===== -->
        <section class="section" id="certificates">
          <div class="container">
            <div class="section__header reveal">
              <span class="section__eyebrow">Education</span>
              <h2 class="section__title">Courses &amp; Certificates</h2>
              <p class="section__subtitle">Courses grouped by learning platform — certificates live in my <a class="cert__repo-link" href="https://github.com/Setznagl/Setznagl" target="_blank" rel="noopener noreferrer">GitHub profile</a>.</p>
            </div>
            <div class="cert__filter" role="group" aria-label="Filter courses by platform">
              ${tabs.join('\n              ')}
            </div>
            <div class="cert__grid" id="certGrid">${cards}</div>
          </div>
        </section>
        `;
    }

    CSS() {
        const styleNode = document.createElement('style');
        styleNode.textContent = `
        .cert__filter {
          display:         flex;
          flex-wrap:       wrap;
          justify-content: center;
          gap:             0.5rem;
          margin-bottom:   2.5rem;
        }
        .cert__filter-btn {
          padding:       0.4375rem 1.125rem;
          border-radius: 999px;
          border:        1px solid var(--border-soft);
          font-size:     0.83rem;
          font-weight:   500;
          color:         var(--text-muted);
          background:    transparent;
          cursor:        pointer;
          transition:    all var(--t);
        }
        .cert__filter-btn:hover  { color: var(--text); border-color: var(--border); }
        .cert__filter-btn.active { background: var(--purple); color: #fff; border-color: var(--purple); }

        .cert__grid {
          display:               grid;
          grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr)); /* ~250px */
          gap:                   1.25rem;
        }

        .cert-card {
          display:          flex;
          flex-direction:   column;
          gap:              0.55rem;
          padding:          0.9rem;
          border:           1px solid var(--border-soft);
          border-radius:    0.75rem;
          background:       var(--bg-soft, rgba(255, 255, 255, 0.02));
          transition:       border-color var(--t), transform var(--t);
        }
        .cert-card:hover { border-color: var(--purple); transform: translateY(-2px); }
        .cert-card.hidden { display: none; }

        .cert-card__cover {
          height:         7.5rem;
          border-radius:  0.5rem;
          background:     rgba(255, 255, 255, 0.03);
          display:        grid;
          place-items:    center;
          overflow:       hidden;
        }
        .cert-card__cover img { max-width: 88%; max-height: 88%; object-fit: contain; }
        .cert-card[data-platform="Udemy"] .cert-card__cover img { width: 100%; height: 7.5rem; max-width: none; max-height: none; object-fit: cover; }

        .cert-card__title { margin: 0; font-size: 0.98rem; color: var(--text); }
        .cert-card__desc  { margin: 0; flex: 1; font-size: 0.82rem; color: var(--text-muted); }
        .cert-card__tags  { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .cert-card__tag {
          font-family:   var(--font-mono), monospace;
          font-size:     0.68rem;
          font-weight:   600;
          color:         var(--purple-light, #b9a7f5);
          border:        1px solid rgba(124, 58, 237, 0.35);
          border-radius: 999px;
          padding:       0.08rem 0.55rem;
        }
        .cert-card__link { font-size: 0.8rem; font-weight: 600; color: var(--purple); text-decoration: none; }
        .cert-card__link:hover { text-decoration: underline; }
        .cert__repo-link { color: var(--purple); }
        `;
        return styleNode;
    }

    bindFilters(shadowDOM) {
        const buttons = shadowDOM.querySelectorAll('.cert__filter-btn');
        const cards = shadowDOM.querySelectorAll('.cert-card');
        buttons.forEach(btn => btn.addEventListener('click', () => {
            buttons.forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
            const filter = btn.dataset.filter;
            cards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.platform !== filter));
        }));
    }
    initReveal(shadowDOM) {
        const targets = [...shadowDOM.querySelectorAll('.reveal')];
        if (!targets.length) return;
        if (!('IntersectionObserver' in window)) {
            targets.forEach(el => el.classList.add('visible'));
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
        targets.forEach(el => observer.observe(el));
    }
}

customElements.define('certificates-component', CertificatesComponent);
