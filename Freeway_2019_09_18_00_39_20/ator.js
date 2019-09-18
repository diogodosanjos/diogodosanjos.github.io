//ator.js
//Ator
let yAtor = 366;
let xAtor = 100;

let colidiu = false;
let placar = 0;

let yAtor2 = 366;
let xAtor2 = 350;
let pontos = 0;


function marcaPontos(){
  
  if(yAtor <15){//Marca ponto!
     pontos +=1;
     voltaAtorParaPosicaoInicial();
     somPonto.play();
    }

  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(pontos, 150, 30);
}

function mostraPlacar(){
  
  if(yAtor2 <15){//Marca ponto!
     placar +=1;
     voltaAtor2ParaPosicaoInicial();
     somPonto.play();
    }

  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(placar, 350, 30);
}


function verificaColisao(){
//collideRectCircle(rx, ry, rComprimento, rAltura, cx, cy, diameter)//r = retângulo
  for(let i=0; i < imagensCarros.length; i++){
    //Pergunta se colidiu, recebe resposta true ou false
    
   colidiu = collideRectCircle(xCarros[i],yCarros[i],
comprimentoCarros[i],altura, xAtor, yAtor,15);
    
    if(colidiu){
      console.log("Colidiu");
      voltaAtorParaPosicaoInicial();
      somColidiu.play();
      
      if(pontos > 0)//Só tira ponto se for maior que zero
         pontos -= 1;//Perde ponto
      
    }//Fim do if
  }//Fim do for
}//Fim do verificaColisao


function verificaColisao2(){
//collideRectCircle(rx, ry, rComprimento, rAltura, cx, cy, diameter)//r = retângulo
  for(let i=0; i < imagensCarros.length; i++){
    //Pergunta se colidiu, recebe resposta true ou false
    
   colidiu = collideRectCircle(xCarros[i],yCarros[i],
comprimentoCarros[i],altura, xAtor2, yAtor2,10);
    
    if(colidiu){
      console.log("Colidiu");
      voltaAtor2ParaPosicaoInicial();
      somColidiu.play();
      
      if(placar > 0)//Só tira ponto se for maior que zero
         placar -= 1;//Perde ponto
      
    }//Fim do if
  }//Fim do for
}//Fim do verificaColisao2

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function voltaAtor2ParaPosicaoInicial(){
  yAtor2 = 366;
}

function mostraAtor(){
  image(imagemDoAtor,xAtor, yAtor, 30,30);
}

function mostraAtor2(){
  image(imagemDoAtor2,xAtor2, yAtor2, 30,30);
}

function movimentaAtor(){
  
if(keyIsDown(UP_ARROW)) {
  //Se a seta para cima for pressionada
  //E o yAtor for maior que 5, então sobe.
  if(yAtor > 5)
    yAtor -=4;
}

if(keyIsDown(DOWN_ARROW)){
  if(yAtor < 366)
  yAtor +=3
}
}

function movimentaAtor2(){
  
if(keyIsDown(87)) {
  //Se a seta para cima for pressionada
  //E o yAtor for maior que 5, então sobe.
  if(yAtor2 > 5)
    yAtor2 -=4;
}

if(keyIsDown(83)){
  if(yAtor2 < 366)
  yAtor2 +=3;
}
}