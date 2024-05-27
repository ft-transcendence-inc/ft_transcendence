import json
from channels.generic.websocket import WebsocketConsumer

class PongConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        data = json.loads(text_data)
        ball_position = data['ball_position']

        # Broadcast the ball position to all connected clients
        self.send(text_data=json.dumps({
            'ball_position': ball_position
        }))
