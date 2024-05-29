import { player } from "./game.js";
import { startGame } from "./game.js";

// start WebSocket connection when button is clicked
document.getElementById("startButton").addEventListener("click", startWebSocket);
document.getElementById("message").addEventListener("click", sendMessage);

export let socket;

function updateChatData(data)
{
	const displayElement = document.getElementById('display');
	
	displayElement.value += `${data.user}: ${data.data} (${data.timestamp})\n`;
}

function updatePlayerPosition(data)
{
	player.x = data.x;
	player.y = data.y;
}

// start WebSocket connection
function startWebSocket()
{
	startGame();
	// Create WebSocket connection
	socket = new WebSocket("ws://localhost:8001");

	// when the connection is open
	socket.onopen = function(e)
	{
		console.log("[open] Connection established");
	};
	
	// receive messages from the server
	socket.onmessage = function(event)
	{
		const data = JSON.parse(event.data)

		if (data.type == "message")
			updateChatData(data);
		else
			updatePlayerPosition(data);
	};
	
	// close the connection
	socket.onclose = function(event)
	{
		if (event.wasClean)
			console.log(`[close] Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
		else
			console.log('[close] Connection died');
	};

	// in case of an error
	socket.onerror = function(error)
	{
		console.error(`[error] ${error.message}`);
	};
}

function sendMessage()
{
	let message = document.getElementById("textMessage").value;
	let username = document.getElementById("username").value;
	
	// if websockets exists and is opened
	if (socket && socket.readyState === WebSocket.OPEN)
	{
		// Create a JSON object
		const jsonMessage = {
			type: "message",
			user: username,
			data: message,
			timestamp: new Date().toISOString()
		};
		
		// Convert the JSON object to a string
		const jsonString = JSON.stringify(jsonMessage);

		// Send the JSON string over the WebSocket connection
		socket.send(jsonString);
		
		// clear input
		document.getElementById("textMessage").value = "";
	}
}
