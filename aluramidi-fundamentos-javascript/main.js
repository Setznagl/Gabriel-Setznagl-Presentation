const ListaDasTeclas = document.querySelectorAll('.tecla'); 

function tocar (SeletorAudio){
    ChecklistSeletorAudio = document.querySelector(SeletorAudio);
    if (ChecklistSeletorAudio === null){console.log('elemento não encontrado')}
    if (ChecklistSeletorAudio != null && ChecklistSeletorAudio.localName === 'audio')
    {ChecklistSeletorAudio.play();}
    else{console.log('elemento não encontrado')}
};
for (contador = 0; contador < ListaDasTeclas.length; contador += 1)
{   const tecla_atual = ListaDasTeclas[contador];
    const ferramentaT = tecla_atual.classList[1];
    const template_string_audio = `#som_${ferramentaT}`;
    tecla_atual.onclick = function () { tocar(template_string_audio) };

    tecla_atual.onkeydown = function (gatilho_tecla) {
        if(gatilho_tecla.code === "Enter" || gatilho_tecla.code === "Space") {
             tecla_atual.classList.add('ativa') }}       
    tecla_atual.onkeyup = function () {tecla_atual.classList.remove('ativa')}
}
