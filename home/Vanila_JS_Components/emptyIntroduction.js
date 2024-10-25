class EmptyIntroductionComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
            <introduction id="empty-introduction">
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

customElements.define("empty-introduction-component", EmptyIntroductionComponent );