class Form{
    constructor(){
        this.input=createInput("name");
        this.button = createButton("play")
        this.greet = createElement('h2');
        this.ttl = createElement('h2');
        this.reset = createButton('reset')
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.ttl.hide();
        this.greet.hide();
    }
    display(){
        this.ttl.html("my own game");
        this.ttl.position(displayWidth/2-100,100)

        this.button.position(displayWidth/2-100,500)
        this.input.position(displayWidth/2-100,300)
        this.reset.position(displayWidth-100,50)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide(); 
            player.name = this.input.value();
            playerCount++
            player.index=playerCount
            player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateRank(0);
      
    })
  }

        

    }
