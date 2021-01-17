class Plinko {
    constructor(x,y,r){
        var options = {
         isStatic : true
        }
        this.x = x ;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.angle ;
        push();
        translate(pos.x , pos.y)
        rotate(angle)
        ellipseMode(CENTER)
        fill(random(0,255),random(0,255),random(0,255))
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
}