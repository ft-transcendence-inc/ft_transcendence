import asyncio
import websockets

# echo server that sends back the received message
async def echo(websocket, path):
	async for message in websocket:
		print("Received:", message)
		await websocket.send("Echo: " + message)
		# sleep for 1 second and send another message in a loop
		for i in range(5):
			await asyncio.sleep(1)
			await websocket.send("Echo: " + message + " " + str(i))

# listen on localhost:8765
start_server = websockets.serve(echo, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()