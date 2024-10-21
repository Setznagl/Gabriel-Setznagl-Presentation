class ProjectsComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
            <section class="flexbox_simple_container projects_container">
                <div id="projects_title" class="flexbox_simple_container">
                    Projects
                </div>
            <projects-full-card class="flexbox_simple_container">

                <projects-card>
                    <div id="hover-bg-1" class="hover-card">
                        <a href="https://pokedex-dio-santander-bootcamp.vercel.app/" target="_blank"></a>
                    </div>
                    <div class="hover-card-effect"></div>
                </projects-card>

                <projects-card>
                    <div id="hover-bg-2" class="hover-card">
                        <a></a>
                    </div>
                    <div class="hover-card-effect"></div>
                </projects-card>

                <projects-card>
                   <div id="hover-bg-3" class="hover-card">
                        <a></a>
                   </div>
                   <div class="hover-card-effect"></div>
                </projects-card>
                
            </projects_full_card>
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

        const hover_card_list = shadow.querySelectorAll('.hover-card');
        const hover_card_effect_list = shadow.querySelectorAll('.hover-card-effect');

        const hover_card_item_1 = hover_card_list[0]; // Primeiro elemento
        const hover_card_item_2 = hover_card_list[1]; // Segundo elemento
        const hover_card_item_3 = hover_card_list[2]; // Terceiro elemento

        const hover_card_effect_item_1 = hover_card_effect_list[0]; // Primeiro elemento
        const hover_card_effect_item_2 = hover_card_effect_list[1]; // Segundo elemento
        const hover_card_effect_item_3 = hover_card_effect_list[2]; // Terceiro elemento

        var elementoSelecionado;
        //// Função para detectar se a tela é mobile para travar o mouseover e previnir bugs ////
        var dispositivoMobile = false;
        function mobileDetector(){if (/Mobi/.test(navigator.userAgent)) dispositivoMobile = true;}
        console.log("Dispositivo Mobile " + dispositivoMobile);
        mobileDetector();
        /////////////////////////////////////////////////////////////////////////////////////////

        function hover_effect_open(elemento){
            elemento.style.cssText = 
                `
                animation-name: hover-card-effect-animation__on;
                animation-duration: 0.8s;
                animation-fill-mode: forwards;
                `
        };

        function hover_effect_close(elemento){
            elementoSelecionado = 0;
            elemento.style.cssText = 
                `
                background-color: var(--secondary-color-04);
                animation-name: hover-card-effect-animation__off;
                animation-duration: 0.8s;
                animation-fill-mode: forwards;
                `
        };

        function hover_open(elemento){
            elemento.style.cssText = 
                `
                animation-name: hover-card-animation__on;
                animation-duration: 0.8s;
                animation-fill-mode: forwards;
                `
        };
    
        function hover_close(elemento){
            elementoSelecionado = 0;
            elemento.style.cssText = 
                `
                animation-name: hover-card-animation__off;
                animation-duration: 0.8s;
                animation-fill-mode: forwards;
                `
        }; 

            /*             Hover Card Effect mouseover functions             */
            hover_card_effect_item_1.addEventListener('mouseover', function() {
                elementoSelecionado = hover_card_effect_item_1;
                hover_effect_open(elementoSelecionado);
                hover_open(hover_card_item_1);
            });
            hover_card_effect_item_2.addEventListener('mouseover', function() {
                elementoSelecionado = hover_card_effect_item_2;
                hover_effect_open(elementoSelecionado);
                hover_open(hover_card_item_2);
            });
            hover_card_effect_item_3.addEventListener('mouseover', function() {
                elementoSelecionado = hover_card_effect_item_3;
                hover_effect_open(elementoSelecionado);
                hover_open(hover_card_item_3);
            });
            ///////////////////////////////////////////////////////////////////
            /*             Hover Card Effect mouseout functions             */
            hover_card_item_1.addEventListener('mouseout', function() {
                    mobileDetector();
                    console.log("Dispositivo Mobile " + dispositivoMobile + " / Origem hover_card_1 ");
                if(dispositivoMobile == false)
                {
                    hover_effect_close(hover_card_effect_item_1);
                    hover_close(hover_card_item_1);
                }
            });
            hover_card_item_2.addEventListener('mouseout', function() {
                    mobileDetector();
                    console.log("Dispositivo Mobile " + dispositivoMobile + " / Origem hover_card_2 ");
                if(dispositivoMobile == false)
                {
                    hover_effect_close(hover_card_effect_item_2);
                    hover_close(hover_card_item_2);
                }
            });
            hover_card_item_3.addEventListener('mouseout', function() {
                    mobileDetector();
                    console.log("Dispositivo Mobile " + dispositivoMobile + " / Origem hover_card_3 ");
                if(dispositivoMobile == false)
                {
                    hover_effect_close(hover_card_effect_item_3);
                    hover_close(hover_card_item_3);
                }
            }); 
    }
}

customElements.define("projects-component", ProjectsComponent );