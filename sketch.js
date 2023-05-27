var raquete,raquete2,bola,bordas;

var pontuacao1 = 0

var pontuacao = 0

var estadoJogo = "parado"

function setup() {
  createCanvas(400, 400)
  
  
  montarJogo()
  


  
}
  
  
  
function draw(){
  
  background(0)
   drawSprites()
  
  
  
   if(estadoJogo =="parado") {
  
  textSize(25)
  text("pressione space para começar",40,360)   
     
     if(keyDown("space")){
       
        estadoJogo = "play"
     
       bola.velocityX = -5
  
       bola.velocityY = 6
       
     }
    
     
   }
  
   if(estadoJogo =="play") {
  
 
   
  bola.bounceOff(bordas[2]);
   bola.bounceOff(bordas[3]);
  
  
  if(keyDown('w')){
     raquete.velocity.y = -5
  }
 
  
  if(keyDown('s')){
    raquete.velocity.y = 5
  }
  
 raquete.collide(bordas) 
  
  if(keyDown('up')){
  raquete2.velocity.y = -5
  }
  
  if(keyDown('down')){
  raquete2.velocity.y = 5
  }
  
  raquete2.collide(bordas) 
  
  bola.bounceOff(raquete)
  bola.bounceOff(raquete2)
  
strokeWeight(10)
   
     stroke("white")
    line(200,400,200,0)

     
  

  

if(bola.x < 5){
  bola.x = 200
  pontuacao = pontuacao + 1
}
     
     
if(bola.x > 395){
  bola.x = 200
  pontuacao1 = pontuacao1 + 1
}
    
     
}
  
  textSize(130)
  text(""+pontuacao,230,100)
  
  
  textSize(130)
  text(""+pontuacao1,70,100)
  
}


function montarJogo(){
  
  

  
    bordas = createEdgeSprites()
  
  
 raquete = createSprite(10,190,10,120)
  
 raquete2 = createSprite(390,190,10,120) 
 
 bola = createSprite(200,200,15,15)
    
}