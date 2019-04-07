function Brick(startX, startY, brickHeight, color) {
	this.cx = startX;
	this.cy = startY;
	this.color = color;
	this.brickHeight = brickHeight;
	this.brickWidth = 20;
}

Brick.prototype.draw = function(context) {
	context.fillStyle = this.color;
	context.beginPath();
	context.rect(this.cx,this.cy,this.brickWidth,this.brickHeight);
	context.closePath();
	context.fill();
}