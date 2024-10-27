class IntroductionComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
            <introduction>
                <div id="introduction_name">Gabriel Setznagl</div>
                <div id="introduction_title">Full-Stack Developer</div>
                <a href="cont-anchor">
                    <div id="introduction_arrow"></div>
                </a>
            </introduction>
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

customElements.define("introduction-component", IntroductionComponent );