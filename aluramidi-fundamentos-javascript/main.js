/* Resolução individual 
var teclas_buttons = ['.tecla_pom','.tecla_clap','.tecla_tim','.tecla_puff','.tecla_splash','.tecla_toim','.tecla_psh',
'.tecla_tic','.tecla_tom'];
var sons_buttons = ['#som_pom','#som_clap','#som_tim','#som_puff','#som_splash','#som_toim','#som_psh','#som_tic',
'#som_tom'];
document.querySelector('.tecla_pom').onclick = () => {buttons(0)};
document.querySelector('.tecla_clap').onclick = () => {buttons(1)};
document.querySelector('.tecla_tim').onclick = () => {buttons(2)};
document.querySelector('.tecla_puff').onclick = () => {buttons(3)};
document.querySelector('.tecla_splash').onclick = () => {buttons(4)};
document.querySelector('.tecla_toim').onclick = () => {buttons(5)};
document.querySelector('.tecla_psh').onclick = () => {buttons(6)};
document.querySelector('.tecla_tic').onclick = () => {buttons(7)};
document.querySelector('.tecla_tom').onclick = () => {buttons(8)};
function buttons (x){document.querySelector(sons_buttons[x]).play();}
/* Resolução da Aula */ 
for (ListaDasTeclas = 0; ListaDasTeclas <= ListaDasTeclas.length; ListaDasTeclas+=1){
    return z
}
const ListaDasTeclas = document.querySelectorAll('.tecla'); 
const ListaDosSons = document.querySelectorAll('.som');
function buttons(x) {ListaDosSons[x].play();}
ListaDasTeclas[z].onclick = () => {buttons(z)};