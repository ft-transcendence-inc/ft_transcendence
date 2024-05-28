import {Player} from "./Player.js"

export var player;

export function startGame()
{
	gameCanvas.start();
	player = new Player(30, 30, "red", 10, 120);
}

export var gameCanvas = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 480;
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

export function updateGameArea()
{
	gameCanvas.clear();
	player.update();
}