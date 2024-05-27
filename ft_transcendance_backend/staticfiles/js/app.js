document.addEventListener('DOMContentLoaded', function() {
    loadPage('home');

    let socket;

    function connectWebSocket() {
        socket = new WebSocket('ws://' + window.location.host + '/ws/pong/');

        socket.onopen = function() {
            console.log("WebSocket connection established");
        };

        socket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            const ballPosition = data['ball_position'];
            // Update the ball position in the game
            updateBallPosition(ballPosition);
        };

        socket.onclose = function() {
            console.log("WebSocket connection closed, attempting to reconnect...");
            setTimeout(connectWebSocket, 1000);  // Attempt to reconnect after 1 second
        };

        socket.onerror = function(error) {
            console.error("WebSocket error:", error);
            socket.close();
        };
    }

    function sendBallPosition(position) {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
                'ball_position': position
            }));
        } else {
            console.log("WebSocket is not open: readyState =", socket.readyState);
        }
    }

    // Initialize ball position
    let ballPosition = { x: 100, y: 100 };

    // Update ball position on the screen
    function updateBallPosition(position) {
        ballPosition = position;
        const ballElement = document.getElementById('ball');
        if (ballElement) {
            ballElement.style.left = position.x + 'px';
            ballElement.style.top = position.y + 'px';
        }
    }

    // Handle keyboard events to move the ball
    document.addEventListener('keydown', function(event) {
        const step = 10;
        switch (event.key) {
            case 'ArrowUp':
                ballPosition.y -= step;
                break;
            case 'ArrowDown':
                ballPosition.y += step;
                break;
            case 'ArrowLeft':
                ballPosition.x -= step;
                break;
            case 'ArrowRight':
                ballPosition.x += step;
                break;
            default:
                return;  // Exit this handler for other keys
        }

        // Send the new ball position to the server
        sendBallPosition(ballPosition);

        // Update the local ball position (for this client)
        updateBallPosition(ballPosition);
    });

    // Set initial ball position
    updateBallPosition(ballPosition);

    // Connect WebSocket
    connectWebSocket();
});

function loadPage(page) {
    let content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = `
                <h1>Welcome to the Pong App</h1>
                <div id="ball" style="left: 100px; top: 100px; width: 20px; height: 20px; background-color: red; position: absolute;"></div>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>About the Pong App</h1>
                <p>This is the about page.</p>
            `;
            break;
        default:
            content.innerHTML = `
                <h1>Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            `;
    }
}
