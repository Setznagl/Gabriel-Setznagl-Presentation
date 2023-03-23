function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(imgEstrada);
  desenhacarros();
  ator();
  movcarros();
  movator();
  checaimpacto();
  mostraponto();
  contaponto();
}
