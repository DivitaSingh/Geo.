class Rubber{
    constructor(x,y){
    var options = {
     restitution:0.3,
     friction:5,
     density:1
    }  
     this.body=Bodies.circle(x,y,45);
     this.radius=45;
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
     stroke("green")
     fill("lightgreen")
     circle(0,0,45);
     pop()
 }
 }