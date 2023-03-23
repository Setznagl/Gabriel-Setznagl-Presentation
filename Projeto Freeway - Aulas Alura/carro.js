// var construção carro
let altC = 50;
let largC = 40;
let xOrgn = 600;
let carvel = 4;
//var carros
let xC = [600,675,830,790,980,900]
let yC = [40,95,150,205,260,310]

function desenhacarros(){
  for (let i = 0; i < imgCr.length ; i+=1){
    image(imgCr[i],xC[i],yC[i],altC,largC)
  } }

function movcarros(){
  for (let i = 0; i < xC.length; i+=1){
    xC[i] -= carvel; if (xC[i] < -40){xC[i] = xOrgn}}
}