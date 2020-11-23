class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);

		this.image = loadImage("Plucking Mangoes/stone.png");

	}
	display()
	{
			
			var stonepos=this.body.position;		

			push();
			translate(stonepos.x, stonepos.y);
			ellipseMode(RADIUS);
			imageMode(CENTER);
			image(this.image,0,10,60,60);
			pop();
			
	}

}