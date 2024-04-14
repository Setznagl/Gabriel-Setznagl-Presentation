document.addEventListener('DOMContentLoaded', function() {
        const hover_card_list = document.querySelectorAll('.hover-card');
        const hover_card_effect_list = document.querySelectorAll('.hover-card-effect');

        const hover_card_item_1 = hover_card_list[0]; // Primeiro elemento
        const hover_card_item_2 = hover_card_list[1]; // Segundo elemento
        const hover_card_item_3 = hover_card_list[2]; // Terceiro elemento

        const hover_card_effect_item_1 = hover_card_effect_list[0]; // Primeiro elemento
        const hover_card_effect_item_2 = hover_card_effect_list[1]; // Segundo elemento
        const hover_card_effect_item_3 = hover_card_effect_list[2]; // Terceiro elemento

        var elementoSelecionado;

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
                    hover_effect_close(hover_card_effect_item_1);
                    hover_close(hover_card_item_1);
            });
            hover_card_item_2.addEventListener('mouseout', function() {
                hover_effect_close(hover_card_effect_item_2);
                hover_close(hover_card_item_2);
            });
            hover_card_item_3.addEventListener('mouseout', function() {
                hover_effect_close(hover_card_effect_item_3);
                hover_close(hover_card_item_3);
            });
            //////////////////////////////////////////////////////////////////
   
    
}); 