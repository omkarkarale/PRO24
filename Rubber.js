class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'restitution' : 1,
		'friction' : 10,
		'density' : 0.1
	}		
	this.x=x;
	this.y=y;
	this.r=r
	this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
	World.add(world, this.body);

	}
	display()
	{
		var rubberpos=this.body.position;		
		push()
		translate(rubberpos.x, rubberpos.y);
		// rectMode(CENTER)
		strokeWeight(4);
		stroke("black");
		fill("darkblue");
		// console.log(this.x,this.y,(this.r-20)/2)
		//draw the ellipse here to display the rubber ball
		ellipseMode(RADIUS);
		ellipse(0,0,this.r,this.r);
		pop()
	}

}