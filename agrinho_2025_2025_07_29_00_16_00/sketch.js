let video;

let musica;

function preload() {
  video = createVideo('ezgif-2fc1322b96f67b.mp4'); 
  
 musica = loadSound('musica agro.mp3');
}

function setup() {
  createCanvas(400, 400);
  musica.setVolume(0.5); // volume da sonzera
  musica.loop();         // pra fica tocando o sonzao
  video.loop();
  video.volume(0);
  video.hide();
}

let xJogador = [0, 0, 0, 0, 0];
let yJogador = [75, 150, 225, 300, 375];
let jogador = ["🧔🏻‍♂️", "🍊", "☕", "🥕", "🌽"];
let teclas = ["a", "s", "d", "f", "g"];
let quantidade = jogador.length;

function draw()  {
  image(video, 0, 0, width, height); // vídeo no fundo
  // e o jogo rolando por cima
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    
  } else {
    fill(129, 82, 53, 200); // cor do bagui
    rect(0, 0, width, height);
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("#4CAF50");
  rect(350, 0, 10, 400);
  fill("#FFEB3B");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}
