class Mango {
    constructor(x,y,r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }

    display() {
        var mangopos=this.body.position;		
        var angle = this.body.angle;
			push();
            translate(mangopos.x, mangopos.y);
            rotate(angle);
            rotate(this.body.angle);
            ellipseMode(RADIUS);
			imageMode(CENTER);
			image(this.image,300,0,this.r,this.r);
			pop();
    }
}