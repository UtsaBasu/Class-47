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
      }
  
    }
  
    play(){
      form.hide();
  
      player.getRank();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
       background("pink");
       
        //var display_position = 100;
    
        //index of the array
        var index = 0;
  
        //x and y position of the cars
       
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
          var y =200
          y=y+20
  
          //position the cars a little away from each other in x direction
         
          //use data form the database to display the cars in y direction
          
         if(player.score>=50){
            fill("green");

         }
  
         else
            fill("red");
         text(allPlayers[plr].name+":"+allPlayers[plr].score,displayWidth/2-100,y)

         
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }  
  
      }
  
      
      if(player.score>=50){
        gameState=2;
        player.rank++;
        Player.updateRank(player.rank);
      }
  
      drawSprites();
    }
   /* end(){
      console.log("game over");
      console.log(player.rank);
      if(allPlayers !== undefined){
        background("yellow");
         //var display_position = 100;
         //index of the array
         var index = 0;
         //x and y position of the cars
        var y=200;
   
         for(var plr in allPlayers){
           //add 1 to the index for every loop
           index = index + 1 ;
   
           //position the cars a little away from each other in x direction
   
           y=y+50;
          
           textSize(15);
           text(allPlayers[plr].name + ": " + player.rank, 120,y)
         }
    }
    }
  }*/
}
  