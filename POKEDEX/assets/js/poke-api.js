const pokeAPI = {};

pokeAPI.getPokemonDetail = (pokemon) => {return fetch(pokemon.url).then((response) => response.json())}

pokeAPI.getPokemons = (offset = 0 , limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        // o primeiro .then recebe a promisse que veio via fetch e o segundo .then recebe o retorno do primeiro já em objeto JSON e o terceiro pega somente o array dos resultados .results
        .then((response) => response.json())
        .then((responseToJSON) => responseToJSON.results) // results é o nome do array contendo os pokemons 
        .then((responseResults)=> responseResults.map(pokeAPI.getPokemonDetail)) //usa a função map nos indices para listar um array dos detalhes dos pokemons
        .then((detailResponses)=> Promise.all(detailResponses))
        .then((returnResponses)=> returnResponses)
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        .catch((error) =>console.error(error))
        .finally(() => { console.log("Loading! response received")});
};


        /*comando incompleto, faz a requisição em JSON, porém não armazena em um array e portanto não consegue manipular o conteúdo
        const arrayTipos = pokeAPI.getPokemonTypes(pokemonRecebido.url); 
        console.log(arrayTipos);*/
        ///////////////////////////////////////////////////////////////////////////////////////////////////

function distribuiNumber (id){
     if (id < 10) { pokemonNumber = `#00${id}`;} 
     else if (id >= 10 && id <= 100) {pokemonNumber = `#0${id}`;} 
     else {pokemonNumber = `#${id}`;}
     return pokemonNumber;
    }

function manipularlistaTipos (types){
    switch (types.length) {
        case 1:
            return "vazio"
        case 2:
            return types[1].type.name; 
    }
}   

