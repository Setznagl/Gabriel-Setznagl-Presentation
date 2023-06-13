/* variáveis de posicionamento e velocidade dos atores 
B = Bolinha, R1 = Raquete Jogador e R2 = Raquete Adversária */ 
let xB = 300;let yB = 200;
let vxB = 5; let vyB = 5;
let dB = 25; let rB = 12; /*diametro e raio de B*/
let xR1 = 5; let yR1 = 200;
let xR2 = 580;let yR2 = 200;
let vyR = 6;let largR = 15;let altR = 80; /*propriedades raquete*/
let pontosR1 = 0; let pontosR2 = 0;
let misscoef = vyR * 0.45; 
let point_area = largR + 5; 

//sons
let raquetada;let somponto;let trilha;
function preload(){
  raquetada = loadSound("raquetada.mp3") 
  trilha = loadSound("trilha.mp3") 
  somponto = loadSound("ponto.mp3")}
function setup() {
  createCanvas(600, 400);
  trilha.loop()}
function draw() {
  background(0); desenharatores(); moveratores();
  checarimpactoatores(); placar()}

function desenharatores (){
  circle(xB,yB,dB);
  fill(color(152,251,152));rect(xR1,yR1,largR,altR);
  fill(color(255,192,203));rect(xR2,yR2,largR,altR);}
function moveratores (){
  //bolinha
  xB += vxB; yB += vyB;
  
  if (xB <= xR1+largR){vyB *= -1}
  else { if(keyIsDown(UP_ARROW)) {yR1 -= vyR}}
  if(keyIsDown(DOWN_ARROW)){yR1 += vyR}
  
  //raquete oponente
  if(yB > yR2){yR2 += misscoef}else{yR2 -= misscoef}}

function checarimpactoatores (){
  // impacto bolinha com as bordas
  if (xB > width - point_area){pontosR1 += 1; ponto(578)}
  if (xB < 0 + point_area){pontosR2 += 1; ponto(28)}
  if (yB >= height - rB || yB <= 0 + rB){vyB *= -1}
  // impacto raquetes com as bordas
  if (yR1 >= height - altR){yR1 = height - altR}if (yR1 <= 0){yR1 = 0}
  if (yR2 >= height - altR){yR2 = height - altR}if (yR2 <= 0){yR2 = 0}
  
  //impacto bolinha com a raquete 1
  if (yB <= yR1 + altR && yB > yR1){
    if (xB <= xR1 + dB){vxB *= -1; vyB *= -1; raquetada.play()}}
  //impacto bolinha com a raquete 2
  if (yB <= yR2 + altR && yB > yR2){
    if (xB >= xR2 - dB+15){vxB *= -1; vyB *= -1; raquetada.play()}}}    

function placar(){
  fill(color(144,238,144));rect(208,20,40,30);
  fill(color(250,160,122));rect(351,20,40,30);
  textAlign(CENTER); textSize(30); fill(255);
  text(pontosR1, 228, 45) ; text(pontosR2, 371, 45);}
function ponto(x){xB=x ;vxB *= -1; vyB *=-1}

console.log(window.innerWidth);
console.log(window.innerHeight);