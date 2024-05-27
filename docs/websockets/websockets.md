# Websockets
WebSockets are a protocol that enables real-time bidirectional communication between a client (such as a web browser) and a server over a single, long-lived connection. They are commonly used for various purposes where real-time data exchange is required.

## How to test?

### 1. Create a virtual enviroment 
`python3 -m venv path/to/venv`

### 2. Activate the virtual enviroment
`source path/to/venv/bin/activate`

### 3. Install all the neccesary libraries
`pip install asyncio websockets`

### 4. Run server
`python3 server.py`

### 5. Open client.html in the browser and press ctrl+shift+I
`Open the console tab`

### 6. Press on Start WebSocket button
`The console should display data returned from the server`

