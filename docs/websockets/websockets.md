# Websocket Docs & Live Chat ImplemetationA

## 1. The WebSocket protocol

**WebSocket** is a _protocol_ defined by the RFC 6455 that enables real-time bidirectional communication between a client (such as a web browser) and a server over a single, long-lived connection. This protocol allows both parties to send and receive messages independently at any time, providing a full-duplex communication channel over a single TCP connection.

The term **web socket** can be confusing because it may refer to either the protocol (WebSocket) or the actual network socket used for communication. When we talk about WebSocket (singular), we are referring to the protocol standardized by RFC 6455. When we use "web socket" in a broader sense, it may refer to the underlying TCP socket that facilitates this communication. It is important to distinguish between the WebSocket protocol itself and the general concept of sockets used for network communication.

### Additional Information

- **Full-Duplex vs. Half-Duplex**: Full-duplex communication, as provided by the WebSocket protocol, allows simultaneous bidirectional data transfer, unlike half-duplex communication (e.g., traditional HTTP), which only supports one-way data transfer at a time. It is important to understand that the underlying socket object remains the same. A normal socket from an HTTP server, created with `socket` or `accept`, is technically capable of full-duplex communication in the same way as a socket of a server that supports the WebSocket protocol. The difference lies in the implementation of the software around it. The WebSocket protocol defines the possibility of full-duplex communication, and the implementation in the client and server software enables this by allowing data to be read from and written to the socket simultaneously, without waiting for the entire HTTP response to be sent or the entire HTTP request to be received.

- **Single Connection**: While HTTP/1.1 with Keep-Alive allows a compliant web server to keep a connection open for multiple requests and responses, this is optional and not a strict requirement. In contrast, the WebSocket protocol, as specified in RFC 6455, mandates that the connection be maintained open and alive, providing a continuous, persistent connection. This allows real-time, independent message exchanges between the client and server, enabling low-latency, full-duplex communication. Thus, an HTTP/1.1 compliant web server can implement a persistent connection, whereas a WebSocket compliant web server must support keeping the connection alive.

- **Underlying Sockets**: WebSocket connections use the same TCP sockets as other TCP-based communications. After the initial HTTP handshake that upgrades the connection, the communication continues over this TCP socket. Technically, there is no difference between "web sockets" and regular TCP sockets; the difference lies in how the information is transmitted and parsed. The WebSocket protocol defines a specific framing mechanism and communication pattern for messages, while the underlying TCP socket infrastructure remains the same.

Sure, here’s the expanded paragraph along with the information on how a web server that can't handle the WebSocket protocol should respond:

- **Protocol Layer**: Both WebSocket and HTTP operate at the Application Layer of the OSI model and utilize TCP at the Transport Layer. WebSocket can be seen as an extension to HTTP, starting with an HTTP handshake before transitioning to the WebSocket protocol. This handshake involves the client sending an HTTP request with specific headers indicating the desire to upgrade to a WebSocket connection. These headers include `Upgrade: websocket`, `Connection: Upgrade`, and a `Sec-WebSocket-Key`. If the server supports WebSockets, it responds with a status code `101 Switching Protocols`, along with the `Upgrade: websocket` and `Connection: Upgrade` headers, and a `Sec-WebSocket-Accept` header that includes a hashed key to confirm the upgrade. Once the handshake is successfully completed, the connection is upgraded, and the communication switches to the WebSocket protocol, allowing full-duplex, real-time communication.

If a web server cannot handle the WebSocket protocol, it should respond to the upgrade request with a standard HTTP response indicating that the upgrade is not possible. This is typically done with an HTTP 400 (Bad Request) or 426 (Upgrade Required) status code, along with an appropriate error message in the response body.

Here's a sample response from a server that doesn't support WebSocket:

```
HTTP/1.1 400 Bad Request
Content-Type: text/plain
Content-Length: 35

WebSocket protocol not supported.
```

Or

```
HTTP/1.1 426 Upgrade Required
Upgrade: websocket
Connection: Upgrade
Content-Type: text/plain
Content-Length: 58

This server does not support the WebSocket protocol upgrade.
```

This response informs the client that the requested protocol upgrade to WebSocket cannot be fulfilled.

## 2. Live-chat implementation

1. Client subscribes to an event (global or personal chat)
2. Server stores connected clients and when an event occurs broadcasts a message to them

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

### 6. Press on Start WebSocket button and send a message

`The chat should have a message displayed`
