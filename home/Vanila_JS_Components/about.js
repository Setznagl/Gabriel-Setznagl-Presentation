class AboutComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
            <div id="aboutMe_Title-text" class="flexbox_simple_container"><h1>About Me</h1></div>
            <section class="flexbox_container about-me__container">
                    <div id="ab_me-1" class="aboutMe-items">
                        <a href="https://www.linkedin.com/in/gabriel-setznagl/" target="_blank"><figure id="linkedin-icon"></figure></a>
                        <a id="exp-anchor" href="https://github.com/Setznagl" target="_blank"><figure id="github-icon"></figure></a>
                    </div>
                    <div class="aboutMe-items">
                        <figure id="ab_me-2"></figure>
                    </div>
                    <div id="ab_me-3" class="aboutMe-items">
                        <p>Full stack enthusiastic</p>
                        <p>Essentialist</p>
                        <p>Consultive Salesperson</p>
                    </div>
            </section>
            `
        const css1 = document.createElement("link");
        css1.rel = "stylesheet";
        css1.href = "/home/Styles/Chore/reset.css";
        shadow.appendChild(css1);
    
        const css2 = document.createElement("link");
        css2.rel = "stylesheet";
        css2.href = "/home/Styles/Chore/style.css";
        shadow.appendChild(css2);
    }
}

customElements.define("about-component", AboutComponent);