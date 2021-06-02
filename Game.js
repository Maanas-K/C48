class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

      turnForm = new Turn()
      
    }

    car1 = createSprite(100,200,100,100);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200,100,100);
    car2.addImage("car2",car2_img);
    /*car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);*/
    cars = [car1, car2]
      //, car3, car4];
  }

  play(){
    form.hide();

    
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      if(keyDown("w")){
        cars[player.index - 1].velocityX = 0
        cars[player.index - 1].velocityY = -20


      }
      if(keyDown("a")){
        cars[player.index - 1].velocityX = -20
        cars[player.index - 1].velocityY = 0


      }
      if(keyDown("s")){
        cars[player.index - 1].velocityX = 0
        cars[player.index - 1].velocityY = 20


      }
      if(keyDown("d")){
        cars[player.index - 1].velocityX = 20
        cars[player.index - 1].velocityY = 0


      }

      for(var v = 0; v<playerCount; v++){

        if(cars[v].velocityX > 0){
          cars[v].velocityX-=0.5;
        }
        if(cars[v].velocityY > 0){
          cars[v].velocityY-=0.5;
        }
        if(cars[v].velocityX <0){
          cars[v].velocityX+=0.5;
        }
        if(cars[v].velocityY < 0){
          cars[v].velocityY+=0.5;
        }
      }

      player.distancex = cars[player.index - 1].x
      player.distancey = cars[player.index - 1].y
      var index=0;
      player.update();
      
      for(var plr in allPlayers){
           index=allPlayers[plr].playerIndex;
        
       if(player.index!= index) {
          cars[index - 1].x = allPlayers[plr].distancex ;
          cars[index - 1].y = allPlayers[plr].distancey ;
          
        }
        
        
      }

      for(var p = 0; p<playerCount; p++){

        for(var s = 0;s<playerCount;s++){
            if(p!=s && cars[s].isTouching(cars[p])){

              cars[p].velocityX = cars[p].velocityX*-1
              cars[p].velocityY = cars[p].velocityY*-1

              //cars[p].bounceOff(cars[s]);

              console.log("I am working")
            }
           // cars[p].bounceOff(cars[s]);

          
        }

        for(var e = 0; e<4; e++){
          if(cars[p].isTouching(edges[e])||cars[p].isTouching(edges[e])||cars[p].isTouching(edges[e])||cars[p].isTouching(edges[e])){

            console.log("hello")
            
            cars[player.index - 1].velocityX = cars[player.index - 1].velocityX*-1
            cars[player.index - 1].velocityY = cars[player.index - 1].velocityY*-1
    
    
          }
        }
        
      }
      
     /* if(cars[1].isTouching(edges[0])||cars[1].isTouching(edges[1])||cars[1].isTouching(edges[2])||cars[1].isTouching(edges[3])){

        console.log("hello 2")
        //cars[1].bounceOff(edges[0])

        cars[player.index - 1].velocityY = cars[player.index - 1].velocityY*-1
        cars[player.index - 1].velocityX = cars[player.index - 1].velocityX*-1
      }
      */
    }

        
    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distancey +=10
      player.update();
    }

    if(player.distancey > 3860){
      gameState = 2;
    }*/
   
    drawSprites();

    console.log(frameCount)

    
      if(cars[0].velocityX === 0&& cars[0].velocityY === 0 && cars[1].velocityX === 0&& cars[1].velocityY === 0 ){
        turnForm.display();
  
       // && frameCount%500 < 400
      }else{
        turnFormn.hide();
      }
    
   
  }

  end(){
    console.log("Game Ended");
  }
}
