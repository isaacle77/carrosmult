class Player {
  constructor() {
    this.indice = 0;
    this.nome = null;
    this.posx = 0;
    this.posy = height-100;
  }
 verificarcontagem() {
   database.ref("playerCount").on("value",(data)=>{
     playerCount = data.val();
   })
 }
 atualizarcontagem(qtde) {
   database.ref("/").update({playerCount : qtde});
 }
 adicionar() {
  var indicejogador = "players/player"+this.indice
  if(this.indice==1){
    this.posx = width/2-100
  }
  else{this.posx = width/2 +100}

  database.ref(indicejogador).set({
    name : this.nome,
    positionX : this.posx,
    positionY : this.posy
  })
  
 }
 static obterinfojogadores(){
   database.ref("players").on("value",(dados)=>{
     allplayers = dados.val();
   })
 }
 atualizarinformacoes(){
   database.ref("players/player"+this.indice).update({
     positionX : this.posx,
     positionY : this.posy
   })
 }
}
