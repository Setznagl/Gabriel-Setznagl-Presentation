class ExperiencesComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
            <section class="flexbox_container experiences_container">
            <div id="experiences_title" class="flexbox_simple_container">
                <p>Looking for my IT experience?</p>
            </div>
            <div class="flexbox_simple_container centralize_flexbox_vertical_items">
                <experiences_full_card class="flexbox_simple_container centralize_flexbox_vertical_items">
                    <experiences_center_card class="flexbox_simple_container centralize_flexbox_vertical_items">
                        <company-logo id="exp-anchor"><a id="atos_link" href="https://atos.net/en/" target="_blank">
                            </a></company-logo>
                        <position>Service Desk Analyst N1  -   11 months</position>
                    </experiences_center_card>
                        <div id="other-experiences">Other experiences</div>
                        <p id="skills-anchor"></p>
                </experiences_full_card>
                <left-icon-two id="experiences-cv-logo">
                    <a href="/home/Assets/Gabriel Setznagl_2024.pdf" download></a>
                </left-icon-two>
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

customElements.define("experiences-component", ExperiencesComponent );