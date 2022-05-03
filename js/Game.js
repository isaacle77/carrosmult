class Game {
  constructor() {}

  start() {
    player = new Player();
  
    form = new Form();
    form.display();
    car1 = createSprite(width/2-100,height-100);
    car2 = createSprite(width/2+100,height-100);
    car1.addImage(carro1);
    car1.scale = 0.07;
    car2.addImage(carro2);
    car2.scale = 0.07;
    cars = [car1,car2]
  }
 verificarestado() {
   database.ref("gameState").on("value",(data)=>{
     gameState = data.val();
   })
 }
 atualizarestado(estado) {
   database.ref("/").update({
     gameState : estado 
   })
 }
 jogar(){
   this.lidarcomelementos();
   Player.obterinfojogadores();
   var indice = 0;
  if(allplayers!=undefined){
    image(pista,0,-height*5,width,height*6);
    for(var i in allplayers){
      indice+=1
      var x = allplayers[i].posx;
      var y = allplayers[i].posy;

      cars[indice-1].x = x;
      cars[indice-1].y = y;
      console.log(cars[indice-1].y);
      if(indice===player.indice){
        fill("red");
        ellipse(x,y,60);
        camera.position.x=cars[indice-1].position.x
        camera.position.y=cars[indice-1].position.y
      }
    }
    this.controledosjogadores();
      
    drawSprites();
  }
  }
 lidarcomelementos(){
  form.esconderElementos();
  form.titleImg.hide();
 }
 controledosjogadores(){
   if(keyIsDown(UP_ARROW)){
   player.posx+=10
   player.atualizarinformacoes();
  }
 }
}
