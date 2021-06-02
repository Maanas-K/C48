class Turn {

    constructor() {
      this.inputX = createInput("X velocity");
      this.inputY = createInput("Y velocity");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
     
     
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.inputX.hide();
      this.inputY.hide();
     
    }

    show(){
        this.greeting.show();
      this.button.show();
      this.inputX.show();
      this.inputY.show();
    }
  
    display(){
        this.greeting.html("Enter X and Y value")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);


      this.inputX.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.inputY.position(displayWidth/2 - 40 , displayHeight/2 - 100);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      
      this.button.mousePressed(()=>{
        this.inputX.hide();
        this.inputY.hide();
        this.button.hide();
        this.greeting.hide();
        xVel = this.inputX.value();
        yVel = this.inputY.value();
     
       
      });
  
      console.log("oooof")
      
  
    }
  }
  