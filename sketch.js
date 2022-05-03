var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var carro1,carro2;
var cars;
var pista;
var car1,car2;
var allplayers;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  carro1 = loadImage("./assets/car1.png");
  carro2 = loadImage("./assets/car2.png");
  pista = loadImage("./assets/PISTA.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.verificarestado();
  game.start();
  player.verificarcontagem();

}

function draw() {
  background(backgroundImage);
if(playerCount == 2){
  game.atualizarestado(1);
}

if(gameState == 1){
  game.jogar();
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
