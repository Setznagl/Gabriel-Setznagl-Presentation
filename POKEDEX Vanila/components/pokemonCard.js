class PokemonCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const rootnode = document.createElement("div");
        rootnode.innerText = "sas"
        rootnode.setAttribute = ("class" , "classe__exemplo");
        elementoimagem.src = this.getAttribute("url da imagem")

        return rootnode;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = ``;

        return style; 
    }
}

customElements.define("pokemon-card" , PokemonCard);
