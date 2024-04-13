document.addEventListener('DOMContentLoaded', function() {
        const hover_card_list = document.querySelectorAll('.hover-card');
        var elemento1 = hover_card_list[0]; // Primeiro elemento
        var elemento2 = hover_card_list[1]; // Segundo elemento

        function teste() {
            console.log(elemento1);
            elemento1.style.cssText =
            `
            background-color: red;
            `

        }

        teste();
}); 