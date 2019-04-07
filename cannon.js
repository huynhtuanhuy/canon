function Cannon(mapWidth, mapHeight, x, y, ballSpeed){
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.radius = 50;
	this.ballSpeed = ballSpeed;
	this.cx = x;
	this.cy = y;
	this.angle = 0;
	this.balls = [];
	this.cannonHeight = 30;
	this.cannonWidth = this.cannonHeight*3;
}

Cannon.prototype.draw = function(context){
	context.beginPath();
	context.fillStyle = "#6d6d6d";
	context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
	context.closePath();
	context.fill();

	context.save();
	context.translate(this.cx,this.cy);
	context.rotate(this.angle);
	context.beginPath();
	context.fillStyle = "#2b2b2b";
	context.rect(0,-this.cannonHeight/2,this.cannonWidth,this.cannonHeight);
	context.closePath();
	context.fill();
	context.restore();

	context.beginPath();
	context.fillStyle = "#6d6d6d";
	context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
	context.closePath();
	context.fill();

	for(var i=0;i<this.balls.length;i++)
	{
		this.balls[i].draw(context);
	}
}

Cannon.prototype.update = function(map){
	for(var i=0;i<this.balls.length;i++) {
		var item = this.balls[i];
		var x = Math.floor(item.cx);
		var y = Math.floor(item.cy);
		if(item.update() || map.collide(x,y))
		{
			this.balls.splice(i,1);
		}
	}
}

Cannon.prototype.fire = function(targetX, targetY){
	var dx = targetX - this.cx;
	var dy = targetY - this.cy;
	if(this.balls.length >= 1) return;
	var dirX = Math.cos(this.angle);
	var dirY = Math.sin(this.angle);

	var startX = this.cx + this.cannonWidth * dirX;
	var startY = this.cy + this.cannonWidth * dirY;

	var ball = new Ball(this.mapWidth, this.mapHeight, startX, startY, dirX, dirY, this.ballSpeed/250);
	this.balls.push(ball);
}

Cannon.prototype.rotate = function(targetX, targetY){
	var dx = targetX - this.cx;
	var dy = targetY - this.cy;
	this.angle = Math.atan2(dy,dx);
}