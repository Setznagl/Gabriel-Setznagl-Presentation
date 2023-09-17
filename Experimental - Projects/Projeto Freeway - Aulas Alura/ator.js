let hit = false;
let yAtor = 367;
let xAtor = 300;
let pontos = 0;

  function ator(){
    image(imgAtor,xAtor,yAtor,30,30)}

function movator (){
        if (yAtor < 370 && yAtor > 30)  {
        if (keyIsDown(UP_ARROW)){
          yAtor -= 3;}
        if (keyIsDown(DOWN_ARROW)){
          yAtor += 3;}   }else{yAtor = 369}}

function checaimpacto(){
  for(let i = 0; i < imgCr.length ; i+=1){
hit = collideRectCircle(xC[i], yC[i], altC, largC, xAtor, yAtor, 30,30)
  if (hit){hitf()
    }
  }
}

function hitf(){
  yAtor = 367;
}