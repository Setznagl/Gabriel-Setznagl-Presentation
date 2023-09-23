console.log("Loading! pré API");

//recebendo largura e altura da tela
$ = document.querySelector.bind(document); 
$$ = document.querySelectorAll.bind(document); 
    let elemento = "#content_id"
    let largura = $(elemento).clientWidth;
    let altura = $(elemento).clientHeight;
console.log(largura,altura);

// Exemplo de requisição de API via FETCH API JS
const offset = 0;
const limit = listaTela(largura , altura);
const pokemonOL = document.getElementById('pokemonList');

function convertPokemonToHTML(pokemonRecebido){
    return `
    <li class="pokemonListItem background__${pokemonRecebido.types[0].type.name}">
            <span class="pokemonListItem__number">${distribuiNumber(pokemonRecebido.id)}</span>
            <span class="pokemonListItem__name">${pokemonRecebido.name}</responseArray[0]v class="pokemonListItem__detailContainer">

        <div class="pokemonListItem__detailContainer">
            <ol class="detailContainer__types">
                <li class="type-proprieties ${pokemonRecebido.types[0].type.name}">${pokemonRecebido.types[0].type.name}</li>
                <li class="type-proprieties ${manipularlistaTipos(pokemonRecebido.types)}">${manipularlistaTipos(pokemonRecebido.types)}</li>
            </ol>

        <!--<img class="pokemonListItem__Image" src="${pokemonRecebido.sprites.other.dream_world.front_default}" alt="${pokemonRecebido.name}"> -->
            <img class="pokemonListItem__Image" src="${pokemonRecebido.sprites.other['official-artwork'].front_default}" alt="${pokemonRecebido.name}"> 

        </div>
    </li>`
}

    pokeAPI.getPokemons( offset , limit ).then((resultsArray = []) => { 
        pokemonOL.innerHTML += resultsArray.map((convertPokemonToHTML)).join('');
    });
    /* 
             const pokemonIterado = resultsArray[i];
            // Iterador de imagens SVG e número dos pokemons
            var indicePokemon = i + 1;
            if (indicePokemon < 10) { pokemonNumber = `#00${indicePokemon}`;} 
            else if (indicePokemon >= 10 && indicePokemon <= 100) {pokemonNumber = `#0${indicePokemon}`;} 
            else {pokemonNumber = `#${indicePokemon}`;}
    */