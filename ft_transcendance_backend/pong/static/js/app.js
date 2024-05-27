document.addEventListener('DOMContentLoaded', function() {
    loadPage('home');  // Load the default page on initial load

    // Set up WebSocket connection
    const socket = new WebSocket('ws://' + window.location.host + '/ws/pong/');

    socket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        const ballPosition = data['ball_position'];
        // Update the ball position in the game
        console.log('Ball position:', ballPosition);
    };

    function sendBallPosition(position) {
        socket.send(JSON.stringify({
            'ball_position': position
        }));
    }

    // Example: Sending the ball position
    // sendBallPosition({ x: 50, y: 100 });
});

function loadPage(page) {
    let content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = `
                <h1>Welcome to the Pong App</h1>
                <p>This is the home page.</p>
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
