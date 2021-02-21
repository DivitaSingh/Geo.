class Sand{
    constructor(x,y){
    var options = {
     restitution:0.3,
     friction:5,
     density:1
    }  
     this.body=Bodies.circle(x,y,8);
     this.radius=8;
     World.add(world,this.body);
    }
    display(){
     var pos=this.body.position
     var angle=this.body.angle
     push()
     translate(pos.x,pos.y)
     rotate(angle)
     ellipseMode(RADIUS)  
     strokeWeight(4)
     stroke("black")
     fill("red")
     circle(0,0,8);
     pop()
 }
 }