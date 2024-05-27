document.addEventListener('DOMContentLoaded', function() {
    loadPage('home');  // Load the default page on initial load
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
