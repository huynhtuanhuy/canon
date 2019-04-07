function Ball(mapWidth, mapHeight,startX,startY,directionX,directionY,speed) {
	this.radius = 10;
	this.minX = this.radius;
	this.minY = this.radius;
	this.maxX = mapWidth + this.radius;
	this.maxY = mapHeight + this.radius;
	this.speedX = directionX * speed;
	this.speedY = directionY * speed;
	this.cx = startX;
	this.cy = startY;
}

Ball.prototype.draw = function(context) {
	context.fillStyle = "#6d6d6d";
	context.beginPath();
	context.arc(this.cx,this.cy,this.radius,0,Math.PI*2,true);
	context.closePath();
	context.fill();
}

Ball.prototype.update = function() {
	if(this.cx <= 0 || this.cx >= this.maxX ||
		this.cy <= 0 || this.cy >= this.maxY)
		return true;
	this.cx += this.speedX;
	this.cy += this.speedY;
	return false;
}