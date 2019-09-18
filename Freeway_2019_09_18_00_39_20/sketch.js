function setup() {//Preparação
  createCanvas(500, 400);
  trilhaSonora.loop();
}
//Dentro do draw as coisas acontecem
function draw() {//Desenha o jogo
background(imagemDaEstrada);//Amarelo
  //Se os pontosMeus não forem maiores ou 
  //iguais a 10 ou os pontos do oponente
  //não forem maiores ou igual a 10, então
  //JOGA!
  if(!(pontos >= 10 || placar >=10))
    jogo();
  else
    mostraVencedor();
}//draw - desenha

function mostraVencedor(){
  if(placar >= 10){
    fill(232, 60, 146);//Rosa
    rect(300,0,300,400);//Metade direita da tela
     rect(0,0,300,400);//Metade esquerda da tela
    textAlign(CENTER);
    fill(0);//Texto preto
    noStroke();
    textSize(30);
    text("Donut está imparável!",300,200);
  }else{//copia e cola tudo ali de cima!
    fill(255, 247, 251);//Laranja
    rect(0,0,300,400);//Metade esquerda da tela
     rect(300,0,300,400);//Metade direita da tela
    textAlign(CENTER);
    noStroke();
    fill(0);//Texto preto
    textSize(30);
    text("Vaquinha claumira é fera!",300,200);
  }
}

function jogo(){
  mostraAtor();
  movimentaAtor();
  mostraAtor2();
  movimentaAtor2();
  mostraCarro();
  movimentaCarro();
  verificaColisao();
  marcaPontos();
  mostraPlacar();
  verificaColisao2();
}

