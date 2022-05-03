class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "game title");
    this.greeting = createElement("h2");
  }

  esconderElementos() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
 configurarPosicao() {
   this.input.position(width/2-110,height/2-80);
   this.playButton.position(width/2-90,height/2-20);
   this.titleImg.position(120,170);
   this.greeting.position(width/2-300,height/2-100);
 }
 configuraStilo() {
   this.input.class("customInput");
   this.playButton.class("customButton");
   this.titleImg.class("gameTitle");
   this.greeting.class("greeting");
 }
 display() {
   this.configurarPosicao();
   this.configuraStilo();
   this.enviar();
 }
 enviar() {
   this.playButton.mousePressed(()=>{
     this.input.hide();
     this.playButton.hide();
     var Nome = this.input.value();
     var mensagem = `ola ${Nome}</br>aguarde os outros jogadore`
     this.greeting.html(mensagem);
     playerCount+=1;
     player.nome = this.input.value();
     player.indice = playerCount;
     player.adicionar();
     player.atualizarcontagem(playerCount);
    });
   
 }

}
