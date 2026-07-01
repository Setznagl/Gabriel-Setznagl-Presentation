// noinspection JSUnusedGlobalSymbols,DuplicatedCode
class ExampleComponent extends HTMLElement {
    constructor() {
        super();

        const shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.innerHTML = this.HTML();
        shadowDOM.appendChild(this.CSS());

        const base_CSS_patterns = document.createElement('link');
            let path = ""; //insert the base CSS path here
            base_CSS_patterns.setAttribute('rel', 'stylesheet');
            base_CSS_patterns.setAttribute('href', path);
            shadowDOM.appendChild(base_CSS_patterns);
    }

    HTML() {
        // noinspection HtmlUnknownAnchorTarget
        return  ``;

    }
    
    CSS() {
        const styleNode = document.createElement('style');
        styleNode.textContent = ``;
        
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

customElements.define('example-component', ExampleComponent);