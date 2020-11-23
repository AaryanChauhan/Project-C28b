class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=200;
		this.treeHeight=100;
		this.treeThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.wallThickness, this.treeHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

		this.image = loadImage("Plucking Mangoes/tree.png");

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push();
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			stroke(255);
			rotate(this.angle);
			rect(0,0,this.wallThickness, this.treeHeight);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			stroke(255);
			angleMode(RADIANS)
			fill(255);
			rotate(-1*this.angle);
			rect(0,0,this.wallThickness, this.treeHeight);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			stroke(255);
			angleMode(RADIANS)
			fill(255);
			rotate(-1*this.angle);
			rect(0,0,this.wallThickness, this.treeHeight);
			pop();

			push();
			imageMode(CENTER);
			image(this.image,1000,300,500,550);
			pop();
			
	}

}