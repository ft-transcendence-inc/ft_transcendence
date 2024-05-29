import {Player} from "./Player.js"
import {Ball} from "./Ball.js"

export var player;
var ball;
var player2;

export function startGame()
{
	gameCanvas.start();
	player = new Player(30, 30, "red", 10, 120);
	player2 = new Player(30, 30, "blue", 600, 120);
	ball = new Ball(20, 20, "green", 100, 120);
}

export var gameCanvas = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 700;
		this.canvas.height = 270;
		this.key = 0;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20); // 50 fps
		window.addEventListener('keydown', function (e) {
			gameCanvas.key = e.keyCode;
		}),
		window.addEventListener('keyup', function (e) {
			gameCanvas.key = 0;
		})
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
}

function checkCollision()
{
	if (player.x + 30 > ball.x && player.x < ball.x + 10 && player.y + 20 > ball.y && player.y < ball.y + 10)
	{
		console.log("Collision detected");
		ball.speedX = -ball.speedX;
	}
	else if (player2.x + 10 > ball.x && player2.x < ball.x + 10 && player2.y + 20 > ball.y && player2.y < ball.y + 10)
	{
		console.log("Collision detected");
		ball.speedX = -ball.speedX;
	}
}

export function updateGameArea()
{
	gameCanvas.clear();
	player.update();
	player2.update();
	ball.update();
	checkCollision();
}