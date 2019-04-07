function Map(mapWidth, mapHeight) {
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.brickNumber = 7;
	this.brickStartX = 550;
	this.bricks = [];

	for(let i = 0; i < this.brickNumber; i++) {
		let brickHeight = this.mapHeight/this.brickNumber;
		let color = "blue";
		if(i%2 == 0) {
			color = "yellow";
		}
		let brick = new Brick(this.brickStartX, i*brickHeight, brickHeight, color);
		this.bricks.push(brick);
	}
}

Map.prototype.draw = function(context) {
	for (let i=0; i < this.bricks.length; i++) {
		this.bricks[i].draw(context);
	}
};

Map.prototype.collide = function(x,y) {
	if (!this.bricks || this.bricks.length === 0) return false;
	for (let i = 0; i < this.bricks.length; i++) {
		let brick = this.bricks[i];
		if(x >= brick.cx &&
			y >= brick.cy && y <= brick.cy + brick.brickHeight) {
			this.bricks = this.bricks.filter((item, index) => index !== i);
			return true;
		}
	}
	return false;
};