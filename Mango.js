class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("sprites/mango.png")
      this.body = Bodies.rectangle(x,y,50,50,options);
     this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(48,22,8);
      image(this.image , pos.x , pos.y , 50 , 50);
    }
  };