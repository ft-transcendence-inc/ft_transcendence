import asyncio

import websockets

# empty set of objects
connected_clients = set()

async def handler(websocket):
	connected_clients.add(websocket)
	try:
		# Keep the connection open and handle incoming messages if needed
		async for message in websocket:
			await broadcaster(message)
	except websockets.exceptions.ConnectionClosed as e:
		print(f"Client disconnected: {e}")
	finally:
		# Remove the client from the set of connected clients
		connected_clients.remove(websocket)

async def broadcaster(message):
		tasks = [asyncio.create_task(client.send(message)) for client in connected_clients]
		# Wait for all tasks to complete
		await asyncio.gather(*tasks)
            

# async def broadcaster():
# 	while True:
# 		if connected_clients:
# 			message = "Hello!"
# 			tasks = [asyncio.create_task(client.send(message)) for client in connected_clients]
# 			# Wait for all tasks to complete
# 			await asyncio.gather(*tasks)
# 		await asyncio.sleep(5)
            

async def main():
    async with websockets.serve(handler, "", 8001):
        await asyncio.Future()
		# await broadcaster()


if __name__ == "__main__":
    asyncio.run(main())