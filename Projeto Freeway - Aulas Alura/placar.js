function mostraponto(){
  text(pontos, width/5, 25)
  textSize(25);fill(color(255,140,0))
}

function contaponto(){
  if(yAtor <= 30){pontos++;yAtor=367;carvel+=0.5}
}
