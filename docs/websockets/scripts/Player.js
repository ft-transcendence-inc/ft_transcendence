import { socket } from "./chat.js";
import { gameCanvas } from "./game.js";
export class Player
{
	constructor(width, height, color, x, y)
	{
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speedX = 0;
		this.speedY = 0;
		this.color = color;
		this.ctx = gameCanvas.context;
		this.ctx.fillStyle = color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	update(){
		this.ctx = gameCanvas.context;
		this.ctx.fillStyle = this.color;
		this.move();
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		
		// if (this.speedY != 0 && socket.readyState === WebSocket.OPEN)
		// 	this.send_data();
	}
	move()
	{
		this.speedX = 0;
		this.speedY = 0;
		if (gameCanvas.key != 0 && (gameCanvas.key == 38 || gameCanvas.key == 87))
			this.speedY = -2;
		else if (gameCanvas.key != 0 && (gameCanvas.key == 40 || gameCanvas.key == 83))
			this.speedY = 2;
		this.y += this.speedY;
	}
	send_data()
	{
		const jsonMessage = {
			type: "game",
			user: username,
			x: this.x,
			y: this.y,
			time: new Date().toISOString()
		};

		const jsonString = JSON.stringify(jsonMessage);
		socket.send(jsonString);
	}
}