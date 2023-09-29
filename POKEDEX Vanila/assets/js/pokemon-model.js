// Aproveitado o modelo pela API para converter o pokemon pokeAPI para o modelo PokemonClass
class PokemonClass {
    constructor(number, name, type, types, photo) {
      this.number = number;
      this.name = name;
      this.type = type;
      this.types = types;
      this.photo = photo;
    }
  }

//recebendo largura e altura da tela
$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document); 
let elemento = "#content_id" ; 
let largura = $(elemento).clientWidth; 
let altura = $(elemento).clientHeight;
console.log(largura,altura); 
var offset_inicial = 0;


function distribuiNumber (id){
  if (id < 10) { pokemonNumber = `#00${id}`;} 
  else if (id >= 10 && id <= 100) {pokemonNumber = `#0${id}`;} 
  else {pokemonNumber = `#${id}`;}
  return pokemonNumber; }

function manipularlistaTipos (types){
 switch (types.length) {
     case 1:
         return "vazio"
     case 2:
         return types[1].type.name; }}   

function listaTela(largura , altura){
 prop = largura / altura;
 console.log(prop);
 if (prop <= 0.9){
     return 4;}
 else if (prop > 0.9 && prop <= 2.8 && largura >= 576){
     return 9;}
 else if (prop > 2.8 && largura > 900){
     return 16;}
 else return 6}
