class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction':99,
          'density':99
      }
      this.body = Bodies.rectangle(x, y, 150, 150, options);
      this.width = 150;
      this.height = 150;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("lightblue");
      rect(0, 0, 150,150);
      pop();
    }
  };
  