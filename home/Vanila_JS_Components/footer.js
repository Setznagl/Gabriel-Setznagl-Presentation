class FooterComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
        <footer>
            <section id="cont-anchor" class="flexbox_simple_container contact_justify contact_container">
                <div>
                    <p>&#127463&#127479 - Paraná - Londrina</p>
                    <p id="contact-email">comercialgabrielsetznagl@gmail.com</p>
                </div>
                <figure>
                    <a href="mailto:comercialgabrielsetznagl@gmail.com"></a>
                </figure>
            </section>
        </footer>
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

customElements.define("footer-component", FooterComponent);